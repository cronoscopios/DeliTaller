!function(e){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()}),e.requestAnimationFrame||function(){for(var t=["webkit","moz"],n=0;n<t.length&&!e.requestAnimationFrame;++n){var o=t[n];e.requestAnimationFrame=e[o+"RequestAnimationFrame"],e.cancelAnimationFrame=e[o+"CancelAnimationFrame"]||e[o+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)||!e.requestAnimationFrame||!e.cancelAnimationFrame){var i=0;e.requestAnimationFrame=function(e){var t=Date.now(),n=Math.max(i+16,t);return setTimeout(function(){e(i=n)},n-t)},e.cancelAnimationFrame=clearTimeout}}();var t,n,o=function(){if(!e.getComputedStyle)return!1;var t,n=document.createElement("p"),o={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};(document.body||document.documentElement).insertBefore(n,null);for(var i in o)void 0!==n.style[i]&&(n.style[i]="translate3d(1px,1px,1px)",t=e.getComputedStyle(n).getPropertyValue(o[i]));return(document.body||document.documentElement).removeChild(n),void 0!==t&&t.length>0&&"none"!==t}(),i=navigator.userAgent.toLowerCase().indexOf("android")>-1,a=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!e.MSStream,r=!!e.opera,l=/Edge\/\d+/.test(navigator.userAgent),s=/Trident.*rv[ :]*11\./.test(navigator.userAgent),m=!!Function("/*@cc_on return document.documentMode===10@*/")(),c=document.all&&!e.atob;function p(){t=e.innerWidth||document.documentElement.clientWidth,n=e.innerHeight||document.documentElement.clientHeight}p();var u=[],d=function(){var e=0;return function(t,n){var o,c=this;if(c.$item=t,c.defaults={type:"scroll",speed:.5,imgSrc:null,imgWidth:null,imgHeight:null,enableTransform:!0,elementInViewport:null,zIndex:-100,noAndroid:!1,noIos:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null},o=JSON.parse(c.$item.getAttribute("data-jarallax")||"{}"),c.options=c.extend({},c.defaults,o,n),!(i&&c.options.noAndroid||a&&c.options.noIos)){c.options.speed=Math.min(2,Math.max(-1,parseFloat(c.options.speed)));var p=c.options.elementInViewport;p&&"object"==typeof p&&void 0!==p.length&&(p=p[0]),!p instanceof Element&&(p=null),c.options.elementInViewport=p,c.instanceID=e++,c.image={src:c.options.imgSrc||null,$container:null,$item:null,width:c.options.imgWidth||null,height:c.options.imgHeight||null,useImgTag:a||i||r||s||m||l},c.initImg()&&c.init()}}}();function g(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,function(){n.call(e)})}function f(t){e.requestAnimationFrame(function(){"scroll"!==t.type&&p();for(var e=0,n=u.length;e<n;e++)"scroll"!==t.type&&(u[e].coverImage(),u[e].clipContainer()),u[e].onScroll()})}d.prototype.css=function(t,n){if("string"==typeof n)return e.getComputedStyle?e.getComputedStyle(t).getPropertyValue(n):t.style[n];n.transform&&(n.WebkitTransform=n.MozTransform=n.transform);for(var o in n)t.style[o]=n[o];return t},d.prototype.extend=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},d.prototype.initImg=function(){var e=this;return null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!e.image.src||"none"===e.image.src)},d.prototype.init=function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},n={position:"fixed"};e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{visibility:"hidden","z-index":e.options.zIndex}),e.image.$container.setAttribute("id","jarallax-container-"+e.instanceID),e.$item.appendChild(e.image.$container),e.image.useImgTag&&o&&e.options.enableTransform?(e.image.$item=document.createElement("img"),e.image.$item.setAttribute("src",e.image.src),n=e.extend({"max-width":"none"},t,n)):(e.image.$item=document.createElement("div"),n=e.extend({"background-position":"50% 50%","background-size":"100% auto","background-repeat":"no-repeat no-repeat","background-image":'url("'+e.image.src+'")'},t,n)),c&&(n.backgroundAttachment="fixed"),e.parentWithTransform=0;for(var i=e.$item;null!==i&&i!==document&&0===e.parentWithTransform;){var a=e.css(i,"-webkit-transform")||e.css(i,"-moz-transform")||e.css(i,"transform");a&&"none"!==a&&(e.parentWithTransform=1,e.css(e.image.$container,{transform:"translateX(0) translateY(0)"})),i=i.parentNode}function r(){e.coverImage(),e.clipContainer(),e.onScroll(!0),e.$item.setAttribute("data-jarallax-original-styles",e.$item.getAttribute("style")),e.options.onInit&&e.options.onInit.call(e),setTimeout(function(){e.$item&&e.css(e.$item,{"background-image":"none","background-attachment":"scroll","background-size":"auto"})},0)}e.css(e.image.$item,n),e.image.$container.appendChild(e.image.$item),e.image.width&&e.image.height?r():e.getImageSize(e.image.src,function(t,n){e.image.width=t,e.image.height=n,r()}),u.push(e)},d.prototype.destroy=function(){for(var e=this,t=0,n=u.length;t<n;t++)if(u[t].instanceID===e.instanceID){u.splice(t,1);break}var o=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),"null"===o?e.$item.removeAttribute("style"):e.$item.setAttribute("style",o),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax;for(var i in e)delete e[i]},d.prototype.getImageSize=function(e,t){if(e&&t){var n=new Image;n.onload=function(){t(n.width,n.height)},n.src=e}},d.prototype.clipContainer=function(){if(!c){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.width,o=t.height;if(!e.$clipStyles)e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","#jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);var i=["#jarallax-container-"+e.instanceID+" {","   clip: rect(0 "+n+"px "+o+"px 0);","   clip: rect(0, "+n+"px, "+o+"px, 0);","}"].join("\n");e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i}},d.prototype.coverImage=function(){var e=this;if(e.image.width&&e.image.height){var t=e.image.$container.getBoundingClientRect(),i=t.width,a=t.height,r=t.left,l=e.image.width,s=e.image.height,m=e.options.speed,c="scroll"===e.options.type||"scroll-opacity"===e.options.type,p=0,u=0,d=a,g=0,f=0;c&&(p=m*(a+n)/2,(m<0||m>1)&&(p=m*Math.max(a,n)/2),m<0||m>1?d=Math.max(a,n)+2*Math.abs(p):d+=Math.abs(n-a)*(1-m)),(u=d*l/s)<i&&(d=(u=i)*s/l),e.bgPosVerticalCenter=0,!(c&&d<n)||o&&e.options.enableTransform||(e.bgPosVerticalCenter=(n-d)/2,d=n),c?(g=r+(i-u)/2,f=(n-d)/2):(g=(i-u)/2,f=(a-d)/2),o&&e.options.enableTransform&&e.parentWithTransform&&(g-=r),e.parallaxScrollDistance=p,e.css(e.image.$item,{width:u+"px",height:d+"px",marginLeft:g+"px",marginTop:f+"px"}),e.options.onCoverImage&&e.options.onCoverImage.call(e)}},d.prototype.isVisible=function(){return this.isElementInViewport||!1},d.prototype.onScroll=function(e){var i=this;if(i.image.width&&i.image.height){var a=i.$item.getBoundingClientRect(),r=a.top,l=a.height,s={position:"absolute",visibility:"visible",backgroundPosition:"50% 50%"},m=a;if(i.options.elementInViewport&&(m=i.options.elementInViewport.getBoundingClientRect()),i.isElementInViewport=m.bottom>=0&&m.right>=0&&m.top<=n&&m.left<=t,e||i.isElementInViewport){var p=Math.max(0,r),u=Math.max(0,l+r),d=Math.max(0,-r),g=Math.max(0,r+l-n),f=Math.max(0,l-(r+l-n)),h=Math.max(0,-r+n-l),y=1-2*(n-r)/(n+l),v=1;if(l<n?v=1-(d||g)/l:u<=n?v=u/n:f<=n&&(v=f/n),"opacity"!==i.options.type&&"scale-opacity"!==i.options.type&&"scroll-opacity"!==i.options.type||(s.transform="translate3d(0, 0, 0)",s.opacity=v),"scale"===i.options.type||"scale-opacity"===i.options.type){var x=1;i.options.speed<0?x-=i.options.speed*v:x+=i.options.speed*(1-v),s.transform="scale("+x+") translate3d(0, 0, 0)"}if("scroll"===i.options.type||"scroll-opacity"===i.options.type){var b=i.parallaxScrollDistance*y;o&&i.options.enableTransform?(i.parentWithTransform&&(b-=r),s.transform="translate3d(0, "+b+"px, 0)"):i.image.useImgTag?s.top=b+"px":(i.bgPosVerticalCenter&&(b+=i.bgPosVerticalCenter),s.backgroundPosition="50% "+b+"px"),s.position=c?"absolute":"fixed"}i.css(i.image.$item,s),i.options.onScroll&&i.options.onScroll.call(i,{section:a,beforeTop:p,beforeTopEnd:u,afterTop:d,beforeBottom:g,beforeBottomEnd:f,afterBottom:h,visiblePercent:v,fromViewportCenter:y})}}},g(e,"scroll",f),g(e,"resize",f),g(e,"orientationchange",f),g(e,"load",f);var h=function(e){("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var t,n=arguments[1],o=Array.prototype.slice.call(arguments,2),i=e.length,a=0;a<i;a++)if("object"==typeof n||void 0===n?e[a].jarallax||(e[a].jarallax=new d(e[a],n)):e[a].jarallax&&(t=e[a].jarallax[n].apply(e[a].jarallax,o)),void 0!==t)return t;return e};h.constructor=d;var y=e.jarallax;if(e.jarallax=h,e.jarallax.noConflict=function(){return e.jarallax=y,this},"undefined"!=typeof jQuery){var v=function(){var t=arguments||[];Array.prototype.unshift.call(t,this);var n=h.apply(e,t);return"object"!=typeof n?n:this};v.constructor=d;var x=jQuery.fn.jarallax;jQuery.fn.jarallax=v,jQuery.fn.jarallax.noConflict=function(){return jQuery.fn.jarallax=x,this}}g(e,"DOMContentLoaded",function(){h(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))})}(window);