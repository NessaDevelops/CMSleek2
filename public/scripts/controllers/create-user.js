'use strict';

angular.module('myapp')
  .controller('CreateUserCtrl', function ($scope, $http, $window) {

    var user,
      createUser;

    $scope.createUser = createUser = {};

    createUser.user = user = {};

    createUser.submit = function () {

      console.log(user);

      // var request = $http.post('/signup', user);

      // request.success(function (data) {
      //   console.log(data);

      //   var request2 = $http.post('/addAchievements', user);

      //   request2.success(function (data) {
      //     console.log(data);
      //   });

      //   request2.error(function (data) {
      //     console.log(data);
      //   });

      //   $window.location.href = '#/signup-success';
      //   console.log('here2');
      // });

      // request.error(function (data) {
      //   console.log(data);
      //   console.log('there2');
      // })
    };
  });
