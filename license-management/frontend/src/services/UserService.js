// UserService.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const userService = {
  getAllUsers: async () => {
    return await axios.get(`${baseURL}/api/users`);
  },

  getUserById: async (id) => {
    return await axios.get(`${baseURL}/api/users/${id}`);
  },

  createUser: async (user) => {
    return await axios.post(`${baseURL}/api/users`, user);
  },

  updateUser: async (id, user) => {
    return await axios.put(`${baseURL}/api/users/${id}`, user);
  },

  deleteUser: async (id) => {
    return await axios.delete(`${baseURL}/api/users/${id}`);
  },
};

export default userService;
