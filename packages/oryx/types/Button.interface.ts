interface Colors {
  [key: string]: string | undefined;
  blue?: string;
  green?: string;
  red?: string;
  yellow?: string
  turqoise?: string;
  teal?: string;
  pink?: string;
  orange?: string;
  white?: string;
  black?: string

  hoverBlue?: string;
  hoverGreen?: string;
  hoverRed?: string;
  hoverYellow?: string
  hoverTurqoise?: string;
  hoverTeal?: string;
  hoverPink?: string;
  hoverOrange?: string;
  hoverWhite?: string;
  hoverBlack?: string
};

export interface ThemeInterface {
  color?: Colors;
};

export interface GetButtonStyleInterface {
  theme?: ThemeInterface;
  solid?: boolean;
  outline?: boolean;
  link?: boolean;
  disabled?: boolean;
  primary?: string;
  contrast?: string;
}

export interface ButtonInterface<P = {}> extends GetButtonStyleInterface {
  children?: React.ReactNode
  propTypes?: React.WeakValidationMap<P>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
};