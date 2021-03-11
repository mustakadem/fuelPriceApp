import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Reflector } from '@nestjs/core';
import { Role, RolesKey } from './roles.decorator';
import { AuthTokenPayload } from './token.model';
import { PrismaService } from '@/prisma/prisma.service';
import { getContextFromGQLArgs } from './graphql.utils';
import { UnauthorizedError } from '@/errors';
import { FastifyRequest } from 'fastify';
import { Client } from 'socket.io';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
    private readonly config: ConfigService,
  ) {}

  public async canActivate(
    context: ExecutionContext & { contextType: 'http' | 'graphql' | 'ws' },
  ): Promise<boolean> {
    let req: FastifyRequest;
    let auth: string | undefined;

    switch (context.contextType) {
      case 'http': {
        req = context.switchToHttp().getRequest();
        auth = req.headers.authorization;
        break;
      }
      case 'ws': {
        const client = context.switchToWs().getClient<Client>();
        req = client.request;

        const url = new URL(client.request.url, this.config.get('SERVER_URL'));
        auth = `Bearer ${url.searchParams.get('token')}`;
        break;
      }
      case 'graphql': {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ctx = GqlExecutionContext.create(context) as any;
        req = getContextFromGQLArgs(ctx.args).req;
        auth = req.headers.authorization;
        break;
      }
    }

    const roles = this.reflector.get<Role[]>(
      RolesKey,
      context.getHandler(),
    ) || ['unauthenticated'];

    let payload: AuthTokenPayload | undefined;

    if ('authPayload' in req) {
      payload = req.authPayload;
    } else {
      payload = await this.verifyRequest(auth);
      req.authPayload = payload;
    }

    switch (true) {
      case roles.includes('user') && payload?.type === 'user':
        return true;
      case roles.includes('unauthenticated'):
        return true;
    }

    throw new UnauthorizedError();
  }

  public async verifyRequest(auth = ''): Promise<undefined | AuthTokenPayload> {
    if (!auth || !auth.startsWith('Bearer ')) {
      return;
    }

    const token = auth.split(' ')[1];

    if (auth.startsWith('Bearer ey')) {
      // JWT Tokens, standard user auth

      const payload = await this.authService.verifyAccessToken(token);

      if (!payload) {
        return;
      }

      return payload;
    }
  }
}
