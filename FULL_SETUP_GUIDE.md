# Task Manager - Full Stack Setup Guide

Complete setup and deployment guide for the Task Manager application (Spring Boot + Angular).

---

## Project Overview

**Task Manager** is a full-stack task management application with:
- **Backend**: Spring Boot 3.3.0 LTS with MongoDB and JWT authentication
- **Frontend**: Angular 17.0.0 with reactive forms and authentication
- **Database**: MongoDB Atlas Cloud
- **Security**: Multi-layer JWT authentication and user isolation

---

## Prerequisites

### Backend Requirements
- Java 21 or higher
- Maven 3.9.14 or higher
- MongoDB Atlas account (cloud database)

### Frontend Requirements
- Node.js v18 or higher
- npm v9 or higher
- Angular CLI v17.0.0

### System Requirements
- macOS 11+, Windows 10+, or Linux
- 4GB+ RAM
- 2GB+ disk space

---

## Backend Setup

### 1. MongoDB Atlas Configuration

1. Create MongoDB Atlas account: https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create database user with credentials
4. Whitelist your IP address
5. Copy connection string

### 2. Backend Installation

```bash
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

**Backend runs on**: `http://localhost:8081`

### 3. Configure MongoDB Connection

Edit `src/main/resources/application.properties`:

```properties
# MongoDB Connection
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# Server Configuration
server.port=8081
server.servlet.context-path=/api

# JWT Configuration
jwt.secret=your-secret-key-here
jwt.expiration=86400000

# Logging
logging.level.root=INFO
logging.level.luv2code.taskmanager=DEBUG
```

### 4. Verify Backend

```bash
# Check health endpoint
curl http://localhost:8081/api/auth/validate

# Should return 400 Bad Request (expected, no token provided)
```

**Backend API Endpoints**:
- Auth endpoints: `/api/auth/*`
- Task endpoints: `/api/tasks/*` (require authentication)
- User endpoints: `/api/users/*` (require authentication)

---

## Frontend Setup

### 1. Frontend Installation

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

**Frontend runs on**: `http://localhost:4200`

### 2. Configure API Connection

The proxy configuration automatically forwards requests:
- Development: `/api` →  `http://localhost:8081/api`
- Production: `/api` → Backend URL (configurable)

Edit `src/environments/environment.ts` if needed:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api'
};
```

### 3. Access Application

```
http://localhost:4200
```

You'll be redirected to login page by default.

---

## Complete Startup Procedure

### Terminal 1: Start Backend

```bash
cd backend
mvn spring-boot:run

# Wait for message: "Started TaskmanagerApplication in X.XXX seconds"
```

### Terminal 2: Start Frontend

```bash
cd frontend
npm start

# Wait for: "✔ Compiled successfully"
```

### Terminal 3: (Optional) Monitor Logs

```bash
# View backend logs
tail -f backend/logs.log

# Or view MongoDB operations
# Use MongoDB Atlas UI for real-time monitoring
```

### Access Application

1. Open browser to `http://localhost:4200`
2. You're automatically redirected to login page
3. Login with existing credentials or create new account

---

## Testing the Application

### Test User Creation

1. Navigate to `http://localhost:4200`
2. Click "Sign up here"
3. Fill registration form:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `TestPass123!`
   - Confirm Password: `TestPass123!`
4. Accept terms and click "Create Account"

### Test Login

1. Enter credentials from registration
2. Click "Sign In"
3. Should redirect to tasks dashboard

### Test API Calls

```bash
# Login and get token
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"TestPass123!"}'

# Response includes JWT token:
# {"success":true,"data":{"token":"eyJhbGc...","username":"testuser",...}}

# Use token for authenticated requests
TOKEN="your-jwt-token-here"
curl -H "Authorization: Bearer $TOKEN" \
  http://localhost:8081/api/tasks
```

---

## Troubleshooting

### Backend Won't Start

**Port 8081 already in use:**
```bash
# Find and kill process (macOS/Linux)
lsof -i :8081 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Windows: Use Task Manager or
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

**MongoDB connection failure:**
- Verify connection string is correct
- Check IP whitelist in MongoDB Atlas
- Ensure MongoDB user credentials are accurate

**JWT errors:**
- Verify `jwt.secret` is set in application.properties
- Check token isn't expired (24 hours)
- Ensure Authorization header format is `Bearer <token>`

### Frontend Won't Start

**Port 4200 already in use:**
```bash
# Kill process on port 4200
lsof -i :4200 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Or use different port
ng serve --port 4300
```

**Module not found errors:**
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Login Fails

1. Check browser console for errors (F12)
2. Verify backend is running and accessible
3. Check network tab for failed requests
4. Verify user was created successfully

### CORS Errors

- Ensure backend CORS is configured: `CorsConfig.java`
- Should allow `http://localhost:4200`
- Clear browser cache and retry

---

## Project Structure

