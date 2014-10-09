'use strict';

/**
 * @ngdoc function
 * @name epermitjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the epermitjsApp
 */
angular.module('epermitjsApp')

  .factory('socket', function ($rootScope) {
    var socket = io.connect();
  })

  .controller('WorkflowsCtrl', function ($scope) {

    $scope.workflows = [
        {
            name: 'express1asdfasfasfsa',
            url: 'http://localhost:3000/workflows/good.json',
            status: 'NOK',
            lastUpdated: '2014-10-03',
            duration: '1 second'
        },
        {
            name: 'express2',
            url: 'http://localhost:3000/workflows/wferror.json',
            status: 'NOK',
            lastUpdated: '2014-10-03',
            duration: '500 millisecond'
        },
        {
            name: 'express3',
            url: 'http://localhost:3000/workflows/error.json',
            status: 'NOK',
            lastUpdated: '2014-10-03',
            duration: '14 seconds'
        }
    ];

  });
