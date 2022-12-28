$(".scroll").click(function() {
    var scrollTo = $(this).attr("href");
    $(".menu-collapsed").removeClass("menu-expanded");
    $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 'slow');
    return false;
});

$(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");

});

$(document).ready(function() {

    // $(".view-more").hide();
    $(".view-more").on('click', function() {
        $(this).text() === 'View Less' ? $(this).text('View More') : $(this).text('View Less');
        $("#sample").toggle("1000");
        var scrollTo = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(scrollTo).offset().top });
        return false;
        // var scrollTo = $(this).attr("href");
        // $('html, body').velocity({ scrollTop: $(scrollTo).offset().top });
        // return false;
    });

});


$('.image-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    draggable: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
});



$('.list-item').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.image-slider').slick('slickGoTo', slideno - 1);
});

$('.image-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.list-item').removeClass('selected');
    $('.list-item').eq(mySlideNumber).addClass('selected');
});