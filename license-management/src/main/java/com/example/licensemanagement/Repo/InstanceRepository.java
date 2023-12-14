package com.example.licensemanagement.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.licensemanagement.Entity.Contract;
import com.example.licensemanagement.Entity.Instance;

@Repository
public interface InstanceRepository extends JpaRepository<Instance, Long> {
    List<Instance> findByContract(Contract contract);

    List<Instance> findByContract(Optional<Contract> contract);
}
