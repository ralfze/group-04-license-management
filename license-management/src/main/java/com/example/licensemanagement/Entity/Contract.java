package com.example.licensemanagement.Entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    @Column(length = 20)
    private String ipAddress1;

    @Column(length = 20)
    private String ipAddress2;

    @Column(length = 20)
    private String ipAddress3;

    @Lob
    private String licenseKey;

    @ManyToOne
    private User user1;

    @ManyToOne
    private User user2;

    private int integerField1;

    private int integerField2;

    private int integerField3;

    private int integerField4;

    // getters and setters
}

