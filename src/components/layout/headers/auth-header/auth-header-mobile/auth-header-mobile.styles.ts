import React from "react";
import styled from 'styled-components';
import { mediaBreakPointsConstants } from "../../../../../ui-constants/media/media.constants";

export const AuthHeaderMobileImplementation = styled.div`
  @media (max-width: ${mediaBreakPointsConstants.lg}) {
    display: none;
  }
`;