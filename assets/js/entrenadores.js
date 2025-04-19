$(document).ready(function () {
    $('.card-flip').hover(function () {
      $(this).find('.progress-bar').each(function () {
        let width = $(this).data('skill');
        $(this).css('width', width + '%');
      });
    }, function () {
      $(this).find('.progress-bar').css('width', '0%');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const ratings = document.querySelectorAll('.rating');
  
    ratings.forEach(ratingContainer => {
      const stars = ratingContainer.querySelectorAll('input[type="radio"]');
  
      stars.forEach(star => {
        star.addEventListener('change', function() {
          const ratingValue = this.id.split('-')[0].slice(4); 
          const ratingName = this.name;
          console.log(`Se ha valorado ${ratingName} con ${ratingValue} estrellas.`);
        });
      });
    });
  });