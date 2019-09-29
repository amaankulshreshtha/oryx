import { GetButtonStyleInterface } from '../../../types/Button.interface';
import getSolidButtonStyles from './getSolidButtonStyles';
import getOutlineButtonStyles from './getOutlineButtonStyles';

const returnButtonType = (
	_: TemplateStringsArray,
	{ theme, outline, link, disabled, primary, contrast }: GetButtonStyleInterface
): string => {
	if (outline) {
		return getOutlineButtonStyles(theme!, primary!, contrast!);
	}

	return getSolidButtonStyles(theme!, primary!, contrast!);
};

export const getButtonType = ({
	theme,
	outline,
	link,
	disabled,
	primary,
	contrast
}: GetButtonStyleInterface): string =>
	returnButtonType`${{
		theme,
		outline,
		link,
		disabled,
		primary,
		contrast
	}}`;

export const getButtonHoveredType = ({
	theme,
	outline,
	link,
	disabled,
	primary,
	contrast
}: GetButtonStyleInterface): string =>
	returnButtonType`${{
		theme,
		outline,
		link,
		disabled,
		primary,
		contrast
	}}`;
