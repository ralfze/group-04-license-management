// frontend/src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginScreen from './routes/LoginScreen';
import CustomerScreen from './routes/CustomerScreen';
import ContractScreen from './routes/ContractScreen';
import InstanceScreen from './routes/InstanceScreen';
import UserScreen from './routes/UserScreen';
import EditCustomerComponent from './components/Customers/EditCustomerComponent';
import AddCustomerComponent from './components/Customers/AddCustomerComponent';
import DeleteCustomerComponent from './components/Customers/DeleteCustomerComponent';
import EditContractComponent from './components/Contracts/EditContractComponent';
import DeleteContractComponent from './components/Contracts/DeleteContractComponent';
import AddContractComponent from './components/Contracts/AddContractForm';
import EditUserComponent from './components/Users/EditUserComponent';
import DeleteUserComponent from './components/Users/DeleteUserComponent';
import AddUserComponent from './components/Users/AddUserComponent';
import AddInstanceComponent from './components/Instances/AddInstanceComponent';
import EditInstanceComponent from './components/Instances/EditInstanceComponent';
import DeleteInstanceComponent from './components/Instances/DeleteInstanceComponent';
import DetailsInstanceComponent from './components/Instances/DetailsInstanceComponent';

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
        { path: '/contracts', element: <ContractScreen /> },
        { path: '/contracts/add', element: <AddContractComponent /> },
        { path: '/contracts/edit/:contractId', element: <EditContractComponent /> },
        { path: '/contracts/delete/:contractId', element: <DeleteContractComponent /> },
        { path: '/customers', element: <CustomerScreen /> },
        { path: '/customers/edit/:customerId', element: <EditCustomerComponent /> },
        { path: '/customers/add', element: <AddCustomerComponent /> },
        { path: '/customers/delete/:customerId', element: <DeleteCustomerComponent /> },
        { path: '/instances', element: <InstanceScreen /> },
        { path: '/instances/edit/:instanceId', element: <EditInstanceComponent /> },
        { path: '/instances/add', element: <AddInstanceComponent /> },
        { path: '/instances/delete/:instanceId', element: <DeleteInstanceComponent /> },
        { path: '/instances/details/:instanceId', element: <DetailsInstanceComponent /> },
        { path: '/users', element: <UserScreen /> },
        { path: '/users/edit/:userId', element: <EditUserComponent /> },
        { path: '/users/delete/:userId', element: <DeleteUserComponent /> },
        { path: '/users/add', element: <AddUserComponent /> },
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