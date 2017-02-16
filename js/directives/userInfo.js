angular.module('landing').directive('userInfo',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/userInfo.html',
		scope:{
			//user: '=user'
		},
		controller:[
			'$scope','$sce','$timeout','UserService',
			function($scope,$sce,$timeout,UserService){
				$scope.user = $scope.user || null;
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
					}else{
						UserService.getAuthUser(function(res){
							$scope.user=res.user;
							setDefaultCoverPic();
						},function(err){
							console.log(err);
						});
					}
				}
			}
		]
	};
});
