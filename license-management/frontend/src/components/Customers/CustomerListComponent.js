// frontend/src/components/Customers/CustomerListComponent.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import CustomerService from '../../services/CustomerService';

const CustomerListComponent = ({navigate}) => {
  const [customers, setCustomers] = useState([]);
  //const navigate = useNavigate(); // Get the navigate function from the hook

  useEffect(() => {
    loadCustomers();
  }, [navigate]);

  const loadCustomers = async () => {
    try {
      const response = await CustomerService.getAllCustomers();
      setCustomers(response.data);
    } catch (error) {
      console.error('Error loading customers:', error);
    }
  };

  return (
    <Box>
      <Button as={Link} to="/customers/add">Add Customer</Button>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
              <Td>
                <Button as={Link} to={`/customers/edit/${customer.id}`}>Edit</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerListComponent;
