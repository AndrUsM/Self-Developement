import { type ReducerDefaultInterface } from '../../../shared/types/use-reducer-default.type';
import { LoginByFieldTypeEnum, type LoginFormStateType } from '../login-form.type';
import { LoginFormReducerActionsEnum } from './login-form.actions';

export function toggleFieldByLoginType (
  dispatch: React.Dispatch<ReducerDefaultInterface<LoginFormReducerActionsEnum>>,
  state: LoginFormStateType,
): void {
  dispatch({
    type: LoginFormReducerActionsEnum.CHANGE_LOGIN_FIELD_TYPE,
    payload: state.loginType === LoginByFieldTypeEnum.EMAIL
      ? LoginByFieldTypeEnum.NAME
      : LoginByFieldTypeEnum.EMAIL,
  });
}
