const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const usuario = require('./api/usuario');

require("dotenv").config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', usuario);

app.listen(process.env.PORT, () => {
    console.log('rodando na porta: ',process.env.PORT);
});