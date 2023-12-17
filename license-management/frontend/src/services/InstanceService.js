import axios from 'axios';

//const baseURL = 'http://localhost:8080/api/instances'; // Update with your backend API URL
const baseURL = process.env.REACT_APP_API_BASE_URL;

const InstanceService = {
    getAllInstances: async () => {
        try {
            return await axios.get(`${baseURL}/api/instances`);
        } catch (error) {
            console.error('Error getting instances:', error);
            throw error;
        }
    },

    getInstanceById: async (id) => {
        try {
            return await axios.get(`${baseURL}/api/instances/${id}`);
        } catch (error) {
            console.error('Error getting instance by ID:', error);
            throw error;
        }
    },

    createInstance: async (instance) => {
        try {
            return await axios.post(`${baseURL}/api/instances`, instance);
        } catch (error) {
            console.error('Error creating instance:', error);
            throw error;
        }
    },

    updateInstance: async (id, instance) => {
        try {
            return await axios.put(`${baseURL}/api/instances/${id}`, instance);
        } catch (error) {
            console.error('Error updating instance:', error);
            throw error;
        }
    },

    deleteInstance: async (id) => {
        try {
            return await axios.delete(`${baseURL}/api/instances/${id}`);
        } catch (error) {
            console.error('Error deleting instance:', error);
            throw error;
        }
    },
}
export default InstanceService;
