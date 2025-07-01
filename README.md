# Api-Room-Reservation

A room reservation API developed with Nest.js, fully containerized with Docker. The environment includes a MongoDB database and a monitoring stack with Prometheus and Grafana.

## What's Included?

This Docker Compose environment starts the following services:

| Service           | Access URL                         | Description                                        |
| ----------------- | ---------------------------------- | -------------------------------------------------- |
| **API (Nest.js)** | `http://localhost:3000`            | The main application service.                      |
| **API Docs** | `http://localhost:3000/swagger`        | API documentation generated via Swagger.           |
| **MongoDB** | `localhost:27017`                  | NoSQL database for the application.                |
| **Prometheus** | `http://localhost:9090`            | Collects metrics from the API.                     |
| **Grafana** | `http://localhost:3001`            | Metrics visualization (default login: `admin`/`admin`). |

## Prerequisites

To run this project, you will only need:

- Docker
- Docker Compose

## How to Run

Follow the steps below to get the entire stack up and running.

### 1. Clone the repository

```bash
git clone [https://github.com/Caua-Vinicius/Api-Room-Reservation.git](https://github.com/Caua-Vinicius/Api-Room-Reservation.git)
cd Api-Room-Reservation
```

### 2. Create the environment file

Create a file named `.env` in the project root, using `.env.example` as a template.

```env
# Secret key for signing JWT tokens
JWT_SECRET=your_jwt_secret_key

# Name of the database to be created in MongoDB
MONGO_INITDB_DATABASE=your_database_name

# Connection URL the API will use to connect to MongoDB
# Make sure the database name here is the same as in the variable above.
DATABASE_URL=mongodb://root:example@mongodb:27017/your_database_name?authSource=admin
```

**Important:** The database name (`your_database_name`) must be the same in `MONGO_INITDB_DATABASE` and `DATABASE_URL`.

### 3. Start the containers

Now, build the images and start all services in detached mode (background):

```bash
docker-compose up --build -d
```

After a few moments, all services will be available at the URLs listed in the table above.

To view the API logs in real-time:

```bash
docker-compose logs -f api
```

## How to Stop the Application

To stop all containers, run:

```bash
docker-compose down
```

If you also want to remove the volumes (this will delete all data from MongoDB and Grafana), use:

```bash
docker-compose down -v
```
