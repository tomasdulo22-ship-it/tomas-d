const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Permite recibir datos en formato JSON
app.use(express.json());

// Middleware para registrar las peticiones
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
    next();
});

// Datos de ejemplo en memoria
const actividades = [
    { id: 1, nombre: 'Rafting en el río Fonce', tipo: 'agua', precio: 60000 },
    { id: 2, nombre: 'Parapente en el cañón', tipo: 'aire', precio: 180000 },
    { id: 3, nombre: 'Caminata Camino Real a Barichara', tipo: 'tierra', precio: 0 },
    { id: 4, nombre: 'Torrentismo en cascada', tipo: 'agua', precio: 70000 }
];

// Ruta principal
app.get('/', (req, res) => {
    res.send('API Aventuras San Gil funcionando');
});

// Consultar todas las actividades o filtrarlas por tipo
app.get('/actividades', (req, res) => {
    console.log('query:', req.query);

    const { tipo } = req.query;

    if (!tipo) {
        return res.json(actividades);
    }

    const filtradas = actividades.filter(
        (a) => a.tipo.toLowerCase() === tipo.toLowerCase()
    );

    res.json(filtradas);
});

// Consultar una actividad por su ID
app.get('/actividades/:id', (req, res) => {
    console.log('params:', req.params);

    const id = Number(req.params.id);
    const actividad = actividades.find((a) => a.id === id);

    if (!actividad) {
        return res.status(404).json({
            mensaje: `No existe la actividad con id ${req.params.id}`
        });
    }

    res.json(actividad);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});