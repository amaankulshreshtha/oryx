export const getHoverColor = (color: string): string =>
	`hover${color.charAt(0).toUpperCase()}${color.slice(1)}`;