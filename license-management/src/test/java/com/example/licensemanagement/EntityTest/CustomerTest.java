package com.example.licensemanagement.EntityTest;

import org.junit.jupiter.api.Test;

import com.example.licensemanagement.Entity.Customer;

import static org.junit.jupiter.api.Assertions.*;

class CustomerTest {

    @Test
    void customerGetterSetterTest() {
        // Create a customer instance
        Customer customer = new Customer();
        
        // Set values using setters
        customer.setId(1L);
        customer.setName("Test Customer");
        customer.setDepartment("Test Department");
        customer.setStreet("Test Street");
        customer.setTown("Test Town");
        customer.setZipCode("12345");
        customer.setCountry("Test Country");

        // Test the getters
        assertEquals(1L, customer.getId());
        assertEquals("Test Customer", customer.getName());
        assertEquals("Test Department", customer.getDepartment());
        assertEquals("Test Street", customer.getStreet());
        assertEquals("Test Town", customer.getTown());
        assertEquals("12345", customer.getZipCode());
        assertEquals("Test Country", customer.getCountry());
    }
    
    // Add more tests as needed
}
