import { Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus, TaskPriority } from '../../models/task.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { Subject, debounceTime } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit, OnDestroy {
  private taskService = inject(TaskService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private destroy$ = new Subject<void>();
  private searchTerm$ = new Subject<string>();

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  loading = false;
  error = '';
  searchTerm = '';
  selectedFilter: 'all' | 'pending' | 'inProgress' | 'completed' | 'starred' = 'all';
  deleteConfirmId: string | null = null;

  // Status and priority enums for template
  TaskStatus = TaskStatus;
  TaskPriority = TaskPriority;

  ngOnInit(): void {
    // Subscribe to service tasks for real-time updates
    this.taskService.tasks$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks || [];
          this.applyFilters();
          this.cdr.markForCheck();
        }
      });

    // Handle search with debounce
    this.searchTerm$
      .pipe(
        debounceTime(300),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (term) => {
          this.searchTerm = term;
          this.applyFilters();
          this.cdr.markForCheck();
        }
      });

    // Load initial tasks
    this.loadTasks();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadTasks(): void {
    this.loading = true;
    this.error = '';
    this.selectedFilter = 'all'; // Reset filter when loading
    
    this.taskService.getAllTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks || [];
          this.applyFilters();
          this.loading = false;
        },
        error: (error) => {
          this.error = error.message || 'Failed to load tasks';
          this.tasks = [];
          this.filteredTasks = [];
          this.loading = false;
        }
      });
  }

  applyFilters(): void {
    let filtered = [...this.tasks]; // Create copy to avoid mutations

    // Apply filter
    switch (this.selectedFilter) {
      case 'pending':
        filtered = filtered.filter(t => t.status === TaskStatus.PENDING);
        break;
      case 'inProgress':
        filtered = filtered.filter(t => t.status === TaskStatus.IN_PROGRESS);
        break;
      case 'completed':
        filtered = filtered.filter(t => t.status === TaskStatus.COMPLETED);
        break;
      case 'starred':
        filtered = filtered.filter(t => t.starred === true);
        break;
      case 'all':
      default:
        // No additional filtering needed for 'all'
        break;
    }

    // Apply search
    if (this.searchTerm && this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(t =>
        (t.title && t.title.toLowerCase().includes(term)) ||
        (t.description && t.description.toLowerCase().includes(term))
      );
    }

    this.filteredTasks = filtered;
  }

  onFilterChange(): void {
    this.applyFilters();
    this.cdr.markForCheck();
  }

  onSearchChange(): void {
    this.searchTerm$.next(this.searchTerm);
  }

  onStatusChange(task: Task, newStatus: string): void {
    this.taskService.updateTaskStatus(task.id, newStatus as TaskStatus)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.error = error.message || 'Failed to update task status';
          this.cdr.markForCheck();
        }
      });
  }

  handleStatusChange(event: Event, task: Task): void {
    const selectElement = event.target as HTMLSelectElement;
    this.onStatusChange(task, selectElement.value);
  }

  toggleStarred(event: Event, task: Task): void {
    event.stopPropagation();
    this.taskService.toggleStarred(task.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.error = error.message || 'Failed to toggle starred';
          this.cdr.markForCheck();
        }
      });
  }

  editTask(task: Task): void {
    this.router.navigate(['/tasks', task.id, 'edit']);
  }

  confirmDelete(event: Event, taskId: string): void {
    event.stopPropagation();
    this.deleteConfirmId = taskId;
    this.cdr.markForCheck();
  }

  cancelDelete(event: Event): void {
    event.stopPropagation();
    this.deleteConfirmId = null;
    this.cdr.markForCheck();
  }

  deleteTask(event: Event): void {
    event.stopPropagation();
    if (!this.deleteConfirmId) return;

    this.taskService.deleteTask(this.deleteConfirmId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.deleteConfirmId = null;
          this.loadTasks(); // Reload to ensure UI is in sync
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.error = error.message || 'Failed to delete task';
          this.deleteConfirmId = null;
          this.cdr.markForCheck();
        }
      });
  }

  getPriorityClass(priority: TaskPriority): string {
    switch (priority) {
      case TaskPriority.HIGH:
        return 'priority-high';
      case TaskPriority.MEDIUM:
        return 'priority-medium';
      case TaskPriority.LOW:
        return 'priority-low';
      default:
        return '';
    }
  }

  getStatusClass(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.PENDING:
        return 'status-pending';
      case TaskStatus.IN_PROGRESS:
        return 'status-in-progress';
      case TaskStatus.COMPLETED:
        return 'status-completed';
      case TaskStatus.CANCELLED:
        return 'status-cancelled';
      default:
        return '';
    }
  }

  createNewTask(): void {
    this.router.navigate(['/tasks/create']);
  }
}
