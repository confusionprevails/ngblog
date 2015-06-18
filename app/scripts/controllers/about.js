'use strict';

/**
 * @ngdoc function
 * @name myblogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myblogApp
 */
angular.module('myblogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
