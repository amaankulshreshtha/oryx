import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../oryx/components/Button';
import ButtonProps from './types/ButtonProps.interface';

ReactDOM.render(
  <Button<ButtonProps> onClick={() => {console.log(123)}} data-testid='button'>hello world!</Button>,
  document.getElementById('app')
);