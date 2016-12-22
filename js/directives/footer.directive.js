angular.module('landing').directive('footerCustom',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/footer.html'
	};
});
