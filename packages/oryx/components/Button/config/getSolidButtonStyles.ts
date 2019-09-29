import { ThemeInterface } from '../../../types/Button.interface';

export default (
	theme: ThemeInterface,
	primary: string,
  contrast: string,
  hoverState: boolean = false
): string => {
  if (theme.color) {
    const primaryColor = primary ? primary: 'blue';
    const contrastColor = contrast? contrast: 'white';
  
    const primaryHoverColor = hoverState ? `hover${primary[0].toUpperCase()}`: 'hoverBlue';
    
    return (`
      background-color: ${theme.color[hoverState ? primaryHoverColor : primaryColor]};
      color: ${theme.color[contrast ? contrast : 'white']}};
    `);
  }
  return '';
};
