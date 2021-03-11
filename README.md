# FuelPriceApp Back

## Getting started

1. Clone this repository and open it

```bash
$ git clone https://github.com/mustakadem/fuelPriceApp.git
$ cd fuelPriceApp
```

2. Install dependencies

```bash
$ yarn
```

3. Create a copy of the `.env.development` file and call it `.env`. Update the environment variables to match your current environment.

```bash
$ cp .env.development .env
```

4. Launch a PostgreSQL database with docker, it will use the port defined in the `DB_PORT` var.

```bash
$ docker-compose up
```

5. Generate the prisma client

```bash
$ yarn prisma generate
```

6. Create the database model

```bash
$ yarn migrate
```

7. Launch the dev mode

```bash
$ yarn dev
```

8. Now you can then open the GraphQL Playground in http://localhost:3000/graphql

9. If you're going to edit the GraphQL schema, run the following command to regenerate the TypeScript types.

```bash
$ yarn gql:typings --watch
```

10. Launch the CLI and create the Z1 organization with the default values. After that, create a user. Make sure to use the same email domain in both the organization and user.

```bash
$ yarn cli
```

5. If you're going to edit the GraphQL schema, run the following command to regenerate the TypeScript types.

```bash
$ docker-compose exec app yarn gql:typings --watch
```

6. Install git hooks locally

```bash
$ yarn husky install
```

## Scripts

- `yarn dev`. Runs the project in dev mode, which means that it won't check types and will restart with every change you make.
- `yarn build`. Compiles the project to the `./dist` folder.
- `yarn typecheck`. Checks the typings of the project. Gets executed before trying to create a new commit but you can also run it manually.
- `yarn start`. Runs the compiled program. Remember to execute `yarn build` before attempting to launch the program.
- `yarn lint`. Runs ESLint. You can append `--fix` in order to fix autofixable issues.
- `yarn gql:typings`. Watches for changes in the GraphQL files and regenerates the `src/graphql.ts` file.
- `yarn cli`. Launch a CLI utility that allows you to manage your instance.
- `yarn test`. Launch the test suite.
- `yarn test:debug`. Launch the test suite in debug mode. You'll need to run all the tests at least one time before trying to set any breakpoint.
- `yarn makemigrations`. Generates a migration of the changes made to the prisma schema.
- `yarn migrate`. Execute pending migrations.

## Debugging

You can attach a debugger to the Node.js instance that runs when you're using either `yarn dev` or `yarn test:debug`.