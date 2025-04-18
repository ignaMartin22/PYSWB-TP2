$(document).ready(function () {
    // Animar las barras de habilidad al hacer hover en cada tarjeta
    $('.card-flip').hover(function () {
      $(this).find('.progress-bar').each(function () {
        let width = $(this).data('skill');
        $(this).css('width', width + '%');
      });
    }, function () {
      // Resetear si querés que vuelvan a 0 al salir del hover
      $(this).find('.progress-bar').css('width', '0%');
    });
  });
  