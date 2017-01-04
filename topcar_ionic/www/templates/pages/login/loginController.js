angular.module('login', [])

.controller('loginController', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    console.log('Acessando conta', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});