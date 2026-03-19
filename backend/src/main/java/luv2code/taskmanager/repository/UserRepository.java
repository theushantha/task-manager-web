package luv2code.taskmanager.repository;

import luv2code.taskmanager.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    
    // Basic queries
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Optional<User> findByUsernameOrEmail(String username, String email);
    
    // Existence checks
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    boolean existsByPhoneNumber(String phoneNumber);
    
    // Role and status queries
    List<User> findByActive(boolean active);
    List<User> findByEmailVerified(boolean emailVerified);
    List<User> findByRolesContaining(String role);
    
    // Login tracking queries
    @Query("{ 'lastLoginAt': { $gte: ?0 } }")
    List<User> findUsersLoggedInSince(LocalDateTime dateTime);
    
    // Search queries
    @Query("{ $or: [{ 'username': { $regex: ?0, $options: 'i' } }, { 'email': { $regex: ?0, $options: 'i' } }] }")
    List<User> searchByUsernameOrEmail(String searchTerm);
    
    // Count queries
    long countByActive(boolean active);
    long countByCreatedAtAfter(LocalDateTime dateTime);
    long countByRolesContaining(String role);
}
