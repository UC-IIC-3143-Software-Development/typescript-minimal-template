# TypeScript Template

TypeScript template for use in backend or frontend projects. 

### Features

- TypeScript v4
- Testing with Jest
- Testing using Cucumber in a BDD fashion
- Code coverage report using Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon
- CI/CD Github Actions basic configuration
- ts-arch for architectural testing
- Architecture Decision Record (ADR) template

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

#### `npm run coverage`

Create and show the current code testing coverage with `npm test -- --coverage --collectCoverageFrom="./src/**"`.
The current coverage threshold is 70%, you can edit this at `jest.config.js` file.