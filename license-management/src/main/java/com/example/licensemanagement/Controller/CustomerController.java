package com.example.licensemanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.licensemanagement.Service.CustomerService;
import com.example.licensemanagement.dto.CustomerDTO;
import java.util.List;


@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<CustomerDTO> getAllCustomers() {
        return customerService.getAllCustomersWithUsers();
    }

    @GetMapping("/{customerId}")
    public CustomerDTO getCustomerById(@PathVariable Long customerId) {
        return customerService.getCustomerWithUsersById(customerId);
    }

    @PostMapping
    public CustomerDTO createCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.createCustomerWithUsers(customerDTO);
    }

    @PutMapping("/{customerId}")
    public CustomerDTO updateCustomer(@PathVariable Long customerId, @RequestBody CustomerDTO updatedCustomerDTO) {
        return customerService.updateCustomerWithUsers(customerId, updatedCustomerDTO);
    }

    @DeleteMapping("/{customerId}")
    public void deleteCustomer(@PathVariable Long customerId) {
        customerService.deleteCustomerWithUsers(customerId);
    }

    @GetMapping("/search")
    public List<CustomerDTO> searchCustomersByName(@RequestParam String regex) {
        return customerService.searchCustomersByName(regex);
    }
}
