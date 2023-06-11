import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BaseUrl = `${process.env.REACT_APP_HARPERDB_CUSTOM_FUNCTIONS_URL}`;
const api: AxiosInstance = axios.create({
  baseURL: BaseUrl,
});

const setupConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_HARPERDB_API_KEY}`,
    },
    ...config,
  };
};

export const get = (
  url: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.get(url, setupConfig(config));
}

export const post = (
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.post(url, data, setupConfig(config));
}

export const put = (
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.put(url, data, setupConfig(config));
};

export const remove = (
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<any, any>> => {
  return api.delete(url, setupConfig(config));
};
