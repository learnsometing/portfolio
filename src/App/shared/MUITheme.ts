import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import scTheme from './SCTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F9E43B',
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontFamily: [
        'mr-eaves-xl-modern',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      lineHeight: '1.1',
      color: scTheme.text,
    },
    h2: {
      fontSize: '2.375rem',
      fontFamily: [
        'mr-eaves-xl-modern',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.text,
    },
    h3: {
      fontSize: '2rem',
      fontFamily: [
        'mr-eaves-xl-modern',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.text,
    },
    h4: {
      fontSize: '1.5625rem',
      fontFamily: [
        'mr-eaves-xl-modern',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.text,
    },
    h5: {
      fontSize: '1.25rem',
      fontFamily: [
        'mr-eaves-xl-modern',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.textEmphasis,
    },
    h6: {
      fontSize: '1.25rem',
      fontFamily: [
        'mr-eaves-xl-modern',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.text,
    },
    body1: {
      color: scTheme.text,
    },
    body2: {
      color: scTheme.textDarkened,
    },
    button: {
      fontFamily: [
        'mr-eaves-xl-modern',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
    },
  },
  overrides: {
    MuiCheckbox: {
      root: {
        color: scTheme.textDarkened,
      },
    },
    MuiInputBase: {
      root: {
        color: scTheme.text,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: scTheme.textDarkened,
      },
    },
    MuiSelect: {
      icon: {
        color: scTheme.text,
      },
    },
    MuiCardContent: {
      root: {
        backgroundColor: scTheme.bgLightened,
      },
    },
  },
});

export default responsiveFontSizes(theme);
