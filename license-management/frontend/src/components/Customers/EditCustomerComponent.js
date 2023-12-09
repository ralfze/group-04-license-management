// frontend/src/components/Customers/EditCustomerComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import CustomerService from '../../services/CustomerService';

const EditCustomerComponent = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate(); // Get the navigate function from the hook

  useEffect(() => {
    const loadCustomer = async () => {
      try {
        const response = await CustomerService.getCustomerById(id);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error loading customer:', error);
      }
    };

    loadCustomer();

  }, [id, navigate]);

  const handleSave = async () => {
    try {
      await CustomerService.updateCustomer(id, customer);
      navigate('/customers');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <Box>
      <CustomerForm customer={customer} setCustomer={setCustomer} />
      <Button onClick={handleSave}>Save</Button>
    </Box>
  );
};

export default EditCustomerComponent;
