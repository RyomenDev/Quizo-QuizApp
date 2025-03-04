import conf from "../conf/conf.js";
import axios from "axios";

// Set up base URL for the API
const API_BASE_URL = `${conf.server_url}/auth`;

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    // console.log({ response });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};

export const registerUser = async (name, email, password) => {
  console.log({ name, email, password });
  //   try {
  //     const response = await axios.post(`${API_BASE_URL}/register`, {
  //       name,
  //       email,
  //       password,
  //     });
  //     console.log({ response });

  //     // return response.data;
  //   } catch (error) {
  //     let data = error.response.data;
  //     console.log({ data });
  //     throw error.response.data.message || "Registration failed";
  //   }
};
