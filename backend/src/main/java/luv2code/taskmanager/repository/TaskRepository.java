package luv2code.taskmanager.repository;

import luv2code.taskmanager.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    
    // Basic queries by user
    List<Task> findByUserId(String userId);
    long countByUserId(String userId);
    
    // Status based queries
    List<Task> findByUserIdAndStatus(String userId, String status);
    long countByUserIdAndStatus(String userId, String status);
    
    // Priority based queries
    List<Task> findByUserIdAndPriority(String userId, String priority);
    long countByUserIdAndPriority(String userId, String priority);
    
    // Category based queries
    List<Task> findByUserIdAndCategory(String userId, String category);
    
    // Tag based queries
    @Query("{ 'userId': ?0, 'tags': ?1 }")
    List<Task> findByUserIdAndTag(String userId, String tag);
    
    // Starred tasks
    List<Task> findByUserIdAndStarred(String userId, boolean starred);
    
    // Status and Priority combined
    List<Task> findByUserIdAndStatusAndPriority(String userId, String status, String priority);
    
    // Due date queries
    @Query("{ 'userId': ?0, 'dueDate': { $lte: ?1 } }")
    List<Task> findByUserIdAndDueDateBefore(String userId, LocalDateTime dueDate);
    
    @Query("{ 'userId': ?0, 'dueDate': { $gte: ?1, $lte: ?2 } }")
    List<Task> findByUserIdAndDueDateBetween(String userId, LocalDateTime startDate, LocalDateTime endDate);
    
    // Completed tasks (with completion date)
    List<Task> findByUserIdAndCompletedAtNotNull(String userId);
    
    // Overdue tasks
    @Query("{ 'userId': ?0, 'dueDate': { $lt: new Date() }, 'status': { $ne: 'COMPLETED' } }")
    List<Task> findOverdueTasksByUserId(String userId);
    
    // Due soon (next 3 days)
    @Query("{ 'userId': ?0, 'dueDate': { $gte: new Date(), $lte: ?1 }, 'status': { $ne: 'COMPLETED' } }")
    List<Task> findTasksDueSoon(String userId, LocalDateTime dueDate);
    
    // Search by title or description
    @Query("{ 'userId': ?0, $or: [{ 'title': { $regex: ?1, $options: 'i' } }, { 'description': { $regex: ?1, $options: 'i' } }] }")
    List<Task> searchByUserIdAndTitleOrDescription(String userId, String searchTerm);
    
    // Created after date
    List<Task> findByUserIdAndCreatedAtAfter(String userId, LocalDateTime createdAt);
    
    // Assignee queries
    @Query("{ 'userId': ?0, 'assignees': ?1 }")
    List<Task> findByUserIdAndAssignee(String userId, String assignee);
    
    // Count statistics
    long countByUserIdAndStatusAndCompletedAtNotNull(String userId, String status);
    
    // Delete all tasks for a user
    long deleteByUserId(String userId);
}
