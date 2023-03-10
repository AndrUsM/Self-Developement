import { useMemo, useReducer } from 'react';
import { DataEncryptionReducerActionsEnum, useDataEncryprionReducer } from './use-data-encryption.reducer';
import { DataEncryptionOutDto } from './use-data-encryption.type';

export function useDataEncryption (value: string): DataEncryptionOutDto {
  const [state, dispatch] = useReducer(
    useDataEncryprionReducer,
    new DataEncryptionOutDto({
      original: value,
      encrypted: '',
    })
  );

  useMemo(() => {
    dispatch({
      type: DataEncryptionReducerActionsEnum.UPDATE,
      payload: value,
    });
  }, [value]);
  
  return state;
}
