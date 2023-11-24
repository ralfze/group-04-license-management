package com.example.licensemanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.licensemanagement.Entity.Instance;

@Repository
public interface InstanceRepository extends JpaRepository<Instance, Long> {
}
