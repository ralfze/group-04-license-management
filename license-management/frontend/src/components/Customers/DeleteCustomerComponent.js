// frontend/src/components/Customers/EditCustomerComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerService from '../../services/CustomerService';

const DeleteCustomerComponent = () => {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate(); // Get the navigate function from the hook
    // Now, you can use the customercustomerId in your component logic
    //console.log('Customer customerId:', customerId);

    useEffect(() => {
        const loadCustomer = async () => {
            try {
                const response = await CustomerService.getCustomerById(customerId);
                setCustomer(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error loading customer:', error);
            }
        };

        loadCustomer();

    }, [customerId, navigate]);

    const handleDelete = async () => {
        try {
            // Id of the customer object 
            await CustomerService.deleteCustomer(customerId);
            navigate('/customers');
        } catch (error) {
            console.error('Error updating customer:', error);
        }
    };

    const handleAbort = () => {
        navigate('/customers');
    }

    return (
            <Box>
                <VStack>
                    <Heading>Do you want to delete the Customer?</Heading>
                    {customer.customer && (
                        <>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Customer Name"
                                    value={customer.customer.name || ''}
                                    isDisabled={true}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Street</FormLabel>
                                <Input
                                    type="text"
                                    name="street"
                                    placeholder="Street"
                                    value={customer.customer.street || ''}
                                    isDisabled={true}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Zipcode</FormLabel>
                                <Input
                                    type="text"
                                    name="zipCode"
                                    placeholder="ZipCode"
                                    value={customer.customer.zipCode || ''}
                                    isDisabled={true}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Town</FormLabel>
                                <Input
                                    type="text"
                                    name="town"
                                    placeholder="Town"
                                    value={customer.customer.town || ''}
                                    isDisabled={true}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Country</FormLabel>
                                <Input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    value={customer.customer.country || ''}
                                    isDisabled={true}
                                />
                            </FormControl>
                        </>
                    )}
                </VStack>
                <HStack>
                    <Button onClick={handleDelete}>Delete</Button>
                    <Button onClick={handleAbort}>Cancel</Button>
                </HStack>
            </Box>
    );
};

export default DeleteCustomerComponent;
