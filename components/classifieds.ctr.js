(function(){

	"use strict";
	
	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
			// whenever we want new bells and whistles, we INJECT relevant MD SERVICES here
			var vm = this;
			vm.openSidebar = openSidebar;
			vm.closeSidebar = closeSidebar;
			vm.saveClassified = saveClassified;
			vm.editClassified = editClassified;
			vm.saveEdit = saveEdit;
			vm.deleteClassified = deleteClassified;
			vm.classifieds;
			vm.classified;
			vm.categories;
			vm.editing;

			function getCategories(classifieds){
				var categories = [];
				angular.forEach(classifieds, function(item){
					angular.forEach(item.categories, function(category){
						categories.push(category);
					});
				});
				return _.uniq(categories);
			}
			
			classifiedsFactory.getClassifieds().then(function(classifieds){
				vm.classifieds = classifieds.data;
				vm.categories = getCategories(vm.classifieds);
			});

			var contact = {
				name : "Joe Doe",
				phone : "555 555 5555",
				email : "mail@sever.com"
			}

			function showToast(message){
				$mdToast.show(
					$mdToast.simple()
						.content(message)
						.position('top, left') // any combination of bottom left top
						.hideDelay(3000)
				);
			}
			
			function saveClassified(classified){
				if (classified){ // prevent entirely blank entries
					classified.contact = contact;
					// hard-coded dummy image for new ads:
					classified.image = "http://i2.cdn.turner.com/money/dam/assets/160310114036-trump-mortgage-website-780x439.jpg",
					vm.classifieds.push(classified);
					vm.classified = {}; // empty the input form
					vm.closeSidebar();
					showToast("Ad saved!");
				}
			}
			
			function editClassified(classified){
				vm.editing = true;
				openSidebar();
				vm.classified = classified;
			}

			function saveEdit(classified){
				vm.editing = false;
				vm.classified = {}; // empty the input form
				closeSidebar();
				// $scope.classifieds.push(classified);
				showToast("Edit saved!");
			}

			function deleteClassified(event, classified){
				var confirm = $mdDialog.confirm()
					.title('Are you sure you want to delete ' + classified.title + ' ad?')
					.ok('Yes')
					.cancel('No')
					.targetEvent(event);
				$mdDialog.show(confirm).then(function(){
					var index = vm.classifieds.indexOf(classified);
					vm.classifieds.splice(index, 1);
					showToast("And just like that — the ad is gone!");
				}, function(){
					// what happens if we click No
				});
			}


			function openSidebar(){
				$mdSidenav('left').open();
			}
			function closeSidebar(){
				$mdSidenav('left').close();
			}

/*
			$scope.message = {
				title: "Directive comes from app.js", 
				para: "Value of the message in the directive comes from ctr file"
			}
*/
		});

	
})();