# Task Management API Guide

## Overview

The Task Management API provides comprehensive CRUD operations and advanced task management features including filtering, searching, status tracking, tagging, assignments, and statistics.

---

## Task Entity Model

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | MongoDB auto-generated task ID |
| `userId` | String | Owner of the task (from authenticated user) |
| `title` | String | Task title |
| `description` | String | Detailed task description |
| `status` | String | Task status (PENDING, IN_PROGRESS, COMPLETED, CANCELLED) |
| `priority` | String | Task priority (LOW, MEDIUM, HIGH) |
| `dueDate` | LocalDateTime | Task due date |
| `tags` | List<String> | List of tags/labels for categorization |
| `assignees` | List<String> | List of people assigned to task |
| `category` | String | Task category for grouping |
| `starred` | boolean | Whether task is favorited |
| `completedAt` | LocalDateTime | Timestamp when task was completed |
| `createdAt` | LocalDateTime | Task creation timestamp |
| `updatedAt` | LocalDateTime | Last update timestamp |

### Status Values

- **PENDING**: Task waiting to be started (default)
- **IN_PROGRESS**: Task currently being worked on
- **COMPLETED**: Task finished successfully
- **CANCELLED**: Task cancelled and no longer active

### Priority Values

- **LOW**: Low priority task
- **MEDIUM**: Medium priority task (default)
- **HIGH**: High priority task

---

## API Endpoints

### Base URL
```
http://localhost:8081/api/tasks
```

### Authentication
All endpoints (except public ones) require JWT Bearer token:
```
Authorization: Bearer <jwt_token>
```

---

## Core CRUD Operations

### 1. Create Task
**POST** `/api/tasks`

Create a new task for the authenticated user.

**Request Body:**
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive documentation for the project",
  "priority": "HIGH",
  "dueDate": "2024-03-25T18:00:00",
  "category": "Documentation",
  "tags": ["documentation", "project"],
  "assignees": ["john@example.com"]
}
```

**Response:** 201 Created
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "title": "Complete project documentation",
    "description": "Write comprehensive documentation for the project",
    "status": "PENDING",
    "priority": "HIGH",
    "dueDate": "2024-03-25T18:00:00",
    "tags": ["documentation", "project"],
    "assignees": ["john@example.com"],
    "category": "Documentation",
    "starred": false,
    "completedAt": null,
    "createdAt": "2024-03-19T10:35:40",
    "updatedAt": "2024-03-19T10:35:40"
  }
}
```

### 2. Get All Tasks
**GET** `/api/tasks`

Retrieve all tasks for the authenticated user.

**Response:** 200 OK
```json
{
  "success": true,
  "message": "Tasks retrieved successfully",
  "data": [
    { /* task object */ },
    { /* task object */ }
  ]
}
```

### 3. Get Single Task
**GET** `/api/tasks/{taskId}`

Retrieve a specific task by ID.

**Parameters:**
- `taskId` (path): Task ID

**Response:** 200 OK
```json
{
  "success": true,
  "message": "Task retrieved successfully",
  "data": { /* task object */ }
}
```

### 4. Update Task
**PUT** `/api/tasks/{taskId}`

Update task details (title, description, priority, due date, category, tags, assignees).

**Request Body:**
```json
{
  "title": "Updated task title",
  "description": "Updated description",
  "priority": "MEDIUM",
  "dueDate": "2024-03-30T18:00:00",
  "category": "Work",
  "tags": ["work", "updated"],
  "assignees": ["jane@example.com"]
}
```

**Response:** 200 OK

### 5. Delete Task
**DELETE** `/api/tasks/{taskId}`

Delete a task permanently.

**Response:** 200 OK
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

---

## Status Management Endpoints

### Update Task Status
**PATCH** `/api/tasks/{taskId}/status?status=IN_PROGRESS`

Update task status directly.

**Query Parameters:**
- `status`: New status (PENDING, IN_PROGRESS, COMPLETED, CANCELLED)

### Mark Task as Complete
**POST** `/api/tasks/{taskId}/complete`

Mark task as completed (sets status=COMPLETED and completedAt timestamp).

**Response:** 200 OK

### Cancel Task
**POST** `/api/tasks/{taskId}/cancel`

Cancel a task (sets status=CANCELLED).

**Response:** 200 OK

### Restart Task
**POST** `/api/tasks/{taskId}/restart`

Restart a completed/cancelled task (sets status back to PENDING).

**Response:** 200 OK

### Mark Task as In Progress
**POST** `/api/tasks/{taskId}/in-progress`

Mark task as currently being worked on (sets status=IN_PROGRESS).

