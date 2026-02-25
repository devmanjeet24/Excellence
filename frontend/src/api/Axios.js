import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL: "https://excellence-z1kz.onrender.com/api",
  baseURL: "https://pretelegraph-bella-summarily.ngrok-free.dev/api",
  withCredentials: true,
});

export default API;