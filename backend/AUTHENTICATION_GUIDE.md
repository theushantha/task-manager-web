# User Authentication Layer Documentation

## Overview
Complete user authentication system with JWT, role-based access control, and comprehensive user management.

---

## 1. User Entity (model/User.java)

### Features
- **Basic Info**: username, email, password, firstName, lastName, phoneNumber
- **Security**: Encrypted passwords, role-based access control
- **Status**: active flag, emailVerified flag
- **Tracking**: createdAt, updatedAt, lastLoginAt, passwordChangedAt
- **Builder Pattern**: Using Lombok @Builder for flexible object construction

### Fields
```java
@Id private String id;                           // MongoDB ObjectId
private String username;                         // Unique identifier
private String email;                            // Unique email
private String password;                         // BCrypt encrypted
private String firstName;                        // User first name
private String lastName;                         // User last name
private String phoneNumber;                      // Optional phone
private Set<String> roles;                       // Role collection (default: USER)
private boolean active;                          // Account status
private boolean emailVerified;                   // Email verification status
private LocalDateTime createdAt;                 // Account creation
private LocalDateTime updatedAt;                 // Last update
private LocalDateTime lastLoginAt;               // Last login timestamp
private LocalDateTime passwordChangedAt;         // Last password change
```

### Helper Methods
```java
updateLastLogin()                // Record login timestamp
updatePassword(newPassword)      // Update password and timestamp
deactivate()                     // Deactivate account
activate()                       // Activate account
```

---

## 2. User Repository (repository/UserRepository.java)

### Basic Query Methods
```java
Optional<User> findByUsername(String username)
Optional<User> findByEmail(String email)
Optional<User> findByUsernameOrEmail(String username, String email)
```

### Existence Checks
```java
boolean existsByUsername(String username)
boolean existsByEmail(String email)
boolean existsByPhoneNumber(String phoneNumber)
```

### Role & Status Queries
```java
List<User> findByActive(boolean active)
List<User> findByEmailVerified(boolean emailVerified)
List<User> findByRolesContaining(String role)
```

### Advanced Queries
```java
List<User> findUsersLoggedInSince(LocalDateTime dateTime)  // Custom @Query
List<User> searchByUsernameOrEmail(String searchTerm)      // Regex search
long countByActive(boolean active)
long countByCreatedAtAfter(LocalDateTime dateTime)
long countByRolesContaining(String role)
```

---

## 3. User Authentication Service (service/UserAuthService.java)

### Core Methods

#### Profile Management
```java
getProfile(String username) → UserProfileDTO
updateProfile(String userId, UpdateProfileRequest) → UserProfileDTO
```

#### Password Management
```java
changePassword(String userId, ChangePasswordRequest) → void
```

#### Account Management
```java
recordLastLogin(String username) → void
deactivateAccount(String userId) → void
deleteUser(String userId) → void
```

#### User Retrieval
```java
getUserById(String userId) → User
getUserByUsername(String username) → User
getUserByEmail(String email) → User
```

#### Search & Statistics
```java
searchUsers(String searchTerm) → List<UserProfileDTO>
getActiveUserCount() → long
getTotalUsers() → long
getRecentlyLoggedInUsers(LocalDateTime since) → List<UserProfileDTO>
```

---

## 4. Authentication Service (service/AuthService.java)

### Methods

#### Authentication
```java
@Transactional
login(AuthRequest) → AuthResponse
  - Validates credentials
  - Records login timestamp
  - Generates JWT token

@Transactional
signup(SignupRequest) → AuthResponse
  - Validates email uniqueness
  - Validates username uniqueness
  - Password strength check (min 8 chars)
  - Encrypts password with BCrypt
  - Creates user with USER role
  - Generates JWT token
```

#### Token Management
```java
validateToken(String token) → boolean
getUsernameFromToken(String token) → String
```

---

## 5. Authentication Controller (controller/AuthController.java)

### Public Endpoints (No Authentication Required)

#### POST /api/auth/login
```
Request:
{
  "username": "string",
  "password": "string"
}

Response (200 OK):
{
  "code": 200,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiJ9...",
    "username": "string",
    "email": "string",
    "userId": "string"
  },
  "timestamp": 1710821367000
}
```

#### POST /api/auth/signup
```
Request:
{
  "username": "string",
  "email": "string",
  "password": "string (min 8 chars)",
  "confirmPassword": "string"
}

Response (201 CREATED):
{
  "code": 201,
  "message": "User registered successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiJ9...",
    "username": "string",
    "email": "string",
    "userId": "string"
  },
  "timestamp": 1710821367000
}
```

#### POST /api/auth/validate?token=
```
Response (200 OK):
{
  "code": 200,
  "message": "Success",
  "data": true,
  "timestamp": 1710821367000
}
```

