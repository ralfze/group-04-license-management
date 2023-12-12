import React, { useState } from 'react';
import { Box, Input, Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    console.log(`Logging in with loginName: ${loginName} and password: ${password}`);

    // Redirect to the "/customers" route
    navigate('/customers');
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="dark"
      >
        <VStack spacing={4} align="stretch">
          <Box border="1px solid"
            borderStyle="dashed"
            borderRadius="md"
            p={4}
            borderColor="purple.200"
            position="relative"><Heading textAlign="center">License Management</Heading></Box>
          <Box
            border="1px solid"
            borderRadius="md"
            p={4}
            borderColor="dark"
            bg="dark"
            position="relative"
          >
            <Heading size="md" textAlign="left" bg="dark" borderRadius="md" py={1}>
              Login
            </Heading>
            <Input
              type="text"
              placeholder="Login Name"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              mb={2}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb={4}
            />
            <Button colorScheme="purple" onClick={handleLogin}>
              Sign in 
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginScreen;
