import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { NotFoundError, UnauthorizedError } from '@/errors';

@Injectable()
export class UserServices {
  constructor(private readonly prisma: PrismaService) {}

  public async checkUserIsActive(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundError('User not found!');
    }
    if (!user.isActive) {
      throw new UnauthorizedError('El usuario no esta activo');
    }
    return user;
  }
}
