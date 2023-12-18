import React, { useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import InstanceListComponent from '../components/Instances/InstanceListComponent';

const InstanceScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    
    const tokenCookie = getCookie('token');

    if (tokenCookie) {
      // The 'token' cookie exists, you can perform actions accordingly
      //console.log('Token cookie found:', tokenCookie);
    } else {
      // The 'token' cookie does not exist
      //console.log('Token cookie not found');
      navigate("/login");
    }
  }, [navigate]);

  // Function to get a specific cookie by name
  const getCookie = (name) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const cookie = cookies.find(cookie => cookie.startsWith(name + '='));

    if (cookie) {
      return cookie.substring(name.length + 1);
    }

    return null;
  };
  const handleLogout = () => {
    // Set the token cookie's expiration date in the past
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirect to the login screen or any other route
    // based on your application logic
    navigate('/login');
  };

  return (
    <Box>
      <Flex as="div" p="1em" alignItems="center" direction="row">
        <Heading as="h1">Instances</Heading>
        <Spacer />

        <HStack spacing="1em">
          <Button as={Link} to="add/" variant="solid" size="md">
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
          <Button as={Link} onClick={() => handleLogout()} variant="solid" size="md">
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
        <InstanceListComponent />
      </Flex>
    </Box>
  );
};

export default InstanceScreen;
