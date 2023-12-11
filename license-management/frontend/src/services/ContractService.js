import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

class ContractService {
    getAllContracts() {
        return axios.get(`${baseURL}/api/contracts`);
    }

    getContractById(id) {
        return axios.get(`${baseURL}/api/contracts/${id}`);
    }

    createContract(contract) {
        return axios.post(`${baseURL}/api/contracts`, contract);
    }

    updateContract(id, contract) {
        return axios.put(`${baseURL}/api/contracts/${id}`, contract);
    }

    deleteContract(id) {
        return axios.delete(`${baseURL}/api/contracts/${id}`);
    }
}

export default new ContractService();