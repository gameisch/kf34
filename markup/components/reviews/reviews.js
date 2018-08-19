$(document).ready(function () {
    let reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 25,
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        }
    });
});
