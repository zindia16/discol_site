angular.module('landing').directive('commentsCard',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/commentsCard.html',
		scope:{
			contentid: '='
		},
		controller:function($scope,$sce,$timeout,CommentService){
			$scope.commentsLoaded = false;
			var refreshComments =function(){
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
			};

			refreshComments();

			$scope.saveComment=function(text){
				var data={
					contentId:$scope.contentid,
					text:text
				};
				$scope.savingComment=true;
				CommentService.saveComment(data,function(res){
					$scope.newComment ="";
					refreshComments();
					Materialize.toast('Your comment was successful!', 4000);
					$scope.savingComment=false;
					$scope.$broadcast('commentSaved');
				},function(err){
					Materialize.toast("Error: Sorry! your comment wasn't successful. Try again.", 4000);
					$scope.savingComment=false;
				});
			};
		}
	};
});
