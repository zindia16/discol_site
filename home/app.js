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
	'$location','$localStorage','$http','urls',
	function($location,$localStorage,$http,urls){
		if($localStorage.token){
			$http.defaults.headers.common.Authorization = 'Basic ' + $localStorage.token;
		}else{
			window.location.replace(urls.root+'#!/login');
		}
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
							urls.root+'js/directives/contentCard.js',
							urls.root+'js/services/content.service.js',
							urls.root+'js/controllers/content.controller.js'
						]
					});
				}]
			}
		})
		.when('/posts',{
			templateUrl:"views/posts.html",
			controller:'Posts',
			resolve:{
				dep:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'homeDep',
						files:[
							urls.root+'js/directives/contentCard.js',
							urls.root+'js/services/content.service.js',
							urls.root+'js/controllers/posts.controller.js'
						]
					});
				}]
			}
		})
		.when('/posts/:id',{
			templateUrl:"views/post.html",
			controller:'Post',
			resolve:{
				dep:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'homeDep',
						files:[
							urls.root+'js/directives/postCard.js',
							urls.root+'js/directives/userInfo.js',
							urls.root+'js/directives/commentsCard.js',
							urls.root+'js/services/content.service.js',
							urls.root+'js/services/comment.service.js',
							urls.root+'js/controllers/post.controller.js'
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
	'$scope','$rootScope','$location','$localStorage','urls',
	function($scope,$rootScope,$location,$localStorage,urls){
		console.log(urls);
		$scope.getClass = function (path) {
		  	return ($location.path().substr(0, path.length) === path) ? 'active' : '';
		};

		$rootScope.logout = function(){
			$localStorage.$reset();
			window.location.replace(urls.root+'#!/login');
		};
	}
]);
