document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('googleMap')) {
        initMap();
    }
});

function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(45.76216417577449, 15.960886003427122), // Koordinate za Glogovečka 2D
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: { lat: 45.76216417577449, lng: 15.960886003427122 }, // Koordinate za Glogovečka 2D
        map: map,
        title: "Autopraonica San Marco"
    });
}
