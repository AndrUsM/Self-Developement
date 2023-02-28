import React from 'react';

export const UnauthorizedContent = function (props: {
  children?: React.ReactNode
}): JSX.Element {
  return (
    <React.Fragment>
      { props.children }
    </React.Fragment>
  );
};
