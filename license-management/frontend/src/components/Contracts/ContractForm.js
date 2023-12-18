import React from 'react';
import {
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Select,
} from '@chakra-ui/react';

const ContractForm = ({ contract, setContract, users, readOnly }) => {
  const handleChange = (e) => {
    //console.log(e);
    setContract((contract) => (
      {
        ...contract,
        [e.target.name]: e.target.value,
      }));
  };

  const handleUser1 = (e) => {
    if (e.target.value === "no_user") {
      // set null if no_user is selected
      setContract((contract) => (
        {
          ...contract,
          user1: null,
        }));
    } else {
      // set selected user by id
      const selectedUserId = e.target.value;
      console.log(users.find((user) => String(user.id) === String(selectedUserId)));
      setContract((contract) => (
        {
          ...contract,
          user1: users.find((user) => String(user.id) === String(selectedUserId)),
        }));
    }
    //console.log(contract);
  }


  const handleUser2 = (e) => {
    if (e.target.value === "no_user") {
      // set null if no_user is selected
      setContract((contract) => (
        {
          ...contract,
          user2: null,
        }));
    } else {
      // set selected user by id
      const selectedUserId = e.target.value;
      console.log(users.find((user) => String(user.id) === String(selectedUserId)));
      setContract((contract) => (
        {
          ...contract,
          user2: users.find((user) => String(user.id) === String(selectedUserId)),
        }));
    }
    //console.log(contract);
  }

  return (
    <VStack>
      {contract && (
        <>
          {/* Start and End Date */}
          <HStack w="100%">
            <FormControl>
              <FormLabel>Start</FormLabel>
              <Input
                type="date"
                name="startDate"
                placeholder="JJJJ-MM-DD"
                value={contract.startDate || ''}
                onChange={handleChange}
                readOnly={readOnly}
              />
            </FormControl>

            <FormControl>
              <FormLabel>End</FormLabel>
              <Input
                type="date"
                name="endDate"
                placeholder="JJJJ-MM-DD"
                value={contract.endDate || ''}
                onChange={handleChange}
                readOnly={readOnly}
              />
            </FormControl>
          </HStack>
          {/* Version*/}
          <HStack w="100%">
            <FormControl>
              <FormLabel>Version</FormLabel>
              <Input
                type="text"
                name="version"
                placeholder="Version"
                value={contract.version || ''}
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
          {/* Responsible Users */}
          <HStack w="100%">

            <FormControl>
              <FormLabel>Responsible 01</FormLabel>
              {contract.user1 ? (
                <Select
                  name="user1"
                  onChange={handleUser1}
                  p="0"
                  readOnly={readOnly}
                  value={contract.user1.id || ''}
                >
                  <option key={"nullkeyone"} value={"no_user"}>No user selected</option>
                  {users && users.map((user) => (
                    <option key={`${user.id}key`} value={user.id || ''}>{user.firstName}</option>
                  ))
                  }


                </Select>
              ) : (
                <Select
                  name="user1"
                  onChange={handleUser1}
                  p="0"
                  readOnly={readOnly}

                >
                  <option key={"nullkeyone"} value={"no_user"}>No user selected</option>
                  {users && users.map((user) => (
                    <option key={`${user.id}key`} value={user.id || ''}>{user.firstName}</option>
                  ))
                  }
                </Select>
              )
              }
            </FormControl>

            <FormControl>
              <FormLabel>Responsible 02</FormLabel>
              {contract.user2 ? (
                <Select
                  name="user2"
                  onChange={handleUser2}
                  p="0"
                  readOnly={readOnly}
                  value={contract.user2.id || ''}
                >
                  <option key={"nullkeytwo"} value={"no_user"}>No user selected</option>
                  {users && users.map((user) => (
                    <option key={`${user.id}key`} value={user.id || ''}>{user.firstName}</option>
                  ))
                  }
                </Select>
              ) : (
                <Select
                  name="user2"
                  onChange={handleUser2}
                  p="0"
                  readOnly={readOnly}

                >
                  <option key={"nullkeytwo"} value={"no_user"}>No user selected</option>
                  {users && users.map((user) => (
                    <option key={`${user.id}key`} value={user.id || ''}>{user.firstName}</option>
                  ))
                  }
                </Select>

              )
              }
            </FormControl>

          </HStack>
          {/* ipAddress1 */}
          <HStack w="100%">
            <FormControl>
              <FormLabel>Ip number</FormLabel>
              <Input
                type="text"
                name="ipAddress1"
                placeholder="192.168.x.x"
                value={contract.ipAddress1 || ''}
                onChange={handleChange}
                readOnly={readOnly}
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
                readOnly={readOnly}
              />
            </FormControl>
          </HStack>

          {/* ipAddress2 */}
          <HStack w="100%">
            <FormControl>
              <FormLabel>Ip number</FormLabel>
              <Input
                type="text"
                name="ipAddress2"
                placeholder="192.168.x.x"
                value={contract.ipAddress2 || ''}
                onChange={handleChange}
                readOnly={readOnly}
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
                readOnly={readOnly}
              />
            </FormControl>
          </HStack>

          {/* ipAddress3 */}
          <HStack w="100%">
            <FormControl>
              <FormLabel>Ip number</FormLabel>
              <Input
                type="text"
                name="ipAddress3"
                placeholder="192.168.x.x"
                value={contract.ipAddress3 || ''}
                onChange={handleChange}
                readOnly={readOnly}
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
                readOnly={readOnly}
              />
            </FormControl>
          </HStack>
          {/* License Text Area*/}
          <HStack w="100%">
            <Textarea
              value={contract.licenseKey || ''}
              name="licenseKey"
              onChange={handleChange}
              placeholder='Here will be the license key.'
              size='sm'
              resize="vertical"
              readOnly={readOnly}
            />
          </HStack>
        </>
      )
      }
    </VStack >
  );
};

export default ContractForm;
