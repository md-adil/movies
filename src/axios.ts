import baseAxios from "axios";
export const axios = baseAxios.create({
  baseURL: process.env.API_SERVER,
});

export const client = baseAxios.create({
  baseURL: "/api",
});
