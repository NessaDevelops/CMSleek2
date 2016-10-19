'use strict';

angular.module('myapp')
  .controller('PagesCtrl', function ($scope, $http, $window, $cookieStore) {

    var page, pages, request, selectedPage;

    console.log($cookieStore.get("selectedPage"));
    $scope.selectedPage = $cookieStore.get("selectedPage");

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

    $scope.editPage = function (name) {
        var content = "";
        console.log($cookieStore.get("selectedPage"));
        if($scope.selectedPage.content != "" || null) {
            content = $scope.selectedPage.content;
        }
        $scope.selectedPage = {
            name: name,
            content: content
        }

        $cookieStore.put("selectedPage", $scope.selectedPage);
        location.href = "http://localhost:3000/edit-page";
    }

    $scope.deletePage = function (name) {
      $scope.page = {
        name: name
      };

      request = $http.post('/delete-page', $scope.page);

      request.success(function (data) {
          location.reload();
      });

      request.error(function (data) {
          console.log(data);
      });
    }

    $scope.submitEdit = function () {
        var name = $scope.selectedPage.name;
        $scope.selectedPage = {
            name: name,
            content: content.value
        };
        
        $cookieStore.put("selectedPage", $scope.selectedPage);
        location.href = "http://localhost:3000/pages";
    }
  });