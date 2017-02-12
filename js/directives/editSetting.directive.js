angular.module('landing').directive('editSetting',[
  'urls',
  function(urls){
    return {
      restrict : 'E',
      templateUrl : urls.root+'js/directives/templates/editSetting.html',
      scope : {},
      controller : [
        '$scope','$timeout','UserService',
        function($scope,$timeout,UserService){
          
        }
      ]
    };
  }
]);
