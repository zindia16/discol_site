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
				if(!$scope.user){
					if(UserService.authUser()){
						$scope.user=UserService.authUser();
					}else{
						UserService.getAuthUser(function(res){
							$scope.user=res.user;
						},function(err){
							console.log(err);
						});
					}
				}
			}
		]
	};
});
