angular.module('landing').directive('commentsCard',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/commentsCard.html',
		scope:{
			contentid: '='
		},
		controller:function($scope,$sce,$timeout,CommentService){
			$scope.commentsLoaded = false;
			CommentService.getComments($scope.contentid,function(res){
				$timeout(function(){
					$scope.commentsLoaded = true;
					$scope.comments=res.comments;
				},0);
			},function(err){
				$scope.commentsLoaded = true;
				console.log(err);
			});
		}
	};
});
