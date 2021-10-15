import axios from 'axios';
import {config} from '../config'

var axiosInstance = axios.create({
  baseURL: config.API_URL
});

export default axiosInstance;
