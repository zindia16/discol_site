angular.module('landing').directive('afterLoginNav',function(urls){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/afterLoginNav.html',
		controller:function($scope,$mdDialog,urls){
			$scope.showNewPostDialog = function(ev) {
				$mdDialog.show({
					controller: 'newPost',
					templateUrl: urls.root+'home/views/newPost.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true
				});
			};

			function newPostDialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		}
	};
});
