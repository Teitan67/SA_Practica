// cliente.js
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/solicitar-pedido', (req, res) => {
    axios.post('http://localhost:3001/recibir-pedido', req.body)
        .then(() => res.status(200).send('Pedido solicitado al restaurante.'))
        .catch(err => console.log(err));
});

app.get('/verificar-estado-pedido-restaurante', (req, res) => {
    axios.get('http://localhost:3001/informar-estado-pedido')
        .then(response => res.status(200).json(response.data))
        .catch(err => console.log(err));
});

app.get('/verificar-estado-pedido-repartidor', (req, res) => {
    axios.get('http://localhost:3002/informar-estado-pedido')
        .then(response => res.status(200).json(response.data))
        .catch(err => console.log(err));
});

app.listen(3000, () => console.log('Cliente Microservicio corriendo en el puerto 3000.'));
