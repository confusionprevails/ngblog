'use strict';

/**
 * @ngdoc overview
 * @name myblogApp
 * @description
 * # myblogApp
 *
 * Main module of the application.
 */
angular
  .module('myblogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch','ui.router','hc.marked'/*'btford.markdown'*/
  ])
  .config(function ($stateProvider, $urlRouterProvider, $routeProvider, markedProvider) {

        markedProvider.setOptions({
            gfm: true,
            tables: true,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        });

        $stateProvider

            .state('about', {
                url: "/about",
                templateUrl: "views/about.html",
                controller: 'AboutCtrl'
            })
            .state('default', {
                url: "/q",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'


            })
            .state('q2', {
                url: "/q/:category/:slug",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'


            })
            .state('q', {
                url: "/q/:category",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'


            })

            ;
        $urlRouterProvider.otherwise("/q");


  });
