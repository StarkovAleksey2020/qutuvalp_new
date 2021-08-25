$(document).ready(function () {
  (function ($) {
    $.fn.rotate = function (deg) {
      this.css({ transform: "rotate(" + deg + "deg)" });
      this.css({ "-ms-transform": "rotate(" + deg + "deg)" });
      this.css({ "-moz-transform": "rotate(" + deg + "deg)" });
      this.css({ "-o-transform": "rotate(" + deg + "deg)" });
      this.css({ "-webkit-transform": "rotate(" + deg + "deg)" });
      this.css("transition-duration", "0.25s");
      return this;
    };
    $.fn.transitMenuItem = function (coefficient) {
      this.css({ transform: "translateX(" + coefficient * 3 + "px)" });
      this.css("transition-duration", 0.03 * coefficient + "s");
      return this;
    };
    $.fn.transitAndRotateItem = function (x, y, deg, delay) {
      this.css({ transform: "translateX(" + x + "px)" });
      this.css({ transform: "translateY(" + y + "px)" });
      this.css({ "-ms-transform": "rotate(" + deg + "deg)" });
      this.css({ "-moz-transform": "rotate(" + deg + "deg)" });
      this.css({ "-o-transform": "rotate(" + deg + "deg)" });
      //      this.css({ "-webkit-transform": "rotate(" + deg + "deg)" });
      this.css("transition-duration", delay + "s");
      return this;
    };
  })(jQuery);

  let toggleBtn = $(".header-menu-btn");
  let menuBtn = $(".header-menu-btn");
  let menuSpanSecond = $(".header-menu-item--second");
  let isMenuClicked = false;
  const photoPartnering = $(".main-image");

  toggleBtn.on("click", function (e) {
    if (!isMenuClicked) {
      $(".header-menu-btn-item").css("margin-bottom", "0");
      $(".header-menu-btn-item--second").css("margin-bottom", "0");
      $(".header-menu-btn-item--second").css("top", "-8px");
      $(".header-menu-btn-item").rotate(45);
      $(".header-menu-btn-item--second").rotate(135);
      $(".header-menu").css("opacity", "1");
      $(".header-menu-item--0").transitMenuItem(5);
      $(".header-menu-item--1").transitMenuItem(8);
      $(".header-menu-item--2").transitMenuItem(11);
      $(".header-menu-item--3").transitMenuItem(14);
      $(".header-menu-item--4").transitMenuItem(17);
    } else {
      $(".header-menu-btn-item").css("margin-bottom", "10px");
      $(".header-menu-btn-item--second").css("margin-bottom", "10px");
      $(".header-menu-btn-item--second").css("top", "0");
      $(".header-menu-btn-item").rotate(0);
      $(".header-menu-btn-item--second").rotate(0);
      $(".header-menu-item--0").transitMenuItem(-5);
      $(".header-menu-item--1").transitMenuItem(-8);
      $(".header-menu-item--2").transitMenuItem(-11);
      $(".header-menu-item--3").transitMenuItem(-14);
      $(".header-menu-item--4").transitMenuItem(-17);
      setTimeout(function () {
        $(".header-menu").css("opacity", "0");
      }, 500);
    }
    isMenuClicked = !isMenuClicked;
  });

  $(photoPartnering).transitAndRotateItem(300, 20, -2, 0.15);
  $(photoPartnering).on("mouseover", function (e) {
    photoPartnering.rotate(2);
  });
  $(photoPartnering).on("mouseleave", function (e) {
    photoPartnering.rotate(-2);
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $(".offers-bg-scroll").bgscroll({
    direction: "bottom", // направление bottom или top
    bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
    debug: false, // Режим отладки
    min: 0, // минимальное положение (в %) на которое может смещаться фон
    max: 100, // максимальное положение (в %) на которое может смещаться фон
  });
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
});
