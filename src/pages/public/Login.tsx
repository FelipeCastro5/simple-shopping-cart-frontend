import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem("auth", "true")
    navigate("/main-menu")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Entrar al carrito de compras</h1>
        <Button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Entrar
        </Button>
      </div>
    </div>
  )
}
