import axios from 'axios';

const BASE_URL = 'http://34.93.245.38';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch sales data
export const getSalesData = async () => {
  try {
    const response = await apiClient.get('/sale');
    console.log(response.data, "Sales data response");
    return response.data;
  } catch (error) {
    console.error('Error fetching sales data:', error);
    throw error;
  }
};

// Fetch order value data
export const getOrderValue = async () => {
  try {
    const response = await apiClient.get('/order-value');
    console.log(response.data, "Order value response");
    return response.data;
  } catch (error) {
    console.error('Error fetching order value data:', error);
    throw error;
  }
};

// Fetch revenue data
export const getRevenue = async () => {
  try {
    const response = await apiClient.get('/revenue');
    console.log(response.data, "Revenue response");
    return response.data;
  } catch (error) {
    console.error('Error fetching revenue data:', error);
    throw error;
  }
};
