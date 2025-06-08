/**
 * ReservationList component displays a list of reservations.
 * 
 * It uses the `useReservation` context to retrieve the current list of reservations.
 * If there are no reservations, it displays a message indicating so.
 * Otherwise, it renders each reservation's name and date in a styled list.
 * 
 * @component
 * @returns {JSX.Element} The rendered reservation list component.
 */
import React from 'react'
import useReservation from '../../contexts/reservation/useReservation'

const ReservationList = () => {
  const { reservations } = useReservation()

  console.log('ReservationList rendered.')

  return (
    <div className="card">
      <h2 className="mb-5 text-xl font-semibold text-orange-300">
        Rezervasyon Listesi:
      </h2>
      {reservations.length === 0 ? (
        <p>Henuz rezervasyon yok.</p>
      ) : (
        reservations.map((reserv, index) => (
          <li key={index} className="mb-3 border p-2 rounded">
            <strong>{reserv.name}</strong> - {reserv.date}
          </li>
        ))
      )}
    </div>
  )
}
// export default ReservationList
export default React.memo(ReservationList)
