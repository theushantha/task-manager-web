import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus, TaskPriority } from '../../models/task.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  private taskService = inject(TaskService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();

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
          this.tasks = tasks;
          this.applyFilters();
          this.loading = false;
        },
        error: (error) => {
          this.error = error.message || 'Failed to load tasks';
          this.loading = false;
        }
      });
  }

  applyFilters(): void {
    let filtered = this.tasks;

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
        filtered = filtered.filter(t => t.starred);
        break;
    }

    // Apply search
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(t =>
        t.title.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term)
      );
    }

    this.filteredTasks = filtered;
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onStatusChange(task: Task, newStatus: string): void {
    this.taskService.updateTaskStatus(task.id, newStatus as TaskStatus)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.applyFilters();
        },
        error: (error) => {
          this.error = error.message || 'Failed to update task status';
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
          this.applyFilters();
        },
        error: (error) => {
          this.error = error.message || 'Failed to toggle starred';
        }
      });
  }

  editTask(task: Task): void {
    this.router.navigate(['/tasks', task.id, 'edit']);
  }

  confirmDelete(event: Event, taskId: string): void {
    event.stopPropagation();
    this.deleteConfirmId = taskId;
  }

  cancelDelete(event: Event): void {
    event.stopPropagation();
    this.deleteConfirmId = null;
  }

  deleteTask(event: Event): void {
    event.stopPropagation();
    if (!this.deleteConfirmId) return;

    this.taskService.deleteTask(this.deleteConfirmId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.deleteConfirmId = null;
          this.applyFilters();
        },
        error: (error) => {
          this.error = error.message || 'Failed to delete task';
          this.deleteConfirmId = null;
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
