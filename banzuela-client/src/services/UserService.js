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

// FETCH USERS
export const fetchUsers = async () => {
  return await API.get("/api/users", authHeader());
};

// CREATE USER (ADMIN ONLY)
export const createUser = async (user) => {
  return await API.post("/api/users", user, authHeader());
};

// UPDATE USER
export const updateUser = async (id, user) => {
  return await API.put(`/api/users/${id}`, user, authHeader());
};

// DELETE USER
export const deleteUser = async (id) => {
  return await API.delete(`/api/users/${id}`, authHeader());
};

// LOGIN USER
export const loginUser = async (credentials) => {
  return await API.post("/api/users/login", credentials);
};

// REGISTER USER
export const registerUser = async (data) => {
  return await API.post("/api/users", data);
};