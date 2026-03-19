package luv2code.taskmanager.service;

import luv2code.taskmanager.dto.AuthRequest;
import luv2code.taskmanager.dto.AuthResponse;
import luv2code.taskmanager.dto.SignupRequest;
import luv2code.taskmanager.exception.BadRequestException;
import luv2code.taskmanager.exception.UnauthorizedException;
import luv2code.taskmanager.model.User;
import luv2code.taskmanager.repository.UserRepository;
import luv2code.taskmanager.security.JwtTokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private UserAuthService userAuthService;

    @Transactional
    public AuthResponse login(AuthRequest authRequest) {
        log.info("Login attempt for user: {}", authRequest.getUsername());

        User user = userRepository.findByUsername(authRequest.getUsername())
                .orElseThrow(() -> new UnauthorizedException("Invalid username or password"));

        if (!passwordEncoder.matches(authRequest.getPassword(), user.getPassword())) {
            throw new UnauthorizedException("Invalid username or password");
        }

        if (!user.isActive()) {
            throw new UnauthorizedException("User account is deactivated");
        }

        // Record last login
        userAuthService.recordLastLogin(user.getUsername());

        String token = jwtTokenProvider.generateTokenWithUserId(user.getUsername(), user.getId());
        log.info("User {} logged in successfully", user.getUsername());

        return new AuthResponse(token, user.getUsername(), user.getEmail(), user.getId());
    }

    @Transactional
    public AuthResponse signup(SignupRequest signupRequest) {
        log.info("Signup attempt for user: {}", signupRequest.getUsername());

        // Validation
        if (!signupRequest.getPassword().equals(signupRequest.getConfirmPassword())) {
            throw new BadRequestException("Passwords do not match");
        }

        if (signupRequest.getPassword().length() < 8) {
            throw new BadRequestException("Password must be at least 8 characters long");
        }

        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            throw new BadRequestException("Username already exists");
        }

        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new BadRequestException("Email already exists");
        }

        // Create new user
        User user = new User(
                signupRequest.getUsername(),
                signupRequest.getEmail(),
                passwordEncoder.encode(signupRequest.getPassword())
        );

        User savedUser = userRepository.save(user);
        log.info("New user registered: {}", savedUser.getUsername());

        String token = jwtTokenProvider.generateTokenWithUserId(savedUser.getUsername(), savedUser.getId());

        return new AuthResponse(token, savedUser.getUsername(), savedUser.getEmail(), savedUser.getId());
    }

    public boolean validateToken(String token) {
        try {
            return jwtTokenProvider.isTokenValid(token);
        } catch (Exception e) {
            log.error("Token validation failed: {}", e.getMessage());
            return false;
        }
    }

    public String getUsernameFromToken(String token) {
        return jwtTokenProvider.getUsernameFromToken(token);
    }
}
