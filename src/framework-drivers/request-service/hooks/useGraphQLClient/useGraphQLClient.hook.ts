import { type AxiosError, type AxiosResponse, HttpStatusCode } from 'axios';
import { useState } from 'react';
import { type RestResponseType, ReqestStatusTypeEnum } from '../../request-service.type';
import { type GraphQLClientOutType } from './graphQLClient.types';

export function useGraphQLClient<ResponseType> (request: Promise<AxiosResponse<ResponseType>>): GraphQLClientOutType<ResponseType> {
  const initialValue: RestResponseType<ResponseType> = {
    type: ReqestStatusTypeEnum.INITIAL,
  };

  const [requestResponseInfo, setRequestResponseInfo] = useState<RestResponseType<ResponseType>>(initialValue);

  const next = function (): void {
    setRequestResponseInfo({
      type: ReqestStatusTypeEnum.PENDING,
    });

    request
      .then((response: AxiosResponse<ResponseType>) => {
        setRequestResponseInfo({
          content: response.data,
          type: ReqestStatusTypeEnum.SUCCESS,
          statusCode: response.status,
        });
      })
      .catch(function (error: AxiosError) {
        setRequestResponseInfo({
          errorObject: typeof error.message === 'object' ? error : null,
          errorText: typeof error.message === 'string' ? error.message : null,
          type: ReqestStatusTypeEnum.ERROR,
          statusCode: Number(error.code) ?? HttpStatusCode.InternalServerError,
        });
      });
  };

  return {
    responseInfo: requestResponseInfo,
    next,
  };
}
