angular.module('landing').controller('Signup',[
	'$scope',
	function($scope){
		var changeLoginContent = function(){
			var loginDivHgt= $(".loginDiv").height();
			var windowSize = $(window).width();
			if(windowSize > 992){
				$(".loginContent").css("height", loginDivHgt + "px");
			}else{
				$(".loginContent").css("height", "auto");
			}
		};
		changeLoginContent();
		$(window).resize(function(){
			changeLoginContent();
		});



	}
]);
