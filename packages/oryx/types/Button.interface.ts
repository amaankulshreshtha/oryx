interface Colors {
	[key: string]: string | undefined;
	blue?: string;
	green?: string;
	red?: string;
	yellow?: string;
	turqoise?: string;
	teal?: string;
	pink?: string;
	orange?: string;
	white?: string;
	black?: string;
	grey?: string;
	darkGrey?: string;

	hoverBlue?: string;
	hoverGreen?: string;
	hoverRed?: string;
	hoverYellow?: string;
	hoverTurqoise?: string;
	hoverTeal?: string;
	hoverPink?: string;
	hoverOrange?: string;
	hoverWhite?: string;
	hoverBlack?: string;
	hoverGrey?: string;
	hoverDarkGrey?: string;
}

export interface ThemeInterface {
	colors?: Colors;
}

export interface GetButtonStyleInterface {
	theme?: ThemeInterface;
	solid?: boolean;
	outline?: boolean;
	link?: boolean;
	disabled?: boolean;
	primary?: string;
	contrast?: string;
	hoverState?: boolean;
}

export interface ReturnButtonTypeInterface {
	(args: GetButtonStyleInterface): string;
}

export interface ButtonInterface<P = {}> extends GetButtonStyleInterface {
	children?: React.ReactNode;
	propTypes?: React.WeakValidationMap<P>;
	contextTypes?: React.ValidationMap<any>;
	defaultProps?: Partial<P>;
	displayName?: string;
}
