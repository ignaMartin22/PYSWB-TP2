$(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
  
    // Hover en fila
    $('#tablaPrecios tbody tr').hover(
      function () {
        $(this).addClass('highlight-row');
      },
      function () {
        $(this).removeClass('highlight-row');
      }
    );
  
    // Hover en columna
    $('#tablaPrecios td, #tablaPrecios th').hover(function () {
      const index = $(this).index();
      $('#tablaPrecios tr').each(function () {
        $(this).children().eq(index).addClass('highlight-col');
      });
    }, function () {
      const index = $(this).index();
      $('#tablaPrecios tr').each(function () {
        $(this).children().eq(index).removeClass('highlight-col');
      });
    });
  
    // Toggle mensual/anual
    $('#togglePrecio').on('change', function () {
      const esAnual = $(this).is(':checked');
      $('.precio').each(function () {
        const valor = esAnual ? $(this).data('anual') : $(this).data('mensual');
        const unidad = esAnual ? 'año' : 'mes';
        $(this).text(`$${valor} / ${unidad}`);
      });
    });
  });
  