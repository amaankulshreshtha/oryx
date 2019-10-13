import * as React from 'react';
import Button  from '.';

export default {
  component: Button,
  title: 'Button'
}

export const withText = () => <Button>Hello World!</Button>
