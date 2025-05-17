export default function DessertItem({ title, description, image, price }) {
  return (
    <li className="flex items-center gap-4 p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <img src={image} alt={title} className="w-32 h-20 object-cover rounded" />
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">${price.toFixed(2)}</p>
      </div>
    </li>
  );
}
