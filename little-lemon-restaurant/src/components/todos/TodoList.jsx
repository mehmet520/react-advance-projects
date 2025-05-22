// src/components/Todos/TodoList.jsx
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoControls from './TodoControls'
import TodoItem from './TodoItem'

export default function TodoList({ userInput, setUserInput, todos, setTodos }) {
  const [filter, setFilter] = useState('all')

  const addTodo = () => {
    if (!userInput.trim()) return
    const newTodo = {
      id: uuidv4(),
      task: userInput,
      createdAt: new Date(),
      completed: false,
    }
    setTodos([...todos, newTodo])
    setUserInput('')
  }

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((task) => task.id !== id)
    setTodos(updatedTodos)
  }

  const reverseTodos = () => {
    const reversed = [...todos].reverse()
    setTodos(reversed)
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed
    if (filter === 'active') return !todo.completed
    return true
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Todo Liste</h1>

      <div className="mb-4 flex gap-2">
        <button
          className={filter === 'all' ? 'bg-blue-500 text-white' : ''}
          onClick={() => setFilter('all')}
        >
          Tümünü Göster
        </button>
        <button
          className={filter === 'active' ? 'bg-blue-500 text-white' : ''}
          onClick={() => setFilter('active')}
        >
          Aktifler
        </button>
        <button
          className={filter === 'completed' ? 'bg-blue-500 text-white' : ''}
          onClick={() => setFilter('completed')}
        >
          Tamamlananlar
        </button>
      </div>

      <table className="min-w-full border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-2"></th>
            <th className="px-2">#</th>
            <th className="px-2">Task</th>
            <th className="px-2">Erstellt am</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              serialNo={index + 1}
              task={todo.task}
              createdAt={todo.createdAt}
              completed={todo.completed}
              onToggleComplete={() => toggleComplete(todo.id)}
              // onTaskArrange={arrangeTask}
              onTaskDelete={deleteTask}
            />
          ))}
        </tbody>
      </table>
      <div className="card mt-8 bg-neutral-200">
        <h4 className="text-lg font-bold mb-2">Aufgabe Hinzufügen:</h4>

        <TodoControls
          userInput={userInput}
          onTaskAdd={addTodo}
          onInputChange={setUserInput}
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
        >
          Aufgabe hinzufügen
        </button>
        <button
          onClick={reverseTodos}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Reihenfolge umkehren
        </button>
      </div>
    </div>
  )
}
