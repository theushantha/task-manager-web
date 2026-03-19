package luv2code.taskmanager.service;

import luv2code.taskmanager.dto.TaskCreateRequest;
import luv2code.taskmanager.dto.TaskDTO;
import luv2code.taskmanager.exception.ResourceNotFoundException;
import luv2code.taskmanager.model.Task;
import luv2code.taskmanager.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Slf4j
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    /**
     * Create a new task for the user
     */
    @Transactional
    public TaskDTO createTask(String userId, TaskCreateRequest request) {
        log.info("Creating task for user: {} with title: {}", userId, request.getTitle());
        
        Task task = Task.builder()
                .userId(userId)
                .title(request.getTitle())
                .description(request.getDescription())
                .priority(request.getPriority() != null ? request.getPriority() : "MEDIUM")
                .status("PENDING")
                .dueDate(request.getDueDate())
                .category(request.getCategory())
                .tags(request.getTags())
                .assignees(request.getAssignees())
                .starred(false)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        Task savedTask = taskRepository.save(Objects.requireNonNull(task));
        log.info("Task created with id: {}", savedTask.getId());
        
        return convertToDTO(savedTask);
    }

    /**
     * Update task details
     */
    @Transactional
    public TaskDTO updateTask(String userId, String taskId, TaskCreateRequest request) {
        log.info("Updating task: {} for user: {}", taskId, userId);
        
        Task task = findTaskByIdAndUserId(taskId, userId);

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        if (request.getStatus() != null) {
            task.setStatus(request.getStatus());
            if ("COMPLETED".equals(request.getStatus())) {
                task.setCompletedAt(LocalDateTime.now());
            } else {
                task.setCompletedAt(null);
            }
        }
        task.setPriority(request.getPriority() != null ? request.getPriority() : task.getPriority());
        task.setDueDate(request.getDueDate());
        task.setCategory(request.getCategory());
        if (request.getTags() != null) {
            task.setTags(request.getTags());
        }
        if (request.getAssignees() != null) {
            task.setAssignees(request.getAssignees());
        }
        task.setUpdatedAt(LocalDateTime.now());

        Task updatedTask = taskRepository.save(task);
        log.info("Task updated: {}", taskId);
        return convertToDTO(updatedTask);
    }

    /**
     * Get task by ID
     */
    public TaskDTO getTaskById(String userId, String taskId) {
        log.info("Fetching task: {} for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        return convertToDTO(task);
    }

    /**
     * Get all tasks for user
     */
    public List<TaskDTO> getAllTasks(String userId) {
        log.info("Fetching all tasks for user: {}", userId);
        List<Task> tasks = taskRepository.findByUserId(userId);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get tasks by status
     */
    public List<TaskDTO> getTasksByStatus(String userId, String status) {
        log.info("Fetching tasks with status: {} for user: {}", status, userId);
        List<Task> tasks = taskRepository.findByUserIdAndStatus(userId, status);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get tasks by priority
     */
    public List<TaskDTO> getTasksByPriority(String userId, String priority) {
        log.info("Fetching tasks with priority: {} for user: {}", priority, userId);
        List<Task> tasks = taskRepository.findByUserIdAndPriority(userId, priority);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get tasks by category
     */
    public List<TaskDTO> getTasksByCategory(String userId, String category) {
        log.info("Fetching tasks with category: {} for user: {}", category, userId);
        List<Task> tasks = taskRepository.findByUserIdAndCategory(userId, category);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get tasks by tag
     */
    public List<TaskDTO> getTasksByTag(String userId, String tag) {
        log.info("Fetching tasks with tag: {} for user: {}", tag, userId);
        List<Task> tasks = taskRepository.findByUserIdAndTag(userId, tag);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get starred tasks
     */
    public List<TaskDTO> getStarredTasks(String userId) {
        log.info("Fetching starred tasks for user: {}", userId);
        List<Task> tasks = taskRepository.findByUserIdAndStarred(userId, true);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get tasks with multiple filters
     */
    public List<TaskDTO> getTasksByStatusAndPriority(String userId, String status, String priority) {
        log.info("Fetching tasks with status: {} and priority: {} for user: {}", status, priority, userId);
        List<Task> tasks = taskRepository.findByUserIdAndStatusAndPriority(userId, status, priority);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get completed tasks
     */
    public List<TaskDTO> getCompletedTasks(String userId) {
        log.info("Fetching completed tasks for user: {}", userId);
        List<Task> tasks = taskRepository.findByUserIdAndCompletedAtNotNull(userId);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get overdue tasks
     */
    public List<TaskDTO> getOverdueTasks(String userId) {
        log.info("Fetching overdue tasks for user: {}", userId);
        List<Task> tasks = taskRepository.findOverdueTasksByUserId(userId);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get tasks due soon (within 3 days)
     */
    public List<TaskDTO> getTasksDueSoon(String userId) {
        log.info("Fetching tasks due soon for user: {}", userId);
        LocalDateTime threeDaysFromNow = LocalDateTime.now().plusDays(3);
        List<Task> tasks = taskRepository.findTasksDueSoon(userId, threeDaysFromNow);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Search tasks by title or description
     */
    public List<TaskDTO> searchTasks(String userId, String searchTerm) {
        log.info("Searching tasks for user: {} with term: {}", userId, searchTerm);
        List<Task> tasks = taskRepository.searchByUserIdAndTitleOrDescription(userId, searchTerm);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get tasks assigned to a specific person
     */
    public List<TaskDTO> getTasksByAssignee(String userId, String assignee) {
        log.info("Fetching tasks assigned to: {} for user: {}", assignee, userId);
        List<Task> tasks = taskRepository.findByUserIdAndAssignee(userId, assignee);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Delete task
     */
    @Transactional
    public void deleteTask(String userId, String taskId) {
        log.info("Deleting task: {} for user: {}", taskId, userId);
        findTaskByIdAndUserId(taskId, userId);
        taskRepository.deleteById(Objects.requireNonNull(taskId));
        log.info("Task deleted: {}", taskId);
    }

    /**
     * Update task status
     */
    @Transactional
    public TaskDTO updateTaskStatus(String userId, String taskId, String status) {
        log.info("Updating task {} status to: {} for user: {}", taskId, status, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.setStatus(status);
        task.setUpdatedAt(LocalDateTime.now());
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Mark task as complete
     */
    @Transactional
    public TaskDTO completeTask(String userId, String taskId) {
        log.info("Marking task {} as complete for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.complete();
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Cancel task
     */
    @Transactional
    public TaskDTO cancelTask(String userId, String taskId) {
        log.info("Cancelling task {} for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.cancel();
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Restart task (move back to pending)
     */
    @Transactional
    public TaskDTO restartTask(String userId, String taskId) {
        log.info("Restarting task {} for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.restart();
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Mark task as in progress
     */
    @Transactional
    public TaskDTO markInProgress(String userId, String taskId) {
        log.info("Marking task {} as in progress for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.markInProgress();
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Toggle starred status
     */
    @Transactional
    public TaskDTO toggleStarred(String userId, String taskId) {
        log.info("Toggling starred status for task: {} for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.setStarred(!task.isStarred());
        task.setUpdatedAt(LocalDateTime.now());
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Star a task
     */
    @Transactional
    public TaskDTO starTask(String userId, String taskId) {
        log.info("Starring task: {} for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.setStarred(true);
        task.setUpdatedAt(LocalDateTime.now());
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Unstar a task
     */
    @Transactional
    public TaskDTO unstarTask(String userId, String taskId) {
        log.info("Unstarring task: {} for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.setStarred(false);
        task.setUpdatedAt(LocalDateTime.now());
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Add tag to task
     */
    @Transactional
    public TaskDTO addTag(String userId, String taskId, String tag) {
        log.info("Adding tag: {} to task: {} for user: {}", tag, taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        if (task.getTags() != null && !task.getTags().contains(tag)) {
            task.getTags().add(tag);
            task.setUpdatedAt(LocalDateTime.now());
            Task updatedTask = taskRepository.save(task);
            return convertToDTO(updatedTask);
        }
        return convertToDTO(task);
    }

    /**
     * Remove tag from task
     */
    @Transactional
    public TaskDTO removeTag(String userId, String taskId, String tag) {
        log.info("Removing tag: {} from task: {} for user: {}", tag, taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        if (task.getTags() != null) {
            task.getTags().remove(tag);
            task.setUpdatedAt(LocalDateTime.now());
            Task updatedTask = taskRepository.save(task);
            return convertToDTO(updatedTask);
        }
        return convertToDTO(task);
    }

    /**
     * Add assignee to task
     */
    @Transactional
    public TaskDTO addAssignee(String userId, String taskId, String assignee) {
        log.info("Adding assignee: {} to task: {} for user: {}", assignee, taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        if (task.getAssignees() != null && !task.getAssignees().contains(assignee)) {
            task.getAssignees().add(assignee);
            task.setUpdatedAt(LocalDateTime.now());
            Task updatedTask = taskRepository.save(task);
            return convertToDTO(updatedTask);
        }
        return convertToDTO(task);
    }

    /**
     * Remove assignee from task
     */
    @Transactional
    public TaskDTO removeAssignee(String userId, String taskId, String assignee) {
        log.info("Removing assignee: {} from task: {} for user: {}", assignee, taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        if (task.getAssignees() != null) {
            task.getAssignees().remove(assignee);
            task.setUpdatedAt(LocalDateTime.now());
            Task updatedTask = taskRepository.save(task);
            return convertToDTO(updatedTask);
        }
        return convertToDTO(task);
    }

    /**
     * Update priority
     */
    @Transactional
    public TaskDTO updatePriority(String userId, String taskId, String priority) {
        log.info("Updating task {} priority to: {} for user: {}", taskId, priority, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.setPriority(priority);
        task.setUpdatedAt(LocalDateTime.now());
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Update due date
     */
    @Transactional
    public TaskDTO updateDueDate(String userId, String taskId, LocalDateTime dueDate) {
        log.info("Updating task {} due date for user: {}", taskId, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.setDueDate(dueDate);
        task.setUpdatedAt(LocalDateTime.now());
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Update category
     */
    @Transactional
    public TaskDTO updateCategory(String userId, String taskId, String category) {
        log.info("Updating task {} category to: {} for user: {}", taskId, category, userId);
        Task task = findTaskByIdAndUserId(taskId, userId);
        task.setCategory(category);
        task.setUpdatedAt(LocalDateTime.now());
        Task updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    /**
     * Get task statistics - count by status
     */
    public Long countTasksByStatus(String userId, String status) {
        log.info("Getting task count by status: {} for user: {}", status, userId);
        List<Task> tasks = taskRepository.findByUserIdAndStatus(userId, status);
        return (long) tasks.size();
    }

    /**
     * Get task statistics - count by priority
     */
    public Long countTasksByPriority(String userId, String priority) {
        log.info("Getting task count by priority: {} for user: {}", priority, userId);
        List<Task> tasks = taskRepository.findByUserIdAndPriority(userId, priority);
        return (long) tasks.size();
    }

    /**
     * Get total task count
     */
    public Long getTotalTaskCount(String userId) {
        log.info("Getting total task count for user: {}", userId);
        List<Task> tasks = taskRepository.findByUserId(userId);
        return (long) tasks.size();
    }

    /**
     * Get completed task count
     */
    public Long getCompletedTaskCount(String userId) {
        log.info("Getting completed task count for user: {}", userId);
        List<Task> tasks = taskRepository.findByUserIdAndCompletedAtNotNull(userId);
        return (long) tasks.size();
    }

    /**
     * Get pending task count
     */
    public Long getPendingTaskCount(String userId) {
        log.info("Getting pending task count for user: {}", userId);
        return countTasksByStatus(userId, "PENDING");
    }

    /**
     * Helper method to find task by ID and verify it belongs to user
     */
    private Task findTaskByIdAndUserId(String taskId, String userId) {
        Task task = taskRepository.findById(Objects.requireNonNull(taskId))
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + taskId));

        if (!task.getUserId().equals(userId)) {
            throw new ResourceNotFoundException("Task not found for user: " + userId);
        }

        return task;
    }

    /**
     * Convert Task entity to TaskDTO
     */
    private TaskDTO convertToDTO(Task task) {
        return new TaskDTO(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getStatus(),
                task.getPriority(),
                task.getDueDate(),
                task.getTags(),
                task.getAssignees(),
                task.getCategory(),
                task.isStarred(),
                task.getCompletedAt(),
                task.getCreatedAt(),
                task.getUpdatedAt()
        );
    }
}
