'use strict';

var eventsApp = angular.module('eventsApp');

eventsApp.controller('HelloCtrl',
  function ($scope) {

    $scope.name = 'World';
    console.log($scope.$parent);

  }
);
