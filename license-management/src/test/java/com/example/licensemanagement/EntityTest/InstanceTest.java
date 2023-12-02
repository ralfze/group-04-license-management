// Instance entity test
package com.example.licensemanagement.EntityTest;

import org.junit.jupiter.api.Test;

import com.example.licensemanagement.Entity.Instance;

import static org.junit.jupiter.api.Assertions.*;

class InstanceTest {

    @Test
    void instanceGetterSetterTest() {
        // Create an instance instance
        Instance instance = new Instance();
        
        // Set values using setters
        instance.setId(1L);
        // Set other properties...

        // Test the getters
        assertEquals(1L, instance.getId());
        // Test other getters...
    }
    
    // Add more tests as needed
}
