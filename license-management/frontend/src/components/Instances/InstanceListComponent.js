// frontend/src/components/Instances/InstanceListComponent.js
import React, { useState, useEffect } from 'react';
import { Button, HStack, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link and useNavigate
import InstanceService from '../../services/InstanceService';

const InstanceListComponent = ({ navigate }) => {
  const [instances, setInstances] = useState([]);

  //const navigate = useNavigate(); // Get the navigate function from the hook

  useEffect(() => {
    loadInstances();
  }
    , [navigate]);

  const loadInstances = async () => {
    try {
      const response = await InstanceService.getAllInstances();
      setInstances(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error loading Instances:', error);
    }
  };

  return (
    <Flex
      as="div"
      direction="column"
      paddingTop="0em"
      paddingLeft="1em"
      gap="0.5em"
      flex="9"
    >
      {instances.length > 0 ? (
        instances.map((instance) => (
          <HStack flex="1" key={instance.id}>
            (instance.contract.customer &&
            <Heading as="h2" size="md" flex="2" key={`custName-${instance.id}`}>
              {instance.contract.customer.name}
            </Heading>
            )
            <Heading as="h2" size="md" flex="2" key={`instName-${instance.id}`}>
              {instance.name}
            </Heading>
            (instance.contract && (
            <Heading as="h2" size="md" flex="2" key={`startDate-${instance.id}`}>
              {instance.contract.startDate}
            </Heading>

            <Heading as="h2" size="md" flex="2" key={`endDate-${instance.id}`}>
              {instance.contract.endDate}
            </Heading>)
            )
            <Button as={Link} to={`edit/${instance.id}`} variant="solid" size="md" flex="1" key={`edit-${instance.id}`}>
              Edit
            </Button>

            <Button as={Link} to={`delete/${instance.id}`} variant="solid" size="md" flex="1" key={`delete-${instance.id}`}>
              Delete
            </Button>

            <Button as={Link} to={`details/${instance.id}`} variant="solid" size="md" flex="1" key={`details-${instance.id}`}>
              Details
            </Button>
          </HStack>
        ))) : (
        <p>No Instances available</p>
      )}

    </Flex>

  );
};

export default InstanceListComponent;