import axios from "axios";

export const API = axios.create({
    baseURL:"https://644f369dba9f39c6ab5f34ed.mockapi.io/api/",
    headers:{"Content-Type":"application/json"}
})