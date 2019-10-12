import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ButtonProps from './types/ButtonProps.interface';
import Oryx from '@oryx/core'

function App() {
  console.log(Oryx.Button);
  return (
    <Oryx.Button<ButtonProps> onClick={() => {console.log(123)}} data-testid='button'>hello world!</Oryx.Button>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);