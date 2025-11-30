# 🌟 Hoja de Vida Interactiva

Una hoja de vida moderna, única e interactiva creada con HTML, CSS y JavaScript puro. Incluye animaciones suaves, efectos visuales impresionantes y un diseño responsivo.

## ✨ Características

- 🎨 **Diseño Único**: Interfaz moderna con efectos glassmorphism y gradientes
- ⚡ **Animaciones Suaves**: Partículas animadas, efectos de escritura y transiciones fluidas
- 📱 **Totalmente Responsive**: Se adapta perfectamente a todos los dispositivos
- 🎯 **Navegación Intuitiva**: Menú flotante que sigue el scroll
- 🌈 **Efectos Visuales**: Canvas con partículas conectadas y efectos de hover
- ⚙️ **Fácil de Personalizar**: Código limpio y bien organizado

## 🚀 Cómo Usar

1. **Abrir la hoja de vida**: Simplemente abre el archivo `index.html` en tu navegador
   - Puedes hacer doble clic en el archivo
   - O arrastrarlo a tu navegador favorito

2. **Personalizar información**:
   - Abre `index.html` en un editor de texto
   - Busca la sección de "Contacto" (línea ~150)
   - Edita tu información de contacto (email, LinkedIn, GitHub)

## 📝 Personalización

### Cambiar Colores

Los colores principales están definidos en `styles.css` en la sección `:root`:

```css
:root {
    --primary-color: #6366f1;    /* Color principal */
    --secondary-color: #8b5cf6;  /* Color secundario */
    --accent-color: #ec4899;     /* Color de acento */
}
```

### Modificar Habilidades

Edita las habilidades en la sección correspondiente de `index.html`:

```html
<div class="skill-item" data-level="90">
    <span class="skill-name">JavaScript</span>
    <!-- ... -->
</div>
```

El atributo `data-level` controla el porcentaje de la barra (0-100).

### Agregar Tecnologías

Para agregar más tecnologías, copia el bloque de `tech-card` en la sección de tecnologías:

```html
<div class="tech-card">
    <div class="tech-icon">🔧</div>
    <span>Tu Tecnología</span>
</div>
```

### Cambiar Textos

Todos los textos están directamente en el HTML, puedes editarlos libremente:
- Títulos de secciones
- Descripciones
- Información personal
- Textos del hero

## 🎨 Estructura del Proyecto

```
hoja-de-vida/
│
├── index.html      # Estructura principal
├── styles.css      # Estilos y animaciones
├── script.js       # Interactividad y efectos
└── README.md       # Este archivo
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Navegadores móviles

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables, animaciones y efectos modernos)
- JavaScript Vanilla (sin dependencias)
- Google Fonts (Poppins y JetBrains Mono)

## 💡 Tips

1. **Para producción**: Puedes subir estos archivos a cualquier hosting estático (GitHub Pages, Netlify, Vercel, etc.)

2. **Agregar más secciones**: Simplemente copia la estructura de una sección existente y personalízala

3. **Cambiar la imagen de perfil**: Reemplaza el emoji en `.profile-image::before` por una imagen real si lo deseas

4. **Optimizar**: Para mejor rendimiento, considera optimizar las imágenes si agregas algunas

## 📄 Licencia

Esta hoja de vida es de uso personal. Siéntete libre de usarla y modificarla como desees.

---

**¡Buena suerte con tu búsqueda de empleo!** 🚀

Si tienes preguntas o necesitas ayuda para personalizarla, no dudes en revisar el código. Está bien comentado y organizado para facilitar las modificaciones.
