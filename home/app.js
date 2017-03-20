angular.module('landing',[
	'ngRoute',
	'ui.materialize',
	'ngMaterial',
	'ngStorage',
	'oc.lazyLoad',
	'videosharing-embed',
	'ngEmbed',
	'angularTrix',
	'ngFileUpload',
    'ngImgCrop',
	'uiCropper',
	'ngSanitize',
	'textAngular'
]);

angular.module('landing').constant('urls',{
	root:window.location.origin+window.location.pathname.replace('/home/','/'),
	api:window.location.origin+window.location.pathname.replace('/site/home/','/api/')+'api/'
});
angular.module('landing').constant('embed',{
	options:{
		watchEmbedData   : false,     //watch embed data and render on change
		fontSmiley       : true,      //convert ascii smileys into font smileys
		emoji            : true,      //convert emojis short names into images
		link             : true,      //convert links into anchor tags
		linkTarget       : '_blank',   //_blank|_self|_parent|_top|framename
		pdf              : {
			embed: true                 //to show pdf viewer.
		},
		image            : {
			embed: true                //to allow showing image after the text gif|jpg|jpeg|tiff|png|svg|webp.
		},
		audio            : {
			embed: true                 //to allow embedding audio player if link to
		},
		basicVideo       : true,     //to allow embedding of mp4/ogg format videos
		gdevAuth         :'AIzaSyACJDAH4zmztLXIGoIlpQsKDOQEIoMqD_k', // Google developer auth key for youtube data api
		video            : {
			embed           : true,    //to allow youtube/vimeo video embedding
			width           : null,     //width of embedded player
			height          : null,     //height of embedded player
			ytTheme         : 'dark',   //youtube player theme (light/dark)
			details         : false,    //to show video details (like title, description etc.)
			autoPlay        : true,     //to autoplay embedded videos
		},
		twitchtvEmbed    : false,
		dailymotionEmbed : true,
		tedEmbed         : true,
		dotsubEmbed      : true,
		liveleakEmbed    : true,
		ustreamEmbed    : true,
		soundCloudEmbed  : true,
		soundCloudOptions: {
			height      : 160, themeColor: 'f50000',   //Hex Code of the player theme color
			autoPlay    : false,
			hideRelated : false,
			showComments: true,
			showUser    : true,
			showReposts : false,
			visual      : false,         //Show/hide the big preview image
			download    : false          //Show/Hide download buttons
		},
		spotifyEmbed     : true,
		codepenEmbed     : true,        //set to true to embed codepen
		codepenHeight    : 300,
		jsfiddleEmbed    : true,        //set to true to embed jsfiddle
		jsfiddleHeight   : 300,
		jsbinEmbed       : true,        //set to true to embed jsbin
		jsbinHeight      : 300,
		plunkerEmbed     : true,        //set to true to embed plunker
		githubgistEmbed  : true,
		ideoneEmbed      : true,        //set to true to embed ideone
		ideoneHeight:300
	}
});

angular.module('landing').run([
	'$location','$localStorage','$http','urls',
	function($location,$localStorage,$http,urls){
		var moment = moment;
		if($localStorage.token){
			$http.defaults.headers.common.Authorization = 'Basic ' + $localStorage.token;
		}else{
			window.location.replace(urls.root+'#!/login');
		}
	}
]);






angular.module('landing').controller('Main',[
	'$scope','$rootScope','$location','$localStorage','urls',
	function($scope,$rootScope,$location,$localStorage,urls){
		//console.log(urls);
		$scope.getClass = function (path) {
		  	return ($location.path().substr(0, path.length) === path) ? 'active' : '';
		};

		$rootScope.logout = function(){
			$localStorage.$reset();
			window.location.replace(urls.root+'#!/login');
		};
	}
]);
