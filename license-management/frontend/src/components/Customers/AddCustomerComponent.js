// frontend/src/components/Customers/AddCustomerComponent.js
import React, { useState } from 'react';
import { Box, Button, HStack, Heading, VStack } from '@chakra-ui/react';
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
    <Box>
      <VStack>
        <HStack>
          <Heading>Add new Customer</Heading>
        </HStack>
        <CustomerAddForm customer={customer} setCustomer={setCustomer} />
        <HStack gap="2em" w="30%">
          <Button w="50%" onClick={handleSave}>Create Customer</Button>
          <Button w="50%" onClick={handleAbort}>Cancel</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddCustomerComponent;