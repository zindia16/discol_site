angular.module('landing').directive('newPostCard',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/newPostCard.html',
		scope:{
			content: '=content'
		},
		controller:function($scope,$sce,$location,ContentService){
			$scope.content.content_type="post";
			$scope.content.created=new Date();
			$scope.content.is_published=true;
			$scope.content.video_link="";

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

			$scope.savePost = function(content){
				console.log(content);

				var data = {
					content_type:'post',
					header_image_link:content.header_image_link,
					is_published:(content.is_published)?1:0,
					text:content.text,
					video_link:content.video_link
				};

				$scope.savingContent=true;
				ContentService.savePost(data,function(res){
					console.log(res);
					Materialize.toast('Your post was successful!', 4000);
					$scope.savingContent=false;
					$location.path('/posts/'+res.content.id);
				},function(err){
					Materialize.toast('Error! Your post saving failed!', 4000);
					$scope.savingContent=false;
				});
			};


		}
	};
});
