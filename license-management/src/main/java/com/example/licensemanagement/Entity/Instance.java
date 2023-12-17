package com.example.licensemanagement.Entity;

import jakarta.persistence.*;

@Entity
public class Instance {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "instance_sequence")
    @SequenceGenerator(name = "instance_sequence", sequenceName = "instance_sequence", allocationSize = 1, initialValue = 15)
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    // getters and setters
}
