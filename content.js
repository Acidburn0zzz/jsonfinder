/*
 * CHROME EXTENSION
 */

 /*! jQuery v2.0.1pre | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){function n(e){var t=e.length,n=it.type(e);return it.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=dt[e]={};return it.each(e.match(at)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(it.acceptData(e)){var o,a,s=it.expando,u="string"==typeof n,l=e.nodeType,c=l?it.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=G.pop()||it.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=it.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=it.extend(c[f],n):c[f].data=it.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[it.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[it.camelCase(n)])):a=o,a}}function o(e,t,n){if(it.acceptData(e)){var r,i,o,a=e.nodeType,u=a?it.cache:e,l=a?e[it.expando]:it.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){it.isArray(t)?t=t.concat(it.map(t,it.camelCase)):t in r?t=[t]:(t=it.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;o>i;i++)delete r[t[i]];if(!(n?s:it.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?it.cleanData([e],!0):it.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(gt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:ht.test(r)?it.parseJSON(r):r}catch(o){}it.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!it.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t,n){t=t||0;var r;if(it.isFunction(t))return it.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return it.grep(e,function(e){return e===t===n});if("string"==typeof t){if(r=it.grep(e,function(e){return 1===e.nodeType}),jt.test(t))return it.filter(t,r,!n);t=it.filter(t,r)}return it.grep(e,function(e){return et.call(t,e)>=0===n})}function f(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function p(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function d(e){var t=_t.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function h(e,t){for(var n=e.length,r=0;n>r;r++)it._data(e[r],"globalEval",!t||it._data(t[r],"globalEval"))}function g(e,t){if(1===t.nodeType&&it.hasData(e)){var n,r,i,o=it._data(e),a=it._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(i in s)for(n=0,r=s[i].length;r>n;n++)it.event.add(t,i,s[i][n])}a.data&&(a.data=it.extend({},a.data))}}function m(e,n){var r=e.getElementsByTagName?e.getElementsByTagName(n||"*"):e.querySelectorAll?e.querySelectorAll(n||"*"):[];return n===t||n&&it.nodeName(e,n)?it.merge([e],r):r}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ft.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function v(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Zt.length;i--;)if(t=Zt[i]+n,t in e)return t;return r}function x(e,t){return e=t||e,"none"===it.css(e,"display")||!it.contains(e.ownerDocument,e)}function b(t){return e.getComputedStyle(t,null)}function w(e,t){for(var n,r=[],i=0,o=e.length;o>i;i++)n=e[i],n.style&&(r[i]=it._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&x(n)&&(r[i]=it._data(n,"olddisplay",k(n.nodeName)))):r[i]||x(n)||it._data(n,"olddisplay",it.css(n,"display")));for(i=0;o>i;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function T(e,t,n){var r=Ut.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function C(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=it.css(e,n+Kt[o],!0,i)),r?("content"===n&&(a-=it.css(e,"padding"+Kt[o],!0,i)),"margin"!==n&&(a-=it.css(e,"border"+Kt[o]+"Width",!0,i))):(a+=it.css(e,"padding"+Kt[o],!0,i),"padding"!==n&&(a+=it.css(e,"border"+Kt[o]+"Width",!0,i)));return a}function N(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=b(e),a=it.support.boxSizing&&"border-box"===it.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=$t(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(it.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+C(e,t,n||(a?"border":"content"),r,o)+"px"}function k(e){var t=z,n=Gt[e];return n||(n=E(e,t),"none"!==n&&n||(It=(It||it("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(It[0].contentWindow||It[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=E(e,t),It.detach()),Gt[e]=n),n}function E(e,t){var n=it(t.createElement(e)).appendTo(t.body),r=it.css(n[0],"display");return n.remove(),r}function S(e,t,n,r){var i;if(it.isArray(t))it.each(t,function(t,i){n||tn.test(e)?r(e,i):S(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==it.type(t))r(e,t);else for(i in t)S(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(at)||[];if(it.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function j(e,n,r,i){function o(u){var l;return a[u]=!0,it.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===xn;return o(n.dataTypes[0])||!a["*"]&&o("*")}function A(e,n){var r,i,o=it.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&it.extend(!0,e,i),e}function L(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(n=a[l+" "+i]||a["* "+i],!n)for(r in a)if(o=r.split(" "),o[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function H(){return setTimeout(function(){Dn=t}),Dn=it.now()}function O(e,t){it.each(t,function(t,n){for(var r=(On[t]||[]).concat(On["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function M(e,t,n){var r,i,o=0,a=Hn.length,s=it.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Dn||H(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:it.extend({},t),opts:it.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Dn||H(),duration:n.duration,tweens:[],createTween:function(t,n){var r=it.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(F(c,l.opts.specialEasing);a>o;o++)if(r=Hn[o].call(l,e,c,l.opts))return r;return O(l,c),it.isFunction(l.opts.start)&&l.opts.start.call(e,l),it.fx.timer(it.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function F(e,t){var n,r,i,o,a;for(n in e)if(r=it.camelCase(n),i=t[r],o=e[n],it.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=it.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function P(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&x(e);n.queue||(c=it._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,it.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===it.css(e,"display")&&"none"===it.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",p.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],An.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=it._data(e,"fxshow")||it._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?it(e).show():p.done(function(){it(e).hide()}),p.done(function(){var t;it._removeData(e,"fxshow");for(t in h)it.style(e,t,h[t])});for(r=0;a>r;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||it.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function R(e,t,n,r,i){return new R.prototype.init(e,t,n,r,i)}function _(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Kt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function B(e){return it.isWindow(e)?e:9===e.nodeType&&e.defaultView}var W,$,I=typeof t,z=e.document,X=e.location,U=e.jQuery,Y=e.$,V={},G=[],J="2.0.1pre",Q=G.concat,K=G.push,Z=G.slice,et=G.indexOf,tt=V.toString,nt=V.hasOwnProperty,rt=J.trim,it=function(e,t){return new it.fn.init(e,t,W)},ot=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,at=/\S+/g,st=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,ut=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,lt=/^-ms-/,ct=/-([\da-z])/gi,ft=function(e,t){return t.toUpperCase()},pt=function(){z.removeEventListener("DOMContentLoaded",pt,!1),e.removeEventListener("load",pt,!1),it.ready()};it.fn=it.prototype={jquery:J,constructor:it,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:st.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof it?n[0]:n,it.merge(this,it.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:z,!0)),ut.test(i[1])&&it.isPlainObject(n))for(i in n)it.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=z.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=z,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):it.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),it.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return Z.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=it.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return it.each(this,e,t)},ready:function(e){return it.ready.promise().done(e),this},slice:function(){return this.pushStack(Z.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(it.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:K,sort:[].sort,splice:[].splice},it.fn.init.prototype=it.fn,it.extend=it.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||it.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(it.isPlainObject(i)||(o=it.isArray(i)))?(o?(o=!1,a=r&&it.isArray(r)?r:[]):a=r&&it.isPlainObject(r)?r:{},s[n]=it.extend(c,a,i)):i!==t&&(s[n]=i));return s},it.extend({noConflict:function(t){return e.$===it&&(e.$=Y),t&&e.jQuery===it&&(e.jQuery=U),it},isReady:!1,readyWait:1,holdReady:function(e){e?it.readyWait++:it.ready(!0)},ready:function(e){(e===!0?--it.readyWait:it.isReady)||(it.isReady=!0,e!==!0&&--it.readyWait>0||($.resolveWith(z,[it]),it.fn.trigger&&it(z).trigger("ready").off("ready")))},isFunction:function(e){return"function"===it.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[tt.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==it.type(e)||e.nodeType||it.isWindow(e))return!1;try{if(e.constructor&&!nt.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||z;var r=ut.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=it.buildFragment([e],t,i),i&&it(i).remove(),it.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var n,r;if(!e||"string"!=typeof e)return null;try{r=new DOMParser,n=r.parseFromString(e,"text/xml")}catch(i){n=t}return(!n||n.getElementsByTagName("parsererror").length)&&it.error("Invalid XML: "+e),n},noop:function(){},globalEval:function(e){var t=eval;it.trim(e)&&t(e+";")},camelCase:function(e){return e.replace(lt,"ms-").replace(ct,ft)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":rt.call(e)},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?it.merge(r,"string"==typeof e?[e]:e):K.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:et.call(t,e,n)},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return Q.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),it.isFunction(e)?(i=Z.call(arguments,2),o=function(){return e.apply(n||this,i.concat(Z.call(arguments)))},o.guid=e.guid=e.guid||it.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===it.type(r)){o=!0;for(u in r)it.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,it.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(it(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:Date.now}),it.ready.promise=function(t){return $||($=it.Deferred(),"complete"===z.readyState?setTimeout(it.ready):(z.addEventListener("DOMContentLoaded",pt,!1),e.addEventListener("load",pt,!1))),$.promise(t)},it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()}),W=it(z);var dt={};it.Callbacks=function(e){e="string"==typeof e?dt[e]||r(e):it.extend({},e);var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function r(t){it.each(t,function(t,n){var i=it.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&it.each(arguments,function(e,t){for(var n;(n=it.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return e?it.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},it.extend({Deferred:function(e){var t=[["resolve","done",it.Callbacks("once memory"),"resolved"],["reject","fail",it.Callbacks("once memory"),"rejected"],["notify","progress",it.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return it.Deferred(function(n){it.each(t,function(t,o){var a=o[0],s=it.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&it.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?it.extend(e,r):r}},i={};return r.pipe=r.then,it.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Z.call(arguments),a=o.length,s=1!==a||e&&it.isFunction(e.promise)?a:0,u=1===s?e:it.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Z.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&it.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),it.support=function(){var t,n,r,i,o,a,s=z.createElement("div");return s.innerHTML="<a>a</a><input type='checkbox'/>",(n=s.getElementsByTagName("a")[0])?(r=z.createElement("select"),i=r.appendChild(z.createElement("option")),o=s.getElementsByTagName("input")[0],n.style.cssText="float:left;opacity:.5",t={checkOn:!!o.value,optSelected:i.selected,boxModel:"CSS1Compat"===z.compatMode,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,r.disabled=!0,t.optDisabled=!i.disabled,o=z.createElement("input"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),a=z.createDocumentFragment(),a.appendChild(o),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,s.setAttribute("onfocusin","t"),t.focusinBubbles="onfocusin"in e||s.attributes.onfocusin.expando===!1,s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===s.style.backgroundClip,it(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=z.getElementsByTagName("body")[0];a&&(n=z.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(s),s.innerHTML="",s.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===s.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(s,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(s,null)||{width:"4px"}).width,r=s.appendChild(z.createElement("div")),r.style.cssText=s.style.cssText=o,r.style.marginRight=r.style.width="0",s.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n),n=s=i=r=null)}),r=a=i=n=o=null,t):{}}();var ht=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,gt=/([A-Z])/g;it.extend({cache:{},expando:"jQuery"+(J+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?it.cache[e[it.expando]]:e[it.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n)},removeData:function(e,t){return o(e,t)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&it.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),it.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=it.data(o),1===o.nodeType&&!it._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=it.camelCase(i.slice(5)),a(o,i,u[i]));it._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){it.data(this,e)}):it.access(this,function(n){return n===t?o?a(o,e,it.data(o,e)):null:(this.each(function(){it.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){it.removeData(this,e)})}}),it.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=it._data(e,n),r&&(!i||it.isArray(r)?i=it._data(e,n,it.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=it.queue(e,t),r=n.length,i=n.shift(),o=it._queueHooks(e,t),a=function(){it.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return it._data(e,n)||it._data(e,n,{empty:it.Callbacks("once memory").add(function(){it._removeData(e,t+"queue"),it._removeData(e,n)})})}}),it.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?it.queue(this[0],e):n===t?this:this.each(function(){var t=it.queue(this,e,n);it._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&it.dequeue(this,e)})},dequeue:function(e){return this.each(function(){it.dequeue(this,e)})},delay:function(e,t){return e=it.fx?it.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=it.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=it._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var mt,yt,vt=/[\t\r\n]/g,xt=/\r/g,bt=/^(?:input|select|textarea|button|object)$/i,wt=/^(?:a|area)$/i,Tt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i;it.fn.extend({attr:function(e,t){return it.access(this,it.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){it.removeAttr(this,e)})},prop:function(e,t){return it.access(this,it.prop,e,t,arguments.length>1)},removeProp:function(e){return e=it.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(it.isFunction(e))return this.each(function(t){it(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(at)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(vt," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=it.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(it.isFunction(e))return this.each(function(t){it(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(at)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(vt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?it.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return it.isFunction(e)?this.each(function(n){it(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=it(this),s=t,u=e.match(at)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else(n===I||"boolean"===n)&&(this.className&&it._data(this,"__className__",this.className),this.className=this.className||e===!1?"":it._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(vt," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=it.isFunction(e),this.each(function(r){var o,a=it(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":it.isArray(o)&&(o=it.map(o,function(e){return null==e?"":e+""})),n=it.valHooks[this.type]||it.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=it.valHooks[o.type]||it.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(xt,""):null==r?"":r)}}}),it.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(it.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&it.nodeName(n.parentNode,"optgroup"))){if(t=it(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=it.makeArray(t);return it(e).find("option").each(function(){this.selected=it.inArray(it(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===I?it.prop(e,n,r):(a=1!==s||!it.isXMLDoc(e),a&&(n=n.toLowerCase(),o=it.attrHooks[n]||(Tt.test(n)?yt:mt)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(typeof e.getAttribute!==I&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(it.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(at);if(o&&1===e.nodeType)for(;n=o[i++];)r=it.propFix[n]||n,Tt.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!it.support.radioValue&&"radio"===t&&it.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!it.isXMLDoc(e),a&&(n=it.propFix[n]||n,o=it.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:t}}}}),yt={get:function(e,n){return null!==e.getAttribute(n)?n.toLowerCase():t},set:function(e,t,n){return t===!1?it.removeAttr(e,n):e.setAttribute(n,n),n}},it.support.checkOn||it.each(["radio","checkbox"],function(){it.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),it.each(["radio","checkbox"],function(){it.valHooks[this]=it.extend(it.valHooks[this],{set:function(e,n){return it.isArray(n)?e.checked=it.inArray(it(e).val(),n)>=0:t}})}),it.support.optSelected||(it.propHooks.selected=it.extend(it.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}));var Ct=/^key/,Nt=/^(?:mouse|contextmenu)|click/,kt=/^(?:focusinfocus|focusoutblur)$/,Et=/^([^.]*)(?:\.(.+)|)$/;it.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=it._data(e);if(y){for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=it.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return typeof it===I||e&&it.event.triggered===e.type?t:it.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=(n||"").match(at)||[""],c=n.length;c--;)u=Et.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),p=it.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=it.event.special[h]||{},f=it.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&it.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),it.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=it.hasData(e)&&it._data(e);if(m&&(u=m.events)){for(t=(t||"").match(at)||[""],l=t.length;l--;)if(s=Et.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=it.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||it.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)it.event.remove(e,d+t[l],n,r,!0);it.isEmptyObject(u)&&(delete m.handle,it._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||z],h=nt.call(n,"type")?n.type:n,g=nt.call(n,"namespace")?n.namespace.split("."):[];if(s=u=i=i||z,3!==i.nodeType&&8!==i.nodeType&&!kt.test(h+it.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,n=n[it.expando]?n:new it.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:it.makeArray(r,[n]),p=it.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!it.isWindow(i)){for(l=p.delegateType||h,kt.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||z)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,f=(it._data(s,"events")||{})[n.type]&&it._data(s,"handle"),f&&f.apply(s,r),f=c&&s[c],f&&it.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();return n.type=h,o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&it.nodeName(i,"a")||!it.acceptData(i)||c&&it.isFunction(i[h])&&!it.isWindow(i)&&(u=i[c],u&&(i[c]=null),it.event.triggered=h,i[h](),it.event.triggered=t,u&&(i[c]=u)),n.result}},dispatch:function(e){e=it.event.fix(e);var n,r,i,o,a,s=[],u=Z.call(arguments),l=(it._data(this,"events")||{})[e.type]||[],c=it.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=it.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,i=((it.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)a=n[r],o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?it(o,this).index(l)>=0:it.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||z,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[it.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Nt.test(i)?this.mouseHooks:Ct.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new it.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return 3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},click:{trigger:function(){return"checkbox"===this.type&&this.click&&it.nodeName(this,"input")?(this.click(),!1):t}},focus:{trigger:function(){return this!==z.activeElement&&this.focus?(this.focus(),!1):t},delegateType:"focusin"},blur:{trigger:function(){return this===z.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=it.extend(new it.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?it.event.trigger(i,null,t):it.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},it.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},it.Event=function(e,n){return this instanceof it.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,n&&it.extend(this,n),this.timeStamp=e&&e.timeStamp||it.now(),this[it.expando]=!0,t):new it.Event(e,n)},it.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},it.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){it.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!it.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),it.support.focusinBubbles||it.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){it.event.simulate(t,e.target,it.event.fix(e),!0)};it.event.special[t]={setup:function(){0===n++&&z.addEventListener(e,r,!0)},teardown:function(){0===--n&&z.removeEventListener(e,r,!0)}}}),it.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(a=i,i=function(e){return it().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=it.guid++)),this.each(function(){it.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,it(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){it.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){it.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?it.event.trigger(e,n,r,!0):t}}),function(e,t){function n(e){return gt.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>N.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[B]=!0,e}function o(e){var t=A.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,g;if((t?t.ownerDocument||t:W)!==A&&j(t),t=t||A,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!q&&!r){if(i=mt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&F(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return K.apply(n,Z.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&$.getByClassName&&t.getElementsByClassName)return K.apply(n,Z.call(t.getElementsByClassName(a),0)),n}if($.qsa&&!H.test(e)){if(c=!0,d=B,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(xt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=ht.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return K.apply(n,Z.call(h.querySelectorAll(g),0)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return b(e.replace(ut,"$1"),t,n,r)}function s(e,t){var n=t&&e,r=n&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,s,u,l,c=U[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=N.preFilter;s;){(!n||(r=lt.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=ct.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ut," ")}),s=s.slice(n.length));for(o in N.filter)!(r=dt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):U(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=z++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=I+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[B]||(t[B]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===C)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||C,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,r,o,a){return r&&!r[B]&&(r=m(r)),o&&!o[B]&&(o=m(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||x(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?et.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):K.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=N.relative[e[0].type],a=o||N.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return et.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=N.relative[e[s].type])c=[d(h(c),n)];else{if(n=N.filter[e[s].type].apply(null,e[s].matches),n[B]){for(r=++s;i>r&&!N.relative[e[r].type];r++);return m(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(ut,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],x=null!=c,b=D,w=i||o&&N.find.TAG("*",c&&s.parentNode||s),T=I+=null==b?1:Math.random()||.1;for(x&&(D=s!==A&&s,C=n);null!=(f=w[y]);y++){if(o&&f){for(p=0;d=e[p++];)if(d(f,s,u)){l.push(f);break}x&&(I=T,C=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p++];)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=Q.call(l));h=g(h)}K.apply(l,h),x&&!i&&h.length>0&&m+t.length>1&&a.uniqueSort(l)}return x&&(I=T,D=b),v};return r?i(s):s}function x(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function b(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!q&&N.relative[o[1].type]){if(t=N.find.ID(a.matches[0].replace(wt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=dt.needsContext.test(e)?0:o.length;i--&&(a=o[i],!N.relative[s=a.type]);)if((u=N.find[s])&&(r=u(a.matches[0].replace(wt,Tt),ht.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return K.apply(n,Z.call(r,0)),n;break}}return S(e,l)(r,t,q,n,ht.test(e)),n}function w(){}var T,C,N,k,E,S,D,j,A,L,q,H,O,M,F,P,R,_,B="sizzle"+-new Date,W=e.document,$={},I=0,z=0,X=r(),U=r(),Y=r(),V=typeof t,G=1<<31,J=[],Q=J.pop,K=J.push,Z=J.slice,et=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},tt="[\\x20\\t\\r\\n\\f]",nt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",rt=nt.replace("w","w#"),ot="([*^$|!~]?=)",at="\\["+tt+"*("+nt+")"+tt+"*(?:"+ot+tt+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+rt+")|)|)"+tt+"*\\]",st=":("+nt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+at.replace(3,8)+")*)|.*)\\)|)",ut=RegExp("^"+tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+tt+"+$","g"),lt=RegExp("^"+tt+"*,"+tt+"*"),ct=RegExp("^"+tt+"*([\\x20\\t\\r\\n\\f>+~])"+tt+"*"),ft=RegExp(st),pt=RegExp("^"+rt+"$"),dt={ID:RegExp("^#("+nt+")"),CLASS:RegExp("^\\.("+nt+")"),NAME:RegExp("^\\[name=['\"]?("+nt+")['\"]?\\]"),TAG:RegExp("^("+nt.replace("w","w*")+")"),ATTR:RegExp("^"+at),PSEUDO:RegExp("^"+st),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+tt+"*(even|odd|(([+-]|)(\\d*)n|)"+tt+"*(?:([+-]|)"+tt+"*(\\d+)|))"+tt+"*\\)|)","i"),needsContext:RegExp("^"+tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+tt+"*((?:-\\d)?\\d*)"+tt+"*\\)|)(?=[^-]|$)","i")},ht=/[\x20\t\r\n\f]*[+~]/,gt=/^[^{]+\{\s*\[native code/,mt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/^(?:input|select|textarea|button)$/i,vt=/^h\d$/i,xt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,wt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{Z.call(W.documentElement.childNodes,0)[0].nodeType}catch(Ct){Z=function(e){for(var t,n=[];t=this[e++];)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},j=a.setDocument=function(e){var r=e?e.ownerDocument||e:W;return r!==A&&9===r.nodeType&&r.documentElement?(A=r,L=r.documentElement,q=E(r),$.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),$.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),$.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),$.getByName=o(function(e){e.id=B+0,e.innerHTML="<a name='"+B+"'></a><div name='"+B+"'></div>",L.insertBefore(e,L.firstChild);var t=r.getElementsByName&&r.getElementsByName(B).length===2+r.getElementsByName(B+0).length;return $.getIdNotName=!r.getElementById(B),L.removeChild(e),t}),$.sortDetached=o(function(e){return o(function(t){return e.compareDocumentPosition&&!!(1&e.compareDocumentPosition(t))})}),N.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},$.getIdNotName?(N.find.ID=function(e,t){if(typeof t.getElementById!==V&&!q){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},N.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){return e.getAttribute("id")===t}}):(N.find.ID=function(e,n){if(typeof n.getElementById!==V&&!q){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},N.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),N.find.TAG=$.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},N.find.NAME=$.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},N.find.CLASS=$.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||q?t:n.getElementsByClassName(e)},O=[],H=[":focus"],($.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||H.push("\\["+tt+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||H.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&H.push("[*^$]="+tt+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),($.matchesSelector=n(M=L.matchesSelector||L.mozMatchesSelector||L.webkitMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&o(function(e){$.disconnectedMatch=M.call(e,"div"),M.call(e,"[s!='']:x"),O.push("!=",st)}),H=RegExp(H.join("|")),O=O.length&&RegExp(O.join("|")),F=n(L.contains)||L.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},P=L.compareDocumentPosition?function(e,t){if(e===t)return R=!0,0;var n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return n?1&n||e.parentNode&&11===e.parentNode.nodeType||_&&t.compareDocumentPosition(e)===n?e===r||F(W,e)?-1:t===r||F(W,t)?1:_?et.call(_,e)-et.call(_,t):0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return R=!0,0;if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===W?-1:l[i]===W?1:0},R=!1,[0,0].sort(P),$.detectDuplicates=R,A):A},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==A&&j(e),t=t.replace(bt,"='$1']"),!(!$.matchesSelector||q||O&&O.test(t)||H.test(t)))try{var n=M.call(e,t);if(n||$.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,A,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==A&&j(e),F(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==A&&j(e),q||(t=t.toLowerCase()),(n=N.attrHandle[t])?n(e):q||$.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(R=!$.detectDuplicates,_=!$.sortDetached&&e.slice(0),e.sort(P),R){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},N=a.selectors={cacheLength:50,createPseudo:i,match:dt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(wt,Tt),e[3]=(e[4]||e[5]||"").replace(wt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return dt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ft.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(wt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=X[e+" "];return t||(t=RegExp("(^|"+tt+")"+e+"("+tt+"|$)"))&&X(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[B]||(m[B]={}),l=c[e]||[],d=l[0]===I&&l[1],p=l[0]===I&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[I,d,p];break}}else if(v&&(l=(t[B]||(t[B]={}))[e])&&l[0]===I)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[B]||(f[B]={}))[e]=[I,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=N.pseudos[e]||N.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[B]?r(t):r.length>1?(n=[e,e,"",t],N.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=et.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(ut,"$1"));return r[B]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return pt.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(wt,Tt).toLowerCase(),function(t){var n;do if(n=q?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!N.pseudos.empty(e)},header:function(e){return vt.test(e.nodeName)},input:function(e){return yt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(T in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})N.pseudos[T]=u(T);for(T in{submit:!0,reset:!0})N.pseudos[T]=l(T);S=a.compile=function(e,t){var n,r=[],i=[],o=Y[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[B]?r.push(o):i.push(o);o=Y(e,v(i,r))}return o},N.pseudos.nth=N.pseudos.eq,N.filters=w.prototype=N.pseudos,N.setFilters=new w,j(),a.attr=it.attr,it.find=a,it.expr=a.selectors,it.expr[":"]=it.expr.pseudos,it.unique=a.uniqueSort,it.text=a.getText,it.isXMLDoc=a.isXML,it.contains=a.contains}(e);var St=/Until$/,Dt=/^(?:parents|prev(?:Until|All))/,jt=/^.[^:#\[\.,]*$/,At=it.expr.match.needsContext,Lt={children:!0,contents:!0,next:!0,prev:!0};it.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return t=this,this.pushStack(it(e).filter(function(){for(r=0;i>r;r++)if(it.contains(t[r],this))return!0}));for(n=[],r=0;i>r;r++)it.find(e,this[r],n);return n=this.pushStack(i>1?it.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t=it(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(it.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(c(this,e,!1))},filter:function(e){return this.pushStack(c(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?At.test(e)?it(e,this.context).index(this[0])>=0:it.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=At.test(e)||"string"!=typeof e?it(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t;){if(a?a.index(n)>-1:it.find.matchesSelector(n,e)){o.push(n);break}n=n.parentElement}return this.pushStack(o.length>1?it.unique(o):o)},index:function(e){return e?"string"==typeof e?et.call(it(e),this[0]):et.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?it(e,t):it.makeArray(e&&e.nodeType?[e]:e),r=it.merge(this.get(),n);return this.pushStack(it.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),it.fn.andSelf=it.fn.addBack,it.each({parent:function(e){return e.parentElement},parents:function(e){return it.dir(e,"parentElement")},parentsUntil:function(e,t,n){return it.dir(e,"parentElement",n)},next:function(e){return e.nextElementSibling},prev:function(e){return e.previousElementSibling},nextAll:function(e){return it.dir(e,"nextElementSibling")},prevAll:function(e){return it.dir(e,"previousElementSibling")},nextUntil:function(e,t,n){return it.dir(e,"nextElementSibling",n)},prevUntil:function(e,t,n){return it.dir(e,"previousElementSibling",n)},siblings:function(e){return it.sibling((e.parentNode||{}).firstChild,e)},children:function(e){var t=e.children;return t?it.merge([],t):it.sibling(e.firstChild)},contents:function(e){return it.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:it.merge([],e.childNodes)}},function(e,t){it.fn[e]=function(n,r){var i=it.map(this,t,n);return St.test(e)||(r=n),r&&"string"==typeof r&&(i=it.filter(r,i)),this.length>1&&(Lt[e]||it.unique(i),Dt.test(e)&&i.reverse()),this.pushStack(i)}}),it.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?it.find.matchesSelector(t[0],e)?[t[0]]:[]:it.find.matches(e,t)},dir:function(e,t,n){for(var r=e[t],i=[];r&&(!n||!it(r).is(n));)i.push(r),r=r[t];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var qt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ht=/<([\w:]+)/,Ot=/<|&#?\w+;/,Mt=/<(?:script|style|link)/i,Ft=/^(?:checkbox|radio)$/i,Pt=/checked\s*(?:[^=]|=\s*.checked.)/i,Rt=/^$|\/(?:java|ecma)script/i,_t=/^true\/(.*)/,Bt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Wt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Wt.optgroup=Wt.option,Wt.tbody=Wt.tfoot=Wt.colgroup=Wt.caption=Wt.col=Wt.thead,Wt.th=Wt.td,it.fn.extend({text:function(e){return it.access(this,function(e){return e===t?it.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){var t;return it.isFunction(e)?this.each(function(t){it(this).wrapAll(e.call(this,t))}):(this[0]&&(t=it(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return it.isFunction(e)?this.each(function(t){it(this).wrapInner(e.call(this,t))}):this.each(function(){var t=it(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=it.isFunction(e);return this.each(function(n){it(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){it.nodeName(this,"body")||it(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0,i=this.length;i>r;r++)n=this[r],(!e||it.filter(e,[n]).length>0)&&(t||1!==n.nodeType||it.cleanData(m(n)),n.parentNode&&(t&&it.contains(n.ownerDocument,n)&&h(m(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0,n=this.length;n>t;t++)e=this[t],1===e.nodeType&&(it.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return it.clone(this,e,t)})},html:function(e){return it.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t&&1===n.nodeType)return n.innerHTML;if("string"==typeof e&&!Mt.test(e)&&!Wt[(Ht.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(qt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(it.cleanData(m(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=it.isFunction(e);return t||"string"==typeof e||(e=it(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(it(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=Q.apply([],e);var i,o,a,s,u,l,c=0,h=this.length,g=this,y=h-1,v=e[0],x=it.isFunction(v);if(x||!(1>=h||"string"!=typeof v||it.support.checkClone)&&Pt.test(v))return this.each(function(i){var o=g.eq(i);x&&(e[0]=v.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(h&&(i=it.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&it.nodeName(o,"tr"),a=it.map(m(i,"script"),p),s=a.length;h>c;c++)u=i,c!==y&&(u=it.clone(u,!0,!0),s&&it.merge(a,m(u,"script"))),r.call(n&&it.nodeName(this[c],"table")?f(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,it.map(a,d),c=0;s>c;c++)u=a[c],Rt.test(u.type||"")&&!it._data(u,"globalEval")&&it.contains(l,u)&&(u.src?it.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):it.globalEval(u.textContent.replace(Bt,"")))}return this}}),it.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){it.fn[e]=function(e){for(var n,r=[],i=it(e),o=i.length-1,a=0;o>=a;a++)n=a===o?this:this.clone(!0),it(i[a])[t](n),K.apply(r,n.get());return this.pushStack(r)}}),it.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=it.contains(e.ownerDocument,e);if(!(it.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||it.isXMLDoc(e)))for(a=m(s),o=m(e),r=0,i=o.length;i>r;r++)y(o[r],a[r]);if(t)if(n)for(o=o||m(e),a=a||m(s),r=0,i=o.length;i>r;r++)g(o[r],a[r]);else g(e,s);return a=m(s,"script"),a.length>0&&h(a,!u&&m(e,"script")),s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c=0,f=e.length,p=t.createDocumentFragment(),d=[];f>c;c++)if(i=e[c],i||0===i)if("object"===it.type(i))it.merge(d,i.nodeType?[i]:i);else if(Ot.test(i)){for(o=o||p.appendChild(t.createElement("div")),a=(Ht.exec(i)||["",""])[1].toLowerCase(),s=Wt[a]||Wt._default,o.innerHTML=s[1]+i.replace(qt,"<$1></$2>")+s[2],l=s[0];l--;)o=o.firstChild;it.merge(d,o.childNodes),o=p.firstChild,o.textContent=""}else d.push(t.createTextNode(i));for(p.textContent="",c=0;i=d[c++];)if((!r||-1===it.inArray(i,r))&&(u=it.contains(i.ownerDocument,i),o=m(p.appendChild(i),"script"),u&&h(o),n))for(l=0;i=o[l++];)Rt.test(i.type||"")&&n.push(i);return p},cleanData:function(e,t){for(var n,r,i,o,a=e.length,s=0,u=it.expando,l=it.cache,c=it.event.special;a>s;s++)if(i=e[s],(t||it.acceptData(i))&&(n=i[u],r=n&&l[n])){for(o in r.events)c[o]?it.event.remove(i,o):it.removeEvent(i,o,r.handle);l[n]&&(delete l[n],delete i[u])}}});var $t,It,zt=/^(none|table(?!-c[ea]).+)/,Xt=/^margin/,Ut=RegExp("^("+ot+")(.*)$","i"),Yt=RegExp("^("+ot+")(?!px)[a-z%]+$","i"),Vt=RegExp("^([+-])=("+ot+")","i"),Gt={BODY:"block"},Jt={position:"absolute",visibility:"hidden",display:"block"},Qt={letterSpacing:0,fontWeight:400},Kt=["Top","Right","Bottom","Left"],Zt=["Webkit","O","Moz","ms"];it.fn.extend({css:function(e,n){return it.access(this,function(e,n,r){var i,o,a={},s=0;if(it.isArray(n)){for(i=b(e),o=n.length;o>s;s++)a[n[s]]=it.css(e,n[s],!1,i);return a}return r!==t?it.style(e,n,r):it.css(e,n)},e,n,arguments.length>1)},show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:x(this))?it(this).show():it(this).hide()})}}),it.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=$t(e,"opacity");
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=it.camelCase(n),l=e.style;return n=it.cssProps[u]||(it.cssProps[u]=v(l,u)),s=it.cssHooks[n]||it.cssHooks[u],r===t?s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n]:(a=typeof r,"string"===a&&(o=Vt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(it.css(e,n)),a="number"),null==r||"number"===a&&isNaN(r)||("number"!==a||it.cssNumber[u]||(r+="px"),it.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t||(l[n]=r)),t)}},css:function(e,n,r,i){var o,a,s,u=it.camelCase(n);return n=it.cssProps[u]||(it.cssProps[u]=v(e.style,u)),s=it.cssHooks[n]||it.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=$t(e,n,i)),"normal"===o&&n in Qt&&(o=Qt[n]),""===r||r?(a=parseFloat(o),r===!0||it.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),$t=function(e,n,r){var i,o,a,s=r||b(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||it.contains(e.ownerDocument,e)||(u=it.style(e,n)),Yt.test(u)&&Xt.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u},it.each(["height","width"],function(e,n){it.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&zt.test(it.css(e,"display"))?it.swap(e,Jt,function(){return N(e,n,i)}):N(e,n,i):t},set:function(e,t,r){var i=r&&b(e);return T(e,t,r?C(e,n,r,it.support.boxSizing&&"border-box"===it.css(e,"boxSizing",!1,i),i):0)}}}),it(function(){it.support.reliableMarginRight||(it.cssHooks.marginRight={get:function(e,n){return n?it.swap(e,{display:"inline-block"},$t,[e,"marginRight"]):t}}),!it.support.pixelPosition&&it.fn.position&&it.each(["top","left"],function(e,n){it.cssHooks[n]={get:function(e,r){return r?(r=$t(e,n),Yt.test(r)?it(e).position()[n]+"px":r):t}}})}),it.expr&&it.expr.filters&&(it.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},it.expr.filters.visible=function(e){return!it.expr.filters.hidden(e)}),it.each({margin:"",padding:"",border:"Width"},function(e,t){it.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Kt[r]+t]=o[r]||o[r-2]||o[0];return i}},Xt.test(e)||(it.cssHooks[e+t].set=T)});var en=/%20/g,tn=/\[\]$/,nn=/\r?\n/g,rn=/^(?:submit|button|image|reset|file)$/i,on=/^(?:input|select|textarea|keygen)/i;it.fn.extend({serialize:function(){return it.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=it.prop(this,"elements");return e?it.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!it(this).is(":disabled")&&on.test(this.nodeName)&&!rn.test(e)&&(this.checked||!Ft.test(e))}).map(function(e,t){var n=it(this).val();return null==n?null:it.isArray(n)?it.map(n,function(e){return{name:t.name,value:e.replace(nn,"\r\n")}}):{name:t.name,value:n.replace(nn,"\r\n")}}).get()}}),it.param=function(e,n){var r,i=[],o=function(e,t){t=it.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=it.ajaxSettings&&it.ajaxSettings.traditional),it.isArray(e)||e.jquery&&!it.isPlainObject(e))it.each(e,function(){o(this.name,this.value)});else for(r in e)S(r,e[r],n,o);return i.join("&").replace(en,"+")},it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){it.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),it.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var an,sn,un=it.now(),ln=/\?/,cn=/#.*$/,fn=/([?&])_=[^&]*/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,dn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,hn=/^(?:GET|HEAD)$/,gn=/^\/\//,mn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,yn=it.fn.load,vn={},xn={},bn="*/".concat("*");try{sn=X.href}catch(wn){sn=z.createElement("a"),sn.href="",sn=sn.href}an=mn.exec(sn.toLowerCase())||[],it.fn.load=function(e,n,r){if("string"!=typeof e&&yn)return yn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),it.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&it.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?it("<div>").append(it.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},it.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){it.fn[t]=function(e){return this.on(t,e)}}),it.each(["get","post"],function(e,n){it[n]=function(e,r,i,o){return it.isFunction(r)&&(o=o||i,i=r,r=t),it.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),it.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:sn,type:"GET",isLocal:dn.test(an[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":bn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":it.parseJSON,"text xml":it.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?A(A(e,it.ajaxSettings),t):A(it.ajaxSettings,e)},ajaxPrefilter:D(vn),ajaxTransport:D(xn),ajax:function(e,n){function r(e,n,r,s){var l,f,v,x,w,C=n;2!==b&&(b=2,u&&clearTimeout(u),i=t,a=s||"",T.readyState=e>0?4:0,r&&(x=L(p,T,r)),e>=200&&300>e||304===e?(p.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(it.lastModified[o]=w),w=T.getResponseHeader("etag"),w&&(it.etag[o]=w)),204===e?(l=!0,C="nocontent"):304===e?(l=!0,C="notmodified"):(l=q(p,x),C=l.state,f=l.data,v=l.error,l=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(n||C)+"",l?g.resolveWith(d,[f,C,T]):g.rejectWith(d,[T,C,v]),T.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[T,p,l?f:v]),m.fireWith(d,[T,C]),c&&(h.trigger("ajaxComplete",[T,p]),--it.active||it.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=it.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?it(d):it.event,g=it.Deferred(),m=it.Callbacks("once memory"),y=p.statusCode||{},v={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=pn.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)y[t]=[y[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,p.url=((e||p.url||sn)+"").replace(cn,"").replace(gn,an[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=it.trim(p.dataType||"*").toLowerCase().match(at)||[""],null==p.crossDomain&&(l=mn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===an[1]&&l[2]===an[2]&&(l[3]||("http:"===l[1]?80:443))==(an[3]||("http:"===an[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=it.param(p.data,p.traditional)),j(vn,p,n,T),2===b)return T;c=p.global,c&&0===it.active++&&it.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!hn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(ln.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=fn.test(o)?o.replace(fn,"$1_="+un++):o+(ln.test(o)?"&":"?")+"_="+un++)),p.ifModified&&(it.lastModified[o]&&T.setRequestHeader("If-Modified-Since",it.lastModified[o]),it.etag[o]&&T.setRequestHeader("If-None-Match",it.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+bn+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===b))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=j(xn,p,n,T)){T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},p.timeout));try{b=1,i.send(v,r)}catch(C){if(!(2>b))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getScript:function(e,n){return it.get(e,t,n,"script")},getJSON:function(e,t,n){return it.get(e,t,n,"json")}}),it.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return it.globalEval(e),e}}}),it.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),it.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=it("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),z.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Tn=[],Cn=/(=)\?(?=&|$)|\?\?/;it.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Tn.pop()||it.expando+"_"+un++;return this[e]=!0,e}}),it.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Cn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Cn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=it.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Cn,"$1"+o):n.jsonp!==!1&&(n.url+=(ln.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||it.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Tn.push(o)),s&&it.isFunction(a)&&a(s[0]),s=a=t}),"script"):t}),it.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Nn=it.ajaxSettings.xhr(),kn={0:200,1223:204},En=0,Sn={};e.ActiveXObject&&it(e).on("unload",function(){for(var e in Sn)Sn[e]();Sn=t}),it.support.cors=!!Nn&&"withCredentials"in Nn,it.support.ajax=Nn=!!Nn,it.ajaxTransport(function(e){var n;return it.support.cors||Nn&&!e.crossDomain?{send:function(r,i){var o,a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)s[o]=e.xhrFields[o];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(o in r)s.setRequestHeader(o,r[o]);n=function(e){return function(){n&&(delete Sn[a],n=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?i(s.status||404,s.statusText):i(kn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:t,s.getAllResponseHeaders()))}},s.onload=n(),s.onerror=n("error"),n=Sn[a=En++]=n("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){n&&n()}}:t});var Dn,jn,An=/^(?:toggle|show|hide)$/,Ln=RegExp("^(?:([+-])=|)("+ot+")([a-z%]*)$","i"),qn=/queueHooks$/,Hn=[P],On={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Ln.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(it.cssNumber[e]?"":"px"),"px"!==r&&s){s=it.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,it.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};it.Animation=it.extend(M,{tweener:function(e,t){it.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],On[n]=On[n]||[],On[n].unshift(t)},prefilter:function(e,t){t?Hn.unshift(e):Hn.push(e)}}),it.Tween=R,R.prototype={constructor:R,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(it.cssNumber[n]?"":"px")},cur:function(){var e=R.propHooks[this.prop];return e&&e.get?e.get(this):R.propHooks._default.get(this)},run:function(e){var t,n=R.propHooks[this.prop];return this.pos=t=this.options.duration?it.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):R.propHooks._default.set(this),this}},R.prototype.init.prototype=R.prototype,R.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=it.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){it.fx.step[e.prop]?it.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[it.cssProps[e.prop]]||it.cssHooks[e.prop])?it.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},R.propHooks.scrollTop=R.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},it.each(["toggle","show","hide"],function(e,t){var n=it.fn[t];it.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_(t,!0),e,r,i)}}),it.fn.extend({fadeTo:function(e,t,n,r){return this.filter(x).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=it.isEmptyObject(e),o=it.speed(t,n,r),a=function(){var t=M(this,it.extend({},e),o);a.finish=function(){t.stop(!0)},(i||it._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=it.timers,a=it._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&qn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&it.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=it._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=it.timers,a=r?r.length:0;for(n.finish=!0,it.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),it.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){it.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),it.speed=function(e,t,n){var r=e&&"object"==typeof e?it.extend({},e):{complete:n||!n&&t||it.isFunction(e)&&e,duration:e,easing:n&&t||t&&!it.isFunction(t)&&t};return r.duration=it.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in it.fx.speeds?it.fx.speeds[r.duration]:it.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){it.isFunction(r.old)&&r.old.call(this),r.queue&&it.dequeue(this,r.queue)},r},it.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},it.timers=[],it.fx=R.prototype.init,it.fx.tick=function(){var e,n=it.timers,r=0;for(Dn=it.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||it.fx.stop(),Dn=t},it.fx.timer=function(e){e()&&it.timers.push(e)&&it.fx.start()},it.fx.interval=13,it.fx.start=function(){jn||(jn=setInterval(it.fx.tick,it.fx.interval))},it.fx.stop=function(){clearInterval(jn),jn=null},it.fx.speeds={slow:600,fast:200,_default:400},it.fx.step={},it.expr&&it.expr.filters&&(it.expr.filters.animated=function(e){return it.grep(it.timers,function(t){return e===t.elem}).length}),it.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){it.offset.setOffset(this,e,t)});var n,r,i=this[0],o={top:0,left:0},a=i&&i.ownerDocument;if(a)return n=a.documentElement,it.contains(n,i)?(typeof i.getBoundingClientRect!==I&&(o=i.getBoundingClientRect()),r=B(a),{top:o.top+r.pageYOffset-n.clientTop,left:o.left+r.pageXOffset-n.clientLeft}):o},it.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=it.css(e,"position"),f=it(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=it.css(e,"top"),u=it.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),it.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},it.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===it.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),it.nodeName(e[0],"html")||(r=e.offset()),r.top+=it.css(e[0],"borderTopWidth",!0),r.left+=it.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-it.css(n,"marginTop",!0),left:t.left-r.left-it.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||z.documentElement;e&&!it.nodeName(e,"html")&&"static"===it.css(e,"position");)e=e.offsetParent;return e||z.documentElement})}}),it.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(n,r){var i="pageYOffset"===r;it.fn[n]=function(o){return it.access(this,function(n,o,a){var s=B(n);return a===t?s?s[r]:n[o]:(s?s.scrollTo(i?e.pageXOffset:a,i?a:e.pageYOffset):n[o]=a,t)},n,o,arguments.length,null)}}),it.each({Height:"height",Width:"width"},function(e,n){it.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){it.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return it.access(this,function(n,r,i){var o;return it.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?it.css(n,r,s):it.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=it,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return it})})(window);

