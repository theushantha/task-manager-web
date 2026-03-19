package luv2code.taskmanager.service;

import luv2code.taskmanager.dto.ChangePasswordRequest;
import luv2code.taskmanager.dto.UpdateProfileRequest;
import luv2code.taskmanager.dto.UserProfileDTO;
import luv2code.taskmanager.exception.BadRequestException;
import luv2code.taskmanager.exception.ResourceNotFoundException;
import luv2code.taskmanager.exception.UnauthorizedException;
import luv2code.taskmanager.model.User;
import luv2code.taskmanager.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserAuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserById(String userId) {
        log.debug("Fetching user with id: {}", userId);
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }

    public User getUserByUsername(String username) {
        log.debug("Fetching user with username: {}", username);
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with username: " + username));
    }

    public User getUserByEmail(String email) {
        log.debug("Fetching user with email: {}", email);
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    }

    @Transactional
    public UserProfileDTO getProfile(String username) {
        log.info("Getting profile for user: {}", username);
        User user = getUserByUsername(username);
        return convertToProfileDTO(user);
    }

    @Transactional
    public UserProfileDTO updateProfile(String userId, UpdateProfileRequest request) {
        log.info("Updating profile for user: {}", userId);
        
        User user = getUserById(userId);
        
        if (request.getFirstName() != null && !request.getFirstName().isEmpty()) {
            user.setFirstName(request.getFirstName());
        }
        if (request.getLastName() != null && !request.getLastName().isEmpty()) {
            user.setLastName(request.getLastName());
        }
        if (request.getPhoneNumber() != null) {
            if (request.getPhoneNumber().isEmpty()) {
                user.setPhoneNumber(null);
            } else if (!request.getPhoneNumber().equals(user.getPhoneNumber())) {
                if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
                    throw new BadRequestException("Phone number already in use");
                }
                user.setPhoneNumber(request.getPhoneNumber());
            }
        }
        if (request.getEmail() != null && !request.getEmail().isEmpty()) {
            if (!request.getEmail().equals(user.getEmail())) {
                if (userRepository.existsByEmail(request.getEmail())) {
                    throw new BadRequestException("Email already in use");
                }
                user.setEmail(request.getEmail());
                user.setEmailVerified(false);
            }
        }
        
        user.setUpdatedAt(LocalDateTime.now());
        User updatedUser = userRepository.save(user);
        log.info("Profile updated successfully for user: {}", userId);
        
        return convertToProfileDTO(updatedUser);
    }

    @Transactional
    public void changePassword(String userId, ChangePasswordRequest request) {
        log.info("Changing password for user: {}", userId);
        
        User user = getUserById(userId);
        
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new UnauthorizedException("Current password is incorrect");
        }
        
        if (request.getCurrentPassword().equals(request.getNewPassword())) {
            throw new BadRequestException("New password must be different from current password");
        }
        
        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            throw new BadRequestException("Passwords do not match");
        }
        
        user.updatePassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
        log.info("Password changed successfully for user: {}", userId);
    }

    @Transactional
    public void recordLastLogin(String username) {
        log.debug("Recording last login for user: {}", username);
        User user = getUserByUsername(username);
        user.updateLastLogin();
        userRepository.save(user);
    }

    @Transactional
    public void deactivateAccount(String userId) {
        log.warn("Deactivating account for user: {}", userId);
        User user = getUserById(userId);
        user.deactivate();
        userRepository.save(user);
    }

    @Transactional
    public void deleteUser(String userId) {
        log.warn("Deleting user: {}", userId);
        User user = getUserById(userId);
        userRepository.deleteById(userId);
        log.warn("User {} deleted successfully", user.getUsername());
    }

    public List<UserProfileDTO> searchUsers(String searchTerm) {
        log.debug("Searching for users with term: {}", searchTerm);
        List<User> users = userRepository.searchByUsernameOrEmail(searchTerm);
        return users.stream()
                .map(this::convertToProfileDTO)
                .collect(Collectors.toList());
    }

    public long getActiveUserCount() {
        return userRepository.countByActive(true);
    }

    public long getTotalUsers() {
        return userRepository.count();
    }

    public List<UserProfileDTO> getRecentlyLoggedInUsers(LocalDateTime since) {
        log.debug("Getting users logged in since: {}", since);
        List<User> users = userRepository.findUsersLoggedInSince(since);
        return users.stream()
                .map(this::convertToProfileDTO)
                .collect(Collectors.toList());
    }

    private UserProfileDTO convertToProfileDTO(User user) {
        return UserProfileDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .phoneNumber(user.getPhoneNumber())
                .roles(user.getRoles())
                .active(user.isActive())
                .emailVerified(user.isEmailVerified())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .lastLoginAt(user.getLastLoginAt())
                .build();
    }
}
