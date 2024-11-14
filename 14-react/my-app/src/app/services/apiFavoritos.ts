import axios from "axios";

const apiFavoritos = axios.create({
  baseURL: "https://ninth-level-caboc.glitch.me",
});

export default apiFavoritos;
