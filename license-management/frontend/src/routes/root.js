import React from 'react';
import {
  ChakraProvider,
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

const Root = () => {
  return (
    <ChakraProvider>
      <Flex as="div" p="1em" alignItems="center">
        <Heading as="h1">License Management</Heading>
        <Spacer />

        <HStack spacing="1em">
          <Button as={Link} to="/add" variant="solid" size="md">
            Add
          </Button>
          <Input placeholder="filter"></Input>
          <Avatar></Avatar>
          <Button as={Link} to="/add" variant="solid" size="md">
            <IconLogout size="4em" />
          </Button>
        </HStack>
      </Flex>

      <Flex as="nav" p="1em" alignItems="flex-start">
        <Flex spacing="1em" direction="column">
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

        <Flex as="div" direction='column' paddingTop='0em' paddingLeft='1em' gap='0.5em'>
          <HStack w='100%'>
            <Heading as="h2" size="md">
              Customer
            </Heading>

            <Heading as="h2" size="md">
              Address a
            </Heading>

            <Heading as="h2" size="md">
              Address b
            </Heading>

            <Button as={Link} to="edit" variant="solid" size="md">
              Edit
            </Button>

            <Button as={Link} to="/delete" variant="solid" size="md">
              Delete
            </Button>

            <Button as={Link} to="/contracts" variant="solid" size="md">
              Contracts
            </Button>

            <Button as={Link} to="/users" variant="solid" size="md">
              Users
            </Button>
          </HStack>

          <HStack w='100%'>
            <Heading as="h2" size="md">
              Customer
            </Heading>

            <Heading as="h2" size="md">
              Address a
            </Heading>

            <Heading as="h2" size="md">
              Address b
            </Heading>

            <Button as={Link} to="edit" variant="solid" size="md">
              Edit
            </Button>

            <Button as={Link} to="/delete" variant="solid" size="md">
              Delete
            </Button>

            <Button as={Link} to="/contracts" variant="solid" size="md">
              Contracts
            </Button>

            <Button as={Link} to="/users" variant="solid" size="md">
              Users
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Root;
