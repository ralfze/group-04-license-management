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

    public Object getName() {
        return null;
    }

    public void setName(Object name2) {
    }

    public Object getIpAddress() {
        return null;
    }

    public void setIpAddress(Object ipAddress2) {
    }

    public Object getType() {
        return null;
    }

    public void setType(Object type2) {
    }

    public Object getStatus() {
        return null;
    }

    public void setStatus(Object status2) {
    }

    public Object getContract() {
        return null;
    }

    public void setContract(Object contract2) {
    }

    // getters and setters
}
