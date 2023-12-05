import axios from "axios";
import { base_url } from "./baseUrl";
import { config } from "./axiosConfig";
export const VerifyApis = async () => {
  const res = await axios.post(`${base_url}user/verify`, {}, config);
  return res.data;
};

export const getProducts = async () => {
  const res = await axios.get(`${base_url}product`);
  return res.data;
};

// cart
export const userCart = async () => {
  const res = await axios.get(`${base_url}cart`, config);
  return res.data;
};

// web configurations
export const getSiteConfigs = async () => {
  const res = await axios.get(`${base_url}config/`, config);
  return res.data;
};
