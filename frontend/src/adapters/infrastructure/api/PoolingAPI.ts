import axios from "../http/axiosInstance";

export const PoolingAPI = {
  createPool: (data: any) => axios.post("/pools", data),
};
