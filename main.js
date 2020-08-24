var express = require('express');
var sendCorreo = require('./sendCorreo.js');
// var cors = require('cors')
var myParser = require("body-parser");

//Load HTTP module
const http = require("http");
const hostname = 'localhost';
const port = 3000;

var app = express();
// app.use(cors())
app.use(myParser.urlencoded({extended : true}));
const server = http.createServer(app);
// app.use(express.json());
app.post('/sendCorreo', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    sendCorreo.sendCorreo(req.body);
    var resp = {
      codigoRespuesta: "0",
      mensajeRespuesta: "Correo enviado satisfactoriamente"
    }
    res.end(JSON.stringify(resp));
});


//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});