angular.module('landing').directive('contentCard',function(urls,embed){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/contentCard.html',
		scope:{
			content: '=content'
		},
		controller:function($scope,$sce,$timeout,$interval,CommentService,UserService){
			$interval(function(){
				$scope.currentTime = new Date();
			},1000);

			$scope.options=embed.options;

			$scope.user = $scope.user || null;
			var setDefaultPic = function(){
				if(!$scope.user.cover_image){
					$scope.user.cover_image = "../images/background3.jpg";
				}
				if(!$scope.user.profile_picture){
					$scope.user.profile_picture = "../images/peep01.jpg";
				}
			};

			if(!$scope.user){
				if(UserService.authUser()){
					$scope.user=UserService.authUser();
					setDefaultPic();
				}else{
					UserService.getAuthUser(function(res){
						$scope.user=res.user;
						setDefaultPic();
					},function(err){
						console.log(err);
					});
				}
			}

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

			$scope.loadComments = function(content){
				content.showComments = true;
				content.loadingComments =true;
				CommentService.getComments(content.id,function(res){
					$timeout(function(){
						content.comments = res.comments;
						content.loadingComments =false;
					},0);
				},function(err){
					content.loadingComments =false;
				});
			};

			$scope.saveComment = function(content){
				var data={
					contentId:content.id,
					text:content.newComment
				};
				content.savingComment=true;
				CommentService.saveComment(data,function(res){
					content.newComment ="";
					$scope.loadComments(content);
					Materialize.toast('Your comment was successful!', 4000);
					content.savingComment=false;
					$scope.$broadcast('commentSaved');
				},function(err){
					Materialize.toast("Error: Sorry! your comment wasn't successful. Try again.", 4000);
					content.savingComment=false;
				});
			};
		}
	};
});
