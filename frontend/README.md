# Task Manager Web - Frontend

Angular 17.0.0 based frontend for the Task Manager application with JWT authentication and task management features.

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.scss
│   │   │   └── register/
│   │   │       ├── register.component.ts
│   │   │       ├── register.component.html
│   │   │       └── register.component.scss
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── interceptors/
│   │   │   └── jwt.interceptor.ts
│   │   ├── models/
│   │   │   └── auth.model.ts
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.scss
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── main.ts
│   ├── index.html
│   └── styles.scss
├── angular.json
├── tsconfig.json
├── package.json
├── proxy.conf.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- Angular CLI v17.0.0

### Setup Steps

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   # Application runs on http://localhost:4200
   ```

3. **Build for Production**
   ```bash
   npm run build
   # Production build output in dist/ folder
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## Configuration

### Backend API Configuration

**Development** (`src/environments/environment.ts`):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api'
};
```

**Production** (`src/environments/environment.prod.ts`):
```typescript
export const environment = {
  production: true,
  apiUrl: '/api'
};
```

### Proxy Configuration

Dev server proxy (`proxy.conf.json`) automatically forwards `/api` requests to backend:
```json
{
  "/api": {
    "target": "http://localhost:8081",
    "secure": false,
    "pathRewrite": {"^/api": "/api"}
  }
}
```

## Core Features

### Authentication
- **Login Component**: Username/password authentication
- **Register Component**: New user account creation
- **AuthService**: Centralized auth logic with observables
- **JWT Interceptor**: Automatic token attachment to requests
- **Auth Guard**: Route protection for authenticated-only pages
- **Token Management**: LocalStorage persistence

### Models & Types
```typescript
// AuthRequest - Login credentials
interface AuthRequest {
  username: string;
  password: string;
}

// AuthResponse - Login/Signup response
interface AuthResponse {
  token: string;
  username: string;
  email: string;
  userId: string;
}

// SignupRequest - Registration form data
interface SignupRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// UserProfile - Complete user information
interface UserProfile {
  userId: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

// ApiResponse<T> - Generic API response wrapper
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

### Services

**AuthService** (`src/app/services/auth.service.ts`)
- `login(authRequest)`: Login user
- `signup(signupRequest)`: Create new account
- `logout()`: Clear authentication
- `getCurrentUser()`: Fetch user profile
- `validateToken()`: Check token validity
- `getToken()`: Retrieve stored JWT token
- `isAuthenticated()`: Check auth status
- **Observables**:
  - `currentUser$`: Current user data stream
  - `token$`: Token state stream
  - `isAuthenticated$`: Auth status stream

### Components

**LoginComponent**
- Username/password form
- Client-side validation
- Error message display
- Loading state indicator
- Password visibility toggle
- "Forgot password" & signup links
- Responsive mobile design

**RegisterComponent**
- Full registration form (username, email, password)
- Password strength indicator
- Password match validation
- Terms & conditions checkbox
- Client-side and server-side validation
- Success message on signup
- Password visibility toggles

### Global Styling

`src/styles.scss` provides consistent styling for:
- Forms (labels, inputs, validation)
- Buttons (primary, secondary, variants)
- Alerts (success, error, warning)
- Cards (container styling)
- Utility classes (spacing, colors, text)

## Development Workflow

### Adding New Components

```bash
# Generate new component
ng generate component components/task-list
ng generate component components/task-detail
```

### Adding New Services

```bash
# Generate service
ng generate service services/task.service
```

### Type Checking

All components use TypeScript with strict mode enabled in `tsconfig.json`.

## Running the Application

### Start Backend First
```bash
cd backend
mvn spring-boot:run  # Runs on http://localhost:8081
```

### Start Frontend
```bash
cd frontend
npm start  # Runs on http://localhost:4200
```

### Access Application
```
http://localhost:4200
```

## Authentication Flow

1. **User navigates to `/auth/login`**
   - LoginComponent displays login form

2. **User enters credentials and submits**
   - LoginComponent calls AuthService.login()
   - AuthService posts to `/api/auth/login`

3. **Backend validates credentials**
   - Returns JWT token and user profile
   - AuthService stores token in localStorage
   - BehaviorSubjects emit updated state

4. **Authentication established**
   - User redirected to `/tasks`
   - Authorization header attached to all subsequent requests
   - JWT Interceptor handles token attachment

5. **Protected Routes**
   - AuthGuard checks authentication status
   - Redirects to login if token invalid/expired
   - JWT Interceptor handles 401 responses

## Security Features

- **JWT Token Storage**: Secure localStorage management
- **HTTP Interceptor**: Automatic token attachment to all API requests
- **Auth Guard**: Route-level access control
- **CORS Handling**: Backend configured for localhost:3000 & localhost:5173
- **Password Security**: 
  - Client-side strength indicator
  - Server-side bcrypt encryption
  - Confirm password validation
- **Error Handling**: User-friendly error messages
- **Session Management**: Automatic logout on 401 responses

## Environment Variables

Create `.env` file in frontend root (if needed for additional config):
```
API_URL=http://localhost:8081/api
NODE_ENV=development
```

## Compliance & Standards

- Angular 17.0.0 (Latest LTS)
- TypeScript 5.2.0 with strict mode
- RxJS 7.8.0 for reactive patterns
- Reactive Forms for validation
- SCSS for styling
- Mobile-responsive design
- WCAG compliance considerations

## Troubleshooting

### 401 Unauthorized Errors
- Check backend is running on http://localhost:8081
- Verify JWT token is stored in localStorage
- Clear cache and retry login

### CORS Errors
- Ensure backend CORS is configured for `http://localhost:4200`
- Check proxy.conf.json is correctly set up

### Token Expired
- Automatic logout occurs on 401 response
- User redirected to login
- New token required for subsequent requests

### Port Already in Use
```bash
# Kill process on port 4200 (macOS/Linux)
lsof -i :4200 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Or use different port
ng serve --port 4300
```

## Next Steps

- **Task List Component**: Display all tasks
- **Task Detail Component**: View/edit individual tasks
- **Dashboard**: Overview of tasks and statistics
- **Task Filter**: Filter by status, priority, category
- **Search Functionality**: Search tasks by keyword
- **User Profile**: User settings and preferences
- **Responsive Design**: Optimize for tablets and phones
- **Unit Tests**: Jasmine/Karma test suite
- **E2E Tests**: Cypress/Protractor tests

## Contributing Guidelines

- Follow Angular style guide
- Use strict TypeScript mode
- Write unit tests for new features
- Ensure responsive design
- Test in multiple browsers
- Document complex logic

## License

MIT License - See LICENSE file for details
