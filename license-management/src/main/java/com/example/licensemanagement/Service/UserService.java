package com.example.licensemanagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.licensemanagement.Entity.Contract;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Repo.ContractRepository;
import com.example.licensemanagement.Repo.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();

        // Sort the contracts based on their IDs
        users.sort(Comparator.comparing(User::getId));

        return users;
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
            existingUser.setCustomer(updatedUser.getCustomer());
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
        // Get the user
        Optional<User> user = userRepository.findById(id);
        // Find contracts which the User is a member of
        List<Contract> contractPos1 = contractRepository.findByUser1(user);
        List<Contract> contractPos2 = contractRepository.findByUser2(user);
        // Set the remove the user from contract
        for (Contract c : contractPos1) {
            c.setUser1(null);
        }
        for (Contract c : contractPos2) {
            c.setUser2(null);
        }
        // Delete the User
        userRepository.deleteById(id);
    }

    public Object getUserByLoginName(String loginName) {
        return null;
    }
}
