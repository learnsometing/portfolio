const scTheme = {
  bg: '#0C082C',
  bgLightened: '#262146',
  text: '#E4E6E3',
  textDarkened: '#989997',
  textEmphasis: '#FFD23F',
  azure: '#2AFC98',
  orangeRed: '#5438DC',
  bottomNavigationIconSize: '32px',
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
      case 7:
        return '6rem';
      default:
        return '1rem';
    }
  },
};

export default scTheme;
