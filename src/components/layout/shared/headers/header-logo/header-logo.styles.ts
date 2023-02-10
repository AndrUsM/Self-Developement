import styled from 'styled-components';

const headerHeight = '24px';

export const HeaderLogoContainer = styled.div`
  display: block;
  height: ${headerHeight};
  background-color: transparent;
`;

export const HeaderLogoImage = styled.img`
  height: ${headerHeight};
  display: block;
  object-fit: contain;
  min-width: auto;
  user-select: none;
  pointer-events: none;
  content: 'No Image';
`;

export const HeaderPhrase = styled.div``;
