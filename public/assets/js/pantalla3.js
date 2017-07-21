var cargarPagina = function() {
  $('#code-number').keyup(validarCodigo);
  $('#code-count').click(nuevaPantalla);
  // $(window).load(cronometro);
}

var codigo = localStorage.getItem('codigo');
var telefono = localStorage.getItem('telefono');
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

// var cronometro = function () {
//   e.preventDefault();
//   var segundos = 22;
//   var tiempo = setInterval (function() {
//     if(segundos <= 0) {
//       llamarApi();
//     }
//     clearInterval(tiempo)
//   }, 1000);
// };
//
//
// var llamarApi = function () {
//   $.post('api/resendCode', {
//     phone: telefono,
//   }, function (response) {
//     if(response) {
//       console.log(response.data.code);
//     }
//     else {
//       console.log("error");
//     }
//   });
// }

// clearInterval(tiempo);
$(document).ready(cargarPagina);

//
// var segundos = 22;
// var tiempo = setInterval(function () {
//   $('#contador').html(--segundos);
//
//   if(segundos <= 0) {
//     llamarApi();
//   }
// }, 1000);
