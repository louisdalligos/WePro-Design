// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.3.0
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
"use strict";!function(t,e){function r(r){if("undefined"==typeof r)throw new Error('Pathformer [constructor]: "element" parameter is required');if(r.constructor===String&&(r=e.getElementById(r),!r))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(r.constructor instanceof t.SVGElement||/^svg$/i.test(r.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=r,this.scan(r)}function n(t,e,r){this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(r),this.isReady&&this.init()}r.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],r.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],r.prototype.scan=function(t){for(var e,r,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)r=a[o],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},r.prototype.lineToPath=function(t){var e={};return e.d="M"+t.x1+","+t.y1+"L"+t.x2+","+t.y2,e},r.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;return e.d="M"+r+" "+n+" ",e.d+="L"+(r+i)+" "+n+" ",e.d+="L"+(r+i)+" "+(n+a)+" ",e.d+="L"+r+" "+(n+a)+" Z",e},r.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},r.prototype.polygonToPath=function(t){var e=r.prototype.polylineToPath(t);return e.d+="Z",e},r.prototype.ellipseToPath=function(t){var e=t.cx-t.rx,r=t.cy,n=parseFloat(t.cx)+parseFloat(t.rx),i=t.cy,a={};return a.d="M"+e+","+r+"A"+t.rx+","+t.ry+" 0,1,1 "+n+","+i+"A"+t.rx+","+t.ry+" 0,1,1 "+e+","+i,a},r.prototype.circleToPath=function(t){var e={},r=t.cx-t.r,n=t.cy,i=parseFloat(t.cx)+parseFloat(t.r),a=t.cy;return e.d="M"+r+","+n+"A"+t.r+","+t.r+" 0,1,1 "+i+","+a+"A"+t.r+","+t.r+" 0,1,1 "+r+","+a,e},r.prototype.pathMaker=function(t,r){var n,i,a=e.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)i=t.attributes[n],-1===this.ATTR_WATCH.indexOf(i.name)&&a.setAttribute(i.name,i.value);for(n in r)a.setAttribute(n,r[n]);return a},r.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var i,a,o;n.LINEAR=function(t){return t},n.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},n.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},n.EASE_IN=function(t){return Math.pow(t,3)},n.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(.5*t*Math.PI)+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(2.5*r*Math.PI))+1;return 1-n+i*n},n.prototype.setElement=function(r,n){if("undefined"==typeof r)throw new Error('Vivus [constructor]: "element" parameter is required');if(r.constructor===String&&(r=e.getElementById(r),!r))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=r,n&&n.file){var i=e.createElement("object");i.setAttribute("type","image/svg+xml"),i.setAttribute("data",n.file),i.setAttribute("built-by-vivus","true"),r.appendChild(i),r=i}switch(r.constructor){case t.SVGSVGElement:case t.SVGElement:this.el=r,this.isReady=!0;break;case t.HTMLObjectElement:var a,o;o=this,a=function(t){if(!o.isReady){if(o.el=r.contentDocument&&r.contentDocument.querySelector("svg"),!o.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return o.el?(r.getAttribute("built-by-vivus")&&(o.parentEl.insertBefore(o.el,r),o.parentEl.removeChild(r),o.el.setAttribute("width","100%"),o.el.setAttribute("height","100%")),o.isReady=!0,o.init(),!0):void 0}},a()||r.addEventListener("load",a);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},n.prototype.setOptions=function(e){var r=["delayed","async","oneByOne","scenario","scenario-sync"],i=["inViewport","manual","autostart"];if(void 0!==e&&e.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(e=e||{},e.type&&-1===r.indexOf(e.type))throw new Error("Vivus [constructor]: "+e.type+" is not an existing animation `type`");if(this.type=e.type||r[0],e.start&&-1===i.indexOf(e.start))throw new Error("Vivus [constructor]: "+e.start+" is not an existing `start` option");if(this.start=e.start||i[0],this.isIE=-1!==t.navigator.userAgent.indexOf("MSIE")||-1!==t.navigator.userAgent.indexOf("Trident/")||-1!==t.navigator.userAgent.indexOf("Edge/"),this.duration=o(e.duration,120),this.delay=o(e.delay,null),this.dashGap=o(e.dashGap,1),this.forceRender=e.hasOwnProperty("forceRender")?!!e.forceRender:this.isIE,this.selfDestroy=!!e.selfDestroy,this.onReady=e.onReady,this.frameLength=this.currentFrame=this.map=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=e.hasOwnProperty("ignoreInvisible")?!!e.ignoreInvisible:!1,this.animTimingFunction=e.animTimingFunction||n.LINEAR,this.pathTimingFunction=e.pathTimingFunction||n.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},n.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},n.prototype.mapping=function(){var e,r,n,i,a,s,h,u;for(u=s=h=0,r=this.el.querySelectorAll("path"),e=0;e<r.length;e++)n=r[e],this.isInvisible(n)||(a={el:n,length:Math.ceil(n.getTotalLength())},isNaN(a.length)?t.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(this.map.push(a),n.style.strokeDasharray=a.length+" "+(a.length+2*this.dashGap),n.style.strokeDashoffset=a.length+this.dashGap,a.length+=this.dashGap,s+=a.length,this.renderPath(e)));for(s=0===s?1:s,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(r.length>1?r.length-1:1),e=0;e<this.map.length;e++){switch(a=this.map[e],this.type){case"delayed":a.startAt=this.delayUnit*e,a.duration=this.duration-this.delay;break;case"oneByOne":a.startAt=h/s*this.duration,a.duration=a.length/s*this.duration;break;case"async":a.startAt=0,a.duration=this.duration;break;case"scenario-sync":n=r[e],i=this.parseAttr(n),a.startAt=u+(o(i["data-delay"],this.delayUnit)||0),a.duration=o(i["data-duration"],this.duration),u=void 0!==i["data-async"]?a.startAt:a.startAt+a.duration,this.frameLength=Math.max(this.frameLength,a.startAt+a.duration);break;case"scenario":n=r[e],i=this.parseAttr(n),a.startAt=o(i["data-start"],this.delayUnit)||0,a.duration=o(i["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,a.startAt+a.duration)}h+=a.length,this.frameLength=this.frameLength||this.duration}},n.prototype.drawer=function(){var t=this;this.currentFrame+=this.speed,this.currentFrame<=0?(this.stop(),this.reset(),this.callback(this)):this.currentFrame>=this.frameLength?(this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy(),this.callback(this)):(this.trace(),this.handle=i(function(){t.drawer()}))},n.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},n.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},n.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new r(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},n.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var e=this,r=function(){e.isInViewport(e.parentEl,1)&&(e.play(),t.removeEventListener("scroll",r))};t.addEventListener("scroll",r),r()}},n.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},n.prototype.reset=function(){return this.setFrameProgress(0)},n.prototype.finish=function(){return this.setFrameProgress(1)},n.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},n.prototype.play=function(t){if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return this.speed=t||1,this.handle||this.drawer(),this},n.prototype.stop=function(){return this.handle&&(a(this.handle),this.handle=null),this},n.prototype.destroy=function(){var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},n.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},n.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},n.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top,s=o+a;return e=e||0,n>=o+a*e&&s>=r},n.prototype.docElem=t.document.documentElement,n.prototype.getViewportH=function(){var e=this.docElem.clientHeight,r=t.innerHeight;return r>e?r:e},n.prototype.scrollY=function(){return t.pageYOffset||this.docElem.scrollTop},i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame||function(e){return t.clearTimeout(e)}}(),o=function(t,e){var r=parseInt(t,10);return r>=0?r:e},"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof exports?module.exports=n:t.Vivus=n}(window,document);

(function(root,factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof exports==="object"){module.exports=factory(require,exports,module)}else{root.scrollReveal=factory()}})(this,function(require,exports,module){window.scrollReveal=function(window){"use strict";var _requestAnimFrame;var _extend;var _handler;var self;function scrollReveal(config){if(!(this instanceof scrollReveal)){return new scrollReveal(config)}self=this;self.elems={};self.serial=1;self.blocked=false;self.config=_extend(self.defaults,config);if(self.isMobile()&&!self.config.mobile||!self.isSupported()){self.destroy();return}if(self.config.viewport===window.document.documentElement){window.addEventListener("scroll",_handler,false);window.addEventListener("resize",_handler,false)}else{self.config.viewport.addEventListener("scroll",_handler,false)}self.init(true)}scrollReveal.prototype={defaults:{enter:"bottom",move:"8px",over:"0.6s",wait:"0s",easing:"ease",scale:{direction:"up",power:"5%"},rotate:{x:0,y:0,z:0},opacity:0,mobile:false,reset:false,viewport:window.document.documentElement,delay:"once",vFactor:.6,complete:function(el){}},init:function(flag){var serial;var elem;var query;query=Array.prototype.slice.call(self.config.viewport.querySelectorAll("[data-sr]"));query.forEach(function(el){serial=self.serial++;elem=self.elems[serial]={domEl:el};elem.config=self.configFactory(elem);elem.styles=self.styleFactory(elem);elem.seen=false;el.removeAttribute("data-sr");el.setAttribute("style",elem.styles.inline+elem.styles.initial)});self.scrolled=self.scrollY();self.animate(flag)},animate:function(flag){var key;var elem;var visible;for(key in self.elems){if(self.elems.hasOwnProperty(key)){elem=self.elems[key];visible=self.isElemInViewport(elem);if(visible){if(self.config.delay==="always"||self.config.delay==="onload"&&flag||self.config.delay==="once"&&!elem.seen){elem.domEl.setAttribute("style",elem.styles.inline+elem.styles.target+elem.styles.transition)}else{elem.domEl.setAttribute("style",elem.styles.inline+elem.styles.target+elem.styles.reset)}elem.seen=true;if(!elem.config.reset&&!elem.animating){elem.animating=true;complete(key)}}else if(!visible&&elem.config.reset){elem.domEl.setAttribute("style",elem.styles.inline+elem.styles.initial+elem.styles.reset)}}}self.blocked=false;function complete(key){var elem=self.elems[key];setTimeout(function(){elem.domEl.setAttribute("style",elem.styles.inline);elem.config.complete(elem.domEl);delete self.elems[key]},elem.styles.duration)}},configFactory:function(elem){var parsed={};var config={};var words=elem.domEl.getAttribute("data-sr").split(/[, ]+/);words.forEach(function(keyword,i){switch(keyword){case"enter":parsed.enter=words[i+1];break;case"wait":parsed.wait=words[i+1];break;case"move":parsed.move=words[i+1];break;case"ease":parsed.move=words[i+1];parsed.ease="ease";break;case"ease-in":if(words[i+1]=="up"||words[i+1]=="down"){parsed.scale.direction=words[i+1];parsed.scale.power=words[i+2];parsed.easing="ease-in";break}parsed.move=words[i+1];parsed.easing="ease-in";break;case"ease-in-out":if(words[i+1]=="up"||words[i+1]=="down"){parsed.scale.direction=words[i+1];parsed.scale.power=words[i+2];parsed.easing="ease-in-out";break}parsed.move=words[i+1];parsed.easing="ease-in-out";break;case"ease-out":if(words[i+1]=="up"||words[i+1]=="down"){parsed.scale.direction=words[i+1];parsed.scale.power=words[i+2];parsed.easing="ease-out";break}parsed.move=words[i+1];parsed.easing="ease-out";break;case"hustle":if(words[i+1]=="up"||words[i+1]=="down"){parsed.scale.direction=words[i+1];parsed.scale.power=words[i+2];parsed.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )";break}parsed.move=words[i+1];parsed.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )";break;case"over":parsed.over=words[i+1];break;case"flip":case"pitch":parsed.rotate=parsed.rotate||{};parsed.rotate.x=words[i+1];break;case"spin":case"yaw":parsed.rotate=parsed.rotate||{};parsed.rotate.y=words[i+1];break;case"roll":parsed.rotate=parsed.rotate||{};parsed.rotate.z=words[i+1];break;case"reset":if(words[i-1]=="no"){parsed.reset=false}else{parsed.reset=true}break;case"scale":parsed.scale={};if(words[i+1]=="up"||words[i+1]=="down"){parsed.scale.direction=words[i+1];parsed.scale.power=words[i+2];break}parsed.scale.power=words[i+1];break;case"vFactor":case"vF":parsed.vFactor=words[i+1];break;case"opacity":parsed.opacity=words[i+1];break;default:return}});config=_extend(config,self.config);config=_extend(config,parsed);if(config.enter==="top"||config.enter==="bottom"){config.axis="Y"}else if(config.enter==="left"||config.enter==="right"){config.axis="X"}if(config.enter==="top"||config.enter==="left"){config.move="-"+config.move}return config},styleFactory:function(elem){var inline;var initial;var reset;var target;var transition;var cfg=elem.config;var duration=(parseFloat(cfg.over)+parseFloat(cfg.wait))*1e3;if(elem.domEl.getAttribute("style")){inline=elem.domEl.getAttribute("style")+"; visibility: visible; "}else{inline="visibility: visible; "}transition="-webkit-transition: -webkit-transform "+cfg.over+" "+cfg.easing+" "+cfg.wait+", opacity "+cfg.over+" "+cfg.easing+" "+cfg.wait+"; "+"transition: transform "+cfg.over+" "+cfg.easing+" "+cfg.wait+", opacity "+cfg.over+" "+cfg.easing+" "+cfg.wait+"; "+"-webkit-perspective: 1000;"+"-webkit-backface-visibility: hidden;";reset="-webkit-transition: -webkit-transform "+cfg.over+" "+cfg.easing+" 0s, opacity "+cfg.over+" "+cfg.easing+" 0s; "+"transition: transform "+cfg.over+" "+cfg.easing+" 0s, opacity "+cfg.over+" "+cfg.easing+" 0s; "+"-webkit-perspective: 1000; "+"-webkit-backface-visibility: hidden; ";initial="transform:";target="transform:";build();initial+="-webkit-transform:";target+="-webkit-transform:";build();return{transition:transition,initial:initial,target:target,reset:reset,inline:inline,duration:duration};function build(){if(parseInt(cfg.move)!==0){initial+=" translate"+cfg.axis+"("+cfg.move+")";target+=" translate"+cfg.axis+"(0)"}if(parseInt(cfg.scale.power)!==0){if(cfg.scale.direction==="up"){cfg.scale.value=1-parseFloat(cfg.scale.power)*.01}else if(cfg.scale.direction==="down"){cfg.scale.value=1+parseFloat(cfg.scale.power)*.01}initial+=" scale("+cfg.scale.value+")";target+=" scale(1)"}if(cfg.rotate.x){initial+=" rotateX("+cfg.rotate.x+")";target+=" rotateX(0)"}if(cfg.rotate.y){initial+=" rotateY("+cfg.rotate.y+")";target+=" rotateY(0)"}if(cfg.rotate.z){initial+=" rotateZ("+cfg.rotate.z+")";target+=" rotateZ(0)"}initial+="; opacity: "+cfg.opacity+"; ";target+="; opacity: 1; "}},getViewportH:function(){var client=self.config.viewport["clientHeight"];var inner=window["innerHeight"];if(self.config.viewport===window.document.documentElement){return client<inner?inner:client}return client},scrollY:function(){if(self.config.viewport===window.document.documentElement){return window.pageYOffset}else{return self.config.viewport.scrollTop+self.config.viewport.offsetTop}},getOffset:function(el){var offsetTop=0;var offsetLeft=0;do{if(!isNaN(el.offsetTop)){offsetTop+=el.offsetTop}if(!isNaN(el.offsetLeft)){offsetLeft+=el.offsetLeft}}while(el=el.offsetParent);return{top:offsetTop,left:offsetLeft}},isElemInViewport:function(elem){var elHeight=elem.domEl.offsetHeight;var elTop=self.getOffset(elem.domEl).top;var elBottom=elTop+elHeight;var vFactor=elem.config.vFactor||0;return confirmBounds()||isPositionFixed();function confirmBounds(){var top=elTop+elHeight*vFactor;var bottom=elBottom-elHeight*vFactor;var viewBottom=self.scrolled+self.getViewportH();var viewTop=self.scrolled;return top<viewBottom&&bottom>viewTop}function isPositionFixed(){var el=elem.domEl;var style=el.currentStyle||window.getComputedStyle(el,null);return style.position==="fixed"}},isMobile:function(){var agent=navigator.userAgent||navigator.vendor||window.opera;return/(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(agent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0,4))?true:false},isSupported:function(){var sensor=document.createElement("sensor");var cssPrefix="Webkit,Moz,O,".split(",");var tests=("transition "+cssPrefix.join("transition,")).split(",");for(var i=0;i<tests.length;i++){if(!sensor.style[tests[i]]===""){return false}}return true},destroy:function(){var node=self.config.viewport;var query=Array.prototype.slice.call(node.querySelectorAll("[data-sr]"));query.forEach(function(el){el.removeAttribute("data-sr")})}};_handler=function(e){if(!self.blocked){self.blocked=true;self.scrolled=self.scrollY();_requestAnimFrame(function(){self.animate()})}};_extend=function(target,src){for(var prop in src){if(src.hasOwnProperty(prop)){target[prop]=src[prop]}}return target};_requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)}}();return scrollReveal}(window);return scrollReveal});

// Toastr v2.1.0
(function(e){e(["jquery"],function(e){return function(){function u(e,t,n){return w({type:i.error,iconClass:E().iconClasses.error,message:e,optionsOverride:n,title:t})}function a(n,r){if(!n){n=E()}t=e("#"+n.containerId);if(t.length){return t}if(r){t=g(n)}return t}function f(e,t,n){return w({type:i.info,iconClass:E().iconClasses.info,message:e,optionsOverride:n,title:t})}function l(e){n=e}function c(e,t,n){return w({type:i.success,iconClass:E().iconClasses.success,message:e,optionsOverride:n,title:t})}function h(e,t,n){return w({type:i.warning,iconClass:E().iconClasses.warning,message:e,optionsOverride:n,title:t})}function p(e){var n=E();if(!t){a(n)}if(!m(e,n)){v(n)}}function d(n){var r=E();if(!t){a(r)}if(n&&e(":focus",n).length===0){S(n);return}if(t.children().length){t.remove()}}function v(n){var r=t.children();for(var i=r.length-1;i>=0;i--){m(e(r[i]),n)}}function m(t,n){if(t&&e(":focus",t).length===0){t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){S(t)}});return true}return false}function g(n){t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass).attr("aria-live","polite").attr("role","alert");t.appendTo(e(n.target));return t}function y(){return{tapToDismiss:true,toastClass:"toast",containerId:"toast-container",debug:false,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:undefined,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:undefined,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:true,preventDuplicates:false}}function b(e){if(!n){return}n(e)}function w(n){function d(t){if(e(":focus",f).length&&!t){return}return f[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){S(f);if(i.onHidden&&p.state!=="hidden"){i.onHidden()}p.state="hidden";p.endTime=new Date;b(p)}})}function v(){if(i.timeOut>0||i.extendedTimeOut>0){u=setTimeout(d,i.extendedTimeOut)}}function m(){clearTimeout(u);f.stop(true,true)[i.showMethod]({duration:i.showDuration,easing:i.showEasing})}var i=E(),s=n.iconClass||i.iconClass;if(i.preventDuplicates){if(n.message===o){return}else{o=n.message}}if(typeof n.optionsOverride!=="undefined"){i=e.extend(i,n.optionsOverride);s=n.optionsOverride.iconClass||s}r++;t=a(i,true);var u=null,f=e("<div/>"),l=e("<div/>"),c=e("<div/>"),h=e(i.closeHtml),p={toastId:r,state:"visible",startTime:new Date,options:i,map:n};if(n.iconClass){f.addClass(i.toastClass).addClass(s)}if(n.title){l.append(n.title).addClass(i.titleClass);f.append(l)}if(n.message){c.append(n.message).addClass(i.messageClass);f.append(c)}if(i.closeButton){h.addClass("toast-close-button").attr("role","button");f.prepend(h)}f.hide();if(i.newestOnTop){t.prepend(f)}else{t.append(f)}f[i.showMethod]({duration:i.showDuration,easing:i.showEasing,complete:i.onShown});if(i.timeOut>0){u=setTimeout(d,i.timeOut)}f.hover(m,v);if(!i.onclick&&i.tapToDismiss){f.click(d)}if(i.closeButton&&h){h.click(function(e){if(e.stopPropagation){e.stopPropagation()}else if(e.cancelBubble!==undefined&&e.cancelBubble!==true){e.cancelBubble=true}d(true)})}if(i.onclick){f.click(function(){i.onclick();d()})}b(p);if(i.debug&&console){console.log(p)}return f}function E(){return e.extend({},y(),s.options)}function S(e){if(!t){t=a()}if(e.is(":visible")){return}e.remove();e=null;if(t.children().length===0){t.remove()}}var t;var n;var r=0;var i={error:"error",info:"info",success:"success",warning:"warning"};var s={clear:p,remove:d,error:u,getContainer:a,info:f,options:{},subscribe:l,success:c,version:"2.1.0",warning:h};var o;return s}()})})(typeof define==="function"&&define.amd?define:function(e,t){if(typeof module!=="undefined"&&module.exports){module.exports=t(require("jquery"))}else{window["toastr"]=t(window["jQuery"])}});


