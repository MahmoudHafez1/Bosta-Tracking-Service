import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E30613',
    },
    secondary: {
      main: '#4F5665',
    },
  },
  typography: {
    fontFamily: 'Cairo, sans-serif', // Set Cairo as the default font
    '@media (max-width: 900px)': {
      fontSize: '14px',
    },
    h6: {
      fontSize: '18px',
      fontWeight: '800',
      '@media (max-width: 900px)': {
        fontSize: '16px',
      },
      '@media (max-width: 500px)': {
        fontSize: '14px',
      },
      '@media (max-width: 400px)': {
        fontSize: '12px',
      },
    },
    body1: {
      fontSize: '18px',
      fontWeight: '600',
      '@media (max-width: 900px)': {
        fontSize: '16px',
      },
      '@media (max-width: 500px)': {
        fontSize: '14px',
        fontWeight: '400',
      },
    },
    body2: {
      fontSize: '16px',
      fontWeight: '600',
      '@media (max-width: 900px)': {
        fontSize: '14px',
      },
      '@media (max-width: 500px)': {
        fontSize: '12px',
      },
    },
  },

  direction: 'rtl',
})

export default theme
