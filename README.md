# KPI with Kris

This project aims to develop a web application designed to assist editors and users in refining the correctness of their written passages. By utilizing advanced technologies, including OpenAPI, the application will analyze text submissions and provide actionable feedback to enhance overall quality and meet specific Key Performance Indicators (KPIs) set forth by the user.

## Features

- **NextAuth.js (v4)**: A complete authentication solution for Next.js applications, supporting multiple authentication providers. Generate jwt and refresh token.
- **OpenAPI**: For creating a robust and scalable API that facilitates seamless communication between the frontend and backend of the application.
- **Tailwind CSS**: A utility-first CSS framework for designing custom UIs.
- **Prisma ORM**: A modern database toolkit that simplifies database access and management.
- **JOSE**: A library for handling JSON Web Tokens (JWT) and secure authorization.

## Getting Started

### Prerequisites

Make sure you have the following prepared:

- Node.js (version 14 or higher)
- npm (Node package manager)
- A database (PostgreSQL, MySQL, MongoDb Atlas Cloud, etc.)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXTAUTH_SECRET` : A secret used to encrypt session tokens and protect user authentication. Set this variable to a long, random string to ensure secure sessions.

`DATABASE_URL` : The connection string for your database. This variable is used by Prisma to connect to your database. Ensure the format is correct for your database type (PostgreSQL, MySQL, SQLite, etc.).

`GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: The client ID and client secret for your Google OAuth application. Obtain this from the Google Developer Console when setting up your application for Google sign-in.

`GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET` : The client ID and client secret for your GitHub OAuth application. This is obtained from your GitHub Developer settings and should be treated as sensitive information.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-web-app-template.git
```

Install the dependencies:

```bash
npm install
```

Set up Prisma:

- Install the Prisma CLI:

```bash
npm install prisma --save-dev
```

- Initialize Prisma in your project:

```bash
npx prisma init
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Contact

For questions or feedback, feel free to open an issue.
