package com.example.licensemanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.licensemanagement.Entity.Contract;
import com.example.licensemanagement.Repo.ContractRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }

    public Optional<Contract> getContractById(Long id) {
        return contractRepository.findById(id);
    }

    public Contract createContract(Contract contract) {
        return contractRepository.save(contract);
    }

    public Optional<Contract> updateContract(Long id, Contract updatedContract) {
        return contractRepository.findById(id).map(existingContract -> {
            existingContract.setStartDate(updatedContract.getStartDate());
            existingContract.setEndDate(updatedContract.getEndDate());
            existingContract.setIpAddress1(updatedContract.getIpAddress1());
            existingContract.setIpAddress2(updatedContract.getIpAddress2());
            existingContract.setIpAddress3(updatedContract.getIpAddress3());
            existingContract.setLicenseKey(updatedContract.getLicenseKey());
            existingContract.setUser1(updatedContract.getUser1());
            existingContract.setUser2(updatedContract.getUser2());
            existingContract.setFeatureA(updatedContract.getFeatureA());
            existingContract.setFeatureB(updatedContract.getFeatureB());
            existingContract.setFeatureC(updatedContract.getFeatureC());
            return contractRepository.save(existingContract);
        });
    }

    public void deleteContract(Long id) {
        contractRepository.deleteById(id);
    }
}

