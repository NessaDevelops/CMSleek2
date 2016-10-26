'use strict';

angular.module('myapp')
  .controller('UsersCtrl', function ($scope, $http, $window, $cookieStore) {

    var user, users, request, currentUser;

    $scope.currentUser = $cookieStore.get('user');

    request = $http.post('/retrieve-all-users', user);

    request.success(function (data) {
        console.log(data.getUsers);
        $scope.users = data.getUsers;
    });

    request.error(function (data) {
        console.log(data);
    });

    $scope.createUser = function () {
      var myRole = document.getElementById("role").value;
      $scope.user = {
        email: $scope.email,
        role: myRole
      };

      request = $http.post('/create-user', $scope.user);

      request.success(function (data) {
          location.href = "http://localhost:3000/users";
      });

      request.error(function (data) {
          console.log(data);
      });
    }

    $scope.deleteUser = function (email) {
      $scope.email = {
        email: email
      };

      request = $http.post('/delete-user', $scope.email);

      request.success(function (data) {
          location.reload();
      });

      request.error(function (data) {
          console.log(data);
      });
    }
  });