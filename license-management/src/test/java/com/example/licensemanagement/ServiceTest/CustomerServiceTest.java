package com.example.licensemanagement.ServiceTest;

import com.example.licensemanagement.dto.CustomerDTO;
import com.example.licensemanagement.Entity.Contract;
import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.ContractRepository;
import com.example.licensemanagement.Repo.CustomerRepository;
import com.example.licensemanagement.Repo.UserRepository;
import com.example.licensemanagement.Service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private ContractRepository contractRepository;

    @InjectMocks
    private CustomerService customerService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllCustomersWithUsers() {
        // Arrange
        Customer customer = new Customer();
        User user = new User();
        user.setCustomer(customer);
        when(customerRepository.findAll()).thenReturn(Collections.singletonList(customer));
        when(userRepository.findByCustomer(customer)).thenReturn(Collections.singletonList(user));

        // Act
        List<CustomerDTO> result = customerService.getAllCustomersWithUsers();

        // Assert
        assertThat(result).hasSize(1);
        assertThat(result.get(0).getCustomer()).isEqualTo(customer);
        assertThat(result.get(0).getUsers()).containsExactly(user);
    }

    @Test
    void getCustomerWithUsersById_WhenCustomerExists() {
        // Arrange
        Long customerId = 1L;
        Customer customer = new Customer();
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(customer));

        // Act
        CustomerDTO result = customerService.getCustomerWithUsersById(customerId);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.getCustomer()).isEqualTo(customer);
    }

    @Test
    void getCustomerWithUsersById_WhenCustomerDoesNotExist() {
        // Arrange
        Long customerId = 1L;
        when(customerRepository.findById(customerId)).thenReturn(Optional.empty());

        // Act
        CustomerDTO result = customerService.getCustomerWithUsersById(customerId);

        // Assert
        assertThat(result).isNull();
    }

    @Test
    void createCustomerWithUsers() {
        // Arrange
        CustomerDTO customerDTO = new CustomerDTO();
        Customer customer = new Customer();
        customerDTO.setCustomer(customer);
        User user = new User();
        customerDTO.setUsers(Collections.singletonList(user));
        when(customerRepository.save(customer)).thenReturn(customer);
        when(userRepository.save(user)).thenReturn(user);

        // Act
        CustomerDTO result = customerService.createCustomerWithUsers(customerDTO);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.getCustomer().getId()).isEqualTo(customer.getId());
    }

    @Test
    void updateCustomerWithUsers_WhenCustomerExists() {
        // Arrange
        Long customerId = 1L;
        CustomerDTO updatedCustomerDTO = new CustomerDTO();
        Customer updatedCustomer = new Customer();
        updatedCustomerDTO.setCustomer(updatedCustomer);
        User updatedUser = new User();
        updatedCustomerDTO.setUsers(Collections.singletonList(updatedUser));
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(new Customer()));
        when(userRepository.findById(updatedUser.getId())).thenReturn(Optional.of(new User()));
        when(customerRepository.save(updatedCustomer)).thenReturn(updatedCustomer);
        when(userRepository.save(updatedUser)).thenReturn(updatedUser);

        // Act
        CustomerDTO result = customerService.updateCustomerWithUsers(customerId, updatedCustomerDTO);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.getCustomer().getId()).isEqualTo(updatedCustomer.getId());
    }

    @Test
    void updateCustomerWithUsers_WhenCustomerDoesNotExist() {
        // Arrange
        Long customerId = 1L;
        CustomerDTO updatedCustomerDTO = new CustomerDTO();
        when(customerRepository.findById(customerId)).thenReturn(Optional.empty());

        // Act
        CustomerDTO result = customerService.updateCustomerWithUsers(customerId, updatedCustomerDTO);

        // Assert
        assertThat(result).isNull();
    }

    @Test
    void deleteCustomerWithUsers() {
        // Arrange
        Long customerId = 1L;
        Customer customer = new Customer();
        User user = new User();
        user.setCustomer(customer);
        Contract contract = new Contract();
        contract.setUser1(user);
        when(customerRepository.findById(customerId)).thenReturn(Optional.of(customer));
        when(userRepository.findByCustomer(customer)).thenReturn(Collections.singletonList(user));
        when(contractRepository.findByUser1(user)).thenReturn(Collections.singletonList(contract));

        // Act
        customerService.deleteCustomerWithUsers(customerId);

        // Assert
        verify(contractRepository).save(contract);
        verify(userRepository).delete(user);
        verify(customerRepository).delete(customer);
    }

    @Test
    void searchCustomersByName() {
        // Arrange
        String name = "Customer";
        Customer customer = new Customer();
        when(customerRepository.findByNameContainingIgnoreCase(name)).thenReturn(Collections.singletonList(customer));
        when(userRepository.findByCustomer(customer)).thenReturn(Collections.emptyList());

        // Act
        List<CustomerDTO> result = customerService.searchCustomersByName(name);

        // Assert
        assertThat(result).hasSize(1);
        assertThat(result.get(0).getCustomer()).isEqualTo(customer);
        assertThat(result.get(0).getUsers()).isEmpty();
    }
}
