# API Project

![Node.js Logo](https://nodejs.org/static/images/logo.svg)

This project is a simple API that returns User information

## Features

- Fetch user data by user ID.
- Fetch a random user
- Data is managed using Sequelize ORM.
- Follows Domain-Driven Design (DDD) principles.

## Tech Stack

- **Node.js**: JavaScript runtime for building the API.
- **TypeScript**: Adds type safety to JavaScript code.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for interacting with MySQL.
- **MySQL**: Database for storing user data.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or newer)
- [MySQL](https://www.mysql.com/) (v5.7 or newer)
- [Sequelize CLI](https://sequelize.org/)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/SWGamification/SWBackend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SWBackend
   ```

3. Install dependencies:

   ```bash
   make install
   ```

4. Configure your environment

   Make sure to create a `.env` file in the root directory of your project with the following configuration:
   ```
   PORT=3000
 
   DB_NAME=api_db
   DB_USER=
   DB_PASSWORD=
   DB_HOST=localhost
   DB_PORT=3306
   ```

5. Run the application in dev mode:

   ```bash
   make dev
   ```
   or

   ```bash
   make watch
   ```

The application will now be running on `http://localhost:3000`.

## Additional Notes

- Ensure that you have a MySQL server running locally on port 3306.
- You can change the database connection settings in the `.env` file if necessary.

### Migration

# Project Setup

## Configuration

Before running migrations, you need to configure your database connection.

1. Configuration File  
   The database configuration is located in the `config/config.json` file. Make sure it is set up like the following
   example:

   ```json
   {
     "development": {
       "username": "",
       "password": "",
       "database": "api_db",
       "host": "localhost",
       "dialect": "mysql",
       "port": 3306
     },
     "test": {
       "username": "",
       "password": "",
       "database": "api_db_test",
       "host": "localhost",
       "dialect": "mysql",
       "port": 3306
     },
     "production": {
       "username": "",
       "password": "",
       "database": "api_db_prod",
       "host": "localhost",
       "dialect": "mysql",
       "port": 3306
     }
   }
   ```

2. To run all pending migrations and apply them to the database, use the following command:

   ```bash
   make migrate
   ```
3. To create a new migration file use this command

   ```bash
   npx sequelize-cli migration:generate --name migration_name
   ```

### Available Commands

Run the following command to see all available options in the `Makefile`:

   ```bash
   make help
   ```

ngrok http --url=heavily-amused-monkey.ngrok-free.app 3000


### Github page docs

There is the github pipeline to deploy the docs, but to run that we need to have a repo with availability to create pages

For all changes into the branch `main` it will create the doc release to the branch `gh-pages` and the page should point this branch