#### GET /api/auth/health
```
Response (200 OK):
"Auth service is healthy"
```

---

### Protected Endpoints (Authentication Required)

**All requests must include Authorization header:**
```
Authorization: Bearer <jwt_token>
```

#### GET /api/auth/profile
```
Response (200 OK):
{
  "code": 200,
  "message": "Profile retrieved successfully",
  "data": {
    "id": "string",
    "username": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phoneNumber": "string",
    "roles": ["USER"],
    "active": true,
    "emailVerified": false,
    "createdAt": "2026-03-19T10:29:27",
    "updatedAt": "2026-03-19T10:29:27",
    "lastLoginAt": "2026-03-19T10:29:27"
  },
  "timestamp": 1710821367000
}
```

#### PUT /api/auth/profile
```
Request:
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phoneNumber": "string"
}

Response (200 OK):
UserProfileDTO (same as GET)
```

#### POST /api/auth/change-password
```
Request:
{
  "currentPassword": "string",
  "newPassword": "string (min 8 chars)",
  "confirmPassword": "string"
}

Response (200 OK):
{
  "code": 200,
  "message": "Password changed successfully",
  "data": null,
  "timestamp": 1710821367000
}
```

#### DELETE /api/auth/profile
```
Response (200 OK):
{
  "code": 200,
  "message": "Account deleted successfully",
  "data": null,
  "timestamp": 1710821367000
}
```

#### POST /api/auth/deactivate
```
Response (200 OK):
{
  "code": 200,
  "message": "Account deactivated successfully",
  "data": null,
  "timestamp": 1710821367000
}
```

#### GET /api/auth/verify
```
Response (200 OK):
{
  "code": 200,
  "message": "Token is valid for user: username",
  "data": null,
  "timestamp": 1710821367000
}
```

---

## 6. DTOs

### AuthRequest
```java
String username;    // Required
String password;    // Required
```

### SignupRequest
```java
String username;          // Required, unique
String email;             // Required, unique
String password;          // Required, min 8 chars
String confirmPassword;   // Required, must match password
```

### AuthResponse
```java
String token;       // JWT token
String username;    // Username
String email;       // Email
String userId;      // User ID
```

### UserProfileDTO
```java
String id;
String username;
String email;
String firstName;
String lastName;
String phoneNumber;
Set<String> roles;
boolean active;
boolean emailVerified;
LocalDateTime createdAt;
LocalDateTime updatedAt;
LocalDateTime lastLoginAt;
```

### UpdateProfileRequest
```java
String firstName;    // Optional
String lastName;     // Optional
String email;        // Optional
String phoneNumber;  // Optional
```

### ChangePasswordRequest
```java
String currentPassword;   // Required
String newPassword;       // Required, min 8 chars
String confirmPassword;   // Required, must match newPassword
```

---

## 7. Authentication Flow Diagram

```
┌─────────────────────────────────────────────────────┐
│                    Frontend App                     │
└────────────────────┬────────────────────────────────┘
                     │
                     │ 1. POST /api/auth/login
                     │    or signup
                     ▼
┌─────────────────────────────────────────────────────┐
│           AuthController                            │
│  - Validates request                                │
│  - Calls AuthService                                │
└────────────────────┬────────────────────────────────┘
                     │
                     │ 2. Login/Signup
                     ▼
┌─────────────────────────────────────────────────────┐
│           AuthService                               │
│  - Validates credentials                            │
│  - Checks user exists/availability                  │
│  - Encrypts password (BCrypt)                       │
│  - Calls UserAuthService                            │
└────────────────────┬────────────────────────────────┘
                     │
                     │ 3. Record login / Save user
                     ▼
┌─────────────────────────────────────────────────────┐
│           UserAuthService                           │
│  - Records login timestamp                          │
│  - Manages user lifecycle                           │
└────────────────────┬────────────────────────────────┘
                     │
                     │ 4. Generate JWT token
                     ▼
┌─────────────────────────────────────────────────────┐
│           JwtTokenProvider                          │
│  - Creates HS256 signed token                       │
│  - Sets expiration (24 hours)                       │
└────────────────────┬────────────────────────────────┘
                     │
                     │ 5. Send token (AuthResponse)
                     ▼
┌─────────────────────────────────────────────────────┐
│                 Frontend App                        │
│  - Stores token in localStorage/sessionStorage      │
│  - Includes in Authorization header for requests   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Protected Request Flow                             │
├─────────────────────────────────────────────────────┤
│  1. Frontend includes: Authorization: Bearer <token>
│  2. JwtAuthenticationFilter intercepts request
│  3. Extracts and validates token
│  4. Sets authentication context
│  5. Request proceeds to controller
│  6. Response returned
└─────────────────────────────────────────────────────┘
```

