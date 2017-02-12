angular.module('landing').directive('dummyContentPosts',function(urls){
	return{
		restrict: 'E',
		templateUrl : urls.root+'js/directives/templates/dummyContentPosts.html'
	};
});
