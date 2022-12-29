import React from "react";
import {
  AuthorithedLayoutDefaultContainerMain,
  AuthorithedLayoutDefaultContainerHeader,
  AuthorithedLayoutDefaultContainerAside,
  AuthorithedLayoutDefaultContainerFooter,
  AuthorithedLayoutDefaultContainerMainLeft,
  AuthorithedLayoutDefaultContainerMainRight,
  AuthorithedLayoutDefaultContainer,
} from './authorized-layout-default.styles';

export function AuthorithedLayoutDefault(props: {
  mainContent: React.ReactNode,
  infoTabNode: React.ReactNode,
}) {
  return (
    <AuthorithedLayoutDefaultContainer>
      <AuthorithedLayoutDefaultContainerHeader/>
      <AuthorithedLayoutDefaultContainerMain>
        <AuthorithedLayoutDefaultContainerAside/>
        <AuthorithedLayoutDefaultContainerMainLeft>
          { props.mainContent }
        </AuthorithedLayoutDefaultContainerMainLeft>
        <AuthorithedLayoutDefaultContainerMainRight>
          { props.infoTabNode }
        </AuthorithedLayoutDefaultContainerMainRight>
      </AuthorithedLayoutDefaultContainerMain>
      <AuthorithedLayoutDefaultContainerFooter/>
    </AuthorithedLayoutDefaultContainer>
  );
}