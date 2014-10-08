'use strict';

/**
 * @ngdoc overview
 * @name epermitjsApp
 * @description
 * # epermitjsApp
 *
 * Main module of the application.
 */

//var app = angular.module('epermitjsApp', [])
angular.module('epermitjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/workflows', {
        templateUrl: 'views/workflows.html',
        controller: 'WorkflowsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
);

