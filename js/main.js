var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function encode64(input) {
    input = escape(input);
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {enc3 = enc4 = 64;} else if (isNaN(chr3)) {enc4 = 64;}

    output = output +keyStr.charAt(enc1) +keyStr.charAt(enc2) +keyStr.charAt(enc3) +keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);

    return output;
}
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" "+c_name+"=");
    if(c_start==-1)c_start=c_value.indexOf(c_name+"=");
    if(c_start==-1){
        c_value=null;
    }else{
        c_start=c_value.indexOf("=",c_start)+1;
        var c_end = c_value.indexOf(";",c_start);
        if(c_end==-1)c_end=c_value.length;
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}
Array.prototype.getRandom= function(num, cut){
    var A= cut? this:this.slice(0);
    A.sort(function(){
        return .5-Math.random();
    });
    return A.splice(0, num);
}
function getRandomArrayElements(arr, count) {
    var randoms = [], clone = arr.slice(0);
    for (var i = 0, index; i < count; ++i) {
        index = Math.floor(Math.random() * clone.length);
        randoms.push(clone[index]);
        clone[index] = clone.pop();
    }
    return randoms;
}
function isEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false;
    }
    return true;
}

function isPhonenumber(input){
    var phonelReg = /(\(?(\d|(\d[- ]\d))\)?[-. ]?)?(\d\.?\d\.?\d.?\d.?\d.?\d.?\d.?\d.?\d.?\d)/;
    if (input == '' || !phonelReg.test(input)) {
        return false;
    }
    return true;
}

function isNotSpecial(input) {
    var filter = /^[a-zA-Z0-9]+$/;
    if (!filter.test(input)) {
        return false;
    }
    return true;
}

function convertTime(time){
    time = time.replace('/Date(','').replace(')/','');
    var d = new Date(parseFloat(time));
    var result=[d.getDate(),d.getMonth() + 1,d.getFullYear()]
    var t = [d.getHours(),curr_m = d.getMinutes(),curr_s = d.getSeconds()];
    return result.join('-') + ' ' + t.join(':');
}

Number.prototype.format = function (n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
function getInternetExplorerVersion(){
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/IEMobile/i,h=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,i=/BlackBerry/i,j=/BB10/i,k=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,m=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),n=function(a,b){return a.test(b)},o=function(a){var o=a||navigator.userAgent;return this.apple={phone:n(b,o),ipod:n(c,o),tablet:n(d,o),device:n(b,o)||n(c,o)||n(d,o)},this.android={phone:n(e,o),tablet:!n(e,o)&&n(f,o),device:n(e,o)||n(f,o)},this.windows={phone:n(g,o),tablet:n(h,o),device:n(g,o)||n(h,o)},this.other={blackberry:n(i,o),blackberry10:n(j,o),opera:n(k,o),firefox:n(l,o),device:n(i,o)||n(j,o)||n(k,o)||n(l,o)},this.seven_inch=n(m,o),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},p=function(){var a=new o;return a.Class=o,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=o:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=p():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=p()):a.isMobile=p()}(this);
var $viewport=0, windowWidth = jQuery(window).width(),windowHeight = jQuery(window).height(),pages,totalpages;

