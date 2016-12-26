angular.module('landing').factory('CommentService',[
	'$http','urls',
	function($http,urls){		
		var getComments=function(contentid,success,error){
			$http.get(urls.api+'Comments/getComments/'+contentid+'.json')
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		return {
			getComments:getComments
		};
	}
]);
