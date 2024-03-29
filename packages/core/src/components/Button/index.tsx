import * as React from 'react';
import { ButtonInterface } from 'Typings/Button.interface';
import { ButtonComponent } from './Button.styles';

export const Button = <T,>(props: T & ButtonInterface<T>): React.ReactElement<T> => (
  <ButtonComponent {...props}>{props.children}</ButtonComponent>
);