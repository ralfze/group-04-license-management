// frontend/src/components/Instances/EditInstanceComponent.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import InstanceForm from './InstanceForm';
import InstanceService from '../../services/InstanceService';
import Contractervice from '../../services/ContractService';

const AddInstanceComponent = () => {
  const [instance, setInstance] = useState({ contract: {} });
  const [contracts, setContracts] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the InstanceInstanceId in your component logic
  //console.log('Instance InstanceId:', InstanceId);

  useEffect(() => {
    loadContract();
  }
    , [navigate]);


  const loadContract = async () => {
    try {
      const response = await Contractervice.getAllContracts();
      setContracts(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error loading Contracts:', error);
    }
  };

  const handleSave = async () => {
    try {
      await InstanceService.createInstance(instance);
      navigate('/instances');
    } catch (error) {
      console.error('Error adding Instance:', error);
    }
  };

  const handleAbort = () => {
    navigate('/instances');
  };

  return (
    <Box>
      <VStack>
        <HStack>
          <Heading>Add new Instance</Heading>
        </HStack>
        <InstanceForm instance={instance} setInstance={setInstance} contracts={contracts} readOnly={false} />
        <HStack gap="2em">
          <Button w="50%" onClick={handleSave}>Create Instance</Button>
          <Button w="50%" onClick={handleAbort}>Cancel</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddInstanceComponent;
