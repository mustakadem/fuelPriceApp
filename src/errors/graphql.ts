import { BaseError } from './base';

export class NotFoundError extends BaseError {
  constructor(message = `Ups! Parece que el recurso que buscas no existe!`) {
    super(message, 'NotFound');
  }
}

export class ValidationError extends BaseError {
  constructor(message: string);
  constructor(errors: Record<string, unknown>, message?: string);
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
  constructor(param1: any, param2?: any) {
    let message = `Ups! Parece que alguno de estos campos no es válido!`;
    let errors: Record<string, unknown> | undefined = undefined;

    if (typeof param1 === 'string') {
      message = param1;
    } else {
      errors = param1;
      message = param2 ? param2 : message;
    }

    super(message, 'Validation', errors);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message?: string) {
    super(message, 'Unauthorized');
  }
}

export class ForbiddenError extends BaseError {
  constructor(message?: string) {
    super(message, 'Forbidden');
  }
}
