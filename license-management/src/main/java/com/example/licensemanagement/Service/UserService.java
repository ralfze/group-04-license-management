package com.example.licensemanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        // Hash the password before saving it to the database
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            existingUser.setLoginName(updatedUser.getLoginName());
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword())); // Hash the updated password
            existingUser.setToken(updatedUser.getToken());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setAdmin(updatedUser.isAdmin());
            existingUser.setPhoneNumber1(updatedUser.getPhoneNumber1());
            existingUser.setPhoneNumber2(updatedUser.getPhoneNumber2());
            return userRepository.save(existingUser);
        });
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}

