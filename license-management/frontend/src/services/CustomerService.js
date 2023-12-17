// frontend/src/services/CustomerService.js
import axios from 'axios';

//const baseURL = 'http://localhost:8081/api/customers';
const baseURL = process.env.REACT_APP_API_BASE_URL;

const CustomerService = {
  getAllCustomers: async () => {
    return await axios.get(`${baseURL}/api/customers`);
  },

  getCustomerById: async (customerId) => {
    return await axios.get(`${baseURL}/api/customers/${customerId}`);
  },

  createCustomer: async (customer) => {
    return await axios.post(`${baseURL}/api/customers`, customer);
  },

  updateCustomer: async (customerId, customer) => {
    return await axios.put(`${baseURL}/api/customers/${customerId}`, customer);
  },

  deleteCustomer: async (customerId) => {
    return await axios.delete(`${baseURL}/api/customers/${customerId}`);
  },

  searchCustomersByName: async (regex) => {
    return await axios.get(`${baseURL}/api/customers/search?regex=${regex}`);
  },
};

export default CustomerService;
