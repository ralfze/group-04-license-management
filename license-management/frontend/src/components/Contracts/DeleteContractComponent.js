// frontend/src/components/Customers/EditCustomerComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import ContractService from '../../services/ContractService';

const DeleteContractComponent = () => {
    const { contractId } = useParams();
    const [contract, setContract] = useState({});
    const navigate = useNavigate(); // Get the navigate function from the hook
    // Now, you can use the customercustomerId in your component logic
    //console.log('Customer contractId:', contractId);

    useEffect(() => {
        const loadCustomer = async () => {
            try {
                const response = await ContractService.getCustomerById(contractId);
                setContract(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error loading contract:', error);
            }
        };

        loadCustomer();

    }, [contractId, navigate]);

    const handleDelete = async () => {
        try {
            // Id of the contract object 
            await ContractService.deleteCustomer(contractId);
            navigate('/contracts');
        } catch (error) {
            console.error('Error updating contract:', error);
        }
    };

    const handleAbort = () => {
        navigate('/customers');
    }

    return (
            <Box>
                <VStack>
                    <Heading>Do you want to delete the Customer?</Heading>
                    {contract.contract && (
                        <>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Customer Name"
                                    value={contract.contract.name || ''}
                                    isDisabled={true}
                                />
                            </FormControl>
                        </>
                    )}
                </VStack>
                <HStack>
                    <Button onClick={handleDelete}>Delete</Button>
                    <Button onClick={handleAbort}>Abort</Button>
                </HStack>
            </Box>
    );
};

export default DeleteContractComponent;
