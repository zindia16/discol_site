angular.module('landing').controller('Dashboard',[
	'$scope','$localStorage','urls','UserService','$timeout',
	function($scope,$localStorage,urls,UserService,$timeout){
		$scope.userLoaded=false;
		$scope.loadUser = function(){
			alert('hi');
			//ajax call only if user is not available in UserService
			if(!UserService.authUser()){
				UserService.getAuthUser(function(res){
					$timeout(function(){
						$scope.user=UserService.authUser();
						$scope.userLoaded=true;
					},0);
				},function(err){
					console.log(err);
				});
			}else{
				$scope.user=UserService.authUser();
			}

		};
		$scope.loadUser();
	}
]);
