import { LoginByFieldTypeEnum, type LoginFormStateType } from '../login-form.type';

export const initialLoginFormStateValue: LoginFormStateType = {
  loginType: LoginByFieldTypeEnum.EMAIL,
};
