package com.example.licensemanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getPersonById(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping
    public User createPerson(@RequestBody User person) {
        return userRepository.save(person);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        if (userRepository.existsById(id)) {
            updatedUser.setId(id);
            return userRepository.save(updatedUser);
        } else {
            return null; // Handle not found
        }
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
