import DessertSection from '../components/Desserts';

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
];

export default function HomePage() {
  return (
    <main className="p-8">
      <h1>Home Page</h1>
      <DessertSection desserts={sampleDesserts} />{' '}
      {/* components/Desserts/index.js dosyasını kullanıyoruz */}
      <div>
        <p>Ekstra içerik buraya eklendi.</p>
      </div>
    </main>
  );
}
