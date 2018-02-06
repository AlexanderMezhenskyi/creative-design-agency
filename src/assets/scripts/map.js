function initMap() {
    let coordinates = {lat: 49.8312867, lng: 24.0233621};
    let mapContainer = document.querySelector('#map');
    let map = new google.maps.Map(mapContainer, {
        center: coordinates,
        zoom: 15,
        disableDefaultUI: false,
        scrollwheel: false
    });

    google.maps.event.addDomListener(window, "resize", function () {
        let center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    })
}