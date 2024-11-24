import axios from 'axios';

const API_URL = 'http://localhost:8080/api/kids';  

export const getAllKidsProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching kids products", error);
        throw error;
    }
};