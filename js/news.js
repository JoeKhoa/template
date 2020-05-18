var windowWidth = $(window).width();
var windowHeight = $(window).height();
var resizeMainWindow = function(e){
    var windowWidthNew = $(window).width();
    var windowHeightNew = $(window).height();
    if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
        windowWidth = windowWidthNew;
        windowHeight = windowHeightNew;
        
    }
};
$(window).bind('resize', resizeMainWindow);
$(document).ready(function(){
    $('html').addClass('news-page');
    $('.news-slider').bxSlider({
        controls: false
    });
});
$(window).load(function(){
	
});