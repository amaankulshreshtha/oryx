import * as React from 'react';
import { ButtonInterface } from './types/index.interface';
import ButtonComponent from './Button.styles';

export default <T,>(props: T & ButtonInterface<T>): React.ReactElement<T> => (
  <ButtonComponent {...props}>{props.children}</ButtonComponent>
);