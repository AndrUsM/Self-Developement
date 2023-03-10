import React from 'react';
import { UnauthentificatedLayout } from '../../../components/layout/unauthorized/unauthorized-layout.styles';
import { LoginFormComponent } from '../../../components/login/login-form/login-form';

export function LoginPage (): JSX.Element {
  return (
    <UnauthentificatedLayout>
      <LoginFormComponent/>
    </UnauthentificatedLayout>
  );
}
