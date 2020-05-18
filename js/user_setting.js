$(document).ready(function(){
    $('#txtBirthday').datepicker({
        format: 'mm/dd/yyyy'
    });

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

    //Avatar upload review
    var divP = $('#imgPreview'),img = divP.find('img');
    if(img.length==0){
        img=$('<img/>');
        divP.append(img);
    }
    img.onload = function(e){
        if(this.width<200||this.height<200){
            divP.addClass('show-error');
        }else{
            divP.removeClass('show-error');
        }
    }
    document.getElementById("fileAvatar").onchange = function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            img.attr('src',e.target.result);
            divP.addClass('chosen-image');
        };
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    };

});