// frontend/src/components/Users/UserListComponent.js
import React, { useState, useEffect } from 'react';
import { Button, HStack, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link and useNavigate
import UserService from '../../services/UserService';

const UserListComponent = ({ navigate }) => {
  const [users, setUsers] = useState([]);

  //const navigate = useNavigate(); // Get the navigate function from the hook

  useEffect(() => {
    loadUsers();
  }
    , [navigate]);

  const loadUsers = async () => {
    try {
      const response = await UserService.getAllUsers();
      setUsers(response.data);
      console.log(response.data);
      //console.log(users);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  return (
    <Flex
      as="div"
      direction="column"
      paddingTop="0em"
      paddingLeft="1em"
      gap="0.5em"
      flex="9"
    >
      {users.length > 0 ? (
        users.map((user) => (
          <HStack flex="1" key={user.id}>
            <Heading as="h2" size="md" flex="2" key={`custName-${user.id}`}>
              {user.customer.name}
            </Heading>

            <Heading as="h2" size="md" flex="2" key={`name-${user.id}`}>
              {`${user.firstName} ${user.lastName}`}
            </Heading>

            <Heading as="h2" size="md" flex="2" key={`email-${user.id}`}>
              {user.email}
            </Heading>

            <Button as={Link} to={`edit/${user.id}`} variant="solid" size="md" flex="1" key={`edit-${user.id}`}>
              Edit
            </Button>

            <Button as={Link} to={`delete/${user.id}`} variant="solid" size="md" flex="1" key={`delete-${user.id}`}>
              Delete
            </Button>

          </HStack>
        ))
      ) : (
        <p>No users available</p>
      )}

    </Flex>

  );
};

export default UserListComponent;