# Microservice Template

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow)](https://www.conventionalcommits.org/)

A basic Node.js microservice template designed to help you quickly bootstrap microservices with Docker, testing, and logging support. Please edit this file once you are developing your microservice and document it properly.

## Project Structure

```fs
.
├── src/               # Application source code
├── tests/             # Unit and integration tests
├── spec/              # Test specifications or additional test resources
├── .github/           # GitHub workflows and configurations
├── Dockerfile         # Docker image definition
├── docker-compose.yml # Docker Compose setup
├── package.json       # Node.js dependencies and scripts
├── .env.example       # Example environment variables
└── logger.js          # App Logger
```

## Prerequisites

- Node.js (LTS recommended)
- npm
- Docker (optional, for containerized development)
- Docker Compose (optional)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SocialBeats/microservice-template.git
   cd microservice-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

   **_NOTE:_** Modify your env vairables as pleased. You can add more if needed.

   By default your microservice will run on **_port 3000_**. Use **_API_TITLE_** and **_API_DESCRIPTION_** to
   custom the Swagger UI and improve your documentation.

4. Start the service locally:

   ```bash
   npm start
   ```

   Or using Docker:

   ```bash
   docker build -t microservice-template .
   docker run -p 3000:3000 microservice-template
   ```

   Or with Docker Compose:

   ```bash
   docker-compose up --build
   ```

## Running Tests

```bash
npm test
```

Tests are located in the `tests/` folder and can include both unit and integration tests. You can see
A report will be created in **_/coverage_** folder. Check the console and the index.html to see the results.
test coverage by running this command.

```bash
npm run test:coverage
```

## Logging

This template includes a `logger.js` utility for consistent structured logging across the application. Logs levels are the following: error > warn > info > verbose > debug > silly

To use the logger do this:

```javascript
import logger from 'PATH/TO/logger.js';

logger.error('Sample text');
logger.warn('Sample text');
logger.info('Sample text');
logger.debug('Sample text');
logger.verbose('Sample text');
logger.silly('Sample text');
```

## Documentation and versioning

Please **_DO NOT_** touch `.version` and `CHANGELOG.md`, and do not forget to use **_jsdocs_** in order to document and add are your routes to Swagger UI. See this example and check the ones in **_src\routes\aboutRoutes.js_** for further information. You can also check the [official jsdoc documentation](https://jsdoc.app/)

```javascript
/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Health check endpoint
 *     description: Returns basic information to verify that the API is running properly.
 *     responses:
 *       200:
 *         description: API is healthy and responding.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Health check successful
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 uptime:
 *                   type: number
 *                   example: 123.45
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-11-08T13:41:47.074Z"
 *                 environment:
 *                   type: string
 *                   example: "development"
 */
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Health check successful',
    version,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});
```

## API Developement

In order to keep track of API features bear in mind to add **_/api/vX/_** preffix to all your endpoints where X is the version of each one. In case you are changing an existing one, then use **_/api/vX+1/_**. **By default the preffix is /api/v1/**.

By default, all new endpoints require authentication via JWT. However, you can add new open endpoints like this:
Go to **_./src/middlewares/authMiddlewares.js_** and add your new open routes here:

```javascript
const openPaths = [
  '/api/v1/docs/',
  '/api/v1/health',
  '/api/v1/about',
  '/api/v1/changelog',
  '/api/v1/version',
];
```

## Linting

You will have a better experience developing using **_.vscode_** feautres provided in this template. To do so, you must first install the following extensions in your vs-code:

- Prettier - Code formatter
- ESLint

Once you have them, the code will lint some stuff once you save a file. Do not worry because in case you do not want it to do so, just go to **_.vscode\settings.json_** and deactivate this feature with **_"editor.formatOnSave": false_**.

If you want to scan all your project you can use this command:

```bash
npm run lint
```

There is a command to fix lint problems. To do so, just run this:

```bash
npm run lint:fix
```

By default, your vs-code will autolint your stayed files once you decide that you want to commit. Anyways there is a workflow for linting external code, and you can fix lint format with those two commands. This enviroment is meant to be confortable so you do not have to worry about anything related with lint. However, everything can be disabled (do it under your own risks, as its not recommended).

## Conventional Commits

This project follows the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** specification, which provides a standard way to structure commit messages.

There are hooks to avoid commiting weird stuff.

## Commit Convention

To maintain a clean and consistent git history, all commits must follow this convention:

```git
<type>: <short description>
```

### Allowed Types

- **feat** → new feature
- **fix** → bug fix
- **docs / doc** → documentation
- **style** → formatting, no code logic changes
- **refactor** → code refactoring
- **perf** → performance improvement
- **test / tests** → adding or updating tests
- **build** → changes in build system or dependencies
- **ci** → continuous integration
- **chore** → maintenance tasks
- **sec** → security improvements

### Examples of Valid Commits

```text
feat: add login endpoint
fix: correct user password validation
docs: update README with new instructions
style: format code with prettier
refactor: optimize database queries
perf: improve response time
test: add unit tests for auth
ci: update GitHub Actions workflow
chore: remove deprecated package
sec: hash passwords with bcrypt
```
