

	$(".scroll").click(function() {
		var scrollTo = $(this).attr("href");
		$('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 'slow');
        return false;
	});

	$('.mark-nav').on('click', function() {
        if ($('.animated-icon1').hasClass('open')) {
            
            $('.animated-icon1').removeClass('open');
        } else {
            $('.animated-icon1').addClass('open');
            $('header').addClass('classy-header');
        }

    });

	$(document).ready(function(){
		$('header').removeClass('classy-header');
		window.onscroll = function() {
			if ($(window).scrollTop()) {
				$('header').addClass('classy-header');
			} else {
				$('header').removeClass('classy-header');
			}
        };
        
        
        $(".tab-image").fadeOut('slow');
        $(".tab-image.open").fadeIn('slow');
        $(".portfolio__tab").click(function() {
            $(".tab-image").fadeOut('slow');
            var openTab = $(this).attr("href");
            $(openTab).fadeIn('slow');
    
            $('.portfolio__tab').removeClass("active");
            $(this).addClass("active");
        });
        
        $(".view__all").click(function(){
            $("#sample").toggle("fast");
            var scrollTo = $(this).attr("href");
            $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 'slow');
            return false;
        });
    });
            
    $('.single-item').slick({
        slidesToShow: 1,
        autoplaySpeed: 6500,
        autoplay: false,
        pauseOnHover: true,
        dots: true,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        // prevArrow: '<div class="slick-prev"></div>',
        // nextArrow: '<div class="slick-next"></div>',
        // arrows: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]

    });
