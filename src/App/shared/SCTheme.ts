const scTheme = {
  white: 'hsla(0, 0%, 100%, 1)',
  mintCream: 'hsla(161, 100%, 97%, 1)',
  blueSapphire: 'hsla(197, 93%, 29%, 1)',
  metallicSeaweed: 'hsla(187, 97%, 29%, 1)',
  persianGreen: 'hsla(174, 100%, 33%, 1)',
  bottomNavigationIconSize: '32px',
  spacing: function (num: number): string {
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
        return '3rem';
      default:
        return '1rem';
    }
  },
};

export default scTheme;
