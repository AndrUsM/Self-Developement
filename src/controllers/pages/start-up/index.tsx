import React from 'react';
import { UnauthorizedLayout } from '../../../components/layout/unauthorized/unauthorized-lauout';

export class StartUpPage extends React.Component {
  render (): React.ReactNode {
    return (
      <UnauthorizedLayout></UnauthorizedLayout>
    );
  }
};
