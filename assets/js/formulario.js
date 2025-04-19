$(document).ready(function () {
    function validarCampo($input) {
      if ($input[0].checkValidity()) {
        $input.removeClass("is-invalid").addClass("is-valid");
      } else {
        $input.removeClass("is-valid").addClass("is-invalid");
      }
    }
  
    // Validación en tiempo real
    $("#nombre, #mail, #mensaje").on("input", function () {
      validarCampo($(this));
    });
  
    // Enviar formulario
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
  
      let esValido = true;
  
      $("#nombre, #mail, #mensaje").each(function () {
        validarCampo($(this));
        if (!this.checkValidity()) {
          esValido = false;
        }
      });
  
      if (esValido) {
        $("#spinner").removeClass("d-none").fadeIn();
  
        setTimeout(() => {
          $("#spinner").fadeOut();
          $("#contactForm")[0].reset();
          $(".form-control").removeClass("is-valid");
          const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
          modal.show();
        }, 1500);
      }
    });
  });
  