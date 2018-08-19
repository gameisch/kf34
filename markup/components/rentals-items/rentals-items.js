$(document).ready(function () {
    const $rbut = $('.top-re');
    const $requestItemBut = $('.rentals-item__request, .serp-item__request');
    const $childField = $('#radio-quote input[type="radio"]');
    $('.field-show').hide();
    $('.req').hide();
    $('.hidden').hide();
    $('.subhidden').hide();
    $('.subsubhidden').hide();
    $rbut.on('click', function (event) {
        $('.req').css('display', 'flex');
        event.stopPropagation();
        var $this = $(this);
        if ($this.data('clicked', true)) {
            console.log('clicked rbut true');
            $childField.on('click', function () {
                var valRent = $(this).val();
                if (valRent === 'Purchase') {
                    console.log('top button if check purchase true');
                    $('.field-dis').hide();
                    $('.field-show').css('display', 'flex');
                    $('.req').css('display', 'flex');
                    $('#rent_some2').attr('checked', 'checked');
                } else {
                    console.log('top button else purchase');
                    $('.req').css('display', 'flex');
                    $('.field-dis').css('display', 'flex');
                    $('.field-show').hide();
                    $('#rent_some2').attr('checked', false);
                }
                if (valRent === 'Rent') {
                    console.log('top button if check rent true');
                    $('#rent_some1').attr('checked', 'checked');
                } else {
                    console.log('top button else rent');
                    $('#rent_some1').attr('checked', false);
                }
            });
        }
    });
    $requestItemBut.on('click', function (event) {
        event.stopPropagation();
        console.log('clicked requestBut true');
        $childField.on('click', function () {
            var valRent = $(this).val();
            if (valRent === 'Purchase') {
                console.log('requestBut if check purchase true');
                $('.req').hide();
                $('.hidden').hide();
                $('.subhidden').hide();
                $('.subsubhidden').hide();
                $('.field-dis').hide();
                $('.field-show').css('display', 'flex');
                $('#rent_some2').attr('checked', 'checked');
            } else {
                console.log('requestBut else purchase');
                $('.field-dis').css('display', 'flex');
                $('.field-show').hide();
                $('#rent_some2').attr('checked', false);
            }
            if (valRent === 'Rent') {
                console.log('requestBut if check rent true');
                $('#rent_some1').attr('checked', 'checked');
                $('.req').hide();
                $('.hidden').hide();
                $('.subhidden').hide();
                $('.subsubhidden').hide();
            } else {
                console.log('requestBut else rent true');
                $('#rent_some1').attr('checked', false);
            }
        });
    });

});
