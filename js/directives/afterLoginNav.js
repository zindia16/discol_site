angular.module('landing').directive('afterLoginNav',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/afterLoginNav.html'
	};
});
