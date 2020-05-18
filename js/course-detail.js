//var ratioVideo = 560/315;//default ratio embed
// var resizeCourseWindow = function(e){
//     var windowWidthNew = $(window).width();
//     var windowHeightNew = $(window).height();
//     if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
//         windowWidth = windowWidthNew;
//         windowHeight = windowHeightNew;

//     }
// };
// $(window).bind('resize', resizeCourseWindow);
$(document).ready(function(){
	var iframe = $('.video-wrapper').find('iframe'),
		btnPlay = $('.video-wrapper').find('.video-play');

	btnPlay.bind('click',function(e){
		$(this).parent().addClass('open');
	});

});