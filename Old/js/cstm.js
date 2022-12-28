$(".scroll").click(function() {
    var scrollTo = $(this).attr("href");
    $(".menu-collapsed").removeClass("menu-expanded");
    $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 'slow');
    return false;
});

$(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");

});


$('.image-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    draggable: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    arrow: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
});



$('.skills-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    draggable: false,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    autoplay: true,
    autoplaySpeed: 1000,
    arrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
            },
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
            },
        },
    ],
});


