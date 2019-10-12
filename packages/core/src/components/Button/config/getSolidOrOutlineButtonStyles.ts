import basic from '@oryx/themes';
import ThemeInterface from 'types/Theme.interface';
import { getHoverColor } from '../helpers/utils';

export default (
	theme: ThemeInterface = basic,
	hoverState: boolean,
	backgroundColor: string,
	textColor: string
): string => {
	if (theme.colors) {	
		return `
    background: ${
			theme.colors[
				hoverState ? getHoverColor(backgroundColor) : backgroundColor
			]
		};
    color: ${theme.colors[hoverState ? getHoverColor(textColor) : textColor]}};
  `;
	}
	return '';
};
