'use strict';

// var angular = require('angular');
require('angular-cookies');

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute']);

// CONTROLLERS ----------------------------------------------------------------
require('./config');

// HELLO WORD -----------------------------------------------------------------
require('./HelloWorld/controllers/helloWorldCtrl.js');


// DIRECTIVES -----------------------------------------------------------------
// require('./controllers/SampleDirectiveController');


// FILTERS --------------------------------------------------------------------
// require('./filters');


// SERVICES -------------------------------------------------------------------
// require('./services/calendarHelper');


// CONTROLLERS À LÁ CARTE
// Quick code snippets to be removed or placed in proper places

eventsApp.controller('WorldCtrl',
  function ($scope) {
    $scope.worldPopulation = 700;
    $scope.countries = [
      { name: 'France', population: 63.1 },
      { name: 'United Kingdom', population: 61.8 },
    ];

    $scope.worldPercentage = function (countryPopulation) {
      return (countryPopulation / $scope.worldPopulation) * 100;
    }
  }
);
