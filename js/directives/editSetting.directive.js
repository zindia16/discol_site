angular.module('landing').directive('editSetting',[
	'urls',
	function(urls){
		return {
			restrict : 'E',
			templateUrl : urls.root+'js/directives/templates/editSetting.html',
			scope : {},
			controller : [
				'$scope','$timeout','$localStorage','UserService','Upload',
				function($scope,$timeout,$localStorage,UserService,Upload){
					$scope.isBusy = false;
					var setDefaultCoverPic = function(){
						if(!$scope.user.cover_image){
							$scope.user.cover_image = "../images/background3.jpg";
						}
						console.log($scope.user);
					};

					if(!$scope.user){
						if(UserService.authUser()){
							$scope.user=UserService.authUser();
							setDefaultCoverPic();
							console.log($scope.user);
						}else{
							UserService.getAuthUser(function(res){
								$scope.user=res.user;
								setDefaultCoverPic();
								console.log($scope.user);
							},function(err){
								console.log(err);
							});
						}
					}
					console.log(urls);

					$scope.updateProfile = function (file,user) {
						$scope.isBusy = true;
						var file_ext = file.substring("data:image/".length, file.indexOf(";base64"));
				        Upload.upload({
				            url: urls.api+'Users/updateProfile.json',
				            data: {file: file, 'user': user,file_ext:file_ext}
				        }).then(function (resp) {
							$scope.isBusy = false;
							$scope.user.profile_picture_link = "../images/background3.jpg";
				            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
				        }, function (resp) {
				            console.log('Error status: ' + resp.status);
				        }, function (evt) {
				            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
				        });
				    };
				}
			]
		};
	}
]);
