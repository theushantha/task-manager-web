import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Task, TaskCreateRequest, TaskStatus, TaskStats } from '../models/task.model';

interface TaskApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;
  private http = inject(HttpClient);
  
  // BehaviorSubjects for state management
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();
  
  private selectedTaskSubject = new BehaviorSubject<Task | null>(null);
  public selectedTask$ = this.selectedTaskSubject.asObservable();
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  
  private statsSubject = new BehaviorSubject<TaskStats | null>(null);
  public stats$ = this.statsSubject.asObservable();

  private upsertTaskInState(task: Task): void {
    const currentTasks = this.tasksSubject.value;
    const existingIndex = currentTasks.findIndex((t) => t.id === task.id);

    if (existingIndex >= 0) {
      const updatedTasks = [...currentTasks];
      updatedTasks[existingIndex] = task;
      this.tasksSubject.next(updatedTasks);
    } else {
      this.tasksSubject.next([task, ...currentTasks]);
    }

    this.selectedTaskSubject.next(task);
  }

  /**
   * Get all tasks for current user
   */
  getAllTasks(): Observable<Task[]> {
    this.loadingSubject.next(true);
    return this.http.get<TaskApiResponse<Task[]>>(this.apiUrl)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            this.tasksSubject.next(response.data);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to fetch tasks');
        }),
        catchError(error => {
          console.error('Get tasks error:', error);
          this.loadingSubject.next(false);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to fetch tasks')));
        }),
        tap(() => this.loadingSubject.next(false))
      );
  }

  /**
   * Get single task by ID
   */
  getTaskById(taskId: string): Observable<Task> {
    return this.http.get<TaskApiResponse<Task>>(`${this.apiUrl}/${taskId}`)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            this.selectedTaskSubject.next(response.data);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to fetch task');
        }),
        catchError(error => {
          console.error('Get task error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to fetch task')));
        })
      );
  }

  /**
   * Create new task
   */
  createTask(taskData: TaskCreateRequest): Observable<Task> {
    this.loadingSubject.next(true);
    return this.http.post<TaskApiResponse<Task>>(this.apiUrl, taskData)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            const currentTasks = this.tasksSubject.value;
            this.tasksSubject.next([...currentTasks, response.data]);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to create task');
        }),
        catchError(error => {
          console.error('Create task error:', error);
          this.loadingSubject.next(false);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to create task')));
        }),
        tap(() => this.loadingSubject.next(false))
      );
  }

  /**
   * Update existing task
   */
  updateTask(taskId: string, taskData: TaskCreateRequest): Observable<Task> {
    this.loadingSubject.next(true);
    return this.http.put<TaskApiResponse<Task>>(`${this.apiUrl}/${taskId}`, taskData)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            this.upsertTaskInState(response.data);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to update task');
        }),
        catchError(error => {
          console.error('Update task error:', error);
          this.loadingSubject.next(false);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to update task')));
        }),
        tap(() => this.loadingSubject.next(false))
      );
  }

  /**
   * Delete task
   */
  deleteTask(taskId: string): Observable<void> {
    this.loadingSubject.next(true);
    return this.http.delete<TaskApiResponse<void>>(`${this.apiUrl}/${taskId}`)
      .pipe(
        map(response => {
          if (response.success) {
            const updatedTasks = this.tasksSubject.value.filter(t => t.id !== taskId);
            this.tasksSubject.next(updatedTasks);
            if (this.selectedTaskSubject.value?.id === taskId) {
              this.selectedTaskSubject.next(null);
            }
            return undefined;
          }
          throw new Error(response.error || response.message || 'Failed to delete task');
        }),
        catchError(error => {
          console.error('Delete task error:', error);
          this.loadingSubject.next(false);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to delete task')));
        }),
        tap(() => this.loadingSubject.next(false))
      );
  }

  /**
   * Get tasks by status
   */
  getTasksByStatus(status: TaskStatus): Observable<Task[]> {
    return this.http.get<TaskApiResponse<Task[]>>(`${this.apiUrl}/status/${status}`)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to fetch tasks');
        }),
        catchError(error => {
          console.error('Get tasks by status error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to fetch tasks')));
        })
      );
  }

  /**
   * Update task status
   */
  updateTaskStatus(taskId: string, status: TaskStatus): Observable<Task> {
    const params = new HttpParams().set('status', status);
    return this.http.patch<TaskApiResponse<Task>>(`${this.apiUrl}/${taskId}/status`, {}, { params })
      .pipe(
        map(response => {
          if (response.success && response.data) {
            this.upsertTaskInState(response.data);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to update status');
        }),
        catchError(error => {
          console.error('Update status error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to update status')));
        })
      );
  }

  /**
   * Mark task as completed
   */
  completeTask(taskId: string): Observable<Task> {
    return this.http.post<TaskApiResponse<Task>>(`${this.apiUrl}/${taskId}/complete`, {})
      .pipe(
        map(response => {
          if (response.success && response.data) {
            const updatedTasks = this.tasksSubject.value.map(t =>
              t.id === taskId ? response.data : t
            ).filter(t => !!t) as Task[];
            this.tasksSubject.next(updatedTasks);
            this.selectedTaskSubject.next(response.data);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to complete task');
        }),
        catchError(error => {
          console.error('Complete task error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to complete task')));
        })
      );
  }

  /**
   * Mark task as in progress
   */
  markInProgress(taskId: string): Observable<Task> {
    return this.http.post<TaskApiResponse<Task>>(`${this.apiUrl}/${taskId}/in-progress`, {})
      .pipe(
        map(response => {
          if (response.success && response.data) {
            const updatedTasks = this.tasksSubject.value.map(t =>
              t.id === taskId ? response.data : t
            ).filter(t => !!t) as Task[];
            this.tasksSubject.next(updatedTasks);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to mark task');
        }),
        catchError(error => {
          console.error('Mark in progress error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to mark task')));
        })
      );
  }

  /**
   * Toggle task starred status
   */
  toggleStarred(taskId: string): Observable<Task> {
    return this.http.post<TaskApiResponse<Task>>(`${this.apiUrl}/${taskId}/toggle-starred`, {})
      .pipe(
        map(response => {
          if (response.success && response.data) {
            const updatedTasks = this.tasksSubject.value.map(t =>
              t.id === taskId ? response.data : t
            ).filter(t => !!t) as Task[];
            this.tasksSubject.next(updatedTasks);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to toggle starred');
        }),
        catchError(error => {
          console.error('Toggle starred error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to toggle starred')));
        })
      );
  }

  /**
   * Get task statistics
   */
  getStats(): Observable<TaskStats> {
    return this.http.get<TaskApiResponse<TaskStats>>(`${this.apiUrl}/stats/overview`)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            this.statsSubject.next(response.data);
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to fetch stats');
        }),
        catchError(error => {
          console.error('Get stats error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to fetch stats')));
        })
      );
  }

  /**
   * Search tasks with search term
   */
  searchTasks(searchTerm: string): Observable<Task[]> {
    const params = new HttpParams().set('q', searchTerm);
    return this.http.get<TaskApiResponse<Task[]>>(`${this.apiUrl}/search`, { params })
      .pipe(
        map(response => {
          if (response.success && response.data) {
            return response.data;
          }
          throw new Error(response.error || response.message || 'Search failed');
        }),
        catchError(error => {
          console.error('Search error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Search failed')));
        })
      );
  }

  /**
   * Get completed tasks
   */
  getCompletedTasks(): Observable<Task[]> {
    return this.http.get<TaskApiResponse<Task[]>>(`${this.apiUrl}/completed`)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to fetch completed tasks');
        }),
        catchError(error => {
          console.error('Get completed tasks error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to fetch tasks')));
        })
      );
  }

  /**
   * Get overdue tasks
   */
  getOverdueTasks(): Observable<Task[]> {
    return this.http.get<TaskApiResponse<Task[]>>(`${this.apiUrl}/overdue`)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            return response.data;
          }
          throw new Error(response.error || response.message || 'Failed to fetch overdue tasks');
        }),
        catchError(error => {
          console.error('Get overdue tasks error:', error);
          return throwError(() => new Error(this.extractErrorMessage(error, 'Failed to fetch tasks')));
        })
      );
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
