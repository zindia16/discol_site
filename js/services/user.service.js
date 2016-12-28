angular.module('landing').factory('UserService',[
	'$http','urls',
	function($http,urls){
		var authUser;
		var getAuthUser=function(success,error){
			$http.get(urls.api+'Users/getAuthUser.json')
			.then(function(res){
				authUser=res.data;
				console.log(res.data);
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		var getUser = function(userId,success,error){
			$http.get(urls.api+'Users/getUser/'+userId+'.json')
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		return {
			authUser:authUser,
			getAuthUser:getAuthUser,
			getUser:getUser
		};
	}
]);
