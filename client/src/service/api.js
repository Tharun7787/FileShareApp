import axios from 'axios';

export const uploadFile = async (data) => {
  try {
    const response = await axios.post('http://localhost:8000/upload', data);
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
