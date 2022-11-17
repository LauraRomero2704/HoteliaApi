
const express = require('express');
const conexionBD=require('./db');

const app = express();

require('dotenv').config();


// Conexion a la BD
conexionBD();


// Configuraciones
app.set("name", "hoteliaapi");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');