import axios from "axios";

const api = axios.create({
  baseURL: "https://casaverde-server.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
