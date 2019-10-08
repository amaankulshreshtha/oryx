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
  black?: string;
  grey?: string;
  darkGrey?: string;

  hoverBlue?: string;
  hoverGreen?: string;
  hoverRed?: string;
  hoverYellow?: string
  hoverTurqoise?: string;
  hoverTeal?: string;
  hoverPink?: string;
  hoverOrange?: string;
  hoverWhite?: string;
  hoverBlack?: string;
  hoverGrey?: string;
  hoverDarkGrey?: string;
};

const colors: Colors = {
  blue: '#1E88E5',
  green: '#009688',
  red: '#E53935',
  yellow: '#FDD835',
  turqoise: '#4DD0E1',
  teal: '#0097A7',
  pink: '#EC407A',
  orange: '#FB8C00',
  grey: '#EEEEEE',
  darkGrey: '#757575',

  hoverBlue: '#1565C0',
  hoverGreen: '#00796B',
  hoverRed: '#D32F2F',
  hoverYellow: '#FFCA28',
  hoverTurqoise: '#4DD0E1',
  hoverTeal: '#0097A7',
  hoverPink: '#EC407A',
  hoverOrange: '#FB8C00',
}

const basic = {
  colors
}

export default basic;