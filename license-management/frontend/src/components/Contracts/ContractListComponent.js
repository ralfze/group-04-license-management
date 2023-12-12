// frontend/src/components/Contracts/contractListComponent.js
import React, { useState, useEffect } from 'react';
import { Button, HStack, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link and useNavigate
import ContractService from '../../services/ContractService';

const ContractListComponent = ({ navigate }) => {
  const [contracts, setContracts] = useState([]);

  //const navigate = useNavigate(); // Get the navigate function from the hook

  useEffect(() => {
    loadContracts();
  }
    , [navigate]);

  const loadContracts = async () => {
    try {
      const response = await ContractService.getAllContracts();
      setContracts(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error loading contracts:', error);
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
      {contracts.map((contract) => (
        <HStack flex="1" key={contract.id}>
          <Heading as="h2" size="md" flex="2" key={`custName-${contract.id}`}>
            {contract.customer.name}
          </Heading>
          <Heading as="h2" size="md" flex="2" key={`startDate-${contract.id}`}>
            {contract.startDate}
          </Heading>

          <Heading as="h2" size="md" flex="2" key={`endDate-${contract.id}`}>
            {contract.endDate}
          </Heading>

          <Heading as="h2" size="md" flex="2" key={`version-${contract.id}`}>
            {contract.version}
          </Heading>

          <Button as={Link} to={`edit/${contract.id}`} variant="solid" size="md" flex="1" key={`edit-${contract.id}`}>
            Edit
          </Button>

          <Button as={Link} to={`delete/${contract.id}`} variant="solid" size="md" flex="1" key={`delete-${contract.id}`}>
            Delete
          </Button>

          <Button as={Link} to={`${contract.id}`} variant="solid" size="md" flex="1" key={`details-${contract.id}`}>
            Details
          </Button>
        </HStack>
      ))}



    </Flex>

  );
};

export default ContractListComponent;