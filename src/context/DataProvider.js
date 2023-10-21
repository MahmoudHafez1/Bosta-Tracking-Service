import React, { useReducer } from 'react'
import DataContext, { initialData } from './DataContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRACKING_NUMBER':
      return { ...state, trackingNumber: action.payload }
    default:
      return state
  }
}

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData)

  const setTrackingNumber = (trackingNumber) => {
    dispatch({ type: 'SET_TRACKING_NUMBER', payload: trackingNumber })
  }

  return (
    <DataContext.Provider
      value={{ trackingNumber: state.trackingNumber, setTrackingNumber }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
