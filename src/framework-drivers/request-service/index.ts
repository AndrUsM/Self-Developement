import axios, { AxiosRequestConfig } from "axios";
import { baseUrl } from "./request-service.config";
import { DefaultConfigInputParamsType } from "./request-service.type";

export default class RequestService {
  public request <T>(params: DefaultConfigInputParamsType): Promise<T> {

    return axios(
      this.setDefaultConfig(params),
    );
  }

  public get<T> (path: string, params: Record<string, unknown>): Promise<T> {
    return this.request<T>({
      url: path,
      method: 'GET',
      config: {
        params,
      },
    });
  }

  public post<T> (path: string, params: Record<string, unknown>): Promise<T> {
    return this.request<T>({
      url: path,
      method: 'POST',
      config: {
        data: params,
      },
    });
  }

  public put<T> (path: string, params: Record<string, unknown>): Promise<T> {
    return this.request<T>({
      url: path,
      method: 'PUT',
      config: {
        data: params,
      },
    });
  }

  public delete<T> (path: string, params: Record<string, unknown>): Promise<T> {
    return this.request<T>({
      url: path,
      method: 'DELETE',
      config: {
        data: params,
      },
    });
  }

  public download (path: string, params: Record<string, unknown>): Promise<Blob> {
    return this.request<Blob> ({
      url: path,
      method: 'GET',
      config: {
        params: params,
        responseType: 'blob',
      },
    })
  }

  private setDefaultConfig(params: DefaultConfigInputParamsType): AxiosRequestConfig {
    return {
      ...params.config,
      url: `${baseUrl}${params.url}`,
      method: params?.method || params.config?.method,
      headers: {
        'Content-Type': params.config?.headers?.["Content-Type"] || 'application/json',
      },
    }
  }
}