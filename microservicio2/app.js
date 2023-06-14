// restaurante.js
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

let estadoPedido = 'En preparación';

app.post('/recibir-pedido', (req, res) => {
    estadoPedido = 'En preparación';
    res.status(200).send('Pedido recibido y en preparación.');
});

app.get('/informar-estado-pedido', (req, res) => {
    res.status(200).json({ estado: estadoPedido });
});

app.post('/pedido-listo', (req, res) => {
    estadoPedido = 'Listo para entregar';
    axios.post('http://localhost:3002/recibir-pedido', {})
        .then(() => res.status(200).send('Avisado al repartidor que el pedido está listo.'))
        .catch(err => console.log(err));
});

app.listen(3001, () => console.log('Restaurante Microservicio corriendo en el puerto 3001.'));
