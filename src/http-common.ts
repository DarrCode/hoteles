import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: " https://my-json-server.typicode.com/yickson/serverjson",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;