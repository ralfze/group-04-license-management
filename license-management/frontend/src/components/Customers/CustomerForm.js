import React from 'react';
import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

const CustomerForm = ({ customer, setCustomer }) => {
  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      {customer.customer && (
        <>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Customer Name"
              value={customer.name || ''}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Street</FormLabel>
            <Input
              type="text"
              name="street"
              placeholder="Customer Street"
              value={customer.street || ''}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Town</FormLabel>
            <Input
              type="text"
              name="town"
              placeholder="Customer Town"
              value={customer.town || ''}
              onChange={handleChange}
            />
          </FormControl>
        </>
      )}
    </Box>
  );
};

export default CustomerForm;
