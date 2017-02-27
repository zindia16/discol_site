angular.module('landing').factory('LikeContentService',[
	'$http','urls',
	function($http,urls){
		
		var saveLike=function(contentId,success,error){
			var data = {
				contentId:contentId
			};
			$http.post(urls.api+'Likes/add.json',data)
			.then(function(res){
				success(res.data);
			})
			.catch(function(err){
				error(err);
			});
		};
		return {
			saveLike:saveLike
		};
	}
]);
