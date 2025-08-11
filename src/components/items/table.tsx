import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import NuevoProductoModal from "./modal"

export default function TablaProductos() {
  const productos = [
    { id: 1, name: "Producto 1", price: 60 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3", price: 120 },
    { id: 4, name: "Producto 4", price: 70 },
  ]

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Lista de Productos</h2>
          <NuevoProductoModal/>
        </div>

        <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Precio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productos.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell>{producto.id}</TableCell>
                  <TableCell>{producto.name}</TableCell>
                  <TableCell>${producto.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
