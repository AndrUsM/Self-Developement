export interface LoginFormPropsInputType {
  className?: string;
}

export interface LoginFormStateType {
  loginType: LoginByFieldTypeEnum;
}

export interface LoginFormInitialValueType {
  name: string;
  email: string;
  password: string;
}

export enum LoginByFieldTypeEnum {
  'EMAIL',
  'NAME',
};
