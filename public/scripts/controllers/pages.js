'use strict';

angular.module('myapp')
  .controller('PagesCtrl', function ($scope, $http, $window) {

    var page, pages, request;

    request = $http.post('/retrieve-page', page);

    request.success(function (data) {
        console.log(data.getPages);
        $scope.pages = data.getPages;
        // localStorage.setItem("bucketlists", JSON.stringify(data.getBucketlists));
        // console.log(localStorage.getItem("bucketlists"));
        // var getBucketlists = localStorage.getItem("bucketlists");
        // $scope.myBucketlists = JSON.parse(getBucketlists);
        // console.log($scope.myBucketlists);
    });

    request.error(function (data) {
        console.log(data);
        console.log(data.getPages);
    });

    $scope.createPage = function () {
      $scope.page = {
        name: $scope.name,
        website: $scope.website
      };

      console.log($scope.page);
      console.log($scope.website);

      request = $http.post('/create-page', $scope.page);

      request.success(function (data) {
          location.href = "http://localhost:3000/pages";
      });

      request.error(function (data) {
          console.log(data);
      });
    }

    $scope.deletePage = function (name, website) {
      $scope.page = {
        name: name,
        website: website
      };

      console.log($scope.page);

      request = $http.post('/delete-page', $scope.page);

      request.success(function (data) {
          location.reload();
      });

      request.error(function (data) {
          console.log(data);
      });
    }
  });