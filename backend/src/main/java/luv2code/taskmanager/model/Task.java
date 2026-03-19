package luv2code.taskmanager.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "tasks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {
    @Id
    private String id;
    private String userId;
    private String title;
    private String description;
    
    @Builder.Default
    private String status = "PENDING"; // PENDING, IN_PROGRESS, COMPLETED, CANCELLED
    
    @Builder.Default
    private String priority = "MEDIUM"; // LOW, MEDIUM, HIGH
    
    private LocalDateTime dueDate;
    
    @Builder.Default
    private List<String> tags = new ArrayList<>();
    
    @Builder.Default
    private List<String> assignees = new ArrayList<>();
    
    private String category;
    private boolean starred;
    
    @Builder.Default
    private LocalDateTime completedAt = null;
    
    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();
    
    @Builder.Default
    private LocalDateTime updatedAt = LocalDateTime.now();

    public Task(String userId, String title, String description) {
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.status = "PENDING";
        this.priority = "MEDIUM";
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.tags = new ArrayList<>();
        this.assignees = new ArrayList<>();
    }
    
    public void complete() {
        this.status = "COMPLETED";
        this.completedAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    public void cancel() {
        this.status = "CANCELLED";
        this.updatedAt = LocalDateTime.now();
    }
    
    public void restart() {
        this.status = "PENDING";
        this.completedAt = null;
        this.updatedAt = LocalDateTime.now();
    }
    
    public void markInProgress() {
        this.status = "IN_PROGRESS";
        this.updatedAt = LocalDateTime.now();
    }
    
    public boolean isOverdue() {
        return this.dueDate != null && 
               LocalDateTime.now().isAfter(this.dueDate) && 
               !"COMPLETED".equals(this.status);
    }
    
    public boolean isDueSoon() {
        if (this.dueDate == null || "COMPLETED".equals(this.status)) {
            return false;
        }
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime soon = now.plusDays(3);
        return this.dueDate.isAfter(now) && this.dueDate.isBefore(soon);
    }
}
