'use strict';

angular.module('frontendExpertTestApp', ['frontendExpertTestApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps'
  ])
  .config(function($urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCn3aSpuApGYsXiCAxLopbg9ws4iv3Vb-Q',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  });
