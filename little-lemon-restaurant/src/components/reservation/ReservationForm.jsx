import React from 'react'

const ReservationForm = ({ state, onInputChange, onSubmit, emailRef }) => {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 max-w-3xl mx-auto mt-8 p-4 bg-gray-900/80 rounded-lg text-white"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold min-w-[70px] ">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={state.name}
            onChange={onInputChange}
            placeholder="Geben"
            className="w-full  border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:self-center gap-2">
          <label htmlFor="date" className="font-semibold min-w-[70px] ">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={state.date}
            onChange={onInputChange}
            className="w-full  border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="email" className="font-semibold min-w-[70px] ">
            Email:
          </label>
          <input
            id="email"
            name="email"
            className="w-full  border-2 rounded px-3 py-2 focus:outline-dotted focus:ring-2 focus:ring-red-400"
            type="email"
            ref={emailRef}
            placeholder="Geber"
          />
        </div>
        <button
          type="submit"
          disabled={!state.name}
          className="w-48  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default React.memo(ReservationForm)