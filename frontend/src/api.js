import axios from "axios";

const API = axios.create({
  baseURL: "https://noteapp-2-pjme.onrender.com",
});

export default API;

