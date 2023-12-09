import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginScreen from './routes/LoginScreen';
import CustomerScreen from './routes/CustomerScreen';
import ContractScreen from './routes/ContractScreen';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Navigate to="/login" replace={true} />,
      },
      { path: '/login', element: <LoginScreen /> },
      { path: '/customers', element: <CustomerScreen /> },
      { path: '/contracts', element: <ContractScreen /> },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
