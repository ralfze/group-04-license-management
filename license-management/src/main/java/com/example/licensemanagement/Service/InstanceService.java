package com.example.licensemanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.licensemanagement.Entity.Instance;

import java.util.List;
import java.util.Optional;

@Service
public class InstanceService {

    @Autowired
    private InstanceRepository instanceRepository;

    public List<Instance> getAllInstances() {
        return instanceRepository.findAll();
    }

    public Optional<Instance> getInstanceById(Long id) {
        return instanceRepository.findById(id);
    }

    public Instance createInstance(Instance instance) {
        return instanceRepository.save(instance);
    }

    public Optional<Instance> updateInstance(Long id, Instance updatedInstance) {
        return instanceRepository.findById(id).map(existingInstance -> {
            existingInstance.setName(updatedInstance.getName());
            existingInstance.setIpAddress(updatedInstance.getIpAddress());
            existingInstance.setType(updatedInstance.getType());
            existingInstance.setStatus(updatedInstance.getStatus());
            existingInstance.setContract(updatedInstance
                    .getContract()); // Assuming you have a method to set the contract in the Instance class
            return instanceRepository.save(existingInstance);
        });
    }

    public void deleteInstance(Long id) {
        instanceRepository.deleteById(id);
    }
}
