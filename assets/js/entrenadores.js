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
  
  document.addEventListener('DOMContentLoaded', function() {
    const ratings = document.querySelectorAll('.rating');
  
    ratings.forEach(ratingContainer => {
      const stars = ratingContainer.querySelectorAll('input[type="radio"]');
  
      stars.forEach(star => {
        star.addEventListener('change', function() {
          const ratingValue = this.id.split('-')[0].slice(4); // Ejemplo: 'star5-1' -> '5'
          const ratingName = this.name; // Ejemplo: 'rating1'
          console.log(`Se ha valorado ${ratingName} con ${ratingValue} estrellas.`);
          // Aquí podrías agregar la lógica para guardar o mostrar la valoración.
        });
      });
    });
  });