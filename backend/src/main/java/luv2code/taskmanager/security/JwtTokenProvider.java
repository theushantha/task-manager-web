package luv2code.taskmanager.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {
    
    @Value("${app.jwt.secret}")
    private String jwtSecret;
    
    @Value("${app.jwt.expiration}")
    private long jwtExpiration;

    /**
     * Generate token with username
     */
    public String generateToken(String username) {
        return createToken(username, null, jwtExpiration);
    }

    /**
     * Generate token with username and userId
     */
    public String generateTokenWithUserId(String username, String userId) {
        return createToken(username, userId, jwtExpiration);
    }

    /**
     * Create token with optional userId claim
     */
    private String createToken(String username, String userId, long expirationTime) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationTime);

        var builder = Jwts.builder()
                .subject(username)
                .issuedAt(now)
                .expiration(expiryDate);
        
        // Add userId as custom claim if provided
        if (userId != null && !userId.isEmpty()) {
            builder.claim("userId", userId);
        }
        
        return builder
                .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .compact();
    }

    /**
     * Get username from token
     */
    public String getUsernameFromToken(String token) {
        Claims claims = getAllClaimsFromToken(token);
        return claims.getSubject();
    }

    /**
     * Get userId from token
     */
    public String getUserIdFromToken(String token) {
        Claims claims = getAllClaimsFromToken(token);
        return claims.get("userId", String.class);
    }

    /**
     * Validate if token is still valid (not expired and signature is correct)
     */
    public boolean isTokenValid(String token) {
        try {
            Jwts.parser()
                    .verifyWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            log.error("Invalid JWT token: {}", e.getMessage());
            return false;
        }
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
