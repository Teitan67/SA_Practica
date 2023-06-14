// esb.js
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/esb/solicitar-pedido', (req, res) => {
    axios.post('http://localhost:3000/solicitar-pedido', req.body)
        .then(() => res.status(200).send('Pedido solicitado al restaurante.'))
        .catch(err => console.log(err));
});

app.get('/esb/verificar-estado-pedido-restaurante', (req, res) => {
    axios.get('http://localhost:3000/verificar-estado-pedido-restaurante')
        .then(response => res.status(200).json(response.data))
        .catch(err => console.log(err));
});

app.get('/esb/verificar-estado-pedido-repartidor', (req, res) => {
    axios.get('http://localhost:3000/verificar-estado-pedido-repartidor')
        .then(response => res.status(200).json(response.data))
        .catch(err => console.log(err));
});

app.listen(3004, () => console.log('ESB corriendo en el puerto 3004.'));
