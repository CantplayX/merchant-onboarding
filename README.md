# Merchant Onboarding

## Overview

### 1. Unzip and open in an IDM

- Use your terminal to navigate into the project directory:
  ```bash
  cd merchant-onboarding
  ```

### 2. Install Dependencies and Packages

- Ensure you have [Node.js](https://nodejs.org/) installed.
- Run the following command to install all necessary packages:
  ```bash
  npm install
  ```

### 3. Create Database Table

- Use pgAdmin or another PostgreSQL management tool to create the necessary table(s).
- Note: ClickHouse and TypeORM are already set up; no need to tweak these configurations.

### 4. Initialize Database

- **Configure .env:**
  - Update the PostgreSQL details in the `.env` file with your specific database credentials.

### 5. Start the Server

- Start the backend server with:
  ```bash
  npm start
  ```

## Configuration

- Ensure your environment variables are correctly set in the `.env` file for the backend to connect to the PostgreSQL database. This includes configuring connection details such as host, user, password, and database name.

## Authentication and API Usage

### 1. Swagger Documentation

- Visit [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/) to view the API documentation and learn how it works.

### 2. Logging In and Getting a Token

- Log in with the mock user provided.
- Save the generated token in the Headers (e.g., `Authorization: Bearer <token>`).
- Use this token to make authenticated requests to the GET or POST API endpoints.

## Troubleshooting

### 1. Backend Issues

- Ensure all dependencies and packages are installed.
- Check the terminal for any errors where the backend server is running.

### 2. Database Issues

- Ensure PostgreSQL is running and accessible.
- Verify that your database credentials in the `.env` file are correct.
# merchant-onboarding
