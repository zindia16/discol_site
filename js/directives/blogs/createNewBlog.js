angular.module('landing').directive('createNewBlog',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/blogs/createNewBlog.html',

		controller:function($scope,$sce,$location,CommonService,ContentService,UserService){
			$scope.content = {};
			$scope.content.user = {};
			$scope.content.content_type="blog";
			$scope.content.created=new Date();
			$scope.content.is_published=true;
			$scope.content.video_link="";
			//$scope.cs = CommonService;

			$scope.getContentBg = function(contentType){
				return CommonService.getContentBg(contentType);
			};
			$scope.getContentIcon = function(contentType){
				return CommonService.getContentIcon(contentType);
			};

			$scope.savePost = function(content){
				console.log(content);

				var data = {
					content_type:'blog',
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
