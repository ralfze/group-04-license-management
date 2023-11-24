package com.example.licensemanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.licensemanagement.Entity.Customer;
import com.example.licensemanagement.Entity.User;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {
}

@Repository
public interface InstanceRepository extends JpaRepository<Instance, Long> {
}