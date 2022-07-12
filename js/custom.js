var user = "admin@";
var pass = "admin";

/*
// google map
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(40.7679619,-73.9800172),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

// Flexslider
$(function(){
  /* FlexSlider */
/* $('.flexslider').flexslider({
     animation: "fade",
     directionNav: false
 });

 new WOW().init();

 loadGoogleMap();
});

// isotope
jQuery(document).ready(function($){

 if ( $('.iso-box-wrapper').length > 0 ) { 

     var $container  = $('.iso-box-wrapper'), 
       $imgs     = $('.iso-box img');

     $container.imagesLoaded(function () {

       $container.isotope({
       layoutMode: 'fitRows',
       itemSelector: '.iso-box'
       });

       $imgs.load(function(){
         $container.isotope('reLayout');
       })

     });

     //filter items on button click
     $('.filter-wrapper li a').click(function(){

         var $this = $(this), filterValue = $this.attr('data-filter');

     $container.isotope({ 
       filter: filterValue,
       animationOptions: { 
           duration: 750, 
           easing: 'linear', 
           queue: false, 
       }                
     });             

     // don't proceed if already selected 
     if ( $this.hasClass('selected') ) { 
       return false; 
     }

     var filter_wrapper = $this.closest('.filter-wrapper');
     filter_wrapper.find('.selected').removeClass('selected');
     $this.addClass('selected');

       return false;
     }); 

 }

});

// Hide mobile menu after clicking on a link
   $('.navbar-collapse a').click(function(){
       $(".navbar-collapse").collapse('hide');
   });

//jQuery for page scrolling feature - requires jQuery Easing plugin
   $(function() {
       $('.navbar-default a, a,').bind('click', function(event) {
           var $anchor = $(this);
           $('html, body').stop().animate({
               scrollTop: $($anchor.attr('href')).offset().top - 68
           }, 1000);
           event.preventDefault();
       });
   });

*/
consultoriaboton.addEventListener("click", consultoriain);
consultoria.addEventListener("click", consultoriaout);
function consultoriain() {
  document.getElementById("consultoria").style.display = "block";
  document.getElementById("detalle").style.display = "block";
  document.getElementById("service").style.display = "none";
  document.getElementById("consultoriai").className = "fa fa-arrow-left";
}
function consultoriaout() {
  document.getElementById("consultoria").style.display = "none";
  document.getElementById("detalle").style.display = "none";
  document.getElementById("service").style.display = "block";
  document.getElementById("consultoriai").className = "fa fa-laptop";
}

soporteboton.addEventListener("click", soportein);
soporte.addEventListener("click", soporteout);
function soportein() {
  document.getElementById("soporte").style.display = "block";
  document.getElementById("detalle").style.display = "block";
  document.getElementById("service").style.display = "none";
  document.getElementById("soportei").className = "fa fa-arrow-left";
}
function soporteout() {
  document.getElementById("soporte").style.display = "none";
  document.getElementById("detalle").style.display = "none";
  document.getElementById("service").style.display = "block";
  document.getElementById("soportei").className = "fa fa-cog";
}

telefoniaipboton.addEventListener("click", telefoniaipin);
telefoniaip.addEventListener("click", telefoniaipout);
function telefoniaipin() {
  document.getElementById("telefoniaip").style.display = "block";
  document.getElementById("detalle").style.display = "block";
  document.getElementById("service").style.display = "none";
  document.getElementById("telefoniaipi").className = "fa fa-arrow-left";
  document.getElementById("telefoniaipi").textContent = "";
}
function telefoniaipout() {
  document.getElementById("telefoniaip").style.display = "none";
  document.getElementById("detalle").style.display = "none";
  document.getElementById("service").style.display = "block";
  document.getElementById("telefoniaipi").className = "fa material-icons";
  document.getElementById("telefoniaipi").textContent = "settings_phone";
}

