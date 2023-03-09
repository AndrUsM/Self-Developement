import React, { PureComponent } from 'react';
import { HeaderLogo } from '../../shared/headers/header-logo/header-logo';
import { UnauthentificatedHeaderHeader } from './styled-components/unauth-header.styles';
import { type UnauthentificatedHeaderProps } from './unauth-header.types';

export class UnauthorizedHeader extends PureComponent {
  constructor (props: UnauthentificatedHeaderProps) {
    super(props);
    this.state = { ...props };
  }

  render (): JSX.Element {
    return (
      <UnauthentificatedHeaderHeader>
        <HeaderLogo/>
      </UnauthentificatedHeaderHeader>
    );
  }
};
