'use strict';

angular.module('myapp')
  .controller('PagesCtrl', function ($scope, $http, $window, $cookieStore) {

    tinymce.init({
        selector: '#myarea1',
        height: 230,
        plugins: 'link image code',
        relative_urls: false,
        content_css: [
            '//www.tinymce.com/css/codepen.min.css'
    ]
    });

    var page, pages, request, selectedPage, getContent;

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

      request = $http.post('/create-page', $scope.page);

      request.success(function (data) {
          location.href = "http://localhost:3000/pages";
      });

      request.error(function (data) {
          console.log(data);
      });
    }

    $scope.editPage = function (name, content) {
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

   $scope.savePage = function () {
        console.debug(tinyMCE.activeEditor.getContent());
        $scope.getContent = tinyMCE.activeEditor.getContent();

        $scope.newPage = {
            name: $scope.selectedPage.name,
            content: tinyMCE.activeEditor.getContent()
        }

        request = $http.post('/update-page', $scope.newPage);

        request.success(function (data) {
            location.href = "http://localhost:3000/pages";
        });

        request.error(function (data) {
            console.log(data);
        });
    }
  });