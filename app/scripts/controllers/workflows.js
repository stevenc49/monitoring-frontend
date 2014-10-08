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
            name: 'express1',
            url: 'http://localhost:3000/workflows/good.json',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'express2',
            url: 'http://localhost:3000/workflows/wferror.json',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'express3',
            url: 'http://localhost:3000/workflows/error.json',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'test_geo',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'EPermitSearch',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingAlrWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'localGovernmentJurisdictionWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'outsidePrrdNrrdIndicatorWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'fnCommunityInNebcWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'fnCommunityNoticeOnlyWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'fnCommunityOutNebcWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'forestDistrictWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'geoBcgsMapsheetWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'geoCrownLengthAndTotalAreaWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'geoPrivateLengthAndTotalAreaWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingIndianReserveWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingLandActAgrLeaseWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingLandActExcAgrLeaseWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingLandActLicenseWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingLandActPermitWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
                {
            name: 'areaOverlappingLandActReserveWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingLandActStatRightOfWayWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingOtherFederalLandWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'landAoUntenuredCrLandWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'landCrownLandTypeWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'landTotalApplicationAreaWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'overviewOgcZoneWf',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaEstablishedByOgcWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaEstablishedByOrderWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'areaOverlappingParkWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'mkmaIntersectWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'preTenureMkmaIntersectWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'resourceManagementZoneWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        },
        {
            name: 'wellBcgsMapsheetsWf',
            url: '#/workflows',
            status: 'NOK',
            lastUpdated: '2014-10-03'
        }
    ];

  });
