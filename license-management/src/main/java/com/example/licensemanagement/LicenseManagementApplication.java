package com.example.licensemanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.example.licensemanagement.Entity")
public class LicenseManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(LicenseManagementApplication.class, args);
	}

}
