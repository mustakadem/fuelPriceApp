import { IoAdapter } from '@nestjs/platform-socket.io';
import { AuthGuard } from './auth.guard';
import { INestApplicationContext } from '@nestjs/common';
import { ServerOptions } from 'socket.io';
import { UnauthorizedError } from '@/errors';
import { ConfigService } from '@nestjs/config';

export class AuthenticatedSocketIoAdapter extends IoAdapter {
  private authGuard: AuthGuard;
  private config: ConfigService;

  constructor(private app: INestApplicationContext) {
    super(app);
    this.authGuard = this.app.get(AuthGuard);
    this.config = this.app.get(ConfigService);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
  create(port: number, options?: any): any {
    return this.createIOServer(port, options);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createIOServer(port: number, options: ServerOptions): any {
    options.allowRequest = async (request, allowFunction) => {
      try {
        const url = new URL(request.url || '', this.config.get('SERVER_URL'));

        const payload = await this.authGuard.verifyRequest(
          `Bearer ${url.searchParams.get('token')}`,
        );

        if (!payload) {
          throw new UnauthorizedError();
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (request as any).authPayload = payload;
      } catch (e) {
        console.warn('Failed to authenticate user:', e);
        return allowFunction('Unauthorized', false);
      }
      return allowFunction(null, true);
    };

    return super.createIOServer(port, options);
  }
}
