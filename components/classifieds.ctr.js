(function(){

	"use strict";
	
	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav){		
			classifiedsFactory.getClassifieds().then(function(classifieds){
				$scope.classifieds = classifieds.data;
			});
			
			$scope.saveClassified = function(classified){
				if (classified){
					$scope.classifieds.push(classified);
					$scope.classified = {}; // empty the input form
					$scope.closeSidebar();
					
				}
			}


			$scope.openSidebar = function(){
				$mdSidenav('left').open();
			}
			$scope.closeSidebar = function(){
				$mdSidenav('left').close();
			}
			
			$scope.meta = {
				visibleTitle : "ngClassifieds"
			}
/*
			$scope.message = {
				title: "Directive comes from app.js", 
				para: "Value of the message in the directive comes from ctr file"
			}
*/
		});

	
})();