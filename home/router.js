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
							urls.root+'js/controllers/content.controller.js'
						]
					});
				}]
			}
		})
		.when('/dashboard',{
			templateUrl:"views/dashboard.html",
			resolve:{
				dep:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'homeDep',
						files:[
							urls.root+'js/directives/editSetting.directive.js'
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
							urls.root+'js/controllers/post.controller.js'
						]
					});
				}]
			}
		})
		.when('/post/new',{
			templateUrl:"views/newPost.html",
			controller:'Post',
			resolve:{
				dep:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'homeDep',
						files:[
							urls.root+'js/controllers/post.controller.js'
						]
					});
				}]
			}
		})
		.when('/people/:userId',{
			templateUrl:"views/people/index.html",
			//controller:'People',
			resolve:{
				dep:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'homeDep',
						files:[
							urls.root+'js/directives/editSetting.directive.js'
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
