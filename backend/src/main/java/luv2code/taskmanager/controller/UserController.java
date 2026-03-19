package luv2code.taskmanager.controller;

import luv2code.taskmanager.model.User;
import luv2code.taskmanager.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfile(Authentication authentication) {
        log.info("Get user profile endpoint called");
        String username = (String) authentication.getPrincipal();
        User user = userService.getUserByUsername(username);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/profile")
    public ResponseEntity<User> updateUserProfile(@RequestParam String email, Authentication authentication) {
        log.info("Update user profile endpoint called");
        String username = (String) authentication.getPrincipal();
        User user = userService.getUserByUsername(username);
        User updatedUser = userService.updateUserProfile(user.getId(), email);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/profile")
    public ResponseEntity<Void> deleteUserProfile(Authentication authentication) {
        log.info("Delete user profile endpoint called");
        String username = (String) authentication.getPrincipal();
        User user = userService.getUserByUsername(username);
        userService.deleteUser(user.getId());
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("User service is healthy");
    }
}
