angular.module('landing').directive('postCard',function(urls,embed){
	return {
		restrict : 'E',
		templateUrl:urls.root+'js/directives/templates/postCard.html',
		scope:{
			content: '=content'
		},
		controller:function($scope,$sce){
			$scope.getContentBg = function(contentType){
				switch(contentType){
					case 'post':
					return "light-blue darken-1";
					case 'idea':
					return "amber lighten-1";
				}
			};

			$scope.getContentIcon = function(contentType){
				switch(contentType){
					case 'idea':
					return $sce.trustAsHtml('<i class="material-icons amber-text text-lighten-1 valign">wb_incandescent</i>');
					case 'post':
					return $sce.trustAsHtml('<i class="material-icons light-blue-text text-darken-1 valign">send</i>');
				}
			};
			$scope.options = embed.options;
			/*
			$scope.options = {
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
			};
			*/

		}
	};
});
