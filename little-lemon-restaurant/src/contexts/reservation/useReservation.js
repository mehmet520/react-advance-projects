import { useContext } from 'react'
import ReservationContext from './ReservationContext'

const useReservation = () => useContext(ReservationContext)
export default useReservation
