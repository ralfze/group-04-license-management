// frontend/src/components/Customers/AddCustomerComponent.js
import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import CustomerForm from './CustomerForm';
import CustomerService from '../../services/CustomerService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddCustomerComponent = () => {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate(); // Get the navigate function from the hook

  const handleSave = async () => {
    try {
      await CustomerService.createCustomer(customer);
      navigate('/customers');
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <Box>
      <CustomerForm customer={customer} setCustomer={setCustomer} />
      <Button onClick={handleSave}>Save</Button>
    </Box>
  );
};

export default AddCustomerComponent;