angular.module('app', [])

.controller('appController', function($scope, $ionicModal, $timeout) {
  $scope.menuItems = [
    {name: 'Inicio', urlName: 'home'},
    {name: 'Catálogo', urlName: 'catalog'},
    {name: 'Favoritos', urlName: 'favorites'},
    {name: 'Novidades', urlName: 'news'},
    {name: 'Serviços', urlName: 'services'},
    {name: 'Contato', urlName: 'contact'}
  ];
});