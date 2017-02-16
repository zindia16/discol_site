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
						if(!$scope.user.profile_picture){
							$scope.user.profile_picture = "../images/peep01.jpg";
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

					$scope.updateProfile = function (file,ProfilePic) {
						$scope.isBusy = true;
								if(file){
									var file_ext = file.substring("data:image/".length, file.indexOf(";base64"));
									var data = {file: file,file_ext:file_ext};
								}
								if(ProfilePic){
									var profile_pic_file_ext = ProfilePic.substring("data:image/".length, ProfilePic.indexOf(";base64"));
									var data = {ProfilePic:ProfilePic,profile_pic_file_ext:profile_pic_file_ext};
								}
								if(file && ProfilePic){
									var data = {file: file,file_ext:file_ext,ProfilePic:ProfilePic,profile_pic_file_ext:profile_pic_file_ext}
								}
				        Upload.upload({
				            url: urls.api+'Users/updateProfile.json',
				            data: data
				        }).then(function (resp) {
										$scope.isBusy = false;
										$scope.user.profile_picture_link = "../images/background3.jpg";
				            //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
				        }, function (resp) {
				            console.log('Error status: ' + resp.status);
				        }, function (evt) {
				            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				            //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
				        });
				    };
				}
			]
		};
	}
]);
