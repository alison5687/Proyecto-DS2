# 🐍 Backend Django - API REST

Backend construido con Django y Django REST Framework para la hoja de vida.

## 🚀 Inicio Rápido

### Prerrequisitos

- Python 3.8 o superior
- pip

### 1. Crear entorno virtual (recomendado)

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 2. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del backend-django:

```env
SECRET_KEY=tu-clave-secreta-aqui
DEBUG=True
```

### 4. Ejecutar migraciones

```bash
python manage.py migrate
```

### 5. Cargar datos iniciales

```bash
python manage.py load_initial_data
```

### 6. Crear superusuario (opcional, para admin)

```bash
python manage.py createsuperuser
```

### 7. Ejecutar servidor

```bash
python manage.py runserver
```

El servidor estará disponible en `http://localhost:8000`

## 📚 Endpoints de la API

### Perfil
- `GET /api/profile/` - Listar todos los perfiles
- `GET /api/profile/{id}/` - Obtener perfil por ID
- `GET /api/profile/current/` - Obtener perfil actual (el primero)
- `POST /api/profile/` - Crear perfil
- `PUT /api/profile/{id}/` - Actualizar perfil completo
- `PATCH /api/profile/{id}/` - Actualizar perfil parcialmente
- `DELETE /api/profile/{id}/` - Eliminar perfil

### Habilidades
- `GET /api/skills/` - Listar todas las habilidades
- `GET /api/skills/?category=programming` - Filtrar por categoría
- `GET /api/skills/{id}/` - Obtener habilidad por ID
- `POST /api/skills/` - Crear habilidad
- `PUT /api/skills/{id}/` - Actualizar habilidad
- `DELETE /api/skills/{id}/` - Eliminar habilidad

### Tecnologías
- `GET /api/technologies/` - Listar todas las tecnologías
- `GET /api/technologies/?category=frontend` - Filtrar por categoría
- `GET /api/technologies/{id}/` - Obtener tecnología por ID
- `POST /api/technologies/` - Crear tecnología
- `PUT /api/technologies/{id}/` - Actualizar tecnología
- `DELETE /api/technologies/{id}/` - Eliminar tecnología

### Experiencia
- `GET /api/experience/` - Listar toda la experiencia
- `GET /api/experience/{id}/` - Obtener experiencia por ID
- `POST /api/experience/` - Crear experiencia
- `PUT /api/experience/{id}/` - Actualizar experiencia
- `DELETE /api/experience/{id}/` - Eliminar experiencia

### Educación
- `GET /api/education/` - Listar toda la educación
- `GET /api/education/{id}/` - Obtener educación por ID
- `POST /api/education/` - Crear educación
- `PUT /api/education/{id}/` - Actualizar educación
- `DELETE /api/education/{id}/` - Eliminar educación

### Proyectos
- `GET /api/projects/` - Listar todos los proyectos
- `GET /api/projects/{id}/` - Obtener proyecto por ID
- `POST /api/projects/` - Crear proyecto
- `PUT /api/projects/{id}/` - Actualizar proyecto
- `DELETE /api/projects/{id}/` - Eliminar proyecto

### Contacto
- `GET /api/contact/messages/` - Listar todos los mensajes
- `GET /api/contact/messages/{id}/` - Obtener mensaje por ID
- `POST /api/contact/messages/` - Crear mensaje de contacto
- `GET /api/contact/messages/unread/` - Obtener mensajes no leídos
- `POST /api/contact/messages/{id}/mark_read/` - Marcar mensaje como leído

### Salud
- `GET /api/health/` - Estado del servidor

## 🎯 Modelos Disponibles

Todos los modelos están disponibles en el admin de Django en `/admin/`:

- **Profile** - Perfil principal
- **Skill** - Habilidades técnicas
- **Technology** - Tecnologías y frameworks
- **Experience** - Experiencia laboral
- **Education** - Educación
- **Project** - Proyectos
- **ContactMessage** - Mensajes de contacto

## 📝 Ejemplos de Uso

### Obtener perfil actual
```bash
curl http://localhost:8000/api/profile/current/
```

### Crear habilidad
```bash
curl -X POST http://localhost:8000/api/skills/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "TypeScript",
    "level": 85,
    "category": "programming"
  }'
```

### Enviar mensaje de contacto
```bash
curl -X POST http://localhost:8000/api/contact/messages/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "subject": "Oportunidad de trabajo",
    "message": "Hola, me interesa..."
  }'
```

## 🛠️ Comandos Útiles

```bash
# Crear migraciones
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate

# Cargar datos iniciales
python manage.py load_initial_data

# Crear superusuario
python manage.py createsuperuser

# Ejecutar servidor
python manage.py runserver

# Ejecutar servidor en puerto específico
python manage.py runserver 8001
```

## 📦 Dependencias

- **Django**: 4.2.7 - Framework web
- **djangorestframework**: 3.14.0 - API REST
- **django-cors-headers**: 4.3.1 - CORS
- **python-dotenv**: 1.0.0 - Variables de entorno

