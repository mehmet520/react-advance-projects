import { useReducer, useRef } from 'react'
import { initialState, reservationFormReducer } from './reservationFormReducer'
import useReservation from '../../contexts/reservation/useReservation'
import ReservationForm from './reservationForm'

export default function ReservationControl() {
  const [state, dispatch] = useReducer(reservationFormReducer, initialState)
  const emailRef = useRef()
  const { error, loading, submitReservation } = useReservation()

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', name: e.target.name, value: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userEmail = emailRef.current.value
    submitReservation(state)
    alert(`Der Name wurde geschickt: ${state.name} \n E-Mail: ${userEmail}`)
    dispatch({ type: 'RESET' })
    emailRef.current.value = ''
  }

  return (
    <ReservationForm
      state={state}
      onInputChange={handleChange}
      onSubmit={handleSubmit}
      emailRef={emailRef}
    />
  )
}
