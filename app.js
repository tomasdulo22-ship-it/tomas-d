const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(
    ${new Date().toLocaleTimeString()} ${req.method} ${req.url}
  );

  next();
});

app.get('/', (req, res) => {
  res.send('API Aventuras San Gil funcionando');
});

app.listen(PORT, () => {
  console.log(Servidor escuchando en http://localhost:${PORT});
});