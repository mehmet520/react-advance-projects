// src/pages/TodosPage.jsx
import TodosSection from '../components/todos/TodosSection'

export default function TodosPage() {
  return (
    <main className="p-8">
      <h1 className="text-xl mb-4">Todos</h1>
      <TodosSection />
    </main>
  )
}
