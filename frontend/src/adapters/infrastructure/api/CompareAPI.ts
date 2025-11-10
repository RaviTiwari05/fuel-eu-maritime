import axios from "../http/axiosInstance";

export const CompareAPI = {
  getComparison: () => axios.get("/routes/comparison"),
};
