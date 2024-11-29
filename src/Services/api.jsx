import axios from 'axios';

const API_BASE_URL = 'http://localhost:9191/api/v1'; // Update with your actual backend URL


// Function to get New products
async function getProductsNew() {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/all`);
   // console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to get Men products
async function getProductsMen() {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/Men`);
     // console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error.response ? error.response.data : error.message);
      throw error;
    }
  }




export { getProductsNew,getProductsMen };
