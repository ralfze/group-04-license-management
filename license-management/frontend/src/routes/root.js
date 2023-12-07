import React from 'react';
import {
  ChakraProvider,
  Button,
  HStack,
  Box,
  Stack,
  VStack,
  Input,
  Avatar,
  Grid,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { IconLogout } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Root = () => {
  return (
    <ChakraProvider>
      <Flex as='nav-top' p='1em' alignItems='center'>
        <Heading as='h1'>License Management</Heading>
        <Spacer />

        <HStack spacing='1em'>
          <Button as={Link} to='/add' variant='solid' size='md'>
            Add
          </Button>
          <Input placeholder='filter'></Input>
          <Avatar ></Avatar>
          <Button as={Link} to='/add' variant='solid' >
            <IconLogout size='4em' />
          </Button>
        </HStack>
      </Flex>
      

      <Grid spacing='0'>
        <Box w='20%'>
          <Stack spacing={4} flexDirection='column'>
            <Button as={Link} to='/customers' variant='solid' size='md'>
              Customers
            </Button>
            <Button as={Link} to='/contracts' variant='solid' size='md'>
              Contracts
            </Button>
            <Button as={Link} to='/instances' variant='solid' size='md'>
              Instances
            </Button>
            <Button as={Link} to='/users' variant='solid' size='md'>
              Users
            </Button>
          </Stack>
        </Box>

        <VStack w='80%'>
          {
            //<!-- Content -->
            <HStack>
              <Heading>Customer</Heading>
              <Heading> Address a</Heading>
              <Heading> Address b</Heading>
              <Button as={Link} to='edit' variant='solid' size='md'>
                Edit
              </Button>
              <Button as={Link} to='/delete' variant='solid' size='md'>
                Delete
              </Button>
              <Button as={Link} to='/contracts' variant='solid' size='md'>
                Contracts
              </Button>
              <Button as={Link} to='/users' variant='solid' size='md'>
                Users
              </Button>
            </HStack>
          }
        </VStack>
      </Grid>
    </ChakraProvider>
  );
};

export default Root;
