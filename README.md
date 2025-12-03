# 🌟 Hoja de Vida - Proyecto Full Stack

Proyecto completo de hoja de vida con frontend en React + Vite y backend en Django.

## 📁 Estructura del Proyecto

```
hoja-de-vida/
├── frontend/          # Aplicación React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/            # API REST con Django
│   ├── api/
│   │   ├── models.py
│   │   ├── views.py
│   │   └── serializers.py
│   ├── cv_project/
│   ├── manage.py
│   └── requirements.txt
└── README.md
```

## 🚀 Inicio Rápido

### Prerrequisitos
- Python 3.8 o superior
- Node.js (v16 o superior) para el frontend

### Opción 1: Inicio Rápido con Scripts (Windows)

**Para iniciar el backend:**
```bash
start_backend.bat
```
El script abrirá automáticamente el navegador en http://localhost:8000

**Para iniciar el frontend:**
```bash
start_frontend.bat
```
El script abrirá automáticamente el navegador en http://localhost:5174

### Opción 2: Inicio Manual

### 1. Configurar Backend

```bash
cd backend

# Crear entorno virtual (recomendado)
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar migraciones
python manage.py migrate

# Cargar datos iniciales
python manage.py load_initial_data

# Ejecutar servidor
python manage.py runserver
```

El backend Django estará en `http://localhost:8000`

### 2. Configurar Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend estará en `http://localhost:5174`

## 📚 Documentación

### Frontend

- **Tecnología**: React 18 + Vite
- **Puerto**: 5174
- **Proxy**: Configurado para redirigir `/api` al backend Django

Ver [frontend/README.md](frontend/README.md) para más detalles.

### Backend Django

- **Framework**: Django 4.2 + Django REST Framework
- **Base de datos**: SQLite (integrada en el backend)
- **Puerto**: 8000
- **Admin**: `http://localhost:8000/admin/`

#### Endpoints de la API

- `GET /api/profile/current/` - Obtener perfil actual
- `GET /api/skills/` - Obtener todas las habilidades
- `GET /api/technologies/` - Obtener todas las tecnologías
- `GET /api/experience/` - Obtener experiencia laboral
- `GET /api/education/` - Obtener educación
- `GET /api/projects/` - Obtener proyectos
- `POST /api/contact/messages/` - Enviar mensaje de contacto
- `GET /api/health/` - Estado del servidor

Ver [backend/README.md](backend/README.md) para más detalles.

## 🎯 Modelos Django (Casillas de Información)

Toda la información está organizada en modelos Django:

- **Profile** - Perfil principal (nombre, título, email, LinkedIn, GitHub, bio, about)
- **Skill** - Habilidades técnicas (nombre, nivel, categoría)
- **Technology** - Tecnologías y frameworks (nombre, categoría, icono)
- **Experience** - Experiencia laboral (empresa, puesto, descripción, fechas)
- **Education** - Educación (institución, título, campo, fechas)
- **Project** - Proyectos (nombre, descripción, tecnologías, URLs)
- **ContactMessage** - Mensajes de contacto (nombre, email, asunto, mensaje)

Puedes gestionar toda esta información desde:
- El admin de Django: `http://localhost:8000/admin/`
- La API REST: `http://localhost:8000/api/`
- El comando de carga inicial: `python manage.py load_initial_data`

## 🛠️ Tecnologías Utilizadas

### Frontend
- React 18
- Vite
- CSS3 (Variables CSS, Animaciones)

### Backend
- Django 4.2
- Django REST Framework
- SQLite

## 📝 Scripts Disponibles

### Frontend
```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run preview  # Preview de build
```

### Backend
```bash
python manage.py runserver        # Ejecutar servidor
python manage.py migrate          # Aplicar migraciones
python manage.py load_initial_data # Cargar datos iniciales
python manage.py createsuperuser  # Crear superusuario
```

## 🎨 Características

- ✨ Diseño moderno con efectos glassmorphism
- ⚡ Animaciones suaves y partículas interactivas
- 📱 Totalmente responsive
- 🎯 Navegación fluida con scroll suave
- 🔄 API REST completa con Django
- 💾 Base de datos integrada en el backend
- 🚀 Hot reload en desarrollo
- 🔗 Enlaces de contacto funcionales (email, LinkedIn, GitHub)

## 📦 Build para Producción

### Frontend
```bash
cd frontend
npm run build
```
Los archivos se generarán en `frontend/dist/`

### Backend
El backend Django está listo para producción. Considera usar Gunicorn o similar.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo y modificarlo como desees.

---

**¡Buena suerte con tu búsqueda de empleo!** 🚀
