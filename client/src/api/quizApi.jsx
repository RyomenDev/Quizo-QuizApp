import conf from "../conf/conf.js";
import axios from "axios";

// Set up base URL for the API
const API_BASE_URL = `${conf.server_url}/api/quiz`;

export const fetchQuizQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz:", error.message);
    throw error;
  }
};
