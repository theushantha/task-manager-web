# Task Manager Application - Backend Project Structure

## Overview
This is a Spring Boot backend application for a task management system with JWT authentication and MongoDB integration.

## Technology Stack
- **Framework**: Spring Boot 4.0.3
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Spring Security with BCrypt password encoding
- **Build Tool**: Maven
- **Java Version**: 21

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/luv2code/taskmanager/
│   │   │   ├── model/              # Domain entities
│   │   │   │   ├── User.java
│   │   │   │   └── Task.java
│   │   │   ├── repository/         # Data access layer
│   │   │   │   ├── UserRepository.java
│   │   │   │   └── TaskRepository.java
│   │   │   ├── service/            # Business logic
│   │   │   │   ├── AuthService.java
│   │   │   │   ├── TaskService.java
│   │   │   │   └── UserService.java
│   │   │   ├── controller/         # REST endpoints
│   │   │   │   ├── AuthController.java
│   │   │   │   ├── TaskController.java
│   │   │   │   └── UserController.java
│   │   │   ├── security/           # JWT utilities
│   │   │   │   ├── JwtTokenProvider.java
│   │   │   │   └── JwtAuthenticationFilter.java
│   │   │   ├── config/             # Configuration
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   └── CorsConfig.java
│   │   │   ├── dto/                # Data transfer objects
│   │   │   │   ├── AuthRequest.java
│   │   │   │   ├── AuthResponse.java
│   │   │   │   ├── SignupRequest.java
│   │   │   │   ├── TaskDTO.java
│   │   │   │   └── TaskCreateRequest.java
│   │   │   ├── exception/          # Exception handling
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   ├── ResourceNotFoundException.java
│   │   │   │   ├── UnauthorizedException.java
│   │   │   │   ├── BadRequestException.java
│   │   │   │   └── ErrorResponse.java
│   │   │   ├── util/               # Utility classes
│   │   │   │   └── ApiResponse.java
│   │   │   └── TaskmanagerApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/luv2code/taskmanager/
└── pom.xml
```

## API Endpoints

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/auth/health` - Health check

### Task Endpoints (Require Authentication)
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all tasks for the user
- `GET /api/tasks/{taskId}` - Get task by ID
- `GET /api/tasks/status/{status}` - Get tasks by status
- `GET /api/tasks/priority/{priority}` - Get tasks by priority
- `PUT /api/tasks/{taskId}` - Update a task
- `PATCH /api/tasks/{taskId}/status` - Update task status
- `DELETE /api/tasks/{taskId}` - Delete a task

### User Endpoints (Require Authentication)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `DELETE /api/users/profile` - Delete user account
- `GET /api/users/health` - Health check

## Running the Application

### Prerequisites
- Java 21 or higher
- Maven 3.6+
- MongoDB running locally or connection string configured

### Build
```bash
cd backend
mvn clean install
```

### Run
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8081`

## Configuration

Edit `src/main/resources/application.properties`:

```properties
spring.application.name=taskmanager
server.port=8081

# MongoDB Configuration
spring.mongodb.uri=your_mongodb_connection_string

# JWT Configuration
app.jwt.secret=your_secret_key_min_32_chars
app.jwt.expiration=86400000  # 24 hours in milliseconds

# CORS Configuration
app.cors.allowed-origins=http://localhost:3000,http://localhost:5173
```

## Authentication Flow

1. **Signup**: User registers with username, email, and password
2. **Login**: User logs in and receives JWT token
3. **Request**: Include token in Authorization header: `Bearer <token>`
4. **Validation**: JWT filter validates token for each protected request

## MongoDB Collections

### Users Collection
- `id`: MongoDB ObjectId
- `username`: Unique username
- `email`: Unique email
- `password`: BCrypt encrypted password
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp
- `active`: Account status

### Tasks Collection
- `id`: MongoDB ObjectId
- `userId`: Reference to user
- `title`: Task title
- `description`: Task description
- `status`: PENDING, IN_PROGRESS, COMPLETED
- `priority`: LOW, MEDIUM, HIGH
- `dueDate`: Due date (optional)
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## Dependencies

Key dependencies in `pom.xml`:
- Spring Boot Data MongoDB
- Spring Security
- JWT (JJWT)
- Lombok
- Spring Web

## Error Handling

Global exception handler returns standardized error responses:
```json
{
  "message": "Error message",
  "status": 400,
  "timestamp": "2024-03-19T10:30:00",
  "path": "/api/endpoint"
}
```

## Security Features

- JWT token-based authentication
- BCrypt password encryption
- CSRF protection disabled (stateless API)
- CORS configuration for frontend integration
- Role-based access control ready for extension

## Development Notes

- All timestamps use LocalDateTime
- User IDs from JWT tokens are used for authorization checks
- Each task is scoped to the authenticated user
- Proper logging implemented throughout the application

## Next Steps

1. Set up MongoDB database
2. Configure JWT secret in application.properties
3. Run the application
4. Test endpoints using Postman or similar tool
5. Integrate with frontend application
6. Add comprehensive unit and integration tests

