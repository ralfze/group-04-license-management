package com.example.licensemanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.licensemanagement.Entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}