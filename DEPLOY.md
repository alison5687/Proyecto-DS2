# 🚀 Guía de Despliegue

## Backend en Render

### 1. Preparación
- ✅ `dj-database-url` agregado a `requirements.txt`
- ✅ `gunicorn` y `whitenoise` agregados para producción
- ✅ Configuración de base de datos para PostgreSQL
- ✅ Archivos estáticos configurados

### 2. Pasos para desplegar en Render

1. **Crear cuenta en Render**: https://render.com

2. **Crear Base de Datos PostgreSQL**:
   - Dashboard → New → PostgreSQL
   - Nombre: `cv-db`
   - Plan: Free
   - Copiar el **Internal Database URL**

3. **Crear Web Service**:
   - Dashboard → New → Web Service
   - Conectar tu repositorio de GitHub
   - Configuración:
     - **Name**: `cv-backend`
     - **Environment**: `Python 3`
     - **Build Command**: `./build.sh`
     - **Start Command**: `gunicorn cv_project.wsgi:application`
     - **Plan**: Free

4. **Variables de Entorno**:
   ```
   SECRET_KEY=tu-secret-key-generado
   DEBUG=False
   ALLOWED_HOSTS=tu-app.onrender.com,localhost,127.0.0.1
   DATABASE_URL=<URL de PostgreSQL de Render>
   CORS_ALLOWED_ORIGINS=https://tu-frontend-domain.com,http://localhost:5174
   ```

5. **Desplegar**:
   - Render detectará automáticamente el `render.yaml` si lo usas
   - O configura manualmente en el dashboard

### 3. Después del despliegue

1. **Ejecutar migraciones**:
   ```bash
   # En Render, ve a Shell y ejecuta:
   python manage.py migrate
   python manage.py load_initial_data
   python manage.py createsuperuser
   ```

2. **Obtener URL del backend**: `https://tu-app.onrender.com`

---

## Frontend en Vercel/Netlify

### Opción 1: Vercel (Recomendado)

1. **Crear cuenta**: https://vercel.com

2. **Conectar repositorio**:
   - Import Project → Selecciona tu repo
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite

3. **Variables de Entorno**:
   ```
   VITE_API_URL=https://tu-backend.onrender.com
   ```

4. **Desplegar**: Vercel detectará automáticamente `vercel.json`

### Opción 2: Netlify

1. **Crear cuenta**: https://netlify.com

2. **Conectar repositorio**:
   - New site from Git → Selecciona tu repo
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

3. **Variables de Entorno**:
   ```
   VITE_API_URL=https://tu-backend.onrender.com
   ```

4. **Desplegar**: Netlify detectará automáticamente `netlify.toml`

### Opción 3: Supabase (Static Hosting)

**Nota**: Supabase es principalmente para bases de datos. Para hosting estático, usa Vercel o Netlify.

Si aún quieres usar Supabase:
1. Ve a tu proyecto en Supabase
2. Storage → New bucket → `static-files`
3. Sube los archivos de `frontend/dist` después de hacer `npm run build`

---

## Configuración Final

### Backend (Render)
- URL: `https://tu-backend.onrender.com`
- Actualiza `CORS_ALLOWED_ORIGINS` con la URL de tu frontend

### Frontend (Vercel/Netlify)
- URL: `https://tu-frontend.vercel.app` o `https://tu-frontend.netlify.app`
- Actualiza `VITE_API_URL` con la URL de tu backend

### Verificación

1. **Backend Health Check**:
   ```
   https://tu-backend.onrender.com/api/health/
   ```

2. **Frontend**:
   - Debe cargar correctamente
   - Las peticiones API deben funcionar
   - Revisa la consola del navegador para errores

---

## Troubleshooting

### Error: `dj_database_url` no encontrado
- ✅ Ya está agregado en `requirements.txt`

### Error: CORS
- Verifica que `CORS_ALLOWED_ORIGINS` incluya la URL exacta de tu frontend

### Error: Static files
- Render usa WhiteNoise automáticamente
- Verifica que `collectstatic` se ejecute en el build

### Frontend no carga datos
- Verifica que `VITE_API_URL` esté configurado correctamente
- Revisa la consola del navegador para errores de CORS

---

## Archivos Creados

### Backend
- ✅ `backend/build.sh` - Script de build para Render
- ✅ `backend/render.yaml` - Configuración de Render
- ✅ `backend/requirements.txt` - Actualizado con dependencias

### Frontend
- ✅ `frontend/src/config/api.js` - Configuración de API
- ✅ `frontend/vercel.json` - Configuración de Vercel
- ✅ `frontend/netlify.toml` - Configuración de Netlify

---

**¡Listo para desplegar!** 🎉

