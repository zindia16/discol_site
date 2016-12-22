angular.module('landing').directive('beforeLoginNav',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/beforeLoginNav.html'
	};
});
