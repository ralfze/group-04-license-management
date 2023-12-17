// frontend/src/components/Customers/EditCustomerComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import ContractService from '../../services/ContractService';
import ContractForm from './ContractForm';

const DetailsContractComponent = () => {
    const { contractId } = useParams();
    const [contract, setContract] = useState({});
    const navigate = useNavigate(); // Get the navigate function from the hook
    // Now, you can use the customercustomerId in your component logic
    //console.log('Customer contractId:', contractId);

    useEffect(() => {
        const loadCustomer = async () => {
            try {
                const response = await ContractService.getContractById(contractId);
                setContract(response.data);
                //console.log(response.data);
            } catch (error) {
                console.error('Error loading contract:', error);
            }
        };

        loadCustomer();

    }, [contractId, navigate]);

    const handleAbort = () => {
        navigate('/contracts');
    }

    return (
        <Box>
            <VStack>
                <HStack>
                    <Heading>Details Contract</Heading>
                </HStack>
                <ContractForm contract={contract} setContract={setContract} readOnly={true} />

                <HStack gap="2em" w="20%">
                    <Button w="100%" onClick={handleAbort}>Back</Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default DetailsContractComponent;
