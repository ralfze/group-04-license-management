import React from 'react';
import { VStack, Input, FormControl, FormLabel } from '@chakra-ui/react';

const ContractForm = ({ contract, setContract }) => {
  const handleChange = (e) => {
    setContract({
      ...contract,
      contract: {
        ...contract.contract,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <VStack>
      {contract.contract && (
        <>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Contract Name"
              value={contract.contract.name || ''}
              onChange={handleChange}
            />
          </FormControl>

          
        </>
      )}
    </VStack>
  );
};

export default ContractForm;
