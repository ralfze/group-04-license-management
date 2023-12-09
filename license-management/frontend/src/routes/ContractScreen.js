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
  VStack,
} from '@chakra-ui/react';
import { IconLogout } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ContractScreen = () => {
  return (
    <ChakraProvider>
      <Flex as="div" p="1em" alignItems="center" direction="row">
        <Heading as="h1">Contracts</Heading>
        <Spacer />

        <HStack spacing="1em">
          <Button as={Link} to="/add" variant="solid" size="md">
            Add
          </Button>
          <Button
            as={Link}
            to="/hide"
            variant="solid"
            size="md"
            whiteSpace="wrap"
          >
            Hide expired
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

            <VStack flex="1">
              <HStack flex="1">
                <Heading as="h2" size="md" flex="1">
                  Contract start
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  Contract end
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  Version
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

                <Button
                  as={Link}
                  to="/contracts"
                  variant="solid"
                  size="md"
                  flex="1"
                >
                  Details
                </Button>
              </HStack>
              <HStack flex="1">
                <Heading as="h2" size="md" flex="1">
                  Contract start
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  Contract end
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  Version
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

                <Button
                  as={Link}
                  to="/contracts"
                  variant="solid"
                  size="md"
                  flex="1"
                >
                  Details
                </Button>
              </HStack>
              <HStack flex="1">
                <Heading as="h2" size="md" flex="1">
                  Contract start
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  Contract end
                </Heading>

                <Heading as="h2" size="md" flex="1">
                  Version
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

                <Button
                  as={Link}
                  to="/contracts"
                  variant="solid"
                  size="md"
                  flex="1"
                >
                  Details
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default ContractScreen;
