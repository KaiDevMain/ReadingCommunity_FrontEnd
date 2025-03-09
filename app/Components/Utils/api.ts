import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5003"; 

if (!process.env.NEXT_PUBLIC_API_URL) {
    console.warn("NEXT_PUBLIC_API_URL が設定されていません");
  }

const api = axios.create({
  baseURL: API_URL,
});

export default api;