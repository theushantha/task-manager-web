package luv2code.taskmanager.service;

import luv2code.taskmanager.exception.ResourceNotFoundException;
import luv2code.taskmanager.model.User;
import luv2code.taskmanager.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(String userId) {
        log.info("Fetching user with id: {}", userId);
        return userRepository.findById(Objects.requireNonNull(userId))
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }

    public User getUserByUsername(String username) {
        log.info("Fetching user with username: {}", username);
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with username: " + username));
    }

    public void deleteUser(String userId) {
        log.info("Deleting user with id: {}", userId);
        
        User user = getUserById(userId);
        userRepository.deleteById(Objects.requireNonNull(userId));
        log.info("User {} deleted successfully", user.getUsername());
    }

    public User updateUserProfile(String userId, String email) {
        log.info("Updating profile for user: {}", userId);
        
        User user = getUserById(userId);
        user.setEmail(email);
        
        User updatedUser = userRepository.save(user);
        log.info("User profile updated for: {}", userId);
        
        return updatedUser;
    }
}
