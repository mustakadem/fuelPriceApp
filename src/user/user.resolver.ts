import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Roles } from '@/auth/roles.decorator';
import { User } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from '@/graphql.types';
import { BaseError } from '@/errors';

@Resolver('User')
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * QUERIES
   */

  @Query('users')
  @Roles('admin')
  public async users(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  @Query('user')
  @Roles('admin')
  public async user(@Args('id') id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new BaseError('User not found!');
    }

    return user;
  }

  /**
   * Mutations
   */

  @Mutation('createUser')
  @Roles('admin')
  public async createUser(@Args('dto') dto: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data: dto });
  }

  @Mutation('updateUser')
  @Roles('admin')
  public async updateUser(
    @Args('id') id: string,
    @Args('dto') dto: UpdateUserDto,
  ): Promise<User> {
    console.log(dto, id);
    return await this.prisma.user.update({ where: { id }, data: dto });
  }
}
