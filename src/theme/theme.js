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
  },
})

export default theme
