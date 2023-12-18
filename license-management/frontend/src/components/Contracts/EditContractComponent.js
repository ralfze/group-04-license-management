// frontend/src/components/Contracts/EditContractComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import ContractForm from './ContractForm';
import ContractService from '../../services/ContractService';
import UserService from '../../services/UserService';

const EditContractComponent = () => {
  const { contractId } = useParams();
  const [contract, setContract] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the ContractContractId in your component logic
  //console.log('Contract contractId:', contractId);

  useEffect(() => {
    const loadContract = async () => {
      try {
        const response = await ContractService.getContractById(contractId);
        setContract(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error loading contract:', error);
      }
    };

    loadContract();
    loadUsers();

  }, [contractId, navigate]);

  const loadUsers = async () => {
    try {
      const response = await UserService.getAllUsers();
      setUsers(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const handleSave = async () => {
    try {
      await ContractService.updateContract(contractId, contract);
      navigate('/contracts');
    } catch (error) {
      console.error('Error updating contract:', error);
    }
  };

  const handleAbort = () => {
    navigate('/contracts');
  }

  return (
    <Box>
      <VStack>
        <HStack>
          <Heading>Edit Contract</Heading>
        </HStack>
        <ContractForm contract={contract} users={users} setContract={setContract} />
        <HStack justify="center" gap="2em">
          <Button w="50% "onClick={handleSave}>Save</Button>
          <Button w="50%" onClick={handleAbort}>Cancel</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default EditContractComponent;
