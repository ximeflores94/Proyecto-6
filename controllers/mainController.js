const home = (req, res) => {
res.render('home',{
    titulo: 'Bienvenid@ a mi proyecto del modulo 6',
    mensaje1: 'Este servidor se construyó con Node.js y Express.',
    mensaje2: 'La ruta "/" devuelve HTML usando una vista dinámica',
    mensaje3: 'La ruta "/status" devuelve JSON'
    });
};

const status = (req, res) => {
    res.json({
        status: 'ok',
        message: 'Servidor funcionando correctamente',
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    home,
    status
};