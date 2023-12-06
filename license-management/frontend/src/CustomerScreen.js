// frontend/src/CustomerScreen.js
import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CustomerScreen = () => {
  const navigate = useNavigate(); // Get the navigate function from the hook
  console.log('Navigate:', navigate);
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Customer Screen
      </Text>

      <Button onClick={() => navigate('/customers')}>View Customers</Button>
      <Button onClick={() => navigate('/customers/add')}>Add Customer</Button>
    </Box>
  );
};

export default CustomerScreen;
