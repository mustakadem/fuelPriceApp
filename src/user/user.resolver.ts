import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Roles } from '@/auth/roles.decorator';
import { User } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from '@/graphql.types';
import { BaseError, NotFoundError } from '@/errors';
import { UserServices } from '@/user/user.services';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserServices,
  ) {}

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
    try {
      return this.userService.checkUserIsActive(id);
    } catch (e) {
      throw new BaseError('Ups! Ha ocurrido un error!');
    }
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
