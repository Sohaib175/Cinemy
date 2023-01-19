import axios from 'axios';
import {BASE_URL} from './Api';

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});
