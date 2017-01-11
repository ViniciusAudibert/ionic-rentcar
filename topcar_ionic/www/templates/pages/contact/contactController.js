angular.module('contact', [])

.controller('contactController', function($scope, $state) {

var map;

$scope.$on('$ionicView.enter', function() {
  if (navigator.onLine) {
    $scope.showMap = true;

    document.getElementById("side-menu").style.visibility = 'hidden';

    var divMap = document.getElementById("map-contact");
    map = plugin.google.maps.Map.getMap(divMap);
    map.addEventListener(plugin.google.maps.event.MAP_READY, initContactMap);
  } else {
    $scope.showMap = false;
  }
});

function initContactMap() {

  map.animateCamera({
    target: {lat: -29.292456, lng: -51.496178},
    zoom: 17,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }, function() {

    map.addMarker({
      position: {lat: -29.292456, lng: -51.496178},
      title: "Topcar RS",
      snippet: "Loja",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {

      marker.showInfoWindow();
    });
  });
  document.getElementById("side-menu").style.visibility = '';
}

$scope.refreshPage = function() {
  $state.go($state.current, {}, {reload: true});
};

});
