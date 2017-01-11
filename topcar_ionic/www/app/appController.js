angular.module('app', [])

.controller('appController', function($scope, $ionicModal, $timeout, $state, $ionicHistory) {
  $scope.menuItems = [
    {name: 'Inicio', urlName: 'home'},
    {name: 'Catálogo', urlName: 'catalog'},
    {name: 'Favoritos', urlName: 'favorites'},
    {name: 'Novidades', urlName: 'news'},
    {name: 'Serviços', urlName: 'services'},
    {name: 'Contato', urlName: 'contact'}
  ];
  $scope.goTo = function (path, isBack) {
    $ionicHistory.nextViewOptions({
      disableBack: typeof(isBack) === 'undefined' ? false : isBack
    });

    $state.go(path);
  };
});