import DessertItem from './DessertItem';

export default function DessertList({ desserts = [], searchTerm, sortOrder }) {
  const filtered = desserts.filter((dessert) =>
    dessert.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price,
  );

  return (
    <ul className="list-disc ml-5">
      {sorted.map((dessert) => (
        <DessertItem
          key={dessert.id}
          title={dessert.title}
          price={dessert.price}
          description={dessert.description}
          image={dessert.image}
        />
      ))}
    </ul>
  );
}
