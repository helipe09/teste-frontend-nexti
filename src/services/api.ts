
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-nexti.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
