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

* Node.js (LTS recommended)
* npm
* Docker (optional, for containerized development)
* Docker Compose (optional)

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

    ***NOTE:*** Modify your env vairables as pleased. You can add more if needed.

    By default your microservice will run on ***port 3000***. Use ***API_TITLE*** and ***API_DESCRIPTION*** to
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
A report will be created in ***/coverage*** folder. Check the console and the index.html to see the results.
test coverage by running this command.

```bash
npm run test:coverage
```

## Logging

This template includes a `logger.js` utility for consistent structured logging across the application. Logs levels are the following: error > warn >  info > verbose > debug > silly

To use the logger do this:

```javascript
    import logger from "PATH/TO/logger.js";

    logger.error('Sample text');
    logger.warn('Sample text');
    logger.info('Sample text');
    logger.debug('Sample text');
    logger.verbose('Sample text');
    logger.silly('Sample text');
```

## Documentation and versioning

Please ***DO NOT*** touch `.version` and `CHANGELOG.md`, and do not forget to use ***jsdocs*** in order to document and add are your routes to Swagger UI. See this example and check the ones in ***src\routes\aboutRoutes.js*** for further information. You can also check the [official jsdoc documentation](https://jsdoc.app/)

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
    app.get("/api/v1/health", (req, res) => {
        res.status(200).json({
            status: "ok",
            message: "Health check successful",
            version,
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV,
        });
    });

```

## API Developement

In order to keep track of API features bear in mind to add ***/api/vX/*** preffix to all your endpoints where X is the version of each one. In case you are changing an existing one, then use ***/api/vX+1/***. **By default the preffix is /api/v1/**.

## Conventional Commits

This project follows the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** specification, which provides a standard way to structure commit messages.  
