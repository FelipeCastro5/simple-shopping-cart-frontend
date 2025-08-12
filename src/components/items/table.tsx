// src/components/items/TablaProductos.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"

interface Producto {
  id: number
  name: string
  price: number
}

interface TablaProductosProps {
  productos: Producto[]
  onAddToCart: (producto: Producto) => void
}

export default function TablaProductos({ productos, onAddToCart }: TablaProductosProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Lista de Productos</h2>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>{producto.id}</TableCell>
                <TableCell>{producto.name}</TableCell>
                <TableCell>${producto.price}</TableCell>
                <TableCell>
                  <Button onClick={() => onAddToCart(producto)}>
                    Añadir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

