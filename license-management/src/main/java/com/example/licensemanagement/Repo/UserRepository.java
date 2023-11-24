package com.example.licensemanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.licensemanagement.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom queries if needed
}