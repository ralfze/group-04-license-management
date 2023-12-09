// frontend/src/services/CustomerService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/customers';

const CustomerService = {
  getAllCustomers: async () => {
    return await axios.get(API_BASE_URL);
  },

  getCustomerById: async (customerId) => {
    return await axios.get(`${API_BASE_URL}/${customerId}`);
  },

  createCustomer: async (customer) => {
    return await axios.post(API_BASE_URL, customer);
  },

  updateCustomer: async (customerId, customer) => {
    return await axios.put(`${API_BASE_URL}/${customerId}`, customer);
  },

  deleteCustomer: async (customerId) => {
    return await axios.delete(`${API_BASE_URL}/${customerId}`);
  },

  searchCustomersByName: async (regex) => {
    return await axios.get(`${API_BASE_URL}/search?regex=${regex}`);
  },
};

export default CustomerService;
