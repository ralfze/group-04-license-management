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
  Select
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ContractForm from './ContractForm';
import ContractService from '../../services/ContractService';
import CustomerService from '../../services/CustomerService';

const AddContractComponent = () => {
  const [contract, setContract] = useState({ customer: {} });
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
      console.log(response.data);
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
    const selectedCustomer = customers.find((c) => String(c.customer.id) === String(selectedCustomerId)) || {};
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
        <HStack alignContent="left" alignItems="left" justifyContent="left" >
          <FormControl>
            <FormLabel>Customer</FormLabel>
            <Select
              name="customer"
              value={ selectOption||''}
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
            <Input
              type="text"
              name=""
              placeholder=""
              value={''}
            />
          </FormControl>
        </HStack>
        <ContractForm contract={contract} setContract={setContract} readOnly={false}/>
        <HStack justify="center">
          <Button onClick={handleSave}>Create Contract</Button>
          <Button onClick={handleAbort}>Abort</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddContractComponent;
