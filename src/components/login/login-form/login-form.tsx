import React from 'react';
import { useFormik } from 'formik';
import type {
  LoginFormInitialValueType,
  LoginFormPropsInputType
} from './login-form.type';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText
} from '@material-ui/core';
import { initialLoginFormValues } from './login-form-validation/login-form-initial-values';
import { loginFormValidationSchema } from './login-form-validation/login-form-validation.schema';

export function LoginFormComponent (_props: LoginFormPropsInputType): JSX.Element {
  // const [state, setState] = useReducer(loginFormStateReducer, initialLoginFormStateValue, () => initialLoginFormStateValue);
  const loginFormConfig = useFormik({
    initialValues: initialLoginFormValues,
    validationSchema: loginFormValidationSchema,
    onSubmit: (_formValues: LoginFormInitialValueType) => {
      // TODO: add handler
    }
  });

  return (
    <form className='p-3' onSubmit={loginFormConfig.handleSubmit}>
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
            value={loginFormConfig.values.email}
          />

          <FormHelperText error={ loginFormConfig.errors.email === null }>
            { 'We`ll never share your email.' }
          </FormHelperText>
        </FormControl>
      </FormGroup>

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
            onBlur={loginFormConfig.handleBlur}
            onChange={loginFormConfig.handleChange}
            value={loginFormConfig.values.password}
          />
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
    </form>
  );
}
