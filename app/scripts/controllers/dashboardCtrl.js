'use strict';

angular.module('epermitjsApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.applications = [
      {
        appId: 1,
        revId: 0,
        status: null,
        activity: 'Well',
        proponent: 'test1'
      },
      {
        appId: 2,
        revId: 0,
        status: null,
        activity: 'Pipeline',
        proponent: 'test2'
      }
    ];

  });
