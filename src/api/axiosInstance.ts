// import axios, { AxiosRequestConfig, AxiosError } from "axios";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
