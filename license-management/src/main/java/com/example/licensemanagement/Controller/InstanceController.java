package com.example.licensemanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.licensemanagement.Entity.Instance;
import com.example.licensemanagement.Service.InstanceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/instances")
public class InstanceController {

    @Autowired
    private InstanceService instanceService;

    @GetMapping
    public List<Instance> getAllInstances() {
        return instanceService.getAllInstances();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Instance> getInstanceById(@PathVariable Long id) {
        Optional<Instance> instance = instanceService.getInstanceById(id);
        return instance.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Instance> createInstance(@RequestBody Instance instance) {
        Instance createdInstance = instanceService.createInstance(instance);
        return new ResponseEntity<>(createdInstance, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Instance> updateInstance(@PathVariable Long id, @RequestBody Instance instance) {
        Optional<Instance> updatedInstance = instanceService.updateInstance(id, instance);
        return updatedInstance.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInstance(@PathVariable Long id) {
        instanceService.deleteInstance(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
