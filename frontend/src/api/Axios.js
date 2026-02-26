import axios from "axios";

const API = axios.create({
  baseURL: "https://excellence-t0d1.onrender.com/api",
  // baseURL: "https://excellence-z1kz.onrender.com/api",
  withCredentials: true,
});

export default API;
