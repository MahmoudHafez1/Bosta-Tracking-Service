import { createContext } from 'react'

export const initialData = {
  trackingNumber: null,
}

const DataContext = createContext(initialData)

export default DataContext
