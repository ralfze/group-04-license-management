// frontend/src/components/Instances/EditInstanceComponent.js
import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, VStack, Heading } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import InstanceForm from './InstanceForm';
import InstanceService from '../../services/InstanceService';
import ContractService from '../../services/ContractService';

const DeleteInstanceComponent = () => {
    const { instanceId } = useParams();
    const [instance, setInstance] = useState({});
    const [contracts, setContracts] = useState([]);
    
    const navigate = useNavigate(); // Get the navigate function from the hook
    // Now, you can use the InstanceInstanceId in your component logic
    //console.log('Instance InstanceId:', InstanceId);

    useEffect(() => {
        const loadInstance = async () => {
            try {
                const response = await InstanceService.getInstanceById(instanceId);
                setInstance(response.data);
                //console.log(response.data);
            } catch (error) {
                console.error('Error loading Instance:', error);
            }
        };
        loadInstance();
        loadContracts();
    }, [instanceId, navigate]);



    const loadContracts = async () => {
        try {
            const response = await ContractService.getAllContracts();
            setContracts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error loading Contracts:', error);
        }
    };

    const handleDelete = async () => {
        try {
            // Id of the Instance object 
            await InstanceService.deleteInstance(instanceId);
            navigate('/instances');
        } catch (error) {
            console.error('Error updating Instance:', error);
        }
    };

    const handleAbort = () => {
        navigate('/instances');
    }

    return (
        <Box>
            <VStack>
                <Heading>Delete Instance</Heading>
                <InstanceForm instance={instance} setInstance={setInstance} contracts={contracts} readOnly={true} />

                <HStack gap="2em">
                    <Button w="50%" onClick={handleDelete}>Delete</Button>
                    <Button w="50%" onClick={handleAbort}>Cancel</Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default DeleteInstanceComponent;
