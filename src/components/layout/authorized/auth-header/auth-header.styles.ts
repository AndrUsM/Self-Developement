import React from 'react';
import styled from 'styled-components';

export const AuthHeader = styled.header`
  padding: 16px 3px;
`;

export const AuthHeaderLinkText = styled.a`
  outline: none;
  border: unset;

  &:hover, &:focus {
    border-bottom: 2px solid yellow;
    border-radius: 0 0 3px 3px;
  }
`;

export const AuthHeaderLinkIcon = styled.i`
  font-size: 16px;
  color: white;
`;

export const AuthHeaderLink = styled.a`
  color: white;
  font-size: 16px;

  &:hover, &:focus {
    color: orange;
  }
`;
