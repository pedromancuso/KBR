
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
  $('.flexslider').flexslider({
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


  consultoriaboton.addEventListener("click", consultoriain);
  consultoria.addEventListener("click", consultoriaout);
  function consultoriain(){
    document.getElementById("consultoria").style.display = "block";
    document.getElementById("detalle").style.display = "block";
    document.getElementById("service").style.display = "none";
    document.getElementById("consultoriai").className = "fa fa-arrow-left";
  }
  function consultoriaout(){
    document.getElementById("consultoria").style.display = "none";
    document.getElementById("detalle").style.display = "none";
    document.getElementById("service").style.display = "block";
    document.getElementById("consultoriai").className = "fa fa-laptop";
  }

  soporteboton.addEventListener("click", soportein);
  soporte.addEventListener("click", soporteout);
  function soportein(){
    document.getElementById("soporte").style.display = "block";
    document.getElementById("detalle").style.display = "block";
    document.getElementById("service").style.display = "none";
    document.getElementById("soportei").className = "fa fa-arrow-left";
  }
  function soporteout(){
    document.getElementById("soporte").style.display = "none";
    document.getElementById("detalle").style.display = "none";
    document.getElementById("service").style.display = "block";
    document.getElementById("soportei").className = "fa fa-cog";
  }

  telefoniaipboton.addEventListener("click", telefoniaipin);
  telefoniaip.addEventListener("click", telefoniaipout);
  function telefoniaipin(){
    document.getElementById("telefoniaip").style.display = "block";
    document.getElementById("detalle").style.display = "block";
    document.getElementById("service").style.display = "none";
    document.getElementById("telefoniaipi").className = "fa fa-arrow-left";
    document.getElementById("telefoniaipi").textContent = "";
  }
  function telefoniaipout(){
    document.getElementById("telefoniaip").style.display = "none";
    document.getElementById("detalle").style.display = "none";
    document.getElementById("service").style.display = "block";
    document.getElementById("telefoniaipi").className = "fa material-icons";
    document.getElementById("telefoniaipi").textContent = "settings_phone";
  }

  servidoresboton.addEventListener("click", servidoresin);
  servidores.addEventListener("click", servidoresout);
  function servidoresin(){
    document.getElementById("servidores").style.display = "block";
    document.getElementById("detalle").style.display = "block";
    document.getElementById("service").style.display = "none";
    document.getElementById("servidoresi").className = "fa fa-arrow-left";
  }
  function servidoresout(){
    document.getElementById("servidores").style.display = "none";
    document.getElementById("detalle").style.display = "none";
    document.getElementById("service").style.display = "block";
    document.getElementById("servidoresi").className = "fa fa-server";
  }

  redesboton.addEventListener("click", redesin);
  redes.addEventListener("click", redesout);
  function redesin(){
    document.getElementById("redes").style.display = "block";
    document.getElementById("detalle").style.display = "block";
    document.getElementById("service").style.display = "none";
    document.getElementById("redesi").className = "fa fa-arrow-left";
    document.getElementById("redesi").textContent = "";
  }
  function redesout(){
    document.getElementById("redes").style.display = "none";
    document.getElementById("detalle").style.display = "none";
    document.getElementById("service").style.display = "block";
    document.getElementById("redesi").className = "fa material-icons";
    document.getElementById("redesi").textContent = "router";
  }

  desarrollosboton.addEventListener("click", desarrollosin);
  desarrollos.addEventListener("click", desarrollosout);
  function desarrollosin(){
    document.getElementById("desarrollos").style.display = "block";
    document.getElementById("detalle").style.display = "block";
    document.getElementById("service").style.display = "none";
    document.getElementById("desarrollosi").className = "fa fa-arrow-left";
  }
  function desarrollosout(){
    document.getElementById("desarrollos").style.display = "none";
    document.getElementById("detalle").style.display = "none";
    document.getElementById("service").style.display = "block";
    document.getElementById("desarrollosi").className = "fa fa-code";
  }