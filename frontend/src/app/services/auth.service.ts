import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthRequest, AuthResponse, SignupRequest, ApiResponse, UserProfile } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private http = inject(HttpClient);
  private currentUserSubject = new BehaviorSubject<UserProfile | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private tokenSubject = new BehaviorSubject<string | null>(this.getTokenFromStorage());
  public token$ = this.tokenSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(!!this.getTokenFromStorage());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  /**
   * Login with username and password
   */
  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/login`, authRequest)
      .pipe(
        map(response => {
          if (this.isOk(response.code) && response.data) {
            this.setToken(response.data.token);
            this.setCurrentUser(response.data);
            return response.data;
          }
          throw new Error(response.message || 'Login failed');
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Login failed')));
        })
      );
  }

  /**
   * Signup with new user credentials
   * Note: Does NOT auto-login. User must login after signup.
   */
  signup(signupRequest: SignupRequest): Observable<AuthResponse> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/signup`, signupRequest)
      .pipe(
        map(response => {
          if (this.isOk(response.code) && response.data) {
            // Don't set token or user after signup - let user login manually
            return response.data;
          }
          throw new Error(response.message || 'Signup failed');
        }),
        catchError(error => {
          console.error('Signup error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Signup failed')));
        })
      );
  }

  /**
   * Validate current token
   */
  validateToken(): Observable<boolean> {
    const token = this.getTokenFromStorage();
    if (!token) {
      return of(false);
    }

    const params = new HttpParams().set('token', token);
    return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/validate`, {}, { params })
      .pipe(
        map(response => this.isOk(response.code) && response.data === true),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
  }

  /**
   * Logout user
   */
  logout(): void {
    this.removeToken();
    this.removeCurrentUser();
    this.tokenSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  /**
   * Get current user profile
   */
  getCurrentUser(): Observable<UserProfile> {
    return this.http.get<ApiResponse<UserProfile>>(`${this.apiUrl}/profile`)
      .pipe(
        map(response => {
          if (this.isOk(response.code) && response.data) {
            this.setCurrentUser(response.data);
            return response.data;
          }
          throw new Error(response.message || 'Failed to fetch profile');
        }),
        catchError(error => {
          console.error('Get profile error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to fetch profile')));
        })
      );
  }

  /**
   * Get current token
   */
  getToken(): string | null {
    return this.tokenSubject.value;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Get current user synchronously
   */
  getCurrentUserSync(): UserProfile | null {
    return this.currentUserSubject.value;
  }

  /**
   * Private helper methods
   */
  private setToken(token: string): void {
    localStorage.setItem('auth_token', token);
    this.tokenSubject.next(token);
    this.isAuthenticatedSubject.next(true);
  }

  private getTokenFromStorage(): string | null {
    return localStorage.getItem('auth_token');
  }

  private removeToken(): void {
    localStorage.removeItem('auth_token');
  }

  private setCurrentUser(user: AuthResponse | UserProfile): void {
    const userId = 'userId' in user ? user.userId : ('id' in user ? user.id : '');
    const active = 'active' in user ? user.active : true;
    const emailVerified = 'emailVerified' in user ? user.emailVerified : false;
    const createdAt = 'createdAt' in user ? user.createdAt : new Date().toISOString();
    const updatedAt = 'updatedAt' in user ? user.updatedAt : new Date().toISOString();
    const firstName = 'firstName' in user ? user.firstName : undefined;
    const lastName = 'lastName' in user ? user.lastName : undefined;
    const phoneNumber = 'phoneNumber' in user ? user.phoneNumber : undefined;
    const lastLoginAt = 'lastLoginAt' in user ? user.lastLoginAt : undefined;

    const userProfile: UserProfile = {
      id: userId,
      username: user.username,
      email: user.email,
      active,
      emailVerified,
      createdAt,
      updatedAt,
      firstName,
      lastName,
      phoneNumber,
      lastLoginAt
    };
    localStorage.setItem('current_user', JSON.stringify(userProfile));
    this.currentUserSubject.next(userProfile);
  }

  private getUserFromStorage(): UserProfile | null {
    const userJson = localStorage.getItem('current_user');
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch {
        localStorage.removeItem('current_user');
        return null;
      }
    }
    return null;
  }

  private removeCurrentUser(): void {
    localStorage.removeItem('current_user');
  }

  private isOk(code: number): boolean {
    return code >= 200 && code < 300;
  }

  private extractErrorMessage(error: unknown, fallback: string): string {
    if (error instanceof Error) {
      return error.message || fallback;
    }

    const anyError = error as any;
    const serverError = anyError?.error;

    if (typeof serverError === 'string') {
      return serverError;
    }

    if (serverError?.message) {
      return serverError.message;
    }

    if (serverError?.error) {
      return serverError.error;
    }

    if (anyError?.message) {
      return anyError.message;
    }

    return fallback;
  }
}
