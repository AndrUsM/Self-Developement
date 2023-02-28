import { 
  type HttpStatusCode,
  type AxiosRequestConfig,
  type Method 
} from 'axios';

export interface DefaultConfigInputParamsType {
  url: string;
  method?: Method | string,
  config?: AxiosRequestConfig;
};

export enum ReqestStatusTypeEnum {
  'ERROR',
  'SUCCESS',
  'PENDING',
  'INITIAL',
};

export interface RestResponseType<ResponseType> {
  content?: ResponseType | null;
  type: ReqestStatusTypeEnum;
  errorText?: string | null;
  statusCode?: HttpStatusCode | number;
  errorObject?: object | null;
};
