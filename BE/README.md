# Coinfetti Backend

Express.js backend API with PostgreSQL database.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=coinfetti
DB_USER=postgres
DB_PASSWORD=your_password_here
```

3. Make sure PostgreSQL is running and create the database:
```sql
CREATE DATABASE coinfetti;
```

## Running the Server

- Development mode (with auto-reload):
```bash
npm run dev
```

- Production mode:
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## Endpoints

- `GET /` - API status
- `GET /health` - Health check with database connection status

## Project Structure

```
BE/
├── config/
│   └── database.js    # PostgreSQL connection configuration
├── routes/
│   └── index.js      # API routes
├── server.js         # Express server entry point
└── package.json
```

