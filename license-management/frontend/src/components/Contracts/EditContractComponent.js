// frontend/src/components/Customers/EditContractComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import ContractForm from './ContractForm';
import CustomerService from '../../services/CustomerService';

const EditContractComponent = () => {
  const { contractId } = useParams();
  const [contract, setContract] = useState({});
  const navigate = useNavigate(); // Get the navigate function from the hook
  // Now, you can use the customercustomerId in your component logic
  //console.log('Customer contractId:', contractId);

  useEffect(() => {
    const loadContract = async () => {
      try {
        const response = await CustomerService.getCustomerById(contractId);
        setContract(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error('Error loading contract:', error);
      }
    };

    loadContract();

  }, [contractId, navigate]);

  const handleSave = async () => {
    try {
      await CustomerService.updateCustomer(contractId, contract);
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
        <ContractForm contract={contract} setContract={setContract} />
        <HStack>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleAbort}>Abort</Button>
        </HStack>
      </Box>
  );
};

export default EditContractComponent;
