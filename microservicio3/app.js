// repartidor.js
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

let estadoPedido = 'No hay pedido asignado';

app.post('/recibir-pedido', (req, res) => {
    estadoPedido = 'En camino';
    res.status(200).send('Pedido recibido, en camino para entregar.');
});

app.get('/informar-estado-pedido', (req, res) => {
    res.status(200).json({ estado: estadoPedido });
});

app.post('/marcar-entregado', (req, res) => {
    estadoPedido = 'Entregado';
    res.status(200).send('Pedido marcado como entregado.');
});

app.listen(3002, () => console.log('Repartidor Microservicio corriendo en el puerto 3002.'));
