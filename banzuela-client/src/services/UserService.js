import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/users",
});

// GET TOKEN (for protected routes if needed)
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

// LOGIN USER (NO TOKEN REQUIRED)
export const loginUser = async (credentials) => {
  return await axios.post(
    "http://localhost:8000/api/users/login",
    credentials
  );
};