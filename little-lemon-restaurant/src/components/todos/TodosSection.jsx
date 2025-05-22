// src/components/Todos/TodoList.jsx
import { useState } from 'react'
import TodoList from './TodoList'

export default function TodosSection() {
  const [todos, setTodos] = useState([]) // Başlangıçta boş dizi
  const [userInput, setUserInput] = useState('')

  return (
    <div className="p-6">
      <TodoList
        userInput={userInput}
        setUserInput={setUserInput}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}
