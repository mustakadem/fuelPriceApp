import { SetMetadata, CustomDecorator } from '@nestjs/common';

export const RolesKey = 'roles';

export type Role = 'unauthenticated' | 'user' | 'employee' | 'admin';

export const Roles = (...roles: Role[]): CustomDecorator<string> =>
  SetMetadata(RolesKey, roles);
