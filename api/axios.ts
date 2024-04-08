import { API_ROOT } from '@/utils/constants';
import axios from 'axios';

// axios.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
export const registerAccount = async (dataAccount: {
  email: string;
  password: string;
  tel: string;
  address: string;
}) => {
  const request = await axios.post(`${API_ROOT}/register`, dataAccount, {
    headers: { 'content-type': 'application/json' },
  });
  return request.data;
};
