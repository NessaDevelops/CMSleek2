'use strict';

angular.module('myapp')
  .controller('PagesCtrl', function ($scope, $http, $window) {

    var page, pages, request;

    request = $http.post('/retrieve-page', page);

    request.success(function (data) {
        console.log(data.getPages);
        $scope.pages = data.getPages;
    });

    request.error(function (data) {
        console.log(data);
        console.log(data.getPages);
    });

    $scope.createPage = function () {
      $scope.page = {
        name: $scope.name
      };

      console.log($scope.page);

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
        name: name
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