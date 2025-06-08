import { Link } from 'react-router-dom'
import DessertSection from '../components/desserts/DessertSection'

const sampleDesserts = [
  {
    id: 1,
    title: 'Lemon Tart',
    price: 4.99,
    image: 'https://picsum.photos/150/100?random=1',
  },
  {
    id: 2,
    title: 'Chocolate Cake',
    price: 6.49,
    image: 'https://picsum.photos/150/100?random=2',
  },
  {
    id: 3,
    title: 'Apple Pie',
    price: 3.5,
    image: 'https://picsum.photos/150/100?random=3',
  },
  {
    id: 4,
    title: 'Cheesecake',
    price: 5.25,
    image: 'https://picsum.photos/150/100?random=4',
  },
]

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="p-2 text-3xl font-bold">Little Lemon Restaurant</h1>

      <h1>Home Page</h1>
      
      <div className="card mt-8 bg-slate-200">
        <h2 className="mb-2 text-2xl font-bold text-amber-600 ">Todos</h2>
        <Link
          to="/todos"
          className="text-blue-600 underline hover:text-blue-800"
        >
          ➕ Todos anzeigen
        </Link>
      </div>
      <div className="card bg-blue-200">
        <h2 className="mb-2 text-2xl font-bold text-amber-600 ">
          Reservation Making
        </h2>

        <Link
          to="/reservation"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Reservation Page
        </Link>
      </div>
      <div className="card bg-orange-200">
        <h2 className="mb-2 text-2xl font-bold text-amber-600">
          Feedback Form
        </h2>
        <Link
          to="/feedback"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Geben Sie uns Ihr Feedback
        </Link>
      </div>
      <div className="card bg-rose-200">
        <h2 className="mb-2 text-2xl font-bold text-amber-600">
          Registration Form
        </h2>
        <Link
          to="/registration"
          className="txt-blue-600 underline hover:text-blue-800"
        >
          Anmelden
        </Link>
      </div>

      <div className="card">
        <DessertSection desserts={sampleDesserts} />
        {/* components/Desserts/index.js dosyasını kullanıyoruz */}
      </div>
    </main>
  )
}
