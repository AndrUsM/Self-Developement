import axios, { type AxiosRequestConfig } from 'axios';
import { baseUrl } from './request-service.config';
import { type DefaultConfigInputParamsType } from './request-service.type';

export default class RequestService {
  async request <T>(params: DefaultConfigInputParamsType): Promise<T> {
    return await axios(
      this.setDefaultConfig(params),
    );
  }

  async get<T> (path: string, params?: Record<string, unknown>): Promise<T> {
    return await this.request<T>({
      url: path,
      method: 'GET',
      config: {
        params,
      }
    });
  }

  async post<T> (path: string, params?: Record<string, unknown>): Promise<T> {
    return await this.request<T>({
      url: path,
      method: 'POST',
      config: {
        data: params,
      },
    });
  }

  async put<T> (path: string, params?: Record<string, unknown>): Promise<T> {
    return await this.request<T>({
      url: path,
      method: 'PUT',
      config: {
        data: params,
      },
    });
  }

  // disable @typescript-eslint/promise-function-async
  async delete<T> (path: string, params?: Record<string, unknown>): Promise<T> {
    return await this.request<T>({
      url: path,
      method: 'DELETE',
      config: {
        data: params,
      },
    });
  }

  async download (path: string, params?: Record<string, unknown>): Promise<Blob> {
    return await this.request<Blob>({
      url: path,
      method: 'GET',
      config: {
        params,
        responseType: 'blob',
      },
    });
  }

  private setDefaultConfig (params: DefaultConfigInputParamsType): AxiosRequestConfig {
    return {
      ...params.config,
      url: `${baseUrl}${params.url}`,
      method: params?.method ?? params.config?.method,
      headers: {
        'Content-Type': params.config?.headers?.['Content-Type'] ?? 'application/json',
      },
    };
  }
}
