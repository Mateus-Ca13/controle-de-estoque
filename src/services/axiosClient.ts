import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://6877aa6adba809d901f06a55.mockapi.io/storage-control/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});