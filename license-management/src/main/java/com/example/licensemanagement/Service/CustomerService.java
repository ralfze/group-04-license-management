package com.example.licensemanagement.Service;

import com.example.licensemanagement.dto.CustomerDTO;
import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.CustomerRepository;
import com.example.licensemanagement.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private UserRepository userRepository;

    public List<CustomerDTO> getAllCustomersWithUsers() {
        List<Customer> customers = customerRepository.findAll();
        return customers.stream()
                .map(this::createCustomerDTO)
                .collect(Collectors.toList());
    }

    public CustomerDTO getCustomerWithUsersById(Long customerId) {
        Customer customer = customerRepository.findById(customerId).orElse(null);
        return (customer != null) ? createCustomerDTO(customer) : null;
    }

    public CustomerDTO createCustomerWithUsers(CustomerDTO customerDTO) {
        final Customer[] customerHolder = {customerDTO.getCustomer()}; // Declare as final array
        List<User> users = customerDTO.getUsers();

        // Save customer
        customerHolder[0] = customerRepository.save(customerHolder[0]);

        // Associate users with the customer and save them
        users.forEach(user -> {
            user.setCustomer(customerHolder[0]);
            userRepository.save(user);
        });

        return createCustomerDTO(customerHolder[0]);
    }

    public CustomerDTO updateCustomerWithUsers(Long customerId, CustomerDTO updatedCustomerDTO) {
        // Implement updating logic
        // ...

        return updatedCustomerDTO;
    }

    public void deleteCustomerWithUsers(Long customerId) {
        // Implement deletion logic
        // ...
    }

    public List<CustomerDTO> searchCustomersByName(String regex) {
        // Implement search logic
        // ...

        return null;
    }

    private CustomerDTO createCustomerDTO(Customer customer) {
        List<User> users = userRepository.findByCustomer(customer);
        return new CustomerDTO(customer, users);
    }
}
