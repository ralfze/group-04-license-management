// frontend/src/components/Contracts/EditContractComponent.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  HStack,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Select,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ContractForm from './ContractForm';
import ContractService from '../../services/ContractService';
import CustomerService from '../../services/CustomerService';

const AddContractComponent = () => {
  const [contract, setContract] = useState({ customer: {}, user1: null, user2: null });
  const [customers, setCustomers] = useState([]);
  const [selectOption, setSelectOption] = useState("");
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the ContractContractId in your component logic
  //console.log('Contract contractId:', contractId);

  useEffect(() => {
    loadCustomers();
  }
    , [navigate]);


  const loadCustomers = async () => {
    try {
      const response = await CustomerService.getAllCustomers();
      setCustomers(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error loading customers:', error);
    }
  };

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
  };

  const handleChange = (e) => {
    const selectedCustomerId = e.target.value;
    const selectedCustomer = customers.find((c) => String(c.customer.id) === String(selectedCustomerId)).customer || {};
    setContract((prevContract) => ({
      ...prevContract,
      customer: selectedCustomer,
    }));

    // set the chosen custoemr
    setSelectOption(selectedCustomerId);
    console.log(contract);
  };




  return (
    <Box>
      <VStack>
        <HStack>
          <Heading>Add new Contract</Heading>
        </HStack>
        <HStack w="50%">
          <FormControl>
            <FormLabel>Customer</FormLabel>
            <Select
              name="customer"
              value={selectOption || ''}
              onChange={handleChange}
              p="0"
            >
              {customers &&
                customers.map((c) => (
                  (
                    c.customer && (
                      <option key={c.customer.id} value={c.customer.id}>
                        {c.customer.name}
                      </option>)
                  )
                ))
              }
            </Select>
          </FormControl>
          <FormControl isDisabled="true" visibility="hidden">
            <FormLabel>HiddenBox</FormLabel>
            <Input
              type="text"
              name=""
              placeholder=""
              value={''}
            />
          </FormControl>
        </HStack>
        <ContractForm contract={contract} setContract={setContract} readOnly={false} />
        <HStack justify="center" gap="2em">
          <Button w="50%" onClick={handleSave}>Create Contract</Button>
          <Button w="50%" onClick={handleAbort}>Cancel</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddContractComponent;
