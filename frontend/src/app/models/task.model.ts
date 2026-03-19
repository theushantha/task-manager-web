// Task model/interface
export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string; // ISO format date string
  tags?: string[];
  assignees?: string[];
  category?: string;
  starred: boolean;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

// Task status enum
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Task priority enum
export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

// Create/Update task request payload
export interface TaskCreateRequest {
  title: string;
  description: string;
  status?: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  tags?: string[];
  assignees?: string[];
  category?: string;
  starred?: boolean;
}

// Task statistics
export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  inProgress: number;
  highPriority: number;
  overdue: number;
  completionRate: number;
}

// Task filter options
export interface TaskFilterOptions {
  status?: TaskStatus;
  priority?: TaskPriority;
  category?: string;
  tag?: string;
  starred?: boolean;
  searchTerm?: string;
}
