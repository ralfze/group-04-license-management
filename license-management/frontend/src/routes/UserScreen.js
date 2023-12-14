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
  VStack,
} from '@chakra-ui/react';
import { IconLogout } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const UserScreen = () => {
  return (
    <Box>
      <Flex as="div" p="1em" alignItems="center" direction="row">
        <Heading as="h1">Users</Heading>
        <Spacer />

        <HStack spacing="1em">
          <Button as={Link} to="/add" variant="solid" size="md">
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

        <Flex
          as="div"
          direction="column"
          paddingTop="0em"
          paddingLeft="1em"
          gap="0.5em"
          flex="9"
        >
          <HStack flex="1" alignItems="start">
            <Heading as="h2" size="md" flex="0" align="flex-start">
              Customer
            </Heading>

            <VStack flex="1" alignItems="start">
              <HStack flex="1" alignItems="start">
                <Heading as="h2" size="md" flex="1" whiteSpace="nowrap">
                  User 1
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  user1@custb.com
                </Heading>

                <Button as={Link} to="edit" variant="solid" size="md" flex="1" >
                  Edit
                </Button>

                <Button
                  as={Link}
                  to="/delete"
                  variant="solid"
                  size="md"
                  flex="1"
                >
                  Delete
                </Button>
              </HStack>

              <HStack flex="1" alignItems="start">
                <Heading as="h2" size="md" flex="1" whiteSpace="nowrap">
                  User 2
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  user2@custb.com
                </Heading>

                <Button as={Link} to="edit" variant="solid" size="md" flex="1">
                  Edit
                </Button>

                <Button
                  as={Link}
                  to="/delete"
                  variant="solid"
                  size="md"
                  flex="1"
                >
                  Delete
                </Button>
              </HStack>
              <HStack flex="1" alignItems="start">
                <Heading as="h2" size="md" flex="1" whiteSpace="nowrap">
                  User 3
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  user3@custb.com
                </Heading>

                <Button as={Link} to="edit" variant="solid" size="md" flex="1">
                  Edit
                </Button>

                <Button
                  as={Link}
                  to="/delete"
                  variant="solid"
                  size="md"
                  flex="1"
                >
                  Delete
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserScreen;
