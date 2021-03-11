# FuelPriceApp Back

## Getting started

1. Clone this repository and open it

```bash
$ git clone https://github.com/mustakadem/fuelPriceApp.git
$ cd fuelPriceApp
```

2. Setup the development environment

```bash
$ docker-compose up
```

3. Create the database model

```bash
$ docker-compose exec app yarn prisma migrate up --experimental
```

4. Now you can then open the GraphQL Playground in http://localhost:3000/graphql

5. If you're going to edit the GraphQL schema, run the following command to regenerate the TypeScript types.

```bash
$ docker-compose exec app yarn gql:typings --watch
```

6. Install git hooks locally

```bash
$ yarn husky install
```
