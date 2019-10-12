import basic from '@oryx/themes';
import ThemeInterface from 'types/Theme.interface';

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
