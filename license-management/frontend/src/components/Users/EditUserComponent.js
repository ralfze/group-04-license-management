// frontend/src/components/Users/EditUserComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import UserService from '../../services/UserService';

const EditUserComponent = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the UserUserId in your component logic
  //console.log('User UserId:', UserId);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await UserService.getUserById(userId);
        setUser(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error('Error loading User:', error);
      }
    };

    loadUser();

  }, [userId, navigate]);

  const handleSave = async () => {
    try {
      await UserService.updateUser(userId, user);
      navigate('/users');
    } catch (error) {
      console.error('Error updating User:', error);
    }
  };

  const handleCancel = () => {
    navigate('/users');
  }

  return (
    <Box>
      <VStack>
        <UserForm user={user} setUser={setUser} />
        <HStack justify="center">
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default EditUserComponent;
