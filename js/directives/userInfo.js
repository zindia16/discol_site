angular.module('landing').directive('userInfo',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/userInfo.html',
		scope:{
			user: '=user'
		},
		controller:[
			'$scope','$sce','$timeout','UserService',
			function($scope,$sce,$timeout,UserService){
				console.log($scope.user);
				if(!$scope.user){
					if(UserService.authUser()){
						$scope.user=UserService.authUser();

						console.log($scope.user);
					}else{
						UserService.getAuthUser(function(res){
							$scope.user=res.user;
							$scope.content.user=$scope.user;
							console.log($scope.user);
						},function(err){
							console.log(err);
						});
					}
				}
			}
		]
	};
});
