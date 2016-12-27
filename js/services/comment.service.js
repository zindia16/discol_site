angular.module('landing').factory('CommentService',[
	'$http','urls',
	function($http,urls){
		var getComments=function(contentid,success,error){
			$http.get(urls.api+'Comments/index/'+contentid+'.json')
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		var saveComment=function(data,success,error){
			$http.post(urls.api+'Comments/add.json',data)
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		return {
			getComments:getComments,
			saveComment:saveComment
		};
	}
]);
