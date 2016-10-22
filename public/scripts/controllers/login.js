'use strict';

angular.module('myapp')
  .controller('LoginCtrl', function ($scope, $http, $window, $cookieStore) {

    var request, loggedIn;

    $scope.loggedIn = $cookieStore.get("loggedIn");
    console.log($scope.loggedIn);

    $scope.login = function () {
      $scope.user = {
        email: $scope.email,
        password: $scope.password
      };

      request = $http.post('/retrieve-user', $scope.user);

      request.success(function (data) {
          $cookieStore.put('user', data.getUser);
          $cookieStore.put("loggedIn", true);
          location.href = "http://localhost:3000/users";
      });

      request.error(function (data) {
          console.log(data);
      });
    }

    $scope.logout = function () {
        $cookieStore.remove("user");
        $cookieStore.put("loggedIn", false);
        location.href = "http://localhost:3000/users";
    }
  });