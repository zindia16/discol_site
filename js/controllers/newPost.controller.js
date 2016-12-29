angular.module('landing').controller('newPost',[
	'$scope','$location','$timeout','$mdDialog','ContentService','urls',
	function($scope,$location,$timeout,$mdDialog,ContentService,urls){
		function init(){
			$scope.content={};
			$scope.content.content_type="post";
			$scope.content.created=new Date();
			$scope.content.is_published=true;
			$scope.content.video_link="";
		}
		init();
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.save = function(content) {
			console.log(content);

			var data = {
				content_type:'post',
				header_image_link:content.header_image_link,
				is_published:(content.is_published)?1:0,
				text:content.text,
				video_link:content.video_link
			};
			console.log(data);
			if(!data.text || data.text===""){
				$scope.err={
					message:'You must write something in this post!'
				};
				return false;
			}
			$scope.savingContent=true;
			ContentService.savePost(data,function(res){
				console.log(res);
				Materialize.toast('Your post was successful!', 4000);
				init();
				$mdDialog.cancel();
				$scope.savingContent=false;
				$location.path('/post/'+res.content.id);
			},function(err){
				Materialize.toast('Error! Your post saving failed!', 4000);
				$scope.savingContent=false;
			});
		};
	}
]);
