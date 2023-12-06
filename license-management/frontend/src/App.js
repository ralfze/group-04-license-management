// frontend/src/App.js
import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCustomerComponent from './components/Customers/AddCustomerComponent';
import EditCustomerComponent from './components/Customers/EditCustomerComponent';
import CustomerListComponent from './components/Customers/CustomerListComponent';
import CustomerScreen from './CustomerScreen';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Router>
            <Routes>
              <Route path="/customers" element={<CustomerListComponent />} />
              <Route path="/customers/add" element={<AddCustomerComponent />} />
              <Route path="/customers/edit/:id" element={<EditCustomerComponent />} />
              <Route path="/" element={<CustomerScreen />} />            
            </Routes>
          </Router>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;