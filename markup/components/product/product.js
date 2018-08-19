$(document).ready(function () {
    if ($('.product-info__image--mobile').length > 0) {
        let mobileSlider = new Swiper('.product-info__image--mobile', {
            init: false,
            autoHeight: true,
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
        $(window).resize(function () {
            if ($(window).width() < 768) {
                mobileSlider.init();
            }
        });
    }


    $('.gallery-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        asNavFor: '.gallery-thumbs',
        adaptiveHeight: true
    });
    $('.gallery-thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-top',
        infinite: false,
        arrows: false,
        centerPadding: '15px',
        focusOnSelect: true
    });

    $('.product-form input[name="r1"]').on('change', function () {
        let val = $(this).val(), $pur = $('.if-purchase');
        if (val === 'Purchase') {
            $pur.hide();
        } else {
            $pur.show();
        }
    });
    $('.product-form__control').click(function () {
        $(this).parents('.product-form__field').find('input').focus();
        $(this).parents('.product-form__field').find('.jq-selectbox__select').click();
    });


    // $('.modal-form').parsley().on('field:validated', function () {
    //     let ok = $('.parsley-error').length === 0;
    //     console.log(ok);
    // })
    //     .on('form:submit', function () {
    //         return false; // Don't submit form for this demo
    //     });
});
