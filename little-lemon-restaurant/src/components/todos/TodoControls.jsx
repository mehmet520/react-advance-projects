export default function TodoControls({ userInput, onInputChange }) {
  return (
    <div className="">
      <input
        className="w-3/4"
        value={userInput}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Geben Sie bitte eine Aufgabe..."
      />
    </div>
  )
}
