angular.module('landing').directive('editSetting',[
  'urls',
  function(urls){
    return {
      restrict : 'E',
      templateUrl : urls.root+'js/directives/templates/editSetting.html',
      scope : {},
      controller : [
        '$scope','$timeout','UserService','$localStorage','UserService',
        function($scope,$timeout,UserService,$localStorage,UserService){
          if($localStorage.user.id){
              var userId = $localStorage.user.id;
              $scope.isEditMode = false;
                
                $scope.imageReady = false;
                $scope.myImage='';
                $scope.myCroppedImage='';

                var handleFileSelect=function(evt) {
                  $scope.imageReady = true;
                  var file=evt.currentTarget.files[0];
                  $scope.inputFile = file;
                  var reader = new FileReader();
                  reader.onload = function (evt) {
                    $scope.$apply(function($scope){
                      $scope.myImage=evt.target.result;
                      //console.log($scope.inputFile);
                    });
                  };
                  reader.readAsDataURL(file);
                };
                angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
  
              
              $scope.updateProfile = function(dataURI,file,user){
                    var file_ext = '';
                    var fileNme = file.name;
                        file_ext= fileNme.split('.').pop();
                    var imageBase64 = dataURI;
                    var blob = new Blob([imageBase64], {type: file.type});
                    var fileDetails = new File([blob], file.lastModified+'.'+file_ext);
                    
                    var data = {user:user,profilePic:fileDetails};
                    console.log(imageBase64);
                    console.log(fileDetails);
                    console.log(data);
                    UserService.updateUserProfile(data,function(res){
                        console.log(res);
                    },function(err){

                    });
                    
                    
              };
              
              $scope.showEditMode= function(){
                  $scope.isEditMode = !$scope.isEditMode;
              };
              UserService.getUser(userId,function(res){
                  if(res.success){
                      $scope.user = res.user;
                      $scope.user.modified = moment.utc(res.user.modified).fromNow();
                  }
              },function(err){
                  
              });
              
          }
          
        }
      ]
    };
  }
]);
