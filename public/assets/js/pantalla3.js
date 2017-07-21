var cargarPagina = function() {
  $('#code-number').keyup(validarCodigo);
  $('#code-count').click(nuevaPantalla);
}

var codigo = localStorage.getItem('codigo');
console.log(codigo);

var boton = $('#code-count');

var validarCodigo = function (e) {
  e.preventDefault();
  if($('#code-number').val() == codigo) {
    $('#code-count').removeClass('disabled');
  } else {
    console.log('aun no!!!');
  }
}

var nuevaPantalla = function () {
  location.href = "pantalla4.html"
}

$(document).ready(cargarPagina);
