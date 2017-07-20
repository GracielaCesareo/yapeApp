var cargarPagina = function() {
  $('#name').keyup(validarNombre);
  $('#mail').keyup(validarCorreo);
  $('#key').keyup(validarClave);
  $('#form-data').submit(agregarUsuario);
  // $('cuenta').

}

var nombre = $('#name');
var correo = $('#mail');
var clave = $('#key');

var validarNombre = function (){
  if (nombre.val().length > 3) {
    return true
  }
}
var validarCorreo = function (){
  if (correo.val().length > 5) {
    return true
  }
}
var validarClave = function (){
  if (clave.val().length == 6) {
    validarNombre();
    validarCorreo();
    $('#cuenta').removeClass('disabled')
  }
}

var agregarUsuario = function(e) {
  e.preventDefault();
  $.post('/api/createUser', {
    email: mail,
    password: clave,
    name: nombre
  },function (response) {
    console.log(response);
  });
}



$(document).ready(cargarPagina);



// router.post('/createUser',(req, res) => {
//     const phone = req.body.phone;
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
