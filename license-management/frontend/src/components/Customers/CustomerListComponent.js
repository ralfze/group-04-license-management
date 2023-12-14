// frontend/src/components/Customers/CustomerListComponent.js
import React, { useState, useEffect } from 'react';
import { Button, HStack, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link and useNavigate
import CustomerService from '../../services/CustomerService';

const CustomerListComponent = ({ navigate }) => {
  const [customers, setCustomers] = useState([]);

  //const navigate = useNavigate(); // Get the navigate function from the hook

  useEffect(() => {
    loadCustomers();
  }
    , [navigate]);

  const loadCustomers = async () => {
    try {
      const response = await CustomerService.getAllCustomers();
      setCustomers(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error loading customers:', error);
    }
  };

  return (
    <Flex
      as="div"
      direction="column"
      paddingTop="0em"
      paddingLeft="1em"
      gap="0.5em"
      flex="9"
    >
      {customers.length > 0 ? (
        customers.map((customer) => (
          <HStack flex="1" key={customer.customer.id}>
            <Heading as="h2" size="md" flex="1" key={`name-${customer.customer.id}`}>
              {customer.customer.name}
            </Heading>

            <Heading as="h2" size="md" flex="1" key={`street-${customer.customer.id}`}>
              {customer.customer.street}
            </Heading>

            <Heading as="h2" size="md" flex="1" key={`town-${customer.customer.id}`}>
              {customer.customer.town}
            </Heading>

            <Button as={Link} to={`edit/${customer.customer.id}`} variant="solid" size="md" flex="1" key={`edit-${customer.customer.id}`}>
              Edit
            </Button>

            <Button as={Link} to={`delete/${customer.customer.id}`} variant="solid" size="md" flex="1" key={`delete-${customer.customer.id}`}>
              Delete
            </Button>

            <Button
              as={Link}
              to={`/contracts/${customer.customer.id}`}
              variant="solid"
              size="md"
              flex="1"
              key={`contracts-${customer.customer.id}`}
            >
              Contracts
            </Button>

            <Button as={Link} to={`/customers/${customer.customer.id}`} variant="solid" size="md" flex="1" key={`users-${customer.customer.id}`}>
              Users
            </Button>
          </HStack>
        ))) : (
        <p>No customers available</p>
      )}



    </Flex>

  );
};

export default CustomerListComponent;
