$(document).ready(function(){
    $('body').addClass('page-control-course');

    // $('#txtBirthday').datepicker({
    //     format: 'mm/dd/yyyy'
    // });
    var p=$('.personal-left-menu,.active .block-personal-form');
    var lis=$('.user-tab-nav').children();
    $('.user-tab-nav').find('a').bind('click',function(e){
        // e.preventDefault();
        // e.stopPropagation();
        var li = $(this).parent();
        if(li.hasClass('active')){
            return true;
        }else{
            lis.removeClass('active');
            li.addClass('active');
            var div = $($(this).attr('href'));
            $('.tab-panel').removeClass('active');
            if(div.length)div.addClass('active');            
            p.setAllToMaxOuterHeight();
        }
    });

    if(window.location.hash){
        $('a[href="'+window.location.hash+'"]').click();
    }

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
    if(document.getElementById("fileAvatar")){
        document.getElementById("fileAvatar").onchange = function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                img.attr('src',e.target.result);
                divP.addClass('chosen-image');
            };
            // read the image file as a data URL.
            reader.readAsDataURL(this.files[0]);
        };
    }

    if(document.getElementById("fileDocs")){
        document.getElementById("fileDocs").onchange = function () {
            // read the image file as a data URL.
            $('#fakeFileDocs').val(this.files[0].name);
        };
    }

    $('#btnUploadVideo').bind('click',function(e){
        var txtUrl = $('#txtURLVideo').val();
        if(txtUrl){
            var a = $('#videoPreview').find('iframe');
            if(a.length==0){
                $('#videoPreview').append('<iframe border="0"></iframe>');
                a = $('#videoPreview').find('iframe');
            }
            a.attr('src',txtUrl);
            $('#videoPreview').addClass('chosen-video');
        }
    });

    $('#chkCFree').on('change',function(e){
        if($(this).prop('checked')){
            $('.chkCFree').hide();
        }else{
            $('.chkCFree').show();
        }
    });

    $('.btn-test-detail').bind('click',function(e){
        //get id detail from attribute data-id
        //load ajax data from server
        //parse to html and replace content of #formDetailTest
        //hide list - show detail
        $('#formListTest').addClass('hide');
        $('#formDetailTest').removeClass('hide');
        $('.block-personal-form').css('height','auto');
    });

    $('.btn-detail-cmd').bind('click',function(e){
        //TO DO: update test status, point ...
        $('#formListTest').removeClass('hide');
        $('#formDetailTest').addClass('hide');
        $('.block-personal-form').css('height','auto');
    });

    $('body').on('click','.btn-editLessonContent',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-list-item'),
            c = p.find('.add-content');
        if(!p.hasClass('show')){
            c.slideDown(600,function(){
                p.addClass('show');
                $('.block-personal-form').css('height','auto');
            });
        }else{
            c.slideUp(600,function(){
                p.removeClass('show');
            });
        }
    });

    $('.form-section').on('click','.input-label',function(e){
        if(!$(this).hasClass('entering')){
            $(this).removeAttr('readonly');
            $(this).addClass('entering');
        }
    });

    $('body').on('click','.btn-addLessonContent',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-list-item'),
            c = p.find('.add-content');
        $t.hide();
        $.ajax({
            url: $t.attr('data-href'),
            success:function(data){
                c.html(data);
                //console.log(data);
                c.slideDown(600,function(){
                    p.addClass('show');
                    $('.block-personal-form').css('height','auto');
                });
            }
        });
    });

    $('body').on('click','.btn-cancelLessonContent',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-list-item'),
            c = p.find('.add-content'),
            b = p.find('.btn-addLessonContent');
        c.slideUp(600,function(){
            b.show();
            p.removeClass('show');
        });
    });

    $('body').on('click','.btn-saveLessonContent',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-list-item'),
            c = p.find('.add-content'),
            r = p.find('input[name="radContentType"]'),
            b = p.find('.btn-addLessonContent');

        var v = p.find('input[name="radContentType"]:checked').val(),
            nb = '';
        switch(v){
            case 'video':
                nb = '<a class="btn btn-ico btn-content-item btn-video" href="javascript:void(0)"><span class="fa fa-play"></span></a>';
                break;
            case 'audio':
                nb = '<a class="btn btn-ico btn-content-item btn-audio" href="javascript:void(0)"><span class="fa fa-volume-up"></span></a>';
                break;
            case 'powerpoint':
                nb = '<a class="btn btn-ico btn-content-item btn-video" href="javascript:void(0)"><span class="fa fa-file-powerpoint-o"></span></a>';
                break;
            case 'word':
                nb = '<a class="btn btn-ico btn-content-item btn-video" href="javascript:void(0)"><span class="fa fa-file-word-o"></span></a>';
                break;
            default:
                nb = '<a class="btn btn-ico btn-content-item btn-video" href="javascript:void(0)"><span class="fa fa-file-word-o"></span></a>';
                break;
        }
        if(v!==undefined){
            c.slideUp(600,function(){
                b.after(nb);
                b.remove();
                p.removeClass('show');
            });
        }
    });

    $('body').on('click','.btn-LessonAddItem',function(e){
        var $t = $(this),
            p = $t.parents('.form'),
            l = p.find('.lesson-item'),
            last = $(l[l.length-1]);
            
        $.ajax({
            url: $t.attr('data-href'),
            success:function(data){
                last.after(data.replaceAll('{no}',l.length+1));
                $('.block-personal-form').css('height','auto');
            }
        });
    });

    $('body').on('click','.btn-LessonAddTest',function(e){
        var $t = $(this),
            p = $t.parents('.form'),
            l = p.find('.lesson-item'),
            last = $(l[l.length-1]);
            
        $.ajax({
            url: $t.attr('data-href'),
            success:function(data){
                last.after(data);
                $('.block-personal-form').css('height','auto');
            }
        });
    });

    $('body').on('click','.btn-addLesson',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-item'),
            l = p.find('.lesson-list-item'),
            last = $(l[l.length-1]);
            
        $.ajax({
            url: $t.attr('data-href'),
            success:function(data){
                last.after(data.replaceAll('{no}',l.length+1));
                $('.block-personal-form').css('height','auto');
            }
        });
    });

    $('body').on('click','.btn-addChoice',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-item'),
            l = p.find('.lesson-list-item'),
            last = $(l[l.length-1]);
            
        $.ajax({
            url: $t.attr('data-href'),
            success:function(data){
                last.after(data.replaceAll('{no}',l.length+1));
                $('.block-personal-form').css('height','auto');
            }
        });
    });

    $('body').on('click','.btn-addChoiceQuestion',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-list-item'),
            l = p.find('.list-question-item'),
            last = $(l[l.length-1]);
        $.ajax({
            url: $t.attr('data-href'),
            success:function(data){
                last.after(data.replaceAll('{no}',l.length+1));
                $('.block-personal-form').css('height','auto');
            }
        });
    });

    $('body').on('click','.btn-addPractise',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-item'),
            l = p.find('.lesson-list-item'),
            last = $(l[l.length-1]);
            
        $.ajax({
            url: $t.attr('data-href'),
            success:function(data){
                last.after(data.replaceAll('{no}',l.length+1));
                $('.block-personal-form').css('height','auto');
            }
        });
    });

    $('body').on('click','.btn-cancelPractise',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-list-item'),
            c = p.find('.add-content'),
            b = p.find('.btn-switchPractiseContent');
        c.slideUp(600,function(){
            b.show();
            p.removeClass('show');
        });
    });

    $('body').on('click','.btn-saveLessonContent',function(e){
        
    });

    $('body').on('click','.btn-switchPractiseContent',function(e){
        var $t = $(this),
            p = $t.parents('.lesson-list-item'),
            c = p.find('.add-content'),
            b = p.find('.btn-switchPractiseContent');
        c.slideDown(600,function(){
            b.hide();
            p.removeClass('show');
        });
    });

    $('.form-section').on('focusout','.input-label',function(e){
        if($(this).hasClass('entering')){
            $(this).attr('readonly');
            $(this).removeClass('entering');
        }
    });


});

$(window).load(function(){
    var p=$('.personal-left-menu,.active .block-personal-form');
    p.setAllToMaxOuterHeight();
});