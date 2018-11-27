function initMap() {
    var styles = [{
        featureType: 'all',
        elementType: 'all',
        stylers: [{saturation: '-100'}, {gamma: '1.34'}, {lightness: '0'}, {weight: '0.96'}]
    }];
    var styledMap = new google.maps.StyledMapType(styles, {
        name: 'Styled Map'
    });
    var centerMap = {lat: 41.8781136, lng: -87.6297982};
    var locations = [
        ['Franklin Park, IL', 41.936016, -87.879195, 4],
        ['East Hazel Crest, IL', 41.575799, -87.650273, 5],
        ['National Battery of Chicago', 41.936016, -87.879195, 3],
        ['Little Rock, AR', 34.725432, -92.358556, 2],
        ['Springdale, AR', 36.186549, -94.15304, 1],
        ['Memphis, TN', 35.103543, -89.978498, 6],
        ['Jackson, TN', 35.649137, -88.830597, 7]
    ];
    var mapProp = {
        center: centerMap,
        zoom: 5,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        panControl: false,
        overviewMapControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'), mapProp);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    marker = [];
    var markers = [];
    var list = $('.locations__list');
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: '/static/img/content/place.png',
            animation: google.maps.Animation.DROP
        });
        const locFunc = google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                var link = document.getElementsByClassName('locations__listItem');
                window.setTimeout( function () {
                    map.panTo(marker.getPosition(locations[i][1], locations[i][2]));
                }, 1300);
                map.setZoom(7);
                for (var q = 0; q < link.length; q++) {
                    var status = link[q].getAttribute('data-marker');
                    if ( status === locations[i][0] ) {
                        // console.log(status, locations[i][0]);
                        $('.locations__listItem').removeClass('green_place');
                        $(link[q]).addClass('green_place');
                        $(list).scrollTo(link[q], 500);
                    }
                }
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon('/static/img/content/place.png');
                    map.setZoom(5);
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);

                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                    }
                }
                marker.setIcon('/static/img/content/place_green.png');

            };
        })(marker, i));
        markers.push(marker);
        marker.setAnimation(null);
    }
    marker.setMap(map);
    map.panTo(marker.position);
    function changeMarkerPos(lat, lon) {
        for (i = 0; i < locations.length; i++) {
            myLatLng = new google.maps.LatLng(lat, lon);
            marker.setPosition(myLatLng);
            map.panTo(myLatLng);
            marker.setIcon('/static/img/content/place_green.png');
            map.setZoom(7);
            map.setCenter(marker.getPosition());
        }
    }
    // for (l = 0; l < locations.length; l++) {
        // console.log(locations[l][0]);
    $('.locations__listItem').on('click', function () {
        var id = this.id;
        // var block = $('.hover[data-id="#' + id + '"]');
        // block.css('display', 'block');
        if (id === locations[l][id]) {
            // changeMarkerPos(41.936016, -87.879195);
            $(id).addClass('green_place');
            $(this).nextAll('.locations__listItem').removeClass('green_place');
            $(this).prevAll('.locations__listItem').removeClass('green_place');
        }
        console.log(id);
    });
    // }
    // $('.locations__listItem').on('click', function () {
    //     var $this = $(this).attr('id');
    //     if ($this === 'mark1') {
    //         changeMarkerPos(41.936016, -87.879195);
    //         $('#mark1').addClass('green_place');
    //         $(this).nextAll('.locations__listItem').removeClass('green_place');
    //         $(this).prevAll('.locations__listItem').removeClass('green_place');
    //     } else if ($this === 'mark2') {
    //         changeMarkerPos(41.575799, -87.650273);
    //         $('#mark2').addClass('green_place');
    //         $(this).nextAll('.locations__listItem').removeClass('green_place');
    //         $(this).prevAll('.locations__listItem').removeClass('green_place');
    //     } else if ($this === 'mark3') {
    //         changeMarkerPos(41.936016, -87.879195);
    //         $('#mark3').addClass('green_place');
    //         $(this).nextAll('.locations__listItem').removeClass('green_place');
    //         $(this).prevAll('.locations__listItem').removeClass('green_place');
    //     } else if ($this === 'mark4') {
    //         changeMarkerPos(34.725432, -92.358556);
    //         $('#mark4').addClass('green_place');
    //         $(this).nextAll('.locations__listItem').removeClass('green_place');
    //         $(this).prevAll('.locations__listItem').removeClass('green_place');
    //     } else if ($this === 'mark5') {
    //         changeMarkerPos(36.186549, -94.15304);
    //         $('#mark5').addClass('green_place');
    //         $(this).nextAll('.locations__listItem').removeClass('green_place');
    //         $(this).prevAll('.locations__listItem').removeClass('green_place');
    //     } else if ($this === 'mark6') {
    //         changeMarkerPos(35.103543, -89.978498);
    //         $('#mark6').addClass('green_place');
    //         $(this).nextAll('.locations__listItem').removeClass('green_place');
    //         $(this).prevAll('.locations__listItem').removeClass('green_place');
    //     } else if ($this === 'mark7') {
    //         changeMarkerPos(35.649137, -88.830597);
    //         $('#mark7').addClass('green_place');
    //         $(this).nextAll('.locations__listItem').removeClass('green_place');
    //         $(this).prevAll('.locations__listItem').removeClass('green_place');
    //     }
    //     return false;
    // });
}
// $(document).ready(function () {
//     if ($('#map').length > 0) {
//         $.post('/markup/static/misc/pins.json_',
//             {'action': 'getState'},
//             function (resp) {
//                 console.log('_AJAX INIT');
//                 initMap(JSON.parse(resp));
//             });
//     }
// });

// $.post('/admin-ajax.json', { 'action': 'getState' }, function (resp) {
    // console.log('_AJAX INIT');
    // initMap(JSON.parse(resp));
    // initMap();
// });
// initMap();





