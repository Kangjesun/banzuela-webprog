// services/articleService.js

import axios from "axios";

const API_URL = "http://localhost:8000/api/articles";

const getToken = () => {
  return localStorage.getItem("token");
};

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const fetchArticles = async () => {
  return axios.get(API_URL, authHeader());
};

export const createArticle = async (data) => {
  return axios.post(API_URL, data, authHeader());
};

export const updateArticle = async (id, data) => {
  return axios.put(`${API_URL}/${id}`, data, authHeader());
};

export const deleteArticle = async (id) => {
  return axios.delete(`${API_URL}/${id}`, authHeader());
};