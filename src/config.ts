import { ExceptionFilter } from './graphql.filter';
import cookie from 'fastify-cookie';
import session from 'fastify-session';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { AuthenticatedSocketIoAdapter } from './auth/auth-ws.adapter';

export function configureApp<T extends NestFastifyApplication>(app: T): T {
  const config = app.get(ConfigService);
  const serverURL = config.get('SERVER_URL', '');

  if (!serverURL) {
    Logger.error('SERVER_URL must be configured!', undefined, 'Configuration');
    throw new Error('SERVER_URL must be configured!');
  }

  app.register(cookie).register(session, {
    secret: config.get<string>(
      'SESSION_SECRET',
      'x0Pyt894N/oNHEez8cn5rgcHs9aTnZshR7iOAidU+uCBn9xoecPlgBZxhCkroFYA',
    ),
    cookie: {
      secure: serverURL.startsWith('https://'),
    },
  });

  return app
    .useGlobalFilters(new ExceptionFilter())
    .useWebSocketAdapter(new AuthenticatedSocketIoAdapter(app));
}
