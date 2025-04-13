const express = require('express');
const app = express();
const noticiaRoutes = require('./routes/noticiaRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', noticiaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
