//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jespinoza2704@gmail.com',
    pass: 'XXXXX'
  }
});

exports.sendCorreo = async function sendCorreo(body){
    var html = `<strong>NOMBRES :</strong> ${body.nombres} <br>
                <strong>APELLIDOS :</strong> ${body.apellidos} <br>
                <strong>EMAIL :</strong> ${body.email} <br>
                <strong>TELEFONO :</strong> ${body.telefono} <br>
                <strong>MENSAJE :</strong> ${body.mensaje}`;

    var mailOptions = {
        from: 'jespinoza2704@gmail.com',
        to: 'jespinoza2292@gmail.com',
        subject: 'Consulta desde la pagina',
        html: html
      };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
}
