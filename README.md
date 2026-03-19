# Task Manager Web

This project contains:
- `backend` -> Spring Boot API (port `8082`)
- `frontend` -> Angular app (port `4200`)
- MongoDB as the database

## Run Backend and Frontend (Local)

### 1) Backend (Spring Boot)
Requirements:
- Java 21
- Maven 3.9+

Steps:
1. Go to backend folder:
   ```bash
   cd backend
   ```
2. Run backend:
   ```bash
   mvn spring-boot:run
   ```
3. Backend URL:
   - `http://localhost:8082`

### 2) Frontend (Angular)
Requirements:
- Node.js 20+
- npm

Steps:
1. Go to frontend folder:
   ```bash
   cd frontend
   ```
2. Install packages:
   ```bash
   npm install
   ```
3. Run frontend:
   ```bash
   npm start
   ```
4. Frontend URL:
   - `http://localhost:4200`

## Database Setup Details

The backend uses **MongoDB**.

### Current backend DB config
Configured in `backend/src/main/resources/application.properties`:
- `server.port=8082`
- `spring.mongodb.uri=...`

### Option A: Use Docker MongoDB (recommended for local)
From project root:
```bash
docker compose up --build
```
This starts:
- `mongo` on `27017`
- `backend` on `8082`
- `frontend` on `4200`

### Option B: Use your own MongoDB
Update `spring.mongodb.uri` in `backend/src/main/resources/application.properties` to your MongoDB connection string.

## JWT / Credentials

JWT is implemented in backend.

### JWT settings
From `backend/src/main/resources/application.properties`:
- `app.jwt.secret=MySecretKeyForJWTEncryptionThatIsAtLeast32CharactersLongForHS256Algorithm`
- `app.jwt.expiration=86400000` (24 hours)

### Auth flow
- Signup endpoint: `POST /api/auth/signup`
- Login endpoint: `POST /api/auth/login`
- Validate endpoint: `POST /api/auth/validate?token=...`

### Default user credentials
- No seeded/default user credentials are configured in code.
- Create an account from the signup page, then login with that account.

### Using JWT token
For protected backend APIs, send:
- Header: `Authorization: Bearer <your-jwt-token>`
