// src/components/modals/NuevoProductoModal.tsx
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import ProductoForm from "./ProductoForm"

export default function NuevoProductoModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Nuevo Producto</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Registrar nuevo producto</DialogTitle>
        </DialogHeader>
        <ProductoForm />
      </DialogContent>
    </Dialog>
  )
}
