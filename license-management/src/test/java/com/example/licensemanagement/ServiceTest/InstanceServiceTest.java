package com.example.licensemanagement.ServiceTest;

import com.example.licensemanagement.Entity.Instance;
import com.example.licensemanagement.Repo.InstanceRepository;
import com.example.licensemanagement.Service.InstanceService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

class InstanceServiceTest {

    @Mock
    private InstanceRepository instanceRepository;

    @InjectMocks
    private InstanceService instanceService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllInstancesTest() {
        // Mock data
        Instance instance = new Instance();
        List<Instance> instances = Arrays.asList(instance);

        // Mock repository behavior
        when(instanceRepository.findAll()).thenReturn(instances);

        // Call the service method
        List<Instance> result = instanceService.getAllInstances();

        // Verify the result
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(instance, result.get(0));

        // Verify repository interactions
        verify(instanceRepository, times(1)).findAll();
    }

    // Add similar tests for other methods in InstanceService
}
