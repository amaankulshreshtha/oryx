import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from "./components/Button";
import ButtonInterface from '../examples/types/Button.interface';

ReactDOM.render(
  <Button<ButtonInterface> onClick={() => {console.log(123)}} datat-testid='button'>hello world!</Button>,
  document.getElementById('app')
);

// import everything from components and export as oryx
const Oryx = {
  Button
}

export default Oryx;