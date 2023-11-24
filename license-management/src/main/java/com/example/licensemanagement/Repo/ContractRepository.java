package com.example.licensemanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.licensemanagement.Entity.Contract;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {
}
