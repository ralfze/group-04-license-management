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
    @Column(columnDefinition = "TEXT")
    private String licenseKey;

    @ManyToOne
    private User user1;

    @ManyToOne
    private User user2;

    @ManyToOne
    private Customer customer;

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    private double version;

    public double getVersion() {
        return version;
    }

    public void setVersion(double version) {
        this.version = version;
    }

    private int featureA;

    private int featureB;

    private int featureC;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getIpAddress1() {
        return ipAddress1;
    }

    public void setIpAddress1(String ipAddress1) {
        this.ipAddress1 = ipAddress1;
    }

    public String getIpAddress2() {
        return ipAddress2;
    }

    public void setIpAddress2(String ipAddress2) {
        this.ipAddress2 = ipAddress2;
    }

    public String getIpAddress3() {
        return ipAddress3;
    }

    public void setIpAddress3(String ipAddress3) {
        this.ipAddress3 = ipAddress3;
    }

    public String getLicenseKey() {
        return licenseKey;
    }

    public void setLicenseKey(String licenseKey) {
        this.licenseKey = licenseKey;
    }

    public User getUser1() {
        return user1;
    }

    public void setUser1(User user1) {
        this.user1 = user1;
    }

    public User getUser2() {
        return user2;
    }

    public void setUser2(User user2) {
        this.user2 = user2;
    }

    public int getFeatureA() {
        return featureA;
    }

    public void setFeatureA(int featureA) {
        this.featureA = featureA;
    }

    public int getFeatureB() {
        return featureB;
    }

    public void setFeatureB(int featureB) {
        this.featureB = featureB;
    }

    public int getFeatureC() {
        return featureC;
    }

    public void setFeatureC(int featureC) {
        this.featureC = featureC;
    }

    // getters and setters
}

