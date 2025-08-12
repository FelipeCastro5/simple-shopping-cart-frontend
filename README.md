# Simple Shopping Cart - Frontend

## Descripción y propósito
Este frontend implementa una **SPA (Single Page Application)** que permite listar productos, agregarlos al carrito y visualizar su contenido, consumiendo el backend desarrollado en **NestJS**.  
Forma parte de la prueba técnica para la postulación al rol de **Desarrollador Web** en HoyTrabajas.

**Autor:** Daniel Felipe Castro Lizarazo  
**Propósito:** Proveer una interfaz amigable y responsiva para interactuar con la API del carrito de compras.

## Funcionalidades
- Autenticación básica con rutas privadas y públicas.
- Listado de productos desde el backend.
- Agregar productos al carrito.
- Visualizar contenido del carrito en tiempo real.
- Diseño responsivo con TailwindCSS.
- Componentes reutilizables y tipados con TypeScript.

---

## Tecnologías utilizadas
- **React 19** – Librería para construir interfaces.
- **TypeScript 5.8** – Tipado estático.
- **Vite 7** – Bundler y servidor de desarrollo ultrarrápido.
- **React Router DOM 7.6** – Ruteo de vistas públicas y privadas.
- **Axios 1.11** – Cliente HTTP para consumir la API.
- **React Hook Form 7.60** – Manejo de formularios.
- **Zod 4.0** – Validaciones de datos.
- **TailwindCSS 4.1** – Estilos utilitarios.
- **Shadcn/UI + Radix UI** – Componentes accesibles y personalizables.
- **Lucide React** – Iconos SVG modernos.
- **Class Variance Authority + Tailwind Merge** – Gestión avanzada de clases.

---

## Estructura del proyecto

```plaintext
src/
│   App.tsx          # Componente raíz
│   main.tsx         # Punto de entrada
│   index.css        # Estilos globales
│
├───assets           # Recursos estáticos
├───components       # Componentes reutilizables
│   ├───items        # Componentes de productos y carrito
│   ├───layout       # Layout y navegación
│   └───ui           # Componentes UI (Shadcn/UI)
│
├───context          # Contextos globales
├───hooks            # Hooks personalizados
├───lib              # Funciones utilitarias
├───pages            # Vistas (públicas y privadas)
└───services         # Lógica de consumo de API y adaptadores
```

---

## Instrucciones de instalación
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/FelipeCastro5/simple-shopping-cart-frontend.git
   cd simple-shopping-cart-frontend

2. **Instalar dependencias**
    npm install

3. **Ejecución local**
    npm run dev

    Backend disponible en: http://localhost:5173
  
    Documentación Swagger: http://localhost:3000/swagger/#/