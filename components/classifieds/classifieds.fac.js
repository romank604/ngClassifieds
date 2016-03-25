(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .factory('classifiedsFactory', function($http, $firebaseArray) {
/*
      function getClassifieds() {
        return $http.get('data/classifieds.json');
      }
      return {
        getClassifieds: getClassifieds
      }
*/
	  var ref = new Firebase('https://nglcassi.firebaseio.com/');
	  return{
		  ref: $firebaseArray(ref)
	  }

    });
    
})();