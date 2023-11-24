package com.example.licensemanagement.Entity;
import jakarta.persistence.*;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 60)
    private String name;

    @Column(length = 30)
    private String department;

    @Column(length = 60)
    private String street;

    @Column(length = 60)
    private String town;

    @Column(length = 10)
    private String zipCode;

    @Column(length = 30)
    private String country;

    // getters and setters
}
