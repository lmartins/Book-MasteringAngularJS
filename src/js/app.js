'use strict';

// var angular = require('angular');
require('angular-cookies');

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
  .config(function ($routeProvider) {

    $routeProvider.when('/about',
      {
        template: 'Hello World'
      }
    );
    $routeProvider.when('/newEvent',
      {
        templateUrl: '/templates/NewEvent.html',
        controller: 'EditEventController'
      }
    );
    $routeProvider.when('/events',
      {
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController',
        resolve: {
          events: function ($route, eventData) {
            return eventData.getAllEvents().$promise;
          }
        }
      }
    );
    $routeProvider.when('/editProfile',
      {
        templateUrl: 'templates/EditProfile.html',
        controller: 'EditProfileController'
      }
    );
    $routeProvider.when('/event/:eventId',
      {
        templateUrl: '/templates/EventDetails.html',
        controller: 'EventController',
        resolve: {
          event: function ($route, eventData) {
            return eventData.getEvent($route.current.pathParams.eventId).$promise;
          }
        }
      }
    );
    $routeProvider.otherwise({redirectTo: '/events'});
    // $locationProvider.html5Mode(true);
  })
  .factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', {capacity: 3})
  });

// CONTROLLERS ----------------------------------------------------------------
// require('./controllers/EventController');


// DIRECTIVES -----------------------------------------------------------------
// require('./controllers/SampleDirectiveController');


// FILTERS --------------------------------------------------------------------
// require('./filters');


// SERVICES -------------------------------------------------------------------
// require('./services/calendarHelper');
