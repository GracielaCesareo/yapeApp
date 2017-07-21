var cargarPagina = function() {
  $('.phone-number').keyup(validarTel);
  $('#terminos').change(validarCheck);
  $('#phone-form').submit(agregarNum)
  $('#continuar').click(sigPagina);
}
var $continuar = $('#continuar')

//
var validarTel = function (){
  if ($('.phone-number').val().length == 10) {
    return true
    // alert("Debes aceptar los terminos y condiciones");
  }
}

var validarCheck = function () {
  if($(this).is(':checked')) {
    validarTel();
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
    if(response) {
      alert("Tu codigo es" + response.data.code);
      localStorage.setItem("codigo", response.data.code );
      localStorage.setItem("telefono", response.data.phone);
      console.log(response.data.code);
      console.log(response.data.phone);
    }
    else {
      console.log("error");
    }
  });
};


$(document).ready(cargarPagina);
