const fs = require('fs');
const path = require('path');
const logPath = path.join(__dirname, '..', 'logs', 'log.txt');
const loggerMiddleware = (req, res, next) => {
    //Creando una fecha y formateamos fecha y hora
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    //esta es la linea que se guardará en el archivo
    const linea = `Fecha: ${fecha} | Hora: ${hora} | Ruta accedida: ${req.originalUrl}\n`;
    fs.appendFile(logPath, linea, (err) => {
        if (err){
            console.error('Error al escribir en el log;', err.message);
        }
    });

    next();
};

module.exports = loggerMiddleware;