;jQuery(function($){
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            /(trident)[\/]([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;
    var main,header,footer ;
    var resizeMainWindow = function(e){
        var windowWidthNew = jQuery(window).width();
        var windowHeightNew = jQuery(window).height();
        if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
            windowWidth = windowWidthNew;
            windowHeight = windowHeightNew;
            var oldPort = $viewport;
            if(windowWidth<=479){
                $viewport = 0;
            }else if(windowWidth<=767){
                $viewport = 1;
            }else if(windowWidth<=991){
                $viewport = 2;
            }else if(windowWidth<=1199){
                $viewport = 3;
            }else{
                $viewport = 4;
            }

            $('#main').css('min-height',windowHeight-header.outerHeight()-footer.outerHeight());

        }
    };
    $(window).bind('resize', resizeMainWindow);
    $(document).ready(function(){
        if($.browser.msie){
            if(parseInt($.browser.version)>=10){
                $('html').addClass('ie10');
            }else if(parseInt($.browser.version)==9){
                $('html').addClass('ie9');
            }else if(parseInt($.browser.version)<=8){
                $('html').addClass('ie8');
            }
        }else if ($('html').hasClass('trident')){
            var i = 'ie'+getInternetExplorerVersion();
            $('html').addClass(i);
        }
        if(isMobile.phone)$('html').addClass('isMobile');
        

        main = $('#main');
        header = $('#header');
        footer = $('#footer');
        $('#main').css('min-height',windowHeight-header.outerHeight()-footer.outerHeight());

        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if( height >= 200) {
                $('#header').addClass('stuck');
            }else {
                $('#header').removeClass('stuck');
            }
        });

        $('.selectpicker').selectpicker();
        $('.dropdown').on('show.bs.dropdown', function(e){
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
            $('.mess-dropdown').slideUp(0);
            $('.notify-dropdown').slideUp(0);
        });
        // ADD SLIDEUP ANIMATION TO DROPDOWN //
        $('.dropdown').on('hide.bs.dropdown', function(e){
            e.preventDefault();
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
                $('.dropdown').removeClass('open');
                $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
            });
        });

        /* Rating style */
        $('.block-rating').each(function(index){
            var $t  = $(this),
                val = parseInt($t.attr('data-value'));
            if(val>0){
                $t.addClass('rated rate-'+val);
            }else{
                $t.addClass('not-rate');
            }
            var cClass = $t.attr('class');
            $t.find('span').hover(function(e){
                var $this = $(this).get(0),
                    i = $t.find('span').index($this)+1;
                $t.attr('class','block-rating rated rate-'+i);
            },function(e){
                $t.attr('class',cClass);
            }).click(function(e){
                var $this = $(this).get(0),
                    i = $t.find('span').index($this)+1;
                cClass = 'block-rating rated rate-'+i;
                $t.attr('class',cClass).attr('data-value',i);
            });
        });

        $('.accordion-program .panel-heading a[data-toggle="collapse"]').on('click', function () {
            $(this).toggleClass('active');
        });

        /* Set width for progress-bar */
        $('.progress-bar').each(function(index){
            var $t = $(this);
            $t.css('width',$t.attr('data-value')/$t.attr('data-max')*100+'%');
        });
        //popover form
        $(".popover-form").each(function(index){
            var $t = $(this),c = $t.attr('data-class');
            $t.popover({
                html: true, 
                template: '<div class="popover '+c+'"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                content: function() {
                      return $($t.attr('data-target')).html();
                    }
            });
        });

        $('body').on('click','[data-toggle="modal"]',function(e){
            $('.modal').modal('hide');
        });
        $('[data-toggle="popover"]').each(function () {
            var button = $(this);
            button.popover().on('shown.bs.popover', function() {
                button.data('bs.popover').tip().find('[data-dismiss="popover"]').on('click', function () {
                    button.popover('toggle');
                });
            });
        });


        var $currentPopover = null;
        $(document).on('shown.bs.popover', function (ev) {
            var $target = $(ev.target);
            if ($currentPopover && ($currentPopover.get(0) != $target.get(0))) {
                $currentPopover.popover('toggle');
            }
            $currentPopover = $target;
        });

        $(document).on('hidden.bs.popover', function (ev) {
            var $target = $(ev.target);
            if ($currentPopover && ($currentPopover.get(0) == $target.get(0))) {
                $currentPopover = null;
            }
        });
        fakewaffle.responsiveTabs(['xs','sm']);

        //init scroll and load more when scroll to bottom
        $('#ulNotify').slimScroll({height:236}).bind('slimscroll', function(e, pos){
            if(pos=='bottom'){
                //load more by ajax here
                //example
                var li = '<li class="notify-item"><a href="javascript:void(0)" title=""><span class="avatar"><img src="images/content/avatar_1.jpg" alt=""/></span><div class="notify-info"><p><strong>Hoai Thuong Le</strong> vừa gửi tin nhắn cho bạn.</p><div class="time"><span><i>23:10</i></span><span><i>01/10/2015</i></span></div></div></a></li>';
                var html = li;
                for(i=0;i<6;i++){
                    html+=li;
                }
                $(this).append(html);
            }
        });

        $('#ulMessage').slimScroll({height:236});

        $('.widget-mess-list').slimScroll({height:500});
        $('.mess-detail-content').slimScroll({height:500});

        $('#header').find('.link-notify').bind('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            $('.notify-dropdown').slideToggle();
            $('.mess-dropdown').slideUp(0);
            $('.personal-menu').hide();
            $('.top-buttons-logined').children('.dropdown').removeClass('open');
            //$('body').click();
        });
        $('#header').find('.link-mess').bind('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            $('.mess-dropdown').slideToggle();
            $('.notify-dropdown').slideUp(0);
            $('.personal-menu').hide();
            $('.top-buttons-logined').children('.dropdown').removeClass('open');
            //$('body').click();
        });
        $('#ulMessage').find('.message-item').bind('click',function(e){
            //load ajax, replace old content in mess modal
            //e.g:
            //var ul = $('#formMessCome').find('.mess-detail-content');
            //ul.html(data);
            //show modal
            $('#formMessCome').modal();
        });

        $('body').bind('click',function(e){
            //console.log('a');
            $('.mess-dropdown').slideUp(300);
            $('.notify-dropdown').slideUp(300);
        });

        $('.message-page .btn-action-remove').bind('click',function(e){
            $('.message-page').toggleClass('select-mode');
        });

        $('body').on('click','.personal-left-menu',function(e){
            $('.personal-left-menu').toggleClass('open');
        });
        

    });

    // Get saved data from sessionStorage
    var isPopupOpen = sessionStorage.getItem('popup');
    $(window).load(function() {
        $(".status").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow",function(){
            if(!isPopupOpen){
                $('#popAds').modal('show');
                sessionStorage.setItem('popup',true);
            }
            if($('.widget-course .course-item').length){
                $('.widget-course .course-item').setAllToMaxHeight();
            }
        });
    });

    $('.res-table').wrap('<div class="res-table-wrapper"></div>');

});