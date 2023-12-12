import React from 'react';
import { VStack, HStack, Input, FormControl, FormLabel, Textarea } from '@chakra-ui/react';

const ContractForm = ({ contract, setContract }) => {
  const handleChange = (e) => {
    setContract((contract) => ({
      ...contract,
      [e.target.name]: e.target.value,
      user1: {
        ...(contract.user1 || {}), // Initialize if undefined
        [e.target.name]: e.target.value,
      },
      user2: {
        ...(contract.user2 || {}), // Initialize if undefined
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <VStack>
      {contract && (
        <>
          {/* Start and End Date */}
          <HStack>
            <FormControl>
              <FormLabel>Start</FormLabel>
              <Input
                type="text"
                name="startDate"
                placeholder="Startdate"
                value={contract.startDate || ''}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>End</FormLabel>
              <Input
                type="text"
                name="endDate"
                placeholder="Enddate"
                value={contract.endDate || ''}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          {/* Version*/}
          <HStack alignContent="left" alignItems="left" justifyContent="left" >
            <FormControl>
              <FormLabel>Version</FormLabel>
              <Input
                type="text"
                name="version"
                placeholder="Version"
                value={contract.version || ''}
                onChange={handleChange}
              />
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
          {/* Responsible Users */}
          <HStack>
            <FormControl>
              <FormLabel>Responsible 01</FormLabel>
              <Input
                type="text"
                name="user1"
                placeholder="User1"
                value={contract.user1 || ''}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Responsible 02</FormLabel>
              <Input
                type="text"
                name="user2"
                placeholder="User2"
                value={contract.user2 || ''}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          {/* ipAddress1 */}
          <HStack>
            <FormControl>
              <FormLabel>Ip number</FormLabel>
              <Input
                type="text"
                name="ipAdress1"
                placeholder="192.168.x.x"
                value={contract.ipAddress1 || ''}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>feature A</FormLabel>
              <Input
                type="text"
                name="featureA"
                placeholder="feature A"
                value={contract.featureA || ''}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          {/* ipAddress2 */}
          <HStack>
            <FormControl>
              <FormLabel>Ip number</FormLabel>
              <Input
                type="text"
                name="ipAdress2"
                placeholder="192.168.x.x"
                value={contract.ipAddress2 || ''}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>feature B</FormLabel>
              <Input
                type="text"
                name="featureB"
                placeholder="feature B"
                value={contract.featureB || ''}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          {/* ipAddress3 */}
          <HStack>
            <FormControl>
              <FormLabel>Ip number</FormLabel>
              <Input
                type="text"
                name="ipAdress3"
                placeholder="192.168.x.x"
                value={contract.ipAddress3 || ''}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>feature A</FormLabel>
              <Input
                type="text"
                name="featureC"
                placeholder="feature C"
                value={contract.featureC || ''}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>
          {/* License Text Area*/}
          <HStack>
            <Textarea
              value={contract.license}
              onChange={handleChange}
              placeholder='Here will be the license key.'
              size='sm'
              resize="vertical"
            />
          </HStack>
        </>
      )
      }
    </VStack >
  );
};

export default ContractForm;
