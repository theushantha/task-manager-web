import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task, TaskPriority, TaskStatus } from '../../models/task.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();

  taskForm!: FormGroup;
  submitted = false;
  loading = false;
  initialLoading = true;
  error = '';
  success = false;
  taskId = '';

  // Enums for dropdowns
  TaskPriority = TaskPriority;
  TaskStatus = TaskStatus;
  priorityOptions = Object.values(TaskPriority);
  statusOptions = Object.values(TaskStatus);

  ngOnInit(): void {
    this.initializeForm();
    this.loadTask();
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
      tags: [''],
      starred: [false]
    });
  }

  loadTask(): void {
    this.taskId = this.route.snapshot.paramMap.get('id') || '';
    
    if (!this.taskId) {
      this.error = 'Task ID not found';
      this.initialLoading = false;
      return;
    }

    this.taskService.getTaskById(this.taskId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (task) => {
          this.populateForm(task);
          this.initialLoading = false;
        },
        error: (error) => {
          this.error = error.message || 'Failed to load task';
          this.initialLoading = false;
        }
      });
  }

  populateForm(task: Task): void {
    const tagsString = task.tags ? task.tags.join(', ') : '';
    const dueDateValue = task.dueDate ? task.dueDate.split('T')[0] : '';

    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: dueDateValue,
      category: task.category || '',
      tags: tagsString,
      starred: task.starred || false
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

    this.taskService.updateTask(this.taskId, taskData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          setTimeout(() => {
            this.router.navigate(['/tasks']);
          }, 1500);
        },
        error: (error) => {
          this.error = error.message || 'Failed to update task';
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
