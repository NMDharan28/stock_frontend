import axios from 'axios';

// Base URL for the backend
const BASE_URL = 'http://localhost:8080';

// Fetch all stocks
export const getStocks = async () => {
  const response = await axios.get(`${BASE_URL}/stocks`);
  return response.data;
};

// Add a stock
export const addStock = async (stock) => {
  const response = await axios.post(`${BASE_URL}/stocks`, stock);
  return response.data;
};

// Get stock by ID
export const getStockById = async (id) => {
  const response = await axios.get(`${BASE_URL}/stocks/${id}`);
  return response.data;
};

// Update a stock
export const updateStock = async (id, stock) => {
  const response = await axios.put(`${BASE_URL}/stocks/${id}`, stock);
  return response.data;
};

// Delete a stock
export const deleteStock = async (id) => {
  const response = await axios.delete(`${BASE_URL}/stocks/${id}`);
  return response.data;
};
