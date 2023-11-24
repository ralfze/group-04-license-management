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

    private String password; // New field

    private String token;

    @Column(length = 30)
    private String email;

    private boolean isAdmin;

    @Column(length = 15)
    private String phoneNumber1;

    @Column(length = 15)
    private String phoneNumber2;

    public void setId(Long id2) {
    }

    public Object getFirstName() {
        return null;
    }

    public void setFirstName(Object firstName2) {
    }

    public Object getLastName() {
        return null;
    }

    public void setLastName(Object lastName2) {
    }

    public Object getLoginName() {
        return null;
    }

    public void setLoginName(Object loginName2) {
    }

    public Object getToken() {
        return null;
    }

    public void setToken(Object token2) {
    }

    public Object getEmail() {
        return null;
    }

    public void setEmail(Object email2) {
    }

    public Object isAdmin() {
        return null;
    }

    public void setAdmin(Object admin) {
    }

    public Object getPhoneNumber1() {
        return null;
    }

    public void setPhoneNumber1(Object phoneNumber12) {
    }

    public Object getPhoneNumber2() {
        return null;
    }

    public void setPhoneNumber2(Object phoneNumber22) {
    }

    // getters and setters
}
