import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // use VITE_ for Vite projects
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: log or modify requests
axiosClient.interceptors.request.use((config) => {
  console.log("Request:", config);
  return config;
});

export default axiosClient;
