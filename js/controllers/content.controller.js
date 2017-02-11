angular.module('landing').controller('Content',[
	'$scope','$localStorage','urls','ContentService','$timeout',
	function($scope,$localStorage,urls,ContentService,$timeout){
		$scope.contentLoaded=false;
		ContentService.getContents(function(res){
			//console.log(res);
			$timeout(function(){
				$scope.contents=res.contents;
				$scope.contentLoaded=true;
			},0);
		},function(err){
			console.log(err);
		});


	}
]);
