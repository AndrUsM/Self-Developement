import * as Yup from 'yup';
import { validatePasswordRegex } from '../../../shared/form-validation/constants/validate-password-regex';
import { type LoginFormStateType, type LoginFormInitialValueType, LoginByFieldTypeEnum } from '../login-form.type';

export const loginFormValidationSchema = function (state: LoginFormStateType): Yup.ObjectSchema<Record<string, unknown>, LoginFormInitialValueType, Record<string, unknown>, ''> {
  const nameRules = Yup.string()
    .max(30, 'Must be 30 characters or less')
    .min(1, 'Must be 1 characters or greater');
  
  const emailRules = Yup.string()
    .max(30, 'Must be 30 characters or less')
    .min(5, 'Must be 5 characters or greater')
    .email('Please enter valid email, example: user@mail.com');
  return (
    Yup.object<LoginFormInitialValueType>({
      name: state.loginType === LoginByFieldTypeEnum.NAME
        ? nameRules.required('Please enter user name')
        : nameRules,
      email: state.loginType === LoginByFieldTypeEnum.EMAIL
        ? emailRules.required('Please enter email')
        : emailRules,
      password: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .min(5, 'Must be 5 characters or greater')
        .matches(validatePasswordRegex, 'Please enter valid password')
        .required('Please enter password')
    })
  );
};
