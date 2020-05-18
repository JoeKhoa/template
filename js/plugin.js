if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),s=i.data("bs.alert");s||i.data("bs.alert",s=new o(this)),"string"==typeof e&&s[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.2.0",o.prototype.close=function(e){function i(){n.detach().trigger("closed.bs.alert").remove()}var o=t(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var n=t(s);e&&e.preventDefault(),n.length||(n=o.hasClass("alert")?o:o.parent()),n.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",i).emulateTransitionEnd(150):i())};var s=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=s,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.button"),n="object"==typeof e&&e;s||o.data("bs.button",s=new i(this,n)),"toggle"==e?s.toggle():e&&s.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.2.0",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,s=o.is("input")?"val":"html",n=o.data();e+="Text",null==n.resetText&&o.data("resetText",o[s]()),o[s](null==n[e]?this.options[e]:n[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.carousel"),n=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),r="string"==typeof e?e:n.slide;s||o.data("bs.carousel",s=new i(this,n)),"number"==typeof e?s.to(e):r?s[r]():n.interval&&s.pause().cycle()})}var i=function(e,i){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.2.0",i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},i.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.to=function(e){var i=this,o=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){i.to(e)}):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(this.$items[e]))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),s=i||o[e](),n=this.interval,r="next"==e?"left":"right",a="next"==e?"first":"last",l=this;if(!s.length){if(!this.options.wrap)return;s=this.$element.find(".item")[a]()}if(s.hasClass("active"))return this.sliding=!1;var h=s[0],p=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(p),!p.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=t(this.$indicators.children()[this.getItemIndex(s)]);c&&c.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,o.addClass(r),s.addClass(r),o.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),o.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(1e3*o.css("transition-duration").slice(0,-1))):(o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(i){var o,s=t(this),n=t(s.attr("data-target")||(o=s.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(n.hasClass("carousel")){var r=t.extend({},n.data(),s.data()),a=s.attr("data-slide-to");a&&(r.interval=!1),e.call(n,r),a&&n.data("bs.carousel").to(a),i.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(s).remove(),t(n).each(function(){var o=i(t(this)),s={relatedTarget:this};o.hasClass("open")&&(o.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||o.removeClass("open").trigger("hidden.bs.dropdown",s))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new r(this)),"string"==typeof e&&o[e].call(i)})}var s=".dropdown-backdrop",n='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.2.0",r.prototype.toggle=function(o){var s=t(this);if(!s.is(".disabled, :disabled")){var n=i(s),r=n.hasClass("open");if(e(),!r){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(n.trigger(o=t.Event("show.bs.dropdown",a)),o.isDefaultPrevented())return;s.trigger("focus"),n.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},r.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var s=i(o),r=s.hasClass("open");if(!r||r&&27==e.keyCode)return 27==e.which&&s.find(n).trigger("focus"),o.trigger("click");var a=" li:not(.divider):visible a",l=s.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var h=l.index(l.filter(":focus"));38==e.keyCode&&h>0&&h--,40==e.keyCode&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,r.prototype.toggle).on("keydown.bs.dropdown.data-api",n+', [role="menu"], [role="listbox"]',r.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),r=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,r)),"string"==typeof e?n[e](o):r.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.2.0",i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(300):i.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o;if(this.$backdrop=t('<div class="modal-backdrop '+o+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(150):n()}else e&&e()},i.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),r=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());o.is("a")&&i.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(n,r,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tooltip"),n="object"==typeof e&&e;(s||"destroy"!=e)&&(s||o.data("bs.tooltip",s=new i(this,n)),"string"==typeof e&&s[e]())})}var i=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.2.0",i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var s=this.options.trigger.split(" "),n=s.length;n--;){var r=s[n];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show()},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var o=this,s=this.tip(),n=this.getUID(this.type);this.setContent(),s.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(r);l&&(r=r.replace(a,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var h=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(l){var d=r,f=this.$element.parent(),u=this.getPosition(f);r="bottom"==r&&h.top+h.height+c-u.scroll>u.height?"top":"top"==r&&h.top-u.scroll-c<0?"bottom":"right"==r&&h.right+p>u.width?"left":"left"==r&&h.left-p<u.left?"right":r,s.removeClass(d).addClass(r)}var g=this.getCalculatedOffset(r,h,p,c);this.applyPlacement(g,r);var v=function(){o.$element.trigger("shown.bs."+o.type),o.hoverState=null};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(150):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),s=o[0].offsetWidth,n=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top=e.top+r,e.left=e.left+a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=n&&(e.top=e.top+n-h);var p=this.getViewportAdjustedDelta(i,e,l,h);p.left?e.left+=p.left:e.top+=p.top;var c=p.left?2*p.left-s+l:2*p.top-n+h,d=p.left?"left":"top",f=p.left?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],d)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(){function e(){"in"!=i.hoverState&&o.detach(),i.$element.trigger("hidden.bs."+i.type)}var i=this,o=this.tip(),s=t.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(s),s.isDefaultPrevented()?void 0:(o.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName;return t.extend({},"function"==typeof i.getBoundingClientRect?i.getBoundingClientRect():null,{scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:o?t(window).width():e.outerWidth(),height:o?t(window).height():e.outerHeight()},o?{top:0,left:0}:e.offset())},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s={top:0,left:0};if(!this.$viewport)return s;var n=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-n-r.scroll,l=e.top+n-r.scroll+o;a<r.top?s.top=r.top-a:l>r.top+r.height&&(s.top=r.top+r.height-l)}else{var h=e.left-n,p=e.left+n+i;h<r.left?s.left=r.left-h:p>r.width&&(s.left=r.left+r.width-p)}return s},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.popover"),n="object"==typeof e&&e;(s||"destroy"!=e)&&(s||o.data("bs.popover",s=new i(this,n)),"string"==typeof e&&s[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.2.0",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},i.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tab");s||o.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.2.0",i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a")[0],n=t.Event("show.bs.tab",{relatedTarget:s});if(e.trigger(n),!n.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:s})})}}},i.prototype.activate=function(e,i,o){function s(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),o&&o()}var n=i.find("> .active"),r=o&&t.support.transition&&n.hasClass("fade");r?n.one("bsTransitionEnd",s).emulateTransitionEnd(150):s(),n.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(i){i.preventDefault(),e.call(t(this),"show")})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.affix"),n="object"==typeof e&&e;s||o.data("bs.affix",s=new i(this,n)),"string"==typeof e&&s[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.2.0",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),o=this.$target.scrollTop(),s=this.$element.offset(),n=this.options.offset,r=n.top,a=n.bottom;"object"!=typeof n&&(a=r=n),"function"==typeof r&&(r=n.top(this.$element)),"function"==typeof a&&(a=n.bottom(this.$element));var l=null!=this.unpin&&o+this.unpin<=s.top?!1:null!=a&&s.top+this.$element.height()>=e-a?"bottom":null!=r&&r>=o?"top":!1;if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");var h="affix"+(l?"-"+l:""),p=t.Event(h+".bs.affix");this.$element.trigger(p),p.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(t.Event(h.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-a}))}}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},o.offsetBottom&&(o.offset.bottom=o.offsetBottom),o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.collapse"),n=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);!s&&n.toggle&&"show"==e&&(e=!e),s||o.data("bs.collapse",s=new i(this,n)),"string"==typeof e&&s[e]()})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};i.VERSION="3.2.0",i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var i=t.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){var o=this.$parent&&this.$parent.find("> .panel > .in");if(o&&o.length){var s=o.data("bs.collapse");if(s&&s.transitioning)return;e.call(o,"hide"),s||o.data("bs.collapse",null)}var n=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[n](0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[n](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var a=t.camelCase(["scroll",n].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(350)[n](this.$element[0][a])}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(350):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var o=t.fn.collapse;t.fn.collapse=e,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o,s=t(this),n=s.attr("data-target")||i.preventDefault()||(o=s.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""),r=t(n),a=r.data("bs.collapse"),l=a?"toggle":s.data(),h=s.attr("data-parent"),p=h&&t(h);a&&a.transitioning||(p&&p.find('[data-toggle="collapse"][data-parent="'+h+'"]').not(s).addClass("collapsed"),s[r.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(r,l)})}(jQuery),+function(t){"use strict";function e(i,o){var s=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(i).is("body")?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),s=o.data("bs.scrollspy"),n="object"==typeof i&&i;s||o.data("bs.scrollspy",s=new e(this,n)),"string"==typeof i&&s[i]()})}e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",i=0;t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var o=this;this.$body.find(this.selector).map(function(){var o=t(this),s=o.data("target")||o.attr("href"),n=/^#./.test(s)&&t(s);return n&&n.length&&n.is(":visible")&&[[n[e]().top+i,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,n=this.targets,r=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return r!=(t=n[n.length-1])&&this.activate(t);if(r&&e<=s[0])return r!=(t=n[0])&&this.activate(t);for(t=s.length;t--;)r!=n[t]&&e>=s[t]&&(!s[t+1]||e<=s[t+1])&&this.activate(n[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
!function(a){"use strict";function b(a,b){return a.toUpperCase().indexOf(b.toUpperCase())>-1}function c(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b.replace(this.re,this.ch)}),b}function d(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c="(?:"+Object.keys(b).join("|")+")",d=new RegExp(c),e=new RegExp(c,"g"),f=null==a?"":""+a;return d.test(f)?f.replace(e,function(a){return b[a]}):f}function e(b,c){var d=arguments,e=b,b=d[0],c=d[1];[].shift.apply(d),"undefined"==typeof b&&(b=e);var g,h=this.each(function(){var e=a(this);if(e.is("select")){var h=e.data("selectpicker"),i="object"==typeof b&&b;if(h){if(i)for(var j in i)i.hasOwnProperty(j)&&(h.options[j]=i[j])}else{var k=a.extend({},f.DEFAULTS,a.fn.selectpicker.defaults||{},e.data(),i);e.data("selectpicker",h=new f(this,k,c))}"string"==typeof b&&(g=h[b]instanceof Function?h[b].apply(h,d):h.options[b])}});return"undefined"!=typeof g?g:h}a.expr[":"].icontains=function(c,d,e){return b(a(c).text(),e[3])},a.expr[":"].aicontains=function(c,d,e){return b(a(c).data("normalizedText")||a(c).text(),e[3])};var f=function(b,c,d){d&&(d.stopPropagation(),d.preventDefault()),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=f.prototype.val,this.render=f.prototype.render,this.refresh=f.prototype.refresh,this.setStyle=f.prototype.setStyle,this.selectAll=f.prototype.selectAll,this.deselectAll=f.prototype.deselectAll,this.destroy=f.prototype.remove,this.remove=f.prototype.remove,this.show=f.prototype.show,this.hide=f.prototype.hide,this.init()};f.VERSION="1.6.3",f.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results match",countSelectedText:function(a){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){var c=[];return c[0]=1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",c[1]=1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)",c},selectAllText:"Select All",deselectAllText:"Deselect All",multipleSeparator:", ",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,searchAccentInsensitive:!1},f.prototype={constructor:f,init:function(){var b=this,c=this.$element.attr("id");this.$element.hide(),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$menu=this.$newElement.find("> .dropdown-menu"),this.$button=this.$newElement.find("> button"),this.$searchbox=this.$newElement.find("input"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.liHeight(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile()},createDropdown:function(){var b=this.multiple?" show-tick":"",c=this.$element.parent().hasClass("input-group")?" input-group-btn":"",d=this.autofocus?" autofocus":"",e=this.$element.parents().hasClass("form-group-lg")?" btn-lg":this.$element.parents().hasClass("form-group-sm")?" btn-sm":"",f=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",g=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>':"",h=this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">'+this.options.selectAllText+'</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">'+this.options.deselectAllText+"</button></div></div>":"",i='<div class="btn-group bootstrap-select'+b+c+'"><button type="button" class="btn dropdown-toggle selectpicker'+e+'" data-toggle="dropdown"'+d+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+f+g+h+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';return a(i)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul").append(b),a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$menu.find("ul").append(a)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var b=this,e=[],f=0,g=function(a,b,c){return"<li"+("undefined"!=typeof c?' class="'+c+'"':"")+("undefined"!=typeof b|null===b?' data-original-index="'+b+'"':"")+">"+a+"</li>"},h=function(a,e,f,g){var h=c(d(a));return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+("undefined"!=typeof f?' style="'+f+'"':"")+("undefined"!=typeof g?'data-optgroup="'+g+'"':"")+' data-normalized-text="'+h+'">'+a+'<span class="'+b.options.iconBase+" "+b.options.tickIcon+' check-mark"></span></a>'};return this.$element.find("option").each(function(){var c=a(this),d=c.attr("class")||"",i=c.attr("style"),j=c.data("content")?c.data("content"):c.html(),k="undefined"!=typeof c.data("subtext")?'<small class="muted text-muted">'+c.data("subtext")+"</small>":"",l="undefined"!=typeof c.data("icon")?'<span class="'+b.options.iconBase+" "+c.data("icon")+'"></span> ':"",m=c.is(":disabled")||c.parent().is(":disabled"),n=c[0].index;if(""!==l&&m&&(l="<span>"+l+"</span>"),c.data("content")||(j=l+'<span class="text">'+j+k+"</span>"),!b.options.hideDisabled||!m)if(c.parent().is("optgroup")&&c.data("divider")!==!0){if(0===c.index()){f+=1;var o=c.parent().attr("label"),p="undefined"!=typeof c.parent().data("subtext")?'<small class="muted text-muted">'+c.parent().data("subtext")+"</small>":"",q=c.parent().data("icon")?'<span class="'+b.options.iconBase+" "+c.parent().data("icon")+'"></span> ':"";o=q+'<span class="text">'+o+p+"</span>",0!==n&&e.length>0&&e.push(g("",null,"divider")),e.push(g(o,null,"dropdown-header"))}e.push(g(h(j,"opt "+d,i,f),n))}else e.push(c.data("divider")===!0?g("",n,"divider"):c.data("hidden")===!0?g(h(j,d,i),n,"hide is-hidden"):g(h(j,d,i),n))}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),a(e.join(""))},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c=this;b!==!1&&this.$element.find("option").each(function(b){c.setDisabled(b,a(this).is(":disabled")||a(this).parent().is(":disabled")),c.setSelected(b,a(this).is(":selected"))}),this.tabIndex();var e=this.options.hideDisabled?":not([disabled])":"",f=this.$element.find("option:selected"+e).map(function(){var b,d=a(this),e=d.data("icon")&&c.options.showIcon?'<i class="'+c.options.iconBase+" "+d.data("icon")+'"></i> ':"";return b=c.options.showSubtext&&d.attr("data-subtext")&&!c.multiple?' <small class="muted text-muted">'+d.data("subtext")+"</small>":"",d.data("content")&&c.options.showContent?d.data("content"):"undefined"!=typeof d.attr("title")?d.attr("title"):e+d.html()+b}).toArray(),g=this.multiple?f.join(this.options.multipleSeparator):f[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");if(h.length>1&&f.length>h[1]||1==h.length&&f.length>=2){e=this.options.hideDisabled?", [disabled]":"";var i=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+e).length,j="function"==typeof this.options.countSelectedText?this.options.countSelectedText(f.length,i):this.options.countSelectedText;g=j.replace("{0}",f.length.toString()).replace("{1}",i.toString())}}this.options.title=this.$element.attr("title"),"static"==this.options.selectedTextFormat&&(g=this.options.title),g||(g="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",d(g)),this.$newElement.find(".filter-option").html(g)},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(){if(this.options.size!==!1){var a=this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus",!1).end().appendTo("body"),b=a.addClass("open").find("> .dropdown-menu"),c=b.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),d=this.options.header?b.find(".popover-title").outerHeight():0,e=this.options.liveSearch?b.find(".bs-searchbox").outerHeight():0,f=this.options.actionsBox?b.find(".bs-actionsbox").outerHeight():0;a.remove(),this.$newElement.data("liHeight",c).data("headerHeight",d).data("searchHeight",e).data("actionsHeight",f)}},setSize:function(){this.findLis();var b,c,d,e=this,f=this.$menu,g=f.find(".inner"),h=this.$newElement.outerHeight(),i=this.$newElement.data("liHeight"),j=this.$newElement.data("headerHeight"),k=this.$newElement.data("searchHeight"),l=this.$newElement.data("actionsHeight"),m=this.$lis.filter(".divider").outerHeight(!0),n=parseInt(f.css("padding-top"))+parseInt(f.css("padding-bottom"))+parseInt(f.css("border-top-width"))+parseInt(f.css("border-bottom-width")),o=this.options.hideDisabled?", .disabled":"",p=a(window),q=n+parseInt(f.css("margin-top"))+parseInt(f.css("margin-bottom"))+2,r=function(){c=e.$newElement.offset().top-p.scrollTop(),d=p.height()-c-h};if(r(),this.options.header&&f.css("padding-top",0),"auto"==this.options.size){var s=function(){var a,h=e.$lis.not(".hide");r(),b=d-q,e.options.dropupAuto&&e.$newElement.toggleClass("dropup",c>d&&b-q<f.height()),e.$newElement.hasClass("dropup")&&(b=c-q),a=h.length+h.filter(".dropdown-header").length>3?3*i+q-2:0,f.css({"max-height":b+"px",overflow:"hidden","min-height":a+j+k+l+"px"}),g.css({"max-height":b-j-k-l-n+"px","overflow-y":"auto","min-height":Math.max(a-n,0)+"px"})};s(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",s),a(window).off("resize.getSize").on("resize.getSize",s),a(window).off("scroll.getSize").on("scroll.getSize",s)}else if(this.options.size&&"auto"!=this.options.size&&f.find("li"+o).length>this.options.size){var t=this.$lis.not(".divider"+o).find(" > *").slice(0,this.options.size).last().parent().index(),u=this.$lis.slice(0,t+1).filter(".divider").length;b=i*this.options.size+u*m+n,e.options.dropupAuto&&this.$newElement.toggleClass("dropup",c>d&&b<f.height()),f.css({"max-height":b+j+k+l+"px",overflow:"hidden"}),g.css({"max-height":b-n+"px","overflow-y":"auto"})}},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var a=this.$newElement.clone().appendTo("body"),b=a.find("> .dropdown-menu").css("width"),c=a.css("width","auto").find("> button").css("width");a.remove(),this.$newElement.css("width",Math.max(parseInt(b),parseInt(c))+"px")}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var b,c,d=this,e="<div />",f=a(e),g=function(a){f.addClass(a.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),c=a.hasClass("dropup")?0:a[0].offsetHeight,f.css({top:b.top+c,left:b.left,width:a[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){d.isDisabled()||(g(a(this)),f.appendTo(d.options.container),f.toggleClass("open",!a(this).hasClass("open")),f.append(d.$menu))}),a(window).resize(function(){g(d.$newElement)}),a(window).on("scroll",function(){g(d.$newElement)}),a("html").on("click",function(b){a(b.target).closest(d.$newElement).length<1&&f.removeClass("open")})},setSelected:function(a,b){this.findLis(),this.$lis.filter('[data-original-index="'+a+'"]').toggleClass("selected",b)},setDisabled:function(a,b){this.findLis(),b?this.$lis.filter('[data-original-index="'+a+'"]').addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):this.$lis.filter('[data-original-index="'+a+'"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var a=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1==this.$button.attr("tabindex")&&(this.$element.data("tabindex")||this.$button.removeAttr("tabindex"))),this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var b=this;this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),this.$newElement.on("click",function(){b.setSize(),b.options.liveSearch||b.multiple||setTimeout(function(){b.$menu.find(".selected a").focus()},10)}),this.$menu.on("click","li a",function(c){var d=a(this),e=d.parent().data("originalIndex"),f=b.$element.val(),g=b.$element.prop("selectedIndex");if(b.multiple&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var h=b.$element.find("option"),i=h.eq(e),j=i.prop("selected"),k=i.parent("optgroup"),l=b.options.maxOptions,m=k.data("maxOptions")||!1;if(b.multiple){if(i.prop("selected",!j),b.setSelected(e,!j),d.blur(),l!==!1||m!==!1){var n=l<h.filter(":selected").length,o=m<k.find("option:selected").length;if(l&&n||m&&o)if(l&&1==l)h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);else if(m&&1==m){k.find("option:selected").prop("selected",!1),i.prop("selected",!0);var p=d.data("optgroup");b.$menu.find(".selected").has('a[data-optgroup="'+p+'"]').removeClass("selected"),b.setSelected(e,!0)}else{var q="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(l,m):b.options.maxOptionsText,r=q[0].replace("{n}",l),s=q[1].replace("{n}",m),t=a('<div class="notify"></div>');q[2]&&(r=r.replace("{var}",q[2][l>1?0:1]),s=s.replace("{var}",q[2][m>1?0:1])),i.prop("selected",!1),b.$menu.append(t),l&&n&&(t.append(a("<div>"+r+"</div>")),b.$element.trigger("maxReached.bs.select")),m&&o&&(t.append(a("<div>"+s+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(e,!1)},10),t.delay(750).fadeOut(300,function(){a(this).remove()})}}}else h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(f!=b.$element.val()&&b.multiple||g!=b.$element.prop("selectedIndex")&&!b.multiple)&&b.$element.change()}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(a){a.target==this&&(a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus())}),this.$menu.on("click","li.divider, li.dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.focus()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).is(".bs-select-all")?b.selectAll():b.deselectAll(),b.$element.change()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var b=this,e=a('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){b.$menu.find(".active").removeClass("active"),b.$searchbox.val()&&(b.$searchbox.val(""),b.$lis.not(".is-hidden").removeClass("hide"),e.parent().length&&e.remove()),b.multiple||b.$menu.find(".selected").addClass("active"),setTimeout(function(){b.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){b.$searchbox.val()?(b.options.searchAccentInsensitive?b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":aicontains("+c(b.$searchbox.val())+")").parent().addClass("hide"):b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains("+b.$searchbox.val()+")").parent().addClass("hide"),b.$menu.find("li").filter(":visible:not(.no-results)").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(b.options.noneResultsText+' "'+d(b.$searchbox.val())+'"').show(),b.$menu.find("li").last().after(e))):(b.$lis.not(".is-hidden").removeClass("hide"),e.parent().length&&e.remove()),b.$menu.find("li.active").removeClass("active"),b.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(),a(this).focus()})},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},selectAll:function(){this.findLis(),this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click()},deselectAll:function(){this.findLis(),this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click()},keydown:function(b){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a("[role=menu] li a",n),l=o.$menu.parent().hasClass("open"),!l&&/([0-9]|[A-z])/.test(String.fromCharCode(b.keyCode))&&(o.options.container?o.$newElement.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),o.$searchbox.focus()),o.options.liveSearch&&(/(^9$|27)/.test(b.keyCode.toString(10))&&l&&0===o.$menu.find(".active").length&&(b.preventDefault(),o.$menu.parent().removeClass("open"),o.$button.focus()),d=a("[role=menu] li:not(.divider):not(.dropdown-header):visible",n),m.val()||/(38|40)/.test(b.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$newElement.find("li").filter(o.options.searchAccentInsensitive?":aicontains("+c(p[b.keyCode])+")":":icontains("+p[b.keyCode]+")"))),d.length){if(/(38|40)/.test(b.keyCode.toString(10)))e=d.index(d.filter(":focus")),g=d.parent(":not(.disabled):visible").first().index(),h=d.parent(":not(.disabled):visible").last().index(),f=d.eq(e).parent().nextAll(":not(.disabled):visible").eq(0).index(),i=d.eq(e).parent().prevAll(":not(.disabled):visible").eq(0).index(),j=d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).is(":not(.disabled)")&&a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.filter(":not(.disabled):visible").first().data("index"),h=d.filter(":not(.disabled):visible").last().data("index"),f=d.eq(e).nextAll(":not(.disabled):visible").eq(0).data("index"),i=d.eq(e).prevAll(":not(.disabled):visible").eq(0).data("index"),j=d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index")),k=m.data("prevIndex"),38==b.keyCode&&(o.options.liveSearch&&(e-=1),e!=j&&e>i&&(e=i),g>e&&(e=g),e==k&&(e=h)),40==b.keyCode&&(o.options.liveSearch&&(e+=1),-1==e&&(e=0),e!=j&&f>e&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(b.preventDefault(),m.is(".dropdown-toggle")||(d.removeClass("active"),d.eq(e).addClass("active").find("a").focus(),m.focus())):d.eq(e).focus();else if(!m.is("input")){var q,r,s=[];d.each(function(){a(this).parent().is(":not(.disabled)")&&a.trim(a(this).text().toLowerCase()).substring(0,1)==p[b.keyCode]&&s.push(a(this).parent().index())}),q=a(document).data("keycount"),q++,a(document).data("keycount",q),r=a.trim(a(":focus").text().toLowerCase()).substring(0,1),r!=p[b.keyCode]?(q=1,a(document).data("keycount",q)):q>=s.length&&(a(document).data("keycount",0),q>s.length&&(q=1)),d.eq(s[q-1]).focus()}(/(13|32)/.test(b.keyCode.toString(10))||/(^9$)/.test(b.keyCode.toString(10))&&o.options.selectOnTab)&&l&&(/(32)/.test(b.keyCode.toString(10))||b.preventDefault(),o.options.liveSearch?/(32)/.test(b.keyCode.toString(10))||(o.$menu.find(".active a").click(),m.focus()):a(":focus").click(),a(document).data("keycount",0)),(/(^9$|27)/.test(b.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(b.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.$lis=null,this.reloadLi(),this.render(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},update:function(){this.reloadLi(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()}};var g=a.fn.selectpicker;a.fn.selectpicker=e,a.fn.selectpicker.Constructor=f,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=g,this},a(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",f.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);e.call(b,b.data())})})}(jQuery);
(function($){jQuery.fn.extend({slimScroll:function(options){var defaults={width:'auto',height:'250px',size:'7px',color:'#000',position:'right',distance:'1px',start:'top',opacity:.4,alwaysVisible:false,disableFadeOut:false,railVisible:false,railColor:'#333',railOpacity:.2,railDraggable:true,railClass:'slimScrollRail',barClass:'slimScrollBar',wrapperClass:'slimScrollDiv',allowPageScroll:false,wheelStep:20,touchScrollStep:200,borderRadius:'7px',railBorderRadius:'7px'};var o=$.extend(defaults,options);this.each(function(){var isOverPanel,isOverBar,isDragg,queueHide,touchDif,barHeight,percentScroll,lastScroll,divS='<div></div>',minBarHeight=30,releaseScroll=false;var me=$(this);if(me.parent().hasClass(o.wrapperClass)){var offset=me.scrollTop();bar=me.parent().find('.'+o.barClass);rail=me.parent().find('.'+o.railClass);getBarHeight();if($.isPlainObject(options)){if('height'in options&&options.height=='auto'){me.parent().css('height','auto');me.css('height','auto');var height=me.parent().parent().height();me.parent().css('height',height);me.css('height',height)}if('scrollTo'in options){offset=parseInt(o.scrollTo)}else if('scrollBy'in options){offset+=parseInt(o.scrollBy)}else if('destroy'in options){bar.remove();rail.remove();me.unwrap();return}scrollContent(offset,false,true)}return}o.height=(o.height=='auto')?me.parent().height():o.height;var wrapper=$(divS).addClass(o.wrapperClass).css({position:'relative',overflow:'hidden',width:o.width,height:o.height});me.css({overflow:'hidden',width:o.width,height:o.height});var rail=$(divS).addClass(o.railClass).css({width:o.size,height:'100%',position:'absolute',top:0,display:(o.alwaysVisible&&o.railVisible)?'block':'none','border-radius':o.railBorderRadius,background:o.railColor,opacity:o.railOpacity,zIndex:90});var bar=$(divS).addClass(o.barClass).css({background:o.color,width:o.size,position:'absolute',top:0,opacity:o.opacity,display:o.alwaysVisible?'block':'none','border-radius':o.borderRadius,BorderRadius:o.borderRadius,MozBorderRadius:o.borderRadius,WebkitBorderRadius:o.borderRadius,zIndex:99});var posCss=(o.position=='right')?{right:o.distance}:{left:o.distance};rail.css(posCss);bar.css(posCss);me.wrap(wrapper);me.parent().append(bar);me.parent().append(rail);if(o.railDraggable){bar.bind("mousedown",function(e){var $doc=$(document);isDragg=true;t=parseFloat(bar.css('top'));pageY=e.pageY;$doc.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY;bar.css('top',currTop);scrollContent(0,bar.position().top,false)});$doc.bind("mouseup.slimscroll",function(e){isDragg=false;hideBar();$doc.unbind('.slimscroll')});return false}).bind("selectstart.slimscroll",function(e){e.stopPropagation();e.preventDefault();return false})}rail.hover(function(){showBar()},function(){hideBar()});bar.hover(function(){isOverBar=true},function(){isOverBar=false});me.hover(function(){isOverPanel=true;showBar();hideBar()},function(){isOverPanel=false;hideBar()});me.bind('touchstart',function(e,b){if(e.originalEvent.touches.length){touchDif=e.originalEvent.touches[0].pageY}});me.bind('touchmove',function(e){if(!releaseScroll){e.originalEvent.preventDefault()}if(e.originalEvent.touches.length){var diff=(touchDif-e.originalEvent.touches[0].pageY)/o.touchScrollStep;scrollContent(diff,true);touchDif=e.originalEvent.touches[0].pageY}});getBarHeight();if(o.start==='bottom'){bar.css({top:me.outerHeight()-bar.outerHeight()});scrollContent(0,true)}else if(o.start!=='top'){scrollContent($(o.start).position().top,null,true);if(!o.alwaysVisible){bar.hide()}}attachWheel();function _onWheel(e){if(!isOverPanel){return}var e=e||window.event;var delta=0;if(e.wheelDelta){delta=-e.wheelDelta/120}if(e.detail){delta=e.detail/3}var target=e.target||e.srcTarget||e.srcElement;if($(target).closest('.'+o.wrapperClass).is(me.parent())){scrollContent(delta,true)}if(e.preventDefault&&!releaseScroll){e.preventDefault()}if(!releaseScroll){e.returnValue=false}}function scrollContent(y,isWheel,isJump){releaseScroll=false;var delta=y;var maxTop=me.outerHeight()-bar.outerHeight();if(isWheel){delta=parseInt(bar.css('top'))+y*parseInt(o.wheelStep)/100*bar.outerHeight();delta=Math.min(Math.max(delta,0),maxTop);delta=(y>0)?Math.ceil(delta):Math.floor(delta);bar.css({top:delta+'px'})}percentScroll=parseInt(bar.css('top'))/(me.outerHeight()-bar.outerHeight());delta=percentScroll*(me[0].scrollHeight-me.outerHeight());if(isJump){delta=y;var offsetTop=delta/me[0].scrollHeight*me.outerHeight();offsetTop=Math.min(Math.max(offsetTop,0),maxTop);bar.css({top:offsetTop+'px'})}me.scrollTop(delta);me.trigger('slimscrolling',~~delta);showBar();hideBar()}function attachWheel(){if(window.addEventListener){this.addEventListener('DOMMouseScroll',_onWheel,false);this.addEventListener('mousewheel',_onWheel,false);this.addEventListener('MozMousePixelScroll',_onWheel,false)}else{document.attachEvent("onmousewheel",_onWheel)}}function getBarHeight(){barHeight=Math.max((me.outerHeight()/me[0].scrollHeight)*me.outerHeight(),minBarHeight);bar.css({height:barHeight+'px'});var display=barHeight==me.outerHeight()?'none':'block';bar.css({display:display})}function showBar(){getBarHeight();clearTimeout(queueHide);if(percentScroll==~~percentScroll){releaseScroll=o.allowPageScroll;if(lastScroll!=percentScroll){var msg=(~~percentScroll==0)?'top':'bottom';me.trigger('slimscroll',msg)}}else{releaseScroll=false}lastScroll=percentScroll;if(barHeight>=me.outerHeight()){releaseScroll=true;return}bar.stop(true,true).fadeIn('fast');if(o.railVisible){rail.stop(true,true).fadeIn('fast')}}function hideBar(){if(!o.alwaysVisible){queueHide=setTimeout(function(){if(!(o.disableFadeOut&&isOverPanel)&&!isOverBar&&!isDragg){bar.fadeOut('slow');rail.fadeOut('slow')}},1000)}}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c(a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(this),function(a){function b(a){"function"==typeof a&&(b.isReady?a():f.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==e.readyState;if(!b.isReady&&!c){b.isReady=!0;for(var d=0,g=f.length;g>d;d++){var h=f[d];h()}}}function d(d){return d.bind(e,"DOMContentLoaded",c),d.bind(e,"readystatechange",c),d.bind(a,"load",c),b}var e=a.document,f=[];b.isReady=!1,"function"==typeof define&&define.amd?(b.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],d)):a.docReady=d(a.eventie)}(this),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var e={};e.width=a.offsetWidth,e.height=a.offsetHeight;for(var k=e.isBorderBox=!(!j||!d[j]||"border-box"!==d[j]),l=0,m=g.length;m>l;l++){var n=g[l],o=d[n];o=h(a,o);var p=parseFloat(o);e[n]=isNaN(p)?0:p}var q=e.paddingLeft+e.paddingRight,r=e.paddingTop+e.paddingBottom,s=e.marginLeft+e.marginRight,t=e.marginTop+e.marginBottom,u=e.borderLeftWidth+e.borderRightWidth,v=e.borderTopWidth+e.borderBottomWidth,w=k&&i,x=b(d.width);x!==!1&&(e.width=x+(w?0:q+u));var y=b(d.height);return y!==!1&&(e.height=y+(w?0:r+v)),e.innerWidth=e.width-(q+u),e.innerHeight=e.height-(r+v),e.outerWidth=e.width+s,e.outerHeight=e.height+t,e}}function h(a,b){if(e||-1===b.indexOf("%"))return b;var c=a.style,d=c.left,f=a.runtimeStyle,g=f&&f.left;return g&&(f.left=a.currentStyle.left),c.left=b,b=c.pixelLeft,c.left=d,g&&(f.left=g),b}var i,j=a("boxSizing");return function(){if(j){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[j]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);i=200===b(d.width),c.removeChild(a)}}(),d}var e=a.getComputedStyle,f=e?function(a){return e(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],d):"object"==typeof exports?module.exports=d(require("get-style-property")):a.getSize=d(a.getStyleProperty)}(window),function(a,b){function c(a,b){return a[h](b)}function d(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function e(a,b){d(a);for(var c=a.parentNode.querySelectorAll(b),e=0,f=c.length;f>e;e++)if(c[e]===a)return!0;return!1}function f(a,b){return d(a),c(a,b)}var g,h=function(){if(b.matchesSelector)return"matchesSelector";for(var a=["webkit","moz","ms","o"],c=0,d=a.length;d>c;c++){var e=a[c],f=e+"MatchesSelector";if(b[f])return f}}();if(h){var i=document.createElement("div"),j=c(i,"div");g=j?c:f}else g=e;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return g}):window.matchesSelector=g}(this,Element.prototype),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){for(var b in a)return!1;return b=null,!0}function d(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function e(a,e,f){function h(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}var i=f("transition"),j=f("transform"),k=i&&j,l=!!f("perspective"),m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[i],n=["transform","transition","transitionDuration","transitionProperty"],o=function(){for(var a={},b=0,c=n.length;c>b;b++){var d=n[b],e=f(d);e&&e!==d&&(a[d]=e)}return a}();b(h.prototype,a.prototype),h.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},h.prototype.getSize=function(){this.size=e(this.element)},h.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=o[c]||c;b[d]=a[c]}},h.prototype.getPosition=function(){var a=g(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=parseInt(a[c?"left":"right"],10),f=parseInt(a[d?"top":"bottom"],10);e=isNaN(e)?0:e,f=isNaN(f)?0:f;var h=this.layout.size;e-=c?h.paddingLeft:h.paddingRight,f-=d?h.paddingTop:h.paddingBottom,this.position.x=e,this.position.y=f},h.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={};b.isOriginLeft?(c.left=this.position.x+a.paddingLeft+"px",c.right=""):(c.right=this.position.x+a.paddingRight+"px",c.left=""),b.isOriginTop?(c.top=this.position.y+a.paddingTop+"px",c.bottom=""):(c.bottom=this.position.y+a.paddingBottom+"px",c.top=""),this.css(c),this.emitEvent("layout",[this])};var p=l?function(a,b){return"translate3d("+a+"px, "+b+"px, 0)"}:function(a,b){return"translate("+a+"px, "+b+"px)"};h.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={},k=this.layout.options;h=k.isOriginLeft?h:-h,i=k.isOriginTop?i:-i,j.transform=p(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},h.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},h.prototype.moveTo=k?h.prototype._transitionTo:h.prototype.goTo,h.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},h.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},h.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var q=j&&d(j)+",opacity";h.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:q,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(m,this,!1))},h.prototype.transition=h.prototype[i?"_transition":"_nonTransition"],h.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},h.prototype.onotransitionend=function(a){this.ontransitionend(a)};var r={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};h.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,d=r[a.propertyName]||a.propertyName;if(delete b.ingProperties[d],c(b.ingProperties)&&this.disableTransition(),d in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[d]),d in b.onEnd){var e=b.onEnd[d];e.call(this),delete b.onEnd[d]}this.emitEvent("transitionEnd",[this])}},h.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(m,this,!1),this.isTransitioning=!1},h.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var s={transitionProperty:"",transitionDuration:""};return h.prototype.removeTransitionStyles=function(){this.css(s)},h.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},h.prototype.remove=function(){if(!i||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.on("transitionEnd",function(){return a.removeElem(),!0}),this.hide()},h.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options;this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0})},h.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options;this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},h.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h}var f=a.getComputedStyle,g=f?function(a){return f(a,null)}:function(a){return a.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],e):(a.Outlayer={},a.Outlayer.Item=e(a.EventEmitter,a.getSize,a.getStyleProperty))}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){return"[object Array]"===l.call(a)}function d(a){var b=[];if(c(a))b=a;else if(a&&"number"==typeof a.length)for(var d=0,e=a.length;e>d;d++)b.push(a[d]);else b.push(a);return b}function e(a,b){var c=n(b,a);-1!==c&&b.splice(c,1)}function f(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()}function g(c,g,l,n,o,p){function q(a,c){if("string"==typeof a&&(a=h.querySelector(a)),!a||!m(a))return void(i&&i.error("Bad "+this.constructor.namespace+" element: "+a));this.element=a,this.options=b({},this.constructor.defaults),this.option(c);var d=++r;this.element.outlayerGUID=d,s[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var r=0,s={};return q.namespace="outlayer",q.Item=p,q.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},b(q.prototype,l.prototype),q.prototype.option=function(a){b(this.options,a)},q.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),b(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},q.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},q.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},q.prototype._filterFindItemElements=function(a){a=d(a);for(var b=this.options.itemSelector,c=[],e=0,f=a.length;f>e;e++){var g=a[e];if(m(g))if(b){o(g,b)&&c.push(g);for(var h=g.querySelectorAll(b),i=0,j=h.length;j>i;i++)c.push(h[i])}else c.push(g)}return c},q.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},q.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},q.prototype._init=q.prototype.layout,q.prototype._resetLayout=function(){this.getSize()},q.prototype.getSize=function(){this.size=n(this.element)},q.prototype._getMeasurement=function(a,b){var c,d=this.options[a];d?("string"==typeof d?c=this.element.querySelector(d):m(d)&&(c=d),this[a]=c?n(c)[b]:d):this[a]=0},q.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},q.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},q.prototype._layoutItems=function(a,b){function c(){d.emitEvent("layoutComplete",[d,a])}var d=this;if(!a||!a.length)return void c();this._itemsOn(a,"layout",c);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f],i=this._getItemLayoutPosition(h);i.item=h,i.isInstant=b||h.isLayoutInstant,e.push(i)}this._processLayoutQueue(e)},q.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},q.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},q.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},q.prototype._postLayout=function(){this.resizeContainer()},q.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},q.prototype._getContainerSize=k,q.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},q.prototype._itemsOn=function(a,b,c){function d(){return e++,e===f&&c.call(g),!0}for(var e=0,f=a.length,g=this,h=0,i=a.length;i>h;h++){var j=a[h];j.on(b,d)}},q.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},q.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},q.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},q.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e(d,this.stamps),this.unignore(d)}},q.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=d(a)):void 0},q.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},q.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},q.prototype._manageStamp=k,q.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,d=n(a),e={left:b.left-c.left-d.marginLeft,top:b.top-c.top-d.marginTop,right:c.right-b.right-d.marginRight,bottom:c.bottom-b.bottom-d.marginBottom};return e},q.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},q.prototype.bindResize=function(){this.isResizeBound||(c.bind(a,"resize",this),this.isResizeBound=!0)},q.prototype.unbindResize=function(){this.isResizeBound&&c.unbind(a,"resize",this),this.isResizeBound=!1},q.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},q.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},q.prototype.needsResizeLayout=function(){var a=n(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},q.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},q.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},q.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},q.prototype.reveal=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.reveal()}},q.prototype.hide=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.hide()}},q.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},q.prototype.getItems=function(a){if(a&&a.length){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c],f=this.getItem(e);f&&b.push(f)}return b}},q.prototype.remove=function(a){a=d(a);var b=this.getItems(a);if(b&&b.length){this._itemsOn(b,"remove",function(){this.emitEvent("removeComplete",[this,b])});for(var c=0,f=b.length;f>c;c++){var g=b[c];g.remove(),e(g,this.items)}}},q.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize(),delete this.element.outlayerGUID,j&&j.removeData(this.element,this.constructor.namespace)},q.data=function(a){var b=a&&a.outlayerGUID;return b&&s[b]},q.create=function(a,c){function d(){q.apply(this,arguments)}return Object.create?d.prototype=Object.create(q.prototype):b(d.prototype,q.prototype),d.prototype.constructor=d,d.defaults=b({},q.defaults),b(d.defaults,c),d.prototype.settings={},d.namespace=a,d.data=q.data,d.Item=function(){p.apply(this,arguments)},d.Item.prototype=new p,g(function(){for(var b=f(a),c=h.querySelectorAll(".js-"+b),e="data-"+b+"-options",g=0,k=c.length;k>g;g++){var l,m=c[g],n=m.getAttribute(e);try{l=n&&JSON.parse(n)}catch(o){i&&i.error("Error parsing "+e+" on "+m.nodeName.toLowerCase()+(m.id?"#"+m.id:"")+": "+o);continue}var p=new d(m,l);j&&j.data(m,a,p)}}),j&&j.bridget&&j.bridget(a,d),d},q.Item=p,q}var h=a.document,i=a.console,j=a.jQuery,k=function(){},l=Object.prototype.toString,m="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},n=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],g):a.Outlayer=g(a.eventie,a.docReady,a.EventEmitter,a.getSize,a.matchesSelector,a.Outlayer.Item)}(window),function(a){function b(a,b){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}var c=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(e===b)return c}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],b):a.Masonry=b(a.Outlayer,a.getSize)}(window);!function(a,b,c){var d=a.jQuery||a.Zepto||a.ender||a.elo;"undefined"!=typeof module&&module.exports?module.exports=c(d):a[b]=c(d)}(this,"Response",function(a){function b(a){return a===+a}function c(a,b){return function(){return a.apply(b,arguments)}}function d(a,b){var c=this.call();return c>=(a||0)&&(!b||b>=c)}function e(a,b,c){for(var d=[],e=a.length,f=0;e>f;)d[f]=b.call(c,a[f],f++,a);return d}function f(a){return a?i("string"==typeof a?a.split(" "):a):[]}function g(a,b,c){if(null==a)return a;for(var d=a.length,e=0;d>e;)b.call(c||a[e],a[e],e++,a);return a}function h(a,b,c){null==b&&(b=""),null==c&&(c="");for(var d=[],e=a.length,f=0;e>f;f++)null==a[f]||d.push(b+a[f]+c);return d}function i(a,b,c){var d,e,f,g=[],h=0,i=0,j="function"==typeof b,k=!0===c;for(e=a&&a.length,c=k?null:c;e>i;i++)f=a[i],d=j?!b.call(c,f,i,a):b?typeof f!==b:!f,d===k&&(g[h++]=f);return g}function j(a,c){if(null==a||null==c)return a;if("object"==typeof c&&b(c.length))_.apply(a,i(c,"undefined",!0));else for(var d in c)cb.call(c,d)&&void 0!==c[d]&&(a[d]=c[d]);return a}function k(a,c,d){return null==a?a:("object"==typeof a&&!a.nodeType&&b(a.length)?g(a,c,d):c.call(d||a,a),a)}function l(a){var b=T.devicePixelRatio;return null==a?b||(l(2)?2:l(1.5)?1.5:l(1)?1:0):isFinite(a)?b&&b>0?b>=a:(a="only all and (min--moz-device-pixel-ratio:"+a+")",zb(a)?!0:zb(a.replace("-moz-",""))):!1}function m(a){return a.replace(tb,"$1").replace(sb,function(a,b){return b.toUpperCase()})}function n(a){return"data-"+(a?a.replace(tb,"$1").replace(rb,"$1-$2").toLowerCase():a)}function o(a){var b;return"string"==typeof a&&a?"false"===a?!1:"true"===a?!0:"null"===a?null:"undefined"===a||(b=+a)||0===b||"NaN"===a?b:a:a}function p(a){return!a||a.nodeType?a:a[0]}function q(a,b,c){var d,e,f,g,h;if(a.attributes)for(d="boolean"==typeof c?/^data-/:d,g=0,h=a.attributes.length;h>g;)(f=a.attributes[g++])&&(e=""+f.name,d&&d.test(e)!==c||null==f.value||b.call(a,f.value,e,f))}function r(a){var b;if(a&&1===a.nodeType)return(b=Y&&a.dataset)?b:(b={},q(a,function(a,c){b[m(c)]=""+a},!0),b)}function s(a,b,c){for(var d in b)cb.call(b,d)&&c(a,d,b[d])}function t(a,b,c){if(a=p(a),a&&a.setAttribute){if(void 0===b&&c===b)return r(a);var d=db(b)&&n(b[0]);if("object"!=typeof b||d){if(b=d||n(b),!b)return;return void 0===c?(b=a.getAttribute(b),null==b?c:d?o(b):""+b):(a.setAttribute(b,c=""+c),c)}b&&s(a,b,t)}}function u(a,b){b=f(b),k(a,function(a){g(b,function(b){a.removeAttribute(n(b))})})}function v(a){for(var b,c=[],d=0,e=a.length;e>d;)(b=a[d++])&&c.push("["+n(b.replace(qb,"").replace(".","\\."))+"]");return c.join()}function w(b){return a(v(f(b)))}function x(){return window.pageXOffset||V.scrollLeft}function y(){return window.pageYOffset||V.scrollTop}function z(a,b){var c=a.getBoundingClientRect?a.getBoundingClientRect():{};return b="number"==typeof b?b||0:0,{top:(c.top||0)-b,left:(c.left||0)-b,bottom:(c.bottom||0)+b,right:(c.right||0)+b}}function A(a,b){var c=z(p(a),b);return!!c&&c.right>=0&&c.left<=Ab()}function B(a,b){var c=z(p(a),b);return!!c&&c.bottom>=0&&c.top<=Bb()}function C(a,b){var c=z(p(a),b);return!!c&&c.bottom>=0&&c.top<=Bb()&&c.right>=0&&c.left<=Ab()}function D(a){var b={img:1,input:1,source:3,embed:3,track:3,iframe:5,audio:5,video:5,script:5},c=b[a.nodeName.toLowerCase()]||-1;return 4>c?c:null!=a.getAttribute("src")?5:-5}function E(a,b,c){var d;if(!a||null==b)throw new TypeError("@store");return c="string"==typeof c&&c,k(a,function(a){d=c?a.getAttribute(c):0<D(a)?a.getAttribute("src"):a.innerHTML,null==d?u(a,b):t(a,b,d)}),N}function F(a,b){var c=[];return a&&b&&g(f(b),function(b){c.push(t(a,b))},a),c}function G(a,b){return"string"==typeof a&&"function"==typeof b&&(fb[a]=b,gb[a]=1),N}function H(a){return X.on("resize",a),N}function I(a,b){var c,d,e=wb.crossover;return"function"==typeof a&&(c=b,b=a,a=c),d=a?""+a+e:e,X.on(d,b),N}function J(a){return k(a,function(a){W(a),H(a)}),N}function K(a){return k(a,function(a){if("object"!=typeof a)throw new TypeError("@create");var b,c=ub(O).configure(a),d=c.verge,e=c.breakpoints,f=vb("scroll"),h=vb("resize");e.length&&(b=e[0]||e[1]||!1,W(function(){function a(){c.reset(),g(c.$e,function(a,b){c[b].decideValue().updateDOM()}).trigger(i)}function e(){g(c.$e,function(a,b){C(c[b].$e,d)&&c[b].updateDOM()})}var i=wb.allLoaded,j=!!c.lazy;g(c.target().$e,function(a,b){c[b]=ub(c).prepareData(a),(!j||C(c[b].$e,d))&&c[b].updateDOM()}),c.dynamic&&(c.custom||lb>b)&&H(a,h),j&&(X.on(f,e),c.$e.one(i,function(){X.off(f,e)}))}))}),N}function L(a){return P[Q]===N&&(P[Q]=R),"function"==typeof a&&a.call(P,N),N}if("function"!=typeof a)try{return void console.warn("response.js aborted due to missing dependency")}catch(M){}var N,O,P=this,Q="Response",R=P[Q],S="init"+Q,T=window,U=document,V=U.documentElement,W=a.domReady||a,X=a(T),Y="undefined"!=typeof DOMStringMap,Z=Array.prototype,$=Object.prototype,_=Z.push,ab=Z.concat,bb=$.toString,cb=$.hasOwnProperty,db=Array.isArray||function(a){return"[object Array]"===bb.call(a)},eb={width:[0,320,481,641,961,1025,1281],height:[0,481],ratio:[1,1.5,2]},fb={},gb={},hb={all:[]},ib=1,jb=screen.width,kb=screen.height,lb=jb>kb?jb:kb,mb=jb+kb-lb,nb=function(){return jb},ob=function(){return kb},pb=/[^a-z0-9_\-\.]/gi,qb=/^[\W\s]+|[\W\s]+$|/g,rb=/([a-z])([A-Z])/g,sb=/-(.)/g,tb=/^data-(.+)$/,ub=Object.create||function(a){function b(){}return b.prototype=a,new b},vb=function(a,b){return b=b||Q,a.replace(qb,"")+"."+b.replace(qb,"")},wb={allLoaded:vb("allLoaded"),crossover:vb("crossover")},xb=T.matchMedia||T.msMatchMedia,yb=xb?c(xb,T):function(){return{}},zb=xb?function(a){return!!xb.call(T,a)}:function(){return!1},Ab=function(){var a=V.clientWidth,b=T.innerWidth;return b>a?b:a},Bb=function(){var a=V.clientHeight,b=T.innerHeight;return b>a?b:a},Cb=c(d,Ab),Db=c(d,Bb),Eb={band:c(d,nb),wave:c(d,ob)};return O=function(){function b(a){return"string"==typeof a?a.toLowerCase().replace(pb,""):""}function c(a,b){return a-b}var d=wb.crossover,k=Math.min;return{$e:0,mode:0,breakpoints:null,prefix:null,prop:"width",keys:[],dynamic:null,custom:0,values:[],fn:0,verge:null,newValue:0,currValue:1,aka:null,lazy:null,i:0,uid:null,reset:function(){for(var a=this.breakpoints,b=a.length,c=0;!c&&b--;)this.fn(a[b])&&(c=b);return c!==this.i&&(X.trigger(d).trigger(this.prop+d),this.i=c||0),this},configure:function(a){j(this,a);var d,l,m,n,o,p=!0,q=this.prop;if(this.uid=ib++,null==this.verge&&(this.verge=k(lb,500)),!(this.fn=fb[q]))throw new TypeError("@create");if(null==this.dynamic&&(this.dynamic="device"!==q.slice(0,6)),this.custom=gb[q],m=this.prefix?i(e(f(this.prefix),b)):["min-"+q+"-"],n=1<m.length?m.slice(1):0,this.prefix=m[0],l=this.breakpoints,db(l)){if(g(l,function(a){if(!a&&0!==a)throw"invalid breakpoint";p=p&&isFinite(a)}),p&&l.sort(c),!l.length)throw new TypeError(".breakpoints")}else if(l=eb[q]||eb[q.split("-").pop()],!l)throw new TypeError(".prop");if(this.breakpoints=l,this.keys=h(this.breakpoints,this.prefix),this.aka=null,n){for(o=[],d=n.length;d--;)o.push(h(this.breakpoints,n[d]));this.aka=o,this.keys=ab.apply(this.keys,o)}return hb.all=hb.all.concat(hb[this.uid]=this.keys),this},target:function(){return this.$e=a(v(hb[this.uid])),E(this.$e,S),this.keys.push(S),this},decideValue:function(){for(var a=null,b=this.breakpoints,c=b.length,d=c;null==a&&d--;)this.fn(b[d])&&(a=this.values[d]);return this.newValue="string"==typeof a?a:this.values[c],this},prepareData:function(b){if(this.$e=a(b),this.mode=D(b),this.values=F(this.$e,this.keys),this.aka)for(var c=this.aka.length;c--;)this.values=j(this.values,F(this.$e,this.aka[c]));return this.decideValue()},updateDOM:function(){return this.currValue===this.newValue?this:(this.currValue=this.newValue,0<this.mode?this.$e[0].setAttribute("src",this.newValue):null==this.newValue?this.$e.empty&&this.$e.empty():this.$e.html?this.$e.html(this.newValue):(this.$e.empty&&this.$e.empty(),this.$e[0].innerHTML=this.newValue),this)}}}(),fb.width=Cb,fb.height=Db,fb["device-width"]=Eb.band,fb["device-height"]=Eb.wave,fb["device-pixel-ratio"]=l,N={deviceMin:function(){return mb},deviceMax:function(){return lb},noConflict:L,create:K,addTest:G,datatize:n,camelize:m,render:o,store:E,access:F,target:w,object:ub,crossover:I,action:J,resize:H,ready:W,affix:h,sift:i,dpr:l,deletes:u,scrollX:x,scrollY:y,deviceW:nb,deviceH:ob,device:Eb,inX:A,inY:B,route:k,merge:j,media:yb,mq:zb,wave:Db,band:Cb,map:e,each:g,inViewport:C,dataset:t,viewportH:Bb,viewportW:Ab},W(function(){var b=t(U.body,"responsejs"),c=T.JSON&&JSON.parse||a.parseJSON;b=b&&c?c(b):b,b&&b.create&&K(b.create),V.className=V.className.replace(/(^|\s)(no-)?responsejs(\s|$)/,"$1$3")+" responsejs "}),N});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(b,e){function f(){return m.update(),h(),m}function g(){r.css(x,m.contentPosition/m.trackRatio),o.css(x,-m.contentPosition),p.css(w,m.trackSize),q.css(w,m.trackSize),r.css(w,m.thumbSize)}function h(){u?n[0].ontouchstart=function(a){1===a.touches.length&&(a.stopPropagation(),i(a.touches[0]))}:(r.bind("mousedown",i),q.bind("mousedown",k)),a(window).resize(function(){m.update("relative")}),m.options.wheel&&window.addEventListener?b[0].addEventListener(v,j,!1):m.options.wheel&&(b[0].onmousewheel=j)}function i(b){a("body").addClass("noSelect"),s=t?b.pageX:b.pageY,m.thumbPosition=parseInt(r.css(x),10)||0,u?(document.ontouchmove=function(a){a.preventDefault(),k(a.touches[0])},document.ontouchend=l):(a(document).bind("mousemove",k),a(document).bind("mouseup",l),r.bind("mouseup",l))}function j(c){if(m.contentRatio<1){var d=c||window.event,e="delta"+m.options.axis.toUpperCase(),f=-(d[e]||d.detail||-1/3*d.wheelDelta)/40;m.contentPosition-=f*m.options.wheelSpeed,m.contentPosition=Math.min(m.contentSize-m.viewportSize,Math.max(0,m.contentPosition)),b.trigger("move"),r.css(x,m.contentPosition/m.trackRatio),o.css(x,-m.contentPosition),(m.options.wheelLock||m.contentPosition!==m.contentSize-m.viewportSize&&0!==m.contentPosition)&&(d=a.event.fix(d),d.preventDefault())}}function k(a){if(m.contentRatio<1){var c=t?a.pageX:a.pageY,d=c-s;m.options.scrollInvert&&u&&(d=s-c);var e=Math.min(m.trackSize-m.thumbSize,Math.max(0,m.thumbPosition+d));m.contentPosition=e*m.trackRatio,b.trigger("move"),r.css(x,e),o.css(x,-m.contentPosition)}}function l(){a("body").removeClass("noSelect"),a(document).unbind("mousemove",k),a(document).unbind("mouseup",l),r.unbind("mouseup",l),document.ontouchmove=document.ontouchend=null}this.options=a.extend({},d,e),this._defaults=d,this._name=c;var m=this,n=b.find(".viewport"),o=b.find(".overview"),p=b.find(".scrollbar"),q=p.find(".track"),r=p.find(".thumb"),s=0,t="x"===this.options.axis,u="ontouchstart"in document.documentElement,v="onwheel"in document||document.documentMode>=9?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",w=t?"width":"height",x=t?"left":"top";return this.contentPosition=0,this.viewportSize=0,this.contentSize=0,this.contentRatio=0,this.trackSize=0,this.trackRatio=0,this.thumbSize=0,this.thumbPosition=0,this.update=function(a){var b=w.charAt(0).toUpperCase()+w.slice(1).toLowerCase();switch(this.viewportSize=n[0]["offset"+b],this.contentSize=o[0]["scroll"+b],this.contentRatio=this.viewportSize/this.contentSize,this.trackSize=this.options.trackSize||this.viewportSize,this.thumbSize=Math.min(this.trackSize,Math.max(0,this.options.thumbSize||this.trackSize*this.contentRatio)),this.trackRatio=this.options.thumbSize?(this.contentSize-this.viewportSize)/(this.trackSize-this.thumbSize):this.contentSize/this.trackSize,p.toggleClass("disable",this.contentRatio>=1),a){case"bottom":this.contentPosition=this.contentSize-this.viewportSize;break;case"relative":this.contentPosition=Math.min(Math.max(this.contentSize-this.viewportSize,0),Math.max(0,this.contentPosition));break;default:this.contentPosition=parseInt(a,10)||0}return g(),m},f()}var c="tinyscrollbar",d={axis:"y",wheel:!0,wheelSpeed:40,wheelLock:!0,scrollInvert:!1,trackSize:!1,thumbSize:!1};a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(a(this),d))})}});
(function(window,document,undefined){'use strict';var skrollr={get:function(){return _instance},init:function(options){return _instance||new Skrollr(options)},VERSION:'0.6.26'};var hasProp=Object.prototype.hasOwnProperty;var Math=window.Math;var getStyle=window.getComputedStyle;var documentElement;var body;var EVENT_TOUCHSTART='touchstart';var EVENT_TOUCHMOVE='touchmove';var EVENT_TOUCHCANCEL='touchcancel';var EVENT_TOUCHEND='touchend';var SKROLLABLE_CLASS='skrollable';var SKROLLABLE_BEFORE_CLASS=SKROLLABLE_CLASS+'-before';var SKROLLABLE_BETWEEN_CLASS=SKROLLABLE_CLASS+'-between';var SKROLLABLE_AFTER_CLASS=SKROLLABLE_CLASS+'-after';var SKROLLR_CLASS='skrollr';var NO_SKROLLR_CLASS='no-'+SKROLLR_CLASS;var SKROLLR_DESKTOP_CLASS=SKROLLR_CLASS+'-desktop';var SKROLLR_MOBILE_CLASS=SKROLLR_CLASS+'-mobile';var DEFAULT_EASING='linear';var DEFAULT_DURATION=1000;var DEFAULT_MOBILE_DECELERATION=0.004;var DEFAULT_SMOOTH_SCROLLING_DURATION=200;var ANCHOR_START='start';var ANCHOR_END='end';var ANCHOR_CENTER='center';var ANCHOR_BOTTOM='bottom';var SKROLLABLE_ID_DOM_PROPERTY='___skrollable_id';var rxTouchIgnoreTags=/^(?:input|textarea|button|select)$/i;var rxTrim=/^\s+|\s+$/g;var rxKeyframeAttribute=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;var rxPropValue=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;var rxPropEasing=/^(@?[a-z\-]+)\[(\w+)\]$/;var rxCamelCase=/-([a-z0-9_])/g;var rxCamelCaseFn=function(str,letter){return letter.toUpperCase()};var rxNumericValue=/[\-+]?[\d]*\.?[\d]+/g;var rxInterpolateString=/\{\?\}/g;var rxRGBAIntegerColor=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;var rxGradient=/[a-z\-]+-gradient/g;var theCSSPrefix='';var theDashedCSSPrefix='';var detectCSSPrefix=function(){var rxPrefixes=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(!getStyle){return}var style=getStyle(body,null);for(var k in style){theCSSPrefix=(k.match(rxPrefixes)||(+k==k&&style[k].match(rxPrefixes)));if(theCSSPrefix){break}}if(!theCSSPrefix){theCSSPrefix=theDashedCSSPrefix='';return}theCSSPrefix=theCSSPrefix[0];if(theCSSPrefix.slice(0,1)==='-'){theDashedCSSPrefix=theCSSPrefix;theCSSPrefix=({'-webkit-':'webkit','-moz-':'Moz','-ms-':'ms','-o-':'O'})[theCSSPrefix]}else{theDashedCSSPrefix='-'+theCSSPrefix.toLowerCase()+'-'}};var polyfillRAF=function(){var requestAnimFrame=window.requestAnimationFrame||window[theCSSPrefix.toLowerCase()+'RequestAnimationFrame'];var lastTime=_now();if(_isMobile||!requestAnimFrame){requestAnimFrame=function(callback){var deltaTime=_now()-lastTime;var delay=Math.max(0,1000/60-deltaTime);return window.setTimeout(function(){lastTime=_now();callback()},delay)}}return requestAnimFrame};var polyfillCAF=function(){var cancelAnimFrame=window.cancelAnimationFrame||window[theCSSPrefix.toLowerCase()+'CancelAnimationFrame'];if(_isMobile||!cancelAnimFrame){cancelAnimFrame=function(timeout){return window.clearTimeout(timeout)}}return cancelAnimFrame};var easings={begin:function(){return 0},end:function(){return 1},linear:function(p){return p},quadratic:function(p){return p*p},cubic:function(p){return p*p*p},swing:function(p){return(-Math.cos(p*Math.PI)/2)+0.5},sqrt:function(p){return Math.sqrt(p)},outCubic:function(p){return(Math.pow((p-1),3)+1)},bounce:function(p){var a;if(p<=0.5083){a=3}else if(p<=0.8489){a=9}else if(p<=0.96208){a=27}else if(p<=0.99981){a=91}else{return 1}return 1-Math.abs(3*Math.cos(p*a*1.028)/a)}};function Skrollr(options){documentElement=document.documentElement;body=document.body;detectCSSPrefix();_instance=this;options=options||{};_constants=options.constants||{};if(options.easing){for(var e in options.easing){easings[e]=options.easing[e]}}_edgeStrategy=options.edgeStrategy||'set';_listeners={beforerender:options.beforerender,render:options.render,keyframe:options.keyframe};_forceHeight=options.forceHeight!==false;if(_forceHeight){_scale=options.scale||1}_mobileDeceleration=options.mobileDeceleration||DEFAULT_MOBILE_DECELERATION;_smoothScrollingEnabled=options.smoothScrolling!==false;_smoothScrollingDuration=options.smoothScrollingDuration||DEFAULT_SMOOTH_SCROLLING_DURATION;_smoothScrolling={targetTop:_instance.getScrollTop()};_isMobile=((options.mobileCheck||function(){return(/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent||navigator.vendor||window.opera)})());if(_isMobile){_skrollrBody=document.getElementById('skrollr-body');if(_skrollrBody){_detect3DTransforms()}_initMobile();_updateClass(documentElement,[SKROLLR_CLASS,SKROLLR_MOBILE_CLASS],[NO_SKROLLR_CLASS])}else{_updateClass(documentElement,[SKROLLR_CLASS,SKROLLR_DESKTOP_CLASS],[NO_SKROLLR_CLASS])}_instance.refresh();_addEvent(window,'resize orientationchange',function(){var width=documentElement.clientWidth;var height=documentElement.clientHeight;if(height!==_lastViewportHeight||width!==_lastViewportWidth){_lastViewportHeight=height;_lastViewportWidth=width;_requestReflow=true}});var requestAnimFrame=polyfillRAF();(function animloop(){_render();_animFrame=requestAnimFrame(animloop)}());return _instance}Skrollr.prototype.refresh=function(elements){var elementIndex;var elementsLength;var ignoreID=false;if(elements===undefined){ignoreID=true;_skrollables=[];_skrollableIdCounter=0;elements=document.getElementsByTagName('*')}else if(elements.length===undefined){elements=[elements]}elementIndex=0;elementsLength=elements.length;for(;elementIndex<elementsLength;elementIndex++){var el=elements[elementIndex];var anchorTarget=el;var keyFrames=[];var smoothScrollThis=_smoothScrollingEnabled;var edgeStrategy=_edgeStrategy;var emitEvents=false;if(ignoreID&&SKROLLABLE_ID_DOM_PROPERTY in el){delete el[SKROLLABLE_ID_DOM_PROPERTY]}if(!el.attributes){continue}var attributeIndex=0;var attributesLength=el.attributes.length;for(;attributeIndex<attributesLength;attributeIndex++){var attr=el.attributes[attributeIndex];if(attr.name==='data-anchor-target'){anchorTarget=document.querySelector(attr.value);if(anchorTarget===null){throw'Unable to find anchor target "'+attr.value+'"'}continue}if(attr.name==='data-smooth-scrolling'){smoothScrollThis=attr.value!=='off';continue}if(attr.name==='data-edge-strategy'){edgeStrategy=attr.value;continue}if(attr.name==='data-emit-events'){emitEvents=true;continue}var match=attr.name.match(rxKeyframeAttribute);if(match===null){continue}var kf={props:attr.value,element:el,eventType:attr.name.replace(rxCamelCase,rxCamelCaseFn)};keyFrames.push(kf);var constant=match[1];if(constant){kf.constant=constant.substr(1)}var offset=match[2];if(/p$/.test(offset)){kf.isPercentage=true;kf.offset=(offset.slice(0,-1)|0)/100}else{kf.offset=(offset|0)}var anchor1=match[3];var anchor2=match[4]||anchor1;if(!anchor1||anchor1===ANCHOR_START||anchor1===ANCHOR_END){kf.mode='absolute';if(anchor1===ANCHOR_END){kf.isEnd=true}else if(!kf.isPercentage){kf.offset=kf.offset*_scale}}else{kf.mode='relative';kf.anchors=[anchor1,anchor2]}}if(!keyFrames.length){continue}var styleAttr,classAttr;var id;if(!ignoreID&&SKROLLABLE_ID_DOM_PROPERTY in el){id=el[SKROLLABLE_ID_DOM_PROPERTY];styleAttr=_skrollables[id].styleAttr;classAttr=_skrollables[id].classAttr}else{id=(el[SKROLLABLE_ID_DOM_PROPERTY]=_skrollableIdCounter++);styleAttr=el.style.cssText;classAttr=_getClass(el)}_skrollables[id]={element:el,styleAttr:styleAttr,classAttr:classAttr,anchorTarget:anchorTarget,keyFrames:keyFrames,smoothScrolling:smoothScrollThis,edgeStrategy:edgeStrategy,emitEvents:emitEvents,lastFrameIndex:-1};_updateClass(el,[SKROLLABLE_CLASS],[])}_reflow();elementIndex=0;elementsLength=elements.length;for(;elementIndex<elementsLength;elementIndex++){var sk=_skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];if(sk===undefined){continue}_parseProps(sk);_fillProps(sk)}return _instance};Skrollr.prototype.relativeToAbsolute=function(element,viewportAnchor,elementAnchor){var viewportHeight=documentElement.clientHeight;var box=element.getBoundingClientRect();var absolute=box.top;var boxHeight=box.bottom-box.top;if(viewportAnchor===ANCHOR_BOTTOM){absolute-=viewportHeight}else if(viewportAnchor===ANCHOR_CENTER){absolute-=viewportHeight/2}if(elementAnchor===ANCHOR_BOTTOM){absolute+=boxHeight}else if(elementAnchor===ANCHOR_CENTER){absolute+=boxHeight/2}absolute+=_instance.getScrollTop();return(absolute+0.5)|0};Skrollr.prototype.animateTo=function(top,options){options=options||{};var now=_now();var scrollTop=_instance.getScrollTop();_scrollAnimation={startTop:scrollTop,topDiff:top-scrollTop,targetTop:top,duration:options.duration||DEFAULT_DURATION,startTime:now,endTime:now+(options.duration||DEFAULT_DURATION),easing:easings[options.easing||DEFAULT_EASING],done:options.done};if(!_scrollAnimation.topDiff){if(_scrollAnimation.done){_scrollAnimation.done.call(_instance,false)}_scrollAnimation=undefined}return _instance};Skrollr.prototype.stopAnimateTo=function(){if(_scrollAnimation&&_scrollAnimation.done){_scrollAnimation.done.call(_instance,true)}_scrollAnimation=undefined};Skrollr.prototype.isAnimatingTo=function(){return!!_scrollAnimation};Skrollr.prototype.isMobile=function(){return _isMobile};Skrollr.prototype.setScrollTop=function(top,force){_forceRender=(force===true);if(_isMobile){_mobileOffset=Math.min(Math.max(top,0),_maxKeyFrame)}else{window.scrollTo(0,top)}return _instance};Skrollr.prototype.getScrollTop=function(){if(_isMobile){return _mobileOffset}else{return window.pageYOffset||documentElement.scrollTop||body.scrollTop||0}};Skrollr.prototype.getMaxScrollTop=function(){return _maxKeyFrame};Skrollr.prototype.on=function(name,fn){_listeners[name]=fn;return _instance};Skrollr.prototype.off=function(name){delete _listeners[name];return _instance};Skrollr.prototype.destroy=function(){var cancelAnimFrame=polyfillCAF();cancelAnimFrame(_animFrame);_removeAllEvents();_updateClass(documentElement,[NO_SKROLLR_CLASS],[SKROLLR_CLASS,SKROLLR_DESKTOP_CLASS,SKROLLR_MOBILE_CLASS]);var skrollableIndex=0;var skrollablesLength=_skrollables.length;for(;skrollableIndex<skrollablesLength;skrollableIndex++){_reset(_skrollables[skrollableIndex].element)}documentElement.style.overflow=body.style.overflow='';documentElement.style.height=body.style.height='';if(_skrollrBody){skrollr.setStyle(_skrollrBody,'transform','none')}_instance=undefined;_skrollrBody=undefined;_listeners=undefined;_forceHeight=undefined;_maxKeyFrame=0;_scale=1;_constants=undefined;_mobileDeceleration=undefined;_direction='down';_lastTop=-1;_lastViewportWidth=0;_lastViewportHeight=0;_requestReflow=false;_scrollAnimation=undefined;_smoothScrollingEnabled=undefined;_smoothScrollingDuration=undefined;_smoothScrolling=undefined;_forceRender=undefined;_skrollableIdCounter=0;_edgeStrategy=undefined;_isMobile=false;_mobileOffset=0;_translateZ=undefined};var _initMobile=function(){var initialElement;var initialTouchY;var initialTouchX;var currentElement;var currentTouchY;var currentTouchX;var lastTouchY;var deltaY;var initialTouchTime;var currentTouchTime;var lastTouchTime;var deltaTime;_addEvent(documentElement,[EVENT_TOUCHSTART,EVENT_TOUCHMOVE,EVENT_TOUCHCANCEL,EVENT_TOUCHEND].join(' '),function(e){var touch=e.changedTouches[0];currentElement=e.target;while(currentElement.nodeType===3){currentElement=currentElement.parentNode}currentTouchY=touch.clientY;currentTouchX=touch.clientX;currentTouchTime=e.timeStamp;if(!rxTouchIgnoreTags.test(currentElement.tagName)){e.preventDefault()}switch(e.type){case EVENT_TOUCHSTART:if(initialElement){initialElement.blur()}_instance.stopAnimateTo();initialElement=currentElement;initialTouchY=lastTouchY=currentTouchY;initialTouchX=currentTouchX;initialTouchTime=currentTouchTime;break;case EVENT_TOUCHMOVE:if(rxTouchIgnoreTags.test(currentElement.tagName)&&document.activeElement!==currentElement){e.preventDefault()}deltaY=currentTouchY-lastTouchY;deltaTime=currentTouchTime-lastTouchTime;_instance.setScrollTop(_mobileOffset-deltaY,true);lastTouchY=currentTouchY;lastTouchTime=currentTouchTime;break;default:case EVENT_TOUCHCANCEL:case EVENT_TOUCHEND:var distanceY=initialTouchY-currentTouchY;var distanceX=initialTouchX-currentTouchX;var distance2=distanceX*distanceX+distanceY*distanceY;if(distance2<49){if(!rxTouchIgnoreTags.test(initialElement.tagName)){initialElement.focus();var clickEvent=document.createEvent('MouseEvents');clickEvent.initMouseEvent('click',true,true,e.view,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);initialElement.dispatchEvent(clickEvent)}return}initialElement=undefined;var speed=deltaY/deltaTime;speed=Math.max(Math.min(speed,3),-3);var duration=Math.abs(speed/_mobileDeceleration);var targetOffset=speed*duration+0.5*_mobileDeceleration*duration*duration;var targetTop=_instance.getScrollTop()-targetOffset;var targetRatio=0;if(targetTop>_maxKeyFrame){targetRatio=(_maxKeyFrame-targetTop)/targetOffset;targetTop=_maxKeyFrame}else if(targetTop<0){targetRatio=-targetTop/targetOffset;targetTop=0}duration=duration*(1-targetRatio);_instance.animateTo((targetTop+0.5)|0,{easing:'outCubic',duration:duration});break}});window.scrollTo(0,0);documentElement.style.overflow=body.style.overflow='hidden'};var _updateDependentKeyFrames=function(){var viewportHeight=documentElement.clientHeight;var processedConstants=_processConstants();var skrollable;var element;var anchorTarget;var keyFrames;var keyFrameIndex;var keyFramesLength;var kf;var skrollableIndex;var skrollablesLength;var offset;var constantValue;skrollableIndex=0;skrollablesLength=_skrollables.length;for(;skrollableIndex<skrollablesLength;skrollableIndex++){skrollable=_skrollables[skrollableIndex];element=skrollable.element;anchorTarget=skrollable.anchorTarget;keyFrames=skrollable.keyFrames;keyFrameIndex=0;keyFramesLength=keyFrames.length;for(;keyFrameIndex<keyFramesLength;keyFrameIndex++){kf=keyFrames[keyFrameIndex];offset=kf.offset;constantValue=processedConstants[kf.constant]||0;kf.frame=offset;if(kf.isPercentage){offset=offset*viewportHeight;kf.frame=offset}if(kf.mode==='relative'){_reset(element);kf.frame=_instance.relativeToAbsolute(anchorTarget,kf.anchors[0],kf.anchors[1])-offset;_reset(element,true)}kf.frame+=constantValue;if(_forceHeight){if(!kf.isEnd&&kf.frame>_maxKeyFrame){_maxKeyFrame=kf.frame}}}}_maxKeyFrame=Math.max(_maxKeyFrame,_getDocumentHeight());skrollableIndex=0;skrollablesLength=_skrollables.length;for(;skrollableIndex<skrollablesLength;skrollableIndex++){skrollable=_skrollables[skrollableIndex];keyFrames=skrollable.keyFrames;keyFrameIndex=0;keyFramesLength=keyFrames.length;for(;keyFrameIndex<keyFramesLength;keyFrameIndex++){kf=keyFrames[keyFrameIndex];constantValue=processedConstants[kf.constant]||0;if(kf.isEnd){kf.frame=_maxKeyFrame-kf.offset+constantValue}}skrollable.keyFrames.sort(_keyFrameComparator)}};var _calcSteps=function(fakeFrame,actualFrame){var skrollableIndex=0;var skrollablesLength=_skrollables.length;for(;skrollableIndex<skrollablesLength;skrollableIndex++){var skrollable=_skrollables[skrollableIndex];var element=skrollable.element;var frame=skrollable.smoothScrolling?fakeFrame:actualFrame;var frames=skrollable.keyFrames;var framesLength=frames.length;var firstFrame=frames[0];var lastFrame=frames[frames.length-1];var beforeFirst=frame<firstFrame.frame;var afterLast=frame>lastFrame.frame;var firstOrLastFrame=beforeFirst?firstFrame:lastFrame;var emitEvents=skrollable.emitEvents;var lastFrameIndex=skrollable.lastFrameIndex;var key;var value;if(beforeFirst||afterLast){if(beforeFirst&&skrollable.edge===-1||afterLast&&skrollable.edge===1){continue}if(beforeFirst){_updateClass(element,[SKROLLABLE_BEFORE_CLASS],[SKROLLABLE_AFTER_CLASS,SKROLLABLE_BETWEEN_CLASS]);if(emitEvents&&lastFrameIndex>-1){_emitEvent(element,firstFrame.eventType,_direction);skrollable.lastFrameIndex=-1}}else{_updateClass(element,[SKROLLABLE_AFTER_CLASS],[SKROLLABLE_BEFORE_CLASS,SKROLLABLE_BETWEEN_CLASS]);if(emitEvents&&lastFrameIndex<framesLength){_emitEvent(element,lastFrame.eventType,_direction);skrollable.lastFrameIndex=framesLength}}skrollable.edge=beforeFirst?-1:1;switch(skrollable.edgeStrategy){case'reset':_reset(element);continue;case'ease':frame=firstOrLastFrame.frame;break;default:case'set':var props=firstOrLastFrame.props;for(key in props){if(hasProp.call(props,key)){value=_interpolateString(props[key].value);if(key.indexOf('@')===0){element.setAttribute(key.substr(1),value)}else{skrollr.setStyle(element,key,value)}}}continue}}else{if(skrollable.edge!==0){_updateClass(element,[SKROLLABLE_CLASS,SKROLLABLE_BETWEEN_CLASS],[SKROLLABLE_BEFORE_CLASS,SKROLLABLE_AFTER_CLASS]);skrollable.edge=0}}var keyFrameIndex=0;for(;keyFrameIndex<framesLength-1;keyFrameIndex++){if(frame>=frames[keyFrameIndex].frame&&frame<=frames[keyFrameIndex+1].frame){var left=frames[keyFrameIndex];var right=frames[keyFrameIndex+1];for(key in left.props){if(hasProp.call(left.props,key)){var progress=(frame-left.frame)/(right.frame-left.frame);progress=left.props[key].easing(progress);value=_calcInterpolation(left.props[key].value,right.props[key].value,progress);value=_interpolateString(value);if(key.indexOf('@')===0){element.setAttribute(key.substr(1),value)}else{skrollr.setStyle(element,key,value)}}}if(emitEvents){if(lastFrameIndex!==keyFrameIndex){if(_direction==='down'){_emitEvent(element,left.eventType,_direction)}else{_emitEvent(element,right.eventType,_direction)}skrollable.lastFrameIndex=keyFrameIndex}}break}}}};var _render=function(){if(_requestReflow){_requestReflow=false;_reflow()}var renderTop=_instance.getScrollTop();var afterAnimationCallback;var now=_now();var progress;if(_scrollAnimation){if(now>=_scrollAnimation.endTime){renderTop=_scrollAnimation.targetTop;afterAnimationCallback=_scrollAnimation.done;_scrollAnimation=undefined}else{progress=_scrollAnimation.easing((now-_scrollAnimation.startTime)/_scrollAnimation.duration);renderTop=(_scrollAnimation.startTop+progress*_scrollAnimation.topDiff)|0}_instance.setScrollTop(renderTop,true)}else if(!_forceRender){var smoothScrollingDiff=_smoothScrolling.targetTop-renderTop;if(smoothScrollingDiff){_smoothScrolling={startTop:_lastTop,topDiff:renderTop-_lastTop,targetTop:renderTop,startTime:_lastRenderCall,endTime:_lastRenderCall+_smoothScrollingDuration}}if(now<=_smoothScrolling.endTime){progress=easings.sqrt((now-_smoothScrolling.startTime)/_smoothScrollingDuration);renderTop=(_smoothScrolling.startTop+progress*_smoothScrolling.topDiff)|0}}if(_isMobile&&_skrollrBody){skrollr.setStyle(_skrollrBody,'transform','translate(0, '+ -(_mobileOffset)+'px) '+_translateZ)}if(_forceRender||_lastTop!==renderTop){_direction=(renderTop>_lastTop)?'down':(renderTop<_lastTop?'up':_direction);_forceRender=false;var listenerParams={curTop:renderTop,lastTop:_lastTop,maxTop:_maxKeyFrame,direction:_direction};var continueRendering=_listeners.beforerender&&_listeners.beforerender.call(_instance,listenerParams);if(continueRendering!==false){_calcSteps(renderTop,_instance.getScrollTop());_lastTop=renderTop;if(_listeners.render){_listeners.render.call(_instance,listenerParams)}}if(afterAnimationCallback){afterAnimationCallback.call(_instance,false)}}_lastRenderCall=now};var _parseProps=function(skrollable){var keyFrameIndex=0;var keyFramesLength=skrollable.keyFrames.length;for(;keyFrameIndex<keyFramesLength;keyFrameIndex++){var frame=skrollable.keyFrames[keyFrameIndex];var easing;var value;var prop;var props={};var match;while((match=rxPropValue.exec(frame.props))!==null){prop=match[1];value=match[2];easing=prop.match(rxPropEasing);if(easing!==null){prop=easing[1];easing=easing[2]}else{easing=DEFAULT_EASING}value=value.indexOf('!')?_parseProp(value):[value.slice(1)];props[prop]={value:value,easing:easings[easing]}}frame.props=props}};var _parseProp=function(val){var numbers=[];rxRGBAIntegerColor.lastIndex=0;val=val.replace(rxRGBAIntegerColor,function(rgba){return rgba.replace(rxNumericValue,function(n){return n/255*100+'%'})});if(theDashedCSSPrefix){rxGradient.lastIndex=0;val=val.replace(rxGradient,function(s){return theDashedCSSPrefix+s})}val=val.replace(rxNumericValue,function(n){numbers.push(+n);return'{?}'});numbers.unshift(val);return numbers};var _fillProps=function(sk){var propList={};var keyFrameIndex;var keyFramesLength;keyFrameIndex=0;keyFramesLength=sk.keyFrames.length;for(;keyFrameIndex<keyFramesLength;keyFrameIndex++){_fillPropForFrame(sk.keyFrames[keyFrameIndex],propList)}propList={};keyFrameIndex=sk.keyFrames.length-1;for(;keyFrameIndex>=0;keyFrameIndex--){_fillPropForFrame(sk.keyFrames[keyFrameIndex],propList)}};var _fillPropForFrame=function(frame,propList){var key;for(key in propList){if(!hasProp.call(frame.props,key)){frame.props[key]=propList[key]}}for(key in frame.props){propList[key]=frame.props[key]}};var _calcInterpolation=function(val1,val2,progress){var valueIndex;var val1Length=val1.length;if(val1Length!==val2.length){throw'Can\'t interpolate between "'+val1[0]+'" and "'+val2[0]+'"'}var interpolated=[val1[0]];valueIndex=1;for(;valueIndex<val1Length;valueIndex++){interpolated[valueIndex]=val1[valueIndex]+((val2[valueIndex]-val1[valueIndex])*progress)}return interpolated};var _interpolateString=function(val){var valueIndex=1;rxInterpolateString.lastIndex=0;return val[0].replace(rxInterpolateString,function(){return val[valueIndex++]})};var _reset=function(elements,undo){elements=[].concat(elements);var skrollable;var element;var elementsIndex=0;var elementsLength=elements.length;for(;elementsIndex<elementsLength;elementsIndex++){element=elements[elementsIndex];skrollable=_skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];if(!skrollable){continue}if(undo){element.style.cssText=skrollable.dirtyStyleAttr;_updateClass(element,skrollable.dirtyClassAttr)}else{skrollable.dirtyStyleAttr=element.style.cssText;skrollable.dirtyClassAttr=_getClass(element);element.style.cssText=skrollable.styleAttr;_updateClass(element,skrollable.classAttr)}}};var _detect3DTransforms=function(){_translateZ='translateZ(0)';skrollr.setStyle(_skrollrBody,'transform',_translateZ);var computedStyle=getStyle(_skrollrBody);var computedTransform=computedStyle.getPropertyValue('transform');var computedTransformWithPrefix=computedStyle.getPropertyValue(theDashedCSSPrefix+'transform');var has3D=(computedTransform&&computedTransform!=='none')||(computedTransformWithPrefix&&computedTransformWithPrefix!=='none');if(!has3D){_translateZ=''}};skrollr.setStyle=function(el,prop,val){var style=el.style;prop=prop.replace(rxCamelCase,rxCamelCaseFn).replace('-','');if(prop==='zIndex'){if(isNaN(val)){style[prop]=val}else{style[prop]=''+(val|0)}}else if(prop==='float'){style.styleFloat=style.cssFloat=val}else{try{if(theCSSPrefix){style[theCSSPrefix+prop.slice(0,1).toUpperCase()+prop.slice(1)]=val}style[prop]=val}catch(ignore){}}};var _addEvent=skrollr.addEvent=function(element,names,callback){var intermediate=function(e){e=e||window.event;if(!e.target){e.target=e.srcElement}if(!e.preventDefault){e.preventDefault=function(){e.returnValue=false;e.defaultPrevented=true}}return callback.call(this,e)};names=names.split(' ');var name;var nameCounter=0;var namesLength=names.length;for(;nameCounter<namesLength;nameCounter++){name=names[nameCounter];if(element.addEventListener){element.addEventListener(name,callback,false)}else{element.attachEvent('on'+name,intermediate)}_registeredEvents.push({element:element,name:name,listener:callback})}};var _removeEvent=skrollr.removeEvent=function(element,names,callback){names=names.split(' ');var nameCounter=0;var namesLength=names.length;for(;nameCounter<namesLength;nameCounter++){if(element.removeEventListener){element.removeEventListener(names[nameCounter],callback,false)}else{element.detachEvent('on'+names[nameCounter],callback)}}};var _removeAllEvents=function(){var eventData;var eventCounter=0;var eventsLength=_registeredEvents.length;for(;eventCounter<eventsLength;eventCounter++){eventData=_registeredEvents[eventCounter];_removeEvent(eventData.element,eventData.name,eventData.listener)}_registeredEvents=[]};var _emitEvent=function(element,name,direction){if(_listeners.keyframe){_listeners.keyframe.call(_instance,element,name,direction)}};var _reflow=function(){var pos=_instance.getScrollTop();_maxKeyFrame=0;if(_forceHeight&&!_isMobile){body.style.height=''}_updateDependentKeyFrames();if(_forceHeight&&!_isMobile){body.style.height=(_maxKeyFrame+documentElement.clientHeight)+'px'}if(_isMobile){_instance.setScrollTop(Math.min(_instance.getScrollTop(),_maxKeyFrame))}else{_instance.setScrollTop(pos,true)}_forceRender=true};var _processConstants=function(){var viewportHeight=documentElement.clientHeight;var copy={};var prop;var value;for(prop in _constants){value=_constants[prop];if(typeof value==='function'){value=value.call(_instance)}else if((/p$/).test(value)){value=(value.slice(0,-1)/100)*viewportHeight}copy[prop]=value}return copy};var _getDocumentHeight=function(){var skrollrBodyHeight=(_skrollrBody&&_skrollrBody.offsetHeight||0);var bodyHeight=Math.max(skrollrBodyHeight,body.scrollHeight,body.offsetHeight,documentElement.scrollHeight,documentElement.offsetHeight,documentElement.clientHeight);return bodyHeight-documentElement.clientHeight};var _getClass=function(element){var prop='className';if(window.SVGElement&&element instanceof window.SVGElement){element=element[prop];prop='baseVal'}return element[prop]};var _updateClass=function(element,add,remove){var prop='className';if(window.SVGElement&&element instanceof window.SVGElement){element=element[prop];prop='baseVal'}if(remove===undefined){element[prop]=add;return}var val=element[prop];var classRemoveIndex=0;var removeLength=remove.length;for(;classRemoveIndex<removeLength;classRemoveIndex++){val=_untrim(val).replace(_untrim(remove[classRemoveIndex]),' ')}val=_trim(val);var classAddIndex=0;var addLength=add.length;for(;classAddIndex<addLength;classAddIndex++){if(_untrim(val).indexOf(_untrim(add[classAddIndex]))===-1){val+=' '+add[classAddIndex]}}element[prop]=_trim(val)};var _trim=function(a){return a.replace(rxTrim,'')};var _untrim=function(a){return' '+a+' '};var _now=Date.now||function(){return+new Date()};var _keyFrameComparator=function(a,b){return a.frame-b.frame};var _instance;var _skrollables;var _skrollrBody;var _listeners;var _forceHeight;var _maxKeyFrame=0;var _scale=1;var _constants;var _mobileDeceleration;var _direction='down';var _lastTop=-1;var _lastRenderCall=_now();var _lastViewportWidth=0;var _lastViewportHeight=0;var _requestReflow=false;var _scrollAnimation;var _smoothScrollingEnabled;var _smoothScrollingDuration;var _smoothScrolling;var _forceRender;var _skrollableIdCounter=0;var _edgeStrategy;var _isMobile=false;var _mobileOffset=0;var _translateZ;var _registeredEvents=[];var _animFrame;if(typeof define==='function'&&define.amd){define('skrollr',function(){return skrollr})}else if(typeof module!=='undefined'&&module.exports){module.exports=skrollr}else{window.skrollr=skrollr}}(window,document));
;(function($,window,document,undefined){var pluginName='stellar',defaults={scrollProperty:'scroll',positionProperty:'position',horizontalScrolling:true,verticalScrolling:true,horizontalOffset:0,verticalOffset:0,responsive:false,parallaxBackgrounds:true,parallaxElements:true,hideDistantElements:true,hideElement:function($elem){$elem.hide()},showElement:function($elem){$elem.show()}},scrollProperty={scroll:{getLeft:function($elem){return $elem.scrollLeft()},setLeft:function($elem,val){$elem.scrollLeft(val)},getTop:function($elem){return $elem.scrollTop()},setTop:function($elem,val){$elem.scrollTop(val)}},position:{getLeft:function($elem){return parseInt($elem.css('left'),10)*-1},getTop:function($elem){return parseInt($elem.css('top'),10)*-1}},margin:{getLeft:function($elem){return parseInt($elem.css('margin-left'),10)*-1},getTop:function($elem){return parseInt($elem.css('margin-top'),10)*-1}},transform:{getLeft:function($elem){var computedTransform=getComputedStyle($elem[0])[prefixedTransform];return(computedTransform!=='none'?parseInt(computedTransform.match(/(-?[0-9]+)/g)[4],10)*-1:0)},getTop:function($elem){var computedTransform=getComputedStyle($elem[0])[prefixedTransform];return(computedTransform!=='none'?parseInt(computedTransform.match(/(-?[0-9]+)/g)[5],10)*-1:0)}}},positionProperty={position:{setLeft:function($elem,left){$elem.css('left',left)},setTop:function($elem,top){$elem.css('top',top)}},transform:{setPosition:function($elem,left,startingLeft,top,startingTop){$elem[0].style[prefixedTransform]='translate3d('+(left-startingLeft)+'px, '+(top-startingTop)+'px, 0)'}}},vendorPrefix=(function(){var prefixes=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,style=$('script')[0].style,prefix='',prop;for(prop in style){if(prefixes.test(prop)){prefix=prop.match(prefixes)[0];break}}if('WebkitOpacity'in style){prefix='Webkit'}if('KhtmlOpacity'in style){prefix='Khtml'}return function(property){return prefix+(prefix.length>0?property.charAt(0).toUpperCase()+property.slice(1):property)}}()),prefixedTransform=vendorPrefix('transform'),supportsBackgroundPositionXY=$('<div />',{style:'background:#fff'}).css('background-position-x')!==undefined,setBackgroundPosition=(supportsBackgroundPositionXY?function($elem,x,y){$elem.css({'background-position-x':x,'background-position-y':y})}:function($elem,x,y){$elem.css('background-position',x+' '+y)}),getBackgroundPosition=(supportsBackgroundPositionXY?function($elem){return[$elem.css('background-position-x'),$elem.css('background-position-y')]}:function($elem){return $elem.css('background-position').split(' ')}),requestAnimFrame=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,1000/60)});function Plugin(element,options){this.element=element;this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.init()}Plugin.prototype={init:function(){this.options.name=pluginName+'_'+Math.floor(Math.random()*1e9);this._defineElements();this._defineGetters();this._defineSetters();this._handleWindowLoadAndResize();this._detectViewport();this.refresh({firstLoad:true});if(this.options.scrollProperty==='scroll'){this._handleScrollEvent()}else{this._startAnimationLoop()}},_defineElements:function(){if(this.element===document.body)this.element=window;this.$scrollElement=$(this.element);this.$element=(this.element===window?$('body'):this.$scrollElement);this.$viewportElement=(this.options.viewportElement!==undefined?$(this.options.viewportElement):(this.$scrollElement[0]===window||this.options.scrollProperty==='scroll'?this.$scrollElement:this.$scrollElement.parent()))},_defineGetters:function(){var self=this,scrollPropertyAdapter=scrollProperty[self.options.scrollProperty];this._getScrollLeft=function(){return scrollPropertyAdapter.getLeft(self.$scrollElement)};this._getScrollTop=function(){return scrollPropertyAdapter.getTop(self.$scrollElement)}},_defineSetters:function(){var self=this,scrollPropertyAdapter=scrollProperty[self.options.scrollProperty],positionPropertyAdapter=positionProperty[self.options.positionProperty],setScrollLeft=scrollPropertyAdapter.setLeft,setScrollTop=scrollPropertyAdapter.setTop;this._setScrollLeft=(typeof setScrollLeft==='function'?function(val){setScrollLeft(self.$scrollElement,val)}:$.noop);this._setScrollTop=(typeof setScrollTop==='function'?function(val){setScrollTop(self.$scrollElement,val)}:$.noop);this._setPosition=positionPropertyAdapter.setPosition||function($elem,left,startingLeft,top,startingTop){if(self.options.horizontalScrolling){positionPropertyAdapter.setLeft($elem,left,startingLeft)}if(self.options.verticalScrolling){positionPropertyAdapter.setTop($elem,top,startingTop)}}},_handleWindowLoadAndResize:function(){var self=this,$window=$(window);if(self.options.responsive){$window.bind('load.'+this.name,function(){self.refresh()})}$window.bind('resize.'+this.name,function(){self._detectViewport();if(self.options.responsive){self.refresh()}})},refresh:function(options){var self=this,oldLeft=self._getScrollLeft(),oldTop=self._getScrollTop();if(!options||!options.firstLoad){this._reset()}this._setScrollLeft(0);this._setScrollTop(0);this._setOffsets();this._findParticles();this._findBackgrounds();if(options&&options.firstLoad&&/WebKit/.test(navigator.userAgent)){$(window).load(function(){var oldLeft=self._getScrollLeft(),oldTop=self._getScrollTop();self._setScrollLeft(oldLeft+1);self._setScrollTop(oldTop+1);self._setScrollLeft(oldLeft);self._setScrollTop(oldTop)})}this._setScrollLeft(oldLeft);this._setScrollTop(oldTop)},_detectViewport:function(){var viewportOffsets=this.$viewportElement.offset(),hasOffsets=viewportOffsets!==null&&viewportOffsets!==undefined;this.viewportWidth=this.$viewportElement.width();this.viewportHeight=this.$viewportElement.height();this.viewportOffsetTop=(hasOffsets?viewportOffsets.top:0);this.viewportOffsetLeft=(hasOffsets?viewportOffsets.left:0)},_findParticles:function(){var self=this,scrollLeft=this._getScrollLeft(),scrollTop=this._getScrollTop();if(this.particles!==undefined){for(var i=this.particles.length-1;i>=0;i--){this.particles[i].$element.data('stellar-elementIsActive',undefined)}}this.particles=[];if(!this.options.parallaxElements)return;this.$element.find('[data-stellar-ratio]').each(function(i){var $this=$(this),horizontalOffset,verticalOffset,positionLeft,positionTop,marginLeft,marginTop,$offsetParent,offsetLeft,offsetTop,parentOffsetLeft=0,parentOffsetTop=0,tempParentOffsetLeft=0,tempParentOffsetTop=0;if(!$this.data('stellar-elementIsActive')){$this.data('stellar-elementIsActive',this)}else if($this.data('stellar-elementIsActive')!==this){return}self.options.showElement($this);if(!$this.data('stellar-startingLeft')){$this.data('stellar-startingLeft',$this.css('left'));$this.data('stellar-startingTop',$this.css('top'))}else{$this.css('left',$this.data('stellar-startingLeft'));$this.css('top',$this.data('stellar-startingTop'))}positionLeft=$this.position().left;positionTop=$this.position().top;marginLeft=($this.css('margin-left')==='auto')?0:parseInt($this.css('margin-left'),10);marginTop=($this.css('margin-top')==='auto')?0:parseInt($this.css('margin-top'),10);offsetLeft=$this.offset().left-marginLeft;offsetTop=$this.offset().top-marginTop;$this.parents().each(function(){var $this=$(this);if($this.data('stellar-offset-parent')===true){parentOffsetLeft=tempParentOffsetLeft;parentOffsetTop=tempParentOffsetTop;$offsetParent=$this;return false}else{tempParentOffsetLeft+=$this.position().left;tempParentOffsetTop+=$this.position().top}});horizontalOffset=($this.data('stellar-horizontal-offset')!==undefined?$this.data('stellar-horizontal-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-horizontal-offset')!==undefined?$offsetParent.data('stellar-horizontal-offset'):self.horizontalOffset));verticalOffset=($this.data('stellar-vertical-offset')!==undefined?$this.data('stellar-vertical-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-vertical-offset')!==undefined?$offsetParent.data('stellar-vertical-offset'):self.verticalOffset));self.particles.push({$element:$this,$offsetParent:$offsetParent,isFixed:$this.css('position')==='fixed',horizontalOffset:horizontalOffset,verticalOffset:verticalOffset,startingPositionLeft:positionLeft,startingPositionTop:positionTop,startingOffsetLeft:offsetLeft,startingOffsetTop:offsetTop,parentOffsetLeft:parentOffsetLeft,parentOffsetTop:parentOffsetTop,stellarRatio:($this.data('stellar-ratio')!==undefined?$this.data('stellar-ratio'):1),width:$this.outerWidth(true),height:$this.outerHeight(true),isHidden:false})})},_findBackgrounds:function(){var self=this,scrollLeft=this._getScrollLeft(),scrollTop=this._getScrollTop(),$backgroundElements;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;$backgroundElements=this.$element.find('[data-stellar-background-ratio]');if(this.$element.data('stellar-background-ratio')){$backgroundElements=$backgroundElements.add(this.$element)}$backgroundElements.each(function(){var $this=$(this),backgroundPosition=getBackgroundPosition($this),horizontalOffset,verticalOffset,positionLeft,positionTop,marginLeft,marginTop,offsetLeft,offsetTop,$offsetParent,parentOffsetLeft=0,parentOffsetTop=0,tempParentOffsetLeft=0,tempParentOffsetTop=0;if(!$this.data('stellar-backgroundIsActive')){$this.data('stellar-backgroundIsActive',this)}else if($this.data('stellar-backgroundIsActive')!==this){return}if(!$this.data('stellar-backgroundStartingLeft')){$this.data('stellar-backgroundStartingLeft',backgroundPosition[0]);$this.data('stellar-backgroundStartingTop',backgroundPosition[1])}else{setBackgroundPosition($this,$this.data('stellar-backgroundStartingLeft'),$this.data('stellar-backgroundStartingTop'))}marginLeft=($this.css('margin-left')==='auto')?0:parseInt($this.css('margin-left'),10);marginTop=($this.css('margin-top')==='auto')?0:parseInt($this.css('margin-top'),10);offsetLeft=$this.offset().left-marginLeft-scrollLeft;offsetTop=$this.offset().top-marginTop-scrollTop;$this.parents().each(function(){var $this=$(this);if($this.data('stellar-offset-parent')===true){parentOffsetLeft=tempParentOffsetLeft;parentOffsetTop=tempParentOffsetTop;$offsetParent=$this;return false}else{tempParentOffsetLeft+=$this.position().left;tempParentOffsetTop+=$this.position().top}});horizontalOffset=($this.data('stellar-horizontal-offset')!==undefined?$this.data('stellar-horizontal-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-horizontal-offset')!==undefined?$offsetParent.data('stellar-horizontal-offset'):self.horizontalOffset));verticalOffset=($this.data('stellar-vertical-offset')!==undefined?$this.data('stellar-vertical-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-vertical-offset')!==undefined?$offsetParent.data('stellar-vertical-offset'):self.verticalOffset));self.backgrounds.push({$element:$this,$offsetParent:$offsetParent,isFixed:$this.css('background-attachment')==='fixed',horizontalOffset:horizontalOffset,verticalOffset:verticalOffset,startingValueLeft:backgroundPosition[0],startingValueTop:backgroundPosition[1],startingBackgroundPositionLeft:(isNaN(parseInt(backgroundPosition[0],10))?0:parseInt(backgroundPosition[0],10)),startingBackgroundPositionTop:(isNaN(parseInt(backgroundPosition[1],10))?0:parseInt(backgroundPosition[1],10)),startingPositionLeft:$this.position().left,startingPositionTop:$this.position().top,startingOffsetLeft:offsetLeft,startingOffsetTop:offsetTop,parentOffsetLeft:parentOffsetLeft,parentOffsetTop:parentOffsetTop,stellarRatio:($this.data('stellar-background-ratio')===undefined?1:$this.data('stellar-background-ratio'))})})},_reset:function(){var particle,startingPositionLeft,startingPositionTop,background,i;for(i=this.particles.length-1;i>=0;i--){particle=this.particles[i];startingPositionLeft=particle.$element.data('stellar-startingLeft');startingPositionTop=particle.$element.data('stellar-startingTop');this._setPosition(particle.$element,startingPositionLeft,startingPositionLeft,startingPositionTop,startingPositionTop);this.options.showElement(particle.$element);particle.$element.data('stellar-startingLeft',null).data('stellar-elementIsActive',null).data('stellar-backgroundIsActive',null)}for(i=this.backgrounds.length-1;i>=0;i--){background=this.backgrounds[i];background.$element.data('stellar-backgroundStartingLeft',null).data('stellar-backgroundStartingTop',null);setBackgroundPosition(background.$element,background.startingValueLeft,background.startingValueTop)}},destroy:function(){this._reset();this.$scrollElement.unbind('resize.'+this.name).unbind('scroll.'+this.name);this._animationLoop=$.noop;$(window).unbind('load.'+this.name).unbind('resize.'+this.name)},_setOffsets:function(){var self=this,$window=$(window);$window.unbind('resize.horizontal-'+this.name).unbind('resize.vertical-'+this.name);if(typeof this.options.horizontalOffset==='function'){this.horizontalOffset=this.options.horizontalOffset();$window.bind('resize.horizontal-'+this.name,function(){self.horizontalOffset=self.options.horizontalOffset()})}else{this.horizontalOffset=this.options.horizontalOffset}if(typeof this.options.verticalOffset==='function'){this.verticalOffset=this.options.verticalOffset();$window.bind('resize.vertical-'+this.name,function(){self.verticalOffset=self.options.verticalOffset()})}else{this.verticalOffset=this.options.verticalOffset}},_repositionElements:function(){var scrollLeft=this._getScrollLeft(),scrollTop=this._getScrollTop(),horizontalOffset,verticalOffset,particle,fixedRatioOffset,background,bgLeft,bgTop,isVisibleVertical=true,isVisibleHorizontal=true,newPositionLeft,newPositionTop,newOffsetLeft,newOffsetTop,i;if(this.currentScrollLeft===scrollLeft&&this.currentScrollTop===scrollTop&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight){return}else{this.currentScrollLeft=scrollLeft;this.currentScrollTop=scrollTop;this.currentWidth=this.viewportWidth;this.currentHeight=this.viewportHeight}for(i=this.particles.length-1;i>=0;i--){particle=this.particles[i];fixedRatioOffset=(particle.isFixed?1:0);if(this.options.horizontalScrolling){newPositionLeft=(scrollLeft+particle.horizontalOffset+this.viewportOffsetLeft+particle.startingPositionLeft-particle.startingOffsetLeft+particle.parentOffsetLeft)*-(particle.stellarRatio+fixedRatioOffset-1)+particle.startingPositionLeft;newOffsetLeft=newPositionLeft-particle.startingPositionLeft+particle.startingOffsetLeft}else{newPositionLeft=particle.startingPositionLeft;newOffsetLeft=particle.startingOffsetLeft}if(this.options.verticalScrolling){newPositionTop=(scrollTop+particle.verticalOffset+this.viewportOffsetTop+particle.startingPositionTop-particle.startingOffsetTop+particle.parentOffsetTop)*-(particle.stellarRatio+fixedRatioOffset-1)+particle.startingPositionTop;newOffsetTop=newPositionTop-particle.startingPositionTop+particle.startingOffsetTop}else{newPositionTop=particle.startingPositionTop;newOffsetTop=particle.startingOffsetTop}if(this.options.hideDistantElements){isVisibleHorizontal=!this.options.horizontalScrolling||newOffsetLeft+particle.width>(particle.isFixed?0:scrollLeft)&&newOffsetLeft<(particle.isFixed?0:scrollLeft)+this.viewportWidth+this.viewportOffsetLeft;isVisibleVertical=!this.options.verticalScrolling||newOffsetTop+particle.height>(particle.isFixed?0:scrollTop)&&newOffsetTop<(particle.isFixed?0:scrollTop)+this.viewportHeight+this.viewportOffsetTop}if(isVisibleHorizontal&&isVisibleVertical){if(particle.isHidden){this.options.showElement(particle.$element);particle.isHidden=false}this._setPosition(particle.$element,newPositionLeft,particle.startingPositionLeft,newPositionTop,particle.startingPositionTop)}else{if(!particle.isHidden){this.options.hideElement(particle.$element);particle.isHidden=true}}}for(i=this.backgrounds.length-1;i>=0;i--){background=this.backgrounds[i];fixedRatioOffset=(background.isFixed?0:1);bgLeft=(this.options.horizontalScrolling?(scrollLeft+background.horizontalOffset-this.viewportOffsetLeft-background.startingOffsetLeft+background.parentOffsetLeft-background.startingBackgroundPositionLeft)*(fixedRatioOffset-background.stellarRatio)+'px':background.startingValueLeft);bgTop=(this.options.verticalScrolling?(scrollTop+background.verticalOffset-this.viewportOffsetTop-background.startingOffsetTop+background.parentOffsetTop-background.startingBackgroundPositionTop)*(fixedRatioOffset-background.stellarRatio)+'px':background.startingValueTop);setBackgroundPosition(background.$element,bgLeft,bgTop)}},_handleScrollEvent:function(){var self=this,ticking=false;var update=function(){self._repositionElements();ticking=false};var requestTick=function(){if(!ticking){requestAnimFrame(update);ticking=true}};this.$scrollElement.bind('scroll.'+this.name,requestTick);requestTick()},_startAnimationLoop:function(){var self=this;this._animationLoop=function(){requestAnimFrame(self._animationLoop);self._repositionElements()};this._animationLoop()}};$.fn[pluginName]=function(options){var args=arguments;if(options===undefined||typeof options==='object'){return this.each(function(){if(!$.data(this,'plugin_'+pluginName)){$.data(this,'plugin_'+pluginName,new Plugin(this,options))}})}else if(typeof options==='string'&&options[0]!=='_'&&options!=='init'){return this.each(function(){var instance=$.data(this,'plugin_'+pluginName);if(instance instanceof Plugin&&typeof instance[options]==='function'){instance[options].apply(instance,Array.prototype.slice.call(args,1))}if(options==='destroy'){$.data(this,'plugin_'+pluginName,null)}})}};$[pluginName]=function(options){var $window=$(window);return $window.stellar.apply($window,Array.prototype.slice.call(arguments,0))};$[pluginName].scrollProperty=scrollProperty;$[pluginName].positionProperty=positionProperty;window.Stellar=Plugin}(jQuery,this,document));
(function(){var __indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1},__slice=[].slice;(function(root,factory){if(typeof define==='function'&&define.amd){return define('waypoints',['jquery'],function($){return factory($,root)})}else{return factory(root.jQuery,root)}})(window,function($,window){var $w,Context,Waypoint,allWaypoints,contextCounter,contextKey,contexts,isTouch,jQMethods,methods,resizeEvent,scrollEvent,waypointCounter,waypointKey,wp,wps;$w=$(window);isTouch=__indexOf.call(window,'ontouchstart')>=0;allWaypoints={horizontal:{},vertical:{}};contextCounter=1;contexts={};contextKey='waypoints-context-id';resizeEvent='resize.waypoints';scrollEvent='scroll.waypoints';waypointCounter=1;waypointKey='waypoints-waypoint-ids';wp='waypoint';wps='waypoints';Context=(function(){function Context($element){var _this=this;this.$element=$element;this.element=$element[0];this.didResize=false;this.didScroll=false;this.id='context'+contextCounter++;this.oldScroll={x:$element.scrollLeft(),y:$element.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[contextKey]=this.id;contexts[this.id]=this;$element.bind(scrollEvent,function(){var scrollHandler;if(!(_this.didScroll||isTouch)){_this.didScroll=true;scrollHandler=function(){_this.doScroll();return _this.didScroll=false};return window.setTimeout(scrollHandler,$[wps].settings.scrollThrottle)}});$element.bind(resizeEvent,function(){var resizeHandler;if(!_this.didResize){_this.didResize=true;resizeHandler=function(){$[wps]('refresh');return _this.didResize=false};return window.setTimeout(resizeHandler,$[wps].settings.resizeThrottle)}})}Context.prototype.doScroll=function(){var axes,_this=this;axes={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}};if(isTouch&&(!axes.vertical.oldScroll||!axes.vertical.newScroll)){$[wps]('refresh')}$.each(axes,function(aKey,axis){var direction,isForward,triggered;triggered=[];isForward=axis.newScroll>axis.oldScroll;direction=isForward?axis.forward:axis.backward;$.each(_this.waypoints[aKey],function(wKey,waypoint){var _ref,_ref1;if((axis.oldScroll<(_ref=waypoint.offset)&&_ref<=axis.newScroll)){return triggered.push(waypoint)}else if((axis.newScroll<(_ref1=waypoint.offset)&&_ref1<=axis.oldScroll)){return triggered.push(waypoint)}});triggered.sort(function(a,b){return a.offset-b.offset});if(!isForward){triggered.reverse()}return $.each(triggered,function(i,waypoint){if(waypoint.options.continuous||i===triggered.length-1){return waypoint.trigger([direction])}})});return this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}};Context.prototype.refresh=function(){var axes,cOffset,isWin,_this=this;isWin=$.isWindow(this.element);cOffset=this.$element.offset();this.doScroll();axes={horizontal:{contextOffset:isWin?0:cOffset.left,contextScroll:isWin?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWin?0:cOffset.top,contextScroll:isWin?0:this.oldScroll.y,contextDimension:isWin?$[wps]('viewportHeight'):this.$element.height(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}};return $.each(axes,function(aKey,axis){return $.each(_this.waypoints[aKey],function(i,waypoint){var adjustment,elementOffset,oldOffset,_ref,_ref1;adjustment=waypoint.options.offset;oldOffset=waypoint.offset;elementOffset=$.isWindow(waypoint.element)?0:waypoint.$element.offset()[axis.offsetProp];if($.isFunction(adjustment)){adjustment=adjustment.apply(waypoint.element)}else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment);if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}waypoint.offset=elementOffset-axis.contextOffset+axis.contextScroll-adjustment;if((waypoint.options.onlyOnScroll&&(oldOffset!=null))||!waypoint.enabled){return}if(oldOffset!==null&&(oldOffset<(_ref=axis.oldScroll)&&_ref<=waypoint.offset)){return waypoint.trigger([axis.backward])}else if(oldOffset!==null&&(oldOffset>(_ref1=axis.oldScroll)&&_ref1>=waypoint.offset)){return waypoint.trigger([axis.forward])}else if(oldOffset===null&&axis.oldScroll>=waypoint.offset){return waypoint.trigger([axis.forward])}})})};Context.prototype.checkEmpty=function(){if($.isEmptyObject(this.waypoints.horizontal)&&$.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([resizeEvent,scrollEvent].join(' '));return delete contexts[this.id]}};return Context})();Waypoint=(function(){function Waypoint($element,context,options){var idList,_ref;if(options.offset==='bottom-in-view'){options.offset=function(){var contextHeight;contextHeight=$[wps]('viewportHeight');if(!$.isWindow(context.element)){contextHeight=context.$element.height()}return contextHeight-$(this).outerHeight()}}this.$element=$element;this.element=$element[0];this.axis=options.horizontal?'horizontal':'vertical';this.callback=options.handler;this.context=context;this.enabled=options.enabled;this.id='waypoints'+waypointCounter++;this.offset=null;this.options=options;context.waypoints[this.axis][this.id]=this;allWaypoints[this.axis][this.id]=this;idList=(_ref=this.element[waypointKey])!=null?_ref:[];idList.push(this.id);this.element[waypointKey]=idList}Waypoint.prototype.trigger=function(args){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,args)}if(this.options.triggerOnce){return this.destroy()}};Waypoint.prototype.disable=function(){return this.enabled=false};Waypoint.prototype.enable=function(){this.context.refresh();return this.enabled=true};Waypoint.prototype.destroy=function(){delete allWaypoints[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};Waypoint.getWaypointsByElement=function(element){var all,ids;ids=element[waypointKey];if(!ids){return[]}all=$.extend({},allWaypoints.horizontal,allWaypoints.vertical);return $.map(ids,function(id){return all[id]})};return Waypoint})();methods={init:function(f,options){var _ref;options=$.extend({},$.fn[wp].defaults,options);if((_ref=options.handler)==null){options.handler=f}this.each(function(){var $this,context,contextElement,_ref1;$this=$(this);contextElement=(_ref1=options.context)!=null?_ref1:$.fn[wp].defaults.context;if(!$.isWindow(contextElement)){contextElement=$this.closest(contextElement)}contextElement=$(contextElement);context=contexts[contextElement[0][contextKey]];if(!context){context=new Context(contextElement)}return new Waypoint($this,context,options)});$[wps]('refresh');return this},disable:function(){return methods._invoke.call(this,'disable')},enable:function(){return methods._invoke.call(this,'enable')},destroy:function(){return methods._invoke.call(this,'destroy')},prev:function(axis,selector){return methods._traverse.call(this,axis,selector,function(stack,index,waypoints){if(index>0){return stack.push(waypoints[index-1])}})},next:function(axis,selector){return methods._traverse.call(this,axis,selector,function(stack,index,waypoints){if(index<waypoints.length-1){return stack.push(waypoints[index+1])}})},_traverse:function(axis,selector,push){var stack,waypoints;if(axis==null){axis='vertical'}if(selector==null){selector=window}waypoints=jQMethods.aggregate(selector);stack=[];this.each(function(){var index;index=$.inArray(this,waypoints[axis]);return push(stack,index,waypoints[axis])});return this.pushStack(stack)},_invoke:function(method){this.each(function(){var waypoints;waypoints=Waypoint.getWaypointsByElement(this);return $.each(waypoints,function(i,waypoint){waypoint[method]();return true})});return this}};$.fn[wp]=function(){var args,method;method=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if(methods[method]){return methods[method].apply(this,args)}else if($.isFunction(method)){return methods.init.apply(this,arguments)}else if($.isPlainObject(method)){return methods.init.apply(this,[null,method])}else if(!method){return $.error("jQuery Waypoints needs a callback function or handler option.")}else{return $.error("The "+method+" method does not exist in jQuery Waypoints.")}};$.fn[wp].defaults={context:window,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};jQMethods={refresh:function(){return $.each(contexts,function(i,context){return context.refresh()})},viewportHeight:function(){var _ref;return(_ref=window.innerHeight)!=null?_ref:$w.height()},aggregate:function(contextSelector){var collection,waypoints,_ref;collection=allWaypoints;if(contextSelector){collection=(_ref=contexts[$(contextSelector)[0][contextKey]])!=null?_ref.waypoints:void 0}if(!collection){return[]}waypoints={horizontal:[],vertical:[]};$.each(waypoints,function(axis,arr){$.each(collection[axis],function(key,waypoint){return arr.push(waypoint)});arr.sort(function(a,b){return a.offset-b.offset});waypoints[axis]=$.map(arr,function(waypoint){return waypoint.element});return waypoints[axis]=$.unique(waypoints[axis])});return waypoints},above:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'vertical',function(context,waypoint){return waypoint.offset<=context.oldScroll.y})},below:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'vertical',function(context,waypoint){return waypoint.offset>context.oldScroll.y})},left:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'horizontal',function(context,waypoint){return waypoint.offset<=context.oldScroll.x})},right:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'horizontal',function(context,waypoint){return waypoint.offset>context.oldScroll.x})},enable:function(){return jQMethods._invoke('enable')},disable:function(){return jQMethods._invoke('disable')},destroy:function(){return jQMethods._invoke('destroy')},extendFn:function(methodName,f){return methods[methodName]=f},_invoke:function(method){var waypoints;waypoints=$.extend({},allWaypoints.vertical,allWaypoints.horizontal);return $.each(waypoints,function(key,waypoint){waypoint[method]();return true})},_filter:function(selector,axis,test){var context,waypoints;context=contexts[$(selector)[0][contextKey]];if(!context){return[]}waypoints=[];$.each(context.waypoints[axis],function(i,waypoint){if(test(context,waypoint)){return waypoints.push(waypoint)}});waypoints.sort(function(a,b){return a.offset-b.offset});return $.map(waypoints,function(waypoint){return waypoint.element})}};$[wps]=function(){var args,method;method=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if(jQMethods[method]){return jQMethods[method].apply(null,args)}else{return jQMethods.aggregate.call(null,method)}};$[wps].settings={resizeThrottle:100,scrollThrottle:30};return $w.on('load.waypoints',function(){return $[wps]('refresh')})})}).call(this);
(function(){(function(root,factory){if(typeof define==='function'&&define.amd){return define(['jquery','waypoints'],factory)}else{return factory(root.jQuery)}})(window,function($){var defaults,wrap;defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:'stuck',direction:'down right'};wrap=function($elements,options){var $parent;$elements.wrap(options.wrapper);$parent=$elements.parent();return $parent.data('isWaypointStickyWrapper',true)};$.waypoints('extendFn','sticky',function(opt){var $wrap,options,originalHandler;options=$.extend({},$.fn.waypoint.defaults,defaults,opt);$wrap=wrap(this,options);originalHandler=options.handler;options.handler=function(direction){var $sticky,shouldBeStuck;$sticky=$(this).children(':first');shouldBeStuck=options.direction.indexOf(direction)!==-1;$sticky.toggleClass(options.stuckClass,shouldBeStuck);$wrap.height(shouldBeStuck?$sticky.outerHeight():'');if(originalHandler!=null){return originalHandler.call(this,direction)}};$wrap.waypoint(options);return this.data('stuckClass',options.stuckClass)});return $.waypoints('extendFn','unsticky',function(){var $parent;$parent=this.parent();if(!$parent.data('isWaypointStickyWrapper')){return this}$parent.waypoint('destroy');this.unwrap();return this.removeClass(this.data('stuckClass'))})})}).call(this);
var Hashtable=function(){function c(b){var d;if(typeof b=="string")return b;if(typeof b.hashCode==a)return d=b.hashCode(),typeof d=="string"?d:c(d);if(typeof b.toString==a)return b.toString();try{return String(b)}catch(e){return Object.prototype.toString.call(b)}}function d(a,b){return a.equals(b)}function e(b,c){return typeof c.equals==a?c.equals(b):b===c}function f(a){return function(b){if(b===null)throw new Error("null is not a valid "+a);if(typeof b=="undefined")throw new Error(a+" must not be undefined")}}function i(a,b,c,d){this[0]=a,this.entries=[],this.addEntry(b,c),d!==null&&(this.getEqualityFunction=function(){return d})}function m(a){return function(b){var c=this.entries.length,d,e=this.getEqualityFunction(b);while(c--){d=this.entries[c];if(e(b,d[0]))switch(a){case j:return!0;case k:return d;case l:return[c,d[1]]}}return!1}}function n(a){return function(b){var c=b.length;for(var d=0,e=this.entries.length;d<e;++d)b[c+d]=this.entries[d][a]}}function o(a,b){var c=a.length,d;while(c--){d=a[c];if(b===d[0])return c}return null}function p(a,b){var c=a[b];return c&&c instanceof i?c:null}function q(d,e){var f=this,j=[],k={},l=typeof d==a?d:c,m=typeof e==a?e:null;this.put=function(a,b){g(a),h(b);var c=l(a),d,e,f=null;return d=p(k,c),d?(e=d.getEntryForKey(a),e?(f=e[1],e[1]=b):d.addEntry(a,b)):(d=new i(c,a,b,m),j[j.length]=d,k[c]=d),f},this.get=function(a){g(a);var b=l(a),c=p(k,b);if(c){var d=c.getEntryForKey(a);if(d)return d[1]}return null},this.containsKey=function(a){g(a);var b=l(a),c=p(k,b);return c?c.containsKey(a):!1},this.containsValue=function(a){h(a);var b=j.length;while(b--)if(j[b].containsValue(a))return!0;return!1},this.clear=function(){j.length=0,k={}},this.isEmpty=function(){return!j.length};var n=function(a){return function(){var b=[],c=j.length;while(c--)j[c][a](b);return b}};this.keys=n("keys"),this.values=n("values"),this.entries=n("getEntries"),this.remove=function(a){g(a);var c=l(a),d,e=null,f=p(k,c);return f&&(e=f.removeEntryForKey(a),e!==null&&(f.entries.length||(d=o(j,c),b(j,d),delete k[c]))),e},this.size=function(){var a=0,b=j.length;while(b--)a+=j[b].entries.length;return a},this.each=function(a){var b=f.entries(),c=b.length,d;while(c--)d=b[c],a(d[0],d[1])},this.putAll=function(b,c){var d=b.entries(),e,g,h,i,j=d.length,k=typeof c==a;while(j--)e=d[j],g=e[0],h=e[1],k&&(i=f.get(g))&&(h=c(g,i,h)),f.put(g,h)},this.clone=function(){var a=new q(d,e);return a.putAll(f),a}}var a="function",b=typeof Array.prototype.splice==a?function(a,b){a.splice(b,1)}:function(a,b){var c,d,e;if(b===a.length-1)a.length=b;else{c=a.slice(b+1),a.length=b;for(d=0,e=c.length;d<e;++d)a[b+d]=c[d]}},g=f("key"),h=f("value"),j=0,k=1,l=2;return i.prototype={getEqualityFunction:function(b){return typeof b.equals==a?d:e},getEntryForKey:m(k),getEntryAndIndexForKey:m(l),removeEntryForKey:function(a){var c=this.getEntryAndIndexForKey(a);return c?(b(this.entries,c[0]),c[1]):null},addEntry:function(a,b){this.entries[this.entries.length]=[a,b]},keys:n(0),values:n(1),getEntries:function(a){var b=a.length;for(var c=0,d=this.entries.length;c<d;++c)a[b+c]=this.entries[c].slice(0)},containsKey:m(j),containsValue:function(a){var b=this.entries.length;while(b--)if(a===this.entries[b][1])return!0;return!1}},q}();(function(a){function i(a,b,c){this.dec=a,this.group=b,this.neg=c}function j(){for(var a=0;a<h.length;a++){localeGroup=h[a];for(var c=0;c<localeGroup.length;c++)b.put(localeGroup[c],a)}}function k(a){b.size()==0&&j();var c=".",d=",",e="-",f=b.get(a);if(f){var h=g[f];h&&(c=h[0],d=h[1])}return new i(c,d,e)}var b=new Hashtable,c=["ae","au","ca","cn","eg","gb","hk","il","in","jp","sk","th","tw","us"],d=["at","br","de","dk","es","gr","it","nl","pt","tr","vn"],e=["cz","fi","fr","ru","se","pl"],f=["ch"],g=[[".",","],[",","."],[","," "],[".","'"]],h=[c,d,e,f];a.fn.formatNumber=function(b,c,d){return this.each(function(){c==null&&(c=!0),d==null&&(d=!0);var e;a(this).is(":input")?e=new String(a(this).val()):e=new String(a(this).text());var f=a.formatNumber(e,b);c&&(a(this).is(":input")?a(this).val(f):a(this).text(f));if(d)return f})},a.formatNumber=function(b,c){var c=a.extend({},a.fn.formatNumber.defaults,c),d=k(c.locale.toLowerCase()),e=d.dec,f=d.group,g=d.neg,h="0#-,.",i="",j=!1;for(var l=0;l<c.format.length;l++){if(h.indexOf(c.format.charAt(l))!=-1){if(l==0&&c.format.charAt(l)=="-"){j=!0;continue}break}i+=c.format.charAt(l)}var m="";for(var l=c.format.length-1;l>=0;l--){if(h.indexOf(c.format.charAt(l))!=-1)break;m=c.format.charAt(l)+m}c.format=c.format.substring(i.length),c.format=c.format.substring(0,c.format.length-m.length);var n=new Number(b);return a._formatNumber(n,c,m,i,j)},a._formatNumber=function(b,c,d,e,f){var c=a.extend({},a.fn.formatNumber.defaults,c),g=k(c.locale.toLowerCase()),h=g.dec,i=g.group,j=g.neg,l=!1;if(isNaN(b)){if(c.nanForceZero!=1)return null;b=0,l=!0}d=="%"&&(b*=100);var m="";if(c.format.indexOf(".")>-1){var n=h,o=c.format.substring(c.format.lastIndexOf(".")+1);if(c.round==1)b=new Number(b.toFixed(o.length));else{var p=b.toString();p=p.substring(0,p.lastIndexOf(".")+o.length+1),b=new Number(p)}var q=b%1,r=new String(q.toFixed(o.length));r=r.substring(r.lastIndexOf(".")+1);for(var s=0;s<o.length;s++){if(o.charAt(s)=="#"&&r.charAt(s)!="0"){n+=r.charAt(s);continue}if(o.charAt(s)=="#"&&r.charAt(s)=="0"){var t=r.substring(s);if(t.match("[1-9]")){n+=r.charAt(s);continue}break}o.charAt(s)=="0"&&(n+=r.charAt(s))}m+=n}else b=Math.round(b);var u=Math.floor(b);b<0&&(u=Math.ceil(b));var v="";c.format.indexOf(".")==-1?v=c.format:v=c.format.substring(0,c.format.indexOf("."));var w="";if(u!=0||v.substr(v.length-1)!="#"||l){var x=new String(Math.abs(u)),y=9999;v.lastIndexOf(",")!=-1&&(y=v.length-v.lastIndexOf(",")-1);var z=0;for(var s=x.length-1;s>-1;s--)w=x.charAt(s)+w,z++,z==y&&s!=0&&(w=i+w,z=0);if(v.length>w.length){var A=v.indexOf("0");if(A!=-1){var B=v.length-A;while(w.length<B)w="0"+w}}}return!w&&v.indexOf("0",v.length-1)!==-1&&(w="0"),m=w+m,b<0&&f&&e.length>0?e=j+e:b<0&&(m=j+m),c.decimalSeparatorAlwaysShown||m.lastIndexOf(h)==m.length-1&&(m=m.substring(0,m.length-1)),m=e+m+d,m},a.fn.parseNumber=function(b,c,d){c==null&&(c=!0),d==null&&(d=!0);var e;a(this).is(":input")?e=new String(a(this).val()):e=new String(a(this).text());var f=a.parseNumber(e,b);if(f){c&&(a(this).is(":input")?a(this).val(f.toString()):a(this).text(f.toString()));if(d)return f}},a.parseNumber=function(b,c){var c=a.extend({},a.fn.parseNumber.defaults,c),d=k(c.locale.toLowerCase()),e=d.dec,f=d.group,g=d.neg,h="1234567890.-";while(b.indexOf(f)>-1)b=b.replace(f,"");b=b.replace(e,".").replace(g,"-");var i="",j=!1;b.charAt(b.length-1)=="%"&&(j=!0);for(var l=0;l<b.length;l++)h.indexOf(b.charAt(l))>-1&&(i+=b.charAt(l));var m=new Number(i);return j&&(m/=100,m=m.toFixed(i.length-1)),m},a.fn.parseNumber.defaults={locale:"us",decimalSeparatorAlwaysShown:!1},a.fn.formatNumber.defaults={format:"#,###.00",locale:"us",decimalSeparatorAlwaysShown:!1,nanForceZero:!0,round:!0},Number.prototype.toFixed=function(a){return $._roundNumber(this,a)},a._roundNumber=function(a,b){var c=Math.pow(10,b||0),d=String(Math.round(a*c)/c);if(b>0){var e=d.indexOf(".");e==-1?(d+=".",e=0):e=d.length-(e+1);while(e<b)d+="0",e++}return d}})(jQuery),function(){var a={};this.tmpl=function b(c,d){var e=/\W/.test(c)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+c.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):a[c]=a[c]||b(document.getElementById(c).innerHTML);return d?e(d):e}}(),function(a){a.baseClass=function(b){return b=a(b),b.get(0).className.match(/([^ ]+)/)[1]},a.fn.addDependClass=function(b,c){var d={delimiter:c?c:"-"};return this.each(function(){var c=a.baseClass(this);c&&a(this).addClass(c+d.delimiter+b)})},a.fn.removeDependClass=function(b,c){var d={delimiter:c?c:"-"};return this.each(function(){var c=a.baseClass(this);c&&a(this).removeClass(c+d.delimiter+b)})},a.fn.toggleDependClass=function(b,c){var d={delimiter:c?c:"-"};return this.each(function(){var c=a.baseClass(this);c&&(a(this).is("."+c+d.delimiter+b)?a(this).removeClass(c+d.delimiter+b):a(this).addClass(c+d.delimiter+b))})}}(jQuery),function(a){function b(){this._init.apply(this,arguments)}b.prototype.oninit=function(){},b.prototype.events=function(){},b.prototype.onmousedown=function(){this.ptr.css({position:"absolute"})},b.prototype.onmousemove=function(a,b,c){this.ptr.css({left:b,top:c})},b.prototype.onmouseup=function(){},b.prototype.isDefault={drag:!1,clicked:!1,toclick:!0,mouseup:!1},b.prototype._init=function(){if(arguments.length>0){this.ptr=a(arguments[0]),this.outer=a(".draggable-outer"),this.is={},a.extend(this.is,this.isDefault);var b=this.ptr.offset();this.d={left:b.left,top:b.top,width:this.ptr.width(),height:this.ptr.height()},this.oninit.apply(this,arguments),this._events()}},b.prototype._getPageCoords=function(a){return a.targetTouches&&a.targetTouches[0]?{x:a.targetTouches[0].pageX,y:a.targetTouches[0].pageY}:{x:a.pageX,y:a.pageY}},b.prototype._bindEvent=function(a,b,c){var d=this;this.supportTouches_?a.get(0).addEventListener(this.events_[b],c,!1):a.bind(this.events_[b],c)},b.prototype._events=function(){var b=this;this.supportTouches_=a.browser.webkit&&navigator.userAgent.indexOf("Mobile")!=-1,this.events_={click:this.supportTouches_?"touchstart":"click",down:this.supportTouches_?"touchstart":"mousedown",move:this.supportTouches_?"touchmove":"mousemove",up:this.supportTouches_?"touchend":"mouseup"},this._bindEvent(a(document),"move",function(a){b.is.drag&&(a.stopPropagation(),a.preventDefault(),b._mousemove(a))}),this._bindEvent(a(document),"down",function(a){b.is.drag&&(a.stopPropagation(),a.preventDefault())}),this._bindEvent(a(document),"up",function(a){b._mouseup(a)}),this._bindEvent(this.ptr,"down",function(a){return b._mousedown(a),!1}),this._bindEvent(this.ptr,"up",function(a){b._mouseup(a)}),this.ptr.find("a").click(function(){b.is.clicked=!0;if(!b.is.toclick)return b.is.toclick=!0,!1}).mousedown(function(a){return b._mousedown(a),!1}),this.events()},b.prototype._mousedown=function(b){this.is.drag=!0,this.is.clicked=!1,this.is.mouseup=!1;var c=this.ptr.offset(),d=this._getPageCoords(b);this.cx=d.x-c.left,this.cy=d.y-c.top,a.extend(this.d,{left:c.left,top:c.top,width:this.ptr.width(),height:this.ptr.height()}),this.outer&&this.outer.get(0)&&this.outer.css({height:Math.max(this.outer.height(),a(document.body).height()),overflow:"hidden"}),this.onmousedown(b)},b.prototype._mousemove=function(a){this.is.toclick=!1;var b=this._getPageCoords(a);this.onmousemove(a,b.x-this.cx,b.y-this.cy)},b.prototype._mouseup=function(b){var c=this;this.is.drag&&(this.is.drag=!1,this.outer&&this.outer.get(0)&&(a.browser.mozilla?this.outer.css({overflow:"hidden"}):this.outer.css({overflow:"visible"}),a.browser.msie&&a.browser.version=="6.0"?this.outer.css({height:"100%"}):this.outer.css({height:"auto"})),this.onmouseup(b))},window.Draggable=b}(jQuery),function(a){function b(a){return typeof a=="undefined"?!1:a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice")?!0:!1}function d(){return this.init.apply(this,arguments)}function e(){Draggable.apply(this,arguments)}a.slider=function(b,c){var e=a(b);return e.data("jslider")||e.data("jslider",new d(b,c)),e.data("jslider")},a.fn.slider=function(c,d){function g(a){return a!==undefined}function h(a){return a!=null}var e,f=arguments;return this.each(function(){var i=a.slider(this,c);if(typeof c=="string")switch(c){case"value":if(g(f[1])&&g(f[2])){var j=i.getPointers();h(j[0])&&h(f[1])&&(j[0].set(f[1]),j[0].setIndexOver()),h(j[1])&&h(f[2])&&(j[1].set(f[2]),j[1].setIndexOver())}else if(g(f[1])){var j=i.getPointers();h(j[0])&&h(f[1])&&(j[0].set(f[1]),j[0].setIndexOver())}else e=i.getValue();break;case"prc":if(g(f[1])&&g(f[2])){var j=i.getPointers();h(j[0])&&h(f[1])&&(j[0]._set(f[1]),j[0].setIndexOver()),h(j[1])&&h(f[2])&&(j[1]._set(f[2]),j[1].setIndexOver())}else if(g(f[1])){var j=i.getPointers();h(j[0])&&h(f[1])&&(j[0]._set(f[1]),j[0].setIndexOver())}else e=i.getPrcValue();break;case"calculatedValue":var k=i.getValue().split(";");e="";for(var l=0;l<k.length;l++)e+=(l>0?";":"")+i.nice(k[l]);break;case"skin":i.setSkin(f[1])}else!c&&!d&&(b(e)||(e=[]),e.push(slider))}),b(e)&&e.length==1&&(e=e[0]),e||this};var c={settings:{from:1,to:10,step:1,smooth:!0,limits:!0,round:0,format:{format:"#,###.##"},value:"5;7",dimension:""},className:"jslider",selector:".jslider-",template:tmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"></i><i class="r"></i><i class="v"></i></div><div class="<%=className%>-pointer"></div><div class="<%=className%>-pointer <%=className%>-pointer-to"></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};d.prototype.init=function(b,d){this.settings=a.extend(!0,{},c.settings,d?d:{}),this.inputNode=a(b).hide(),this.settings.interval=this.settings.to-this.settings.from,this.settings.value=this.inputNode.attr("value"),this.settings.calculate&&a.isFunction(this.settings.calculate)&&(this.nice=this.settings.calculate),this.settings.onstatechange&&a.isFunction(this.settings.onstatechange)&&(this.onstatechange=this.settings.onstatechange),this.is={init:!1},this.o={},this.create()},d.prototype.onstatechange=function(){},d.prototype.create=function(){var b=this;this.domNode=a(c.template({className:c.className,settings:{from:this.nice(this.settings.from),to:this.nice(this.settings.to),dimension:this.settings.dimension},scale:this.generateScale()})),this.inputNode.after(this.domNode),this.drawScale(),this.settings.skin&&this.settings.skin.length>0&&this.setSkin(this.settings.skin),this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},a.extend(this.o,{pointers:{},labels:{0:{o:this.domNode.find(c.selector+"value").not(c.selector+"value-to")},1:{o:this.domNode.find(c.selector+"value").filter(c.selector+"value-to")}},limits:{0:this.domNode.find(c.selector+"label").not(c.selector+"label-to"),1:this.domNode.find(c.selector+"label").filter(c.selector+"label-to")}}),a.extend(this.o.labels[0],{value:this.o.labels[0].o.find("span")}),a.extend(this.o.labels[1],{value:this.o.labels[1].o.find("span")}),b.settings.value.split(";")[1]||(this.settings.single=!0,this.domNode.addDependClass("single")),b.settings.limits||this.domNode.addDependClass("limitless"),this.domNode.find(c.selector+"pointer").each(function(a){var c=b.settings.value.split(";")[a];if(c){b.o.pointers[a]=new e(this,a,b);var d=b.settings.value.split(";")[a-1];d&&new Number(c)<new Number(d)&&(c=d),c=c<b.settings.from?b.settings.from:c,c=c>b.settings.to?b.settings.to:c,b.o.pointers[a].set(c,!0)}}),this.o.value=this.domNode.find(".v"),this.is.init=!0,a.each(this.o.pointers,function(a){b.redraw(this)}),function(b){a(window).resize(function(){b.onresize()})}(this)},d.prototype.setSkin=function(a){this.skin_&&this.domNode.removeDependClass(this.skin_,"_"),this.domNode.addDependClass(this.skin_=a,"_")},d.prototype.setPointersIndex=function(b){a.each(this.getPointers(),function(a){this.index(a)})},d.prototype.getPointers=function(){return this.o.pointers},d.prototype.generateScale=function(){if(this.settings.scale&&this.settings.scale.length>0){var a="",b=this.settings.scale,c=Math.round(100/(b.length-1)*10)/10;for(var d=0;d<b.length;d++)a+='<span style="left: '+d*c+'%">'+(b[d]!="|"?"<ins>"+b[d]+"</ins>":"")+"</span>";return a}return""},d.prototype.drawScale=function(){this.domNode.find(c.selector+"scale span ins").each(function(){a(this).css({marginLeft:-a(this).outerWidth()/2})})},d.prototype.onresize=function(){var b=this;this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},a.each(this.o.pointers,function(a){b.redraw(this)})},d.prototype.limits=function(a,b){if(!this.settings.smooth){var c=this.settings.step*100/this.settings.interval;a=Math.round(a/c)*c}var d=this.o.pointers[1-b.uid];return d&&b.uid&&a<d.value.prc&&(a=d.value.prc),d&&!b.uid&&a>d.value.prc&&(a=d.value.prc),a<0&&(a=0),a>100&&(a=100),Math.round(a*10)/10},d.prototype.redraw=function(a){if(!this.is.init)return!1;this.setValue(),this.o.pointers[0]&&this.o.pointers[1]&&this.o.value.css({left:this.o.pointers[0].value.prc+"%",width:this.o.pointers[1].value.prc-this.o.pointers[0].value.prc+"%"}),this.o.labels[a.uid].value.html(this.nice(a.value.origin)),this.redrawLabels(a)},d.prototype.redrawLabels=function(a){function b(a,b,d){return b.margin=-b.label/2,label_left=b.border+b.margin,label_left<0&&(b.margin-=label_left),b.border+b.label/2>c.sizes.domWidth?(b.margin=0,b.right=!0):b.right=!1,a.o.css({left:d+"%",marginLeft:b.margin,right:"auto"}),b.right&&a.o.css({left:"auto",right:0}),b}var c=this,d=this.o.labels[a.uid],e=a.value.prc,f={label:d.o.outerWidth(),right:!1,border:e*this.sizes.domWidth/100};if(!this.settings.single){var g=this.o.pointers[1-a.uid],h=this.o.labels[g.uid];switch(a.uid){case 0:f.border+f.label/2>h.o.offset().left-this.sizes.domOffset.left?(h.o.css({visibility:"hidden"}),h.value.html(this.nice(g.value.origin)),d.o.css({visibility:"visible"}),e=(g.value.prc-e)/2+e,g.value.prc!=a.value.prc&&(d.value.html(this.nice(a.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(g.value.origin)),f.label=d.o.outerWidth(),f.border=e*this.sizes.domWidth/100)):h.o.css({visibility:"visible"});break;case 1:f.border-f.label/2<h.o.offset().left-this.sizes.domOffset.left+h.o.outerWidth()?(h.o.css({visibility:"hidden"}),h.value.html(this.nice(g.value.origin)),d.o.css({visibility:"visible"}),e=(e-g.value.prc)/2+g.value.prc,g.value.prc!=a.value.prc&&(d.value.html(this.nice(g.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(a.value.origin)),f.label=d.o.outerWidth(),f.border=e*this.sizes.domWidth/100)):h.o.css({visibility:"visible"})}}f=b(d,f,e);if(h){var f={label:h.o.outerWidth(),right:!1,border:g.value.prc*this.sizes.domWidth/100};f=b(h,f,g.value.prc)}this.redrawLimits()},d.prototype.redrawLimits=function(){if(this.settings.limits){var a=[!0,!0];for(key in this.o.pointers)if(!this.settings.single||key==0){var b=this.o.pointers[key],c=this.o.labels[b.uid],d=c.o.offset().left-this.sizes.domOffset.left,e=this.o.limits[0];d<e.outerWidth()&&(a[0]=!1);var e=this.o.limits[1];d+c.o.outerWidth()>this.sizes.domWidth-e.outerWidth()&&(a[1]=!1)}for(var f=0;f<a.length;f++)a[f]?this.o.limits[f].fadeIn("fast"):this.o.limits[f].fadeOut("fast")}},d.prototype.setValue=function(){var a=this.getValue();this.inputNode.attr("value",a),this.onstatechange.call(this,a)},d.prototype.getValue=function(){if(!this.is.init)return!1;var b=this,c="";return a.each(this.o.pointers,function(a){this.value.prc!=undefined&&!isNaN(this.value.prc)&&(c+=(a>0?";":"")+b.prcToValue(this.value.prc))}),c},d.prototype.getPrcValue=function(){if(!this.is.init)return!1;var b=this,c="";return a.each(this.o.pointers,function(a){this.value.prc!=undefined&&!isNaN(this.value.prc)&&(c+=(a>0?";":"")+this.value.prc)}),c},d.prototype.prcToValue=function(a){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0){var b=this.settings.heterogeneity,c=0,d=this.settings.from;for(var e=0;e<=b.length;e++){if(b[e])var f=b[e].split("/");else var f=[100,this.settings.to];f[0]=new Number(f[0]),f[1]=new Number(f[1]);if(a>=c&&a<=f[0])var g=d+(a-c)*(f[1]-d)/(f[0]-c);c=f[0],d=f[1]}}else var g=this.settings.from+a*this.settings.interval/100;return this.round(g)},d.prototype.valueToPrc=function(a,b){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0){var c=this.settings.heterogeneity,d=0,e=this.settings.from;for(var f=0;f<=c.length;f++){if(c[f])var g=c[f].split("/");else var g=[100,this.settings.to];g[0]=new Number(g[0]),g[1]=new Number(g[1]);if(a>=e&&a<=g[1])var h=b.limits(d+(a-e)*(g[0]-d)/(g[1]-e));d=g[0],e=g[1]}}else var h=b.limits((a-this.settings.from)*100/this.settings.interval);return h},d.prototype.round=function(a){return a=Math.round(a/this.settings.step)*this.settings.step,this.settings.round?a=Math.round(a*Math.pow(10,this.settings.round))/Math.pow(10,this.settings.round):a=Math.round(a),a},d.prototype.nice=function(b){return b=b.toString().replace(/,/gi,".").replace(/ /gi,""),a.formatNumber?a.formatNumber(new Number(b),this.settings.format||{}).replace(/-/gi,"&minus;"):new Number(b)},e.prototype=new Draggable,e.prototype.oninit=function(a,b,c){this.uid=b,this.parent=c,this.value={},this.settings=this.parent.settings},e.prototype.onmousedown=function(a){this._parent={offset:this.parent.domNode.offset(),width:this.parent.domNode.width()},this.ptr.addDependClass("hover"),this.setIndexOver()},e.prototype.onmousemove=function(a,b){var c=this._getPageCoords(a);this._set(this.calc(c.x))},e.prototype.onmouseup=function(b){this.parent.settings.callback&&a.isFunction(this.parent.settings.callback)&&this.parent.settings.callback.call(this.parent,this.parent.getValue()),this.ptr.removeDependClass("hover")},e.prototype.setIndexOver=function(){this.parent.setPointersIndex(1),this.index(2)},e.prototype.index=function(a){this.ptr.css({zIndex:a})},e.prototype.limits=function(a){return this.parent.limits(a,this)},e.prototype.calc=function(a){var b=this.limits((a-this._parent.offset.left)*100/this._parent.width);return b},e.prototype.set=function(a,b){this.value.origin=this.parent.round(a),this._set(this.parent.valueToPrc(a,this),b)},e.prototype._set=function(a,b){b||(this.value.origin=this.parent.prcToValue(a)),this.value.prc=a,this.ptr.css({left:a+"%"}),this.parent.redraw(this)}}(jQuery);
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){"use strict";function b(){var a=document.createElement("input");return a.setAttribute("type","range"),"text"!==a.type}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)}function d(a,b){return b=b||100,function(){if(!a.debouncing){var c=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,c),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},b),a.lastReturnVal}}function e(a){return 0===a.offsetWidth||0===a.offsetHeight||a.open===!1?!0:!1}function f(a){for(var b=[],c=a.parentNode;e(c);)b.push(c),c=c.parentNode;return b}function g(a,b){function c(a){"undefined"!=typeof a.open&&(a.open=a.open?!1:!0)}var d=f(a),e=d.length,g=[],h=a[b];if(e){for(var i=0;e>i;i++)g[i]=d[i].style.cssText,d[i].style.display="block",d[i].style.height="0",d[i].style.overflow="hidden",d[i].style.visibility="hidden",c(d[i]);h=a[b];for(var j=0;e>j;j++)d[j].style.cssText=g[j],c(d[j])}return h}function h(b,e){if(this.$window=a(window),this.$document=a(document),this.$element=a(b),this.options=a.extend({},l,e),this.polyfill=this.options.polyfill,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.polyfill&&k)return!1;this.identifier="js-"+i+"-"+j++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.min=parseFloat(this.$element[0].getAttribute("min")||0),this.max=parseFloat(this.$element[0].getAttribute("max")||100),this.value=parseFloat(this.$element[0].value||this.min+(this.max-this.min)/2),this.step=parseFloat(this.$element[0].getAttribute("step")||1),this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=a('<div class="'+this.options.fillClass+'" />'),this.$handle=a('<div class="'+this.options.handleClass+'" />'),this.$range=a('<div class="'+this.options.rangeClass+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=a.proxy(this.handleDown,this),this.handleMove=a.proxy(this.handleMove,this),this.handleEnd=a.proxy(this.handleEnd,this),this.init();var f=this;this.$window.on("resize."+this.identifier,d(function(){c(function(){f.update()},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(a,b){if(!b||b.origin!==f.identifier){var c=a.target.value,d=f.getPositionFromValue(c);f.setPosition(d)}})}var i="rangeslider",j=0,k=b(),l={polyfill:!0,rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]};h.prototype.init=function(){this.onInit&&"function"==typeof this.onInit&&this.onInit(),this.update()},h.prototype.update=function(){this.handleWidth=g(this.$handle[0],"offsetWidth"),this.rangeWidth=g(this.$range[0],"offsetWidth"),this.maxHandleX=this.rangeWidth-this.handleWidth,this.grabX=this.handleWidth/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position)},h.prototype.handleDown=function(a){if(a.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),!((" "+a.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var b=this.getRelativePosition(a),c=this.$range[0].getBoundingClientRect().left,d=this.getPositionFromNode(this.$handle[0])-c;this.setPosition(b-this.grabX),b>=d&&b<d+this.handleWidth&&(this.grabX=b-d)}},h.prototype.handleMove=function(a){a.preventDefault();var b=this.getRelativePosition(a);this.setPosition(b-this.grabX)},h.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},h.prototype.cap=function(a,b,c){return b>a?b:a>c?c:a},h.prototype.setPosition=function(a){var b,c;b=this.getValueFromPosition(this.cap(a,0,this.maxHandleX)),c=this.getPositionFromValue(b),this.$fill[0].style.width=c+this.grabX+"px",this.$handle[0].style.left=c+"px",this.setValue(b),this.position=c,this.value=b,this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(c,b)},h.prototype.getPositionFromNode=function(a){for(var b=0;null!==a;)b+=a.offsetLeft,a=a.offsetParent;return b},h.prototype.getRelativePosition=function(a){var b=this.$range[0].getBoundingClientRect().left,c=0;return"undefined"!=typeof a.pageX?c=a.pageX:"undefined"!=typeof a.originalEvent.clientX?c=a.originalEvent.clientX:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0].clientX?c=a.originalEvent.touches[0].clientX:a.currentPoint&&"undefined"!=typeof a.currentPoint.x&&(c=a.currentPoint.x),c-b},h.prototype.getPositionFromValue=function(a){var b,c;return b=(a-this.min)/(this.max-this.min),c=b*this.maxHandleX},h.prototype.getValueFromPosition=function(a){var b,c;return b=a/(this.maxHandleX||1),c=this.step*Math.round(b*(this.max-this.min)/this.step)+this.min,Number(c.toFixed(this.toFixed))},h.prototype.setValue=function(a){a!==this.value&&this.$element.val(a).trigger("input",{origin:this.identifier})},h.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+i),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},a.fn[i]=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("plugin_"+i);e||d.data("plugin_"+i,e=new h(this,b)),"string"==typeof b&&e[b].apply(e,c)})}});
var fakewaffle=(function($,fakewaffle){'use strict';fakewaffle.responsiveTabs=function(collapseDisplayed){fakewaffle.currentPosition='tabs';var tabGroups=$('.nav-tabs.responsive');var hidden='';var visible='';var activeTab='';if(collapseDisplayed===undefined){collapseDisplayed=['xs','sm']}$.each(collapseDisplayed,function(){hidden+=' hidden-'+this;visible+=' visible-'+this});$.each(tabGroups,function(){var $tabGroup=$(this);var tabs=$tabGroup.find('li a');var collapseDiv=$('<div></div>',{'class':'panel-group responsive'+visible,'id':'collapse-'+$tabGroup.attr('id')});$.each(tabs,function(){var $this=$(this);var oldLinkClass=$this.attr('class')===undefined?'':$this.attr('class');var newLinkClass='accordion-toggle';var oldParentClass=$this.parent().attr('class')===undefined?'':$this.parent().attr('class');var newParentClass='panel panel-default';var newHash=$this.get(0).hash.replace('#','collapse-');if(oldLinkClass.length>0){newLinkClass+=' '+oldLinkClass}if(oldParentClass.length>0){oldParentClass=oldParentClass.replace(/\bactive\b/g,'');newParentClass+=' '+oldParentClass;newParentClass=newParentClass.replace(/\s{2,}/g,' ');newParentClass=newParentClass.replace(/^\s+|\s+$/g,'')}if($this.parent().hasClass('active')){activeTab='#'+newHash}collapseDiv.append($('<div>').attr('class',newParentClass).html($('<div>').attr('class','panel-heading').html($('<h4>').attr('class','panel-title').html($('<a>',{'class':newLinkClass,'data-toggle':'collapse','data-parent':'#collapse-'+$tabGroup.attr('id'),'href':'#'+newHash,'html':$this.html()})))).append($('<div>',{'id':newHash,'class':'panel-collapse collapse'})))});$tabGroup.next().after(collapseDiv);$tabGroup.addClass(hidden);$('.tab-content.responsive').addClass(hidden)});fakewaffle.checkResize();fakewaffle.bindTabToCollapse();if(activeTab){$(activeTab).collapse('show')}};fakewaffle.checkResize=function(){if($('.panel-group.responsive').is(':visible')===true&&fakewaffle.currentPosition==='tabs'){fakewaffle.tabToPanel();fakewaffle.currentPosition='panel'}else if($('.panel-group.responsive').is(':visible')===false&&fakewaffle.currentPosition==='panel'){fakewaffle.panelToTab();fakewaffle.currentPosition='tabs'}};fakewaffle.tabToPanel=function(){var tabGroups=$('.nav-tabs.responsive');$.each(tabGroups,function(index,tabGroup){var tabContents=$(tabGroup).next('.tab-content').find('.tab-pane');$.each(tabContents,function(index,tabContent){var destinationId=$(tabContent).attr('id').replace(/^/,'#collapse-');$(tabContent).removeClass('tab-pane').addClass('panel-body').appendTo($(destinationId))})})};fakewaffle.panelToTab=function(){var panelGroups=$('.panel-group.responsive');$.each(panelGroups,function(index,panelGroup){var destinationId=$(panelGroup).attr('id').replace('collapse-','#');var destination=$(destinationId).next('.tab-content')[0];var panelContents=$(panelGroup).find('.panel-body');panelContents.removeClass('panel-body').addClass('tab-pane').appendTo($(destination))})};fakewaffle.bindTabToCollapse=function(){var tabs=$('.nav-tabs.responsive').find('li a');var collapse=$('.panel-group.responsive').find('.panel-collapse');tabs.on('shown.bs.tab',function(e){var $current=$(e.currentTarget.hash.replace(/#/,'#collapse-'));$current.collapse('show');if(e.relatedTarget){var $previous=$(e.relatedTarget.hash.replace(/#/,'#collapse-'));$previous.collapse('hide')}});collapse.on('shown.bs.collapse',function(e){var current=$(e.target).context.id.replace(/collapse-/g,'#');$('a[href="'+current+'"]').tab('show');var panelGroup=$(e.currentTarget).closest('.panel-group.responsive');$(panelGroup).find('.panel-body').removeClass('active');$(e.currentTarget).find('.panel-body').addClass('active')})};$(window).resize(function(){fakewaffle.checkResize()});return fakewaffle}(window.jQuery,fakewaffle||{}));
;(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case"inline":case"ajax":case"html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=a.tpl.image.replace("{href}",g);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case"inside":c=b.skin;break;case"outside":c=b.wrap;break;case"over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
(function($,F){F.transitions.dropIn=function(){var endPos=F._getPosition(true);endPos.top=(parseInt(endPos.top,10)-200)+'px';endPos.opacity=0;F.wrap.css(endPos).show().animate({top:'+=200px',opacity:1},{duration:F.current.openSpeed,complete:F._afterZoomIn})};F.transitions.dropOut=function(){F.wrap.removeClass('fancybox-opened').animate({top:'-=200px',opacity:0},{duration:F.current.closeSpeed,complete:F._afterZoomOut})};F.transitions.superscaleIn=function(){F.wrap.addClass('superscale');setTimeout(function(){F.wrap.addClass('superscale-transitions');F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.superscaleOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('superscale superscale-transitions');F._afterZoomOut()},300)};F.transitions.fadescaleIn=function(){F.wrap.addClass('fadescale');setTimeout(function(){F.wrap.addClass('fadescale-transitions');F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.fadescaleOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('fadescale fadescale-transitions');F._afterZoomOut()},300)};F.transitions.sliderightIn=function(){F.wrap.addClass('slideright');setTimeout(function(){F.wrap.addClass('slideright-transitions');F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.sliderightOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('slideright slideright-transitions');F._afterZoomOut()},300)};F.transitions.slidebottomIn=function(){F.wrap.addClass('slidebottom');setTimeout(function(){F.wrap.addClass('slidebottom-transitions');F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.slidebottomOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('slidebottom slidebottom-transitions');F._afterZoomOut()},300)};F.transitions.newspaperIn=function(){F.wrap.addClass('newspaper');setTimeout(function(){F.wrap.addClass('newspaper-transitions');F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.newspaperOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('newspaper newspaper-transitions');F._afterZoomOut()},300)};F.transitions.fallIn=function(){F.wrap.addClass('fall');setTimeout(function(){F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.fallOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('fall');F._afterZoomOut()},300)};F.transitions.sidefallIn=function(){F.wrap.addClass('sidefall');setTimeout(function(){F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.sidefallOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('sidefall');F._afterZoomOut()},300)};F.transitions.stickyupIn=function(){F.wrap.addClass('stickyup');setTimeout(function(){F.wrap.addClass('show stickyup-transitions');F._afterZoomIn()})};F.transitions.stickyupOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('stickyup stickyup-transitions');F._afterZoomOut()},300)};F.transitions.horizontalflipIn=function(){F.wrap.addClass('horizflip');setTimeout(function(){F.wrap.addClass('show horizflip-transitions');F._afterZoomIn()})};F.transitions.horizontalflipOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('horizflip horizflip-transitions');F._afterZoomOut()},300)};F.transitions.verticalflipIn=function(){F.wrap.addClass('vertflip');setTimeout(function(){F.wrap.addClass('show vertflip-transitions');F._afterZoomIn()})};F.transitions.verticalflipOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('vertflip vertflip-transitions');F._afterZoomOut()},300)};F.transitions.signIn=function(){F.wrap.addClass('sign');setTimeout(function(){F.wrap.addClass('show sign-transitions');F._afterZoomIn()})};F.transitions.signOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('sign sign-transitions');F._afterZoomOut()},300)};F.transitions.slitIn=function(){F.wrap.addClass('slit');setTimeout(function(){F.wrap.addClass('show');F._afterZoomIn()})};F.transitions.slitOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('slit');F._afterZoomOut()},300)};F.transitions.rotatebottomIn=function(){F.wrap.addClass('rotatebottom');setTimeout(function(){F.wrap.addClass('show rotatebottom-transitions');F._afterZoomIn()})};F.transitions.rotatebottomOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('rotatebottom-transitions rotatebottom');F._afterZoomOut()},300)};F.transitions.rotateleftIn=function(){F.wrap.addClass('rotateleft');setTimeout(function(){F.wrap.addClass('show rotateleft-transitions');F._afterZoomIn()})};F.transitions.rotateleftOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('rotateleft-transitions rotateleft');F._afterZoomOut()},300)};F.transitions.blurIn=function(){F.wrap.siblings().not('.fancybox-wrap').not('.fancybox-overlay').addClass('blur-overlay');F.wrap.addClass('blur');setTimeout(function(){F.wrap.addClass('blur-transitions show');F._afterZoomIn()})};F.transitions.blurOut=function(){F.wrap.removeClass('show');setTimeout(function(){F.wrap.removeClass('blur-transitions blur');F.wrap.siblings().not('.fancybox-wrap').not('.fancybox-overlay').removeClass('blur-overlay');F._afterZoomOut()},300)}})(jQuery,jQuery.fancybox);
!function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,getUniqueId:function(){var a=0;return function(){return a++}}(),templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},noop:function(){}}}(),c="0.10.5",d=function(){"use strict";function a(a){return a=b.toStr(a),a?a.split(/\s+/):[]}function c(a){return a=b.toStr(a),a?a.split(/\W+/):[]}function d(a){return function(){var c=[].slice.call(arguments,0);return function(d){var e=[];return b.each(c,function(c){e=e.concat(a(b.toStr(d[c])))}),e}}}return{nonword:c,whitespace:a,obj:{nonword:d(c),whitespace:d(a)}}}(),e=function(){"use strict";function c(c){this.maxSize=b.isNumber(c)?c:100,this.reset(),this.maxSize<=0&&(this.set=this.get=a.noop)}function d(){this.head=this.tail=null}function e(a,b){this.key=a,this.val=b,this.prev=this.next=null}return b.mixin(c.prototype,{set:function(a,b){var c,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key]),(c=this.hash[a])?(c.val=b,this.list.moveToFront(c)):(c=new e(a,b),this.list.add(c),this.hash[a]=c,this.size++)},get:function(a){var b=this.hash[a];return b?(this.list.moveToFront(b),b.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new d}}),b.mixin(d.prototype,{add:function(a){this.head&&(a.next=this.head,this.head.prev=a),this.head=a,this.tail=this.tail||a},remove:function(a){a.prev?a.prev.next=a.next:this.head=a.next,a.next?a.next.prev=a.prev:this.tail=a.prev},moveToFront:function(a){this.remove(a),this.add(a)}}),c}(),f=function(){"use strict";function a(a){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix))}function c(){return(new Date).getTime()}function d(a){return JSON.stringify(b.isUndefined(a)?null:a)}function e(a){return JSON.parse(a)}var f,g;try{f=window.localStorage,f.setItem("~~~","!"),f.removeItem("~~~")}catch(h){f=null}return g=f&&window.JSON?{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},get:function(a){return this.isExpired(a)&&this.remove(a),e(f.getItem(this._prefix(a)))},set:function(a,e,g){return b.isNumber(g)?f.setItem(this._ttlKey(a),d(c()+g)):f.removeItem(this._ttlKey(a)),f.setItem(this._prefix(a),d(e))},remove:function(a){return f.removeItem(this._ttlKey(a)),f.removeItem(this._prefix(a)),this},clear:function(){var a,b,c=[],d=f.length;for(a=0;d>a;a++)(b=f.key(a)).match(this.keyMatcher)&&c.push(b.replace(this.keyMatcher,""));for(a=c.length;a--;)this.remove(c[a]);return this},isExpired:function(a){var d=e(f.getItem(this._ttlKey(a)));return b.isNumber(d)&&c()>d?!0:!1}}:{get:b.noop,set:b.noop,remove:b.noop,clear:b.noop,isExpired:b.noop},b.mixin(a.prototype,g),a}(),g=function(){"use strict";function c(b){b=b||{},this.cancelled=!1,this.lastUrl=null,this._send=b.transport?d(b.transport):a.ajax,this._get=b.rateLimiter?b.rateLimiter(this._get):this._get,this._cache=b.cache===!1?new e(0):i}function d(c){return function(d,e){function f(a){b.defer(function(){h.resolve(a)})}function g(a){b.defer(function(){h.reject(a)})}var h=a.Deferred();return c(d,e,f,g),h}}var f=0,g={},h=6,i=new e(10);return c.setMaxPendingRequests=function(a){h=a},c.resetCache=function(){i.reset()},b.mixin(c.prototype,{_get:function(a,b,c){function d(b){c&&c(null,b),k._cache.set(a,b)}function e(){c&&c(!0)}function i(){f--,delete g[a],k.onDeckRequestArgs&&(k._get.apply(k,k.onDeckRequestArgs),k.onDeckRequestArgs=null)}var j,k=this;this.cancelled||a!==this.lastUrl||((j=g[a])?j.done(d).fail(e):h>f?(f++,g[a]=this._send(a,b).done(d).fail(e).always(i)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(a,c,d){var e;return b.isFunction(c)&&(d=c,c={}),this.cancelled=!1,this.lastUrl=a,(e=this._cache.get(a))?b.defer(function(){d&&d(null,e)}):this._get(a,c,d),!!e},cancel:function(){this.cancelled=!0}}),c}(),h=function(){"use strict";function c(b){b=b||{},b.datumTokenizer&&b.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=b.datumTokenizer,this.queryTokenizer=b.queryTokenizer,this.reset()}function d(a){return a=b.filter(a,function(a){return!!a}),a=b.map(a,function(a){return a.toLowerCase()})}function e(){return{ids:[],children:{}}}function f(a){for(var b={},c=[],d=0,e=a.length;e>d;d++)b[a[d]]||(b[a[d]]=!0,c.push(a[d]));return c}function g(a,b){function c(a,b){return a-b}var d=0,e=0,f=[];a=a.sort(c),b=b.sort(c);for(var g=a.length,h=b.length;g>d&&h>e;)a[d]<b[e]?d++:a[d]>b[e]?e++:(f.push(a[d]),d++,e++);return f}return b.mixin(c.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie},add:function(a){var c=this;a=b.isArray(a)?a:[a],b.each(a,function(a){var f,g;f=c.datums.push(a)-1,g=d(c.datumTokenizer(a)),b.each(g,function(a){var b,d,g;for(b=c.trie,d=a.split("");g=d.shift();)b=b.children[g]||(b.children[g]=e()),b.ids.push(f)})})},get:function(a){var c,e,h=this;return c=d(this.queryTokenizer(a)),b.each(c,function(a){var b,c,d,f;if(e&&0===e.length)return!1;for(b=h.trie,c=a.split("");b&&(d=c.shift());)b=b.children[d];return b&&0===c.length?(f=b.ids.slice(0),void(e=e?g(e,f):f)):(e=[],!1)}),e?b.map(f(e),function(a){return h.datums[a]}):[]},reset:function(){this.datums=[],this.trie=e()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),c}(),i=function(){"use strict";function d(a){return a.local||null}function e(d){var e,f;return f={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(e=d.prefetch||null)&&(e=b.isString(e)?{url:e}:e,e=b.mixin(f,e),e.thumbprint=c+e.thumbprint,e.ajax.type=e.ajax.type||"GET",e.ajax.dataType=e.ajax.dataType||"json",!e.url&&a.error("prefetch requires url to be set")),e}function f(c){function d(a){return function(c){return b.debounce(c,a)}}function e(a){return function(c){return b.throttle(c,a)}}var f,g;return g={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(f=c.remote||null)&&(f=b.isString(f)?{url:f}:f,f=b.mixin(g,f),f.rateLimiter=/^throttle$/i.test(f.rateLimitBy)?e(f.rateLimitWait):d(f.rateLimitWait),f.ajax.type=f.ajax.type||"GET",f.ajax.dataType=f.ajax.dataType||"json",delete f.rateLimitBy,delete f.rateLimitWait,!f.url&&a.error("remote requires url to be set")),f}return{local:d,prefetch:e,remote:f}}();!function(c){"use strict";function e(b){b&&(b.local||b.prefetch||b.remote)||a.error("one of local, prefetch, or remote is required"),this.limit=b.limit||5,this.sorter=j(b.sorter),this.dupDetector=b.dupDetector||k,this.local=i.local(b),this.prefetch=i.prefetch(b),this.remote=i.remote(b),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new h({datumTokenizer:b.datumTokenizer,queryTokenizer:b.queryTokenizer}),this.storage=this.cacheKey?new f(this.cacheKey):null}function j(a){function c(b){return b.sort(a)}function d(a){return a}return b.isFunction(a)?c:d}function k(){return!1}var l,m;return l=c.Bloodhound,m={data:"data",protocol:"protocol",thumbprint:"thumbprint"},c.Bloodhound=e,e.noConflict=function(){return c.Bloodhound=l,e},e.tokenizers=d,b.mixin(e.prototype,{_loadPrefetch:function(b){function c(a){f.clear(),f.add(b.filter?b.filter(a):a),f._saveToStorage(f.index.serialize(),b.thumbprint,b.ttl)}var d,e,f=this;return(d=this._readFromStorage(b.thumbprint))?(this.index.bootstrap(d),e=a.Deferred().resolve()):e=a.ajax(b.url,b.ajax).done(c),e},_getFromRemote:function(a,b){function c(a,c){b(a?[]:f.remote.filter?f.remote.filter(c):c)}var d,e,f=this;if(this.transport)return a=a||"",e=encodeURIComponent(a),d=this.remote.replace?this.remote.replace(this.remote.url,a):this.remote.url.replace(this.remote.wildcard,e),this.transport.get(d,this.remote.ajax,c)},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()},_saveToStorage:function(a,b,c){this.storage&&(this.storage.set(m.data,a,c),this.storage.set(m.protocol,location.protocol,c),this.storage.set(m.thumbprint,b,c))},_readFromStorage:function(a){var b,c={};return this.storage&&(c.data=this.storage.get(m.data),c.protocol=this.storage.get(m.protocol),c.thumbprint=this.storage.get(m.thumbprint)),b=c.thumbprint!==a||c.protocol!==location.protocol,c.data&&!b?c.data:null},_initialize:function(){function c(){e.add(b.isFunction(f)?f():f)}var d,e=this,f=this.local;return d=this.prefetch?this._loadPrefetch(this.prefetch):a.Deferred().resolve(),f&&d.done(c),this.transport=this.remote?new g(this.remote):null,this.initPromise=d.promise()},initialize:function(a){return!this.initPromise||a?this._initialize():this.initPromise},add:function(a){this.index.add(a)},get:function(a,c){function d(a){var d=f.slice(0);b.each(a,function(a){var c;return c=b.some(d,function(b){return e.dupDetector(a,b)}),!c&&d.push(a),d.length<e.limit}),c&&c(e.sorter(d))}var e=this,f=[],g=!1;f=this.index.get(a),f=this.sorter(f).slice(0,this.limit),f.length<this.limit?g=this._getFromRemote(a,d):this._cancelLastRemoteRequest(),g||(f.length>0||!this.transport)&&c&&c(f)},clear:function(){this.index.reset()},clearPrefetchCache:function(){this.storage&&this.storage.clear()},clearRemoteCache:function(){this.transport&&g.resetCache()},ttAdapter:function(){return b.bind(this.get,this)}}),e}(this)}(window.jQuery);
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
(function(e){e(function(){function i(){}function s(t){var n=new i;return n.then=function(e){var n;try{return e&&(n=e(t)),c(n===r?t:n)}catch(i){return o(i)}},e(n)}function o(t){var n=new i;return n.then=function(e,n){var i;try{return n?(i=n(t),c(i===r?t:i)):o(t)}catch(s){return o(s)}},e(n)}function u(e){return l(e,function(e){return o(e)})}function a(){function p(e,t,n){return l(e,t,n)}function d(e){h(s(e))}function v(e){h(o(e))}function m(e){c(e)}var t,n,u,f,l,c,h;return u=[],f=[],l=function(t,n,r){var i=a();return u.push(function(e){e.then(t,n).then(i.resolve,i.reject,i.progress)}),r&&f.push(r),i.promise},c=function(e){var t,n=0;while(t=f[n++])t(e)},h=function(e){var t,n=0;l=e.then,h=c=function(){throw new Error("already completed")},f=r;while(t=u[n++])t(e);u=[]},t={},n=new i,n.then=t.then=p,t.promise=e(n),t.resolver=e({resolve:t.resolve=d,reject:t.reject=v,progress:t.progress=m}),t}function f(e){return e&&typeof e.then=="function"}function l(e,t,n,r){var i=c(e);return i.then(t,n,r)}function c(e){var t,n;return e instanceof i?t=e:(n=a(),f(e)?(e.then(n.resolve,n.reject,n.progress),t=n.promise):(n.resolve(e),t=n.promise)),t}function h(e,t,n,r,i){return E(2,arguments),l(e,function(e){function m(e){c(e)}function g(e){h(e)}function y(e){p(e)}function b(){c=h=p=S}var s,o,u,f,c,h,p,d,v;d=e.length>>>0,s=Math.max(0,Math.min(t,d)),o=[],f=a(),u=l(f,n,r,i);if(!s)f.resolve(o);else{c=function(e){o.push(e),--s||(b(),f.resolve(o))},h=function(e){b(),f.reject(e)},p=f.progress;for(v=0;v<d;++v)v in e&&l(e[v],m,g,y)}return u})}function p(e,t,n,r){return E(1,arguments),l(e,function(e){return b(e,d,[])}).then(t,n,r)}function d(e,t,n){return e[n]=t,e}function v(e,t,n,r){function i(e){return t?t(e[0]):e[0]}return h(e,1,i,n,r)}function m(e,t){return l(e,function(e){return g(e,t)})}function g(e,t){var n,r,i;r=e.length>>>0,n=new Array(r);for(i=0;i<r;i++)i in e&&(n[i]=l(e[i],t));return b(n,d,n)}function y(e,t,i){var s=n.call(arguments,1);return l(e,function(e){return b.apply(r,[e].concat(s))})}function b(e,n,r){var i,s;return i=e.length,s=[function(e,t,r){return l(e,function(e){return l(t,function(t){return n(e,t,r,i)})})}],arguments.length>2&&s.push(r),t.apply(e,s)}function w(e,t,n){var r=arguments.length>2;return l(e,function(e){return r&&(e=n),t.resolve(e),e},function(e){return t.reject(e),o(e)},t.progress)}function E(e,t){var n,r=t.length;while(r>e){n=t[--r];if(n!=null&&typeof n!="function")throw new Error("callback is not a function")}}function S(){}var e,t,n,r;return l.defer=a,l.reject=u,l.isPromise=f,l.all=p,l.some=h,l.any=v,l.map=m,l.reduce=y,l.chain=w,e=Object.freeze||function(e){return e},i.prototype=e({always:function(e,t){return this.then(e,e,t)},otherwise:function(e){return this.then(r,e)}}),n=[].slice,t=[].reduce||function(e){var t,n,r,i,s;s=0,t=Object(this),i=t.length>>>0,n=arguments;if(n.length<=1)for(;;){if(s in t){r=t[s++];break}if(++s>=i)throw new TypeError}else r=n[1];for(;s<i;++s)s in t&&(r=e(r,t[s],s,t));return r},l})})(typeof define=="function"?define:function(e){typeof module!="undefined"?module.exports=e():jQuery.mapster_when=e()}),function($){$.fn.mapster=function(e){var t=$.mapster.impl;if($.isFunction(t[e]))return t[e].apply(this,Array.prototype.slice.call(arguments,1));if(typeof e=="object"||!e)return t.bind.apply(this,arguments);$.error("Method "+e+" does not exist on jQuery.mapster")},$.mapster={version:"1.2.10",render_defaults:{isSelectable:!0,isDeselectable:!0,fade:!1,fadeDuration:150,fill:!0,fillColor:"000000",fillColorMask:"FFFFFF",fillOpacity:.7,highlight:!0,stroke:!1,strokeColor:"ff0000",strokeOpacity:1,strokeWidth:1,includeKeys:"",altImage:null,altImageId:null,altImages:{}},defaults:{clickNavigate:!1,wrapClass:null,wrapCss:null,onGetList:null,sortList:!1,listenToList:!1,mapKey:"",mapValue:"",singleSelect:!1,listKey:"value",listSelectedAttribute:"selected",listSelectedClass:null,onClick:null,onMouseover:null,onMouseout:null,mouseoutDelay:0,onStateChange:null,boundList:null,onConfigured:null,configTimeout:3e4,noHrefIsMask:!0,scaleMap:!0,safeLoad:!1,areas:[]},shared_defaults:{render_highlight:{fade:!0},render_select:{fade:!1},staticState:null,selected:null},area_defaults:{includeKeys:"",isMask:!1},canvas_style:{position:"absolute",left:0,top:0,padding:0,border:0},hasCanvas:null,isTouch:null,map_cache:[],hooks:{},addHook:function(e,t){this.hooks[e]=(this.hooks[e]||[]).push(t)},callHooks:function(e,t){$.each(this.hooks[e]||[],function(e,n){n.apply(t)})},utils:{when:$.mapster_when,defer:$.mapster_when.defer,subclass:function(e,t){var n=function(){var n=this,r=Array.prototype.slice.call(arguments,0);n.base=e.prototype,n.base.init=function(){e.prototype.constructor.apply(n,r)},t.apply(n,r)};return n.prototype=new e,n.prototype.constructor=n,n},asArray:function(e){return e.constructor===Array?e:this.split(e)},split:function(e,t){var n,r,i=e.split(",");for(n=0;n<i.length;n++)r=$.trim(i[n]),r===""?i.splice(n,1):i[n]=t?t(r):r;return i},updateProps:function(e,t){var n,r=e||{},i=$.isEmptyObject(r)?t:e;return n=[],$.each(i,function(e){n.push(e)}),$.each(Array.prototype.slice.call(arguments,1),function(e,t){$.each(t||{},function(e){if(!n||$.inArray(e,n)>=0){var i=t[e];$.isPlainObject(i)?r[e]=$.extend(r[e]||{},i):i&&i.constructor===Array?r[e]=i.slice(0):typeof i!="undefined"&&(r[e]=t[e])}})}),r},isElement:function(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"},indexOfProp:function(e,t,n){var r=e.constructor===Array?-1:null;return $.each(e,function(e,i){if(i&&(t?i[t]:i)===n)return r=e,!1}),r},boolOrDefault:function(e,t){return this.isBool(e)?e:t||!1},isBool:function(e){return typeof e=="boolean"},isUndef:function(e){return typeof e=="undefined"},ifFunction:function(e,t,n){$.isFunction(e)&&e.call(t,n)},size:function(e,t){var n=$.mapster.utils;return{width:t?e.width||e.naturalWidth:n.imgWidth(e,!0),height:t?e.height||e.naturalHeight:n.imgHeight(e,!0),complete:function(){return!!this.height&&!!this.width}}},setOpacity:function(e,t){$.mapster.hasCanvas()?e.style.opacity=t:$(e).each(function(e,n){typeof n.opacity!="undefined"?n.opacity=t:$(n).css("opacity",t)})},fader:function(){var e={},t=0,n=function(r,i,s,o){var u,a=o/15,f,l=$.mapster.utils;if(typeof r=="number"){f=e[r];if(!f)return}else u=l.indexOfProp(e,null,r),u&&delete e[u],e[++t]=f=r,r=t;s=s||1,i=i+s/a>s-.01?s:i+s/a,l.setOpacity(f,i),i<s&&setTimeout(function(){n(r,i,s,o)},15)};return n}()},getBoundList:function(e,t){if(!e.boundList)return null;var n,r,i=$(),s=$.mapster.utils.split(t);return e.boundList.each(function(t,o){for(n=0;n<s.length;n++)r=s[n],$(o).is("["+e.listKey+'="'+r+'"]')&&(i=i.add(o))}),i},setBoundListProperties:function(e,t,n){t.each(function(t,r){e.listSelectedClass&&(n?$(r).addClass(e.listSelectedClass):$(r).removeClass(e.listSelectedClass)),e.listSelectedAttribute&&$(r).attr(e.listSelectedAttribute,n)})},getMapDataIndex:function(e){var t,n;switch(e.tagName&&e.tagName.toLowerCase()){case"area":n=$(e).parent().attr("name"),t=$("img[usemap='#"+n+"']")[0];break;case"img":t=e}return t?this.utils.indexOfProp(this.map_cache,"image",t):-1},getMapData:function(e){var t=this.getMapDataIndex(e.length?e[0]:e);if(t>=0)return t>=0?this.map_cache[t]:null},queueCommand:function(e,t,n,r){return e?!e.complete||e.currentAction?(e.commands.push({that:t,command:n,args:r}),!0):!1:!1},unload:function(){this.impl.unload(),this.utils=null,this.impl=null,$.fn.mapster=null,$.mapster=null,$("*").unbind()}};var m=$.mapster,u=m.utils,ap=Array.prototype;$.each(["width","height"],function(e,t){var n=t.substr(0,1).toUpperCase()+t.substr(1);u["img"+n]=function(e,r){return(r?$(e)[t]():0)||e[t]||e["natural"+n]||e["client"+n]||e["offset"+n]}}),m.Method=function(e,t,n,r){var i=this;i.name=r.name,i.output=e,i.input=e,i.first=r.first||!1,i.args=r.args?ap.slice.call(r.args,0):[],i.key=r.key,i.func_map=t,i.func_area=n,i.name=r.name,i.allowAsync=r.allowAsync||!1},m.Method.prototype={constructor:m.Method,go:function(){var e,t,n,r,i,s=this.input,o=[],u=this;r=s.length;for(e=0;e<r;e++){t=$.mapster.getMapData(s[e]);if(t){if(!u.allowAsync&&m.queueCommand(t,u.input,u.name,u.args)){this.first&&(i="");continue}n=t.getData(s[e].nodeName==="AREA"?s[e]:this.key),n?$.inArray(n,o)<0&&o.push(n):i=this.func_map.apply(t,u.args);if(this.first||typeof i!="undefined")break}}return $(o).each(function(e,t){i=u.func_area.apply(t,u.args)}),typeof i!="undefined"?i:this.output}},$.mapster.impl=function(){function hasVml(){var e=$("<div />").appendTo("body");e.html('<v:shape id="vml_flag1" adj="1" />');var t=e[0].firstChild;t.style.behavior="url(#default#VML)";var n=t?typeof t.adj=="object":!0;return e.remove(),n}function namespaces(){return typeof document.namespaces=="object"?document.namespaces:null}function hasCanvas(){var e=namespaces();return e&&e.g_vml_?!1:$("<canvas />")[0].getContext?!0:!1}function merge_areas(e,t){var n,r,i=e.options.areas;t&&$.each(t,function(t,s){if(!s||!s.key)return;r=u.indexOfProp(i,"key",s.key),r>=0?$.extend(i[r],s):i.push(s),n=e.getDataForKey(s.key),n&&$.extend(n.options,s)})}function merge_options(e,t){var n=u.updateProps({},t);delete n.areas,u.updateProps(e.options,n),merge_areas(e,t.areas),u.updateProps(e.area_options,e.options)}var me={},addMap=function(e){return m.map_cache.push(e)-1},removeMap=function(e){m.map_cache.splice(e.index,1);for(var t=m.map_cache.length-1;t>=this.index;t--)m.map_cache[t].index--};return me.get=function(e){var t=m.getMapData(this);if(!t||!t.complete)throw"Can't access data until binding complete.";return(new m.Method(this,function(){return this.getSelected()},function(){return this.isSelected()},{name:"get",args:arguments,key:e,first:!0,allowAsync:!0,defaultReturn:""})).go()},me.data=function(e){return(new m.Method(this,null,function(){return this},{name:"data",args:arguments,key:e})).go()},me.highlight=function(e){return(new m.Method(this,function(){if(e!==!1){var t=this.highlightId;return t>=0?this.data[t].key:null}this.ensureNoHighlight()},function(){this.highlight()},{name:"highlight",args:arguments,key:e,first:!0})).go()},me.keys=function(e,t){function i(e){var r,i=[];t?(r=e.areas(),$.each(r,function(e,t){i=i.concat(t.keys)})):i.push(e.key),$.each(i,function(e,t){$.inArray(t,n)<0&&n.push(t)})}var n=[],r=m.getMapData(this);if(!r||!r.complete)throw"Can't access data until binding complete.";return!r||!r.complete?"":(typeof e=="string"?t?i(r.getDataForKey(e)):n=[r.getKeysForGroup(e)]:(t=e,this.each(function(e,t){t.nodeName==="AREA"&&i(r.getDataForArea(t))})),n.join(","))},me.select=function(){me.set.call(this,!0)},me.deselect=function(){me.set.call(this,!1)},me.set=function(e,t,n){function f(t){if(t)switch(e){case!0:t.select(s);break;case!1:t.deselect(!0);break;default:t.toggle(s)}}function l(e){e&&$.inArray(e,a)<0&&(a.push(e),o+=(o===""?"":",")+e.key)}function c(t){$.each(a,function(e,t){f(t)}),e||t.removeSelectionFinish(),t.options.boundList&&m.setBoundListProperties(t.options,m.getBoundList(t.options,o),e)}var r,i,s=n,o,a;return this.filter("img,area").each(function(n,f){var h;i=m.getMapData(f),i!==r&&(r&&c(r),a=[],o=""),i&&(h="",f.nodeName.toUpperCase()==="IMG"?m.queueCommand(i,$(f),"set",[e,t,s])||(t instanceof Array?t.length&&(h=t.join(",")):h=t,h&&$.each(u.split(h),function(e,t){l(i.getDataForKey(t.toString())),r=i})):(s=t,m.queueCommand(i,$(f),"set",[e,s])||(l(i.getDataForArea(f)),r=i)))}),i&&c(i),this},me.unbind=function(e){return(new m.Method(this,function(){this.clearEvents(),this.clearMapData(e),removeMap(this)},null,{name:"unbind",args:arguments})).go()},me.rebind=function(e){return(new m.Method(this,function(){var t=this;t.complete=!1,t.configureOptions(e),t.bindImages().then(function(){t.buildDataset(!0),t.complete=!0})},null,{name:"rebind",args:arguments})).go()},me.get_options=function(e,t){var n=u.isBool(e)?e:t;return(new m.Method(this,function(){var e=$.extend({},this.options);return n&&(e.render_select=u.updateProps({},m.render_defaults,e,e.render_select),e.render_highlight=u.updateProps({},m.render_defaults,e,e.render_highlight)),e},function(){return n?this.effectiveOptions():this.options},{name:"get_options",args:arguments,first:!0,allowAsync:!0,key:e})).go()},me.set_options=function(e){return(new m.Method(this,function(){merge_options(this,e)},null,{name:"set_options",args:arguments})).go()},me.unload=function(){var e;for(e=m.map_cache.length-1;e>=0;e--)m.map_cache[e]&&me.unbind.call($(m.map_cache[e].image));me.graphics=null},me.snapshot=function(){return(new m.Method(this,function(){$.each(this.data,function(e,t){t.selected=!1}),this.base_canvas=this.graphics.createVisibleCanvas(this),$(this.image).before(this.base_canvas)},null,{name:"snapshot"})).go()},me.state=function(){var e,t=null;return $(this).each(function(n,r){if(r.nodeName==="IMG")return e=m.getMapData(r),e&&(t=e.state()),!1}),t},me.bind=function(e){return this.each(function(t,n){var r,i,s,o;r=$(n),o=m.getMapData(n);if(o){me.unbind.apply(r);if(!o.complete)return r.bind(),!0;o=null}s=this.getAttribute("usemap"),i=s&&$('map[name="'+s.substr(1)+'"]');if(!(r.is("img")&&s&&i.size()>0))return!0;r.css("border",0),o||(o=new m.MapData(this,e),o.index=addMap(o),o.map=i,o.bindImages().then(function(){o.initialize()}))})},me.init=function(e){var t,n;m.hasCanvas=function(){return u.isBool(m.hasCanvas.value)||(m.hasCanvas.value=u.isBool(e)?e:hasCanvas()),m.hasCanvas.value},m.hasVml=function(){if(!u.isBool(m.hasVml.value)){var e=namespaces();e&&!e.v&&(e.add("v","urn:schemas-microsoft-com:vml"),t=document.createStyleSheet(),n=["shape","rect","oval","circ","fill","stroke","imagedata","group","textbox"],$.each(n,function(e,n){t.addRule("v\\:"+n,"behavior: url(#default#VML); antialias:true")})),m.hasVml.value=hasVml()}return m.hasVml.value},m.isTouch=!!document.documentElement.ontouchstart,$.extend(m.defaults,m.render_defaults,m.shared_defaults),$.extend(m.area_defaults,m.render_defaults,m.shared_defaults)},me.test=function(obj){return eval(obj)},me}(),$.mapster.impl.init()}(jQuery),function(e){function o(t,n,r){var i=t,s=i.map_data,o=r.isMask;e.each(n.areas(),function(e,t){r.isMask=o||t.nohref&&s.options.noHrefIsMask,i.addShape(t,r)}),r.isMask=o}function u(e){return Math.max(0,Math.min(parseInt(e,16),255))}function a(e,t){return"rgba("+u(e.substr(0,2))+","+u(e.substr(2,2))+","+u(e.substr(4,2))+","+t+")"}function f(){}var t,n=e.mapster,r=n.utils,i,s;n.Graphics=function(e){var t=this;t.active=!1,t.canvas=null,t.width=0,t.height=0,t.shapes=[],t.masks=[],t.map_data=e},t=n.Graphics.prototype={constructor:n.Graphics,begin:function(t,n){var r=e(t);this.elementName=n,this.canvas=t,this.width=r.width(),this.height=r.height(),this.shapes=[],this.masks=[],this.active=!0},addShape:function(e,t){var n=t.isMask?this.masks:this.shapes;n.push({mapArea:e,options:t})},createVisibleCanvas:function(t){return e(this.createCanvasFor(t)).addClass("mapster_el").css(n.canvas_style)[0]},addShapeGroup:function(t,i,s){var u=this,a,f,l,c=this.map_data,h=t.effectiveRenderOptions(i);s&&e.extend(h,s),i==="select"?(f="static_"+t.areaId.toString(),l=c.base_canvas):l=c.overlay_canvas,u.begin(l,f),h.includeKeys&&(a=r.split(h.includeKeys),e.each(a,function(e,t){var n=c.getDataForKey(t.toString());o(u,n,n.effectiveRenderOptions(i))})),o(u,t,h),u.render(),h.fade&&r.fader(n.hasCanvas()?l:e(l).find("._fill").not(".mapster_mask"),0,n.hasCanvas()?1:h.fillOpacity,h.fadeDuration)}},i={renderShape:function(e,t,n){var r,i=t.coords(null,n);switch(t.shape){case"rect":e.rect(i[0],i[1],i[2]-i[0],i[3]-i[1]);break;case"poly":e.moveTo(i[0],i[1]);for(r=2;r<t.length;r+=2)e.lineTo(i[r],i[r+1]);e.lineTo(i[0],i[1]);break;case"circ":case"circle":e.arc(i[0],i[1],i[2],0,Math.PI*2,!1)}},addAltImage:function(e,t,n,r){e.beginPath(),this.renderShape(e,n),e.closePath(),e.clip(),e.globalAlpha=r.altImageOpacity||r.fillOpacity,e.drawImage(t,0,0,n.owner.scaleInfo.width,n.owner.scaleInfo.height)},render:function(){var t,n,r=this,i=r.map_data,s=r.masks.length,o=r.createCanvasFor(i),u=o.getContext("2d"),f=r.canvas.getContext("2d");return s&&(t=r.createCanvasFor(i),n=t.getContext("2d"),n.clearRect(0,0,t.width,t.height),e.each(r.masks,function(e,t){n.save(),n.beginPath(),r.renderShape(n,t.mapArea),n.closePath(),n.clip(),n.lineWidth=0,n.fillStyle="#000",n.fill(),n.restore()})),e.each(r.shapes,function(e,t){u.save(),t.options.fill&&(t.options.altImageId?r.addAltImage(u,i.images[t.options.altImageId],t.mapArea,t.options):(u.beginPath(),r.renderShape(u,t.mapArea),u.closePath(),u.fillStyle=a(t.options.fillColor,t.options.fillOpacity),u.fill())),u.restore()}),e.each(r.shapes.concat(r.masks),function(e,t){var n=t.options.strokeWidth===1?.5:0;t.options.stroke&&(u.save(),u.strokeStyle=a(t.options.strokeColor,t.options.strokeOpacity),u.lineWidth=t.options.strokeWidth,u.beginPath(),r.renderShape(u,t.mapArea,n),u.closePath(),u.stroke(),u.restore())}),s?(n.globalCompositeOperation="source-out",n.drawImage(o,0,0),f.drawImage(t,0,0)):f.drawImage(o,0,0),r.active=!1,r.canvas},createCanvasFor:function(t){return e('<canvas width="'+t.scaleInfo.width+'" height="'+t.scaleInfo.height+'"></canvas>')[0]},clearHighlight:function(){var e=this.map_data.overlay_canvas;e.getContext("2d").clearRect(0,0,e.width,e.height)},refreshSelections:function(){var t,n=this.map_data;t=n.base_canvas,n.base_canvas=this.createVisibleCanvas(n),e(n.base_canvas).hide(),e(t).before(n.base_canvas),n.redrawSelections(),e(n.base_canvas).show(),e(t).remove()}},s={renderShape:function(t,n,r){var i=this,s,o,u,a,f,l,c,h=t.coords();f=i.elementName?'name="'+i.elementName+'" ':"",l=r?'class="'+r+'" ':"",a='<v:fill color="#'+n.fillColor+'" class="_fill" opacity="'+(n.fill?n.fillOpacity:0)+'" /><v:stroke class="_fill" opacity="'+n.strokeOpacity+'"/>',o=n.stroke?" strokeweight="+n.strokeWidth+' stroked="t" strokecolor="#'+n.strokeColor+'"':' stroked="f"',s=n.fill?' filled="t"':' filled="f"';switch(t.shape){case"rect":c="<v:rect "+l+f+s+o+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+h[0]+"px;top:"+h[1]+"px;width:"+(h[2]-h[0])+"px;height:"+(h[3]-h[1])+'px;">'+a+"</v:rect>";break;case"poly":c="<v:shape "+l+f+s+o+' coordorigin="0,0" coordsize="'+i.width+","+i.height+'" path="m '+h[0]+","+h[1]+" l "+h.slice(2).join(",")+' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:'+i.width+"px;height:"+i.height+'px;">'+a+"</v:shape>";break;case"circ":case"circle":c="<v:oval "+l+f+s+o+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+(h[0]-h[2])+"px;top:"+(h[1]-h[2])+"px;width:"+h[2]*2+"px;height:"+h[2]*2+'px;">'+a+"</v:oval>"}return u=e(c),e(i.canvas).append(u),u},render:function(){var t,n=this;return e.each(this.shapes,function(e,t){n.renderShape(t.mapArea,t.options)}),this.masks.length&&e.each(this.masks,function(e,i){t=r.updateProps({},i.options,{fillOpacity:1,fillColor:i.options.fillColorMask}),n.renderShape(i.mapArea,t,"mapster_mask")}),this.active=!1,this.canvas},createCanvasFor:function(t){var n=t.scaleInfo.width,r=t.scaleInfo.height;return e('<var width="'+n+'" height="'+r+'" style="zoom:1;overflow:hidden;display:block;width:'+n+"px;height:"+r+'px;"></var>')[0]},clearHighlight:function(){e(this.map_data.overlay_canvas).children().remove()},removeSelections:function(t){t>=0?e(this.map_data.base_canvas).find('[name="static_'+t.toString()+'"]').remove():e(this.map_data.base_canvas).children().remove()}},e.each(["renderShape","addAltImage","render","createCanvasFor","clearHighlight","removeSelections","refreshSelections"],function(e,r){t[r]=function(e){return function(){return t[e]=(n.hasCanvas()?i[e]:s[e])||f,t[e].apply(this,arguments)}}(r)})}(jQuery),function(e){var t=e.mapster,n=t.utils,r=[];t.MapImages=function(e){this.owner=e,this.clear()},t.MapImages.prototype={constructor:t.MapImages,slice:function(){return r.slice.apply(this,arguments)},splice:function(){r.slice.apply(this.status,arguments);var e=r.slice.apply(this,arguments);return e},complete:function(){return e.inArray(!1,this.status)<0},_add:function(e){var t=r.push.call(this,e)-1;return this.status[t]=!1,t},indexOf:function(t){return e.inArray(t,this)},clear:function(){var t=this;t.ids&&t.ids.length>0&&e.each(t.ids,function(e,n){delete t[n]}),t.ids=[],t.length=0,t.status=[],t.splice(0)},add:function(t,n){var r,i,s=this;if(!t)return;if(typeof t=="string"){i=t,t=s[i];if(typeof t=="object")return s.indexOf(t);t=e("<img />").addClass("mapster_el").hide(),r=s._add(t[0]),t.bind("load",function(e){s.imageLoaded.call(s,e)}).bind("error",function(e){s.imageLoadError.call(s,e)}),t.attr("src",i)}else r=s._add(e(t)[0]);if(n){if(this[n])throw n+" is already used or is not available as an altImage alias.";s.ids.push(n),s[n]=s[r]}return r},bind:function(e){var t=this,r,i=t.owner.options.configTimeout/200,s=function(){var e;e=t.length;while(e-->0)if(!t.isLoaded(e))break;t.complete()?t.resolve():i-->0?t.imgTimeout=window.setTimeout(function(){s.call(t,!0)},50):t.imageLoadError.call(t)};return r=t.deferred=n.defer(),s(),r},resolve:function(){var e=this,t=e.deferred;t&&(e.deferred=null,t.resolve())},imageLoaded:function(t){var n=this,r=n.indexOf(t.target);r>=0&&(n.status[r]=!0,e.inArray(!1,n.status)<0&&n.resolve())},imageLoadError:function(e){clearTimeout(this.imgTimeout),this.triesLeft=0;var t=e?"The image "+e.target.src+" failed to load.":"The images never seemed to finish loading. You may just need to increase the configTimeout if images could take a long time to load.";throw t},isLoaded:function(e){var t,r=this,i=r.status;return i[e]?!0:(t=r[e],typeof t.complete!="undefined"?i[e]=t.complete:i[e]=!!n.imgWidth(t),i[e])}}}(jQuery),function(e){function r(t){e.extend(t,{complete:!1,map:null,base_canvas:null,overlay_canvas:null,commands:[],data:[],mapAreas:[],_xref:{},highlightId:-1,currentAreaId:-1,_tooltip_events:[],scaleInfo:null,index:-1,activeAreaEvent:null})}function i(e){return[e,e.render_highlight,e.render_select]}function s(r){var s=r.options,o=r.images;t.hasCanvas()&&(e.each(s.altImages||{},function(e,t){o.add(t,e)}),e.each([s].concat(s.areas),function(t,n){e.each(i(n),function(e,t){t&&t.altImage&&(t.altImageId=o.add(t.altImage))})})),r.area_options=n.updateProps({},t.area_defaults,s)}function o(e,t,r,i){function s(t){e.currentAreaId!==t&&e.highlightId>=0&&i.resolve()}i=i||n.when.defer(),e.activeAreaEvent&&(window.clearTimeout(e.activeAreaEvent),e.activeAreaEvent=0);if(t<0)return;return r.owner.currentAction||t?e.activeAreaEvent=window.setTimeout(function(){return function(){o(e,0,r,i)}}(r),t||100):s(r.areaId),i}function u(e){t.hasCanvas()||this.blur(),e.preventDefault()}function a(t,n){var r=t.getAllDataForArea(this),i=r.length?r[0]:null;if(!i||i.isNotRendered()||i.owner.currentAction)return;if(t.currentAreaId===i.areaId)return;t.highlightId!==i.areaId&&(t.clearEffects(),i.highlight(),t.options.showToolTip&&e.each(r,function(e,t){t.effectiveOptions().toolTip&&t.showToolTip()})),t.currentAreaId=i.areaId,e.isFunction(t.options.onMouseover)&&t.options.onMouseover.call(this,{e:n,options:i.effectiveOptions(),key:i.key,selected:i.isSelected()})}function f(t,n){var r,i=t.getDataForArea(this),s=t.options;if(t.currentAreaId<0||!i)return;r=t.getDataForArea(n.relatedTarget);if(r===i)return;t.currentAreaId=-1,i.area=null,o(t,s.mouseoutDelay,i).then(t.clearEffects),e.isFunction(s.onMouseout)&&s.onMouseout.call(this,{e:n,options:s,key:i.key,selected:i.isSelected()})}function l(t){var n=t.options;t.ensureNoHighlight(),n.toolTipClose&&e.inArray("area-mouseout",n.toolTipClose)>=0&&t.activeToolTip&&t.clearToolTip()}function c(r,i){function v(u){var p,g;l=u.isSelectable()&&(u.isDeselectable()||!u.isSelected()),l?f=!u.isSelected():f=u.isSelected(),a=t.getBoundList(d,u.key);if(e.isFunction(d.onClick)){c=d.onClick.call(h,{e:i,listTarget:a,key:u.key,selected:f});if(n.isBool(c)){if(!c)return!1;g=e(u.area).attr("href");if(g!=="#")return window.location.href=g,!1}}l&&(s=u.toggle()),d.boundList&&d.boundList.length>0&&t.setBoundListProperties(d,a,u.isSelected()),p=u.effectiveOptions(),p.includeKeys&&(o=n.split(p.includeKeys),e.each(o,function(e,t){var n=r.getDataForKey(t.toString());n.options.isMask||v(n)}))}var s,o,a,f,l,c,h=this,p=r.getDataForArea(this),d=r.options;u.call(this,i);if(d.clickNavigate&&p.href){window.location.href=p.href;return}p&&!p.owner.currentAction&&(d=r.options,v(p))}var t=e.mapster,n=t.utils;t.MapData=function(e,n){var i=this;i.image=e,i.images=new t.MapImages(i),i.graphics=new t.Graphics(i),i.imgCssText=e.style.cssText||null,r(i),i.configureOptions(n),i.mouseover=function(e){a.call(this,i,e)},i.mouseout=function(e){f.call(this,i,e)},i.click=function(e){c.call(this,i,e)},i.clearEffects=function(e){l.call(this,i,e)}},t.MapData.prototype={constructor:t.MapData,configureOptions:function(e){this.options=n.updateProps({},t.defaults,e)},bindImages:function(){var e=this,t=e.images;return t.length>2?t.splice(2):t.length===0&&(t.add(e.image),t.add(e.image.src)),s(e),e.images.bind()},isActive:function(){return!this.complete||this.currentAction},state:function(){return{complete:this.complete,resizing:this.currentAction==="resizing",zoomed:this.zoomed,zoomedArea:this.zoomedArea,scaleInfo:this.scaleInfo}},wrapId:function(){return"mapster_wrap_"+this.index},_idFromKey:function(e){return typeof e=="string"&&this._xref.hasOwnProperty(e)?this._xref[e]:-1},getSelected:function(){var t="";return e.each(this.data,function(e,n){n.isSelected()&&(t+=(t?",":"")+this.key)}),t},getAllDataForArea:function(t,r){var i,s,o,u=this,a=e(t).filter("area").attr(u.options.mapKey);if(a){o=[],a=n.split(a);for(i=0;i<(r||a.length);i++)s=u.data[u._idFromKey(a[i])],s.area=t.length?t[0]:t,o.push(s)}return o},getDataForArea:function(e){var t=this.getAllDataForArea(e,1);return t?t[0]||null:null},getDataForKey:function(e){return this.data[this._idFromKey(e)]},getKeysForGroup:function(e){var t=this.getDataForKey(e);return t?t.isPrimary?t.key:this.getPrimaryKeysForMapAreas(t.areas()).join(","):""},getPrimaryKeysForMapAreas:function(t){var n=[];return e.each(t,function(t,r){e.inArray(r.keys[0],n)<0&&n.push(r.keys[0])}),n},getData:function(e){return typeof e=="string"?this.getDataForKey(e):e&&e.mapster||n.isElement(e)?this.getDataForArea(e):null},ensureNoHighlight:function(){var e;this.highlightId>=0&&(this.graphics.clearHighlight(),e=this.data[this.highlightId],e.changeState("highlight",!1),this.setHighlightId(-1))},setHighlightId:function(e){this.highlightId=e},clearSelections:function(){e.each(this.data,function(e,t){t.selected&&t.deselect(!0)}),this.removeSelectionFinish()},setAreaOptions:function(e){var t,r,i;e=e||[];for(t=e.length-1;t>=0;t--)r=e[t],r&&(i=this.getDataForKey(r.key),i&&(n.updateProps(i.options,r),n.isBool(r.selected)&&(i.selected=r.selected)))},drawSelections:function(e){var t,r=n.asArray(e);for(t=r.length-1;t>=0;t--)this.data[r[t]].drawSelection()},redrawSelections:function(){e.each(this.data,function(e,t){t.isSelectedOrStatic()&&t.drawSelection()})},initialize:function(){var r,i,s,o,u,a,f,l,c,h,p,d,v=this,g=v.options;if(v.complete)return;c=e(v.image),u=c.parent().attr("id"),u&&u.length>=12&&u.substring(0,12)==="mapster_wrap"?(o=c.parent(),o.attr("id",v.wrapId())):(o=e('<div id="'+v.wrapId()+'"></div>'),g.wrapClass&&(g.wrapClass===!0?o.addClass(c[0].className):o.addClass(g.wrapClass))),v.wrapper=o,v.scaleInfo=d=n.scaleMap(v.images[0],v.images[1],g.scaleMap),v.base_canvas=i=v.graphics.createVisibleCanvas(v),v.overlay_canvas=s=v.graphics.createVisibleCanvas(v),r=e(v.images[1]).addClass("mapster_el "+v.images[0].className).attr({id:null,usemap:null}),l=n.size(v.images[0]),l.complete&&r.css({width:l.width,height:l.height}),v.buildDataset(),a={display:"block",position:"relative",padding:0,width:d.width,height:d.height},g.wrapCss&&e.extend(a,g.wrapCss),c.parent()[0]!==v.wrapper[0]&&c.before(v.wrapper),o.css(a),e(v.images.slice(2)).hide();for(f=1;f<v.images.length;f++)o.append(v.images[f]);o.append(i).append(s).append(c.css(t.canvas_style)),n.setOpacity(v.images[0],0),e(v.images[1]).show(),n.setOpacity(v.images[1],1),g.isSelectable&&g.onGetList&&(p=v.data.slice(0),g.sortList&&(g.sortList==="desc"?h=function(e,t){return e===t?0:e>t?-1:1}:h=function(e,t){return e===t?0:e<t?-1:1},p.sort(function(e,t){return e=e.value,t=t.value,h(e,t)})),v.options.boundList=g.onGetList.call(v.image,p)),v.complete=!0,v.processCommandQueue(),g.onConfigured&&typeof g.onConfigured=="function"&&g.onConfigured.call(c,!0)},buildDataset:function(n){function E(e,n){var r=new t.AreaData(y,e,n);return r.areaId=y._xref[e]=y.data.push(r)-1,r.areaId}var r,i,s,o,u,a,f,l,c,h,p,d,v,g,y=this,b=y.options,w;y._xref={},y.data=[],n||(y.mapAreas=[]),w=!b.mapKey,w&&(b.mapKey="data-mapster-key"),r=t.hasVml()?"area":w?"area[coords]":"area["+b.mapKey+"]",i=e(y.map).find(r).unbind(".mapster");for(p=0;p<i.length;p++){o=0,a=i[p],u=e(a);if(!a.coords)continue;w?(f=String(p),u.attr("data-mapster-key",f)):f=a.getAttribute(b.mapKey),n?(l=y.mapAreas[u.data("mapster")-1],l.configure(f)):(l=new t.MapArea(y,a,f),y.mapAreas.push(l)),h=l.keys;for(s=h.length-1;s>=0;s--)c=h[s],b.mapValue&&(d=u.attr(b.mapValue)),w?(o=E(y.data.length,d),v=y.data[o],v.key=c=o.toString()):(o=y._xref[c],o>=0?(v=y.data[o],d&&!y.data[o].value&&(v.value=d)):(o=E(c,d),v=y.data[o],v.isPrimary=s===0)),l.areaDataXref.push(o),v.areasXref.push(p);g=u.attr("href"),g&&g!=="#"&&!v.href&&(v.href=g),l.nohref||(u.bind("click.mapster",y.click),t.isTouch||u.bind("mouseover.mapster",y.mouseover).bind("mouseout.mapster",y.mouseout).bind("mousedown.mapster",y.mousedown)),u.data("mapster",p+1)}y.setAreaOptions(b.areas),y.redrawSelections()},processCommandQueue:function(){var e,n=this;while(!n.currentAction&&n.commands.length)e=n.commands[0],n.commands.splice(0,1),t.impl[e.command].apply(e.that,e.args)},clearEvents:function(){e(this.map).find("area").unbind(".mapster"),e(this.images).unbind(".mapster")},_clearCanvases:function(t){t||e(this.base_canvas).remove(),e(this.overlay_canvas).remove()},clearMapData:function(t){var r=this;this._clearCanvases(t),e.each(this.data,function(e,t){t.reset()}),this.data=null,t||(this.image.style.cssText=this.imgCssText,e(this.wrapper).before(this.image).remove()),r.images.clear(),this.image=null,n.ifFunction(this.clearTooltip,this)},removeSelectionFinish:function(){var e=this.graphics;e.refreshSelections(),e.clearHighlight()}}}(jQuery),function(e){function r(t){var n=this,r=n.owner;r.options.singleSelect&&r.clearSelections(),n.isSelected()||(t&&(n.optsCache=e.extend(n.effectiveRenderOptions("select"),t,{altImageId:r.images.add(t.altImage)})),n.drawSelection(),n.selected=!0,n.changeState("select",!0)),r.options.singleSelect&&r.graphics.refreshSelections()}function i(e){var t=this;t.selected=!1,t.changeState("select",!1),t.optsCache=null,t.owner.graphics.removeSelections(t.areaId),e||t.owner.removeSelectionFinish()}function s(e){var t=this;return t.isSelected()?t.deselect():t.select(e),t.isSelected()}var t=e.mapster,n=t.utils;t.AreaData=function(t,n,r){e.extend(this,{owner:t,key:n||"",isPrimary:!0,areaId:-1,href:"",value:r||"",options:{},selected:null,areasXref:[],area:null,optsCache:null})},t.AreaData.prototype={constuctor:t.AreaData,select:r,deselect:i,toggle:s,areas:function(){var e,t=[];for(e=0;e<this.areasXref.length;e++)t.push(this.owner.mapAreas[this.areasXref[e]]);return t},coords:function(t){var n=[];return e.each(this.areas(),function(e,r){n=n.concat(r.coords(t))}),n},reset:function(){e.each(this.areas(),function(e,t){t.reset()}),this.areasXref=[],this.options=null},isSelectedOrStatic:function(){var e=this.effectiveOptions();return n.isBool(e.staticState)?e.staticState:this.isSelected()},isSelected:function(){return n.isBool(this.selected)?this.selected:n.isBool(this.owner.area_options.selected)?this.owner.area_options.selected:!1},isSelectable:function(){return n.isBool(this.effectiveOptions().staticState)?!1:n.isBool(this.owner.options.staticState)?!1:n.boolOrDefault(this.effectiveOptions().isSelectable,!0)},isDeselectable:function(){return n.isBool(this.effectiveOptions().staticState)?!1:n.isBool(this.owner.options.staticState)?!1:n.boolOrDefault(this.effectiveOptions().isDeselectable,!0)},isNotRendered:function(){var t=e(this.area);return t.attr("nohref")||!t.attr("href")||this.effectiveOptions().isMask},effectiveOptions:function(e){var t=n.updateProps({},this.owner.area_options,this.options,e||{},{id:this.areaId});return t.selected=this.isSelected(),t},effectiveRenderOptions:function(t,r){var i,s=this.optsCache;if(!s||t==="highlight")i=this.effectiveOptions(r),s=n.updateProps({},i,i["render_"+t]),t!=="highlight"&&(this.optsCache=s);return e.extend({},s)},changeState:function(t,n){e.isFunction(this.owner.options.onStateChange
)&&this.owner.options.onStateChange.call(this.owner.image,{key:this.key,state:t,selected:n})},highlight:function(e){var t=this.owner;this.effectiveOptions().highlight&&t.graphics.addShapeGroup(this,"highlight",e),t.setHighlightId(this.areaId),this.changeState("highlight",!0)},drawSelection:function(){this.owner.graphics.addShapeGroup(this,"select")}},t.MapArea=function(t,r,i){if(!t)return;var s=this;s.owner=t,s.area=r,s.areaDataXref=[],s.originalCoords=[],e.each(n.split(r.coords),function(e,t){s.originalCoords.push(parseFloat(t))}),s.length=s.originalCoords.length,s.shape=r.shape.toLowerCase(),s.nohref=r.nohref||!r.href,s.configure(i)},t.MapArea.prototype={constructor:t.MapArea,configure:function(e){this.keys=n.split(e)},reset:function(){this.area=null},coords:function(t){return e.map(this.originalCoords,function(e){return t?e:e+t})}}}(jQuery),function(e){var t=e.mapster.utils;t.areaCorners=function(n,r,i,s,o){var a,f,l,c,h,p,d,v,m,g,y,b,w,E,S=0,x=0,T,N,C,k,L,A,O=[];n=n.length?n:[n],i=i?e(i):e(document.body),a=i.offset(),T=a.left,N=a.top,r&&(a=e(r).offset(),S=a.left,x=a.top);for(E=0;E<n.length;E++){A=n[E];if(A.nodeName==="AREA"){C=t.split(A.coords,parseInt);switch(A.shape){case"circle":y=C[0],b=C[1],k=C[2],O=[];for(E=0;E<360;E+=20)L=E*Math.PI/180,O.push(y+k*Math.cos(L),b+k*Math.sin(L));break;case"rect":O.push(C[0],C[1],C[2],C[1],C[2],C[3],C[0],C[3]);break;default:O=O.concat(C)}for(E=0;E<O.length;E+=2)O[E]=parseInt(O[E],10)+S,O[E+1]=parseInt(O[E+1],10)+x}else A=e(A),a=A.position(),O.push(a.left,a.top,a.left+A.width(),a.top,a.left+A.width(),a.top+A.height(),a.left,a.top+A.height())}l=c=d=m=999999,h=p=v=g=-1;for(E=O.length-2;E>=0;E-=2)y=O[E],b=O[E+1],y<l&&(l=y,g=b),y>h&&(h=y,m=b),b<c&&(c=b,v=y),b>p&&(p=b,d=y);return s&&o&&(f=!1,e.each([[v-s,c-o],[d,c-o],[l-s,g-o],[l-s,m],[h,g-o],[h,m],[v-s,p],[d,p]],function(e,t){if(!f&&t[0]>T&&t[1]>N)return w=t,f=!0,!1}),f||(w=[h,p])),w}}(jQuery),function(e){var t=e.mapster,n=t.utils,r=t.MapArea.prototype;t.utils.getScaleInfo=function(e,t){var n;return t?(n=e.width/t.width||e.height/t.height,n>.98&&n<1.02&&(n=1)):(n=1,t=e),{scale:n!==1,scalePct:n,realWidth:t.width,realHeight:t.height,width:e.width,height:e.height,ratio:e.width/e.height}},t.utils.scaleMap=function(e,t,r){var i=n.size(e),s=n.size(t,!0);if(!s.complete())throw"Another script, such as an extension, appears to be interfering with image loading. Please let us know about this.";return i.complete()||(i=s),this.getScaleInfo(i,r?s:null)},t.MapData.prototype.resize=function(r,i,s,o){function v(n,r,i){t.hasCanvas()?(n.width=r,n.height=i):(e(n).width(r),e(n).height(i))}function g(){d.currentAction="",e.isFunction(o)&&o(),d.processCommandQueue()}function y(){v(d.overlay_canvas,r,i);if(h>=0){var e=d.data[h];e.tempOptions={fade:!1},d.getDataForKey(e.key).highlight(),e.tempOptions=null}v(d.base_canvas,r,i),d.redrawSelections(),g()}function b(){e(d.image).css(l),d.scaleInfo=n.getScaleInfo({width:r,height:i},{width:d.scaleInfo.realWidth,height:d.scaleInfo.realHeight}),e.each(d.data,function(t,n){e.each(n.areas(),function(e,t){t.resize()})})}var a,f,l,c,h,p,d=this;o=o||s;if(d.scaleInfo.width===r&&d.scaleInfo.height===i)return;h=d.highlightId,r||(p=i/d.scaleInfo.realHeight,r=Math.round(d.scaleInfo.realWidth*p)),i||(p=r/d.scaleInfo.realWidth,i=Math.round(d.scaleInfo.realHeight*p)),l={width:String(r)+"px",height:String(i)+"px"},t.hasCanvas()||e(d.base_canvas).children().remove(),c=e(d.wrapper).find(".mapster_el").add(d.wrapper),s?(f=[],d.currentAction="resizing",c.each(function(t,r){a=n.defer(),f.push(a),e(r).animate(l,{duration:s,complete:a.resolve,easing:"linear"})}),a=n.defer(),f.push(a),n.when.all(f).then(y),b(),a.resolve()):(c.css(l),b(),y())},t.MapArea=n.subclass(t.MapArea,function(){this.base.init(),this.owner.scaleInfo.scale&&this.resize()}),r.coords=function(e,t){var n,r=[],i=e||this.owner.scaleInfo.scalePct,s=t||0;if(i===1&&t===0)return this.originalCoords;for(n=0;n<this.length;n++)r.push(Math.round(this.originalCoords[n]*i)+s);return r},r.resize=function(){this.area.coords=this.coords().join(",")},r.reset=function(){this.area.coords=this.coords(1).join(",")},t.impl.resize=function(e,n,r,i){if(!e&&!n)return!1;var s=(new t.Method(this,function(){this.resize(e,n,r,i)},null,{name:"resize",args:arguments})).go();return s}}(jQuery),function(e){function r(t,n,r){var i;return n?(i=typeof n=="string"?e(n):e(n).clone(),i.append(t)):i=e(t),i.css(e.extend(r||{},{display:"block",position:"absolute"})).hide(),e("body").append(i),i.attr("data-opacity",i.css("opacity")).css("opacity",0),i.show()}function i(e,t){var r={left:t.left+"px",top:t.top+"px"},i=e.attr("data-opacity")||0,s=e.css("z-index");if(parseInt(s,10)===0||s==="auto")r["z-index"]=9999;e.css(r).addClass("mapster_tooltip"),t.fadeDuration&&t.fadeDuration>0?n.fader(e[0],0,i,t.fadeDuration):n.setOpacity(e[0],i)}function s(t,n,r,i,s,o){var u=r+".mapster-tooltip";if(e.inArray(n,t)>=0)return i.unbind(u).bind(u,function(e){if(!s||s.call(this,e))i.unbind(".mapster-tooltip"),o&&o.call(this)}),{object:i,event:u}}function o(e,t,r,s,o){var u,a={};return o=o||{},t?(u=n.areaCorners(t,r,s,e.outerWidth(!0),e.outerHeight(!0)),a.left=u[0],a.top=u[1]):(a.left=o.left,a.top=o.top),a.left+=o.offsetx||0,a.top+=o.offsety||0,a.css=o.css,a.fadeDuration=o.fadeDuration,i(e,a),e}function u(e){return e?typeof e=="string"||e.jquery?e:e.content:null}var t=e.mapster,n=t.utils;e.extend(t.defaults,{toolTipContainer:'<div style="border: 2px solid black; background: #EEEEEE; width:160px; padding:4px; margin: 4px; -moz-box-shadow: 3px 3px 5px #535353; -webkit-box-shadow: 3px 3px 5px #535353; box-shadow: 3px 3px 5px #535353; -moz-border-radius: 6px 6px 6px 6px; -webkit-border-radius: 6px; border-radius: 6px 6px 6px 6px; opacity: 0.9;"></dteniv>',showToolTip:!1,toolTipFade:!0,toolTipClose:["area-mouseout","image-mouseout"],onShowToolTip:null,onHideToolTip:null}),e.extend(t.area_defaults,{toolTip:null,toolTipClose:null}),t.MapData.prototype.clearToolTip=function(){this.activeToolTip&&(this.activeToolTip.stop().remove(),this.activeToolTip=null,this.activeToolTipID=null,n.ifFunction(this.options.onHideToolTip,this))},t.AreaData.prototype.showToolTip=function(t,i){var u,a,f,l,c,h={},p=this,d=p.owner,v=p.effectiveOptions();i=i?e.extend({},i):{},t=t||v.toolTip,a=i.closeEvents||v.toolTipClose||d.options.toolTipClose||"tooltip-click",c=typeof i.template!="undefined"?i.template:d.options.toolTipContainer,i.closeEvents=typeof a=="string"?a=n.split(a):a,i.fadeDuration=i.fadeDuration||(d.options.toolTipFade?d.options.fadeDuration||v.fadeDuration:0),f=p.area?p.area:e.map(p.areas(),function(e){return e.area});if(d.activeToolTipID===p.areaId)return;return d.clearToolTip(),d.activeToolTip=u=r(t,c,i.css),d.activeToolTipID=p.areaId,l=function(){d.clearToolTip()},s(a,"area-click","click",e(d.map),null,l),s(a,"tooltip-click","click",u,null,l),s(a,"image-mouseout","mouseout",e(d.image),function(e){return e.relatedTarget&&e.relatedTarget.nodeName!=="AREA"&&e.relatedTarget!==p.area},l),o(u,f,d.image,i.container,c,i),n.ifFunction(d.options.onShowToolTip,p.area,{toolTip:u,options:h,areaOptions:v,key:p.key,selected:p.isSelected()}),u},t.impl.tooltip=function(n,i){return(new t.Method(this,function(){var a,f,l=this;if(!n)l.clearToolTip();else{f=e(n);if(l.activeToolTipID===f[0])return;l.clearToolTip(),l.activeToolTip=a=r(u(i),i.template||l.options.toolTipContainer,i.css),l.activeToolTipID=f[0],s(["tooltip-click"],"tooltip-click","click",a,null,function(){l.clearToolTip()}),l.activeToolTip=a=o(a,f,l.image,i.container,i)}},function(){e.isPlainObject(n)&&!i&&(i=n),this.showToolTip(u(i),i)},{name:"tooltip",args:arguments,key:n})).go()}}(jQuery);
/*! Summernote v0.6.16 | (c) 2013-2015 Alan Hong and other contributors | MIT license */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){Array.prototype.reduce||(Array.prototype.reduce=function(a){var b,c=Object(this),d=c.length>>>0,e=0;if(2===arguments.length)b=arguments[1];else{for(;d>e&&!(e in c);)e++;if(e>=d)throw new TypeError("Reduce of empty array with no initial value");b=c[e++]}for(;d>e;e++)e in c&&(b=a(b,c[e],e,c));return b}),"function"!=typeof Array.prototype.filter&&(Array.prototype.filter=function(a){for(var b=Object(this),c=b.length>>>0,d=[],e=arguments.length>=2?arguments[1]:void 0,f=0;c>f;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}),Array.prototype.map||(Array.prototype.map=function(a,b){var c,d,e;if(null===this)throw new TypeError(" this is null or not defined");var f=Object(this),g=f.length>>>0;if("function"!=typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(c=b),d=new Array(g),e=0;g>e;){var h,i;e in f&&(h=f[e],i=a.call(c,h,e,f),d[e]=i),e++}return d});var b,c="function"==typeof define&&define.amd,d=function(b){var c="Comic Sans MS"===b?"Courier New":"Comic Sans MS",d=a("<div>").css({position:"absolute",left:"-9999px",top:"-9999px",fontSize:"200px"}).text("mmmmmmmmmwwwwwww").appendTo(document.body),e=d.css("fontFamily",c).width(),f=d.css("fontFamily",b+","+c).width();return d.remove(),e!==f},e=navigator.userAgent,f=/MSIE|Trident/i.test(e);if(f){var g=/MSIE (\d+[.]\d+)/.exec(e);g&&(b=parseFloat(g[1])),g=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(e),g&&(b=parseFloat(g[1]))}var h,i={isMac:navigator.appVersion.indexOf("Mac")>-1,isMSIE:f,isFF:/firefox/i.test(e),isWebkit:/webkit/i.test(e),isSafari:/safari/i.test(e),browserVersion:b,jqueryVersion:parseFloat(a.fn.jquery),isSupportAmd:c,hasCodeMirror:c?require.specified("CodeMirror"):!!window.CodeMirror,isFontInstalled:d,isW3CRangeSupport:!!document.createRange},j=function(){var b=function(a){return function(b){return a===b}},c=function(a,b){return a===b},d=function(a){return function(b,c){return b[a]===c[a]}},e=function(){return!0},f=function(){return!1},g=function(a){return function(){return!a.apply(a,arguments)}},h=function(a,b){return function(c){return a(c)&&b(c)}},i=function(a){return a},j=0,k=function(a){var b=++j+"";return a?a+b:b},l=function(b){var c=a(document);return{top:b.top+c.scrollTop(),left:b.left+c.scrollLeft(),width:b.right-b.left,height:b.bottom-b.top}},m=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b},n=function(a,b){return b=b||"",b+a.split(".").map(function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}).join("")};return{eq:b,eq2:c,peq2:d,ok:e,fail:f,self:i,not:g,and:h,uniqueId:k,rect2bnd:l,invertObject:m,namespaceToCamel:n}}(),k=function(){var b=function(a){return a[0]},c=function(a){return a[a.length-1]},d=function(a){return a.slice(0,a.length-1)},e=function(a){return a.slice(1)},f=function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(b(e))return e}},g=function(a,b){for(var c=0,d=a.length;d>c;c++)if(!b(a[c]))return!1;return!0},h=function(b,c){return a.inArray(c,b)},i=function(a,b){return-1!==h(a,b)},k=function(a,b){return b=b||j.self,a.reduce(function(a,c){return a+b(c)},0)},l=function(a){for(var b=[],c=-1,d=a.length;++c<d;)b[c]=a[c];return b},m=function(a,d){if(!a.length)return[];var f=e(a);return f.reduce(function(a,b){var e=c(a);return d(c(e),b)?e[e.length]=b:a[a.length]=[b],a},[[b(a)]])},n=function(a){for(var b=[],c=0,d=a.length;d>c;c++)a[c]&&b.push(a[c]);return b},o=function(a){for(var b=[],c=0,d=a.length;d>c;c++)i(b,a[c])||b.push(a[c]);return b},p=function(a,b){var c=h(a,b);return-1===c?null:a[c+1]},q=function(a,b){var c=h(a,b);return-1===c?null:a[c-1]};return{head:b,last:c,initial:d,tail:e,prev:q,next:p,find:f,contains:i,all:g,sum:k,from:l,clusterBy:m,compact:n,unique:o}}(),l=String.fromCharCode(160),m="\ufeff",n=function(){var b=function(b){return b&&a(b).hasClass("note-editable")},c=function(b){return b&&a(b).hasClass("note-control-sizing")},d=function(b){var c;if(b.hasClass("note-air-editor")){var d=k.last(b.attr("id").split("-"));return c=function(b){return function(){return a(b+d)}},{editor:function(){return b},holder:function(){return b.data("holder")},editable:function(){return b},popover:c("#note-popover-"),handle:c("#note-handle-"),dialog:c("#note-dialog-")}}c=function(a,c){return c=c||b,function(){return c.find(a)}};var e=b.data("options"),f=e&&e.dialogsInBody?a(document.body):null;return{editor:function(){return b},holder:function(){return b.data("holder")},dropzone:c(".note-dropzone"),toolbar:c(".note-toolbar"),editable:c(".note-editable"),codable:c(".note-codable"),statusbar:c(".note-statusbar"),popover:c(".note-popover"),handle:c(".note-handle"),dialog:c(".note-dialog",f)}},e=function(b){var c=a(b).closest(".note-editor, .note-air-editor, .note-air-layout");if(!c.length)return null;var e;return e=c.is(".note-editor, .note-air-editor")?c:a("#note-editor-"+k.last(c.attr("id").split("-"))),d(e)},f=function(a){return a=a.toUpperCase(),function(b){return b&&b.nodeName.toUpperCase()===a}},g=function(a){return a&&3===a.nodeType},h=function(a){return a&&/^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(a.nodeName.toUpperCase())},o=function(a){return b(a)?!1:a&&/^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())},p=f("LI"),q=function(a){return o(a)&&!p(a)},r=f("TABLE"),s=function(a){return!(x(a)||t(a)||u(a)||o(a)||r(a)||w(a))},t=function(a){return a&&/^UL|^OL/.test(a.nodeName.toUpperCase())},u=f("HR"),v=function(a){return a&&/^TD|^TH/.test(a.nodeName.toUpperCase())},w=f("BLOCKQUOTE"),x=function(a){return v(a)||w(a)||b(a)},y=f("A"),z=function(a){return s(a)&&!!I(a,o)},A=function(a){return s(a)&&!I(a,o)},B=f("BODY"),C=function(a,b){return a.nextSibling===b||a.previousSibling===b},D=function(a,b){b=b||j.ok;var c=[];return a.previousSibling&&b(a.previousSibling)&&c.push(a.previousSibling),c.push(a),a.nextSibling&&b(a.nextSibling)&&c.push(a.nextSibling),c},E=i.isMSIE&&i.browserVersion<11?"&nbsp;":"<br>",F=function(a){return g(a)?a.nodeValue.length:a.childNodes.length},G=function(a){var b=F(a);return 0===b?!0:g(a)||1!==b||a.innerHTML!==E?k.all(a.childNodes,g)&&""===a.innerHTML?!0:!1:!0},H=function(a){h(a)||F(a)||(a.innerHTML=E)},I=function(a,c){for(;a;){if(c(a))return a;if(b(a))break;a=a.parentNode}return null},J=function(a,c){for(a=a.parentNode;a&&1===F(a);){if(c(a))return a;if(b(a))break;a=a.parentNode}return null},K=function(a,c){c=c||j.fail;var d=[];return I(a,function(a){return b(a)||d.push(a),c(a)}),d},L=function(a,b){var c=K(a);return k.last(c.filter(b))},M=function(b,c){for(var d=K(b),e=c;e;e=e.parentNode)if(a.inArray(e,d)>-1)return e;return null},N=function(a,b){b=b||j.fail;for(var c=[];a&&!b(a);)c.push(a),a=a.previousSibling;return c},O=function(a,b){b=b||j.fail;for(var c=[];a&&!b(a);)c.push(a),a=a.nextSibling;return c},P=function(a,b){var c=[];return b=b||j.ok,function d(e){a!==e&&b(e)&&c.push(e);for(var f=0,g=e.childNodes.length;g>f;f++)d(e.childNodes[f])}(a),c},Q=function(b,c){var d=b.parentNode,e=a("<"+c+">")[0];return d.insertBefore(e,b),e.appendChild(b),e},R=function(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a},S=function(b,c){return a.each(c,function(a,c){b.appendChild(c)}),b},T=function(a){return 0===a.offset},U=function(a){return a.offset===F(a.node)},V=function(a){return T(a)||U(a)},W=function(a,b){for(;a&&a!==b;){if(0!==$(a))return!1;a=a.parentNode}return!0},X=function(a,b){for(;a&&a!==b;){if($(a)!==F(a.parentNode)-1)return!1;a=a.parentNode}return!0},Y=function(a,b){return T(a)&&W(a.node,b)},Z=function(a,b){return U(a)&&X(a.node,b)},$=function(a){for(var b=0;a=a.previousSibling;)b+=1;return b},_=function(a){return!!(a&&a.childNodes&&a.childNodes.length)},aa=function(a,c){var d,e;if(0===a.offset){if(b(a.node))return null;d=a.node.parentNode,e=$(a.node)}else _(a.node)?(d=a.node.childNodes[a.offset-1],e=F(d)):(d=a.node,e=c?0:a.offset-1);return{node:d,offset:e}},ba=function(a,c){var d,e;if(F(a.node)===a.offset){if(b(a.node))return null;d=a.node.parentNode,e=$(a.node)+1}else _(a.node)?(d=a.node.childNodes[a.offset],e=0):(d=a.node,e=c?F(a.node):a.offset+1);return{node:d,offset:e}},ca=function(a,b){return a.node===b.node&&a.offset===b.offset},da=function(a){if(g(a.node)||!_(a.node)||G(a.node))return!0;var b=a.node.childNodes[a.offset-1],c=a.node.childNodes[a.offset];return b&&!h(b)||c&&!h(c)?!1:!0},ea=function(a,b){for(;a;){if(b(a))return a;a=aa(a)}return null},fa=function(a,b){for(;a;){if(b(a))return a;a=ba(a)}return null},ga=function(a){if(!g(a.node))return!1;var b=a.node.nodeValue.charAt(a.offset-1);return b&&" "!==b&&b!==l},ha=function(a,b,c,d){for(var e=a;e&&(c(e),!ca(e,b));){var f=d&&a.node!==e.node&&b.node!==e.node;e=ba(e,f)}},ia=function(a,b){var c=K(b,j.eq(a));return c.map($).reverse()},ja=function(a,b){for(var c=a,d=0,e=b.length;e>d;d++)c=c.childNodes.length<=b[d]?c.childNodes[c.childNodes.length-1]:c.childNodes[b[d]];return c},ka=function(a,b){var c=b&&b.isSkipPaddingBlankHTML,d=b&&b.isNotSplitEdgePoint;if(V(a)&&(g(a.node)||d)){if(T(a))return a.node;if(U(a))return a.node.nextSibling}if(g(a.node))return a.node.splitText(a.offset);var e=a.node.childNodes[a.offset],f=R(a.node.cloneNode(!1),a.node);return S(f,O(e)),c||(H(a.node),H(f)),f},la=function(a,b,c){var d=K(b.node,j.eq(a));return d.length?1===d.length?ka(b,c):d.reduce(function(a,d){return a===b.node&&(a=ka(b,c)),ka({node:d,offset:a?n.position(a):F(d)},c)}):null},ma=function(a,b){var c,d,e=b?o:x,f=K(a.node,e),g=k.last(f)||a.node;e(g)?(c=f[f.length-2],d=g):(c=g,d=c.parentNode);var h=c&&la(c,a,{isSkipPaddingBlankHTML:b,isNotSplitEdgePoint:b});return h||d!==a.node||(h=a.node.childNodes[a.offset]),{rightNode:h,container:d}},na=function(a){return document.createElement(a)},oa=function(a){return document.createTextNode(a)},pa=function(a,b){if(a&&a.parentNode){if(a.removeNode)return a.removeNode(b);var c=a.parentNode;if(!b){var d,e,f=[];for(d=0,e=a.childNodes.length;e>d;d++)f.push(a.childNodes[d]);for(d=0,e=f.length;e>d;d++)c.insertBefore(f[d],a)}c.removeChild(a)}},qa=function(a,c){for(;a&&!b(a)&&c(a);){var d=a.parentNode;pa(a),a=d}},ra=function(a,b){if(a.nodeName.toUpperCase()===b.toUpperCase())return a;var c=na(b);return a.style.cssText&&(c.style.cssText=a.style.cssText),S(c,k.from(a.childNodes)),R(c,a),pa(a),c},sa=f("TEXTAREA"),ta=function(a,b){var c=sa(a[0])?a.val():a.html();return b?c.replace(/[\n\r]/g,""):c},ua=function(b,c){var d=ta(b);if(c){var e=/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;d=d.replace(e,function(a,b,c){c=c.toUpperCase();var d=/^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c)&&!!b,e=/^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);return a+(d||e?"\n":"")}),d=a.trim(d)}return d};return{NBSP_CHAR:l,ZERO_WIDTH_NBSP_CHAR:m,blank:E,emptyPara:"<p>"+E+"</p>",makePredByNodeName:f,isEditable:b,isControlSizing:c,buildLayoutInfo:d,makeLayoutInfo:e,isText:g,isVoid:h,isPara:o,isPurePara:q,isInline:s,isBlock:j.not(s),isBodyInline:A,isBody:B,isParaInline:z,isList:t,isTable:r,isCell:v,isBlockquote:w,isBodyContainer:x,isAnchor:y,isDiv:f("DIV"),isLi:p,isBR:f("BR"),isSpan:f("SPAN"),isB:f("B"),isU:f("U"),isS:f("S"),isI:f("I"),isImg:f("IMG"),isTextarea:sa,isEmpty:G,isEmptyAnchor:j.and(y,G),isClosestSibling:C,withClosestSiblings:D,nodeLength:F,isLeftEdgePoint:T,isRightEdgePoint:U,isEdgePoint:V,isLeftEdgeOf:W,isRightEdgeOf:X,isLeftEdgePointOf:Y,isRightEdgePointOf:Z,prevPoint:aa,nextPoint:ba,isSamePoint:ca,isVisiblePoint:da,prevPointUntil:ea,nextPointUntil:fa,isCharPoint:ga,walkPoint:ha,ancestor:I,singleChildAncestor:J,listAncestor:K,lastAncestor:L,listNext:O,listPrev:N,listDescendant:P,commonAncestor:M,wrap:Q,insertAfter:R,appendChildNodes:S,position:$,hasChildren:_,makeOffsetPath:ia,fromOffsetPath:ja,splitTree:la,splitPoint:ma,create:na,createText:oa,remove:pa,removeWhile:qa,replace:ra,html:ua,value:ta}}(),o=function(){var b=function(a,b){var c,d,e=a.parentElement(),f=document.body.createTextRange(),g=k.from(e.childNodes);for(c=0;c<g.length;c++)if(!n.isText(g[c])){if(f.moveToElementText(g[c]),f.compareEndPoints("StartToStart",a)>=0)break;d=g[c]}if(0!==c&&n.isText(g[c-1])){var h=document.body.createTextRange(),i=null;h.moveToElementText(d||e),h.collapse(!d),i=d?d.nextSibling:e.firstChild;var j=a.duplicate();j.setEndPoint("StartToStart",h);for(var l=j.text.replace(/[\r\n]/g,"").length;l>i.nodeValue.length&&i.nextSibling;)l-=i.nodeValue.length,i=i.nextSibling;i.nodeValue;b&&i.nextSibling&&n.isText(i.nextSibling)&&l===i.nodeValue.length&&(l-=i.nodeValue.length,i=i.nextSibling),e=i,c=l}return{cont:e,offset:c}},c=function(a){var b=function(a,c){var d,e;if(n.isText(a)){var f=n.listPrev(a,j.not(n.isText)),g=k.last(f).previousSibling;d=g||a.parentNode,c+=k.sum(k.tail(f),n.nodeLength),e=!g}else{if(d=a.childNodes[c]||a,n.isText(d))return b(d,0);c=0,e=!1}return{node:d,collapseToStart:e,offset:c}},c=document.body.createTextRange(),d=b(a.node,a.offset);return c.moveToElementText(d.node),c.collapse(d.collapseToStart),c.moveStart("character",d.offset),c},d=function(b,e,f,g){this.sc=b,this.so=e,this.ec=f,this.eo=g;var h=function(){if(i.isW3CRangeSupport){var a=document.createRange();return a.setStart(b,e),a.setEnd(f,g),a}var d=c({node:b,offset:e});return d.setEndPoint("EndToEnd",c({node:f,offset:g})),d};this.getPoints=function(){return{sc:b,so:e,ec:f,eo:g}},this.getStartPoint=function(){return{node:b,offset:e}},this.getEndPoint=function(){return{node:f,offset:g}},this.select=function(){var a=h();if(i.isW3CRangeSupport){var b=document.getSelection();b.rangeCount>0&&b.removeAllRanges(),b.addRange(a)}else a.select();return this},this.normalize=function(){var a=function(a,b){if(n.isVisiblePoint(a)&&!n.isEdgePoint(a)||n.isVisiblePoint(a)&&n.isRightEdgePoint(a)&&!b||n.isVisiblePoint(a)&&n.isLeftEdgePoint(a)&&b||n.isVisiblePoint(a)&&n.isBlock(a.node)&&n.isEmpty(a.node))return a;var c=n.ancestor(a.node,n.isBlock);if((n.isLeftEdgePointOf(a,c)||n.isVoid(n.prevPoint(a).node))&&!b||(n.isRightEdgePointOf(a,c)||n.isVoid(n.nextPoint(a).node))&&b){if(n.isVisiblePoint(a))return a;b=!b}var d=b?n.nextPointUntil(n.nextPoint(a),n.isVisiblePoint):n.prevPointUntil(n.prevPoint(a),n.isVisiblePoint);return d||a},b=a(this.getEndPoint(),!1),c=this.isCollapsed()?b:a(this.getStartPoint(),!0);return new d(c.node,c.offset,b.node,b.offset)},this.nodes=function(a,b){a=a||j.ok;var c=b&&b.includeAncestor,d=b&&b.fullyContains,e=this.getStartPoint(),f=this.getEndPoint(),g=[],h=[];return n.walkPoint(e,f,function(b){if(!n.isEditable(b.node)){var e;d?(n.isLeftEdgePoint(b)&&h.push(b.node),n.isRightEdgePoint(b)&&k.contains(h,b.node)&&(e=b.node)):e=c?n.ancestor(b.node,a):b.node,e&&a(e)&&g.push(e)}},!0),k.unique(g)},this.commonAncestor=function(){return n.commonAncestor(b,f)},this.expand=function(a){var c=n.ancestor(b,a),h=n.ancestor(f,a);if(!c&&!h)return new d(b,e,f,g);var i=this.getPoints();return c&&(i.sc=c,i.so=0),h&&(i.ec=h,i.eo=n.nodeLength(h)),new d(i.sc,i.so,i.ec,i.eo)},this.collapse=function(a){return a?new d(b,e,b,e):new d(f,g,f,g)},this.splitText=function(){var a=b===f,c=this.getPoints();return n.isText(f)&&!n.isEdgePoint(this.getEndPoint())&&f.splitText(g),n.isText(b)&&!n.isEdgePoint(this.getStartPoint())&&(c.sc=b.splitText(e),c.so=0,a&&(c.ec=c.sc,c.eo=g-e)),new d(c.sc,c.so,c.ec,c.eo)},this.deleteContents=function(){if(this.isCollapsed())return this;var b=this.splitText(),c=b.nodes(null,{fullyContains:!0}),e=n.prevPointUntil(b.getStartPoint(),function(a){return!k.contains(c,a.node)}),f=[];return a.each(c,function(a,b){var c=b.parentNode;e.node!==c&&1===n.nodeLength(c)&&f.push(c),n.remove(b,!1)}),a.each(f,function(a,b){n.remove(b,!1)}),new d(e.node,e.offset,e.node,e.offset).normalize()};var l=function(a){return function(){var c=n.ancestor(b,a);return!!c&&c===n.ancestor(f,a)}};this.isOnEditable=l(n.isEditable),this.isOnList=l(n.isList),this.isOnAnchor=l(n.isAnchor),this.isOnCell=l(n.isCell),this.isLeftEdgeOf=function(a){if(!n.isLeftEdgePoint(this.getStartPoint()))return!1;var b=n.ancestor(this.sc,a);return b&&n.isLeftEdgeOf(this.sc,b)},this.isCollapsed=function(){return b===f&&e===g},this.wrapBodyInlineWithPara=function(){if(n.isBodyContainer(b)&&n.isEmpty(b))return b.innerHTML=n.emptyPara,new d(b.firstChild,0,b.firstChild,0);var a=this.normalize();if(n.isParaInline(b)||n.isPara(b))return a;var c;if(n.isInline(a.sc)){var e=n.listAncestor(a.sc,j.not(n.isInline));c=k.last(e),n.isInline(c)||(c=e[e.length-2]||a.sc.childNodes[a.so])}else c=a.sc.childNodes[a.so>0?a.so-1:0];var f=n.listPrev(c,n.isParaInline).reverse();if(f=f.concat(n.listNext(c.nextSibling,n.isParaInline)),f.length){var g=n.wrap(k.head(f),"p");n.appendChildNodes(g,k.tail(f))}return this.normalize()},this.insertNode=function(a){var b=this.wrapBodyInlineWithPara().deleteContents(),c=n.splitPoint(b.getStartPoint(),n.isInline(a));return c.rightNode?c.rightNode.parentNode.insertBefore(a,c.rightNode):c.container.appendChild(a),a},this.pasteHTML=function(b){var c=a("<div></div>").html(b)[0],d=k.from(c.childNodes),e=this.wrapBodyInlineWithPara().deleteContents();return d.reverse().map(function(a){return e.insertNode(a)}).reverse()},this.toString=function(){var a=h();return i.isW3CRangeSupport?a.toString():a.text},this.getWordRange=function(a){var b=this.getEndPoint();if(!n.isCharPoint(b))return this;var c=n.prevPointUntil(b,function(a){return!n.isCharPoint(a)});return a&&(b=n.nextPointUntil(b,function(a){return!n.isCharPoint(a)})),new d(c.node,c.offset,b.node,b.offset)},this.bookmark=function(a){return{s:{path:n.makeOffsetPath(a,b),offset:e},e:{path:n.makeOffsetPath(a,f),offset:g}}},this.paraBookmark=function(a){return{s:{path:k.tail(n.makeOffsetPath(k.head(a),b)),offset:e},e:{path:k.tail(n.makeOffsetPath(k.last(a),f)),offset:g}}},this.getClientRects=function(){var a=h();return a.getClientRects()}};return{create:function(a,c,e,f){if(arguments.length)2===arguments.length&&(e=a,f=c);else if(i.isW3CRangeSupport){var g=document.getSelection();if(!g||0===g.rangeCount)return null;if(n.isBody(g.anchorNode))return null;var h=g.getRangeAt(0);a=h.startContainer,c=h.startOffset,e=h.endContainer,f=h.endOffset}else{var j=document.selection.createRange(),k=j.duplicate();k.collapse(!1);var l=j;l.collapse(!0);var m=b(l,!0),o=b(k,!1);n.isText(m.node)&&n.isLeftEdgePoint(m)&&n.isTextNode(o.node)&&n.isRightEdgePoint(o)&&o.node.nextSibling===m.node&&(m=o),a=m.cont,c=m.offset,e=o.cont,f=o.offset}return new d(a,c,e,f)},createFromNode:function(a){var b=a,c=0,d=a,e=n.nodeLength(d);return n.isVoid(b)&&(c=n.listPrev(b).length-1,b=b.parentNode),n.isBR(d)?(e=n.listPrev(d).length-1,d=d.parentNode):n.isVoid(d)&&(e=n.listPrev(d).length,d=d.parentNode),this.create(b,c,d,e)},createFromNodeBefore:function(a){return this.createFromNode(a).collapse(!0)},createFromNodeAfter:function(a){return this.createFromNode(a).collapse()},createFromBookmark:function(a,b){var c=n.fromOffsetPath(a,b.s.path),e=b.s.offset,f=n.fromOffsetPath(a,b.e.path),g=b.e.offset;return new d(c,e,f,g)},createFromParaBookmark:function(a,b){var c=a.s.offset,e=a.e.offset,f=n.fromOffsetPath(k.head(b),a.s.path),g=n.fromOffsetPath(k.last(b),a.e.path);return new d(f,c,g,e)}}}(),p={version:"0.6.16",options:{width:null,height:null,minHeight:null,maxHeight:null,focus:!1,tabsize:4,styleWithSpan:!0,disableLinkTarget:!1,disableDragAndDrop:!1,disableResizeEditor:!1,disableResizeImage:!1,shortcuts:!0,textareaAutoSync:!0,placeholder:!1,prettifyHtml:!0,iconPrefix:"fa fa-",icons:{font:{bold:"bold",italic:"italic",underline:"underline",clear:"eraser",height:"text-height",strikethrough:"strikethrough",superscript:"superscript",subscript:"subscript"},image:{image:"picture-o",floatLeft:"align-left",floatRight:"align-right",floatNone:"align-justify",shapeRounded:"square",shapeCircle:"circle-o",shapeThumbnail:"picture-o",shapeNone:"times",remove:"trash-o"},link:{link:"link",unlink:"unlink",edit:"edit"},table:{table:"table"},hr:{insert:"minus"},style:{style:"magic"},lists:{unordered:"list-ul",ordered:"list-ol"},options:{help:"question",fullscreen:"arrows-alt",codeview:"code"},paragraph:{paragraph:"align-left",outdent:"outdent",indent:"indent",left:"align-left",center:"align-center",right:"align-right",justify:"align-justify"},color:{recent:"font"},history:{undo:"undo",redo:"repeat"},misc:{check:"check"}},dialogsInBody:!1,codemirror:{mode:"text/html",htmlMode:!0,lineNumbers:!0},lang:"en-US",direction:null,toolbar:[["style",["style"]],["font",["bold","italic","underline","clear"]],["fontname",["fontname"]],["fontsize",["fontsize"]],["color",["color"]],["para",["ul","ol","paragraph"]],["height",["height"]],["table",["table"]],["insert",["link","picture","hr"]],["view",["fullscreen","codeview"]],["help",["help"]]],plugin:{},airMode:!1,airPopover:[["color",["color"]],["font",["bold","underline","clear"]],["para",["ul","paragraph"]],["table",["table"]],["insert",["link","picture"]]],styleTags:["p","blockquote","pre","h1","h2","h3","h4","h5","h6"],defaultFontName:"Helvetica Neue",fontNames:["Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],fontNamesIgnoreCheck:[],fontSizes:["8","9","10","11","12","14","18","24","36"],colors:[["#000000","#424242","#636363","#9C9C94","#CEC6CE","#EFEFEF","#F7F7F7","#FFFFFF"],["#FF0000","#FF9C00","#FFFF00","#00FF00","#00FFFF","#0000FF","#9C00FF","#FF00FF"],["#F7C6CE","#FFE7CE","#FFEFC6","#D6EFD6","#CEDEE7","#CEE7F7","#D6D6E7","#E7D6DE"],["#E79C9C","#FFC69C","#FFE79C","#B5D6A5","#A5C6CE","#9CC6EF","#B5A5D6","#D6A5BD"],["#E76363","#F7AD6B","#FFD663","#94BD7B","#73A5AD","#6BADDE","#8C7BC6","#C67BA5"],["#CE0000","#E79439","#EFC631","#6BA54A","#4A7B8C","#3984C6","#634AA5","#A54A7B"],["#9C0000","#B56308","#BD9400","#397B21","#104A5A","#085294","#311873","#731842"],["#630000","#7B3900","#846300","#295218","#083139","#003163","#21104A","#4A1031"]],lineHeights:["1.0","1.2","1.4","1.5","1.6","1.8","2.0","3.0"],insertTableMaxSize:{col:10,row:10},maximumImageFileSize:null,oninit:null,onfocus:null,onblur:null,onenter:null,onkeyup:null,onkeydown:null,onImageUpload:null,onImageUploadError:null,onMediaDelete:null,onToolbarClick:null,onsubmit:null,onCreateLink:function(a){return-1!==a.indexOf("@")&&-1===a.indexOf(":")&&(a="mailto:"+a),a},keyMap:{pc:{ENTER:"insertParagraph","CTRL+Z":"undo","CTRL+Y":"redo",TAB:"tab","SHIFT+TAB":"untab","CTRL+B":"bold","CTRL+I":"italic","CTRL+U":"underline","CTRL+SHIFT+S":"strikethrough","CTRL+BACKSLASH":"removeFormat","CTRL+SHIFT+L":"justifyLeft","CTRL+SHIFT+E":"justifyCenter","CTRL+SHIFT+R":"justifyRight","CTRL+SHIFT+J":"justifyFull","CTRL+SHIFT+NUM7":"insertUnorderedList","CTRL+SHIFT+NUM8":"insertOrderedList","CTRL+LEFTBRACKET":"outdent","CTRL+RIGHTBRACKET":"indent","CTRL+NUM0":"formatPara","CTRL+NUM1":"formatH1","CTRL+NUM2":"formatH2","CTRL+NUM3":"formatH3","CTRL+NUM4":"formatH4","CTRL+NUM5":"formatH5","CTRL+NUM6":"formatH6","CTRL+ENTER":"insertHorizontalRule","CTRL+K":"showLinkDialog"},mac:{ENTER:"insertParagraph","CMD+Z":"undo","CMD+SHIFT+Z":"redo",TAB:"tab","SHIFT+TAB":"untab","CMD+B":"bold","CMD+I":"italic","CMD+U":"underline","CMD+SHIFT+S":"strikethrough","CMD+BACKSLASH":"removeFormat","CMD+SHIFT+L":"justifyLeft","CMD+SHIFT+E":"justifyCenter","CMD+SHIFT+R":"justifyRight","CMD+SHIFT+J":"justifyFull","CMD+SHIFT+NUM7":"insertUnorderedList","CMD+SHIFT+NUM8":"insertOrderedList","CMD+LEFTBRACKET":"outdent","CMD+RIGHTBRACKET":"indent","CMD+NUM0":"formatPara","CMD+NUM1":"formatH1","CMD+NUM2":"formatH2","CMD+NUM3":"formatH3","CMD+NUM4":"formatH4","CMD+NUM5":"formatH5","CMD+NUM6":"formatH6","CMD+ENTER":"insertHorizontalRule","CMD+K":"showLinkDialog"}}},lang:{"en-US":{font:{bold:"Bold",italic:"Italic",underline:"Underline",clear:"Remove Font Style",height:"Line Height",name:"Font Family",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript",size:"Font Size"},image:{image:"Picture",insert:"Insert Image",resizeFull:"Resize Full",resizeHalf:"Resize Half",resizeQuarter:"Resize Quarter",floatLeft:"Float Left",floatRight:"Float Right",floatNone:"Float None",shapeRounded:"Shape: Rounded",shapeCircle:"Shape: Circle",shapeThumbnail:"Shape: Thumbnail",shapeNone:"Shape: None",dragImageHere:"Drag image or text here",dropImage:"Drop image or Text",selectFromFiles:"Select from files",maximumFileSize:"Maximum file size",maximumFileSizeError:"Maximum file size exceeded.",url:"Image URL",remove:"Remove Image"},link:{link:"Link",insert:"Insert Link",unlink:"Unlink",edit:"Edit",textToDisplay:"Text to display",url:"To what URL should this link go?",openInNewWindow:"Open in new window"},table:{table:"Table"},hr:{insert:"Insert Horizontal Rule"},style:{style:"Style",normal:"Normal",blockquote:"Quote",pre:"Code",h1:"Header 1",h2:"Header 2",h3:"Header 3",h4:"Header 4",h5:"Header 5",h6:"Header 6"},lists:{unordered:"Unordered list",ordered:"Ordered list"},options:{help:"Help",fullscreen:"Full Screen",codeview:"Code View"},paragraph:{paragraph:"Paragraph",outdent:"Outdent",indent:"Indent",left:"Align left",center:"Align center",right:"Align right",justify:"Justify full"},color:{recent:"Recent Color",more:"More Color",background:"Background Color",foreground:"Foreground Color",transparent:"Transparent",setTransparent:"Set transparent",reset:"Reset",resetToDefault:"Reset to default"},shortcut:{shortcuts:"Keyboard shortcuts",close:"Close",textFormatting:"Text formatting",action:"Action",paragraphFormatting:"Paragraph formatting",documentStyle:"Document Style",extraKeys:"Extra keys"},history:{undo:"Undo",redo:"Redo"}}}},q=function(){var b=function(b){return a.Deferred(function(c){a.extend(new FileReader,{onload:function(a){var b=a.target.result;c.resolve(b)},onerror:function(){c.reject(this)}}).readAsDataURL(b)}).promise()},c=function(b,c){return a.Deferred(function(d){var e=a("<img>");e.one("load",function(){e.off("error abort"),d.resolve(e)}).one("error abort",function(){e.off("load").detach(),d.reject(e)}).css({display:"none"}).appendTo(document.body).attr({src:b,"data-filename":c})}).promise()};return{readFileAsDataURL:b,createImage:c}}(),r=function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SPACE:32,NUM0:48,NUM1:49,NUM2:50,NUM3:51,NUM4:52,NUM5:53,NUM6:54,NUM7:55,NUM8:56,B:66,E:69,I:73,J:74,K:75,L:76,R:82,S:83,U:85,V:86,Y:89,Z:90,SLASH:191,LEFTBRACKET:219,BACKSLASH:220,RIGHTBRACKET:221};return{isEdit:function(a){return k.contains([8,9,13,32],a)},isMove:function(a){return k.contains([37,38,39,40],a)},nameFromCode:j.invertObject(a),code:a}}(),s=function(a){var b=[],c=-1,d=a[0],e=function(){var b=o.create(),c={s:{path:[],offset:0},e:{path:[],offset:0}};return{contents:a.html(),bookmark:b?b.bookmark(d):c}},f=function(b){null!==b.contents&&a.html(b.contents),null!==b.bookmark&&o.createFromBookmark(d,b.bookmark).select()};this.undo=function(){a.html()!==b[c].contents&&this.recordUndo(),c>0&&(c--,f(b[c]))},this.redo=function(){b.length-1>c&&(c++,f(b[c]))},this.recordUndo=function(){c++,b.length>c&&(b=b.slice(0,c)),b.push(e())},this.recordUndo()},t=function(){var b=function(b,c){if(i.jqueryVersion<1.9){var d={};return a.each(c,function(a,c){d[c]=b.css(c)}),d}return b.css.call(b,c)};this.fromNode=function(a){var c=["font-family","font-size","text-align","list-style-type","line-height"],d=b(a,c)||{};return d["font-size"]=parseInt(d["font-size"],10),d},this.stylePara=function(b,c){a.each(b.nodes(n.isPara,{includeAncestor:!0}),function(b,d){a(d).css(c)})},this.styleNodes=function(b,c){b=b.splitText();var d=c&&c.nodeName||"SPAN",e=!(!c||!c.expandClosestSibling),f=!(!c||!c.onlyPartialContains);if(b.isCollapsed())return[b.insertNode(n.create(d))];var g=n.makePredByNodeName(d),h=b.nodes(n.isText,{fullyContains:!0}).map(function(a){return n.singleChildAncestor(a,g)||n.wrap(a,d)});if(e){if(f){var i=b.nodes();g=j.and(g,function(a){return k.contains(i,a)})}return h.map(function(b){var c=n.withClosestSiblings(b,g),d=k.head(c),e=k.tail(c);return a.each(e,function(a,b){n.appendChildNodes(d,b.childNodes),n.remove(b)}),k.head(c)})}return h},this.current=function(b){var c=a(n.isText(b.sc)?b.sc.parentNode:b.sc),d=this.fromNode(c);if(d["font-bold"]=document.queryCommandState("bold")?"bold":"normal",d["font-italic"]=document.queryCommandState("italic")?"italic":"normal",d["font-underline"]=document.queryCommandState("underline")?"underline":"normal",d["font-strikethrough"]=document.queryCommandState("strikeThrough")?"strikethrough":"normal",d["font-superscript"]=document.queryCommandState("superscript")?"superscript":"normal",d["font-subscript"]=document.queryCommandState("subscript")?"subscript":"normal",b.isOnList()){var e=["circle","disc","disc-leading-zero","square"],f=a.inArray(d["list-style-type"],e)>-1;d["list-style"]=f?"unordered":"ordered"}else d["list-style"]="none";var g=n.ancestor(b.sc,n.isPara);if(g&&g.style["line-height"])d["line-height"]=g.style.lineHeight;else{var h=parseInt(d["line-height"],10)/parseInt(d["font-size"],10);d["line-height"]=h.toFixed(1)}return d.anchor=b.isOnAnchor()&&n.ancestor(b.sc,n.isAnchor),d.ancestors=n.listAncestor(b.sc,n.isEditable),d.range=b,d}},u=function(){this.insertOrderedList=function(){this.toggleList("OL")},this.insertUnorderedList=function(){this.toggleList("UL")},this.indent=function(){var b=this,c=o.create().wrapBodyInlineWithPara(),d=c.nodes(n.isPara,{includeAncestor:!0}),e=k.clusterBy(d,j.peq2("parentNode"));a.each(e,function(c,d){var e=k.head(d);n.isLi(e)?b.wrapList(d,e.parentNode.nodeName):a.each(d,function(b,c){a(c).css("marginLeft",function(a,b){return(parseInt(b,10)||0)+25})})}),c.select()},this.outdent=function(){var b=this,c=o.create().wrapBodyInlineWithPara(),d=c.nodes(n.isPara,{includeAncestor:!0}),e=k.clusterBy(d,j.peq2("parentNode"));a.each(e,function(c,d){var e=k.head(d);n.isLi(e)?b.releaseList([d]):a.each(d,function(b,c){a(c).css("marginLeft",function(a,b){return b=parseInt(b,10)||0,b>25?b-25:""})})}),c.select()},this.toggleList=function(b){var c=this,d=o.create().wrapBodyInlineWithPara(),e=d.nodes(n.isPara,{includeAncestor:!0}),f=d.paraBookmark(e),g=k.clusterBy(e,j.peq2("parentNode"));if(k.find(e,n.isPurePara)){var h=[];a.each(g,function(a,d){h=h.concat(c.wrapList(d,b))}),e=h}else{var i=d.nodes(n.isList,{includeAncestor:!0}).filter(function(c){return!a.nodeName(c,b)});i.length?a.each(i,function(a,c){n.replace(c,b)}):e=this.releaseList(g,!0)}o.createFromParaBookmark(f,e).select()},this.wrapList=function(a,b){var c=k.head(a),d=k.last(a),e=n.isList(c.previousSibling)&&c.previousSibling,f=n.isList(d.nextSibling)&&d.nextSibling,g=e||n.insertAfter(n.create(b||"UL"),d);return a=a.map(function(a){return n.isPurePara(a)?n.replace(a,"LI"):a}),n.appendChildNodes(g,a),f&&(n.appendChildNodes(g,k.from(f.childNodes)),n.remove(f)),a},this.releaseList=function(b,c){var d=[];return a.each(b,function(b,e){var f=k.head(e),g=k.last(e),h=c?n.lastAncestor(f,n.isList):f.parentNode,i=h.childNodes.length>1?n.splitTree(h,{node:g.parentNode,offset:n.position(g)+1},{isSkipPaddingBlankHTML:!0}):null,j=n.splitTree(h,{node:f.parentNode,offset:n.position(f)},{isSkipPaddingBlankHTML:!0});e=c?n.listDescendant(j,n.isLi):k.from(j.childNodes).filter(n.isLi),(c||!n.isList(h.parentNode))&&(e=e.map(function(a){return n.replace(a,"P")})),a.each(k.from(e).reverse(),function(a,b){n.insertAfter(b,h)});var l=k.compact([h,j,i]);a.each(l,function(b,c){var d=[c].concat(n.listDescendant(c,n.isList));a.each(d.reverse(),function(a,b){n.nodeLength(b)||n.remove(b,!0)})}),d=d.concat(e)}),d}},v=function(){var b=new u;this.insertTab=function(a,b,c){var d=n.createText(new Array(c+1).join(n.NBSP_CHAR));b=b.deleteContents(),b.insertNode(d,!0),b=o.create(d,c),b.select()},this.insertParagraph=function(){var c=o.create();c=c.deleteContents(),c=c.wrapBodyInlineWithPara();var d,e=n.ancestor(c.sc,n.isPara);if(e){if(n.isEmpty(e)&&n.isLi(e))return void b.toggleList(e.parentNode.nodeName);d=n.splitTree(e,c.getStartPoint());var f=n.listDescendant(e,n.isEmptyAnchor);f=f.concat(n.listDescendant(d,n.isEmptyAnchor)),a.each(f,function(a,b){n.remove(b)})}else{var g=c.sc.childNodes[c.so];d=a(n.emptyPara)[0],g?c.sc.insertBefore(d,g):c.sc.appendChild(d)}o.create(d,0).normalize().select()}},w=function(){this.tab=function(a,b){var c=n.ancestor(a.commonAncestor(),n.isCell),d=n.ancestor(c,n.isTable),e=n.listDescendant(d,n.isCell),f=k[b?"prev":"next"](e,c);
f&&o.create(f,0).select()},this.createTable=function(b,c){for(var d,e=[],f=0;b>f;f++)e.push("<td>"+n.blank+"</td>");d=e.join("");for(var g,h=[],i=0;c>i;i++)h.push("<tr>"+d+"</tr>");return g=h.join(""),a('<table class="table table-bordered">'+g+"</table>")[0]}},x="bogus",y=function(b){var c=this,d=new t,e=new w,f=new v,g=new u;this.createRange=function(a){return this.focus(a),o.create()},this.saveRange=function(a,b){this.focus(a),a.data("range",o.create()),b&&o.create().collapse().select()},this.saveNode=function(a){for(var b=[],c=0,d=a[0].childNodes.length;d>c;c++)b.push(a[0].childNodes[c]);a.data("childNodes",b)},this.restoreRange=function(a){var b=a.data("range");b&&(b.select(),this.focus(a))},this.restoreNode=function(a){a.html("");for(var b=a.data("childNodes"),c=0,d=b.length;d>c;c++)a[0].appendChild(b[c])},this.currentStyle=function(a){var b=o.create(),c=b&&b.isOnEditable()?d.current(b.normalize()):{};return n.isImg(a)&&(c.image=a),c},this.styleFromNode=function(a){return d.fromNode(a)};var h=function(a){var c=n.makeLayoutInfo(a).holder();b.bindCustomEvent(c,a.data("callbacks"),"before.command")(a.html(),a)},j=function(a){var c=n.makeLayoutInfo(a).holder();b.bindCustomEvent(c,a.data("callbacks"),"change")(a.html(),a)};this.undo=function(a){h(a),a.data("NoteHistory").undo(),j(a)},this.redo=function(a){h(a),a.data("NoteHistory").redo(),j(a)};for(var l=this.beforeCommand=function(a){h(a),c.focus(a)},m=this.afterCommand=function(a,b){a.data("NoteHistory").recordUndo(),b||j(a)},p=["bold","italic","underline","strikethrough","superscript","subscript","justifyLeft","justifyCenter","justifyRight","justifyFull","formatBlock","removeFormat","backColor","foreColor","fontName"],r=0,s=p.length;s>r;r++)this[p[r]]=function(a){return function(b,c){l(b),document.execCommand(a,!1,c),m(b,!0)}}(p[r]);this.tab=function(a,b){var c=this.createRange(a);c.isCollapsed()&&c.isOnCell()?e.tab(c):(l(a),f.insertTab(a,c,b.tabsize),m(a))},this.untab=function(a){var b=this.createRange(a);b.isCollapsed()&&b.isOnCell()&&e.tab(b,!0)},this.insertParagraph=function(a){l(a),f.insertParagraph(a),m(a)},this.insertOrderedList=function(a){l(a),g.insertOrderedList(a),m(a)},this.insertUnorderedList=function(a){l(a),g.insertUnorderedList(a),m(a)},this.indent=function(a){l(a),g.indent(a),m(a)},this.outdent=function(a){l(a),g.outdent(a),m(a)},this.insertImage=function(a,c,d){q.createImage(c,d).then(function(b){l(a),b.css({display:"",width:Math.min(a.width(),b.width())}),o.create().insertNode(b[0]),o.createFromNodeAfter(b[0]).select(),m(a)}).fail(function(){var c=n.makeLayoutInfo(a).holder();b.bindCustomEvent(c,a.data("callbacks"),"image.upload.error")()})},this.insertNode=function(a,b){l(a),o.create().insertNode(b),o.createFromNodeAfter(b).select(),m(a)},this.insertText=function(a,b){l(a);var c=o.create().insertNode(n.createText(b));o.create(c,n.nodeLength(c)).select(),m(a)},this.pasteHTML=function(a,b){l(a);var c=o.create().pasteHTML(b);o.createFromNodeAfter(k.last(c)).select(),m(a)},this.formatBlock=function(a,b){l(a),b=i.isMSIE?"<"+b+">":b,document.execCommand("FormatBlock",!1,b),m(a)},this.formatPara=function(a){l(a),this.formatBlock(a,"P"),m(a)};for(var r=1;6>=r;r++)this["formatH"+r]=function(a){return function(b){this.formatBlock(b,"H"+a)}}(r);this.fontSize=function(b,c){var e=o.create();if(e.isCollapsed()){var f=d.styleNodes(e),g=k.head(f);a(f).css({"font-size":c+"px"}),g&&!n.nodeLength(g)&&(g.innerHTML=n.ZERO_WIDTH_NBSP_CHAR,o.createFromNodeAfter(g.firstChild).select(),b.data(x,g))}else l(b),a(d.styleNodes(e)).css({"font-size":c+"px"}),m(b)},this.insertHorizontalRule=function(b){l(b);var c=o.create(),d=c.insertNode(a("<HR/>")[0]);d.nextSibling&&o.create(d.nextSibling,0).normalize().select(),m(b)},this.removeBogus=function(a){var b=a.data(x);if(b){var c=k.find(k.from(b.childNodes),n.isText),d=c.nodeValue.indexOf(n.ZERO_WIDTH_NBSP_CHAR);-1!==d&&c.deleteData(d,1),n.isEmpty(b)&&n.remove(b),a.removeData(x)}},this.lineHeight=function(a,b){l(a),d.stylePara(o.create(),{lineHeight:b}),m(a)},this.unlink=function(a){var b=this.createRange(a);if(b.isOnAnchor()){var c=n.ancestor(b.sc,n.isAnchor);b=o.createFromNode(c),b.select(),l(a),document.execCommand("unlink"),m(a)}},this.createLink=function(b,c,e){var f=c.url,g=c.text,h=c.isNewWindow,i=c.range||this.createRange(b),j=i.toString()!==g;e=e||n.makeLayoutInfo(b).editor().data("options"),l(b),e.onCreateLink&&(f=e.onCreateLink(f));var p=[];if(j){var q=i.insertNode(a("<A>"+g+"</A>")[0]);p.push(q)}else p=d.styleNodes(i,{nodeName:"A",expandClosestSibling:!0,onlyPartialContains:!0});a.each(p,function(b,c){a(c).attr("href",f),h?a(c).attr("target","_blank"):a(c).removeAttr("target")});var r=o.createFromNodeBefore(k.head(p)),s=r.getStartPoint(),t=o.createFromNodeAfter(k.last(p)),u=t.getEndPoint();o.create(s.node,s.offset,u.node,u.offset).select(),m(b)},this.getLinkInfo=function(b){this.focus(b);var c=o.create().expand(n.isAnchor),d=a(k.head(c.nodes(n.isAnchor)));return{range:c,text:c.toString(),isNewWindow:d.length?"_blank"===d.attr("target"):!1,url:d.length?d.attr("href"):""}},this.color=function(a,b){var c=JSON.parse(b),d=c.foreColor,e=c.backColor;l(a),d&&document.execCommand("foreColor",!1,d),e&&document.execCommand("backColor",!1,e),m(a)},this.insertTable=function(a,b){var c=b.split("x");l(a);var d=o.create().deleteContents();d.insertNode(e.createTable(c[0],c[1])),m(a)},this.floatMe=function(a,b,c){l(a),c.removeClass("pull-left pull-right"),b&&"none"!==b&&c.addClass("pull-"+b),c.css("float",b),m(a)},this.imageShape=function(a,b,c){l(a),c.removeClass("img-rounded img-circle img-thumbnail"),b&&c.addClass(b),m(a)},this.resize=function(a,b,c){l(a),c.css({width:100*b+"%",height:""}),m(a)},this.resizeTo=function(a,b,c){var d;if(c){var e=a.y/a.x,f=b.data("ratio");d={width:f>e?a.x:a.y/f,height:f>e?a.x*f:a.y}}else d={width:a.x,height:a.y};b.css(d)},this.removeMedia=function(c,d,e){l(c),e.detach(),b.bindCustomEvent(a(),c.data("callbacks"),"media.delete")(e,c),m(c)},this.focus=function(a){a.focus(),i.isFF&&!o.create().isOnEditable()&&o.createFromNode(a[0]).normalize().collapse().select()},this.isEmpty=function(a){return n.isEmpty(a[0])||n.emptyPara===a.html()}},z=function(){this.update=function(b,c){var d=function(b,c){b.find(".dropdown-menu li a").each(function(){var b=a(this).data("value")+""==c+"";this.className=b?"checked":""})},e=function(a,c){var d=b.find(a);d.toggleClass("active",c())};if(c.image){var f=a(c.image);e('button[data-event="imageShape"][data-value="img-rounded"]',function(){return f.hasClass("img-rounded")}),e('button[data-event="imageShape"][data-value="img-circle"]',function(){return f.hasClass("img-circle")}),e('button[data-event="imageShape"][data-value="img-thumbnail"]',function(){return f.hasClass("img-thumbnail")}),e('button[data-event="imageShape"]:not([data-value])',function(){return!f.is(".img-rounded, .img-circle, .img-thumbnail")});var g=f.css("float");e('button[data-event="floatMe"][data-value="left"]',function(){return"left"===g}),e('button[data-event="floatMe"][data-value="right"]',function(){return"right"===g}),e('button[data-event="floatMe"][data-value="none"]',function(){return"left"!==g&&"right"!==g});var h=f.attr("style");return e('button[data-event="resize"][data-value="1"]',function(){return!!/(^|\s)(max-)?width\s*:\s*100%/.test(h)}),e('button[data-event="resize"][data-value="0.5"]',function(){return!!/(^|\s)(max-)?width\s*:\s*50%/.test(h)}),void e('button[data-event="resize"][data-value="0.25"]',function(){return!!/(^|\s)(max-)?width\s*:\s*25%/.test(h)})}var j=b.find(".note-fontname");if(j.length){var k=c["font-family"];if(k){for(var l=k.split(","),m=0,n=l.length;n>m&&(k=l[m].replace(/[\'\"]/g,"").replace(/\s+$/,"").replace(/^\s+/,""),!i.isFontInstalled(k));m++);j.find(".note-current-fontname").text(k),d(j,k)}}var o=b.find(".note-fontsize");o.find(".note-current-fontsize").text(c["font-size"]),d(o,parseFloat(c["font-size"]));var p=b.find(".note-height");d(p,parseFloat(c["line-height"])),e('button[data-event="bold"]',function(){return"bold"===c["font-bold"]}),e('button[data-event="italic"]',function(){return"italic"===c["font-italic"]}),e('button[data-event="underline"]',function(){return"underline"===c["font-underline"]}),e('button[data-event="strikethrough"]',function(){return"strikethrough"===c["font-strikethrough"]}),e('button[data-event="superscript"]',function(){return"superscript"===c["font-superscript"]}),e('button[data-event="subscript"]',function(){return"subscript"===c["font-subscript"]}),e('button[data-event="justifyLeft"]',function(){return"left"===c["text-align"]||"start"===c["text-align"]}),e('button[data-event="justifyCenter"]',function(){return"center"===c["text-align"]}),e('button[data-event="justifyRight"]',function(){return"right"===c["text-align"]}),e('button[data-event="justifyFull"]',function(){return"justify"===c["text-align"]}),e('button[data-event="insertUnorderedList"]',function(){return"unordered"===c["list-style"]}),e('button[data-event="insertOrderedList"]',function(){return"ordered"===c["list-style"]})},this.updateRecentColor=function(b,c,d){var e=a(b).closest(".note-color"),f=e.find(".note-recent-color"),g=JSON.parse(f.attr("data-value"));g[c]=d,f.attr("data-value",JSON.stringify(g));var h="backColor"===c?"background-color":"color";f.find("i").css(h,d)}},A=function(){var a=new z;this.update=function(b,c){a.update(b,c)},this.updateRecentColor=function(b,c,d){a.updateRecentColor(b,c,d)},this.activate=function(a){a.find("button").not('button[data-event="codeview"]').removeClass("disabled")},this.deactivate=function(a){a.find("button").not('button[data-event="codeview"]').addClass("disabled")},this.updateFullscreen=function(a,b){var c=a.find('button[data-event="fullscreen"]');c.toggleClass("active",b)},this.updateCodeview=function(a,b){var c=a.find('button[data-event="codeview"]');c.toggleClass("active",b),b?this.deactivate(a):this.activate(a)},this.get=function(a,b){var c=n.makeLayoutInfo(a).toolbar();return c.find("[data-name="+b+"]")},this.setButtonState=function(a,b,c){c=c===!1?!1:!0;var d=this.get(a,b);d.toggleClass("active",c)}},B=24,C=function(){var b=a(document);this.attach=function(a,b){b.disableResizeEditor||a.statusbar().on("mousedown",c)};var c=function(a){a.preventDefault(),a.stopPropagation();var c=n.makeLayoutInfo(a.target).editable(),d=c.offset().top-b.scrollTop(),e=n.makeLayoutInfo(a.currentTarget||a.target),f=e.editor().data("options");b.on("mousemove",function(a){var b=a.clientY-(d+B);b=f.minHeight>0?Math.max(b,f.minHeight):b,b=f.maxHeight>0?Math.min(b,f.maxHeight):b,c.height(b)}).one("mouseup",function(){b.off("mousemove")})}},D=function(){var b=new z,c=function(b,c){var d=c&&c.isAirMode,e=c&&c.isLeftTop,f=a(b),g=d?f.offset():f.position(),h=e?0:f.outerHeight(!0);return{left:g.left,top:g.top+h}},d=function(a,b){a.css({display:"block",left:b.left,top:b.top})},e=20;this.update=function(f,g,h){b.update(f,g);var i=f.find(".note-link-popover");if(g.anchor){var l=i.find("a"),m=a(g.anchor).attr("href"),n=a(g.anchor).attr("target");l.attr("href",m).html(m),n?l.attr("target","_blank"):l.removeAttr("target"),d(i,c(g.anchor,{isAirMode:h}))}else i.hide();var o=f.find(".note-image-popover");g.image?d(o,c(g.image,{isAirMode:h,isLeftTop:!0})):o.hide();var p=f.find(".note-air-popover");if(h&&g.range&&!g.range.isCollapsed()){var q=k.last(g.range.getClientRects());if(q){var r=j.rect2bnd(q);d(p,{left:Math.max(r.left+r.width/2-e,0),top:r.top+r.height})}}else p.hide()},this.updateRecentColor=function(a,b,c){a.updateRecentColor(a,b,c)},this.hide=function(a){a.children().hide()}},E=function(b){var c=a(document),d=function(d){if(n.isControlSizing(d.target)){d.preventDefault(),d.stopPropagation();var e=n.makeLayoutInfo(d.target),f=e.handle(),g=e.popover(),h=e.editable(),i=e.editor(),j=f.find(".note-control-selection").data("target"),k=a(j),l=k.offset(),m=c.scrollTop(),o=i.data("options").airMode;c.on("mousemove",function(a){b.invoke("editor.resizeTo",{x:a.clientX-l.left,y:a.clientY-(l.top-m)},k,!a.shiftKey),b.invoke("handle.update",f,{image:j},o),b.invoke("popover.update",g,{image:j},o)}).one("mouseup",function(){c.off("mousemove"),b.invoke("editor.afterCommand",h)}),k.data("ratio")||k.data("ratio",k.height()/k.width())}};this.attach=function(a){a.handle().on("mousedown",d)},this.update=function(b,c,d){var e=b.find(".note-control-selection");if(c.image){var f=a(c.image),g=d?f.offset():f.position(),h={w:f.outerWidth(!0),h:f.outerHeight(!0)};e.css({display:"block",left:g.left,top:g.top,width:h.w,height:h.h}).data("target",c.image);var i=h.w+"x"+h.h;e.find(".note-control-selection-info").text(i)}else e.hide()},this.hide=function(a){a.children().hide()}},F=function(b){var c=a(window),d=a("html, body");this.toggle=function(a){var e=a.editor(),f=a.toolbar(),g=a.editable(),h=a.codable(),i=function(a){g.css("height",a.h),h.css("height",a.h),h.data("cmeditor")&&h.data("cmeditor").setsize(null,a.h)};e.toggleClass("fullscreen");var j=e.hasClass("fullscreen");j?(g.data("orgheight",g.css("height")),c.on("resize",function(){i({h:c.height()-f.outerHeight()})}).trigger("resize"),d.css("overflow","hidden")):(c.off("resize"),i({h:g.data("orgheight")}),d.css("overflow","visible")),b.invoke("toolbar.updateFullscreen",f,j)}};i.hasCodeMirror&&(i.isSupportAmd?require(["CodeMirror"],function(a){h=a}):h=window.CodeMirror);var G=function(a){this.sync=function(b){var c=a.invoke("codeview.isActivated",b);c&&i.hasCodeMirror&&b.codable().data("cmEditor").save()},this.isActivated=function(a){var b=a.editor();return b.hasClass("codeview")},this.toggle=function(a){this.isActivated(a)?this.deactivate(a):this.activate(a)},this.activate=function(b){var c=b.editor(),d=b.toolbar(),e=b.editable(),f=b.codable(),g=b.popover(),j=b.handle(),k=c.data("options");if(f.val(n.html(e,k.prettifyHtml)),f.height(e.height()),a.invoke("toolbar.updateCodeview",d,!0),a.invoke("popover.hide",g),a.invoke("handle.hide",j),c.addClass("codeview"),f.focus(),i.hasCodeMirror){var l=h.fromTextArea(f[0],k.codemirror);if(k.codemirror.tern){var m=new h.TernServer(k.codemirror.tern);l.ternServer=m,l.on("cursorActivity",function(a){m.updateArgHints(a)})}l.setSize(null,e.outerHeight()),f.data("cmEditor",l)}},this.deactivate=function(b){var c=b.holder(),d=b.editor(),e=b.toolbar(),f=b.editable(),g=b.codable(),h=d.data("options");if(i.hasCodeMirror){var j=g.data("cmEditor");g.val(j.getValue()),j.toTextArea()}var k=n.value(g,h.prettifyHtml)||n.emptyPara,l=f.html()!==k;f.html(k),f.height(h.height?g.height():"auto"),d.removeClass("codeview"),l&&a.bindCustomEvent(c,f.data("callbacks"),"change")(f.html(),f),f.focus(),a.invoke("toolbar.updateCodeview",e,!1)}},H=function(b){var c=a(document);this.attach=function(a,b){b.airMode||b.disableDragAndDrop?c.on("drop",function(a){a.preventDefault()}):this.attachDragAndDropEvent(a,b)},this.attachDragAndDropEvent=function(d,e){var f=a(),g=d.editor(),h=d.dropzone(),i=h.find(".note-dropzone-message");c.on("dragenter",function(a){var c=b.invoke("codeview.isActivated",d),j=g.width()>0&&g.height()>0;c||f.length||!j||(g.addClass("dragover"),h.width(g.width()),h.height(g.height()),i.text(e.langInfo.image.dragImageHere)),f=f.add(a.target)}).on("dragleave",function(a){f=f.not(a.target),f.length||g.removeClass("dragover")}).on("drop",function(){f=a(),g.removeClass("dragover")}),h.on("dragenter",function(){h.addClass("hover"),i.text(e.langInfo.image.dropImage)}).on("dragleave",function(){h.removeClass("hover"),i.text(e.langInfo.image.dragImageHere)}),h.on("drop",function(c){var d=c.originalEvent.dataTransfer,e=n.makeLayoutInfo(c.currentTarget||c.target);if(d&&d.files&&d.files.length)c.preventDefault(),e.editable().focus(),b.insertImages(e,d.files);else for(var f=function(){e.holder().summernote("insertNode",this)},g=0,h=d.types.length;h>g;g++){var i=d.types[g],j=d.getData(i);i.toLowerCase().indexOf("text")>-1?e.holder().summernote("pasteHTML",j):a(j).each(f)}}).on("dragover",!1)}},I=function(b){var c;this.attach=function(f){i.isMSIE&&i.browserVersion>10||i.isFF?(c=a("<div />").attr("contenteditable",!0).css({position:"absolute",left:-1e5,opacity:0}),f.editable().on("keydown",function(a){a.ctrlKey&&a.keyCode===r.code.V&&(b.invoke("saveRange",f.editable()),c.focus(),setTimeout(function(){d(f)},0))}),f.editable().before(c)):f.editable().on("paste",e)};var d=function(d){var e=d.editable(),f=c[0].firstChild;if(n.isImg(f)){for(var g=f.src,h=atob(g.split(",")[1]),i=new Uint8Array(h.length),j=0;j<h.length;j++)i[j]=h.charCodeAt(j);var k=new Blob([i],{type:"image/png"});k.name="clipboard.png",b.invoke("restoreRange",e),b.invoke("focus",e),b.insertImages(d,[k])}else{var l=a("<div />").html(c.html()).html();b.invoke("restoreRange",e),b.invoke("focus",e),l&&b.invoke("pasteHTML",e,l)}c.empty()},e=function(a){var c=a.originalEvent.clipboardData,d=n.makeLayoutInfo(a.currentTarget||a.target),e=d.editable();if(c&&c.items&&c.items.length){var f=k.head(c.items);"file"===f.kind&&-1!==f.type.indexOf("image/")&&b.insertImages(d,[f.getAsFile()]),b.invoke("editor.afterCommand",e)}}},J=function(b){var c=function(a,b){a.toggleClass("disabled",!b),a.attr("disabled",!b)},d=function(a,b){a.on("keypress",function(a){a.keyCode===r.code.ENTER&&b.trigger("click")})};this.showLinkDialog=function(b,e,f){return a.Deferred(function(a){var b=e.find(".note-link-dialog"),g=b.find(".note-link-text"),h=b.find(".note-link-url"),i=b.find(".note-link-btn"),j=b.find("input[type=checkbox]");b.one("shown.bs.modal",function(){g.val(f.text),g.on("input",function(){c(i,g.val()&&h.val()),f.text=g.val()}),f.url||(f.url=f.text||"http://",c(i,f.text)),h.on("input",function(){c(i,g.val()&&h.val()),f.text||g.val(h.val())}).val(f.url).trigger("focus").trigger("select"),d(h,i),d(g,i),j.prop("checked",f.isNewWindow),i.one("click",function(c){c.preventDefault(),a.resolve({range:f.range,url:h.val(),text:g.val(),isNewWindow:j.is(":checked")}),b.modal("hide")})}).one("hidden.bs.modal",function(){g.off("input keypress"),h.off("input keypress"),i.off("click"),"pending"===a.state()&&a.reject()}).modal("show")}).promise()},this.show=function(a){var c=a.editor(),d=a.dialog(),e=a.editable(),f=a.popover(),g=b.invoke("editor.getLinkInfo",e),h=c.data("options");b.invoke("editor.saveRange",e),this.showLinkDialog(e,d,g).then(function(a){b.invoke("editor.restoreRange",e),b.invoke("editor.createLink",e,a,h),b.invoke("popover.hide",f)}).fail(function(){b.invoke("editor.restoreRange",e)})}},K=function(b){var c=function(a,b){a.toggleClass("disabled",!b),a.attr("disabled",!b)},d=function(a,b){a.on("keypress",function(a){a.keyCode===r.code.ENTER&&b.trigger("click")})};this.show=function(a){var c=a.dialog(),d=a.editable();b.invoke("editor.saveRange",d),this.showImageDialog(d,c).then(function(c){b.invoke("editor.restoreRange",d),"string"==typeof c?b.invoke("editor.insertImage",d,c):b.insertImages(a,c)}).fail(function(){b.invoke("editor.restoreRange",d)})},this.showImageDialog=function(b,e){return a.Deferred(function(a){var b=e.find(".note-image-dialog"),f=e.find(".note-image-input"),g=e.find(".note-image-url"),h=e.find(".note-image-btn");b.one("shown.bs.modal",function(){f.replaceWith(f.clone().on("change",function(){a.resolve(this.files||this.value),b.modal("hide")}).val("")),h.click(function(c){c.preventDefault(),a.resolve(g.val()),b.modal("hide")}),g.on("keyup paste",function(a){var b;b="paste"===a.type?a.originalEvent.clipboardData.getData("text"):g.val(),c(h,b)}).val("").trigger("focus"),d(g,h)}).one("hidden.bs.modal",function(){f.off("change"),g.off("keyup paste keypress"),h.off("click"),"pending"===a.state()&&a.reject()}).modal("show")})}},L=function(b){this.showHelpDialog=function(b,c){return a.Deferred(function(a){var b=c.find(".note-help-dialog");b.one("hidden.bs.modal",function(){a.resolve()}).modal("show")}).promise()},this.show=function(a){var c=a.dialog(),d=a.editable();b.invoke("editor.saveRange",d,!0),this.showHelpDialog(d,c).then(function(){b.invoke("editor.restoreRange",d)})}},M=function(){var b=this,c=this.modules={editor:new y(this),toolbar:new A(this),statusbar:new C(this),popover:new D(this),handle:new E(this),fullscreen:new F(this),codeview:new G(this),dragAndDrop:new H(this),clipboard:new I(this),linkDialog:new J(this),imageDialog:new K(this),helpDialog:new L(this)};this.invoke=function(){var a=k.head(k.from(arguments)),b=k.tail(k.from(arguments)),c=a.split("."),d=c.length>1,e=d&&k.head(c),f=d?k.last(c):k.head(c),g=this.getModule(e),h=g[f];return h&&h.apply(g,b)},this.getModule=function(a){return this.modules[a]||this.modules.editor};var d=this.bindCustomEvent=function(a,b,c){return function(){var d=b[j.namespaceToCamel(c,"on")];return d&&d.apply(a[0],arguments),a.trigger("summernote."+c,arguments)}};this.insertImages=function(b,e){var f=b.editor(),g=b.editable(),h=b.holder(),i=g.data("callbacks"),j=f.data("options");i.onImageUpload?d(h,i,"image.upload")(e):a.each(e,function(a,b){var e=b.name;j.maximumImageFileSize&&j.maximumImageFileSize<b.size?d(h,i,"image.upload.error")(j.langInfo.image.maximumFileSizeError):q.readFileAsDataURL(b).then(function(a){c.editor.insertImage(g,a,e)}).fail(function(){d(h,i,"image.upload.error")(j.langInfo.image.maximumFileSizeError)})})};var e={showLinkDialog:function(a){c.linkDialog.show(a)},showImageDialog:function(a){c.imageDialog.show(a)},showHelpDialog:function(a){c.helpDialog.show(a)},fullscreen:function(a){c.fullscreen.toggle(a)},codeview:function(a){c.codeview.toggle(a)}},f=function(a){n.isImg(a.target)&&a.preventDefault()},g=function(a){var b=n.makeLayoutInfo(a.currentTarget||a.target);c.editor.removeBogus(b.editable()),h(a)};this.updateStyleInfo=function(a,b){if(a){var d=b.editor().data("options").airMode;d||c.toolbar.update(b.toolbar(),a),c.popover.update(b.popover(),a,d),c.handle.update(b.handle(),a,d)}};var h=function(a){var d=a.target;setTimeout(function(){var a=n.makeLayoutInfo(d),e=c.editor.currentStyle(d);b.updateStyleInfo(e,a)},0)},l=function(a){var b=n.makeLayoutInfo(a.currentTarget||a.target);c.popover.hide(b.popover()),c.handle.hide(b.handle())},m=function(b){var c=a(b.target).closest("[data-event]");c.length&&b.preventDefault()},o=function(b){var d=a(b.target).closest("[data-event]");if(d.length){var f,g=d.attr("data-event"),i=d.attr("data-value"),j=d.attr("data-hide"),l=n.makeLayoutInfo(b.target);if(-1!==a.inArray(g,["resize","floatMe","removeMedia","imageShape"])){var m=l.handle().find(".note-control-selection");f=a(m.data("target"))}if(j&&d.parents(".popover").hide(),a.isFunction(a.summernote.pluginEvents[g]))a.summernote.pluginEvents[g](b,c.editor,l,i);else if(c.editor[g]){var o=l.editable();o.focus(),c.editor[g](o,i,f),b.preventDefault()}else e[g]&&(e[g].call(this,l),b.preventDefault());if(-1!==a.inArray(g,["backColor","foreColor"])){var p=l.editor().data("options",p),q=p.airMode?c.popover:c.toolbar;q.updateRecentColor(k.head(d),g,i)}h(b)}},p=18,t=function(b,c){var d,e=a(b.target.parentNode),f=e.next(),g=e.find(".note-dimension-picker-mousecatcher"),h=e.find(".note-dimension-picker-highlighted"),i=e.find(".note-dimension-picker-unhighlighted");if(void 0===b.offsetX){var j=a(b.target).offset();d={x:b.pageX-j.left,y:b.pageY-j.top}}else d={x:b.offsetX,y:b.offsetY};var k={c:Math.ceil(d.x/p)||1,r:Math.ceil(d.y/p)||1};h.css({width:k.c+"em",height:k.r+"em"}),g.attr("data-value",k.c+"x"+k.r),3<k.c&&k.c<c.insertTableMaxSize.col&&i.css({width:k.c+1+"em"}),3<k.r&&k.r<c.insertTableMaxSize.row&&i.css({height:k.r+1+"em"}),f.html(k.c+" x "+k.r)};this.bindKeyMap=function(b,d){var f=b.editor(),g=b.editable();g.on("keydown",function(h){var i=[];h.metaKey&&i.push("CMD"),h.ctrlKey&&!h.altKey&&i.push("CTRL"),h.shiftKey&&i.push("SHIFT");var j=r.nameFromCode[h.keyCode];j&&i.push(j);var k,l=i.join("+"),m=d[l];if(m){if(k=a.summernote.pluginEvents[l],a.isFunction(k)&&k(h,c.editor,b))return!1;k=a.summernote.pluginEvents[m],a.isFunction(k)?k(h,c.editor,b):c.editor[m]?(c.editor[m](g,f.data("options")),h.preventDefault()):e[m]&&(e[m].call(this,b),h.preventDefault())}else r.isEdit(h.keyCode)&&c.editor.afterCommand(g)})},this.attach=function(a,b){b.shortcuts&&this.bindKeyMap(a,b.keyMap[i.isMac?"mac":"pc"]),a.editable().on("mousedown",f),a.editable().on("keyup mouseup",g),a.editable().on("scroll",l),c.clipboard.attach(a,b),c.handle.attach(a,b),a.popover().on("click",o),a.popover().on("mousedown",m),c.dragAndDrop.attach(a,b),b.airMode||(a.toolbar().on("click",o),a.toolbar().on("mousedown",m),c.statusbar.attach(a,b));var d=b.airMode?a.popover():a.toolbar(),e=d.find(".note-dimension-picker-mousecatcher");e.css({width:b.insertTableMaxSize.col+"em",height:b.insertTableMaxSize.row+"em"}).on("mousemove",function(a){t(a,b)}),a.editor().data("options",b),i.isMSIE||setTimeout(function(){document.execCommand("styleWithCSS",0,b.styleWithSpan)},0);var h=new s(a.editable());a.editable().data("NoteHistory",h),a.editable().data("callbacks",{onInit:b.onInit,onFocus:b.onFocus,onBlur:b.onBlur,onKeydown:b.onKeydown,onKeyup:b.onKeyup,onMousedown:b.onMousedown,onEnter:b.onEnter,onPaste:b.onPaste,onBeforeCommand:b.onBeforeCommand,onChange:b.onChange,onImageUpload:b.onImageUpload,onImageUploadError:b.onImageUploadError,onMediaDelete:b.onMediaDelete,onToolbarClick:b.onToolbarClick});var j=c.editor.styleFromNode(a.editable());this.updateStyleInfo(j,a)},this.attachCustomEvent=function(b,c){var e=b.holder(),f=b.editable(),g=f.data("callbacks");f.focus(d(e,g,"focus")),f.blur(d(e,g,"blur")),f.keydown(function(a){a.keyCode===r.code.ENTER&&d(e,g,"enter").call(this,a),d(e,g,"keydown").call(this,a)}),f.keyup(d(e,g,"keyup")),f.on("mousedown",d(e,g,"mousedown")),f.on("mouseup",d(e,g,"mouseup")),f.on("scroll",d(e,g,"scroll")),f.on("paste",d(e,g,"paste"));var h=i.isMSIE?"DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted":"input";f.on(h,function(){d(e,g,"change")(f.html(),f)}),c.airMode||(b.toolbar().click(d(e,g,"toolbar.click")),b.popover().click(d(e,g,"popover.click"))),n.isTextarea(k.head(e))&&e.closest("form").submit(function(a){b.holder().val(b.holder().code()),d(e,g,"submit").call(this,a,e.code())}),n.isTextarea(k.head(e))&&c.textareaAutoSync&&e.on("summernote.change",function(){b.holder().val(b.holder().code())}),d(e,g,"init")(b);for(var j=0,l=a.summernote.plugins.length;l>j;j++)a.isFunction(a.summernote.plugins[j].init)&&a.summernote.plugins[j].init(b)},this.detach=function(a,b){a.holder().off(),a.editable().off(),a.popover().off(),a.handle().off(),a.dialog().off(),b.airMode||(a.dropzone().off(),a.toolbar().off(),a.statusbar().off())}},N=function(){var b=function(a,b){var c=b.event,d=b.value,e=b.title,f=b.className,g=b.dropdown,h=b.hide;return(g?'<div class="btn-group'+(f?" "+f:"")+'">':"")+'<button type="button" class="btn btn-default btn-sm'+(!g&&f?" "+f:"")+(g?" dropdown-toggle":"")+'"'+(g?' data-toggle="dropdown"':"")+(e?' title="'+e+'"':"")+(c?' data-event="'+c+'"':"")+(d?" data-value='"+d+"'":"")+(h?" data-hide='"+h+"'":"")+' tabindex="-1">'+a+(g?' <span class="caret"></span>':"")+"</button>"+(g||"")+(g?"</div>":"")},c=function(a,c){var d='<i class="'+a+'"></i>';return b(d,c)},d=function(b,c){var d=a('<div class="'+b+' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content"></div></div>');return d.find(".popover-content").append(c),d},e=function(a,b,c,d){return'<div class="'+a+' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">'+(b?'<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">'+b+"</h4></div>":"")+'<div class="modal-body">'+c+"</div>"+(d?'<div class="modal-footer">'+d+"</div>":"")+"</div></div></div>"},f=function(a,b,c){var d="dropdown-menu"+(b?" "+b:"");return c=c||"ul",a instanceof Array&&(a=a.join("")),"<"+c+' class="'+d+'">'+a+"</"+c+">"},g={picture:function(a,b){return c(b.iconPrefix+b.icons.image.image,{event:"showImageDialog",title:a.image.image,hide:!0})},link:function(a,b){return c(b.iconPrefix+b.icons.link.link,{event:"showLinkDialog",title:a.link.link,hide:!0})},table:function(a,b){var d=['<div class="note-dimension-picker">','<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>','<div class="note-dimension-picker-highlighted"></div>','<div class="note-dimension-picker-unhighlighted"></div>',"</div>",'<div class="note-dimension-display"> 1 x 1 </div>'];return c(b.iconPrefix+b.icons.table.table,{title:a.table.table,dropdown:f(d,"note-table")})},style:function(a,b){var d=b.styleTags.reduce(function(b,c){var d=a.style["p"===c?"normal":c];return b+'<li><a data-event="formatBlock" href="#" data-value="'+c+'">'+("p"===c||"pre"===c?d:"<"+c+">"+d+"</"+c+">")+"</a></li>"},"");return c(b.iconPrefix+b.icons.style.style,{title:a.style.style,dropdown:f(d)})},fontname:function(a,c){var d=[],e=c.fontNames.reduce(function(a,b){return i.isFontInstalled(b)||k.contains(c.fontNamesIgnoreCheck,b)?(d.push(b),a+'<li><a data-event="fontName" href="#" data-value="'+b+'" style="font-family:\''+b+'\'"><i class="'+c.iconPrefix+c.icons.misc.check+'"></i> '+b+"</a></li>"):a},""),g=i.isFontInstalled(c.defaultFontName),h=g?c.defaultFontName:d[0],j='<span class="note-current-fontname">'+h+"</span>";return b(j,{title:a.font.name,className:"note-fontname",dropdown:f(e,"note-check")})},fontsize:function(a,c){var d=c.fontSizes.reduce(function(a,b){return a+'<li><a data-event="fontSize" href="#" data-value="'+b+'"><i class="'+c.iconPrefix+c.icons.misc.check+'"></i> '+b+"</a></li>"},""),e='<span class="note-current-fontsize">11</span>';return b(e,{title:a.font.size,className:"note-fontsize",dropdown:f(d,"note-check")})},color:function(a,c){var d='<i class="'+c.iconPrefix+c.icons.color.recent+'" style="color:black;background-color:yellow;"></i>',e=b(d,{className:"note-recent-color",title:a.color.recent,event:"color",value:'{"backColor":"yellow"}'}),g=['<li><div class="btn-group">','<div class="note-palette-title">'+a.color.background+"</div>",'<div class="note-color-reset" data-event="backColor"',' data-value="inherit" title="'+a.color.transparent+'">'+a.color.setTransparent+"</div>",'<div class="note-color-palette" data-target-event="backColor"></div>','</div><div class="btn-group">','<div class="note-palette-title">'+a.color.foreground+"</div>",'<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="'+a.color.reset+'">',a.color.resetToDefault,"</div>",'<div class="note-color-palette" data-target-event="foreColor"></div>',"</div></li>"],h=b("",{title:a.color.more,dropdown:f(g)});return e+h},bold:function(a,b){return c(b.iconPrefix+b.icons.font.bold,{event:"bold",title:a.font.bold})},italic:function(a,b){return c(b.iconPrefix+b.icons.font.italic,{event:"italic",title:a.font.italic})},underline:function(a,b){return c(b.iconPrefix+b.icons.font.underline,{event:"underline",title:a.font.underline})},strikethrough:function(a,b){return c(b.iconPrefix+b.icons.font.strikethrough,{event:"strikethrough",title:a.font.strikethrough})},superscript:function(a,b){return c(b.iconPrefix+b.icons.font.superscript,{event:"superscript",title:a.font.superscript})},subscript:function(a,b){return c(b.iconPrefix+b.icons.font.subscript,{event:"subscript",title:a.font.subscript})},clear:function(a,b){return c(b.iconPrefix+b.icons.font.clear,{event:"removeFormat",title:a.font.clear})},ul:function(a,b){return c(b.iconPrefix+b.icons.lists.unordered,{event:"insertUnorderedList",title:a.lists.unordered})},ol:function(a,b){return c(b.iconPrefix+b.icons.lists.ordered,{event:"insertOrderedList",title:a.lists.ordered})},paragraph:function(a,b){var d=c(b.iconPrefix+b.icons.paragraph.left,{title:a.paragraph.left,event:"justifyLeft"}),e=c(b.iconPrefix+b.icons.paragraph.center,{title:a.paragraph.center,event:"justifyCenter"}),g=c(b.iconPrefix+b.icons.paragraph.right,{title:a.paragraph.right,event:"justifyRight"}),h=c(b.iconPrefix+b.icons.paragraph.justify,{title:a.paragraph.justify,event:"justifyFull"}),i=c(b.iconPrefix+b.icons.paragraph.outdent,{title:a.paragraph.outdent,event:"outdent"}),j=c(b.iconPrefix+b.icons.paragraph.indent,{title:a.paragraph.indent,event:"indent"}),k=['<div class="note-align btn-group">',d+e+g+h,'</div><div class="note-list btn-group">',j+i,"</div>"];
return c(b.iconPrefix+b.icons.paragraph.paragraph,{title:a.paragraph.paragraph,dropdown:f(k,"","div")})},height:function(a,b){var d=b.lineHeights.reduce(function(a,c){return a+'<li><a data-event="lineHeight" href="#" data-value="'+parseFloat(c)+'"><i class="'+b.iconPrefix+b.icons.misc.check+'"></i> '+c+"</a></li>"},"");return c(b.iconPrefix+b.icons.font.height,{title:a.font.height,dropdown:f(d,"note-check")})},help:function(a,b){return c(b.iconPrefix+b.icons.options.help,{event:"showHelpDialog",title:a.options.help,hide:!0})},fullscreen:function(a,b){return c(b.iconPrefix+b.icons.options.fullscreen,{event:"fullscreen",title:a.options.fullscreen})},codeview:function(a,b){return c(b.iconPrefix+b.icons.options.codeview,{event:"codeview",title:a.options.codeview})},undo:function(a,b){return c(b.iconPrefix+b.icons.history.undo,{event:"undo",title:a.history.undo})},redo:function(a,b){return c(b.iconPrefix+b.icons.history.redo,{event:"redo",title:a.history.redo})},hr:function(a,b){return c(b.iconPrefix+b.icons.hr.insert,{event:"insertHorizontalRule",title:a.hr.insert})}},h=function(e,f){var h=function(){var a=c(f.iconPrefix+f.icons.link.edit,{title:e.link.edit,event:"showLinkDialog",hide:!0}),b=c(f.iconPrefix+f.icons.link.unlink,{title:e.link.unlink,event:"unlink"}),g='<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">'+a+b+"</div>";return d("note-link-popover",g)},i=function(){var a=b('<span class="note-fontsize-10">100%</span>',{title:e.image.resizeFull,event:"resize",value:"1"}),g=b('<span class="note-fontsize-10">50%</span>',{title:e.image.resizeHalf,event:"resize",value:"0.5"}),h=b('<span class="note-fontsize-10">25%</span>',{title:e.image.resizeQuarter,event:"resize",value:"0.25"}),i=c(f.iconPrefix+f.icons.image.floatLeft,{title:e.image.floatLeft,event:"floatMe",value:"left"}),j=c(f.iconPrefix+f.icons.image.floatRight,{title:e.image.floatRight,event:"floatMe",value:"right"}),k=c(f.iconPrefix+f.icons.image.floatNone,{title:e.image.floatNone,event:"floatMe",value:"none"}),l=c(f.iconPrefix+f.icons.image.shapeRounded,{title:e.image.shapeRounded,event:"imageShape",value:"img-rounded"}),m=c(f.iconPrefix+f.icons.image.shapeCircle,{title:e.image.shapeCircle,event:"imageShape",value:"img-circle"}),n=c(f.iconPrefix+f.icons.image.shapeThumbnail,{title:e.image.shapeThumbnail,event:"imageShape",value:"img-thumbnail"}),o=c(f.iconPrefix+f.icons.image.shapeNone,{title:e.image.shapeNone,event:"imageShape",value:""}),p=c(f.iconPrefix+f.icons.image.remove,{title:e.image.remove,event:"removeMedia",value:"none"}),q=(f.disableResizeImage?"":'<div class="btn-group">'+a+g+h+"</div>")+'<div class="btn-group">'+i+j+k+'</div><br><div class="btn-group">'+l+m+n+o+'</div><div class="btn-group">'+p+"</div>";return d("note-image-popover",q)},j=function(){for(var b=a("<div />"),c=0,h=f.airPopover.length;h>c;c++){for(var i=f.airPopover[c],j=a('<div class="note-'+i[0]+' btn-group">'),k=0,l=i[1].length;l>k;k++){var m=a(g[i[1][k]](e,f));m.attr("data-name",i[1][k]),j.append(m)}b.append(j)}return d("note-air-popover",b.children())},k=a('<div class="note-popover" />');return k.append(h()),k.append(i()),f.airMode&&k.append(j()),k},l=function(a){return'<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="'+(a.disableResizeImage?"note-control-holder":"note-control-sizing")+' note-control-se"></div>'+(a.disableResizeImage?"":'<div class="note-control-selection-info"></div>')+"</div></div>"},m=function(a,b){var c="note-shortcut-col col-xs-6 note-shortcut-",d=[];for(var e in b)b.hasOwnProperty(e)&&d.push('<div class="'+c+'key">'+b[e].kbd+'</div><div class="'+c+'name">'+b[e].text+"</div>");return'<div class="note-shortcut-row row"><div class="'+c+'title col-xs-offset-6">'+a+'</div></div><div class="note-shortcut-row row">'+d.join('</div><div class="note-shortcut-row row">')+"</div>"},o=function(a){var b=[{kbd:"⌘ + B",text:a.font.bold},{kbd:"⌘ + I",text:a.font.italic},{kbd:"⌘ + U",text:a.font.underline},{kbd:"⌘ + \\",text:a.font.clear}];return m(a.shortcut.textFormatting,b)},p=function(a){var b=[{kbd:"⌘ + Z",text:a.history.undo},{kbd:"⌘ + ⇧ + Z",text:a.history.redo},{kbd:"⌘ + ]",text:a.paragraph.indent},{kbd:"⌘ + [",text:a.paragraph.outdent},{kbd:"⌘ + ENTER",text:a.hr.insert}];return m(a.shortcut.action,b)},q=function(a){var b=[{kbd:"⌘ + ⇧ + L",text:a.paragraph.left},{kbd:"⌘ + ⇧ + E",text:a.paragraph.center},{kbd:"⌘ + ⇧ + R",text:a.paragraph.right},{kbd:"⌘ + ⇧ + J",text:a.paragraph.justify},{kbd:"⌘ + ⇧ + NUM7",text:a.lists.ordered},{kbd:"⌘ + ⇧ + NUM8",text:a.lists.unordered}];return m(a.shortcut.paragraphFormatting,b)},r=function(a){var b=[{kbd:"⌘ + NUM0",text:a.style.normal},{kbd:"⌘ + NUM1",text:a.style.h1},{kbd:"⌘ + NUM2",text:a.style.h2},{kbd:"⌘ + NUM3",text:a.style.h3},{kbd:"⌘ + NUM4",text:a.style.h4},{kbd:"⌘ + NUM5",text:a.style.h5},{kbd:"⌘ + NUM6",text:a.style.h6}];return m(a.shortcut.documentStyle,b)},s=function(a,b){var c=b.extraKeys,d=[];for(var e in c)c.hasOwnProperty(e)&&d.push({kbd:e,text:c[e]});return m(a.shortcut.extraKeys,d)},t=function(a,b){var c='class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"',d=["<div "+c+">"+p(a,b)+"</div><div "+c+">"+o(a,b)+"</div>","<div "+c+">"+r(a,b)+"</div><div "+c+">"+q(a,b)+"</div>"];return b.extraKeys&&d.push("<div "+c+">"+s(a,b)+"</div>"),'<div class="note-shortcut-row row">'+d.join('</div><div class="note-shortcut-row row">')+"</div>"},u=function(a){return a.replace(/⌘/g,"Ctrl").replace(/⇧/g,"Shift")},v={image:function(a,b){var c="";if(b.maximumImageFileSize){var d=Math.floor(Math.log(b.maximumImageFileSize)/Math.log(1024)),f=1*(b.maximumImageFileSize/Math.pow(1024,d)).toFixed(2)+" "+" KMGTP"[d]+"B";c="<small>"+a.image.maximumFileSize+" : "+f+"</small>"}var g='<div class="form-group row note-group-select-from-files"><label>'+a.image.selectFromFiles+'</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />'+c+'</div><div class="form-group row"><label>'+a.image.url+'</label><input class="note-image-url form-control col-md-12" type="text" /></div>',h='<button href="#" class="btn btn-primary note-image-btn disabled" disabled>'+a.image.insert+"</button>";return e("note-image-dialog",a.image.insert,g,h)},link:function(a,b){var c='<div class="form-group row"><label>'+a.link.textToDisplay+'</label><input class="note-link-text form-control col-md-12" type="text" /></div><div class="form-group row"><label>'+a.link.url+'</label><input class="note-link-url form-control col-md-12" type="text" value="http://" /></div>'+(b.disableLinkTarget?"":'<div class="checkbox"><label><input type="checkbox" checked> '+a.link.openInNewWindow+"</label></div>"),d='<button href="#" class="btn btn-primary note-link-btn disabled" disabled>'+a.link.insert+"</button>";return e("note-link-dialog",a.link.insert,c,d)},help:function(a,b){var c='<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">'+a.shortcut.close+'</a><div class="title">'+a.shortcut.shortcuts+"</div>"+(i.isMac?t(a,b):u(t(a,b)))+'<p class="text-center"><a href="//summernote.org/" target="_blank">Summernote 0.6.16</a> · <a href="//github.com/summernote/summernote" target="_blank">Project</a> · <a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a></p>';return e("note-help-dialog","",c,"")}},w=function(b,c){var d="";return a.each(v,function(a,e){d+=e(b,c)}),'<div class="note-dialog">'+d+"</div>"},x=function(){return'<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>'},y=function(a){return i.isMac&&(a=a.replace("CMD","⌘").replace("SHIFT","⇧")),a.replace("BACKSLASH","\\").replace("SLASH","/").replace("LEFTBRACKET","[").replace("RIGHTBRACKET","]")},z=function(b,c,d){var e=j.invertObject(c),f=b.find("button");f.each(function(b,c){var d=a(c),f=e[d.data("event")];f&&d.attr("title",function(a,b){return b+" ("+y(f)+")"})}).tooltip({container:"body",trigger:"hover",placement:d||"top"}).on("click",function(){a(this).tooltip("hide")})},A=function(b,c){var d=c.colors;b.find(".note-color-palette").each(function(){for(var b=a(this),c=b.attr("data-target-event"),e=[],f=0,g=d.length;g>f;f++){for(var h=d[f],i=[],j=0,k=h.length;k>j;j++){var l=h[j];i.push(['<button type="button" class="note-color-btn" style="background-color:',l,';" data-event="',c,'" data-value="',l,'" title="',l,'" data-toggle="button" tabindex="-1"></button>'].join(""))}e.push('<div class="note-color-row">'+i.join("")+"</div>")}b.html(e.join(""))})};this.createLayoutByAirMode=function(b,c){var d=c.langInfo,e=c.keyMap[i.isMac?"mac":"pc"],f=j.uniqueId();b.addClass("note-air-editor note-editable panel-body"),b.attr({id:"note-editor-"+f,contentEditable:!0});var g=document.body,k=a(h(d,c));k.addClass("note-air-layout"),k.attr("id","note-popover-"+f),k.appendTo(g),z(k,e),A(k,c);var m=a(l(c));m.addClass("note-air-layout"),m.attr("id","note-handle-"+f),m.appendTo(g);var n=a(w(d,c));n.addClass("note-air-layout"),n.attr("id","note-dialog-"+f),n.find("button.close, a.modal-close").click(function(){a(this).closest(".modal").modal("hide")}),n.appendTo(g)},this.createLayoutByFrame=function(b,c){var d=c.langInfo,e=a('<div class="note-editor panel panel-default" />');c.width&&e.width(c.width),c.height>0&&a('<div class="note-statusbar">'+(c.disableResizeEditor?"":x())+"</div>").prependTo(e);var f=a('<div class="note-editing-area" />'),j=!b.is(":disabled"),k=a('<div class="note-editable panel-body" contentEditable="'+j+'"></div>').prependTo(f);c.height&&k.height(c.height),c.direction&&k.attr("dir",c.direction);var m=b.attr("placeholder")||c.placeholder;m&&k.attr("data-placeholder",m),k.html(n.html(b)||n.emptyPara),a('<textarea class="note-codable"></textarea>').prependTo(f);var o=a(h(d,c)).prependTo(f);A(o,c),z(o,D),a(l(c)).prependTo(f),f.prependTo(e);for(var p=a('<div class="note-toolbar panel-heading" />'),q=0,r=c.toolbar.length;r>q;q++){for(var s=c.toolbar[q][0],t=c.toolbar[q][1],u=a('<div class="note-'+s+' btn-group" />'),v=0,y=t.length;y>v;v++){var B=g[t[v]];if(a.isFunction(B)){var C=a(B(d,c));C.attr("data-name",t[v]),u.append(C)}}p.append(u)}var D=c.keyMap[i.isMac?"mac":"pc"];A(p,c),z(p,D,"bottom"),p.prependTo(e),a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(e);var E=c.dialogsInBody?a(document.body):e,F=a(w(d,c)).prependTo(E);F.find("button.close, a.modal-close").click(function(){a(this).closest(".modal").modal("hide")}),e.insertAfter(b),b.hide()},this.hasNoteEditor=function(a){return this.noteEditorFromHolder(a).length>0},this.noteEditorFromHolder=function(b){return b.hasClass("note-air-editor")?b:b.next().hasClass("note-editor")?b.next():a()},this.createLayout=function(a,b){b.airMode?this.createLayoutByAirMode(a,b):this.createLayoutByFrame(a,b)},this.layoutInfoFromHolder=function(a){var b=this.noteEditorFromHolder(a);if(b.length)return b.data("holder",a),n.buildLayoutInfo(b)},this.removeLayout=function(a,b,c){c.airMode?(a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"),b.popover().remove(),b.handle().remove(),b.dialog().remove()):(a.html(b.editable().html()),c.dialogsInBody&&b.dialog().remove(),b.editor().remove(),a.show())},this.getTemplate=function(){return{button:b,iconButton:c,dialog:e}},this.addButtonInfo=function(a,b){g[a]=b},this.addDialogInfo=function(a,b){v[a]=b}};a.summernote=a.summernote||{},a.extend(a.summernote,p);var O=new N,P=new M;a.extend(a.summernote,{renderer:O,eventHandler:P,core:{agent:i,list:k,dom:n,range:o},pluginEvents:{},plugins:[]}),a.summernote.addPlugin=function(b){a.summernote.plugins.push(b),b.buttons&&a.each(b.buttons,function(a,b){O.addButtonInfo(a,b)}),b.dialogs&&a.each(b.dialogs,function(a,b){O.addDialogInfo(a,b)}),b.events&&a.each(b.events,function(b,c){a.summernote.pluginEvents[b]=c}),b.langs&&a.each(b.langs,function(b,c){a.summernote.lang[b]&&a.extend(a.summernote.lang[b],c)}),b.options&&a.extend(a.summernote.options,b.options)},a.fn.extend({summernote:function(){var b=a.type(k.head(arguments)),c="string"===b,d="object"===b,e=d?k.head(arguments):{};if(e=a.extend({},a.summernote.options,e),e.icons=a.extend({},a.summernote.options.icons,e.icons),e.langInfo=a.extend(!0,{},a.summernote.lang["en-US"],a.summernote.lang[e.lang]),!c&&d)for(var f=0,g=a.summernote.plugins.length;g>f;f++){var h=a.summernote.plugins[f];e.plugin[h.name]&&(a.summernote.plugins[f]=a.extend(!0,h,e.plugin[h.name]))}this.each(function(b,c){var d=a(c);if(!O.hasNoteEditor(d)){O.createLayout(d,e);var f=O.layoutInfoFromHolder(d);d.data("layoutInfo",f),P.attach(f,e),P.attachCustomEvent(f,e)}});var i=this.first();if(i.length){var j=O.layoutInfoFromHolder(i);if(c){var l=k.head(k.from(arguments)),m=k.tail(k.from(arguments)),n=[l,j.editable()].concat(m);return P.invoke.apply(P,n)}e.focus&&j.editable().focus()}return this},code:function(b){if(void 0===b){var c=this.first();if(!c.length)return;var d=O.layoutInfoFromHolder(c),e=d&&d.editable();if(e&&e.length){var f=P.invoke("codeview.isActivated",d);return P.invoke("codeview.sync",d),f?d.codable().val():d.editable().html()}return n.value(c)}return this.each(function(c,d){var e=O.layoutInfoFromHolder(a(d)),f=e&&e.editable();f&&f.html(b)}),this},destroy:function(){return this.each(function(b,c){var d=a(c);if(O.hasNoteEditor(d)){var e=O.layoutInfoFromHolder(d),f=e.editor().data("options");P.detach(e,f),O.removeLayout(d,e,f)}}),this}})});
/*! lightslider - v1.1.3 - 2015-07-18
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2015 Sachin N; Licensed MIT */
!function(a,b){"use strict";var c={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(a){},onSliderLoad:function(a){},onBeforeSlide:function(a,b){},onAfterSlide:function(a,b){},onBeforeNextSlide:function(a,b){},onBeforePrevSlide:function(a,b){}};a.fn.lightSlider=function(b){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).lightSlider(b)}),this;var d={},e=a.extend(!0,{},c,b),f={},g=this;d.$el=this,"fade"===e.mode&&(e.vertical=!1);var h=g.children(),i=a(window).width(),j=null,k=null,l=0,m=0,n=!1,o=0,p="",q=0,r=e.vertical===!0?"height":"width",s=e.vertical===!0?"margin-bottom":"margin-right",t=0,u=0,v=0,w=0,x=null,y="ontouchstart"in document.documentElement,z={};return z.chbreakpoint=function(){if(i=a(window).width(),e.responsive.length){var b;if(e.autoWidth===!1&&(b=e.item),i<e.responsive[0].breakpoint)for(var c=0;c<e.responsive.length;c++)i<e.responsive[c].breakpoint&&(j=e.responsive[c].breakpoint,k=e.responsive[c]);if("undefined"!=typeof k&&null!==k)for(var d in k.settings)k.settings.hasOwnProperty(d)&&(("undefined"==typeof f[d]||null===f[d])&&(f[d]=e[d]),e[d]=k.settings[d]);if(!a.isEmptyObject(f)&&i>e.responsive[0].breakpoint)for(var g in f)f.hasOwnProperty(g)&&(e[g]=f[g]);e.autoWidth===!1&&t>0&&v>0&&b!==e.item&&(q=Math.round(t/((v+e.slideMargin)*e.slideMove)))}},z.calSW=function(){e.autoWidth===!1&&(v=(o-(e.item*e.slideMargin-e.slideMargin))/e.item)},z.calWidth=function(a){var b=a===!0?p.find(".lslide").length:h.length;if(e.autoWidth===!1)m=b*(v+e.slideMargin);else{m=0;for(var c=0;b>c;c++)m+=parseInt(h.eq(c).width())+e.slideMargin}return m},d={doCss:function(){var a=function(){for(var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;c<a.length;c++)if(a[c]in b.style)return!0};return e.useCSS&&a()?!0:!1},keyPress:function(){e.keyPress&&a(document).on("keyup.lightslider",function(b){a(":focus").is("input, textarea")||(b.preventDefault?b.preventDefault():b.returnValue=!1,37===b.keyCode?(g.goToPrevSlide(),clearInterval(x)):39===b.keyCode&&(g.goToNextSlide(),clearInterval(x)))})},controls:function(){e.controls&&(g.after('<div class="lSAction"><a class="lSPrev">'+e.prevHtml+'</a><a class="lSNext">'+e.nextHtml+"</a></div>"),e.autoWidth?z.calWidth(!1)<o&&p.find(".lSAction").hide():l<=e.item&&p.find(".lSAction").hide(),p.find(".lSAction a").on("click",function(b){return b.preventDefault?b.preventDefault():b.returnValue=!1,"lSPrev"===a(this).attr("class")?g.goToPrevSlide():g.goToNextSlide(),clearInterval(x),!1}))},initialStyle:function(){var a=this;"fade"===e.mode&&(e.autoWidth=!1,e.slideEndAnimation=!1),e.auto&&(e.slideEndAnimation=!1),e.autoWidth&&(e.slideMove=1,e.item=1),e.loop&&(e.slideMove=1,e.freeMove=!1),e.onBeforeStart.call(this,g),z.chbreakpoint(),g.addClass("lightSlider").wrap('<div class="lSSlideOuter '+e.addClass+'"><div class="lSSlideWrapper"></div></div>'),p=g.parent(".lSSlideWrapper"),e.rtl===!0&&p.parent().addClass("lSrtl"),e.vertical?(p.parent().addClass("vertical"),o=e.verticalHeight,p.css("height",o+"px")):o=g.outerWidth(),h.addClass("lslide"),e.loop===!0&&"slide"===e.mode&&(z.calSW(),z.clone=function(){if(z.calWidth(!0)>o){for(var b=0,c=0,d=0;d<h.length&&(b+=parseInt(g.find(".lslide").eq(d).width())+e.slideMargin,c++,!(b>=o+e.slideMargin));d++);var f=e.autoWidth===!0?c:e.item;if(f<g.find(".clone.left").length)for(var i=0;i<g.find(".clone.left").length-f;i++)h.eq(i).remove();if(f<g.find(".clone.right").length)for(var j=h.length-1;j>h.length-1-g.find(".clone.right").length;j--)q--,h.eq(j).remove();for(var k=g.find(".clone.right").length;f>k;k++)g.find(".lslide").eq(k).clone().removeClass("lslide").addClass("clone right").appendTo(g),q++;for(var l=g.find(".lslide").length-g.find(".clone.left").length;l>g.find(".lslide").length-f;l--)g.find(".lslide").eq(l-1).clone().removeClass("lslide").addClass("clone left").prependTo(g);h=g.children()}else h.hasClass("clone")&&(g.find(".clone").remove(),a.move(g,0))},z.clone()),z.sSW=function(){l=h.length,e.rtl===!0&&e.vertical===!1&&(s="margin-left"),e.autoWidth===!1&&h.css(r,v+"px"),h.css(s,e.slideMargin+"px"),m=z.calWidth(!1),g.css(r,m+"px"),e.loop===!0&&"slide"===e.mode&&n===!1&&(q=g.find(".clone.left").length)},z.calL=function(){h=g.children(),l=h.length},this.doCss()&&p.addClass("usingCss"),z.calL(),"slide"===e.mode?(z.calSW(),z.sSW(),e.loop===!0&&(t=a.slideValue(),this.move(g,t)),e.vertical===!1&&this.setHeight(g,!1)):(this.setHeight(g,!0),g.addClass("lSFade"),this.doCss()||(h.fadeOut(0),h.eq(q).fadeIn(0))),e.loop===!0&&"slide"===e.mode?h.eq(q).addClass("active"):h.first().addClass("active")},pager:function(){var a=this;if(z.createPager=function(){w=(o-(e.thumbItem*e.thumbMargin-e.thumbMargin))/e.thumbItem;var b=p.find(".lslide"),c=p.find(".lslide").length,d=0,f="",h=0;for(d=0;c>d;d++){"slide"===e.mode&&(e.autoWidth?h+=(parseInt(b.eq(d).width())+e.slideMargin)*e.slideMove:h=d*(v+e.slideMargin)*e.slideMove);var i=b.eq(d*e.slideMove).attr("data-thumb");if(f+=e.gallery===!0?'<li style="width:100%;'+r+":"+w+"px;"+s+":"+e.thumbMargin+'px"><a href="#"><img src="'+i+'" /></a></li>':'<li><a href="#">'+(d+1)+"</a></li>","slide"===e.mode&&h>=m-o-e.slideMargin){d+=1;var j=2;e.autoWidth&&(f+='<li><a href="#">'+(d+1)+"</a></li>",j=1),j>d?(f=null,p.parent().addClass("noPager")):p.parent().removeClass("noPager");break}}var k=p.parent();k.find(".lSPager").html(f),e.gallery===!0&&(e.vertical===!0&&k.find(".lSPager").css("width",e.vThumbWidth+"px"),u=d*(e.thumbMargin+w)+.5,k.find(".lSPager").css({property:u+"px","transition-duration":e.speed+"ms"}),e.vertical===!0&&p.parent().css("padding-right",e.vThumbWidth+e.galleryMargin+"px"),k.find(".lSPager").css(r,u+"px"));var l=k.find(".lSPager").find("li");l.first().addClass("active"),l.on("click",function(){return e.loop===!0&&"slide"===e.mode?q+=l.index(this)-k.find(".lSPager").find("li.active").index():q=l.index(this),g.mode(!1),e.gallery===!0&&a.slideThumb(),clearInterval(x),!1})},e.pager){var b="lSpg";e.gallery&&(b="lSGallery"),p.after('<ul class="lSPager '+b+'"></ul>');var c=e.vertical?"margin-left":"margin-top";p.parent().find(".lSPager").css(c,e.galleryMargin+"px"),z.createPager()}setTimeout(function(){z.init()},0)},setHeight:function(a,b){var c=null,d=this;c=e.loop?a.children(".lslide ").first():a.children().first();var f=function(){var d=c.outerHeight(),e=0,f=d;b&&(d=0,e=100*f/o),a.css({height:d+"px","padding-bottom":e+"%"})};f(),c.find("img").length?c.find("img")[0].complete?(f(),x||d.auto()):c.find("img").load(function(){setTimeout(function(){f(),x||d.auto()},100)}):x||d.auto()},active:function(a,b){this.doCss()&&"fade"===e.mode&&p.addClass("on");var c=0;if(q*e.slideMove<l){a.removeClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||a.fadeOut(e.speed),c=b===!0?q:q*e.slideMove;var d,f;b===!0&&(d=a.length,f=d-1,c+1>=d&&(c=f)),e.loop===!0&&"slide"===e.mode&&(c=b===!0?q-g.find(".clone.left").length:q*e.slideMove,b===!0&&(d=a.length,f=d-1,c+1===d?c=f:c+1>d&&(c=0))),this.doCss()||"fade"!==e.mode||b!==!1||a.eq(c).fadeIn(e.speed),a.eq(c).addClass("active")}else a.removeClass("active"),a.eq(a.length-1).addClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||(a.fadeOut(e.speed),a.eq(c).fadeIn(e.speed))},move:function(a,b){e.rtl===!0&&(b=-b),this.doCss()?a.css(e.vertical===!0?{transform:"translate3d(0px, "+-b+"px, 0px)","-webkit-transform":"translate3d(0px, "+-b+"px, 0px)"}:{transform:"translate3d("+-b+"px, 0px, 0px)","-webkit-transform":"translate3d("+-b+"px, 0px, 0px)"}):e.vertical===!0?a.css("position","relative").animate({top:-b+"px"},e.speed,e.easing):a.css("position","relative").animate({left:-b+"px"},e.speed,e.easing);var c=p.parent().find(".lSPager").find("li");this.active(c,!0)},fade:function(){this.active(h,!1);var a=p.parent().find(".lSPager").find("li");this.active(a,!0)},slide:function(){var a=this;z.calSlide=function(){m>o&&(t=a.slideValue(),a.active(h,!1),t>m-o-e.slideMargin?t=m-o-e.slideMargin:0>t&&(t=0),a.move(g,t),e.loop===!0&&"slide"===e.mode&&(q>=l-g.find(".clone.left").length/e.slideMove&&a.resetSlide(g.find(".clone.left").length),0===q&&a.resetSlide(p.find(".lslide").length)))},z.calSlide()},resetSlide:function(a){var b=this;p.find(".lSAction a").addClass("disabled"),setTimeout(function(){q=a,p.css("transition-duration","0ms"),t=b.slideValue(),b.active(h,!1),d.move(g,t),setTimeout(function(){p.css("transition-duration",e.speed+"ms"),p.find(".lSAction a").removeClass("disabled")},50)},e.speed+100)},slideValue:function(){var a=0;if(e.autoWidth===!1)a=q*(v+e.slideMargin)*e.slideMove;else{a=0;for(var b=0;q>b;b++)a+=parseInt(h.eq(b).width())+e.slideMargin}return a},slideThumb:function(){var a;switch(e.currentPagerPosition){case"left":a=0;break;case"middle":a=o/2-w/2;break;case"right":a=o-w}var b=q-g.find(".clone.left").length,c=p.parent().find(".lSPager");"slide"===e.mode&&e.loop===!0&&(b>=c.children().length?b=0:0>b&&(b=c.children().length));var d=b*(w+e.thumbMargin)-a;d+o>u&&(d=u-o-e.thumbMargin),0>d&&(d=0),this.move(c,d)},auto:function(){e.auto&&(x=setInterval(function(){g.goToNextSlide()},e.pause))},touchMove:function(a,b){if(p.css("transition-duration","0ms"),"slide"===e.mode){var c=a-b,d=t-c;if(d>=m-o-e.slideMargin)if(e.freeMove===!1)d=m-o-e.slideMargin;else{var f=m-o-e.slideMargin;d=f+(d-f)/5}else 0>d&&(e.freeMove===!1?d=0:d/=5);this.move(g,d)}},touchEnd:function(a){if(p.css("transition-duration",e.speed+"ms"),clearInterval(x),"slide"===e.mode){var b=!1,c=!0;t-=a,t>m-o-e.slideMargin?(t=m-o-e.slideMargin,e.autoWidth===!1&&(b=!0)):0>t&&(t=0);var d=function(a){var c=0;if(b||a&&(c=1),e.autoWidth)for(var d=0,f=0;f<h.length&&(d+=parseInt(h.eq(f).width())+e.slideMargin,q=f+c,!(d>=t));f++);else{var g=t/((v+e.slideMargin)*e.slideMove);q=parseInt(g)+c,t>=m-o-e.slideMargin&&g%1!==0&&q++}};a>=e.swipeThreshold?(d(!1),c=!1):a<=-e.swipeThreshold&&(d(!0),c=!1),g.mode(c),this.slideThumb()}else a>=e.swipeThreshold?g.goToPrevSlide():a<=-e.swipeThreshold&&g.goToNextSlide()},enableDrag:function(){var b=this;if(!y){var c=0,d=0,f=!1;p.find(".lightSlider").addClass("lsGrab"),p.on("mousedown",function(b){return o>m&&0!==m?!1:void("lSPrev"!==a(b.target).attr("class")&&"lSNext"!==a(b.target).attr("class")&&(c=e.vertical===!0?b.pageY:b.pageX,f=!0,b.preventDefault?b.preventDefault():b.returnValue=!1,p.scrollLeft+=1,p.scrollLeft-=1,p.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(x)))}),a(window).on("mousemove",function(a){f&&(d=e.vertical===!0?a.pageY:a.pageX,b.touchMove(d,c))}),a(window).on("mouseup",function(g){if(f){p.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),f=!1,d=e.vertical===!0?g.pageY:g.pageX;var h=d-c;Math.abs(h)>=e.swipeThreshold&&a(window).on("click.ls",function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopImmediatePropagation(),b.stopPropagation(),a(window).off("click.ls")}),b.touchEnd(h)}})}},enableTouch:function(){var a=this;if(y){var b={},c={};p.on("touchstart",function(a){c=a.originalEvent.targetTouches[0],b.pageX=a.originalEvent.targetTouches[0].pageX,b.pageY=a.originalEvent.targetTouches[0].pageY,clearInterval(x)}),p.on("touchmove",function(d){if(o>m&&0!==m)return!1;var f=d.originalEvent;c=f.targetTouches[0];var g=Math.abs(c.pageX-b.pageX),h=Math.abs(c.pageY-b.pageY);e.vertical===!0?(3*h>g&&d.preventDefault(),a.touchMove(c.pageY,b.pageY)):(3*g>h&&d.preventDefault(),a.touchMove(c.pageX,b.pageX))}),p.on("touchend",function(){if(o>m&&0!==m)return!1;var d;d=e.vertical===!0?c.pageY-b.pageY:c.pageX-b.pageX,a.touchEnd(d)})}},build:function(){var a=this;a.initialStyle(),this.doCss()&&(e.enableTouch===!0&&a.enableTouch(),e.enableDrag===!0&&a.enableDrag()),a.pager(),a.controls(),a.keyPress()}},d.build(),z.init=function(){z.chbreakpoint(),e.vertical===!0?(o=e.item>1?e.verticalHeight:h.outerHeight(),p.css("height",o+"px")):o=p.outerWidth(),e.loop===!0&&"slide"===e.mode&&z.clone(),z.calL(),"slide"===e.mode&&g.removeClass("lSSlide"),"slide"===e.mode&&(z.calSW(),z.sSW()),setTimeout(function(){"slide"===e.mode&&g.addClass("lSSlide")},1e3),e.pager&&z.createPager(),e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),e.adaptiveHeight===!1&&("slide"===e.mode?e.vertical===!1?d.setHeight(g,!1):d.auto():d.setHeight(g,!0)),e.gallery===!0&&d.slideThumb(),"slide"===e.mode&&d.slide(),e.autoWidth===!1?h.length<=e.item?p.find(".lSAction").hide():p.find(".lSAction").show():z.calWidth(!1)<o&&0!==m?p.find(".lSAction").hide():p.find(".lSAction").show()},g.goToPrevSlide=function(){if(q>0)e.onBeforePrevSlide.call(this,g,q),q--,g.mode(!1),e.gallery===!0&&d.slideThumb();else if(e.loop===!0){if(e.onBeforePrevSlide.call(this,g,q),"fade"===e.mode){var a=l-1;q=parseInt(a/e.slideMove)}g.mode(!1),e.gallery===!0&&d.slideThumb()}else e.slideEndAnimation===!0&&(g.addClass("leftEnd"),setTimeout(function(){g.removeClass("leftEnd")},400))},g.goToNextSlide=function(){var a=!0;if("slide"===e.mode){var b=d.slideValue();a=b<m-o-e.slideMargin}q*e.slideMove<l-e.slideMove&&a?(e.onBeforeNextSlide.call(this,g,q),q++,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.loop===!0?(e.onBeforeNextSlide.call(this,g,q),q=0,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.slideEndAnimation===!0&&(g.addClass("rightEnd"),setTimeout(function(){g.removeClass("rightEnd")},400))},g.mode=function(a){e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),n===!1&&("slide"===e.mode?d.doCss()&&(g.addClass("lSSlide"),""!==e.speed&&p.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&p.css("transition-timing-function",e.cssEasing)):d.doCss()&&(""!==e.speed&&g.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&g.css("transition-timing-function",e.cssEasing))),a||e.onBeforeSlide.call(this,g,q),"slide"===e.mode?d.slide():d.fade(),setTimeout(function(){a||e.onAfterSlide.call(this,g,q)},e.speed),n=!0},g.play=function(){clearInterval(x),g.goToNextSlide(),x=setInterval(function(){g.goToNextSlide()},e.pause)},g.pause=function(){clearInterval(x)},g.refresh=function(){z.init()},g.getCurrentSlideCount=function(){var a=q;if(e.loop){var b=p.find(".lslide").length,c=g.find(".clone.left").length;a=c-1>=q?b+(q-c):q>=b+c?q-b-c:q-c}return a+1},g.getTotalSlideCount=function(){return p.find(".lslide").length},g.goToSlide=function(a){q=e.loop?a+g.find(".clone.left").length-1:a,g.mode(!1),e.gallery===!0&&d.slideThumb()},setTimeout(function(){e.onSliderLoad.call(this,g)},10),a(window).on("resize orientationchange",function(a){setTimeout(function(){a.preventDefault?a.preventDefault():a.returnValue=!1,z.init()},200)}),this}}(jQuery);
+function(t){"use strict";function e(e){return this.each(function(){var r=t(this),i=t.extend({},a.DEFAULTS,r.data(),"object"==typeof e&&e),o=r.data("bs.validator");(o||"destroy"!=e)&&(o||r.data("bs.validator",o=new a(this,i)),"string"==typeof e&&o[e]())})}var a=function(e,r){this.$element=t(e),this.options=r,r.errors=t.extend({},a.DEFAULTS.errors,r.errors);for(var i in r.custom)if(!r.errors[i])throw new Error("Missing default error message for custom validator: "+i);t.extend(a.VALIDATORS,r.custom),this.$element.attr("novalidate",!0),this.toggleSubmit(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",t.proxy(this.validateInput,this)),this.$element.on("submit.bs.validator",t.proxy(this.onSubmit,this)),this.$element.find("[data-match]").each(function(){var e=t(this),a=e.data("match");t(a).on("input.bs.validator",function(){e.val()&&e.trigger("input.bs.validator")})})};a.INPUT_SELECTOR=':input:not([type="submit"], button):enabled:visible',a.DEFAULTS={delay:500,html:!1,disable:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},a.VALIDATORS={"native":function(t){var e=t[0];return e.checkValidity?e.checkValidity():!0},match:function(e){var a=e.data("match");return!e.val()||e.val()===t(a).val()},minlength:function(t){var e=t.data("minlength");return!t.val()||t.val().length>=e}},a.prototype.validateInput=function(e){var a=t(e.target),r=a.data("bs.validator.errors");if(a.is('[type="radio"]')&&(a=this.$element.find('input[name="'+a.attr("name")+'"]')),this.$element.trigger(e=t.Event("validate.bs.validator",{relatedTarget:a[0]})),!e.isDefaultPrevented()){var i=this;this.runValidators(a).done(function(o){a.data("bs.validator.errors",o),o.length?i.showErrors(a):i.clearErrors(a),r&&o.toString()===r.toString()||(e=o.length?t.Event("invalid.bs.validator",{relatedTarget:a[0],detail:o}):t.Event("valid.bs.validator",{relatedTarget:a[0],detail:r}),i.$element.trigger(e)),i.toggleSubmit(),i.$element.trigger(t.Event("validated.bs.validator",{relatedTarget:a[0]}))})}},a.prototype.runValidators=function(e){function r(t){return e.data(t+"-error")||e.data("error")||"native"==t&&e[0].validationMessage||n.errors[t]}var i=[],o=t.Deferred(),n=this.options;return e.data("bs.validator.deferred")&&e.data("bs.validator.deferred").reject(),e.data("bs.validator.deferred",o),t.each(a.VALIDATORS,t.proxy(function(t,a){if((e.data(t)||"native"==t)&&!a.call(this,e)){var o=r(t);!~i.indexOf(o)&&i.push(o)}},this)),!i.length&&e.val()&&e.data("remote")?this.defer(e,function(){var a={};a[e.attr("name")]=e.val(),t.get(e.data("remote"),a).fail(function(t,e,a){i.push(r("remote")||a)}).always(function(){o.resolve(i)})}):o.resolve(i),o.promise()},a.prototype.validate=function(){var t=this.options.delay;return this.options.delay=0,this.$element.find(a.INPUT_SELECTOR).trigger("input.bs.validator"),this.options.delay=t,this},a.prototype.showErrors=function(e){var a=this.options.html?"html":"text";this.defer(e,function(){var r=e.closest(".form-group"),i=r.find(".help-block.with-errors"),o=r.find(".form-control-feedback"),n=e.data("bs.validator.errors");n.length&&(n=t("<ul/>").addClass("list-unstyled").append(t.map(n,function(e){return t("<li/>")[a](e)})),void 0===i.data("bs.validator.originalContent")&&i.data("bs.validator.originalContent",i.html()),i.empty().append(n),r.addClass("has-error"),o.length&&o.removeClass(this.options.feedback.success)&&o.addClass(this.options.feedback.error)&&r.removeClass("has-success"))})},a.prototype.clearErrors=function(t){var e=t.closest(".form-group"),a=e.find(".help-block.with-errors"),r=e.find(".form-control-feedback");a.html(a.data("bs.validator.originalContent")),e.removeClass("has-error"),r.length&&r.removeClass(this.options.feedback.error)&&r.addClass(this.options.feedback.success)&&e.addClass("has-success")},a.prototype.hasErrors=function(){function e(){return!!(t(this).data("bs.validator.errors")||[]).length}return!!this.$element.find(a.INPUT_SELECTOR).filter(e).length},a.prototype.isIncomplete=function(){function e(){return"checkbox"===this.type?!this.checked:"radio"===this.type?!t('[name="'+this.name+'"]:checked').length:""===t.trim(this.value)}return!!this.$element.find(a.INPUT_SELECTOR).filter("[required]").filter(e).length},a.prototype.onSubmit=function(t){this.validate(),(this.isIncomplete()||this.hasErrors())&&t.preventDefault()},a.prototype.toggleSubmit=function(){if(this.options.disable){var e=t('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));e.toggleClass("disabled",this.isIncomplete()||this.hasErrors())}},a.prototype.defer=function(e,a){return a=t.proxy(a,this),this.options.delay?(window.clearTimeout(e.data("bs.validator.timeout")),void e.data("bs.validator.timeout",window.setTimeout(a,this.options.delay))):a()},a.prototype.destroy=function(){return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$element.find(a.INPUT_SELECTOR).off(".bs.validator").removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var e=t(this),a=e.data("bs.validator.timeout");window.clearTimeout(a)&&e.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var e=t(this),a=e.data("bs.validator.originalContent");e.removeData("bs.validator.originalContent").html(a)}),this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"),this.$element.find(".has-error").removeClass("has-error"),this};var r=t.fn.validator;t.fn.validator=e,t.fn.validator.Constructor=a,t.fn.validator.noConflict=function(){return t.fn.validator=r,this},t(window).on("load",function(){t('form[data-toggle="validator"]').each(function(){var a=t(this);e.call(a,a.data())})})}(jQuery);
/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d.call(c,a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback.call(this):!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)},a.buttons.confirm.callback=function(){return a.callback.call(this,!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback.call(this,c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!b.isArray(k))throw new Error("Please pass an array of input options");if(!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),a.maxlength&&h.attr("maxlength",a.maxlength),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var d=b(n.dialog),f=d.find(".modal-dialog"),i=d.find(".modal-body"),j=a.buttons,k="",l={onEscape:a.onEscape};if(b.fn.modal===c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(g(j,function(a,b){k+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",l[a]=b.callback}),i.find(".bootbox-body").html(a.message),a.animate===!0&&d.addClass("fade"),a.className&&d.addClass(a.className),"large"===a.size?f.addClass("modal-lg"):"small"===a.size&&f.addClass("modal-sm"),a.title&&i.before(n.header),a.closeButton){var m=b(n.closeButton);a.title?d.find(".modal-header").prepend(m):m.css("margin-top","-10px").prependTo(i)}return a.title&&d.find(".modal-title").html(a.title),k.length&&(i.after(n.footer),d.find(".modal-footer").html(k)),d.on("hidden.bs.modal",function(a){a.target===this&&d.remove()}),d.on("shown.bs.modal",function(){d.find(".btn-primary:first").focus()}),"static"!==a.backdrop&&d.on("click.dismiss.bs.modal",function(a){d.children(".modal-backdrop").length&&(a.currentTarget=d.children(".modal-backdrop").get(0)),a.target===a.currentTarget&&d.trigger("escape.close.bb")}),d.on("escape.close.bb",function(a){l.onEscape&&e(a,d,l.onEscape)}),d.on("click",".modal-footer button",function(a){var c=b(this).data("bb-handler");e(a,d,l[c])}),d.on("click",".bootbox-close-button",function(a){e(a,d,l.onEscape)}),d.on("keyup",function(a){27===a.which&&d.trigger("escape.close.bb")}),b(a.container).append(d),d.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1}),a.show&&d.modal("show"),d},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return p.addLocale=function(a,c){return b.each(["OK","CANCEL","CONFIRM"],function(a,b){if(!c[b])throw new Error("Please supply a translation for '"+b+"'")}),q[a]={OK:c.OK,CANCEL:c.CANCEL,CONFIRM:c.CONFIRM},p},p.removeLocale=function(a){return delete q[a],p},p.setLocale=function(a){return p.setDefaults("locale",a)},p.init=function(c){return a(c||b)},p});
/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function(factory){
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){

    function UTCDate(){
        return new Date(Date.UTC.apply(Date, arguments));
    }
    function UTCToday(){
        var today = new Date();
        return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
    }
    function isUTCEquals(date1, date2) {
        return (
            date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDate() === date2.getUTCDate()
        );
    }
    function alias(method){
        return function(){
            return this[method].apply(this, arguments);
        };
    }
    function isValidDate(d) {
        return d && !isNaN(d.getTime());
    }

    var DateArray = (function(){
        var extras = {
            get: function(i){
                return this.slice(i)[0];
            },
            contains: function(d){
                // Array.indexOf is not cross-browser;
                // $.inArray doesn't work with Dates
                var val = d && d.valueOf();
                for (var i=0, l=this.length; i < l; i++)
                    if (this[i].valueOf() === val)
                        return i;
                return -1;
            },
            remove: function(i){
                this.splice(i,1);
            },
            replace: function(new_array){
                if (!new_array)
                    return;
                if (!$.isArray(new_array))
                    new_array = [new_array];
                this.clear();
                this.push.apply(this, new_array);
            },
            clear: function(){
                this.length = 0;
            },
            copy: function(){
                var a = new DateArray();
                a.replace(this);
                return a;
            }
        };

        return function(){
            var a = [];
            a.push.apply(a, arguments);
            $.extend(a, extras);
            return a;
        };
    })();


    // Picker object

    var Datepicker = function(element, options){
        this._process_options(options);

        this.dates = new DateArray();
        this.viewDate = this.o.defaultViewDate;
        this.focusDate = null;

        this.element = $(element);
        this.isInline = false;
        this.isInput = this.element.is('input');
        this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
        this.hasInput = this.component && this.element.find('input').length;
        if (this.component && this.component.length === 0)
            this.component = false;

        this.picker = $(DPGlobal.template);
        this._buildEvents();
        this._attachEvents();

        if (this.isInline){
            this.picker.addClass('datepicker-inline').appendTo(this.element);
        }
        else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }

        if (this.o.rtl){
            this.picker.addClass('datepicker-rtl');
        }

        this.viewMode = this.o.startView;

        if (this.o.calendarWeeks)
            this.picker.find('tfoot .today, tfoot .clear')
                        .attr('colspan', function(i, val){
                            return parseInt(val) + 1;
                        });

        this._allow_update = false;

        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
        this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
        this.setDatesDisabled(this.o.datesDisabled);

        this.fillDow();
        this.fillMonths();

        this._allow_update = true;

        this.update();
        this.showMode();

        if (this.isInline){
            this.show();
        }
    };

    Datepicker.prototype = {
        constructor: Datepicker,

        _process_options: function(opts){
            // Store raw options for reference
            this._o = $.extend({}, this._o, opts);
            // Processed options
            var o = this.o = $.extend({}, this._o);

            // Check if "de-DE" style date is available, if not language should
            // fallback to 2 letter code eg "de"
            var lang = o.language;
            if (!dates[lang]){
                lang = lang.split('-')[0];
                if (!dates[lang])
                    lang = defaults.language;
            }
            o.language = lang;

            switch (o.startView){
                case 2:
                case 'decade':
                    o.startView = 2;
                    break;
                case 1:
                case 'year':
                    o.startView = 1;
                    break;
                default:
                    o.startView = 0;
            }

            switch (o.minViewMode){
                case 1:
                case 'months':
                    o.minViewMode = 1;
                    break;
                case 2:
                case 'years':
                    o.minViewMode = 2;
                    break;
                default:
                    o.minViewMode = 0;
            }

            switch (o.maxViewMode) {
                case 0:
                case 'days':
                    o.maxViewMode = 0;
                    break;
                case 1:
                case 'months':
                    o.maxViewMode = 1;
                    break;
                default:
                    o.maxViewMode = 2;
            }

            o.startView = Math.min(o.startView, o.maxViewMode);
            o.startView = Math.max(o.startView, o.minViewMode);

            // true, false, or Number > 0
            if (o.multidate !== true){
                o.multidate = Number(o.multidate) || false;
                if (o.multidate !== false)
                    o.multidate = Math.max(0, o.multidate);
            }
            o.multidateSeparator = String(o.multidateSeparator);

            o.weekStart %= 7;
            o.weekEnd = ((o.weekStart + 6) % 7);

            var format = DPGlobal.parseFormat(o.format);
            if (o.startDate !== -Infinity){
                if (!!o.startDate){
                    if (o.startDate instanceof Date)
                        o.startDate = this._local_to_utc(this._zero_time(o.startDate));
                    else
                        o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
                }
                else {
                    o.startDate = -Infinity;
                }
            }
            if (o.endDate !== Infinity){
                if (!!o.endDate){
                    if (o.endDate instanceof Date)
                        o.endDate = this._local_to_utc(this._zero_time(o.endDate));
                    else
                        o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
                }
                else {
                    o.endDate = Infinity;
                }
            }

            o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
            if (!$.isArray(o.daysOfWeekDisabled))
                o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
            o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
                return parseInt(d, 10);
            });

            o.daysOfWeekHighlighted = o.daysOfWeekHighlighted||[];
            if (!$.isArray(o.daysOfWeekHighlighted))
                o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
            o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function(d){
                return parseInt(d, 10);
            });

            o.datesDisabled = o.datesDisabled||[];
            if (!$.isArray(o.datesDisabled)) {
                var datesDisabled = [];
                datesDisabled.push(DPGlobal.parseDate(o.datesDisabled, format, o.language));
                o.datesDisabled = datesDisabled;
            }
            o.datesDisabled = $.map(o.datesDisabled,function(d){
                return DPGlobal.parseDate(d, format, o.language);
            });

            var plc = String(o.orientation).toLowerCase().split(/\s+/g),
                _plc = o.orientation.toLowerCase();
            plc = $.grep(plc, function(word){
                return /^auto|left|right|top|bottom$/.test(word);
            });
            o.orientation = {x: 'auto', y: 'auto'};
            if (!_plc || _plc === 'auto')
                ; // no action
            else if (plc.length === 1){
                switch (plc[0]){
                    case 'top':
                    case 'bottom':
                        o.orientation.y = plc[0];
                        break;
                    case 'left':
                    case 'right':
                        o.orientation.x = plc[0];
                        break;
                }
            }
            else {
                _plc = $.grep(plc, function(word){
                    return /^left|right$/.test(word);
                });
                o.orientation.x = _plc[0] || 'auto';

                _plc = $.grep(plc, function(word){
                    return /^top|bottom$/.test(word);
                });
                o.orientation.y = _plc[0] || 'auto';
            }
            if (o.defaultViewDate) {
                var year = o.defaultViewDate.year || new Date().getFullYear();
                var month = o.defaultViewDate.month || 0;
                var day = o.defaultViewDate.day || 1;
                o.defaultViewDate = UTCDate(year, month, day);
            } else {
                o.defaultViewDate = UTCToday();
            }
            o.showOnFocus = o.showOnFocus !== undefined ? o.showOnFocus : true;
            o.zIndexOffset = o.zIndexOffset !== undefined ? o.zIndexOffset : 10;
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(evs){
            for (var i=0, el, ch, ev; i < evs.length; i++){
                el = evs[i][0];
                if (evs[i].length === 2){
                    ch = undefined;
                    ev = evs[i][1];
                }
                else if (evs[i].length === 3){
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.on(ev, ch);
            }
        },
        _unapplyEvents: function(evs){
            for (var i=0, el, ev, ch; i < evs.length; i++){
                el = evs[i][0];
                if (evs[i].length === 2){
                    ch = undefined;
                    ev = evs[i][1];
                }
                else if (evs[i].length === 3){
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.off(ev, ch);
            }
        },
        _buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            else if (this.component && this.hasInput) { // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.element.find('input'), events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
            else if (this.element.is('div')){  // inline datepicker
                this.isInline = true;
            }
            else {
                this._events = [
                    [this.element, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
            this._events.push(
                // Component: listen for blur on element descendants
                [this.element, '*', {
                    blur: $.proxy(function(e){
                        this._focused_from = e.target;
                    }, this)
                }],
                // Input: listen for blur on element
                [this.element, {
                    blur: $.proxy(function(e){
                        this._focused_from = e.target;
                    }, this)
                }]
            );

            if (this.o.immediateUpdates) {
                // Trigger input updates immediately on changed year/month
                this._events.push([this.element, {
                    'changeYear changeMonth': $.proxy(function(e){
                        this.update(e.date);
                    }, this)
                }]);
            }

            this._secondaryEvents = [
                [this.picker, {
                    click: $.proxy(this.click, this)
                }],
                [$(window), {
                    resize: $.proxy(this.place, this)
                }],
                [$(document), {
                    mousedown: $.proxy(function(e){
                        // Clicked outside the datepicker, hide it
                        if (!(
                            this.element.is(e.target) ||
                            this.element.find(e.target).length ||
                            this.picker.is(e.target) ||
                            this.picker.find(e.target).length ||
                            this.picker.hasClass('datepicker-inline')
                        )){
                            this.hide();
                        }
                    }, this)
                }]
            ];
        },
        _attachEvents: function(){
            this._detachEvents();
            this._applyEvents(this._events);
        },
        _detachEvents: function(){
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function(){
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function(){
            this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function(event, altdate){
            var date = altdate || this.dates.get(-1),
                local_date = this._utc_to_local(date);

            this.element.trigger({
                type: event,
                date: local_date,
                dates: $.map(this.dates, this._utc_to_local),
                format: $.proxy(function(ix, format){
                    if (arguments.length === 0){
                        ix = this.dates.length - 1;
                        format = this.o.format;
                    }
                    else if (typeof ix === 'string'){
                        format = ix;
                        ix = this.dates.length - 1;
                    }
                    format = format || this.o.format;
                    var date = this.dates.get(ix);
                    return DPGlobal.formatDate(date, format, this.o.language);
                }, this)
            });
        },

        show: function(){
            if (this.element.attr('readonly') && this.o.enableOnReadonly === false)
                return;
            if (!this.isInline)
                this.picker.appendTo(this.o.container);
            this.place();
            this.picker.show();
            this._attachSecondaryEvents();
            this._trigger('show');
            if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
                $(this.element).blur();
            }
            return this;
        },

        hide: function(){
            if (this.isInline)
                return this;
            if (!this.picker.is(':visible'))
                return this;
            this.focusDate = null;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.o.startView;
            this.showMode();

            if (
                this.o.forceParse &&
                (
                    this.isInput && this.element.val() ||
                    this.hasInput && this.element.find('input').val()
                )
            )
                this.setValue();
            this._trigger('hide');
            return this;
        },

        remove: function(){
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput){
                delete this.element.data().date;
            }
            return this;
        },

        paste: function(evt){
            var dateString;
            if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types
                && $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
                dateString = evt.originalEvent.clipboardData.getData('text/plain');
            }
            else if (window.clipboardData) {
                dateString = window.clipboardData.getData('Text');
            }
            else {
                return;
            }
            this.setDate(dateString);
            this.update();
            evt.preventDefault();
        },

        _utc_to_local: function(utc){
            return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
        },
        _local_to_utc: function(local){
            return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
        },
        _zero_time: function(local){
            return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
        },
        _zero_utc_time: function(utc){
            return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
        },

        getDates: function(){
            return $.map(this.dates, this._utc_to_local);
        },

        getUTCDates: function(){
            return $.map(this.dates, function(d){
                return new Date(d);
            });
        },

        getDate: function(){
            return this._utc_to_local(this.getUTCDate());
        },

        getUTCDate: function(){
            var selected_date = this.dates.get(-1);
            if (typeof selected_date !== 'undefined') {
                return new Date(selected_date);
            } else {
                return null;
            }
        },

        clearDates: function(){
            var element;
            if (this.isInput) {
                element = this.element;
            } else if (this.component) {
                element = this.element.find('input');
            }

            if (element) {
                element.val('');
            }

            this.update();
            this._trigger('changeDate');

            if (this.o.autoclose) {
                this.hide();
            }
        },
        setDates: function(){
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, args);
            this._trigger('changeDate');
            this.setValue();
            return this;
        },

        setUTCDates: function(){
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, $.map(args, this._utc_to_local));
            this._trigger('changeDate');
            this.setValue();
            return this;
        },

        setDate: alias('setDates'),
        setUTCDate: alias('setUTCDates'),

        setValue: function(){
            var formatted = this.getFormattedDate();
            if (!this.isInput){
                if (this.component){
                    this.element.find('input').val(formatted);
                }
            }
            else {
                this.element.val(formatted);
            }
            return this;
        },

        getFormattedDate: function(format){
            if (format === undefined)
                format = this.o.format;

            var lang = this.o.language;
            return $.map(this.dates, function(d){
                return DPGlobal.formatDate(d, format, lang);
            }).join(this.o.multidateSeparator);
        },

        setStartDate: function(startDate){
            this._process_options({startDate: startDate});
            this.update();
            this.updateNavArrows();
            return this;
        },

        setEndDate: function(endDate){
            this._process_options({endDate: endDate});
            this.update();
            this.updateNavArrows();
            return this;
        },

        setDaysOfWeekDisabled: function(daysOfWeekDisabled){
            this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
            this.update();
            this.updateNavArrows();
            return this;
        },

        setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
            this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
            this.update();
            return this;
        },

        setDatesDisabled: function(datesDisabled){
            this._process_options({datesDisabled: datesDisabled});
            this.update();
            this.updateNavArrows();
        },

        place: function(){
            if (this.isInline)
                return this;
            var calendarWidth = this.picker.outerWidth(),
                calendarHeight = this.picker.outerHeight(),
                visualPadding = 10,
                container = $(this.o.container),
                windowWidth = container.width(),
                scrollTop = container.scrollTop(),
                appendOffset = container.offset();

            var parentsZindex = [];
            this.element.parents().each(function(){
                var itemZIndex = $(this).css('z-index');
                if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
            });
            var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
            var offset = this.component ? this.component.parent().offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var left = offset.left - appendOffset.left,
                top = offset.top - appendOffset.top;

            this.picker.removeClass(
                'datepicker-orient-top datepicker-orient-bottom '+
                'datepicker-orient-right datepicker-orient-left'
            );

            if (this.o.orientation.x !== 'auto'){
                this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
                if (this.o.orientation.x === 'right')
                    left -= calendarWidth - width;
            }
            // auto x orientation is best-placement: if it crosses a window
            // edge, fudge it sideways
            else {
                if (offset.left < 0) {
                    // component is outside the window on the left side. Move it into visible range
                    this.picker.addClass('datepicker-orient-left');
                    left -= offset.left - visualPadding;
                } else if (left + calendarWidth > windowWidth) {
                    // the calendar passes the widow right edge. Align it to component right side
                    this.picker.addClass('datepicker-orient-right');
                    left = offset.left + width - calendarWidth;
                } else {
                    // Default to left
                    this.picker.addClass('datepicker-orient-left');
                }
            }

            // auto y orientation is best-situation: top or bottom, no fudging,
            // decision based on which shows more of the calendar
            var yorient = this.o.orientation.y,
                top_overflow;
            if (yorient === 'auto'){
                top_overflow = -scrollTop + top - calendarHeight;
                yorient = top_overflow < 0 ? 'bottom' : 'top';
            }

            this.picker.addClass('datepicker-orient-' + yorient);
            if (yorient === 'top')
                top -= calendarHeight + parseInt(this.picker.css('padding-top'));
            else
                top += height;

            if (this.o.rtl) {
                var right = windowWidth - (left + width);
                this.picker.css({
                    top: top,
                    right: right,
                    zIndex: zIndex
                });
            } else {
                this.picker.css({
                    top: top,
                    left: left,
                    zIndex: zIndex
                });
            }
            return this;
        },

        _allow_update: true,
        update: function(){
            if (!this._allow_update)
                return this;

            var oldDates = this.dates.copy(),
                dates = [],
                fromArgs = false;
            if (arguments.length){
                $.each(arguments, $.proxy(function(i, date){
                    if (date instanceof Date)
                        date = this._local_to_utc(date);
                    dates.push(date);
                }, this));
                fromArgs = true;
            }
            else {
                dates = this.isInput
                        ? this.element.val()
                        : this.element.data('date') || this.element.find('input').val();
                if (dates && this.o.multidate)
                    dates = dates.split(this.o.multidateSeparator);
                else
                    dates = [dates];
                delete this.element.data().date;
            }

            dates = $.map(dates, $.proxy(function(date){
                return DPGlobal.parseDate(date, this.o.format, this.o.language);
            }, this));
            dates = $.grep(dates, $.proxy(function(date){
                return (
                    date < this.o.startDate ||
                    date > this.o.endDate ||
                    !date
                );
            }, this), true);
            this.dates.replace(dates);

            if (this.dates.length)
                this.viewDate = new Date(this.dates.get(-1));
            else if (this.viewDate < this.o.startDate)
                this.viewDate = new Date(this.o.startDate);
            else if (this.viewDate > this.o.endDate)
                this.viewDate = new Date(this.o.endDate);
            else
                this.viewDate = this.o.defaultViewDate;

            if (fromArgs){
                // setting date by clicking
                this.setValue();
            }
            else if (dates.length){
                // setting date by typing
                if (String(oldDates) !== String(this.dates))
                    this._trigger('changeDate');
            }
            if (!this.dates.length && oldDates.length)
                this._trigger('clearDate');

            this.fill();
            this.element.change();
            return this;
        },

        fillDow: function(){
            var dowCnt = this.o.weekStart,
                html = '<tr>';
            if (this.o.calendarWeeks){
                this.picker.find('.datepicker-days .datepicker-switch')
                    .attr('colspan', function(i, val){
                        return parseInt(val) + 1;
                    });
                html += '<th class="cw">&#160;</th>';
            }
            while (dowCnt < this.o.weekStart + 7){
                html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
            }
            html += '</tr>';
            this.picker.find('.datepicker-days thead').append(html);
        },

        fillMonths: function(){
            var html = '',
            i = 0;
            while (i < 12){
                html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
            }
            this.picker.find('.datepicker-months td').html(html);
        },

        setRange: function(range){
            if (!range || !range.length)
                delete this.range;
            else
                this.range = $.map(range, function(d){
                    return d.valueOf();
                });
            this.fill();
        },

        getClassNames: function(date){
            var cls = [],
                year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                today = new Date();
            if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
                cls.push('old');
            }
            else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
                cls.push('new');
            }
            if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
                cls.push('focused');
            // Compare internal UTC date with local today, not UTC today
            if (this.o.todayHighlight &&
                date.getUTCFullYear() === today.getFullYear() &&
                date.getUTCMonth() === today.getMonth() &&
                date.getUTCDate() === today.getDate()){
                cls.push('today');
            }
            if (this.dates.contains(date) !== -1)
                cls.push('active');
            if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
                $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
                cls.push('disabled');
            }
            if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
                cls.push('highlighted');
            }
            if (this.o.datesDisabled.length > 0 &&
                $.grep(this.o.datesDisabled, function(d){
                    return isUTCEquals(date, d); }).length > 0) {
                cls.push('disabled', 'disabled-date');
            }

            if (this.range){
                if (date > this.range[0] && date < this.range[this.range.length-1]){
                    cls.push('range');
                }
                if ($.inArray(date.valueOf(), this.range) !== -1){
                    cls.push('selected');
                }
                if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
            }
            return cls;
        },

        fill: function(){
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                todaytxt = dates[this.o.language].today || dates['en'].today || '',
                cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
                titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
                tooltip;
            if (isNaN(year) || isNaN(month))
                return;
            this.picker.find('.datepicker-days thead .datepicker-switch')
                        .text(DPGlobal.formatDate(new UTCDate(year, month), titleFormat, this.o.language));
            this.picker.find('tfoot .today')
                        .text(todaytxt)
                        .toggle(this.o.todayBtn !== false);
            this.picker.find('tfoot .clear')
                        .text(cleartxt)
                        .toggle(this.o.clearBtn !== false);
            this.picker.find('thead .datepicker-title')
                        .text(this.o.title)
                        .toggle(this.o.title !== '');
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month-1, 28),
                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
            prevMonth.setUTCDate(day);
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
            var nextMonth = new Date(prevMonth);
            if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var clsName;
            while (prevMonth.valueOf() < nextMonth){
                if (prevMonth.getUTCDay() === this.o.weekStart){
                    html.push('<tr>');
                    if (this.o.calendarWeeks){
                        // ISO 8601: First week contains first thursday.
                        // ISO also states week starts on Monday, but we can be more abstract here.
                        var
                            // Start of current week: based on weekstart/current date
                            ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
                            // Thursday of this week
                            th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                            // First Thursday of year, year from thursday
                            yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
                            // Calendar week: ms between thursdays, div ms per day, div 7 days
                            calWeek =  (th - yth) / 864e5 / 7 + 1;
                        html.push('<td class="cw">'+ calWeek +'</td>');

                    }
                }
                clsName = this.getClassNames(prevMonth);
                clsName.push('day');

                if (this.o.beforeShowDay !== $.noop){
                    var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
                    if (before === undefined)
                        before = {};
                    else if (typeof(before) === 'boolean')
                        before = {enabled: before};
                    else if (typeof(before) === 'string')
                        before = {classes: before};
                    if (before.enabled === false)
                        clsName.push('disabled');
                    if (before.classes)
                        clsName = clsName.concat(before.classes.split(/\s+/));
                    if (before.tooltip)
                        tooltip = before.tooltip;
                }

                clsName = $.unique(clsName);
                html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
                tooltip = null;
                if (prevMonth.getUTCDay() === this.o.weekEnd){
                    html.push('</tr>');
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
            }
            this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

            var months = this.picker.find('.datepicker-months')
                        .find('.datepicker-switch')
                            .text(this.o.maxViewMode < 2 ? 'Months' : year)
                            .end()
                        .find('span').removeClass('active');

            $.each(this.dates, function(i, d){
                if (d.getUTCFullYear() === year)
                    months.eq(d.getUTCMonth()).addClass('active');
            });

            if (year < startYear || year > endYear){
                months.addClass('disabled');
            }
            if (year === startYear){
                months.slice(0, startMonth).addClass('disabled');
            }
            if (year === endYear){
                months.slice(endMonth+1).addClass('disabled');
            }

            if (this.o.beforeShowMonth !== $.noop){
                var that = this;
                $.each(months, function(i, month){
                    if (!$(month).hasClass('disabled')) {
                        var moDate = new Date(year, i, 1);
                        var before = that.o.beforeShowMonth(moDate);
                        if (before === false)
                            $(month).addClass('disabled');
                    }
                });
            }

            html = '';
            year = parseInt(year/10, 10) * 10;
            var yearCont = this.picker.find('.datepicker-years')
                                .find('.datepicker-switch')
                                    .text(year + '-' + (year + 9))
                                    .end()
                                .find('td');
            year -= 1;
            var years = $.map(this.dates, function(d){
                    return d.getUTCFullYear();
                }),
                classes;
            for (var i = -1; i < 11; i++){
                classes = ['year'];
                tooltip = null;

                if (i === -1)
                    classes.push('old');
                else if (i === 10)
                    classes.push('new');
                if ($.inArray(year, years) !== -1)
                    classes.push('active');
                if (year < startYear || year > endYear)
                    classes.push('disabled');

                if (this.o.beforeShowYear !== $.noop) {
                    var yrBefore = this.o.beforeShowYear(new Date(year, 0, 1));
                    if (yrBefore === undefined)
                        yrBefore = {};
                    else if (typeof(yrBefore) === 'boolean')
                        yrBefore = {enabled: yrBefore};
                    else if (typeof(yrBefore) === 'string')
                        yrBefore = {classes: yrBefore};
                    if (yrBefore.enabled === false)
                        classes.push('disabled');
                    if (yrBefore.classes)
                        classes = classes.concat(yrBefore.classes.split(/\s+/));
                    if (yrBefore.tooltip)
                        tooltip = yrBefore.tooltip;
                }

                html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>' + year + '</span>';
                year += 1;
            }
            yearCont.html(html);
        },

        updateNavArrows: function(){
            if (!this._allow_update)
                return;

            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth();
            switch (this.viewMode){
                case 0:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
                        this.picker.find('.prev').css({visibility: 'hidden'});
                    }
                    else {
                        this.picker.find('.prev').css({visibility: 'visible'});
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
                        this.picker.find('.next').css({visibility: 'hidden'});
                    }
                    else {
                        this.picker.find('.next').css({visibility: 'visible'});
                    }
                    break;
                case 1:
                case 2:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2){
                        this.picker.find('.prev').css({visibility: 'hidden'});
                    }
                    else {
                        this.picker.find('.prev').css({visibility: 'visible'});
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2){
                        this.picker.find('.next').css({visibility: 'hidden'});
                    }
                    else {
                        this.picker.find('.next').css({visibility: 'visible'});
                    }
                    break;
            }
        },

        click: function(e){
            e.preventDefault();
            e.stopPropagation();
            var target = $(e.target).closest('span, td, th'),
                year, month, day;
            if (target.length === 1){
                switch (target[0].nodeName.toLowerCase()){
                    case 'th':
                        switch (target[0].className){
                            case 'datepicker-switch':
                                this.showMode(1);
                                break;
                            case 'prev':
                            case 'next':
                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
                                switch (this.viewMode){
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, dir);
                                        this._trigger('changeMonth', this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, dir);
                                        if (this.viewMode === 1)
                                            this._trigger('changeYear', this.viewDate);
                                        break;
                                }
                                this.fill();
                                break;
                            case 'today':
                                var date = new Date();
                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

                                this.showMode(-2);
                                var which = this.o.todayBtn === 'linked' ? null : 'view';
                                this._setDate(date, which);
                                break;
                            case 'clear':
                                this.clearDates();
                                break;
                        }
                        break;
                    case 'span':
                        if (!target.hasClass('disabled')){
                            this.viewDate.setUTCDate(1);
                            if (target.hasClass('month')){
                                day = 1;
                                month = target.parent().find('span').index(target);
                                year = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(month);
                                this._trigger('changeMonth', this.viewDate);
                                if (this.o.minViewMode === 1){
                                    this._setDate(UTCDate(year, month, day));
                                    this.showMode();
                                } else {
                                    this.showMode(-1);
                                }
                            }
                            else {
                                day = 1;
                                month = 0;
                                year = parseInt(target.text(), 10)||0;
                                this.viewDate.setUTCFullYear(year);
                                this._trigger('changeYear', this.viewDate);
                                if (this.o.minViewMode === 2){
                                    this._setDate(UTCDate(year, month, day));
                                }
                                this.showMode(-1);
                            }
                            this.fill();
                        }
                        break;
                    case 'td':
                        if (target.hasClass('day') && !target.hasClass('disabled')){
                            day = parseInt(target.text(), 10)||1;
                            year = this.viewDate.getUTCFullYear();
                            month = this.viewDate.getUTCMonth();
                            if (target.hasClass('old')){
                                if (month === 0){
                                    month = 11;
                                    year -= 1;
                                }
                                else {
                                    month -= 1;
                                }
                            }
                            else if (target.hasClass('new')){
                                if (month === 11){
                                    month = 0;
                                    year += 1;
                                }
                                else {
                                    month += 1;
                                }
                            }
                            this._setDate(UTCDate(year, month, day));
                        }
                        break;
                }
            }
            if (this.picker.is(':visible') && this._focused_from){
                $(this._focused_from).focus();
            }
            delete this._focused_from;
        },

        _toggle_multidate: function(date){
            var ix = this.dates.contains(date);
            if (!date){
                this.dates.clear();
            }

            if (ix !== -1){
                if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
                    this.dates.remove(ix);
                }
            } else if (this.o.multidate === false) {
                this.dates.clear();
                this.dates.push(date);
            }
            else {
                this.dates.push(date);
            }

            if (typeof this.o.multidate === 'number')
                while (this.dates.length > this.o.multidate)
                    this.dates.remove(0);
        },

        _setDate: function(date, which){
            if (!which || which === 'date')
                this._toggle_multidate(date && new Date(date));
            if (!which || which  === 'view')
                this.viewDate = date && new Date(date);

            this.fill();
            this.setValue();
            if (!which || which  !== 'view') {
                this._trigger('changeDate');
            }
            var element;
            if (this.isInput){
                element = this.element;
            }
            else if (this.component){
                element = this.element.find('input');
            }
            if (element){
                element.change();
            }
            if (this.o.autoclose && (!which || which === 'date')){
                this.hide();
            }
        },

        moveMonth: function(date, dir){
            if (!isValidDate(date))
                return this.o.defaultViewDate;
            if (!dir)
                return date;
            var new_date = new Date(date.valueOf()),
                day = new_date.getUTCDate(),
                month = new_date.getUTCMonth(),
                mag = Math.abs(dir),
                new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag === 1){
                test = dir === -1
                    // If going back one month, make sure month is not current month
                    // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                    ? function(){
                        return new_date.getUTCMonth() === month;
                    }
                    // If going forward one month, make sure month is as expected
                    // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                    : function(){
                        return new_date.getUTCMonth() !== new_month;
                    };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                if (new_month < 0 || new_month > 11)
                    new_month = (new_month + 12) % 12;
            }
            else {
                // For magnitudes >1, move one month at a time...
                for (var i=0; i < mag; i++)
                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                    new_date = this.moveMonth(new_date, dir);
                // ...then reset the day, keeping it in the new month
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function(){
                    return new_month !== new_date.getUTCMonth();
                };
            }
            // Common date-resetting loop -- if date is beyond end of month, make it
            // end of month
            while (test()){
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month);
            }
            return new_date;
        },

        moveYear: function(date, dir){
            return this.moveMonth(date, dir*12);
        },

        dateWithinRange: function(date){
            return date >= this.o.startDate && date <= this.o.endDate;
        },

        keydown: function(e){
            if (!this.picker.is(':visible')){
                if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
                    this.show();
                    e.stopPropagation();
        }
                return;
            }
            var dateChanged = false,
                dir, newDate, newViewDate,
                focusDate = this.focusDate || this.viewDate;
            switch (e.keyCode){
                case 27: // escape
                    if (this.focusDate){
                        this.focusDate = null;
                        this.viewDate = this.dates.get(-1) || this.viewDate;
                        this.fill();
                    }
                    else
                        this.hide();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 37: // left
                case 39: // right
                    if (!this.o.keyboardNavigation)
                        break;
                    dir = e.keyCode === 37 ? -1 : 1;
                    if (e.ctrlKey){
                        newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveYear(focusDate, dir);
                        this._trigger('changeYear', this.viewDate);
                    }
                    else if (e.shiftKey){
                        newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveMonth(focusDate, dir);
                        this._trigger('changeMonth', this.viewDate);
                    }
                    else {
                        newDate = new Date(this.dates.get(-1) || UTCToday());
                        newDate.setUTCDate(newDate.getUTCDate() + dir);
                        newViewDate = new Date(focusDate);
                        newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
                    }
                    if (this.dateWithinRange(newViewDate)){
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault();
                    }
                    break;
                case 38: // up
                case 40: // down
                    if (!this.o.keyboardNavigation)
                        break;
                    dir = e.keyCode === 38 ? -1 : 1;
                    if (e.ctrlKey){
                        newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveYear(focusDate, dir);
                        this._trigger('changeYear', this.viewDate);
                    }
                    else if (e.shiftKey){
                        newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveMonth(focusDate, dir);
                        this._trigger('changeMonth', this.viewDate);
                    }
                    else {
                        newDate = new Date(this.dates.get(-1) || UTCToday());
                        newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
                        newViewDate = new Date(focusDate);
                        newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
                    }
                    if (this.dateWithinRange(newViewDate)){
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault();
                    }
                    break;
                case 32: // spacebar
                    // Spacebar is used in manually typing dates in some formats.
                    // As such, its behavior should not be hijacked.
                    break;
                case 13: // enter
                    if (!this.o.forceParse) {
                            break;
                    }
                    focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
                    if (this.o.keyboardNavigation) {
                        this._toggle_multidate(focusDate);
                        dateChanged = true;
                    }
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    if (this.picker.is(':visible')){
                        e.preventDefault();
                        if (typeof e.stopPropagation === 'function') {
                            e.stopPropagation(); // All modern browsers, IE9+
                        } else {
                            e.cancelBubble = true; // IE6,7,8 ignore "stopPropagation"
                        }
                        if (this.o.autoclose)
                            this.hide();
                    }
                    break;
                case 9: // tab
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide();
                    break;
            }
            if (dateChanged){
                if (this.dates.length)
                    this._trigger('changeDate');
                else
                    this._trigger('clearDate');
                var element;
                if (this.isInput){
                    element = this.element;
                }
                else if (this.component){
                    element = this.element.find('input');
                }
                if (element){
                    element.change();
                }
            }
        },

        showMode: function(dir){
            if (dir){
                this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
            }
            this.picker
                .children('div')
                .hide()
                .filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
                    .show();
            this.updateNavArrows();
        }
    };

    var DateRangePicker = function(element, options){
        this.element = $(element);
        this.inputs = $.map(options.inputs, function(i){
            return i.jquery ? i[0] : i;
        });
        delete options.inputs;

        datepickerPlugin.call($(this.inputs), options)
            .on('changeDate', $.proxy(this.dateUpdated, this));

        this.pickers = $.map(this.inputs, function(i){
            return $(i).data('datepicker');
        });
        this.updateDates();
    };
    DateRangePicker.prototype = {
        updateDates: function(){
            this.dates = $.map(this.pickers, function(i){
                return i.getUTCDate();
            });
            this.updateRanges();
        },
        updateRanges: function(){
            var range = $.map(this.dates, function(d){
                return d.valueOf();
            });
            $.each(this.pickers, function(i, p){
                p.setRange(range);
            });
        },
        dateUpdated: function(e){
            // `this.updating` is a workaround for preventing infinite recursion
            // between `changeDate` triggering and `setUTCDate` calling.  Until
            // there is a better mechanism.
            if (this.updating)
                return;
            this.updating = true;

            var dp = $(e.target).data('datepicker');

            if (typeof(dp) === "undefined") {
                return;
            }

            var new_date = dp.getUTCDate(),
                i = $.inArray(e.target, this.inputs),
                j = i - 1,
                k = i + 1,
                l = this.inputs.length;
            if (i === -1)
                return;

            $.each(this.pickers, function(i, p){
                if (!p.getUTCDate())
                    p.setUTCDate(new_date);
            });

            if (new_date < this.dates[j]){
                // Date being moved earlier/left
                while (j >= 0 && new_date < this.dates[j]){
                    this.pickers[j--].setUTCDate(new_date);
                }
            }
            else if (new_date > this.dates[k]){
                // Date being moved later/right
                while (k < l && new_date > this.dates[k]){
                    this.pickers[k++].setUTCDate(new_date);
                }
            }
            this.updateDates();

            delete this.updating;
        },
        remove: function(){
            $.map(this.pickers, function(p){ p.remove(); });
            delete this.element.data().datepicker;
        }
    };

    function opts_from_el(el, prefix){
        // Derive options from element data-attrs
        var data = $(el).data(),
            out = {}, inkey,
            replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
        prefix = new RegExp('^' + prefix.toLowerCase());
        function re_lower(_,a){
            return a.toLowerCase();
        }
        for (var key in data)
            if (prefix.test(key)){
                inkey = key.replace(replace, re_lower);
                out[inkey] = data[key];
            }
        return out;
    }

    function opts_from_locale(lang){
        // Derive options from locale plugins
        var out = {};
        // Check if "de-DE" style date is available, if not language should
        // fallback to 2 letter code eg "de"
        if (!dates[lang]){
            lang = lang.split('-')[0];
            if (!dates[lang])
                return;
        }
        var d = dates[lang];
        $.each(locale_opts, function(i,k){
            if (k in d)
                out[k] = d[k];
        });
        return out;
    }

    var old = $.fn.datepicker;
    var datepickerPlugin = function(option){
        var args = Array.apply(null, arguments);
        args.shift();
        var internal_return;
        this.each(function(){
            var $this = $(this),
                data = $this.data('datepicker'),
                options = typeof option === 'object' && option;
            if (!data){
                var elopts = opts_from_el(this, 'date'),
                    // Preliminary otions
                    xopts = $.extend({}, defaults, elopts, options),
                    locopts = opts_from_locale(xopts.language),
                    // Options priority: js args, data-attrs, locales, defaults
                    opts = $.extend({}, defaults, locopts, elopts, options);
                if ($this.hasClass('input-daterange') || opts.inputs){
                    var ropts = {
                        inputs: opts.inputs || $this.find('input').toArray()
                    };
                    $this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
                }
                else {
                    $this.data('datepicker', (data = new Datepicker(this, opts)));
                }
            }
            if (typeof option === 'string' && typeof data[option] === 'function'){
                internal_return = data[option].apply(data, args);
            }
        });

        if (
            internal_return === undefined ||
            internal_return instanceof Datepicker ||
            internal_return instanceof DateRangePicker
        )
            return this;

        if (this.length > 1)
            throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
        else
            return internal_return;
    };
    $.fn.datepicker = datepickerPlugin;

    var defaults = $.fn.datepicker.defaults = {
        autoclose: false,
        beforeShowDay: $.noop,
        beforeShowMonth: $.noop,
        beforeShowYear: $.noop,
        calendarWeeks: false,
        clearBtn: false,
        toggleActive: false,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: 'mm/dd/yyyy',
        keyboardNavigation: true,
        language: 'en',
        minViewMode: 0,
        maxViewMode: 2,
        multidate: false,
        multidateSeparator: ',',
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0,
        disableTouchKeyboard: false,
        enableOnReadonly: true,
        container: 'body',
        immediateUpdates: false,
        title: ''
    };
    var locale_opts = $.fn.datepicker.locale_opts = [
        'format',
        'rtl',
        'weekStart'
    ];
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    };

    var DPGlobal = {
        modes: [
            {
                clsName: 'days',
                navFnc: 'Month',
                navStep: 1
            },
            {
                clsName: 'months',
                navFnc: 'FullYear',
                navStep: 1
            },
            {
                clsName: 'years',
                navFnc: 'FullYear',
                navStep: 10
        }],
        isLeapYear: function(year){
            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
        },
        getDaysInMonth: function(year, month){
            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(format){
            if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
            // so it's a bad format delimiter, anyway
            var separators = format.replace(this.validParts, '\0').split('\0'),
                parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0){
                throw new Error("Invalid date format.");
            }
            return {separators: separators, parts: parts};
        },
        parseDate: function(date, format, language){
            if (!date)
                return undefined;
            if (date instanceof Date)
                return date;
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            if (format.toValue)
                return format.toValue(date, format, language);
            var part_re = /([\-+]\d+)([dmwy])/,
                parts = date.match(/([\-+]\d+)([dmwy])/g),
                part, dir, i;
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
                date = new Date();
                for (i=0; i < parts.length; i++){
                    part = part_re.exec(parts[i]);
                    dir = parseInt(part[1]);
                    switch (part[2]){
                        case 'd':
                            date.setUTCDate(date.getUTCDate() + dir);
                            break;
                        case 'm':
                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                            break;
                        case 'w':
                            date.setUTCDate(date.getUTCDate() + dir * 7);
                            break;
                        case 'y':
                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                            break;
                    }
                }
                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
            }
            parts = date && date.match(this.nonpunctuation) || [];
            date = new Date();
            var parsed = {},
                setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                setters_map = {
                    yyyy: function(d,v){
                        return d.setUTCFullYear(v);
                    },
                    yy: function(d,v){
                        return d.setUTCFullYear(2000+v);
                    },
                    m: function(d,v){
                        if (isNaN(d))
                            return d;
                        v -= 1;
                        while (v < 0) v += 12;
                        v %= 12;
                        d.setUTCMonth(v);
                        while (d.getUTCMonth() !== v)
                            d.setUTCDate(d.getUTCDate()-1);
                        return d;
                    },
                    d: function(d,v){
                        return d.setUTCDate(v);
                    }
                },
                val, filtered;
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            var fparts = format.parts.slice();
            // Remove noop parts
            if (parts.length !== fparts.length){
                fparts = $(fparts).filter(function(i,p){
                    return $.inArray(p, setters_order) !== -1;
                }).toArray();
            }
            // Process remainder
            function match_part(){
                var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                return m.toLowerCase() === p.toLowerCase();
            }
            if (parts.length === fparts.length){
                var cnt;
                for (i=0, cnt = fparts.length; i < cnt; i++){
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)){
                        switch (part){
                            case 'MM':
                                filtered = $(dates[language].months).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break;
                        }
                    }
                    parsed[part] = val;
                }
                var _date, s;
                for (i=0; i < setters_order.length; i++){
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])){
                        _date = new Date(date);
                        setters_map[s](_date, parsed[s]);
                        if (!isNaN(_date))
                            date = _date;
                    }
                }
            }
            return date;
        },
        formatDate: function(date, format, language){
            if (!date)
                return '';
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            date = [];
            var seps = $.extend([], format.separators);
            for (var i=0, cnt = format.parts.length; i <= cnt; i++){
                if (seps.length)
                    date.push(seps.shift());
                date.push(val[format.parts[i]]);
            }
            return date.join('');
        },
        headTemplate: '<thead>'+
                          '<tr>'+
                            '<th colspan="7" class="datepicker-title"></th>'+
                          '</tr>'+
                            '<tr>'+
                                '<th class="prev">&#171;</th>'+
                                '<th colspan="5" class="datepicker-switch"></th>'+
                                '<th class="next">&#187;</th>'+
                            '</tr>'+
                        '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot>'+
                            '<tr>'+
                                '<th colspan="7" class="today"></th>'+
                            '</tr>'+
                            '<tr>'+
                                '<th colspan="7" class="clear"></th>'+
                            '</tr>'+
                        '</tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">'+
                            '<div class="datepicker-days">'+
                                '<table class=" table-condensed">'+
                                    DPGlobal.headTemplate+
                                    '<tbody></tbody>'+
                                    DPGlobal.footTemplate+
                                '</table>'+
                            '</div>'+
                            '<div class="datepicker-months">'+
                                '<table class="table-condensed">'+
                                    DPGlobal.headTemplate+
                                    DPGlobal.contTemplate+
                                    DPGlobal.footTemplate+
                                '</table>'+
                            '</div>'+
                            '<div class="datepicker-years">'+
                                '<table class="table-condensed">'+
                                    DPGlobal.headTemplate+
                                    DPGlobal.contTemplate+
                                    DPGlobal.footTemplate+
                                '</table>'+
                            '</div>'+
                        '</div>';

    $.fn.datepicker.DPGlobal = DPGlobal;


    /* DATEPICKER NO CONFLICT
    * =================== */

    $.fn.datepicker.noConflict = function(){
        $.fn.datepicker = old;
        return this;
    };

    /* DATEPICKER VERSION
     * =================== */
    $.fn.datepicker.version = '1.6.0-dev';

    /* DATEPICKER DATA-API
    * ================== */

    $(document).on(
        'focus.datepicker.data-api click.datepicker.data-api',
        '[data-provide="datepicker"]',
        function(e){
            var $this = $(this);
            if ($this.data('datepicker'))
                return;
            e.preventDefault();
            // component click requires us to explicitly show it
            datepickerPlugin.call($this, 'show');
        }
    );
    $(function(){
        datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
    });

}));
/*! KineticJS v5.0.1 2014-01-21 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
var Kinetic={};!function(){Kinetic={version:"5.0.1",stages:[],idCounter:0,ids:{},names:{},shapes:{},listenClickTap:!1,inDblClickWindow:!1,enableTrace:!1,traceArrMax:100,dblClickWindow:400,pixelRatio:void 0,UA:function(){var a=navigator.userAgent.toLowerCase(),b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}}(),Filters:{},Node:function(a){this._init(a)},Shape:function(a){this.__init(a)},Container:function(a){this.__init(a)},Stage:function(a){this.___init(a)},Layer:function(a){this.___init(a)},Group:function(a){this.___init(a)},isDragging:function(){var a=Kinetic.DD;return a?a.isDragging:!1},isDragReady:function(){var a=Kinetic.DD;return a?!!a.node:!1},_addId:function(a,b){void 0!==b&&(this.ids[b]=a)},_removeId:function(a){void 0!==a&&delete this.ids[a]},_addName:function(a,b){void 0!==b&&(void 0===this.names[b]&&(this.names[b]=[]),this.names[b].push(a))},_removeName:function(a,b){if(void 0!==a){var c=this.names[a];if(void 0!==c){for(var d=0;d<c.length;d++){var e=c[d];e._id===b&&c.splice(d,1)}0===c.length&&delete this.names[a]}}}}}(),function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.returnExports=b()}(this,function(){return Kinetic}),function(){Kinetic.Collection=function(){var a=[].slice.call(arguments),b=a.length,c=0;for(this.length=b;b>c;c++)this[c]=a[c];return this},Kinetic.Collection.prototype=[],Kinetic.Collection.prototype.each=function(a){for(var b=0;b<this.length;b++)a(this[b],b)},Kinetic.Collection.prototype.toArray=function(){var a,b=[],c=this.length;for(a=0;c>a;a++)b.push(this[a]);return b},Kinetic.Collection.toCollection=function(a){var b,c=new Kinetic.Collection,d=a.length;for(b=0;d>b;b++)c.push(a[b]);return c},Kinetic.Collection.mapMethods=function(a){var b,c=a.prototype;for(b in c)!function(a){Kinetic.Collection.prototype[a]=function(){var b,c=this.length;for(args=[].slice.call(arguments),b=0;c>b;b++)this[b][a].apply(this[b],args);return this}}(b)},Kinetic.Transform=function(){this.m=[1,0,0,1,0,0]},Kinetic.Transform.prototype={translate:function(a,b){this.m[4]+=this.m[0]*a+this.m[2]*b,this.m[5]+=this.m[1]*a+this.m[3]*b},scale:function(a,b){this.m[0]*=a,this.m[1]*=a,this.m[2]*=b,this.m[3]*=b},rotate:function(a){var b=Math.cos(a),c=Math.sin(a),d=this.m[0]*b+this.m[2]*c,e=this.m[1]*b+this.m[3]*c,f=this.m[0]*-c+this.m[2]*b,g=this.m[1]*-c+this.m[3]*b;this.m[0]=d,this.m[1]=e,this.m[2]=f,this.m[3]=g},getTranslation:function(){return{x:this.m[4],y:this.m[5]}},skew:function(a,b){var c=this.m[0]+this.m[2]*b,d=this.m[1]+this.m[3]*b,e=this.m[2]+this.m[0]*a,f=this.m[3]+this.m[1]*a;this.m[0]=c,this.m[1]=d,this.m[2]=e,this.m[3]=f},multiply:function(a){var b=this.m[0]*a.m[0]+this.m[2]*a.m[1],c=this.m[1]*a.m[0]+this.m[3]*a.m[1],d=this.m[0]*a.m[2]+this.m[2]*a.m[3],e=this.m[1]*a.m[2]+this.m[3]*a.m[3],f=this.m[0]*a.m[4]+this.m[2]*a.m[5]+this.m[4],g=this.m[1]*a.m[4]+this.m[3]*a.m[5]+this.m[5];this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g},invert:function(){var a=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),b=this.m[3]*a,c=-this.m[1]*a,d=-this.m[2]*a,e=this.m[0]*a,f=a*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),g=a*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g},getMatrix:function(){return this.m},setAbsolutePosition:function(a,b){var c=this.m[0],d=this.m[1],e=this.m[2],f=this.m[3],g=this.m[4],h=this.m[5],i=(c*(b-h)-d*(a-g))/(c*f-d*e),j=(a-g-e*i)/c;this.translate(j,i)}};var a="canvas",b="2d",c="[object Array]",d="[object Number]",e="[object String]",f=Math.PI/180,g=180/Math.PI,h="#",i="",j="0",k="Kinetic warning: ",l="Kinetic error: ",m="rgb(",n={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},o=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;Kinetic.Util={_isElement:function(a){return!(!a||1!=a.nodeType)},_isFunction:function(a){return!!(a&&a.constructor&&a.call&&a.apply)},_isObject:function(a){return!!a&&a.constructor==Object},_isArray:function(a){return Object.prototype.toString.call(a)==c},_isNumber:function(a){return Object.prototype.toString.call(a)==d},_isString:function(a){return Object.prototype.toString.call(a)==e},_hasMethods:function(a){var b,c=[];for(b in a)this._isFunction(a[b])&&c.push(b);return c.length>0},_isInDocument:function(a){for(;a=a.parentNode;)if(a==document)return!0;return!1},_simplifyArray:function(a){var b,c,d=[],e=a.length,f=Kinetic.Util;for(b=0;e>b;b++)c=a[b],f._isNumber(c)?c=Math.round(1e3*c)/1e3:f._isString(c)||(c=c.toString()),d.push(c);return d},_getImage:function(c,d){var e,f;c?this._isElement(c)?d(c):this._isString(c)?(e=new Image,e.onload=function(){d(e)},e.src=c):c.data?(f=document.createElement(a),f.width=c.width,f.height=c.height,_context=f.getContext(b),_context.putImageData(c,0,0),this._getImage(f.toDataURL(),d)):d(null):d(null)},_getRGBAString:function(a){var b=a.red||0,c=a.green||0,d=a.blue||0,e=a.alpha||1;return["rgba(",b,",",c,",",d,",",e,")"].join(i)},_rgbToHex:function(a,b,c){return((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)},_hexToRgb:function(a){a=a.replace(h,i);var b=parseInt(a,16);return{r:255&b>>16,g:255&b>>8,b:255&b}},getRandomColor:function(){for(var a=(16777215*Math.random()<<0).toString(16);a.length<6;)a=j+a;return h+a},get:function(a,b){return void 0===a?b:a},getRGB:function(a){var b;return a in n?(b=n[a],{r:b[0],g:b[1],b:b[2]}):a[0]===h?this._hexToRgb(a.substring(1)):a.substr(0,4)===m?(b=o.exec(a.replace(/ /g,"")),{r:parseInt(b[1],10),g:parseInt(b[2],10),b:parseInt(b[3],10)}):{r:0,g:0,b:0}},_merge:function(a,b){var c=this._clone(b);for(var d in a)c[d]=this._isObject(a[d])?this._merge(a[d],c[d]):a[d];return c},cloneObject:function(a){var b={};for(var c in a)b[c]=this._isObject(a[c])?this._clone(a[c]):a[c];return b},cloneArray:function(a){return a.slice(0)},_degToRad:function(a){return a*f},_radToDeg:function(a){return a*g},_capitalize:function(a){return a.charAt(0).toUpperCase()+a.slice(1)},error:function(a){throw new Error(l+a)},warn:function(a){window.console&&console.warn&&console.warn(k+a)},extend:function(a,b){for(var c in b.prototype)c in a.prototype||(a.prototype[c]=b.prototype[c])},addMethods:function(a,b){var c;for(c in b)a.prototype[c]=b[c]},_getControlPoints:function(a,b,c,d,e,f,g){var h=Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2)),i=Math.sqrt(Math.pow(e-c,2)+Math.pow(f-d,2)),j=g*h/(h+i),k=g*i/(h+i),l=c-j*(e-a),m=d-j*(f-b),n=c+k*(e-a),o=d+k*(f-b);return[l,m,n,o]},_expandPoints:function(a,b){var c,d,e=a.length,f=[];for(c=2;e-2>c;c+=2)d=Kinetic.Util._getControlPoints(a[c-2],a[c-1],a[c],a[c+1],a[c+2],a[c+3],b),f.push(d[0]),f.push(d[1]),f.push(a[c]),f.push(a[c+1]),f.push(d[2]),f.push(d[3]);return f},_removeLastLetter:function(a){return a.substring(0,a.length-1)}}}(),function(){var a=document.createElement("canvas"),b=a.getContext("2d"),c=window.devicePixelRatio||1,d=b.webkitBackingStorePixelRatio||b.mozBackingStorePixelRatio||b.msBackingStorePixelRatio||b.oBackingStorePixelRatio||b.backingStorePixelRatio||1,e=c/d;Kinetic.Canvas=function(a){this.init(a)},Kinetic.Canvas.prototype={init:function(a){a=a||{};var b=a.pixelRatio||Kinetic.pixelRatio||e;this.pixelRatio=b,this._canvas=document.createElement("canvas"),this._canvas.style.padding=0,this._canvas.style.margin=0,this._canvas.style.border=0,this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top=0,this._canvas.style.left=0},getContext:function(){return this.context},getPixelRatio:function(){return this.pixelRatio},setPixelRatio:function(a){this.pixelRatio=a,this.setSize(this.getWidth(),this.getHeight())},setWidth:function(a){this.width=this._canvas.width=a*this.pixelRatio,this._canvas.style.width=a+"px"},setHeight:function(a){this.height=this._canvas.height=a*this.pixelRatio,this._canvas.style.height=a+"px"},getWidth:function(){return this.width},getHeight:function(){return this.height},setSize:function(a,b){this.setWidth(a),this.setHeight(b)},toDataURL:function(a,b){try{return this._canvas.toDataURL(a,b)}catch(c){try{return this._canvas.toDataURL()}catch(d){return Kinetic.Util.warn("Unable to get data URL. "+d.message),""}}}},Kinetic.SceneCanvas=function(a){a=a||{};var b=a.width||0,c=a.height||0;Kinetic.Canvas.call(this,a),this.context=new Kinetic.SceneContext(this),this.setSize(b,c)},Kinetic.SceneCanvas.prototype={setWidth:function(a){var b=this.pixelRatio,c=this.getContext()._context;Kinetic.Canvas.prototype.setWidth.call(this,a),c.scale(b,b)},setHeight:function(a){var b=this.pixelRatio,c=this.getContext()._context;Kinetic.Canvas.prototype.setHeight.call(this,a),c.scale(b,b)}},Kinetic.Util.extend(Kinetic.SceneCanvas,Kinetic.Canvas),Kinetic.HitCanvas=function(a){a=a||{};var b=a.width||0,c=a.height||0;Kinetic.Canvas.call(this,a),this.context=new Kinetic.HitContext(this),this.setSize(b,c)},Kinetic.Util.extend(Kinetic.HitCanvas,Kinetic.Canvas)}(),function(){var a=",",b="(",c=")",d="([",e="])",f=";",g="()",h="=",i=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"];Kinetic.Context=function(a){this.init(a)},Kinetic.Context.prototype={init:function(a){this.canvas=a,this._context=a._canvas.getContext("2d"),Kinetic.enableTrace&&(this.traceArr=[],this._enableTrace())},fillShape:function(a){a.getFillEnabled()&&this._fill(a)},strokeShape:function(a){a.getStrokeEnabled()&&this._stroke(a)},fillStrokeShape:function(a){var b=a.getFillEnabled();b&&this._fill(a),a.getStrokeEnabled()&&this._stroke(a)},getTrace:function(i){var j,k,l,m,n=this.traceArr,o=n.length,p="";for(j=0;o>j;j++)k=n[j],l=k.method,l?(m=k.args,p+=l,p+=i?g:Kinetic.Util._isArray(m[0])?d+m.join(a)+e:b+m.join(a)+c):(p+=k.property,i||(p+=h+k.val)),p+=f;return p},clearTrace:function(){this.traceArr=[]},_trace:function(a){var b,c=this.traceArr;c.push(a),b=c.length,b>=Kinetic.traceArrMax&&c.shift()},reset:function(){var a=this.getCanvas().getPixelRatio();this.setTransform(1*a,0,0,1*a,0,0)},getCanvas:function(){return this.canvas},clear:function(a){var b=this.getCanvas();a?this.clearRect(a.x||0,a.y||0,a.width||0,a.height||0):this.clearRect(0,0,b.getWidth(),b.getHeight())},_applyLineCap:function(a){var b=a.getLineCap();b&&this.setAttr("lineCap",b)},_applyOpacity:function(a){var b=a.getAbsoluteOpacity();1!==b&&this.setAttr("globalAlpha",b)},_applyLineJoin:function(a){var b=a.getLineJoin();b&&this.setAttr("lineJoin",b)},_applyTransform:function(a){var b,c=a.getTransformsEnabled();"all"===c?(b=a.getAbsoluteTransform().getMatrix(),this.transform(b[0],b[1],b[2],b[3],b[4],b[5])):"position"===c&&this.translate(a.getX(),a.getY())},setAttr:function(a,b){this._context[a]=b},arc:function(){var a=arguments;this._context.arc(a[0],a[1],a[2],a[3],a[4],a[5])},beginPath:function(){this._context.beginPath()},bezierCurveTo:function(){var a=arguments;this._context.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5])},clearRect:function(){var a=arguments;this._context.clearRect(a[0],a[1],a[2],a[3])},clip:function(){this._context.clip()},closePath:function(){this._context.closePath()},createImageData:function(){var a=arguments;return 2===a.length?this._context.createImageData(a[0],a[1]):1===a.length?this._context.createImageData(a[0]):void 0},createLinearGradient:function(){var a=arguments;return this._context.createLinearGradient(a[0],a[1],a[2],a[3])},createPattern:function(){var a=arguments;return this._context.createPattern(a[0],a[1])},createRadialGradient:function(){var a=arguments;return this._context.createRadialGradient(a[0],a[1],a[2],a[3],a[4],a[5])},drawImage:function(){var a=arguments,b=this._context;3===a.length?b.drawImage(a[0],a[1],a[2]):5===a.length?b.drawImage(a[0],a[1],a[2],a[3],a[4]):9===a.length&&b.drawImage(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8])},fill:function(){this._context.fill()},fillText:function(){var a=arguments;this._context.fillText(a[0],a[1],a[2])},getImageData:function(){var a=arguments;return this._context.getImageData(a[0],a[1],a[2],a[3])},lineTo:function(){var a=arguments;this._context.lineTo(a[0],a[1])},moveTo:function(){var a=arguments;this._context.moveTo(a[0],a[1])},rect:function(){var a=arguments;this._context.rect(a[0],a[1],a[2],a[3])},putImageData:function(){var a=arguments;this._context.putImageData(a[0],a[1],a[2])},quadraticCurveTo:function(){var a=arguments;this._context.quadraticCurveTo(a[0],a[1],a[2],a[3])},restore:function(){this._context.restore()},rotate:function(){var a=arguments;this._context.rotate(a[0])},save:function(){this._context.save()},scale:function(){var a=arguments;this._context.scale(a[0],a[1])},setLineDash:function(){var a=arguments,b=this._context;this._context.setLineDash?b.setLineDash(a[0]):"mozDash"in b?b.mozDash=a[0]:"webkitLineDash"in b&&(b.webkitLineDash=a[0])},setTransform:function(){var a=arguments;this._context.setTransform(a[0],a[1],a[2],a[3],a[4],a[5])},stroke:function(){this._context.stroke()},strokeText:function(){var a=arguments;this._context.strokeText(a[0],a[1],a[2])},transform:function(){var a=arguments;this._context.transform(a[0],a[1],a[2],a[3],a[4],a[5])},translate:function(){var a=arguments;this._context.translate(a[0],a[1])},_enableTrace:function(){var a,b,c=this,d=i.length,e=Kinetic.Util._simplifyArray,f=this.setAttr;for(a=0;d>a;a++)!function(a){var d,f=c[a];c[a]=function(){return b=e(Array.prototype.slice.call(arguments,0)),d=f.apply(c,arguments),c._trace({method:a,args:b}),d}}(i[a]);c.setAttr=function(){f.apply(c,arguments),c._trace({property:arguments[0],val:arguments[1]})}}},Kinetic.SceneContext=function(a){Kinetic.Context.call(this,a)},Kinetic.SceneContext.prototype={_fillColor:function(a){var b=a.fill()||Kinetic.Util._getRGBAString({red:a.fillRed(),green:a.fillGreen(),blue:a.fillBlue(),alpha:a.fillAlpha()});this.setAttr("fillStyle",b),a._fillFunc(this)},_fillPattern:function(a){var b=a.getFillPatternImage(),c=a.getFillPatternX(),d=a.getFillPatternY(),e=a.getFillPatternScale(),f=a.getFillPatternRotation(),g=a.getFillPatternOffset(),h=a.getFillPatternRepeat();(c||d)&&this.translate(c||0,d||0),f&&this.rotate(f),e&&this.scale(e.x,e.y),g&&this.translate(-1*g.x,-1*g.y),this.setAttr("fillStyle",this.createPattern(b,h||"repeat")),this.fill()},_fillLinearGradient:function(a){var b=a.getFillLinearGradientStartPoint(),c=a.getFillLinearGradientEndPoint(),d=a.getFillLinearGradientColorStops(),e=this.createLinearGradient(b.x,b.y,c.x,c.y);if(d){for(var f=0;f<d.length;f+=2)e.addColorStop(d[f],d[f+1]);this.setAttr("fillStyle",e),this.fill()}},_fillRadialGradient:function(a){for(var b=a.getFillRadialGradientStartPoint(),c=a.getFillRadialGradientEndPoint(),d=a.getFillRadialGradientStartRadius(),e=a.getFillRadialGradientEndRadius(),f=a.getFillRadialGradientColorStops(),g=this.createRadialGradient(b.x,b.y,d,c.x,c.y,e),h=0;h<f.length;h+=2)g.addColorStop(f[h],f[h+1]);this.setAttr("fillStyle",g),this.fill()},_fill:function(a){var b=a.fill()||a.fillRed()||a.fillGreen()||a.fillBlue(),c=a.getFillPatternImage(),d=a.getFillLinearGradientColorStops(),e=a.getFillRadialGradientColorStops(),f=a.getFillPriority();b&&"color"===f?this._fillColor(a):c&&"pattern"===f?this._fillPattern(a):d&&"linear-gradient"===f?this._fillLinearGradient(a):e&&"radial-gradient"===f?this._fillRadialGradient(a):b?this._fillColor(a):c?this._fillPattern(a):d?this._fillLinearGradient(a):e&&this._fillRadialGradient(a)},_stroke:function(a){var b=a.dash(),c=a.getStrokeScaleEnabled();a.hasStroke()&&(c||(this.save(),this.setTransform(1,0,0,1,0,0)),this._applyLineCap(a),b&&a.dashEnabled()&&this.setLineDash(b),this.setAttr("lineWidth",a.strokeWidth()),this.setAttr("strokeStyle",a.stroke()||Kinetic.Util._getRGBAString({red:a.strokeRed(),green:a.strokeGreen(),blue:a.strokeBlue(),alpha:a.strokeAlpha()})),a._strokeFunc(this),c||this.restore())},_applyShadow:function(a){var b=Kinetic.Util,c=a.getAbsoluteOpacity(),d=b.get(a.getShadowColor(),"black"),e=b.get(a.getShadowBlur(),5),f=b.get(a.getShadowOpacity(),0),g=b.get(a.getShadowOffset(),{x:0,y:0});f&&this.setAttr("globalAlpha",f*c),this.setAttr("shadowColor",d),this.setAttr("shadowBlur",e),this.setAttr("shadowOffsetX",g.x),this.setAttr("shadowOffsetY",g.y)}},Kinetic.Util.extend(Kinetic.SceneContext,Kinetic.Context),Kinetic.HitContext=function(a){Kinetic.Context.call(this,a)},Kinetic.HitContext.prototype={_fill:function(a){this.save(),this.setAttr("fillStyle",a.colorKey),a._fillFuncHit(this),this.restore()},_stroke:function(a){a.hasStroke()&&(this._applyLineCap(a),this.setAttr("lineWidth",a.strokeWidth()),this.setAttr("strokeStyle",a.colorKey),a._strokeFuncHit(this))}},Kinetic.Util.extend(Kinetic.HitContext,Kinetic.Context)}(),function(){var a="get",b="set";Kinetic.Factory={addGetterSetter:function(a,b,c,d,e){this.addGetter(a,b,c),this.addSetter(a,b,d,e),this.addOverloadedGetterSetter(a,b)},addGetter:function(b,c,d){var e=a+Kinetic.Util._capitalize(c);b.prototype[e]=function(){var a=this.attrs[c];return void 0===a?d:a}},addSetter:function(a,c,d,e){var f=b+Kinetic.Util._capitalize(c);a.prototype[f]=function(a){return d&&(a=d.call(this,a)),this._setAttr(c,a),e&&e.call(this),this}},addComponentsGetterSetter:function(c,d,e,f,g){var h,i,j=e.length,k=Kinetic.Util._capitalize,l=a+k(d),m=b+k(d);c.prototype[l]=function(){var a={};for(h=0;j>h;h++)i=e[h],a[i]=this.getAttr(d+k(i));return a},c.prototype[m]=function(a){var b,c=this.attrs[d];f&&(a=f.call(this,a));for(b in a)this._setAttr(d+k(b),a[b]);return this._fireChangeEvent(d,c,a),g&&g.call(this),this},this.addOverloadedGetterSetter(c,d)},addOverloadedGetterSetter:function(c,d){var e=Kinetic.Util._capitalize(d),f=b+e,g=a+e;c.prototype[d]=function(){return arguments.length?(this[f](arguments[0]),this):this[g]()}},backCompat:function(a,b){var c;for(c in b)a.prototype[c]=a.prototype[b[c]]},afterSetFilter:function(){this._filterUpToDate=!1}},Kinetic.Validators={RGBComponent:function(a){return a>255?255:0>a?0:Math.round(a)},alphaComponent:function(a){return a>1?1:1e-4>a?1e-4:a}}}(),function(){var a="absoluteOpacity",b="absoluteTransform",c="before",d="Change",e="children",f=".",g="",h="get",i="id",j="kinetic",k="listening",l="mouseenter",m="mouseleave",n="name",o="set",p="Shape",q=" ",r="stage",s="transform",t="Stage",u="visible",v=["xChange.kinetic","yChange.kinetic","scaleXChange.kinetic","scaleYChange.kinetic","skewXChange.kinetic","skewYChange.kinetic","rotationChange.kinetic","offsetXChange.kinetic","offsetYChange.kinetic","transformsEnabledChange.kinetic"].join(q);Kinetic.Util.addMethods(Kinetic.Node,{_init:function(c){var d=this;this._id=Kinetic.idCounter++,this.eventListeners={},this.attrs={},this._cache={},this._filterUpToDate=!1,this.setAttrs(c),this.on(v,function(){this._clearCache(s),d._clearSelfAndDescendantCache(b)}),this.on("visibleChange.kinetic",function(){d._clearSelfAndDescendantCache(u)}),this.on("listeningChange.kinetic",function(){d._clearSelfAndDescendantCache(k)}),this.on("opacityChange.kinetic",function(){d._clearSelfAndDescendantCache(a)})},_clearCache:function(a){a?delete this._cache[a]:this._cache={}},_getCache:function(a,b){var c=this._cache[a];return void 0===c&&(this._cache[a]=b.call(this)),this._cache[a]},_clearSelfAndDescendantCache:function(a){this._clearCache(a),this.children&&this.getChildren().each(function(b){b._clearSelfAndDescendantCache(a)})},clearCache:function(){return delete this._cache.canvas,this._filterUpToDate=!1,this},cache:function(a){var b,c=a||{},d=c.x||0,e=c.y||0,f=c.width||this.width(),g=c.height||this.height(),h=c.drawBorder||!1,i=new Kinetic.SceneCanvas({pixelRatio:1,width:f,height:g}),j=new Kinetic.SceneCanvas({pixelRatio:1,width:f,height:g}),k=new Kinetic.HitCanvas({width:f,height:g}),l=this.transformsEnabled(),m=this.x(),n=this.y();return this.clearCache(),this.transformsEnabled("position"),this.x(-1*d),this.y(-1*e),this.drawScene(i),this.drawHit(k),h&&(b=i.getContext(),b.save(),b.beginPath(),b.rect(0,0,f,g),b.closePath(),b.setAttr("strokeStyle","red"),b.setAttr("lineWidth",5),b.stroke(),b.restore()),this.x(m),this.y(n),this.transformsEnabled(l),this._cache.canvas={scene:i,filter:j,hit:k},this},_drawCachedSceneCanvas:function(a){a.save(),a._applyTransform(this),a.drawImage(this._getCachedSceneCanvas()._canvas,0,0),a.restore()},_getCachedSceneCanvas:function(){var a,b,c,d,e=this.filters(),f=this._cache.canvas,g=f.scene,h=f.filter,i=h.getContext();if(e){if(!this._filterUpToDate){try{for(a=e.length,i.clear(),i.drawImage(g._canvas,0,0),b=i.getImageData(0,0,h.getWidth(),h.getHeight()),c=0;a>c;c++)d=e[c],d.call(this,b),i.putImageData(b,0,0)}catch(j){Kinetic.Util.warn("Unable to apply filter. "+j.message)}this._filterUpToDate=!0}return h}return g},_drawCachedHitCanvas:function(a){var b=this._cache.canvas,c=b.hit;a.save(),a._applyTransform(this),a.drawImage(c._canvas,0,0),a.restore()},on:function(a,b){var c,d,e,h,i,j=a.split(q),k=j.length;for(c=0;k>c;c++)d=j[c],e=d.split(f),h=e[0],i=e[1]||g,this.eventListeners[h]||(this.eventListeners[h]=[]),this.eventListeners[h].push({name:i,handler:b});return this},off:function(a){var b,c,d,e,g,h,i=a.split(q),j=i.length;for(b=0;j>b;b++)if(d=i[b],e=d.split(f),g=e[0],h=e[1],g)this.eventListeners[g]&&this._off(g,h);else for(c in this.eventListeners)this._off(c,h);return this},remove:function(){var c=this.getParent();return c&&c.children&&(c.children.splice(this.index,1),c._setChildrenIndices(),delete this.parent),this._clearSelfAndDescendantCache(r),this._clearSelfAndDescendantCache(b),this._clearSelfAndDescendantCache(u),this._clearSelfAndDescendantCache(k),this._clearSelfAndDescendantCache(a),this},destroy:function(){Kinetic._removeId(this.getId()),Kinetic._removeName(this.getName(),this._id),this.remove()},getAttr:function(a){var b=h+Kinetic.Util._capitalize(a);return Kinetic.Util._isFunction(this[b])?this[b]():this.attrs[a]},getAncestors:function(){for(var a=this.getParent(),b=new Kinetic.Collection;a;)b.push(a),a=a.getParent();return b},getAttrs:function(){return this.attrs||{}},setAttrs:function(a){var b,c;if(a)for(b in a)b===e||(c=o+Kinetic.Util._capitalize(b),Kinetic.Util._isFunction(this[c])?this[c](a[b]):this._setAttr(b,a[b]));return this},isListening:function(){return this._getCache(k,this._isListening)},_isListening:function(){var a=this.getListening(),b=this.getParent();return"inherit"===a?b?b.isListening():!0:a},isVisible:function(){return this._getCache(u,this._isVisible)},_isVisible:function(){var a=this.getVisible(),b=this.getParent();return"inherit"===a?b?b.isVisible():!0:a},shouldDrawHit:function(){var a=this.getLayer();return a&&a.hitGraphEnabled()&&this.isListening()&&this.isVisible()&&!Kinetic.isDragging()},show:function(){return this.setVisible(!0),this},hide:function(){return this.setVisible(!1),this},getZIndex:function(){return this.index||0},getAbsoluteZIndex:function(){function a(i){for(b=[],c=i.length,d=0;c>d;d++)e=i[d],h++,e.nodeType!==p&&(b=b.concat(e.getChildren().toArray())),e._id===g._id&&(d=c);b.length>0&&b[0].getDepth()<=f&&a(b)}var b,c,d,e,f=this.getDepth(),g=this,h=0;return g.nodeType!==t&&a(g.getStage().getChildren()),h},getDepth:function(){for(var a=0,b=this.parent;b;)a++,b=b.parent;return a},setPosition:function(a){return this.setX(a.x),this.setY(a.y),this},getPosition:function(){return{x:this.getX(),y:this.getY()}},getAbsolutePosition:function(){var a=this.getAbsoluteTransform().getMatrix(),b=new Kinetic.Transform,c=this.offset();return b.m=a.slice(),b.translate(c.x,c.y),b.getTranslation()},setAbsolutePosition:function(a){var b,c=this._clearTransform();return this.attrs.x=c.x,this.attrs.y=c.y,delete c.x,delete c.y,b=this.getAbsoluteTransform(),b.invert(),b.translate(a.x,a.y),a={x:this.attrs.x+b.getTranslation().x,y:this.attrs.y+b.getTranslation().y},this.setPosition({x:a.x,y:a.y}),this._setTransform(c),this},_setTransform:function(a){var c;for(c in a)this.attrs[c]=a[c];this._clearCache(s),this._clearSelfAndDescendantCache(b)},_clearTransform:function(){var a={x:this.getX(),y:this.getY(),rotation:this.getRotation(),scaleX:this.getScaleX(),scaleY:this.getScaleY(),offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),skewX:this.getSkewX(),skewY:this.getSkewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,this._clearCache(s),this._clearSelfAndDescendantCache(b),a},move:function(a){var b=a.x,c=a.y,d=this.getX(),e=this.getY();return void 0!==b&&(d+=b),void 0!==c&&(e+=c),this.setPosition({x:d,y:e}),this},_eachAncestorReverse:function(a,b){var c,d,e=[],f=this.getParent();for(b&&e.unshift(this);f;)e.unshift(f),f=f.parent;for(c=e.length,d=0;c>d;d++)a(e[d])},rotate:function(a){return this.setRotation(this.getRotation()+a),this},moveToTop:function(){var a=this.index;return this.parent.children.splice(a,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0},moveUp:function(){var a=this.index,b=this.parent.getChildren().length;return b-1>a?(this.parent.children.splice(a,1),this.parent.children.splice(a+1,0,this),this.parent._setChildrenIndices(),!0):!1},moveDown:function(){var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.splice(a-1,0,this),this.parent._setChildrenIndices(),!0):!1},moveToBottom:function(){var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0):!1},setZIndex:function(a){var b=this.index;return this.parent.children.splice(b,1),this.parent.children.splice(a,0,this),this.parent._setChildrenIndices(),this},getAbsoluteOpacity:function(){return this._getCache(a,this._getAbsoluteOpacity)},_getAbsoluteOpacity:function(){var a=this.getOpacity();return this.getParent()&&(a*=this.getParent().getAbsoluteOpacity()),a},moveTo:function(a){return Kinetic.Node.prototype.remove.call(this),a.add(this),this},toObject:function(){var a,b,c,d,e=Kinetic.Util,f={},g=this.getAttrs();f.attrs={};for(a in g)b=g[a],e._isFunction(b)||e._isElement(b)||e._isObject(b)&&e._hasMethods(b)||(c=this[a],delete g[a],d=c?c.call(this):null,g[a]=b,d!==b&&(f.attrs[a]=b));return f.className=this.getClassName(),f},toJSON:function(){return JSON.stringify(this.toObject())},getParent:function(){return this.parent},getLayer:function(){var a=this.getParent();return a?a.getLayer():null},getStage:function(){return this._getCache(r,this._getStage)},_getStage:function(){var a=this.getParent();return a?a.getStage():void 0},fire:function(a,b,c){return c?this._fireAndBubble(a,b||{}):this._fire(a,b||{}),this},getAbsoluteTransform:function(){return this._getCache(b,this._getAbsoluteTransform)},_getAbsoluteTransform:function(){var a,b,c=new Kinetic.Transform;return this._eachAncestorReverse(function(d){a=d.transformsEnabled(),b=d.getTransform(),"all"===a?c.multiply(b):"position"===a&&c.translate(d.x(),d.y())},!0),c},getTransform:function(){return this._getCache(s,this._getTransform)},_getTransform:function(){var a=new Kinetic.Transform,b=this.getX(),c=this.getY(),d=this.getRotation()*Math.PI/180,e=this.getScaleX(),f=this.getScaleY(),g=this.getSkewX(),h=this.getSkewY(),i=this.getOffsetX(),j=this.getOffsetY();return(0!==b||0!==c)&&a.translate(b,c),0!==d&&a.rotate(d),(0!==g||0!==h)&&a.skew(g,h),(1!==e||1!==f)&&a.scale(e,f),(0!==i||0!==j)&&a.translate(-1*i,-1*j),a},clone:function(a){var b,c,d,e,f,g=this.getClassName(),h=new Kinetic[g](this.attrs);for(b in this.eventListeners)for(c=this.eventListeners[b],d=c.length,e=0;d>e;e++)f=c[e],f.name.indexOf(j)<0&&(h.eventListeners[b]||(h.eventListeners[b]=[]),h.eventListeners[b].push(f));return h.setAttrs(a),h},toDataURL:function(a){a=a||{};var b=a.mimeType||null,c=a.quality||null,d=this.getStage(),e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||this.getWidth()||(d?d.getWidth():0),height:a.height||this.getHeight()||(d?d.getHeight():0),pixelRatio:1}),h=g.getContext();return h.save(),(e||f)&&h.translate(-1*e,-1*f),this.drawScene(g),h.restore(),g.toDataURL(b,c)},toImage:function(a){Kinetic.Util._getImage(this.toDataURL(a),function(b){a.callback(b)})},setSize:function(a){return this.setWidth(a.width),this.setHeight(a.height),this},getSize:function(){return{width:this.getWidth(),height:this.getHeight()}},getWidth:function(){return this.attrs.width||0},getHeight:function(){return this.attrs.height||0},getClassName:function(){return this.className||this.nodeType},getType:function(){return this.nodeType},_get:function(a){return this.nodeType===a?[this]:[]},_off:function(a,b){var c,d,e=this.eventListeners[a];for(c=0;c<e.length;c++)if(d=e[c].name,!("kinetic"===d&&"kinetic"!==b||b&&d!==b)){if(e.splice(c,1),0===e.length){delete this.eventListeners[a];break}c--}},_fireBeforeChangeEvent:function(a,b,e){this._fire([c,Kinetic.Util._capitalize(a),d].join(g),{oldVal:b,newVal:e})},_fireChangeEvent:function(a,b,c){this._fire(a+d,{oldVal:b,newVal:c})},setId:function(a){var b=this.getId();return Kinetic._removeId(b),Kinetic._addId(this,a),this._setAttr(i,a),this},setName:function(a){var b=this.getName();return Kinetic._removeName(b,this._id),Kinetic._addName(this,a),this._setAttr(n,a),this},setAttr:function(){var a=Array.prototype.slice.call(arguments),b=a[0],c=a[1],d=o+Kinetic.Util._capitalize(b),e=this[d];return Kinetic.Util._isFunction(e)?e.call(this,c):this._setAttr(b,c),this},_setAttr:function(a,b){var c;void 0!==b&&(c=this.attrs[a],this.attrs[a]=b,this._fireChangeEvent(a,c,b))},_setComponentAttr:function(a,b,c){var d;void 0!==c&&(d=this.attrs[a],d||(this.attrs[a]=this.getAttr(a)),this.attrs[a][b]=c,this._fireChangeEvent(a,d,c))},_fireAndBubble:function(a,b,c){var d=!0;b&&this.nodeType===p&&(b.targetNode=this),a===l&&c&&this._id===c._id?d=!1:a===m&&c&&this._id===c._id&&(d=!1),d&&(this._fire(a,b),b&&!b.cancelBubble&&this.parent&&(c&&c.parent?this._fireAndBubble.call(this.parent,a,b,c.parent):this._fireAndBubble.call(this.parent,a,b)))},_fire:function(a,b){var c,d=this.eventListeners[a];if(d)for(c=0;c<d.length;c++)d[c].handler.call(this,b)},draw:function(){return this.drawScene(),this.drawHit(),this}}),Kinetic.Node.create=function(a,b){return this._createNode(JSON.parse(a),b)},Kinetic.Node._createNode=function(a,b){var c,d,e,f=Kinetic.Node.prototype.getClassName.call(a),g=a.children;if(b&&(a.attrs.container=b),c=new Kinetic[f](a.attrs),g)for(d=g.length,e=0;d>e;e++)c.add(this._createNode(g[e]));return c},Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"position"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"x",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"y",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"opacity",1),Kinetic.Factory.addGetter(Kinetic.Node,"name"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"name"),Kinetic.Factory.addGetter(Kinetic.Node,"id"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"id"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"rotation",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"scale",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"scaleX",1),Kinetic.Factory.addGetterSetter(Kinetic.Node,"scaleY",1),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"skew",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"skewX",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"skewY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"offset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"offsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"offsetY",0),Kinetic.Factory.addSetter(Kinetic.Node,"width",0),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"width"),Kinetic.Factory.addSetter(Kinetic.Node,"height",0),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"height"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"listening","inherit"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"filters",void 0,function(a){return this._filterUpToDate=!1,a
}),Kinetic.Factory.addGetterSetter(Kinetic.Node,"visible","inherit"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"transformsEnabled","all"),Kinetic.Factory.backCompat(Kinetic.Node,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"}),Kinetic.Collection.mapMethods(Kinetic.Node)}(),function(){Kinetic.Filters.Grayscale=function(a){var b,c,d=a.data,e=d.length;for(b=0;e>b;b+=4)c=.34*d[b]+.5*d[b+1]+.16*d[b+2],d[b]=c,d[b+1]=c,d[b+2]=c}}(),function(){Kinetic.Filters.Brighten=function(a){var b,c=255*this.brightness(),d=a.data,e=d.length;for(b=0;e>b;b+=4)d[b]+=c,d[b+1]+=c,d[b+2]+=c},Kinetic.Factory.addGetterSetter(Kinetic.Node,"brightness",0,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Invert=function(a){var b,c=a.data,d=c.length;for(b=0;d>b;b+=4)c[b]=255-c[b],c[b+1]=255-c[b+1],c[b+2]=255-c[b+2]}}(),function(){function a(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function b(b,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D=b.data,E=b.width,F=b.height,G=e+e+1,H=E-1,I=F-1,J=e+1,K=J*(J+1)/2,L=new a,M=null,N=L,O=null,P=null,Q=c[e],R=d[e];for(h=1;G>h;h++)N=N.next=new a,h==J&&(M=N);for(N.next=L,l=k=0,g=0;F>g;g++){for(u=v=w=x=m=n=o=p=0,q=J*(y=D[k]),r=J*(z=D[k+1]),s=J*(A=D[k+2]),t=J*(B=D[k+3]),m+=K*y,n+=K*z,o+=K*A,p+=K*B,N=L,h=0;J>h;h++)N.r=y,N.g=z,N.b=A,N.a=B,N=N.next;for(h=1;J>h;h++)i=k+((h>H?H:h)<<2),m+=(N.r=y=D[i])*(C=J-h),n+=(N.g=z=D[i+1])*C,o+=(N.b=A=D[i+2])*C,p+=(N.a=B=D[i+3])*C,u+=y,v+=z,w+=A,x+=B,N=N.next;for(O=L,P=M,f=0;E>f;f++)D[k+3]=B=p*Q>>R,0!==B?(B=255/B,D[k]=(m*Q>>R)*B,D[k+1]=(n*Q>>R)*B,D[k+2]=(o*Q>>R)*B):D[k]=D[k+1]=D[k+2]=0,m-=q,n-=r,o-=s,p-=t,q-=O.r,r-=O.g,s-=O.b,t-=O.a,i=l+((i=f+e+1)<H?i:H)<<2,u+=O.r=D[i],v+=O.g=D[i+1],w+=O.b=D[i+2],x+=O.a=D[i+3],m+=u,n+=v,o+=w,p+=x,O=O.next,q+=y=P.r,r+=z=P.g,s+=A=P.b,t+=B=P.a,u-=y,v-=z,w-=A,x-=B,P=P.next,k+=4;l+=E}for(f=0;E>f;f++){for(v=w=x=u=n=o=p=m=0,k=f<<2,q=J*(y=D[k]),r=J*(z=D[k+1]),s=J*(A=D[k+2]),t=J*(B=D[k+3]),m+=K*y,n+=K*z,o+=K*A,p+=K*B,N=L,h=0;J>h;h++)N.r=y,N.g=z,N.b=A,N.a=B,N=N.next;for(j=E,h=1;e>=h;h++)k=j+f<<2,m+=(N.r=y=D[k])*(C=J-h),n+=(N.g=z=D[k+1])*C,o+=(N.b=A=D[k+2])*C,p+=(N.a=B=D[k+3])*C,u+=y,v+=z,w+=A,x+=B,N=N.next,I>h&&(j+=E);for(k=f,O=L,P=M,g=0;F>g;g++)i=k<<2,D[i+3]=B=p*Q>>R,B>0?(B=255/B,D[i]=(m*Q>>R)*B,D[i+1]=(n*Q>>R)*B,D[i+2]=(o*Q>>R)*B):D[i]=D[i+1]=D[i+2]=0,m-=q,n-=r,o-=s,p-=t,q-=O.r,r-=O.g,s-=O.b,t-=O.a,i=f+((i=g+J)<I?i:I)*E<<2,m+=u+=O.r=D[i],n+=v+=O.g=D[i+1],o+=w+=O.b=D[i+2],p+=x+=O.a=D[i+3],O=O.next,q+=y=P.r,r+=z=P.g,s+=A=P.b,t+=B=P.a,u-=y,v-=z,w-=A,x-=B,P=P.next,k+=E}}var c=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],d=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];Kinetic.Filters.Blur=function(a){var c=0|this.blurRadius();c>0&&b(a,c)},Kinetic.Factory.addGetterSetter(Kinetic.Node,"blurRadius",0,null,Kinetic.Factory.afterSetFilter)}(),function(){function a(a,b,c){var d=4*(c*a.width+b),e=[];return e.push(a.data[d++],a.data[d++],a.data[d++],a.data[d++]),e}function b(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)+Math.pow(a[2]-b[2],2))}function c(a){for(var b=[0,0,0],c=0;c<a.length;c++)b[0]+=a[c][0],b[1]+=a[c][1],b[2]+=a[c][2];return b[0]/=a.length,b[1]/=a.length,b[2]/=a.length,b}function d(d,e){var f=a(d,0,0),g=a(d,d.width-1,0),h=a(d,0,d.height-1),i=a(d,d.width-1,d.height-1),j=e||10;if(b(f,g)<j&&b(g,i)<j&&b(i,h)<j&&b(h,f)<j){for(var k=c([g,f,i,h]),l=[],m=0;m<d.width*d.height;m++){var n=b(k,[d.data[4*m],d.data[4*m+1],d.data[4*m+2]]);l[m]=j>n?0:255}return l}}function e(a,b){for(var c=0;c<a.width*a.height;c++)a.data[4*c+3]=b[c]}function f(a,b,c){for(var d=[1,1,1,1,0,1,1,1,1],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=2040===k?255:0}return g}function g(a,b,c){for(var d=[1,1,1,1,1,1,1,1,1],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=k>=1020?255:0}return g}function h(a,b,c){for(var d=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=k}return g}Kinetic.Filters.Mask=function(a){var b=this.threshold(),c=d(a,b);return c&&(c=f(c,a.width,a.height),c=g(c,a.width,a.height),c=h(c,a.width,a.height),e(a,c)),a},Kinetic.Factory.addGetterSetter(Kinetic.Node,"threshold",0,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.RGB=function(a){var b,c,d=a.data,e=d.length,f=this.red(),g=this.green(),h=this.blue();for(b=0;e>b;b+=4)c=(.34*d[b]+.5*d[b+1]+.16*d[b+2])/255,d[b]=c*f,d[b+1]=c*g,d[b+2]=c*h,d[b+3]=d[b+3]},Kinetic.Factory.addGetterSetter(Kinetic.Node,"red",0,function(a){return this._filterUpToDate=!1,a>255?255:0>a?0:Math.round(a)}),Kinetic.Factory.addGetterSetter(Kinetic.Node,"green",0,function(a){return this._filterUpToDate=!1,a>255?255:0>a?0:Math.round(a)}),Kinetic.Factory.addGetterSetter(Kinetic.Node,"blue",0,Kinetic.Validators.RGBComponent,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.HSV=function(a){var b,c,d,e,f,g=a.data,h=g.length,i=this.value(),j=this.saturation(),k=Math.abs(this.hue()+360)%360,l=i*j*Math.cos(k*Math.PI/180),m=i*j*Math.sin(k*Math.PI/180),n=.299*i+.701*l+.167*m,o=.587*i-.587*l+.33*m,p=.114*i-.114*l-.497*m,q=.299*i-.299*l-.328*m,r=.587*i+.413*l+.035*m,s=.114*i-.114*l+.293*m,t=.299*i-.3*l+1.25*m,u=.587*i-.586*l-1.05*m,v=.114*i+.886*l-.2*m;for(b=0;h>b;b+=4)c=g[b+0],d=g[b+1],e=g[b+2],f=g[b+3],g[b+0]=n*c+o*d+p*e,g[b+1]=q*c+r*d+s*e,g[b+2]=t*c+u*d+v*e,g[b+3]=f},Kinetic.Factory.addGetterSetter(Kinetic.Node,"hue",0,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"saturation",1,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"value",1,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Emboss=function(a){var b=10*this.embossStrength(),c=255*this.embossWhiteLevel(),d=this.embossDirection(),e=this.embossBlend(),f=0,g=0,h=a.data,i=a.width,j=a.height,k=4*i,l=j;switch(d){case"top-left":f=-1,g=-1;break;case"top":f=-1,g=0;break;case"top-right":f=-1,g=1;break;case"right":f=0,g=1;break;case"bottom-right":f=1,g=1;break;case"bottom":f=1,g=0;break;case"bottom-left":f=1,g=-1;break;case"left":f=0,g=-1}do{var m=(l-1)*k,n=f;1>l+n&&(n=0),l+n>j&&(n=0);var o=4*(l-1+n)*i,p=i;do{var q=m+4*(p-1),r=g;1>p+r&&(r=0),p+r>i&&(r=0);var s=o+4*(p-1+r),t=h[q]-h[s],u=h[q+1]-h[s+1],v=h[q+2]-h[s+2],w=t,x=w>0?w:-w,y=u>0?u:-u,z=v>0?v:-v;if(y>x&&(w=u),z>x&&(w=v),w*=b,e){var A=h[q]+w,B=h[q+1]+w,C=h[q+2]+w;h[q]=A>255?255:0>A?0:A,h[q+1]=B>255?255:0>B?0:B,h[q+2]=C>255?255:0>C?0:C}else{var D=c-w;0>D?D=0:D>255&&(D=255),h[q]=h[q+1]=h[q+2]=D}}while(--p)}while(--l)},Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossStrength",.5,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossWhiteLevel",.5,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossDirection","top-left",null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossBlend",!1,null,Kinetic.Factory.afterSetFilter)}(),function(){function a(a,b,c,d,e){var f,g=c-b,h=e-d;return 0===g?d+h/2:0===h?d:(f=(a-b)/g,f=h*f+d)}Kinetic.Filters.Enhance=function(b){var c,d,e,f,g=b.data,h=g.length,i=g[0],j=i,k=g[1],l=k,m=g[2],n=m,o=g[3],p=o,q=this.enhance();if(0!==q){for(f=0;h>f;f+=4)c=g[f+0],i>c?i=c:c>j&&(j=c),d=g[f+1],k>d?k=d:d>l&&(l=d),e=g[f+2],m>e?m=e:e>n&&(n=e);j===i&&(j=255,i=0),l===k&&(l=255,k=0),n===m&&(n=255,m=0),p===o&&(p=255,o=0);var r,s,t,u,v,w,x,y,z,A,B,C;for(q>0?(s=j+q*(255-j),t=i-q*(i-0),v=l+q*(255-l),w=k-q*(k-0),y=n+q*(255-n),C=m-q*(m-0),B=p+q*(255-p),z=o-q*(o-0)):(r=.5*(j+i),s=j+q*(j-r),t=i+q*(i-r),u=.5*(l+k),v=l+q*(l-u),w=k+q*(k-u),x=.5*(n+m),y=n+q*(n-x),C=m+q*(m-x),A=.5*(p+o),B=p+q*(p-A),z=o+q*(o-A)),f=0;h>f;f+=4)g[f+0]=a(g[f+0],i,j,t,s),g[f+1]=a(g[f+1],k,l,w,v),g[f+2]=a(g[f+2],m,n,C,y)}},Kinetic.Factory.addGetterSetter(Kinetic.Node,"enhance",0,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Posterize=function(a){var b,c=Math.round(254*this.levels())+1,d=a.data,e=d.length,f=255/c;for(b=0;e>b;b+=1)d[b]=Math.floor(d[b]/f)*f},Kinetic.Factory.addGetterSetter(Kinetic.Node,"levels",.5,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Noise=function(a){var b,c=255*this.noise(),d=a.data,e=d.length,f=c/2;for(b=0;e>b;b+=4)d[b+0]+=f-2*f*Math.random(),d[b+1]+=f-2*f*Math.random(),d[b+2]+=f-2*f*Math.random()},Kinetic.Factory.addGetterSetter(Kinetic.Node,"noise",.2,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Pixelate=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=Math.ceil(this.pixelSize()),q=a.width,r=a.height,a=a.data,s=Math.ceil(q/p),t=Math.ceil(r/p);for(m=0;s>m;m+=1)for(n=0;t>n;n+=1){for(e=0,f=0,g=0,h=0,i=m*p,j=i+p,k=n*p,l=k+p,o=0,b=i;j>b;b+=1)if(!(b>=q))for(c=k;l>c;c+=1)c>=r||(d=4*(q*c+b),e+=a[d+0],f+=a[d+1],g+=a[d+2],h+=a[d+3],o+=1);for(e/=o,f/=o,g/=o,alphas=h/o,b=i;j>b;b+=1)if(!(b>=q))for(c=k;l>c;c+=1)c>=r||(d=4*(q*c+b),a[d+0]=e,a[d+1]=f,a[d+2]=g,a[d+3]=h)}},Kinetic.Factory.addGetterSetter(Kinetic.Node,"pixelSize",8,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Threshold=function(a){var b,c=255*this.threshold(),d=a.data,e=d.length;for(b=0;e>b;b+=1)d[b]=d[b]<c?0:255},Kinetic.Factory.addGetterSetter(Kinetic.Node,"threshold",.5,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Sepia=function(a){var b,c,d,e,f,g,h,i,j,k=a.data,l=a.width,m=a.height,n=4*l;do{b=(m-1)*n,c=l;do d=b+4*(c-1),e=k[d],f=k[d+1],g=k[d+2],h=.393*e+.769*f+.189*g,i=.349*e+.686*f+.168*g,j=.272*e+.534*f+.131*g,k[d]=h>255?255:h,k[d+1]=i>255?255:i,k[d+2]=j>255?255:j,k[d+3]=k[d+3];while(--c)}while(--m)}}(),function(){Kinetic.Filters.Solarize=function(a){var b=a.data,c=a.width,d=a.height,e=4*c,f=d;do{var g=(f-1)*e,h=c;do{var i=g+4*(h-1),j=b[i],k=b[i+1],l=b[i+2];j>127&&(j=255-j),k>127&&(k=255-k),l>127&&(l=255-l),b[i]=j,b[i+1]=k,b[i+2]=l}while(--h)}while(--f)}}(),function(){var a=function(a,b,c){var d,e,f,g,h=a.data,i=b.data,j=a.width,k=a.height,l=c.polarCenterX||j/2,m=c.polarCenterY||k/2,n=0,o=0,p=0,q=0,r=Math.sqrt(l*l+m*m);e=j-l,f=k-m,g=Math.sqrt(e*e+f*f),r=g>r?g:r;var s,t,u,v,w,x,y,z,A,B,C,D,E,F=k,G=j,H=360/G*Math.PI/180;for(t=0;G>t;t+=1)for(u=Math.sin(t*H),v=Math.cos(t*H),s=0;F>s;s+=1)e=l+r*s/F*v,f=m+r*s/F*u,1>=e&&(e=1),e>=j-.5&&(e=j-1),1>=f&&(f=1),f>=k-.5&&(f=k-1),w=e-.5,x=e+.5,y=Math.floor(w),z=Math.floor(x),A=f-.5,B=f+.5,C=Math.floor(A),D=Math.floor(B),E=(1-(w-y))*(1-(A-C)),d=4*(C*j+y),n=h[d+0]*E,o=h[d+1]*E,p=h[d+2]*E,q=h[d+3]*E,E=(1-(w-y))*(B-D),d=4*(D*j+y),n+=h[d+0]*E,o+=h[d+1]*E,p+=h[d+2]*E,q+=h[d+3]*E,E=(x-z)*(B-D),d=4*(D*j+z),n+=h[d+0]*E,o+=h[d+1]*E,p+=h[d+2]*E,q+=h[d+3]*E,E=(x-z)*(1-(A-C)),d=4*(C*j+z),n+=h[d+0]*E,o+=h[d+1]*E,p+=h[d+2]*E,q+=h[d+3]*E,d=4*(t+s*j),i[d+0]=n,i[d+1]=o,i[d+2]=p,i[d+3]=q},b=function(a,b,c){var d,e,f,g,h,i,j=a.data,k=b.data,l=a.width,m=a.height,n=c.polarCenterX||l/2,o=c.polarCenterY||m/2,p=0,q=0,r=0,s=0,t=Math.sqrt(n*n+o*o);e=l-n,f=m-o,i=Math.sqrt(e*e+f*f),t=i>t?i:t;var u,v,w=m,x=l,y=c.polarRotation||0;180*(x/360)/Math.PI;var z,A,B,C,D,E,F,G,H;for(e=0;l>e;e+=1)for(f=0;m>f;f+=1)g=e-n,h=f-o,u=Math.sqrt(g*g+h*h)*w/t,v=(180*Math.atan2(h,g)/Math.PI+360+y)%360,v=v*x/360,z=v-.5,A=v+.5,B=Math.floor(z),C=Math.floor(A),D=u-.5,E=u+.5,F=Math.floor(D),G=Math.floor(E),H=(1-(z-B))*(1-(D-F)),d=4*(F*l+B),p=j[d+0]*H,q=j[d+1]*H,r=j[d+2]*H,s=j[d+3]*H,H=(1-(z-B))*(E-G),d=4*(G*l+B),p+=j[d+0]*H,q+=j[d+1]*H,r+=j[d+2]*H,s+=j[d+3]*H,H=(A-C)*(E-G),d=4*(G*l+C),p+=j[d+0]*H,q+=j[d+1]*H,r+=j[d+2]*H,s+=j[d+3]*H,H=(A-C)*(1-(D-F)),d=4*(F*l+C),p+=j[d+0]*H,q+=j[d+1]*H,r+=j[d+2]*H,s+=j[d+3]*H,d=4*(f*l+e),k[d+0]=p,k[d+1]=q,k[d+2]=r,k[d+3]=s},c=document.createElement("canvas");Kinetic.Filters.Kaleidoscope=function(d){var e=d.width,f=d.height,g=Math.round(this.kaleidoscopePower()),h=Math.round(this.kaleidoscopeAngle()),i=Math.floor(e*(h%360)/360);if(!(1>g)){c.width=e,c.height=f;var j=c.getContext("2d").getImageData(0,0,e,f);a(d,j,{polarCenterX:e/2,polarCenterY:f/2});for(var k=e/Math.pow(2,g);8>=k;)k=2*k,g-=1;k=Math.ceil(k);var l=k,m=0,n=l,o=1;for(i+k>e&&(m=l,n=0,o=-1),q=0;f>q;q+=1)for(p=m;p!==n;p+=o)r=Math.round(p+i)%e,x=4*(e*q+r),t=j.data[x+0],u=j.data[x+1],v=j.data[x+2],w=j.data[x+3],y=4*(e*q+p),j.data[y+0]=t,j.data[y+1]=u,j.data[y+2]=v,j.data[y+3]=w;var p,q,r,s,t,u,v,w,x,y;for(q=0;f>q;q+=1)for(l=Math.floor(k),s=0;g>s;s+=1){for(p=0;l+1>p;p+=1)x=4*(e*q+p),t=j.data[x+0],u=j.data[x+1],v=j.data[x+2],w=j.data[x+3],y=4*(e*q+2*l-p-1),j.data[y+0]=t,j.data[y+1]=u,j.data[y+2]=v,j.data[y+3]=w;l*=2}b(j,d,{polarRotation:0})}},Kinetic.Factory.addGetterSetter(Kinetic.Node,"kaleidoscopePower",2,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"kaleidoscopeAngle",0,null,Kinetic.Factory.afterSetFilter)}(),function(){function a(a){window.setTimeout(a,1e3/60)}var b=500;Kinetic.Animation=function(a,b){this.func=a,this.setLayers(b),this.id=Kinetic.Animation.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:(new Date).getTime()}},Kinetic.Animation.prototype={setLayers:function(a){var b=[];b=a?a.length>0?a:[a]:[],this.layers=b},getLayers:function(){return this.layers},addLayer:function(a){var b,c,d=this.layers;if(d){for(b=d.length,c=0;b>c;c++)if(d[c]._id===a._id)return!1}else this.layers=[];return this.layers.push(a),!0},isRunning:function(){for(var a=Kinetic.Animation,b=a.animations,c=0;c<b.length;c++)if(b[c].id===this.id)return!0;return!1},start:function(){this.stop(),this.frame.timeDiff=0,this.frame.lastTime=(new Date).getTime(),Kinetic.Animation._addAnimation(this)},stop:function(){Kinetic.Animation._removeAnimation(this)},_updateFrameObject:function(a){this.frame.timeDiff=a-this.frame.lastTime,this.frame.lastTime=a,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}},Kinetic.Animation.animations=[],Kinetic.Animation.animIdCounter=0,Kinetic.Animation.animRunning=!1,Kinetic.Animation._addAnimation=function(a){this.animations.push(a),this._handleAnimation()},Kinetic.Animation._removeAnimation=function(a){for(var b=a.id,c=this.animations,d=c.length,e=0;d>e;e++)if(c[e].id===b){this.animations.splice(e,1);break}},Kinetic.Animation._runFrames=function(){var a,b,c,d,e,f,g,h,i={},j=this.animations;for(d=0;d<j.length;d++){for(a=j[d],b=a.layers,c=a.func,a._updateFrameObject((new Date).getTime()),f=b.length,e=0;f>e;e++)g=b[e],void 0!==g._id&&(i[g._id]=g);c&&c.call(a,a.frame)}for(h in i)i[h].draw()},Kinetic.Animation._animationLoop=function(){var a=this;this.animations.length>0?(this._runFrames(),Kinetic.Animation.requestAnimFrame(function(){a._animationLoop()})):this.animRunning=!1},Kinetic.Animation._handleAnimation=function(){var a=this;this.animRunning||(this.animRunning=!0,a._animationLoop())};var c=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||a}();Kinetic.Animation.requestAnimFrame=function(b){var d=Kinetic.isDragging?a:c;d(b)};var d=Kinetic.Node.prototype.moveTo;Kinetic.Node.prototype.moveTo=function(a){d.call(this,a)},Kinetic.Layer.prototype.batchDraw=function(){var a=this;this.batchAnim||(this.batchAnim=new Kinetic.Animation(function(){a.lastBatchDrawTime&&(new Date).getTime()-a.lastBatchDrawTime>b&&a.batchAnim.stop()},this)),this.lastBatchDrawTime=(new Date).getTime(),this.batchAnim.isRunning()||(this.draw(),this.batchAnim.start())},Kinetic.Stage.prototype.batchDraw=function(){this.getChildren().each(function(a){a.batchDraw()})}}(),function(){var a={node:1,duration:1,easing:1,onFinish:1,yoyo:1},b=1,c=2,d=3,e=0;Kinetic.Tween=function(b){var c,d=this,g=b.node,h=g._id,i=b.duration||1,j=b.easing||Kinetic.Easings.Linear,k=!!b.yoyo;this.node=g,this._id=e++,this.anim=new Kinetic.Animation(function(){d.tween.onEnterFrame()},g.getLayer()||g.getLayers()),this.tween=new f(c,function(a){d._tweenFunc(a)},j,0,1,1e3*i,k),this._addListeners(),Kinetic.Tween.attrs[h]||(Kinetic.Tween.attrs[h]={}),Kinetic.Tween.attrs[h][this._id]||(Kinetic.Tween.attrs[h][this._id]={}),Kinetic.Tween.tweens[h]||(Kinetic.Tween.tweens[h]={});for(c in b)void 0===a[c]&&this._addAttr(c,b[c]);this.reset(),this.onFinish=b.onFinish,this.onReset=b.onReset},Kinetic.Tween.attrs={},Kinetic.Tween.tweens={},Kinetic.Tween.prototype={_addAttr:function(a,b){var c,d,e,f,g,h=this.node,i=h._id;if(e=Kinetic.Tween.tweens[i][a],e&&delete Kinetic.Tween.attrs[i][e][a],c=h.getAttr(a),Kinetic.Util._isArray(b))for(d=[],g=b.length,f=0;g>f;f++)d.push(b[f]-c[f]);else d=b-c;Kinetic.Tween.attrs[i][this._id][a]={start:c,diff:d},Kinetic.Tween.tweens[i][a]=this._id},_tweenFunc:function(a){var b,c,d,e,f,g,h,i=this.node,j=Kinetic.Tween.attrs[i._id][this._id];for(b in j){if(c=j[b],d=c.start,e=c.diff,Kinetic.Util._isArray(d))for(f=[],h=d.length,g=0;h>g;g++)f.push(d[g]+e[g]*a);else f=d+e*a;i.setAttr(b,f)}},_addListeners:function(){var a=this;this.tween.onPlay=function(){a.anim.start()},this.tween.onReverse=function(){a.anim.start()},this.tween.onPause=function(){a.anim.stop()},this.tween.onFinish=function(){a.onFinish&&a.onFinish()},this.tween.onReset=function(){a.onReset&&a.onReset()}},play:function(){return this.tween.play(),this},reverse:function(){return this.tween.reverse(),this},reset:function(){var a=this.node;return this.tween.reset(),(a.getLayer()||a.getLayers()).draw(),this},seek:function(a){var b=this.node;return this.tween.seek(1e3*a),(b.getLayer()||b.getLayers()).draw(),this},pause:function(){return this.tween.pause(),this},finish:function(){var a=this.node;return this.tween.finish(),(a.getLayer()||a.getLayers()).draw(),this},destroy:function(){var a,b=this.node._id,c=this._id,d=Kinetic.Tween.tweens[b];this.pause();for(a in d)delete Kinetic.Tween.tweens[b][a];delete Kinetic.Tween.attrs[b][c]}};var f=function(a,b,c,d,e,f,g){this.prop=a,this.propFunc=b,this.begin=d,this._pos=d,this.duration=f,this._change=0,this.prevPos=0,this.yoyo=g,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=c,this._change=e-this.begin,this.pause()};f.prototype={fire:function(a){var b=this[a];b&&b()},setTime:function(a){a>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():0>a?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=a,this.update())},getTime:function(){return this._time},setPosition:function(a){this.prevPos=this._pos,this.propFunc(a),this._pos=a},getPosition:function(a){return void 0===a&&(a=this._time),this.func(a,this.begin,this._change,this.duration)},play:function(){this.state=c,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")},reverse:function(){this.state=d,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")},seek:function(a){this.pause(),this._time=a,this.update(),this.fire("onSeek")},reset:function(){this.pause(),this._time=0,this.update(),this.fire("onReset")},finish:function(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")},update:function(){this.setPosition(this.getPosition(this._time))},onEnterFrame:function(){var a=this.getTimer()-this._startTime;this.state===c?this.setTime(a):this.state===d&&this.setTime(this.duration-a)},pause:function(){this.state=b,this.fire("onPause")},getTimer:function(){return(new Date).getTime()}},Kinetic.Easings={BackEaseIn:function(a,b,c,d){var e=1.70158;return c*(a/=d)*a*((e+1)*a-e)+b},BackEaseOut:function(a,b,c,d){var e=1.70158;return c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},BackEaseInOut:function(a,b,c,d){var e=1.70158;return(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},ElasticEaseIn:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f))+b)},ElasticEaseOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),e*Math.pow(2,-10*a)*Math.sin((a*d-g)*2*Math.PI/f)+c+b)},ElasticEaseInOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:2==(a/=d/2)?b+c:(f||(f=d*.3*1.5),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),1>a?-.5*e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+b:.5*e*Math.pow(2,-10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+c+b)},BounceEaseOut:function(a,b,c,d){return(a/=d)<1/2.75?c*7.5625*a*a+b:2/2.75>a?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:2.5/2.75>a?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},BounceEaseIn:function(a,b,c,d){return c-Kinetic.Easings.BounceEaseOut(d-a,0,c,d)+b},BounceEaseInOut:function(a,b,c,d){return d/2>a?.5*Kinetic.Easings.BounceEaseIn(2*a,0,c,d)+b:.5*Kinetic.Easings.BounceEaseOut(2*a-d,0,c,d)+.5*c+b},EaseIn:function(a,b,c,d){return c*(a/=d)*a+b},EaseOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},EaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},StrongEaseIn:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},StrongEaseOut:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},StrongEaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},Linear:function(a,b,c,d){return c*a/d+b}}}(),function(){Kinetic.DD={anim:new Kinetic.Animation,isDragging:!1,offset:{x:0,y:0},node:null,_drag:function(a){var b=Kinetic.DD,c=b.node;c&&(c._setDragPosition(a),b.isDragging||(b.isDragging=!0,c.fire("dragstart",a,!0)),c.fire("dragmove",a,!0))},_endDragBefore:function(a){var b,c,d=Kinetic.DD,e=d.node;e&&(b=e.nodeType,c=e.getLayer(),d.anim.stop(),d.isDragging&&(d.isDragging=!1,Kinetic.listenClickTap=!1,a&&(a.dragEndNode=e)),delete d.node,(c||e).draw())},_endDragAfter:function(a){a=a||{};var b=a.dragEndNode;a&&b&&b.fire("dragend",a,!0)}},Kinetic.Node.prototype.startDrag=function(){var a=Kinetic.DD,b=this.getStage(),c=this.getLayer(),d=b.getPointerPosition(),e=this.getAbsolutePosition();d&&(a.node&&a.node.stopDrag(),a.node=this,a.offset.x=d.x-e.x,a.offset.y=d.y-e.y,a.anim.setLayers(c||this.getLayers()),a.anim.start(),this._setDragPosition())},Kinetic.Node.prototype._setDragPosition=function(a){var b=Kinetic.DD,c=this.getStage().getPointerPosition(),d=this.getDragBoundFunc(),e={x:c.x-b.offset.x,y:c.y-b.offset.y};void 0!==d&&(e=d.call(this,e,a)),this.setAbsolutePosition(e)},Kinetic.Node.prototype.stopDrag=function(){var a=Kinetic.DD,b={};a._endDragBefore(b),a._endDragAfter(b)},Kinetic.Node.prototype.setDraggable=function(a){this._setAttr("draggable",a),this._dragChange()};var a=Kinetic.Node.prototype.destroy;Kinetic.Node.prototype.destroy=function(){var b=Kinetic.DD;b.node&&b.node._id===this._id&&this.stopDrag(),a.call(this)},Kinetic.Node.prototype.isDragging=function(){var a=Kinetic.DD;return a.node&&a.node._id===this._id&&a.isDragging},Kinetic.Node.prototype._listenDrag=function(){var a=this;this._dragCleanup(),"Stage"===this.getClassName()?this.on("contentMousedown.kinetic contentTouchstart.kinetic",function(b){Kinetic.DD.node||a.startDrag(b)}):this.on("mousedown.kinetic touchstart.kinetic",function(b){Kinetic.DD.node||a.startDrag(b)})},Kinetic.Node.prototype._dragChange=function(){if(this.attrs.draggable)this._listenDrag();else{this._dragCleanup();var a=this.getStage(),b=Kinetic.DD;a&&b.node&&b.node._id===this._id&&b.node.stopDrag()}},Kinetic.Node.prototype._dragCleanup=function(){"Stage"===this.getClassName()?(this.off("contentMousedown.kinetic"),this.off("contentTouchstart.kinetic")):(this.off("mousedown.kinetic"),this.off("touchstart.kinetic"))},Kinetic.Factory.addGetterSetter(Kinetic.Node,"dragBoundFunc"),Kinetic.Factory.addGetter(Kinetic.Node,"draggable",!1),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"draggable");var b=document.documentElement;b.addEventListener("mouseup",Kinetic.DD._endDragBefore,!0),b.addEventListener("touchend",Kinetic.DD._endDragBefore,!0),b.addEventListener("mouseup",Kinetic.DD._endDragAfter,!1),b.addEventListener("touchend",Kinetic.DD._endDragAfter,!1)}(),function(){Kinetic.Util.addMethods(Kinetic.Container,{__init:function(a){this.children=new Kinetic.Collection,Kinetic.Node.call(this,a)},getChildren:function(){return this.children},hasChildren:function(){return this.getChildren().length>0},removeChildren:function(){for(var a,b=this.children;b.length>0;)a=b[0],a.hasChildren()&&a.removeChildren(),a.remove();return this},destroyChildren:function(){for(var a=this.children;a.length>0;)a[0].destroy();return this},add:function(a){var b=this.children;return this._validateAdd(a),a.index=b.length,a.parent=this,b.push(a),this._fire("add",{child:a}),this},destroy:function(){this.hasChildren()&&this.destroyChildren(),Kinetic.Node.prototype.destroy.call(this)},find:function(a){var b,c,d,e,f,g,h,i=[],j=a.replace(/ /g,"").split(","),k=j.length;for(b=0;k>b;b++)if(d=j[b],"#"===d.charAt(0))f=this._getNodeById(d.slice(1)),f&&i.push(f);else if("."===d.charAt(0))e=this._getNodesByName(d.slice(1)),i=i.concat(e);else for(g=this.getChildren(),h=g.length,c=0;h>c;c++)i=i.concat(g[c]._get(d));return Kinetic.Collection.toCollection(i)},_getNodeById:function(a){var b=Kinetic.ids[a];return void 0!==b&&this.isAncestorOf(b)?b:null},_getNodesByName:function(a){var b=Kinetic.names[a]||[];return this._getDescendants(b)},_get:function(a){for(var b=Kinetic.Node.prototype._get.call(this,a),c=this.getChildren(),d=c.length,e=0;d>e;e++)b=b.concat(c[e]._get(a));return b},toObject:function(){var a=Kinetic.Node.prototype.toObject.call(this);a.children=[];for(var b=this.getChildren(),c=b.length,d=0;c>d;d++){var e=b[d];a.children.push(e.toObject())}return a},_getDescendants:function(a){for(var b=[],c=a.length,d=0;c>d;d++){var e=a[d];this.isAncestorOf(e)&&b.push(e)}return b},isAncestorOf:function(a){for(var b=a.getParent();b;){if(b._id===this._id)return!0;b=b.getParent()}return!1},clone:function(a){var b=Kinetic.Node.prototype.clone.call(this,a);return this.getChildren().each(function(a){b.add(a.clone())}),b},getAllIntersections:function(a){var b=[];return this.find("Shape").each(function(c){c.isVisible()&&c.intersects(a)&&b.push(c)}),b},_setChildrenIndices:function(){this.children.each(function(a,b){a.index=b})},drawScene:function(a){var b=this.getLayer(),c=a||b&&b.getCanvas(),d=c&&c.getContext(),e=this._cache.canvas,f=e&&e.scene;return this.isVisible()&&(f?this._drawCachedSceneCanvas(d):this._drawChildren(c,"drawScene")),this},drawHit:function(a){var b=this.getLayer(),c=a||b&&b.hitCanvas,d=c&&c.getContext(),e=this._cache.canvas,f=e&&e.hit;return this.shouldDrawHit()&&(f?this._drawCachedHitCanvas(d):this._drawChildren(c,"drawHit")),this},_drawChildren:function(a,b){var c,d,e=a&&a.getContext(),f=this.getClipWidth(),g=this.getClipHeight(),h=f&&g;h&&(c=this.getClipX(),d=this.getClipY(),e.save(),e._applyTransform(this),e.beginPath(),e.rect(c,d,f,g),e.clip(),e.reset()),this.children.each(function(c){c[b](a)}),h&&e.restore()}}),Kinetic.Util.extend(Kinetic.Container,Kinetic.Node),Kinetic.Container.prototype.get=Kinetic.Container.prototype.find,Kinetic.Factory.addComponentsGetterSetter(Kinetic.Container,"clip",["x","y","width","height"]),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipX"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipY"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipWidth"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipHeight"),Kinetic.Collection.mapMethods(Kinetic.Container)}(),function(){function a(a){a.fill()}function b(a){a.stroke()}function c(a){a.fill()}function d(a){a.stroke()}function e(){this._clearCache(f)}var f="hasShadow";Kinetic.Util.addMethods(Kinetic.Shape,{__init:function(f){this.nodeType="Shape",this._fillFunc=a,this._strokeFunc=b,this._fillFuncHit=c,this._strokeFuncHit=d;for(var g,h=Kinetic.shapes;;)if(g=Kinetic.Util.getRandomColor(),g&&!(g in h))break;this.colorKey=g,h[g]=this,Kinetic.Node.call(this,f),this.on("shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChanged.kinetic",e)},hasChildren:function(){return!1},getChildren:function(){return[]},getContext:function(){return this.getLayer().getContext()},getCanvas:function(){return this.getLayer().getCanvas()},hasShadow:function(){return this._getCache(f,this._hasShadow)},_hasShadow:function(){return this.getShadowEnabled()&&0!==this.getShadowOpacity()&&!!(this.getShadowColor()||this.getShadowBlur()||this.getShadowOffsetX()||this.getShadowOffsetY())},hasFill:function(){return!!(this.getFill()||this.getFillPatternImage()||this.getFillLinearGradientColorStops()||this.getFillRadialGradientColorStops())},hasStroke:function(){return!!(this.stroke()||this.strokeRed()||this.strokeGreen()||this.strokeBlue())},_get:function(a){return this.className===a||this.nodeType===a?[this]:[]},intersects:function(a){var b,c=this.getStage(),d=c.bufferHitCanvas;return d.getContext().clear(),this.drawScene(d),b=d.context.getImageData(0|a.x,0|a.y,1,1).data,b[3]>0},destroy:function(){Kinetic.Node.prototype.destroy.call(this),delete Kinetic.shapes[this.colorKey]},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasFill()&&this.hasStroke()},drawScene:function(a){var b,c,d,e=a||this.getLayer().getCanvas(),f=e.getContext(),g=this._cache.canvas,h=this.sceneFunc(),i=this.hasShadow();return this.isVisible()&&(g?this._drawCachedSceneCanvas(f):h&&(f.save(),this._useBufferCanvas()?(b=this.getStage(),c=b.bufferCanvas,d=c.getContext(),d.clear(),d.save(),d._applyLineJoin(this),d._applyTransform(this),h.call(this,d),d.restore(),i&&(f.save(),f._applyShadow(this),f.drawImage(c._canvas,0,0),f.restore()),f._applyOpacity(this),f.drawImage(c._canvas,0,0)):(f._applyLineJoin(this),f._applyTransform(this),i&&(f.save(),f._applyShadow(this),h.call(this,f),f.restore()),f._applyOpacity(this),h.call(this,f)),f.restore())),this},drawHit:function(a){var b=a||this.getLayer().hitCanvas,c=b.getContext(),d=this.hitFunc()||this.sceneFunc(),e=this._cache.canvas,f=e&&e.hit;return this.shouldDrawHit()&&(f?this._drawCachedHitCanvas(c):d&&(c.save(),c._applyLineJoin(this),c._applyTransform(this),d.call(this,c),c.restore())),this},drawHitFromCache:function(a){var b,c,d,e,f,g,h,i,j=a||0,k=this._cache.canvas,l=this._getCachedSceneCanvas(),m=l.getContext(),n=k.hit,o=n.getContext(),p=l.getWidth(),q=l.getHeight();
o.clear();try{for(b=m.getImageData(0,0,p,q),c=b.data,d=o.getImageData(0,0,p,q),e=d.data,f=c.length,g=Kinetic.Util._hexToRgb(this.colorKey),h=0;f>h;h+=4)i=c[h+3],i>j&&(e[h]=g.r,e[h+1]=g.g,e[h+2]=g.b,e[h+3]=255);o.putImageData(d,0,0)}catch(r){Kinetic.Util.warn("Unable to draw hit graph from cached scene canvas. "+r.message)}return this}}),Kinetic.Util.extend(Kinetic.Shape,Kinetic.Node),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"stroke"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeWidth",2),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"lineJoin"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"lineCap"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"sceneFunc"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"hitFunc"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"dash"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowColor"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowBlur"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOpacity"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"shadowOffset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOffsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOffsetY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternImage"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fill"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientColorStops"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientColorStops"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternRepeat","repeat"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"dashEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeScaleEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPriority","color"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillPatternOffset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternOffsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternOffsetY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillPatternScale",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternScaleX",1),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternScaleY",1),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillLinearGradientStartPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientStartPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientStartPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillLinearGradientEndPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientEndPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientEndPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillRadialGradientStartPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillRadialGradientEndPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndPointY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternRotation",0),Kinetic.Factory.backCompat(Kinetic.Shape,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"}),Kinetic.Collection.mapMethods(Kinetic.Shape)}(),function(){function a(a,b){a.content.addEventListener(b,function(c){a[I+b](c)},!1)}var b="Stage",c="string",d="px",e="mouseout",f="mouseleave",g="mouseover",h="mouseenter",i="mousemove",j="mousedown",k="mouseup",l="click",m="dblclick",n="touchstart",o="touchend",p="tap",q="dbltap",r="touchmove",s="contentMouseout",t="contentMouseover",u="contentMousemove",v="contentMousedown",w="contentMouseup",x="contentClick",y="contentDblclick",z="contentTouchstart",A="contentTouchend",B="contentDbltap",C="contentTouchmove",D="div",E="relative",F="inline-block",G="kineticjs-content",H=" ",I="_",J="container",K="",L=[j,i,k,e,n,r,o,g],M=L.length;Kinetic.Util.addMethods(Kinetic.Stage,{___init:function(a){this.nodeType=b,Kinetic.Container.call(this,a),this._id=Kinetic.idCounter++,this._buildDOM(),this._bindContentEvents(),this._enableNestedTransforms=!1,Kinetic.stages.push(this)},_validateAdd:function(a){"Layer"!==a.getType()&&Kinetic.Util.error("You may only add layers to the stage.")},setContainer:function(a){return typeof a===c&&(a=document.getElementById(a)),this._setAttr(J,a),this},shouldDrawHit:function(){return!0},draw:function(){return Kinetic.Node.prototype.draw.call(this),this},setHeight:function(a){return Kinetic.Node.prototype.setHeight.call(this,a),this._resizeDOM(),this},setWidth:function(a){return Kinetic.Node.prototype.setWidth.call(this,a),this._resizeDOM(),this},clear:function(){var a,b=this.children,c=b.length;for(a=0;c>a;a++)b[a].clear();return this},destroy:function(){var a=this.content;Kinetic.Container.prototype.destroy.call(this),a&&Kinetic.Util._isInDocument(a)&&this.getContainer().removeChild(a)},getPointerPosition:function(){return this.pointerPos},getStage:function(){return this},getContent:function(){return this.content},toDataURL:function(a){function b(e){var f=i[e],j=f.toDataURL(),k=new Image;k.onload=function(){h.drawImage(k,0,0),e<i.length-1?b(e+1):a.callback(g.toDataURL(c,d))},k.src=j}a=a||{};var c=a.mimeType||null,d=a.quality||null,e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||this.getWidth(),height:a.height||this.getHeight(),pixelRatio:1}),h=g.getContext()._context,i=this.children;(e||f)&&h.translate(-1*e,-1*f),b(0)},toImage:function(a){var b=a.callback;a.callback=function(a){Kinetic.Util._getImage(a,function(a){b(a)})},this.toDataURL(a)},getIntersection:function(a){var b,c,d=this.getChildren(),e=d.length,f=e-1;for(b=f;b>=0;b--)if(c=d[b].getIntersection(a))return c;return null},_resizeDOM:function(){if(this.content){var a,b,c=this.getWidth(),e=this.getHeight(),f=this.getChildren(),g=f.length;for(this.content.style.width=c+d,this.content.style.height=e+d,this.bufferCanvas.setSize(c,e),this.bufferHitCanvas.setSize(c,e),a=0;g>a;a++)b=f[a],b.getCanvas().setSize(c,e),b.hitCanvas.setSize(c,e),b.draw()}},add:function(a){return Kinetic.Container.prototype.add.call(this,a),a.canvas.setSize(this.attrs.width,this.attrs.height),a.hitCanvas.setSize(this.attrs.width,this.attrs.height),a.draw(),this.content.appendChild(a.canvas._canvas),this},getParent:function(){return null},getLayer:function(){return null},getLayers:function(){return this.getChildren()},_bindContentEvents:function(){var b;for(b=0;M>b;b++)a(this,L[b])},_mouseover:function(a){this._fire(t,a)},_mouseout:function(a){this._setPointerPosition(a);var b=this.targetShape;b&&!Kinetic.isDragging()&&(b._fireAndBubble(e,a),b._fireAndBubble(f,a),this.targetShape=null),this.pointerPos=void 0,this._fire(s,a)},_mousemove:function(a){this._setPointerPosition(a);var b=Kinetic.DD,c=this.getIntersection(this.getPointerPosition());c&&c.isListening()?Kinetic.isDragging()||this.targetShape&&this.targetShape._id===c._id?c._fireAndBubble(i,a):(this.targetShape&&(this.targetShape._fireAndBubble(e,a,c),this.targetShape._fireAndBubble(f,a,c)),c._fireAndBubble(g,a,this.targetShape),c._fireAndBubble(h,a,this.targetShape),this.targetShape=c):this.targetShape&&!Kinetic.isDragging()&&(this.targetShape._fireAndBubble(e,a),this.targetShape._fireAndBubble(f,a),this.targetShape=null),this._fire(u,a),b&&b._drag(a),a.preventDefault&&a.preventDefault()},_mousedown:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition());Kinetic.listenClickTap=!0,b&&b.isListening()&&(this.clickStartShape=b,b._fireAndBubble(j,a)),this._fire(v,a),a.preventDefault&&a.preventDefault()},_mouseup:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition()),c=this.clickStartShape,d=!1;Kinetic.inDblClickWindow?(d=!0,Kinetic.inDblClickWindow=!1):Kinetic.inDblClickWindow=!0,setTimeout(function(){Kinetic.inDblClickWindow=!1},Kinetic.dblClickWindow),b&&b.isListening()&&(b._fireAndBubble(k,a),Kinetic.listenClickTap&&c&&c._id===b._id&&(b._fireAndBubble(l,a),d&&b._fireAndBubble(m,a))),this._fire(w,a),Kinetic.listenClickTap&&(this._fire(x,a),d&&this._fire(y,a)),Kinetic.listenClickTap=!1,a.preventDefault&&a.preventDefault()},_touchstart:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition());Kinetic.listenClickTap=!0,b&&b.isListening()&&(this.tapStartShape=b,b._fireAndBubble(n,a),b.isListening()&&a.preventDefault&&a.preventDefault()),this._fire(z,a)},_touchend:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition());fireDblClick=!1,Kinetic.inDblClickWindow?(fireDblClick=!0,Kinetic.inDblClickWindow=!1):Kinetic.inDblClickWindow=!0,setTimeout(function(){Kinetic.inDblClickWindow=!1},Kinetic.dblClickWindow),b&&b.isListening()&&(b._fireAndBubble(o,a),Kinetic.listenClickTap&&b._id===this.tapStartShape._id&&(b._fireAndBubble(p,a),fireDblClick&&b._fireAndBubble(q,a)),b.isListening()&&a.preventDefault&&a.preventDefault()),Kinetic.listenClickTap&&(this._fire(A,a),fireDblClick&&this._fire(B,a)),Kinetic.listenClickTap=!1},_touchmove:function(a){this._setPointerPosition(a);var b=Kinetic.DD,c=this.getIntersection(this.getPointerPosition());c&&c.isListening()&&(c._fireAndBubble(r,a),c.isListening()&&a.preventDefault&&a.preventDefault()),this._fire(C,a),b&&b._drag(a)},_setPointerPosition:function(a){var b,a=a?a:window.event,c=this._getContentPosition(),d=a.offsetX,e=a.clientX,f=null,g=null;void 0!==a.touches?1===a.touches.length&&(b=a.touches[0],f=b.clientX-c.left,g=b.clientY-c.top):void 0!==d?(f=d,g=a.offsetY):"mozilla"===Kinetic.UA.browser?(f=a.layerX,g=a.layerY):void 0!==e&&c&&(f=e-c.left,g=a.clientY-c.top),null!==f&&null!==g&&(this.pointerPos={x:f,y:g})},_getContentPosition:function(){var a=this.content.getBoundingClientRect?this.content.getBoundingClientRect():{top:0,left:0};return{top:a.top,left:a.left}},_buildDOM:function(){var a=this.getContainer();a.innerHTML=K,this.content=document.createElement(D),this.content.style.position=E,this.content.style.display=F,this.content.className=G,this.content.setAttribute("role","presentation"),a.appendChild(this.content),this.bufferCanvas=new Kinetic.SceneCanvas({pixelRatio:1}),this.bufferHitCanvas=new Kinetic.HitCanvas,this._resizeDOM()},_onContent:function(a,b){var c,d,e=a.split(H),f=e.length;for(c=0;f>c;c++)d=e[c],this.content.addEventListener(d,b,!1)}}),Kinetic.Util.extend(Kinetic.Stage,Kinetic.Container),Kinetic.Factory.addGetter(Kinetic.Stage,"container"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Stage,"container")}(),function(){var a="#",b="beforeDraw",c="draw",d=[{x:0,y:0},{x:-1,y:0},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1}],e=d.length;Kinetic.Util.addMethods(Kinetic.Layer,{___init:function(a){this.nodeType="Layer",this.canvas=new Kinetic.SceneCanvas,this.hitCanvas=new Kinetic.HitCanvas,Kinetic.Container.call(this,a)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to a layer.")},getIntersection:function(a){var b,c,f,g;if(!this.isVisible())return null;for(c=0;e>c;c++){if(f=d[c],b=this._getIntersection({x:a.x+f.x,y:a.y+f.y}),g=b.shape)return g;if(!b.antialiased)return null}},_getIntersection:function(b){var c,d,e=this.hitCanvas.context._context.getImageData(b.x,b.y,1,1).data,f=e[3];return 255===f?(c=Kinetic.Util._rgbToHex(e[0],e[1],e[2]),d=Kinetic.shapes[a+c],{shape:d}):f>0?{antialiased:!0}:{}},drawScene:function(a){var d=this.getLayer(),e=a||d&&d.getCanvas();return this._fire(b,{node:this}),this.getClearBeforeDraw()&&e.getContext().clear(),Kinetic.Container.prototype.drawScene.call(this,e),this._fire(c,{node:this}),this},drawHit:function(a){var b=this.getLayer(),c=a||b&&b.hitCanvas;return b&&b.getClearBeforeDraw()&&b.getHitCanvas().getContext().clear(),Kinetic.Container.prototype.drawHit.call(this,c),this},getCanvas:function(){return this.canvas},getHitCanvas:function(){return this.hitCanvas},getContext:function(){return this.getCanvas().getContext()},clear:function(a){var b=this.getContext(),c=this.getHitCanvas().getContext();return b.clear(a),c.clear(a),this},setVisible:function(a){return Kinetic.Node.prototype.setVisible.call(this,a),a?(this.getCanvas()._canvas.style.display="block",this.hitCanvas._canvas.style.display="block"):(this.getCanvas()._canvas.style.display="none",this.hitCanvas._canvas.style.display="none"),this},setZIndex:function(a){Kinetic.Node.prototype.setZIndex.call(this,a);var b=this.getStage();return b&&(b.content.removeChild(this.getCanvas()._canvas),a<b.getChildren().length-1?b.content.insertBefore(this.getCanvas()._canvas,b.getChildren()[a+1].getCanvas()._canvas):b.content.appendChild(this.getCanvas()._canvas)),this},moveToTop:function(){Kinetic.Node.prototype.moveToTop.call(this);var a=this.getStage();a&&(a.content.removeChild(this.getCanvas()._canvas),a.content.appendChild(this.getCanvas()._canvas))},moveUp:function(){if(Kinetic.Node.prototype.moveUp.call(this)){var a=this.getStage();a&&(a.content.removeChild(this.getCanvas()._canvas),this.index<a.getChildren().length-1?a.content.insertBefore(this.getCanvas()._canvas,a.getChildren()[this.index+1].getCanvas()._canvas):a.content.appendChild(this.getCanvas()._canvas))}},moveDown:function(){if(Kinetic.Node.prototype.moveDown.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas()._canvas),a.content.insertBefore(this.getCanvas()._canvas,b[this.index+1].getCanvas()._canvas)}}},moveToBottom:function(){if(Kinetic.Node.prototype.moveToBottom.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas()._canvas),a.content.insertBefore(this.getCanvas()._canvas,b[1].getCanvas()._canvas)}}},getLayer:function(){return this},remove:function(){var a=this.getStage(),b=this.getCanvas(),c=b._canvas;return Kinetic.Node.prototype.remove.call(this),a&&c&&Kinetic.Util._isInDocument(c)&&a.content.removeChild(c),this},getStage:function(){return this.parent},enableHitGraph:function(){return this.setHitGraphEnabled(!0),this},disableHitGraph:function(){return this.setHitGraphEnabled(!1),this}}),Kinetic.Util.extend(Kinetic.Layer,Kinetic.Container),Kinetic.Factory.addGetterSetter(Kinetic.Layer,"clearBeforeDraw",!0),Kinetic.Factory.addGetterSetter(Kinetic.Layer,"hitGraphEnabled",!0),Kinetic.Collection.mapMethods(Kinetic.Layer)}(),function(){Kinetic.Util.addMethods(Kinetic.Group,{___init:function(a){this.nodeType="Group",Kinetic.Container.call(this,a)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to groups.")}}),Kinetic.Util.extend(Kinetic.Group,Kinetic.Container),Kinetic.Collection.mapMethods(Kinetic.Group)}(),function(){Kinetic.Rect=function(a){this.___init(a)},Kinetic.Rect.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Rect",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.getCornerRadius(),c=this.getWidth(),d=this.getHeight();a.beginPath(),b?(a.moveTo(b,0),a.lineTo(c-b,0),a.arc(c-b,b,b,3*Math.PI/2,0,!1),a.lineTo(c,d-b),a.arc(c-b,d-b,b,0,Math.PI/2,!1),a.lineTo(b,d),a.arc(b,d-b,b,Math.PI/2,Math.PI,!1),a.lineTo(0,b),a.arc(b,b,b,Math.PI,3*Math.PI/2,!1)):a.rect(0,0,c,d),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Rect,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Rect,"cornerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Rect)}(),function(){var a=2*Math.PI-1e-4,b="Circle";Kinetic.Circle=function(a){this.___init(a)},Kinetic.Circle.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className=b,this.sceneFunc(this._sceneFunc)},_sceneFunc:function(b){b.beginPath(),b.arc(0,0,this.getRadius(),0,a,!1),b.closePath(),b.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius()},getHeight:function(){return 2*this.getRadius()},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setRadius(a/2)},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setRadius(a/2)}},Kinetic.Util.extend(Kinetic.Circle,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Circle,"radius",0),Kinetic.Collection.mapMethods(Kinetic.Circle)}(),function(){var a=2*Math.PI-1e-4,b="Ellipse";Kinetic.Ellipse=function(a){this.___init(a)},Kinetic.Ellipse.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className=b,this.sceneFunc(this._sceneFunc)},_sceneFunc:function(b){var c=this.getRadius(),d=c.x,e=c.y;b.beginPath(),b.save(),d!==e&&b.scale(1,e/d),b.arc(0,0,d,0,a,!1),b.restore(),b.closePath(),b.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius().x},getHeight:function(){return 2*this.getRadius().y},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setRadius({x:a/2})},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setRadius({y:a/2})}},Kinetic.Util.extend(Kinetic.Ellipse,Kinetic.Shape),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Ellipse,"radius",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Ellipse,"radiusX",0),Kinetic.Factory.addGetterSetter(Kinetic.Ellipse,"radiusY",0),Kinetic.Collection.mapMethods(Kinetic.Ellipse)}(),function(){var a=2*Math.PI-1e-4;Kinetic.Ring=function(a){this.___init(a)},Kinetic.Ring.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Ring",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(b){b.beginPath(),b.arc(0,0,this.getInnerRadius(),0,a,!1),b.moveTo(this.getOuterRadius(),0),b.arc(0,0,this.getOuterRadius(),a,0,!0),b.closePath(),b.fillStrokeShape(this)},getWidth:function(){return 2*this.getOuterRadius()},getHeight:function(){return 2*this.getOuterRadius()},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setOuterRadius(a/2)},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setOuterRadius(a/2)}},Kinetic.Util.extend(Kinetic.Ring,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Ring,"innerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Ring,"outerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Ring)}(),function(){Kinetic.Wedge=function(a){this.___init(a)},Kinetic.Wedge.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Wedge",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){a.beginPath(),a.arc(0,0,this.getRadius(),0,this.getAngle()*Math.PI/180,this.getClockwise()),a.lineTo(0,0),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Wedge,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Wedge,"radius",0),Kinetic.Factory.addGetterSetter(Kinetic.Wedge,"angle",0),Kinetic.Factory.addGetterSetter(Kinetic.Wedge,"clockwise",!1),Kinetic.Factory.backCompat(Kinetic.Wedge,{angleDeg:"angle",getAngleDeg:"getAngle",setAngleDeg:"setAngle"}),Kinetic.Collection.mapMethods(Kinetic.Wedge)}(),function(){Kinetic.Arc=function(a){this.___init(a)},Kinetic.Arc.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Arc",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.angle()*Math.PI/180,c=this.clockwise();a.beginPath(),a.arc(0,0,this.getOuterRadius(),0,b,c),a.arc(0,0,this.getInnerRadius(),b,0,!c),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Arc,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"innerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"outerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"angle",0),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"clockwise",!1),Kinetic.Collection.mapMethods(Kinetic.Arc)}(),function(){var a="Image";Kinetic.Image=function(a){this.___init(a)},Kinetic.Image.prototype={___init:function(b){Kinetic.Shape.call(this,b),this.className=a,this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()},_sceneFunc:function(a){var b,c,d,e,f=this.getWidth(),g=this.getHeight(),h=this.getImage();h&&(b=this.getCrop(),c=b.width,d=b.height,e=c&&d?[h,b.x,b.y,c,d,0,0,f,g]:[h,0,0,f,g]),a.beginPath(),a.rect(0,0,f,g),a.closePath(),a.fillStrokeShape(this),h&&a.drawImage.apply(a,e)},_hitFunc:function(a){var b=this.getWidth(),c=this.getHeight();a.beginPath(),a.rect(0,0,b,c),a.closePath(),a.fillStrokeShape(this)},getWidth:function(){var a=this.getImage();return this.attrs.width||(a?a.width:0)},getHeight:function(){var a=this.getImage();return this.attrs.height||(a?a.height:0)}},Kinetic.Util.extend(Kinetic.Image,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Image,"image"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Image,"crop",["x","y","width","height"]),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropX",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropY",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropWidth",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropHeight",0),Kinetic.Collection.mapMethods(Kinetic.Image)}(),function(){function a(a){a.fillText(this.partialText,0,0)}function b(a){a.strokeText(this.partialText,0,0)}var c="auto",d="canvas",e="center",f="Change.kinetic",g="2d",h="-",i="",j="left",k="text",l="Text",m="middle",n="normal",o="px ",p=" ",q="right",r="word",s="char",t="none",u=["fontFamily","fontSize","fontStyle","padding","align","lineHeight","text","width","height","wrap"],v=u.length,w=document.createElement(d).getContext(g);Kinetic.Text=function(a){this.___init(a)},Kinetic.Text.prototype={___init:function(d){var e=this;void 0===d.width&&(d.width=c),void 0===d.height&&(d.height=c),Kinetic.Shape.call(this,d),this._fillFunc=a,this._strokeFunc=b,this.className=l;for(var g=0;v>g;g++)this.on(u[g]+f,e._setTextData);this._setTextData(),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(a){var b,c=this.getPadding(),d=this.getTextHeight(),f=this.getLineHeight()*d,g=this.textArr,h=g.length,i=this.getWidth();for(a.setAttr("font",this._getContextFont()),a.setAttr("textBaseline",m),a.setAttr("textAlign",j),a.save(),a.translate(c,0),a.translate(0,c+d/2),b=0;h>b;b++){var k=g[b],l=k.text,n=k.width;a.save(),this.getAlign()===q?a.translate(i-n-2*c,0):this.getAlign()===e&&a.translate((i-n-2*c)/2,0),this.partialText=l,a.fillStrokeShape(this),a.restore(),a.translate(0,f)}a.restore()},_hitFunc:function(a){var b=this.getWidth(),c=this.getHeight();a.beginPath(),a.rect(0,0,b,c),a.closePath(),a.fillStrokeShape(this)},setText:function(a){var b=Kinetic.Util._isString(a)?a:a.toString();return this._setAttr(k,b),this},getWidth:function(){return this.attrs.width===c?this.getTextWidth()+2*this.getPadding():this.attrs.width},getHeight:function(){return this.attrs.height===c?this.getTextHeight()*this.textArr.length*this.getLineHeight()+2*this.getPadding():this.attrs.height},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},_getTextSize:function(a){var b,c=w,d=this.getFontSize();return c.save(),c.font=this._getContextFont(),b=c.measureText(a),c.restore(),{width:b.width,height:parseInt(d,10)}},_getContextFont:function(){return this.getFontStyle()+p+this.getFontSize()+o+this.getFontFamily()},_addTextLine:function(a,b){return this.textArr.push({text:a,width:b})},_getTextWidth:function(a){return w.measureText(a).width},_setTextData:function(){var a=this.getText().split("\n"),b=+this.getFontSize(),d=0,e=this.getLineHeight()*b,f=this.attrs.width,g=this.attrs.height,i=f!==c,j=g!==c,k=this.getPadding(),l=f-2*k,m=g-2*k,n=0,q=this.getWrap(),r=q!==t,u=q!==s&&r;this.textArr=[],w.save(),w.font=this.getFontStyle()+p+b+o+this.getFontFamily();for(var v=0,x=a.length;x>v;++v){var y=a[v],z=this._getTextWidth(y);if(i&&z>l)for(;y.length>0;){for(var A=0,B=y.length,C="",D=0;B>A;){var E=A+B>>>1,F=y.slice(0,E+1),G=this._getTextWidth(F);l>=G?(A=E+1,C=F,D=G):B=E}if(!C)break;if(u){var H=Math.max(C.lastIndexOf(p),C.lastIndexOf(h))+1;H>0&&(A=H,C=C.slice(0,A),D=this._getTextWidth(C))}if(this._addTextLine(C,D),n+=e,!r||j&&n+e>m)break;if(y=y.slice(A),y.length>0&&(z=this._getTextWidth(y),l>=z)){this._addTextLine(y,z),n+=e;break}}else this._addTextLine(y,z),n+=e,d=Math.max(d,z);if(j&&n+e>m)break}w.restore(),this.textHeight=b,this.textWidth=d}},Kinetic.Util.extend(Kinetic.Text,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontFamily","Arial"),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontSize",12),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontStyle",n),Kinetic.Factory.addGetterSetter(Kinetic.Text,"padding",0),Kinetic.Factory.addGetterSetter(Kinetic.Text,"align",j),Kinetic.Factory.addGetterSetter(Kinetic.Text,"lineHeight",1),Kinetic.Factory.addGetterSetter(Kinetic.Text,"wrap",r),Kinetic.Factory.addGetter(Kinetic.Text,"text",i),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Text,"text"),Kinetic.Collection.mapMethods(Kinetic.Text)}(),function(){Kinetic.Line=function(a){this.___init(a)},Kinetic.Line.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Line",this.on("pointsChange.kinetic tensionChange.kinetic closedChange.kinetic",function(){this._clearCache("tensionPoints")}),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b,c,d,e=this.getPoints(),f=e.length,g=this.getTension(),h=this.getClosed();if(a.beginPath(),a.moveTo(e[0],e[1]),0!==g&&f>4){for(b=this.getTensionPoints(),c=b.length,d=h?0:4,h||a.quadraticCurveTo(b[0],b[1],b[2],b[3]);c-2>d;)a.bezierCurveTo(b[d++],b[d++],b[d++],b[d++],b[d++],b[d++]);h||a.quadraticCurveTo(b[c-2],b[c-1],e[f-2],e[f-1])}else for(d=2;f>d;d+=2)a.lineTo(e[d],e[d+1]);h?(a.closePath(),a.fillStrokeShape(this)):a.strokeShape(this)},getTensionPoints:function(){return this._getCache("tensionPoints",this._getTensionPoints)},_getTensionPoints:function(){return this.getClosed()?this._getTensionPointsClosed():Kinetic.Util._expandPoints(this.getPoints(),this.getTension())},_getTensionPointsClosed:function(){var a=this.getPoints(),b=a.length,c=this.getTension(),d=Kinetic.Util,e=d._getControlPoints(a[b-2],a[b-1],a[0],a[1],a[2],a[3],c),f=d._getControlPoints(a[b-4],a[b-3],a[b-2],a[b-1],a[0],a[1],c),g=Kinetic.Util._expandPoints(a,c),h=[e[2],e[3]].concat(g).concat([f[0],f[1],a[b-2],a[b-1],f[2],f[3],e[0],e[1],a[0],a[1]]);return h}},Kinetic.Util.extend(Kinetic.Line,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Line,"closed",!1),Kinetic.Factory.addGetterSetter(Kinetic.Line,"tension",0),Kinetic.Factory.addGetterSetter(Kinetic.Line,"points"),Kinetic.Collection.mapMethods(Kinetic.Line)}(),function(){Kinetic.Sprite=function(a){this.___init(a)},Kinetic.Sprite.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Sprite",this.anim=new Kinetic.Animation,this.on("animationChange.kinetic",function(){this.frameIndex(0)}),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(a){var b=this.getAnimation(),c=this.frameIndex(),d=4*c,e=this.getAnimations()[b],f=e[d+0],g=e[d+1],h=e[d+2],i=e[d+3],j=this.getImage();j&&a.drawImage(j,f,g,h,i,0,0,h,i)},_hitFunc:function(a){var b=this.getAnimation(),c=this.frameIndex(),d=4*c,e=this.getAnimations()[b],f=e[d+2],g=e[d+3];a.beginPath(),a.rect(0,0,f,g),a.closePath(),a.fillShape(this)},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()},start:function(){var a=this,b=this.getLayer();this.anim.setLayers(b),this.interval=setInterval(function(){a._updateIndex()},1e3/this.getFrameRate()),this.anim.start()},stop:function(){this.anim.stop(),clearInterval(this.interval)},_updateIndex:function(){var a=this.frameIndex(),b=this.getAnimation(),c=this.getAnimations(),d=c[b],e=d.length/4;e-1>a?this.frameIndex(a+1):this.frameIndex(0)}},Kinetic.Util.extend(Kinetic.Sprite,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"animation"),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"animations"),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"image"),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"frameIndex",0),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"frameRate",17),Kinetic.Factory.backCompat(Kinetic.Sprite,{index:"frameIndex",getIndex:"getFrameIndex",setIndex:"setFrameIndex"}),Kinetic.Collection.mapMethods(Kinetic.Sprite)}(),function(){Kinetic.Path=function(a){this.___init(a)},Kinetic.Path.prototype={___init:function(a){this.dataArray=[];var b=this;Kinetic.Shape.call(this,a),this.className="Path",this.dataArray=Kinetic.Path.parsePathData(this.getData()),this.on("dataChange.kinetic",function(){b.dataArray=Kinetic.Path.parsePathData(this.getData())}),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.dataArray,c=!1;a.beginPath();for(var d=0;d<b.length;d++){var e=b[d].command,f=b[d].points;switch(e){case"L":a.lineTo(f[0],f[1]);break;case"M":a.moveTo(f[0],f[1]);break;case"C":a.bezierCurveTo(f[0],f[1],f[2],f[3],f[4],f[5]);break;case"Q":a.quadraticCurveTo(f[0],f[1],f[2],f[3]);break;case"A":var g=f[0],h=f[1],i=f[2],j=f[3],k=f[4],l=f[5],m=f[6],n=f[7],o=i>j?i:j,p=i>j?1:i/j,q=i>j?j/i:1;a.translate(g,h),a.rotate(m),a.scale(p,q),a.arc(0,0,o,k,k+l,1-n),a.scale(1/p,1/q),a.rotate(-m),a.translate(-g,-h);break;case"z":a.closePath(),c=!0}}c?a.fillStrokeShape(this):a.strokeShape(this)}},Kinetic.Util.extend(Kinetic.Path,Kinetic.Shape),Kinetic.Path.getLineLength=function(a,b,c,d){return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))},Kinetic.Path.getPointOnLine=function(a,b,c,d,e,f,g){void 0===f&&(f=b),void 0===g&&(g=c);var h=(e-c)/(d-b+1e-8),i=Math.sqrt(a*a/(1+h*h));b>d&&(i*=-1);var j,k=h*i;if(d===b)j={x:f,y:g+k};else if((g-c)/(f-b+1e-8)===h)j={x:f+i,y:g+k};else{var l,m,n=this.getLineLength(b,c,d,e);if(1e-8>n)return void 0;var o=(f-b)*(d-b)+(g-c)*(e-c);o/=n*n,l=b+o*(d-b),m=c+o*(e-c);var p=this.getLineLength(f,g,l,m),q=Math.sqrt(a*a-p*p);i=Math.sqrt(q*q/(1+h*h)),b>d&&(i*=-1),k=h*i,j={x:l+i,y:m+k}}return j},Kinetic.Path.getPointOnCubicBezier=function(a,b,c,d,e,f,g,h,i){function j(a){return a*a*a}function k(a){return 3*a*a*(1-a)}function l(a){return 3*a*(1-a)*(1-a)}function m(a){return(1-a)*(1-a)*(1-a)}var n=h*j(a)+f*k(a)+d*l(a)+b*m(a),o=i*j(a)+g*k(a)+e*l(a)+c*m(a);return{x:n,y:o}},Kinetic.Path.getPointOnQuadraticBezier=function(a,b,c,d,e,f,g){function h(a){return a*a}function i(a){return 2*a*(1-a)}function j(a){return(1-a)*(1-a)}var k=f*h(a)+d*i(a)+b*j(a),l=g*h(a)+e*i(a)+c*j(a);
return{x:k,y:l}},Kinetic.Path.getPointOnEllipticalArc=function(a,b,c,d,e,f){var g=Math.cos(f),h=Math.sin(f),i={x:c*Math.cos(e),y:d*Math.sin(e)};return{x:a+(i.x*g-i.y*h),y:b+(i.x*h+i.y*g)}},Kinetic.Path.parsePathData=function(a){if(!a)return[];var b=a,c=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];b=b.replace(new RegExp(" ","g"),",");for(var d=0;d<c.length;d++)b=b.replace(new RegExp(c[d],"g"),"|"+c[d]);var e=b.split("|"),f=[],g=0,h=0;for(d=1;d<e.length;d++){var i=e[d],j=i.charAt(0);i=i.slice(1),i=i.replace(new RegExp(",-","g"),"-"),i=i.replace(new RegExp("-","g"),",-"),i=i.replace(new RegExp("e,-","g"),"e-");var k=i.split(",");k.length>0&&""===k[0]&&k.shift();for(var l=0;l<k.length;l++)k[l]=parseFloat(k[l]);for(;k.length>0&&!isNaN(k[0]);){var m,n,o,p,q,r,s,t,u,v,w=null,x=[],y=g,z=h;switch(j){case"l":g+=k.shift(),h+=k.shift(),w="L",x.push(g,h);break;case"L":g=k.shift(),h=k.shift(),x.push(g,h);break;case"m":var A=k.shift(),B=k.shift();if(g+=A,h+=B,w="M",f.length>2&&"z"===f[f.length-1].command)for(var C=f.length-2;C>=0;C--)if("M"===f[C].command){g=f[C].points[0]+A,h=f[C].points[1]+B;break}x.push(g,h),j="l";break;case"M":g=k.shift(),h=k.shift(),w="M",x.push(g,h),j="L";break;case"h":g+=k.shift(),w="L",x.push(g,h);break;case"H":g=k.shift(),w="L",x.push(g,h);break;case"v":h+=k.shift(),w="L",x.push(g,h);break;case"V":h=k.shift(),w="L",x.push(g,h);break;case"C":x.push(k.shift(),k.shift(),k.shift(),k.shift()),g=k.shift(),h=k.shift(),x.push(g,h);break;case"c":x.push(g+k.shift(),h+k.shift(),g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="C",x.push(g,h);break;case"S":n=g,o=h,m=f[f.length-1],"C"===m.command&&(n=g+(g-m.points[2]),o=h+(h-m.points[3])),x.push(n,o,k.shift(),k.shift()),g=k.shift(),h=k.shift(),w="C",x.push(g,h);break;case"s":n=g,o=h,m=f[f.length-1],"C"===m.command&&(n=g+(g-m.points[2]),o=h+(h-m.points[3])),x.push(n,o,g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="C",x.push(g,h);break;case"Q":x.push(k.shift(),k.shift()),g=k.shift(),h=k.shift(),x.push(g,h);break;case"q":x.push(g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="Q",x.push(g,h);break;case"T":n=g,o=h,m=f[f.length-1],"Q"===m.command&&(n=g+(g-m.points[0]),o=h+(h-m.points[1])),g=k.shift(),h=k.shift(),w="Q",x.push(n,o,g,h);break;case"t":n=g,o=h,m=f[f.length-1],"Q"===m.command&&(n=g+(g-m.points[0]),o=h+(h-m.points[1])),g+=k.shift(),h+=k.shift(),w="Q",x.push(n,o,g,h);break;case"A":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),u=g,v=h,g=k.shift(),h=k.shift(),w="A",x=this.convertEndpointToCenterParameterization(u,v,g,h,s,t,p,q,r);break;case"a":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),u=g,v=h,g+=k.shift(),h+=k.shift(),w="A",x=this.convertEndpointToCenterParameterization(u,v,g,h,s,t,p,q,r)}f.push({command:w||j,points:x,start:{x:y,y:z},pathLength:this.calcLength(y,z,w||j,x)})}("z"===j||"Z"===j)&&f.push({command:"z",points:[],start:void 0,pathLength:0})}return f},Kinetic.Path.calcLength=function(a,b,c,d){var e,f,g,h=Kinetic.Path;switch(c){case"L":return h.getLineLength(a,b,d[0],d[1]);case"C":for(e=0,f=h.getPointOnCubicBezier(0,a,b,d[0],d[1],d[2],d[3],d[4],d[5]),t=.01;1>=t;t+=.01)g=h.getPointOnCubicBezier(t,a,b,d[0],d[1],d[2],d[3],d[4],d[5]),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;return e;case"Q":for(e=0,f=h.getPointOnQuadraticBezier(0,a,b,d[0],d[1],d[2],d[3]),t=.01;1>=t;t+=.01)g=h.getPointOnQuadraticBezier(t,a,b,d[0],d[1],d[2],d[3]),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;return e;case"A":e=0;var i=d[4],j=d[5],k=d[4]+j,l=Math.PI/180;if(Math.abs(i-k)<l&&(l=Math.abs(i-k)),f=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],i,0),0>j)for(t=i-l;t>k;t-=l)g=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],t,0),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;else for(t=i+l;k>t;t+=l)g=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],t,0),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;return g=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],k,0),e+=h.getLineLength(f.x,f.y,g.x,g.y)}return 0},Kinetic.Path.convertEndpointToCenterParameterization=function(a,b,c,d,e,f,g,h,i){var j=i*(Math.PI/180),k=Math.cos(j)*(a-c)/2+Math.sin(j)*(b-d)/2,l=-1*Math.sin(j)*(a-c)/2+Math.cos(j)*(b-d)/2,m=k*k/(g*g)+l*l/(h*h);m>1&&(g*=Math.sqrt(m),h*=Math.sqrt(m));var n=Math.sqrt((g*g*h*h-g*g*l*l-h*h*k*k)/(g*g*l*l+h*h*k*k));e==f&&(n*=-1),isNaN(n)&&(n=0);var o=n*g*l/h,p=n*-h*k/g,q=(a+c)/2+Math.cos(j)*o-Math.sin(j)*p,r=(b+d)/2+Math.sin(j)*o+Math.cos(j)*p,s=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])},t=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(s(a)*s(b))},u=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(t(a,b))},v=u([1,0],[(k-o)/g,(l-p)/h]),w=[(k-o)/g,(l-p)/h],x=[(-1*k-o)/g,(-1*l-p)/h],y=u(w,x);return t(w,x)<=-1&&(y=Math.PI),t(w,x)>=1&&(y=0),0===f&&y>0&&(y-=2*Math.PI),1==f&&0>y&&(y+=2*Math.PI),[q,r,g,h,v,y,j,f]},Kinetic.Factory.addGetterSetter(Kinetic.Path,"data"),Kinetic.Collection.mapMethods(Kinetic.Path)}(),function(){function a(a){a.fillText(this.partialText,0,0)}function b(a){a.strokeText(this.partialText,0,0)}var c="",d="normal";Kinetic.TextPath=function(a){this.___init(a)},Kinetic.TextPath.prototype={___init:function(c){var d=this;this.dummyCanvas=document.createElement("canvas"),this.dataArray=[],Kinetic.Shape.call(this,c),this._fillFunc=a,this._strokeFunc=b,this._fillFuncHit=a,this._strokeFuncHit=b,this.className="TextPath",this.dataArray=Kinetic.Path.parsePathData(this.attrs.data),this.on("dataChange.kinetic",function(){d.dataArray=Kinetic.Path.parsePathData(this.attrs.data)}),this.on("textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic",d._setTextData),d._setTextData(),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){a.setAttr("font",this._getContextFont()),a.setAttr("textBaseline","middle"),a.setAttr("textAlign","left"),a.save();for(var b=this.glyphInfo,c=0;c<b.length;c++){a.save();var d=b[c].p0;a.translate(d.x,d.y),a.rotate(b[c].rotation),this.partialText=b[c].text,a.fillStrokeShape(this),a.restore()}a.restore()},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},setText:function(a){Kinetic.Text.prototype.setText.call(this,a)},_getTextSize:function(a){var b=this.dummyCanvas,c=b.getContext("2d");c.save(),c.font=this._getContextFont();var d=c.measureText(a);return c.restore(),{width:d.width,height:parseInt(this.attrs.fontSize,10)}},_setTextData:function(){var a=this,b=this._getTextSize(this.attrs.text);this.textWidth=b.width,this.textHeight=b.height,this.glyphInfo=[];for(var c,d,e,f=this.attrs.text.split(""),g=-1,h=0,i=function(){h=0;for(var b=a.dataArray,d=g+1;d<b.length;d++){if(b[d].pathLength>0)return g=d,b[d];"M"==b[d].command&&(c={x:b[d].points[0],y:b[d].points[1]})}return{}},j=function(b){var f=a._getTextSize(b).width,g=0,j=0;for(d=void 0;Math.abs(f-g)/f>.01&&25>j;){j++;for(var k=g;void 0===e;)e=i(),e&&k+e.pathLength<f&&(k+=e.pathLength,e=void 0);if(e==={}||void 0===c)return void 0;var l=!1;switch(e.command){case"L":Kinetic.Path.getLineLength(c.x,c.y,e.points[0],e.points[1])>f?d=Kinetic.Path.getPointOnLine(f,c.x,c.y,e.points[0],e.points[1],c.x,c.y):e=void 0;break;case"A":var m=e.points[4],n=e.points[5],o=e.points[4]+n;0===h?h=m+1e-8:f>g?h+=Math.PI/180*n/Math.abs(n):h-=Math.PI/360*n/Math.abs(n),(0>n&&o>h||n>=0&&h>o)&&(h=o,l=!0),d=Kinetic.Path.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],h,e.points[6]);break;case"C":0===h?h=f>e.pathLength?1e-8:f/e.pathLength:f>g?h+=(f-g)/e.pathLength:h-=(g-f)/e.pathLength,h>1&&(h=1,l=!0),d=Kinetic.Path.getPointOnCubicBezier(h,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3],e.points[4],e.points[5]);break;case"Q":0===h?h=f/e.pathLength:f>g?h+=(f-g)/e.pathLength:h-=(g-f)/e.pathLength,h>1&&(h=1,l=!0),d=Kinetic.Path.getPointOnQuadraticBezier(h,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3])}void 0!==d&&(g=Kinetic.Path.getLineLength(c.x,c.y,d.x,d.y)),l&&(l=!1,e=void 0)}},k=0;k<f.length&&(j(f[k]),void 0!==c&&void 0!==d);k++){var l=Kinetic.Path.getLineLength(c.x,c.y,d.x,d.y),m=0,n=Kinetic.Path.getPointOnLine(m+l/2,c.x,c.y,d.x,d.y),o=Math.atan2(d.y-c.y,d.x-c.x);this.glyphInfo.push({transposeX:n.x,transposeY:n.y,text:f[k],rotation:o,p0:c,p1:d}),c=d}}},Kinetic.TextPath.prototype._getContextFont=Kinetic.Text.prototype._getContextFont,Kinetic.Util.extend(Kinetic.TextPath,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.TextPath,"fontFamily","Arial"),Kinetic.Factory.addGetterSetter(Kinetic.TextPath,"fontSize",12),Kinetic.Factory.addGetterSetter(Kinetic.TextPath,"fontStyle",d),Kinetic.Factory.addGetter(Kinetic.TextPath,"text",c),Kinetic.Collection.mapMethods(Kinetic.TextPath)}(),function(){Kinetic.RegularPolygon=function(a){this.___init(a)},Kinetic.RegularPolygon.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="RegularPolygon",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b,c,d,e=this.attrs.sides,f=this.attrs.radius;for(a.beginPath(),a.moveTo(0,0-f),b=1;e>b;b++)c=f*Math.sin(2*b*Math.PI/e),d=-1*f*Math.cos(2*b*Math.PI/e),a.lineTo(c,d);a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.RegularPolygon,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon,"radius",0),Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon,"sides",0),Kinetic.Collection.mapMethods(Kinetic.RegularPolygon)}(),function(){Kinetic.Star=function(a){this.___init(a)},Kinetic.Star.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Star",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.innerRadius(),c=this.outerRadius(),d=this.numPoints();a.beginPath(),a.moveTo(0,0-c);for(var e=1;2*d>e;e++){var f=0===e%2?c:b,g=f*Math.sin(e*Math.PI/d),h=-1*f*Math.cos(e*Math.PI/d);a.lineTo(g,h)}a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Star,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Star,"numPoints",5),Kinetic.Factory.addGetterSetter(Kinetic.Star,"innerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Star,"outerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Star)}(),function(){var a=["fontFamily","fontSize","fontStyle","padding","lineHeight","text"],b="Change.kinetic",c="none",d="up",e="right",f="down",g="left",h="Label",i=a.length;Kinetic.Label=function(a){this.____init(a)},Kinetic.Label.prototype={____init:function(a){var b=this;this.className=h,Kinetic.Group.call(this,a),this.on("add.kinetic",function(a){b._addListeners(a.child),b._sync()})},getText:function(){return this.find("Text")[0]},getTag:function(){return this.find("Tag")[0]},_addListeners:function(c){var d,e=this,f=function(){e._sync()};for(d=0;i>d;d++)c.on(a[d]+b,f)},getWidth:function(){return this.getText().getWidth()},getHeight:function(){return this.getText().getHeight()},_sync:function(){var a,b,c,h,i,j,k=this.getText(),l=this.getTag();if(k&&l){switch(a=k.getWidth(),b=k.getHeight(),c=l.getPointerDirection(),h=l.getPointerWidth(),pointerHeight=l.getPointerHeight(),i=0,j=0,c){case d:i=a/2,j=-1*pointerHeight;break;case e:i=a+h,j=b/2;break;case f:i=a/2,j=b+pointerHeight;break;case g:i=-1*h,j=b/2}l.setAttrs({x:-1*i,y:-1*j,width:a,height:b}),k.setAttrs({x:-1*i,y:-1*j})}}},Kinetic.Util.extend(Kinetic.Label,Kinetic.Group),Kinetic.Collection.mapMethods(Kinetic.Label),Kinetic.Tag=function(a){this.___init(a)},Kinetic.Tag.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Tag",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.getWidth(),c=this.getHeight(),h=this.getPointerDirection(),i=this.getPointerWidth(),j=this.getPointerHeight();this.getCornerRadius(),a.beginPath(),a.moveTo(0,0),h===d&&(a.lineTo((b-i)/2,0),a.lineTo(b/2,-1*j),a.lineTo((b+i)/2,0)),a.lineTo(b,0),h===e&&(a.lineTo(b,(c-j)/2),a.lineTo(b+i,c/2),a.lineTo(b,(c+j)/2)),a.lineTo(b,c),h===f&&(a.lineTo((b+i)/2,c),a.lineTo(b/2,c+j),a.lineTo((b-i)/2,c)),a.lineTo(0,c),h===g&&(a.lineTo(0,(c+j)/2),a.lineTo(-1*i,c/2),a.lineTo(0,(c-j)/2)),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Tag,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"pointerDirection",c),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"pointerWidth",0),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"pointerHeight",0),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"cornerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Tag)}();
/*!
 * jQuery Final Countdown
 *
 * @author Pragmatic Mates, http://pragmaticmates.com
 * @version 1.1.1
 * @license GPL 2
 * @link https://github.com/PragmaticMates/jquery-final-countdown
 */

(function ($) {
    var settings;
    var timer;

    var circleSeconds;
    var circleMinutes;
    var circleHours;
    var circleDays;

    var layerSeconds;
    var layerMinutes;
    var layerHours;
    var layerDays;

    var element;
    var callbackFunction;

    $.fn.final_countdown = function(options, callback) {
        element = $(this);        

        var defaults = $.extend({
            start: undefined,
            end: undefined,
            now: undefined,
            selectors: {
                value_seconds: '.clock-seconds .val',
                canvas_seconds: 'canvas-seconds',
                value_minutes: '.clock-minutes .val',
                canvas_minutes: 'canvas-minutes',
                value_hours: '.clock-hours .val',
                canvas_hours: 'canvas-hours',
                value_days: '.clock-days .val',
                canvas_days: 'canvas-days'
            },
            seconds: {
                borderColor: '#7995D5',
                borderWidth: '6'
            },
            minutes: {
                borderColor: '#ACC742',
                borderWidth: '6'
            },
            hours: {
                borderColor: '#ECEFCB',
                borderWidth: '6'
            },
            days: {
                borderColor: '#FF9900',
                borderWidth: '6'
            }
        }, options);

        settings = $.extend({}, defaults, options);

        if (settings.start === undefined) {
            settings.start = element.data('start');
        }

        if (settings.end === undefined) {
            settings.end = element.data('end');
        }

        if (settings.now === undefined) {
            settings.now = element.data('now');
        }

        if (element.data('border-color')) {
            settings.seconds.borderColor = settings.minutes.borderColor = settings.hours.borderColor = settings.days.borderColor = element.data('border-color');
        }

        if (settings.now < settings.start ) {
            settings.start = settings.now;
            settings.end = settings.now;
        }

        if (settings.now > settings.end) {
            settings.start = settings.now;
            settings.end = settings.now;
        }

        if (typeof callback == 'function') { // make sure the callback is a function
            callbackFunction = callback;
        }
        
        responsive();
        dispatchTimer();
        prepareCounters();
        startCounters();
    };

    function responsive() {
        $(window).load(updateCircles);

        $(window).on('redraw', function() {
            switched = false;
            updateCircles();
        });
        $(window).on('resize', updateCircles);
    }

    function updateCircles() {     
        layerSeconds.draw();
        layerMinutes.draw();
        layerHours.draw();
        layerDays.draw();
    }

    function convertToDeg(degree) {
        return (Math.PI/180)*degree - (Math.PI/180)*90
    }

    function dispatchTimer() {
        timer = {
            total: Math.floor((settings.end - settings.start) / 86400),
            days: Math.floor((settings.end - settings.now ) / 86400),
            hours: 24 - Math.floor(((settings.end - settings.now) % 86400) / 3600),
            minutes: 60 - Math.floor((((settings.end - settings.now) % 86400) % 3600) / 60),
            seconds: 60 - Math.floor((((settings.end - settings.now) % 86400) % 3600) % 60 )
        }
    }

    function prepareCounters() {
        // Seconds
        var seconds_width = $('#' + settings.selectors.canvas_seconds).width()
        var secondsStage = new Kinetic.Stage({
            container: settings.selectors.canvas_seconds,
            width: seconds_width,
            height: seconds_width
        });

        circleSeconds = new Kinetic.Shape({
            drawFunc: function(context) {
                var seconds_width = $('#' + settings.selectors.canvas_seconds).width()
                var radius = seconds_width / 2 - settings.seconds.borderWidth / 2;
                var x = seconds_width / 2;
                var y = seconds_width / 2;

                context.beginPath();
                context.arc(x, y, radius, convertToDeg(0), convertToDeg(timer.seconds * 6));
                context.fillStrokeShape(this);

                $(settings.selectors.value_seconds).html(60 - timer.seconds);
            },
            stroke: settings.seconds.borderColor,
            strokeWidth: settings.seconds.borderWidth
        });

        layerSeconds = new Kinetic.Layer();
        layerSeconds.add(circleSeconds);
        secondsStage.add(layerSeconds);

        // Minutes
        var minutes_width = $('#' + settings.selectors.canvas_minutes).width();
        var minutesStage = new Kinetic.Stage({
            container: settings.selectors.canvas_minutes,
            width: minutes_width,
            height: minutes_width
        });

        circleMinutes = new Kinetic.Shape({
            drawFunc: function(context) {
                var minutes_width = $('#' + settings.selectors.canvas_minutes).width();
                var radius = minutes_width / 2 - settings.minutes.borderWidth / 2;
                var x = minutes_width / 2;
                var y = minutes_width / 2;

                context.beginPath();
                context.arc(x, y, radius, convertToDeg(0), convertToDeg(timer.minutes * 6));
                context.fillStrokeShape(this);

                $(settings.selectors.value_minutes).html(60 - timer.minutes);

            },
            stroke: settings.minutes.borderColor,
            strokeWidth: settings.minutes.borderWidth
        });

        layerMinutes = new Kinetic.Layer();
        layerMinutes.add(circleMinutes);
        minutesStage.add(layerMinutes);

        // Hours
        var hours_width = $('#' + settings.selectors.canvas_hours).width();
        var hoursStage = new Kinetic.Stage({
            container: settings.selectors.canvas_hours,
            width: hours_width,
            height: hours_width
        });

        circleHours = new Kinetic.Shape({
            drawFunc: function(context) {
                var hours_width = $('#' + settings.selectors.canvas_hours).width();
                var radius = hours_width / 2 - settings.hours.borderWidth/2;
                var x = hours_width / 2;
                var y = hours_width / 2;

                context.beginPath();
                context.arc(x, y, radius, convertToDeg(0), convertToDeg(timer.hours * 360 / 24));
                context.fillStrokeShape(this);

                $(settings.selectors.value_hours).html(24 - timer.hours);

            },
            stroke: settings.hours.borderColor,
            strokeWidth: settings.hours.borderWidth
        });

        layerHours = new Kinetic.Layer();
        layerHours.add(circleHours);
        hoursStage.add(layerHours);

        // Days
        var days_width = $('#' + settings.selectors.canvas_days).width();
        var daysStage = new Kinetic.Stage({
            container: settings.selectors.canvas_days,
            width: days_width,
            height: days_width
        });

        circleDays = new Kinetic.Shape({
            drawFunc: function(context) {
                var days_width = $('#' + settings.selectors.canvas_days).width();
                var radius = days_width/2 - settings.days.borderWidth/2;
                var x = days_width / 2;
                var y = days_width / 2;


                context.beginPath();
                if (timer.total == 0) {
                    context.arc(x, y, radius, convertToDeg(0), convertToDeg(360));
                } else {
                    context.arc(x, y, radius, convertToDeg(0), convertToDeg((360 / timer.total) * (timer.total - timer.days)));
                }
                context.fillStrokeShape(this);

                $(settings.selectors.value_days).html(timer.days);

            },
            stroke: settings.days.borderColor,
            strokeWidth: settings.days.borderWidth
        });

        layerDays = new Kinetic.Layer();
        layerDays.add(circleDays);
        daysStage.add(layerDays);
    }

    function startCounters() {        
        var interval = setInterval( function() {                        
            if (timer.seconds > 59 ) {
                if (60 - timer.minutes == 0 && 24 - timer.hours == 0 && timer.days == 0) {
                    clearInterval(interval);
                    if (callbackFunction !== undefined) {
                        callbackFunction.call(this); // brings the scope to the callback
                    }
                    return;
                }

                timer.seconds = 1;

                if (timer.minutes > 59) {
                    timer.minutes = 1;
                    layerMinutes.draw();
                    if (timer.hours > 23) {
                        timer.hours = 1;
                        if (timer.days > 0) {
                            timer.days--;
                            layerDays.draw();
                        }
                    } else {                        
                        timer.hours++;
                    }                    
                    layerHours.draw()
                } else {
                    timer.minutes++;
                }

                layerMinutes.draw();
            } else {            
                timer.seconds++;
            }

            layerSeconds.draw();
        }, 1000);
    }
})(jQuery);

$.fn.setAllToMaxHeight = function() {
    return this.height(Math.max.apply(this, $.map(this, function(e) {
        return $(e).height();
    })));
};

$.fn.setAllToMaxOuterHeight = function() {
    return this.outerHeight(Math.max.apply(this, $.map(this, function(e) {
        return $(e).outerHeight();
    })));
};


/**
 * Bootstrap Multiselect (https://github.com/davidstutz/bootstrap-multiselect)
 *
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2015 David Stutz
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2015 David Stutz
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function ($) {
    "use strict";// jshint ;_;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {
            after: ['options', 'value', 'selectedOptions', 'enable', 'disable'],

            init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect(config);

                if (allBindings.has('options')) {
                    var options = allBindings.get('options');
                    if (ko.isObservable(options)) {
                        ko.computed({
                            read: function() {
                                options();
                                setTimeout(function() {
                                    var ms = $element.data('multiselect');
                                    if (ms)
                                        ms.updateOriginalOptions();//Not sure how beneficial this is.
                                    $element.multiselect('rebuild');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        });
                    }
                }

                //value and selectedOptions are two-way, so these will be triggered even by our own actions.
                //It needs some way to tell if they are triggered because of us or because of outside change.
                //It doesn't loop but it's a waste of processing.
                if (allBindings.has('value')) {
                    var value = allBindings.get('value');
                    if (ko.isObservable(value)) {
                        ko.computed({
                            read: function() {
                                value();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                //Switched from arrayChange subscription to general subscription using 'refresh'.
                //Not sure performance is any better using 'select' and 'deselect'.
                if (allBindings.has('selectedOptions')) {
                    var selectedOptions = allBindings.get('selectedOptions');
                    if (ko.isObservable(selectedOptions)) {
                        ko.computed({
                            read: function() {
                                selectedOptions();
                                setTimeout(function() {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                var setEnabled = function (enable) {
                    setTimeout(function () {
                        if (enable)
                            $element.multiselect('enable');
                        else
                            $element.multiselect('disable');
                    });
                };

                if (allBindings.has('enable')) {
                    var enable = allBindings.get('enable');
                    if (ko.isObservable(enable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(enable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(enable);
                    }
                }

                if (allBindings.has('disable')) {
                    var disable = allBindings.get('disable');
                    if (ko.isObservable(disable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(!disable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(!disable);
                    }
                }

                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    $element.multiselect('destroy');
                });
            },

            update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect('setOptions', config);
                $element.multiselect('rebuild');
            }
        };
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index], index);
        }
    }

    /**
     * Constructor to create a new multiselect using the given select.
     *
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.$select = $(select);
        this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

        // Placeholder via data attributes
        if (this.$select.attr("data-placeholder")) {
            this.options.nonSelectedText = this.$select.data("placeholder");
        }

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;
        this.lastToggledInput = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onSelectAll = $.proxy(this.options.onSelectAll, this);
        this.options.onDeselectAll = $.proxy(this.options.onDeselectAll, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
        this.options.onInitialized = $.proxy(this.options.onInitialized, this);
        this.options.onFiltering = $.proxy(this.options.onFiltering, this);

        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();

        this.updateButtonText();
        this.updateSelectAll(true);

        if (this.options.enableClickableOptGroups && this.options.multiple) {
            this.updateOptGroups();
        }

        this.options.wasDisabled = this.$select.prop('disabled');
        if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
            this.disable();
        }

        this.$select.wrap('<span class="multiselect-native-select" />').after(this.$container);
        this.options.onInitialized(this.$select, this.$container);
    }

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             *
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function(options, select) {
                if (this.disabledText.length > 0
                        && (select.prop('disabled') || (options.length == 0 && this.disableIfEmpty)))  {

                    return this.disabledText;
                }
                else if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else if (this.allSelectedText
                        && options.length === $('option', $(select)).length
                        && $('option', $(select)).length !== 1
                        && this.multiple) {

                    if (this.selectAllNumber) {
                        return this.allSelectedText + ' (' + options.length + ')';
                    }
                    else {
                        return this.allSelectedText;
                    }
                }
                else if (options.length > this.numberDisplayed) {
                    return options.length + ' ' + this.nSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;

                    options.each(function() {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });

                    return selected.substr(0, selected.length - this.delimiterText.length);
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             *
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function(options, select) {
                return;//don't show tootip on selectbox
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;

                    options.each(function () {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });
                    return selected.substr(0, selected.length - this.delimiterText.length);
                }
            },
            checkboxName: function(option) {
                return false; // no checkbox name
            },
            /**
             * Create a label.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionLabel: function(element){
                return $(element).attr('label') || $(element).text();
            },
            /**
             * Create a class.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionClass: function(element) {
                return $(element).attr('class') || '';
            },
            /**
             * Triggered on change of the multiselect.
             *
             * Not triggered when selecting/deselecting options manually.
             *
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange : function(option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShow: function(event) {

            },
            /**
             * Triggered when the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHide: function(event) {

            },
            /**
             * Triggered after the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShown: function(event) {

            },
            /**
             * Triggered after the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHidden: function(event) {

            },
            /**
             * Triggered on select all.
             */
            onSelectAll: function() {

            },
            /**
             * Triggered on deselect all.
             */
            onDeselectAll: function() {

            },
            /**
             * Triggered after initializing.
             *
             * @param {jQuery} $select
             * @param {jQuery} $container
             */
            onInitialized: function($select, $container) {

            },
            /**
             * Triggered on filtering.
             *
             * @param {jQuery} $filter
             */
            onFiltering: function($filter) {

            },
            enableHTML: false,
            buttonClass: 'btn btn-default',
            inheritClass: false,
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            dropRight: false,
            dropUp: false,
            selectedClass: 'active',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            selectAllName: false,
            selectAllNumber: true,
            selectAllJustVisible: true,
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            enableFullValueFiltering: false,
            enableClickableOptGroups: false,
            enableCollapsibleOptGroups: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            includeFilterClearBtn: true,
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            allSelectedText: 'All selected',
            numberDisplayed: 3,
            disableIfEmpty: false,
            disabledText: '',
            delimiterText: ', ',
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
                li: '<li><a tabindex="0"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);
            if (this.$select.attr('class') && this.options.inheritClass) {
                this.$button.addClass(this.$select.attr('class'));
            }
            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width' : '100%', //this.options.buttonWidth,
                    'overflow' : 'hidden',
                    'text-overflow' : 'ellipsis'
                });
                this.$container.css({
                    'width': this.options.buttonWidth
                });
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }

            if (this.options.dropUp) {

                var height = Math.min(this.options.maxHeight, $('option[data-role!="divider"]', this.$select).length*26 + $('option[data-role="divider"]', this.$select).length*19 + (this.options.includeSelectAllOption ? 26 : 0) + (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering ? 44 : 0));
                var moveCalc = height + 34;

                this.$ul.css({
                    'max-height': height + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    'margin-top': "-" + moveCalc + 'px'
                });
            }

            this.$container.append(this.$ul);
        },

        /**
         * Build the dropdown options and binds all necessary events.
         *
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {

                var $element = $(element);
                // Support optgroups and options without a group simultaneously.
                var tag = $element.prop('tagName')
                    .toLowerCase();

                if ($element.prop('value') === this.options.selectAllValue) {
                    return;
                }

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($element.data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element);
                    }

                }

                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li:not(.multiselect-group) input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.closest('li')
                            .addClass(this.options.selectedClass);
                    }
                    else {
                        $target.closest('li')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {

                    if (checked) {
                        this.selectAll(this.options.selectAllJustVisible, true);
                    }
                    else {
                        this.deselectAll(this.options.selectAllJustVisible, true);
                    }
                }
                else {
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        }
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.closest("a").css("outline", "");
                        }
                    }
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }

                    // To prevent select all from firing onChange: #575
                    this.options.onChange($option, checked);

                    // Do not update select all or optgroups on select all change!
                    this.updateSelectAll();

                    if (this.options.enableClickableOptGroups && this.options.multiple) {
                        this.updateOptGroups();
                    }
                }

                this.$select.change();
                this.updateButtonText();

                if(this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('mousedown', function(e) {
                if (e.shiftKey) {
                    // Prevent selecting text by Shift+click
                    return false;
                }
            });

            $('li a', this.$ul).on('touchstart click', $.proxy(function(event) {
                event.stopPropagation();

                var $target = $(event.target);

                if (event.shiftKey && this.options.multiple) {
                    if($target.is("label")){ // Handles checkbox selection manually (see https://github.com/davidstutz/bootstrap-multiselect/issues/431)
                        event.preventDefault();
                        $target = $target.find("input");
                        $target.prop("checked", !$target.prop("checked"));
                    }
                    var checked = $target.prop('checked') || false;

                    if (this.lastToggledInput !== null && this.lastToggledInput !== $target) { // Make sure we actually have a range
                        var from = $target.closest("li").index();
                        var to = this.lastToggledInput.closest("li").index();

                        if (from > to) { // Swap the indices
                            var tmp = to;
                            to = from;
                            from = tmp;
                        }

                        // Make sure we grab all elements since slice excludes the last index
                        ++to;

                        // Change the checkboxes and underlying options
                        var range = this.$ul.find("li").slice(from, to).find("input");

                        range.prop('checked', checked);

                        if (this.options.selectedClass) {
                            range.closest('li')
                                .toggleClass(this.options.selectedClass, checked);
                        }

                        for (var i = 0, j = range.length; i < j; i++) {
                            var $checkbox = $(range[i]);

                            var $option = this.getOptionByValue($checkbox.val());

                            $option.prop('selected', checked);
                        }
                    }

                    // Trigger the select "change" event
                    $target.trigger("change");
                }

                // Remembers last clicked option
                if($target.is("input") && !$target.closest("li").is(".multiselect-item")){
                    this.lastToggledInput = $target;
                }

                $target.blur();
            }, this));

            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }

                if (event.keyCode === 9 && this.$container.hasClass('open')) {
                    this.$button.click();
                }
                else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    }
                    else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop("checked", !$checkbox.prop("checked"));
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                $("li.multiselect-group input", this.$ul).on("change", $.proxy(function(event) {
                    event.stopPropagation();

                    var $target = $(event.target);
                    var checked = $target.prop('checked') || false;

                    var $li = $(event.target).closest('li');
                    var $group = $li.nextUntil("li.multiselect-group")
                        .not('.multiselect-filter-hidden')
                        .not('.disabled');

                    var $inputs = $group.find("input");

                    var values = [];
                    var $options = [];

                    if (this.options.selectedClass) {
                        if (checked) {
                            $li.addClass(this.options.selectedClass);
                        }
                        else {
                            $li.removeClass(this.options.selectedClass);
                        }
                    }

                    $.each($inputs, $.proxy(function(index, input) {
                        var value = $(input).val();
                        var $option = this.getOptionByValue(value);

                        if (checked) {
                            $(input).prop('checked', true);
                            $(input).closest('li')
                                .addClass(this.options.selectedClass);

                            $option.prop('selected', true);
                        }
                        else {
                            $(input).prop('checked', false);
                            $(input).closest('li')
                                .removeClass(this.options.selectedClass);

                            $option.prop('selected', false);
                        }

                        $options.push(this.getOptionByValue(value));
                    }, this))

                    // Cannot use select or deselect here because it would call updateOptGroups again.

                    this.options.onChange($options, checked);

                    this.updateButtonText();
                    this.updateSelectAll();
                }, this));
            }

            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                $("li.multiselect-group .caret-container", this.$ul).on("click", $.proxy(function(event) {
                    var $li = $(event.target).closest('li');
                    var $inputs = $li.nextUntil("li.multiselect-group")
                            .not('.multiselect-filter-hidden');

                    var visible = true;
                    $inputs.each(function() {
                        visible = visible && $(this).is(':visible');
                    });

                    if (visible) {
                        $inputs.hide()
                            .addClass('multiselect-collapsible-hidden');
                    }
                    else {
                        $inputs.show()
                            .removeClass('multiselect-collapsible-hidden');
                    }
                }, this));

                $("li.multiselect-all", this.$ul).css('background', '#f3f3f3').css('border-bottom', '1px solid #eaeaea');
                $("li.multiselect-all > a > label.checkbox", this.$ul).css('padding', '3px 20px 3px 35px');
                $("li.multiselect-group > a > input", this.$ul).css('margin', '4px 0px 5px -20px');
            }
        },

        /**
         * Create an option using the given select option.
         *
         * @param {jQuery} element
         */
        createOptionValue: function(element) {
            var $element = $(element);
            if ($element.is(':selected')) {
                $element.prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.optionLabel(element);
            var classes = this.options.optionClass(element);
            var value = $element.val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            var $label = $('label', $li);
            $label.addClass(inputType);
            $li.addClass(classes);

            if (this.options.enableHTML) {
                $label.html(" " + label);
            }
            else {
                $label.text(" " + label);
            }

            var $checkbox = $('<input/>').attr('type', inputType);

            var name = this.options.checkboxName($element);
            if (name) {
                $checkbox.attr('name', name);
            }

            $label.prepend($checkbox);

            var selected = $element.prop('selected') || false;
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            $label.attr('title', $element.attr('title'));

            this.$ul.append($li);

            if ($element.is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .closest('a')
                    .attr("tabindex", "-1")
                    .closest('li')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.closest('li')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         *
         * @param {jQuery} element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         *
         * @param {jQuery} group
         */
        createOptgroup: function(group) {
            var label = $(group).attr("label");
            var value = $(group).attr("value");
            var $li = $('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><label><b></b></label></a></li>');

            var classes = this.options.optionClass(group);
            $li.addClass(classes);

            if (this.options.enableHTML) {
                $('label b', $li).html(" " + label);
            }
            else {
                $('label b', $li).text(" " + label);
            }

            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                $('a', $li).append('<span class="caret-container"><b class="caret"></b></span>');
            }

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                $('a label', $li).prepend('<input type="checkbox" value="' + value + '"/>');
            }

            if ($(group).is(':disabled')) {
                $li.addClass('disabled');
            }

            this.$ul.append($li);

            $("option", group).each($.proxy(function($, group) {
                this.createOptionValue(group);
            }, this))
        },

        /**
         * Build the select all.
         *
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            if (typeof this.options.selectAllValue === 'number') {
                this.options.selectAllValue = this.options.selectAllValue.toString();
            }

            var alreadyHasSelectAll = this.hasSelectAll();

            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                    && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {

                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
                }

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox");

                if (this.options.enableHTML) {
                    $('label', $li).html(" " + this.options.selectAllText);
                }
                else {
                    $('label', $li).text(" " + this.options.selectAllText);
                }

                if (this.options.selectAllName) {
                    $('label', $li).prepend('<input type="checkbox" name="' + this.options.selectAllName + '" />');
                }
                else {
                    $('label', $li).prepend('<input type="checkbox" />');
                }

                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);

                    // Adds optional filter clear button
                    if(this.options.includeFilterClearBtn) {
                        var clearBtn = $(this.options.templates.filterClearBtn);
                        clearBtn.on('click', $.proxy(function(event){
                            clearTimeout(this.searchTimeout);

                            this.$filter.find('.multiselect-search').val('');
                            $('li', this.$ul).show().removeClass('multiselect-filter-hidden');

                            this.updateSelectAll();

                            if (this.options.enableClickableOptGroups && this.options.multiple) {
                                this.updateOptGroups();
                            }

                        }, this));
                        this.$filter.find('.input-group').append(clearBtn);
                    }

                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function(event) {
                        // Cancel enter key default behaviour
                        if (event.which === 13) {
                          event.preventDefault();
                      }

                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function() {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                var currentGroup, currentGroupVisible;
                                $.each($('li', this.$ul), $.proxy(function(index, element) {
                                    var value = $('input', element).length > 0 ? $('input', element).val() : "";
                                    var text = $('label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                    }
                                    else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                    }
                                    else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                    }

                                    if (value !== this.options.selectAllValue && text) {

                                        // By default lets assume that element is not
                                        // interesting for this search.
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering) {
                                            filterCandidate = filterCandidate.toLowerCase();
                                            this.query = this.query.toLowerCase();
                                        }

                                        if (this.options.enableFullValueFiltering && this.options.filterBehavior !== 'both') {
                                            var valueToMatch = filterCandidate.trim().substring(0, this.query.length);
                                            if (this.query.indexOf(valueToMatch) > -1) {
                                                showElement = true;
                                            }
                                        }
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        // Toggle current element (group or group item) according to showElement boolean.
                                        $(element).toggle(showElement)
                                            .toggleClass('multiselect-filter-hidden', !showElement);

                                        // Differentiate groups and group items.
                                        if ($(element).hasClass('multiselect-group')) {
                                            // Remember group status.
                                            currentGroup = element;
                                            currentGroupVisible = showElement;
                                        }
                                        else {
                                            // Show group name when at least one of its items is visible.
                                            if (showElement) {
                                                $(currentGroup).show()
                                                    .removeClass('multiselect-filter-hidden');
                                            }

                                            // Show all group items when group name satisfies filter.
                                            if (!showElement && currentGroupVisible) {
                                                $(element).show()
                                                    .removeClass('multiselect-filter-hidden');
                                            }
                                        }
                                    }
                                }, this));
                            }

                            this.updateSelectAll();

                            if (this.options.enableClickableOptGroups && this.options.multiple) {
                                this.updateOptGroups();
                            }

                            this.options.onFiltering(event.target);

                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();

            // reset original state
            this.$select.prop('disabled', this.options.wasDisabled);

            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function () {
            var inputs = $.map($('li input', this.$ul), $);

            $('option', this.$select).each($.proxy(function (index, element) {
                var $elem = $(element);
                var value = $elem.val();
                var $input;
                for (var i = inputs.length; 0 < i--; /**/) {
                    if (value !== ($input = inputs[i]).val())
                        continue; // wrong li

                    if ($elem.is(':selected')) {
                        $input.prop('checked', true);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .addClass(this.options.selectedClass);
                        }
                    }
                    else {
                        $input.prop('checked', false);

                        if (this.options.selectedClass) {
                            $input.closest('li')
                                .removeClass(this.options.selectedClass);
                        }
                    }

                    if ($elem.is(":disabled")) {
                        $input.attr('disabled', 'disabled')
                            .prop('disabled', true)
                            .closest('li')
                            .addClass('disabled');
                    }
                    else {
                        $input.prop('disabled', false)
                            .closest('li')
                            .removeClass('disabled');
                    }
                    break; // assumes unique values
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Select all options of the given values.
         *
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         *
         * @param {Array} selectValues
         * @param {Boolean} triggerOnChange
         */
        select: function(selectValues, triggerOnChange) {
            if(!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (!this.options.multiple) {
                    this.deselectAll(false);
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);

                if (triggerOnChange) {
                    this.options.onChange($option, true);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Clears all selected items.
         */
        clearSelection: function () {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Deselects all options of the given values.
         *
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         *
         * @param {Array} deselectValues
         * @param {Boolean} triggerOnChange
         */
        deselect: function(deselectValues, triggerOnChange) {
            if(!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {
                var value = deselectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);

                if (triggerOnChange) {
                    this.options.onChange($option, false);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Selects all enabled & visible options.
         *
         * If justVisible is true or not specified, only visible options are selected.
         *
         * @param {Boolean} justVisible
         * @param {Boolean} triggerOnSelectAll
         */
        selectAll: function (justVisible, triggerOnSelectAll) {

            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            var allLis = $("li:not(.divider):not(.disabled):not(.multiselect-group)", this.$ul);
            var visibleLis = $("li:not(.divider):not(.disabled):not(.multiselect-group):not(.multiselect-filter-hidden):not(.multiselect-collapisble-hidden)", this.$ul).filter(':visible');

            if(justVisible) {
                $('input:enabled' , visibleLis).prop('checked', true);
                visibleLis.addClass(this.options.selectedClass);

                $('input:enabled' , visibleLis).each($.proxy(function(index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    $(option).prop('selected', true);
                }, this));
            }
            else {
                $('input:enabled' , allLis).prop('checked', true);
                allLis.addClass(this.options.selectedClass);

                $('input:enabled' , allLis).each($.proxy(function(index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    $(option).prop('selected', true);
                }, this));
            }

            $('li input[value="' + this.options.selectAllValue + '"]', this.$ul).prop('checked', true);

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }

            if (triggerOnSelectAll) {
                this.options.onSelectAll();
            }
        },

        /**
         * Deselects all options.
         *
         * If justVisible is true or not specified, only visible options are deselected.
         *
         * @param {Boolean} justVisible
         */
        deselectAll: function (justVisible, triggerOnDeselectAll) {

            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            var allLis = $("li:not(.divider):not(.disabled):not(.multiselect-group)", this.$ul);
            var visibleLis = $("li:not(.divider):not(.disabled):not(.multiselect-group):not(.multiselect-filter-hidden):not(.multiselect-collapisble-hidden)", this.$ul).filter(':visible');

            if(justVisible) {
                $('input[type="checkbox"]:enabled' , visibleLis).prop('checked', false);
                visibleLis.removeClass(this.options.selectedClass);

                $('input[type="checkbox"]:enabled' , visibleLis).each($.proxy(function(index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    $(option).prop('selected', false);
                }, this));
            }
            else {
                $('input[type="checkbox"]:enabled' , allLis).prop('checked', false);
                allLis.removeClass(this.options.selectedClass);

                $('input[type="checkbox"]:enabled' , allLis).each($.proxy(function(index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    $(option).prop('selected', false);
                }, this));
            }

            $('li input[value="' + this.options.selectAllValue + '"]', this.$ul).prop('checked', false);

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }

            if (triggerOnDeselectAll) {
                this.options.onDeselectAll();
            }
        },

        /**
         * Rebuild the plugin.
         *
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();

            this.updateButtonText();
            this.updateSelectAll(true);

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }

            if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
                this.disable();
            }
            else {
                this.enable();
            }

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }
        },

        /**
         * The provided data will be used to build the dropdown.
         */
        dataprovider: function(dataprovider) {

            var groupCounter = 0;
            var $select = this.$select.empty();

            $.each(dataprovider, function (index, option) {
                var $tag;

                if ($.isArray(option.children)) { // create optiongroup tag
                    groupCounter++;

                    $tag = $('<optgroup/>').attr({
                        label: option.label || 'Group ' + groupCounter,
                        disabled: !!option.disabled
                    });

                    forEach(option.children, function(subOption) { // add children option tags
                        var attributes = {
                            value: subOption.value,
                            label: subOption.label || subOption.value,
                            title: subOption.title,
                            selected: !!subOption.selected,
                            disabled: !!subOption.disabled
                        };

                        //Loop through attributes object and add key-value for each attribute
                       for (var key in subOption.attributes) {
                            attributes['data-' + key] = subOption.attributes[key];
                       }
                         //Append original attributes + new data attributes to option
                        $tag.append($('<option/>').attr(attributes));
                    });
                }
                else {

                    var attributes = {
                        'value': option.value,
                        'label': option.label || option.value,
                        'title': option.title,
                        'class': option.class,
                        'selected': !!option.selected,
                        'disabled': !!option.disabled
                    };
                    //Loop through attributes object and add key-value for each attribute
                    for (var key in option.attributes) {
                      attributes['data-' + key] = option.attributes[key];
                    }
                    //Append original attributes + new data attributes to option
                    $tag = $('<option/>').attr(attributes);

                    $tag.text(option.label || option.value);
                }

                $select.append($tag);
            });

            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
        },

        /**
         * Set the options.
         *
         * @param {Array} options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         *
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function(options) {
            return $.extend(true, {}, this.defaults, this.options, options);
        },

        /**
         * Checks whether a select all checkbox is present.
         *
         * @returns {Boolean}
         */
        hasSelectAll: function() {
            return $('li.multiselect-all', this.$ul).length > 0;
        },

        /**
         * Update opt groups.
         */
        updateOptGroups: function() {
            var $groups = $('li.multiselect-group', this.$ul)
            var selectedClass = this.options.selectedClass;

            $groups.each(function() {
                var $options = $(this).nextUntil('li.multiselect-group')
                    .not('.multiselect-filter-hidden')
                    .not('.disabled');

                var checked = true;
                $options.each(function() {
                    var $input = $('input', this);

                    if (!$input.prop('checked')) {
                        checked = false;
                    }
                });

                if (selectedClass) {
                    if (checked) {
                        $(this).addClass(selectedClass);
                    }
                    else {
                        $(this).removeClass(selectedClass);
                    }
                }

                $('input', this).prop('checked', checked);
            });
        },

        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function(notTriggerOnSelectAll) {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.multiselect-filter-hidden):not(.multiselect-group):not(.disabled) input:enabled", this.$ul);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllLi  = $("li.multiselect-all", this.$ul);
                var selectAllInput = selectAllLi.find("input");

                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
                }
                else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
                }
            }
        },

        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();

            // First update the displayed button text.
            if (this.options.enableHTML) {
                $('.multiselect .multiselect-selected-text', this.$container).html(this.options.buttonText(options, this.$select));
            }
            else {
                $('.multiselect .multiselect-selected-text', this.$container).text(this.options.buttonText(options, this.$select));
            }

            // Now update the title attribute of the button.
            $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
        },

        /**
         * Get all selected options.
         *
         * @returns {jQUery}
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {

            var checkboxes = $('li input:not(.multiselect-search)', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
            }, timeout);
        },

        setAllSelectedText: function(allSelectedText) {
            this.options.allSelectedText = allSelectedText;
            this.updateButtonText();
        }
    };

    $.fn.multiselect = function(option, parameter, extraOptions) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);

                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function() {
        $("select[data-role=multiselect]").multiselect();
    });

}(window.jQuery);
