package com.example.licensemanagement.dto;

import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;

import java.util.List;

public class CustomerDTO {

    private Customer customer;
    private List<User> users;

    public CustomerDTO(Customer customer, List<User> users) {
        this.customer = customer;
        this.users = users;
    }
    public Customer getCustomer() {
        return customer;
    }
    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
   
    public List<User> getUsers() {
        return users;
    }
    public void setUsers(List<User> users) {
        this.users = users;
    }

    // Constructors, getters, and setters
}