---

## 8. Security Features

### Password Security
- **Encryption**: BCrypt (strength 10)
- **Minimum Length**: 8 characters
- **Change Tracking**: passwordChangedAt timestamp
- **Current Password Verification**: Required for changes

### Token Security
- **Algorithm**: HS256 (HMAC SHA-256)
- **Expiration**: 24 hours (configurable)
- **Signing Key**: 32+ character secret
- **Header**: Authorization: Bearer <token>

### Account Security
- **Email Verification**: emailVerified flag
- **Account Deactivation**: Without deletion
- **Soft Delete**: Possible via deactivation
- **Login Tracking**: lastLoginAt timestamp

### Validation
- **Username**: Unique, required
- **Email**: Unique, required, RFC 5322 format
- **Password**: 8+ chars, must match confirmation
- **Phone**: Optional but must be unique if provided

---

## 9. Error Handling

### Common Errors

| Error | Status | Message |
|-------|--------|---------|
| Invalid credentials | 401 | "Invalid username or password" |
| User not found | 404 | "User not found with id/username/email" |
| Username exists | 400 | "Username already exists" |
| Email exists | 400 | "Email already exists" |
| Weak password | 400 | "Password must be at least 8 characters long" |
| Password mismatch | 400 | "Passwords do not match" |
| Account disabled | 401 | "User account is deactivated" |
| Invalid token | 401 | "Invalid or expired token" |

---

## 10. Best Practices

### For Users
1. **Store token securely** (localStorage for SPA, secure cookies for traditional web)
2. **Include Authorization header** in all protected requests
3. **Handle token expiration** gracefully (refresh or re-login)
4. **Use HTTPS** in production
5. **Clear token on logout**

### For Developers
1. **Never expose JWT secret** in code or git
2. **Validate all inputs** server-side
3. **Use HTTPS** in production
4. **Implement rate limiting** on auth endpoints
5. **Log authentication attempts** for audit
6. **Rotate secrets periodically**
7. **Implement refresh tokens** for long-lived sessions
8. **Monitor for brute force attacks**

---

## 11. MongoDB Collections

### Users Collection Example
```json
{
  "_id": ObjectId("60d5ec49f1b2c72d8c8e4a1b"),
  "username": "johndoe",
  "email": "john@example.com",
  "password": "$2a$10$...",  // BCrypt hash
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "+1234567890",
  "roles": ["USER"],
  "active": true,
  "emailVerified": true,
  "createdAt": ISODate("2026-03-19T10:29:27Z"),
  "updatedAt": ISODate("2026-03-19T10:29:27Z"),
  "lastLoginAt": ISODate("2026-03-19T10:29:27Z"),
  "passwordChangedAt": ISODate("2026-03-19T10:29:27Z")
}
```

---

## 12. Testing Guide

### Test Login
```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "password123"
  }'
```

### Test Signup
```bash
curl -X POST http://localhost:8081/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newuser",
    "email": "newuser@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### Test Protected Endpoint
```bash
curl -X GET http://localhost:8081/api/auth/profile \
  -H "Authorization: Bearer <your_token_here>"
```

### Test Token Validation
```bash
curl -X POST "http://localhost:8081/api/auth/validate?token=<your_token_here>"
```

---

## 13. Statistics & Monitoring

### Available Metrics
- Total active users: `getActiveUserCount()`
- Total users: `getTotalUsers()`
- Users created after date: `countByCreatedAtAfter()`
- Users with role: `countByRolesContaining()`
- Recently logged in users: `getRecentlyLoggedInUsers()`

### Example Query
```java
// In UserAuthService
long activeUsers = userAuthService.getActiveUserCount();
long totalUsers = userAuthService.getTotalUsers();
List<UserProfileDTO> recentUsers = userAuthService.getRecentlyLoggedInUsers(
    LocalDateTime.now().minusDays(7)
);
```

---

## File Summary

| File | Type | Purpose |
|------|------|---------|
| User.java | Model | User entity with role management |
| UserRepository.java | Repository | MongoDB queries and advanced searches |
| UserAuthService.java | Service | User lifecycle management |
| AuthService.java | Service | Authentication logic |
| AuthController.java | Controller | REST endpoints |
| UserProfileDTO.java | DTO | Profile data transfer |
| UpdateProfileRequest.java | DTO | Profile update request |
| ChangePasswordRequest.java | DTO | Password change request |

**Total Lines of Code**: ~600+
**Endpoints**: 10 (3 public, 7 protected)
**MongoDB Queries**: 15+
**Feature Complete**: ✅

