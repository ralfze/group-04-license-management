import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Link, useHistory, useParams } from 'react-router-dom';
import ContractService from './ContractService'; // Update the import path

const EditContractScreen = () => {
  const { id } = useParams();
  const history = useHistory();
  const [contract, setContract] = useState({});

  const fetchContractById = async () => {
    try {
      const response = await ContractService.getContractById(id);
      setContract(response.data);
    } catch (error) {
      console.error('Error fetching contract:', error);
    }
  };

  useEffect(() => {
    fetchContractById();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await ContractService.updateContract(id, contract);
      history.push('/contracts'); // Redirect to the contract list after updating
    } catch (error) {
      console.error('Error updating contract:', error);
    }
  };

  return (
    <Box>
      <Flex as="div" p="1em" alignItems="center" direction="row">
        <Heading as="h1">Edit Contract</Heading>
        <Spacer />
      </Flex>

      <Flex as="div" p="1em" direction="column">
        <Input
          placeholder="Contract Start"
          value={contract.startDate || ''}
          onChange={(e) => setContract({ ...contract, startDate: e.target.value })}
        />
        <Input
          placeholder="Contract End"
          value={contract.endDate || ''}
          onChange={(e) => setContract({ ...contract, endDate: e.target.value })}
        />
        <Input
          placeholder="Version"
          value={contract.version || ''}
          onChange={(e) => setContract({ ...contract, version: e.target.value })}
        />
        <Button onClick={handleUpdate}>Update Contract</Button>
        <Button as={Link} to="/contracts">Cancel</Button>
      </Flex>
    </Box>
  );
};

export default EditContractScreen;
