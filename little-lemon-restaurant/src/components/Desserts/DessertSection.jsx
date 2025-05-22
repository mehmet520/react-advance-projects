import { useState } from 'react'
import DessertList from './DessertList'
import DessertControl from './DessertControl'

export default function DessertSection({ desserts }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  return (
    <section className="my-0 px-4 py-6 bg-gray-600 dark:bg-yellow-50  grounded">
      <h3 className="text-xl font-semibold mb-4 text-center text-yellow-400 dark:text-yellow-900">
        🍰 En Popüler Tatlılar
      </h3>

      <DessertControl
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        onSearchChange={setSearchTerm}
        onSortChange={setSortOrder}
      />

      <DessertList
        desserts={desserts}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
      />
    </section>
  )
}
