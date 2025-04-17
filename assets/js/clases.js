$(document).ready(function(){
    var $grid = $('.gallery').masonry({
        itemSelector: '.image-item',
        columnWidth: '.image-item',
        percentPosition: true
    });

    $(".filter").click(function() {
        var filterValue = $(this).data("filter");  
        
        if(filterValue == "all") {
            $(".image-item").show();
        } else {
            $(".image-item").hide();
            $("." + filterValue).show();
        }

        $grid.masonry('layout');
    });
});

setTimeout(function () {
  $grid.masonry('reloadItems');
  $grid.masonry('layout');
}, 100); 

