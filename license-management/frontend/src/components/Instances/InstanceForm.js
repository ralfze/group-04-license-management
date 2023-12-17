import React from 'react';
import {
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  Select
} from '@chakra-ui/react';

const InstanceForm = ({ instance, setInstances, contracts, instanceRequired, readOnly }) => {
  const handleChange = (e) => {
    //console.log(e);
    //console.log(`name: ${e.target.name} value: ${e.target.value}`);
    setInstances((instance) => (
      {
        ...instance,
        [e.target.name]: e.target.value,
      }));
    console.log(instance);
  };

  const handleContracts= (e) => {
    //console.log(contractss.find((c) => String(c.contracts.id) === String(e.target.value)));
    //console.log(selectedcontracts)
    //console.log(e.target.value);

    setInstances((instance) => (
      {
        ...instance,
        contracts: (contracts.find((c) => String(c.contracts.id) === String(e.target.value))).contracts,
      }
    ));
    //console.log(instance);
  }

  const handleAdmin = (e) => {
    //console.log(`name: ${e.target.name} value: ${e.target.value}`);
    setInstances((instance) => (
      {
        ...instance,
        admin: !instance.admin,
      }));
  }

  return (
    <VStack>
      {instance && (
        <>
          {/* contracts */}
          <HStack>
            <FormControl isRequired={instanceRequired}>
              <FormLabel>contracts</FormLabel>
              {instance.contracts && (
              <Select
                name="contracts"
                value={instance.contracts.id || ''}
                onChange={handleContracts}
                p="0"
                isDisabled={readOnly}   
              >
                {contracts &&
                  contracts.map((c) => (
                    (
                      c.contracts && (
                        <option key={c.contracts.id} value={c.contracts.id}>
                          {c.contracts.name}
                        </option>)
                    )
                  ))
                }
              </Select>
              )}
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
          {/* name & lastName*/}
          <HStack alignContent="left" alignItems="left" justifyContent="left" >
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Instance name"
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
          {/* email & phone */}
          <HStack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={instance.email || ''}
                onChange={handleChange}
                readOnly={readOnly}
              />

            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                name="phoneNumber1"
                placeholder="Phone"
                value={instance.phoneNumber1 || ''}
                onChange={handleChange}
                readOnly={readOnly}
              />
            </FormControl>

          </HStack>
          {/* isAdmin & mobile */}
          <HStack>
            <FormControl>
              <FormLabel>is Administrator</FormLabel>
              <Checkbox isDisabled={readOnly} isChecked={instance.admin} onChange={handleAdmin} name="admin" />
            </FormControl>

            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input
                type="text"
                name="phoneNumber2"
                placeholder="Mobile"
                value={instance.phoneNumber2 || ''}
                onChange={handleChange}
                readOnly={readOnly}
              />
            </FormControl>
          </HStack>
        </>
      )
      }
    </VStack >
  );
};

export default InstanceForm;
