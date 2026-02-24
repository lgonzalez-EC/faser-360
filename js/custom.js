(function () {
  "use strict";

  var tinyslider = function () {
    var el = document.querySelectorAll(".testimonial-slider");

    if (el.length > 0) {
      var slider = tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: false,
        speed: 700,
        nav: true,
        controls: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
      });
    }
  };
  tinyslider();

  var sitePlusMinus = function () {
    var value,
      quantity = document.getElementsByClassName("quantity-container");

    function createBindings(quantityContainer) {
      var quantityAmount =
        quantityContainer.getElementsByClassName("quantity-amount")[0];
      var increase = quantityContainer.getElementsByClassName("increase")[0];
      var decrease = quantityContainer.getElementsByClassName("decrease")[0];
      increase.addEventListener("click", function (e) {
        increaseValue(e, quantityAmount);
      });
      decrease.addEventListener("click", function (e) {
        decreaseValue(e, quantityAmount);
      });
    }

    function init() {
      for (var i = 0; i < quantity.length; i++) {
        createBindings(quantity[i]);
      }
    }

    function increaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      quantityAmount.value = value;
    }

    function decreaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);
      value = isNaN(value) ? 0 : value;
      if (value > 0) value--;
      quantityAmount.value = value;
    }

    init();
  };
  sitePlusMinus();
})();

/* =====================================================
   SMART STICKY NAVBAR - Scroll Detection
===================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM cargado");

    var navbar = document.querySelector(".custom-navbar");

    if (!navbar) {
      return;
    }

    var lastScroll = 0;
    var scrollThreshold = 50;

    navbar.classList.add("navbar-sticky");
    navbar.classList.add("navbar-show");

    function handleScroll() {
      var currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll <= scrollThreshold) {
        navbar.classList.remove("navbar-hide");
        navbar.classList.add("navbar-show");
        lastScroll = currentScroll;
        return;
      }

      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        navbar.classList.add("navbar-hide");
        navbar.classList.remove("navbar-show");
      } else if (currentScroll < lastScroll) {
        navbar.classList.remove("navbar-hide");
        navbar.classList.add("navbar-show");
      }

      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  });
})();

/* =====================================================
   AOS (ANIMATE ON SCROLL) INITIALIZATION
===================================================== */
(function () {
  "use strict";

  // Inicializar AOS cuando el DOM esté listo
  document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 800, // Duración de la animación en ms
      easing: "ease-in-out", // Tipo de easing
      once: true, // La animación ocurre solo una vez
      offset: 100, // Offset desde el punto de activación
      delay: 0, // Delay global
      disable: false, // Deshabilitar en mobile: 'mobile', 'tablet', o false
    });
  });
})();
