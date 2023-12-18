package com.example.licensemanagement.Controller;

import com.example.licensemanagement.dto.LoginRequestDTO;
import com.example.licensemanagement.Entity.User;
import com.example.licensemanagement.Service.UserService;
import com.example.licensemanagement.Service.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
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

    @Autowired
    private final AuthenticationManager authenticationManager;

    public AuthController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestDTO loginRequest) {
        // Retrieve user by loginName
        String loginName = loginRequest.getLoginName();
        System.out.println(loginName);

        com.example.licensemanagement.Entity.User user = (User) userService.getUserByLoginName(loginName);
                System.out.println(passwordEncoder.matches(loginRequest.getPassword(),
                (String) user.getPassword()));
        System.out.println(passwordEncoder.encode("password"));
        // Check if the user exists and the password is correct
        if (user != null && passwordEncoder.matches(loginRequest.getPassword(),
                (String) user.getPassword())) {
            // Assuming a successful login, generate a token
            String token = JwtUtil.generateToken(loginRequest.getLoginName());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Invalid login credentials");
        }
    }

    /*
     * @PostMapping("/login")
     * public ResponseEntity<String> login(@RequestBody LoginRequestDTO
     * loginRequest) {
     * // Retrieve user by loginName
     * String loginName = loginRequest.getLoginName();
     * com.example.licensemanagement.Entity.User user = (User)
     * userService.getUserByLoginName(loginName);
     * 
     * // Check if the user exists and the password is correct
     * if (user != null && passwordEncoder.matches(loginRequest.getPassword(),
     * (String) user.getPassword())) {
     * return ResponseEntity.ok("Login successful");
     * } else {
     * return ResponseEntity.status(HttpStatus.UNAUTHORIZED).
     * body("Invalid login credentials");
     * }
     * }
     */
}