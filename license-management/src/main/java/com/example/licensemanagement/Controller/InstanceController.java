package com.example.licensemanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.licensemanagement.Entity.Instance;

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
    public ResponseEntity<Instance> getInstanceById(@PathVariable Long id

