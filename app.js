angular.module('landing',[
	'ngRoute',
	'ui.materialize',
	'ngStorage'
]);

angular.module('landing').constant('urls',{
	root:window.location.origin+window.location.pathname,
	api:window.location.origin+window.location.pathname.replace('/site/','/api/')+'api/'
});

angular.module('landing').run([
	'$location',
	function($location){

		$(window).scroll(function() {
          if ($(document).scrollTop() > 50) {
            $(".brand-logo-img").attr("src","images/discol_logo_blk.png");
            $(".dscl_nav").css("background-color", "#fff");
            $(".dscl_nav a").css("color", "#000");
          } else {
            $(".brand-logo-img").attr("src","images/discol_logo.png");
            $(".dscl_nav").css("background-color", "transparent");
            $(".dscl_nav a").css("color", "#fff");
          }
        });
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
		.when('/login',{
			templateUrl:'views/login.html',
			controller:'Login'
		})
		.when('/signup',{
			templateUrl:'views/signup.html',
			controller:'Login'
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
