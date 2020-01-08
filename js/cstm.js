$(".scroll").click(function() {
    var scrollTo = $(this).attr("href");
    $(".menu-collapsed").removeClass("menu-expanded");
    $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 'slow');
    return false;
});

$(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");

});


$(".view-more").click(function() {
    $("#sample").toggle("1000");
    var scrollTo = $(this).attr("href");
    $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 'slow');
    return false;
});

$('.image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    draggable: false,
    // fade: true,
    speed: 500,
    cssEase: 'ease-in-out',
    touchThreshold: 100
});

$('.list-item').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.image-slider').slick('slickGoTo', slideno - 1);


    $('.list-item').removeClass('selected');
    $(this).addClass('selected');

});