angular.module('landing').directive('userProfileHeader',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/userProfileHeader.html',
		scope:{
			//user: '=user'
		},
		controller:[
			'$scope','$sce','$timeout','$routeParams','UserService',
			function($scope,$sce,$timeout,$routeParams,UserService){
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
				//this function below needs to be changed for user as per routeParams
				$scope.getUser = function(userId){
					UserService.getUser(userId,function(res){
						$scope.user = res.user;
						setDefaultCoverPic();
					},function(err){
						$scope.user = res;
					});
				};
				if($routeParams.userId){
					$scope.getUser($routeParams.userId);
				}

			}
		]
	};
});
