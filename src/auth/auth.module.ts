import { Module, Global, HttpModule } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
  imports: [PrismaModule, HttpModule],
  providers: [AuthResolver, AuthService, AuthGuard],
  exports: [AuthGuard, AuthService],
})
export class AuthModule {}