servidoresboton.addEventListener("click", servidoresin);
servidores.addEventListener("click", servidoresout);
function servidoresin() {
  document.getElementById("servidores").style.display = "block";
  document.getElementById("detalle").style.display = "block";
  document.getElementById("service").style.display = "none";
  document.getElementById("servidoresi").className = "fa fa-arrow-left";
}
function servidoresout() {
  document.getElementById("servidores").style.display = "none";
  document.getElementById("detalle").style.display = "none";
  document.getElementById("service").style.display = "block";
  document.getElementById("servidoresi").className = "fa fa-server";
}

redesboton.addEventListener("click", redesin);
redes.addEventListener("click", redesout);
function redesin() {
  document.getElementById("redes").style.display = "block";
  document.getElementById("detalle").style.display = "block";
  document.getElementById("service").style.display = "none";
  document.getElementById("redesi").className = "fa fa-arrow-left";
  document.getElementById("redesi").textContent = "";
}
function redesout() {
  document.getElementById("redes").style.display = "none";
  document.getElementById("detalle").style.display = "none";
  document.getElementById("service").style.display = "block";
  document.getElementById("redesi").className = "fa material-icons";
  document.getElementById("redesi").textContent = "router";
}

desarrollosboton.addEventListener("click", desarrollosin);
desarrollos.addEventListener("click", desarrollosout);
function desarrollosin() {
  document.getElementById("desarrollos").style.display = "block";
  document.getElementById("detalle").style.display = "block";
  document.getElementById("service").style.display = "none";
  document.getElementById("desarrollosi").className = "fa fa-arrow-left";
}
function desarrollosout() {
  document.getElementById("desarrollos").style.display = "none";
  document.getElementById("detalle").style.display = "none";
  document.getElementById("service").style.display = "block";
  document.getElementById("desarrollosi").className = "fa fa-code";
}
//document.getElementById('login').addEventListener('click', accion);

// function accion() {
//   var val = document.getElementById("usuario").value;
//   document.getElementById("requisito").innerHTML = val.lastIndexOf("@");

//   if (val.lastIndexOf("@") <= 0) {
//     document.getElementById("requisito").innerHTML = "No pusiste un correo válido";

//   } else {
//     document.getElementById("requisito").innerHTML = "El correo es válido";
//   }

//   console.log(val.lastIndexOf("@"));
// }

var logged = false;
document.getElementById('login').addEventListener('click', accion1);
function accion1() {
  var val = document.getElementById("usuario").value;
  //document.getElementById("requisito").innerHTML = val.lastIndexOf("@");

  // if (val == user) {
  //   document.getElementById("requisito").innerHTML = "Usuario Correcto";

  // } else {
  //   document.getElementById("requisito").innerHTML = "Usuario Incorrecto";
  //   var errores = 1;
  //   console.log(errores);
  // }

  console.log(val);
}

document.getElementById('login').addEventListener('click', accion2);
function accion2() {
  var val = document.getElementById("contraseña").value;
  //document.getElementById("requisito").innerHTML = val.lastIndexOf("@");

  // if (val == pass) {
  //   document.getElementById("requisito2").innerHTML = "Contraseña Correcta";
  //   console.log(logged);
  // } else {
  //   document.getElementById("requisito2").innerHTML = "Contraseña Incorrecta";

  // }

  console.log(val);
}

// Get the modal
var modal = document.getElementById("modal-login");
// Get the button that opens the modal
var btn = document.getElementById("login-boton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "inline-block";
  modal2.style.display = "none";
  //var x = document.createElement("IFRAME");
 // x.setAttribute("dummyframe", id = "dummyframe");
 // document.body.appendChild(x);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal2
var modal2 = document.getElementById("modal-ticket");
// Get the button that opens the modal
var btn2 = document.getElementById("ticket-boton");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event2) {
  if (event2.target == modal2) {
    modal2.style.display = "none";
  }
}

