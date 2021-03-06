angular.module('landing').controller('Posts',[
	'$scope','$localStorage','urls','ContentService','$timeout',
	function($scope,$localStorage,urls,ContentService,$timeout){
		$scope.contentLoaded=false;
		ContentService.getPosts(function(res){
			$timeout(function(){
				$scope.contents=res.contents;
				$scope.contentLoaded=true;
			},0);
		},function(err){
			console.log(err);
		});
	}
]);
