// frontend/src/components/Contracts/EditContractComponent.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ContractForm from './ContractForm';
import ContractService from '../../services/ContractService';

const AddContractComponent = () => {
  const [contract, setContract] = useState({ contract: {} });
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the ContractContractId in your component logic
  //console.log('Contract contractId:', contractId);


  const handleSave = async () => {
    try {
      await ContractService.createContract(contract);
      navigate('/contracts');
    } catch (error) {
      console.error('Error adding contract:', error);
    }
  };

  const handleAbort = () => {
    navigate('/contracts');
  }

  const handleChange = (e) => {
    const handleChange = (e) => {
      //console.log(e);
      setContract((contract) => (
        {
          ...contract,
          [e.target.name]: e.target.value,
        }));
    };
  }

  return (
    <Box>
      <VStack>
        <HStack alignContent="left" alignItems="left" justifyContent="left" >
          <FormControl>
            <FormLabel>Customer</FormLabel>
            <Select
              name="customer"
              value={contract.customer || ''}
              onChange={handleChange}
              p="0"
            >
              <option value={contract.customer || ''}>{contract.customer}</option>
              <option value="option2" >Option 2</option>
              <option value="option3" >Option 3</option>
            </Select>
          </FormControl>
          <FormControl isDisabled="true" visibility="hidden">
            <Input
              type="text"
              name=""
              placeholder=""
              value={''}
            />
          </FormControl>
        </HStack>
        <ContractForm contract={contract} setContract={setContract} />
        <HStack justify="center">
          <Button onClick={handleSave}>Create Contract</Button>
          <Button onClick={handleAbort}>Abort</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddContractComponent;
