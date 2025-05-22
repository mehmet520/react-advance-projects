export default function ReservationForm({
  state,
  onInputChange,
  onSubmit,
  emailRef,
}) {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 max-w-lg mx-auto mt-8 sm:max-w-2xl sm:flex-row"
      >
        <label htmlFor="name">
          Name (controlled):{' '}
          <input
            id="name"
            name="name"
            type="text"
            value={state.name}
            onChange={onInputChange}
            placeholder="Geben Sie Ihre Name..."
            className="input-name w-2/5 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label htmlFor="email">
          Email (uncontrolled):{' '}
          <input
            id="email"
            name="email"
            className="input-email w-2/5 border-2 rounded px-3 py-2 focus:outline-dotted focus:ring-2 focus:ring-red-400"
            type="email"
            ref={emailRef}
            placeholder="Geben Sie bitte Ihre E-Mail Adresse..."
          />
        </label>
        <button
          type="submit"
          disabled={!state.name}
          className="submit-btn w-1/5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
