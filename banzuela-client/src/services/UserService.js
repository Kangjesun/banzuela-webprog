import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/users",
});

const getToken = () => localStorage.getItem("token");

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const fetchUsers = async () => {
  return await API.get("/", authHeader());
};

export const createUser = async (user) => {
  return await API.post("/", user, authHeader());
};

export const updateUser = async (id, user) => {
  return await API.put(
    `/${id}`,
    user,
    authHeader()
  );
};

export const deleteUser = async (id) => {
  return await API.delete(
    `/${id}`,
    authHeader()
  );
};

export const loginUser = async (
  credentials
) => {
  return await axios.post(
    "http://localhost:8000/api/users/login",
    credentials
  );
};

export const registerUser = async (
  userData
) => {
  return await axios.post(
    "http://localhost:8000/api/users",
    userData
  );
};