angular.module('landing').factory('UserService',[
	'$http','urls',
	function($http,urls){
		var authUser;
		var getAuthUser=function(success,error){
			$http.get(urls.api+'Users/getAuthUser.json')
			.then(function(res){
				authUser=res.data;
				//console.log(res.data);
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
                var updateUserProfile = function(data,success,error){
                    $http.post(urls.api+'Users/updateProfile.json',data)
                    .then(function(res){
                        success(res.data);
                    }).catch(function(err){
                        error(err);
                    });
                };
		return {
			authUser:function(){
				if(authUser){
					return authUser.user||null;
				}
				return null;
			},
			getAuthUser:getAuthUser,
			getUser:getUser,
                        updateUserProfile:updateUserProfile
		};
	}
]);
