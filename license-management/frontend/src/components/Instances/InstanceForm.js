import React from 'react';
import {
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react';

const InstanceForm = ({ instance, setInstance, contracts, instanceRequired, readOnly }) => {
  const handleChange = (e) => {
    //console.log(e);
    //console.log(`name: ${e.target.name} value: ${e.target.value}`);
    setInstance((instance) => (
      {
        ...instance,
        [e.target.name]: e.target.value,
      }));
    console.log(instance);
  };

  const handleContract = (e) => {
    //console.log(contractss.find((c) => String(c.contracts.id) === String(e.target.value)));
    //console.log(selectedcontracts)
    //console.log(e.target.value);
    if (!readOnly) {
      setInstance(

        (instance) => (
          {
            ...instance,
            contract: (contracts.find((c) => String(c.id) === String(e.target.value))),
          }
        ));
    }
    //console.log(instance);
  }

  const handleStatus = (e) => {
    //console.log(`name: ${e.target.name} value: ${e.target.value}`);
    console.log(e.target.value);
    setInstance((instance) => (
      {
        ...instance,
        status: e.target.value,
      }));
  }

  return (
    <VStack flexDirection="column" flex="1">

      (instance &&
      {/* contract */}
      <HStack w="100%">
        <FormControl isRequired={instanceRequired}>
          <FormLabel>Contract</FormLabel>
          {instance.contract && (
            <Select
              name="contract"
              value={instance.contract.id || ''}
              onChange={handleContract}
              p="0"
              isReadOnly={readOnly}
              width="100%"
            >
              {contracts &&
                contracts.map((c) => (
                  (
                    <option key={c.id} value={c.id}>
                      {c.id}
                    </option>
                  )
                ))
              }
            </Select>
          )}
        </FormControl>

        <FormControl isDisabled="true" visibility="hidden">
          <FormLabel>HiddenBox</FormLabel>
          <Input
            type="text"
            name=""
            placeholder=""
            value={''}
            readOnly={readOnly}
          />
        </FormControl>
      </HStack>
      {/* name & lastName*/}
      <HStack w="100%">
        <FormControl>
          <FormLabel>Instance name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Empty Instance name"
            value={instance.name || ''}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </FormControl>
        <FormControl isDisabled="true" visibility="hidden">
          <Input
            type="text"
            name=""
            placeholder=""
            value={''}
            readOnly={readOnly}
          />
        </FormControl>
      </HStack>
      {/* ipAddress & Type */}
      <HStack w="100%">
        <FormControl>
          <FormLabel>Ip address</FormLabel>
          <Input
            type="text"
            name="ipAddress"
            placeholder="i.e. 192.168.x.x"
            value={instance.ipAddress || ''}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Type</FormLabel>
          <Input
            type="text"
            name="type"
            placeholder="Empty type"
            value={instance.type || ''}
            onChange={handleChange}
            readOnly={readOnly}
          />
        </FormControl>

      </HStack>
      {/* status */}
      <HStack w="100%">
        <FormControl>
          <FormLabel>Status</FormLabel>
          <Select
            name="contracts"
            onChange={handleStatus}
            p="0"
            isReadOnly={readOnly}
          >
            <option key={`${instance.id}opt1`} value={instance.status === 1 ? 1 : 0}>
              {instance.status === 1 ? "running" : "stopped"}
            </option>
            <option key={`${instance.id}opt2`} value={instance.status === 1 ? 0 : 1}>
              {instance.status === 1 ? "stopped" : "running"}
            </option>
          </Select>
        </FormControl>

        <FormControl isDisabled="true" visibility="hidden">
          <FormLabel>HiddenBox</FormLabel>
          <Input
            type="text"
            name=""
            placeholder=""
            value={''}
            readOnly={readOnly}
          />
        </FormControl>
      </HStack>
      )
    </VStack >
  );
};

export default InstanceForm;
