import { ThemeInterface } from '../../../types/Button.interface';
import basic from '../../../../themes/basic';

export default (
	theme: ThemeInterface = basic,
): string => {
  if (theme.colors) {
    const backgroundColor: string = 'grey';
    const textColor: string = 'darkGrey';

    return (`
      background: ${theme.colors[backgroundColor]};
      border-color: ${theme.colors[backgroundColor]};
      color: ${theme.colors[textColor]};;
      cursor: not-allowed;
    `);
  }
  return '';
};
