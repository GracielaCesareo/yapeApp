$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  var inputTel = $("#icon_prefix");
  // var botonContinuar = $("#continuar");
  $("#message").keyup(validarTel);

  var validarTel = function (e) {
    var botonContinuar = $("#continuar");
      if($(this).val().length == 9){
        botonContinuar.removeClass("disabled");
      }
  };

  // var terminos = function () {
  //   var checkTerminos = $("filled-in-box")
  //     if(checkTerminos.attr("checked"){
  //       botonContinuar.removeClass("disabled");
  //     }
  // };


});
