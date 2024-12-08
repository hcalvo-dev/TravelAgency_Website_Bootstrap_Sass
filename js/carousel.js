// Está función se ha extraído de ChatGpt

let resizeTimeout;

// Recuperar el estado inicial de hasReloaded desde localStorage o establecerlo en `false`
let hasReloaded = JSON.parse(localStorage.getItem("hasReloaded")) || false;

$(window).resize(function () {
  const windowWidth = $(window).width();

  clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(function () {
    if (windowWidth >= 760 && !hasReloaded) {
      hasReloaded = true;
      localStorage.setItem("hasReloaded", JSON.stringify(hasReloaded)); // Guardar estado en localStorage
      location.reload();
    } else if (windowWidth < 760 && hasReloaded) {
      hasReloaded = false;
      localStorage.setItem("hasReloaded", JSON.stringify(hasReloaded)); // Guardar estado en localStorage
      location.reload();
    }
  }, 200);
});

const multipleItemCarousel = document.querySelector("#carouselExampleCaptions");

if (window.matchMedia("(min-width:759px)").matches) {
  $(multipleItemCarousel).removeClass("slide");
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
    wrap: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("prev");
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}


