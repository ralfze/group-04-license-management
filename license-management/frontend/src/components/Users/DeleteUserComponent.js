// frontend/src/components/Users/EditUserComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import UserService from '../../services/UserService';
import CustomerService from '../../services/CustomerService';

const DeleteUserComponent = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [customers, setCustomers] = useState([]);
    
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
        loadCustomers();
    }, [userId, navigate]);



    const loadCustomers = async () => {
        try {
            const response = await CustomerService.getAllCustomers();
            setCustomers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error loading customers:', error);
        }
    };

    const handleDelete = async () => {
        try {
            // Id of the User object 
            await UserService.deleteUser(userId);
            navigate('/users');
        } catch (error) {
            console.error('Error updating User:', error);
        }
    };

    const handleAbort = () => {
        navigate('/users');
    }

    return (
        <Box>
            <VStack>
                <Heading>Delete User</Heading>
                <UserForm user={user} setUser={setUser} customers={customers} readOnly={true} />

                <HStack>
                    <Button onClick={handleDelete}>Delete</Button>
                    <Button onClick={handleAbort}>Cancel</Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default DeleteUserComponent;
