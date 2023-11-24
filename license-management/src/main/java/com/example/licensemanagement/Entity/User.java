package com.example.licensemanagement.Entity;

import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30)
    private String firstName;

    @Column(length = 30)
    private String lastName;

    @Column(length = 30, unique = true)
    private String loginName;

    private String token;

    @Column(length = 30)
    private String email;

    private boolean isAdmin;

    @Column(length = 15)
    private String phoneNumber1;

    @Column(length = 15)
    private String phoneNumber2;

    // getters and setters
}
