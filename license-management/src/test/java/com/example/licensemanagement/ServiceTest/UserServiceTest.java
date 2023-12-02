package com.example.licensemanagement.ServiceTest;

import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.UserRepository;
import com.example.licensemanagement.Service.UserService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllUsersTest() {
        // Mock data
        User user = new User();
        List<User> users = Arrays.asList(user);

        // Mock repository behavior
        when(userRepository.findAll()).thenReturn(users);

        // Call the service method
        List<User> result = userService.getAllUsers();

        // Verify the result
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(user, result.get(0));

        // Verify repository interactions
        verify(userRepository, times(1)).findAll();
    }

    // Add similar tests for other methods in UserService
}
