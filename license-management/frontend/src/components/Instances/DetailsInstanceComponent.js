// frontend/src/components/Instances/DetailsInstanceComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import InstanceForm from './InstanceForm';
import InstanceService from '../../services/InstanceService';
import ContractService from '../../services/ContractService';

const DetailsInstanceComponent = () => {
  const { instanceId } = useParams();
  const [instance, setInstance] = useState({});
  const [contracts, setContracts] = useState([]);

  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the InstanceInstanceId in your component logic
  //console.log('Instance InstanceId:', InstanceId);

  useEffect(() => {
    const loadInstance = async () => {
      try {
        const response = await InstanceService.getInstanceById(instanceId);
        setInstance(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error('Error loading Instance:', error);
      }
    };

    loadInstance();
    loadContracts();

  }, [instanceId, navigate]);

  const loadContracts = async () => {
    try {
      const response = await ContractService.getAllContracts();
      setContracts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error loading contracts:', error);
    }
  };

  const handleCancel = () => {
    navigate('/instances');
  }

  return (
    <Box>
      <VStack>
        <HStack>
          <Heading>Details Instance</Heading>
        </HStack>
        <InstanceForm instance={instance} setInstance={setInstance} contracts={contracts}  readOnly={true}/>
        <HStack gap="2em" w="20%">
          <Button w="100%" onClick={handleCancel}>Back</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DetailsInstanceComponent;