### Backend Structure
```
backend/
├── src/main/java/luv2code/taskmanager/
│   ├── config/          # Security, CORS, JWT configuration
│   ├── controller/       # REST endpoints
│   ├── service/          # Business logic
│   ├── repository/       # MongoDB queries
│   ├── model/            # Data models
│   └── dto/              # Data transfer objects
├── src/main/resources/
│   ├── application.properties    # Configuration
│   └── static/           # Static files
└── pom.xml               # Maven dependencies
```

### Frontend Structure
```
frontend/
├── src/app/
│   ├── components/       # UI components (login, register, tasks)
│   ├── services/         # API communication (auth, tasks)
│   ├── guards/           # Route protection
│   ├── interceptors/     # HTTP interceptors (JWT handling)
│   ├── models/           # TypeScript interfaces
│   └── app.module.ts     # Main app module
├── src/environments/     # Environment configs
├── src/index.html        # Root HTML
└── angular.json          # Angular CLI config
```

---

## Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String,  // BCrypt encrypted
  profilePicture: String,
  bio: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Tasks Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  status: String,  // PENDING, IN_PROGRESS, COMPLETED
  priority: String,  // LOW, MEDIUM, HIGH
  dueDate: Date,
  assignees: [String],  // User IDs
  tags: [String],
  category: String,
  starred: Boolean,
  createdBy: String,  // User ID
  createdAt: Date,
  updatedAt: Date
}
```

---

## Security Architecture

### Multi-Layer Authentication

1. **Framework Level**: Spring Security configuration
2. **Filter Level**: JwtAuthenticationFilter processes tokens
3. **Controller Level**: Endpoint access validation
4. **Service Level**: User isolation verification
5. **Database Level**: Query filtering by userId

### JWT Token Structure

```
Header: {"alg":"HS256","typ":"JWT"}
Payload: {
  "sub":"username",
  "userId":"user-id",
  "iat":1234567890,
  "exp":1234654290
}
Signature: HMACSHA256(header.payload, secret)
```

### Token Lifecycle

1. **Generated**: On login/signup (24-hour expiration)
2. **Stored**: Browser localStorage as `auth_token`
3. **Transmitted**: HTTP Authorization header: `Bearer <token>`
4. **Validated**: On every API request by JwtInterceptor
5. **Refreshed**: Not implemented (use 24-hour expiration)
6. **Revoked**: On logout or 401 response

---

## Production Deployment

### Backend Deployment

1. Build JAR file:
```bash
mvn clean package -DskipTests
```

2. Deploy to server:
```bash
java -jar target/taskmanager-1.0.0.jar
```

3. Environment variables:
```bash
export MONGODB_URI="mongodb+srv://..."
export JWT_SECRET="your-production-secret"
export JWT_EXPIRATION="86400000"
export SERVER_PORT="8080"
```

### Frontend Deployment

1. Build production:
```bash
npm run build
```

2. Deploy `dist/` folder to static hosting or CDN
3. Configure API URL for production environment

### Docker Deployment

```dockerfile
# Backend Dockerfile
FROM openjdk:21-slim
COPY target/taskmanager-1.0.0.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

```dockerfile
# Frontend Dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## Performance Optimization

### Backend
- Database indexing on frequently queried fields
- Pagination for list endpoints
- Caching for user profiles
- Connection pooling for MongoDB

### Frontend
- Lazy loading of modules
- Tree shaking for bundle optimization
- Change detection strategy: OnPush
- Unsubscribe from observables
- Compress assets

---

## Monitoring & Logging

### Backend Logs
- Application logs: `target/taskmanager.log`
- MongoDB operations: MongoDB Atlas UI
- Error tracking: Integration with Sentry (optional)

### Frontend Logs
- Browser console (F12)
- Network tab for API calls
- Performance profiling (F12 → Performance)

---

## Common Commands Reference

### Backend
```bash
# Build
mvn clean compile

# Test
mvn test

# Run
mvn spring-boot:run

# Package
mvn clean package
```

### Frontend
```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build production
npm run build

# Run tests
npm test

# Run linter
ng lint
```

---

## Documentation Links

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Angular Documentation](https://angular.io/docs)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [JWT.io](https://jwt.io/)
- [JJWT Library](https://github.com/jwtk/jjwt)

---

## Support & Troubleshooting

For issues:
1. Check error messages in browser console and backend logs
2. Verify all prerequisites are installed
3. Ensure backend and frontend are running
4. Clear cache and restart both services
5. Check MongoDB connection string and credentials

---

## Next Steps

1. ✅ Complete authentication system
2. 🔄 Add task management features
3. 🔄 Create task list and detail views
4. 🔄 Implement task filtering and search
5. 🔄 Add user profile management
6. 🔄 Create dashboard with statistics
7. 🔄 Add notifications and reminders
8. 🔄 Implement real-time updates with WebSocket

---

**Last Updated**: 2024
**Version**: 1.0.0
