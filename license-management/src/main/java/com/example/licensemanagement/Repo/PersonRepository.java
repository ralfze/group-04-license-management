package com.example.licensemanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.licensemanagement.Entity.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
    // You can add custom queries if needed
}