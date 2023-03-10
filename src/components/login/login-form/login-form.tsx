import React, { useReducer } from 'react';
import { useFormik } from 'formik';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
  FormLabel
} from '@material-ui/core';

import {
  LoginByFieldTypeEnum,
  type LoginFormInitialValueType,
  type LoginFormPropsInputType
} from './login-form.type';
import { initialLoginFormValues } from './login-form-validation/login-form-initial-values';
import { loginFormValidationSchema } from './login-form-validation/login-form-validation.schema';
import { UserLoginService } from '../../../infrastructure/rest/user/user-login.service';
import { pushAlert } from '../../../3-rd-party-services/alerts/alerts';
import { loginFormStateReducer } from './state-reducer/login-form.reducer';
import { initialLoginFormStateValue } from './state-reducer/login-form-initial-value';
import { toggleFieldByLoginType } from './state-reducer/login-form.action-functions';
import { useDataEncryption } from '../../shared/hooks/use-data-encryption/use-data-encryption.hook';

export function LoginFormComponent (_props: LoginFormPropsInputType): JSX.Element {
  const userRestService = new UserLoginService();
  const [state, dispatch] = useReducer(loginFormStateReducer, initialLoginFormStateValue, () => initialLoginFormStateValue);

  const loginFormConfig = useFormik({
    initialValues: initialLoginFormValues,
    validationSchema: loginFormValidationSchema(state),
    onSubmit: async (_formValues: LoginFormInitialValueType) => {
      await userRestService.login()
        .then((response) => {
          if (response.status === 200) { 
            pushAlert('User successfully logged in', 'success');
          }
        });
    }
  });

  function toogleFieldLoginType (): void {
    if (state.loginType === LoginByFieldTypeEnum.EMAIL) {
      void loginFormConfig.setValues({
        ...loginFormConfig.values,
        email: '',
        name: '',
      }).then(function () {
        void loginFormConfig.setTouched({
          ...loginFormConfig.touched,
          email: false,
          name: false,
        }, false);
      });
    }
    toggleFieldByLoginType(dispatch, state);
  }

  return (
    <form className='p-3' onSubmit={loginFormConfig.handleSubmit}>
      { state.loginType === LoginByFieldTypeEnum.NAME
        ? (
          <FormGroup className='mb-3'>
            <FormControl>
              <InputLabel htmlFor="login-form_name">
                Name
              </InputLabel>

              <Input
                id="login-form_name"
                aria-describedby="login-form_name-helper-text"
                error={loginFormConfig.touched.name !== null && Boolean(loginFormConfig.errors.name)}
                name="name"
                onBlur={loginFormConfig.handleBlur}
                onChange={loginFormConfig.handleChange}
                value={loginFormConfig.values.name}
              />
            </FormControl>
          </FormGroup>
        )
        : null
      }

      {
        state.loginType === LoginByFieldTypeEnum.EMAIL
          ? (
            <FormGroup className='mb-3'>
              <FormControl>
                <InputLabel htmlFor="login-form_email">
                  Email
                </InputLabel>

                <Input
                  id="login-form_email"
                  aria-describedby="login-form_email-helper-text"
                  name="email"
                  error={loginFormConfig.touched.email !== null && Boolean(loginFormConfig.errors.email)}
                  onBlur={loginFormConfig.handleBlur}
                  onChange={loginFormConfig.handleChange}
                  value={loginFormConfig.values.email}/>

                <FormHelperText error={ loginFormConfig.errors.email === null }>
                  { 'We`ll never share your email.' }
                </FormHelperText>
              </FormControl>
            </FormGroup>
          )
          : null
      }

      <FormGroup className='mb-3'>
        <FormControl>
          <InputLabel htmlFor="login-form_password">
            Password
          </InputLabel>

          <Input
            id="login-form_password"
            aria-describedby="login-form_password-helper-text"
            error={loginFormConfig.touched.password !== null && Boolean(loginFormConfig.errors.password)}
            name="password"
            type='password'
            onBlur={loginFormConfig.handleBlur}
            onChange={loginFormConfig.handleChange}
            value={loginFormConfig.values.password}/>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <Button
          type='submit'
          disabled={!loginFormConfig.isValid}
          color='primary'
          variant='contained'
          fullWidth>

          Save
        </Button>
      </FormGroup>

      <FormGroup row className='align-items-center mt-2'>
        <FormLabel htmlFor='login-form_login-by' className='mr-1'>Login by:</FormLabel>

        <FormControl>
          <Button
            id='login-form_login-by'
            size='small'
            variant='text'
            type='button'
            color='secondary'
            fullWidth={false}
            onClick={toogleFieldLoginType}>
            
            {
              state.loginType === LoginByFieldTypeEnum.EMAIL
                ? 'Email'
                : 'Name'
            }
          </Button>
        </FormControl>
      </FormGroup>
    </form>
  );
}
