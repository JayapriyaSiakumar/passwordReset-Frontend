import axios from "axios";

const api = axios.create({
  baseURL: "https://passwordreset-backend-o89a.onrender.com/api",
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
