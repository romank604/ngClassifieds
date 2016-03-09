angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(function($mdThemingProvider){
		$mdThemingProvider.theme("default")
			.primaryPalette("indigo")
			.accentPalette("orange");


	})
	.directive("oogaBooga", function(){
		return {
			// camelCase name gets converted to ooga-booga (kebab-case)
			// Here we return an object known as
			// the directive definition object
			template: "<h1>{{ message.title }}</h1><p>{{ message.para }}</p>"
		}
	});

/*
<!--
MVC:
	Separate concerns (logic, presentation, behaviour)
	Smaller units
	Best for working in teams
	Keep code DRY = don't repeat yourself
		Controller connects Model and View
	Angular is MV*, where * = an agnostic "Whatever".
	
	
	
Digging into controllers	
	Scope is the glue that connects the controller and the view

Two-way data-binding

Dependency injection is not specific to Angular.
	It's about how functions are created and handled.
	We inject dependencies by passing them as parameters to the callback in the controller/directive/service

Directives
	Directives are markers in HTML that can come in the form of the element names (<ooga-booga />) or attributes and their values (ng-controller="classifiedsCtrl" or could be special class). Directives describe the behavior of the elements they refer to. Directives are defined with directive definition objects.
	
	E.g. built-in
		<md-toolbar></md-toolbar>
		<md-button></md-button>
	or a custom
		<hello-world></hello-world>


Data API
	Back end is self-contained
	Front end is self-contained
	Two machines: one in the browser, the other on the server
	RESTful API
		RESTful = we can dig deeper. Kinda like dot-notation-API.

HTTP Requests and Promises
	
Services and Factories
	Factory needs to return an object
	
-->

*/