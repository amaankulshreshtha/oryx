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

export default interface ThemeInterface {
	colors?: Colors;
}