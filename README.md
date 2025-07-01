# Api-Room-Reservation

This is a Dockerized Nest.js API that connects to a MongoDB database.

## Prerequisites

- Docker
- Docker Compose
- NestJs

## Setup

### 1. Clone the repository

```bash
git https://github.com/Caua-Vinicius/Api-Room-Reservation.git
cd Api-Room-Reservation
cd api
```

### 2. Create a `.env` file
In the api directory, create a `.env` file using `.env.example`:
```env
JWT_SECRET=your_jwt_secret_key
MONGO_INITDB_DATABASE=your_database_name
DATABASE_URL=mongodb://root:example@mongodb:27017/your_database_name?authSource=admin
```
Make sure that your_database_name is the same in both MONGO_INITDB_DATABASE and DATABASE_URL.


### 3. Start the containers
Build and run the containers using Docker Compose:
```bash
docker-compose --env-file .env --build
```
- The API will be available at: http://localhost:3000
- MongoDB will be running at: mongodb://root:example@localhost:27017