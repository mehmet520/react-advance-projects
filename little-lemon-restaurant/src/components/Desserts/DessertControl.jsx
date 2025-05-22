export default function DessertControls({
  searchTerm,
  sortOrder,
  onSearchChange,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between mb-4">
      <input
        type="text"
        placeholder="Tatlı ara..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/2"
      />
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/3"
      >
        <option value="asc">Fiyat: Artan</option>
        <option value="desc">Fiyat: Azalan</option>
      </select>
    </div>
  )
}
