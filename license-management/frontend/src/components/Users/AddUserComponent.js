// frontend/src/components/Users/EditUserComponent.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import UserService from '../../services/UserService';
import CustomerService from '../../services/CustomerService';

const AddUserComponent = () => {
  const [user, setUser] = useState(
    {
      customer: {},
      firstName: "",
      lastName: "",
      password: "",
      loginName: "",
      phoneNumber1: "",
      phoneNumber2: "",
      email: "",
      admin: false,
      token: ""
    });
  const [customers, setCustomers] = useState([]);
  const [init, setInit] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the UserId in your component logic
  //console.log('User UserId:', UserId);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const response = await CustomerService.getAllCustomers();
        setCustomers(response.data);
  
        if (!init && response.data.length > 0 && response.data[0].customer) {
          setUser((user) => ({
            ...user,
            customer: response.data[0].customer,
          }));
          setInit(true);
        }
  
        //console.log(response.data);
        //console.log(response.data[0]?.customer); // Using optional chaining to handle undefined
      } catch (error) {
        console.error('Error loading customers:', error);
      }
    };

    loadCustomers();
  }
    , [init, navigate]);

    

  const handleChange = (e) => {
    //console.log(e);
    //console.log(`name: ${e.target.name} value: ${e.target.value}`);
    setUser((user) => (
      {
        ...user,
        [e.target.name]: e.target.value,
      }));
    //console.log(user);
  };



  const handleSave = async () => {
    console.log(user);
    if (user.loginName && user.password && user.customer !== null) {
      try {
        await UserService.createUser(user);
        navigate('/users');
      } catch (error) {
        console.error('Error adding User:', error);
      }
    }
  };

  const handleAbort = () => {
    navigate('/users');
  };



  return (
    <Box>
      <VStack>
        <Heading>Create a new user.</Heading>
        {/* username & password */}
        <HStack>
          <FormControl isRequired={true}>
            <FormLabel>Loginname</FormLabel>
            <Input
              type="text"
              name="loginName"
              placeholder="loginname"
              value={user.loginName || ''}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired={true}>
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              name="password"
              placeholder="Password"
              value={user.password || ''}
              onChange={handleChange}
            />
          </FormControl>

        </HStack>
        <UserForm user={user} setUser={setUser} customers={customers} customerRequired={true} readOnly={false} />
        <HStack justify="center">
          <Button onClick={handleSave}>Create User</Button>
          <Button onClick={handleAbort}>Abort</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddUserComponent;
