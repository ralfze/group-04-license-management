package com.example.licensemanagement.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByCustomer(Customer customer);
}



