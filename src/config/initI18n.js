import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      Bosta: 'Bosta',
      'Sign In': 'Sign In',
      Home: 'Home',
      Prices: 'Prices',
      'Call Sales': 'Call Sales',
      'Track Shipment': 'Track Shipment',
    },
  },
  ar: {
    translation: {
      Bosta: 'بوسطة',
      'Sign In': 'تسجيل دخول',
      Home: 'الرئيسية',
      Prices: 'الأسعار',
      'Call Sales': 'كلم المبيعات',
      'Track Shipment': 'تتبع شحنتك',
    },
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'ar',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
