'use strict';

angular.module('myapp')
  .controller('LoginCtrl', function ($scope, $http, $window, $cookieStore) {

    var request, loggedIn;

    // STORING ROLE PERMISSIONS IN SCOPE
    if ($cookieStore.get('user') != undefined) {
        $scope.userControl = $cookieStore.get('user').userControl;
        $scope.pageControl = $cookieStore.get('user').pageControl;
        $scope.editPages = $cookieStore.get('user').editPages;
    } else {
        $scope.userControl = false;
        $scope.pageControl = false;
        $scope.editPages = false;
    }

    // STORING PAGE CONTROL PERMISSION IN COOKIE STORE SO ABLE TO ACCESS IN PAGES CTRL
    $cookieStore.put('pageControl', $scope.pageControl);

    $scope.loggedIn = $cookieStore.get("loggedIn");

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
        $scope.userControl = false;
        $scope.pageControl = false;
        $scope.editPages = false;
        location.href = "http://localhost:3000/login";
    }
  });