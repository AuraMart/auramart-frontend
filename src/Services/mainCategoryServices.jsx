import axios from "axios";

const API_BASE_URL = "http://localhost:9191/api/v1";

export const getAllWomenProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:9191/api/v1/products/women"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch women products", error);
  }
};

export const getAllMenProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9191/api/v1/products/men"
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch men products", error);
    }
  };
  
  export const getAllKidsProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9191/api/v1/products/kids"
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch kids products", error);
    }
  };

  export const getAllShoes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9191/api/v1/products/shoes"
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch shoes", error);
    }
  };