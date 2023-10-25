import  axios  from 'axios';
import { config } from './../../utils/axiosConfig';
import { base_url } from './../../utils/baseUrl';
export const forgotPasswordToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data,
    config
  );
  return response.data;
};

export const resetUserPassword = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data.password }
  );
  return response.data;
};

export const CheckResetPasswordUser = async (data) => {
  const response = await axios.get(
    `${base_url}user/reset-password/${data.token}`
  );
  return response.data;
};