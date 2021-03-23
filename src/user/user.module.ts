import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserResolver } from '@/user/user.resolver';
import { UserServices } from '@/user/user.services';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserServices],
})
export class UserModule {}
