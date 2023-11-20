import axios from "axios";
import { base_url } from "./baseUrl";
import { config } from "./axiosConfig";
export const VerifyApi = async () => {
    const res = await axios.post(`${base_url}user/verify`, {}, config);
    return res.data;
  };