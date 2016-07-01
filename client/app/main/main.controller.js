'use strict';

(function() {

  class MainController {

    constructor($http, uiGmapGoogleMapApi) {
      var vm = this;

      vm.control = {};
      vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      vm.rows = {};

      $http.get('assets/results.json').success(function(data){
        angular.extend(vm.rows, data.rows);

        uiGmapGoogleMapApi.then(function(maps) {
          var Gmap = vm.control.getGMap();

          var ne = new google.maps.LatLng({lat: data.bounds.n, lng: data.bounds.e});
          var sw = new google.maps.LatLng({lat: data.bounds.s, lng: data.bounds.w});
          Gmap.fitBounds(new google.maps.LatLngBounds(sw, ne));
        });
      }).error(function(error) {
        console.log('error: ' + error);
      });



    }
  }

  angular.module('frontendExpertTestApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm',
    });
})();
