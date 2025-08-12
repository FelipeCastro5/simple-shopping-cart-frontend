// src/pages/private/main-menu.tsx
import { useEffect, useState } from "react"
import { useLayoutTitle } from "../../context/LayoutTitleContext"
import TablaProductos from "@/components/items/table"
import CartList from "@/components/items/CartList"

export default function MainMenu() {
  const { setTitle } = useLayoutTitle()
  const [cart, setCart] = useState<any[]>([])

  const [budget, setBudget] = useState<number>(0)
  const [bestCombination, setBestCombination] = useState<any[]>([])

  const productos = [
    { id: 1, name: "Producto 1", price: 60 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3", price: 120 },
    { id: 4, name: "Producto 4", price: 70 },
  ]

  useEffect(() => {
    setTitle(<>MENU PRINCIPAL</>)
  }, [])

  const addToCart = (producto: any) => {
    setCart((prev) => [...prev, producto])
  }

  // Algoritmo para encontrar la mejor combinación sin exceder presupuesto
  const findBestCombination = (products: any[], budget: number) => {
    let best: any[] = []
    let bestTotal = 0

    // Generar todas las combinaciones posibles
    const totalCombos = 1 << products.length // 2^n combinaciones
    for (let mask = 0; mask < totalCombos; mask++) {
      const combo: any[] = []
      let total = 0

      for (let i = 0; i < products.length; i++) {
        if (mask & (1 << i)) {
          total += products[i].price
          combo.push(products[i])
        }
      }

      if (total <= budget && total > bestTotal) {
        best = combo
        bestTotal = total
      }
    }

    setBestCombination(best)
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TablaProductos productos={productos} onAddToCart={addToCart} />
        <CartList cart={cart} />
      </div>

      {/* Presupuesto y mejor combinación */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Mejor combinación de productos</h2>
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
  )
}
