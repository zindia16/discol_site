(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var loginDivHgt= $(".loginDiv").height();
    $(".loginContent").css("height", loginDivHgt + "px");


  });
})(jQuery);

$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $(".brand-logo-img").attr("src","images/discol_logo_blk.png");
          $(".dscl_nav").css("background-color", "#fff");
          $(".dscl_nav a").css("color", "#000");
        } else {
          $(".brand-logo-img").attr("src","images/discol_logo.png");
          $(".dscl_nav").css("background-color", "transparent");
          $(".dscl_nav a").css("color", "#fff");
        }
      });
    });
