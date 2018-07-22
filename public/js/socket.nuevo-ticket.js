// comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');


socket.on('connect', function() {
  console.log('conectado al servidor');
});


socket.on('disconnect', function () {
  console.log('Perdimos conexión con el servidor');
});

socket.on('estadoActual', function (resp) {
  console.log(resp.actual);
  label.text(resp.actual);
});


$('button').on('click', function () {

  // Enviar información
  socket.emit('siguienteTicket', null, function (siguienteTicket) {

    label.text(siguienteTicket);

  });

});
