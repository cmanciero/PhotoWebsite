(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name jobPhotoApp
   * @description
   * # jobPhotoApp
   *
   * Main module of the application.
   */
  angular
    .module('jobPhotoApp', [
      'jobPhotoApp.utils',
      'jobPhotoApp.votingModule',
      'jobPhotoApp.professionModule',
      'jobPhotoApp.myAccountModule',
      'jobPhotoApp.signUpModule',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'LocalStorageModule'
    ])
    .config(function($routeProvider, localStorageServiceProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'modules/voting/views/voting.html',
          controller: 'VotingController'
        })
        .when('/myaccount', {
          templateUrl: 'modules/myaccount/views/myAccount.html',
          controller: 'MyAccountController'
        })
        .otherwise({
          redirectTo: '/'
        });

      localStorageServiceProvider.setPrefix('jobPhoto');
    });
})();