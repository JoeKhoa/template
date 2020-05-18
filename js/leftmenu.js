$(document).ready(function(){

    var lis=$('.user-tab-nav').children();
    $('.user-tab-nav').find('a').bind('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        var li = $(this).parent();
        if(li.hasClass('active')){
            return true;
        }else{
            lis.removeClass('active');
            li.addClass('active');
            var div = $($(this).attr('href'));
            $('.tab-panel').removeClass('active');
            if(div.length)div.addClass('active');
        }
    });

});