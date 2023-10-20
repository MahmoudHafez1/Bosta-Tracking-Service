import './App.css'
import { ThemeProvider, Typography } from '@mui/material'
import theme from './theme/theme'
import './config/initI18n'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Typography fontSize={30}>{t('Bosta')}</Typography>
      </div>
    </ThemeProvider>
  )
}

export default App
