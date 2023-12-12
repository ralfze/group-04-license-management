// frontend/src/services/ContractService.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const ContractService = {
    getAllContracts: async() => {
        return await axios.get(`${baseURL}/api/contracts`);
    },

    getContractById: async(id) => {
        return await axios.get(`${baseURL}/api/contracts/${id}`);
    },

    createContract: async(contract) => {
        return await axios.post(`${baseURL}/api/contracts`, contract);
    },

    updateContract: async(id, contract) =>  {
        return await axios.put(`${baseURL}/api/contracts/${id}`, contract);
    },

    deleteContract: async(id) => {
        return await axios.delete(`${baseURL}/api/contracts/${id}`);
    },
};

export default ContractService;