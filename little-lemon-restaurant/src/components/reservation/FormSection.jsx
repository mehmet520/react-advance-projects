import { useReducer, useRef } from 'react'
import ReservationForm from './ReservationForm'
import { initialState, reservationReducer } from './reservationReducer'

export default function FormSection() {
  const [state, dispatch] = useReducer(reservationReducer, initialState)
  const emailRef = useRef()

  const handleChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userEmail = emailRef.current.value
    alert(`Der Name wurde geschickt: ${state.name} \n E-Mail: ${userEmail}`)
    dispatch({ type: 'RESET' })
    emailRef.current.value = ''
  }

  return (
    <div>
      <h2 className="pt-8 text-2xl text-blue-400 font-semibold text-center">
        User Input with React useReducer und useRef Hooks
      </h2>
      <ReservationForm
        state={state}
        onInputChange={handleChange}
        onSubmit={handleSubmit}
        emailRef={emailRef}
      />
    </div>
  )
}
