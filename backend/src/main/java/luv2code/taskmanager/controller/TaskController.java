package luv2code.taskmanager.controller;

import luv2code.taskmanager.dto.ApiResponse;
import luv2code.taskmanager.dto.TaskCreateRequest;
import luv2code.taskmanager.dto.TaskDTO;
import luv2code.taskmanager.service.TaskService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
@Slf4j
public class TaskController {

    @Autowired
    private TaskService taskService;

    /**
     * Create a new task
     */
    @PostMapping
    public ResponseEntity<ApiResponse<TaskDTO>> createTask(@RequestBody TaskCreateRequest request, Authentication authentication) {
        log.info("Create task endpoint called");
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.createTask(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse<>(true, "Task created successfully", task));
    }

    /**
     * Get all tasks
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getAllTasks(Authentication authentication) {
        log.info("Get all tasks endpoint called");
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getAllTasks(userId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tasks retrieved successfully", tasks));
    }

    /**
     * Get single task by ID
     */
    @GetMapping("/{taskId}")
    public ResponseEntity<ApiResponse<TaskDTO>> getTaskById(@PathVariable String taskId, Authentication authentication) {
        log.info("Get task by id endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.getTaskById(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task retrieved successfully", task));
    }

    /**
     * Update task
     */
    @PutMapping("/{taskId}")
    public ResponseEntity<ApiResponse<TaskDTO>> updateTask(@PathVariable String taskId, @RequestBody TaskCreateRequest request, Authentication authentication) {
        log.info("Update task endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.updateTask(userId, taskId, request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task updated successfully", task));
    }

    /**
     * Delete task
     */
    @DeleteMapping("/{taskId}")
    public ResponseEntity<ApiResponse<String>> deleteTask(@PathVariable String taskId, Authentication authentication) {
        log.info("Delete task endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        taskService.deleteTask(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task deleted successfully", ""));
    }

    /**
     * Get tasks by status
     */
    @GetMapping("/status/{status}")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getTasksByStatus(@PathVariable String status, Authentication authentication) {
        log.info("Get tasks by status endpoint called with status: {}", status);
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getTasksByStatus(userId, status);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tasks retrieved successfully", tasks));
    }

    /**
     * Get tasks by priority
     */
    @GetMapping("/priority/{priority}")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getTasksByPriority(@PathVariable String priority, Authentication authentication) {
        log.info("Get tasks by priority endpoint called with priority: {}", priority);
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getTasksByPriority(userId, priority);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tasks retrieved successfully", tasks));
    }

    /**
     * Get tasks by category
     */
    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getTasksByCategory(@PathVariable String category, Authentication authentication) {
        log.info("Get tasks by category endpoint called with category: {}", category);
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getTasksByCategory(userId, category);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tasks retrieved successfully", tasks));
    }

    /**
     * Get tasks by tag
     */
    @GetMapping("/tag/{tag}")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getTasksByTag(@PathVariable String tag, Authentication authentication) {
        log.info("Get tasks by tag endpoint called with tag: {}", tag);
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getTasksByTag(userId, tag);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tasks retrieved successfully", tasks));
    }

    /**
     * Get starred tasks
     */
    @GetMapping("/starred")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getStarredTasks(Authentication authentication) {
        log.info("Get starred tasks endpoint called");
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getStarredTasks(userId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Starred tasks retrieved successfully", tasks));
    }

    /**
     * Get completed tasks
     */
    @GetMapping("/completed")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getCompletedTasks(Authentication authentication) {
        log.info("Get completed tasks endpoint called");
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getCompletedTasks(userId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Completed tasks retrieved successfully", tasks));
    }

    /**
     * Get overdue tasks
     */
    @GetMapping("/overdue")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getOverdueTasks(Authentication authentication) {
        log.info("Get overdue tasks endpoint called");
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getOverdueTasks(userId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Overdue tasks retrieved successfully", tasks));
    }

    /**
     * Get tasks due soon
     */
    @GetMapping("/due-soon")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getTasksDueSoon(Authentication authentication) {
        log.info("Get tasks due soon endpoint called");
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getTasksDueSoon(userId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tasks due soon retrieved successfully", tasks));
    }

    /**
     * Search tasks
     */
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> searchTasks(@RequestParam String q, Authentication authentication) {
        log.info("Search tasks endpoint called with query: {}", q);
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.searchTasks(userId, q);
        return ResponseEntity.ok(new ApiResponse<>(true, "Search results retrieved successfully", tasks));
    }

    /**
     * Get tasks by assignee
     */
    @GetMapping("/assignee/{assignee}")
    public ResponseEntity<ApiResponse<List<TaskDTO>>> getTasksByAssignee(@PathVariable String assignee, Authentication authentication) {
        log.info("Get tasks by assignee endpoint called for assignee: {}", assignee);
        String userId = (String) authentication.getPrincipal();
        List<TaskDTO> tasks = taskService.getTasksByAssignee(userId, assignee);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tasks retrieved successfully", tasks));
    }

    /**
     * Update task status
     */
    @PatchMapping("/{taskId}/status")
    public ResponseEntity<ApiResponse<TaskDTO>> updateTaskStatus(@PathVariable String taskId, @RequestParam String status, Authentication authentication) {
        log.info("Update task status endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.updateTaskStatus(userId, taskId, status);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task status updated successfully", task));
    }

    /**
     * Mark task as complete
     */
    @PostMapping("/{taskId}/complete")
    public ResponseEntity<ApiResponse<TaskDTO>> completeTask(@PathVariable String taskId, Authentication authentication) {
        log.info("Complete task endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.completeTask(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task marked as complete", task));
    }

    /**
     * Cancel task
     */
    @PostMapping("/{taskId}/cancel")
    public ResponseEntity<ApiResponse<TaskDTO>> cancelTask(@PathVariable String taskId, Authentication authentication) {
        log.info("Cancel task endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.cancelTask(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task cancelled", task));
    }

    /**
     * Restart task
     */
    @PostMapping("/{taskId}/restart")
    public ResponseEntity<ApiResponse<TaskDTO>> restartTask(@PathVariable String taskId, Authentication authentication) {
        log.info("Restart task endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.restartTask(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task restarted", task));
    }

    /**
     * Mark task as in progress
     */
    @PostMapping("/{taskId}/in-progress")
    public ResponseEntity<ApiResponse<TaskDTO>> markInProgress(@PathVariable String taskId, Authentication authentication) {
        log.info("Mark in progress endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.markInProgress(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task marked as in progress", task));
    }

    /**
     * Toggle starred status
     */
    @PostMapping("/{taskId}/toggle-starred")
    public ResponseEntity<ApiResponse<TaskDTO>> toggleStarred(@PathVariable String taskId, Authentication authentication) {
        log.info("Toggle starred endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.toggleStarred(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Starred status toggled", task));
    }

    /**
     * Star task
     */
    @PostMapping("/{taskId}/star")
    public ResponseEntity<ApiResponse<TaskDTO>> starTask(@PathVariable String taskId, Authentication authentication) {
        log.info("Star task endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.starTask(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task starred", task));
    }

    /**
     * Unstar task
     */
    @PostMapping("/{taskId}/unstar")
    public ResponseEntity<ApiResponse<TaskDTO>> unstarTask(@PathVariable String taskId, Authentication authentication) {
        log.info("Unstar task endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.unstarTask(userId, taskId);
        return ResponseEntity.ok(new ApiResponse<>(true, "Task unstarred", task));
    }

    /**
     * Add tag to task
     */
    @PostMapping("/{taskId}/tags/{tag}")
    public ResponseEntity<ApiResponse<TaskDTO>> addTag(@PathVariable String taskId, @PathVariable String tag, Authentication authentication) {
        log.info("Add tag endpoint called for task: {} with tag: {}", taskId, tag);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.addTag(userId, taskId, tag);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tag added successfully", task));
    }

    /**
     * Remove tag from task
     */
    @DeleteMapping("/{taskId}/tags/{tag}")
    public ResponseEntity<ApiResponse<TaskDTO>> removeTag(@PathVariable String taskId, @PathVariable String tag, Authentication authentication) {
        log.info("Remove tag endpoint called for task: {} with tag: {}", taskId, tag);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.removeTag(userId, taskId, tag);
        return ResponseEntity.ok(new ApiResponse<>(true, "Tag removed successfully", task));
    }

    /**
     * Add assignee to task
     */
    @PostMapping("/{taskId}/assignees/{assignee}")
    public ResponseEntity<ApiResponse<TaskDTO>> addAssignee(@PathVariable String taskId, @PathVariable String assignee, Authentication authentication) {
        log.info("Add assignee endpoint called for task: {} with assignee: {}", taskId, assignee);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.addAssignee(userId, taskId, assignee);
        return ResponseEntity.ok(new ApiResponse<>(true, "Assignee added successfully", task));
    }

    /**
     * Remove assignee from task
     */
    @DeleteMapping("/{taskId}/assignees/{assignee}")
    public ResponseEntity<ApiResponse<TaskDTO>> removeAssignee(@PathVariable String taskId, @PathVariable String assignee, Authentication authentication) {
        log.info("Remove assignee endpoint called for task: {} with assignee: {}", taskId, assignee);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.removeAssignee(userId, taskId, assignee);
        return ResponseEntity.ok(new ApiResponse<>(true, "Assignee removed successfully", task));
    }

    /**
     * Update priority
     */
    @PatchMapping("/{taskId}/priority")
    public ResponseEntity<ApiResponse<TaskDTO>> updatePriority(@PathVariable String taskId, @RequestParam String priority, Authentication authentication) {
        log.info("Update priority endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.updatePriority(userId, taskId, priority);
        return ResponseEntity.ok(new ApiResponse<>(true, "Priority updated successfully", task));
    }

    /**
     * Update due date
     */
    @PatchMapping("/{taskId}/due-date")
    public ResponseEntity<ApiResponse<TaskDTO>> updateDueDate(@PathVariable String taskId, @RequestParam String dueDate, Authentication authentication) {
        log.info("Update due date endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        LocalDateTime parsedDueDate = LocalDateTime.parse(dueDate);
        TaskDTO task = taskService.updateDueDate(userId, taskId, parsedDueDate);
        return ResponseEntity.ok(new ApiResponse<>(true, "Due date updated successfully", task));
    }

    /**
     * Update category
     */
    @PatchMapping("/{taskId}/category")
    public ResponseEntity<ApiResponse<TaskDTO>> updateCategory(@PathVariable String taskId, @RequestParam String category, Authentication authentication) {
        log.info("Update category endpoint called for task: {}", taskId);
        String userId = (String) authentication.getPrincipal();
        TaskDTO task = taskService.updateCategory(userId, taskId, category);
        return ResponseEntity.ok(new ApiResponse<>(true, "Category updated successfully", task));
    }

    /**
     * Get task statistics
     */
    @GetMapping("/stats/overview")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getTaskStats(Authentication authentication) {
        log.info("Get task stats endpoint called");
        String userId = (String) authentication.getPrincipal();
        
        Long totalTasks = taskService.getTotalTaskCount(userId);
        Long completedTasks = taskService.getCompletedTaskCount(userId);
        Long pendingTasks = taskService.getPendingTaskCount(userId);
        Long highPriorityTasks = taskService.countTasksByPriority(userId, "HIGH");
        Long overdueTasks = (long) taskService.getOverdueTasks(userId).size();

        Map<String, Object> stats = Map.of(
                "totalTasks", totalTasks,
                "completedTasks", completedTasks,
                "pendingTasks", pendingTasks,
                "highPriorityTasks", highPriorityTasks,
                "overdueTasks", overdueTasks,
                "completionRate", totalTasks > 0 ? (completedTasks * 100 / totalTasks) : 0
        );

        return ResponseEntity.ok(new ApiResponse<>(true, "Task statistics retrieved successfully", stats));
    }

    /**
     * Get completion rate
     */
    @GetMapping("/stats/completion-rate")
    public ResponseEntity<ApiResponse<Long>> getCompletionRate(Authentication authentication) {
        log.info("Get completion rate endpoint called");
        String userId = (String) authentication.getPrincipal();
        
        Long totalTasks = taskService.getTotalTaskCount(userId);
        Long completedTasks = taskService.getCompletedTaskCount(userId);
        
        Long completionRate = totalTasks > 0 ? (completedTasks * 100 / totalTasks) : 0;
        return ResponseEntity.ok(new ApiResponse<>(true, "Completion rate retrieved successfully", completionRate));
    }
}
