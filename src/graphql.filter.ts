import { Catch, ArgumentsHost } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch()
export class ExceptionFilter implements GqlExceptionFilter {
  catch(
    exception: Error,
    host: ArgumentsHost & { contextType: 'http' | 'graphql' },
  ): Error {
    if (host.contextType === 'http') {
      throw exception;
    }

    return exception;
  }
}