//var prueba = document.getElementById("login-boton");
//prueba.onclick= function agus() {
//alert("Hello! I am an alert box!");
// console.log("agus");
// var x = document.createElement("IFRAME");
// x.setAttribute("dummyframe", id="dummyframe");
//  document.body.appendChild(x);

//}

function clickCounter() {

  //document.getElementById('login').addEventListener('click', accion2);
  //function accion2() {
  var val = document.getElementById("contraseña").value;
  //document.getElementById("requisito").innerHTML = val.lastIndexOf("@");
  if (val == pass) {
    //document.getElementById("requisito2").innerHTML = "Contraseña Correcta";
    var val = document.getElementById("usuario").value;
    if (val != user) {
      var error = 1;
      if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
          sessionStorage.clickcount = Number(sessionStorage.clickcount) + error;
        } else {
          sessionStorage.clickcount = -1;
        }
        var intentos = 2 - (sessionStorage.clickcount) - 1;
        document.getElementById("result").innerHTML = "Te quedan " + intentos + " intentos.";
        if (intentos <= 0) {
          modal.style.display = "none";
        }
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
    } else {
      sessionStorage.clear();
      var error = 0;
      logged = true;
      const myTimeout = setTimeout(myGreeting, 2000);
      function myGreeting() {
        modal.style.display = "none";
        document.getElementById("login-boton").innerHTML = "LOGOUT";
        document.getElementById("login-boton").style.color = "red";
        document.getElementById('login-boton').addEventListener('click', accion22);
        function accion22() {
          document.getElementById('usuario').value = '';
          document.getElementById('contraseña').value = '';
          document.getElementById("login-boton").innerHTML = "LOGIN";
          document.getElementById("login-boton").style.color = "";
          document.getElementById("requisito").innerHTML = "El usuario es el mail registrado";
          document.getElementById("requisito2").innerHTML = "Debe incluir alguna mayúscula y número";
          document.getElementById("result").innerHTML = "";
          if (logged) {
            modal.style.display = "none";
          }
          logged = false;
        }
      }
    }

  } else {
    var error = 1;
    if (typeof (Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + error;
      } else {
        sessionStorage.clickcount = -1;
      }
      var intentos = 2 - (sessionStorage.clickcount) - 1;
      document.getElementById("result").innerHTML = "Te quedan " + intentos + " intentos.";
      if (intentos == 0) {
        modal.style.display = "none";
      }
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

}

document.getElementById('ticket-enviar').addEventListener('click', accion3);
function accion3() {
  document.getElementById('nombre-ticket').value = '';
  document.getElementById('cuerpo-ticket').value = '';
  //document.getElementById("requisito").innerHTML = "Defina el Ticket";
  //document.getElementById("requisito2").innerHTML = "Breve descripción del ticket";
}

// document.getElementById('regis').addEventListener('click', accion44);
// function accion44() {
//   const myTimeout = setTimeout(myGreeting2, 1000);
//   function myGreeting2() {
//   document.getElementById('uname').value = '';
//   document.getElementById('psw2').value = '';
//   }

// }

var regist = document.getElementById('registrar');
function registrar(){
  alert("Las contraseñas deben ser iguales");
}




// 1. añadir texto que diga ingrese credenciales check
// 2. añadir input y leyendas que correspondan placeholders (el input de la contraseña que no se vea) check
// 3. añadir un boton que envíe los valores de los imput a una función check
// 4. si las credenciales ingresadas son las correctas, mostar mensaje de exito sino lo contrario check
// 5. poner un contador de fracaso y si llegó al máximo cerrar el modal
// 6. si las credenciales son correctas cerrar el modal luego del mens

// 7. evitar redirección (obtener resultado de php en la misma pagina o en modal)
// 8. crear, leer, actualizar, modficiar y eliminar usuarios a la base de datos
// 9. poner contraseña a la base de datos al usuario root
//10. si el ingreso es correcto, crear un alert que diga: "bienvenido y el nombre del usuario"
//11. 
