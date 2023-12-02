package com.example.licensemanagement.Service;

import com.example.licensemanagement.dto.CustomerDTO;
import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.CustomerRepository;
import com.example.licensemanagement.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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
        Optional<Customer> optionalCustomer = customerRepository.findById(customerId);
        if (optionalCustomer.isPresent()) {
            Customer existingCustomer = optionalCustomer.get();

            // Update customer details
            existingCustomer.setName(updatedCustomerDTO.getCustomer().getName());
            existingCustomer.setDepartment(updatedCustomerDTO.getCustomer().getDepartment());
            existingCustomer.setStreet(updatedCustomerDTO.getCustomer().getStreet());
            existingCustomer.setTown(updatedCustomerDTO.getCustomer().getTown());
            existingCustomer.setZipCode(updatedCustomerDTO.getCustomer().getZipCode());
            existingCustomer.setCountry(updatedCustomerDTO.getCustomer().getCountry());

            // Update associated users
            List<User> updatedUsers = updatedCustomerDTO.getUsers();
            for (User updatedUser : updatedUsers) {
                Optional<User> optionalUser = userRepository.findById(updatedUser.getId());
                if (optionalUser.isPresent()) {
                    User existingUser = optionalUser.get();
                    existingUser.setFirstName(updatedUser.getFirstName());
                    existingUser.setLastName(updatedUser.getLastName());
                    existingUser.setLoginName(updatedUser.getLoginName());
                    existingUser.setPassword(updatedUser.getPassword());
                    existingUser.setEmail(updatedUser.getEmail());
                    // Update other user properties as needed
                    userRepository.save(existingUser);
                }
            }

            // Save the updated customer
            customerRepository.save(existingCustomer);

            return createCustomerDTO(existingCustomer);
        } else {
            // Customer not found
            return null;
        }
    }

    public void deleteCustomerWithUsers(Long customerId) {
        Optional<Customer> optionalCustomer = customerRepository.findById(customerId);
        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();

            // Delete associated users
            List<User> users = userRepository.findByCustomer(customer);
            for (User user : users) {
                userRepository.delete(user);
            }

            // Delete the customer
            customerRepository.delete(customer);
        }
    }


    public List<CustomerDTO> searchCustomersByName(String name) {
        List<Customer> matchingCustomers = customerRepository.findByNameContainingIgnoreCase(name);

        return matchingCustomers.stream()
                .map(this::createCustomerDTO)
                .collect(Collectors.toList());
    }


    private CustomerDTO createCustomerDTO(Customer customer) {
        List<User> users = userRepository.findByCustomer(customer);
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setCustomer(customer);
        customerDTO.setUsers(users);
        return customerDTO;
    }
}
