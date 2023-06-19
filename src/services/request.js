// code for Axios

import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VITE_APP_API_URL,
  withCredentials: true,
  headers: {},
});

export class Request {
  instance = axiosInstance;
  direction = '';

  setDirection(value) {
    this.direction = value;
  }

  setToken = () => {
    this.instance.interceptors.request.use(config => {
      const token = localStorage.getItem('token');
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
      return config;
    });
  };

  get = (url, config) =>
    this.instance
      .get(`${this.direction}${url}`, config)
      .then(this.responseBody);

  post = (url, body, config) =>
    this.instance
      .post(`${this.direction}${url}`, body, config)
      .then(this.responseBody);

  put = (url, body, config) =>
    this.instance
      .put(`${this.direction}${url}`, body, config)
      .then(this.responseBody);

  delete = (url, config) =>
    this.instance
      .delete(`${this.direction}${url}`, config)
      .then(this.responseBody);

  responseBody = response => {
    const resp = response.data;

    if (resp.error) {
      return { error: resp.error };
    }

    if (resp.token) {
      this.setToken(resp.token);
    }

    return resp ?? response;
  };
}

export const request = new Request();
