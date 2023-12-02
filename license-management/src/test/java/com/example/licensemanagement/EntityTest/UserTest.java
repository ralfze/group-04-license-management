// User entity test
package com.example.licensemanagement.EntityTest;

import org.junit.jupiter.api.Test;

import com.example.licensemanagement.Entity.User;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void userGetterSetterTest() {
        // Create a user instance
        User user = new User();
        
        // Set values using setters
        user.setId(1L);
        // Set other properties...

        // Test the getters
        assertEquals(1L, user.getId());
        // Test other getters...

    }
    
    // Add more tests as needed
}
