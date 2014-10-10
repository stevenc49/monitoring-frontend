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

  })

  .controller('WorkflowsCtrl', function ($scope) {

    $scope.workflows = [
        {
            name: 'express1',
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



    ///////////////////////
    //  socket.io updates
    ///////////////////////
    var socket = io.connect('http://localhost:3000');

    socket.on('connect', function(){
        socket.on('event', function(data){});
    });

    socket.on('connected', function(msg){
        console.log('connected: ' + msg);
    });

    socket.on('start', function(msg){
        console.log('start: ' + msg);
        //console.log(JSON.stringify($scope.workflows[0]));
        //$scope.workflows[0].duration = Math.random();
    });

    socket.on('end', function(msg){
        console.log('end: ' + msg + " " + JSON.stringify($scope.workflows[0]));
        $scope.workflows[0].duration = Math.random();
    });


  });


