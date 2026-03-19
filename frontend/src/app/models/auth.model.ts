// Authentication request model
export interface AuthRequest {
  username: string;
  password: string;
}

// Authentication response model
export interface AuthResponse {
  token: string;
  username: string;
  email: string;
  userId: string;
}

// Signup request model
export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// User profile model
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  active: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

// API Response wrapper
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: number;
}
