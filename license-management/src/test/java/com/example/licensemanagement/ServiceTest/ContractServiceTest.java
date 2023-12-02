package com.example.licensemanagement.ServiceTest;

import com.example.licensemanagement.Entity.Contract;
import com.example.licensemanagement.Repo.ContractRepository;
import com.example.licensemanagement.Service.ContractService;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ContractServiceTest {

    @Mock
    private ContractRepository contractRepository;

    @InjectMocks
    private ContractService contractService;

    @Test
    void getAllContractsTest() {
        // Mock data
        Contract contract = new Contract();
        List<Contract> contracts = Arrays.asList(contract);

        // Mock repository behavior
        when(contractRepository.findAll()).thenReturn(contracts);

        // Call the service method
        List<Contract> result = contractService.getAllContracts();

        // Verify the result
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(contract, result.get(0));

        // Verify repository interactions
        verify(contractRepository, times(1)).findAll();
    }

    @Test
    void getContractByIdTest() {
        // Mock data
        Long contractId = 1L;
        Contract contract = new Contract();
        Optional<Contract> optionalContract = Optional.of(contract);

        // Mock repository behavior
        when(contractRepository.findById(contractId)).thenReturn(optionalContract);

        // Call the service method
        Optional<Contract> result = contractService.getContractById(contractId);

        // Verify the result
        assertTrue(result.isPresent());
        assertEquals(contract, result.get());

        // Verify repository interactions
        verify(contractRepository, times(1)).findById(contractId);
    }

    @Test
    void createContractTest() {
        // Mock data
        Contract contract = new Contract();

        // Mock repository behavior
        when(contractRepository.save(contract)).thenReturn(contract);

        // Call the service method
        Contract result = contractService.createContract(contract);

        // Verify the result
        assertNotNull(result);
        assertEquals(contract, result);

        // Verify repository interactions
        verify(contractRepository, times(1)).save(contract);
    }

    // Add similar tests for other methods in ContractService
}
