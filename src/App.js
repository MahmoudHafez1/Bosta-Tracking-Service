import './App.css'
import { Stack, ThemeProvider } from '@mui/material'
import theme from './theme/theme'
import './config/initI18n'
import Navbar from './components/Navigation/Navbar'
import DataProvider from './context/DataProvider'
import ShipmentTracking from './pages/ShipmentTracking'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation()
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <Stack sx={{ direction: i18n.language === 'en' ? 'ltr' : 'rtl' }}>
          <Navbar />
          <ShipmentTracking />
        </Stack>
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
