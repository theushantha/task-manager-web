package luv2code.taskmanager.controller;

import luv2code.taskmanager.dto.AuthRequest;
import luv2code.taskmanager.dto.AuthResponse;
import luv2code.taskmanager.dto.ChangePasswordRequest;
import luv2code.taskmanager.dto.SignupRequest;
import luv2code.taskmanager.dto.UpdateProfileRequest;
import luv2code.taskmanager.dto.UserProfileDTO;
import luv2code.taskmanager.service.AuthService;
import luv2code.taskmanager.service.UserAuthService;
import luv2code.taskmanager.util.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
@Slf4j
public class AuthController {

    @Autowired
    private AuthService authService;
    
    @Autowired
    private UserAuthService userAuthService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(@RequestBody AuthRequest authRequest) {
        log.info("Login endpoint called for user: {}", authRequest.getUsername());
        AuthResponse response = authService.login(authRequest);
        return ResponseEntity.ok(ApiResponse.success("Login successful", response));
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<AuthResponse>> signup(@RequestBody SignupRequest signupRequest) {
        log.info("Signup endpoint called for user: {}", signupRequest.getUsername());
        AuthResponse response = authService.signup(signupRequest);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.created("User registered successfully", response));
    }

    @PostMapping("/validate")
    public ResponseEntity<ApiResponse<Boolean>> validateToken(@RequestParam String token) {
        log.debug("Token validation request");
        boolean isValid = authService.validateToken(token);
        return ResponseEntity.ok(ApiResponse.success(isValid));
    }

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse<UserProfileDTO>> getProfile(Authentication authentication) {
        log.info("Get profile endpoint called");
        String username = (String) authentication.getPrincipal();
        UserProfileDTO profile = userAuthService.getProfile(username);
        return ResponseEntity.ok(ApiResponse.success("Profile retrieved successfully", profile));
    }

    @PutMapping("/profile")
    public ResponseEntity<ApiResponse<UserProfileDTO>> updateProfile(
            @RequestBody UpdateProfileRequest request, 
            Authentication authentication) {
        log.info("Update profile endpoint called");
        String username = (String) authentication.getPrincipal();
        String userId = userAuthService.getUserByUsername(username).getId();
        UserProfileDTO profile = userAuthService.updateProfile(userId, request);
        return ResponseEntity.ok(ApiResponse.success("Profile updated successfully", profile));
    }

    @PostMapping("/change-password")
    public ResponseEntity<ApiResponse<String>> changePassword(
            @RequestBody ChangePasswordRequest request,
            Authentication authentication) {
        log.info("Change password endpoint called");
        String username = (String) authentication.getPrincipal();
        String userId = userAuthService.getUserByUsername(username).getId();
        userAuthService.changePassword(userId, request);
        return ResponseEntity.ok(ApiResponse.success("Password changed successfully", null));
    }

    @DeleteMapping("/profile")
    public ResponseEntity<ApiResponse<String>> deleteAccount(Authentication authentication) {
        log.warn("Delete account endpoint called");
        String username = (String) authentication.getPrincipal();
        String userId = userAuthService.getUserByUsername(username).getId();
        userAuthService.deleteUser(userId);
        return ResponseEntity.ok(ApiResponse.success("Account deleted successfully", null));
    }

    @PostMapping("/deactivate")
    public ResponseEntity<ApiResponse<String>> deactivateAccount(Authentication authentication) {
        log.warn("Deactivate account endpoint called");
        String username = (String) authentication.getPrincipal();
        String userId = userAuthService.getUserByUsername(username).getId();
        userAuthService.deactivateAccount(userId);
        return ResponseEntity.ok(ApiResponse.success("Account deactivated successfully", null));
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Auth service is healthy");
    }

    @GetMapping("/verify")
    public ResponseEntity<ApiResponse<String>> verifyToken(Authentication authentication) {
        log.debug("Token verification successful");
        String username = (String) authentication.getPrincipal();
        return ResponseEntity.ok(ApiResponse.success("Token is valid for user: " + username, null));
    }
}
