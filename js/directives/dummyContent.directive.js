angular.module('landing').directive('dummyContent',function(urls){
	return{
		restrict: 'E',
		templateUrl : urls.root+'js/directives/templates/dummyContent.html'
	};
});
