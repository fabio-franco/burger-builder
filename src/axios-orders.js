import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.burger_builder_baseURL
});

export default instance;