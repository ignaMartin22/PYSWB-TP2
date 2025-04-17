// Animación de navbar
$(document).ready(function () {
    // Al pasar el ratón por encima del item 'Nosotros', mostramos el dropdown con un efecto fade
    $('.nav-item.dropdown').hover(
      function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);  // Desvanecer para mostrar
      },
      function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);  // Desvanecer para ocultar
      }
    );
  });
  // Animación de hero
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("hero-overlay");
    overlay.classList.add("show");
  });
  // Animación de cards
  $(document).ready(function () {
    $(".clase-card").hover(
      function () {
        $(this).stop().animate({ 
          marginTop: "-10px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)" 
        }, 200);
      },
      function () {
        $(this).stop().animate({ 
          marginTop: "0px",
          boxShadow: "0 0 0 rgba(0,0,0,0)" 
        }, 200);
      }
    );
  });

  // Animación de contador
  $(document).ready(function () {
    $('.counter').each(function () {
      const $this = $(this); //Iteraciones
      const target = +$this.data('target'); // número objetivo
      let count = 0;
  
      const interval = setInterval(() => { //intervalos de tiempo de 30ms
        const increment = Math.ceil(target / 100); //divide el objetivo en 100 partes
        count += increment; //suma el valor dividido
  
        if (count >= target) { //si el valor es mayor o igual al objetivo
          count = target;  //asigna el valor objetivo
          clearInterval(interval); //detiene animación
        }
  
        $this.text(count);
      }, 30); // velocidad
    });
  });

  //Carousel
  var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
    interval: 3000,  // Intervalo de 3 segundos
    ride: 'carousel' // Hace que el carrusel se inicie automáticamente
  });

   // Bootstrap validation + Spinner con jQuery
   $(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
      const form = this;
      if (form.checkValidity() === false) {
        e.stopPropagation();
        $(form).addClass('was-validated');
      } else {
        $('#formSpinner').removeClass('d-none'); // Mostrar spinner

        // Simulación de envío
        setTimeout(function () {
          $('#formSpinner').addClass('d-none'); // Ocultar spinner
          alert('¡Formulario enviado con éxito!');
          form.reset();
          $(form).removeClass('was-validated');
        }, 2000);
      }
    });
  });