
# Task API

A REST API built with Node.js and Express.js that supports
creating, reading, updating, and deleting tasks.

## Features

- API information and health-check endpoints
- List and retrieve individual tasks
- Create tasks with input validation
- Update task titles and completion status
- Delete tasks
- Interactive Swagger documentation

## Requirements

- Node.js and npm
- Git

## Installation and running

```bash
git clone YOUR_REPOSITORY_URL
cd task-api
npm install
npm run dev
```

The server runs at http://localhost:3000.

Swagger documentation: http://localhost:3000/docs

## API endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | API information |
| GET | /health | Health check |
| GET | /tasks | List all tasks |
| GET | /tasks/:id | Get one task |
| POST | /tasks | Create a task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |
| GET | /docs | Swagger UI |

## Example

```bash
curl -i http://localhost:3000/tasks/1
```

Paste the actual terminal output here.

## Swagger screenshot

Add a screenshot of the running Swagger UI here.

## Limitations

Tasks are stored in memory and reset when the server restarts.
A database is required for persistent storage.
