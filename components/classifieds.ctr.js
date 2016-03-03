(function(){

	"use strict";
	
	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory){		
			classifiedsFactory.getClassifieds().then(function(classifieds){
				$scope.classifieds = classifieds.data;
				// classifieds.data - because from the file we receive the  "classifieds" object,
				// and this object has the "data" property: a collection of our 6 ads
			});

			$scope.name = {
				first: 'Roman',
				last: 'Kaye'
			};
			
			$scope.meta = {
				visibleTitle : "ngClassifieds"
			};

			$scope.message = {
				title: "Directive comes from app.js", 
				para: "Value of the message in the directive comes from ctr file"
			};

		});

	
})();