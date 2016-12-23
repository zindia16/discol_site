angular.module('landing',[
	'ngRoute',
	'ui.materialize',
	'ngStorage'
]);

angular.module('landing').constant('urls',{
	root:window.location.origin+window.location.pathname.replace('/home/','/'),
	api:window.location.origin+window.location.pathname.replace('/site/home/','/api/')+'api/'
});

angular.module('landing').run([
	'$location',
	function($location){

	}
]);

angular.module('landing').config([
	'$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider){
		$routeProvider
		.when('/',{
			templateUrl:"views/landing.html",
			controller:'Main'
		})
		.otherwise({
			redirectTo:'/'
		});

		// configure html5 to remove #!
  		$locationProvider.html5Mode(false);
	}
]);

angular.module('landing').controller('Main',[
	'$scope','$rootScope','urls',
	function($scope,$rootScope,urls){
		console.log(urls);
	}
]);
