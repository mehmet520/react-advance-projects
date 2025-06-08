import { createContext, useCallback, useMemo, useReducer } from 'react'
import {
  reservationInitialState,
  reservationContextReducer,
} from './reservationContextReducer'

const ReservationContext = createContext()

export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reservationContextReducer,
    reservationInitialState,
  )

  const submitReservation = useCallback(
    async (formData) => {
      dispatch({ type: 'SUBMIT_REQUEST' })
      try {
        // Simule API istegi
        await new Promise((res) => setTimeout(res, 1000))
        dispatch({ type: 'SUBMIT_SUCCESS', payload: formData })
      } catch (error) {
        dispatch({
          type: 'SUBMIT_FAILURE',
          payload: `Bir hata olustu: ${error}.`,
        })
      }
    },
    [dispatch],
  )

  const contextValue = useMemo(
    () => ({ ...state, submitReservation }),
    [state, submitReservation],
  )

  return (
    <ReservationContext.Provider value={contextValue}>
      {children}
    </ReservationContext.Provider>
  )
}

export default ReservationContext
