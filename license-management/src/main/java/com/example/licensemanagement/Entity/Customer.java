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

    public Object getName() {
        return null;
    }

    public void setName(Object name2) {
    }

    public Object getDepartment() {
        return null;
    }

    public void setDepartment(Object department2) {
    }

    public Object getStreet() {
        return null;
    }

    public Object getTown() {
        return null;
    }

    public void setStreet(Object street2) {
    }

    public void setTown(Object town2) {
    }

    public Object getZipCode() {
        return null;
    }

    public Object getCountry() {
        return null;
    }

    public void setZipCode(Object zipCode2) {
    }

    public void setCountry(Object country2) {
    }

    // getters and setters
}
