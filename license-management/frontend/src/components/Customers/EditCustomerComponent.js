// frontend/src/components/Customers/EditCustomerComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import CustomerService from '../../services/CustomerService';

const EditCustomerComponent = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the customercustomerId in your component logic
  //console.log('Customer customerId:', customerId);

  useEffect(() => {
    const loadCustomer = async () => {
      try {
        const response = await CustomerService.getCustomerById(customerId);
        setCustomer(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error('Error loading customer:', error);
      }
    };

    loadCustomer();

  }, [customerId, navigate]);

  const handleSave = async () => {
    try {
      await CustomerService.updateCustomer(customerId, customer);
      navigate('/customers');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const handleAbort = () => {
    navigate('/customers');
  }

  return (
    <Box>
      <VStack>
        <HStack>
          <Heading>Edit Customer</Heading>
        </HStack>
        <CustomerForm customer={customer} setCustomer={setCustomer} />
        <HStack gap="2em">
          <Button w="50%" onClick={handleSave}>Save</Button>
          <Button w="50%" onClick={handleAbort}>Cancel</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default EditCustomerComponent;
