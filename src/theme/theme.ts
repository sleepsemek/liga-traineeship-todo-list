import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#05a34f',
    },
    secondary: {
      main: '#b08927',
    },
    background: {
      default: '#eefaf5',
      paper: '#fff',
    },
  },

  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },

  shape: {
    borderRadius: 24,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '1rem',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '1.4rem',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '1.4rem',
          paddingTop: '0',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '1rem 1rem 0 0',
        },
      },
    },
  },
});
