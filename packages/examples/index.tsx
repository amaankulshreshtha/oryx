import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Oryx, { Button } from '@oryx/core';
import ButtonProps from './typings/ButtonProps.interface';

function App() {
  console.log(Oryx.Button);
  console.log(Button);
  return <Oryx.Button<ButtonProps> onClick={() => {console.log(123)}} data-testid='button'>hello world!</Oryx.Button>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);