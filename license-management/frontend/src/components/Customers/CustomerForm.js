// frontend/src/components/Customers/CustomerForm.js
import React from 'react';
import { Box, Input } from '@chakra-ui/react';

const CustomerForm = ({ customer, setCustomer }) => {
  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Input
        type="text"
        name="name"
        placeholder="Customer Name"
        value={customer.name || ''}
        onChange={handleChange}
      />
    </Box>
  );
};

export default CustomerForm;