import './App.css'
import { ThemeProvider, Typography } from '@mui/material'
import theme from './theme/theme'
import './config/initI18n'
import Navbar from './components/Navbar'
import DataProvider from './context/DataProvider'
import { useContext } from 'react'
import DataContext from './context/DataContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <Navbar />
        <Coo />
      </DataProvider>
    </ThemeProvider>
  )
}

export default App

const Coo = () => {
  const { trackingNumber } = useContext(DataContext)
  console.log('s', trackingNumber)
  return <Typography>aaa</Typography>
}
