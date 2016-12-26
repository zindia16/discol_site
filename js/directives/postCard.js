angular.module('landing').directive('postCard',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/postCard.html',
		scope:{
			content: '=content'
		},
		controller:function($scope,$sce){
			$scope.getContentBg = function(contentType){
				switch(contentType){
					case 'post':
						return "light-blue darken-1";
					case 'idea':
						return "amber lighten-1";
				}
			};

			$scope.getContentIcon = function(contentType){
				switch(contentType){
					case 'idea':
						return $sce.trustAsHtml('<i class="material-icons amber-text text-lighten-1 valign">wb_incandescent</i>');
					case 'post':
						return $sce.trustAsHtml('<i class="material-icons light-blue-text text-darken-1 valign">send</i>');
				}
			};
		}
	};
});