**Response:** 200 OK

---

## Filtering Endpoints

### Get Tasks by Status
**GET** `/api/tasks/status/{status}`

Filter tasks by status (PENDING, IN_PROGRESS, COMPLETED, CANCELLED).

**Example:**
```
GET /api/tasks/status/COMPLETED
```

### Get Tasks by Priority
**GET** `/api/tasks/priority/{priority}`

Filter tasks by priority (LOW, MEDIUM, HIGH).

**Example:**
```
GET /api/tasks/priority/HIGH
```

### Get Tasks by Category
**GET** `/api/tasks/category/{category}`

Filter tasks by category.

**Example:**
```
GET /api/tasks/category/Work
```

### Get Tasks by Tag
**GET** `/api/tasks/tag/{tag}`

Filter tasks by tag/label.

**Example:**
```
GET /api/tasks/tag/urgent
```

### Get Tasks by Assignee
**GET** `/api/tasks/assignee/{assignee}`

Filter tasks by assignee.

**Example:**
```
GET /api/tasks/assignee/john@example.com
```

### Get Completed Tasks
**GET** `/api/tasks/completed`

Retrieve all completed tasks.

### Get Starred Tasks
**GET** `/api/tasks/starred`

Retrieve all favorited tasks.

---

## Date-Based Queries

### Get Overdue Tasks
**GET** `/api/tasks/overdue`

Retrieve tasks with due dates in the past that haven't been completed.

**Response:** 200 OK with list of overdue tasks

### Get Tasks Due Soon
**GET** `/api/tasks/due-soon`

Retrieve tasks due within the next 3 days.

**Response:** 200 OK with list of tasks due soon

---

## Search Endpoint

### Search Tasks
**GET** `/api/tasks/search?q={searchTerm}`

Search tasks by title or description (case-insensitive).

**Query Parameters:**
- `q` (required): Search term

**Example:**
```
GET /api/tasks/search?q=documentation
```

**Response:** 200 OK with matching tasks

---

## Favorite/Starred Management

### Toggle Starred Status
**POST** `/api/tasks/{taskId}/toggle-starred`

Toggle whether task is starred (favorited).

**Response:** 200 OK

### Star Task
**POST** `/api/tasks/{taskId}/star`

Mark task as starred (favorited).

**Response:** 200 OK

### Unstar Task
**POST** `/api/tasks/{taskId}/unstar`

Remove star from task.

**Response:** 200 OK

---

## Tag Management

### Add Tag to Task
**POST** `/api/tasks/{taskId}/tags/{tag}`

Add a tag/label to a task.

**Path Parameters:**
- `taskId`: Task ID
- `tag`: Tag to add

**Example:**
```
POST /api/tasks/507f1f77bcf86cd799439011/tags/urgent
```

### Remove Tag from Task
**DELETE** `/api/tasks/{taskId}/tags/{tag}`

Remove a tag/label from a task.

**Example:**
```
DELETE /api/tasks/507f1f77bcf86cd799439011/tags/urgent
```

---

## Assignee Management

### Add Assignee to Task
**POST** `/api/tasks/{taskId}/assignees/{assignee}`

Add a person to the task's assignee list.

**Example:**
```
POST /api/tasks/507f1f77bcf86cd799439011/assignees/john@example.com
```

### Remove Assignee from Task
**DELETE** `/api/tasks/{taskId}/assignees/{assignee}`

Remove a person from the task's assignee list.

**Example:**
```
DELETE /api/tasks/507f1f77bcf86cd799439011/assignees/john@example.com
```

---

## Property Update Endpoints

### Update Priority
**PATCH** `/api/tasks/{taskId}/priority?priority=HIGH`

Update task priority.

**Query Parameters:**
- `priority`: LOW, MEDIUM, or HIGH

### Update Due Date
**PATCH** `/api/tasks/{taskId}/due-date?dueDate=2024-03-30T18:00:00`

Update task due date.

**Query Parameters:**
- `dueDate`: ISO 8601 datetime format

### Update Category
**PATCH** `/api/tasks/{taskId}/category?category=Work`

Update task category.

**Query Parameters:**
- `category`: New category name

---

## Statistics & Analytics Endpoints

### Get Task Overview Statistics
**GET** `/api/tasks/stats/overview`

Get comprehensive task statistics.

**Response:** 200 OK
```json
{
  "success": true,
  "message": "Task statistics retrieved successfully",
  "data": {
    "totalTasks": 25,
    "completedTasks": 12,
    "pendingTasks": 8,
    "highPriorityTasks": 3,
    "overdueTasks": 2,
    "completionRate": 48
  }
}
```

