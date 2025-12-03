# 🎨 Frontend - React + Vite

Frontend de la hoja de vida construido con React 18 y Vite.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura

```
frontend/
├── src/
│   ├── components/        # Componentes React
│   │   ├── ParticlesCanvas.jsx
│   │   ├── FloatingNav.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── TechnologiesSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globales de la app
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos base
├── index.html
├── vite.config.js
└── package.json
```

## 🎯 Componentes

- **ParticlesCanvas**: Canvas animado con partículas
- **FloatingNav**: Navegación flotante lateral
- **HeroSection**: Sección principal con efecto typewriter
- **AboutSection**: Información sobre mí
- **SkillsSection**: Habilidades técnicas con barras de progreso
- **TechnologiesSection**: Tecnologías y frameworks
- **ContactSection**: Información de contacto
- **Footer**: Pie de página

## 🔧 Configuración

El proxy está configurado en `vite.config.js` para redirigir las peticiones `/api` al backend en `http://localhost:3000`.

## 📱 Responsive

El diseño es completamente responsive y se adapta a:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (< 768px)

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en `src/index.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### Modificar datos

Los datos están hardcodeados en los componentes. Para conectarlos con la API del backend, puedes usar `useEffect` y `fetch` en cada componente.

## 🔌 Conectar con la API

Ejemplo de cómo conectar un componente con la API:

```jsx
import { useState, useEffect } from 'react'

const MyComponent = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return <div>{data?.name}</div>
}
```

## 📦 Dependencias

- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **vite**: ^5.0.8
- **@vitejs/plugin-react**: ^4.2.1

