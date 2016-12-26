angular.module('landing',[
	'ngRoute',
	'ui.materialize',
	'ngStorage',
	'oc.lazyLoad'
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
	'$routeProvider','$locationProvider','$ocLazyLoadProvider','urls',
	function($routeProvider,$locationProvider,$ocLazyLoadProvider,urls){
		$ocLazyLoadProvider.config({
			debug:true
		});
		$routeProvider
		.when('/',{
			templateUrl:"views/landing.html",
			controller:'Content',
			resolve:{
				dep:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'homeDep',
						files:[
							urls.root+'js/services/content.service.js',
							urls.root+'js/controllers/content.controller.js'
						]
					});
				}]
			}
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
