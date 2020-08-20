var express = require('express');
var sendCorreo = require('./sendCorreo.js');

//Load HTTP module
const http = require("http");
const hostname = 'localhost';
const port = 3000;

var app = express();
const server = http.createServer(app);
app.use(express.json());
app.post('/sendCorreo', function (req, res) {
    console.log(req.body);
    sendCorreo.sendCorreo(req.body);
    res.end(`Correo enviado correctamente`);
});


//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});