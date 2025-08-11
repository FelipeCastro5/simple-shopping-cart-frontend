// src/components/forms/ProductoForm.tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ProductoForm() {
  return (
    <form className="grid gap-4 mt-2">
      <div>
        <Label htmlFor="nombre_producto">Nombre del producto</Label>
        <Input
          id="nombre_producto"
          name="nombre_producto"
          placeholder="Ej: Producto 1"
          required
        />
      </div>
      <div>
        <Label htmlFor="precio">Precio</Label>
        <Input
          id="precio"
          name="precio"
          type="number"
          placeholder="Ej: 100"
          required
        />
      </div>
      <Button type="submit">Guardar producto</Button>
    </form>
  )
}
