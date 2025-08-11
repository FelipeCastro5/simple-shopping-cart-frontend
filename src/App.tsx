import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import PrivateRoute from "./pages/routes/PrivateRoute"
import Login from "./pages/public/Login"
import PageLayout from "./components/layout/PageLayout"
import MainMenu from "./pages/private/main-menu"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Rutas privadas dentro de layout */}
        <Route element={<PrivateRoute><PageLayout /></PrivateRoute>}>
          <Route path="/main-menu" element={<MainMenu />} />
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}
