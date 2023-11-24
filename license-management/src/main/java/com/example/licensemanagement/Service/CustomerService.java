package com.example.licensemanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Repo.CustomerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(Long id) {
        return customerRepository.findById(id);
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Optional<Customer> updateCustomer(Long id, Customer updatedCustomer) {
        return customerRepository.findById(id).map(existingCustomer -> {
            existingCustomer.setName(updatedCustomer.getName());
            existingCustomer.setDepartment(updatedCustomer.getDepartment());
            existingCustomer.setStreet(updatedCustomer.getStreet());
            existingCustomer.setTown(updatedCustomer.getTown());
            existingCustomer.setZipCode(updatedCustomer.getZipCode());
            existingCustomer.setCountry(updatedCustomer.getCountry());
            return customerRepository.save(existingCustomer);
        });
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }
}
