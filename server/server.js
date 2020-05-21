const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
    res.send('getUsuario');
});
app.post('/usuarios', (req, res) => {
    let body = req.body;
    if (req.body.nombre === undefined) {
        res.status(400).json({
            ok: "false",
            mensaje: "El nombre es obligario"
        });

    } else {
        res.send({
            persona: body
        });
    }

});
app.put('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuarios', (req, res) => {
    res.send('deletetUsuario');
});
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});