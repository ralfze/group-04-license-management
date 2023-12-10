import React from 'react';
import { VStack, Input, FormControl, FormLabel } from '@chakra-ui/react';

const CustomerAddForm = ({ customer, setCustomer }) => {
    const handleChange = (e) => {
        setCustomer({
            ...customer,
            customer: {
                ...customer.customer,
                [e.target.name]: e.target.value,
            },
        });
    };

    return (
        <VStack>
            <>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Customer Name"
                        value={customer.customer.name || ''}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Street</FormLabel>
                    <Input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={customer.customer.street || ''}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Zipcode</FormLabel>
                    <Input
                        type="text"
                        name="zipCode"
                        placeholder="ZipCode"
                        value={customer.customer.zipCode || ''}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Town</FormLabel>
                    <Input
                        type="text"
                        name="town"
                        placeholder="Town"
                        value={customer.customer.town || ''}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Country</FormLabel>
                    <Input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={customer.customer.country || ''}
                        onChange={handleChange}
                    />
                </FormControl>
            </>

        </VStack>
    );
};

export default CustomerAddForm;
