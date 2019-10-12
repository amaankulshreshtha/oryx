import basic from '@oryx/themes';
import ThemeInterface from 'types/Theme.interface';
import { getHoverColor } from '../helpers/utils';

export default (
	theme: ThemeInterface = basic,
	primary: string,
  hoverState: boolean = false
): string => {
  if (theme.colors) {
    const textColor: string = primary ? primary: 'blue';

    return (`
      background: transparent;
      border-color: transparent;
      text-decoration: underline;
      color: ${theme.colors[hoverState ? getHoverColor(textColor) : textColor]}};

      &:focus {
        border: 1px solid ${getHoverColor(textColor)};
      }
    `);
  }
  return '';
};
