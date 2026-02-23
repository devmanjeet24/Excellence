import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://excellence-jylj.onrender.com/api",
  withCredentials: true,
});

export default API;