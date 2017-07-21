var cargarPagina = function() {
  $('#name').keyup(validarNombre);
  $('#mail').keyup(validarCorreo);
  $('#key').keyup(validarClave);
  $('#form-data').submit(agregarUsuario);
  $('#cuenta').click(nuevaPagina);

}

var nombre = $('#name');
var correo = $('#mail');
var clave = $('#key');

var  telefono = localStorage.getItem('telefono');

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

var nuevaPagina = function () {
  location.href = "pantalla5.html"
}

var agregarUsuario = function(e) {
  e.preventDefault();
  $.post('/api/createUser', {
    "phone": telefono,
    "email": correo.val(),
    "password": clave.val(),
    "name": nombre.val()
  },function (response) {
    if(response){
      alert(response.message);
      console.log(response.message);
    }else{
      console.log("error!!!");
    }
  });
}



$(document).ready(cargarPagina);
