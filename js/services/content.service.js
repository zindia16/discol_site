angular.module('landing').factory('ContentService',[
	'$http','urls',
	function($http,urls){

		var getContents=function(success,error){
			$http.get(urls.api+'Contents.json')
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		var getPosts=function(success,error){
			$http.get(urls.api+'Contents/index/post.json')
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		var getPost=function(id,success,error){
			$http.get(urls.api+'Contents/view/'+id+'.json')
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		return {
			getContents:getContents,
			getPosts:getPosts,
			getPost:getPost
		};
	}
]);
