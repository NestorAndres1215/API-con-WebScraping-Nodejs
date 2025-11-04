const express = require('express');
const path = require('path');
const noticiaRoutes = require('./routes/noticiaRoutes');

const app = express();

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de logging simple
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rutas
app.use('/', noticiaRoutes);

// Puerto desde variable de entorno o 3000 por defecto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
