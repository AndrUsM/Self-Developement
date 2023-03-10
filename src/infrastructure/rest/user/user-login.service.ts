import { type AxiosResponse } from 'axios';

import RequestService from '../../../framework-drivers/request-service';
import { restLoginUrl } from '../rest-url-builder/url.constants';
import { type UserDto } from './types/user.dto';

export class UserLoginService {
  private readonly httpRequestService: RequestService = new RequestService();

  async login (params?: Record<string, unknown>): Promise<AxiosResponse<UserDto>> {
    return await this.httpRequestService.post(restLoginUrl, params);
  }
}
