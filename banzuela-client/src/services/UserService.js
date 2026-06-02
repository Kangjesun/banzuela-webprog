import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// LOGIN
API.post("/api/users/login");


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
  return await API.get("/", authHeader());
};

// CREATE USER
export const createUser = async (user) => {
  return await API.post("/", user, authHeader());
};

// UPDATE USER
export const updateUser = async (id, user) => {
  return await API.put(`/${id}`, user, authHeader());
};

// DELETE USER
export const deleteUser = async (id) => {
  return await API.delete(`/${id}`, authHeader());
};

// LOGIN USER
export const loginUser = async (credentials) => {
  return await API.post("/login", credentials);
};

// REGISTER USER
export const registerUser = async (data) => {
  return await API.post("/", data);
};