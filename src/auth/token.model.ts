export type UserTokenPayload = {
  type: 'user';
  id: string;
};

export type TokenPayload = UserTokenPayload;

export type AuthTokenPayload = UserTokenPayload;
