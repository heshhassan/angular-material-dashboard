'use strict';

/**
 * @ngdoc overview
 * @name frontEndApp
 * @description
 * # frontEndApp
 *
 * Main module of the application.
 */
angular
  .module('frontEndApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngFileUpload',
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/awards', {
        templateUrl: 'views/awards.html',
        controller: 'AwardsCtrl',
        controllerAs: 'Awards'
      })
      .when('/websocket', {
        templateUrl: 'views/websocket.html',
        controller: 'websocketCtrl',
        controllerAs: 'websocket'
      })
      .when('/approval', {
        templateUrl: 'views/approval.html',
        controller: 'ApprovalCtrl',
        controllerAs: 'approval'
      })
      .when('/user-accounts', {
        templateUrl: 'views/user-accounts.html',
        controller: 'userAccountsCtrl',
        controllerAs: 'userAccounts'
      })
      .when('/submit-logos', {
        templateUrl: 'views/submit-logos.html',
        controller: 'submitLogosCtrl',
        controllerAs: 'submitLogos'
      })
      .when('/extras', {
        templateUrl: 'views/extras.html',
        controller: 'ExtrasCtrl',
        controllerAs: 'Extras'
      })
      .when('/', {
        templateUrl: 'views/awards.html',
        controller: 'AwardsCtrl',
        controllerAs: 'Awards'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
