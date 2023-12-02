package com.example.licensemanagement.dtoTest;

import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.dto.CustomerDTO;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

class CustomerDTOTest {

    @Test
    void customerDTOGetterSetterTest() {
        // Create a CustomerDTO instance
        CustomerDTO customerDTO = new CustomerDTO();

        // Set values using setters
        Customer customer = new Customer();
        customer.setId(1L);
        customerDTO.setCustomer(customer);

        User user1 = new User();
        User user2 = new User();
        customerDTO.setUsers(List.of(user1, user2));

        // Test the getters
        assertEquals(customer, customerDTO.getCustomer());
        assertEquals(List.of(user1, user2), customerDTO.getUsers());
    }

    // Add more tests as needed
}
