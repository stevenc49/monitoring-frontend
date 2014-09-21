'use strict';

angular.module('epermitjsApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.test = 'test'
    $scope.applications = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