/* JSON Finder Chrome Extension */
(function() {

	var pre;
	var json;
	var json_viewer;
	var current_keyword;
	var current_search_index;

	function domready() {

		if (document.body && document.body.childNodes[0] && document.body.childNodes[0].tagName == "PRE") {
			pre = document.body.childNodes[0];
			try {
				// hide original pre early
				pre.style.display = 'none';
				rawtext = pre.innerText;
				json = JSON.parse(rawtext);

			} catch(e) {
				onError("cannot parse data as JSON");
				return;
			}
			// start JSON view mode
			beginJSONViewer();
		}
	}

	function beginJSONViewer() {
		// Insert CSS
		var newstyle = document.createElement('link');
		newstyle.rel = 'stylesheet';
		newstyle.type = 'text/css';
		newstyle.href = chrome.extension.getURL('/style.css');
		document.head.appendChild(newstyle);

		// Remove old pre
		document.body.removeChild(pre);

		// Insert html
		var newcontent = $('<div/>').attr('id', 'json_viewer');
		document.body.appendChild(newcontent[0]);

		// Generate viewer
		var first_folder = new FolderView(json);
		json_viewer = new JsonFinderView(newcontent);
		json_viewer.push(first_folder);


		// Insert search
		createSearchToolbarView();

		// Insert status
		document.body.appendChild(json_viewer.statusbar_view.content[0]);

		// Init events
		initEvents();
	}

	function StatusbarView(paths) {
		this.content = $('<div/>')
			.attr('id', 'status_toolbar')
			.addClass('toolbar');
		this.path = paths || [];
		this.bindEvents();
		this.updatePath(this.path);
	}
	StatusbarView.prototype.bindEvents = function() {
		$(this.content)
		.on('mouseenter', '.breadcrumb_item', function(e) {
			$(this).addClass('hover');
		})
		.on('mouseleave', '.breadcrumb_item', function(e) {
			$(this).removeClass('hover');
		});
	}
	StatusbarView.prototype.updatePath = function(paths) {
		this.path = paths || this.path;
		var self = this;
		var dom = $('<ol>')
			.addClass('breadcrumb_list')
			.append(self.createItem('root', '', this.path.length===0));
		this.path.forEach(function(name, i) {
			dom.append(self.createItem(name, self.path.slice(0, i+1).join('.'), i+1===self.path.length));
		});
		this.content.empty().append(dom);
	};
	StatusbarView.prototype.createItem = function(name, path, selected) {
		var body;
		var item = $('<li>')
			.addClass('breadcrumb_item');
		if (path === '') item.addClass('root_item');
		if (selected) {
			item.addClass('selected');
			body = $('<span>').text(name);
		} else {
			body = $('<a>')
				.attr('href', '#'+path)
				.text(name);
			}
		return item.append(body);
	}

	function createSearchToolbarView(json) {
		var $searchTool = $('<div/>').attr('id', 'search_toolbar').addClass('toolbar hideout-toolbar').css({display: 'none'});
		$searchTool.append($('<input type="search" name="searchbox" placeholder="Find"/>'));
		$searchTool.append($('<span class="search_status"/>'));
		document.body.appendChild($searchTool[0]);
	}

	function onError(err) {
		// show original pre if error occured
		if (pre) {
			pre.style.display = '';
		}
	}
	
	document.addEventListener("DOMContentLoaded", domready, false);


	function SearchToolbarEvents() {
		this.namespace = 'searchTool';
	}
	SearchToolbarEvents.prototype = {
		register: function(listener) {
			this.listener = listener;
			this.listener.namespaces[this.namespace] = this;

			var events = {
				'keydown': this.onSubmit
			};
			for (var ev in events) {
				var evgroup = this.listener.events[ev] || {};
				evgroup[this.namespace] = events[ev];
				this.listener.events[ev] = evgroup;
			}
		},
		deregister: function() {
			if (!this.listener) return;
			delete this.listener.namespaces[this.namespace];
			for (var ev in this.listener.events) {
				delete this.listener.events[ev][this.namespace];
			}
			this.listener = undefined;
		},
		onSubmit: function(e) {
			switch (e.keyCode) {
				case 70: // F
					if (e.metaKey) {
						e.stopPropagation();
						e.preventDefault();
						$('#search_toolbar input[name="searchbox"]').trigger('select');
					}
					break;
				case 27: // escape
					var toolbar = $('#search_toolbar');
					if (toolbar.css('display')!=='none') {
						e.stopPropagation();
						this.deregister();
						toolbar.find('input[name="searchbox"]').trigger('blur');
						toolbar.slideUp(150);
					}
					break;
				case 13: // enter
					e.stopPropagation();
					this.searchNext(e.shiftKey ?-1:1);

					break;
			}
		},

		searchNext: function(dir) {
			var dir = dir || 1; // +1 next, -1 previous
			var input = $('#search_toolbar input[name="searchbox"]');
			input.select();
			var keyword = input.val();

			if (keyword == '') return;
			
			if (current_keyword !== keyword) {
				current_keyword = keyword;
				current_search_results = this.searchJSON(keyword, json);
				current_search_index = 0;
			} else if (current_search_results.length > 0) {
				current_search_index = (current_search_index+dir);
				if (current_search_index >= 0) current_search_index = current_search_index % current_search_results.length;
				else current_search_index = current_search_results.length-1;
			} else {
				current_search_index = 0;
				current_search_results = [];
			}
			// show match
			if (current_search_results.length > 0) {
				$('.search_status').text((current_search_index+1) + ' of ' + current_search_results.length);
				
				var location = current_search_results[current_search_index];
				var paths = location[0].split('.');
				var isValue = !!location[1];
				var match_pos = location[2];

				json_viewer.openPath(location[0]);

				// update hash
				history.pushState({}, '', '#'+json_viewer.path('.'));

			} else {
				$('.search_status').text('0 of 0');
			}
		},

		searchJSON: function(keyword, json) {
			// must not contain cyclic link e.g. reference to item in this tree
			var results = [];
			var q = [];
			shallowPush(json, "", q);
			while (q.length > 0) {
				var pos;
				var item = q.shift();
				var key = item[0];
				var value = item[1];
				var path = item[2];

				switch (typeof value) {
				// case 'boolean':
				// 	break;
				// case 'number':
				// 	break;
				// case 'string':
				// 	break;
				// case 'function':
				// 	break;
				case 'object':
					if (value !== null) {
						shallowPushBefore(value, path, q);
					}
					break;
				default:
				}

				// match key
				pos = key.indexOf(keyword);
				if (pos >= 0) {
					results.push([ path, 0, pos ]);
				}
				if (['boolean', 'number', 'string'].indexOf(typeof value) >= 0) {
					pos = value.toString().indexOf(keyword);
					if (pos >= 0) {
						results.push([ path, 1, pos ]);
					}
				}
			}

			function shallowPush(obj, path, q) { return shallowAdd(obj, path, q, 'push'); }
			function shallowPushBefore(obj, path, q) { return shallowAdd(obj, path, q, 'unshift'); }
			function shallowAdd(obj, path, q, verb) {
				var verb = verb || 'push';
				var prefix = path ? path+".":"";
				var itemlist = [];
				if (Array.isArray(obj)) {
					obj.forEach(function(val, key) {
						itemlist.push([ key.toString(), val, prefix+key ]);
					});
				} else {
					Object.keys(obj).forEach(function(key) {
						itemlist.push([ key, obj[key], prefix+key ]);
					});
				}
				q[verb].apply(q, itemlist);
			}
			return results;
		}
	};

	function initEvents() {
		var listener = {
			events: {},
			namespaces: {}
		};
		var searchEvents = new SearchToolbarEvents();

		$(document)
		.on('keydown', function(e) {
			for (var ns in listener.events.keydown) {
				if (e.isPropagationStopped()) break;
				listener.events.keydown[ns].call(listener.namespaces[ns], e);
			}

			if (!e.isPropagationStopped()) {
				switch (e.keyCode) {
				case 70: // F
					if (e.metaKey) {
						// stop browser default Find shortcut key
						var toolbar = $('#search_toolbar');
						if (toolbar.css('display')==='none') {
							e.preventDefault();
							searchEvents.register(listener);
							toolbar.slideDown(100);
							toolbar.find('input[name="searchbox"]').trigger('select');
						}
					}
					break;
				case 27: // escape
				// 	var toolbar = $('#json_toolbar');
				// 	if (toolbar.css('display')==='none') {
				// 		e.stopPropagation();
				// 		toolbar.slideDown('fast');
				// 		toolbar.find('input[name="url"]').trigger('focus');

				// 	} else {
				// 		e.stopPropagation();
				// 		toolbar.slideUp('fast', function() {
				// 			$(this).find('input[name="url"]').trigger('blur');
				// 		});
				// 	}
					break;
				case 13: // enter
					/*
					e.stopPropagation();
					var url = $(this).find('input[name="url"]');
					if (!url.match(/^[a-z]+:\/\/.+$/)) return;
					$.get(url.val())
					.done(function(data) {
						app.view.clear();
						var new_root_folder = new FolderView(data);
						app.view.empty();
						app.view.push(new_root_folder);
						// clear input
						url.val('');
						// close toolbar by simulate ESC
						var keydownEvent = jQuery.Event("keydown");
						keydownEvent.which = keydownEvent.keyCode = 27;
						$(document).trigger(keydownEvent);
					})
					.fail(function(e) {
						console.error(e);
					})
					.always(function() {});
					*/
					break;

				}
			}
		});

		//- Open tab
		$(window).on('hashchange', function(e) {
			var hash = window.location.hash.substr(1);
			if (typeof hash === 'string') {
				json_viewer.openPath(hash);
			}
		}).trigger('hashchange');
	}

	function FolderView(dom, parent, child, selected) {
		this.containerView = null;
		this.parent = parent || null;
		this.child = child || null;
		this.dom = $(typeof dom === 'string' ? dom : this.parse(dom));
		this.dom.data('view', this);
		this.selected = selected;
		this.bindEvents();
	}
	FolderView.prototype = {
		parse: function(json) {
			if (json === null || typeof json !== 'object') return "";
			return jsonToFinderView(json).get(0);
		},
		depth: function() {
			return this.parent ? this.parent.depth()+1: 0;
		},
		bindEvents: function() {
			var self = this;
			self.dom
			.on('click', '.folder-item', function(e) {
				// update hash
				var paths = self.getPath(this);
				self.containerView.openPath(paths);
				history.pushState({}, '', '#'+paths.join('.'));
			});
		},
		getPath: function(el) {
			var $item = $(el);
			var paths = [$item.find('.json-keyname').data('key')];
			var current = this;
			while (current.parent) {
				current = current.parent;
				paths.unshift(current.selected.find('.json-keyname').data('key'));
			}
			return paths;
		},
		focus: function(key) {
			var self = this;
			var $item;
			// object key or array index
			if (typeof key === 'string' || typeof key === 'number') {
				$item = self.dom.find('.json-keyname[data-key="'+key+'"]').parents('.folder-item');
			} else {
				$item = $(key);
			}
			if ($item.length === 0) return;

			// make selection
			self.selected = $item;
			$item.addClass('focus selected').siblings().removeClass('selected');
			var value = $item.data('value');
			if (typeof value === 'object') {
				var new_folder = new FolderView(value);
				self.containerView.add(new_folder, self.depth()+1);
			} else {
				self.containerView.popTo(self.depth()+1);
			}
			self.containerView.focusItem && self.containerView.focusItem.removeClass('focus');
			self.containerView.focus($item);

			var wrapper = self.containerView.dom.children('.wrapper')[0];
			wrapper.scrollLeft = Math.max(0, ($item.position().left+$item.outerWidth()*4)-$(window).outerWidth());//$item.offset().left;

		},
		unfocus: function() {
			// deselection
			self.selected = undefined;
			this.dom.find('.folder-item').removeClass('focus selected');
		}
	};

	function JsonFinderView(container) {
		if (!container) container = '<div/>';
		this.content = $('<div class="wrapper"/>');
		this.dom = $(container).addClass('folder-frame').empty().append(this.content);
		this.dom.data('view', this);
		this.folderViews = [];
		this.focusItem = null;
		this.statusbar_view = new StatusbarView();;
		this.bindEvents();
	}
	JsonFinderView.prototype = {
		empty: function() { this.content.empty(); },
		depth: function() { return this.folderViews.length; },
		get: function(i) { return this.folderViews[i]; },
		current: function() { return this.get(this.folderViews.length-1); },
		root: function() { return this.get(0); },
		path: function(delimiter) {
			var path = [];
			var folder = this.root();
			while (folder && folder.selected) {
				path.push(folder.selected.find('.json-keyname').data('key'));
				folder = folder.child;
			}
			return typeof delimiter === 'undefined' ? path : path.join(delimiter);
		},
		push: function(folderview) {
			folderview.child = null;
			folderview.parent = this.current();
			folderview.containerView = this;
			if (folderview.parent) folderview.parent.child = folderview;
			this.content.append(folderview.dom);
			this.folderViews[this.folderViews.length] = folderview;
			return this.folderViews.length;
		},
		pop: function() {
			if (this.folderViews.length === 0) return null;
			var folderview = this.folderViews.pop();
			if (folderview.parent) folderview.parent.child = null;
			folderview.parent = null;
			if (folderview.child) folderview.child.parent = null;
			folderview.child = null;
			folderview.dom.detach();
			return folderview;
		},
		add: function(folderview, depth) {
			if (!this.popTo(depth)) return false;
			if (!folderview) return this.depth();
			return this.push(folderview);
		},
		popTo: function(depth) {
			if (depth < 0) return false;
			for (var i = this.depth(); i > depth; i--) {
				this.pop();
			}
			return true;
		},

		openPath: function(paths) {
			if (paths === '') paths = [];
			if (typeof paths === 'string') paths = paths.split('.');
			if (!Array.isArray(paths)) throw new Error('not a valid json path');
			this.popTo(0);
			var current_folder = new FolderView(json);
			this.push(current_folder);
			for (var i = 0; i<paths.length; i++) {
				this.current().focus(paths[i]);
			}
			// update status bar
			this.statusbar_view.updatePath(paths);
		},

		bindEvents: function() {
			var self = this;
			$(document)
			.on('keydown', function(e) {
				switch(e.keyCode) {
					case 39: // arrow right
						// On OSX: Option+ARROW_RIGHT = Go next
						// We want to keep this default behavior
						if (!e.metaKey) {
							e.stopPropagation();
							var focusItem = self.focus();
							if (!focusItem) {
								self.root() && self.root().dom.find('.folder-item:first').trigger('click');
							} else {
								var focusFolder = focusItem.parents('.folder-view').data('view');
								if (focusFolder && focusFolder.child) focusFolder.child.dom.find('.folder-item:first').trigger('click');
							}
						}
						break;
					case 37: // arrow left
					// case 27: // escape
					// case 8: // backspace

						// On OSX: Option+ARROW_LEFT = Go back
						// We want to keep this default behavior
						if (!e.metaKey) {
							// 
							e.stopPropagation();
							var focusItem = self.focus();
							if (!focusItem) break;
							var focusFolder = focusItem.parents('.folder-view').data('view');
							if (focusFolder && focusFolder.parent) {
								focusFolder.parent.dom.find('.folder-item.selected:first').trigger('click');
							} else {
								self.unfocus();
								self.openPath([]);
								history.pushState({}, '', '#');
							}
						}
						break;
					case 38: // arrow up
						e.stopPropagation();
						var focusItem = self.focus();
						if (!focusItem) break;
						var nextItem = focusItem.prev('.folder-item');
						if (nextItem) nextItem.trigger('click');
						break;
					case 40: // arrow down
						e.stopPropagation();
						e.preventDefault();
						var focusItem = self.focus();
						if (!focusItem) {
							self.root() && self.root().dom.find('.folder-item:first').trigger('click');
						} else {
							var nextItem = focusItem.next('.folder-item');
							if (nextItem) nextItem.trigger('click');
						}
						break;
				}
			});
		},

		focus: function(el) {
			if (!el) return this.focusItem;
			this.focusItem = $(el);
		},
		unfocus: function() {
			this.popTo(1);
			this.current().unfocus();
			this.focusItem = null;
		},
		clear: function() {
			this.popTo(0);
			this.focusItem = null;
		}
	};

	function jsonToFinderView(json) {
		var dom;
		var list;
		dom = $('<div/>').addClass('folder-view');
		dom.append(
			$('<div/>').addClass('wrapper scrollable-vertical')
			.append(list = $('<ul/>').addClass('folder-item-list'))
		);
		// dom.append(list = $('<ul/>').addClass('folder-item-list'));
		$.each(json, function(key, value) {
			var item = $('<div class="json-value"/>').text("");

			switch (typeof value) {
			case 'boolean':
				item
					.attr('title', value)
					.addClass('datatype-boolean').text(value);
				break;
			case 'number':
				item
					.attr('title', value)
					.addClass('datatype-number').text(value);
				break;
			case 'string':
				item
					.attr('title', value)
					.addClass('datatype-string').text(value);
				break;
			case 'function':
				item
					.attr('title', value.toString())
					.addClass('datatype-function').text(value.toString());
				break;
			case 'object':
				// array or object
				if (value === null) {
					item
					.attr('title', 'null')
					.addClass('datatype-null').text("");
				} else if (Array.isArray(value)) {
					item
					.attr('title', 'Array')
					.addClass('datatype-array').text("")
						.append('<i class="folder-hassub-arrow"/>');
				} else {
					item
					.attr('title', 'Object')
					.addClass('datatype-object').text("")
						.append('<i class="folder-hassub-arrow"/>');
				}
				break;
			default:
				item.text('unknown type');
			}
			item = $('<li/>').addClass('folder-item')
				.append($('<div class="json-property"/>')
					.append($('<div class="json-keyname"/>').attr('data-key', key).text(key))
					.append(item)
			);
			item.data('value', value);
			list.append(item);
		});

		return dom;
	}

})();
