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

const UserForm = ({ user, setUser, readOnly }) => {
  const handleChange = (e) => {
    //console.log(e);
    //console.log(`name: ${e.target.name} value: ${e.target.value}`);
    setUser((user) => (
      {
        ...user,
        [e.target.name]: e.target.value,
        customer: {
          ...(user.customer || {}), // Initialize if undefined
          [e.target.name]: e.target.value,
        },
      }));
      console.log(user);
  };

  const handleAdmin = (e) =>{
    //console.log(`name: ${e.target.name} value: ${e.target.value}`);
    setUser((user) => (
      {
        ...user,
        admin: !user.admin,
      }));
  }

  return (
    <VStack>
      {user && (
        <>
          {/* Customer */}
          <HStack>
            <FormControl>
              <FormLabel>Customer</FormLabel>
              {user.customer &&
                <Input
                  type="text"
                  name="customer"
                  placeholder="Customer"
                  value={user.customer.name || ''}
                  onChange={handleChange}
                  readOnly={readOnly}

                />
              }
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
          {/* firstName & lastName*/}
          <HStack alignContent="left" alignItems="left" justifyContent="left" >
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
                value={user.firstName || ''}
                onChange={handleChange}
                readOnly={readOnly}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={user.lastName || ''}
                onChange={handleChange}
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
                value={user.email || ''}
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
                value={user.phoneNumber1 || ''}
                onChange={handleChange}
                readOnly={readOnly}
              />
            </FormControl>

          </HStack>
          {/* isAdmin & mobile */}
          <HStack>
            <FormControl>
              <FormLabel>is Administrator</FormLabel>
          <Checkbox isDisabled={readOnly} isChecked={user.admin} onChange={handleAdmin} name="admin" />
            </FormControl>

            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input
                type="text"
                name="phoneNumber2"
                placeholder="Mobile"
                value={user.phoneNumber2 || ''}
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

export default UserForm;
