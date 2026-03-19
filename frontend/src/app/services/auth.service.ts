import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
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
          if (response.success && response.data) {
            this.setToken(response.data.token);
            this.setCurrentUser(response.data);
            return response.data;
          }
          throw new Error(response.error || 'Login failed');
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => new Error(error.error?.error || 'Login failed'));
        })
      );
  }

  /**
   * Signup with new user credentials
   */
  signup(signupRequest: SignupRequest): Observable<AuthResponse> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/signup`, signupRequest)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            this.setToken(response.data.token);
            this.setCurrentUser(response.data);
            return response.data;
          }
          throw new Error(response.error || 'Signup failed');
        }),
        catchError(error => {
          console.error('Signup error:', error);
          return throwError(() => new Error(error.error?.error || 'Signup failed'));
        })
      );
  }

  /**
   * Validate current token
   */
  validateToken(): Observable<boolean> {
    const token = this.getTokenFromStorage();
    if (!token) {
      return new Observable(observer => {
        observer.next(false);
        observer.complete();
      });
    }

    return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/validate`, {})
      .pipe(
        map(response => response.success),
        catchError(() => {
          this.logout();
          return new Observable<boolean>(observer => {
            observer.next(false);
            observer.complete();
          });
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
          if (response.success && response.data) {
            this.setCurrentUser(response.data);
            return response.data;
          }
          throw new Error('Failed to fetch profile');
        }),
        catchError(error => {
          console.error('Get profile error:', error);
          return throwError(() => new Error('Failed to fetch profile'));
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
}
