$(document).ready(function () {
    let partTemplate = $('.inquiry-step__part').html();
    $('#addPart').click(function () {
        $('.inquiry-step__parts')
            .append('<div class="inquiry-step__part">' + partTemplate + '</div>')
            .find('.inquiry-step__part').last()
            .find('select').styler({selectSmartPositioning: false, locale: 'en'});
        // $('.inquiry-step__part:last-child').find('select').styler({selectSmartPositioning: false, locale: 'en'});
    });
});
