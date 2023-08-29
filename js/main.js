$(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $(".menu a, .go-top, .header__icon").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
