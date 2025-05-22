export default function TodoItem({
  id,
  serialNo,
  task,
  createdAt,
  completed,
  onToggleComplete,
  onTaskArrange,
  onTaskDelete,
}) {
  return (
    <tr
      className={`text-center ${completed ? 'line-through text-gray-400' : ''}`}
    >
      <td>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleComplete}
          aria-label="Aufgabe erledigt"
        />
      </td>
      <td>{serialNo}</td>
      <td>{task}</td>
      <td>{createdAt ? new Date(createdAt).toLocaleString() : ''}</td>
      {/* <td><button onClick={() => onTaskArrange(id)}>Arrange</button></td> */}
      <td>
        <button onClick={() => onTaskDelete(id)}>Delete</button>
      </td>
    </tr>
  )
}
