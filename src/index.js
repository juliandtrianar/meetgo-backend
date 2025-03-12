const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Meet&GO backend funcionando 🚀' });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
