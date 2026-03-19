import { Injectable, inject } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * No Auth Guard - Prevents authenticated users from accessing auth pages
 * Redirects authenticated users to dashboard/tasks
 * Allows unauthenticated users to access login and signup pages
 */
@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // If already authenticated, redirect to tasks/dashboard
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/tasks']);
      return false;
    }

    // Allow unauthenticated users to access auth pages
    return true;
  }
}
