var cargarPagina = function() {
  $('.phone-number').keyup(validarTel);
  // $('#terminos').change(validarCheck);
  $('#continuar').click(agregarNum);
}
var $continuar = $('#continuar')


var validarTel = function (){
  if ($(this).val().length == 9) {
    $continuar.removeClass('disabled')
  }
}

// var validarCheck = function () {
//   if($(this).is(':cheked')) {
//     $continuar.removeClass('disabled')
//   }
// }

var agregarNum = function (e) {
e.preventDefault();
  var telefono = $('.phone-number').val();
  $.post('/api/registerNumber', {
    phone: telefono,
    terms: true
  }).then(function(response){
    alert(response.data.code);
    // console.log(response.data.code)
  }).catch(function (response) {
    console.log("error!!!");
  })
}



$(document).ready(cargarPagina);
