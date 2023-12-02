# Group-04-License-Management

## Group 04 Members
- Pavithra Sureshkumar 🐱
- Ralf Zeller 🦊

## Features 
- Develop a simple web based license management system
- Manage users associted with customer companies 
- Manage licenses and service contracts with compute instances (VMs)

## Technologies
- Use PostgreSQL RDBMS
- Use Java 17 and SpringBoot
- Use ReactJS as client side technology

## OpenApi Notes
http://localhost:8081/swagger-ui.html
http://localhost:8081/api-docs

## PostgreSql Notes
Database-name: licenseman

```bash
# Connect to postgres
$ psql postgres
# Create Database
CREATE DATABASE licenseman;
# Connect to new database
\c licenseman
# Create new user
CREATE USER admin;
# Change password of user admin to "password"
\password admin
# Grant privileges for admin
GRANT CREATE ON SCHEMA public TO admin;

```