// src/pages/MainMenu.tsx
import { useEffect, useState } from "react"
import { useLayoutTitle } from "../../context/LayoutTitleContext"
import CartList from "@/components/items/CartList"
import TablaProductos from "@/components/items/table"

export default function MainMenu() {
  const { setTitle } = useLayoutTitle()
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    setTitle(<>MENU PRINCIPAL</>)
  }, [])

  const addToCart = (producto: any) => {
    setCart((prev) => [...prev, producto])
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tabla de productos con botón para añadir */}
        <TablaProductos onAddToCart={addToCart} />

        {/* Vista del carrito */}
        <CartList cart={cart} />
      </div>
    </div>
  )
}
