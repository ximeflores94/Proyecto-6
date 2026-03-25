# Proyecto Módulo 6 - Parte 1

## Descripción
Este proyecto corresponde a la primera parte del ABP del módulo 6. Se construyó una aplicación base con Node.js y Express que permite servir contenido web, exponer rutas públicas y registrar accesos en un archivo plano.

## Requisitos del sistema
- Node.js 18 o superior
- npm instalado

## Instalación
1. Clonar o descargar el proyecto
2. Abrir terminal en la carpeta del proyecto
3. Ejecutar:
   npm install

## Ejecución
### Modo desarrollo
npm run dev

### Modo normal
npm start

## Rutas disponibles
- `/` → devuelve una respuesta HTML
- `/status` → devuelve una respuesta JSON

## Archivos estáticos
La carpeta `public` contiene el archivo `style.css`, servido mediante `express.static()`.

## Registro de accesos
Cada acceso a las rutas principales se registra en `logs/log.txt`, incluyendo fecha, hora y ruta accedida.

## Justificación técnica
Se eligió `app.js` como archivo principal porque representa claramente el punto de entrada de una aplicación Express.
Se utilizó una estructura modular con carpetas `routes`, `controllers`, `middlewares`, `public` y `logs` para mantener el proyecto ordenado, escalable y fácil de mantener.
Se decidió usar `dotenv` para separar la configuración del puerto del código fuente.
Se incorporó `nodemon` para facilitar el desarrollo mediante recarga automática.