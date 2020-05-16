// save these colors for later to implement a light theme.
const scLightTheme = {
  bg: '#FBFEF9',
  main: '#0E79B2',
  secondary: '#F1C40F',
  emphasis: '#4CB944',
};

const scTheme = {
  bg: '#29335C',
  bgLightened: '#3E476C',
  text: '#F8ECFF',
  textDarkened: '#7F6D8E',
  textEmphasis: '#F9E43B',
  azure: '#3185FC',
  orangeRed: '#F25F5C',
  malachite: '#04E762',
  spacing: function(num: number): string {
    switch (num) {
      case 1:
        return '0.25rem';
      case 2:
        return '0.5rem';
      case 3:
        return '0.75rem';
      case 4:
        return '1rem';
      case 5:
        return '1.5rem';
      case 6:
        return '2rem';
      default:
        return '1rem';
    }
  },
};

export default scTheme;
