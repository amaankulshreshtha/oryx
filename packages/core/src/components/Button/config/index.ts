import { GetButtonStyleInterface, ReturnButtonTypeInterface } from 'Typings/Button.interface';
import getLinkButtonStyles from './getLinkButtonStyles';
import getSolidOrOutlineButtonStyles from './getSolidOrOutlineButtonStyles';
import getDisbaledButtonStyles from './getDisbaledButtonStyles';

const returnButtonType: ReturnButtonTypeInterface = ({
	theme,
	outline,
	link,
	disabled,
	primary,
	contrast,
	hoverState = false
}) => {
	let backgroundColor: string = primary ? primary : 'blue';
	let textColor: string = contrast ? contrast : 'white';

	if (outline) {
		backgroundColor = primary ? primary : 'white';
		textColor = contrast ? contrast : 'blue';

		return getSolidOrOutlineButtonStyles(
			theme!,
			hoverState,
			backgroundColor,
			textColor
		);
	}

	if (link) {
		return getLinkButtonStyles(theme!, primary!, hoverState);
	}

	if (disabled) {
		return getDisbaledButtonStyles(theme);
	}

	return getSolidOrOutlineButtonStyles(
		theme!,
		hoverState,
		backgroundColor,
		textColor
	);
};

export const getButtonType = ({
	theme,
	outline,
	link,
	disabled,
	primary,
	contrast
}: GetButtonStyleInterface): string =>
	returnButtonType({
		theme,
		outline,
		link,
		disabled,
		primary,
		contrast
	});

export const getButtonHoveredType = ({
	theme,
	outline,
	link,
	disabled,
	primary,
	contrast
}: GetButtonStyleInterface): string =>
	returnButtonType({
		theme,
		outline,
		link,
		disabled,
		primary,
		contrast,
		hoverState: true
	});
