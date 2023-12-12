-- Insert sample data into the customer table
INSERT INTO customer (id, name, street, town) VALUES
  (0, 'Customer1', '123 First St', 'City A'),
  (1, 'Customer2', '456 Second St', 'City B'),
  (2, 'Customer3', '789 Third St', 'City C');

-- Insert users associated with Customer1
INSERT INTO user_entity (id, first_name, last_name, login_name, password, email, is_admin, phone_number1, phone_number2, customer_id) VALUES
  (0, 'John1', 'Doe', 'john_doe1', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'john1@example.com', true, '123-456-7890', '987-654-3210', 0),
  (1, 'Jane1', 'Doe', 'jane_doe1', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'jane1@example.com', false, '555-123-4567', '987-123-4560', 0),
  (2, 'Alice1', 'Smith', 'alice_smith1', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'alice1@example.com', false, '111-222-3333', '444-555-6666', 0),
  (3, 'Bob1', 'Johnson', 'bob_johnson1', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'bob1@example.com', false, '999-888-7777', '666-555-4444', 0);

-- Insert users associated with Customer2
INSERT INTO user_entity (id, first_name, last_name, login_name, password, email, is_admin, phone_number1, phone_number2, customer_id) VALUES
  (4, 'John2', 'Doe', 'john_doe2', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'john2@example.com', true, '123-456-7890', '987-654-3210', 1),
  (5, 'Jane2', 'Doe', 'jane_doe2', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'jane2@example.com', false, '555-123-4567', '987-123-4560', 1),
  (6, 'Alice2', 'Smith', 'alice_smith2', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'alice2@example.com', false, '111-222-3333', '444-555-6666', 1),
  (7, 'Bob2', 'Johnson', 'bob_johnson2', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'bob2@example.com', false, '999-888-7777', '666-555-4444', 1);

-- Insert users associated with Customer3
INSERT INTO user_entity (id, first_name, last_name, login_name, password, email, is_admin, phone_number1, phone_number2, customer_id) VALUES
  (8, 'John3', 'Doe', 'john_doe3', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'john3@example.com', true, '123-456-7890', '987-654-3210', 2),
  (9, 'Jane3', 'Doe', 'jane_doe3', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'jane3@example.com', false, '555-123-4567', '987-123-4560', 2),
  (10, 'Alice3', 'Smith', 'alice_smith3', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'alice3@example.com', false, '111-222-3333', '444-555-6666', 2),
  (11, 'Bob3', 'Johnson', 'bob_johnson3', '$2a$10$eT5c/7cJ40wZbDPbQGndIewbn4RiCVCUsYdyTgpkik5r6FEklR2Pa', 'bob3@example.com', false, '999-888-7777', '666-555-4444', 2);

-- Insert contracts associated with Customer1
INSERT INTO contract (id, start_date, end_date, ip_address1, ip_address2, ip_address3, user1_id, user2_id, customer_id, version, featurea, featureb, featurec) VALUES
  (0, '2023-01-01', '2023-12-31', '192.168.1.1', '192.168.1.2', '192.168.1.3', 0, 1, 0, 1.0, 1, 2, 1),
  (1, '2023-02-01', '2023-11-30', '192.168.2.1', '192.168.2.2', '192.168.2.3', 2, 3, 0, 1.1, 1, 1, 3);

-- Insert contracts associated with Customer2
INSERT INTO contract (id, start_date, end_date, ip_address1, ip_address2, ip_address3, user1_id, user2_id, customer_id, version, featurea, featureb, featurec) VALUES
  (2, '2023-03-01', '2023-10-31', '192.168.3.1', '192.168.3.2', '192.168.3.3', 4, 5, 1, 1.2, 0, 1, 1),
  (3, '2023-04-01', '2023-09-30', '192.168.4.1', '192.168.4.2', '192.168.4.3', 6, 7, 1, 1.3, 1, 3, 1);

-- Insert contracts associated with Customer3
INSERT INTO contract (id, start_date, end_date, ip_address1, ip_address2, ip_address3, user1_id, user2_id, customer_id, version, featurea, featureb, featurec) VALUES
  (4, '2023-05-01', '2023-08-31', '192.168.5.1', '192.168.5.2', '192.168.5.3', 8, 9, 2, 1.4, 1, 1, 2),
  (5, '2023-06-01', '2023-07-31', '192.168.6.1', '192.168.6.2', '192.168.6.3', 10, 11, 2, 1.5, 2, 1, 1);

-- Insert instances associated with Customer1
INSERT INTO instance (id, name, ip_address, type, status, contract_id) VALUES
  (0, 'Instance1', '192.168.1.1', 'Type A', 1, 0),
  (1, 'Instance2', '192.168.2.1', 'Type B', 1, 1);

-- Insert instances associated with Customer2
INSERT INTO instance (id, name, ip_address, type, status, contract_id) VALUES
    (2, 'Instance3', '192.168.3.1', 'Type A', 1, 2),
  (3, 'Instance4', '192.168.4.1', 'Type B', 1, 3);

-- Insert instances associated with Customer3
INSERT INTO instance (id, name, ip_address, type, status, contract_id) VALUES
    (4, 'Instance5', '192.168.5.1', 'Type A', 1, 4),
  (5, 'Instance6', '192.168.6.1', 'Type B', 1, 5);
