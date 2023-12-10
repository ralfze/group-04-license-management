package com.example.licensemanagement.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.licensemanagement.Entity.Contract;
import com.example.licensemanagement.Entity.User;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {
    List<Contract> findByUser1(User user1);
    List<Contract> findByUser2(User user2);
}
