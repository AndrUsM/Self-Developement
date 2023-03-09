import { type RestResponseType } from '../../request-service.type';

export interface GraphQLClientOutType<ResponseType> {
  responseInfo: RestResponseType<ResponseType>,
  next: () => void;
}
