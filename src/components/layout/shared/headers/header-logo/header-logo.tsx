import React from 'react';
import {
  HeaderLogoContainer,
  HeaderLogoImage
} from './header-logo.styles';

export function HeaderLogo (): JSX.Element {
  return (
    <HeaderLogoContainer>
      <HeaderLogoImage src={'/logo-c.png'}/>
    </HeaderLogoContainer>
  );
};
