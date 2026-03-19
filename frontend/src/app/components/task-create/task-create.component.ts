import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskPriority, TaskStatus } from '../../models/task.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();

  taskForm!: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  success = false;

  // Enums for dropdowns
  TaskPriority = TaskPriority;
  TaskStatus = TaskStatus;
  priorityOptions = Object.values(TaskPriority);
  statusOptions = Object.values(TaskStatus);

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initializeForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
      priority: [TaskPriority.MEDIUM, Validators.required],
      status: [TaskStatus.PENDING, Validators.required],
      dueDate: [''],
      category: [''],
      tags: ['']
    });
  }

  get f() {
    return this.taskForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = '';

    if (this.taskForm.invalid) {
      return;
    }

    this.loading = true;
    const formValue = this.taskForm.value;
    
    const taskData = {
      title: formValue.title,
      description: formValue.description,
      priority: formValue.priority,
      status: formValue.status,
      dueDate: formValue.dueDate ? new Date(formValue.dueDate).toISOString() : undefined,
      category: formValue.category || undefined,
      tags: formValue.tags ? formValue.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t) : [],
      starred: formValue.starred || false
    };

    this.taskService.createTask(taskData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.loading = false;
          this.success = true;
          // Immediately return to dashboard so the new task is visible.
          this.router.navigate(['/tasks']);
        },
        error: (error) => {
          this.error = error.message || 'Failed to create task';
          this.loading = false;
        }
      });
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }

  /**
   * Guard method to prevent navigation with unsaved changes
   */
  canDeactivate(): Observable<boolean> | boolean {
    // If form has no changes and not loading, allow navigation
    if (!this.taskForm.dirty && !this.loading) {
      return true;
    }

    // If form has been submitted successfully, allow navigation
    if (this.success) {
      return true;
    }

    // If form is loading, prevent navigation
    if (this.loading) {
      return false;
    }

    // Form has unsaved changes, ask for confirmation
    if (this.taskForm.dirty) {
      return confirm('You have unsaved changes. Do you want to leave without saving?');
    }

    return true;
  }
}
