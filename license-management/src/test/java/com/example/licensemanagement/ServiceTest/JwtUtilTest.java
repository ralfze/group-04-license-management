package com.example.licensemanagement.ServiceTest;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Test;

import com.example.licensemanagement.Service.JwtUtil;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Date;

public class JwtUtilTest {

    private static final String SECRET_KEY = "secretKey1234secretKey1234secretKey1234secretKey1234secretKey1234";
    private static final String TEST_USERNAME = "testUser";

    @Test
    public void testGenerateToken() {
        // Generate a token using JwtUtil
        String token = JwtUtil.generateToken(TEST_USERNAME);

        // Parse the token to retrieve claims
        Jws<Claims> claimsJws = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
        Claims claims = claimsJws.getBody();

        // Assertions
        assertThat(claims.getSubject()).isEqualTo(TEST_USERNAME);
        assertThat(claims.getIssuedAt()).isBeforeOrEqualTo(new Date());
        assertThat(claims.getExpiration()).isAfter(new Date());
    }
}
