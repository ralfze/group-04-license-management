// frontend/src/components/Customers/AddCustomerComponent.js
import React, { useState } from 'react';
import { Box, Button, HStack, ChakraProvider } from '@chakra-ui/react';
import CustomerAddForm from './CustomerAddForm';
import CustomerService from '../../services/CustomerService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddCustomerComponent = () => {
  const [customer, setCustomer] = useState({ customer: {}, users: [] }
  );
  const navigate = useNavigate(); // Get the navigate function from the hook

  const handleSave = async () => {
    try {
      await CustomerService.createCustomer(customer);
      navigate('/customers');
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  const handleAbort = () => {
    navigate('/customers');
  }

  return (
    <ChakraProvider>
      <Box>
        <CustomerAddForm customer={customer} setCustomer={setCustomer} />
        <HStack>
          <Button onClick={handleSave}>Create Customer</Button>
          <Button onClick={handleAbort}>Abort</Button>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default AddCustomerComponent;