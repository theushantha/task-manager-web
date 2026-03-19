import { Injectable, inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/**
 * Enhanced Auth Guard - Protects authenticated routes
 * Validates token and checks authentication status
 * Redirects unauthenticated users to login
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if user is authenticated
    if (this.authService.isAuthenticated()) {
      // Validate token with backend (optional but recommended)
      return this.authService.validateToken().pipe(
        map(isValid => {
          if (isValid) {
            return true;
          }
          // Token is invalid, redirect to login
          this.authService.logout();
          this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }),
        catchError(() => {
          // Validation request failed, logout and redirect
          this.authService.logout();
          this.router.navigate(['/auth/login']);
          return of(false);
        })
      );
    }

    // Not logged in, redirect to login page with return URL
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
