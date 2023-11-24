package com.example.licensemanagement.Entity;

import jakarta.persistence.*;

@Entity
public class Instance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30)
    private String name;

    @Column(length = 20)
    private String ipAddress;

    @Column(length = 30)
    private String type;

    private int status;

    @ManyToOne
    private Contract contract;

    // getters and setters
}
