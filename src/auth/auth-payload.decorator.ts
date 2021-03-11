import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getContextFromGQLArgs } from './graphql.utils';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Client } from 'socket.io';

export const AuthPayload = createParamDecorator(
  (
    data,
    ctx: ExecutionContext & { contextType: 'http' | 'graphql' | 'ws' },
  ) => {
    switch (ctx.contextType) {
      case 'graphql': {
        const context = GqlExecutionContext.create(ctx) as any;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return getContextFromGQLArgs(context.args).req.authPayload;
      }
      case 'http': {
        const req = ctx.switchToHttp().getRequest();

        return req.authPayload;
      }
      case 'ws': {
        const client = ctx.switchToWs().getClient<Client>();

        return client.request.authPayload;
      }
    }
  },
);
