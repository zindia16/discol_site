angular.module('landing').factory('ContentService',[
	'$http','urls',
	function($http){

		var getContents=function(success,error){
			$http.get(urls.api+'Contents.json')
			.then(function(res){
				console.log(res);
			})
			.catch(function(err){
				console.log(err);
			});
		};
		return {
			getContents:getContents
		};
	}
]);
