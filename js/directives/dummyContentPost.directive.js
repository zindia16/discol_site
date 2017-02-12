angular.module('landing').directive('dummyContentPost',function(urls){
	return{
		restrict: 'E',
		templateUrl : urls.root+'js/directives/templates/dummyContentPost.html'
	};
});
