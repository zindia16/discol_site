angular.module('landing').controller('Login',[
	'$scope','$http','$localStorage','urls',
	function($scope,$http,$localStorage,urls){

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

		$scope.response={};
		$scope.isBusy=false;
		//redirect if user is logged in
		if($localStorage.token){
			//console.log('Redirecting to APP path: '+ROOT_URL);
			window.location.href=urls.root+"home";
		}

		$scope.login = function(){
			$scope.isBusy=true;
			$scope.response={};
			$http.post(urls.api+'Users/login.json',$scope.user).then(function(res){
                $scope.response = res.data;
				console.log(res);
                if($scope.response.success===true){
					$localStorage.token=res.data.token;
					$localStorage.user=res.data.user;
					//console.log($localStorage);
                    $scope.user = {};
					window.location.href=urls.root+"home";
                }
				$scope.isBusy=false;
            }).catch(function(err){
				$scope.isBusy=false;
            });
		};


        $scope.signup = function (){
			$scope.isBusy=true;
			$scope.response.message="";
			//console.log(user);
			if(!$scope.user.first_name){
				$scope.response.message="Error: Your Name is Required!!";
				$scope.isBusy=false;
				return false;
			}
			if(!$scope.user.email){
				$scope.response.message="Error: Your email is required!!";
				$scope.isBusy=false;
				return false;
			}
			if(!$scope.user.username){
				$scope.response.message="Error: Your desired username is required!!";
				$scope.isBusy=false;
				return false;
			}
			if(!$scope.user.password){
				$scope.response.message="Error: Your desired password is required!!";
				$scope.isBusy=false;
				return false;
			}
			if(!$scope.user.confirm_password){
				$scope.response.message="Error: Please confirm your password!!";
				$scope.isBusy=false;
				return false;
			}
			if($scope.user.confirm_password!==$scope.user.password){
				$scope.response.message="Error: Password didn't matched.. please confirm again!!";
				$scope.isBusy=false;
				return false;
			}
			$scope.response.message="Trying to sign you up...";
			$scope.isBusy=false;
			//return false;
            $http.post(urls.api+'Users/signup.json',$scope.user).then(function(res){
				$scope.isBusy=false;
                $scope.response = res.body;
				console.log(res);
                if($scope.response.success===true){
					$scope.response.message = "You have been successfully signed up. Go to Login page to signin to your account!!";
                    $scope.user = {};
                }
            }).catch(function(err){
				$scope.response=err.body;
				$scope.isBusy=false;
            });
        };


	}
]);
