angular.module('landing').directive('loader',function(urls){

	return {
		restrict:'E',
		templateUrl:urls.root+'js/directives/templates/loader.html',
		scope : {
			loaderText : '='
		},
		controller : function(){

		}
	};
});
