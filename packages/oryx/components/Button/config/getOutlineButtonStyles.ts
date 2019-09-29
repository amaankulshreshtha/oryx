import { ThemeInterface } from '../../../types/Button.interface';

export default (
	theme: ThemeInterface,
	primary: string,
	contrast: string
): string => {
  if (theme.color) {
    return (`
      background-color: ${theme.color[contrast ? contrast : 'white']};
      color: ${theme.color[primary ? primary : 'blue']}};
    `);
  }
  return '';
};
