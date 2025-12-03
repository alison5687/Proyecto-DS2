# 🚀 Guía de Despliegue

## Problemas Resueltos

### 1. ✅ App `api_profile` eliminada
- **Problema**: La app `api_profile` estaba registrada en `INSTALLED_APPS` pero estaba completamente vacía (sin modelos, vistas, URLs).
- **Solución**: Se eliminó `api_profile` de `INSTALLED_APPS` en `backend/cv_project/settings.py`.

### 2. ✅ Migraciones creadas y aplicadas
- **Problema**: La app `api` tenía modelos pero no tenía migraciones creadas.
- **Solución**: Se ejecutó `python manage.py makemigrations api` y `python manage.py migrate`.

### 3. ✅ Datos iniciales cargados
- Se ejecutó `python manage.py load_initial_data` para cargar datos de ejemplo.

## Estado Actual del Proyecto

### Backend Django ✅
- ✅ Migraciones aplicadas
- ✅ Datos iniciales cargados
- ✅ Servidor funcionando en `http://localhost:8000`
- ✅ API REST disponible en `/api/`
- ✅ Admin disponible en `/admin/`

### Frontend React ✅
- ✅ Configurado con Vite
- ✅ Proxy configurado para `/api` → `http://localhost:8000`
- ✅ Puerto: `5174`

## Cómo Iniciar el Proyecto

### Método 1: Scripts Automáticos (Recomendado para Windows)

1. **Backend:**
   ```bash
   start_backend.bat
   ```
   Abre automáticamente http://localhost:8000 en el navegador

2. **Frontend:**
   ```bash
   start_frontend.bat
   ```
   Abre automáticamente http://localhost:5174 en el navegador

### Método 2: Manual

#### Backend:
```bash
cd backend
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py load_initial_data
python manage.py runserver
```

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Endpoints Disponibles

- `GET http://localhost:8000/api/profile/current/` - Perfil actual
- `GET http://localhost:8000/api/skills/` - Habilidades
- `GET http://localhost:8000/api/technologies/` - Tecnologías
- `GET http://localhost:8000/api/experience/` - Experiencia
- `GET http://localhost:8000/api/education/` - Educación
- `GET http://localhost:8000/api/projects/` - Proyectos
- `POST http://localhost:8000/api/contact/messages/` - Enviar mensaje
- `GET http://localhost:8000/api/health/` - Estado del servidor

## Verificación

1. **Backend funcionando:**
   - Abre: http://localhost:8000/api/health/
   - Deberías ver: `{"status": "OK"}`

2. **Frontend funcionando:**
   - Abre: http://localhost:5174
   - Deberías ver la hoja de vida

3. **Admin Django:**
   - Abre: http://localhost:8000/admin/
   - (Necesitas crear un superusuario primero: `python manage.py createsuperuser`)

## Notas Importantes

- El archivo `.env` no es necesario para desarrollo (Django tiene valores por defecto).
- Para producción, crea un archivo `.env` con `SECRET_KEY` seguro.
- El servidor Django debe estar corriendo antes que el frontend para que las peticiones API funcionen.

