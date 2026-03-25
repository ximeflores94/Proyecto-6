//creando el servidor
const express = require('express');
//importando dotenv para leer variables de entorno desde el archivo .env
require('dotenv').config();
//importando las rutas principales del proyecto
const mainRoutes = require('./routes/mainRoutes');
//creando la aplicación express
const app = express();

//definiendo el puerto del servidor
const PORT = process.env.PORT || 3000;

//configurando ejs como motor de vistas
app.set('view engine', 'ejs');

//aplicando middleware para servir archivos estáticos desde la carpeta public
app.use(express.static('public'));

//conectando rutas externas al servidor
app.use('/', mainRoutes);

//es utiliza un Middleware básico para manejar errores
app.use((err, req, res, next) => {
    console.error('Error interno del servidor:', err.message);
    res.status(500).send('<h1>500 - Error interno del servidor </h1>');
});

//Levantando el servidor en el puerto indicado
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});