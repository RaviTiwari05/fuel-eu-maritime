import axios from "../http/axiosInstance";

export const RoutesAPI = {
  getAll: () => axios.get("/routes"),
  setBaseline: (id: number) => axios.post(`/routes/${id}/baseline`),
};