var $ = jQuery.noConflict();

var WEPRO = WEPRO || {};

(function($){

	// USE STRICT
	"use strict";

	WEPRO.initialize = {
		init: function(){
			WEPRO.initialize.anchorScroll();
			WEPRO.initialize.validateForm();
		},

		anchorScroll: function(){
			$("a[data-scrollto]").click(function(){
				var element = $(this),
					divScrollToAnchor = element.attr('data-scrollto'),
					divScrollSpeed = element.attr('data-speed'),
					divScrollOffset = element.attr('data-offset'),
					divScrollEasing = element.attr('data-easing');

					if( !divScrollSpeed ) { divScrollSpeed = 750; }
					if( !divScrollEasing ) { divScrollEasing = 'easeOutQuad'; }

				$('html,body').stop(true).animate({
					'scrollTop': $( divScrollToAnchor ).offset().top - Number(divScrollOffset)
				}, Number(divScrollSpeed), divScrollEasing, function(){
					var t = setTimeout( function(){ 
						$(divScrollToAnchor).animate({'backgroundColor': 'transparent'}, 300); 
					}, 500 );					
				});

				return false;
			});
		},

		notifications: function( element ){
			toastr.clear();

			var notifyElement = $(element),
				notifyPosition = notifyElement.attr('data-notify-position'),
				notifyType = notifyElement.attr('data-notify-type'),
				notifyMsg = notifyElement.attr('data-notify-msg'),
				notifyCloseButton = notifyElement.attr('data-notify-close');

			if( !notifyPosition ) { 
				notifyPosition = 'toast-bottom-right'; 
			} else { 
				notifyPosition = 'toast-' + notifyElement.attr('data-notify-position'); 
			}
			
			if( !notifyMsg ) { notifyMsg = 'Please set a message!'; }
			
			if( notifyCloseButton == 'true' ) { notifyCloseButton = true; } else { notifyCloseButton = false; }

			toastr.options.positionClass = notifyPosition;
			toastr.options.closeButton = notifyCloseButton;
			toastr.options.closeHtml = '<button><i class="remove icon"></i></button>';

			if( notifyType == 'warning' ) {
				toastr.warning(notifyMsg);
			} else if( notifyType == 'error' ) {
				toastr.error(notifyMsg);
			} else if( notifyType == 'success' ) {
				toastr.success(notifyMsg);
			} else {
				toastr.info(notifyMsg);
			}

			return false;
		},

		validateForm: function(){
			console.log('forfdfm');

			$formEl.form({
			  fields: {
			    name: {
			      identifier: 'name',
			      rules: [
			        {
			          type   : 'empty',
			          prompt : 'Please enter your name or company'
			        }
			      ]
			    },
			    email: {
			      identifier : 'email',
			      rules: [
			        {
			          type   : 'email',
			          prompt : 'Please enter a valid e-mail'
			        }
			      ]
			    },
			    msg: {
			      identifier: 'msg',
			      rules: [
			        {
			          type   : 'empty',
			          prompt : 'Please tell us about your project'
			        }
			      ]
			    }
			  },
			  onSuccess:function(){
			    //alert('correct!');
				  
					$('#form-result').attr('data-notify-msg', $('#form-result').html()).html('');
					WEPRO.initialize.notifications($('#form-result'));
				}
			});
		},
	};

	WEPRO.documentOnReady = {
		
		init: function(){
			WEPRO.initialize.init();
		},

	};

	var $window = $(window),
		$body = $('body'),
		$formEl = $('#wepro-contact-form');

	$(document).ready( WEPRO.documentOnReady.init );

})(jQuery);

$('select.dropdown').dropdown();

