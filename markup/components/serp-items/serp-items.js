// function gup(name) {
//     name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
//     let regexS = '[\\?&]' + name + '=([^&#]*)';
//     let regex = new RegExp(regexS);
//     let results = regex.exec(window.location.href);
//     if (results === null) {
//         return results;
//     } else {
//         return results[1];
//     }
// }

// function sendRange(value, type) {
//     let res = gup(type);
//     if (res) {
//         location.href = location.href.replace(res, value);
//     } else {
//         if (window.location.href.indexOf('?') === -1) {
//             location.href += '?' + type + '=' + value;
//         } else {
//             location.href += '&' + type + '=' + value;
//         }
//     }
// }
// Nothing to do...
// .serp-filter__checks.serp-filter__checks--hidens / a(href="#").serp-filter__more See more...
$(document).ready(function () {
    const price = $('#price_range');
        // year = $('#year_range');
    const minPrice = price.data('from'),
        maxPrice = price.data('to');

        // minYear = year.data('from'),
        // maxYear = year.data('to');
    console.log(minPrice, maxPrice);
    // price.ionRangeSlider({
    //     type: 'double',
    //     min: minPrice,
    //     max: maxPrice,
    //     prefix: '$',
    //     'hide_min_max': true,
    //     'hide_from_to': false,
    //     grid: false,
    //     onFinish: function (data) {
    //         // console.log(data.from, data.to);
    //         sendRange(data.from + ';' + data.to, 'price');
    //     }
    // });

    // year.ionRangeSlider({
    //     type: 'double',
    //     min: minYear,
    //     max: maxYear,
    //     'hide_min_max': true,
    //     'hide_from_to': false,
    //     grid: false,
    //     onFinish: function (data) {
    //         // console.log(data.from, data.to);
    //         sendRange(data.from + ';' + data.to, 'year');
    //     }
    // });
});
// function find(array, value) {
//     if (array.indexOf) {
//         return array.indexOf(value);
//     }
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return i;
//         }
//     }
//
//     return -1;
// }
//
// $(document).on('change', '.serp-filter__checkbox', function (e) {
//     e.preventDefault();
//
//     let category = [];
//     let i = 0;
//
//     $('.serp-filter__checkbox input[type="checkbox"]:checked').each(function () {
//         category[i] = $(this).val();
//         console.log($(this).val());
//         i++;
//     });
//
//     let link = location.href;
//     link = link.split('&');
//     let flag = false;
//
//     for (let o = 0; o < link.length; o++) {
//         let page = find(link[o].split('=')[0], 'brand');
//         if (page !== -1) {
//             // let flag = true;
//             let index = o;
//         }
//     }
//
//     if (flag === true) {
//         link[index] = 'brand=' + category;
//         location.href = link.join('&');
//     } else {
//         location.href = location.href + '&brand=' + category;
//     }
//
// });
