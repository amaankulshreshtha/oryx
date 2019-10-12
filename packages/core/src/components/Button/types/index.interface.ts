import ThemeInterface from 'types/Theme.interface';

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
