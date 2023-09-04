
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "./baseUrl";

export const uploadFiles = async (data) => {
  const formData = new FormData();
  data.forEach((file) => {
    formData.append("file", file);
  });
  try {
    const res = await axios.post(
      `${base_url}uploads`,
      formData
    );
    return res.data;
  } catch (error) {
    toast.error(error.response.data);
  }
};