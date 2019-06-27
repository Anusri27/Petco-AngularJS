
'use strict';
var app = angular.module('mypet',[]).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'pages/ap.html',
          controller: 'HomeCtrl', 
          activetab: 'pets'}).
        when('/foster', {
          templateUrl: 'pages/foster.html',
          controller: 'FCtrl',
          activetab: 'foster'
        }).
        when('/about', {
          templateUrl: 'pages/about.html',
          controller: 'AbtCtrl',
          activetab: 'About'
        }).
        when('/contact', {
          templateUrl: 'pages/infocontactus.html',
          controller: 'ConCtrl',
          activetab: 'Contactus'
        }).
        otherwise({ redirectTo: '/' });
    }])
app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);
