import axios from "axios";

const API_BASE_URL = "http://localhost:9191/api/v1/products/category";

export const getAllWomenProducts = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/2`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch women products", error);
  }
};

export const getAllMenProducts = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/1`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch men products", error);
    }
  };
  
  export const getAllKidsProducts = async () => {
    try {
      const response = await axios.get(
       `${API_BASE_URL}/products/3`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch kids products", error);
    }
  };

  export const getAllShoes = async () => {
    try {
      const response = await axios.get(
       `${API_BASE_URL}/4`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch shoes", error);
    }
  };