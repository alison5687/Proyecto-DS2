@echo off
echo ========================================
echo   Iniciando Frontend React
echo ========================================
cd frontend
if not exist node_modules (
    echo Instalando dependencias...
    call npm install
)
echo Iniciando servidor de desarrollo en http://localhost:5174
echo Abriendo navegador...
timeout /t 3 /nobreak >nul
start http://localhost:5174
call npm run dev
pause

