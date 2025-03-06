# API Project

![Node.js Logo](https://nodejs.org/static/images/logo.svg)

This project is a simple API that using the gRPC service

## Features

- Data is managed using Sequelize ORM.
- Follows Domain-Driven Design (DDD) principles.

## Tech Stack

- **Node.js**: JavaScript runtime for building the API.
- **TypeScript**: Adds type safety to JavaScript code.
- **Express**: Web framework for Node.js.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or newer)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/fittipaldi/node-ts-bff.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-ts-bff
   ```

3. Install dependencies:

   ```bash
   make install
   ```

4. Configure your environment

   Make sure to create a `.env` file in the root directory of your project with the following configuration:
   ```
   PORT=3000
   GRPC_SERVICE=localhost:50051
   ```

5. Run the application in dev mode:

   ```bash
   make dev
   ```

The application will now be running on `http://localhost:3000`.

# Available Commands

Run the following command to see all available options in the `Makefile`:

   ```bash
   make help
   ```

# Github page docs

There is the github pipeline to deploy the docs, but to run that we need to have a repo with availability to create
pages

For all changes into the branch `main` it will create the doc release to the branch `gh-pages` and the page should point
this branch
