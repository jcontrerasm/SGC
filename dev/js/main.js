/*-----------------------------------------
    Iniciando WOW
 ------------------------------------------*/

$(function() {
	new WOW().init();
});

/*-----------------------------------------
    Ocultar y mostrar boton de arriba
 ------------------------------------------*/

$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".btn-arriba").fadeIn();
        } else {
            $(".btn-arriba").fadeOut();
        }
    });
});

/*-----------------------------------------
    Iniciamos smoothScroll (Scroll Suave)
 ------------------------------------------*/

smoothScroll.init({
    speed: 1000,
    offset: 60
});

/*-----------------------------------------
    Iniciamos datetimepicker
 ------------------------------------------*/

$(function() {
    $('#fecha_nacimiento').datetimepicker({
        viewMode: 'years',
        format: 'YYYY/MM/DD'
    });
});

/*-----------------------------------------
    Active de páginas
 ------------------------------------------*/

$(function() {
    var ruta = window.location;
    var ruta_base = 'http://localhost:8000/dist/modulo_general/';
    
    if(ruta == ruta_base + 'index.html' || ruta == ruta_base){
        $('#index').addClass('active');
    }

    if(ruta == ruta_base + 'cursos.html'){
        $('#cursos').addClass('active');
    }

    if(ruta == ruta_base + 'contacto.html'){
        $('#contacto').addClass('active');
    }

    if(ruta == ruta_base + 'registro.html'){
        $('#registro').addClass('active');
    }

});
