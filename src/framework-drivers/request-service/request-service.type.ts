import { AxiosRequestConfig, Method } from "axios"

export interface DefaultConfigInputParamsType {
  url: string;
  method?: Method | string,
  config?: AxiosRequestConfig;
};

