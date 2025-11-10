import axios from "../http/axiosInstance";

export const BankingAPI = {
  getRecords: (shipId: string, year: number) =>
    axios.get(`/banking/records?shipId=${shipId}&year=${year}`),

  bank: (data: any) => axios.post("/banking/bank", data),

  apply: (data: any) => axios.post("/banking/apply", data),
};
