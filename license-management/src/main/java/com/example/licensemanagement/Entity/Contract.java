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

    public Object getStartDate() {
        return null;
    }

    public void setStartDate(Object startDate2) {
    }

    public Object getEndDate() {
        return null;
    }

    public void setEndDate(Object endDate2) {
    }

    public Object getIpAddress1() {
        return null;
    }

    public void setIpAddress1(Object ipAddress12) {
    }

    public Object getIpAddress2() {
        return null;
    }

    public void setIpAddress2(Object ipAddress22) {
    }

    public Object getIpAddress3() {
        return null;
    }

    public void setIpAddress3(Object ipAddress32) {
    }

    public Object getLicenseKey() {
        return null;
    }

    public void setLicenseKey(Object licenseKey2) {
    }

    public Object getUser1() {
        return null;
    }

    public void setUser1(Object user12) {
    }

    public Object getUser2() {
        return null;
    }

    public void setUser2(Object user22) {
    }

    public Object getIntegerField1() {
        return null;
    }

    public void setIntegerField1(Object integerField12) {
    }

    public Object getIntegerField2() {
        return null;
    }

    public void setIntegerField2(Object integerField22) {
    }

    public Object getIntegerField3() {
        return null;
    }

    public void setIntegerField3(Object integerField32) {
    }

    public Object getIntegerField4() {
        return null;
    }

    public void setIntegerField4(Object integerField42) {
    }

    // getters and setters
}

