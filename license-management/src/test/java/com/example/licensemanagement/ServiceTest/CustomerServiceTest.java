package com.example.licensemanagement.ServiceTest;

import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.CustomerRepository;
import com.example.licensemanagement.Repo.UserRepository;
import com.example.licensemanagement.Service.CustomerService;
import com.example.licensemanagement.dto.CustomerDTO;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private CustomerService customerService;

    @Test
    void getAllCustomersWithUsersTest() {
        // Mock data
        Customer customer = new Customer();
        User user = new User();
        user.setCustomer(customer);
        List<Customer> customers = Arrays.asList(customer);
        List<User> users = Arrays.asList(user);

        // Mock repository behavior
        when(customerRepository.findAll()).thenReturn(customers);
        when(userRepository.findByCustomer(customer)).thenReturn(users);

        // Call the service method
        List<CustomerDTO> result = customerService.getAllCustomersWithUsers();

        // Verify the result
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(customer, result.get(0).getCustomer());
        assertEquals(users, result.get(0).getUsers());

        // Verify repository interactions
        verify(customerRepository, times(1)).findAll();
        verify(userRepository, times(1)).findByCustomer(customer);
    }

    // Add similar tests for other methods in CustomerService
}
