angular.module('landing').factory('CommonService',[
	'$http','urls','$sce',
	function($http,urls,$sce){
		var getContentBg = function(contentType){
			switch(contentType){
				case 'post':
					return "light-blue darken-1";
				case 'blog':
					return "orange";
				case 'idea':
					return "amber lighten-1";
			}
		};
		var getContentIcon = function(contentType){
			switch(contentType){
				case 'idea':
					return $sce.trustAsHtml('<i class="material-icons amber-text text-lighten-1 valign">wb_incandescent</i>');
				case 'blog':
					return $sce.trustAsHtml('<i class="material-icons orange-text text-lighten-1 valign">edit</i>');
				case 'post':
					return $sce.trustAsHtml('<i class="material-icons light-blue-text text-darken-1 valign">send</i>');
			}
		};
		return {
			getContentBg:getContentBg,
			getContentIcon:getContentIcon
		};
	}
]);
