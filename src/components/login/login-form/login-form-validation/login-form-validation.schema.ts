import * as Yup from 'yup';
import { validatePasswordRegex } from '../../../shared/form-validation/constants/validate-password-regex';
import { type LoginFormInitialValueType } from '../login-form.type';

export const loginFormValidationSchema = Yup.object<LoginFormInitialValueType>({
  name: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .min(1, 'Must be 1 characters or greater')
    .required('Please enter user name'),
  email: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .min(5, 'Must be 5 characters or greater')
    // .matches(validateEmailRegex, 'Please enter valid email, example: user@mail.com')
    .email('Please enter valid email, example: user@mail.com')
    .required('Please enter email'),
  password: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .min(5, 'Must be 5 characters or greater')
    .matches(validatePasswordRegex, 'Please enter valid password')
    .required('Please enter password')
});
