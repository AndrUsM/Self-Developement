import React from 'react';
import { UnauthorizedContent } from './unauth-content';
import { UnauthorizedFooter } from './unauth-footer';
import { UnauthorizedHeader } from './unauth-header';
import { UnauthentificatedLayout } from './unauthorized-layout.styles';

export const UnauthorizedLayout = function (props: {
  children?: React.ReactNode
}): JSX.Element {
  return (
    <UnauthentificatedLayout>
      <UnauthorizedHeader/>
      <UnauthorizedContent>
        { props.children }
      </UnauthorizedContent>
      <UnauthorizedFooter/>
    </UnauthentificatedLayout>
  );
};
