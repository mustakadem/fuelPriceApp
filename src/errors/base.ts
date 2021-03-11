import { ApolloError } from 'apollo-server-fastify';
import { Errors } from '@/graphql.types';

export class BaseError extends ApolloError {
  constructor(
    message = 'Ups! Ha ocurrido un error!',
    code: Errors = 'Internal',
    fields?: Record<string, unknown>,
  ) {
    super(message, code, { fields });
  }
}
