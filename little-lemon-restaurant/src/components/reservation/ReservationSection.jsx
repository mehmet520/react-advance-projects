import ReservationControl from './ReservationControl'

export default function ReservationSection() {
  return (
    <div>
      <h2 className="pt-8 text-2xl text-blue-400 font-semibold text-center">
        User Input with React useReducer und useRef Hooks
      </h2>
      <ReservationControl />
    </div>
  )
}
