import { Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus, TaskPriority } from '../../models/task.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { Subject, debounceTime, distinctUntilChanged, map } from 'rxjs';
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
  private normalizedSearchTerm = '';
  private searchIndex = new Map<string, string>();

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  loading = false;
  error = '';
  searchTerm = '';
  selectedFilter: 'all' | 'pending' | 'inProgress' | 'completed' | 'starred' = 'all';
  selectedTaskId: string | null = null;
  deleteConfirmId: string | null = null;
  deleteConfirmTaskTitle = '';
  deleteLoading = false;

  // Status and priority enums for template
  TaskStatus = TaskStatus;
  TaskPriority = TaskPriority;

  ngOnInit(): void {
    // Subscribe to service tasks for real-time updates
    this.taskService.tasks$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tasks) => {
          this.setTasks(tasks || []);
          this.applyFilters();
          this.cdr.markForCheck();
        }
      });

    // Handle search with debounce
    this.searchTerm$
      .pipe(
        map((term) => term.trim().toLowerCase()),
        distinctUntilChanged(),
        debounceTime(300),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (term) => {
          this.normalizedSearchTerm = term;
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
    
    this.taskService.getAllTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tasks) => {
          this.setTasks(tasks || []);
          this.applyFilters();
          this.loading = false;
        },
        error: (error) => {
          this.error = error.message || 'Failed to load tasks';
          this.setTasks([]);
          this.filteredTasks = [];
          this.loading = false;
        }
      });
  }

  applyFilters(): void {
    const hasSearchTerm = this.normalizedSearchTerm.length > 0;
    const filtered: Task[] = [];

    for (const task of this.tasks) {
      if (!this.matchesSelectedFilter(task)) {
        continue;
      }

      if (hasSearchTerm) {
        const searchable = this.searchIndex.get(task.id) || '';
        if (!searchable.includes(this.normalizedSearchTerm)) {
          continue;
        }
      }

      filtered.push(task);
    }

    this.filteredTasks = filtered;

    if (this.selectedTaskId) {
      const selectedExists = filtered.some((task) => task.id === this.selectedTaskId);
      if (!selectedExists) {
        this.selectedTaskId = null;
      }
    }
  }

  onFilterChange(): void {
    this.applyFilters();
    this.cdr.markForCheck();
  }

  onSearchChange(): void {
    this.searchTerm$.next(this.searchTerm);
  }

  private setTasks(tasks: Task[]): void {
    this.tasks = tasks;
    this.rebuildSearchIndex();
  }

  selectTask(taskId: string): void {
    this.selectedTaskId = taskId;
    this.cdr.markForCheck();
  }

  isTaskSelected(taskId: string): boolean {
    return this.selectedTaskId === taskId;
  }

  getSelectedTask(): Task | null {
    if (!this.selectedTaskId) {
      return null;
    }

    return this.tasks.find((task) => task.id === this.selectedTaskId) || null;
  }

  clearSelectedTask(): void {
    this.selectedTaskId = null;
    this.cdr.markForCheck();
  }

  private rebuildSearchIndex(): void {
    this.searchIndex.clear();

    for (const task of this.tasks) {
      const searchable = [
        task.title,
        task.description,
        task.category,
        (task.tags || []).join(' ')
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      this.searchIndex.set(task.id, searchable);
    }
  }

  private matchesSelectedFilter(task: Task): boolean {
    switch (this.selectedFilter) {
      case 'pending':
        return task.status === TaskStatus.PENDING;
      case 'inProgress':
        return task.status === TaskStatus.IN_PROGRESS;
      case 'completed':
        return task.status === TaskStatus.COMPLETED;
      case 'starred':
        return task.starred === true;
      case 'all':
      default:
        return true;
    }
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

  confirmDelete(event: Event, task: Task): void {
    event.stopPropagation();
    this.deleteConfirmId = task.id;
    this.deleteConfirmTaskTitle = task.title;
    this.cdr.markForCheck();
  }

  cancelDelete(event: Event): void {
    event.stopPropagation();
    this.deleteConfirmId = null;
    this.deleteConfirmTaskTitle = '';
    this.deleteLoading = false;
    this.cdr.markForCheck();
  }

  deleteTask(event: Event): void {
    event.stopPropagation();
    if (!this.deleteConfirmId || this.deleteLoading) return;

    this.deleteLoading = true;

    this.taskService.deleteTask(this.deleteConfirmId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          if (this.selectedTaskId === this.deleteConfirmId) {
            this.selectedTaskId = null;
          }
          this.deleteConfirmId = null;
          this.deleteConfirmTaskTitle = '';
          this.deleteLoading = false;
          this.loadTasks(); // Reload to ensure UI is in sync
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.error = error.message || 'Failed to delete task';
          this.deleteConfirmId = null;
          this.deleteConfirmTaskTitle = '';
          this.deleteLoading = false;
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
