// Add your JavaScript

$(document).ready(function(){

  $('.splash').fadeOut(2000, function(){
    $('.splash').addClass('home-display');
    $('section').removeClass('container');
  });





 


});

var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
zoom: 14,
center: new google.maps.LatLng(-23.5559376,-46.6574013),
});
};

var x;
var y;

function markers () {
  new google.maps.Marker({
    position: new google.maps.LatLng(x, y),
    map: map
  });
};

function allMarkers () {
  for (var i=0; i < restaurantes.length; i++) {
    x = restaurantes[i]['latitude'];
    y = restaurantes[i]['longitude'];
    markers();
  }
};

window.onload = function(){
  initMap();
  allMarkers();
};
