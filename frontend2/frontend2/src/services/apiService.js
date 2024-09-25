import axios from 'axios';

const API_BASE_URL = 'https://lfjg8t5ei0.execute-api.us-east-1.amazonaws.com/dev';  // Replace <api-id>

export const fetchComplianceStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/compliance-status`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

