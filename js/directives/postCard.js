angular.module('landing').directive('postCard',function(urls,embed){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/postCard.html',
		scope:{
			content: '=content'
		},
		controller:function($scope,$sce,LikeContentService){
			$scope.options = embed.options;
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
			$scope.saveLike = function(content){
				content.liking = true;
				if(content.doesThisUserLikesContent){
					Materialize.toast('You already likes this post of '+content.user.first_name, 4000);
					content.liking = false;
					return false;
				}
				LikeContentService.saveLike(content.id,function(res){
					content.liking = false;
					content.like_count = content.like_count+1;
					content.doesThisUserLikesContent = true;
					Materialize.toast('You have liked a post of '+content.user.first_name, 4000);
				},function(err){
					content.liking = false;
					Materialize.toast("Error: Sorry! you couldn't like the post. Try again.", 4000);
					content.savingComment=false;
				});

			};

		}
	};
});
