import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


// GET TOKEN
const getToken = () => localStorage.getItem("token");

// AUTH HEADER
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// FETCH ARTICLES
export const fetchArticles = async () => {
  return API.get("/api/articles", authHeader());
};

// CREATE ARTICLE
export const createArticle = async (data) => {
  return API.post("/api/articles", data, authHeader());
};

// UPDATE ARTICLE
export const updateArticle = async (id, data) => {
  return API.put(`/api/articles/${id}`, data, authHeader());
};

// DELETE ARTICLE
export const deleteArticle = async (id) => {
  return API.delete(`/api/articles/${id}`, authHeader());
};