package com.example.licensemanagement.Controller;


import com.example.licensemanagement.dto.LoginRequestDTO;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestDTO loginRequest) {
        // Retrieve user by loginName
        String loginName = loginRequest.getLoginName();
        com.example.licensemanagement.Entity.User user = (User) userService.getUserByLoginName(loginName);

        // Check if the user exists and the password is correct
        if (user != null && passwordEncoder.matches(loginRequest.getPassword(), (String) user.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials");
        }
    }
}