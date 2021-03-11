import { AuthService } from './auth.service';
import { Resolver, Mutation, Query, Context, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { Roles } from './roles.decorator';
import { AuthPayload } from './auth-payload.decorator';
import { AuthTokenPayload } from './token.model';
import { GraphQLContext } from './graphql.utils';
import { AuthLoginDto, AuthLoginResponseDto } from '@/graphql.types';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '@/errors';
import { PrismaService } from '@/prisma/prisma.service';

@Resolver('Auth')
@UseGuards(AuthGuard)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Query('loggedIn')
  @Roles('user', 'unauthenticated')
  public async loggedIn(
    @AuthPayload() payload?: AuthTokenPayload,
  ): Promise<boolean> {
    return !!payload;
  }

  @Mutation('logout')
  @Roles('user')
  public async logout(@Context() context: GraphQLContext): Promise<boolean> {
    await this.authService.logout(
      context.req.headers.authorization.split(' ')[1],
    );

    return true;
  }

  @Mutation('login')
  @Roles('unauthenticated')
  public async login(
    @Args('dto') dto: AuthLoginDto,
  ): Promise<AuthLoginResponseDto> {
    const token = dto.token;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload = jwt.decode(token) as { [key: string]: any };

    const id = payload.id;
    const user: Record<string, string> = {};
    /*const user = await this.prisma.user.findOne({
      where: {
        id,
      },
    });*/

    if (!user) {
      throw new UnauthorizedError(`Token expire or user not exist`);
    }
    const accessToken = this.authService.createToken(
      {
        id: user.id,
        type: 'user',
      },
      {
        expiresIn: '7d',
      },
    );

    return {
      type: 'user',
      id: user.id,
      accessToken,
    };
  }
}
