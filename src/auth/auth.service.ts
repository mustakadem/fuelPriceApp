import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { TokenPayload, AuthTokenPayload } from './token.model';
import { PrismaService } from '@/prisma/prisma.service';
import { AuthLoginResponseDto } from '@/graphql.types';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  public async logout(token: string): Promise<void> {
    await this.disableToken(token);
  }

  public async verifyAccessToken(
    token: string,
  ): Promise<false | AuthTokenPayload> {
    const [payload, isDisabled] = await Promise.all([
      this.verifyToken<AuthTokenPayload>(token),
      this.isTokenDisabled(token),
    ]);

    return isDisabled ? false : payload;
  }

  public hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  private async verifyToken<T extends TokenPayload>(
    token: string,
  ): Promise<false | T> {
    const secret = this.config.get<string>('JWT_SECRET', 'default-secret');

    return new Promise<false | T>((resolve) => {
      jwt.verify(token, secret, (errors, result) => {
        if (errors || typeof result !== 'object') {
          resolve(false);
          return;
        }

        resolve((result as unknown) as T);
      });
    });
  }

  private async disableToken(token: string): Promise<void> {
    const { exp } = jwt.decode(token, { json: true }) as { exp: number };

    await this.prisma.disabledToken.create({
      data: {
        token,
        expiresAt: new Date(exp * 1000),
      },
    });
  }

  public createToken(payload: TokenPayload, options?: jwt.SignOptions): string {
    const secret = this.config.get<string>('JWT_SECRET', 'default-secret');

    return jwt.sign(payload, secret, options);
  }

  private async isTokenDisabled(token: string): Promise<boolean> {
    const decoded = jwt.decode(token, { json: true });

    if (!decoded || !decoded.hasOwnProperty('exp')) {
      return true;
    }

    const expiresAt = decoded.exp * 1000;

    if (Date.now() >= expiresAt) {
      return true;
    }

    let findEntityPromise: Promise<unknown>;
    const payload = decoded as TokenPayload;

    const entitySelect = {
      where: {
        id: payload.id,
      },
    };

    switch (payload.type) {
      case 'user':
        findEntityPromise = Promise.resolve(null); // this.prisma.user.findOne(entitySelect);
        break;
      default:
        findEntityPromise = Promise.resolve(null);
    }

    const [disabledToken, entity] = await Promise.all([
      this.prisma.disabledToken.findOne({
        where: { token },
      }),
      findEntityPromise,
    ]);

    if (disabledToken || !entity) {
      return true;
    }

    return false;
  }

  public createAuthLoginResponse(
    entity: { id: string },
    type: AuthTokenPayload['type'],
  ): AuthLoginResponseDto {
    const id = entity.id;

    const payload = {
      type,
      id: entity.id,
    };

    const accessToken = this.createToken(payload, {
      expiresIn: '7d',
    });

    return {
      id,
      accessToken,
      type,
    };
  }
}
