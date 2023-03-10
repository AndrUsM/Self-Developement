import { type ReducerDefaultInterface } from '../../types/use-reducer-default.type';
import { EncryptDataService } from './encrypt-data.service';
import { DataEncryptionOutDto } from './use-data-encryption.type';

export enum DataEncryptionReducerActionsEnum {
  'UPDATE',
  'DECRYPT',
};

export function useDataEncryprionReducer (
  state: DataEncryptionOutDto,
  action: ReducerDefaultInterface<DataEncryptionReducerActionsEnum>): DataEncryptionOutDto {
/* eslint-disable indent */
  const encryptService = new EncryptDataService();

  switch (action.type) {
    case DataEncryptionReducerActionsEnum.UPDATE: {
      return new DataEncryptionOutDto({
        original: action.payload,
        encrypted: encryptService.encrypt(action.payload),
      });
    }
    case DataEncryptionReducerActionsEnum.DECRYPT: {
      return new DataEncryptionOutDto({
        original: encryptService.decrypt(action.payload),
        encrypted: action.payload,
      });
    }
    default: {
      return state;
    }
  }
}
