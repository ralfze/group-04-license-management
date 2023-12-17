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
  const [contract, setContract] = useState([]);
  const [selectOption, setSelectOption] = useState("");
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
      setContract(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error loading Contract:', error);
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

  const handleChange = (e) => {
    const selectedContractId = e.target.value;
    const selectedContract = contract.find((c) => String(c.contract.id) === String(selectedContractId)) || {};
    setInstance((prevInstance) => ({
      ...prevInstance,
      contract: selectedContract,
    }));

    // set the chosen contract
    setSelectOption(selectedContractId);
    console.log(instance);
  };




  return (
    <Box>
      <VStack>
        <HStack>
          <Heading>Add new Instance</Heading>
        </HStack>
        <InstanceForm instance={instance} setInstance={setInstance} readOnly={false} />
        <HStack justify="center">
          <Button onClick={handleSave}>Create Instance</Button>
          <Button onClick={handleAbort}>Abort</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddInstanceComponent;
