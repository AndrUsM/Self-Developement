import styled from 'styled-components';
import { themeColors } from '../../../../shared/styles.config';

export const UnauthentificatedHeaderHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${themeColors.header};
  color: ${themeColors.textLight};
  padding: 4px 6px 4px 10px;
  min-height: 26px;
`;
