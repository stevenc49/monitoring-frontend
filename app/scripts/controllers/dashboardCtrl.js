'use strict';

angular.module('epermitjsApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.applications = [
      {
        appId: 1,
        revId: 0,
        status: null,
        activity: 'Well',
        proponent: "test1"
      },
      {
        appId: 2,
        revId: 0,
        status: null,
        activity: 'Pipeline',
        proponent: "test2"
      },
      {
        appId: 3,
        revId: 0,
        status: null,
        activity: 'Well, Pipeline',
        proponent: "test3"
      }
    ];

$scope.users = [{name: "Moroni", age: 50},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34}];

  });
