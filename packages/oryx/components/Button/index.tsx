import * as React from 'react';

export const Button = <T,>(props: T & { children?: React.ReactNode }): React.ReactElement => (
  <button {...props}>{props.children}</button>
);