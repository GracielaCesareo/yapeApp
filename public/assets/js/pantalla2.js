var cargarPagina = function() {
  $('.phone-number').keyup(validarTel);
  $('#terminos').change(validarCheck);
  $('#phone-form').submit(agregarNum)
  $('#continuar').click(sigPagina);
}
var $continuar = $('#continuar')

//
var validarTel = function (){
  if ($(this).val().length == 10) {
    alert("Debes aceptar los terminos y condiciones");
  }
}

var validarCheck = function () {
  if($(this).is(':checked')) {
    // console.log("checked!!!");
    $continuar.removeClass('disabled');
  } else {
    return false;
  }
}

var sigPagina = function () {
  location.href = "pantalla3.html"
}

var agregarNum = function (e) {
  e.preventDefault();
  var telefono = $('.phone-number').val();
  var terminos = $('#terminos');
  $.post('/api/registerNumber', {
    phone: telefono,
    terms: terminos.is(':checked')
  }, function (response) {
    if(response.sucess != true) {
      console.log(response.message);
    }
    else {
      console.log(response.data.code);
    }
  });
};




$(document).ready(cargarPagina);
