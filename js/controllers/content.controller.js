angular.module('landing').controller('Content',[
	'$scope','$localStorage','urls','ContentService',
	function($scope,$localStorage,urls,ContentService){
		alert('hi');
		ContentService.getContents(function(res){

		},function(err){

		});
	}
]);
