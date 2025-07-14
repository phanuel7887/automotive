import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products');
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product');
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating order');
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error('Error logging in');
    }
};

export const fetchUserOrders = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/orders/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user orders');
    }
};

export const fetchChatHistory = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/chat/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching chat history');
    }
};