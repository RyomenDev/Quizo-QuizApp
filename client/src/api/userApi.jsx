import conf from "../conf/conf.js";
import axios from "axios";

// Set up base URL for the API
const API_BASE_URL = conf.server_url;

export const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Failed to fetch profile";
  }
};
