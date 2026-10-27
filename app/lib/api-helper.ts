import axios from "axios";
import { BASE_URL } from "./constants";
import { ErrorHandler } from "./error-handler";


const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(ErrorHandler.handle(error));
  }
);

export default api;

