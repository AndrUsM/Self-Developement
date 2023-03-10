import { type ReducerDefaultInterface } from '../../../shared/types/use-reducer-default.type';
import { type LoginFormStateType } from '../login-form.type';
import { LoginFormReducerActionsEnum } from './login-form.actions';

export function loginFormStateReducer (
  state: LoginFormStateType,
  action: ReducerDefaultInterface<LoginFormReducerActionsEnum>
): LoginFormStateType {
  /* eslint-disable indent */
  switch (action.type) {
    case LoginFormReducerActionsEnum.CHANGE_LOGIN_FIELD_TYPE: {
      return {
        ...state,
        loginType: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
