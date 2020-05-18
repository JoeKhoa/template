var windowWidth = $(window).width();
var windowHeight = $(window).height();
var resizeMainWindow = function(e){
    var windowWidthNew = $(window).width();
    var windowHeightNew = $(window).height();
    if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
        windowWidth = windowWidthNew;
        windowHeight = windowHeightNew;
        setTimeout(function(){
			$('.fluid-banner').css('max-height',$(window).height()-$('#header').height());
		},100);
    }
};
$(window).bind('resize', resizeMainWindow);
$(document).ready(function(){
    $('html').addClass('home-page');
});
$(window).load(function(){
	console.log($('#header').height());
	setTimeout(function(){
		$('.fluid-banner').css('max-height',$(window).height()-$('#header').height());
	},100);
});