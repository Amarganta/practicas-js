import axios from "axios";
const api = axios.create({
  baseURL: "https://todo-70f99-default-rtdb.firebaseio.com",
});
export { api };
