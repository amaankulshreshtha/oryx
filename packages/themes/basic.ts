interface Colors {
  [key: string]: {
    blue: string,
    green: string,
    red: string,
    yellow: string
  } | {
    turqoise: string,
    teal: string,
    pink: string,
    orange: string
  }
}

const colors: Colors = {
  primary: {
    blue: '#1E88E5',
    green: '#009688',
    red: '#E53935',
    yellow: '#FDD835'
  },
  primaryHover: {
    blue: '#1565C0',
    green: '#00796B',
    red: '#D32F2F',
    yellow: '#FFCA28'
  },
  others: {
    turqoise: '#4DD0E1',
    teal: '#0097A7',
    pink: '#EC407A',
    orange: '#FB8C00',
  },
  othersHover: {
    turqoise: '#4DD0E1',
    teal: '#0097A7',
    pink: '#EC407A',
    orange: '#FB8C00',
  }
}