import { ThemeInterface } from '../../../types/Button.interface';
import { getHoverColor } from '../helpers/utils';
import basic from '../../../../themes/basic';

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
