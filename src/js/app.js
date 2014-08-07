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
