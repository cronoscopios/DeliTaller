!function(e){e.fn.viewportChecker=function(o){var t={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(e,o){},scrollHorizontal:!1,scrollBox:window};e.extend(t,o);var a=this,s={height:e(t.scrollBox).height(),width:e(t.scrollBox).width()},l=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")||-1!=navigator.userAgent.toLowerCase().indexOf("windows phone")?"body":"html";return this.checkElements=function(){var o,i;t.scrollHorizontal?(o=e(l).scrollLeft(),i=o+s.width):(o=e(l).scrollTop(),i=o+s.height),a.each(function(){var a=e(this),l={},n={};if(a.data("vp-add-class")&&(n.classToAdd=a.data("vp-add-class")),a.data("vp-remove-class")&&(n.classToRemove=a.data("vp-remove-class")),a.data("vp-add-class-full-view")&&(n.classToAddForFullView=a.data("vp-add-class-full-view")),a.data("vp-keep-add-class")&&(n.removeClassAfterAnimation=a.data("vp-remove-after-animation")),a.data("vp-offset")&&(n.offset=a.data("vp-offset")),a.data("vp-repeat")&&(n.repeat=a.data("vp-repeat")),a.data("vp-scrollHorizontal")&&(n.scrollHorizontal=a.data("vp-scrollHorizontal")),a.data("vp-invertBottomOffset")&&(n.scrollHorizontal=a.data("vp-invertBottomOffset")),e.extend(l,t),e.extend(l,n),!a.data("vp-animated")||l.repeat){String(l.offset).indexOf("%")>0&&(l.offset=parseInt(l.offset)/100*s.height);var d=l.scrollHorizontal?a.offset().left:a.offset().top,r=l.scrollHorizontal?d+a.width():d+a.height(),c=Math.round(d)+l.offset,v=l.scrollHorizontal?c+a.width():c+a.height();l.invertBottomOffset&&(v-=2*l.offset),c<i&&v>o?(a.removeClass(l.classToRemove),a.addClass(l.classToAdd),l.callbackFunction(a,"add"),r<=i&&d>=o?a.addClass(l.classToAddForFullView):a.removeClass(l.classToAddForFullView),a.data("vp-animated",!0),l.removeClassAfterAnimation&&a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a.removeClass(l.classToAdd)})):a.hasClass(l.classToAdd)&&l.repeat&&(a.removeClass(l.classToAdd+" "+l.classToAddForFullView),l.callbackFunction(a,"remove"),a.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&e(document).bind("touchmove MSPointerMove pointermove",this.checkElements),e(t.scrollBox).bind("load scroll",this.checkElements),e(window).resize(function(o){s={height:e(t.scrollBox).height(),width:e(t.scrollBox).width()},a.checkElements()}),this.checkElements(),this}}(jQuery);