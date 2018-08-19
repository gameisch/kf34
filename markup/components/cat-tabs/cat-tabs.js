$(document).ready(function () {
    let cat = $('.cat-tabs'),
        catLinks = $('.cat-tabs-links');

    let catSlider = new Swiper('.cat-tabs-wrapper .swiper-container', {
        slidesPerView: 1,
        loop: false,
        centeredSlides: false,
        spaceBetween: 0,
        pagination: {
            el: '.cat-tabs-dots',
            clickable: true
        },
        paginationClickable: true,
        mousewheelControl: true,
        autoHeight: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }

    });
    $('.swiper-container').on('mouseenter', function () {
        catSlider.autoplay.stop();
    });
    $('.swiper-container').on('mouseleave', function () {
        catSlider.autoplay.start();
    });

    catSlider.on('slideChange', function () {
        catLinks.find('span.active').removeClass('active');
        catLinks.find('span[data-cat=' + catSlider.realIndex + ']').addClass('active');
    });


    if (cat.length > 0) {
        catLinks.find('span').click(function () {
            let catid = $(this).data('cat');
            catSlider.slideTo(catid, 450);
            catLinks.find('span.active').removeClass('active');
            $(this).addClass('active');
        });
    }
});
