import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/user/';

export const getStudentEvaluation = async (email) => {
  try {
    const response = await axios.post(`${API_URL}GetEvaluation/`, { email });
    console.log('API Response (Evaluation):', response.data); // Print API response
    return response.data;
  } catch (error) {
    console.error('Error fetching evaluation:', error);
    return { success: false, message: "Failed to fetch evaluation" };
  }
};

export const getScore = async (email) => {
  try {
    const response = await axios.post(`${API_URL}GetScore/`, { email });
    console.log('API Response (Score):', response.data); // Print API response
    return response.data;
  } catch (error) {
    console.error('Error fetching score:', error);
    return { success: false, message: "Failed to fetch score" };
  }
};

export const getNumberCorrExos = async (email) => {
  try {
    const response = await axios.post(`${API_URL}get_number_corr_exos/`, { email });
    console.log('API Response (Exercises Count):', response.data); // Print API response
    return response.data;
  } catch (error) {
    console.error('Error fetching exercises count:', error);
    return { success: false, message: "Failed to fetch exercises count" };
  }
};
export const updateActiveHours = async (email) => {
  try {
    const response = await axios.post(`${API_URL}update_active_hours/`, { email });
    return response.data;
  } catch (error) {
    console.error('Error updating active hours:', error);
    return { success: false, message: "Failed to update active hours" };
  }
};

export const getActiveDays = async (email) => {
  try {
    const response = await axios.post(`${API_URL}get_active_days/`, { email });
    return response.data;
  } catch (error) {
    console.error('Error fetching active days:', error);
    return { success: false, message: "Failed to fetch active days" };
  }
};


export const getUserAverageScore = async (email) => {
  try {
    const response = await axios.post(`${API_URL}get_average_score/`, { email });
    console.log('API Response (User Average Score):', response.data); // Print API response
    return response.data;
  } catch (error) {
    console.error('Error fetching user average score:', error);
    return { success: false, message: "Failed to fetch user average score" };
  }
};