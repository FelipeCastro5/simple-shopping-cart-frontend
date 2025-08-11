// src/components/items/CartList.tsx
interface CartListProps {
  cart: { id: number; name: string; price: number }[]
}

export default function CartList({ cart }: CartListProps) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Carrito</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">No hay productos en el carrito.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="flex justify-between items-center border-b pb-1"
            >
              <span>{item.name}</span>
              <span className="font-medium">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
