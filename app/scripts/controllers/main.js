'use strict';

/**
 * @ngdoc function
 * @name epermitjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the epermitjsApp
 */
angular.module('epermitjsApp')
  .controller('MainCtrl', function ($scope) {

    $scope.services = [
		{
			name: 'ArcGIS Rest Services',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'Geocortex Workflows (check each individually)',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'Geocortex Display Dev Pretty',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'Pretty Base Layer',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'Client Base Layer (roads, forestry, agriculture, etc)',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'ePermit Frontend Dev',
			status: 'NOK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'ePermit Frontend Test',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'ePermit Geoproc Engine Dev',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'ePermit Geoproc Engine Test',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'ePay',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'Dev Database',
			status: 'OK',
			lastUpdated: '2014-10-03'
		},
		{
			name: 'Test Database',
			status: 'OK',
			lastUpdated: '2014-10-03'
		}
	];

  });