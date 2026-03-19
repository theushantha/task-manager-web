# Spring Boot Configuration Guide - Task Manager

## Overview
Complete configuration setup for Spring Boot 3.3.0 with JWT Authentication and MongoDB integration.

## Files Configuration

### 1. pom.xml - Dependencies Management

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.3.0</version>  <!-- Spring Boot 3.3.0 LTS Release -->
</parent>

<properties>
    <java.version>21</java.version>  <!-- Java 21 LTS -->
</properties>
```

**Key Dependencies:**
- `spring-boot-starter-web` - REST API support
- `spring-boot-starter-data-mongodb` - MongoDB integration
- `spring-boot-starter-security` - Spring Security 6.x
- `jjwt-api` v0.12.3 - JWT token generation (latest)
- `spring-boot-starter-test` - Testing framework

**Build Plugins:**
- Maven Compiler Plugin v3.14.1
- Spring Boot Maven Plugin 3.3.0
- Lombok annotation processor support

---

### 2. application.properties - App Configuration

```properties
spring.application.name=taskmanager
server.port=8081
```

#### MongoDB Configuration
```properties
# Connection String with Atlas Cloud Database
spring.mongodb.uri=mongodb+srv://ushathagreat_db_user:ushv@cluster0.lkvgu10.mongodb.net/task_manager_db?retryWrites=true&w=majority

# Enable automatic index creation
spring.data.mongodb.auto-index-creation=true
```

**MongoDB Features:**
- Automatic index creation for performance
- Connection pooling
- Retry writes enabled for resilience
- Database: `task_manager_db`

#### JWT Configuration
```properties
# Secret key (min 32 characters for HS256)
app.jwt.secret=MySecretKeyForJWTEncryptionThatIsAtLeast32CharactersLongForHS256Algorithm

# Token expiration (24 hours in milliseconds)
app.jwt.expiration=86400000
```

⚠️ **IMPORTANT FOR PRODUCTION:**
- Change the JWT secret to a complex, random value
- Store secret in environment variables, not in code
- Change expiration time as per requirements

#### CORS Configuration
```properties
# Allow frontend origins
app.cors.allowed-origins=http://localhost:3000,http://localhost:5173

# Allowed HTTP methods
app.cors.allowed-methods=GET,POST,PUT,DELETE,PATCH,OPTIONS

# Allow all headers
app.cors.allowed-headers=*

# Allow credentials (cookies, authorization)
app.cors.allow-credentials=true
```

#### Logging Configuration
```properties
# Root logger level
logging.level.root=INFO

# Application logger level (debug for development)
logging.level.luv2code.taskmanager=DEBUG
```

---

### 3. Security Configuration (SecurityConfig.java)

**Authentication Flow:**
```
Request → JWT Filter → Extract Token → Validate → Set Auth Context → Process Request
```

**Configuration Details:**
- **CSRF Protection**: Disabled (stateless API)
- **Session Management**: Stateless (JWT-based)
- **Authentication**: JWT via Authorization header
- **Public Endpoints**: 
  - `/api/auth/**` - Login/Signup
  - `/api/*/health` - Health checks
- **Protected Endpoints**: All other `/api/**` endpoints

**Security Features:**
- BCrypt password encryption (strength 10)
- JWT token validation on every request
- Automatic token extraction from `Authorization: Bearer <token>` header
- Role-based access control ready for extension

---

### 4. JWT Token Provider (JwtTokenProvider.java)

**Token Generation:**
- Algorithm: HS256 (HMAC with SHA-256)
- Subject: Username
- Issued At: Current timestamp
- Expiration: 24 hours (configurable)

**Methods:**
- `generateToken(username)` - Create JWT token
- `getUsernameFromToken(token)` - Extract username
- `isTokenValid(token)` - Validate token signature and expiration

**Example Token:**
```
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoxNzAwMDg2NDAwfQ.signature
```

---

### 5. Database Configuration

**MongoDB Collections:**

#### Users Collection
```
{
  "_id": ObjectId,
  "username": "String (unique)",
  "email": "String (unique)",
  "password": "String (BCrypt encrypted)",
  "createdAt": "LocalDateTime",
  "updatedAt": "LocalDateTime",
  "active": "Boolean"
}
```

#### Tasks Collection
```
{
  "_id": ObjectId,
  "userId": "String (Reference to User)",
  "title": "String",
  "description": "String",
  "status": "PENDING | IN_PROGRESS | COMPLETED",
  "priority": "LOW | MEDIUM | HIGH",
  "dueDate": "LocalDateTime (optional)",
  "createdAt": "LocalDateTime",
  "updatedAt": "LocalDateTime"
}
```

---

## API Endpoints

### Authentication (Public)
```
POST /api/auth/login
POST /api/auth/signup
GET /api/auth/health
```

### Tasks (Protected)
```
POST   /api/tasks                      - Create task
GET    /api/tasks                      - Get all tasks
GET    /api/tasks/{taskId}             - Get task by ID
GET    /api/tasks/status/{status}      - Filter by status
GET    /api/tasks/priority/{priority}  - Filter by priority
PUT    /api/tasks/{taskId}             - Update task
PATCH  /api/tasks/{taskId}/status      - Update status
DELETE /api/tasks/{taskId}             - Delete task
```

### Users (Protected)
```
GET    /api/users/profile              - Get profile
PUT    /api/users/profile              - Update profile
DELETE /api/users/profile              - Delete account
GET    /api/users/health               - Health check
```

---

## Running the Application

### Build
```bash
mvn clean package
```

### Run
```bash
mvn spring-boot:run
# or
java -jar target/taskmanager-0.0.1-SNAPSHOT.jar
```

### Test
```bash
mvn test
```

### Application Starts On
- **URL**: http://localhost:8081
- **Database**: MongoDB Atlas (Cloud)

---

## Environment Setup

### Required Environment Variables (Production)
```bash
export APP_JWT_SECRET="your-complex-secret-key-min-32-chars"
export SPRING_MONGODB_URI="your-mongodb-connection-string"
```

### Local Development
All configurations are in `application.properties` (ready to use)

---

## Troubleshooting

### MongoDB Connection Issues
- Verify credentials in connection string
- Check IP whitelist in MongoDB Atlas
- Ensure network connectivity

### JWT Token Issues
- Token must include "Bearer " prefix in header
- Token expiration: 24 hours (check token age)
- Secret key mismatch causes validation failure

### CORS Issues
- Frontend URL must be in allowed origins
- Verify credentials flag is set
- Check browser console for CORS errors

---

## Production Checklist

- [ ] Change JWT secret to environment variable
- [ ] Update CORS allowed origins with production URLs
- [ ] Enable HTTPS only
- [ ] Set up MongoDB backups
- [ ] Configure logging appropriately
- [ ] Add rate limiting
- [ ] Enable request validation
- [ ] Set up monitoring/alerts
- [ ] Review security configurations
- [ ] Change password requirements if needed

---

## Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Spring Boot | 3.3.0 |
| Security | Spring Security | 6.x |
| JWT | JJWT | 0.12.3 |
| Database | MongoDB | Cloud Atlas |
| Build | Maven | 3.9.14 |
| Java | JDK | 21 LTS |
| ORM | Spring Data MongoDB | 4.x |

---

## Documentation

- **API Endpoints**: See PROJECT_STRUCTURE.md
- **Entity Models**: See model/ package
- **Services**: See service/ package
- **DTOs**: See dto/ package

