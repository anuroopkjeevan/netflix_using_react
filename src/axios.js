import axios from 'axios';
import { baseUrl } from './constraints/constraints';

const instance = axios.create({
  baseURL: baseUrl, // Use the baseUrl constant here
});

export default instance;
