// Esta función sirve para opacar el backgrond del navbar
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});

// Esta función sirve para opacar el background del menú desplegable al apretar el botón hamburguesa
$("#btn-nav").click(function(){
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});

// Esta función sirve para hacer desaparecer la bienvenida del contacto 
// y aparecer el formulario de contacto
$("#btn-comenzar").click(function(){
    $("#pre-formulario").removeClass( "d-flex" ).addClass( "d-none" );
    $("#formulario").removeClass( "d-none" ).addClass( "d-flex" );
});

// Disponibilizar Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
