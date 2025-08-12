import TablaProductos from "@/components/items/table";
import CartList from "@/components/items/CartList";
import { useMainMenu } from "@/hooks/useMainMenu";

export default function MainMenu() {
  const {
    cart, productos, budget, bestCombination, 
    setBudget, addToCart, findBestCombination,
  } = useMainMenu();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TablaProductos productos={productos} onAddToCart={addToCart} />
        <CartList cart={cart} />
      </div>

      {/* Presupuesto y mejor combinación */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">
          Mejor combinación de productos
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="border p-2 rounded w-40"
          />
          <button
            onClick={() => findBestCombination(productos, budget)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Calcular
          </button>
        </div>

        {bestCombination.length > 0 ? (
          <div>
            <ul className="space-y-1">
              {bestCombination.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">
              Total: $
              {bestCombination.reduce((acc, item) => acc + item.price, 0)}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">No hay combinación calculada aún.</p>
        )}
      </div>
    </div>
  );
}
