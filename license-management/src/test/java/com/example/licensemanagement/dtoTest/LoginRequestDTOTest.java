package com.example.licensemanagement.dtoTest;

import org.junit.jupiter.api.Test;

import com.example.licensemanagement.dto.LoginRequestDTO;

import static org.junit.jupiter.api.Assertions.*;

class LoginRequestDTOTest {

    @Test
    void loginRequestDTOGetterSetterTest() {
        // Create a LoginRequestDTO instance
        LoginRequestDTO loginRequestDTO = new LoginRequestDTO();

        // Set values using setters
        loginRequestDTO.setLoginName("testUser");
        loginRequestDTO.setPassword("password123");

        // Test the getters
        assertEquals("testUser", loginRequestDTO.getLoginName());
        assertEquals("password123", loginRequestDTO.getPassword());
    }

    // Add more tests as needed
}
