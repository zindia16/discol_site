angular.module('landing').directive('userInfo',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/userInfo.html',
		scope:{
			user: '=user'
		},
		controller:function($scope,$sce){
			
		}
	};
});
