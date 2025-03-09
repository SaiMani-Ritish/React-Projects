import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAllRecipes = async () => {
  const response = await axios.get(`${API_URL}/recipes`);
  return response.data;
};

export const getRecipe = async (id) => {
  const response = await axios.get(`${API_URL}/recipes/${id}`);
  return response.data;
};

export const createRecipe = async (recipe) => {
  const response = await axios.post(`${API_URL}/recipes`, recipe);
  return response.data;
};

export const updateRecipe = async (id, recipe) => {
  const response = await axios.put(`${API_URL}/recipes/${id}`, recipe);
  return response.data;
};

export const deleteRecipe = async (id) => {
  const response = await axios.delete(`${API_URL}/recipes/${id}`);
  return response.data;
};