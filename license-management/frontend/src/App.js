// frontend/src/App.js
import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginScreen from './routes/LoginScreen';
import CustomerScreen from './routes/CustomerScreen';
import ContractScreen from './routes/ContractScreen';
import InstanceScreen from './routes/InstanceScreen';
import UserScreen from './routes/UserScreen';
import EditCustomerComponent from './components/Customers/EditCustomerComponent';
import AddCustomerComponent from './components/Customers/AddCustomerComponent';
import DeleteCustomerComponent from './components/Customers/DeleteCustomerComponent';

function App() {
  // Router for Website Routes
  const router = createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <Navigate to="/login" replace={true} />,
        },
        { path: '/login', element: <LoginScreen /> },
        { path: '/customers', element: <CustomerScreen /> },
        { path: '/customers/edit/:customerId', element: <EditCustomerComponent /> },
        { path: '/customers/add', element: <AddCustomerComponent /> },
        { path: '/customers/delete/:customerId', element: <DeleteCustomerComponent /> },
        { path: '/contracts', element: <ContractScreen /> },
        { path: '/instances', element: <InstanceScreen /> },
        { path: '/users', element: <UserScreen /> },
      ],
    },
  ]);
  return (
    <ChakraProvider >
       <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;