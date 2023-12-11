import React from 'react';
import {
  Box,
  Button,
  HStack,
  Input,
  Avatar,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { IconLogout } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import CustomerListComponent from '../components/Customers/CustomerListComponent';

const CustomerScreen = () => {
  return (
    <Box>
      <Flex as="div" p="1em" alignItems="center" direction="row">
        <Heading as="h1">Customers</Heading>
        <Spacer />

        <HStack spacing="1em">
          <Button as={Link} to="add/" variant="solid" size="md">
            Add
          </Button>
          <Input placeholder="filter"></Input>
          <Avatar></Avatar>
          <Button as={Link} to="/login" variant="solid" size="md">
            <IconLogout size="4em" />
          </Button>
        </HStack>
      </Flex>

      <Flex as="nav" p="1em" direction="row">
        <Flex spacing="1em" direction="column" flex="1">
          <Button as={Link} to="/customers" variant="solid" size="md">
            Customers
          </Button>

          <Button as={Link} to="/contracts" variant="solid" size="md">
            Contracts
          </Button>
          <Button as={Link} to="/instances" variant="solid" size="md">
            Instances
          </Button>
          <Button as={Link} to="/users" variant="solid" size="md">
            Users
          </Button>
        </Flex>
        <CustomerListComponent />
      </Flex>
    </Box>
  );
};

export default CustomerScreen;
