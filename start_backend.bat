@echo off
echo ========================================
echo   Iniciando Backend Django
echo ========================================
cd backend
if not exist venv (
    echo Creando entorno virtual...
    python -m venv venv
)
echo Activando entorno virtual...
call venv\Scripts\activate.bat
echo Instalando dependencias...
pip install -r requirements.txt --quiet
echo Aplicando migraciones...
python manage.py migrate
echo Iniciando servidor en http://localhost:8000
echo Abriendo navegador...
start http://localhost:8000
python manage.py runserver
pause

