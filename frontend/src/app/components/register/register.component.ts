import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SignupRequest } from '../../models/auth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error: string | null = null;
  showPassword = false;
  showConfirmPassword = false;
  passwordStrength = 0;

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    // Redirect to dashboard if already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/tasks']);
    }

    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(128)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: this.passwordMatchValidator()
      }
    );

    // Monitor password field for strength calculation
    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      this.calculatePasswordStrength();
    });
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;

      if (password && confirmPassword && password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else if (password && confirmPassword && password === confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors(null);
      }

      return null;
    };
  }

  get f() {
    return this.registerForm.controls;
  }

  calculatePasswordStrength(): void {
    const password = this.f['password'].value;
    if (!password) {
      this.passwordStrength = 0;
      return;
    }

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[\W_]/.test(password)) strength += 1;

    this.passwordStrength = Math.min(strength, 5);
  }

  getPasswordStrengthText(): string {
    switch (this.passwordStrength) {
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      case 5:
        return 'Very Strong';
      default:
        return '';
    }
  }

  getPasswordStrengthClass(): string {
    switch (this.passwordStrength) {
      case 1:
        return 'weak';
      case 2:
        return 'fair';
      case 3:
        return 'good';
      case 4:
        return 'strong';
      case 5:
        return 'very-strong';
      default:
        return '';
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = null;

    // Stop if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.disableForm();

    const signupRequest: SignupRequest = {
      username: this.f['username'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      confirmPassword: this.f['confirmPassword'].value
    };

    this.authService.signup(signupRequest).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        this.loading = false;
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.error('Signup failed:', error);
        this.error = error.message || 'Signup failed. Please try again.';
        this.loading = false;
        this.enableForm();
      }
    });
  }

  private disableForm(): void {
    Object.keys(this.registerForm.controls).forEach(key => {
      this.registerForm.get(key)?.disable();
    });
  }

  private enableForm(): void {
    Object.keys(this.registerForm.controls).forEach(key => {
      this.registerForm.get(key)?.enable();
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  goToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
