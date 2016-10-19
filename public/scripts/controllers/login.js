'use strict';

angular.module('myapp')
  .controller('LoginCtrl', function ($scope, $http, $window, $cookieStore) {

    var request;

    $scope.login = function () {
      $scope.user = {
        email: $scope.email,
        password: $scope.password
      };

      request = $http.post('/retrieve-user', $scope.user);

      request.success(function (data) {
          $cookieStore.put('user', data.getUser);
          location.href = "http://localhost:3000/users";
      });

      request.error(function (data) {
          console.log(data);
      });
    }
  });