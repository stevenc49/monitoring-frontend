'use strict';

angular.module('epermitjsApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.applications = [
      {
        appId: 1,
        revId: 0,
        status: null,
        activity: 'Well',
        proponents: "test1"
      },
      {
        appId: 2,
        revId: 0,
        status: null,
        activity: 'Pipeline',
        proponents: "test2"
      },
      {
        appId: 3,
        revId: 0,
        status: null,
        activity: 'Well, Pipeline',
        proponents: "test3"
      }
    ];
  });
