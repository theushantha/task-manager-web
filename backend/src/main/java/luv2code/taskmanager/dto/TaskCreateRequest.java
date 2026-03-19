package luv2code.taskmanager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskCreateRequest {
    private String title;
    private String description;
    private String priority;
    private LocalDateTime dueDate;
    private String category;
    private List<String> tags;
    private List<String> assignees;
}
