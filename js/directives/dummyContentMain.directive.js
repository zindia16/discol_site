angular.module('landing').directive('dummyContentMain',function(urls){
	return{
		restrict: 'E',
		templateUrl : urls.root+'js/directives/templates/dummyContentMain.html'
	};
});
