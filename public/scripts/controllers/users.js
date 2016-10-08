'use strict';

angular.module('myapp')
  .controller('UsersCtrl', function ($scope, $http, $window) {

    var user,
      createUser;

    var request = $http.post('/retrieve-user', user);

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
  });