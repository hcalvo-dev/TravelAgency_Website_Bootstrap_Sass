let resizeTimeout;

function updateCarousel() {
  const windowWidth = $(window).width();
  const multipleItemCarousel = document.querySelector('#carouselExampleCaptions');
  const $carouselInner = $('.carousel-inner');

  if (windowWidth >= 760) {
    // Configuración para pantallas grandes
    $(multipleItemCarousel).removeClass('slide');

    const carouselWidth = $carouselInner[0].scrollWidth;
    const cardWidth = $('.carousel-item').outerWidth(true); // Incluye márgenes
    let scrollPosition = 0;

    // Resetear posición del scroll y eliminar eventos previos
    $carouselInner.scrollLeft(0);
    $('.carousel-control-next, .carousel-control-prev').off('click');

    // Configurar eventos para avanzar
    $('.carousel-control-next').on('click', function () {
      if (scrollPosition < carouselWidth - $carouselInner.width()) {
        scrollPosition += cardWidth;
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600);
      } else {
        // Volver al principio si está al final
        scrollPosition = 0;
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600);
      }
    });

    // Configurar eventos para retroceder
    $('.carousel-control-prev').on('click', function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600);
      } else {
        // Ir al final si está al principio
        scrollPosition = carouselWidth - $carouselInner.width();
        $carouselInner.animate({ scrollLeft: scrollPosition }, 600);
      }
    });
  } else {
    // Configuración para pantallas pequeñas
    $(multipleItemCarousel).addClass('slide');

    // Restablecer posición del scroll y eliminar eventos previos
    $carouselInner.scrollLeft(0);
    $('.carousel-control-next, .carousel-control-prev').off('click');
  }
}

// Ejecutar la configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', updateCarousel);
$(document).ready(updateCarousel);

// Actualizar el carrusel al redimensionar la ventana
$(window).resize(function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateCarousel, 200);
});
