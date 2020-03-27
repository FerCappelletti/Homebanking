const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const usuarios = require('./usuarios.json')


app.use(cors({origin: '*'}), bodyParser.json());

app.listen(3001, ()=> {
    console.log('Servidor ok')
})


app.post('/usuarios', (req, res) => {
    const newUsuario = req.body;
    usuarios.push(newUsuario);
    console.log(JSON.stringify(usuarios));
    res.status(200).send(newUsuario);
})

app.get('/usuarios', (req, res) => {

    res.json(usuarios)
})