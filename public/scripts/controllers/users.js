'use strict';

angular.module('myapp')
  .controller('UsersCtrl', function ($scope, $http, $window) {

    var user, users, request;

    request = $http.post('/retrieve-user', user);

    request.success(function (data) {
        console.log(data.getUsers);
        $scope.users = data.getUsers;
        // localStorage.setItem("bucketlists", JSON.stringify(data.getBucketlists));
        // console.log(localStorage.getItem("bucketlists"));
        // var getBucketlists = localStorage.getItem("bucketlists");
        // $scope.myBucketlists = JSON.parse(getBucketlists);
        // console.log($scope.myBucketlists);
    });

    request.error(function (data) {
        console.log(data);
        console.log(data.getUsers);
    });

    $scope.createUser = function () {
      $scope.user = {
        email: $scope.email,
        role: $scope.role
      };

      console.log($scope.role);
      console.log($scope.email);

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

      console.log(email);
      console.log($scope.email);

      request = $http.post('/delete-user', $scope.email);

      request.success(function (data) {
          location.reload();
      });

      request.error(function (data) {
          console.log(data);
      });
    }
  });