import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL + "/api";

// Temple API
export const templeAPI = {
  getAll: async () => {
    const response = await axios.get(`${API_BASE_URL}/temples`);
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/temples/${id}`);
    return response.data;
  }
};

// Spiritual Places API
export const spiritualPlacesAPI = {
  getAll: async () => {
    const response = await axios.get(`${API_BASE_URL}/spiritual-places`);
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/spiritual-places/${id}`);
    return response.data;
  }
};

// Planning Guides API
export const planningGuidesAPI = {
  getAll: async () => {
    const response = await axios.get(`${API_BASE_URL}/planning-guides`);
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/planning-guides/${id}`);
    return response.data;
  }
};

// Festivals API
export const festivalsAPI = {
  getAll: async () => {
    const response = await axios.get(`${API_BASE_URL}/festivals`);
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/festivals/${id}`);
    return response.data;
  }
};