### Get Completion Rate
**GET** `/api/tasks/stats/completion-rate`

Get percentage of completed tasks.

**Response:** 200 OK
```json
{
  "success": true,
  "message": "Completion rate retrieved successfully",
  "data": 48
}
```

---

## HTTP Status Codes

| Status | Meaning |
|--------|---------|
| 200 | Success (GET, PUT, PATCH, POST) |
| 201 | Created (POST) |
| 400 | Bad Request |
| 401 | Unauthorized (missing/invalid token) |
| 404 | Not Found (task doesn't exist) |
| 500 | Server Error |

---

## Error Response Format

All errors return with standardized format:
```json
{
  "success": false,
  "error": "Error message"
}
```

**Example Error:**
```json
{
  "success": false,
  "error": "Task not found with id: 507f1f77bcf86cd799439011"
}
```

---

## Common Use Cases

### Create and Complete a Task
```bash
# 1. Create task
POST /api/tasks
{
  "title": "Review pull request",
  "priority": "HIGH",
  "dueDate": "2024-03-20T17:00:00"
}

# 2. Mark as in progress
POST /api/tasks/{taskId}/in-progress

# 3. Complete when done
POST /api/tasks/{taskId}/complete
```

### Filter and Sort Workflow
```bash
# Get high priority pending tasks
GET /api/tasks/status/PENDING
# Then filter for priority manually or use:
GET /api/tasks/priority/HIGH

# Get all pending high priority tasks
# (Would need additional endpoint or client-side filtering)
```

### Organize with Tags and Categories
```bash
# Create task with tags
POST /api/tasks
{
  "title": "Setup documentation",
  "category": "Infrastructure",
  "tags": ["setup", "docs", "important"]
}

# Later, add another tag
POST /api/tasks/{taskId}/tags/urgent

# Get all infrastructure tasks
GET /api/tasks/category/Infrastructure
```

### Team Collaboration
```bash
# Assign to team member
POST /api/tasks/{taskId}/assignees/alice@company.com

# Get tasks assigned to Alice
GET /api/tasks/assignee/alice@company.com

# Add another assignee
POST /api/tasks/{taskId}/assignees/bob@company.com
```

### Dashboard Widgets
```bash
# Get overview data
GET /api/tasks/stats/overview

# Response includes:
# - Total tasks
# - Completed tasks
# - Pending tasks
# - High priority tasks
# - Overdue tasks
# - Completion rate percentage
```

---

## Data Transfer Objects (DTOs)

### TaskDTO
Complete task data transfer object used in responses.

### TaskCreateRequest
Used when creating or updating tasks:
```json
{
  "title": "string",
  "description": "string",
  "priority": "string",
  "dueDate": "2024-03-20T18:00:00",
  "category": "string",
  "tags": ["string"],
  "assignees": ["string"]
}
```

---

## Technical Details

### Database Collection
Tasks are stored in MongoDB collection: `tasks`

### Query Methods (Repository)
The TaskRepository provides 22+ MongoDB query methods supporting:
- User isolation (all queries filtered by userId)
- Status and priority filtering
- Date range queries
- Tag-based filtering
- Assignee queries
- Full-text search on title and description
- Overdue task detection
- Due date range queries

### Service Layer
TaskService implements transactional operations with:
- DTO conversion
- User authorization checks
- Comprehensive error handling
- Helper methods for complex operations

### Controller
TaskController provides:
- 40+ REST endpoints
- Consistent ApiResponse wrapper
- User extraction from authentication context
- Proper HTTP status codes
- Comprehensive logging

---

## Integration with Authentication

All endpoints require JWT authentication (except public health endpoints).
The userId is automatically extracted from the JWT token and used to:
1. Filter all queries to user's tasks only
2. Prevent access to other users' tasks
3. Ensure data isolation

---

## Best Practices

1. **Always use categories and tags** for better organization
2. **Set due dates** for better planning and tracking
3. **Use priorities** to focus on important tasks
4. **Assign tasks** to relevant team members
5. **Monitor statistics** to track productivity
6. **Flag urgent items** using starred/favorite feature
7. **Search regularly** to find related tasks
8. **Review overdue tasks** to stay on track

---

## Support & Troubleshooting

### Common Issues

**404 Not Found:**
- Task ID may be incorrect
- Task may belong to another user
- Task may have been deleted

**401 Unauthorized:**
- JWT token missing or expired
- Need to login again

**400 Bad Request:**
- Invalid request body format
- Invalid status/priority values
- Invalid datetime format

---

## Version
API Version: 1.0  
Last Updated: March 2024
