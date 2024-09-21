import axios from "axios";

const api = axios.create({
  baseURL: "https://techtweet.onrender.com/",
});
export default api;
