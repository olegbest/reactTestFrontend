import axios, { AxiosError } from 'axios';

export type HTTPClientError = AxiosError;

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default httpClient;
