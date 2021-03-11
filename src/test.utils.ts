import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { configureApp } from './config';
import { AppModule } from './app.module';
import { TestingModule, Test } from '@nestjs/testing';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import getPort from 'get-port';
import tag from 'fake-tag';
import { PrismaService } from '@/prisma/prisma.service';

export const gql = tag;

export type GraphQLTestClient = ReturnType<typeof createGraphQLTestClient>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createGraphQLTestClient(app: INestApplication, token?: string) {
  const httpServer = app.getHttpServer();

  function query(
    query: string,
    variables?: Record<string, unknown>,
    queryToken: string | undefined = token,
  ): request.Test {
    let req = request(httpServer).post('/graphql').send({ variables });

    if (queryToken) {
      req = req.set('Authorization', `Bearer ${queryToken}`);
    }

    return req.send({ query });
  }

  function mutation(
    query: string,
    variables?: Record<string, unknown>,
    queryToken: string | undefined = token,
  ): request.Test {
    let req = request(httpServer).post('/graphql').send({ variables });

    if (queryToken) {
      req = req.set('Authorization', `Bearer ${queryToken}`);
    }

    return req.send({ query });
  }

  return {
    query,
    mutation,
  };
}

export async function createTestingApp(): Promise<INestApplication> {
  let app: NestFastifyApplication;

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication(new FastifyAdapter());
  app = configureApp(app);

  await app.listen(await getPort());

  return app;
}
/**
 * This function remove data created by and for the tests. Usually, is used in beforeAll and afterAll
 *
 * @param {PrismaService} prisma
 * @param {string} localPrefix This localPrefix will search contained word
 */
export async function cleanupDB(
  prisma: PrismaService,
  localPrefix: string,
): Promise<void> {
 /* await prisma.user.deleteMany({
    where: { username: { contains: localPrefix } },
  });*/
}
