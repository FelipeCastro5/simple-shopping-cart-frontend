import { useEffect, useState } from "react";
import { useLayoutTitle } from "@/context/LayoutTitleContext";
import { getAllProducts, type Product } from "@/services/adapters/products.adapter";
import { getCart, addToCart as addCartApi } from "@/services/adapters/cart.adapter";

export function useMainMenu() {
  const { setTitle } = useLayoutTitle();
  const [cart, setCart] = useState<Product[]>([]);
  const [productos, setProductos] = useState<Product[]>([]);
  const [budget, setBudget] = useState<number>(0);
  const [bestCombination, setBestCombination] = useState<Product[]>([]);

  useEffect(() => {
    setTitle("MENU PRINCIPAL"); // ✅ Sin JSX, compila en .ts
    loadProducts();
    loadCart();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await getAllProducts();
      if (res.status === 200) {
        setProductos(res.data);
      } else {
        console.error("Error cargando productos:", res.msg);
      }
    } catch (err) {
      console.error("Error en loadProducts:", err);
    }
  };

  const loadCart = async () => {
    try {
      const res = await getCart();
      if (res.status === 200) {
        setCart(res.data);
      } else {
        console.error("Error cargando carrito:", res.msg);
      }
    } catch (err) {
      console.error("Error en loadCart:", err);
    }
  };

  const addToCart = async (producto: Product) => {
    try {
      const res = await addCartApi(producto.id);
      if (res.status >= 200 && res.status < 300) {
        await loadCart(); // 🔄 Recarga desde el backend
      } else {
        console.error("Error agregando al carrito:", res.msg);
      }
    } catch (err) {
      console.error("Error en addToCart:", err);
    }
  };

  const findBestCombination = (products: Product[], budget: number) => {
    let best: Product[] = [];
    let bestTotal = 0;

    const totalCombos = 1 << products.length;
    for (let mask = 0; mask < totalCombos; mask++) {
      const combo: Product[] = [];
      let total = 0;

      for (let i = 0; i < products.length; i++) {
        if (mask & (1 << i)) {
          total += products[i].price;
          combo.push(products[i]);
        }
      }

      if (total <= budget && total > bestTotal) {
        best = combo;
        bestTotal = total;
      }
    }

    setBestCombination(best);
  };

  return {
    cart,
    productos,
    budget,
    bestCombination,
    setBudget,
    addToCart,
    findBestCombination,
  };
}
