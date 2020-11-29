import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import scTheme from './SCTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: scTheme.persianGreen,
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
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
      color: scTheme.blueSapphire,
    },
    h2: {
      fontSize: '2.375rem',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.blueSapphire,
    },
    h3: {
      fontSize: '2rem',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.blueSapphire,
    },
    h4: {
      fontSize: '1.5625rem',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.blueSapphire,
    },
    h5: {
      fontSize: '1.25rem',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.persianGreen,
    },
    h6: {
      fontSize: '1rem',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      color: scTheme.persianGreen,
    },
    body1: {
      color: scTheme.blueSapphire,
      fontFamily: [
        'aleo',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
    },
    body2: {
      color: scTheme.metallicSeaweed,
      fontFamily: [
        'aleo',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
    },
    button: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      textTransform: 'none',
    },
    caption: {
      color: scTheme.blueSapphire,
      fontFamily: [
        'aleo',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
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
        color: scTheme.persianGreen,
      },
    },
    MuiInputBase: {
      root: {
        color: scTheme.blueSapphire,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: scTheme.blueSapphire,
      },
    },
    MuiSelect: {
      icon: {
        color: scTheme.blueSapphire,
      },
    },
    MuiCardContent: {
      root: {
        backgroundColor: scTheme.white,
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.75em',
      },
    },
  },
});

export default responsiveFontSizes(theme);
