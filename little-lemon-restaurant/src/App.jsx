import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosPage from './pages/TodosPage'
import ReducerPage from './pages/ReservationPage'
import FeedbackPage from './pages/FeedbackPage'

function App() {
  return (
    <>
      <p className="p-2 text-lg font-semibold bg-green-400 border-l-2 divide-violet-200 m-2 border-blue-300 border-4">
        Mehmet Yilmaz <br />
        GitHub-Adresse:{" "}
        <a
          href="https://github.com/mehmet520"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-700"
        >
          github.com/mehmet520
        </a>
      </p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/reservation-form" element={<ReducerPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
