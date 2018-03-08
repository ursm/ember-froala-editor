window.EmberENV={FEATURES:{},EXTEND_PROTOTYPES:{Date:!1}}
var loader,define,requireModule,require,requirejs,runningTests=!1
function createDeprecatedModule(e){define(e,["exports","ember-resolver/resolver","ember"],function(t,n,r){r.default.deprecate("Usage of `"+e+"` module is deprecated, please update to `ember-resolver`.",!1,{id:"ember-resolver.legacy-shims",until:"3.0.0"}),t.default=n.default})}(function(e){"use strict"
function t(){var e=Object.create(null)
return e.__=void 0,delete e.__,e}var n={loader:loader,define:define,requireModule:requireModule,require:require,requirejs:requirejs}
requirejs=require=requireModule=function(e){for(var t=[],n=u(e,"(require)",t),r=t.length-1;r>=0;r--)t[r].exports()
return n.module.exports},loader={noConflict:function(t){var r,i
for(r in t)t.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i=t[r],e[i]=e[r],e[r]=n[r])},makeDefaultExport:!0}
var r=t(),i=(t(),0)
var o=["require","exports","module"]
function a(e,t,n,r){this.uuid=i++,this.id=e,this.deps=!t.length&&n.length?o:t,this.module={exports:{}},this.callback=n,this.hasExportsAsDep=!1,this.isAlias=r,this.reified=new Array(t.length),this.state="new"}function s(){}function l(e){this.id=e}function u(e,t,n){for(var i=r[e]||r[e+"/index"];i&&i.isAlias;)i=r[i.id]
return i||function(e,t){throw new Error("Could not find module `"+e+"` imported from `"+t+"`")}(e,t),n&&"pending"!==i.state&&"finalized"!==i.state&&(i.findDeps(n),n.push(i)),i}function c(e,t){if("."!==e.charAt(0))return e
for(var n=e.split("/"),r=t.split("/").slice(0,-1),i=0,o=n.length;i<o;i++){var a=n[i]
if(".."===a){if(0===r.length)throw new Error("Cannot access parent module of root")
r.pop()}else{if("."===a)continue
r.push(a)}}return r.join("/")}function f(e){return!(!r[e]&&!r[e+"/index"])}a.prototype.makeDefaultExport=function(){var e=this.module.exports
null===e||"object"!=typeof e&&"function"!=typeof e||void 0!==e.default||!Object.isExtensible(e)||(e.default=e)},a.prototype.exports=function(){if("finalized"===this.state||"reifying"===this.state)return this.module.exports
loader.wrapModules&&(this.callback=loader.wrapModules(this.id,this.callback)),this.reify()
var e=this.callback.apply(this,this.reified)
return this.reified.length=0,this.state="finalized",this.hasExportsAsDep&&void 0===e||(this.module.exports=e),loader.makeDefaultExport&&this.makeDefaultExport(),this.module.exports},a.prototype.unsee=function(){this.state="new",this.module={exports:{}}},a.prototype.reify=function(){if("reified"!==this.state){this.state="reifying"
try{this.reified=this._reify(),this.state="reified"}finally{"reifying"===this.state&&(this.state="errored")}}},a.prototype._reify=function(){for(var e=this.reified.slice(),t=0;t<e.length;t++){var n=e[t]
e[t]=n.exports?n.exports:n.module.exports()}return e},a.prototype.findDeps=function(e){if("new"===this.state){this.state="pending"
for(var t=this.deps,n=0;n<t.length;n++){var r=t[n],i=this.reified[n]={exports:void 0,module:void 0}
"exports"===r?(this.hasExportsAsDep=!0,i.exports=this.module.exports):"require"===r?i.exports=this.makeRequire():"module"===r?i.exports=this.module:i.module=u(c(r,this.id),this.id,e)}}},a.prototype.makeRequire=function(){var e=this.id,t=function(t){return require(c(t,e))}
return t.default=t,t.moduleId=e,t.has=function(t){return f(c(t,e))},t},(define=function(e,t,n){var i=r[e]
i&&"new"!==i.state||(arguments.length<2&&function(e){throw new Error("an unsupported module was defined, expected `define(id, deps, module)` instead got: `"+e+"` arguments to define`")}(arguments.length),Array.isArray(t)||(n=t,t=[]),r[e]=n instanceof l?new a(n.id,t,n,!0):new a(e,t,n,!1))}).exports=function(e,t){var n=r[e]
if(!n||"new"===n.state)return(n=new a(e,[],s,null)).module.exports=t,n.state="finalized",r[e]=n,n},define.alias=function(e,t){return 2===arguments.length?define(t,new l(e)):new l(e)},requirejs.entries=requirejs._eak_seen=r,requirejs.has=f,requirejs.unsee=function(e){u(e,"(unsee)",!1).unsee()},requirejs.clear=function(){requirejs.entries=requirejs._eak_seen=r=t(),t()},define("foo",function(){}),define("foo/bar",[],function(){}),define("foo/asdf",["module","exports","require"],function(e,t,n){n.has("foo/bar")&&n("foo/bar")}),define("foo/baz",[],define.alias("foo")),define("foo/quz",define.alias("foo")),define.alias("foo","foo/qux"),define("foo/bar",["foo","./quz","./baz","./asdf","./bar","../foo"],function(){}),define("foo/main",["foo/bar"],function(){}),define.exports("foo/exports",{}),require("foo/exports"),require("foo/main"),require.unsee("foo/bar"),requirejs.clear(),"object"==typeof exports&&"object"==typeof module&&module.exports&&(module.exports={require:require,define:define})})(this),function(e){"use strict"
var t,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.toStringTag||"@@toStringTag",a="object"==typeof module,s=e.regeneratorRuntime
if(s)a&&(module.exports=s)
else{(s=e.regeneratorRuntime=a?module.exports:{}).wrap=h
var l="suspendedStart",u="suspendedYield",c="executing",f="completed",p={},d=b.prototype=g.prototype
v.prototype=d.constructor=b,b.constructor=v,b[o]=v.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(d),e},s.awrap=function(e){return new E(e)},y(T.prototype),s.async=function(e,t,n,r){var i=new T(h(e,t,n,r))
return s.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(d),d[i]=function(){return this},d[o]="Generator",d.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function n(){for(;t.length;){var r=t.pop()
if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=C,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function r(n,r){return a.type="throw",a.arg=e,t.next=n,!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion
if("root"===o.tryLoc)return r("end")
if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc")
if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r]
if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i
break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null)
var a=o?o.completion:{}
return a.type=e,a.arg=t,o?this.next=o.finallyLoc:this.complete(a),p},complete:function(e,t){if("throw"===e.type)throw e.arg
"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var i=r.arg
A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},p}}}function h(e,n,r,i){var o=n&&n.prototype instanceof g?n:g,a=Object.create(o.prototype),s=new w(i||[])
return a._invoke=function(e,n,r){var i=l
return function(o,a){if(i===c)throw new Error("Generator is already running")
if(i===f){if("throw"===o)throw a
return S()}for(;;){var s=r.delegate
if(s){if("return"===o||"throw"===o&&s.iterator[o]===t){r.delegate=null
var d=s.iterator.return
if(d){var h=m(d,s.iterator,a)
if("throw"===h.type){o="throw",a=h.arg
continue}}if("return"===o)continue}var h=m(s.iterator[o],s.iterator,a)
if("throw"===h.type){r.delegate=null,o="throw",a=h.arg
continue}o="next",a=t
var g=h.arg
if(!g.done)return i=u,g
r[s.resultName]=g.value,r.next=s.nextLoc,r.delegate=null}if("next"===o)r.sent=r._sent=a
else if("throw"===o){if(i===l)throw i=f,a
r.dispatchException(a)&&(o="next",a=t)}else"return"===o&&r.abrupt("return",a)
i=c
var h=m(e,n,r)
if("normal"===h.type){i=r.done?f:u
var g={value:h.arg,done:r.done}
if(h.arg!==p)return g
r.delegate&&"next"===o&&(a=t)}else"throw"===h.type&&(i=f,o="throw",a=h.arg)}}}(e,r,s),a}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function g(){}function v(){}function b(){}function y(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){this.arg=e}function T(e){function t(n,r,i,o){var a=m(e[n],e,r)
if("throw"!==a.type){var s=a.arg,l=s.value
return l instanceof E?Promise.resolve(l.arg).then(function(e){t("next",e,i,o)},function(e){t("throw",e,i,o)}):Promise.resolve(l).then(function(e){s.value=e,i(s)},o)}o(a.arg)}var n
"object"==typeof process&&process.domain&&(t=process.domain.bind(t)),this._invoke=function(e,r){function i(){return new Promise(function(n,i){t(e,r,n,i)})}return n=n?n.then(i,i):i()}}function _(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function C(e){if(e){var r=e[i]
if(r)return r.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r
return r.value=t,r.done=!0,r}
return a.next=a}}return{next:S}}function S(){return{value:t,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),self.EmberENV.EXTEND_PROTOTYPES=!1,function(e,t){"use strict"
"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict"
var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,l=n.indexOf,u={},c=u.toString,f=u.hasOwnProperty,p=f.toString,d=p.call(Object),h={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},g=function(e){return null!=e&&e===e.window},v={type:!0,src:!0,noModule:!0}
function b(e,t,n){var i,o=(t=t||r).createElement("script")
if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i])
t.head.appendChild(o).parentNode.removeChild(o)}function y(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[c.call(e)]||"object":typeof e}var E=function(e,t){return new E.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
function _(e){var t=!!e&&"length"in e&&e.length,n=y(e)
return!m(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}E.fn=E.prototype={jquery:"3.3.1",constructor:E,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(e){return this.pushStack(E.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1
for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(u&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&E.isPlainObject(n)?n:{},a[t]=E.extend(u,o,r)):void 0!==r&&(a[t]=r))
return a},E.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e){b(e)},each:function(e,t){var n,r=0
if(_(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[]
return null!=e&&(_(Object(e))?E.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i])
return r},map:function(e,t,n){var r,i,o=0,s=[]
if(_(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i)
else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i)
return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=n[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()})
var A=function(e){var t,n,r,i,o,a,s,l,u,c,f,p,d,h,m,g,v,b,y,E="sizzle"+1*new Date,T=e.document,_=0,A=0,w=ae(),C=ae(),S=ae(),O=function(e,t){return e===t&&(f=!0),0},x={}.hasOwnProperty,R=[],N=R.pop,L=R.push,I=R.push,k=R.slice,D=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",j="\\["+M+"*("+F+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+M+"*\\]",B=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+j+")*)|.*)\\)|)",H=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),U=new RegExp("^"+M+"*,"+M+"*"),W=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),K=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),q=new RegExp(B),z=new RegExp("^"+F+"$"),V={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),TAG:new RegExp("^("+F+"|[*])"),ATTR:new RegExp("^"+j),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=be(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"})
try{I.apply(R=k.call(T.childNodes),T.childNodes),R[T.childNodes.length].nodeType}catch(e){I={apply:R.length?function(e,t){L.apply(e,k.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,s,u,c,f,h,v,b=t&&t.ownerDocument,_=t?t.nodeType:9
if(r=r||[],"string"!=typeof e||!e||1!==_&&9!==_&&11!==_)return r
if(!i&&((t?t.ownerDocument||t:T)!==d&&p(t),t=t||d,m)){if(11!==_&&(f=X.exec(e)))if(o=f[1]){if(9===_){if(!(u=t.getElementById(o)))return r
if(u.id===o)return r.push(u),r}else if(b&&(u=b.getElementById(o))&&y(t,u)&&u.id===o)return r.push(u),r}else{if(f[2])return I.apply(r,t.getElementsByTagName(e)),r
if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return I.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!g||!g.test(e))){if(1!==_)b=t,v=e
else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=E),s=(h=a(e)).length;s--;)h[s]="#"+c+" "+ve(h[s])
v=h.join(","),b=J.test(e)&&me(t.parentNode)||t}if(v)try{return I.apply(r,b.querySelectorAll(v)),r}catch(e){}finally{c===E&&t.removeAttribute("id")}}}return l(e.replace($,"$1"),t,r,i)}function ae(){var e=[]
return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function se(e){return e[E]=!0,e}function le(e){var t=d.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function me(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:T
return a!==d&&9===a.nodeType&&a.documentElement?(h=(d=a).documentElement,m=!o(d),T!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=le(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=le(function(e){return h.appendChild(e).id=E,!d.getElementsByName||!d.getElementsByName(E).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee)
return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e)
return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},v=[],g=[],(n.qsa=Q.test(d.querySelectorAll))&&(le(function(e){h.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+E+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=d.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=Q.test(b=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&le(function(e){n.disconnectedMatch=b.call(e,"*"),b.call(e,"[s!='']:x"),v.push("!=",B)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),y=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},O=t?function(e,t){if(e===t)return f=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===T&&y(T,e)?-1:t===d||t.ownerDocument===T&&y(T,t)?1:c?D(c,e)-D(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t]
if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?D(c,e)-D(c,t):0
if(i===o)return ce(e,t)
for(n=e;n=n.parentNode;)a.unshift(n)
for(n=t;n=n.parentNode;)s.unshift(n)
for(;a[r]===s[r];)r++
return r?ce(a[r],s[r]):a[r]===T?-1:s[r]===T?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(K,"='$1']"),n.matchesSelector&&m&&!S[t+" "]&&(!v||!v.test(t))&&(!g||!g.test(t)))try{var r=b.call(e,t)
if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),y(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e)
var i=r.attrHandle[t.toLowerCase()],o=i&&x.call(r.attrHandle,t.toLowerCase())?i(e,t,!m):void 0
return void 0!==o?o:n.attributes||!m?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0
if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(O),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o))
for(;i--;)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t)
return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&q.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=w[e+" "]
return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&w(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e)
return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(H," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),b=!l&&!s,y=!1
if(g){if(o){for(;m;){for(p=t;p=p[m];)if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&b){for(y=(d=(u=(c=(f=(p=g)[E]||(p[E]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===_&&u[1])&&u[2],p=d&&g.childNodes[d];p=++d&&p&&p[m]||(y=d=0)||h.pop();)if(1===p.nodeType&&++y&&p===t){c[e]=[_,d,y]
break}}else if(b&&(y=d=(u=(c=(f=(p=t)[E]||(p[E]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===_&&u[1]),!1===y)for(;(p=++d&&p&&p[m]||(y=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++y||(b&&((c=(f=p[E]||(p[E]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[_,y]),p!==t)););return(y-=i)===r||y%r==0&&y/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e)
return i[E]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=D(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace($,"$1"))
return r[E]?se(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return z.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n
do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t)
for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t)
function ge(){}function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function be(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=A++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i)
return!1}:function(t,n,l){var u,c,f,p=[_,s]
if(l){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(c=(f=t[E]||(t[E]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t
else{if((u=c[o])&&u[0]===_&&u[1]===s)return p[2]=u[2]
if(c[o]=p,p[2]=e(t,n,l))return!0}return!1}}function ye(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function Ee(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),u&&t.push(s)))
return a}function Te(e,t,n,r,i,o){return r&&!r[E]&&(r=Te(r)),i&&!i[E]&&(i=Te(i,o)),se(function(o,a,s,l){var u,c,f,p=[],d=[],h=a.length,m=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n)
return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!o&&t?m:Ee(m,p,e,s,l),v=n?i||(o?e:h||r)?[]:a:g
if(n&&n(g,v,s,l),r)for(u=Ee(v,d),r(u,[],s,l),c=u.length;c--;)(f=u[c])&&(v[d[c]]=!(g[d[c]]=f))
if(o){if(i||e){if(i){for(u=[],c=v.length;c--;)(f=v[c])&&u.push(g[c]=f)
i(null,v=[],u,l)}for(c=v.length;c--;)(f=v[c])&&(u=i?D(o,f):p[c])>-1&&(o[u]=!(a[u]=f))}}else v=Ee(v===a?v.splice(h,v.length):v),i?i(null,a,v,l):I.apply(a,v)})}function _e(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],l=a?1:0,c=be(function(e){return e===t},s,!0),f=be(function(e){return D(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))
return t=null,i}];l<o;l++)if(n=r.relative[e[l].type])p=[be(ye(p),n)]
else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[E]){for(i=++l;i<o&&!r.relative[e[i].type];i++);return Te(l>1&&ye(p),l>1&&ve(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace($,"$1"),n,l<i&&_e(e.slice(l,i)),i<o&&_e(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return ye(p)}return ge.prototype=r.filters=r.pseudos,r.setFilters=new ge,a=oe.tokenize=function(e,t){var n,i,o,a,s,l,u,c=C[e+" "]
if(c)return t?0:c.slice(0)
for(s=e,l=[],u=r.preFilter;s;){for(a in n&&!(i=U.exec(s))||(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),n=!1,(i=W.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),s=s.slice(n.length)),r.filter)!(i=V[a].exec(s))||u[a]&&!(i=u[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length))
if(!n)break}return t?s.length:s?oe.error(e):C(e,l).slice(0)},s=oe.compile=function(e,t){var n,i=[],o=[],s=S[e+" "]
if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=_e(t[n]))[E]?i.push(s):o.push(s);(s=S(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,l,c){var f,h,g,v=0,b="0",y=o&&[],E=[],T=u,A=o||i&&r.find.TAG("*",c),w=_+=null==T?1:Math.random()||.1,C=A.length
for(c&&(u=a===d||a||c);b!==C&&null!=(f=A[b]);b++){if(i&&f){for(h=0,a||f.ownerDocument===d||(p(f),s=!m);g=e[h++];)if(g(f,a||d,s)){l.push(f)
break}c&&(_=w)}n&&((f=!g&&f)&&v--,o&&y.push(f))}if(v+=b,n&&b!==v){for(h=0;g=t[h++];)g(y,E,a,s)
if(o){if(v>0)for(;b--;)y[b]||E[b]||(E[b]=N.call(l))
E=Ee(E)}I.apply(l,E),c&&!o&&E.length>0&&v+t.length>1&&oe.uniqueSort(l)}return c&&(_=w,u=T),y}
return n?se(o):o}(o,i))).selector=e}return s},l=oe.select=function(e,t,n,i){var o,l,u,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e)
if(n=n||[],1===d.length){if((l=d[0]=d[0].slice(0)).length>2&&"ID"===(u=l[0]).type&&9===t.nodeType&&m&&r.relative[l[1].type]){if(!(t=(r.find.ID(u.matches[0].replace(Z,ee),t)||[])[0]))return n
p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(o=V.needsContext.test(e)?0:l.length;o--&&(u=l[o],!r.relative[c=u.type]);)if((f=r.find[c])&&(i=f(u.matches[0].replace(Z,ee),J.test(l[0].type)&&me(t.parentNode)||t))){if(l.splice(o,1),!(e=i.length&&ve(l)))return I.apply(n,i),n
break}}return(p||s(e,d))(i,t,!m,n,!t||J.test(e)&&me(t.parentNode)||t),n},n.sortStable=E.split("").sort(O).join("")===E,n.detectDuplicates=!!f,p(),n.sortDetached=le(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ue(P,function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e)
E.find=A,E.expr=A.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=A.uniqueSort,E.text=A.getText,E.isXMLDoc=A.isXML,E.contains=A.contains,E.escapeSelector=A.escape
var w=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break
r.push(e)}return r},C=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},S=E.expr.match.needsContext
function O(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var x=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function R(e,t,n){return m(t)?E.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?E.grep(e,function(e){return e===t!==n}):"string"!=typeof t?E.grep(e,function(e){return l.call(t,e)>-1!==n}):E.filter(t,e,n)}E.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}))
for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n)
return r>1?E.uniqueSort(n):n},filter:function(e){return this.pushStack(R(this,e||[],!1))},not:function(e){return this.pushStack(R(this,e||[],!0))},is:function(e){return!!R(this,"string"==typeof e&&S.test(e)?E(e):e||[],!1).length}})
var N,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var i,o
if(!e)return this
if(n=n||N,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(i[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),x.test(i[1])&&E.isPlainObject(t))for(i in t)m(this[i])?this[i](t[i]):this.attr(i,t[i])
return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,N=E(r)
var I=/^(?:parents|prev(?:Until|All))/,k={children:!0,contents:!0,next:!0,prev:!0}
function D(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length
return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e)
if(!S.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?l.call(E(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return w(e,"parentNode")},parentsUntil:function(e,t,n){return w(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return w(e,"nextSibling")},prevAll:function(e){return w(e,"previousSibling")},nextUntil:function(e,t,n){return w(e,"nextSibling",n)},prevUntil:function(e,t,n){return w(e,"previousSibling",n)},siblings:function(e){return C((e.parentNode||{}).firstChild,e)},children:function(e){return C(e.firstChild)},contents:function(e){return O(e,"iframe")?e.contentDocument:(O(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(e,t){E.fn[e]=function(n,r){var i=E.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=E.filter(r,i)),this.length>1&&(k[e]||E.uniqueSort(i),I.test(e)&&i.reverse()),this.pushStack(i)}})
var P=/[^\x20\t\r\n\f]+/g
function M(e){return e}function F(e){throw e}function j(e,t,n,r){var i
try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return E.each(e.match(P)||[],function(e,n){t[n]=!0}),t}(e):E.extend({},e)
var t,n,r,i,o=[],a=[],s=-1,l=function(){for(i=i||e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},u={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){E.each(n,function(n,r){m(r)?e.unique&&u.has(r)||o.push(r):r&&r.length&&"string"!==y(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return E.each(arguments,function(e,t){for(var n;(n=E.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?E.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!r}}
return u},E.extend({Deferred:function(t){var n=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return E.Deferred(function(t){E.each(n,function(n,r){var i=m(e[r[4]])&&e[r[4]]
o[r[1]](function(){var e=i&&i.apply(this,arguments)
e&&m(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0
function a(t,n,r,i){return function(){var s=this,l=arguments,u=function(){var e,u
if(!(t<o)){if((e=r.apply(s,l))===n.promise())throw new TypeError("Thenable self-resolution")
u=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(u)?i?u.call(e,a(o,n,M,i),a(o,n,F,i)):(o++,u.call(e,a(o,n,M,i),a(o,n,F,i),a(o,n,M,n.notifyWith))):(r!==M&&(s=void 0,l=[e]),(i||n.resolveWith)(s,l))}},c=i?u:function(){try{u()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==F&&(s=void 0,l=[e]),n.rejectWith(s,l))}}
t?c():(E.Deferred.getStackHook&&(c.stackTrace=E.Deferred.getStackHook()),e.setTimeout(c))}}return E.Deferred(function(e){n[0][3].add(a(0,e,m(i)?i:M,e.notifyWith)),n[1][3].add(a(0,e,m(t)?t:M)),n[2][3].add(a(0,e,m(r)?r:F))}).promise()},promise:function(e){return null!=e?E.extend(e,i):i}},o={}
return E.each(n,function(e,t){var a=t[2],s=t[5]
i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=E.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}}
if(t<=1&&(j(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||m(i[n]&&i[n].then)))return a.then()
for(;n--;)j(i[n],s(n),a.reject)
return a.promise()}})
var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
E.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},E.readyException=function(t){e.setTimeout(function(){throw t})}
var H=E.Deferred()
function $(){r.removeEventListener("DOMContentLoaded",$),e.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return H.then(e).catch(function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0,!0!==e&&--E.readyWait>0||H.resolveWith(r,[E]))}}),E.ready.then=H.then,"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(E.ready):(r.addEventListener("DOMContentLoaded",$),e.addEventListener("load",$))
var U=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n
if("object"===y(n))for(s in i=!0,n)U(e,t,s,n[s],!0,o,a)
else if(void 0!==r&&(i=!0,m(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(E(e),n)})),t))for(;s<l;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)))
return i?e:u?t.call(e):l?t(e[0],n):o},W=/^-ms-/,K=/-([a-z])/g
function q(e,t){return t.toUpperCase()}function z(e){return e.replace(W,"ms-").replace(K,q)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[z(t)]=n
else for(r in t)i[z(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][z(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(z):(t=z(t))in r?[t]:t.match(P)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!E.isEmptyObject(t)}}
var Y=new G,Q=new G,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g
function Z(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(J,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:X.test(e)?JSON.parse(e):e)}(n)}catch(e){}Q.set(e,t,n)}else n=void 0
return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes
if(void 0===e){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=z(r.slice(5)),Z(o,r,i[r]))
Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Q.set(this,e)}):U(this,function(t){var n
if(o&&void 0===t)return void 0!==(n=Q.get(o,e))?n:void 0!==(n=Z(o,e))?n:void 0
this.each(function(){Q.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?E.queue(this[0],e):void 0===t?this:this.each(function(){var n=E.queue(this,e,t)
E._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&E.dequeue(this,e)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s))
return s(),i.promise(t)}})
var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&E.contains(e.ownerDocument,e)&&"none"===E.css(e,"display")},ie=function(e,t,n,r){var i,o,a={}
for(o in t)a[o]=e.style[o],e.style[o]=t[o]
for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o]
return i}
function oe(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},l=s(),u=n&&n[3]||(E.cssNumber[t]?"":"px"),c=(E.cssNumber[t]||"px"!==u&&+l)&&te.exec(E.css(e,t))
if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;a--;)E.style(e,t,c+u),(1-o)*(1-(o=s()/l||.5))<=0&&(a=0),c/=o
c*=2,E.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=i)),i}var ae={}
function se(e){var t,n=e.ownerDocument,r=e.nodeName,i=ae[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=E.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ae[r]=i,i)}function le(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Y.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&re(r)&&(i[o]=se(r))):"none"!==n&&(i[o]="none",Y.set(r,"display",n)))
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){re(this)?E(this).show():E(this).hide()})}})
var ue=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,fe=/^$|^module$|\/(?:java|ecma)script/i,pe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function de(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&O(e,t)?E.merge([e],n):n}function he(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}pe.optgroup=pe.option,pe.tbody=pe.tfoot=pe.colgroup=pe.caption=pe.thead,pe.th=pe.td
var me,ge,ve=/<|&#?\w+;/
function be(e,t,n,r,i){for(var o,a,s,l,u,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===y(o))E.merge(p,o.nodeType?[o]:o)
else if(ve.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(ce.exec(o)||["",""])[1].toLowerCase(),l=pe[s]||pe._default,a.innerHTML=l[1]+E.htmlPrefilter(o)+l[2],c=l[0];c--;)a=a.lastChild
E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(f.textContent="",d=0;o=p[d++];)if(r&&E.inArray(o,r)>-1)i&&i.push(o)
else if(u=E.contains(o.ownerDocument,o),a=de(f.appendChild(o),"script"),u&&he(a),n)for(c=0;o=a[c++];)fe.test(o.type||"")&&n.push(o)
return f}me=r.createDocumentFragment().appendChild(r.createElement("div")),(ge=r.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),me.appendChild(ge),h.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue
var ye=r.documentElement,Ee=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,_e=/^([^.]*)(?:\.(.+)|)/
function Ae(){return!0}function we(){return!1}function Ce(){try{return r.activeElement}catch(e){}}function Se(e,t,n,r,i,o){var a,s
if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=we
else if(!i)return e
return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}E.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,m,g=Y.get(e)
if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(ye,i),n.guid||(n.guid=E.guid++),(l=g.events)||(l=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==E&&E.event.triggered!==t.type?E.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(P)||[""]).length;u--;)d=m=(s=_e.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=l[d])||((p=l[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,m,g=Y.hasData(e)&&Y.get(e)
if(g&&(l=g.events)){for(u=(t=(t||"").match(P)||[""]).length;u--;)if(d=m=(s=_e.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=E.event.special[d]||{},p=l[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||E.removeEvent(e,d,g.handle),delete l[d])}else for(d in l)E.event.remove(e,d+t[u],n,r,!0)
E.isEmptyObject(l)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=E.event.fix(e),l=new Array(arguments.length),u=(Y.get(this,"events")||{})[s.type]||[],c=E.event.special[s.type]||{}
for(l[0]=s,t=1;t<arguments.length;t++)l[t]=arguments[t]
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(a=E.event.handlers.call(this,s,u),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,l))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],l=t.delegateCount,u=e.target
if(l&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],a={},n=0;n<l;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?E(i,this).index(u)>-1:E.find(i,this,null,[u]).length),a[i]&&o.push(r)
o.length&&s.push({elem:u,handlers:o})}return u=this,l<t.length&&s.push({elem:u,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(E.Event.prototype,e,{enumerable:!0,configurable:!0,get:m(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Ce()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Ce()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&O(this,"input"))return this.click(),!1},_default:function(e){return O(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ae:we,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:we,isPropagationStopped:we,isImmediatePropagationStopped:we,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=Ae,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=Ae,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=Ae,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button
return null==e.which&&Ee.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj
return r&&(r===this||E.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=we),this.each(function(){E.event.remove(this,e,n,t)})}})
var Oe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,xe=/<script|<style|<link/i,Re=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
function Le(e,t){return O(e,"table")&&O(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ke(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function De(e,t){var n,r,i,o,a,s,l,u
if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.access(e),a=Y.set(t,o),u=o.events))for(i in delete a.handle,a.events={},u)for(n=0,r=u[i].length;n<r;n++)E.event.add(t,i,u[i][n])
Q.hasData(e)&&(s=Q.access(e),l=E.extend({},s),Q.set(t,l))}}function Pe(e,t,n,r){t=a.apply([],t)
var i,o,s,l,u,c,f=0,p=e.length,d=p-1,g=t[0],v=m(g)
if(v||p>1&&"string"==typeof g&&!h.checkClone&&Re.test(g))return e.each(function(i){var o=e.eq(i)
v&&(t[0]=g.call(this,i,o.html())),Pe(o,t,n,r)})
if(p&&(o=(i=be(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(l=(s=E.map(de(i,"script"),Ie)).length;f<p;f++)u=i,f!==d&&(u=E.clone(u,!0,!0),l&&E.merge(s,de(u,"script"))),n.call(e[f],u,f)
if(l)for(c=s[s.length-1].ownerDocument,E.map(s,ke),f=0;f<l;f++)u=s[f],fe.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&E._evalUrl(u.src):b(u.textContent.replace(Ne,""),c,u))}return e}function Me(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(de(r)),r.parentNode&&(n&&E.contains(r.ownerDocument,r)&&he(de(r,"script")),r.parentNode.removeChild(r))
return e}E.extend({htmlPrefilter:function(e){return e.replace(Oe,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,l,u,c=e.cloneNode(!0),f=E.contains(e.ownerDocument,e)
if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=de(c),r=0,i=(o=de(e)).length;r<i;r++)s=o[r],l=a[r],void 0,"input"===(u=l.nodeName.toLowerCase())&&ue.test(s.type)?l.checked=s.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=s.defaultValue)
if(t)if(n)for(o=o||de(e),a=a||de(c),r=0,i=o.length;r<i;r++)De(o[r],a[r])
else De(e,c)
return(a=de(c,"script")).length>0&&he(a,!f&&de(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle)
n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Me(this,e,!0)},remove:function(e){return Me(this,e)},text:function(e){return U(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(de(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return U(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!xe.test(e)&&!pe[(ce.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(de(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[]
return Pe(this,arguments,function(t){var n=this.parentNode
E.inArray(this,e)<0&&(E.cleanData(de(this)),n&&n.replaceChild(t,this))},e)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){E.fn[e]=function(e){for(var n,r=[],i=E(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),E(i[a])[t](n),s.apply(r,n.get())
return this.pushStack(r)}})
var Fe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),je=function(t){var n=t.ownerDocument.defaultView
return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(ne.join("|"),"i")
function He(e,t,n){var r,i,o,a,s=e.style
return(n=n||je(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||E.contains(e.ownerDocument,e)||(a=E.style(e,t)),!h.pixelBoxStyles()&&Fe.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}(function(){function t(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ye.appendChild(u).appendChild(c)
var t=e.getComputedStyle(c)
i="1%"!==t.top,l=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",ye.removeChild(u),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,l,u=r.createElement("div"),c=r.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,E.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),a}}))})()
var Ue=/^(none|table(?!-c[ea]).+)/,We=/^--/,Ke={position:"absolute",visibility:"hidden",display:"block"},qe={letterSpacing:"0",fontWeight:"400"},ze=["Webkit","Moz","ms"],Ve=r.createElement("div").style
function Ge(e){var t=E.cssProps[e]
return t||(t=E.cssProps[e]=function(e){if(e in Ve)return e
for(var t=e[0].toUpperCase()+e.slice(1),n=ze.length;n--;)if((e=ze[n]+t)in Ve)return e}(e)||e),t}function Ye(e,t,n){var r=te.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,l=0
if(n===(r?"border":"content"))return 0
for(;a<4;a+=2)"margin"===n&&(l+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(l-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(l-=E.css(e,"border"+ne[a]+"Width",!0,i))):(l+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?l+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i))
return!r&&o>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))),l}function Xe(e,t,n){var r=je(e),i=He(e,t,r),o="border-box"===E.css(e,"boxSizing",!1,r),a=o
if(Fe.test(i)){if(!n)return i
i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===E.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Qe(e,t,n||(o?"border":"content"),a,r,i)+"px"}function Je(e,t,n,r,i){return new Je.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=He(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=z(t),l=We.test(t),u=e.style
if(l||(t=Ge(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]
"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=oe(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,o,a,s=z(t)
return We.test(t)||(t=Ge(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=He(e,t,r)),"normal"===i&&t in qe&&(i=qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,t){E.cssHooks[t]={get:function(e,n,r){if(n)return!Ue.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Xe(e,t,r):ie(e,Ke,function(){return Xe(e,t,r)})},set:function(e,n,r){var i,o=je(e),a="border-box"===E.css(e,"boxSizing",!1,o),s=r&&Qe(e,t,r,a,o)
return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Qe(e,t,"border",!1,o)-.5)),s&&(i=te.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=E.css(e,t)),Ye(0,n,s)}}}),E.cssHooks.marginLeft=$e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(He(e,"marginLeft"))||e.getBoundingClientRect().left-ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(e,t){E.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ne[r]+t]=o[r]||o[r-2]||o[0]
return i}},"margin"!==e&&(E.cssHooks[e+t].set=Ye)}),E.fn.extend({css:function(e,t){return U(this,function(e,t,n){var r,i,o={},a=0
if(Array.isArray(t)){for(r=je(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r)
return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,arguments.length>1)}}),E.Tween=Je,Je.prototype={constructor:Je,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=Je.propHooks[this.prop]
return e&&e.get?e.get(this):Je.propHooks._default.get(this)},run:function(e){var t,n=Je.propHooks[this.prop]
return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Je.propHooks._default.set(this),this}},Je.prototype.init.prototype=Je.prototype,Je.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[E.cssProps[e.prop]]&&!E.cssHooks[e.prop]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}},Je.propHooks.scrollTop=Je.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=Je.prototype.init,E.fx.step={}
var Ze,et,tt=/^(?:toggle|show|hide)$/,nt=/queueHooks$/
function rt(){et&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(rt):e.setTimeout(rt,E.fx.interval),E.fx.tick())}function it(){return e.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function ot(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function at(e,t,n){for(var r,i=(st.tweeners[t]||[]).concat(st.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function st(e,t,n){var r,i,o=0,a=st.prefilters.length,s=E.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1
for(var t=Ze||it(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,a=u.tweens.length;o<a;o++)u.tweens[o].run(r)
return s.notifyWith(e,[u,r,n]),r<1&&a?n:(a||s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:t,originalOptions:n,startTime:Ze||it(),duration:n.duration,tweens:[],createTween:function(t,n){var r=E.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing)
return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)u.tweens[n].run(1)
return t?(s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u,t])):s.rejectWith(e,[u,t]),this}}),c=u.props
for(function(e,t){var n,r,i,o,a
for(n in e)if(i=t[r=z(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,u.opts.specialEasing);o<a;o++)if(r=st.prefilters[o].call(u,e,c,u.opts))return m(r.stop)&&(E._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r
return E.map(c,at,u),m(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),E.fx.timer(E.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}E.Animation=E.extend(st,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],st.tweeners[n]=st.tweeners[n]||[],st.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,l,u,c,f="width"in t||"height"in t,p=this,d={},h=e.style,m=e.nodeType&&re(e),g=Y.get(e,"fxshow")
for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],tt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue
m=!0}d[r]=g&&g[r]||E.style(e,r)}if((l=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=g&&g.display)&&(u=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(u?c=u:(le([e],!0),u=e.style.display||u,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===E.css(e,"float")&&(l||(p.done(function(){h.display=u}),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,d)l||(g?"hidden"in g&&(m=g.hidden):g=Y.access(e,"fxshow",{display:u}),o&&(g.hidden=!m),m&&le([e],!0),p.done(function(){for(r in m||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),l=at(m?g[r]:0,r,p),r in g||(g[r]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?st.prefilters.unshift(e):st.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t}
return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=E.isEmptyObject(e),o=E.speed(t,n,r),a=function(){var t=st(this,E.extend({},e),o);(i||Y.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=E.timers,a=Y.get(this)
if(i)a[i]&&a[i].stop&&r(a[i])
else for(i in a)a[i]&&a[i].stop&&nt.test(i)&&r(a[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||E.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Y.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=E.timers,a=r?r.length:0
for(n.finish=!0,E.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),E.each(["toggle","show","hide"],function(e,t){var n=E.fn[t]
E.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ot(t,!0),e,r,i)}}),E.each({slideDown:ot("show"),slideUp:ot("hide"),slideToggle:ot("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){E.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers
for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||E.fx.stop(),Ze=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){et||(et=!0,rt())},E.fx.stop=function(){et=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(t,n){return t=E.fx&&E.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t)
r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"))
e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}()
var lt,ut=E.expr.attrHandle
E.fn.extend({attr:function(e,t){return U(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&O(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),lt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ut[t]||E.find.attr
ut[t]=function(e,t,r){var i,o,a=t.toLowerCase()
return r||(o=ut[a],ut[a]=i,i=null!=n(e,t,r)?a:null,ut[a]=o),i}})
var ct=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i
function pt(e){return(e.match(P)||[]).join(" ")}function dt(e){return e.getAttribute&&e.getAttribute("class")||""}function ht(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return U(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex")
return t?parseInt(t,10):ct.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,l=0
if(m(e))return this.each(function(t){E(this).addClass(e.call(this,t,dt(this)))})
if((t=ht(e)).length)for(;n=this[l++];)if(i=dt(n),r=1===n.nodeType&&" "+pt(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ")
i!==(s=pt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,l=0
if(m(e))return this.each(function(t){E(this).removeClass(e.call(this,t,dt(this)))})
if(!arguments.length)return this.attr("class","")
if((t=ht(e)).length)for(;n=this[l++];)if(i=dt(n),r=1===n.nodeType&&" "+pt(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ")
i!==(s=pt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e)
return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):m(e)?this.each(function(n){E(this).toggleClass(e.call(this,n,dt(this),t),t)}):this.each(function(){var t,i,o,a
if(r)for(i=0,o=E(this),a=ht(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t)
else void 0!==e&&"boolean"!==n||((t=dt(this))&&Y.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+pt(dt(n))+" ").indexOf(t)>-1)return!0
return!1}})
var mt=/\r/g
E.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=m(e),this.each(function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,E(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=E.map(i,function(e){return null==e?"":e+""})),(t=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(mt,""):null==n?"":n:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value")
return null!=t?t:pt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:i.length
for(r=o<0?l:a?o:0;r<l;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!O(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),a=i.length;a--;)((r=i[a]).selected=E.inArray(E.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=E.inArray(E(e).val(),t)>-1}},h.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e
var gt=/^(?:focusinfocus|focusoutblur)$/,vt=function(e){e.stopPropagation()}
E.extend(E.event,{trigger:function(t,n,i,o){var a,s,l,u,c,p,d,h,v=[i||r],b=f.call(t,"type")?t.type:t,y=f.call(t,"namespace")?t.namespace.split("."):[]
if(s=h=l=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!gt.test(b+E.event.triggered)&&(b.indexOf(".")>-1&&(b=(y=b.split(".")).shift(),y.sort()),c=b.indexOf(":")<0&&"on"+b,(t=t[E.expando]?t:new E.Event(b,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=y.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:E.makeArray(n,[t]),d=E.event.special[b]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!g(i)){for(u=d.delegateType||b,gt.test(u+b)||(s=s.parentNode);s;s=s.parentNode)v.push(s),l=s
l===(i.ownerDocument||r)&&v.push(l.defaultView||l.parentWindow||e)}for(a=0;(s=v[a++])&&!t.isPropagationStopped();)h=s,t.type=a>1?u:d.bindType||b,(p=(Y.get(s,"events")||{})[t.type]&&Y.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&V(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault())
return t.type=b,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!V(i)||c&&m(i[b])&&!g(i)&&((l=i[c])&&(i[c]=null),E.event.triggered=b,t.isPropagationStopped()&&h.addEventListener(b,vt),i[b](),t.isPropagationStopped()&&h.removeEventListener(b,vt),E.event.triggered=void 0,l&&(i[c]=l)),t.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0})
E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n)return E.event.trigger(e,t,n,!0)}}),h.focusin||E.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){E.event.simulate(t,e.target,E.event.fix(e))}
E.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Y.access(r,t)
i||r.addEventListener(e,n,!0),Y.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Y.access(r,t)-1
i?Y.access(r,t,i):(r.removeEventListener(e,n,!0),Y.remove(r,t))}}})
var bt=e.location,yt=Date.now(),Et=/\?/
E.parseXML=function(t){var n
if(!t||"string"!=typeof t)return null
try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+t),n}
var Tt=/\[\]$/,_t=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,wt=/^(?:input|select|textarea|keygen)/i
function Ct(e,t,n,r){var i
if(Array.isArray(t))E.each(t,function(t,i){n||Tt.test(e)?r(e,i):Ct(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)})
else if(n||"object"!==y(t))r(e,t)
else for(i in t)Ct(e+"["+i+"]",t[i],n,r)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)})
else for(n in e)Ct(n,e[n],t,i)
return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements")
return e?E.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!E(this).is(":disabled")&&wt.test(this.nodeName)&&!At.test(e)&&(this.checked||!ue.test(e))}).map(function(e,t){var n=E(this).val()
return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(_t,"\r\n")}}):{name:t.name,value:n.replace(_t,"\r\n")}}).get()}})
var St=/%20/g,Ot=/#.*$/,xt=/([?&])_=[^&]*/,Rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Nt=/^(?:GET|HEAD)$/,Lt=/^\/\//,It={},kt={},Dt="*/".concat("*"),Pt=r.createElement("a")
function Mt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(P)||[]
if(m(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Ft(e,t,n,r){var i={},o=e===kt
function a(s){var l
return i[s]=!0,E.each(e[s]||[],function(e,s){var u=s(t,n,r)
return"string"!=typeof u||o||i[u]?o?!(l=u):void 0:(t.dataTypes.unshift(u),a(u),!1)}),l}return a(t.dataTypes[0])||!i["*"]&&a("*")}function jt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&E.extend(!0,e,r),e}Pt.href=bt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?jt(jt(e,E.ajaxSettings),t):jt(E.ajaxSettings,e)},ajaxPrefilter:Mt(It),ajaxTransport:Mt(kt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{}
var i,o,a,s,l,u,c,f,p,d,h=E.ajaxSetup({},n),m=h.context||h,g=h.context&&(m.nodeType||m.jquery)?E(m):E.event,v=E.Deferred(),b=E.Callbacks("once memory"),y=h.statusCode||{},T={},_={},A="canceled",w={readyState:0,getResponseHeader:function(e){var t
if(c){if(!s)for(s={};t=Rt.exec(a);)s[t[1].toLowerCase()]=t[2]
t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=_[e.toLowerCase()]=_[e.toLowerCase()]||e,T[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t
if(e)if(c)w.always(e[w.status])
else for(t in e)y[t]=[y[t],e[t]]
return this},abort:function(e){var t=e||A
return i&&i.abort(t),C(0,t),this}}
if(v.promise(w),h.url=((t||h.url||bt.href)+"").replace(Lt,bt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(P)||[""],null==h.crossDomain){u=r.createElement("a")
try{u.href=h.url,u.href=u.href,h.crossDomain=Pt.protocol+"//"+Pt.host!=u.protocol+"//"+u.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=E.param(h.data,h.traditional)),Ft(It,h,n,w),c)return w
for(p in(f=E.event&&h.global)&&0==E.active++&&E.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Nt.test(h.type),o=h.url.replace(Ot,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(St,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Et.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(xt,"$1"),d=(Et.test(o)?"&":"?")+"_="+yt+++d),h.url=o+d),h.ifModified&&(E.lastModified[o]&&w.setRequestHeader("If-Modified-Since",E.lastModified[o]),E.etag[o]&&w.setRequestHeader("If-None-Match",E.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&w.setRequestHeader("Content-Type",h.contentType),w.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Dt+"; q=0.01":""):h.accepts["*"]),h.headers)w.setRequestHeader(p,h.headers[p])
if(h.beforeSend&&(!1===h.beforeSend.call(m,w,h)||c))return w.abort()
if(A="abort",b.add(h.complete),w.done(h.success),w.fail(h.error),i=Ft(kt,h,n,w)){if(w.readyState=1,f&&g.trigger("ajaxSend",[w,h]),c)return w
h.async&&h.timeout>0&&(l=e.setTimeout(function(){w.abort("timeout")},h.timeout))
try{c=!1,i.send(T,C)}catch(e){if(c)throw e
C(-1,e)}}else C(-1,"No Transport")
function C(t,n,r,s){var u,p,d,T,_,A=n
c||(c=!0,l&&e.clearTimeout(l),i=void 0,a=s||"",w.readyState=t>0?4:0,u=t>=200&&t<300||304===t,r&&(T=function(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in s)if(s[i]&&s[i].test(r)){l.unshift(i)
break}if(l[0]in n)o=l[0]
else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i
break}a||(a=i)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),n[o]}(h,w,r)),T=function(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice()
if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l
else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]))
break}if(!0!==a)if(a&&e.throws)t=a(t)
else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(h,T,w,u),u?(h.ifModified&&((_=w.getResponseHeader("Last-Modified"))&&(E.lastModified[o]=_),(_=w.getResponseHeader("etag"))&&(E.etag[o]=_)),204===t||"HEAD"===h.type?A="nocontent":304===t?A="notmodified":(A=T.state,p=T.data,u=!(d=T.error))):(d=A,!t&&A||(A="error",t<0&&(t=0))),w.status=t,w.statusText=(n||A)+"",u?v.resolveWith(m,[p,A,w]):v.rejectWith(m,[w,A,d]),w.statusCode(y),y=void 0,f&&g.trigger(u?"ajaxSuccess":"ajaxError",[w,h,u?p:d]),b.fireWith(m,[w,A]),f&&(g.trigger("ajaxComplete",[w,h]),--E.active||E.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,t){E[t]=function(e,n,r,i){return m(n)&&(i=i||r,r=n,n=void 0),E.ajax(E.extend({url:e,type:t,dataType:i,data:n,success:r},E.isPlainObject(e)&&e))}}),E._evalUrl=function(e){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(e){var t
return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this},wrapInner:function(e){return m(e)?this.each(function(t){E(this).wrapInner(e.call(this,t))}):this.each(function(){var t=E(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=m(e)
return this.each(function(n){E(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}}
var Bt={0:200,1223:204},Ht=E.ajaxSettings.xhr()
h.cors=!!Ht&&"withCredentials"in Ht,h.ajax=Ht=!!Ht,E.ajaxTransport(function(t){var n,r
if(h.cors||Ht&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr()
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a]
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a])
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Bt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort")
try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(e){var t,n
if(e.crossDomain)return{send:function(i,o){t=E("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}})
var $t,Ut=[],Wt=/(=)\?(?=&|$)|\?\?/
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ut.pop()||E.expando+"_"+yt++
return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Wt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Wt.test(t.data)&&"data")
if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=m(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Wt,"$1"+i):!1!==t.jsonp&&(t.url+=(Et.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||E.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?E(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ut.push(i)),a&&m(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=(($t=r.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===$t.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=x.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=be([e],t,a),a&&a.length&&E(a).remove(),E.merge([],o.childNodes)))
var i,o,a},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ")
return s>-1&&(r=pt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.expr.pseudos.animated=function(e){return E.grep(E.timers,function(t){return e===t.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u=E.css(e,"position"),c=E(e),f={}
"static"===u&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),l=E.css(e,"left"),("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){E.offset.setOffset(this,e,t)})
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0}
if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent
return e||ye})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t
E.fn[e]=function(r){return U(this,function(e,r,i){var o
if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),E.each(["top","left"],function(e,t){E.cssHooks[t]=$e(h.pixelPosition,function(e,n){if(n)return n=He(e,t),Fe.test(n)?E(e).position()[t]+"px":n})}),E.each({Height:"height",Width:"width"},function(e,t){E.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){E.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border")
return U(this,function(t,n,i){var o
return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?E.css(t,n,s):E.style(t,n,i,s)},t,a?i:void 0,a)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.proxy=function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=o.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(o.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=O,E.isFunction=m,E.isWindow=g,E.camelCase=z,E.type=y,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E})
var Kt=e.jQuery,qt=e.$
return E.noConflict=function(t){return e.$===E&&(e.$=qt),t&&e.jQuery===E&&(e.jQuery=Kt),E},t||(e.jQuery=e.$=E),E}),function(){var e,t,n
mainContext=this,function(){function r(e,n){var a=e,s=i[a]
s||(s=i[a+="/index"])
var l=o[a]
if(void 0!==l)return l
l=o[a]={},s||function(e,t){throw t?new Error("Could not find module "+e+" required by: "+t):new Error("Could not find module "+e)}(e,n)
for(var u=s.deps,c=s.callback,f=new Array(u.length),p=0;p<u.length;p++)"exports"===u[p]?f[p]=l:"require"===u[p]?f[p]=t:f[p]=r(u[p],a)
return c.apply(this,f),l}if("undefined"==typeof window&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)||(n=this.Ember=this.Ember||{}),void 0===n&&(n={}),void 0===n.__loader){var i={},o={}
e=function(e,t,n){var r={}
n?(r.deps=t,r.callback=n):(r.deps=[],r.callback=t),i[e]=r},(t=function(e){return r(e,null)}).default=t,t.has=function(e){return!!i[e]||!!i[e+"/index"]},t._eak_seen=i,n.__loader={define:e,require:t,registry:i}}else e=n.__loader.define,t=n.__loader.require}(),e("@glimmer/node",["exports","@glimmer/runtime"],function(e,t){"use strict"
function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}e.NodeDOMTreeConstruction=void 0
var r=function(e){function r(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t))}return n(r,e),r.prototype.setupUselessElement=function(){},r.prototype.insertHTMLBefore=function(e,n,r){var i=n?n.previousSibling:e.lastChild,o=this.document.createRawHTMLSection(r)
e.insertBefore(o,n)
var a=i?i.nextSibling:e.firstChild,s=n?n.previousSibling:e.lastChild
return new t.ConcreteBounds(e,a,s)},r.prototype.createElement=function(e){return this.document.createElement(e)},r.prototype.setAttribute=function(e,t,n){e.setAttribute(t,n)},r}(t.DOMTreeConstruction)
e.NodeDOMTreeConstruction=r}),e("@glimmer/reference",["exports","@glimmer/util"],function(e,t){"use strict"
function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.isModified=e.ReferenceCache=e.map=e.CachedReference=e.UpdatableTag=e.CachedTag=e.combine=e.combineSlice=e.combineTagged=e.DirtyableTag=e.CURRENT_TAG=e.VOLATILE_TAG=e.CONSTANT_TAG=e.TagWrapper=e.RevisionTag=e.VOLATILE=e.INITIAL=e.CONSTANT=e.IteratorSynchronizer=e.ReferenceIterator=e.IterationArtifacts=e.referenceFromParts=e.ListItem=e.isConst=e.ConstReference=void 0
var o=1,a=function(){function e(){i(this,e)}return e.prototype.validate=function(e){return this.value()===e},e}()
a.id=0
var s=[],l=[],u=function(){function e(t,n){i(this,e),this.type=t,this.inner=n}return e.prototype.value=function(){return(0,s[this.type])(this.inner)},e.prototype.validate=function(e){return(0,l[this.type])(this.inner,e)},e}()
function c(e){var t=s.length
s.push(function(e){return e.value()}),l.push(function(e,t){return e.validate(t)}),e.id=t}s.push(function(){return 0}),l.push(function(e,t){return 0===t})
var f=new u(0,null)
s.push(function(){return NaN}),l.push(function(e,t){return NaN===t})
var p=new u(1,null)
s.push(function(){return h}),l.push(function(e,t){return t===h})
var d=new u(2,null),h=o,m=function(e){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h
i(this,t)
var o=n(this,e.call(this))
return o.revision=r,o}return r(t,e),t.create=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h
return new u(this.id,new t(e))},t.prototype.value=function(){return this.revision},t.prototype.dirty=function(){this.revision=++h},t}(a)
function g(e){switch(e.length){case 0:return f
case 1:return e[0]
case 2:return b.create(e[0],e[1])
default:return y.create(e)}}c(m)
var v=function(e){function t(){i(this,t)
var r=n(this,e.apply(this,arguments))
return r.lastChecked=null,r.lastValue=null,r}return r(t,e),t.prototype.value=function(){var e=this.lastChecked
this.lastValue
return e!==h&&(this.lastChecked=h,this.lastValue=this.compute()),this.lastValue},t.prototype.invalidate=function(){this.lastChecked=null},t}(a),b=function(e){function t(r,o){i(this,t)
var a=n(this,e.call(this))
return a.first=r,a.second=o,a}return r(t,e),t.create=function(e,n){return new u(this.id,new t(e,n))},t.prototype.compute=function(){return Math.max(this.first.value(),this.second.value())},t}(v)
c(b)
var y=function(e){function t(r){i(this,t)
var o=n(this,e.call(this))
return o.tags=r,o}return r(t,e),t.create=function(e){return new u(this.id,new t(e))},t.prototype.compute=function(){var e,t,n=this.tags,r=-1
for(e=0;e<n.length;e++)t=n[e].value(),r=Math.max(t,r)
return r},t}(v)
c(y)
var E=function(e){function t(r){i(this,t)
var a=n(this,e.call(this))
return a.tag=r,a.lastUpdated=o,a}return r(t,e),t.create=function(e){return new u(this.id,new t(e))},t.prototype.compute=function(){return Math.max(this.lastUpdated,this.tag.value())},t.prototype.update=function(e){e!==this.tag&&(this.tag=e,this.lastUpdated=h,this.invalidate())},t}(v)
c(E)
var T=function(){function e(){i(this,e),this.lastRevision=null,this.lastValue=null}return e.prototype.value=function(){var e=this.tag,t=this.lastRevision,n=this.lastValue
return t&&e.validate(t)||(n=this.lastValue=this.compute(),this.lastRevision=e.value()),n},e.prototype.invalidate=function(){this.lastRevision=null},e}(),_=function(e){function t(r,o){i(this,t)
var a=n(this,e.call(this))
return a.tag=r.tag,a.reference=r,a.mapper=o,a}return r(t,e),t.prototype.compute=function(){var e=this.reference
return(0,this.mapper)(e.value())},t}(T),A=function(){function e(t){i(this,e),this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=t.tag,this.reference=t}return e.prototype.peek=function(){return this.initialized?this.lastValue:this.initialize()},e.prototype.revalidate=function(){if(!this.initialized)return this.initialize()
var e=this.reference,t=this.lastRevision,n=e.tag
if(n.validate(t))return w
this.lastRevision=n.value()
var r=this.lastValue,i=e.value()
return i===r?w:(this.lastValue=i,i)},e.prototype.initialize=function(){var e=this.reference,t=this.lastValue=e.value()
return this.lastRevision=e.tag.value(),this.initialized=!0,t},e}(),w="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
var C=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.inner=t,this.tag=f}return e.prototype.value=function(){return this.inner},e}()
function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}var x,R=function(e){function t(n,r){S(this,t)
var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n.valueReferenceFor(r)))
return i.retained=!1,i.seen=!1,i.key=r.key,i.iterable=n,i.memo=n.memoReferenceFor(r),i}return O(t,e),t.prototype.update=function(e){this.retained=!0,this.iterable.updateValueReference(this.value,e),this.iterable.updateMemoReference(this.memo,e)},t.prototype.shouldRemove=function(){return!this.retained},t.prototype.reset=function(){this.retained=!1,this.seen=!1},t}(t.ListNode),N=function(){function e(n){S(this,e),this.map=(0,t.dict)(),this.list=new t.LinkedList,this.tag=n.tag,this.iterable=n}return e.prototype.isEmpty=function(){return(this.iterator=this.iterable.iterate()).isEmpty()},e.prototype.iterate=function(){var e=this.iterator||this.iterable.iterate()
return this.iterator=null,e},e.prototype.has=function(e){return!!this.map[e]},e.prototype.get=function(e){return this.map[e]},e.prototype.wasSeen=function(e){var t=this.map[e]
return t&&t.seen},e.prototype.append=function(e){var t=this.map,n=this.list,r=this.iterable,i=t[e.key]=new R(r,e)
return n.append(i),i},e.prototype.insertBefore=function(e,t){var n=this.map,r=this.list,i=this.iterable,o=n[e.key]=new R(i,e)
return o.retained=!0,r.insertBefore(o,t),o},e.prototype.move=function(e,t){var n=this.list
e.retained=!0,n.remove(e),n.insertBefore(e,t)},e.prototype.remove=function(e){this.list.remove(e),delete this.map[e.key]},e.prototype.nextNode=function(e){return this.list.nextNode(e)},e.prototype.head=function(){return this.list.head()},e}(),L=function(){function e(t){S(this,e),this.iterator=null
var n=new N(t)
this.artifacts=n}return e.prototype.next=function(){var e=this.artifacts,t=(this.iterator=this.iterator||e.iterate()).next()
return t?e.append(t):null},e}();(function(e){e[e.Append=0]="Append",e[e.Prune=1]="Prune",e[e.Done=2]="Done"})(x||(x={}))
var I=function(){function e(t){var n=t.target,r=t.artifacts
S(this,e),this.target=n,this.artifacts=r,this.iterator=r.iterate(),this.current=r.head()}return e.prototype.sync=function(){for(var e=x.Append;;)switch(e){case x.Append:e=this.nextAppend()
break
case x.Prune:e=this.nextPrune()
break
case x.Done:return void this.nextDone()}},e.prototype.advanceToKey=function(e){for(var t=this.current,n=this.artifacts,r=t;r&&r.key!==e;)r.seen=!0,r=n.nextNode(r)
this.current=r&&n.nextNode(r)},e.prototype.nextAppend=function(){var e=this.iterator,t=this.current,n=this.artifacts,r=e.next()
if(null===r)return this.startPrune()
var i=r.key
return t&&t.key===i?this.nextRetain(r):n.has(i)?this.nextMove(r):this.nextInsert(r),x.Append},e.prototype.nextRetain=function(e){var t=this.artifacts,n=this.current;(n=n).update(e),this.current=t.nextNode(n),this.target.retain(e.key,n.value,n.memo)},e.prototype.nextMove=function(e){var t=this.current,n=this.artifacts,r=this.target,i=e.key,o=n.get(e.key)
o.update(e),n.wasSeen(e.key)?(n.move(o,t),r.move(o.key,o.value,o.memo,t?t.key:null)):this.advanceToKey(i)},e.prototype.nextInsert=function(e){var t=this.artifacts,n=this.target,r=this.current,i=t.insertBefore(e,r)
n.insert(i.key,i.value,i.memo,r?r.key:null)},e.prototype.startPrune=function(){return this.current=this.artifacts.head(),x.Prune},e.prototype.nextPrune=function(){var e=this.artifacts,t=this.target,n=this.current
if(null===n)return x.Done
var r=n
return this.current=e.nextNode(r),r.shouldRemove()?(e.remove(r),t.delete(r.key)):r.reset(),x.Prune},e.prototype.nextDone=function(){this.target.done()},e}()
e.ConstReference=C,e.isConst=function(e){return e.tag===f},e.ListItem=R,e.referenceFromParts=function(e,t){var n,r=e
for(n=0;n<t.length;n++)r=r.get(t[n])
return r},e.IterationArtifacts=N,e.ReferenceIterator=L,e.IteratorSynchronizer=I,e.CONSTANT=0,e.INITIAL=o,e.VOLATILE=NaN,e.RevisionTag=a,e.TagWrapper=u,e.CONSTANT_TAG=f,e.VOLATILE_TAG=p,e.CURRENT_TAG=d,e.DirtyableTag=m,e.combineTagged=function(e){var t,n,r,i=[]
for(t=0,n=e.length;t<n;t++){if((r=e[t].tag)===p)return p
r!==f&&i.push(r)}return g(i)},e.combineSlice=function(e){for(var t,n=[],r=e.head();null!==r;){if((t=r.tag)===p)return p
t!==f&&n.push(t),r=e.nextNode(r)}return g(n)},e.combine=function(e){var t,n,r,i=[]
for(t=0,n=e.length;t<n;t++){if((r=e[t])===p)return p
r!==f&&i.push(r)}return g(i)},e.CachedTag=v,e.UpdatableTag=E,e.CachedReference=T,e.map=function(e,t){return new _(e,t)},e.ReferenceCache=A,e.isModified=function(e){return e!==w}}),e("@glimmer/runtime",["exports","@glimmer/util","@glimmer/reference","@glimmer/wire-format"],function(e,t,n,r){"use strict"
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a
e.ConcreteBounds=e.ElementStack=e.insertHTMLBefore=e.isWhitespace=e.DOMTreeConstruction=e.IDOMChanges=e.DOMChanges=e.isComponentDefinition=e.ComponentDefinition=e.PartialDefinition=e.Environment=e.Scope=e.isSafeString=e.RenderResult=e.UpdatingVM=e.compileExpression=e.compileList=e.InlineMacros=e.BlockMacros=e.getDynamicVar=e.resetDebuggerCallback=e.setDebuggerCallback=e.normalizeTextValue=e.debugSlice=e.Register=e.readDOMAttr=e.defaultPropertyManagers=e.defaultAttributeManagers=e.defaultManagers=e.INPUT_VALUE_PROPERTY_MANAGER=e.PropertyManager=e.AttributeManager=e.IAttributeManager=e.CompiledDynamicTemplate=e.CompiledStaticTemplate=e.compileLayout=e.OpcodeBuilderDSL=e.ConditionalReference=e.PrimitiveReference=e.UNDEFINED_REFERENCE=e.NULL_REFERENCE=e.templateFactory=e.Simple=void 0,function(e){e[e.pc=0]="pc",e[e.ra=1]="ra",e[e.fp=2]="fp",e[e.sp=3]="sp",e[e.s0=4]="s0",e[e.s1=5]="s1",e[e.t0=6]="t0",e[e.t1=7]="t1"}(a||(e.Register=a={}))
var s=new(function(){function e(){o(this,e),this.evaluateOpcode=(0,t.fillNulls)(72).slice()}return e.prototype.add=function(e,t){this.evaluateOpcode[e]=t},e.prototype.evaluate=function(e,t,n){(0,this.evaluateOpcode[n])(e,t)},e}()),l=function(e){function t(){o(this,t)
var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))
return n.next=null,n.prev=null,n}return i(t,e),t}(function(){function e(){o(this,e),(0,t.initializeGuid)(this)}return e.prototype.toJSON=function(){return{guid:this._guid,type:this.type}},e}())
function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}var p=function(e){function t(n){return u(this,t),c(this,e.call(this,n))}return f(t,e),t.create=function(e){return void 0===e?m:null===e?g:!0===e?v:!1===e?b:"number"==typeof e?new h(e):new d(e)},t.prototype.get=function(){return m},t}(n.ConstReference),d=function(e){function t(){u(this,t)
var n=c(this,e.apply(this,arguments))
return n.lengthReference=null,n}return f(t,e),t.prototype.get=function(t){var n
return"length"===t?(null===(n=this.lengthReference)&&(n=this.lengthReference=new h(this.inner.length)),n):e.prototype.get.call(this,t)},t}(p),h=function(e){function t(n){return u(this,t),c(this,e.call(this,n))}return f(t,e),t}(p),m=new h(void 0),g=new h(null),v=new h(!0),b=new h(!1),y=function(){function e(t){u(this,e),this.inner=t,this.tag=t.tag}return e.prototype.value=function(){return this.toBool(this.inner.value())},e.prototype.toBool=function(e){return!!e},e}()
function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}var T=function(e){function t(r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t)
var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this))
return i.parts=r,i.tag=(0,n.combineTagged)(r),i}return E(t,e),t.prototype.compute=function(){var e,t,n=new Array
for(e=0;e<this.parts.length;e++)null!==(t=this.parts[e].value())&&void 0!==t&&(n[e]=_(t))
return n.length>0?n.join(""):null},t}(n.CachedReference)
function _(e){return"function"!=typeof e.toString?"":String(e)}s.add(1,function(e,t){var n=t.op1,r=e.stack,i=e.constants.getFunction(n),o=r.pop(),a=i(e,o)
o.clear(),e.stack.push(a)}),s.add(2,function(e,t){var n=t.op1,r=e.constants.getFunction(n)
e.stack.push(r(e))}),s.add(5,function(e,t){var n=t.op1,r=e.referenceForSymbol(n)
e.stack.push(r)}),s.add(4,function(e,t){var n=t.op1,r=e.stack.pop()
e.scope().bindSymbol(n,r)}),s.add(70,function(e,t){var n=t.op1,r=e.constants.getString(n),i=e.scope().getPartialMap()[r]
void 0===i&&(i=e.getSelf().get(r)),e.stack.push(i)}),s.add(19,function(e,t){var n=t.op1,r=t.op2
e.pushRootScope(n,!!r)}),s.add(6,function(e,t){var n=t.op1,r=e.constants.getString(n),i=e.stack.pop()
e.stack.push(i.get(r))}),s.add(7,function(e,t){var n=t.op1,r=n?e.constants.getBlock(n):null
e.stack.push(r)}),s.add(8,function(e,t){var n=t.op1
e.stack.push(e.scope().getBlock(n))}),s.add(9,function(e,t){var n=t.op1,r=!!e.scope().getBlock(n)
e.stack.push(r?v:b)}),s.add(10,function(e,t){var n=t.op1,r=e.scope().getBlock(n),i=r&&r.symbolTable.parameters.length
e.stack.push(i?v:b)}),s.add(11,function(e,t){var n,r=[]
for(n=t.op1;n>0;n--)r.push(e.stack.pop())
e.stack.push(new T(r.reverse()))})
var A=function(){function e(e,t){var n,r
for(n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var C=function(){function e(){w(this,e),this.stack=null,this.positional=new S,this.named=new x}return e.prototype.empty=function(){return this.setup(null,!0),this},e.prototype.setup=function(e,t){this.stack=e
var n=e.fromTop(0),r=n.length,i=e.fromTop(r+1)
this.positional.setup(e,i+r+2,i),this.named.setup(e,r,n,t)},e.prototype.at=function(e){return this.positional.at(e)},e.prototype.get=function(e){return this.named.get(e)},e.prototype.capture=function(){return{tag:this.tag,length:this.length,positional:this.positional.capture(),named:this.named.capture()}},e.prototype.clear=function(){var e=this.stack,t=this.length
e.pop(t+2)},A(e,[{key:"tag",get:function(){return(0,n.combineTagged)([this.positional,this.named])}},{key:"length",get:function(){return this.positional.length+this.named.length}}]),e}(),S=function(){function e(){w(this,e),this.length=0,this.stack=null,this.start=0,this._tag=null,this._references=null}return e.prototype.setup=function(e,t,n){this.stack=e,this.start=t,this.length=n,this._tag=null,this._references=null},e.prototype.at=function(e){var t=this.start,n=this.length
return e<0||e>=n?m:this.stack.fromTop(t-e-1)},e.prototype.capture=function(){return new O(this.tag,this.references)},A(e,[{key:"tag",get:function(){var e=this._tag
return e||(e=this._tag=(0,n.combineTagged)(this.references)),e}},{key:"references",get:function(){var e,t,n=this._references
if(!n)for(e=this.length,n=this._references=new Array(e),t=0;t<e;t++)n[t]=this.at(t)
return n}}]),e}(),O=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length
w(this,e),this.tag=t,this.references=n,this.length=r}return e.prototype.at=function(e){return this.references[e]},e.prototype.value=function(){return this.references.map(this.valueOf)},e.prototype.get=function(e){var t,n=this.references,r=this.length
return"length"===e?p.create(r):(t=parseInt(e,10))<0||t>=r?m:n[t]},e.prototype.valueOf=function(e){return e.value()},e}(),x=function(){function e(){w(this,e),this.length=0,this._tag=null,this._references=null,this._names=null,this._realNames=t.EMPTY_ARRAY}return e.prototype.setup=function(e,n,r,i){this.stack=e,this.length=n,this._tag=null,this._references=null,i?(this._names=r,this._realNames=t.EMPTY_ARRAY):(this._names=null,this._realNames=r)},e.prototype.has=function(e){return-1!==this.names.indexOf(e)},e.prototype.get=function(e){var t=this.names,n=this.length,r=t.indexOf(e)
return-1===r?m:this.stack.fromTop(n-r)},e.prototype.capture=function(){return new R(this.tag,this.names,this.references)},e.prototype.sliceName=function(e){return e.slice(1)},A(e,[{key:"tag",get:function(){return(0,n.combineTagged)(this.references)}},{key:"names",get:function(){var e=this._names
return e||(e=this._names=this._realNames.map(this.sliceName)),e}},{key:"references",get:function(){var e,t,n,r=this._references
if(!r)for(e=this.names,t=this.length,r=this._references=[],n=0;n<t;n++)r[n]=this.get(e[n])
return r}}]),e}(),R=function(){function e(t,n,r){w(this,e),this.tag=t,this.names=n,this.references=r,this.length=n.length,this._map=null}return e.prototype.has=function(e){return-1!==this.names.indexOf(e)},e.prototype.get=function(e){var t=this.names,n=this.references,r=t.indexOf(e)
return-1===r?m:n[r]},e.prototype.value=function(){var e,n=this.names,r=this.references,i=(0,t.dict)()
for(e=0;e<n.length;e++)i[n[e]]=r[e].value()
return i},A(e,[{key:"map",get:function(){var e,n,r,i=this._map
if(!i)for(e=this.names,n=this.references,i=this._map=(0,t.dict)(),r=0;r<e.length;r++)i[e[r]]=n[r]
return i}}]),e}(),N=new C
function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}s.add(20,function(e){return e.pushChildScope()}),s.add(21,function(e){return e.popScope()}),s.add(39,function(e){return e.pushDynamicScope()}),s.add(40,function(e){return e.popDynamicScope()}),s.add(12,function(e,t){var n=t.op1
e.stack.push(n)}),s.add(13,function(e,t){var n=t.op1
e.stack.push(e.constants.getOther(n))}),s.add(14,function(e,t){var n=t.op1,r=e.stack,i=n&~(3<<30)
switch((n&3<<30)>>>30){case 0:r.push(p.create(i))
break
case 1:r.push(p.create(e.constants.getFloat(i)))
break
case 2:r.push(p.create(e.constants.getString(i)))
break
case 3:switch(i){case 0:r.push(b)
break
case 1:r.push(v)
break
case 2:r.push(g)
break
case 3:r.push(m)}}}),s.add(15,function(e,t){var n=t.op1,r=t.op2,i=e.fetchValue(n)-r
e.stack.dup(i)}),s.add(16,function(e,t){var n=t.op1
return e.stack.pop(n)}),s.add(17,function(e,t){var n=t.op1
return e.load(n)}),s.add(18,function(e,t){var n=t.op1
return e.fetch(n)}),s.add(38,function(e,t){var n=t.op1,r=e.constants.getArray(n)
e.bindDynamicScope(r)}),s.add(47,function(e){return e.pushFrame()}),s.add(48,function(e){return e.popFrame()}),s.add(49,function(e,t){var n=t.op1
return e.enter(n)}),s.add(50,function(e){return e.exit()}),s.add(41,function(e){var t=e.stack,n=t.pop()
t.push(n?n.compileDynamic(e.env):null)}),s.add(42,function(e,t){var n=t.op1,r=e.constants.getBlock(n).compileStatic(e.env)
e.call(r.handle)}),s.add(43,function(e,t){var n=t.op1,r=e.constants.getOther(n),i=e.stack.pop()
r.invoke(e,i)}),s.add(44,function(e,t){var n=t.op1
return e.goto(n)}),s.add(45,function(e,t){var r,i=t.op1,o=e.stack.pop();(0,n.isConst)(o)?o.value()&&e.goto(i):((r=new n.ReferenceCache(o)).peek()&&e.goto(i),e.updateWith(new F(r)))}),s.add(46,function(e,t){var r,i=t.op1,o=e.stack.pop();(0,n.isConst)(o)?o.value()||e.goto(i):((r=new n.ReferenceCache(o)).peek()||e.goto(i),e.updateWith(new F(r)))}),s.add(22,function(e){return e.return()}),s.add(23,function(e,t){var n=t.op1
e.returnTo(n)})
var D=function(e){return new n.ConstReference(!!e.value())},P=function(e){return e},M=function(e,t){return t.toConditionalReference(e)}
s.add(51,function(e,t){var n=t.op1,r=e.stack,i=r.pop(),o=e.constants.getFunction(n)
r.push(o(i,e.env))})
var F=function(e){function t(n){L(this,t)
var r=I(this,e.call(this))
return r.type="assert",r.tag=n.tag,r.cache=n,r}return k(t,e),t.prototype.evaluate=function(e){var t=this.cache;(0,n.isModified)(t.revalidate())&&e.throw()},t.prototype.toJSON=function(){var e=this.type,t=this._guid,n=this.cache,r=void 0
try{r=JSON.stringify(n.peek())}catch(e){r=String(n.peek())}return{args:[],details:{expected:r},guid:t,type:e}},t}(l),j=function(e){function t(n,r){L(this,t)
var i=I(this,e.call(this))
return i.target=r,i.type="jump-if-not-modified",i.tag=n,i.lastRevision=n.value(),i}return k(t,e),t.prototype.evaluate=function(e){var t=this.tag,n=this.target,r=this.lastRevision
!e.alwaysRevalidate&&t.validate(r)&&e.goto(n)},t.prototype.didModify=function(){this.lastRevision=this.tag.value()},t.prototype.toJSON=function(){return{args:[JSON.stringify(this.target.inspect())],guid:this._guid,type:this.type}},t}(l),B=function(e){function t(r){L(this,t)
var i=I(this,e.call(this))
return i.target=r,i.type="did-modify",i.tag=n.CONSTANT_TAG,i}return k(t,e),t.prototype.evaluate=function(){this.target.didModify()},t}(l),H=function(){function e(r){L(this,e),this.tag=n.CONSTANT_TAG,this.type="label",this.label=null,this.prev=null,this.next=null,(0,t.initializeGuid)(this),this.label=r}return e.prototype.evaluate=function(){},e.prototype.inspect=function(){return this.label+" ["+this._guid+"]"},e.prototype.toJSON=function(){return{args:[JSON.stringify(this.inspect())],guid:this._guid,type:this.type}},e}()
function $(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function U(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}s.add(24,function(e,t){var n=t.op1
e.elements().appendText(e.constants.getString(n))}),s.add(25,function(e,t){var n=t.op1
e.elements().appendComment(e.constants.getString(n))}),s.add(27,function(e,t){var n=t.op1
e.elements().openElement(e.constants.getString(n))}),s.add(28,function(e,t){var n=t.op1,r=e.constants.getString(n),i=e.stack.pop()
e.elements().openElement(r,i)}),s.add(29,function(e){var t=e.stack.pop(),n=e.stack.pop().value()
e.elements().openElement(n,t)}),s.add(36,function(e){var t,r,i=e.stack.pop(),o=e.stack.pop(),a=void 0,s=void 0;(0,n.isConst)(i)?a=i.value():(a=(t=new n.ReferenceCache(i)).peek(),e.updateWith(new F(t))),(0,n.isConst)(o)?s=o.value():(s=(r=new n.ReferenceCache(o)).peek(),e.updateWith(new F(r))),e.elements().pushRemoteElement(a,s)}),s.add(37,function(e){return e.elements().popRemoteElement()})
var K=function(){function e(){W(this,e),this.list=null,this.isConst=!0}return e.prototype.append=function(e){var t=this.list,r=this.isConst
null===t&&(t=this.list=[]),t.push(e),this.isConst=r&&(0,n.isConst)(e)},e.prototype.toReference=function(){var e=this.list,t=this.isConst
return e?t?p.create(z(e)):new q(e):g},e}(),q=function(e){function t(r){W(this,t)
var i=$(this,e.call(this))
return i.list=[],i.tag=(0,n.combineTagged)(r),i.list=r,i}return U(t,e),t.prototype.compute=function(){return z(this.list)},t}(n.CachedReference)
function z(e){var t,n,r=[]
for(t=0;t<e.length;t++)!1!==(n=e[t].value())&&null!==n&&void 0!==n&&r.push(n)
return 0===r.length?null:r.join(" ")}var V=function(){function e(t){W(this,e),this.env=t,this.opcodes=null,this.classList=null}return e.prototype.addStaticAttribute=function(e,t,n){"class"===t?this.addClass(p.create(n)):this.env.getAppendOperations().setAttribute(e,t,n)},e.prototype.addStaticAttributeNS=function(e,t,n,r){this.env.getAppendOperations().setAttribute(e,n,r,t)},e.prototype.addDynamicAttribute=function(e,t,n,r){var i,o
"class"===t?this.addClass(n):(i=this.env.attributeFor(e,t,r),o=new X(e,i,t,n),this.addAttribute(o))},e.prototype.addDynamicAttributeNS=function(e,t,n,r,i){var o=this.env.attributeFor(e,n,i,t),a=new X(e,o,n,r,t)
this.addAttribute(a)},e.prototype.flush=function(e,t){var n,r,i,o=t.env,a=this.opcodes,s=this.classList
for(n=0;a&&n<a.length;n++)t.updateWith(a[n])
s&&(r=o.attributeFor(e,"class",!1),(i=new X(e,r,"class",s.toReference()).flush(o))&&t.updateWith(i)),this.opcodes=null,this.classList=null},e.prototype.addClass=function(e){var t=this.classList
t||(t=this.classList=new K),t.append(e)},e.prototype.addAttribute=function(e){var t,n=e.flush(this.env)
n&&((t=this.opcodes)||(t=this.opcodes=[]),t.push(n))},e}(),G=function(){function e(t){W(this,e),this.env=t,this.attributeNames=null,this.attributes=null,this.classList=null}return e.prototype.addStaticAttribute=function(e,t,n){"class"===t?this.addClass(p.create(n)):this.shouldAddAttribute(t)&&this.addAttribute(t,new Q(e,t,n))},e.prototype.addStaticAttributeNS=function(e,t,n,r){this.shouldAddAttribute(n)&&this.addAttribute(n,new Q(e,n,r,t))},e.prototype.addDynamicAttribute=function(e,t,n,r){var i,o
"class"===t?this.addClass(n):this.shouldAddAttribute(t)&&(i=this.env.attributeFor(e,t,r),o=new X(e,i,t,n),this.addAttribute(t,o))},e.prototype.addDynamicAttributeNS=function(e,t,n,r,i){var o,a
this.shouldAddAttribute(n)&&(o=this.env.attributeFor(e,n,i,t),a=new X(e,o,n,r,t),this.addAttribute(n,a))},e.prototype.flush=function(e,t){var n,r,i,o,a=this.env,s=this.attributes,l=this.classList
for(n=0;s&&n<s.length;n++)(r=s[n].flush(a))&&t.updateWith(r)
l&&(i=a.attributeFor(e,"class",!1),(o=new X(e,i,"class",l.toReference()).flush(a))&&t.updateWith(o))},e.prototype.shouldAddAttribute=function(e){return!this.attributeNames||-1===this.attributeNames.indexOf(e)},e.prototype.addClass=function(e){var t=this.classList
t||(t=this.classList=new K),t.append(e)},e.prototype.addAttribute=function(e,t){var n=this.attributeNames,r=this.attributes
n||(n=this.attributeNames=[],r=this.attributes=[]),n.push(e),r.push(t)},e}()
s.add(33,function(e){var t=e.elements(),n="FlushElementOpcode#evaluate"
t.expectOperations(n).flush(t.expectConstructing(n),e),t.flushElement()}),s.add(34,function(e){return e.elements().closeElement()}),s.add(30,function(e,t){var n,r=t.op1,i=t.op2,o=t.op3,a=e.constants.getString(r),s=e.constants.getString(i)
o?(n=e.constants.getString(o),e.elements().setStaticAttributeNS(n,a,s)):e.elements().setStaticAttribute(a,s)}),s.add(35,function(e,t){var n=t.op1,r=e.constants.getOther(n),i=e.stack.pop(),o=i.tag,a=e.elements(),s=a.constructing,l=a.updateOperations,u=e.dynamicScope(),c=r.create(s,i,u,l)
i.clear(),e.env.scheduleInstallModifier(c,r)
var f=r.getDestructor(c)
f&&e.newDestroyable(f),e.updateWith(new Y(o,r,c))})
var Y=function(e){function t(n,r,i){W(this,t)
var o=$(this,e.call(this))
return o.tag=n,o.manager=r,o.modifier=i,o.type="update-modifier",o.lastUpdated=n.value(),o}return U(t,e),t.prototype.evaluate=function(e){var t=this.manager,n=this.modifier,r=this.tag,i=this.lastUpdated
r.validate(i)||(e.env.scheduleUpdateModifier(n,t),this.lastUpdated=r.value())},t.prototype.toJSON=function(){return{guid:this._guid,type:this.type}},t}(l),Q=function(){function e(t,n,r,i){W(this,e),this.element=t,this.name=n,this.value=r,this.namespace=i}return e.prototype.flush=function(e){return e.getAppendOperations().setAttribute(this.element,this.name,this.value,this.namespace),null},e}(),X=function(){function e(t,n,r,i,o){W(this,e),this.element=t,this.attributeManager=n,this.name=r,this.reference=i,this.namespace=o,this.cache=null,this.tag=i.tag}return e.prototype.patch=function(e){var t=this.element,r=this.cache.revalidate();(0,n.isModified)(r)&&this.attributeManager.updateAttribute(e,t,r,this.namespace)},e.prototype.flush=function(e){var t,r,i=this.reference,o=this.element
return(0,n.isConst)(i)?(t=i.value(),this.attributeManager.setAttribute(e,o,t,this.namespace),null):(r=(this.cache=new n.ReferenceCache(i)).peek(),this.attributeManager.setAttribute(e,o,r,this.namespace),new J(this))},e.prototype.toJSON=function(){var e=this.element,t=this.namespace,n=this.name,r=this.cache,i=function(e){return JSON.stringify("<"+e.tagName.toLowerCase()+" />")}(e),o=r.peek()
return t?{element:i,lastValue:o,name:n,namespace:t,type:"attribute"}:{element:i,lastValue:o,name:n,namespace:void 0===t?null:t,type:"attribute"}},e}()
s.add(32,function(e,t){var n=t.op1,r=t.op2,i=t.op3,o=e.constants.getString(n),a=e.constants.getString(r),s=e.stack.pop()
e.elements().setDynamicAttributeNS(a,o,s,!!i)}),s.add(31,function(e,t){var n=t.op1,r=t.op2,i=e.constants.getString(n),o=e.stack.pop()
e.elements().setDynamicAttribute(i,o,!!r)})
var J=function(e){function t(n){W(this,t)
var r=$(this,e.call(this))
return r.type="patch-element",r.tag=n.tag,r.operation=n,r}return U(t,e),t.prototype.evaluate=function(e){this.operation.patch(e.env)},t.prototype.toJSON=function(){var e=this._guid,t=this.type
return{details:this.operation.toJSON(),guid:e,type:t}},t}(l)
function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function te(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}s.add(56,function(e,t){var n=t.op1,r=e.constants.getOther(n)
e.stack.push({definition:r,manager:r.manager,component:null})}),s.add(57,function(e){var t=e.stack,r=t.pop(),i=(0,n.isConst)(r)?void 0:new n.ReferenceCache(r),o=i?i.peek():r.value()
t.push({definition:o,manager:o.manager,component:null}),i&&e.updateWith(new F(i))}),s.add(58,function(e,t){var n=t.op1,r=e.stack
N.setup(r,!!n),r.push(N)}),s.add(59,function(e,t){var n,r,i,o,a,s,l,u,c,f,p=t.op1,d=e.stack,h=e.fetchValue(p),m=h.definition,g=h.manager,v=d.pop(),b=g.prepareArgs(m,v)
if(b){for(v.clear(),n=b.positional,r=b.named,i=n.length,o=0;o<i;o++)d.push(n[o])
for(d.push(i),s=(a=Object.keys(r)).length,l=[],u=0;u<s;u++)c=r[a[u]],f="@"+a[u],d.push(c),l.push(f)
d.push(l),v.setup(d,!1)}d.push(v)}),s.add(60,function(e,t){var n,r,i=t.op1,o=t.op2,a=void 0,s=e.stack.pop(),l=e.dynamicScope(),u=(r=(n=e.fetchValue(o)).definition,a=n.manager,n),c=a.create(e.env,r,s,l,e.getSelf(),!!(1&i))
u.component=c,e.updateWith(new ne(s.tag,r.name,c,a,l))}),s.add(61,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.manager,o=r.component,a=i.getDestructor(o)
a&&e.newDestroyable(a)}),s.add(65,function(e){e.beginCacheGroup(),e.elements().pushSimpleBlock()}),s.add(62,function(e){e.stack.push(new G(e.env))}),s.add(67,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.manager,o=r.component,a="DidCreateElementOpcode#evaluate"
i.didCreateElement(o,e.elements().expectConstructing(a),e.elements().expectOperations(a))}),s.add(63,function(e,t){var n=t.op1,r=e.fetchValue(n)
e.stack.push(r.manager.getSelf(r.component))}),s.add(64,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.manager,o=r.definition,a=r.component
e.stack.push(i.layoutFor(o,a,e.env))}),s.add(68,function(e,t){var n=t.op1,r=e.fetchValue(n),i=r.manager,o=r.component,a=e.elements().popBlock()
i.didRenderLayout(o,a),e.env.didCreate(o,i),e.updateWith(new re(i,o,a))}),s.add(66,function(e){return e.commitCacheGroup()})
var ne=function(e){function t(r,i,o,a,s){Z(this,t)
var l=ee(this,e.call(this))
l.name=i,l.component=o,l.manager=a,l.dynamicScope=s,l.type="update-component"
var u=a.getTag(o)
return l.tag=u?(0,n.combine)([r,u]):r,l}return te(t,e),t.prototype.evaluate=function(){var e=this.component,t=this.manager,n=this.dynamicScope
t.update(e,n)},t.prototype.toJSON=function(){return{args:[JSON.stringify(this.name)],guid:this._guid,type:this.type}},t}(l),re=function(e){function t(r,i,o){Z(this,t)
var a=ee(this,e.call(this))
return a.manager=r,a.component=i,a.bounds=o,a.type="did-update-layout",a.tag=n.CONSTANT_TAG,a}return te(t,e),t.prototype.evaluate=function(e){var t=this.manager,n=this.component,r=this.bounds
t.didUpdateLayout(n,r),e.env.didUpdate(n,t)},t}(l)
function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var oe=function(){function e(t,n,r){ie(this,e),this.parentNode=t,this.first=n,this.last=r}return e.prototype.parentElement=function(){return this.parentNode},e.prototype.firstNode=function(){return this.first},e.prototype.lastNode=function(){return this.last},e}(),ae=function(){function e(t,n){ie(this,e),this.parentNode=t,this.node=n}return e.prototype.parentElement=function(){return this.parentNode},e.prototype.firstNode=function(){return this.node},e.prototype.lastNode=function(){return this.node},e}()
function se(e,t){for(var n,r=e.parentElement(),i=e.firstNode(),o=e.lastNode(),a=i;a;){if(n=a.nextSibling,r.insertBefore(a,t),a===o)return n
a=n}return null}function le(e){for(var t,n=e.parentElement(),r=e.firstNode(),i=e.lastNode(),o=r;o;){if(t=o.nextSibling,n.removeChild(o),o===i)return t
o=t}return null}function ue(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function ce(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function fe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var pe=function(){function e(t){fe(this,e),this.node=t}return e.prototype.firstNode=function(){return this.node},e}(),de=function(){function e(t){fe(this,e),this.node=t}return e.prototype.lastNode=function(){return this.node},e}(),he=function(){function e(t){fe(this,e),this.bounds=t}return e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.update=function(e){this.bounds=e},e}(),me=function(){function e(n,r,i){fe(this,e),this.constructing=null,this.operations=null,this.elementStack=new t.Stack,this.nextSiblingStack=new t.Stack,this.blockStack=new t.Stack,this.env=n,this.dom=n.getAppendOperations(),this.updateOperations=n.getDOM(),this.element=r,this.nextSibling=i,this.defaultOperations=new V(n),this.pushSimpleBlock(),this.elementStack.push(this.element),this.nextSiblingStack.push(this.nextSibling)}return e.forInitialRender=function(t,n,r){return new e(t,n,r)},e.resume=function(t,n,r){var i=new e(t,n.parentElement(),r)
return i.pushBlockTracker(n),i},e.prototype.expectConstructing=function(){return this.constructing},e.prototype.expectOperations=function(){return this.operations},e.prototype.block=function(){return this.blockStack.current},e.prototype.popElement=function(){var e=this.elementStack,t=this.nextSiblingStack,n=e.pop()
return t.pop(),this.element=e.current,this.nextSibling=t.current,n},e.prototype.pushSimpleBlock=function(){var e=new ge(this.element)
return this.pushBlockTracker(e),e},e.prototype.pushUpdatableBlock=function(){var e=new be(this.element)
return this.pushBlockTracker(e),e},e.prototype.pushBlockTracker=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.blockStack.current
return null!==n&&(n.newDestroyable(e),t||n.newBounds(e)),this.blockStack.push(e),e},e.prototype.pushBlockList=function(e){var t=new ye(this.element,e),n=this.blockStack.current
return null!==n&&(n.newDestroyable(t),n.newBounds(t)),this.blockStack.push(t),t},e.prototype.popBlock=function(){return this.block().finalize(this),this.blockStack.pop()},e.prototype.openElement=function(e,t){var n=void 0===t?this.defaultOperations:t,r=this.dom.createElement(e,this.element)
return this.constructing=r,this.operations=n,r},e.prototype.flushElement=function(){var e=this.element,t=this.constructing
this.dom.insertBefore(e,t,this.nextSibling),this.constructing=null,this.operations=null,this.pushElement(t,null),this.block().openElement(t)},e.prototype.pushRemoteElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
this.pushElement(e,t)
var n=new ve(e)
this.pushBlockTracker(n,!0)},e.prototype.popRemoteElement=function(){this.popBlock(),this.popElement()},e.prototype.pushElement=function(e,t){this.element=e,this.elementStack.push(e),this.nextSibling=t,this.nextSiblingStack.push(t)},e.prototype.newDestroyable=function(e){this.block().newDestroyable(e)},e.prototype.newBounds=function(e){this.block().newBounds(e)},e.prototype.appendText=function(e){var t=this.dom,n=t.createTextNode(e)
return t.insertBefore(this.element,n,this.nextSibling),this.block().newNode(n),n},e.prototype.appendComment=function(e){var t=this.dom,n=t.createComment(e)
return t.insertBefore(this.element,n,this.nextSibling),this.block().newNode(n),n},e.prototype.setStaticAttribute=function(e,t){this.expectOperations("setStaticAttribute").addStaticAttribute(this.expectConstructing("setStaticAttribute"),e,t)},e.prototype.setStaticAttributeNS=function(e,t,n){this.expectOperations("setStaticAttributeNS").addStaticAttributeNS(this.expectConstructing("setStaticAttributeNS"),e,t,n)},e.prototype.setDynamicAttribute=function(e,t,n){this.expectOperations("setDynamicAttribute").addDynamicAttribute(this.expectConstructing("setDynamicAttribute"),e,t,n)},e.prototype.setDynamicAttributeNS=function(e,t,n,r){this.expectOperations("setDynamicAttributeNS").addDynamicAttributeNS(this.expectConstructing("setDynamicAttributeNS"),e,t,n,r)},e.prototype.closeElement=function(){this.block().closeElement(),this.popElement()},e}(),ge=function(){function e(t){fe(this,e),this.parent=t,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}return e.prototype.destroy=function(){var e,t=this.destroyables
if(t&&t.length)for(e=0;e<t.length;e++)t[e].destroy()},e.prototype.parentElement=function(){return this.parent},e.prototype.firstNode=function(){return this.first&&this.first.firstNode()},e.prototype.lastNode=function(){return this.last&&this.last.lastNode()},e.prototype.openElement=function(e){this.newNode(e),this.nesting++},e.prototype.closeElement=function(){this.nesting--},e.prototype.newNode=function(e){0===this.nesting&&(this.first||(this.first=new pe(e)),this.last=new de(e))},e.prototype.newBounds=function(e){0===this.nesting&&(this.first||(this.first=e),this.last=e)},e.prototype.newDestroyable=function(e){this.destroyables=this.destroyables||[],this.destroyables.push(e)},e.prototype.finalize=function(e){this.first||e.appendComment("")},e}(),ve=function(e){function t(){return fe(this,t),ue(this,e.apply(this,arguments))}return ce(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),le(this)},t}(ge),be=function(e){function t(){return fe(this,t),ue(this,e.apply(this,arguments))}return ce(t,e),t.prototype.reset=function(e){var t,n=this.destroyables
if(n&&n.length)for(t=0;t<n.length;t++)e.didDestroy(n[t])
var r=le(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,r},t}(ge),ye=function(){function e(t,n){fe(this,e),this.parent=t,this.boundList=n,this.parent=t,this.boundList=n}return e.prototype.destroy=function(){this.boundList.forEachNode(function(e){return e.destroy()})},e.prototype.parentElement=function(){return this.parent},e.prototype.firstNode=function(){var e=this.boundList.head()
return e&&e.firstNode()},e.prototype.lastNode=function(){var e=this.boundList.tail()
return e&&e.lastNode()},e.prototype.openElement=function(){(0,t.assert)(!1,"Cannot openElement directly inside a block list")},e.prototype.closeElement=function(){(0,t.assert)(!1,"Cannot closeElement directly inside a block list")},e.prototype.newNode=function(){(0,t.assert)(!1,"Cannot create a new node directly inside a block list")},e.prototype.newBounds=function(){},e.prototype.newDestroyable=function(){},e.prototype.finalize=function(){},e}()
var Ee="COMPONENT DEFINITION [id=e59c754e-61eb-4392-8c4a-2c0ac72bfcd4]"
function Te(e){return"object"==typeof e&&null!==e&&e[Ee]}function _e(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function Ae(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function we(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ce(e){return"object"==typeof e&&null!==e&&"function"==typeof e.toHTML}function Se(e){return"object"==typeof e&&null!==e&&"number"==typeof e.nodeType}function Oe(e){return"string"==typeof e}var xe=function e(t){we(this,e),this.bounds=t}
function Re(e,n,r){if(Oe(r))return Le.insert(e,n,r)
if(Ce(r))return ke.insert(e,n,r)
if(Se(r))return De.insert(e,n,r)
throw(0,t.unreachable)()}function Ne(e,n,r){if(Oe(r))return Ie.insert(e,n,r)
if(Se(r))return De.insert(e,n,r)
throw(0,t.unreachable)()}var Le=function(e){function t(n,r){we(this,t)
var i=_e(this,e.call(this,n))
return i.textNode=r,i}return Ae(t,e),t.insert=function(e,n,r){var i=e.createTextNode(r)
return e.insertBefore(n.element,i,n.nextSibling),new t(new ae(n.element,i),i)},t.prototype.update=function(e,t){return!!Oe(t)&&(this.textNode.nodeValue=t,!0)},t}(xe),Ie=function(e){function t(){return we(this,t),_e(this,e.apply(this,arguments))}return Ae(t,e),t.insert=function(e,n,r){return new t(e.insertHTMLBefore(n.element,n.nextSibling,r))},t.prototype.update=function(e,t){var n,r,i
return!!Oe(t)&&(r=(n=this.bounds).parentElement(),i=le(n),this.bounds=e.insertHTMLBefore(r,i,t),!0)},t}(xe),ke=function(e){function t(n,r){we(this,t)
var i=_e(this,e.call(this,n))
return i.lastStringValue=r,i}return Ae(t,e),t.insert=function(e,n,r){var i=r.toHTML()
return new t(e.insertHTMLBefore(n.element,n.nextSibling,i),i)},t.prototype.update=function(e,t){var n,r,i,o
return!!Ce(t)&&((n=t.toHTML())!==this.lastStringValue&&(i=(r=this.bounds).parentElement(),o=le(r),this.bounds=e.insertHTMLBefore(i,o,n),this.lastStringValue=n),!0)},t}(xe),De=function(e){function t(){return we(this,t),_e(this,e.apply(this,arguments))}return Ae(t,e),t.insert=function(e,n,r){return e.insertBefore(n.element,r,n.nextSibling),new t(function(e,t){return new ae(e,t)}(n.element,r))},t.prototype.update=function(e,t){var n,r,i
return!!Se(t)&&(r=(n=this.bounds).parentElement(),i=le(n),this.bounds=e.insertNodeBefore(r,t,i),!0)},t}(xe)
function Pe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function Me(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function Fe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function je(e){return null===e||void 0===e||"function"!=typeof e.toString}function Be(e){return je(e)?"":String(e)}function He(e){return je(e)?"":Oe(e)?e:Ce(e)?e.toHTML():Se(e)?e:String(e)}function $e(e){return je(e)?"":Oe(e)?e:Ce(e)||Se(e)?e:String(e)}s.add(26,function(e,t){var n=t.op1
e.constants.getOther(n).evaluate(e)})
var Ue=function(){function e(){Fe(this,e)}return e.prototype.evaluate=function(e){var t=e.stack.pop(),r=this.normalize(t),i=void 0,o=void 0
i=(0,n.isConst)(t)?r.value():(o=new n.ReferenceCache(r)).peek()
var a=e.elements(),s=this.insert(e.env.getAppendOperations(),a,i),l=new he(s.bounds)
a.newBounds(l),o&&e.updateWith(this.updateWith(e,t,o,l,s))},e}(),We=function(e){function t(){return Fe(this,t),Pe(this,e.apply(this,arguments))}return Me(t,e),t.create=function(e){return new t(e)},t.prototype.toBool=function(e){return Te(e)},t}(y),Ke=function(e){function t(n,r,i){Fe(this,t)
var o=Pe(this,e.call(this))
return o.cache=n,o.bounds=r,o.upsert=i,o.tag=n.tag,o}return Me(t,e),t.prototype.evaluate=function(e){var t,r,i,o,a=this.cache.revalidate();(0,n.isModified)(a)&&(t=this.bounds,r=this.upsert,i=e.dom,this.upsert.update(i,a)||(o=new function e(t,n){ie(this,e),this.element=t,this.nextSibling=n}(t.parentElement(),le(t)),r=this.upsert=this.insert(e.env.getAppendOperations(),o,a)),t.update(r.bounds))},t.prototype.toJSON=function(){var e=this._guid,t=this.type,n=this.cache
return{details:{lastValue:JSON.stringify(n.peek())},guid:e,type:t}},t}(l),qe=function(e){function t(){Fe(this,t)
var n=Pe(this,e.apply(this,arguments))
return n.type="optimized-cautious-append",n}return Me(t,e),t.prototype.normalize=function(e){return(0,n.map)(e,$e)},t.prototype.insert=function(e,t,n){return Re(e,t,n)},t.prototype.updateWith=function(e,t,n,r,i){return new ze(n,r,i)},t}(Ue),ze=function(e){function t(){Fe(this,t)
var n=Pe(this,e.apply(this,arguments))
return n.type="optimized-cautious-update",n}return Me(t,e),t.prototype.insert=function(e,t,n){return Re(e,t,n)},t}(Ke),Ve=function(e){function t(){Fe(this,t)
var n=Pe(this,e.apply(this,arguments))
return n.type="optimized-trusting-append",n}return Me(t,e),t.prototype.normalize=function(e){return(0,n.map)(e,He)},t.prototype.insert=function(e,t,n){return Ne(e,t,n)},t.prototype.updateWith=function(e,t,n,r,i){return new Ge(n,r,i)},t}(Ue),Ge=function(e){function t(){Fe(this,t)
var n=Pe(this,e.apply(this,arguments))
return n.type="optimized-trusting-update",n}return Me(t,e),t.prototype.insert=function(e,t,n){return Ne(e,t,n)},t}(Ke)
function Ye(e,t){console.info("Use `context`, and `get(<path>)` to debug this template."),t("this")}var Qe=Ye,Xe=function(){function e(n,r,i){var o,a,s,l
for(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scope=n,this.locals=(0,t.dict)(),o=0;o<i.length;o++)s=r[(a=i[o])-1],l=n.getSymbol(a),this.locals[s]=l}return e.prototype.get=function(e){var t=this.scope,n=this.locals,r=e.split("."),i=e.split("."),o=i[0],a=i.slice(1),s=t.getEvalScope(),l=void 0
return"this"===o?l=t.getSelf():n[o]?l=n[o]:0===o.indexOf("@")&&s[o]?l=s[o]:(l=this.scope.getSelf(),a=r),a.reduce(function(e,t){return e.get(t)},l)},e}()
s.add(71,function(e,t){var n=t.op1,r=t.op2,i=e.constants.getOther(n),o=e.constants.getArray(r),a=new Xe(e.scope(),i,o)
Qe(e.getSelf().value(),function(e){return a.get(e).value()})}),s.add(69,function(e){var t=e.stack,n=t.pop()
t.push(n.value().template.asPartial())})
var Je,Ze,et=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.tag=t.tag,this.artifacts=t}return e.prototype.value=function(){return!this.artifacts.isEmpty()},e}()
function tt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}s.add(54,function(e){var t=e.stack,r=t.pop(),i=t.pop(),o=e.env.iterableFor(r,i.value()),a=new n.ReferenceIterator(o)
t.push(a),t.push(new et(a.artifacts))}),s.add(52,function(e,t){var n=t.op1
e.enterList(n)}),s.add(53,function(e){return e.exitList()}),s.add(55,function(e,t){var n,r=t.op1,i=e.stack.peek().next()
i?(n=e.iterate(i.memo,i.value),e.enterItem(i.key,n)):e.goto(r)}),(Ze=Je||(Je={}))[Ze.OpenComponentElement=0]="OpenComponentElement",Ze[Ze.DidCreateElement=1]="DidCreateElement",Ze[Ze.DidRenderLayout=2]="DidRenderLayout",Ze[Ze.FunctionExpression=3]="FunctionExpression"
var nt=function e(t){tt(this,e),this.handle=t},rt=function e(t,n){tt(this,e),this.handle=t,this.symbolTable=n},it=function(){function e(e,t){var n,r
for(n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function ot(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var at=function(){function e(t){ot(this,e),this.env=t}return e.prototype.wrapLayout=function(e){this.inner=new st(this.env,e)},e.prototype.fromLayout=function(e,t){this.inner=new lt(this.env,e,t)},e.prototype.compile=function(){return this.inner.compile()},it(e,[{key:"tag",get:function(){return this.inner.tag}},{key:"attrs",get:function(){return this.inner.attrs}}]),e}(),st=function(){function e(t,n){ot(this,e),this.env=t,this.layout=n,this.tag=new ut,this.attrs=new ct}return e.prototype.compile=function(){var e,t,n=this.env,r=this.layout,i={templateMeta:r.meta,symbols:r.symbols,asPartial:!1},o=this.tag.getDynamic(),s=this.tag.getStatic(),l=function(e,t){return new vt(e,t)}(n,i)
if(l.startLabels(),o?(l.fetch(a.s1),Lt(o,l),l.dup(),l.load(a.s1),l.test("simple"),l.jumpUnless("BODY"),l.fetch(a.s1),l.pushComponentOperations(),l.openDynamicElement()):s&&(l.pushComponentOperations(),l.openElementWithOperations(s)),o||s){for(l.didCreateElement(a.s0),e=this.attrs.buffer,t=0;t<e.length;t++)Ft(e[t],l)
l.flushElement()}l.label("BODY"),l.invokeStatic(r.asBlock()),o?(l.fetch(a.s1),l.test("simple"),l.jumpUnless("END"),l.closeElement()):s&&l.closeElement(),l.label("END"),l.didRenderLayout(a.s0),o&&l.load(a.s1),l.stopLabels()
var u=l.start
return l.finalize(),new rt(u,{meta:i,hasEval:r.hasEval,symbols:r.symbols.concat([Et])})},e}(),lt=function(){function e(t,n,r){ot(this,e),this.env=t,this.componentName=n,this.layout=r,this.attrs=new ct}return e.prototype.compile=function(){var e=this.env
return this.layout.asLayout(this.componentName,this.attrs.buffer).compileDynamic(e)},it(e,[{key:"tag",get:function(){throw new Error("BUG: Cannot call `tag` on an UnwrappedBuilder")}}]),e}(),ut=function(){function e(){ot(this,e),this.isDynamic=null,this.isStatic=null,this.staticTagName=null,this.dynamicTagName=null}return e.prototype.getDynamic=function(){if(this.isDynamic)return this.dynamicTagName},e.prototype.getStatic=function(){if(this.isStatic)return this.staticTagName},e.prototype.static=function(e){this.isStatic=!0,this.staticTagName=e},e.prototype.dynamic=function(e){this.isDynamic=!0,this.dynamicTagName=[r.Ops.ClientSideExpression,Je.FunctionExpression,e]},e}(),ct=function(){function e(){ot(this,e),this.buffer=[]}return e.prototype.static=function(e,t){this.buffer.push([r.Ops.StaticAttr,e,t,null])},e.prototype.dynamic=function(e,t){this.buffer.push([r.Ops.DynamicAttr,e,[r.Ops.ClientSideExpression,Je.FunctionExpression,t],null])},e}(),ft=function(){function e(t){ot(this,e),this.builder=t,this.env=t.env}return e.prototype.static=function(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=this.builder
a.pushComponentManager(e),a.invokeComponent(null,n,r,i,o)},e.prototype.dynamic=function(e,t,n){var r=n[0],i=n[1],o=n[2],a=n[3],s=this.builder
if(!e||0===e.length)throw new Error("Dynamic syntax without an argument")
var l=this.builder.meta.templateMeta
s.startLabels(),s.pushFrame(),s.returnTo("END"),s.compileArgs(e[0],e[1],!0),s.helper(function(e,n){return t(e,n,l)}),s.dup(),s.test("simple"),s.enter(2),s.jumpUnless("ELSE"),s.pushDynamicComponentManager(),s.invokeComponent(null,r,i,o,a),s.label("ELSE"),s.exit(),s.return(),s.label("END"),s.popFrame(),s.stopLabels()},e}()
var pt=function(){function e(t,n,r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.meta=t,this.statements=n,this.parameters=r}return e.prototype.scan=function(){return new jt(this.statements,{parameters:this.parameters,meta:this.meta})},e}(),dt=function(){function e(e,t){var n,r
for(n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function ht(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function mt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var gt=function(){function e(){mt(this,e),this.labels=(0,t.dict)(),this.targets=[]}return e.prototype.label=function(e,t){this.labels[e]=t},e.prototype.target=function(e,t,n){this.targets.push({at:e,Target:t,target:n})},e.prototype.patch=function(e){var t,n,r,i,o=this.targets,a=this.labels
for(t=0;t<o.length;t++)r=(n=o[t]).at,i=a[n.target]-r,e.heap.setbyaddr(r+1,i)},e}()
var vt=function(e){function n(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.program
mt(this,n)
var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,i))
return o.component=new ft(o),o}return ht(n,e),n.prototype.compileArgs=function(e,n,r){var i,o,a,s=0
if(e){for(i=0;i<e.length;i++)Lt(e[i],this)
s=e.length}this.pushImmediate(s)
var l=t.EMPTY_ARRAY
if(n)for(l=n[0],o=n[1],a=0;a<o.length;a++)Lt(o[a],this)
this.pushImmediate(l),this.pushArgs(r)},n.prototype.compile=function(e){return function(e){return"object"==typeof e&&null!==e&&"function"==typeof e.compile}(e)?e.compile(this):e},n.prototype.guardedAppend=function(e,t){this.startLabels(),this.pushFrame(),this.returnTo("END"),Lt(e,this),this.dup(),this.test(function(e){return We.create(e)}),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(),this.invokeComponent(null,null,null,null,null),this.exit(),this.return(),this.label("ELSE"),t?this.trustingAppend():this.cautiousAppend(),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},n.prototype.invokeComponent=function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
this.fetch(a.s0),this.dup(a.sp,1),this.load(a.s0),this.pushBlock(r),this.pushBlock(i),this.compileArgs(t,n,!1),this.prepareArgs(a.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(a.s0,null!==r,null!==i),this.registerComponentDestructor(a.s0),this.getComponentSelf(a.s0),this.getComponentLayout(a.s0),this.invokeDynamic(new Ct(e&&e.scan())),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(a.s0)},n.prototype.template=function(e){return e?new pt(this.meta,e.statements,e.parameters):null},n}(function(){function e(n,r,i){mt(this,e),this.env=n,this.meta=r,this.program=i,this.labelsStack=new t.Stack,this.constants=i.constants,this.heap=i.heap,this.start=this.heap.malloc()}return e.prototype.upvars=function(e){return(0,t.fillNulls)(e)},e.prototype.reserve=function(e){this.push(e,0,0,0)},e.prototype.push=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
this.heap.push(e),this.heap.push(t),this.heap.push(n),this.heap.push(r)},e.prototype.finalize=function(){return this.push(22),this.heap.finishMalloc(this.start),this.start},e.prototype.pushArgs=function(e){this.push(58,!0===e?1:0)},e.prototype.startLabels=function(){this.labelsStack.push(new gt)},e.prototype.stopLabels=function(){this.labelsStack.pop().patch(this.program)},e.prototype.pushComponentManager=function(e){this.push(56,this.other(e))},e.prototype.pushDynamicComponentManager=function(){this.push(57)},e.prototype.prepareArgs=function(e){this.push(59,e)},e.prototype.createComponent=function(e,t,n){var r=(!0===t?1:0)|(!0===n?1:0)<<1
this.push(60,r,e)},e.prototype.registerComponentDestructor=function(e){this.push(61,e)},e.prototype.beginComponentTransaction=function(){this.push(65)},e.prototype.commitComponentTransaction=function(){this.push(66)},e.prototype.pushComponentOperations=function(){this.push(62)},e.prototype.getComponentSelf=function(e){this.push(63,e)},e.prototype.getComponentLayout=function(e){this.push(64,e)},e.prototype.didCreateElement=function(e){this.push(67,e)},e.prototype.didRenderLayout=function(e){this.push(68,e)},e.prototype.getPartialTemplate=function(){this.push(69)},e.prototype.resolveMaybeLocal=function(e){this.push(70,this.string(e))},e.prototype.debugger=function(e,t){this.push(71,this.constants.other(e),this.constants.array(t))},e.prototype.dynamicContent=function(e){this.push(26,this.other(e))},e.prototype.cautiousAppend=function(){this.dynamicContent(new qe)},e.prototype.trustingAppend=function(){this.dynamicContent(new Ve)},e.prototype.text=function(e){this.push(24,this.constants.string(e))},e.prototype.openPrimitiveElement=function(e){this.push(27,this.constants.string(e))},e.prototype.openElementWithOperations=function(e){this.push(28,this.constants.string(e))},e.prototype.openDynamicElement=function(){this.push(29)},e.prototype.flushElement=function(){this.push(33)},e.prototype.closeElement=function(){this.push(34)},e.prototype.staticAttr=function(e,t,n){var r=this.constants.string(e),i=t?this.constants.string(t):0,o=this.constants.string(n)
this.push(30,r,o,i)},e.prototype.dynamicAttrNS=function(e,t,n){var r=this.constants.string(e),i=this.constants.string(t)
this.push(32,r,i,!0===n?1:0)},e.prototype.dynamicAttr=function(e,t){var n=this.constants.string(e)
this.push(31,n,!0===t?1:0)},e.prototype.comment=function(e){var t=this.constants.string(e)
this.push(25,t)},e.prototype.modifier=function(e){this.push(35,this.other(e))},e.prototype.putIterator=function(){this.push(54)},e.prototype.enterList=function(e){this.reserve(52),this.labels.target(this.pos,52,e)},e.prototype.exitList=function(){this.push(53)},e.prototype.iterate=function(e){this.reserve(55),this.labels.target(this.pos,55,e)},e.prototype.setVariable=function(e){this.push(4,e)},e.prototype.getVariable=function(e){this.push(5,e)},e.prototype.getProperty=function(e){this.push(6,this.string(e))},e.prototype.getBlock=function(e){this.push(8,e)},e.prototype.hasBlock=function(e){this.push(9,e)},e.prototype.hasBlockParams=function(e){this.push(10,e)},e.prototype.concat=function(e){this.push(11,e)},e.prototype.function=function(e){this.push(2,this.func(e))},e.prototype.load=function(e){this.push(17,e)},e.prototype.fetch=function(e){this.push(18,e)},e.prototype.dup=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.sp,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.push(15,e,t)},e.prototype.pop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
return this.push(16,e)},e.prototype.pushRemoteElement=function(){this.push(36)},e.prototype.popRemoteElement=function(){this.push(37)},e.prototype.label=function(e){this.labels.label(e,this.nextPos)},e.prototype.pushRootScope=function(e,t){this.push(19,e,t?1:0)},e.prototype.pushChildScope=function(){this.push(20)},e.prototype.popScope=function(){this.push(21)},e.prototype.returnTo=function(e){this.reserve(23),this.labels.target(this.pos,23,e)},e.prototype.pushDynamicScope=function(){this.push(39)},e.prototype.popDynamicScope=function(){this.push(40)},e.prototype.pushImmediate=function(e){this.push(13,this.other(e))},e.prototype.primitive=function(e){var t=0,n=void 0
switch(typeof e){case"number":e%1==0&&e>0?n=e:(n=this.float(e),t=1)
break
case"string":n=this.string(e),t=2
break
case"boolean":n=0|e,t=3
break
case"object":n=2,t=3
break
case"undefined":n=3,t=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(14,t<<30|n)},e.prototype.helper=function(e){this.push(1,this.func(e))},e.prototype.pushBlock=function(e){this.push(7,this.block(e))},e.prototype.bindDynamicScope=function(e){this.push(38,this.names(e))},e.prototype.enter=function(e){this.push(49,e)},e.prototype.exit=function(){this.push(50)},e.prototype.return=function(){this.push(22)},e.prototype.pushFrame=function(){this.push(47)},e.prototype.popFrame=function(){this.push(48)},e.prototype.compileDynamicBlock=function(){this.push(41)},e.prototype.invokeDynamic=function(e){this.push(43,this.other(e))},e.prototype.invokeStatic=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.symbolTable.parameters,i=r.length,o=Math.min(n,i)
if(this.pushFrame(),o)for(this.pushChildScope(),t=0;t<o;t++)this.dup(a.fp,n-t),this.setVariable(r[t])
var s=this.constants.block(e)
this.push(42,s),o&&this.popScope(),this.popFrame()},e.prototype.test=function(e){var t=void 0
if("const"===e)t=D
else if("simple"===e)t=P
else if("environment"===e)t=M
else{if("function"!=typeof e)throw new Error("unreachable")
t=e}var n=this.constants.function(t)
this.push(51,n)},e.prototype.jump=function(e){this.reserve(44),this.labels.target(this.pos,44,e)},e.prototype.jumpIf=function(e){this.reserve(45),this.labels.target(this.pos,45,e)},e.prototype.jumpUnless=function(e){this.reserve(46),this.labels.target(this.pos,46,e)},e.prototype.string=function(e){return this.constants.string(e)},e.prototype.float=function(e){return this.constants.float(e)},e.prototype.names=function(e){var t,n,r=[]
for(t=0;t<e.length;t++)n=e[t],r[t]=this.constants.string(n)
return this.constants.array(r)},e.prototype.symbols=function(e){return this.constants.array(e)},e.prototype.other=function(e){return this.constants.other(e)},e.prototype.block=function(e){return e?this.constants.block(e):0},e.prototype.func=function(e){return this.constants.function(e)},dt(e,[{key:"pos",get:function(){return(0,t.typePos)(this.heap.size())}},{key:"nextPos",get:function(){return this.heap.size()}},{key:"labels",get:function(){return this.labelsStack.current}}]),e}())
function bt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var yt=r.Ops,Et="&attrs",Tt=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
bt(this,e),this.offset=n,this.names=(0,t.dict)(),this.funcs=[]}return e.prototype.add=function(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1},e.prototype.compile=function(e,n){var r=e[this.offset],i=this.names[r],o=this.funcs[i];(0,t.assert)(!!o,"expected an implementation for "+(0===this.offset?yt[e[0]]:Je[e[1]])),o(e,n)},e}(),_t=new Tt,At=new Tt(1)
function wt(e,t,n){var r=e[1],i=e[2],o=e[3]
Lt(i,n),o?n.dynamicAttrNS(r,o,t):n.dynamicAttr(r,t)}_t.add(yt.Text,function(e,t){t.text(e[1])}),_t.add(yt.Comment,function(e,t){t.comment(e[1])}),_t.add(yt.CloseElement,function(e,t){t.closeElement()}),_t.add(yt.FlushElement,function(e,t){t.flushElement()}),_t.add(yt.Modifier,function(e,t){var n=t.env,r=t.meta,i=e[1],o=e[2],a=e[3]
if(!n.hasModifier(i,r.templateMeta))throw new Error("Compile Error "+i+" is not a modifier: Helpers may not be used in the element form.")
t.compileArgs(o,a,!0),t.modifier(n.lookupModifier(i,r.templateMeta))}),_t.add(yt.StaticAttr,function(e,t){var n=e[1],r=e[2],i=e[3]
t.staticAttr(n,i,r)}),_t.add(yt.DynamicAttr,function(e,t){wt(e,!1,t)}),_t.add(yt.TrustingAttr,function(e,t){wt(e,!0,t)}),_t.add(yt.OpenElement,function(e,t){t.openPrimitiveElement(e[1])}),At.add(Je.OpenComponentElement,function(e,t){t.pushComponentOperations(),t.openElementWithOperations(e[2])}),At.add(Je.DidCreateElement,function(e,t){t.didCreateElement(a.s0)}),At.add(Je.DidRenderLayout,function(e,t){t.didRenderLayout(a.s0)}),_t.add(yt.Append,function(e,t){var n=e[1],r=e[2]
if(!0!==(t.env.macros().inlines.compile(e,t)||n)){var i=Nt.isGet(n),o=Nt.isMaybeLocal(n)
r?t.guardedAppend(n,!0):i||o?t.guardedAppend(n,!1):(Lt(n,t),t.cautiousAppend())}}),_t.add(yt.Block,function(e,t){var n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],s=t.template(o),l=t.template(a),u=s&&s.scan(),c=l&&l.scan()
t.env.macros().blocks.compile(n,r,i,u,c,t)})
var Ct=function(){function e(t){bt(this,e),this.attrs=t}return e.prototype.invoke=function(e,n){var r,i,o,a=n.symbolTable,s=a.symbols,l=a.hasEval,u=e.stack,c=e.pushRootScope(s.length+1,!0)
c.bindSelf(u.pop()),c.bindBlock(s.indexOf(Et)+1,this.attrs)
var f=null
l&&(s.indexOf("$eval"),f=(0,t.dict)())
var p=u.pop()
for(r=p.length-1;r>=0;r--)i=s.indexOf(p[r]),o=u.pop(),-1!==i&&c.bindSymbol(i+1,o),l&&(f[p[r]]=o)
var d=u.pop();(0,t.assert)("number"==typeof d,"[BUG] Incorrect value of positional argument count found during invoke-dynamic-layout."),u.pop(d)
var h=s.indexOf("&inverse"),m=u.pop();-1!==h&&c.bindBlock(h+1,m),f&&(f["&inverse"]=m)
var g=s.indexOf("&default"),v=u.pop();-1!==g&&c.bindBlock(g+1,v),f&&(f["&default"]=v),f&&c.bindEvalScope(f),e.pushFrame(),e.call(n.handle)},e.prototype.toJSON=function(){return{GlimmerDebug:"<invoke-dynamic-layout>"}},e}()
_t.add(yt.Component,function(e,n){var r,i,o,a,s,l,u=e[1],c=e[2],f=e[3],p=e[4]
if(n.env.hasComponentDefinition(u,n.meta.templateMeta))r=n.template(p),i=new pt(n.meta,c,t.EMPTY_ARRAY),o=n.env.getComponentDefinition(u,n.meta.templateMeta),n.pushComponentManager(o),n.invokeComponent(i,null,f,r&&r.scan())
else{if(p&&p.parameters.length)throw new Error("Compile Error: Cannot find component "+u)
for(n.openPrimitiveElement(u),a=0;a<c.length;a++)_t.compile(c[a],n)
if(n.flushElement(),p)for(s=p.statements,l=0;l<s.length;l++)_t.compile(s[l],n)
n.closeElement()}})
var St=function(){function e(t,n){bt(this,e),this.outerSymbols=t,this.evalInfo=n}return e.prototype.invoke=function(e,t){var n,r,i,o,a,s,l,u=t,c=u.symbolTable.symbols,f=e.scope(),p=f.getEvalScope(),d=e.pushRootScope(c.length,!1)
d.bindCallerScope(f.getCallerScope()),d.bindEvalScope(p),d.bindSelf(f.getSelf())
var h=this.evalInfo,m=this.outerSymbols,g=Object.create(f.getPartialMap())
for(n=0;n<h.length;n++)i=m[(r=h[n])-1],o=f.getSymbol(r),g[i]=o
if(p)for(a=0;a<c.length;a++)s=a+1,void 0!==(l=p[c[a]])&&d.bind(s,l)
d.bindPartialMap(g),e.pushFrame(),e.call(u.handle)},e}()
_t.add(yt.Partial,function(e,r){var i=e[1],o=e[2],a=r.meta,s=a.templateMeta,l=a.symbols
r.startLabels(),r.pushFrame(),r.returnTo("END"),Lt(i,r),r.pushImmediate(1),r.pushImmediate(t.EMPTY_ARRAY),r.pushArgs(!0),r.helper(function(e,t){var r=e.env,i=t.positional.at(0)
return(0,n.map)(i,function(e){if("string"==typeof e&&e){if(!r.hasPartial(e,s))throw new Error('Could not find a partial named "'+e+'"')
return r.lookupPartial(e,s)}if(e)throw new Error('Could not find a partial named "'+String(e)+'"')
return null})}),r.dup(),r.test("simple"),r.enter(2),r.jumpUnless("ELSE"),r.getPartialTemplate(),r.compileDynamicBlock(),r.invokeDynamic(new St(l,o)),r.popScope(),r.popFrame(),r.label("ELSE"),r.exit(),r.return(),r.label("END"),r.popFrame(),r.stopLabels()})
var Ot=function(){function e(t){bt(this,e),this.callerCount=t}return e.prototype.invoke=function(e,t){var n,r=this.callerCount,i=e.stack
if(!t)return e.pushFrame(),void e.pushCallerScope()
var o=t.symbolTable.parameters,a=o?o.length:0,s=Math.min(r,a)
e.pushFrame(),e.pushCallerScope(a>0)
var l=e.scope()
for(n=0;n<s;n++)l.bindSymbol(o[n],i.fromBase(r-n))
e.call(t.handle)},e.prototype.toJSON=function(){return{GlimmerDebug:"<invoke-dynamic-yield caller-count="+this.callerCount+">"}},e}()
_t.add(yt.Yield,function(e,t){var n=e[1],r=It(e[2],t)
t.getBlock(n),t.compileDynamicBlock(),t.invokeDynamic(new Ot(r)),t.popScope(),t.popFrame(),r&&t.pop(r)}),_t.add(yt.Debugger,function(e,t){var n=e[1]
t.debugger(t.meta.symbols,n)}),_t.add(yt.ClientSideStatement,function(e,t){At.compile(e,t)})
var xt=new Tt,Rt=new Tt(1),Nt=r.Expressions
function Lt(e,t){Array.isArray(e)?xt.compile(e,t):t.primitive(e)}function It(e,t){var n
if(!e)return 0
for(n=0;n<e.length;n++)Lt(e[n],t)
return e.length}xt.add(yt.Unknown,function(e,n){var r=e[1]
n.env.hasHelper(r,n.meta.templateMeta)?xt.compile([yt.Helper,r,t.EMPTY_ARRAY,null],n):n.meta.asPartial?n.resolveMaybeLocal(r):(n.getVariable(0),n.getProperty(r))}),xt.add(yt.Concat,function(e,t){var n,r=e[1]
for(n=0;n<r.length;n++)Lt(r[n],t)
t.concat(r.length)}),Rt.add(Je.FunctionExpression,function(e,t){t.function(e[2])}),xt.add(yt.Helper,function(e,t){var n=t.env,r=t.meta,i=e[1],o=e[2],a=e[3]
if(!n.hasHelper(i,r.templateMeta))throw new Error("Compile Error: "+i+" is not a helper")
t.compileArgs(o,a,!0),t.helper(n.lookupHelper(i,r.templateMeta))}),xt.add(yt.Get,function(e,t){var n,r=e[1],i=e[2]
for(t.getVariable(r),n=0;n<i.length;n++)t.getProperty(i[n])}),xt.add(yt.MaybeLocal,function(e,t){var n,r,i=e[1]
for(t.meta.asPartial?(n=i[0],i=i.slice(1),t.resolveMaybeLocal(n)):t.getVariable(0),r=0;r<i.length;r++)t.getProperty(i[r])}),xt.add(yt.Undefined,function(e,t){return t.primitive(void 0)}),xt.add(yt.HasBlock,function(e,t){t.hasBlock(e[1])}),xt.add(yt.HasBlockParams,function(e,t){t.hasBlockParams(e[1])}),xt.add(yt.ClientSideExpression,function(e,t){Rt.compile(e,t)})
var kt=function(){function e(){bt(this,e),this.names=(0,t.dict)(),this.funcs=[]}return e.prototype.add=function(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1},e.prototype.addMissing=function(e){this.missing=e},e.prototype.compile=function(e,n,r,i,o,a){var s,l=this.names[e]
void 0===l?((0,t.assert)(!!this.missing,e+" not found, and no catch-all block handler was registered"),s=(0,this.missing)(e,n,r,i,o,a),(0,t.assert)(!!s,e+" not found, and the catch-all block handler didn't handle it")):(0,this.funcs[l])(n,r,i,o,a)},e}(),Dt=new kt,Pt=function(){function e(){bt(this,e),this.names=(0,t.dict)(),this.funcs=[]}return e.prototype.add=function(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1},e.prototype.addMissing=function(e){this.missing=e},e.prototype.compile=function(e,t){var n,r,i=e[1]
if(!Array.isArray(i))return["expr",i]
var o=void 0,a=void 0,s=void 0
if(i[0]===yt.Helper)o=i[1],a=i[2],s=i[3]
else{if(i[0]!==yt.Unknown)return["expr",i]
o=i[1],a=s=null}var l=this.names[o]
return void 0===l&&this.missing?!1===(n=(0,this.missing)(o,a,s,t))?["expr",i]:n:void 0!==l?!1===(r=(0,this.funcs[l])(o,a,s,t))?["expr",i]:r:["expr",i]},e}()
function Mt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new kt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Pt
return e.add("if",function(e,t,n,r,i){if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),Lt(e[0],i),i.test("environment"),i.enter(1),i.jumpUnless("ELSE"),i.invokeStatic(n),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStatic(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("unless",function(e,t,n,r,i){if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),Lt(e[0],i),i.test("environment"),i.enter(1),i.jumpIf("ELSE"),i.invokeStatic(n),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStatic(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("with",function(e,t,n,r,i){if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),Lt(e[0],i),i.dup(),i.test("environment"),i.enter(2),i.jumpUnless("ELSE"),i.invokeStatic(n,1),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStatic(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("each",function(e,t,n,r,i){i.startLabels(),i.pushFrame(),i.returnTo("END"),t&&"key"===t[0][0]?Lt(t[1][0],i):i.primitive(null),Lt(e[0],i),i.enter(2),i.putIterator(),i.jumpUnless("ELSE"),i.pushFrame(),i.returnTo("ITER"),i.dup(a.fp,1),i.enterList("BODY"),i.label("ITER"),i.iterate("BREAK"),i.label("BODY"),i.invokeStatic(n,2),i.pop(2),i.exit(),i.return(),i.label("BREAK"),i.exitList(),i.popFrame(),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStatic(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("-in-element",function(e,t,n,r,i){var o,a
if(!e||1!==e.length)throw new Error("SYNTAX ERROR: #-in-element requires a single argument")
if(i.startLabels(),i.pushFrame(),i.returnTo("END"),t&&t[0].length){if(o=t[0],a=t[1],1!==o.length||"nextSibling"!==o[0])throw new Error("SYNTAX ERROR: #-in-element does not take a `"+o[0]+"` option")
Lt(a[0],i)}else Lt(null,i)
Lt(e[0],i),i.dup(),i.test("simple"),i.enter(3),i.jumpUnless("ELSE"),i.pushRemoteElement(),i.invokeStatic(n),i.popRemoteElement(),i.label("ELSE"),i.exit(),i.return(),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("-with-dynamic-vars",function(e,t,n,r,i){var o
t?(o=t[0],It(t[1],i),i.pushDynamicScope(),i.bindDynamicScope(o),i.invokeStatic(n),i.popDynamicScope()):i.invokeStatic(n)}),{blocks:e,inlines:t}}function Ft(e,t){_t.compile(e,t)}Mt(Dt,new Pt)
var jt=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.statements=t,this.symbolTable=n,this.compiledStatic=null,this.compiledDynamic=null}return e.prototype.compileStatic=function(e){var t,n,r=this.compiledStatic
return r||((t=function(e,t,n){var r,i=new vt(n,t)
for(r=0;r<e.length;r++)Ft(e[r],i)
return i}(this.statements,this.symbolTable.meta,e)).finalize(),n=t.start,r=this.compiledStatic=new nt(n)),r},e.prototype.compileDynamic=function(e){var t,n=this.compiledDynamic
return n||(t=this.compileStatic(e),n=new rt(t.handle,this.symbolTable)),n},e}()
var Bt=r.Ops,Ht=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.block=t,this.env=n}return e.prototype.scanEntryPoint=function(e){var t=this.block,n=t.statements,r=t.symbols,i=t.hasEval
return new jt(n,{meta:e,symbols:r,hasEval:i})},e.prototype.scanBlock=function(e){var n=this.block.statements
return new jt(n,{meta:e,parameters:t.EMPTY_ARRAY})},e.prototype.scanLayout=function(e,t,n){var i,o,a,s=this.block,l=s.statements,u=s.symbols,c=s.hasEval,f=[],p=void 0,d=!1
for(i=0;i<l.length;i++)if(o=l[i],r.Statements.isComponent(o))a=o[1],this.env.hasComponentDefinition(a,e.templateMeta)?void 0===p&&a===n?(p=a,Ut(a,u,t,f),$t(o,f)):f.push(o):(void 0!==p?f.push([Bt.OpenElement,a]):(p=a,Ut(a,u,t,f)),$t(o,f))
else if(void 0===p&&r.Statements.isOpenElement(o))d=!0,Ut(p=o[1],u,t,f)
else{if(d)if(r.Statements.isFlushElement(o))d=!1
else if(r.Statements.isModifier(o))throw Error('Found modifier "'+o[1]+'" on the top-level element of "'+n+'". Modifiers cannot be on the top-level element')
f.push(o)}return f.push([Bt.ClientSideStatement,Je.DidRenderLayout]),new jt(f,{meta:e,hasEval:c,symbols:u})},e}()
function $t(e,t){var n,r,i,o=e[2],a=e[4]
for(n=0;n<o.length;n++)t.push(o[n])
if(t.push([Bt.FlushElement]),a)for(r=a.statements,i=0;i<r.length;i++)t.push(r[i])
t.push([Bt.CloseElement])}function Ut(e,n,r,i){var o=n.push(Et)
i.push([Bt.ClientSideStatement,Je.OpenComponentElement,e]),i.push([Bt.ClientSideStatement,Je.DidCreateElement]),i.push([Bt.Yield,o,t.EMPTY_ARRAY]),i.push.apply(i,r)}var Wt=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.references=[],this.strings=[],this.expressions=[],this.floats=[],this.arrays=[],this.blocks=[],this.functions=[],this.others=[]}return e.prototype.getReference=function(e){return this.references[e-1]},e.prototype.reference=function(e){var t=this.references.length
return this.references.push(e),t+1},e.prototype.getString=function(e){return this.strings[e-1]},e.prototype.getFloat=function(e){return this.floats[e-1]},e.prototype.float=function(e){return this.floats.push(e)},e.prototype.string=function(e){var t=this.strings.length
return this.strings.push(e),t+1},e.prototype.getExpression=function(e){return this.expressions[e-1]},e.prototype.getArray=function(e){return this.arrays[e-1]},e.prototype.getNames=function(e){var t,n,r=[],i=this.getArray(e)
for(t=0;t<i.length;t++)n=i[t],r[t]=this.getString(n)
return r},e.prototype.array=function(e){var t=this.arrays.length
return this.arrays.push(e),t+1},e.prototype.getBlock=function(e){return this.blocks[e-1]},e.prototype.block=function(e){var t=this.blocks.length
return this.blocks.push(e),t+1},e.prototype.getFunction=function(e){return this.functions[e-1]},e.prototype.function=function(e){var t=this.functions.length
return this.functions.push(e),t+1},e.prototype.getOther=function(e){return this.others[e-1]},e.prototype.other=function(e){var t=this.others.length
return this.others.push(e),t+1},e}(),Kt=["javascript:","vbscript:"],qt=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],zt=["EMBED"],Vt=["href","src","background","action"],Gt=["src"]
function Yt(e,t){return-1!==e.indexOf(t)}function Qt(e,t){return(null===e||Yt(qt,e))&&Yt(Vt,t)}function Xt(e,t){return null!==e&&(Yt(zt,e)&&Yt(Gt,t))}function Jt(e,t){return Qt(e,t)||Xt(e,t)}function Zt(e,t,n,r){var i,o=null
if(null===r||void 0===r)return r
if(Ce(r))return r.toHTML()
o=t?t.tagName.toUpperCase():null
var a=Be(r)
return Qt(o,n)&&(i=e.protocolForURL(a),Yt(Kt,i))?"unsafe:"+a:Xt(o,n)?"unsafe:"+a:a}function en(e,t){var n,r,i,o,a=void 0,s=void 0
return t in e?(s=t,a="prop"):(n=t.toLowerCase())in e?(a="prop",s=n):(a="attr",s=t),"prop"===a&&("style"===s.toLowerCase()||(r=e.tagName,i=s,(o=tn[r.toUpperCase()])&&o[i.toLowerCase()]))&&(a="attr"),{normalized:s,type:a}}var tn={BUTTON:{type:!0,form:!0},INPUT:{type:!0,form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
function nn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function on(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}var an={colgroup:{depth:2,before:"<table><colgroup>",after:"</colgroup></table>"},table:{depth:1,before:"<table>",after:"</table>"},tbody:{depth:2,before:"<table><tbody>",after:"</tbody></table>"},tfoot:{depth:2,before:"<table><tfoot>",after:"</tfoot></table>"},thead:{depth:2,before:"<table><thead>",after:"</thead></table>"},tr:{depth:3,before:"<table><tbody><tr>",after:"</tr></tbody></table>"}}
function sn(e,t,n,r,i){var o,a=t.before+r+t.after
n.innerHTML=a
var s=n
for(o=0;o<t.depth;o++)s=s.childNodes[0]
var l=Sn(s,e,i),u=l[0],c=l[1]
return new oe(e,u,c)}function ln(e){var t=e.createElement("table")
try{t.innerHTML="<tbody></tbody>"}catch(e){}finally{if(0!==t.childNodes.length)return!1}return!0}function un(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function fn(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function pn(e,t,n,r){t.innerHTML="<svg>"+n+"</svg>"
var i=Sn(t.firstChild,e,r),o=i[0],a=i[1]
return new oe(e,o,a)}function dn(e,t){var n=e.createElementNS(t,"svg")
try{n.insertAdjacentHTML("beforeend","<circle></circle>")}catch(e){}finally{return 1!==n.childNodes.length||"http://www.w3.org/2000/svg"!==n.firstChild.namespaceURI}}function hn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function gn(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function vn(e){var t=e.createElement("div")
return t.innerHTML="first",t.insertAdjacentHTML("beforeend","second"),2!==t.childNodes.length}function bn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function yn(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function En(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Tn="http://www.w3.org/2000/svg",_n={foreignObject:1,desc:1,title:1},An=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(function(e){return An[e]=1})
var wn=/[\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/,Cn="undefined"==typeof document?null:document
function Sn(e,t,n){for(var r=e.firstChild,i=null,o=r;o;)i=o,o=o.nextSibling,t.insertBefore(i,n)
return[r,i]}var On,xn=function(){function e(t){En(this,e),this.document=t,this.setupUselessElement()}return e.prototype.setupUselessElement=function(){this.uselessElement=this.document.createElement("div")},e.prototype.createElement=function(e,t){var n=void 0,r=void 0
if(t?(n=t.namespaceURI===Tn||"svg"===e,r=_n[t.tagName]):(n="svg"===e,r=!1),n&&!r){if(An[e])throw new Error("Cannot create a "+e+" inside an SVG context")
return this.document.createElementNS(Tn,e)}return this.document.createElement(e)},e.prototype.insertBefore=function(e,t,n){e.insertBefore(t,n)},e.prototype.insertHTMLBefore=function(e,t,n){return Nn(this.uselessElement,e,t,n)},e.prototype.createTextNode=function(e){return this.document.createTextNode(e)},e.prototype.createComment=function(e){return this.document.createComment(e)},e}();(function(e){var t=function(e){function t(){return En(this,t),bn(this,e.apply(this,arguments))}return yn(t,e),t.prototype.createElementNS=function(e,t){return this.document.createElementNS(e,t)},t.prototype.setAttribute=function(e,t,n,r){r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)},t}(xn)
e.TreeConstruction=t
var n,r,i=t
r=i,i=(n=Cn)&&vn(n)?function(e){function t(n){hn(this,t)
var r=mn(this,e.call(this,n))
return r.uselessComment=r.createComment(""),r}return gn(t,e),t.prototype.insertHTMLBefore=function(t,n,r){if(null===r)return e.prototype.insertHTMLBefore.call(this,t,n,r)
var i=!1,o=n?n.previousSibling:t.lastChild
o&&o instanceof Text&&(i=!0,t.insertBefore(this.uselessComment,n))
var a=e.prototype.insertHTMLBefore.call(this,t,n,r)
return i&&t.removeChild(this.uselessComment),a},t}(r):r,i=function(e,t){if(!e)return t
if(!ln(e))return t
var n=e.createElement("div")
return function(e){function t(){return nn(this,t),rn(this,e.apply(this,arguments))}return on(t,e),t.prototype.insertHTMLBefore=function(t,r,i){if(null===i||""===i)return e.prototype.insertHTMLBefore.call(this,t,r,i)
var o=t.tagName.toLowerCase(),a=an[o]
return void 0===a?e.prototype.insertHTMLBefore.call(this,t,r,i):sn(t,a,n,i,r)},t}(t)}(Cn,i),i=function(e,t,n){if(!e)return t
if(!dn(e,n))return t
var r=e.createElement("div")
return function(e){function t(){return un(this,t),cn(this,e.apply(this,arguments))}return fn(t,e),t.prototype.insertHTMLBefore=function(t,i,o){return null===o||""===o?e.prototype.insertHTMLBefore.call(this,t,i,o):t.namespaceURI!==n?e.prototype.insertHTMLBefore.call(this,t,i,o):pn(t,r,o,i)},t}(t)}(Cn,i,Tn),e.DOMTreeConstruction=i})(On||(On={}))
var Rn=function(e){function t(n){En(this,t)
var r=bn(this,e.call(this,n))
return r.document=n,r.namespace=null,r}return yn(t,e),t.prototype.setAttribute=function(e,t,n){e.setAttribute(t,n)},t.prototype.setAttributeNS=function(e,t,n,r){e.setAttributeNS(t,n,r)},t.prototype.removeAttribute=function(e,t){e.removeAttribute(t)},t.prototype.removeAttributeNS=function(e,t,n){e.removeAttributeNS(t,n)},t.prototype.insertNodeBefore=function(e,t,n){var r,i
return function(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}(t)?(r=t.firstChild,i=t.lastChild,this.insertBefore(e,t,n),new oe(e,r,i)):(this.insertBefore(e,t,n),new ae(e,t))},t.prototype.insertTextBefore=function(e,t,n){var r=this.createTextNode(n)
return this.insertBefore(e,r,t),r},t.prototype.insertBefore=function(e,t,n){e.insertBefore(t,n)},t.prototype.insertAfter=function(e,t,n){this.insertBefore(e,t,n.nextSibling)},t}(xn)
function Nn(e,t,n,r){var i=t,o=e,a=n,s=a?a.previousSibling:i.lastChild,l=void 0
if(null===r||""===r)return new oe(i,null,null)
null===a?(i.insertAdjacentHTML("beforeend",r),l=i.lastChild):a instanceof HTMLElement?(a.insertAdjacentHTML("beforebegin",r),l=a.previousSibling):(i.insertBefore(o,a),o.insertAdjacentHTML("beforebegin",r),l=o.previousSibling,i.removeChild(o))
var u=s?s.nextSibling:i.firstChild
return new oe(i,u,l)}var Ln,In=Rn
Ln=In,In=Cn&&vn(Cn)?function(e){function t(n){hn(this,t)
var r=mn(this,e.call(this,n))
return r.uselessComment=n.createComment(""),r}return gn(t,e),t.prototype.insertHTMLBefore=function(t,n,r){if(null===r)return e.prototype.insertHTMLBefore.call(this,t,n,r)
var i=!1,o=n?n.previousSibling:t.lastChild
o&&o instanceof Text&&(i=!0,t.insertBefore(this.uselessComment,n))
var a=e.prototype.insertHTMLBefore.call(this,t,n,r)
return i&&t.removeChild(this.uselessComment),a},t}(Ln):Ln,In=function(e,t){if(!e)return t
if(!ln(e))return t
var n=e.createElement("div")
return function(e){function t(){return nn(this,t),rn(this,e.apply(this,arguments))}return on(t,e),t.prototype.insertHTMLBefore=function(t,r,i){if(null===i||""===i)return e.prototype.insertHTMLBefore.call(this,t,r,i)
var o=t.tagName.toLowerCase(),a=an[o]
return void 0===a?e.prototype.insertHTMLBefore.call(this,t,r,i):sn(t,a,n,i,r)},t}(t)}(Cn,In)
var kn=In=function(e,t,n){if(!e)return t
if(!dn(e,n))return t
var r=e.createElement("div")
return function(e){function t(){return un(this,t),cn(this,e.apply(this,arguments))}return fn(t,e),t.prototype.insertHTMLBefore=function(t,i,o){return null===o||""===o?e.prototype.insertHTMLBefore.call(this,t,i,o):t.namespaceURI!==n?e.prototype.insertHTMLBefore.call(this,t,i,o):pn(t,r,o,i)},t}(t)}(Cn,In,Tn),Dn=On.DOMTreeConstruction
function Pn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function Mn(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function Fn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jn(e,t){var n=e.tagName
if(e.namespaceURI===Tn)return Hn(n,t)
var r=en(e,t),i=r.type,o=r.normalized
return"attr"===i?Hn(n,o):Bn(n,o)}function Bn(e,t){return Jt(e,t)?new Kn(t):function(e,t){return("INPUT"===e||"TEXTAREA"===e)&&"value"===t}(e,t)?qn:function(e,t){return"OPTION"===e&&"selected"===t}(e,t)?zn:new Un(t)}function Hn(e,t){return Jt(e,t)?new Vn(t):new $n(t)}var $n=function(){function e(t){Fn(this,e),this.attr=t}return e.prototype.setAttribute=function(e,t,n,r){var i=e.getAppendOperations(),o=function(e){if(!1===e||void 0===e||null===e)return null
if(!0===e)return""
if("function"==typeof e)return null
return String(e)}(n)
Wn(o)||i.setAttribute(t,this.attr,o,r)},e.prototype.updateAttribute=function(e,t,n,r){null===n||void 0===n||!1===n?r?e.getDOM().removeAttributeNS(t,r,this.attr):e.getDOM().removeAttribute(t,this.attr):this.setAttribute(e,t,n)},e}(),Un=function(e){function t(){return Fn(this,t),Pn(this,e.apply(this,arguments))}return Mn(t,e),t.prototype.setAttribute=function(e,t,n){Wn(n)||(t[this.attr]=n)},t.prototype.removeAttribute=function(e,t,n){var r=this.attr
n?e.getDOM().removeAttributeNS(t,n,r):e.getDOM().removeAttribute(t,r)},t.prototype.updateAttribute=function(e,t,n,r){t[this.attr]=n,Wn(n)&&this.removeAttribute(e,t,r)},t}($n)
function Wn(e){return null===e||void 0===e}var Kn=function(e){function t(){return Fn(this,t),Pn(this,e.apply(this,arguments))}return Mn(t,e),t.prototype.setAttribute=function(t,n,r){e.prototype.setAttribute.call(this,t,n,Zt(t,n,this.attr,r))},t.prototype.updateAttribute=function(t,n,r){e.prototype.updateAttribute.call(this,t,n,Zt(t,n,this.attr,r))},t}(Un)
var qn=new(function(e){function t(){return Fn(this,t),Pn(this,e.apply(this,arguments))}return Mn(t,e),t.prototype.setAttribute=function(e,t,n){t.value=Be(n)},t.prototype.updateAttribute=function(e,t,n){var r=t,i=r.value,o=Be(n)
i!==o&&(r.value=o)},t}($n))("value")
var zn=new(function(e){function t(){return Fn(this,t),Pn(this,e.apply(this,arguments))}return Mn(t,e),t.prototype.setAttribute=function(e,t,n){null!==n&&void 0!==n&&!1!==n&&(t.selected=!0)},t.prototype.updateAttribute=function(e,t,n){var r=t
r.selected=!!n},t}(Un))("selected"),Vn=function(e){function t(){return Fn(this,t),Pn(this,e.apply(this,arguments))}return Mn(t,e),t.prototype.setAttribute=function(t,n,r){e.prototype.setAttribute.call(this,t,n,Zt(t,n,this.attr,r))},t.prototype.updateAttribute=function(t,n,r){e.prototype.updateAttribute.call(this,t,n,Zt(t,n,this.attr,r))},t}($n),Gn=function(){function e(e,t){var n,r
for(n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function Yn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Qn,Xn=function(){function e(t,n,r,i){Yn(this,e),this.slots=t,this.callerScope=n,this.evalScope=r,this.partialMap=i}return e.root=function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=new Array(r+1)
for(n=0;n<=r;n++)i[n]=m
return new e(i,null,null,null).init({self:t})},e.sized=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=new Array(n+1)
for(t=0;t<=n;t++)r[t]=m
return new e(r,null,null,null)},e.prototype.init=function(e){var t=e.self
return this.slots[0]=t,this},e.prototype.getSelf=function(){return this.get(0)},e.prototype.getSymbol=function(e){return this.get(e)},e.prototype.getBlock=function(e){return this.get(e)},e.prototype.getEvalScope=function(){return this.evalScope},e.prototype.getPartialMap=function(){return this.partialMap},e.prototype.bind=function(e,t){this.set(e,t)},e.prototype.bindSelf=function(e){this.set(0,e)},e.prototype.bindSymbol=function(e,t){this.set(e,t)},e.prototype.bindBlock=function(e,t){this.set(e,t)},e.prototype.bindEvalScope=function(e){this.evalScope=e},e.prototype.bindPartialMap=function(e){this.partialMap=e},e.prototype.bindCallerScope=function(e){this.callerScope=e},e.prototype.getCallerScope=function(){return this.callerScope},e.prototype.child=function(){return new e(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)},e.prototype.get=function(e){if(e>=this.slots.length)throw new RangeError("BUG: cannot get $"+e+" from scope; length="+this.slots.length)
return this.slots[e]},e.prototype.set=function(e,t){if(e>=this.slots.length)throw new RangeError("BUG: cannot get $"+e+" from scope; length="+this.slots.length)
this.slots[e]=t},e}(),Jn=function(){function e(){Yn(this,e),this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}return e.prototype.didCreate=function(e,t){this.createdComponents.push(e),this.createdManagers.push(t)},e.prototype.didUpdate=function(e,t){this.updatedComponents.push(e),this.updatedManagers.push(t)},e.prototype.scheduleInstallModifier=function(e,t){this.scheduledInstallManagers.push(t),this.scheduledInstallModifiers.push(e)},e.prototype.scheduleUpdateModifier=function(e,t){this.scheduledUpdateModifierManagers.push(t),this.scheduledUpdateModifiers.push(e)},e.prototype.didDestroy=function(e){this.destructors.push(e)},e.prototype.commit=function(){var e,t,n,r,i,o,a,s,l,u,c,f=this.createdComponents,p=this.createdManagers
for(e=0;e<f.length;e++)t=f[e],p[e].didCreate(t)
var d=this.updatedComponents,h=this.updatedManagers
for(n=0;n<d.length;n++)r=d[n],h[n].didUpdate(r)
var m=this.destructors
for(i=0;i<m.length;i++)m[i].destroy()
var g=this.scheduledInstallManagers,v=this.scheduledInstallModifiers
for(o=0;o<g.length;o++)a=g[o],s=v[o],a.install(s)
var b=this.scheduledUpdateModifierManagers,y=this.scheduledUpdateModifiers
for(l=0;l<b.length;l++)u=b[l],c=y[l],u.update(c)},e}(),Zn=function(){function e(t){Yn(this,e),this.heap=t,this.offset=0}return Gn(e,[{key:"type",get:function(){return this.heap.getbyaddr(this.offset)}},{key:"op1",get:function(){return this.heap.getbyaddr(this.offset+1)}},{key:"op2",get:function(){return this.heap.getbyaddr(this.offset+2)}},{key:"op3",get:function(){return this.heap.getbyaddr(this.offset+3)}}]),e}();(function(e){e[e.Allocated=0]="Allocated",e[e.Freed=1]="Freed",e[e.Purged=2]="Purged",e[e.Pointer=3]="Pointer"})(Qn||(Qn={}))
var er=function(){function e(){Yn(this,e),this.heap=[],this.offset=0,this.handle=0,this.table=[]}return e.prototype.push=function(e){this.heap[this.offset++]=e},e.prototype.getbyaddr=function(e){return this.heap[e]},e.prototype.setbyaddr=function(e,t){this.heap[e]=t},e.prototype.malloc=function(){this.table.push(this.offset,0,0)
var e=this.handle
return this.handle+=3,e},e.prototype.finishMalloc=function(e){var t=this.table[e],n=this.offset
this.table[e+1]=n-t},e.prototype.size=function(){return this.offset},e.prototype.getaddr=function(e){return this.table[e]},e.prototype.gethandle=function(e){this.table.push(e,0,Qn.Pointer)
var t=this.handle
return this.handle+=3,t},e.prototype.sizeof=function(){return-1},e.prototype.free=function(e){this.table[e+2]=1},e.prototype.compact=function(){var e,t,n,r,i,o=0,a=this.table,s=this.table.length,l=this.heap
for(e=0;e<s;e+=3)if(t=a[e],n=a[e+1],(r=a[e+2])!==Qn.Purged)if(r===Qn.Freed)a[e+2]=2,o+=n
else if(r===Qn.Allocated){for(i=t;i<=e+n;i++)l[i-o]=l[i]
a[e]=t-o}else r===Qn.Pointer&&(a[e]=t-o)
this.offset=this.offset-o},e}(),tr=function(){function e(){Yn(this,e),this.heap=new er,this._opcode=new Zn(this.heap),this.constants=new Wt}return e.prototype.opcode=function(e){return this._opcode.offset=e,this._opcode},e}(),nr=function(){function e(t){var n=t.appendOperations,r=t.updateOperations
Yn(this,e),this._macros=null,this._transaction=null,this.program=new tr,this.appendOperations=n,this.updateOperations=r}return e.prototype.toConditionalReference=function(e){return new y(e)},e.prototype.getAppendOperations=function(){return this.appendOperations},e.prototype.getDOM=function(){return this.updateOperations},e.prototype.getIdentity=function(e){return(0,t.ensureGuid)(e)+""},e.prototype.begin=function(){(0,t.assert)(!this._transaction,"a glimmer transaction was begun, but one already exists. You may have a nested transaction"),this._transaction=new Jn},e.prototype.didCreate=function(e,t){this.transaction.didCreate(e,t)},e.prototype.didUpdate=function(e,t){this.transaction.didUpdate(e,t)},e.prototype.scheduleInstallModifier=function(e,t){this.transaction.scheduleInstallModifier(e,t)},e.prototype.scheduleUpdateModifier=function(e,t){this.transaction.scheduleUpdateModifier(e,t)},e.prototype.didDestroy=function(e){this.transaction.didDestroy(e)},e.prototype.commit=function(){var e=this.transaction
this._transaction=null,e.commit()},e.prototype.attributeFor=function(e,t,n,r){return jn(e,t)},e.prototype.macros=function(){var e=this._macros
return e||(this._macros=e=this.populateBuiltins()),e},e.prototype.populateBuiltins=function(){return Mt()},Gn(e,[{key:"transaction",get:function(){return this._transaction}}]),e}()
var rr=function(){function e(e,t){var n,r
for(n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function ir(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function or(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){var n,r,i,o=Object.getOwnPropertyNames(t)
for(n=0;n<o.length;n++)r=o[n],(i=Object.getOwnPropertyDescriptor(t,r))&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}(e,t))}function ar(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var sr=function(){function e(n,r){var i=r.alwaysRevalidate,o=void 0!==i&&i
ar(this,e),this.frameStack=new t.Stack,this.env=n,this.constants=n.program.constants,this.dom=n.getDOM(),this.alwaysRevalidate=o}return e.prototype.execute=function(e,t){var n,r=this.frameStack
for(this.try(e,t);!r.isEmpty();)null!==(n=this.frame.nextStatement())?n.evaluate(this):this.frameStack.pop()},e.prototype.goto=function(e){this.frame.goto(e)},e.prototype.try=function(e,t){this.frameStack.push(new pr(this,e,t))},e.prototype.throw=function(){this.frame.handleException(),this.frameStack.pop()},e.prototype.evaluateOpcode=function(e){e.evaluate(this)},rr(e,[{key:"frame",get:function(){return this.frameStack.current}}]),e}(),lr=function(e){function n(t,r,i,o){ar(this,n)
var a=ir(this,e.call(this))
a.start=t,a.type="block",a.next=null,a.prev=null
var s=r.env,l=r.scope,u=r.dynamicScope,c=r.stack
return a.children=o,a.env=s,a.scope=l,a.dynamicScope=u,a.stack=c,a.bounds=i,a}return or(n,e),n.prototype.parentElement=function(){return this.bounds.parentElement()},n.prototype.firstNode=function(){return this.bounds.firstNode()},n.prototype.lastNode=function(){return this.bounds.lastNode()},n.prototype.evaluate=function(e){e.try(this.children,null)},n.prototype.destroy=function(){this.bounds.destroy()},n.prototype.didDestroy=function(){this.env.didDestroy(this.bounds)},n.prototype.toJSON=function(){var e=(0,t.dict)()
return e.guid=""+this._guid,{guid:this._guid,type:this.type,details:e,children:this.children.toArray().map(function(e){return e.toJSON()})}},n}(l),ur=function(e){function r(t,i,o,a){ar(this,r)
var s=ir(this,e.call(this,t,i,o,a))
return s.type="try",s.tag=s._tag=n.UpdatableTag.create(n.CONSTANT_TAG),s}return or(r,e),r.prototype.didInitializeChildren=function(){this._tag.inner.update((0,n.combineSlice)(this.children))},r.prototype.evaluate=function(e){e.try(this.children,this)},r.prototype.handleException=function(){var e=this,n=this.env,r=this.bounds,i=this.children,o=this.scope,a=this.dynamicScope,s=this.start,l=this.stack,u=this.prev,c=this.next
i.clear()
var f=me.resume(n,r,r.reset(n)),p=new vr(n,o,a,f),d=new t.LinkedList
p.execute(s,function(t){t.stack=gr.restore(l),t.updatingOpcodeStack.push(d),t.updateWith(e),t.updatingOpcodeStack.push(i)}),this.prev=u,this.next=c},r.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this),n=t.details
return n||(n=t.details={}),e.prototype.toJSON.call(this)},r}(lr),cr=function(){function e(t,n){ar(this,e),this.opcode=t,this.marker=n,this.didInsert=!1,this.didDelete=!1,this.map=t.map,this.updating=t.children}return e.prototype.insert=function(e,n,r,i){var o=this.map,a=this.opcode,s=this.updating,l=null,u=null
l=i?(u=o[i]).bounds.firstNode():this.marker
var c=a.vmForInsertion(l),f=null,p=a.start
c.execute(p,function(i){o[e]=f=i.iterate(r,n),i.updatingOpcodeStack.push(new t.LinkedList),i.updateWith(f),i.updatingOpcodeStack.push(f.children)}),s.insertBefore(f,u),this.didInsert=!0},e.prototype.retain=function(){},e.prototype.move=function(e,t,n,r){var i=this.map,o=this.updating,a=i[e],s=i[r]||null
se(a,r?s.firstNode():this.marker),o.remove(a),o.insertBefore(a,s)},e.prototype.delete=function(e){var t=this.map,n=t[e]
n.didDestroy(),le(n),this.updating.remove(n),delete t[e],this.didDelete=!0},e.prototype.done=function(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)},e}(),fr=function(e){function r(i,o,a,s,l){ar(this,r)
var u=ir(this,e.call(this,i,o,a,s))
u.type="list-block",u.map=(0,t.dict)(),u.lastIterated=n.INITIAL,u.artifacts=l
var c=u._tag=n.UpdatableTag.create(n.CONSTANT_TAG)
return u.tag=(0,n.combine)([l.tag,c]),u}return or(r,e),r.prototype.didInitializeChildren=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.lastIterated=this.artifacts.tag.value(),e&&this._tag.inner.update((0,n.combineSlice)(this.children))},r.prototype.evaluate=function(t){var r,i,o,a,s=this.artifacts,l=this.lastIterated
s.tag.validate(l)||(r=this.bounds,o=(i=t.dom).createComment(""),i.insertAfter(r.parentElement(),o,r.lastNode()),a=new cr(this,o),new n.IteratorSynchronizer({target:a,artifacts:s}).sync(),this.parentElement().removeChild(o)),e.prototype.evaluate.call(this,t)},r.prototype.vmForInsertion=function(e){var t=this.env,n=this.scope,r=this.dynamicScope,i=me.forInitialRender(this.env,this.bounds.parentElement(),e)
return new vr(t,n,r,i)},r.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this),n=this.map,r=Object.keys(n).map(function(e){return JSON.stringify(e)+": "+n[e]._guid}).join(", "),i=t.details
return i||(i=t.details={}),i.map="{"+r+"}",t},r}(lr),pr=function(){function e(t,n,r){ar(this,e),this.vm=t,this.ops=n,this.exceptionHandler=r,this.vm=t,this.ops=n,this.current=n.head()}return e.prototype.goto=function(e){this.current=e},e.prototype.nextStatement=function(){var e=this.current,t=this.ops
return e&&(this.current=t.nextNode(e)),e},e.prototype.handleException=function(){this.exceptionHandler&&this.exceptionHandler.handleException()},e}()
var dr=function(){function e(t,n,r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.env=t,this.updating=n,this.bounds=r}return e.prototype.rerender=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alwaysRevalidate:!1}).alwaysRevalidate,t=void 0!==e&&e,n=this.env,r=this.updating
new sr(n,{alwaysRevalidate:t}).execute(r,this)},e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.opcodes=function(){return this.updating},e.prototype.handleException=function(){throw"this should never happen"},e.prototype.destroy=function(){this.bounds.destroy(),le(this.bounds)},e}(),hr=function(){function e(e,t){var n,r
for(n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function mr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var gr=function(){function e(t,n,r){mr(this,e),this.stack=t,this.fp=n,this.sp=r}return e.empty=function(){return new this([],0,-1)},e.restore=function(e){return new this(e.slice(),0,e.length-1)},e.prototype.isEmpty=function(){return-1===this.sp},e.prototype.push=function(e){this.stack[++this.sp]=e},e.prototype.dup=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sp
this.push(this.stack[e])},e.prototype.pop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.stack[this.sp]
return this.sp-=e,t},e.prototype.peek=function(){return this.stack[this.sp]},e.prototype.fromBase=function(e){return this.stack[this.fp-e]},e.prototype.fromTop=function(e){return this.stack[this.sp-e]},e.prototype.capture=function(e){var t=this.sp+1
return this.stack.slice(t-e,t)},e.prototype.reset=function(){this.stack.length=0},e.prototype.toArray=function(){return this.stack.slice(this.fp,this.sp+1)},e}(),vr=function(){function e(n,r,i,o){mr(this,e),this.env=n,this.elementStack=o,this.dynamicScopeStack=new t.Stack,this.scopeStack=new t.Stack,this.updatingOpcodeStack=new t.Stack,this.cacheGroups=new t.Stack,this.listBlockStack=new t.Stack,this.stack=gr.empty(),this.pc=-1,this.ra=-1,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.env=n,this.heap=n.program.heap,this.constants=n.program.constants,this.elementStack=o,this.scopeStack.push(r),this.dynamicScopeStack.push(i)}return e.prototype.fetch=function(e){this.stack.push(this[a[e]])},e.prototype.load=function(e){this[a[e]]=this.stack.pop()},e.prototype.fetchValue=function(e){return this[a[e]]},e.prototype.loadValue=function(e,t){this[a[e]]=t},e.prototype.pushFrame=function(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1},e.prototype.popFrame=function(){this.sp=this.fp-1,this.ra=this.stack.fromBase(0),this.fp=this.stack.fromBase(-1)},e.prototype.goto=function(e){this.pc=(0,t.typePos)(this.pc+e)},e.prototype.call=function(e){var t=this.heap.getaddr(e)
this.ra=this.pc,this.pc=t},e.prototype.returnTo=function(e){this.ra=(0,t.typePos)(this.pc+e)},e.prototype.return=function(){this.pc=this.ra},e.initial=function(n,r,i,o,a){var s=new e(n,Xn.root(r,a.symbolTable.symbols.length),i,o)
return s.pc=s.heap.getaddr(a.handle),s.updatingOpcodeStack.push(new t.LinkedList),s},e.prototype.capture=function(e){return{dynamicScope:this.dynamicScope(),env:this.env,scope:this.scope(),stack:this.stack.capture(e)}},e.prototype.beginCacheGroup=function(){this.cacheGroups.push(this.updating().tail())},e.prototype.commitCacheGroup=function(){var e=new H("END"),r=this.updating(),i=this.cacheGroups.pop(),o=i?r.nextNode(i):r.head(),a=r.tail(),s=(0,n.combineSlice)(new t.ListSlice(o,a)),l=new j(s,e)
r.insertBefore(l,o),r.append(new B(l)),r.append(e)},e.prototype.enter=function(e){var n=new t.LinkedList,r=this.capture(e),i=this.elements().pushUpdatableBlock(),o=new ur(this.heap.gethandle(this.pc),r,i,n)
this.didEnter(o)},e.prototype.iterate=function(e,n){var r=this.stack
r.push(n),r.push(e)
var i=this.capture(2),o=this.elements().pushUpdatableBlock()
return new ur(this.heap.gethandle(this.pc),i,o,new t.LinkedList)},e.prototype.enterItem=function(e,t){this.listBlock().map[e]=t,this.didEnter(t)},e.prototype.enterList=function(e){var n=new t.LinkedList,r=this.capture(0),i=this.elements().pushBlockList(n),o=this.stack.peek().artifacts,a=this.heap.gethandle((0,t.typePos)(this.pc+e)),s=new fr(a,r,i,n,o)
this.listBlockStack.push(s),this.didEnter(s)},e.prototype.didEnter=function(e){this.updateWith(e),this.updatingOpcodeStack.push(e.children)},e.prototype.exit=function(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()},e.prototype.exitList=function(){this.exit(),this.listBlockStack.pop()},e.prototype.updateWith=function(e){this.updating().append(e)},e.prototype.listBlock=function(){return this.listBlockStack.current},e.prototype.updating=function(){return this.updatingOpcodeStack.current},e.prototype.elements=function(){return this.elementStack},e.prototype.scope=function(){return this.scopeStack.current},e.prototype.dynamicScope=function(){return this.dynamicScopeStack.current},e.prototype.pushChildScope=function(){this.scopeStack.push(this.scope().child())},e.prototype.pushCallerScope=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.scope().getCallerScope()
this.scopeStack.push(e?t.child():t)},e.prototype.pushDynamicScope=function(){var e=this.dynamicScope().child()
return this.dynamicScopeStack.push(e),e},e.prototype.pushRootScope=function(e,t){var n=Xn.sized(e)
return t&&n.bindCallerScope(this.scope()),this.scopeStack.push(n),n},e.prototype.popScope=function(){this.scopeStack.pop()},e.prototype.popDynamicScope=function(){this.dynamicScopeStack.pop()},e.prototype.newDestroyable=function(e){this.elements().newDestroyable(e)},e.prototype.getSelf=function(){return this.scope().getSelf()},e.prototype.referenceForSymbol=function(e){return this.scope().getSymbol(e)},e.prototype.execute=function(e,t){this.pc=this.heap.getaddr(e),t&&t(this)
for(var n=void 0;!(n=this.next()).done;);return n.value},e.prototype.next=function(){var e=this.env,t=this.updatingOpcodeStack,n=this.elementStack,r=this.nextStatement(e),i=void 0
return null!==r?(s.evaluate(this,r,r.type),i={done:!1,value:null}):(this.stack.reset(),i={done:!0,value:new dr(e,t.pop(),n.popBlock())}),i},e.prototype.nextStatement=function(e){var t=this.pc
if(-1===t)return null
var n=e.program
return this.pc+=4,n.opcode(t)},e.prototype.evaluateOpcode=function(e){s.evaluate(this,e,e.type)},e.prototype.bindDynamicScope=function(e){var t,n,r=this.dynamicScope()
for(t=e.length-1;t>=0;t--)n=this.constants.getString(e[t]),r.set(n,this.stack.pop())},hr(e,[{key:"fp",get:function(){return this.stack.fp},set:function(e){this.stack.fp=e}},{key:"sp",get:function(){return this.stack.sp},set:function(e){this.stack.sp=e}}]),e}()
function br(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var yr=function(){function e(t){br(this,e),this.vm=t}return e.prototype.next=function(){return this.vm.next()},e}(),Er=0,Tr=function(){function e(t,n,r,i){br(this,e),this.id=t,this.meta=n,this.env=r,this.entryPoint=null,this.layout=null,this.partial=null,this.block=null,this.scanner=new Ht(i,r),this.symbols=i.symbols,this.hasEval=i.hasEval}return e.prototype.render=function(e,t,n){var r=this.env,i=me.forInitialRender(r,t,null),o=this.asEntryPoint().compileDynamic(r),a=vr.initial(r,e,n,i,o)
return new yr(a)},e.prototype.asEntryPoint=function(){return this.entryPoint||(this.entryPoint=this.scanner.scanEntryPoint(this.compilationMeta())),this.entryPoint},e.prototype.asLayout=function(e,n){return this.layout||(this.layout=this.scanner.scanLayout(this.compilationMeta(),n||t.EMPTY_ARRAY,e)),this.layout},e.prototype.asPartial=function(){return this.partial||(this.partial=this.scanner.scanEntryPoint(this.compilationMeta(!0))),this.partial},e.prototype.asBlock=function(){return this.block||(this.block=this.scanner.scanBlock(this.compilationMeta())),this.block},e.prototype.compilationMeta=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{templateMeta:this.meta,symbols:this.symbols,asPartial:e}},e}()
var _r,Ar=function(){function e(t,r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.scope=t,this.nameRef=r
var i=this.varTag=n.UpdatableTag.create(n.CONSTANT_TAG)
this.tag=(0,n.combine)([r.tag,i])}return e.prototype.value=function(){return this.getVar().value()},e.prototype.get=function(e){return this.getVar().get(e)},e.prototype.getVar=function(){var e=String(this.nameRef.value()),t=this.scope.get(e)
return this.varTag.inner.update(t.tag),t},e}();(function(e){e[e.Element=0]="Element",e[e.Attribute=1]="Attribute",e[e.Text=2]="Text",e[e.CdataSection=3]="CdataSection",e[e.EntityReference=4]="EntityReference",e[e.Entity=5]="Entity",e[e.ProcessingInstruction=6]="ProcessingInstruction",e[e.Comment=7]="Comment",e[e.Document=8]="Document",e[e.DocumentType=9]="DocumentType",e[e.DocumentFragment=10]="DocumentFragment",e[e.Notation=11]="Notation"})(_r||(_r={}))
var wr=Object.freeze({get NodeType(){return _r}})
e.Simple=wr,e.templateFactory=function(e){var n=e.id,r=e.meta,i=e.block,o=void 0,a=n||"client-"+Er++
return{id:a,meta:r,create:function(e,n){var s=n?(0,t.assign)({},n,r):r
return o||(o=JSON.parse(i)),new Tr(a,s,e,o)}}},e.NULL_REFERENCE=g,e.UNDEFINED_REFERENCE=m,e.PrimitiveReference=p,e.ConditionalReference=y,e.OpcodeBuilderDSL=vt,e.compileLayout=function(e,t){var n=new at(t)
return e.compile(n),n.compile()},e.CompiledStaticTemplate=nt,e.CompiledDynamicTemplate=rt,e.IAttributeManager=$n,e.AttributeManager=$n,e.PropertyManager=Un,e.INPUT_VALUE_PROPERTY_MANAGER=qn,e.defaultManagers=jn,e.defaultAttributeManagers=Hn,e.defaultPropertyManagers=Bn,e.readDOMAttr=function(e,t){var n=e.namespaceURI===Tn,r=en(e,t),i=r.type,o=r.normalized
return n?e.getAttribute(o):"attr"===i?e.getAttribute(o):e[o]},e.Register=a,e.debugSlice=function(){},e.normalizeTextValue=Be,e.setDebuggerCallback=function(e){Qe=e},e.resetDebuggerCallback=function(){Qe=Ye},e.getDynamicVar=function(e,t){var n=e.dynamicScope(),r=t.positional.at(0)
return new Ar(n,r)},e.BlockMacros=kt,e.InlineMacros=Pt,e.compileList=It,e.compileExpression=Lt,e.UpdatingVM=sr,e.RenderResult=dr
e.isSafeString=Ce,e.Scope=Xn,e.Environment=nr,e.PartialDefinition=function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.name=t,this.template=n},e.ComponentDefinition=function e(t,n,r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this[Ee]=!0,this.name=t,this.manager=n,this.ComponentClass=r},e.isComponentDefinition=Te,e.DOMChanges=kn,e.IDOMChanges=Rn,e.DOMTreeConstruction=Dn,e.isWhitespace=function(e){return wn.test(e)},e.insertHTMLBefore=Nn,e.ElementStack=me,e.ConcreteBounds=oe}),e("@glimmer/util",["exports"],function(e){"use strict"
var t,n="http://www.w3.org/1999/xlink",r="http://www.w3.org/XML/1998/namespace",i="http://www.w3.org/2000/xmlns/",o={"xlink:actuate":n,"xlink:arcrole":n,"xlink:href":n,"xlink:role":n,"xlink:show":n,"xlink:title":n,"xlink:type":n,"xml:base":r,"xml:lang":r,"xml:space":r,xmlns:i,"xmlns:xlink":i}
function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Warn=2]="Warn",e[e.Error=3]="Error"})(t||(e.LogLevel=t={}))
var s=function(){function e(){a(this,e)}return e.prototype.log=function(){},e.prototype.warn=function(){},e.prototype.error=function(){},e.prototype.trace=function(){},e}(),l=void 0,u=function(){function e(t){var n=t.console,r=t.level
a(this,e),this.f=l,this.force=l,this.console=n,this.level=r}return e.prototype.skipped=function(e){return e<this.level},e.prototype.trace=function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).stackTrace,r=void 0!==n&&n
this.skipped(t.Trace)||(this.console.log(e),r&&this.console.trace())},e.prototype.debug=function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).stackTrace,r=void 0!==n&&n
this.skipped(t.Debug)||(this.console.log(e),r&&this.console.trace())},e.prototype.warn=function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).stackTrace,r=void 0!==n&&n
this.skipped(t.Warn)||(this.console.warn(e),r&&this.console.trace())},e.prototype.error=function(e){this.skipped(t.Error)||this.console.error(e)},e}(),c="undefined"==typeof console?new s:console
l=new u({console:c,level:t.Trace})
var f=new u({console:c,level:t.Debug}),p=Object.keys,d=0
function h(e){return e._guid=++d}function m(e){return e._guid||h(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var v=Object.create(null,{constructor:{value:void 0,enumerable:!1,writable:!0}})
function b(){}function y(){return new b}b.prototype=v
var E=function(){function e(){g(this,e),this.dict=y()}return e.prototype.add=function(e){return"string"==typeof e?this.dict[e]=e:this.dict[m(e)]=e,this},e.prototype.delete=function(e){"string"==typeof e?delete this.dict[e]:e._guid&&delete this.dict[e._guid]},e.prototype.forEach=function(e){var t,n=this.dict,r=Object.keys(n)
for(t=0;r.length;t++)e(n[r[t]])},e.prototype.toArray=function(){return Object.keys(this.dict)},e}(),T=function(){function e(){g(this,e),this.stack=[],this.current=null}return e.prototype.toArray=function(){return this.stack},e.prototype.push=function(e){this.current=e,this.stack.push(e)},e.prototype.pop=function(){var e=this.stack.pop(),t=this.stack.length
return this.current=0===t?null:this.stack[t-1],void 0===e?null:e},e.prototype.isEmpty=function(){return 0===this.stack.length},e}()
function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var A=function(){function e(){_(this,e),this.clear()}return e.fromSlice=function(t){var n=new e
return t.forEachNode(function(e){return n.append(e.clone())}),n},e.prototype.head=function(){return this._head},e.prototype.tail=function(){return this._tail},e.prototype.clear=function(){this._head=this._tail=null},e.prototype.isEmpty=function(){return null===this._head},e.prototype.toArray=function(){var e=[]
return this.forEachNode(function(t){return e.push(t)}),e},e.prototype.splice=function(e,t,n){var r=void 0
null===n?(r=this._tail,this._tail=t):(r=n.prev,t.next=n,n.prev=t),r&&(r.next=e,e.prev=r)},e.prototype.nextNode=function(e){return e.next},e.prototype.prevNode=function(e){return e.prev},e.prototype.forEachNode=function(e){for(var t=this._head;null!==t;)e(t),t=t.next},e.prototype.contains=function(e){for(var t=this._head;null!==t;){if(t===e)return!0
t=t.next}return!1},e.prototype.insertBefore=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return null===t?this.append(e):(t.prev?t.prev.next=e:this._head=e,e.prev=t.prev,e.next=t,t.prev=e,e)},e.prototype.append=function(e){var t=this._tail
return t?(t.next=e,e.prev=t,e.next=null):this._head=e,this._tail=e},e.prototype.pop=function(){return this._tail?this.remove(this._tail):null},e.prototype.prepend=function(e){return this._head?this.insertBefore(e,this._head):this._head=this._tail=e},e.prototype.remove=function(e){return e.prev?e.prev.next=e.next:this._head=e.next,e.next?e.next.prev=e.prev:this._tail=e.prev,e},e}(),w=function(){function e(t,n){_(this,e),this._head=t,this._tail=n}return e.toList=function(e){var t=new A
return e.forEachNode(function(e){return t.append(e.clone())}),t},e.prototype.forEachNode=function(e){for(var t=this._head;null!==t;)e(t),t=this.nextNode(t)},e.prototype.contains=function(e){for(var t=this._head;null!==t;){if(t===e)return!0
t=t.next}return!1},e.prototype.head=function(){return this._head},e.prototype.tail=function(){return this._tail},e.prototype.toArray=function(){var e=[]
return this.forEachNode(function(t){return e.push(t)}),e},e.prototype.nextNode=function(e){return e===this._tail?null:e.next},e.prototype.prevNode=function(e){return e===this._head?null:e.prev},e.prototype.isEmpty=function(){return!1},e}(),C=new w(null,null),S=function(){if(!("function"==typeof WeakMap))return!1
var e=new WeakMap
return"[object WeakMap]"===Object.prototype.toString.call(e)}(),O="undefined"!=typeof Uint32Array?Uint32Array:Array,x=S?Object.freeze([]):[]
e.getAttrNamespace=function(e){return o[e]||null},e.assert=function(e,t){if(!e)throw new Error(t||"assertion failure")},e.LOGGER=f,e.Logger=u,e.LogLevel=t,e.assign=function(e){var t,n,r,i,o
for(t=1;t<arguments.length;t++)if(null!==(n=arguments[t])&&"object"==typeof n)for(r=p(n),i=0;i<r.length;i++)e[o=r[i]]=n[o]
return e},e.fillNulls=function(e){var t,n=new Array(e)
for(t=0;t<e;t++)n[t]=null
return n},e.ensureGuid=m,e.initializeGuid=h,e.Stack=T,e.DictSet=E,e.dict=y,e.EMPTY_SLICE=C,e.LinkedList=A,e.ListNode=function e(t){_(this,e),this.next=null,this.prev=null,this.value=t},e.ListSlice=w,e.A=O,e.EMPTY_ARRAY=x,e.HAS_NATIVE_WEAKMAP=S,e.unwrap=function(e){if(null===e||void 0===e)throw new Error("Expected value to be present")
return e},e.expect=function(e,t){if(null===e||void 0===e)throw new Error(t)
return e},e.unreachable=function(){return new Error("unreachable")},e.typePos=function(e){return e-4}}),e("@glimmer/wire-format",["exports"],function(e){"use strict"
var t,n,r
function i(e){return function(t){return Array.isArray(t)&&t[0]===e}}(function(e){e[e.Text=0]="Text",e[e.Append=1]="Append",e[e.Comment=2]="Comment",e[e.Modifier=3]="Modifier",e[e.Block=4]="Block",e[e.Component=5]="Component",e[e.OpenElement=6]="OpenElement",e[e.FlushElement=7]="FlushElement",e[e.CloseElement=8]="CloseElement",e[e.StaticAttr=9]="StaticAttr",e[e.DynamicAttr=10]="DynamicAttr",e[e.Yield=11]="Yield",e[e.Partial=12]="Partial",e[e.DynamicArg=13]="DynamicArg",e[e.StaticArg=14]="StaticArg",e[e.TrustingAttr=15]="TrustingAttr",e[e.Debugger=16]="Debugger",e[e.ClientSideStatement=17]="ClientSideStatement",e[e.Unknown=18]="Unknown",e[e.Get=19]="Get",e[e.MaybeLocal=20]="MaybeLocal",e[e.FixThisBeforeWeMerge=21]="FixThisBeforeWeMerge",e[e.HasBlock=22]="HasBlock",e[e.HasBlockParams=23]="HasBlockParams",e[e.Undefined=24]="Undefined",e[e.Helper=25]="Helper",e[e.Concat=26]="Concat",e[e.ClientSideExpression=27]="ClientSideExpression"})(t||(e.Ops=t={})),function(e){e.isUnknown=i(t.Unknown),e.isGet=i(t.Get),e.isConcat=i(t.Concat),e.isHelper=i(t.Helper),e.isHasBlock=i(t.HasBlock),e.isHasBlockParams=i(t.HasBlockParams),e.isUndefined=i(t.Undefined),e.isClientSide=i(t.ClientSideExpression),e.isMaybeLocal=i(t.MaybeLocal),e.isPrimitiveValue=function(e){return null===e||"object"!=typeof e}}(n||(e.Expressions=n={})),function(e){function n(e){return e[0]===t.StaticAttr||e[0]===t.DynamicAttr||e[0]===t.TrustingAttr}function r(e){return e[0]===t.StaticArg||e[0]===t.DynamicArg}e.isText=i(t.Text),e.isAppend=i(t.Append),e.isComment=i(t.Comment),e.isModifier=i(t.Modifier),e.isBlock=i(t.Block),e.isComponent=i(t.Component),e.isOpenElement=i(t.OpenElement),e.isFlushElement=i(t.FlushElement),e.isCloseElement=i(t.CloseElement),e.isStaticAttr=i(t.StaticAttr),e.isDynamicAttr=i(t.DynamicAttr),e.isYield=i(t.Yield),e.isPartial=i(t.Partial),e.isDynamicArg=i(t.DynamicArg),e.isStaticArg=i(t.StaticArg),e.isTrustingAttr=i(t.TrustingAttr),e.isDebugger=i(t.Debugger),e.isClientSide=i(t.ClientSideStatement),e.isAttribute=n,e.isArgument=r,e.isParameter=function(e){return n(e)||r(e)},e.getParameterName=function(e){return e[1]}}(r||(e.Statements=r={})),e.is=i,e.Expressions=n,e.Statements=r,e.Ops=t}),e("backburner",["exports"],function(e){"use strict"
var t=/\d+/
function n(e){var n=typeof e
return"number"===n&&e==e||"string"===n&&t.test(e)}function r(e){return e.onError||e.onErrorTarget&&e.onErrorTarget[e.onErrorMethod]}function i(e,t,n){var r,i,o=-1
for(r=0,i=n.length;r<i;r+=4)if(n[r]===e&&n[r+1]===t){o=r
break}return o}function o(e,t){var n,r=-1
for(n=3;n<t.length;n+=4)if(t[n]===e){r=n-3
break}return r}var a=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._queueBeingFlushed=[],this.targetQueues=new Map,this.index=0,this._queue=[],this.name=e,this.options=t,this.globalOptions=n}return e.prototype.stackFor=function(e){var t
if(e<this._queue.length)return(t=this._queue[3*e+4])?t.stack:null},e.prototype.flush=function(e){var t,n,i=this.options,o=i.before,a=i.after,s=void 0
this.targetQueues.clear(),0===this._queueBeingFlushed.length&&(this._queueBeingFlushed=this._queue,this._queue=[]),void 0!==o&&o()
var l=void 0,u=this._queueBeingFlushed
if(u.length>0)for(l=(t=r(this.globalOptions))?this.invokeWithOnError:this.invoke,n=this.index;n<u.length;n+=4)if(this.index+=4,null!==(s=u[n+1])&&l(u[n],s,u[n+2],t,u[n+3]),this.index!==this._queueBeingFlushed.length&&this.globalOptions.mustYield&&this.globalOptions.mustYield())return 1
void 0!==a&&a(),this._queueBeingFlushed.length=0,this.index=0,!1!==e&&this._queue.length>0&&this.flush(!0)},e.prototype.hasWork=function(){return this._queueBeingFlushed.length>0||this._queue.length>0},e.prototype.cancel=function(e){var t=e.target,n=e.method,r=this._queue,o=this.targetQueues.get(t)
void 0!==o&&o.delete(n)
var a=i(t,n,r)
return a>-1?(r.splice(a,4),!0):(a=i(t,n,r=this._queueBeingFlushed))>-1&&(r[a+1]=null,!0)},e.prototype.push=function(e,t,n,r){return this._queue.push(e,t,n,r),{queue:this,target:e,method:t}},e.prototype.pushUnique=function(e,t,n,r){var i,o,a=this.targetQueues.get(e)
void 0===a&&(a=new Map,this.targetQueues.set(e,a))
var s=a.get(t)
return void 0===s?(i=this._queue.push(e,t,n,r)-4,a.set(t,i)):((o=this._queue)[s+2]=n,o[s+3]=r),{queue:this,target:e,method:t}},e.prototype.invoke=function(e,t,n){void 0===n?t.call(e):t.apply(e,n)},e.prototype.invokeWithOnError=function(e,t,n,r,i){try{void 0===n?t.call(e):t.apply(e,n)}catch(e){r(e,i)}},e}(),s=function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1]
this.queues={},this.queueNameIndex=0,this.queueNames=e,e.reduce(function(e,n){return e[n]=new a(n,t[n],t),e},this.queues)}return e.prototype.schedule=function(e,t,n,r,i,o){var a=this.queues[e]
if(void 0===a)throw new Error("You attempted to schedule an action in a queue ("+e+") that doesn't exist")
if(void 0===n||null===n)throw new Error("You attempted to schedule an action in a queue ("+e+") for a method that doesn't exist")
return i?a.pushUnique(t,n,r,o):a.push(t,n,r,o)},e.prototype.flush=function(){for(var e=void 0,t=void 0,n=this.queueNames.length;this.queueNameIndex<n;)if(t=this.queueNames[this.queueNameIndex],!1===(e=this.queues[t]).hasWork())this.queueNameIndex++
else{if(1===e.flush(!1))return 1
this.queueNameIndex=0}},e}(),l=function(e){for(var t=e(),n=t.next();!1===n.done;)n.value(),n=t.next()},u=function(){},c=setTimeout
function f(){var e,t=arguments.length,n=void 0,r=void 0,i=void 0
if(1===t)n=arguments[0],r=null
else if(r=arguments[0],"string"==typeof(n=arguments[1])&&(n=r[n]),t>2)for(i=new Array(t-2),e=0;e<t-2;e++)i[e]=arguments[e+2]
return[r,n,i]}var p=0,d=function(){function e(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.DEBUG=!1,this.currentInstance=null,this.instanceStack=[],this._debouncees=[],this._throttlers=[],this._eventCallbacks={end:[],begin:[]},this._timerTimeoutId=null,this._timers=[],this._autorun=null,this.queueNames=e,this.options=n,this.options.defaultQueue||(this.options.defaultQueue=e[0]),this._onBegin=this.options.onBegin||u,this._onEnd=this.options.onEnd||u
var r=this.options._platform||{},i=Object.create(null)
i.setTimeout=r.setTimeout||function(e,t){return setTimeout(e,t)},i.clearTimeout=r.clearTimeout||function(e){return clearTimeout(e)},i.next=r.next||function(e){return c(e,0)},i.clearNext=r.clearNext||i.clearTimeout,i.now=r.now||function(){return Date.now()},this._platform=i,this._boundRunExpiredTimers=function(){t._runExpiredTimers()},this._boundAutorunEnd=function(){t._autorun=null,t.end()}}return e.prototype.begin=function(){var e=this.options,t=this.currentInstance,n=void 0
return null!==this._autorun?(n=t,this._cancelAutorun()):(null!==t&&this.instanceStack.push(t),n=this.currentInstance=new s(this.queueNames,e),this._trigger("begin",n,t)),this._onBegin(n,t),n},e.prototype.end=function(){var e,t=this.currentInstance,n=null
if(null===t)throw new Error("end called without begin")
var r=!1,i=void 0
try{i=t.flush()}finally{r||(r=!0,1===i?(e=this._platform.next,this._autorun=e(this._boundAutorunEnd)):(this.currentInstance=null,this.instanceStack.length>0&&(n=this.instanceStack.pop(),this.currentInstance=n),this._trigger("end",t,n),this._onEnd(t,n)))}},e.prototype.on=function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=this._eventCallbacks[e]
if(void 0===n)throw new TypeError("Cannot on() event "+e+" because it does not exist")
n.push(t)},e.prototype.off=function(e,t){var n,r=this._eventCallbacks[e]
if(!e||void 0===r)throw new TypeError("Cannot off() event "+e+" because it does not exist")
var i=!1
if(t)for(n=0;n<r.length;n++)r[n]===t&&(i=!0,r.splice(n,1),n--)
if(!i)throw new TypeError("Cannot off() callback that does not exist")},e.prototype.run=function(){var e=f.apply(void 0,arguments),t=e[0],n=e[1],r=e[2]
return this._run(t,n,r)},e.prototype.join=function(){var e=f.apply(void 0,arguments),t=e[0],n=e[1],r=e[2]
return this._join(t,n,r)},e.prototype.defer=function(e,t){var n,r,i
for(n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
return this.schedule.apply(this,[e,t].concat(r))},e.prototype.schedule=function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var t,n,r,i=f.apply(void 0,n),o=i[0],a=i[1],s=i[2],l=this.DEBUG?new Error:void 0
return this._ensureInstance().schedule(e,o,a,s,!1,l)},e.prototype.scheduleIterable=function(e,t){var n=this.DEBUG?new Error:void 0
return this._ensureInstance().schedule(e,null,l,[t],!1,n)},e.prototype.deferOnce=function(e,t){var n,r,i
for(n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i]
return this.scheduleOnce.apply(this,[e,t].concat(r))},e.prototype.scheduleOnce=function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var t,n,r,i=f.apply(void 0,n),o=i[0],a=i[1],s=i[2],l=this.DEBUG?new Error:void 0
return this._ensureInstance().schedule(e,o,a,s,!0,l)},e.prototype.setTimeout=function(){return this.later.apply(this,arguments)},e.prototype.later=function(){for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
var e,t,r,i,o=t.length,a=0,s=void 0,l=void 0,u=void 0,c=void 0
if(0!==o)return 1===o?s=t.shift():(n(t[t.length-1])&&(a=parseInt(t.pop(),10)),u=t[0],"function"===(i=typeof(c=t[1]))?(l=t.shift(),s=t.shift()):s=null!==u&&"string"===i&&c in u?(l=t.shift())[t.shift()]:t.shift()),this._setTimeout(l,s,t,a)},e.prototype.throttle=function(e){var t,r,a,s,l=this,u=void 0,c=void 0,f=void 0,p=void 0,d=void 0
for(t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a]
1===r.length?(c=e,d=r.pop(),u=null,p=!0):(u=e,c=r.shift(),f=r.pop(),"string"===(s=typeof c)?c=u[c]:"function"!==s&&(r.unshift(c),c=u,u=null),n(f)?(d=f,p=!0):(d=r.pop(),p=!0===f))
var h=i(u,c,this._throttlers)
if(h>-1)return this._throttlers[h+2]=r,this._throttlers[h+3]
d=parseInt(d,10)
var m=this._platform.setTimeout(function(){var e=o(m,l._throttlers),t=l._throttlers.splice(e,4),n=t[0],r=t[1],i=t[2]
!1===p&&l._run(n,r,i)},d)
return p&&this._join(u,c,r),this._throttlers.push(u,c,r,m),m},e.prototype.debounce=function(e){var t,r,a,s,l,u=this,c=void 0,f=void 0,p=void 0,d=void 0,h=void 0
for(t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a]
1===r.length?(f=e,h=r.pop(),c=null,d=!1):(c=e,f=r.shift(),p=r.pop(),"string"===(s=typeof f)?f=c[f]:"function"!==s&&(r.unshift(f),f=c,c=null),n(p)?(h=p,d=!1):(h=r.pop(),d=!0===p)),h=parseInt(h,10)
var m=i(c,f,this._debouncees)
m>-1&&(l=this._debouncees[m+3],this._platform.clearTimeout(l),this._debouncees.splice(m,4))
var g=this._platform.setTimeout(function(){var e=o(g,u._debouncees),t=u._debouncees.splice(e,4),n=t[0],r=t[1],i=t[2]
!1===d&&u._run(n,r,i)},h)
return d&&-1===m&&this._join(c,f,r),this._debouncees.push(c,f,r,g),g},e.prototype.cancelTimers=function(){var e,t
for(e=3;e<this._throttlers.length;e+=4)this._platform.clearTimeout(this._throttlers[e])
for(this._throttlers=[],t=3;t<this._debouncees.length;t+=4)this._platform.clearTimeout(this._debouncees[t])
this._debouncees=[],this._clearTimerTimeout(),this._timers=[],this._cancelAutorun()},e.prototype.hasTimers=function(){return this._timers.length>0||this._debouncees.length>0||this._throttlers.length>0||null!==this._autorun},e.prototype.cancel=function(e){if(!e)return!1
var t=typeof e
return"number"===t?this._cancelItem(e,this._throttlers)||this._cancelItem(e,this._debouncees):"string"===t?this._cancelLaterTimer(e):!("object"!==t||!e.queue||!e.method)&&e.queue.cancel(e)},e.prototype.ensureInstance=function(){this._ensureInstance()},e.prototype._join=function(e,t,n){return null===this.currentInstance?this._run(e,t,n):void 0===e&&void 0===n?t():t.apply(e,n)},e.prototype._run=function(e,t,n){var i=r(this.options)
if(this.begin(),i)try{return t.apply(e,n)}catch(e){i(e)}finally{this.end()}else try{return t.apply(e,n)}finally{this.end()}},e.prototype._cancelAutorun=function(){null!==this._autorun&&(this._platform.clearNext(this._autorun),this._autorun=null)},e.prototype._setTimeout=function(e,t,n,r){var i=this.DEBUG?new Error:void 0,o=this._platform.now()+r,a=p+++""
if(0===this._timers.length)return this._timers.push(o,a,e,t,n,i),this._installTimerTimeout(),a
var s=function(e,t){for(var n=0,r=t.length-6,i=void 0,o=void 0;n<r;)e>=t[i=n+(o=(r-n)/6)-o%6]?n=i+6:r=i
return e>=t[n]?n+6:n}(o,this._timers)
return this._timers.splice(s,0,o,a,e,t,n,i),0===s&&this._reinstallTimerTimeout(),a},e.prototype._cancelLaterTimer=function(e){var t
for(t=1;t<this._timers.length;t+=6)if(this._timers[t]===e)return t-=1,this._timers.splice(t,6),0===t&&this._reinstallTimerTimeout(),!0
return!1},e.prototype._cancelItem=function(e,t){var n=o(e,t)
return n>-1&&(this._platform.clearTimeout(e),t.splice(n,4),!0)},e.prototype._trigger=function(e,t,n){var r,i=this._eventCallbacks[e]
if(void 0!==i)for(r=0;r<i.length;r++)i[r](t,n)},e.prototype._runExpiredTimers=function(){this._timerTimeoutId=null,0!==this._timers.length&&(this.begin(),this._scheduleExpiredTimers(),this.end())},e.prototype._scheduleExpiredTimers=function(){for(var e,t,n,r,i=this._timers,o=0,a=i.length,s=this.options.defaultQueue,l=this._platform.now();o<a&&i[o]<=l;o+=6)e=i[o+2],t=i[o+3],n=i[o+4],r=i[o+5],this.currentInstance.schedule(s,e,t,n,!1,r)
i.splice(0,o),this._installTimerTimeout()},e.prototype._reinstallTimerTimeout=function(){this._clearTimerTimeout(),this._installTimerTimeout()},e.prototype._clearTimerTimeout=function(){null!==this._timerTimeoutId&&(this._platform.clearTimeout(this._timerTimeoutId),this._timerTimeoutId=null)},e.prototype._installTimerTimeout=function(){if(0!==this._timers.length){var e=this._timers[0],t=this._platform.now(),n=Math.max(0,e-t)
this._timerTimeoutId=this._platform.setTimeout(this._boundRunExpiredTimers,n)}},e.prototype._ensureInstance=function(){var e,t=this.currentInstance
return null===t&&(t=this.begin(),e=this._platform.next,this._autorun=e(this._boundAutorunEnd)),t},e}()
d.Queue=a,e.default=d}),e("container",["exports","ember-utils","ember-debug","ember-environment"],function(e,t,n,r){"use strict"
e.Container=e.privatize=e.Registry=void 0
var i=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.registry=e,this.owner=n.owner||null,this.cache=(0,t.dictionary)(n.cache||null),this.factoryManagerCache=(0,t.dictionary)(n.factoryManagerCache||null),this.isDestroyed=!1}return e.prototype.lookup=function(e,t){return s(this,this.registry.normalize(e),t)},e.prototype.destroy=function(){u(this),this.isDestroyed=!0},e.prototype.reset=function(e){var n
void 0===e?(u(n=this),n.cache=(0,t.dictionary)(null),n.factoryManagerCache=(0,t.dictionary)(null)):function(e,t){var n=e.cache[t]
delete e.factoryManagerCache[t],n&&(delete e.cache[t],n.destroy&&n.destroy())}(this,this.registry.normalize(e))},e.prototype.ownerInjection=function(){var e
return(e={})[t.OWNER]=this.owner,e},e.prototype._resolverCacheKey=function(e,t){return this.registry.resolverCacheKey(e,t)},e.prototype.factoryFor=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.registry.normalize(e)
if(n.source){if(!(t=this.registry.expandLocalLookup(e,n)))return
r=t}var i=this._resolverCacheKey(r,n),o=this.factoryManagerCache[i]
if(void 0!==o)return o
var a=this.registry.resolve(r)
if(void 0!==a){var s=new c(this,a,e,r)
return this.factoryManagerCache[i]=s,s}},e}()
function o(e,t){return!1!==e.registry.getOption(t,"singleton")}function a(e,t){return!1!==e.registry.getOption(t,"instantiate")}function s(e,t){var n,r,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(s.source){if(!(n=e.registry.expandLocalLookup(t,s)))return
t=n}return!1!==s.singleton&&(r=e._resolverCacheKey(t,s),void 0!==(i=e.cache[r]))?i:function(e,t,n){var r,i=e.factoryFor(t)
if(void 0===i)return
if(function(e,t,n){var r=n.instantiate
return!1!==n.singleton&&!1!==r&&o(e,t)&&a(e,t)}(e,t,n))return r=e._resolverCacheKey(t,n),e.cache[r]=i.create()
if(function(e,t,n){var r=n.instantiate,i=n.singleton
return!1!==r&&(!1!==i||o(e,t))&&a(e,t)}(e,t,n))return i.create()
if(function(e,t,n){var r=n.instantiate
return!1!==n.singleton&&!r&&o(e,t)&&!a(e,t)}(e,t,n)||function(e,t,n){var r=n.instantiate,i=n.singleton
return!(!1!==r||!1!==i&&o(e,t)||a(e,t))}(e,t,n))return i.class
throw new Error("Could not create factory")}(e,t,s)}function l(e,t){var n=e.registry,r=t.split(":")[0]
return function(e,t){var n,r,i={},a=!1
if(t.length>0)for(n=void 0,r=0;r<t.length;r++)i[(n=t[r]).property]=s(e,n.fullName),a||(a=!o(e,n.fullName))
return{injections:i,isDynamic:a}}(e,n.getTypeInjections(r).concat(n.getInjections(t)))}function u(e){var t,n,r=e.cache,i=Object.keys(r)
for(t=0;t<i.length;t++)(n=r[i[t]]).destroy&&n.destroy()}var c=function(){function e(e,t,n,r){this.container=e,this.owner=e.owner,this.class=t,this.fullName=n,this.normalizedName=r,this.madeToString=void 0,this.injections=void 0}return e.prototype.toString=function(){return void 0===this.madeToString&&(this.madeToString=this.container.registry.makeToString(this.class,this.fullName)),this.madeToString},e.prototype.create=function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.injections
void 0===i&&(i=n=(e=l(this.container,this.normalizedName)).injections,e.isDynamic||(this.injections=n))
var o=(0,t.assign)({},i,r)
if(!this.class.create)throw new Error("Failed to create an instance of '"+this.normalizedName+"'. Most likely an improperly defined class or an invalid module export.")
return"function"==typeof this.class._initFactory?this.class._initFactory(this):(0,t.setOwner)(o,this.owner),this.class.create(o)},e}(),f=/^[^:]+:[^:]+$/,p=function(){function e(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.fallback=n.fallback||null,this.resolver=n.resolver||null,r.ENV._ENABLE_RESOLVER_FUNCTION_SUPPORT,"function"==typeof this.resolver&&!0===r.ENV._ENABLE_RESOLVER_FUNCTION_SUPPORT&&((e=this).resolver={resolve:e.resolver}),this.registrations=(0,t.dictionary)(n.registrations||null),this._typeInjections=(0,t.dictionary)(null),this._injections=(0,t.dictionary)(null),this._localLookupCache=Object.create(null),this._normalizeCache=(0,t.dictionary)(null),this._resolveCache=(0,t.dictionary)(null),this._failSet=new Set,this._options=(0,t.dictionary)(null),this._typeOptions=(0,t.dictionary)(null)}return e.prototype.container=function(e){return new i(this,e)},e.prototype.register=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.normalize(e)
this._failSet.delete(r),this.registrations[r]=t,this._options[r]=n},e.prototype.unregister=function(e){var t=this.normalize(e)
this._localLookupCache=Object.create(null),delete this.registrations[t],delete this._resolveCache[t],delete this._options[t],this._failSet.delete(t)},e.prototype.resolve=function(e,t){var n,r=function(e,t,n){if(n&&n.source){if(!(r=e.expandLocalLookup(t,n)))return
t=r}var r,i=e.resolverCacheKey(t,n),o=e._resolveCache[i]
if(void 0!==o)return o
if(e._failSet.has(i))return
var a=void 0
e.resolver&&(a=e.resolver.resolve(t,n&&n.source))
void 0===a&&(a=e.registrations[t])
void 0===a?e._failSet.add(i):e._resolveCache[i]=a
return a}(this,this.normalize(e),t)
return void 0===r&&null!==this.fallback&&(r=(n=this.fallback).resolve.apply(n,arguments)),r},e.prototype.describe=function(e){return null!==this.resolver&&this.resolver.lookupDescription?this.resolver.lookupDescription(e):null!==this.fallback?this.fallback.describe(e):e},e.prototype.normalizeFullName=function(e){return null!==this.resolver&&this.resolver.normalize?this.resolver.normalize(e):null!==this.fallback?this.fallback.normalizeFullName(e):e},e.prototype.normalize=function(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this.normalizeFullName(e))},e.prototype.makeToString=function(e,t){return null!==this.resolver&&this.resolver.makeToString?this.resolver.makeToString(e,t):null!==this.fallback?this.fallback.makeToString(e,t):e.toString()},e.prototype.has=function(e,t){if(!this.isValidFullName(e))return!1
var n=t&&t.source&&this.normalize(t.source)
return function(e,t,n){return void 0!==e.resolve(t,{source:n})}(this,this.normalize(e),n)},e.prototype.optionsForType=function(e,t){this._typeOptions[e]=t},e.prototype.getOptionsForType=function(e){var t=this._typeOptions[e]
return void 0===t&&null!==this.fallback&&(t=this.fallback.getOptionsForType(e)),t},e.prototype.options=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.normalize(e)
this._options[n]=t},e.prototype.getOptions=function(e){var t=this.normalize(e),n=this._options[t]
return void 0===n&&null!==this.fallback&&(n=this.fallback.getOptions(e)),n},e.prototype.getOption=function(e,t){var n=this._options[e]
if(n&&void 0!==n[t])return n[t]
var r=e.split(":")[0]
return(n=this._typeOptions[r])&&void 0!==n[t]?n[t]:null!==this.fallback?this.fallback.getOption(e,t):void 0},e.prototype.typeInjection=function(e,t,n){n.split(":")[0];(this._typeInjections[e]||(this._typeInjections[e]=[])).push({property:t,fullName:n})},e.prototype.injection=function(e,t,n){var r=this.normalize(n)
if(-1===e.indexOf(":"))return this.typeInjection(e,t,r)
var i=this.normalize(e);(this._injections[i]||(this._injections[i]=[])).push({property:t,fullName:r})},e.prototype.knownForType=function(e){var n,r,i=(0,t.dictionary)(null),o=Object.keys(this.registrations)
for(n=0;n<o.length;n++)(r=o[n]).split(":")[0]===e&&(i[r]=!0)
var a=void 0,s=void 0
return null!==this.fallback&&(a=this.fallback.knownForType(e)),null!==this.resolver&&this.resolver.knownForType&&(s=this.resolver.knownForType(e)),(0,t.assign)({},a,i,s)},e.prototype.isValidFullName=function(e){return f.test(e)},e.prototype.getInjections=function(e){var t=this._injections[e]||[]
return null!==this.fallback&&(t=t.concat(this.fallback.getInjections(e))),t},e.prototype.getTypeInjections=function(e){var t=this._typeInjections[e]||[]
return null!==this.fallback&&(t=t.concat(this.fallback.getTypeInjections(e))),t},e.prototype.resolverCacheKey=function(e,t){return e},e.prototype.expandLocalLookup=function(e,t){return null!==this.resolver&&this.resolver.expandLocalLookup?function(e,t,n){var r=e._localLookupCache,i=r[t]
i||(i=r[t]=Object.create(null))
var o=i[n]
if(void 0!==o)return o
var a=e.resolver.expandLocalLookup(t,n)
return i[n]=a}(this,this.normalize(e),this.normalize(t.source)):null!==this.fallback?this.fallback.expandLocalLookup(e,t):null},e}()
var d=(0,t.dictionary)(null),h=(""+Math.random()+Date.now()).replace(".","")
e.Registry=p,e.privatize=function(e){var n=e[0],r=d[n]
if(r)return r
var i=n.split(":"),o=i[0],a=i[1]
return d[n]=(0,t.intern)(o+":"+a+"-"+h)},e.Container=i}),e("dag-map",["exports"],function(e){"use strict"
var t=function(){function e(){this._vertices=new n}return e.prototype.add=function(e,t,n,r){if(!e)throw new Error("argument `key` is required")
var i=this._vertices,o=i.add(e)
if(o.val=t,n)if("string"==typeof n)i.addEdge(o,i.add(n))
else for(var a=0;a<n.length;a++)i.addEdge(o,i.add(n[a]))
if(r)if("string"==typeof r)i.addEdge(i.add(r),o)
else for(a=0;a<r.length;a++)i.addEdge(i.add(r[a]),o)},e.prototype.addEdges=function(e,t,n,r){this.add(e,t,n,r)},e.prototype.each=function(e){this._vertices.walk(e)},e.prototype.topsort=function(e){this.each(e)},e}()
e.default=t
var n=function(){function e(){this.length=0,this.stack=new r,this.path=new r,this.result=new r}return e.prototype.add=function(e){if(!e)throw new Error("missing key")
var t,n,r=0|this.length
for(t=0;t<r;t++)if((n=this[t]).key===e)return n
return this.length=r+1,this[r]={idx:r,key:e,val:void 0,out:!1,flag:!1,length:0}},e.prototype.addEdge=function(e,t){this.check(e,t.key)
var n,r=0|t.length
for(n=0;n<r;n++)if(t[n]===e.idx)return
t.length=r+1,t[r]=e.idx,e.out=!0},e.prototype.walk=function(e){var t,n
for(this.reset(),t=0;t<this.length;t++)(n=this[t]).out||this.visit(n,"")
this.each(this.result,e)},e.prototype.check=function(e,t){var n,r
if(e.key===t)throw new Error("cycle detected: "+t+" <- "+t)
if(0!==e.length){for(n=0;n<e.length;n++)if(this[e[n]].key===t)throw new Error("cycle detected: "+t+" <- "+e.key+" <- "+t)
if(this.reset(),this.visit(e,t),this.path.length>0)throw r="cycle detected: "+t,this.each(this.path,function(e){r+=" <- "+e}),new Error(r)}},e.prototype.reset=function(){var e,t
for(this.stack.length=0,this.path.length=0,this.result.length=0,e=0,t=this.length;e<t;e++)this[e].flag=!1},e.prototype.visit=function(e,t){var n,r,i=this.stack,o=this.path,a=this.result
for(i.push(e.idx);i.length;)if((n=0|i.pop())>=0){if((r=this[n]).flag)continue
if(r.flag=!0,o.push(n),t===r.key)break
i.push(~n),this.pushIncoming(r)}else o.pop(),a.push(~n)},e.prototype.pushIncoming=function(e){var t,n,r=this.stack
for(t=e.length-1;t>=0;t--)this[n=e[t]].flag||r.push(n)},e.prototype.each=function(e,t){var n,r,i
for(n=0,r=e.length;n<r;n++)t((i=this[e[n]]).key,i.val)},e}(),r=function(){function e(){this.length=0}return e.prototype.push=function(e){this[this.length++]=0|e},e.prototype.pop=function(){return 0|this[--this.length]},e}()}),e("ember-application/index",["exports","ember-application/system/application","ember-application/system/application-instance","ember-application/system/resolver","ember-application/system/engine","ember-application/system/engine-instance","ember-application/system/engine-parent","ember-application/initializers/dom-templates"],function(e,t,n,r,i,o,a){"use strict"
e.setEngineParent=e.getEngineParent=e.EngineInstance=e.Engine=e.Resolver=e.ApplicationInstance=e.Application=void 0,Object.defineProperty(e,"Application",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"ApplicationInstance",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Resolver",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Engine",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"EngineInstance",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"getEngineParent",{enumerable:!0,get:function(){return a.getEngineParent}}),Object.defineProperty(e,"setEngineParent",{enumerable:!0,get:function(){return a.setEngineParent}})}),e("ember-application/initializers/dom-templates",["require","ember-glimmer","ember-environment","ember-application/system/application"],function(e,t,n,r){"use strict"
var i=function(){}
r.default.initializer({name:"domTemplates",initialize:function(){var r=void 0
n.environment.hasDOM&&(0,e.has)("ember-template-compiler/system/bootstrap")&&(i=(0,e.default)("ember-template-compiler/system/bootstrap").default,r=document),i({context:r,hasTemplate:t.hasTemplate,setTemplate:t.setTemplate})}})}),e("ember-application/system/application-instance",["exports","ember-utils","ember-metal","ember-environment","ember-views","ember-application/system/engine-instance","ember-glimmer"],function(e,t,n,r,i,o,a){"use strict"
var s=o.default.extend({application:null,customEvents:null,rootElement:null,init:function(){this._super.apply(this,arguments),this.register("-application-instance:main",this,{instantiate:!1})},_bootSync:function(e){var t
return this._booted?this:(e=new l(e),this.setupRegistry(e),e.rootElement?this.rootElement=e.rootElement:this.rootElement=this.application.rootElement,e.location&&(t=(0,n.get)(this,"router"),(0,n.set)(t,"location",e.location)),this.application.runInstanceInitializers(this),e.isInteractive&&this.setupEventDispatcher(),this._booted=!0,this)},setupRegistry:function(e){this.constructor.setupRegistry(this.__registry__,e)},router:(0,n.computed)(function(){return this.lookup("router:main")}).readOnly(),didCreateRootView:function(e){e.appendTo(this.rootElement)},startRouting:function(){(0,n.get)(this,"router").startRouting(),this._didSetupRouter=!0},setupRouter:function(){this._didSetupRouter||(this._didSetupRouter=!0,(0,n.get)(this,"router").setupRouter())},handleURL:function(e){var t=(0,n.get)(this,"router")
return this.setupRouter(),t.handleURL(e)},setupEventDispatcher:function(){var e=this.lookup("event_dispatcher:main"),r=(0,n.get)(this.application,"customEvents"),i=(0,n.get)(this,"customEvents"),o=(0,t.assign)({},r,i)
return e.setup(o,this.rootElement),e},getURL:function(){return(0,n.get)(this,"router.url")},visit:function(e){var t=this
this.setupRouter()
var r=this.__container__.lookup("-environment:main"),i=(0,n.get)(this,"router"),o=function(){return r.options.shouldRender?(0,a.renderSettled)().then(function(){return t}):t},s=function(e){if(e.error)throw e.error
if("TransitionAborted"===e.name&&i._routerMicrolib.activeTransition)return i._routerMicrolib.activeTransition.then(o,s)
throw"TransitionAborted"===e.name?new Error(e.message):e},l=(0,n.get)(i,"location")
return l.setURL(e),i.handleURL(l.getURL()).then(o,s)}})
function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.jQuery=i.jQuery,this.isInteractive=r.environment.hasDOM,void 0!==e.isBrowser?this.isBrowser=!!e.isBrowser:this.isBrowser=r.environment.hasDOM,this.isBrowser||(this.jQuery=null,this.isInteractive=!1,this.location="none"),void 0!==e.shouldRender?this.shouldRender=!!e.shouldRender:this.shouldRender=!0,this.shouldRender||(this.jQuery=null,this.isInteractive=!1),e.document?this.document=e.document:this.document="undefined"!=typeof document?document:null,e.rootElement&&(this.rootElement=e.rootElement),void 0!==e.location&&(this.location=e.location),void 0!==e.jQuery&&(this.jQuery=e.jQuery),void 0!==e.isInteractive&&(this.isInteractive=!!e.isInteractive)}s.reopenClass({setupRegistry:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
t.toEnvironment||(t=new l(t)),e.register("-environment:main",t.toEnvironment(),{instantiate:!1}),e.register("service:-document",t.document,{instantiate:!1}),this._super(e,t)}}),l.prototype.toEnvironment=function(){var e=(0,t.assign)({},r.environment)
return e.hasDOM=this.isBrowser,e.isInteractive=this.isInteractive,e.options=this,e},e.default=s}),e("ember-application/system/application",["exports","ember-babel","ember-utils","ember-environment","ember-debug","ember-metal","ember-runtime","ember-views","ember-routing","ember-application/system/application-instance","container","ember-application/system/engine","ember-glimmer"],function(e,t,n,r,i,o,a,s,l,u,c,f,p){"use strict"
var d=(0,t.taggedTemplateLiteralLoose)(["-bucket-cache:main"],["-bucket-cache:main"]),h=!1,m=f.default.extend({rootElement:"body",eventDispatcher:null,customEvents:null,autoboot:!0,_globalsMode:!0,init:function(){this._super.apply(this,arguments),this.$||(this.$=s.jQuery),h||(h=!0,r.environment.hasDOM&&"function"==typeof s.jQuery&&o.libraries.registerCoreLibrary("jQuery",(0,s.jQuery)().jquery)),this._readinessDeferrals=1,this._booted=!1,this.autoboot=this._globalsMode=!!this.autoboot,this._globalsMode&&this._prepareForGlobalsMode(),this.autoboot&&this.waitForDOMReady()},buildInstance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return e.base=this,e.application=this,u.default.create(e)},_prepareForGlobalsMode:function(){this.Router=(this.Router||l.Router).extend(),this._buildDeprecatedInstance()},_buildDeprecatedInstance:function(){var e=this.buildInstance()
this.__deprecatedInstance__=e,this.__container__=e.__container__},waitForDOMReady:function(){!this.$||this.$.isReady?o.run.schedule("actions",this,"domReady"):this.$().ready(o.run.bind(this,"domReady"))},domReady:function(){this.isDestroyed||this._bootSync()},deferReadiness:function(){this._readinessDeferrals++},advanceReadiness:function(){this._readinessDeferrals--,0===this._readinessDeferrals&&o.run.once(this,this.didBecomeReady)},boot:function(){if(this._bootPromise)return this._bootPromise
try{this._bootSync()}catch(e){}return this._bootPromise},_bootSync:function(){if(!this._booted){var e=this._bootResolver=a.RSVP.defer()
this._bootPromise=e.promise
try{this.runInitializers(),(0,a.runLoadHooks)("application",this),this.advanceReadiness()}catch(t){throw e.reject(t),t}}},reset:function(){var e=this.__deprecatedInstance__
this._readinessDeferrals=1,this._bootPromise=null,this._bootResolver=null,this._booted=!1,o.run.join(this,function(){(0,o.run)(e,"destroy"),this._buildDeprecatedInstance(),o.run.schedule("actions",this,"_bootSync")})},didBecomeReady:function(){var e
try{(0,i.isTesting)()||(a.Namespace.processAll(),(0,a.setNamespaceSearchDisabled)(!0)),this.autoboot&&(e=void 0,(e=this._globalsMode?this.__deprecatedInstance__:this.buildInstance())._bootSync(),this.ready(),e.startRouting()),this._bootResolver.resolve(this),this._booted=!0}catch(e){throw this._bootResolver.reject(e),e}},ready:function(){return this},willDestroy:function(){this._super.apply(this,arguments),(0,a.setNamespaceSearchDisabled)(!1),this._booted=!1,this._bootPromise=null,this._bootResolver=null,a._loaded.application===this&&(a._loaded.application=void 0),this._globalsMode&&this.__deprecatedInstance__&&this.__deprecatedInstance__.destroy()},visit:function(e,t){var n=this
return this.boot().then(function(){var r=n.buildInstance()
return r.boot(t).then(function(){return r.visit(e)}).catch(function(e){throw(0,o.run)(r,"destroy"),e})})}})
m.reopenClass({buildRegistry:function(){!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
var e=this._super.apply(this,arguments)
return function(e){e.register("router:main",l.Router.extend()),e.register("-view-registry:main",{create:function(){return(0,n.dictionary)(null)}}),e.register("route:basic",l.Route),e.register("event_dispatcher:main",s.EventDispatcher),e.injection("router:main","namespace","application:main"),e.register("location:auto",l.AutoLocation),e.register("location:hash",l.HashLocation),e.register("location:history",l.HistoryLocation),e.register("location:none",l.NoneLocation),e.register((0,c.privatize)(d),l.BucketCache),e.register("service:router",l.RouterService),e.injection("service:router","_router","router:main")}(e),(0,p.setupApplicationRegistry)(e),e}}),e.default=m}),e("ember-application/system/engine-instance",["exports","ember-babel","ember-utils","ember-runtime","ember-debug","container","ember-application/system/engine-parent"],function(e,t,n,r,i,o,a){"use strict"
var s=(0,t.taggedTemplateLiteralLoose)(["-bucket-cache:main"],["-bucket-cache:main"]),l=r.Object.extend(r.RegistryProxyMixin,r.ContainerProxyMixin,{base:null,init:function(){this._super.apply(this,arguments),(0,n.guidFor)(this)
var e=this.base
e||(e=this.application,this.base=e)
var t=this.__registry__=new o.Registry({fallback:e.__registry__})
this.__container__=t.container({owner:this}),this._booted=!1},boot:function(e){var t=this
return this._bootPromise?this._bootPromise:(this._bootPromise=new r.RSVP.Promise(function(n){return n(t._bootSync(e))}),this._bootPromise)},_bootSync:function(e){return this._booted?this:(this.cloneParentDependencies(),this.setupRegistry(e),this.base.runInstanceInitializers(this),this._booted=!0,this)},setupRegistry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.__container__.lookup("-environment:main")
this.constructor.setupRegistry(this.__registry__,e)},unregister:function(e){this.__container__.reset(e),this._super.apply(this,arguments)},buildChildEngineInstance:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.lookup("engine:"+e)
if(!n)throw new i.Error("You attempted to mount the engine '"+e+"', but it is not registered with its parent.")
var r=n.buildInstance(t)
return(0,a.setEngineParent)(r,this),r},cloneParentDependencies:function(){var e=this,t=(0,a.getEngineParent)(this);["route:basic","service:-routing","service:-glimmer-environment"].forEach(function(n){return e.register(n,t.resolveRegistration(n))})
var n=t.lookup("-environment:main")
this.register("-environment:main",n,{instantiate:!1})
var r=["router:main",(0,o.privatize)(s),"-view-registry:main","renderer:-"+(n.isInteractive?"dom":"inert"),"service:-document"]
n.isInteractive&&r.push("event_dispatcher:main"),r.forEach(function(n){return e.register(n,t.lookup(n),{instantiate:!1})}),this.inject("view","_environment","-environment:main"),this.inject("route","_environment","-environment:main")}})
l.reopenClass({setupRegistry:function(e,t){t&&(e.injection("view","_environment","-environment:main"),e.injection("route","_environment","-environment:main"),t.isInteractive?(e.injection("view","renderer","renderer:-dom"),e.injection("component","renderer","renderer:-dom")):(e.injection("view","renderer","renderer:-inert"),e.injection("component","renderer","renderer:-inert")))}}),e.default=l}),e("ember-application/system/engine-parent",["exports","ember-utils"],function(e,t){"use strict"
e.ENGINE_PARENT=void 0,e.getEngineParent=function(e){return e[n]},e.setEngineParent=function(e,t){e[n]=t}
var n=e.ENGINE_PARENT=(0,t.symbol)("ENGINE_PARENT")}),e("ember-application/system/engine",["exports","ember-babel","ember-utils","ember-runtime","container","dag-map","ember-debug","ember-metal","ember-application/system/resolver","ember-application/system/engine-instance","ember-routing","ember-extension-support","ember-views","ember-glimmer"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d){"use strict"
var h=(0,t.taggedTemplateLiteralLoose)(["-bucket-cache:main"],["-bucket-cache:main"])
var m=r.Namespace.extend(r.RegistryProxyMixin,{init:function(){this._super.apply(this,arguments),this.buildRegistry()},_initializersRan:!1,ensureInitializers:function(){this._initializersRan||(this.runInitializers(),this._initializersRan=!0)},buildInstance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.ensureInitializers(),e.base=this,u.default.create(e)},buildRegistry:function(){return this.__registry__=this.constructor.buildRegistry(this)},initializer:function(e){this.constructor.initializer(e)},instanceInitializer:function(e){this.constructor.instanceInitializer(e)},runInitializers:function(){var e=this
this._runInitializer("initializers",function(t,n){n.initialize(e)})},runInstanceInitializers:function(e){this._runInitializer("instanceInitializers",function(t,n){n.initialize(e)})},_runInitializer:function(e,t){var n,r=(0,s.get)(this.constructor,e),i=function(e){var t=[]
for(var n in e)t.push(n)
return t}(r),a=new o.default,l=void 0
for(n=0;n<i.length;n++)l=r[i[n]],a.add(l.name,l,l.before,l.after)
a.topsort(t)}})
function g(e,t){return function(t){var n
void 0!==this.superclass[e]&&this.superclass[e]===this[e]&&((n={})[e]=Object.create(this[e]),this.reopenClass(n)),this[e][t.name]=t}}m.reopenClass({initializers:Object.create(null),instanceInitializers:Object.create(null),initializer:g("initializers","initializer"),instanceInitializer:g("instanceInitializers","instance initializer"),buildRegistry:function(e){var t=new i.Registry({resolver:function(e){return(e.get("Resolver")||l.default).create({namespace:e})}(e)})
return t.set=s.set,t.register("application:main",e,{instantiate:!1}),function(e){e.optionsForType("component",{singleton:!1}),e.optionsForType("view",{singleton:!1}),e.register("controller:basic",r.Controller,{instantiate:!1}),e.injection("view","_viewRegistry","-view-registry:main"),e.injection("renderer","_viewRegistry","-view-registry:main"),e.injection("event_dispatcher:main","_viewRegistry","-view-registry:main"),e.injection("route","_topLevelViewTemplate","template:-outlet"),e.injection("view:-outlet","namespace","application:main"),e.injection("controller","target","router:main"),e.injection("controller","namespace","application:main"),e.injection("router","_bucketCache",(0,i.privatize)(h)),e.injection("route","_bucketCache",(0,i.privatize)(h)),e.injection("route","router","router:main"),e.register("service:-routing",c.RoutingService),e.injection("service:-routing","router","router:main"),e.register("resolver-for-debugging:main",e.resolver,{instantiate:!1}),e.injection("container-debug-adapter:main","resolver","resolver-for-debugging:main"),e.injection("data-adapter:main","containerDebugAdapter","container-debug-adapter:main"),e.register("container-debug-adapter:main",f.ContainerDebugAdapter),e.register("component-lookup:main",p.ComponentLookup)}(t),(0,d.setupEngineRegistry)(t),t},resolver:null,Resolver:null}),e.default=m}),e("ember-application/system/resolver",["exports","ember-utils","ember-metal","ember-debug","ember-runtime","ember-application/utils/validate-type","ember-glimmer"],function(e,t,n,r,i,o,a){"use strict"
e.Resolver=void 0,e.Resolver=i.Object.extend({namespace:null,normalize:null,resolve:null,parseName:null,lookupDescription:null,makeToString:null,resolveOther:null,_logLookup:null})
var s=i.Object.extend({namespace:null,init:function(){this._parseNameCache=(0,t.dictionary)(null)},normalize:function(e){var t=e.split(":"),n=t[0],r=t[1]
return"template"!==n?n+":"+r.replace(/(\.|_|-)./g,function(e){return e.charAt(1).toUpperCase()}):e},resolve:function(e){var t=this.parseName(e),n=t.resolveMethodName,r=void 0
return this[n]&&(r=this[n](t)),(r=r||this.resolveOther(t))&&(0,o.default)(r,t),r},parseName:function(e){return this._parseNameCache[e]||(this._parseNameCache[e]=this._parseName(e))},_parseName:function(e){var t,r,o=e.split(":"),a=o[0],s=o[1],l=s,u=(0,n.get)(this,"namespace"),c=l.lastIndexOf("/"),f=-1!==c?l.slice(0,c):null
"template"!==a&&-1!==c&&(l=(t=l.split("/"))[t.length-1],r=i.String.capitalize(t.slice(0,-1).join(".")),u=i.Namespace.byName(r))
var p="main"===s?"Main":i.String.classify(a)
if(!l||!a)throw new TypeError("Invalid fullName: `"+e+"`, must be of the form `type:name` ")
return{fullName:e,type:a,fullNameWithoutType:s,dirname:f,name:l,root:u,resolveMethodName:"resolve"+p}},lookupDescription:function(e){var t=this.parseName(e),n=void 0
return"template"===t.type?"template at "+t.fullNameWithoutType.replace(/\./g,"/"):(n=t.root+"."+i.String.classify(t.name).replace(/\./g,""),"model"!==t.type&&(n+=i.String.classify(t.type)),n)},makeToString:function(e){return e.toString()},useRouterNaming:function(e){"basic"===e.name?e.name="":e.name=e.name.replace(/\./g,"_")},resolveTemplate:function(e){var t=e.fullNameWithoutType.replace(/\./g,"/")
return(0,a.getTemplate)(t)||(0,a.getTemplate)(i.String.decamelize(t))},resolveView:function(e){return this.useRouterNaming(e),this.resolveOther(e)},resolveController:function(e){return this.useRouterNaming(e),this.resolveOther(e)},resolveRoute:function(e){return this.useRouterNaming(e),this.resolveOther(e)},resolveModel:function(e){var t=i.String.classify(e.name)
return(0,n.get)(e.root,t)},resolveHelper:function(e){return this.resolveOther(e)},resolveOther:function(e){var t=i.String.classify(e.name)+i.String.classify(e.type)
return(0,n.get)(e.root,t)},resolveMain:function(e){var t=i.String.classify(e.type)
return(0,n.get)(e.root,t)},knownForType:function(e){var r,o,a=(0,n.get)(this,"namespace"),s=i.String.classify(e),l=new RegExp(s+"$"),u=(0,t.dictionary)(null),c=Object.keys(a)
for(r=0;r<c.length;r++)o=c[r],l.test(o)&&(u[this.translateToContainerFullname(e,o)]=!0)
return u},translateToContainerFullname:function(e,t){var n=i.String.classify(e),r=t.slice(0,-1*n.length)
return e+":"+i.String.dasherize(r)}})
e.default=s}),e("ember-application/utils/validate-type",["exports","ember-debug"],function(e,t){"use strict"
e.default=function(e,t){var r=n[t.type]
if(r)r[1],r[2]}
var n={route:["assert","isRouteFactory","Ember.Route"],component:["deprecate","isComponentFactory","Ember.Component"],view:["deprecate","isViewFactory","Ember.View"],service:["deprecate","isServiceFactory","Ember.Service"]}}),e("ember-babel",["exports"],function(e){"use strict"
function t(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i)
o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o)}return e}e.inherits=function(e,t){e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):n(e,t))},e.taggedTemplateLiteralLoose=function(e,t){return e.raw=t,e},e.createClass=function(e,n,r){n&&t(e.prototype,n)
r&&t(e,r)
return e},e.defaults=n
e.possibleConstructorReturn=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?e:t},e.slice=Array.prototype.slice}),e("ember-console",["exports"],function(e){"use strict"
e.default={log:function(){var e
return(e=console).log.apply(e,arguments)},warn:function(){var e
return(e=console).warn.apply(e,arguments)},error:function(){var e
return(e=console).error.apply(e,arguments)},info:function(){var e
return(e=console).info.apply(e,arguments)},debug:function(){var e,t
return console.debug?(t=console).debug.apply(t,arguments):(e=console).info.apply(e,arguments)},assert:function(){var e
return(e=console).assert.apply(e,arguments)}}}),e("ember-debug/deprecate",["exports","ember-debug/error","ember-console","ember-environment","ember-debug/index","ember-debug/handlers"],function(e){"use strict"
e.missingOptionsUntilDeprecation=e.missingOptionsIdDeprecation=e.missingOptionsDeprecation=e.registerHandler=void 0,e.default=void 0,e.registerHandler=function(){},e.missingOptionsDeprecation=void 0,e.missingOptionsIdDeprecation=void 0,e.missingOptionsUntilDeprecation=void 0}),e("ember-debug/error",["exports","ember-babel"],function(e,t){"use strict"
var n=function(e){function n(r){var i,o=(0,t.possibleConstructorReturn)(this,e.call(this))
if(!(o instanceof n))return i=new n(r),(0,t.possibleConstructorReturn)(o,i)
var a=Error.call(o,r)
return o.stack=a.stack,o.description=a.description,o.fileName=a.fileName,o.lineNumber=a.lineNumber,o.message=a.message,o.name=a.name,o.number=a.number,o.code=a.code,o}return(0,t.inherits)(n,e),n}(function(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}(Error))
e.default=n}),e("ember-debug/features",["exports","ember-environment","ember/features"],function(e,t,n){"use strict"
e.default=function(e){var n=r[e]
return!0===n||!1===n||void 0===n?n:!!t.ENV.ENABLE_OPTIONAL_FEATURES}
var r=n.FEATURES}),e("ember-debug/handlers",["exports"],function(e){"use strict"
e.HANDLERS={},e.registerHandler=function(){},e.invoke=function(){}}),e("ember-debug/index",["exports","ember-debug/warn","ember-debug/deprecate","ember-debug/features","ember-debug/error","ember-debug/testing","ember-environment","ember-console","ember/features"],function(e,t,n,r,i,o,a,s,l){"use strict"
e._warnIfUsingStrippedFeatureFlags=e.getDebugFunction=e.setDebugFunction=e.deprecateFunc=e.runInDebug=e.debugFreeze=e.debugSeal=e.deprecate=e.debug=e.warn=e.info=e.assert=e.setTesting=e.isTesting=e.Error=e.isFeatureEnabled=e.registerDeprecationHandler=e.registerWarnHandler=void 0,Object.defineProperty(e,"registerWarnHandler",{enumerable:!0,get:function(){return t.registerHandler}}),Object.defineProperty(e,"registerDeprecationHandler",{enumerable:!0,get:function(){return n.registerHandler}}),Object.defineProperty(e,"isFeatureEnabled",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Error",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"isTesting",{enumerable:!0,get:function(){return o.isTesting}}),Object.defineProperty(e,"setTesting",{enumerable:!0,get:function(){return o.setTesting}})
l.DEFAULT_FEATURES,l.FEATURES
var u=function(){}
e.assert=u,e.info=u,e.warn=u,e.debug=u,e.deprecate=u,e.debugSeal=u,e.debugFreeze=u,e.runInDebug=u,e.deprecateFunc=function(){return arguments[arguments.length-1]},e.setDebugFunction=u,e.getDebugFunction=u,e._warnIfUsingStrippedFeatureFlags=void 0}),e("ember-debug/testing",["exports"],function(e){"use strict"
e.isTesting=function(){return t},e.setTesting=function(e){t=!!e}
var t=!1}),e("ember-debug/warn",["exports","ember-environment","ember-console","ember-debug/deprecate","ember-debug/index","ember-debug/handlers"],function(e){"use strict"
e.missingOptionsDeprecation=e.missingOptionsIdDeprecation=e.registerHandler=void 0,e.default=function(){},e.registerHandler=function(){},e.missingOptionsIdDeprecation=void 0,e.missingOptionsDeprecation=void 0}),e("ember-environment",["exports"],function(e){"use strict"
function t(e){return e&&e.Object===Object?e:void 0}var n,r=t((n="object"==typeof global&&global)&&void 0===n.nodeType?n:void 0)||t("object"==typeof self&&self)||t("object"==typeof window&&window)||mainContext||new Function("return this")()
function i(e){return!1!==e}function o(e){return!0===e}var a,s="object"==typeof r.EmberENV&&r.EmberENV||"object"==typeof r.ENV&&r.ENV||{}
s.ENABLE_ALL_FEATURES&&(s.ENABLE_OPTIONAL_FEATURES=!0),s.EXTEND_PROTOTYPES=!1===(a=s.EXTEND_PROTOTYPES)?{String:!1,Array:!1,Function:!1}:a&&!0!==a?{String:i(a.String),Array:i(a.Array),Function:i(a.Function)}:{String:!0,Array:!0,Function:!0},s.LOG_STACKTRACE_ON_DEPRECATION=i(s.LOG_STACKTRACE_ON_DEPRECATION),s.LOG_VERSION=i(s.LOG_VERSION),s.LOG_BINDINGS=o(s.LOG_BINDINGS),s.RAISE_ON_DEPRECATION=o(s.RAISE_ON_DEPRECATION)
var l="undefined"!=typeof window&&window===r&&window.document&&window.document.createElement&&!s.disableBrowserEnvironment,u=r.Ember||{},c={imports:u.imports||r,exports:u.exports||r,lookup:u.lookup||r},f=l?{hasDOM:!0,isChrome:!!window.chrome&&!window.opera,isFirefox:"undefined"!=typeof InstallTrigger,location:window.location,history:window.history,userAgent:window.navigator.userAgent,window:window}:{hasDOM:!1,isChrome:!1,isFirefox:!1,location:null,history:null,userAgent:"Lynx (textmode)",window:null}
e.ENV=s,e.context=c,e.environment=f}),e("ember-extension-support/container_debug_adapter",["exports","ember-metal","ember-runtime"],function(e,t,n){"use strict"
e.default=n.Object.extend({resolver:null,canCatalogEntriesByType:function(e){return"model"!==e&&"template"!==e},catalogEntriesByType:function(e){var r=(0,n.A)(n.Namespace.NAMESPACES),i=(0,n.A)(),o=new RegExp(n.String.classify(e)+"$")
return r.forEach(function(e){var r
if(e!==t.default)for(var a in e)e.hasOwnProperty(a)&&o.test(a)&&(r=e[a],"class"===(0,n.typeOf)(r)&&i.push(n.String.dasherize(a.replace(o,""))))}),i}})})
e("ember-extension-support/data_adapter",["exports","ember-utils","ember-metal","ember-runtime"],function(e,t,n,r){"use strict"
e.default=r.Object.extend({init:function(){this._super.apply(this,arguments),this.releaseMethods=(0,r.A)()},containerDebugAdapter:void 0,attributeLimit:3,acceptsModelName:!0,releaseMethods:(0,r.A)(),getFilters:function(){return(0,r.A)()},watchModelTypes:function(e,t){var n=this,i=this.getModelTypes(),o=(0,r.A)()
e(i.map(function(e){var r=e.klass,i=n.wrapModelType(r,e.name)
return o.push(n.observeModelType(e.name,t)),i}))
var a=function(){o.forEach(function(e){return e()}),n.releaseMethods.removeObject(a)}
return this.releaseMethods.pushObject(a),a},_nameToClass:function(e){var n
return"string"==typeof e&&(e=(n=(0,t.getOwner)(this).factoryFor("model:"+e))&&n.class),e},watchRecords:function(e,t,n,i){var o=this,a=(0,r.A)(),s=this._nameToClass(e),l=this.getRecords(s,e),u=void 0
function c(e){n([e])}var f=l.map(function(e){return a.push(o.observeRecord(e,c)),o.wrapRecord(e)}),p={didChange:function(e,n,s,l){var u,f,p
for(u=n;u<n+l;u++)f=(0,r.objectAt)(e,u),p=o.wrapRecord(f),a.push(o.observeRecord(f,c)),t([p])
s&&i(n,s)},willChange:function(){return this}}
return(0,r.addArrayObserver)(l,this,p),u=function(){a.forEach(function(e){return e()}),(0,r.removeArrayObserver)(l,o,p),o.releaseMethods.removeObject(u)},t(f),this.releaseMethods.pushObject(u),u},willDestroy:function(){this._super.apply(this,arguments),this.releaseMethods.forEach(function(e){return e()})},detect:function(){return!1},columnsForType:function(){return(0,r.A)()},observeModelType:function(e,t){var i=this,o=this._nameToClass(e),a=this.getRecords(o,e)
function s(){t([this.wrapModelType(o,e)])}var l={didChange:function(e,t,r,i){(r>0||i>0)&&n.run.scheduleOnce("actions",this,s)},willChange:function(){return this}}
return(0,r.addArrayObserver)(a,this,l),function(){return(0,r.removeArrayObserver)(a,i,l)}},wrapModelType:function(e,t){var r=this.getRecords(e,t)
return{name:t,count:(0,n.get)(r,"length"),columns:this.columnsForType(e),object:e}},getModelTypes:function(){var e=this,t=this.get("containerDebugAdapter"),n=void 0
return n=t.canCatalogEntriesByType("model")?t.catalogEntriesByType("model"):this._getObjectsOnNamespaces(),n=(0,r.A)(n).map(function(t){return{klass:e._nameToClass(t),name:t}}),n=(0,r.A)(n).filter(function(t){return e.detect(t.klass)}),(0,r.A)(n)},_getObjectsOnNamespaces:function(){var e=this,t=(0,r.A)(r.Namespace.NAMESPACES),n=(0,r.A)()
return t.forEach(function(t){var i
for(var o in t)t.hasOwnProperty(o)&&e.detect(t[o])&&(i=r.String.dasherize(o),n.push(i))}),n},getRecords:function(){return(0,r.A)()},wrapRecord:function(e){var t={object:e}
return t.columnValues=this.getRecordColumnValues(e),t.searchKeywords=this.getRecordKeywords(e),t.filterValues=this.getRecordFilterValues(e),t.color=this.getRecordColor(e),t},getRecordColumnValues:function(){return{}},getRecordKeywords:function(){return(0,r.A)()},getRecordFilterValues:function(){return{}},getRecordColor:function(){return null},observeRecord:function(){return function(){}}})}),e("ember-extension-support/index",["exports","ember-extension-support/data_adapter","ember-extension-support/container_debug_adapter"],function(e,t,n){"use strict"
Object.defineProperty(e,"DataAdapter",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"ContainerDebugAdapter",{enumerable:!0,get:function(){return n.default}})}),e("ember-glimmer/component-managers/abstract",["exports"],function(e){"use strict"
var t=function(){function e(){this.debugStack=void 0}return e.prototype.prepareArgs=function(){return null},e.prototype.didCreateElement=function(){},e.prototype.didRenderLayout=function(){},e.prototype.didCreate=function(){},e.prototype.getTag=function(){return null},e.prototype.update=function(){},e.prototype.didUpdateLayout=function(){},e.prototype.didUpdate=function(){},e}()
e.default=t}),e("ember-glimmer/component-managers/curly",["exports","ember-babel","@glimmer/reference","@glimmer/runtime","container","ember-debug","ember-metal","ember-utils","ember-views","ember-glimmer/component","ember-glimmer/utils/bindings","ember-glimmer/utils/curly-component-state-bucket","ember-glimmer/utils/process-args","ember-glimmer/utils/references","ember-glimmer/component-managers/abstract"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h){"use strict"
e.CurlyComponentDefinition=e.PositionalArgumentReference=void 0,e.validatePositionalParameters=function(){},e.processComponentInitializationAssertions=function(e,t){},e.initialRenderInstrumentDetails=_,e.rerenderInstrumentDetails=A
var m=(0,t.taggedTemplateLiteralLoose)(["template:components/-default"],["template:components/-default"]),g=(0,i.privatize)(m)
function v(e){var t=e.dynamicScope().view.tagName
return r.PrimitiveReference.create(""===t?null:t||"div")}function b(e){return e.getSelf().get("ariaRole")}var y=function(){function e(e){this.template=e}return e.prototype.compile=function(e){e.wrapLayout(this.template),e.tag.dynamic(v),e.attrs.dynamic("role",b),e.attrs.static("class","ember-view")},e}()
y.id="curly"
var E=e.PositionalArgumentReference=function(){function e(e){this.tag=(0,n.combineTagged)(e),this._references=e}return e.prototype.value=function(){return this._references.map(function(e){return e.value()})},e.prototype.get=function(e){return d.PropertyReference.create(this,e)},e}(),T=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.prepareArgs=function(e,t){var n,r,i,o,a=e.ComponentClass.class.positionalParams,l="string"==typeof a,u=l||a.length>0,c=u&&0!==t.positional.length,f=e.args
if(!c&&!f)return null
var p=t.capture(),d=p.positional.references,h=void 0
e.args&&(n=e.args.positional.slice(d.length),d=d.concat(n),h=e.args.named)
var m=void 0
if(l)(r={})[a]=new E(d),m=r,d=[]
else if(u)for(m={},i=Math.min(d.length,a.length),o=0;o<i;o++)m[a[o]]=d[o]
return{positional:d,named:(0,s.assign)({},h,m,p.named.map)}},n.prototype.create=function(e,t,n,r,i,o){var s=r.view,l=t.ComponentClass,c=n.named.capture(),d=(0,p.processComponentArgs)(c);(function(e,t){e.named.has("id")&&(t.elementId=t.id)})(n,d),d.parentView=s,d[u.HAS_BLOCK]=o,d._targetObject=i.value()
var h=l.create(d),m=(0,a._instrumentStart)("render.component",_,h)
r.view=h,null!==s&&void 0!==s&&s.appendChild(h),""===h.tagName&&(e.isInteractive&&h.trigger("willRender"),h._transitionTo("hasElement"),e.isInteractive&&h.trigger("willInsertElement"))
var g=new f.default(e,h,c,m)
return n.named.has("class")&&(g.classRef=n.named.get("class")),e.isInteractive&&""!==h.tagName&&h.trigger("willRender"),g},n.prototype.layoutFor=function(e,t,n){var r=e.template
return r||(r=this.templateFor(t.component,n)),n.getCompiledBlock(y,r)},n.prototype.templateFor=function(e,t){var n,r=(0,a.get)(e,"layout"),i=e[s.OWNER]
if(r)return t.getTemplate(r,i)
var o=(0,a.get)(e,"layoutName")
return o&&(n=i.lookup("template:"+o))?n:i.lookup(g)},n.prototype.getSelf=function(e){return e.component[u.ROOT_REF]},n.prototype.didCreateElement=function(e,t,n){var r=e.component,i=e.classRef,o=e.environment;(0,l.setViewElement)(r,t)
var a=r.attributeBindings,s=r.classNames,u=r.classNameBindings
a&&a.length?function(e,t,n,r){for(var i,o,a,s=[],l=t.length-1;-1!==l;)i=t[l],a=(o=c.AttributeBinding.parse(i))[1],-1===s.indexOf(a)&&(s.push(a),c.AttributeBinding.install(e,n,o,r)),l--;-1===s.indexOf("id")&&r.addStaticAttribute(e,"id",n.elementId),-1===s.indexOf("style")&&c.IsVisibleBinding.install(e,n,r)}(t,a,r,n):(n.addStaticAttribute(t,"id",r.elementId),c.IsVisibleBinding.install(t,r,n)),i&&n.addDynamicAttribute(t,"class",i,!1),s&&s.length&&s.forEach(function(e){n.addStaticAttribute(t,"class",e)}),u&&u.length&&u.forEach(function(e){c.ClassNameBinding.install(t,r,e,n)}),r._transitionTo("hasElement"),o.isInteractive&&r.trigger("willInsertElement")},n.prototype.didRenderLayout=function(e,t){e.component[u.BOUNDS]=t,e.finalize()},n.prototype.getTag=function(e){return e.component[u.DIRTY_TAG]},n.prototype.didCreate=function(e){var t=e.component
e.environment.isInteractive&&(t._transitionTo("inDOM"),t.trigger("didInsertElement"),t.trigger("didRender"))},n.prototype.update=function(e){var t,n=e.component,r=e.args,i=e.argsRevision,o=e.environment
e.finalizer=(0,a._instrumentStart)("render.component",A,n),r.tag.validate(i)||(t=(0,p.processComponentArgs)(r),e.argsRevision=r.tag.value(),n[u.IS_DISPATCHING_ATTRS]=!0,n.setProperties(t),n[u.IS_DISPATCHING_ATTRS]=!1,n.trigger("didUpdateAttrs"),n.trigger("didReceiveAttrs")),o.isInteractive&&(n.trigger("willUpdate"),n.trigger("willRender"))},n.prototype.didUpdateLayout=function(e){e.finalize()},n.prototype.didUpdate=function(e){var t=e.component
e.environment.isInteractive&&(t.trigger("didUpdate"),t.trigger("didRender"))},n.prototype.getDestructor=function(e){return e},n}(h.default)
function _(e){return e.instrumentDetails({initialRender:!0})}function A(e){return e.instrumentDetails({initialRender:!1})}e.default=T
var w=new T
e.CurlyComponentDefinition=function(e){function n(n,r,i,o,a){var s=(0,t.possibleConstructorReturn)(this,e.call(this,n,a||w,r))
return s.template=i,s.args=o,s}return(0,t.inherits)(n,e),n}(r.ComponentDefinition)}),e("ember-glimmer/component-managers/mount",["exports","ember-babel","@glimmer/runtime","ember-routing","ember-glimmer/utils/references","ember-glimmer/component-managers/abstract","ember-glimmer/component-managers/outlet"],function(e,t,n,r,i,o,a){"use strict"
e.MountDefinition=void 0
var s=new(function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.create=function(e,t,n){var r=t.name,i=e.owner.buildChildEngineInstance(r)
i.boot()
var o={engine:i}
return o.modelReference=n.named.get("model"),o},n.prototype.layoutFor=function(e,t,n){var r=t.engine.lookup("template:application")
return n.getCompiledBlock(a.OutletLayoutCompiler,r)},n.prototype.getSelf=function(e){var t=e.engine,n=e.modelReference,o=t.factoryFor("controller:application")||(0,r.generateControllerFactory)(t,"application"),a=e.controller=o.create(),s=n.value()
return e.modelRevision=n.tag.value(),a.set("model",s),new i.RootReference(a)},n.prototype.getDestructor=function(e){return e.engine},n.prototype.didRenderLayout=function(){},n.prototype.update=function(e){var t,n=e.controller,r=e.modelReference,i=e.modelRevision
r.tag.validate(i)||(t=r.value(),e.modelRevision=r.tag.value(),n.set("model",t))},n}(o.default))
e.MountDefinition=function(e){function n(n){return(0,t.possibleConstructorReturn)(this,e.call(this,n,s,null))}return(0,t.inherits)(n,e),n}(n.ComponentDefinition)}),e("ember-glimmer/component-managers/outlet",["exports","ember-babel","@glimmer/runtime","ember-metal","ember-utils","ember-glimmer/utils/references","ember-glimmer/component-managers/abstract"],function(e,t,n,r,i,o,a){"use strict"
function s(e){var t=e.render
return{object:t.name+":"+t.outlet}}function l(){}e.OutletLayoutCompiler=e.OutletComponentDefinition=e.TopLevelOutletComponentDefinition=void 0
var u,c=function(){function e(e){this.outletState=e,this.instrument()}return e.prototype.instrument=function(){this.finalizer=(0,r._instrumentStart)("render.outlet",s,this.outletState)},e.prototype.finalize=function(){(0,this.finalizer)(),this.finalizer=l},e}(),f=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.create=function(e,t,n,r){var i=(r.outletState=r.outletState.get("outlets").get(t.outletName)).value()
return new c(i)},n.prototype.layoutFor=function(e,t,n){return n.getCompiledBlock(m,e.template)},n.prototype.getSelf=function(e){var t=e.outletState
return new o.RootReference(t.render.controller)},n.prototype.didRenderLayout=function(e){e.finalize()},n.prototype.getDestructor=function(){return null},n}(a.default),p=new f,d=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.create=function(e,t,n,r){return new c(r.outletState.value())},n}(f),h=((u=function(){function e(e){this.template=e}return e.prototype.compile=function(e){e.wrapLayout(this.template),e.tag.static("div"),e.attrs.static("id",(0,i.guidFor)(this)),e.attrs.static("class","ember-view")},e}()).id="wrapped-top-level-outlet",new(function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.layoutFor=function(e,t,n){return n.getCompiledBlock(u,e.template)},n}(d)))
e.TopLevelOutletComponentDefinition=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,"outlet",h,n))
return r.template=n.template,(0,i.generateGuid)(r),r}return(0,t.inherits)(n,e),n}(n.ComponentDefinition),e.OutletComponentDefinition=function(e){function n(n,r){var o=(0,t.possibleConstructorReturn)(this,e.call(this,"outlet",p,null))
return o.outletName=n,o.template=r,(0,i.generateGuid)(o),o}return(0,t.inherits)(n,e),n}(n.ComponentDefinition)
var m=e.OutletLayoutCompiler=function(){function e(e){this.template=e}return e.prototype.compile=function(e){e.wrapLayout(this.template)},e}()
m.id="outlet"}),e("ember-glimmer/component-managers/render",["exports","ember-babel","@glimmer/runtime","ember-debug","ember-routing","ember-glimmer/utils/references","ember-glimmer/component-managers/abstract","ember-glimmer/component-managers/outlet"],function(e,t,n,r,i,o,a,s){"use strict"
e.RenderDefinition=e.NON_SINGLETON_RENDER_MANAGER=e.SINGLETON_RENDER_MANAGER=e.AbstractRenderManager=void 0
var l=e.AbstractRenderManager=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.layoutFor=function(e,t,n){return n.getCompiledBlock(s.OutletLayoutCompiler,e.template)},n.prototype.getSelf=function(e){var t=e.controller
return new o.RootReference(t)},n}(a.default),u=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.create=function(e,t,n,r){var o=t.name,a=e.owner.lookup("controller:"+o)||(0,i.generateController)(e.owner,o)
return r.rootOutletState&&(r.outletState=r.rootOutletState.getOrphan(o)),{controller:a}},n.prototype.getDestructor=function(){return null},n}(l)
e.SINGLETON_RENDER_MANAGER=new u
var c=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.create=function(e,t,n,r){var o=t.name,a=t.env,s=n.positional.at(0),l=(a.owner.factoryFor("controller:"+o)||(0,i.generateControllerFactory)(a.owner,o)).create({model:s.value()})
return r.rootOutletState&&(r.outletState=r.rootOutletState.getOrphan(o)),{controller:l,model:s}},n.prototype.update=function(e){var t=e.controller,n=e.model
t.set("model",n.value())},n.prototype.getDestructor=function(e){return e.controller},n}(l)
e.NON_SINGLETON_RENDER_MANAGER=new c,e.RenderDefinition=function(e){function n(n,r,i,o){var a=(0,t.possibleConstructorReturn)(this,e.call(this,"render",o,null))
return a.name=n,a.template=r,a.env=i,a}return(0,t.inherits)(n,e),n}(n.ComponentDefinition)}),e("ember-glimmer/component-managers/root",["exports","ember-babel","@glimmer/runtime","ember-metal","ember-glimmer/utils/curly-component-state-bucket","ember-glimmer/component-managers/curly"],function(e,t,n,r,i,o){"use strict"
e.RootComponentDefinition=void 0
var a=new(function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.prototype.create=function(e,t,n,a){var s=t.ComponentClass.create(),l=(0,r._instrumentStart)("render.component",o.initialRenderInstrumentDetails,s)
return a.view=s,""===s.tagName&&(e.isInteractive&&s.trigger("willRender"),s._transitionTo("hasElement"),e.isInteractive&&s.trigger("willInsertElement")),new i.default(e,s,n.named.capture(),l)},n}(o.default))
e.RootComponentDefinition=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,"-root",a,{class:n.constructor,create:function(){return n}}))
return r.template=void 0,r.args=void 0,r}return(0,t.inherits)(n,e),n}(n.ComponentDefinition)}),e("ember-glimmer/component-managers/template-only",["exports","ember-babel","@glimmer/runtime","ember-glimmer/component-managers/abstract"],function(e,t,n,r){"use strict"
e.TemplateOnlyComponentDefinition=void 0
var i=function(){function e(e){this.template=e}return e.prototype.compile=function(e){e.wrapLayout(this.template)},e}()
i.id="template-only"
var o=function(e){function r(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(r,e),r.prototype.create=function(){return null},r.prototype.layoutFor=function(e,t,n){var r=e.template
return n.getCompiledBlock(i,r)},r.prototype.getSelf=function(){return n.NULL_REFERENCE},r.prototype.getDestructor=function(){return null},r}(r.default)
e.default=o
var a=new o
e.TemplateOnlyComponentDefinition=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this,n,a,null))
return i.template=r,i}return(0,t.inherits)(n,e),n}(n.ComponentDefinition)}),e("ember-glimmer/component",["exports","@glimmer/reference","@glimmer/runtime","ember-debug","ember-metal","ember-runtime","ember-utils","ember-views","ember-glimmer/utils/references"],function(e,t,n,r,i,o,a,s,l){"use strict"
var u
e.BOUNDS=e.HAS_BLOCK=e.IS_DISPATCHING_ATTRS=e.ROOT_REF=e.ARGS=e.DIRTY_TAG=void 0
var c=e.DIRTY_TAG=(0,a.symbol)("DIRTY_TAG"),f=e.ARGS=(0,a.symbol)("ARGS"),p=e.ROOT_REF=(0,a.symbol)("ROOT_REF"),d=e.IS_DISPATCHING_ATTRS=(0,a.symbol)("IS_DISPATCHING_ATTRS")
e.HAS_BLOCK=(0,a.symbol)("HAS_BLOCK")
var h=e.BOUNDS=(0,a.symbol)("BOUNDS"),m=s.CoreView.extend(s.ChildViewsSupport,s.ViewStateSupport,s.ClassNamesSupport,o.TargetActionSupport,s.ActionSupport,s.ViewMixin,((u={isComponent:!0,init:function(){this._super.apply(this,arguments),this[d]=!1,this[c]=new t.DirtyableTag,this[p]=new l.RootReference(this),this[h]=null},rerender:function(){this[c].dirty(),this._super()},__defineNonEnumerable:function(e){this[e.name]=e.descriptor.value}})[i.PROPERTY_DID_CHANGE]=function(e){if(!this[d]){var t=this[f],n=t&&t[e]
n&&n[l.UPDATE]&&n[l.UPDATE]((0,i.get)(this,e))}},u.getAttr=function(e){return this.get(e)},u.readDOMAttr=function(e){var t=(0,s.getViewElement)(this)
return(0,n.readDOMAttr)(t,e)},u))
m[a.NAME_KEY]="Ember.Component",m.reopenClass({isComponentFactory:!0,positionalParams:[]}),e.default=m}),e("ember-glimmer/components/checkbox",["exports","ember-metal","ember-glimmer/component","ember-glimmer/templates/empty"],function(e,t,n,r){"use strict"
e.default=n.default.extend({layout:r.default,classNames:["ember-checkbox"],tagName:"input",attributeBindings:["type","checked","indeterminate","disabled","tabindex","name","autofocus","required","form"],type:"checkbox",disabled:!1,indeterminate:!1,didInsertElement:function(){this._super.apply(this,arguments),(0,t.get)(this,"element").indeterminate=!!(0,t.get)(this,"indeterminate")},change:function(){(0,t.set)(this,"checked",this.$().prop("checked"))}})}),e("ember-glimmer/components/link-to",["exports","ember-debug","ember-metal","ember-runtime","ember-views","ember-glimmer/component","ember-glimmer/templates/link-to"],function(e,t,n,r,i,o,a){"use strict"
var s=o.default.extend({layout:a.default,tagName:"a","current-when":null,title:null,rel:null,tabindex:null,target:null,activeClass:"active",loadingClass:"loading",disabledClass:"disabled",replace:!1,attributeBindings:["href","title","rel","tabindex","target"],classNameBindings:["active","loading","disabled","transitioningIn","transitioningOut"],eventName:"click",init:function(){this._super.apply(this,arguments)
var e=(0,n.get)(this,"eventName")
this.on(e,this,this._invoke)},_routing:r.inject.service("-routing"),disabled:(0,n.computed)({get:function(){return!1},set:function(e,t){return this._isDisabled=t,!!t&&(0,n.get)(this,"disabledClass")}}),_isActive:function(e){if((0,n.get)(this,"loading"))return!1
var t,r=(0,n.get)(this,"current-when")
if("boolean"==typeof r)return r
var i=!!r
r=(r=r||(0,n.get)(this,"qualifiedRouteName")).split(" ")
var o=(0,n.get)(this,"_routing"),a=(0,n.get)(this,"models"),s=(0,n.get)(this,"resolvedQueryParams")
for(t=0;t<r.length;t++)if(o.isActiveForRoute(a,s,r[t],e,i))return!0
return!1},active:(0,n.computed)("activeClass","_active",function(){return!!this.get("_active")&&(0,n.get)(this,"activeClass")}),_active:(0,n.computed)("_routing.currentState","attrs.params",function(){var e=(0,n.get)(this,"_routing.currentState")
return!!e&&this._isActive(e)}),willBeActive:(0,n.computed)("_routing.targetState",function(){var e=(0,n.get)(this,"_routing"),t=(0,n.get)(e,"targetState")
if((0,n.get)(e,"currentState")!==t)return this._isActive(t)}),transitioningIn:(0,n.computed)("active","willBeActive",function(){return!0===(0,n.get)(this,"willBeActive")&&!(0,n.get)(this,"_active")&&"ember-transitioning-in"}),transitioningOut:(0,n.computed)("active","willBeActive",function(){return!(!1!==(0,n.get)(this,"willBeActive")||!(0,n.get)(this,"_active"))&&"ember-transitioning-out"}),_invoke:function(e){if(!(0,i.isSimpleClick)(e))return!0
var t=(0,n.get)(this,"preventDefault"),r=(0,n.get)(this,"target")
if(!1!==t&&(r&&"_self"!==r||e.preventDefault()),!1===(0,n.get)(this,"bubbles")&&e.stopPropagation(),this._isDisabled)return!1
if((0,n.get)(this,"loading"))return!1
if(r&&"_self"!==r)return!1
var o=(0,n.get)(this,"qualifiedRouteName"),a=(0,n.get)(this,"models"),s=(0,n.get)(this,"queryParams.values"),l=(0,n.get)(this,"replace"),u={queryParams:s,routeName:o}
return(0,n.flaggedInstrument)("interaction.link-to",u,this._generateTransition(u,o,a,s,l)),!1},_generateTransition:function(e,t,r,i,o){var a=(0,n.get)(this,"_routing")
return function(){e.transition=a.transitionTo(t,r,i,o)}},queryParams:null,qualifiedRouteName:(0,n.computed)("targetRouteName","_routing.currentState",function(){var e=(0,n.get)(this,"params"),t=e.length,r=e[t-1]
return r&&r.isQueryParams&&t--,(this[o.HAS_BLOCK]?0===t:1===t)?(0,n.get)(this,"_routing.currentRouteName"):(0,n.get)(this,"targetRouteName")}),resolvedQueryParams:(0,n.computed)("queryParams",function(){var e={},t=(0,n.get)(this,"queryParams")
if(!t)return e
var r=t.values
for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i])
return e}),href:(0,n.computed)("models","qualifiedRouteName",function(){if("a"===(0,n.get)(this,"tagName")){var e=(0,n.get)(this,"qualifiedRouteName"),t=(0,n.get)(this,"models")
if((0,n.get)(this,"loading"))return(0,n.get)(this,"loadingHref")
var r=(0,n.get)(this,"_routing"),i=(0,n.get)(this,"queryParams.values")
return r.generateURL(e,t,i)}}),loading:(0,n.computed)("_modelsAreLoaded","qualifiedRouteName",function(){var e=(0,n.get)(this,"qualifiedRouteName")
if(!(0,n.get)(this,"_modelsAreLoaded")||null===e||void 0===e)return(0,n.get)(this,"loadingClass")}),_modelsAreLoaded:(0,n.computed)("models",function(){var e,t,r=(0,n.get)(this,"models")
for(e=0;e<r.length;e++)if(null===(t=r[e])||void 0===t)return!1
return!0}),_getModels:function(e){var t,n,r=e.length-1,i=new Array(r)
for(t=0;t<r;t++)n=e[t+1],i[t]=n
return i},loadingHref:"#",didReceiveAttrs:function(){var e=void 0,t=(0,n.get)(this,"params")
t&&(t=t.slice())
var r=(0,n.get)(this,"disabledWhen")
void 0!==r&&this.set("disabled",r),this[o.HAS_BLOCK]||this.set("linkTitle",t.shift()),this.set("targetRouteName",t[0])
var i=t[t.length-1]
e=i&&i.isQueryParams?t.pop():{values:{}},this.set("queryParams",e),t.length>1?this.set("models",this._getModels(t)):this.set("models",[])}})
s.toString=function(){return"LinkComponent"},s.reopenClass({positionalParams:"params"}),e.default=s}),e("ember-glimmer/components/text_area",["exports","ember-views","ember-glimmer/component","ember-glimmer/templates/empty"],function(e,t,n,r){"use strict"
e.default=n.default.extend(t.TextSupport,{classNames:["ember-text-area"],layout:r.default,tagName:"textarea",attributeBindings:["rows","cols","name","selectionEnd","selectionStart","wrap","lang","dir","value"],rows:null,cols:null})}),e("ember-glimmer/components/text_field",["exports","ember-environment","ember-metal","ember-views","ember-glimmer/component","ember-glimmer/templates/empty"],function(e,t,n,r,i,o){"use strict"
var a=Object.create(null)
e.default=i.default.extend(r.TextSupport,{layout:o.default,classNames:["ember-text-field"],tagName:"input",attributeBindings:["accept","autocomplete","autosave","dir","formaction","formenctype","formmethod","formnovalidate","formtarget","height","inputmode","lang","list","type","max","min","multiple","name","pattern","size","step","value","width"],value:"",type:(0,n.computed)({get:function(){return"text"},set:function(e,n){var r="text"
return function(e){if(e in a)return a[e]
if(!t.environment.hasDOM)return a[e]=e,e
var n=document.createElement("input")
try{n.type=e}catch(e){}return a[e]=n.type===e}(n)&&(r=n),r}}),size:null,pattern:null,min:null,max:null})}),e("ember-glimmer/dom",["exports","@glimmer/runtime","@glimmer/node"],function(e,t,n){"use strict"
Object.defineProperty(e,"DOMChanges",{enumerable:!0,get:function(){return t.DOMChanges}}),Object.defineProperty(e,"DOMTreeConstruction",{enumerable:!0,get:function(){return t.DOMTreeConstruction}}),Object.defineProperty(e,"NodeDOMTreeConstruction",{enumerable:!0,get:function(){return n.NodeDOMTreeConstruction}})}),e("ember-glimmer/environment",["exports","ember-babel","@glimmer/runtime","ember-debug","ember-metal","ember-utils","ember-views","ember-glimmer/component-managers/curly","ember-glimmer/component-managers/template-only","ember-glimmer/syntax","ember-glimmer/utils/debug-stack","ember-glimmer/utils/iterable","ember-glimmer/utils/references","ember-glimmer/helpers/-class","ember-glimmer/helpers/-html-safe","ember-glimmer/helpers/-input-type","ember-glimmer/helpers/-normalize-class","ember-glimmer/helpers/action","ember-glimmer/helpers/component","ember-glimmer/helpers/concat","ember-glimmer/helpers/each-in","ember-glimmer/helpers/get","ember-glimmer/helpers/hash","ember-glimmer/helpers/if-unless","ember-glimmer/helpers/log","ember-glimmer/helpers/mut","ember-glimmer/helpers/query-param","ember-glimmer/helpers/readonly","ember-glimmer/helpers/unbound","ember-glimmer/modifiers/action","ember-glimmer/protocol-for-url"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h,m,g,v,b,y,E,T,_,A,w,C,S,O,x,R,N){"use strict"
function L(e){return{object:"component:"+e}}var I=function(e){function r(r){var l=(0,t.possibleConstructorReturn)(this,e.call(this,r))
return l.owner=r[o.OWNER],l.isInteractive=l.owner.lookup("-environment:main").isInteractive,l.destroyedComponents=[],(0,N.default)(l),l._definitionCache=new i.Cache(2e3,function(e){var t=e.name,n=e.source,r=e.owner,i=(0,a.lookupComponent)(r,t,{source:n}),o=i.component,l=i.layout
if(o||l)return new s.CurlyComponentDefinition(t,o,l,void 0,void 0)},function(e){var t=e.name,n=e.source,r=e.owner,i=n&&l._resolveLocalLookupName(t,n,r)||t
return(0,o.guidFor)(r)+"|"+i}),l._templateCache=new i.Cache(1e3,function(e){var t,n=e.Template,r=e.owner
return"function"==typeof n.create?n.create(((t={env:l})[o.OWNER]=r,t)):n},function(e){var t=e.Template,n=e.owner
return(0,o.guidFor)(n)+"|"+t.id}),l._compilerCache=new i.Cache(10,function(e){return new i.Cache(2e3,function(t){var r=new e(t)
return(0,n.compileLayout)(r,l)},function(e){var t=e.meta.owner
return(0,o.guidFor)(t)+"|"+e.id})},function(e){return e.id}),l.builtInModifiers={action:new R.default},l.builtInHelpers={if:A.inlineIf,action:v.default,concat:y.default,get:T.default,hash:_.default,log:w.default,mut:C.default,"query-params":S.default,readonly:O.default,unbound:x.default,unless:A.inlineUnless,"-class":d.default,"-each-in":E.default,"-input-type":m.default,"-normalize-class":g.default,"-html-safe":h.default,"-get-dynamic-var":n.getDynamicVar},l}return(0,t.inherits)(r,e),r.create=function(e){return new this(e)},r.prototype.protocolForURL=function(e){return e},r.prototype._resolveLocalLookupName=function(e,t,n){return n._resolveLocalLookupName(e,t)},r.prototype.macros=function(){var t=e.prototype.macros.call(this)
return(0,u.populateMacros)(t.blocks,t.inlines),t},r.prototype.hasComponentDefinition=function(){return!1},r.prototype.getComponentDefinition=function(e,t){var n=t.owner,r=t.moduleName,o=(0,i._instrumentStart)("render.getComponentDefinition",L,e),a=this._definitionCache.get({name:e,source:r&&"template:"+r,owner:n})
return o(),a},r.prototype.getTemplate=function(e,t){return this._templateCache.get({Template:e,owner:t})},r.prototype.getCompiledBlock=function(e,t){return this._compilerCache.get(e).get(t)},r.prototype.hasPartial=function(e,t){return(0,a.hasPartial)(e,t.owner)},r.prototype.lookupPartial=function(e,t){var n={name:e,template:(0,a.lookupPartial)(e,t.owner)}
if(n.template)return n
throw new Error(e+" is not a partial")},r.prototype.hasHelper=function(e,t){var n=t.owner,r=t.moduleName
return!("component"!==e&&!this.builtInHelpers[e])||(n.hasRegistration("helper:"+e,{source:"template:"+r})||n.hasRegistration("helper:"+e))},r.prototype.lookupHelper=function(e,t){if("component"===e)return function(e,n){return(0,b.default)(e,n,t)}
var n=t.owner,r=t.moduleName,i=this.builtInHelpers[e]
if(i)return i
var o=n.factoryFor("helper:"+e,r&&{source:"template:"+r}||{})||n.factoryFor("helper:"+e),a=void 0
if(o.class.isSimpleHelperFactory)a=p.SimpleHelperReference
else{if(!o.class.isHelperFactory)throw new Error(e+" is not a helper")
a=p.ClassBasedHelperReference}return function(e,t){return a.create(o,e,t.capture())}},r.prototype.hasModifier=function(e){return!!this.builtInModifiers[e]},r.prototype.lookupModifier=function(e){var t=this.builtInModifiers[e]
if(t)return t
throw new Error(e+" is not a modifier")},r.prototype.toConditionalReference=function(e){return p.ConditionalReference.create(e)},r.prototype.iterableFor=function(e,t){return(0,f.default)(e,t)},r.prototype.scheduleInstallModifier=function(t,n){this.isInteractive&&e.prototype.scheduleInstallModifier.call(this,t,n)},r.prototype.scheduleUpdateModifier=function(t,n){this.isInteractive&&e.prototype.scheduleUpdateModifier.call(this,t,n)},r.prototype.didDestroy=function(e){e.destroy()},r.prototype.begin=function(){this.inTransaction=!0,e.prototype.begin.call(this)},r.prototype.commit=function(){var t,n=this.destroyedComponents
for(this.destroyedComponents=[],t=0;t<n.length;t++)n[t].destroy()
e.prototype.commit.call(this),this.inTransaction=!1},r}(n.Environment)
e.default=I}),e("ember-glimmer/helper",["exports","@glimmer/reference","ember-runtime","ember-utils"],function(e,t,n,r){"use strict"
e.SimpleHelper=e.RECOMPUTE_TAG=void 0,e.helper=function(e){return new a(e)}
var i=e.RECOMPUTE_TAG=(0,r.symbol)("RECOMPUTE_TAG"),o=n.FrameworkObject.extend({isHelperInstance:!0,init:function(){this._super.apply(this,arguments),this[i]=new t.DirtyableTag},recompute:function(){this[i].dirty()}})
o.reopenClass({isHelperFactory:!0})
var a=e.SimpleHelper=function(){function e(e){this.compute=e,this.isHelperFactory=!0,this.isHelperInstance=!0,this.isSimpleHelperFactory=!0}return e.prototype.create=function(){return this},e}()
e.default=o}),e("ember-glimmer/helpers/-class",["exports","ember-runtime","ember-glimmer/utils/references"],function(e,t,n){"use strict"
function r(e){var n=e.positional,r=n.at(0),i=n.length,o=r.value()
return!0===o?i>1?t.String.dasherize(n.at(1).value()):null:!1===o?i>2?t.String.dasherize(n.at(2).value()):null:o}e.default=function(e,t){return new n.InternalHelperReference(r,t.capture())}}),e("ember-glimmer/helpers/-html-safe",["exports","ember-glimmer/utils/references","ember-glimmer/utils/string"],function(e,t,n){"use strict"
function r(e){var t=e.positional.at(0)
return new n.SafeString(t.value())}e.default=function(e,n){return new t.InternalHelperReference(r,n.capture())}}),e("ember-glimmer/helpers/-input-type",["exports","ember-glimmer/utils/references"],function(e,t){"use strict"
function n(e){return"checkbox"===e.positional.at(0).value()?"-checkbox":"-text-field"}e.default=function(e,r){return new t.InternalHelperReference(n,r.capture())}}),e("ember-glimmer/helpers/-normalize-class",["exports","ember-runtime","ember-glimmer/utils/references"],function(e,t,n){"use strict"
function r(e){var n=e.positional,r=n.at(0).value().split("."),i=r[r.length-1],o=n.at(1).value()
return!0===o?t.String.dasherize(i):o||0===o?String(o):""}e.default=function(e,t){return new n.InternalHelperReference(r,t.capture())}}),e("ember-glimmer/helpers/action",["exports","@glimmer/reference","ember-debug","ember-metal","ember-utils","ember-glimmer/utils/references"],function(e,t,n,r,i,o){"use strict"
e.ACTION=e.INVOKE=void 0,e.default=function(e,n){var i=n.named,c=n.positional.capture().references,f=c[0],p=c[1],d=c.slice(2),h=p._propertyKey,m=i.has("target")?i.get("target"):f,g=function(e,t){var n=void 0
t.length>0&&(n=function(e){return t.map(function(e){return e.value()}).concat(e)})
var i=void 0
e&&(i=function(t){var n=e.value()
return n&&t.length>0&&(t[0]=(0,r.get)(t[0],n)),t})
return n&&i?function(e){return i(n(e))}:n||i||l}(i.has("value")&&i.get("value"),d),v=void 0
return(v="function"==typeof p[a]?u(p,p,p[a],g,h):(0,t.isConst)(m)&&(0,t.isConst)(p)?u(f.value(),m.value(),p.value(),g,h):function(e,t,n,r,i){return function(){return u(e,t.value(),n.value(),r,i).apply(void 0,arguments)}}(f.value(),m,p,g,h))[s]=!0,new o.UnboundReference(v)}
var a=e.INVOKE=(0,i.symbol)("INVOKE"),s=e.ACTION=(0,i.symbol)("ACTION")
function l(e){return e}function u(e,t,n,i,o){var s,l=void 0,u=void 0
return"function"==typeof n[a]?(l=n,u=n[a]):"string"===(s=typeof n)?(l=t,u=t.actions&&t.actions[n]):"function"===s&&(l=e,u=n),function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,o={target:l,args:t,label:"@glimmer/closure-action"}
return(0,r.flaggedInstrument)("interaction.ember-action",o,function(){return r.run.join.apply(r.run,[l,u].concat(i(t)))})}}}),e("ember-glimmer/helpers/component",["exports","ember-babel","@glimmer/runtime","ember-debug","ember-utils","ember-glimmer/component-managers/curly","ember-glimmer/utils/references"],function(e,t,n,r,i,o,a){"use strict"
e.ClosureComponentReference=void 0,e.default=function(e,t,n){return s.create(t.capture(),n,e.env)}
var s=e.ClosureComponentReference=function(e){function r(n,r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this)),a=n.positional.at(0)
return o.defRef=a,o.tag=a.tag,o.args=n,o.meta=r,o.env=i,o.lastDefinition=void 0,o.lastName=void 0,o}return(0,t.inherits)(r,e),r.create=function(e,t,n){return new r(e,t,n)},r.prototype.compute=function(){var e=this.args,t=this.defRef,r=this.env,a=this.meta,s=this.lastDefinition,l=this.lastName,u=t.value(),c=void 0
if(u&&u===l)return s
if(this.lastName=u,"string"==typeof u)c=r.getComponentDefinition(u,a)
else{if(!(0,n.isComponentDefinition)(u))return null
c=u}var f=function(e,t){var n=function(e,t){var n,r,a,s=e.args,l=e.ComponentClass.class.positionalParams,u=t.positional.references.slice(1)
l&&u.length&&(0,o.validatePositionalParameters)(t.named,u,l)
var c={}
if("string"!=typeof l&&l.length>0){for(n=Math.min(l.length,u.length),r=0;r<n;r++)a=l[r],c[a]=u[r]
u.length=0}var f=s&&s.named||{},p=s&&s.positional||[],d=new Array(Math.max(p.length,u.length))
d.splice.apply(d,[0,p.length].concat(p)),d.splice.apply(d,[0,u.length].concat(u))
var h=(0,i.assign)({},f,c,t.named.map)
return{positional:d,named:h}}(e,t)
return new o.CurlyComponentDefinition(e.name,e.ComponentClass,e.template,n)}(c,e)
return this.lastDefinition=f,f},r}(a.CachedReference)}),e("ember-glimmer/helpers/concat",["exports","@glimmer/runtime","ember-glimmer/utils/references"],function(e,t,n){"use strict"
function r(e){return e.positional.value().map(t.normalizeTextValue).join("")}e.default=function(e,t){return new n.InternalHelperReference(r,t.capture())}}),e("ember-glimmer/helpers/each-in",["exports","ember-utils"],function(e,t){"use strict"
e.isEachIn=function(e){return e&&e[n]},e.default=function(e,t){var r=Object.create(t.positional.at(0))
return r[n]=!0,r}
var n=(0,t.symbol)("EACH_IN")}),e("ember-glimmer/helpers/get",["exports","ember-babel","@glimmer/reference","@glimmer/runtime","ember-metal","ember-glimmer/utils/references"],function(e,t,n,r,i,o){"use strict"
e.default=function(e,t){return a.create(t.positional.at(0),t.positional.at(1))}
var a=function(e){function a(i,o){var a=(0,t.possibleConstructorReturn)(this,e.call(this))
a.sourceReference=i,a.pathReference=o,a.lastPath=null,a.innerReference=r.NULL_REFERENCE
var s=a.innerTag=n.UpdatableTag.create(n.CONSTANT_TAG)
return a.tag=(0,n.combine)([i.tag,o.tag,s]),a}return(0,t.inherits)(a,e),a.create=function(e,t){var i
return(0,n.isConst)(t)?void 0===(i=t.value())||null===i||""===i?r.NULL_REFERENCE:"string"==typeof i&&i.indexOf(".")>-1?(0,n.referenceFromParts)(e,i.split(".")):e.get(i):new a(e,t)},a.prototype.compute=function(){var e=this.lastPath,t=this.innerReference,i=this.innerTag,o=this.lastPath=this.pathReference.value()
return o!==e&&(t=void 0===o||null===o||""===o?r.NULL_REFERENCE:"string"==typeof o&&o.indexOf(".")>-1?(0,n.referenceFromParts)(this.sourceReference,o.split(".")):this.sourceReference.get(o),i.inner.update(t.tag),this.innerReference=t),t.value()},a.prototype[o.UPDATE]=function(e){(0,i.set)(this.sourceReference.value(),this.pathReference.value(),e)},a}(o.CachedReference)}),e("ember-glimmer/helpers/hash",["exports"],function(e){"use strict"
e.default=function(e,t){return t.named.capture()}}),e("ember-glimmer/helpers/if-unless",["exports","ember-babel","@glimmer/reference","ember-debug","ember-glimmer/utils/references"],function(e,t,n,r,i){"use strict"
e.inlineIf=function(e,t){var n=t.positional
return o.create(n.at(0),n.at(1),n.at(2))},e.inlineUnless=function(e,t){var n=t.positional
return o.create(n.at(0),n.at(2),n.at(1))}
var o=function(e){function r(r,i,o){var a=(0,t.possibleConstructorReturn)(this,e.call(this))
return a.branchTag=n.UpdatableTag.create(n.CONSTANT_TAG),a.tag=(0,n.combine)([r.tag,a.branchTag]),a.cond=r,a.truthy=i,a.falsy=o,a}return(0,t.inherits)(r,e),r.create=function(e,t,o){var a=i.ConditionalReference.create(e)
return(0,n.isConst)(a)?a.value()?t:o:new r(a,t,o)},r.prototype.compute=function(){var e=this.cond.value()?this.truthy:this.falsy
return this.branchTag.inner.update(e.tag),e.value()},r}(i.CachedReference)}),e("ember-glimmer/helpers/loc",["exports","ember-glimmer/helper","ember-runtime"],function(e,t,n){"use strict"
e.default=(0,t.helper)(function(e){return n.String.loc.apply(null,e)})}),e("ember-glimmer/helpers/log",["exports","ember-glimmer/utils/references","ember-console"],function(e,t,n){"use strict"
function r(e){var t=e.positional
n.default.log.apply(null,t.value())}e.default=function(e,n){return new t.InternalHelperReference(r,n.capture())}})
e("ember-glimmer/helpers/mut",["exports","ember-debug","ember-utils","ember-glimmer/utils/references","ember-glimmer/helpers/action"],function(e,t,n,r,i){"use strict"
e.isMut=s,e.unMut=function(e){return e[a]||e},e.default=function(e,t){var n=t.positional.at(0)
if(s(n))return n
var l=Object.create(n)
return l[a]=n,l[i.INVOKE]=n[r.UPDATE],l[o]=!0,l}
var o=(0,n.symbol)("MUT"),a=(0,n.symbol)("SOURCE")
function s(e){return e&&e[o]}}),e("ember-glimmer/helpers/query-param",["exports","ember-debug","ember-routing","ember-utils","ember-glimmer/utils/references"],function(e,t,n,r,i){"use strict"
function o(e){e.positional
var t=e.named
return n.QueryParams.create({values:(0,r.assign)({},t.value())})}e.default=function(e,t){return new i.InternalHelperReference(o,t.capture())}}),e("ember-glimmer/helpers/readonly",["exports","ember-glimmer/utils/references","ember-glimmer/helpers/mut"],function(e,t,n){"use strict"
e.default=function(e,r){var i=(0,n.unMut)(r.positional.at(0)),o=Object.create(i)
return o[t.UPDATE]=void 0,o}}),e("ember-glimmer/helpers/unbound",["exports","ember-debug","ember-glimmer/utils/references"],function(e,t,n){"use strict"
e.default=function(e,t){return n.UnboundReference.create(t.positional.at(0).value())}}),e("ember-glimmer/index",["exports","ember-glimmer/helpers/action","ember-glimmer/templates/root","ember-glimmer/template","ember-glimmer/components/checkbox","ember-glimmer/components/text_field","ember-glimmer/components/text_area","ember-glimmer/components/link-to","ember-glimmer/component","ember-glimmer/helper","ember-glimmer/environment","ember-glimmer/utils/string","ember-glimmer/renderer","ember-glimmer/template_registry","ember-glimmer/setup-registry","ember-glimmer/dom","ember-glimmer/syntax","ember-glimmer/component-managers/abstract"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h,m,g,v){"use strict"
Object.defineProperty(e,"INVOKE",{enumerable:!0,get:function(){return t.INVOKE}}),Object.defineProperty(e,"RootTemplate",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"template",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Checkbox",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"TextField",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"TextArea",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"LinkComponent",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"Component",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"Helper",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"helper",{enumerable:!0,get:function(){return u.helper}}),Object.defineProperty(e,"Environment",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"SafeString",{enumerable:!0,get:function(){return f.SafeString}}),Object.defineProperty(e,"escapeExpression",{enumerable:!0,get:function(){return f.escapeExpression}}),Object.defineProperty(e,"htmlSafe",{enumerable:!0,get:function(){return f.htmlSafe}}),Object.defineProperty(e,"isHTMLSafe",{enumerable:!0,get:function(){return f.isHTMLSafe}}),Object.defineProperty(e,"Renderer",{enumerable:!0,get:function(){return p.Renderer}}),Object.defineProperty(e,"InertRenderer",{enumerable:!0,get:function(){return p.InertRenderer}}),Object.defineProperty(e,"InteractiveRenderer",{enumerable:!0,get:function(){return p.InteractiveRenderer}}),Object.defineProperty(e,"_resetRenderers",{enumerable:!0,get:function(){return p._resetRenderers}}),Object.defineProperty(e,"renderSettled",{enumerable:!0,get:function(){return p.renderSettled}}),Object.defineProperty(e,"getTemplate",{enumerable:!0,get:function(){return d.getTemplate}}),Object.defineProperty(e,"setTemplate",{enumerable:!0,get:function(){return d.setTemplate}}),Object.defineProperty(e,"hasTemplate",{enumerable:!0,get:function(){return d.hasTemplate}}),Object.defineProperty(e,"getTemplates",{enumerable:!0,get:function(){return d.getTemplates}}),Object.defineProperty(e,"setTemplates",{enumerable:!0,get:function(){return d.setTemplates}}),Object.defineProperty(e,"setupEngineRegistry",{enumerable:!0,get:function(){return h.setupEngineRegistry}}),Object.defineProperty(e,"setupApplicationRegistry",{enumerable:!0,get:function(){return h.setupApplicationRegistry}}),Object.defineProperty(e,"DOMChanges",{enumerable:!0,get:function(){return m.DOMChanges}}),Object.defineProperty(e,"NodeDOMTreeConstruction",{enumerable:!0,get:function(){return m.NodeDOMTreeConstruction}}),Object.defineProperty(e,"DOMTreeConstruction",{enumerable:!0,get:function(){return m.DOMTreeConstruction}})
Object.defineProperty(e,"_registerMacros",{enumerable:!0,get:function(){return g.registerMacros}}),Object.defineProperty(e,"_experimentalMacros",{enumerable:!0,get:function(){return g.experimentalMacros}}),Object.defineProperty(e,"AbstractComponentManager",{enumerable:!0,get:function(){return v.default}})}),e("ember-glimmer/modifiers/action",["exports","ember-debug","ember-metal","ember-utils","ember-views","ember-glimmer/helpers/action"],function(e,t,n,r,i,o){"use strict"
e.ActionState=e.ActionHelper=void 0
var a=["alt","shift","meta","ctrl"],s=/^click|mouse|touch/
var l=e.ActionHelper={registeredActions:i.ActionManager.registeredActions,registerAction:function(e){var t=e.actionId
return i.ActionManager.registeredActions[t]=e,t},unregisterAction:function(e){var t=e.actionId
delete i.ActionManager.registeredActions[t]}},u=e.ActionState=function(){function e(e,t,n,r,i,o,a,s){this.element=e,this.actionId=t,this.actionName=n,this.actionArgs=r,this.namedArgs=i,this.positional=o,this.implicitTarget=a,this.dom=s,this.eventName=this.getEventName()}return e.prototype.getEventName=function(){return this.namedArgs.get("on").value()||"click"},e.prototype.getActionArgs=function(){var e,t=new Array(this.actionArgs.length)
for(e=0;e<this.actionArgs.length;e++)t[e]=this.actionArgs[e].value()
return t},e.prototype.getTarget=function(){var e=this.implicitTarget,t=this.namedArgs
return t.has("target")?t.get("target").value():e.value()},e.prototype.handler=function(e){var t=this,r=this.actionName,l=this.namedArgs,u=l.get("bubbles"),c=l.get("preventDefault"),f=l.get("allowedKeys"),p=this.getTarget()
return!function(e,t){var n
if(null===t||void 0===t){if(s.test(e.type))return(0,i.isSimpleClick)(e)
t=""}if(t.indexOf("any")>=0)return!0
for(n=0;n<a.length;n++)if(e[a[n]+"Key"]&&-1===t.indexOf(a[n]))return!1
return!0}(e,f.value())||(!1!==c.value()&&e.preventDefault(),!1===u.value()&&e.stopPropagation(),n.run.join(function(){var e=t.getActionArgs(),i={args:e,target:p,name:null}
"function"!=typeof r[o.INVOKE]?"function"!=typeof r?(i.name=r,p.send?(0,n.flaggedInstrument)("interaction.ember-action",i,function(){p.send.apply(p,[r].concat(e))}):(0,n.flaggedInstrument)("interaction.ember-action",i,function(){p[r].apply(p,e)})):(0,n.flaggedInstrument)("interaction.ember-action",i,function(){r.apply(p,e)}):(0,n.flaggedInstrument)("interaction.ember-action",i,function(){r[o.INVOKE].apply(r,e)})}),!1)},e.prototype.destroy=function(){l.unregisterAction(this)},e}(),c=function(){function e(){}return e.prototype.create=function(e,t,n,i){var a,s=t.capture(),l=s.named,c=s.positional,f=void 0,p=void 0,d=void 0
c.length>1&&(f=c.at(0),(d=c.at(1))[o.INVOKE]?p=d:(d._propertyKey,p=d.value()))
var h=[]
for(a=2;a<c.length;a++)h.push(c.at(a))
var m=(0,r.uuid)()
return new u(e,m,p,h,l,c,f,i)},e.prototype.install=function(e){var t=e.dom,n=e.element,r=e.actionId
l.registerAction(e),t.setAttribute(n,"data-ember-action",""),t.setAttribute(n,"data-ember-action-"+r,r)},e.prototype.update=function(e){var t=e.positional.at(1)
t[o.INVOKE]||(e.actionName=t.value()),e.eventName=e.getEventName()},e.prototype.getDestructor=function(e){return e},e}()
e.default=c}),e("ember-glimmer/protocol-for-url",["exports","ember-environment","node-module"],function(e,t,n){"use strict"
e.default=function(e){var i=void 0
if(t.environment.hasDOM&&(i=o.call(e,"foobar:baz")),"foobar:"===i)e.protocolForURL=o
else if("object"==typeof URL)r=URL,e.protocolForURL=a
else{if(!n.IS_NODE)throw new Error("Could not find valid URL parsing mechanism for URL Sanitization")
r=(0,n.require)("url"),e.protocolForURL=a}}
var r=void 0,i=void 0
function o(e){return i||(i=document.createElement("a")),i.href=e,i.protocol}function a(e){var t=null
return"string"==typeof e&&(t=r.parse(e).protocol),null===t?":":t}}),e("ember-glimmer/renderer",["exports","ember-babel","@glimmer/reference","ember-debug","ember-metal","ember-views","ember-glimmer/component","ember-glimmer/component-managers/outlet","ember-glimmer/component-managers/root","ember-glimmer/utils/references","@glimmer/runtime","rsvp"],function(e,t,n,r,i,o,a,s,l,u,c,f){"use strict"
e.InteractiveRenderer=e.InertRenderer=e.Renderer=e.DynamicScope=void 0,e._resetRenderers=function(){m.length=0},e.renderSettled=function(){return null===b&&(b=f.default.defer(),i.run.currentRunLoop||p.schedule("actions",null,v)),b.promise}
var p=i.run.backburner,d=e.DynamicScope=function(){function e(e,t,n){this.view=e,this.outletState=t,this.rootOutletState=n}return e.prototype.child=function(){return new e(this.view,this.outletState,this.rootOutletState)},e.prototype.get=function(e){return this.outletState},e.prototype.set=function(e,t){return this.outletState=t,t},e}(),h=function(){function e(e,t,n,r,i,a){var s=this
this.id=(0,o.getViewId)(e),this.env=t,this.root=e,this.result=void 0,this.shouldReflush=!1,this.destroyed=!1
var l=this.options={alwaysRevalidate:!1}
this.render=function(){var e=n.render(r,i,a),t=void 0
do{t=e.next()}while(!t.done)
var o=s.result=t.value
s.render=function(){return o.rerender(l)}}}return e.prototype.isFor=function(e){return this.root===e},e.prototype.destroy=function(){var e,t=this.result,n=this.env
this.destroyed=!0,this.env=void 0,this.root=null,this.result=void 0,this.render=void 0,t&&((e=!n.inTransaction)&&n.begin(),t.destroy(),e&&n.commit())},e}(),m=[]
function g(e){var t=m.indexOf(e)
m.splice(t,1)}function v(){}(0,i.setHasViews)(function(){return m.length>0})
var b=null
var y=0
p.on("begin",function(){var e
for(e=0;e<m.length;e++)m[e]._scheduleRevalidate()}),p.on("end",function(){var e,t
for(e=0;e<m.length;e++)if(!m[e]._isValid()){if(y>10)throw y=0,m[e].destroy(),new Error("infinite rendering invalidation detected")
return y++,p.join(null,v)}y=0,null!==b&&(t=b.resolve,b=null,p.join(null,t))})
var E=e.Renderer=function(){function e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.fallbackViewRegistry,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
this._env=e,this._rootTemplate=t,this._viewRegistry=n,this._destinedForDOM=r,this._destroyed=!1,this._roots=[],this._lastRevision=-1,this._isRenderingRoots=!1,this._removedRoots=[]}return e.prototype.appendOutletView=function(e,t){var n=new s.TopLevelOutletComponentDefinition(e),r=e.toReference()
this._appendDefinition(e,n,t,r)},e.prototype.appendTo=function(e,t){var n=new l.RootComponentDefinition(e)
this._appendDefinition(e,n,t)},e.prototype._appendDefinition=function(e,t,n,r){var i=new u.RootReference(t),o=new d(null,r||c.NULL_REFERENCE,r),a=new h(e,this._env,this._rootTemplate,i,n,o)
this._renderRoot(a)},e.prototype.rerender=function(){this._scheduleRevalidate()},e.prototype.register=function(e){var t=(0,o.getViewId)(e)
this._viewRegistry[t]=e},e.prototype.unregister=function(e){delete this._viewRegistry[(0,o.getViewId)(e)]},e.prototype.remove=function(e){e._transitionTo("destroying"),this.cleanupRootFor(e),(0,o.setViewElement)(e,null),this._destinedForDOM&&e.trigger("didDestroyElement"),e.isDestroying||e.destroy()},e.prototype.cleanupRootFor=function(e){if(!this._destroyed)for(var t,n=this._roots,r=this._roots.length;r--;)(t=n[r]).isFor(e)&&(t.destroy(),n.splice(r,1))},e.prototype.destroy=function(){this._destroyed||(this._destroyed=!0,this._clearAllRoots())},e.prototype.getBounds=function(e){var t=e[a.BOUNDS]
return{parentElement:t.parentElement(),firstNode:t.firstNode(),lastNode:t.lastNode()}},e.prototype.createElement=function(e){return this._env.getAppendOperations().createElement(e)},e.prototype._renderRoot=function(e){var t,n=this._roots
n.push(e),1===n.length&&(t=this,m.push(t)),this._renderRootsTransaction()},e.prototype._renderRoots=function(){var e,t,r,o,a,s=this._roots,l=this._env,u=this._removedRoots,c=void 0,f=void 0
do{for(l.begin(),f=s.length,c=!1,e=0;e<s.length;e++)(t=s[e]).destroyed?u.push(t):(r=t.shouldReflush,e>=f&&!r||(t.options.alwaysRevalidate=r,r=t.shouldReflush=(0,i.runInTransaction)(t,"render"),c=c||r))
this._lastRevision=n.CURRENT_TAG.value(),l.commit()}while(c||s.length>f)
for(;u.length;)o=u.pop(),a=s.indexOf(o),s.splice(a,1)
0===this._roots.length&&g(this)},e.prototype._renderRootsTransaction=function(){if(!this._isRenderingRoots){this._isRenderingRoots=!0
var e=!1
try{this._renderRoots(),e=!0}finally{e||(this._lastRevision=n.CURRENT_TAG.value(),!0===this._env.inTransaction&&this._env.commit()),this._isRenderingRoots=!1}}},e.prototype._clearAllRoots=function(){var e,t=this._roots
for(e=0;e<t.length;e++)t[e].destroy()
this._removedRoots.length=0,this._roots=[],t.length&&g(this)},e.prototype._scheduleRevalidate=function(){p.scheduleOnce("render",this,this._revalidate)},e.prototype._isValid=function(){return this._destroyed||0===this._roots.length||n.CURRENT_TAG.validate(this._lastRevision)},e.prototype._revalidate=function(){this._isValid()||this._renderRootsTransaction()},e}()
e.InertRenderer=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.create=function(e){return new this(e.env,e.rootTemplate,e._viewRegistry,!1)},n.prototype.getElement=function(){throw new Error("Accessing `this.element` is not allowed in non-interactive environments (such as FastBoot).")},n}(E),e.InteractiveRenderer=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.create=function(e){return new this(e.env,e.rootTemplate,e._viewRegistry,!0)},n.prototype.getElement=function(e){return(0,o.getViewElement)(e)},n}(E)}),e("ember-glimmer/setup-registry",["exports","ember-babel","container","ember-environment","ember-glimmer/component","ember-glimmer/components/checkbox","ember-glimmer/components/link-to","ember-glimmer/components/text_area","ember-glimmer/components/text_field","ember-glimmer/dom","ember-glimmer/environment","ember-glimmer/renderer","ember-glimmer/templates/component","ember-glimmer/templates/outlet","ember-glimmer/templates/root","ember-glimmer/views/outlet","ember-glimmer/helpers/loc"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h,m,g){"use strict"
e.setupApplicationRegistry=function(e){e.injection("service:-glimmer-environment","appendOperations","service:-dom-tree-construction"),e.injection("renderer","env","service:-glimmer-environment"),e.register((0,n.privatize)(v),h.default),e.injection("renderer","rootTemplate",(0,n.privatize)(v)),e.register("renderer:-dom",f.InteractiveRenderer),e.register("renderer:-inert",f.InertRenderer),r.environment.hasDOM&&e.injection("service:-glimmer-environment","updateOperations","service:-dom-changes"),e.register("service:-dom-changes",{create:function(e){var t=e.document
return new u.DOMChanges(t)}}),e.register("service:-dom-tree-construction",{create:function(e){var t=e.document
return new(r.environment.hasDOM?u.DOMTreeConstruction:u.NodeDOMTreeConstruction)(t)}})},e.setupEngineRegistry=function(e){e.register("view:-outlet",m.default),e.register("template:-outlet",d.default),e.injection("view:-outlet","template","template:-outlet"),e.injection("service:-dom-changes","document","service:-document"),e.injection("service:-dom-tree-construction","document","service:-document"),e.register((0,n.privatize)(b),p.default),e.register("service:-glimmer-environment",c.default),e.injection("template","env","service:-glimmer-environment"),e.optionsForType("helper",{instantiate:!1}),e.register("helper:loc",g.default),e.register("component:-text-field",l.default),e.register("component:-text-area",s.default),e.register("component:-checkbox",o.default),e.register("component:link-to",a.default),e.register((0,n.privatize)(y),i.default)}
var v=(0,t.taggedTemplateLiteralLoose)(["template:-root"],["template:-root"]),b=(0,t.taggedTemplateLiteralLoose)(["template:components/-default"],["template:components/-default"]),y=(0,t.taggedTemplateLiteralLoose)(["component:-default"],["component:-default"])}),e("ember-glimmer/syntax",["exports","ember-debug","ember-environment","ember-glimmer/syntax/-text-area","ember-glimmer/syntax/dynamic-component","ember-glimmer/syntax/input","ember-glimmer/syntax/mount","ember-glimmer/syntax/outlet","ember-glimmer/syntax/render","ember-glimmer/syntax/utils","ember-glimmer/utils/bindings"],function(e,t,n,r,i,o,a,s,l,u,c){"use strict"
function f(e,t,n,r){var i=void 0
return e.indexOf("-")>-1&&(i=r.env.getComponentDefinition(e,r.meta.templateMeta)),!!i&&((0,c.wrapComponentClassAttribute)(n),r.component.static(i,[t,(0,u.hashToArgs)(n),null,null]),!0)}function p(e,t,n,r,i,o){if(-1===e.indexOf("-"))return!1
var a=o.meta.templateMeta,s=void 0
return e.indexOf("-")>-1&&(s=o.env.getComponentDefinition(e,a)),!!s&&((0,c.wrapComponentClassAttribute)(n),o.component.static(s,[t,(0,u.hashToArgs)(n),r,i]),!0)}e.experimentalMacros=void 0,e.registerMacros=function(e){d.push(e)},e.populateMacros=function(e,t){var u
for(t.add("outlet",s.outletMacro),t.add("component",i.inlineComponentMacro),!0===n.ENV._ENABLE_RENDER_SUPPORT&&t.add("render",l.renderMacro),t.add("mount",a.mountMacro),t.add("input",o.inputMacro),t.add("textarea",r.textAreaMacro),t.addMissing(f),e.add("component",i.blockComponentMacro),e.addMissing(p),u=0;u<d.length;u++)(0,d[u])(e,t)
return{blocks:e,inlines:t}}
var d=e.experimentalMacros=[]}),e("ember-glimmer/syntax/-text-area",["exports","ember-glimmer/utils/bindings","ember-glimmer/syntax/utils"],function(e,t,n){"use strict"
e.textAreaMacro=function(e,r,i,o){var a=o.env.getComponentDefinition("-text-area",o.meta.templateMeta)
return(0,t.wrapComponentClassAttribute)(i),o.component.static(a,[r,(0,n.hashToArgs)(i),null,null]),!0}}),e("ember-glimmer/syntax/dynamic-component",["exports","@glimmer/runtime","ember-debug","ember-glimmer/syntax/utils"],function(e,t,n,r){"use strict"
function i(e,t,n){var r=e.env,i=t.positional.at(0)
return new o({nameRef:i,env:r,meta:n,args:null})}e.dynamicComponentMacro=function(e,t,n,o,a){var s=[e.slice(0,1),null,null,null],l=[e.slice(1),(0,r.hashToArgs)(t),null,null]
return a.component.dynamic(s,i,l),!0},e.blockComponentMacro=function(e,t,n,o,a){var s=[e.slice(0,1),null,null,null],l=[e.slice(1),(0,r.hashToArgs)(t),n,o]
return a.component.dynamic(s,i,l),!0},e.inlineComponentMacro=function(e,t,n,o){var a=[t.slice(0,1),null,null,null],s=[t.slice(1),(0,r.hashToArgs)(n),null,null]
return o.component.dynamic(a,i,s),!0}
var o=function(){function e(e){var t=e.nameRef,n=e.env,r=e.meta,i=e.args
this.tag=t.tag,this.nameRef=t,this.env=n,this.meta=r,this.args=i}return e.prototype.value=function(){var e=this.env,n=this.nameRef,r=this.meta,i=n.value()
return"string"==typeof i?e.getComponentDefinition(i,r):(0,t.isComponentDefinition)(i)?i:null},e.prototype.get=function(){},e}()}),e("ember-glimmer/syntax/input",["exports","ember-debug","ember-glimmer/utils/bindings","ember-glimmer/syntax/dynamic-component","ember-glimmer/syntax/utils"],function(e,t,n,r,i){"use strict"
function o(e,t,n,r){var o=r.env.getComponentDefinition(e,r.meta.templateMeta)
return r.component.static(o,[t,(0,i.hashToArgs)(n),null,null]),!0}e.inputMacro=function(e,t,i,a){var s,l=void 0,u=void 0,c=-1
if(i&&(l=i[0],u=i[1],c=l.indexOf("type"),l.indexOf("value")),t||(t=[]),c>-1){if(s=u[c],Array.isArray(s))return(0,r.dynamicComponentMacro)(t,i,null,null,a)
if("checkbox"===s)return(0,n.wrapComponentClassAttribute)(i),o("-checkbox",t,i,a)}return o("-text-field",t,i,a)}}),e("ember-glimmer/syntax/mount",["exports","ember-debug","ember-glimmer/component-managers/mount","ember-glimmer/syntax/utils"],function(e,t,n,r){"use strict"
function i(e,t,n){var r=e.env,i=t.positional.at(0)
return new o({nameRef:i,env:r,meta:n})}e.mountMacro=function(e,t,n,o){var a=[t.slice(0,1),null,null,null],s=[null,(0,r.hashToArgs)(n),null,null]
return o.component.dynamic(a,i,s),!0}
var o=function(){function e(e){var t=e.nameRef,n=e.env,r=e.meta
this.tag=t.tag,this.nameRef=t,this.env=n,this.meta=r,this._lastName=void 0,this._lastDef=void 0}return e.prototype.value=function(){var e=this.env,t=this.nameRef.value()
return"string"==typeof t?this._lastName===t?this._lastDef:e.owner.hasRegistration("engine:"+t)?(this._lastName=t,this._lastDef=new n.MountDefinition(t),this._lastDef):null:null},e}()}),e("ember-glimmer/syntax/outlet",["exports","@glimmer/reference","ember-glimmer/component-managers/outlet"],function(e,t,n){"use strict"
e.outletMacro=function(e,t,n,r){t||(t=[])
var o=[t.slice(0,1),null,null,null]
return r.component.dynamic(o,i,[[],null,null,null]),!0}
var r=function(){function e(e,n){this.outletNameRef=e,this.parentOutletStateRef=n,this.definition=null,this.lastState=null
var r=this.outletStateTag=t.UpdatableTag.create(n.tag)
this.tag=(0,t.combine)([r.inner,e.tag])}return e.prototype.value=function(){var e=this.outletNameRef,t=this.parentOutletStateRef,r=this.definition,i=this.lastState,o=e.value(),a=t.get("outlets").get(o),s=this.lastState=a.value()
this.outletStateTag.inner.update(a.tag),r=function(e,t,n){if(!t&&!n)return e
if(!t&&n||t&&!n)return null
if(n.render.template===t.render.template&&n.render.controller===t.render.controller)return e
return null}(r,i,s)
var l=s&&s.render.template
return r||(this.definition=l?new n.OutletComponentDefinition(o,s.render.template):null)},e}()
function i(e,n){var i=e.dynamicScope().outletState,o=void 0
return o=0===n.positional.length?new t.ConstReference("main"):n.positional.at(0),new r(o,i)}}),e("ember-glimmer/syntax/render",["exports","@glimmer/reference","ember-debug","ember-glimmer/component-managers/render","ember-glimmer/syntax/utils"],function(e,t,n,r,i){"use strict"
function o(e,n){var i=e.env,o=n.positional.at(0),a=o.value(),s=i.owner.lookup("template:"+a),l=void 0
return l=n.named.has("controller")?n.named.get("controller").value():a,1===n.positional.length?new t.ConstReference(new r.RenderDefinition(l,s,i,r.SINGLETON_RENDER_MANAGER)):new t.ConstReference(new r.RenderDefinition(l,s,i,r.NON_SINGLETON_RENDER_MANAGER))}e.renderMacro=function(e,t,n,r){t||(t=[])
var a=[t.slice(0),n,null,null],s=[t.slice(1),(0,i.hashToArgs)(n),null,null]
return r.component.dynamic(a,o,s),!0}}),e("ember-glimmer/syntax/utils",["exports"],function(e){"use strict"
e.hashToArgs=function(e){return null===e?null:[e[0].map(function(e){return"@"+e}),e[1]]}}),e("ember-glimmer/template",["exports","@glimmer/runtime","ember-utils"],function(e,t,n){"use strict"
e.WrappedTemplateFactory=void 0,e.default=function(e){var n=(0,t.templateFactory)(e)
return new r(n)}
var r=e.WrappedTemplateFactory=function(){function e(e){this.factory=e,this.id=e.id,this.meta=e.meta}return e.prototype.create=function(e){var t=e[n.OWNER]
return this.factory.create(e.env,{owner:t})},e}()}),e("ember-glimmer/template_registry",["exports"],function(e){"use strict"
e.setTemplates=function(e){t=e},e.getTemplates=function(){return t},e.getTemplate=function(e){if(t.hasOwnProperty(e))return t[e]},e.hasTemplate=function(e){return t.hasOwnProperty(e)},e.setTemplate=function(e,n){return t[e]=n}
var t={}}),e("ember-glimmer/templates/component",["exports","ember-glimmer/template"],function(e,t){"use strict"
e.default=(0,t.default)({id:"RxHsBKwy",block:'{"symbols":["&default"],"statements":[[11,1]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/component.hbs"}})}),e("ember-glimmer/templates/empty",["exports","ember-glimmer/template"],function(e,t){"use strict"
e.default=(0,t.default)({id:"5jp2oO+o",block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/empty.hbs"}})}),e("ember-glimmer/templates/link-to",["exports","ember-glimmer/template"],function(e,t){"use strict"
e.default=(0,t.default)({id:"VZn3uSPL",block:'{"symbols":["&default"],"statements":[[4,"if",[[20,["linkTitle"]]],null,{"statements":[[1,[18,"linkTitle"],false]],"parameters":[]},{"statements":[[11,1]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/link-to.hbs"}})}),e("ember-glimmer/templates/outlet",["exports","ember-glimmer/template"],function(e,t){"use strict"
e.default=(0,t.default)({id:"/7rqcQ85",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/outlet.hbs"}})}),e("ember-glimmer/templates/root",["exports","ember-glimmer/template"],function(e,t){"use strict"
e.default=(0,t.default)({id:"AdIsk/cm",block:'{"symbols":[],"statements":[[1,[25,"component",[[19,0,[]]],null],false]],"hasEval":false}',meta:{moduleName:"packages/ember-glimmer/lib/templates/root.hbs"}})}),e("ember-glimmer/utils/bindings",["exports","ember-babel","@glimmer/reference","@glimmer/wire-format","ember-debug","ember-metal","ember-runtime","ember-glimmer/component","ember-glimmer/utils/string"],function(e,t,n,r,i,o,a,s,l){"use strict"
function u(e,t){return e[s.ROOT_REF].get(t)}function c(e,t){return"attrs"===t[0]&&(t.shift(),1===t.length)?u(e,t[0]):(0,n.referenceFromParts)(e[s.ROOT_REF],t)}e.ClassNameBinding=e.IsVisibleBinding=e.AttributeBinding=void 0,e.wrapComponentClassAttribute=function(e){if(!e)return e
var t,n,i,o,a=e[0],s=e[1],l=a.indexOf("class")
return-1!==l&&((t=s[l][0])!==r.Ops.Get&&t!==r.Ops.MaybeLocal||(o=(i=(n=s[l])[n.length-1])[i.length-1],e[1][l]=[r.Ops.Helper,["-class"],[n,o]])),e},e.AttributeBinding={parse:function(e){var t=e.indexOf(":")
return-1===t?[e,e,!0]:[e.substring(0,t),e.substring(t+1),!1]},install:function(e,t,n,r){var i,a=n[0],s=n[1]
n[2]
if("id"===s)return void 0!==(i=(0,o.get)(t,a))&&null!==i||(i=t.elementId),void r.addStaticAttribute(e,"id",i)
var l=a.indexOf(".")>-1,f=l?c(t,a.split(".")):u(t,a)
"style"===s&&(f=new p(f,u(t,"isVisible"))),r.addDynamicAttribute(e,s,f,!1)}}
var f=(0,l.htmlSafe)("display: none;"),p=function(e){function r(r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this))
return o.inner=r,o.isVisible=i,o.tag=(0,n.combine)([r.tag,i.tag]),o}return(0,t.inherits)(r,e),r.prototype.compute=function(){var e,t=this.inner.value()
return!1!==this.isVisible.value()?t:t?(e=t+" display: none;",(0,l.isHTMLSafe)(t)?(0,l.htmlSafe)(e):e):f},r}(n.CachedReference)
e.IsVisibleBinding={install:function(e,t,r){var i=(0,n.map)(u(t,"isVisible"),this.mapStyleValue)
r.addDynamicAttribute(e,"style",i,!1)},mapStyleValue:function(e){return!1===e?f:null}},e.ClassNameBinding={install:function(e,t,n,r){var i,o,a,s,l=n.split(":"),f=l[0],p=l[1],m=l[2]
""===f?r.addStaticAttribute(e,"class",p):(o=(i=f.indexOf(".")>-1)?f.split("."):[],a=i?c(t,o):u(t,f),s=void 0,s=void 0===p?new d(a,i?o[o.length-1]:f):new h(a,p,m),r.addDynamicAttribute(e,"class",s,!1))}}
var d=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.inner=n,i.path=r,i.tag=n.tag,i.inner=n,i.path=r,i.dasherizedPath=null,i}return(0,t.inherits)(n,e),n.prototype.compute=function(){var e,t=this.inner.value()
return!0===t?(e=this.path,this.dasherizedPath||(this.dasherizedPath=a.String.dasherize(e))):t||0===t?String(t):null},n}(n.CachedReference),h=function(e){function n(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=(0,t.possibleConstructorReturn)(this,e.call(this))
return o.inner=n,o.truthy=r,o.falsy=i,o.tag=n.tag,o}return(0,t.inherits)(n,e),n.prototype.compute=function(){var e=this.inner,t=this.truthy,n=this.falsy
return e.value()?t:n},n}(n.CachedReference)}),e("ember-glimmer/utils/curly-component-state-bucket",["exports"],function(e){"use strict"
function t(){}var n=function(){function e(e,t,n,r){this.environment=e,this.component=t,this.args=n,this.finalizer=r,this.classRef=null,this.classRef=null,this.argsRevision=n.tag.value()}return e.prototype.destroy=function(){var e=this.component,t=this.environment
t.isInteractive&&(e.trigger("willDestroyElement"),e.trigger("willClearRender")),t.destroyedComponents.push(e)},e.prototype.finalize=function(){(0,this.finalizer)(),this.finalizer=t},e}()
e.default=n}),e("ember-glimmer/utils/debug-stack",["exports"],function(e){"use strict"
e.default=void 0}),e("ember-glimmer/utils/iterable",["exports","ember-babel","@glimmer/reference","ember-metal","ember-runtime","ember-utils","ember-glimmer/helpers/each-in","ember-glimmer/utils/references"],function(e,t,n,r,i,o,a,s){"use strict"
function l(e,t){return String(t)}function u(e){switch(typeof e){case"string":case"number":return String(e)
default:return(0,o.guidFor)(e)}}e.default=function(e,t){return(0,a.isEachIn)(e)?new h(e,function(e){switch(e){case"@index":case void 0:case null:return l
case"@identity":return u
default:return function(t){return(0,r.get)(t,e)}}}(t)):new m(e,function(e){switch(e){case"@index":return l
case"@identity":case void 0:case null:return u
default:return function(t){return(0,r.get)(t,e)}}}(t))}
var c=function(){function e(e,t,n){this.array=e,this.length=t,this.keyFor=n,this.position=0,this.seen=Object.create(null)}return e.from=function(e,t){return e.length>0?new this(e,e.length,t):d},e.prototype.isEmpty=function(){return!1},e.prototype.getMemo=function(e){return e},e.prototype.getValue=function(e){return this.array[e]},e.prototype.next=function(){var e=this.length,t=this.keyFor,n=this.position,r=this.seen
if(n>=e)return null
var i=this.getValue(n),o=this.getMemo(n),a=function(e,t){var n=e[t]
return n>0?(e[t]++,t+"be277757-bbbe-4620-9fcb-213ef433cca2"+n):(e[t]=1,t)}(r,t(i,o))
return this.position++,{key:a,value:i,memo:o}},e}(),f=function(e){function n(n,r,i){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,i))}return(0,t.inherits)(n,e),n.from=function(e,t){var n=(0,r.get)(e,"length")
return n>0?new this(e,n,t):d},n.prototype.getValue=function(e){return(0,i.objectAt)(this.array,e)},n}(c),p=function(e){function n(n,r,i,o){var a=(0,t.possibleConstructorReturn)(this,e.call(this,r,i,o))
return a.keys=n,a}return(0,t.inherits)(n,e),n.from=function(e,t){var n=Object.keys(e),r=n.length
return r>0?new this(n,n.map(function(t){return e[t]}),r,t):d},n.prototype.getMemo=function(e){return this.keys[e]},n}(c),d=new(function(){function e(){}return e.prototype.isEmpty=function(){return!0},e.prototype.next=function(){throw new Error("Cannot call next() on an empty iterator")},e}()),h=function(){function e(e,t){this.ref=e,this.keyFor=t
var r=this.valueTag=n.UpdatableTag.create(n.CONSTANT_TAG)
this.tag=(0,n.combine)([e.tag,r])}return e.prototype.iterate=function(){var e=this.ref,t=this.keyFor,n=this.valueTag,i=e.value()
n.inner.update((0,r.tagFor)(i)),(0,r.isProxy)(i)&&(i=(0,r.get)(i,"content"))
var o=typeof i
return null===i||"object"!==o&&"function"!==o?d:p.from(i,t)},e.prototype.valueReferenceFor=function(e){return new s.UpdatablePrimitiveReference(e.memo)},e.prototype.updateValueReference=function(e,t){e.update(t.memo)},e.prototype.memoReferenceFor=function(e){return new s.UpdatableReference(e.value)},e.prototype.updateMemoReference=function(e,t){e.update(t.value)},e}(),m=function(){function e(e,t){this.ref=e,this.keyFor=t
var r=this.valueTag=n.UpdatableTag.create(n.CONSTANT_TAG)
this.tag=(0,n.combine)([e.tag,r])}return e.prototype.iterate=function(){var e,t=this.ref,n=this.keyFor,o=this.valueTag,a=t.value()
return o.inner.update((0,r.tagForProperty)(a,"[]")),null===a||"object"!=typeof a?d:Array.isArray(a)?c.from(a,n):(0,i.isEmberArray)(a)?f.from(a,n):"function"==typeof a.forEach?(e=[],a.forEach(function(t){return e.push(t)}),c.from(e,n)):d},e.prototype.valueReferenceFor=function(e){return new s.UpdatableReference(e.value)},e.prototype.updateValueReference=function(e,t){e.update(t.value)},e.prototype.memoReferenceFor=function(e){return new s.UpdatablePrimitiveReference(e.memo)},e.prototype.updateMemoReference=function(e,t){e.update(t.memo)},e}()}),e("ember-glimmer/utils/process-args",["exports","ember-utils","ember-views","ember-glimmer/component","ember-glimmer/helpers/action","ember-glimmer/utils/references"],function(e,t,n,r,i,o){"use strict"
e.processComponentArgs=function(e){var t,n,a,l,u=e.names,c=e.value(),f=Object.create(null),p=Object.create(null)
for(f[r.ARGS]=p,t=0;t<u.length;t++)n=u[t],a=e.get(n),"function"==typeof(l=c[n])&&l[i.ACTION]?c[n]=l:a[o.UPDATE]&&(c[n]=new s(a,l)),p[n]=a,f[n]=l
return f.attrs=c,f}
var a=(0,t.symbol)("REF"),s=function(){function e(e,t){this[n.MUTABLE_CELL]=!0,this[a]=e,this.value=t}return e.prototype.update=function(e){this[a][o.UPDATE](e)},e}()}),e("ember-glimmer/utils/references",["exports","ember-babel","@glimmer/reference","@glimmer/runtime","ember-metal","ember-utils","ember-glimmer/helper","ember-glimmer/utils/to-bool"],function(e,t,n,r,i,o,a,s){"use strict"
e.UnboundReference=e.InternalHelperReference=e.ClassBasedHelperReference=e.SimpleHelperReference=e.ConditionalReference=e.UpdatablePrimitiveReference=e.UpdatableReference=e.NestedPropertyReference=e.RootPropertyReference=e.PropertyReference=e.RootReference=e.CachedReference=e.UPDATE=void 0
var l=e.UPDATE=(0,o.symbol)("UPDATE"),u=function(){function e(){}return e.prototype.get=function(e){return p.create(this,e)},e}(),c=e.CachedReference=function(e){function n(){var n=(0,t.possibleConstructorReturn)(this,e.call(this))
return n._lastRevision=null,n._lastValue=null,n}return(0,t.inherits)(n,e),n.prototype.compute=function(){},n.prototype.value=function(){var e=this.tag,t=this._lastRevision,n=this._lastValue
return t&&e.validate(t)||(n=this._lastValue=this.compute(),this._lastRevision=e.value()),n},n}(u),f=e.RootReference=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.children=Object.create(null),r}return(0,t.inherits)(n,e),n.prototype.get=function(e){var t=this.children[e]
return void 0===t&&(t=this.children[e]=new d(this.inner,e)),t},n}(n.ConstReference),p=e.PropertyReference=function(e){function r(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(r,e),r.create=function(e,t){return(0,n.isConst)(e)?new d(e.value(),t):new h(e,t)},r.prototype.get=function(e){return new h(this,e)},r}(c),d=e.RootPropertyReference=function(e){function n(n,r){var o=(0,t.possibleConstructorReturn)(this,e.call(this))
return o._parentValue=n,o._propertyKey=r,o.tag=(0,i.tagForProperty)(n,r),o}return(0,t.inherits)(n,e),n.prototype.compute=function(){var e=this._parentValue,t=this._propertyKey
return(0,i.get)(e,t)},n.prototype[l]=function(e){(0,i.set)(this._parentValue,this._propertyKey,e)},n}(p),h=e.NestedPropertyReference=function(e){function r(r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this)),a=r.tag,s=n.UpdatableTag.create(n.CONSTANT_TAG)
return o._parentReference=r,o._parentObjectTag=s,o._propertyKey=i,o.tag=(0,n.combine)([a,s]),o}return(0,t.inherits)(r,e),r.prototype.compute=function(){var e=this._parentReference,t=this._parentObjectTag,n=this._propertyKey,r=e.value()
t.inner.update((0,i.tagForProperty)(r,n))
var o=typeof r
return"string"===o&&"length"===n?r.length:"object"===o&&null!==r||"function"===o?(0,i.get)(r,n):void 0},r.prototype[l]=function(e){var t=this._parentReference.value();(0,i.set)(t,this._propertyKey,e)},r}(p),m=e.UpdatableReference=function(e){function r(r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.tag=n.DirtyableTag.create(),i._value=r,i}return(0,t.inherits)(r,e),r.prototype.value=function(){return this._value},r.prototype.update=function(e){e!==this._value&&(this.tag.inner.dirty(),this._value=e)},r}(u)
e.UpdatablePrimitiveReference=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n}(m),e.ConditionalReference=function(e){function o(r){var i=(0,t.possibleConstructorReturn)(this,e.call(this,r))
return i.objectTag=n.UpdatableTag.create(n.CONSTANT_TAG),i.tag=(0,n.combine)([r.tag,i.objectTag]),i}return(0,t.inherits)(o,e),o.create=function(e){var t
return(0,n.isConst)(e)?(t=e.value(),(0,i.isProxy)(t)?new d(t,"isTruthy"):r.PrimitiveReference.create((0,s.default)(t))):new o(e)},o.prototype.toBool=function(e){return(0,i.isProxy)(e)?(this.objectTag.inner.update((0,i.tagForProperty)(e,"isTruthy")),(0,i.get)(e,"isTruthy")):(this.objectTag.inner.update((0,i.tagFor)(e)),(0,s.default)(e))},o}(r.ConditionalReference),e.SimpleHelperReference=function(e){function i(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.tag=r.tag,i.helper=n,i.args=r,i}return(0,t.inherits)(i,e),i.create=function(e,t,o){var a,s,l,u,c,p=e.create()
return(0,n.isConst)(o)?(a=o.positional,s=o.named,l=a.value(),u=s.value(),"object"==typeof(c=p.compute(l,u))&&null!==c||"function"==typeof c?new f(c):r.PrimitiveReference.create(c)):new i(p.compute,o)},i.prototype.compute=function(){var e=this.helper,t=this.args,n=t.positional,r=t.named
return e(n.value(),r.value())},i}(c),e.ClassBasedHelperReference=function(e){function r(r,i){var o=(0,t.possibleConstructorReturn)(this,e.call(this))
return o.tag=(0,n.combine)([r[a.RECOMPUTE_TAG],i.tag]),o.instance=r,o.args=i,o}return(0,t.inherits)(r,e),r.create=function(e,t,n){var i=e.create()
return t.newDestroyable(i),new r(i,n)},r.prototype.compute=function(){var e=this.instance,t=this.args,n=t.positional,r=t.named,i=n.value(),o=r.value()
return e.compute(i,o)},r}(c),e.InternalHelperReference=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this))
return i.tag=r.tag,i.helper=n,i.args=r,i}return(0,t.inherits)(n,e),n.prototype.compute=function(){return(0,this.helper)(this.args)},n}(c),e.UnboundReference=function(e){function n(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(n,e),n.create=function(e){return"object"==typeof e&&null!==e?new n(e):r.PrimitiveReference.create(e)},n.prototype.get=function(e){return new n((0,i.get)(this.inner,e))},n}(n.ConstReference)})
e("ember-glimmer/utils/string",["exports"],function(e){"use strict"
e.SafeString=void 0,e.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML()
if(null===e||void 0===e)return""
if(!e)return e+""
e=""+e}return r.test(e)?e.replace(i,o):e},e.htmlSafe=function(e){return null===e||void 0===e?e="":"string"!=typeof e&&(e=""+e),new t(e)},e.isHTMLSafe=function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.toHTML}
var t=e.SafeString=function(){function e(e){this.string=e}return e.prototype.toString=function(){return""+this.string},e.prototype.toHTML=function(){return this.toString()},e}(),n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/,i=/[&<>"'`=]/g
function o(e){return n[e]}}),e("ember-glimmer/utils/to-bool",["exports","ember-metal","ember-runtime"],function(e,t,n){"use strict"
e.default=function(e){return!!e&&(!0===e||(!(0,n.isArray)(e)||0!==(0,t.get)(e,"length")))}}),e("ember-glimmer/views/outlet",["exports","ember-babel","@glimmer/reference","ember-environment","ember-metal","ember-utils"],function(e,t,n,r,i,o){"use strict"
e.RootOutletStateReference=void 0
var a=e.RootOutletStateReference=function(){function e(e){this.outletView=e,this.tag=e._tag}return e.prototype.get=function(e){return new l(this,e)},e.prototype.value=function(){return this.outletView.outletState},e.prototype.getOrphan=function(e){return new s(this,e)},e.prototype.update=function(e){this.outletView.setOutletState(e)},e}(),s=function(e){function n(n,r){var i=(0,t.possibleConstructorReturn)(this,e.call(this,n.outletView))
return i.root=n,i.name=r,i}return(0,t.inherits)(n,e),n.prototype.value=function(){var e=this.root.value().outlets.main.outlets.__ember_orphans__
if(!e)return null
var t=e.outlets[this.name]
if(!t)return null
var n=Object.create(null)
return n[t.render.outlet]=t,t.wasUsed=!0,{outlets:n,render:void 0}},n}(a),l=function(){function e(e,t){this.parent=e,this.key=t,this.tag=e.tag}return e.prototype.get=function(t){return new e(this,t)},e.prototype.value=function(){var e=this.parent.value()
return e&&e[this.key]},e}(),u=function(){function e(e,t,r,i){this._environment=e,this.renderer=t,this.owner=r,this.template=i,this.outletState=null,this._tag=n.DirtyableTag.create()}return e.extend=function(n){return function(e){function r(){return(0,t.possibleConstructorReturn)(this,e.apply(this,arguments))}return(0,t.inherits)(r,e),r.create=function(t){return t?e.create.call(this,(0,o.assign)({},n,t)):e.create.call(this,n)},r}(e)},e.reopenClass=function(e){(0,o.assign)(this,e)},e.create=function(t){var n=t._environment,r=t.renderer,i=t.template
return new e(n,r,t[o.OWNER],i)},e.prototype.appendTo=function(e){var t=void 0
t=(this._environment||r.environment).hasDOM&&"string"==typeof e?document.querySelector(e):e,i.run.schedule("render",this.renderer,"appendOutletView",this,t)},e.prototype.rerender=function(){},e.prototype.setOutletState=function(e){this.outletState={outlets:{main:e},render:{owner:void 0,into:void 0,outlet:"main",name:"-top-level",controller:void 0,template:void 0}},this._tag.inner.dirty()},e.prototype.toReference=function(){return new a(this)},e.prototype.destroy=function(){},e}()
e.default=u}),e("ember-metal",["exports","ember-environment","ember-utils","ember-debug","ember-babel","@glimmer/reference","require","backburner"],function(e,t,n,r,i,o,a,s){"use strict"
a=a&&a.hasOwnProperty("default")?a.default:a,s=s&&s.hasOwnProperty("default")?s.default:s
var l="object"==typeof t.context.imports.Ember&&t.context.imports.Ember||{}
l.isNamespace=!0,l.toString=function(){return"Ember"}
var u=1,c={addToListeners:function(e,t,n,r){void 0===this._listeners&&(this._listeners=[]),this._listeners.push(e,t,n,r)},_finalizeListeners:function(){if(!this._listenersFinalized){void 0===this._listeners&&(this._listeners=[])
for(var e,t=this.parent;void 0!==t&&(void 0!==(e=t._listeners)&&(this._listeners=this._listeners.concat(e)),!t._listenersFinalized);)t=t.parent
this._listenersFinalized=!0}},removeFromListeners:function(e,t,n,r){for(var i,o,a=this;void 0!==a;){if(void 0!==(i=a._listeners))for(o=i.length-4;o>=0;o-=4)if(i[o]===e&&(!n||i[o+1]===t&&i[o+2]===n)){if(a!==this)return this._finalizeListeners(),this.removeFromListeners(e,t,n)
"function"==typeof r&&r(e,t,i[o+2]),i.splice(o,4)}if(a._listenersFinalized)break
a=a.parent}},matchingListeners:function(e){for(var t,n,r=this,i=void 0;void 0!==r;){if(void 0!==(t=r._listeners))for(n=0;n<t.length;n+=4)t[n]===e&&f(i=i||[],t,n)
if(r._listenersFinalized)break
r=r.parent}return i}}
function f(e,t,n){var r,i=t[n+1],o=t[n+2]
for(r=0;r<e.length;r+=3)if(e[r]===i&&e[r+1]===o)return
e.push(i,o,t[n+3])}function p(e,n,r,i,o){t.ENV._ENABLE_DID_INIT_ATTRS_SUPPORT,i||"function"!=typeof r||(i=r,r=null)
var a=0
o&&(a|=u),he(e).addToListeners(n,r,i,a),"function"==typeof e.didAddListener&&e.didAddListener(n,r,i)}function d(e,t,n,r){r||"function"!=typeof n||(r=n,n=null)
var i="function"==typeof e.didRemoveListener?e.didRemoveListener.bind(e):function(){}
he(e).removeFromListeners(t,n,r,i)}function h(e,t,r,i,o){var a,s,l,c,f
if(void 0===i&&(i="object"==typeof(a=void 0===o?de(e):o)&&null!==a&&a.matchingListeners(t)),void 0===i||0===i.length)return!1
for(s=i.length-3;s>=0;s-=3)l=i[s],c=i[s+1],f=i[s+2],c&&(2&f||(f&u&&d(e,t,l,c),l||(l=e),"string"==typeof c?r?n.applyStr(l,c,r):l[c]():r?c.apply(l,r):c.call(l)))
return!0}var m=function(){return!1}
function g(){return new o.DirtyableTag}function v(e,t){return"object"==typeof e&&null!==e?(void 0===t?he(e):t).writableTag(g):o.CONSTANT_TAG}function b(e,t){var n=e.readableTag()
void 0!==n&&n.dirty()
var r=e.readableTags(),i=void 0!==r?r[t]:void 0
void 0!==i&&i.dirty(),"content"===t&&e.isProxy()&&n.contentDidChange(),void 0===n&&void 0===i||function(){void 0===y&&(y=a("ember-metal").run.backburner)
m()&&y.ensureInstance()}()}var y=void 0
var E=function(){function e(){this.clear()}return e.prototype.add=function(e,t,r){var i=this.observerSet,o=this.observers,a=n.guidFor(e),s=i[a]
void 0===s&&(i[a]=s={})
var l=s[t]
return void 0===l&&(l=o.push({sender:e,keyName:t,eventName:r,listeners:[]})-1,s[t]=l),o[l].listeners},e.prototype.flush=function(){var e,t=this.observers,n=void 0,r=void 0
for(this.clear(),e=0;e<t.length;++e)(r=(n=t[e]).sender).isDestroying||r.isDestroyed||h(r,n.eventName,[r,n.keyName],n.listeners)},e.prototype.clear=function(){this.observerSet={},this.observers=[]},e}()
function T(e,t,n){if("object"==typeof e&&null!==e){var r=void 0===n?he(e):n,i=r.peekWatching(t)||0
r.writeWatching(t,i+1),0===i&&r.writableChains(re).add(t)}}function _(e,t,n){if("object"==typeof e&&null!==e){var r=void 0===n?de(e):n
if(void 0!==r){var i=r.peekWatching(t)||0
1===i?(r.writeWatching(t,0),r.writableChains(re).remove(t)):i>1&&r.writeWatching(t,i-1)}}}function A(e,t,n){Ee(t)?T(e,t,n):Q(e,t,n)}function w(e,t){var n=de(e)
return void 0!==n&&n.peekWatching(t)||0}function C(e,t,n){Ee(t)?_(e,t,n):X(e,t,n)}function S(e){return e+":change"}function O(e){return e+":before"}function x(e,t,n,r){return p(e,S(t),n,r),A(e,t),this}function R(e,t,n,r){return C(e,t),d(e,S(t),n,r),this}function N(e,t,n,r){return p(e,O(t),n,r),A(e,t),this}function L(e,t,n,r){return C(e,t),d(e,O(t),n,r),this}e.runInTransaction=void 0,e.runInTransaction=function(e,t){return e[t](),!1}
var I=n.symbol("PROPERTY_DID_CHANGE"),k=new E,D=new E,P=0
function M(e,t,n){var r=void 0===n?de(e):n
if(void 0===r||r.isInitialized(e)){var i=void 0!==r&&r.peekWatching(t)>0,o=me(e,t)
void 0!==o&&o.willChange&&o.willChange(e,t),i&&(function(e,t,n){if(n.isSourceDestroying()||!n.hasDeps(t))return
var r=j,i=!r
i&&(r=j={})
H(M,e,t,r,n),i&&(j=null)}(e,t,r),function(e,t,n){var r=n.readableChainWatchers()
void 0!==r&&r.notify(t,!1,M)}(0,t,r),function(e,t,n){if(n.isSourceDestroying())return
var r=O(t),i=void 0,o=void 0
P>0&&(i=k.add(e,t,r),o=z(e,r,i,n))
h(e,r,[e,t],o)}(e,t,r))}}function F(e,t,n){var r=void 0===n?de(e):n,i=void 0!==r
if(!i||r.isInitialized(e)){var o=me(e,t)
if(void 0!==o&&o.didChange&&o.didChange(e,t),i&&r.peekWatching(t)>0&&(function(e,t,n){if(n.isSourceDestroying()||!n.hasDeps(t))return
var r=B,i=!r
i&&(r=B={})
H(F,e,t,r,n),i&&(B=null)}(e,t,r),function(e,t,n){var r=n.readableChainWatchers()
void 0!==r&&r.notify(t,!0,F)}(0,t,r),function(e,t,n){if(n.isSourceDestroying())return
var r=S(t),i=void 0
P>0?(i=D.add(e,t,r),z(e,r,i,n)):h(e,r,[e,t])}(e,t,r)),e[I]&&e[I](t),i){if(r.isSourceDestroying())return
b(r,t)}}}var j=void 0,B=void 0
function H(e,t,r,i,o){var a=void 0,s=n.guidFor(t),l=i[s]
l||(l=i[s]={}),l[r]||(l[r]=!0,o.forEachInDeps(r,function(n,r){r&&(void 0!==(a=me(t,n))&&a._suspended===t||e(t,n,o))}))}function $(e,t,n){var r=n.readableChainWatchers()
void 0!==r&&r.revalidate(t)}function U(){P++}function W(){--P<=0&&(k.clear(),D.flush())}function K(e){U()
try{e()}finally{W()}}function q(e,t,n){var r,i=-1
for(r=e.length-3;r>=0;r-=3)if(t===e[r]&&n===e[r+1]){i=r
break}return i}function z(e,t,n,r){var i,o,a,s,l=r.matchingListeners(t)
if(void 0!==l){var u=[]
for(i=l.length-3;i>=0;i-=3)o=l[i],a=l[i+1],s=l[i+2],-1===q(n,o,a)&&(n.push(o,a,s),u.push(o,a,s))
return u}}function V(){this.isDescriptor=!0}function G(e,t,n,r,i){void 0===i&&(i=he(e))
var o=i.peekWatching(t),a=void 0!==o&&o>0,s=me(e,t)
void 0!==s&&s.teardown(e,t,i)
var l=!0
e===Array.prototype&&(l=!1)
var u=void 0
return n instanceof V?(u=n,!1===l?Object.defineProperty(e,t,{configurable:!0,writable:!0,enumerable:l,value:u}):e[t]=u,function(e){if(!1===Y)return
var t=he(e).readableCache()
t&&void 0!==t._computedProperties&&(t._computedProperties=void 0)}(e.constructor),"function"==typeof n.setup&&n.setup(e,t)):void 0===n||null===n?(u=r,!1===l?Object.defineProperty(e,t,{configurable:!0,enumerable:l,writable:!0,value:u}):e[t]=r):(u=n,Object.defineProperty(e,t,n)),a&&$(0,t,i),"function"==typeof e.didDefineProperty&&e.didDefineProperty(e,t,u),this}var Y=!1
function Q(e,t,n){if("object"==typeof e&&null!==e){var r,i=void 0===n?he(e):n,o=i.peekWatching(t)||0
i.writeWatching(t,o+1),0===o&&(void 0!==(r=me(e,t))&&r.willWatch&&r.willWatch(e,t,i),"function"==typeof e.willWatchProperty&&e.willWatchProperty(t))}}function X(e,t,n){if("object"==typeof e&&null!==e){var r,i=void 0===n?de(e):n
if(void 0!==i&&!i.isSourceDestroyed()){var o=i.peekWatching(t)
1===o?(i.writeWatching(t,0),void 0!==(r=me(e,t))&&r.didUnwatch&&r.didUnwatch(e,t,i),"function"==typeof e.didUnwatchProperty&&e.didUnwatchProperty(t)):o>1&&i.writeWatching(t,o-1)}}}var J=/^([^\.]+)/
function Z(e){return e.match(J)[0]}function ee(e){return"object"==typeof e&&null!==e}var te=function(){function e(){this.chains=Object.create(null)}return e.prototype.add=function(e,t){var n=this.chains[e]
void 0===n?this.chains[e]=[t]:n.push(t)},e.prototype.remove=function(e,t){var n,r=this.chains[e]
if(void 0!==r)for(n=0;n<r.length;n++)if(r[n]===t){r.splice(n,1)
break}},e.prototype.has=function(e,t){var n,r=this.chains[e]
if(void 0!==r)for(n=0;n<r.length;n++)if(r[n]===t)return!0
return!1},e.prototype.revalidateAll=function(){for(var e in this.chains)this.notify(e,!0,void 0)},e.prototype.revalidate=function(e){this.notify(e,!0,void 0)},e.prototype.notify=function(e,t,n){var r,i,o=this.chains[e]
if(void 0!==o&&0!==o.length){var a=void 0
for(n&&(a=[]),r=0;r<o.length;r++)o[r].notify(t,a)
if(void 0!==n)for(i=0;i<a.length;i+=2)n(a[i],a[i+1])}},e}()
function ne(){return new te}function re(e){return new ae(null,null,e)}function ie(e,t,n){var r=he(e)
r.writableChainWatchers(ne).add(t,n),Q(e,t,r)}function oe(e,t,n,r){if(ee(e)){var i=void 0===r?de(e):r
void 0!==i&&void 0!==i.readableChainWatchers()&&((i=he(e)).readableChainWatchers().remove(t,n),X(e,t,i))}}var ae=function(){function e(e,t,n){this._parent=e,this._key=t
var r,i=this._watching=void 0===n
if(this._chains=void 0,this._object=void 0,this.count=0,this._value=n,this._paths=void 0,i){if(!ee(r=e.value()))return
this._object=r,ie(this._object,this._key,this)}}return e.prototype.value=function(){var e
return void 0===this._value&&this._watching&&(e=this._parent.value(),this._value=function(e,t){if(!ee(e))return
var n,r=de(e)
if(void 0!==r&&r.proto===e)return
if(function(e,t,n){var r=me(e,t)
return!(void 0!==r&&!1===r._volatile)}(e,t))return _e(e,t)
if(void 0!==(n=r.readableCache()))return Ie.get(n,t)}(e,this._key)),this._value},e.prototype.destroy=function(){this._watching&&(oe(this._object,this._key,this),this._watching=!1)},e.prototype.copy=function(e){var t,n=re(e),r=this._paths
if(void 0!==r)for(t in t=void 0,r)r[t]>0&&n.add(t)
return n},e.prototype.add=function(e){var t=this._paths||(this._paths={})
t[e]=(t[e]||0)+1
var n=Z(e),r=e.slice(n.length+1)
this.chain(n,r)},e.prototype.remove=function(e){var t=this._paths
if(void 0!==t){t[e]>0&&t[e]--
var n=Z(e),r=e.slice(n.length+1)
this.unchain(n,r)}},e.prototype.chain=function(t,n){var r=this._chains,i=void 0
void 0===r?r=this._chains=Object.create(null):i=r[t],void 0===i&&(i=r[t]=new e(this,t,void 0)),i.count++,n&&(t=Z(n),n=n.slice(t.length+1),i.chain(t,n))},e.prototype.unchain=function(e,t){var n,r,i=this._chains,o=i[e]
t&&t.length>1&&(n=Z(t),r=t.slice(n.length+1),o.unchain(n,r)),o.count--,o.count<=0&&(i[o._key]=void 0,o.destroy())},e.prototype.notify=function(e,t){e&&this._watching&&((n=this._parent.value())!==this._object&&(oe(this._object,this._key,this),ee(n)?(this._object=n,ie(n,this._key,this)):this._object=void 0),this._value=void 0)
var n,r,i=this._chains
if(void 0!==i)for(var o in r=void 0,i)void 0!==(r=i[o])&&r.notify(e,t)
t&&this._parent&&this._parent.populateAffected(this._key,1,t)},e.prototype.populateAffected=function(e,t,n){this._key&&(e=this._key+"."+e),this._parent?this._parent.populateAffected(e,t+1,n):t>1&&n.push(this.value(),e)},e}()
var se=n.symbol("undefined"),le=[],ue=function(){function e(e,n){this._cache=void 0,this._watching=void 0,this._mixins=void 0,t.ENV._ENABLE_BINDING_SUPPORT&&(this._bindings=void 0),this._values=void 0,this._deps=void 0,this._chainWatchers=void 0,this._chains=void 0,this._tag=void 0,this._tags=void 0,this._factory=void 0,this._flags=0,this.source=e,this.proto=void 0,this.parent=n,this._listeners=void 0,this._listenersFinalized=!1}return e.prototype.isInitialized=function(e){return this.proto!==e},e.prototype.destroy=function(){if(!this.isMetaDestroyed()){var e,t=void 0,n=void 0,r=void 0,i=this.readableChains()
if(void 0!==i)for(le.push(i);le.length>0;){if(void 0!==(t=(i=le.pop())._chains))for(n in t)void 0!==t[n]&&le.push(t[n])
i._watching&&void 0!==(r=i._object)&&(e=de(r))&&!e.isSourceDestroying()&&oe(r,i._key,i,e)}this.setMetaDestroyed()}},e.prototype.isSourceDestroying=function(){return 0!=(2&this._flags)},e.prototype.setSourceDestroying=function(){this._flags|=2},e.prototype.isSourceDestroyed=function(){return 0!=(4&this._flags)},e.prototype.setSourceDestroyed=function(){this._flags|=4},e.prototype.isMetaDestroyed=function(){return 0!=(8&this._flags)},e.prototype.setMetaDestroyed=function(){this._flags|=8},e.prototype.isProxy=function(){return 0!=(16&this._flags)},e.prototype.setProxy=function(){this._flags|=16},e.prototype._getOrCreateOwnMap=function(e){return this[e]||(this[e]=Object.create(null))},e.prototype._getInherited=function(e){for(var t,n=this;void 0!==n;){if(void 0!==(t=n[e]))return t
n=n.parent}},e.prototype._findInherited=function(e,t){for(var n,r,i=this;void 0!==i;){if(void 0!==(n=i[e])&&void 0!==(r=n[t]))return r
i=i.parent}},e.prototype.writeDeps=function(e,t,n){var r=this._getOrCreateOwnMap("_deps"),i=r[e]
void 0===i&&(i=r[e]=Object.create(null)),i[t]=n},e.prototype.peekDeps=function(e,t){for(var n,r,i,o=this;void 0!==o;){if(void 0!==(n=o._deps)&&void 0!==(r=n[e])&&void 0!==(i=r[t]))return i
o=o.parent}},e.prototype.hasDeps=function(e){for(var t,n=this;void 0!==n;){if(void 0!==(t=n._deps)&&void 0!==t[e])return!0
n=n.parent}return!1},e.prototype.forEachInDeps=function(e,t){return this._forEachIn("_deps",e,t)},e.prototype._forEachIn=function(e,t,n){for(var r,i,o,a=this,s=void 0,l=void 0;void 0!==a;){if(void 0!==(r=a[e])&&void 0!==(i=r[t]))for(var u in i)(s=void 0===s?new Set:s).has(u)||(s.add(u),(l=l||[]).push(u,i[u]))
a=a.parent}if(void 0!==l)for(o=0;o<l.length;o+=2)n(l[o],l[o+1])},e.prototype.writableCache=function(){return this._getOrCreateOwnMap("_cache")},e.prototype.readableCache=function(){return this._cache},e.prototype.writableTags=function(){return this._getOrCreateOwnMap("_tags")},e.prototype.readableTags=function(){return this._tags},e.prototype.writableTag=function(e){var t=this._tag
return void 0===t&&(t=this._tag=e(this.source)),t},e.prototype.readableTag=function(){return this._tag},e.prototype.writableChainWatchers=function(e){var t=this._chainWatchers
return void 0===t&&(t=this._chainWatchers=e(this.source)),t},e.prototype.readableChainWatchers=function(){return this._chainWatchers},e.prototype.writableChains=function(e){var t=this._chains
return void 0===t&&(t=void 0===this.parent?e(this.source):this.parent.writableChains(e).copy(this.source),this._chains=t),t},e.prototype.readableChains=function(){return this._getInherited("_chains")},e.prototype.writeWatching=function(e,t){this._getOrCreateOwnMap("_watching")[e]=t},e.prototype.peekWatching=function(e){return this._findInherited("_watching",e)},e.prototype.writeMixins=function(e,t){this._getOrCreateOwnMap("_mixins")[e]=t},e.prototype.peekMixins=function(e){return this._findInherited("_mixins",e)},e.prototype.forEachMixins=function(e){for(var t,n=this,r=void 0;void 0!==n;){if(void 0!==(t=n._mixins))for(var i in t)(r=void 0===r?new Set:r).has(i)||(r.add(i),e(i,t[i]))
n=n.parent}},e.prototype.writeBindings=function(e,t){this._getOrCreateOwnMap("_bindings")[e]=t},e.prototype.peekBindings=function(e){return this._findInherited("_bindings",e)},e.prototype.forEachBindings=function(e){for(var t,n=this,r=void 0;void 0!==n;){if(void 0!==(t=n._bindings))for(var i in t)void 0===(r=r||Object.create(null))[i]&&(r[i]=!0,e(i,t[i]))
n=n.parent}},e.prototype.clearBindings=function(){this._bindings=void 0},e.prototype.writeValues=function(e,t){this._getOrCreateOwnMap("_values")[e]=t},e.prototype.peekValues=function(e){return this._findInherited("_values",e)},e.prototype.deleteFromValues=function(e){delete this._getOrCreateOwnMap("_values")[e]},i.createClass(e,[{key:"factory",set:function(e){this._factory=e},get:function(){return this._factory}}]),e}()
for(var ce in c)ue.prototype[ce]=c[ce]
var fe=Object.getPrototypeOf,pe=new WeakMap
function de(e){for(var t=e,n=void 0;void 0!==t&&null!==t;){if(void 0!==(n=pe.get(t)))return n
t=fe(t)}}function he(e){var t=de(e),n=void 0
if(void 0!==t){if(t.source===e)return t
n=t}var r=new ue(e,n)
return function(e,t){pe.set(e,t)}(e,r),r}function me(e,t){var n
return ge(n=e[t])?n:void 0}function ge(e){return null!==e&&"object"==typeof e&&e.isDescriptor}var ve=function(){function e(e,t,n,r){this.size=0,this.misses=0,this.hits=0,this.limit=e,this.func=t,this.key=n,this.store=r||new be}return e.prototype.get=function(e){var t=void 0===this.key?e:this.key(e),n=this.store.get(t)
return void 0===n?(this.misses++,n=this._set(t,this.func(e))):n===se?(this.hits++,n=void 0):this.hits++,n},e.prototype.set=function(e,t){var n=void 0===this.key?e:this.key(e)
return this._set(n,t)},e.prototype._set=function(e,t){return this.limit>this.size&&(this.size++,void 0===t?this.store.set(e,se):this.store.set(e,t)),t},e.prototype.purge=function(){this.store.clear(),this.size=0,this.hits=0,this.misses=0},e}(),be=function(){function e(){this.data=Object.create(null)}return e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.clear=function(){this.data=Object.create(null)},e}(),ye=new ve(1e3,function(e){return e.indexOf(".")})
function Ee(e){return"string"==typeof e&&-1!==ye.get(e)}var Te={object:!0,function:!0,string:!0}
function _e(e,t){var n=typeof e,r="object"===n,i=void 0,o=void 0
if(r||"function"===n){if(ge(o=e[t])&&(i=o),void 0!==i)return i.get(e,t)}else o=e[t]
return Ee(t)?Ae(e,t):void 0!==o||!r||t in e||"function"!=typeof e.unknownProperty?o:e.unknownProperty(t)}function Ae(e,t){var n,r=e,i=t.split(".")
for(n=0;n<i.length;n++){if(!we(r))return
if((r=_e(r,i[n]))&&r.isDestroyed)return}return r}function we(e){return void 0!==e&&null!==e&&Te[typeof e]}function Ce(e,t,n,i){if(Ee(t))return function(e,t,n,i){var o=t.split("."),a=o.pop(),s=o.join("."),l=Ae(e,s)
if(l)return Ce(l,a,n)
if(!i)throw new r.Error('Property set failed: object in path "'+s+'" could not be found or was destroyed.')}(e,t,n,i)
var o,a=e[t]
return ge(a)?a.set(e,t,n):void 0!==a||"object"!=typeof e||t in e||"function"!=typeof e.setUnknownProperty?a!==n&&(M(e,t,o=de(e)),e[t]=n,F(e,t,o)):e.setUnknownProperty(t,n),n}var Se=/\.@each$/
function Oe(e,t){var n=e.indexOf("{")
n<0?t(e.replace(Se,".[]")):function e(t,n,r,i){var o=n.indexOf("}"),a=0,s=void 0,l=void 0
var u=n.substring(r+1,o).split(",")
var c=n.substring(o+1)
t+=n.substring(0,r)
l=u.length
for(;a<l;)(s=c.indexOf("{"))<0?i((t+u[a++]+c).replace(Se,".[]")):e(t+u[a++],c,s,i)}("",e,n,t)}function xe(e,t,n,r){var i,o,a=e._dependentKeys
if(null!==a&&void 0!==a)for(i=0;i<a.length;i++)o=a[i],r.writeDeps(o,n,(r.peekDeps(o,n)||0)+1),A(t,o,r)}function Re(e,t,n,r){var i,o,a=e._dependentKeys
if(null!==a&&void 0!==a)for(i=0;i<a.length;i++)o=a[i],r.writeDeps(o,n,(r.peekDeps(o,n)||0)-1),C(t,o,r)}function Ne(e,t){this.isDescriptor=!0
var n="function"==typeof e
n?this._getter=e:(this._getter=e.get,this._setter=e.set),this._suspended=void 0,this._meta=void 0,this._volatile=!1,this._dependentKeys=t&&t.dependentKeys,this._readOnly=t&&n&&!0===t.readOnly}Ne.prototype=new V,Ne.prototype.constructor=Ne
var Le=Ne.prototype
function Ie(e,t){var n=de(e),r=void 0!==n?n.source===e&&n.readableCache():void 0,i=void 0!==r?r[t]:void 0
if(i!==se)return i}Le.volatile=function(){return this._volatile=!0,this},Le.readOnly=function(){return this._readOnly=!0,this},Le.property=function(){var e,t=[]
function n(e){t.push(e)}for(e=0;e<arguments.length;e++)Oe(arguments[e],n)
return this._dependentKeys=t,this},Le.meta=function(e){return 0===arguments.length?this._meta||{}:(this._meta=e,this)},Le.didChange=function(e,t){if(!this._volatile&&this._suspended!==e){var n=de(e)
if(void 0!==n&&n.source===e){var r=n.readableCache()
void 0!==r&&void 0!==r[t]&&(r[t]=void 0,Re(this,e,t,n))}}},Le.get=function(e,t){if(this._volatile)return this._getter.call(e,t)
var n=he(e),r=n.writableCache(),i=r[t]
if(i!==se){if(void 0!==i)return i
var o=this._getter.call(e,t)
r[t]=void 0===o?se:o
var a=n.readableChainWatchers()
return void 0!==a&&a.revalidate(t),xe(this,e,t,n),o}},Le.set=function(e,t,n){return this._readOnly&&this._throwReadOnlyError(e,t),this._setter?this._volatile?this.volatileSet(e,t,n):this.setWithSuspend(e,t,n):this.clobberSet(e,t,n)},Le._throwReadOnlyError=function(e,t){throw new r.Error('Cannot set read-only property "'+t+'" on object: '+n.inspect(e))},Le.clobberSet=function(e,t,n){return G(e,t,null,Ie(e,t)),Ce(e,t,n),n},Le.volatileSet=function(e,t,n){return this._setter.call(e,t,n)},Le.setWithSuspend=function(e,t,n){var r=this._suspended
this._suspended=e
try{return this._set(e,t,n)}finally{this._suspended=r}},Le._set=function(e,t,n){var r=he(e),i=r.writableCache(),o=i[t],a=void 0!==o,s=void 0
a&&o!==se&&(s=o)
var l=this._setter.call(e,t,n,s)
return a&&s===l?l:(M(e,t,r),a||xe(this,e,t,r),i[t]=void 0===l?se:l,F(e,t,r),l)},Le.teardown=function(e,t,n){if(!this._volatile){var r=n.readableCache()
void 0!==r&&void 0!==r[t]&&(Re(this,e,t,n),r[t]=void 0)}},Ie.set=function(e,t,n){e[t]=void 0===n?se:n},Ie.get=function(e,t){var n=e[t]
if(n!==se)return n},Ie.remove=function(e,t){e[t]=void 0}
var ke={},De=function(e){function t(t){var n=i.possibleConstructorReturn(this,e.call(this))
return n.isDescriptor=!0,n.altKey=t,n._dependentKeys=[t],n}return i.inherits(t,e),t.prototype.setup=function(e,t){var n=he(e)
n.peekWatching(t)&&xe(this,e,t,n)},t.prototype.teardown=function(e,t,n){n.peekWatching(t)&&Re(this,e,t,n)},t.prototype.willWatch=function(e,t,n){xe(this,e,t,n)},t.prototype.didUnwatch=function(e,t,n){Re(this,e,t,n)},t.prototype.get=function(e,t){var n=_e(e,this.altKey),r=he(e),i=r.writableCache()
return i[t]!==ke&&(i[t]=ke,xe(this,e,t,r)),n},t.prototype.set=function(e,t,n){return Ce(e,this.altKey,n)},t.prototype.readOnly=function(){return this.set=Pe,this},t.prototype.oneWay=function(){return this.set=Me,this},t}(V)
function Pe(e,t){throw new r.Error("Cannot set read-only property '"+t+"' on object: "+n.inspect(e))}function Me(e,t,n){return G(e,t,null),Ce(e,t,n)}De.prototype._meta=void 0,De.prototype.meta=Ne.prototype.meta
var Fe=[],je={}
var Be,He,$e=(Be="undefined"!=typeof window&&window.performance||{},(He=Be.now||Be.mozNow||Be.webkitNow||Be.msNow||Be.oNow)?He.bind(Be):function(){return+new Date})
function Ue(){}function We(e,n,r){if(0===Fe.length)return Ue
var i=je[e]
if(i||(i=function(e){var t,n=[],r=void 0
for(t=0;t<Fe.length;t++)(r=Fe[t]).regex.test(e)&&n.push(r.object)
return je[e]=n,n}(e)),0===i.length)return Ue
var o=n(r),a=t.ENV.STRUCTURED_PROFILE,s=void 0
a&&(s=e+": "+o.object,console.time(s))
var l=new Array(i.length),u=void 0,c=void 0,f=$e()
for(u=0;u<i.length;u++)c=i[u],l[u]=c.before(e,f,o)
return function(){var t=void 0,n=void 0,r=$e()
for(t=0;t<i.length;t++)"function"==typeof(n=i[t]).after&&n.after(e,r,o,l[t])
a&&console.timeEnd(s)}}e.flaggedInstrument=void 0,e.flaggedInstrument=function(e,t,n){return n()}
var Ke=void 0,qe=void 0
function ze(e){return null===e||void 0===e}function Ve(e){var t,n,r=ze(e)
if(r)return r
if("number"==typeof e.size)return!e.size
var i=typeof e
return"object"===i&&"number"==typeof(t=_e(e,"size"))?!t:"number"==typeof e.length&&"function"!==i?!e.length:"object"===i&&"number"==typeof(n=_e(e,"length"))&&!n}function Ge(e){return Ve(e)||"string"==typeof e&&!1===/\S/.test(e)}var Ye=new s(["sync","actions","destroy"],{sync:{before:U,after:W},defaultQueue:"actions",onBegin:function(e){Qe.currentRunLoop=e},onEnd:function(e,t){Qe.currentRunLoop=t},onErrorTarget:{get onerror(){return Ke}},onErrorMethod:"onerror"})
function Qe(){return Ye.run.apply(Ye,arguments)}Qe.join=function(){return Ye.join.apply(Ye,arguments)},Qe.bind=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(){var e,n,r
for(e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r]
return Qe.join.apply(Qe,t.concat(n))}},Qe.backburner=Ye,Qe.currentRunLoop=null,Qe.queues=Ye.queueNames,Qe.begin=function(){Ye.begin()},Qe.end=function(){Ye.end()},Qe.schedule=function(){return Ye.schedule.apply(Ye,arguments)},Qe.hasScheduledTimers=function(){return Ye.hasTimers()},Qe.cancelTimers=function(){Ye.cancelTimers()},Qe.later=function(){return Ye.later.apply(Ye,arguments)},Qe.once=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.unshift("actions"),Ye.scheduleOnce.apply(Ye,t)},Qe.scheduleOnce=function(){return Ye.scheduleOnce.apply(Ye,arguments)},Qe.next=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.push(1),Ye.later.apply(Ye,t)},Qe.cancel=function(e){return Ye.cancel(e)},Qe.debounce=function(){return Ye.debounce.apply(Ye,arguments)},Qe.throttle=function(){return Ye.throttle.apply(Ye,arguments)},Qe._addQueue=function(e,t){-1===Qe.queues.indexOf(e)&&Qe.queues.splice(Qe.queues.indexOf(t)+1,0,e)}
var Xe=function(){function e(){this._registry=[],this._coreLibIndex=0}return e.prototype._getLibraryByName=function(e){var t,n=this._registry,r=n.length
for(t=0;t<r;t++)if(n[t].name===e)return n[t]},e.prototype.register=function(e,t,n){var r=this._registry.length
this._getLibraryByName(e)||(n&&(r=this._coreLibIndex++),this._registry.splice(r,0,{name:e,version:t}))},e.prototype.registerCoreLibrary=function(e,t){this.register(e,t,!0)},e.prototype.deRegister=function(e){var t=this._getLibraryByName(e),n=void 0
t&&(n=this._registry.indexOf(t),this._registry.splice(n,1))},e}(),Je=new Xe
function Ze(e){var t=Object.create(null)
for(var n in e)t[n]=e[n]
return t}function et(e,t){var n=e._keys.copy(),r=Ze(e._values)
return t._keys=n,t._values=r,t.size=e.size,t}var tt=function(){function e(){this.clear()}return e.create=function(){return new this},e.prototype.clear=function(){this.presenceSet=Object.create(null),this.list=[],this.size=0},e.prototype.add=function(e,t){var r=t||n.guidFor(e),i=this.presenceSet,o=this.list
return!0!==i[r]&&(i[r]=!0,this.size=o.push(e)),this},e.prototype.delete=function(e,t){var r,i=t||n.guidFor(e),o=this.presenceSet,a=this.list
return!0===o[i]&&(delete o[i],(r=a.indexOf(e))>-1&&a.splice(r,1),this.size=a.length,!0)},e.prototype.isEmpty=function(){return 0===this.size},e.prototype.has=function(e){if(0===this.size)return!1
var t=n.guidFor(e)
return!0===this.presenceSet[t]},e.prototype.forEach=function(e){if(0!==this.size){var t,n,r=this.list
if(2===arguments.length)for(t=0;t<r.length;t++)e.call(arguments[1],r[t])
else for(n=0;n<r.length;n++)e(r[n])}},e.prototype.toArray=function(){return this.list.slice()},e.prototype.copy=function(){var e=new(0,this.constructor)
return e.presenceSet=Ze(this.presenceSet),e.list=this.toArray(),e.size=this.size,e},e}(),nt=function(){function e(){this._keys=new tt,this._values=Object.create(null),this.size=0}return e.create=function(){return new this},e.prototype.get=function(e){if(0!==this.size)return this._values[n.guidFor(e)]},e.prototype.set=function(e,t){var r=this._keys,i=this._values,o=n.guidFor(e),a=-0===e?0:e
return r.add(a,o),i[o]=t,this.size=r.size,this},e.prototype.delete=function(e){if(0===this.size)return!1
var t=this._keys,r=this._values,i=n.guidFor(e)
return!!t.delete(e,i)&&(delete r[i],this.size=t.size,!0)},e.prototype.has=function(e){return this._keys.has(e)},e.prototype.forEach=function(e){if(0!==this.size){var t=this,n=void 0,r=void 0
2===arguments.length?(r=arguments[1],n=function(n){return e.call(r,t.get(n),n,t)}):n=function(n){return e(t.get(n),n,t)},this._keys.forEach(n)}},e.prototype.clear=function(){this._keys.clear(),this._values=Object.create(null),this.size=0},e.prototype.copy=function(){return et(this,new e)},e}(),rt=function(e){function t(t){var n=i.possibleConstructorReturn(this,e.call(this))
return n.defaultValue=t.defaultValue,n}return i.inherits(t,e),t.create=function(e){return e?new t(e):new nt},t.prototype.get=function(t){var n
return this.has(t)?e.prototype.get.call(this,t):(n=this.defaultValue(t),this.set(t,n),n)},t.prototype.copy=function(){return et(this,new(0,this.constructor)({defaultValue:this.defaultValue}))},t}(nt),it=Array.prototype.concat,ot=Array.isArray
function at(e){return"function"==typeof e&&!1!==e.isMethod&&e!==Boolean&&e!==Object&&e!==Number&&e!==Array&&e!==Date&&e!==String}var st={}
function lt(e,t,n,r){var i=n[e]||r[e]
return t[e]&&(i=i?it.call(i,t[e]):t[e]),i}function ut(e,t,r,i,o){if(void 0!==o[t])return r
var a=i[t]
return void 0===a&&(a=e[t]),"function"==typeof a?n.wrap(r,a):r}function ct(e,r,i,o,a,s,l,u){if(i instanceof V){if(t.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT&&i===bt&&a[r])return st
i._getter&&(i=function(e,t,r,i,o,a){var s=void 0
return void 0===i[t]&&(s=o[t]),s||(s=me(a,t)),void 0!==s&&s instanceof Ne?((r=Object.create(r))._getter=n.wrap(r._getter,s._getter),s._setter&&(r._setter?r._setter=n.wrap(r._setter,s._setter):r._setter=s._setter),r):r}(0,r,i,s,a,e)),a[r]=i,s[r]=void 0}else l&&l.indexOf(r)>=0||"concatenatedProperties"===r||"mergedProperties"===r?i=function(e,t,r,i){var o=i[t]||e[t]
return null===o||void 0===o?n.makeArray(r):ot(o)?null===r||void 0===r?o:it.call(o,r):it.call(n.makeArray(o),r)}(e,r,i,s):u&&u.indexOf(r)>-1?i=function(e,t,r,i){var o,a=i[t]||e[t]
if(!a)return r
var s=n.assign({},a),l=!1
for(var u in r)r.hasOwnProperty(u)&&(at(o=r[u])?(l=!0,s[u]=ut(e,u,o,a,{})):s[u]=o)
return l&&(s._super=n.ROOT),s}(e,r,i,s):at(i)&&(i=ut(e,r,i,s,a)),a[r]=void 0,s[r]=i}function ft(e,t,n,r){var i=t.methodName,o=void 0,a=void 0
return n[i]||r[i]?(o=r[i],t=n[i]):void 0!==(a=me(e,i))?(t=a,o=void 0):(t=void 0,o=e[i]),{desc:t,value:o}}function pt(e,t,n,r){var i
if(n)for(i=0;i<n.length;i++)r(e,n[i],null,t)}function dt(e,t,n,r){"function"==typeof n&&(pt(e,t,n.__ember_observesBefore__,L),pt(e,t,n.__ember_observes__,R),pt(e,t,n.__ember_listens__,d)),"function"==typeof r&&(pt(e,t,r.__ember_observesBefore__,N),pt(e,t,r.__ember_observes__,x),pt(e,t,r.__ember_listens__,p))}function ht(e,r,i){var o,a,s={},l={},u=he(e),c=[],f=void 0,p=void 0,d=void 0
for(e._super=n.ROOT,function e(t,r,i,o,a,s){var l,u,c,f,p=void 0,d=void 0,h=void 0,m=void 0,g=void 0
function v(e){delete i[e],delete o[e]}for(l=0;l<t.length;l++)if(p=t[l],u=r,f=void 0,f=void 0,(d=(c=p)instanceof mt?(f=n.guidFor(c),u.peekMixins(f)?st:(u.writeMixins(f,c),c.properties)):c)!==st)if(d){for(h in a.willMergeMixin&&a.willMergeMixin(d),m=lt("concatenatedProperties",d,o,a),g=lt("mergedProperties",d,o,a),d)d.hasOwnProperty(h)&&(s.push(h),ct(a,h,d[h],0,i,o,m,g))
d.hasOwnProperty("toString")&&(a.toString=d.toString)}else p.mixins&&(e(p.mixins,r,i,o,a,s),p._without&&p._without.forEach(v))}(r,u,s,l,e,c),o=0;o<c.length;o++)if("constructor"!==(f=c[o])&&l.hasOwnProperty(f)&&(d=s[f],p=l[f],!t.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT||d!==bt)){for(;d&&d instanceof yt;)d=(a=ft(e,d,s,l)).desc,p=a.value
void 0===d&&void 0===p||(dt(e,f,e[f],p),t.ENV._ENABLE_BINDING_SUPPORT&&"function"==typeof mt.detectBinding&&mt.detectBinding(f)&&u.writeBindings(f,p),G(e,f,d,p,u))}return t.ENV._ENABLE_BINDING_SUPPORT&&!i&&"function"==typeof mt.finishProtype&&mt.finishPartial(e,u),e}var mt=function(){function e(t,i){this.properties=i
var o,a,s,l=t&&t.length
if(l>0){for(o=new Array(l),a=0;a<l;a++)s=t[a],o[a]=s instanceof e?s:new e(void 0,s)
this.mixins=o}else this.mixins=void 0
this.ownerConstructor=void 0,this._without=void 0,this[n.GUID_KEY]=null,this[n.NAME_KEY]=null,r.debugSeal(this)}return e.applyPartial=function(e){var t,n,r
for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return ht(e,n,!0)},e.create=function(){vt=!0
var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return new this(t,void 0)},e.mixins=function(e){var t=de(e),n=[]
return void 0===t?n:(t.forEachMixins(function(e,t){t.properties||n.push(t)}),n)},e.prototype.reopen=function(){var t=void 0
this.properties?(t=new e(void 0,this.properties),this.properties=void 0,this.mixins=[t]):this.mixins||(this.mixins=[])
var n=this.mixins,r=void 0
for(r=0;r<arguments.length;r++)(t=arguments[r])instanceof e?n.push(t):n.push(new e(void 0,t))
return this},e.prototype.apply=function(e){return ht(e,[this],!1)},e.prototype.applyPartial=function(e){return ht(e,[this],!0)},e.prototype.detect=function(t){if("object"!=typeof t||null===t)return!1
if(t instanceof e)return function e(t,r,i){var o=n.guidFor(t)
if(i[o])return!1
i[o]=!0
if(t===r)return!0
var a=t.mixins
var s=a?a.length:0
for(;--s>=0;)if(e(a[s],r,i))return!0
return!1}(t,this,{})
var r=de(t)
return void 0!==r&&!!r.peekMixins(n.guidFor(this))},e.prototype.without=function(){var t,n,r,i=new e([this])
for(t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return i._without=n,i},e.prototype.keys=function(){var e={}
return function e(t,r,i){var o,a,s
if(i[n.guidFor(r)])return
i[n.guidFor(r)]=!0
if(r.properties)for(o=Object.keys(r.properties),a=0;a<o.length;a++)s=o[a],t[s]=!0
else r.mixins&&r.mixins.forEach(function(n){return e(t,n,i)})}(e,this,{}),Object.keys(e)},e}()
mt._apply=ht,t.ENV._ENABLE_BINDING_SUPPORT&&(mt.finishPartial=null,mt.detectBinding=null)
var gt=mt.prototype
gt.toString=Object.toString,r.debugSeal(gt)
var vt=!1
var bt=new V
function yt(e){this.isDescriptor=!0,this.methodName=e}function Et(e,t){this.type=e,this.name=t,this._super$Constructor(Tt),wt.oneWay.call(this)}function Tt(e){var t=me(this,e)
return(n.getOwner(this)||this.container).lookup(t.type+":"+(t.name||e))}bt.toString=function(){return"(Required Property)"},yt.prototype=new V,Et.prototype=Object.create(V.prototype)
var _t=Et.prototype,At=Ne.prototype,wt=De.prototype
_t._super$Constructor=Ne,_t.get=At.get,_t.readOnly=At.readOnly,_t.teardown=At.teardown
var Ct=Array.prototype.splice,St=function(e){function t(t){var n=i.possibleConstructorReturn(this,e.call(this))
return n.desc=t,n}return i.inherits(t,e),t.prototype.setup=function(e,t){Object.defineProperty(e,t,this.desc)},t.prototype.get=function(e,t){return e[t]},t.prototype.set=function(e,t,n){return e[t]=n},t.prototype.teardown=function(){},t}(V)
e.default=l,e.computed=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r=new Ne(t.pop())
return t.length>0&&r.property.apply(r,t),r},e.cacheFor=Ie,e.ComputedProperty=Ne,e.alias=function(e){return new De(e)},e.merge=function(e,t){if(null===t||"object"!=typeof t)return e
var n,r=Object.keys(t),i=void 0
for(n=0;n<r.length;n++)e[i=r[n]]=t[i]
return e},e.deprecateProperty=function(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,set:function(e){Ce(this,n,e)},get:function(){return _e(this,n)}})},e.instrument=function(e,t,n,r){if(arguments.length<=3&&"function"==typeof t&&(r=n,n=t,t=void 0),0===Fe.length)return n.call(r)
var i=t||{},o=We(e,function(){return i})
return o?function(e,t,n,r){var i=void 0
try{i=e.call(r)}catch(e){n.exception=e,i=n}finally{t()}return i}(n,o,i,r):n.call(r)},e._instrumentStart=We,e.instrumentationReset=function(){Fe.length=0,je={}},e.instrumentationSubscribe=function(e,t){var n,r=e.split("."),i=void 0,o=[]
for(n=0;n<r.length;n++)"*"===(i=r[n])?o.push("[^\\.]*"):o.push(i)
o=o.join("\\."),o+="(\\..*)?"
var a={pattern:e,regex:new RegExp("^"+o+"$"),object:t}
return Fe.push(a),je={},a},e.instrumentationUnsubscribe=function(e){var t,n=void 0
for(t=0;t<Fe.length;t++)Fe[t]===e&&(n=t)
Fe.splice(n,1),je={}},e.getOnerror=function(){return Ke},e.setOnerror=function(e){Ke=e},e.setDispatchOverride=function(e){qe=e},e.getDispatchOverride=function(){return qe},e.descriptorFor=me,e.meta=he,e.peekMeta=de,e.deleteMeta=function(e){var t=de(e)
void 0!==t&&t.destroy()},e.Cache=ve,e._getPath=Ae,e.get=_e,e.getWithDefault=function(e,t,n){var r=_e(e,t)
return void 0===r?n:r},e.set=Ce,e.trySet=function(e,t,n){return Ce(e,t,n,!0)},e.addListener=p,e.hasListeners=function(e,t){var n=de(e)
if(void 0===n)return!1
var r=n.matchingListeners(t)
return void 0!==r&&r.length>0},e.on=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r=t.pop()
return r.__ember_listens__=t,r},e.removeListener=d
e.sendEvent=h,e.isNone=ze,e.isEmpty=Ve,e.isBlank=Ge,e.isPresent=function(e){return!Ge(e)},e.run=Qe,e.ObserverSet=E,e.beginPropertyChanges=U,e.changeProperties=K,e.endPropertyChanges=W,e.overrideChains=$,e.propertyDidChange=F,e.propertyWillChange=M,e.PROPERTY_DID_CHANGE=I,e.defineProperty=G,e.Descriptor=V,e._hasCachedComputedProperties=function(){Y=!0},e.watchKey=Q,e.unwatchKey=X,e.ChainNode=ae,e.finishChains=function(e){var t=e.readableChainWatchers()
void 0!==t&&t.revalidateAll(),void 0!==e.readableChains()&&e.writableChains(re)},e.removeChainWatcher=oe,e.watchPath=T,e.unwatchPath=_,e.isWatching=function(e,t){return w(e,t)>0},e.unwatch=C,e.watch=A,e.watcherCount=w,e.libraries=Je,e.Libraries=Xe
e.Map=nt,e.MapWithDefault=rt,e.OrderedSet=tt,e.getProperties=function(e){var t={},n=arguments,r=1
for(2===arguments.length&&Array.isArray(arguments[1])&&(r=0,n=arguments[1]);r<n.length;r++)t[n[r]]=_e(e,n[r])
return t},e.setProperties=function(e,t){return null===t||"object"!=typeof t?t:(K(function(){var n,r=Object.keys(t),i=void 0
for(n=0;n<r.length;n++)i=r[n],Ce(e,i,t[i])}),t)},e.expandProperties=Oe,e.addObserver=x,e.removeObserver=R,e._addBeforeObserver=N,e._removeBeforeObserver=L,e.Mixin=mt,e.aliasMethod=function(e){return new yt(e)},e._beforeObserver=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r,i=t.pop(),o=t,a=[],s=function(e){a.push(e)}
for(r=0;r<o.length;++r)Oe(o[r],s)
return i.__ember_observesBefore__=a,i},e.mixin=function(e){var t,n,r
for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return ht(e,n,!1),e},e.observer=function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
var e,t,n,r,i=t.pop(),o=t,a=[],s=function(e){return a.push(e)}
for(r=0;r<o.length;++r)Oe(o[r],s)
return i.__ember_observes__=a,i},e.required=function(){return bt},e.REQUIRED=bt,e.hasUnprocessedMixins=function(){return vt},e.clearUnprocessedMixins=function(){vt=!1},e.InjectedProperty=Et,e.setHasViews=function(e){m=e},e.tagForProperty=function(e,t,n){if("object"!=typeof e||null===e)return o.CONSTANT_TAG
var r=void 0===n?he(e):n
if(r.isProxy())return v(e,r)
var i=r.writableTags(),a=i[t]
return a||(i[t]=g())},e.tagFor=v,e.markObjectAsDirty=b,e.replace=function(e,t,n,r){for(var i=[].concat(r),o=[],a=t,s=n,l=void 0,u=void 0;i.length;)(l=s>6e4?6e4:s)<=0&&(l=0),u=i.splice(0,6e4),u=[a,l].concat(u),a+=6e4,s-=l,o=o.concat(Ct.apply(e,u))
return o},e.didRender=void 0,e.assertNotRendered=void 0,e.isProxy=function(e){var t
return"object"==typeof e&&null!==e&&(void 0!==(t=de(e))&&t.isProxy())},e.descriptor=function(e){return new St(e)},Object.defineProperty(e,"__esModule",{value:!0})}),e("ember-routing/ext/controller",["exports","ember-metal","ember-runtime","ember-routing/utils"],function(e,t,n,r){"use strict"
n.ControllerMixin.reopen({concatenatedProperties:["queryParams"],queryParams:null,_qpDelegate:null,_qpChanged:function(e,n){var r=n.substr(0,n.length-3);(0,e._qpDelegate)(r,(0,t.get)(e,r))},transitionToRoute:function(){var e,n,i,o=(0,t.get)(this,"target"),a=o.transitionToRoute||o.transitionTo
for(e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i]
return a.apply(o,(0,r.prefixRouteNameArg)(this,n))},replaceRoute:function(){var e,n,i,o=(0,t.get)(this,"target"),a=o.replaceRoute||o.replaceWith
for(e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i]
return a.apply(o,(0,r.prefixRouteNameArg)(this,n))}}),e.default=n.ControllerMixin}),e("ember-routing/ext/run_loop",["ember-metal"],function(e){"use strict"
e.run._addQueue("routerTransitions","actions")}),e("ember-routing/index",["exports","ember-routing/location/api","ember-routing/location/none_location","ember-routing/location/hash_location","ember-routing/location/history_location","ember-routing/location/auto_location","ember-routing/system/generate_controller","ember-routing/system/controller_for","ember-routing/system/dsl","ember-routing/system/router","ember-routing/system/route","ember-routing/system/query_params","ember-routing/services/routing","ember-routing/services/router","ember-routing/system/cache","ember-routing/ext/run_loop","ember-routing/ext/controller"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h){"use strict"
e.BucketCache=e.RouterService=e.RoutingService=e.QueryParams=e.Route=e.Router=e.RouterDSL=e.controllerFor=e.generateControllerFactory=e.generateController=e.AutoLocation=e.HistoryLocation=e.HashLocation=e.NoneLocation=e.Location=void 0,Object.defineProperty(e,"Location",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"NoneLocation",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"HashLocation",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"HistoryLocation",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"AutoLocation",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"generateController",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"generateControllerFactory",{enumerable:!0,get:function(){return a.generateControllerFactory}}),Object.defineProperty(e,"controllerFor",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"RouterDSL",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"Router",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"Route",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"QueryParams",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"RoutingService",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"RouterService",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"BucketCache",{enumerable:!0,get:function(){return h.default}})}),e("ember-routing/location/api",["exports","ember-debug","ember-environment","ember-routing/location/util"],function(e,t,n,r){"use strict"
e.default={create:function(e){var t=e&&e.implementation,n=this.implementations[t]
return n.create.apply(n,arguments)},implementations:{},_location:n.environment.location,_getHash:function(){return(0,r.getHash)(this.location)}}}),e("ember-routing/location/auto_location",["exports","ember-utils","ember-metal","ember-debug","ember-runtime","ember-environment","ember-routing/location/util"],function(e,t,n,r,i,o,a){"use strict"
function s(e){return function(){var r,i,o,a=(0,n.get)(this,"concreteImplementation")
for(r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o]
return(0,t.tryInvoke)(a,e,i)}}function l(e,t){var n=(0,a.getPath)(t),r=(0,a.getHash)(t),i=(0,a.getQuery)(t),o=(n.indexOf(e),void 0),s=void 0
return"#/"===r.substr(0,2)?(o=(s=r.substr(1).split("#")).shift(),"/"===n.charAt(n.length-1)&&(o=o.substr(1)),n+=o+i,s.length&&(n+="#"+s.join("#"))):n+=i+r,n}function u(e,t){var n=e,r=l(e,t).substr(e.length)
return""!==r&&("/"!==r[0]&&(r="/"+r),n+="#"+r),n}e.getHistoryPath=l,e.getHashPath=u,e.default=i.Object.extend({location:o.environment.location,history:o.environment.history,global:o.environment.window,userAgent:o.environment.userAgent,cancelRouterSetup:!1,rootURL:"/",detect:function(){var e=this.rootURL,r=function(e){var t,n,r=e.location,i=e.userAgent,o=e.history,s=e.documentMode,c=e.global,f=e.rootURL,p="none",d=!1,h=(0,a.getFullPath)(r)
if((0,a.supportsHistory)(i,o)){if(t=l(f,r),h===t)return"history"
"/#"===h.substr(0,2)?(o.replaceState({path:t},null,t),p="history"):(d=!0,(0,a.replacePath)(r,t))}else(0,a.supportsHashChange)(s,c)&&(n=u(f,r),h===n||"/"===h&&"/#/"===n?p="hash":(d=!0,(0,a.replacePath)(r,n)))
if(d)return!1
return p}({location:this.location,history:this.history,userAgent:this.userAgent,rootURL:e,documentMode:this.documentMode,global:this.global})
!1===r&&((0,n.set)(this,"cancelRouterSetup",!0),r="none")
var i=(0,t.getOwner)(this).lookup("location:"+r);(0,n.set)(i,"rootURL",e),(0,n.set)(this,"concreteImplementation",i)},initState:s("initState"),getURL:s("getURL"),setURL:s("setURL"),replaceURL:s("replaceURL"),onUpdateURL:s("onUpdateURL"),formatURL:s("formatURL"),willDestroy:function(){var e=(0,n.get)(this,"concreteImplementation")
e&&e.destroy()}})}),e("ember-routing/location/hash_location",["exports","ember-metal","ember-runtime","ember-routing/location/api"],function(e,t,n,r){"use strict"
e.default=n.Object.extend({implementation:"hash",init:function(){(0,t.set)(this,"location",(0,t.get)(this,"_location")||window.location),this._hashchangeHandler=void 0},getHash:r.default._getHash,getURL:function(){var e=this.getHash().substr(1),t=e
return"/"!==t[0]&&(t="/",e&&(t+="#"+e)),t},setURL:function(e){(0,t.get)(this,"location").hash=e,(0,t.set)(this,"lastSetURL",e)},replaceURL:function(e){(0,t.get)(this,"location").replace("#"+e),(0,t.set)(this,"lastSetURL",e)},onUpdateURL:function(e){this._removeEventListener(),this._hashchangeHandler=t.run.bind(this,function(){var n=this.getURL();(0,t.get)(this,"lastSetURL")!==n&&((0,t.set)(this,"lastSetURL",null),e(n))}),window.addEventListener("hashchange",this._hashchangeHandler)},formatURL:function(e){return"#"+e},willDestroy:function(){this._removeEventListener()},_removeEventListener:function(){this._hashchangeHandler&&window.removeEventListener("hashchange",this._hashchangeHandler)}})}),e("ember-routing/location/history_location",["exports","ember-metal","ember-runtime","ember-routing/location/api"],function(e,t,n,r){"use strict"
var i=!1
function o(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t
return t=16*Math.random()|0,("x"===e?t:3&t|8).toString(16)})}e.default=n.Object.extend({implementation:"history",init:function(){this._super.apply(this,arguments)
var e=document.querySelector("base"),n=""
e&&(n=e.getAttribute("href")),(0,t.set)(this,"baseURL",n),(0,t.set)(this,"location",(0,t.get)(this,"location")||window.location),this._popstateHandler=void 0},initState:function(){var e=(0,t.get)(this,"history")||window.history;(0,t.set)(this,"history",e),e&&"state"in e&&(this.supportsHistory=!0)
var n=this.getState(),r=this.formatURL(this.getURL())
n&&n.path===r?this._previousURL=this.getURL():this.replaceState(r)},rootURL:"/",getURL:function(){var e=(0,t.get)(this,"location"),n=e.pathname,r=(0,t.get)(this,"rootURL"),i=(0,t.get)(this,"baseURL")
r=r.replace(/\/$/,""),i=i.replace(/\/$/,"")
var o=n.replace(new RegExp("^"+i+"(?=/|$)"),"").replace(new RegExp("^"+r+"(?=/|$)"),"").replace(/\/\/$/g,"/")
return o+=(e.search||"")+this.getHash()},setURL:function(e){var t=this.getState()
e=this.formatURL(e),t&&t.path===e||this.pushState(e)},replaceURL:function(e){var t=this.getState()
e=this.formatURL(e),t&&t.path===e||this.replaceState(e)},getState:function(){return this.supportsHistory?(0,t.get)(this,"history").state:this._historyState},pushState:function(e){var n={path:e,uuid:o()};(0,t.get)(this,"history").pushState(n,null,e),this._historyState=n,this._previousURL=this.getURL()},replaceState:function(e){var n={path:e,uuid:o()};(0,t.get)(this,"history").replaceState(n,null,e),this._historyState=n,this._previousURL=this.getURL()},onUpdateURL:function(e){var t=this
this._removeEventListener(),this._popstateHandler=function(){(i||(i=!0,t.getURL()!==t._previousURL))&&e(t.getURL())},window.addEventListener("popstate",this._popstateHandler)},formatURL:function(e){var n=(0,t.get)(this,"rootURL"),r=(0,t.get)(this,"baseURL")
return""!==e?(n=n.replace(/\/$/,""),r=r.replace(/\/$/,"")):"/"===r[0]&&"/"===n[0]&&(r=r.replace(/\/$/,"")),r+n+e},willDestroy:function(){this._removeEventListener()},getHash:r.default._getHash,_removeEventListener:function(){this._popstateHandler&&window.removeEventListener("popstate",this._popstateHandler)}})}),e("ember-routing/location/none_location",["exports","ember-metal","ember-debug","ember-runtime"],function(e,t,n,r){"use strict"
e.default=r.Object.extend({implementation:"none",path:"",detect:function(){this.rootURL},rootURL:"/",getURL:function(){var e=(0,t.get)(this,"path"),n=(0,t.get)(this,"rootURL")
return n=n.replace(/\/$/,""),e.replace(new RegExp("^"+n+"(?=/|$)"),"")},setURL:function(e){(0,t.set)(this,"path",e)},onUpdateURL:function(e){this.updateCallback=e},handleURL:function(e){(0,t.set)(this,"path",e),this.updateCallback(e)},formatURL:function(e){var n=(0,t.get)(this,"rootURL")
return""!==e&&(n=n.replace(/\/$/,"")),n+e}})}),e("ember-routing/location/util",["exports"],function(e){"use strict"
function t(e){var t=e.pathname
return"/"!==t[0]&&(t="/"+t),t}function n(e){return e.search}function r(e){var t=e.href,n=t.indexOf("#")
return-1===n?"":t.substr(n)}function i(e){var t=e.origin
return t||(t=e.protocol+"//"+e.hostname,e.port&&(t+=":"+e.port)),t}e.getPath=t,e.getQuery=n,e.getHash=r,e.getFullPath=function(e){return t(e)+n(e)+r(e)},e.getOrigin=i,e.supportsHashChange=function(e,t){return"onhashchange"in t&&(void 0===e||e>7)},e.supportsHistory=function(e,t){return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&!!(t&&"pushState"in t)},e.replacePath=function(e,t){e.replace(i(e)+t)}}),e("ember-routing/services/router",["exports","ember-runtime","ember-routing/utils"],function(e,t,n){"use strict"
var r=t.Service.extend({currentRouteName:(0,t.readOnly)("_router.currentRouteName"),currentURL:(0,t.readOnly)("_router.currentURL"),location:(0,t.readOnly)("_router.location"),rootURL:(0,t.readOnly)("_router.rootURL"),_router:null,transitionTo:function(){for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
if((0,n.resemblesURL)(t[0]))return this._router._doURLTransition("transitionTo",t[0])
var e,t,r,i=(0,n.extractRouteArgs)(t),o=i.routeName,a=i.models,s=i.queryParams,l=this._router._doTransition(o,a,s,!0)
return l._keepDefaultQueryParamValues=!0,l},replaceWith:function(){return this.transitionTo.apply(this,arguments).method("replace")},urlFor:function(){var e
return(e=this._router).generate.apply(e,arguments)},isActive:function(){for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
var e,t,r,i=(0,n.extractRouteArgs)(t),o=i.routeName,a=i.models,s=i.queryParams,l=this._router._routerMicrolib
return!!l.isActiveIntent(o,a,null)&&(!(Object.keys(s).length>0)||(this._router._prepareQueryParams(o,a,s,!0),(0,n.shallowEqual)(s,l.state.queryParams)))}})
e.default=r}),e("ember-routing/services/routing",["exports","ember-utils","ember-runtime","ember-metal"],function(e,t,n,r){"use strict"
e.default=n.Service.extend({router:null,targetState:(0,n.readOnly)("router.targetState"),currentState:(0,n.readOnly)("router.currentState"),currentRouteName:(0,n.readOnly)("router.currentRouteName"),currentPath:(0,n.readOnly)("router.currentPath"),hasRoute:function(e){return(0,r.get)(this,"router").hasRoute(e)},transitionTo:function(e,t,n,i){var o=(0,r.get)(this,"router")._doTransition(e,t,n)
return i&&o.method("replace"),o},normalizeQueryParams:function(e,t,n){(0,r.get)(this,"router")._prepareQueryParams(e,t,n)},generateURL:function(e,n,i){var o=(0,r.get)(this,"router")
if(o._routerMicrolib){var a={}
return i&&((0,t.assign)(a,i),this.normalizeQueryParams(e,n,a)),o.generate.apply(o,[e].concat(n,[{queryParams:a}]))}},isActiveForRoute:function(e,t,n,i,o){var a=(0,r.get)(this,"router")._routerMicrolib.recognizer.handlersFor(n),s=a[a.length-1].handler,l=function(e,t){var n,r=0
for(n=0;n<t.length&&(r+=t[n].names.length,t[n].handler!==e);n++);return r}(n,a)
return e.length>l&&(n=s),i.isActiveIntent(n,e,t,!o)}})}),e("ember-routing/system/cache",["exports","ember-runtime"],function(e,t){"use strict"
e.default=t.Object.extend({init:function(){this.cache=Object.create(null)},has:function(e){return!!this.cache[e]},stash:function(e,t,n){var r=this.cache[e]
r||(r=this.cache[e]=Object.create(null)),r[t]=n},lookup:function(e,t,n){var r=this.cache
if(!this.has(e))return n
var i=r[e]
return t in i&&void 0!==i[t]?i[t]:n}})}),e("ember-routing/system/controller_for",["exports"],function(e){"use strict"
e.default=function(e,t,n){return e.lookup("controller:"+t,n)}}),e("ember-routing/system/dsl",["exports","ember-utils","ember-debug"],function(e,t,n){"use strict"
var r=0,i=function(){function e(e,t){this.parent=e,this.enableLoadingSubstates=t&&t.enableLoadingSubstates,this.matches=[],this.explicitIndex=void 0,this.options=t}return e.prototype.route=function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2],s="/_unused_dummy_error_path_route_"+t+"/:error"
2===arguments.length&&"function"==typeof r&&(i=r,r={}),this.enableLoadingSubstates&&(a(this,t+"_loading",{resetNamespace:r.resetNamespace}),a(this,t+"_error",{resetNamespace:r.resetNamespace,path:s})),i?(a(n=new e(o(this,t,r.resetNamespace),this.options),"loading"),a(n,"error",{path:s}),i.call(n),a(this,t,r,n.generate())):a(this,t,r)},e.prototype.push=function(e,n,r,i){var o,a,s=n.split(".")
if(this.options.engineInfo)o=n.slice(this.options.engineInfo.fullName.length+1),a=(0,t.assign)({localFullName:o},this.options.engineInfo),i&&(a.serializeMethod=i),this.options.addRouteForEngine(n,a)
else if(i)throw new Error("Defining a route serializer on route '"+n+"' outside an Engine is not allowed.")
""!==e&&"/"!==e&&"index"!==s[s.length-1]||(this.explicitIndex=!0),this.matches.push(e,n,r)},e.prototype.generate=function(){var e=this.matches
return this.explicitIndex||this.route("index",{path:"/"}),function(t){var n
for(n=0;n<e.length;n+=3)t(e[n]).to(e[n+1],e[n+2])}},e.prototype.mount=function(n){var i,s,l,u,c,f,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=this.options.resolveRouteMap(n),h=n
p.as&&(h=p.as)
var m=o(this,h,p.resetNamespace),g={name:n,instanceId:r++,mountPoint:m,fullName:m},v=p.path
"string"!=typeof v&&(v="/"+h)
var b=void 0,y="/_unused_dummy_error_path_route_"+h+"/:error"
d&&(i=!1,(s=this.options.engineInfo)&&(i=!0,this.options.engineInfo=g),a(l=new e(m,(0,t.assign)({engineInfo:g},this.options)),"loading"),a(l,"error",{path:y}),d.class.call(l),b=l.generate(),i&&(this.options.engineInfo=s))
var E=(0,t.assign)({localFullName:"application"},g)
this.enableLoadingSubstates&&(u=h+"_loading",c="application_loading",f=(0,t.assign)({localFullName:c},g),a(this,u,{resetNamespace:p.resetNamespace}),this.options.addRouteForEngine(u,f),u=h+"_error",c="application_error",f=(0,t.assign)({localFullName:c},g),a(this,u,{resetNamespace:p.resetNamespace,path:y}),this.options.addRouteForEngine(u,f)),this.options.addRouteForEngine(m,E),this.push(v,m,b)},e}()
function o(e,t,n){return function(e){return"application"!==e.parent}(e)&&!0!==n?e.parent+"."+t:t}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],i=o(e,t,n.resetNamespace)
"string"!=typeof n.path&&(n.path="/"+t),e.push(n.path,i,r,n.serialize)}e.default=i,i.map=function(e){var t=new i
return e.call(t),t}}),e("ember-routing/system/generate_controller",["exports","ember-metal","ember-debug"],function(e){"use strict"
function t(e,t){var n=e.factoryFor("controller:basic").class
return n=n.extend({toString:function(){return"(generated "+t+" controller)"}}),e.register("controller:"+t,n),n}e.generateControllerFactory=t,e.default=function(e,n){return t(e,n),e.lookup("controller:"+n)}}),e("ember-routing/system/query_params",["exports","ember-runtime"],function(e,t){"use strict"
e.default=t.Object.extend({isQueryParams:!0,values:null})}),e("ember-routing/system/route",["exports","ember-utils","ember-metal","ember-debug","ember-runtime","ember-routing/system/generate_controller","ember-routing/utils"],function(e,t,n,r,i,o,a){"use strict"
function s(){return this}function l(e,t){if(!(t.length<1)&&e){var r,i={}
return 1===t.length?(r=t[0])in e?i[r]=(0,n.get)(e,r):/_id$/.test(r)&&(i[r]=(0,n.get)(e,"id")):i=(0,n.getProperties)(e,t),i}}e.defaultSerialize=l,e.hasDefaultSerialize=function(e){return!!e.serialize[u]}
var u=(0,t.symbol)("DEFAULT_SERIALIZE")
l[u]=!0
var c=i.Object.extend(i.ActionHandler,i.Evented,{queryParams:{},_setRouteName:function(e){this.routeName=e,this.fullRouteName=h((0,t.getOwner)(this),e)},_qp:(0,n.computed)(function(){var e,r,s,l,u,c,f,p,d,h,m=this,g=void 0,v=this.controllerName||this.routeName,b=(0,t.getOwner)(this),y=b.lookup("controller:"+v),E=(0,n.get)(this,"queryParams"),T=Object.keys(E).length>0
y?(e=(0,n.get)(y,"queryParams")||{},g=function(e,n){var r,i,o={},a={defaultValue:!0,type:!0,scope:!0,as:!0}
for(var s in e)e.hasOwnProperty(s)&&(r={},(0,t.assign)(r,e[s],n[s]),o[s]=r,a[s]=!0)
for(var l in n)n.hasOwnProperty(l)&&!a[l]&&(i={},(0,t.assign)(i,n[l],e[l]),o[l]=i)
return o}((0,a.normalizeControllerQueryParams)(e),E)):T&&(y=(0,o.default)(b,v),g=E)
var _=[],A={},w=[]
for(var C in g)g.hasOwnProperty(C)&&"unknownProperty"!==C&&"_super"!==C&&(l=void 0,"controller"===(s=(r=g[C]).scope||"model")&&(l=[]),u=r.as||this.serializeQueryParamKey(C),c=(0,n.get)(y,C),Array.isArray(c)&&(c=(0,i.A)(c.slice())),f=r.type||(0,i.typeOf)(c),p=this.serializeQueryParam(c,u,f),d=v+":"+C,h={undecoratedDefaultValue:(0,n.get)(y,C),defaultValue:c,serializedDefaultValue:p,serializedValue:p,type:f,urlKey:u,prop:C,scopedPropertyName:d,controllerName:v,route:this,parts:l,values:null,scope:s},A[C]=A[u]=A[d]=h,_.push(h),w.push(C))
return{qps:_,map:A,propertyNames:w,states:{inactive:function(e,t){var n=A[e]
m._qpChanged(e,t,n)},active:function(e,t){var n=A[e]
return m._qpChanged(e,t,n),m._activeQPChanged(n,t)},allowOverrides:function(e,t){var n=A[e]
return m._qpChanged(e,t,n),m._updatingQPChanged(n)}}}}),_names:null,_stashNames:function(e,t){if(!this._names){var r,i,o,a=this._names=e._names
a.length||(a=(e=t)&&e._names||[])
var s=(0,n.get)(this,"_qp.qps"),l=new Array(a.length)
for(r=0;r<a.length;++r)l[r]=e.name+"."+a[r]
for(i=0;i<s.length;++i)"model"===(o=s[i]).scope&&(o.parts=l)}},_activeQPChanged:function(e,t){this.router._activeQPChanged(e.scopedPropertyName,t)},_updatingQPChanged:function(e){this.router._updatingQPChanged(e.urlKey)},mergedProperties:["queryParams"],paramsFor:function(e){var n=(0,t.getOwner)(this).lookup("route:"+e)
if(!n)return{}
var r=this.router._routerMicrolib.activeTransition,i=r?r.state:this.router._routerMicrolib.state,o=n.fullRouteName,a=(0,t.assign)({},i.params[o]),s=p(n,i)
return Object.keys(s).reduce(function(e,t){return e[t]=s[t],e},a)},serializeQueryParamKey:function(e){return e},serializeQueryParam:function(e,t,n){return this.router._serializeQueryParam(e,n)},deserializeQueryParam:function(e,t,n){return this.router._deserializeQueryParam(e,n)},_optionsForQueryParam:function(e){return(0,n.get)(this,"queryParams."+e.urlKey)||(0,n.get)(this,"queryParams."+e.prop)||{}},resetController:s,exit:function(){this.deactivate(),this.trigger("deactivate"),this.teardownViews()},_reset:function(e,t){var r=this.controller
r._qpDelegate=(0,n.get)(this,"_qp.states.inactive"),this.resetController(r,e,t)},enter:function(){this.connections=[],this.activate(),this.trigger("activate")},templateName:null,controllerName:null,actions:{queryParamsDidChange:function(e,t,r){var i,o,a=(0,n.get)(this,"_qp").map,s=Object.keys(e).concat(Object.keys(r))
for(i=0;i<s.length;++i)if((o=a[s[i]])&&(0,n.get)(this._optionsForQueryParam(o),"refreshModel")&&this.router.currentState){this.refresh()
break}return!0},finalizeQueryParamChange:function(e,t,r){if("application"!==this.fullRouteName)return!0
if(r){var i,o,s,l,u,c,f,p,h,m=r.state.handlerInfos,g=this.router,v=g._queryParamsFor(m),b=g._qpUpdates,y=void 0
for((0,a.stashParamNames)(g,m),i=0;i<v.qps.length;++i)l=(s=(o=v.qps[i]).route).controller,u=o.urlKey in e&&o.urlKey,c=void 0,f=void 0,b&&o.urlKey in b?(c=(0,n.get)(l,o.prop),f=s.serializeQueryParam(c,o.urlKey,o.type)):u?void 0!==(f=e[u])&&(c=s.deserializeQueryParam(f,o.urlKey,o.type)):(f=o.serializedDefaultValue,c=d(o.defaultValue)),l._qpDelegate=(0,n.get)(s,"_qp.states.inactive"),f!==o.serializedValue&&(r.queryParamsOnly&&!1!==y&&(p=s._optionsForQueryParam(o),(h=(0,n.get)(p,"replace"))?y=!0:!1===h&&(y=!1)),(0,n.set)(l,o.prop,c)),o.serializedValue=f,o.serializedDefaultValue===f&&!r._keepDefaultQueryParamValues||t.push({value:f,visible:!0,key:u||o.urlKey})
y&&r.method("replace"),v.qps.forEach(function(e){var t=(0,n.get)(e.route,"_qp")
e.route.controller._qpDelegate=(0,n.get)(t,"states.active")}),g._qpUpdates=null}}},deactivate:s,activate:s,transitionTo:function(){var e
return(e=this.router).transitionTo.apply(e,(0,a.prefixRouteNameArg)(this,arguments))},intermediateTransitionTo:function(){var e;(e=this.router).intermediateTransitionTo.apply(e,(0,a.prefixRouteNameArg)(this,arguments))},refresh:function(){return this.router._routerMicrolib.refresh(this)},replaceWith:function(){var e
return(e=this.router).replaceWith.apply(e,(0,a.prefixRouteNameArg)(this,arguments))},send:function(){var e,t,n,i,o,a
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(this.router&&this.router._routerMicrolib||!(0,r.isTesting)())(i=this.router).send.apply(i,t)
else if(o=t.shift(),a=this.actions[o])return a.apply(this,t)},setup:function(e,t){var r,i,o,s,l=void 0,u=this.controllerName||this.routeName,c=this.controllerFor(u,!0)
l=c||this.generateController(u),this.controller||(r=(0,n.get)(this,"_qp.propertyNames"),function(e,t){t.forEach(function(t){e.addObserver(t+".[]",e,e._qpChanged)})}(l,r),this.controller=l)
var f=(0,n.get)(this,"_qp"),d=f.states
l._qpDelegate=d.allowOverrides,t&&((0,a.stashParamNames)(this.router,t.state.handlerInfos),i=this._bucketCache,o=t.params,f.propertyNames.forEach(function(e){var t=f.map[e]
t.values=o
var r=(0,a.calculateCacheKey)(t.route.fullRouteName,t.parts,t.values),s=i.lookup(r,e,t.undecoratedDefaultValue);(0,n.set)(l,e,s)}),s=p(this,t.state),(0,n.setProperties)(l,s)),this.setupController(l,e,t),this._environment.options.shouldRender&&this.renderTemplate(l,e)},_qpChanged:function(e,t,n){if(n){var r=this._bucketCache,i=(0,a.calculateCacheKey)(n.route.fullRouteName,n.parts,n.values)
r.stash(i,e,t)}},beforeModel:s,afterModel:s,redirect:s,contextDidChange:function(){this.currentModel=this.context},model:function(e,t){var r,o=void 0,a=void 0,s=void 0,l=(0,n.get)(this,"_qp.map")
for(var u in e)"queryParams"===u||l&&u in l||(null!==(r=u.match(/^(.*)_id$/))&&(o=r[1],s=e[u]),a=!0)
if(!o){if(a)return(0,i.copy)(e)
if(t.resolveIndex<1)return
return t.state.handlerInfos[t.resolveIndex-1].context}return this.findModel(o,s)},deserialize:function(e,t){return this.model(this.paramsFor(this.routeName),t)},findModel:function(){var e
return(e=(0,n.get)(this,"store")).find.apply(e,arguments)},store:(0,n.computed)(function(){var e=(0,t.getOwner)(this)
this.routeName,(0,n.get)(this,"router.namespace")
return{find:function(t,n){var r=e.factoryFor("model:"+t)
if(r)return(r=r.class).find(n)}}}),serialize:l,setupController:function(e,t){e&&void 0!==t&&(0,n.set)(e,"model",t)},controllerFor:function(e,n){var r=(0,t.getOwner)(this),i=r.lookup("route:"+e)
return i&&i.controllerName&&(e=i.controllerName),r.lookup("controller:"+e)},generateController:function(e){var n=(0,t.getOwner)(this)
return(0,o.default)(n,e)},modelFor:function(e){var n,r=void 0,i=(0,t.getOwner)(this),o=this.router?this.router._routerMicrolib.activeTransition:null
r=i.routable&&null!==o?h(i,e):e
var a=i.lookup("route:"+r)
return null!==o&&(n=a&&a.routeName||r,o.resolvedModels.hasOwnProperty(n))?o.resolvedModels[n]:a&&a.currentModel},renderTemplate:function(){this.render()},render:function(e,r){var i=void 0,o=0===arguments.length
o||("object"!=typeof e||r?i=e:(i=this.templateName||this.routeName,r=e))
var a=function(e,n,r,i){var o,a=(0,t.getOwner)(e),s=void 0,l=void 0,u=void 0,c=void 0,p=void 0,d=void 0
i&&(u=i.into&&i.into.replace(/\//g,"."),c=i.outlet,p=i.controller,d=i.model)
c=c||"main",n?(s=e.routeName,l=e.templateName||s):(s=r.replace(/\//g,"."),l=s)
p||(p=n?e.controllerName||a.lookup("controller:"+s):a.lookup("controller:"+s)||e.controllerName||e.routeName)
"string"==typeof p&&(o=p,p=a.lookup("controller:"+o))
d&&p.set("model",d)
var h=a.lookup("template:"+l)
var m=void 0
u&&(m=f(e))&&u===m.routeName&&(u=void 0)
return{owner:a,into:u,outlet:c,name:s,controller:p,template:h||e._topLevelViewTemplate}}(this,o,i,r)
this.connections.push(a),n.run.once(this.router,"_setOutlets")},disconnectOutlet:function(e){var t,n=void 0,r=void 0
e&&("string"==typeof e?n=e:(n=e.outlet,r=e.parentView?e.parentView.replace(/\//g,"."):void 0)),n=n||"main",this._disconnectOutlet(n,r)
var i=this.router._routerMicrolib.currentHandlerInfos
for(t=0;t<i.length;t++)i[t].handler._disconnectOutlet(n,r)},_disconnectOutlet:function(e,t){var r,i,o=f(this)
for(o&&t===o.routeName&&(t=void 0),r=0;r<this.connections.length;r++)(i=this.connections[r]).outlet===e&&i.into===t&&(this.connections[r]={owner:i.owner,into:i.into,outlet:i.outlet,name:i.name,controller:void 0,template:void 0},n.run.once(this.router,"_setOutlets"))},willDestroy:function(){this.teardownViews()},teardownViews:function(){this.connections&&this.connections.length>0&&(this.connections=[],n.run.once(this.router,"_setOutlets"))}})
function f(e){var t=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(!t)return
for(n=0;n<t.length;n++)if(t[n].handler===e)return t[n+r]}(e,e.router._routerMicrolib.state.handlerInfos,-1)
return t&&t.handler}function p(e,r){r.queryParamsFor=r.queryParamsFor||{}
var i,o,a,s=e.fullRouteName
if(r.queryParamsFor[s])return r.queryParamsFor[s]
var l=function(e,n){return n.fullQueryParams?n.fullQueryParams:(n.fullQueryParams={},(0,t.assign)(n.fullQueryParams,n.queryParams),e._deserializeQueryParams(n.handlerInfos,n.fullQueryParams),n.fullQueryParams)}(e.router,r),u=r.queryParamsFor[s]={},c=(0,n.get)(e,"_qp").qps
for(i=0;i<c.length;++i)a=(o=c[i]).prop in l,u[o.prop]=a?l[o.prop]:d(o.defaultValue)
return u}function d(e){return Array.isArray(e)?(0,i.A)(e.slice()):e}function h(e,t){var n
return e.routable?(n=e.mountPoint,"application"===t?n:n+"."+t):t}c.reopenClass({isRouteFactory:!0}),e.default=c}),e("ember-routing/system/router",["exports","ember-utils","ember-console","ember-metal","ember-debug","ember-runtime","ember-routing/system/route","ember-routing/system/dsl","ember-routing/location/api","ember-routing/utils","ember-routing/system/router_state","router"],function(e,t,n,r,i,o,a,s,l,u,c,f){"use strict"
function p(){return this}e.triggerEvent=E
var d=Array.prototype.slice,h=o.Object.extend(o.Evented,{location:"hash",rootURL:"/",_initRouterJs:function(){var e=this._routerMicrolib=new f.default
e.triggerEvent=E.bind(this),e._triggerWillChangeContext=p,e._triggerWillLeave=p
var t=this.constructor.dslCallbacks||[p],n=this._buildDSL()
n.route("application",{path:"/",resetNamespace:!0,overrideNameAssertion:!0},function(){var e
for(e=0;e<t.length;e++)t[e].call(this)}),e.map(n.generate())},_buildDSL:function(){var e={enableLoadingSubstates:this._hasModuleBasedResolver()},n=(0,t.getOwner)(this),r=this
return e.resolveRouteMap=function(e){return n.factoryFor("route-map:"+e)},e.addRouteForEngine=function(e,t){r._engineInfoByRoute[e]||(r._engineInfoByRoute[e]=t)},new s.default(null,e)},init:function(){this._super.apply(this,arguments),this.currentURL=null,this.currentRouteName=null,this.currentPath=null,this._qpCache=Object.create(null),this._resetQueuedQueryParameterChanges(),this._handledErrors=new Set,this._engineInstances=Object.create(null),this._engineInfoByRoute=Object.create(null)},_resetQueuedQueryParameterChanges:function(){this._queuedQPChanges={}},url:(0,r.computed)(function(){return(0,r.get)(this,"location").getURL()}),_hasModuleBasedResolver:function(){var e=(0,t.getOwner)(this)
return!!e&&!!(0,r.get)(e,"application.__registry__.resolver.moduleBasedResolver")},startRouting:function(){var e,t=(0,r.get)(this,"initialURL")
if(this.setupRouter()&&(void 0===t&&(t=(0,r.get)(this,"location").getURL()),(e=this.handleURL(t))&&e.error))throw e.error},setupRouter:function(){var e=this
this._initRouterJs(),this._setupLocation()
var t=(0,r.get)(this,"location")
return!(0,r.get)(t,"cancelRouterSetup")&&(this._setupRouter(t),t.onUpdateURL(function(t){e.handleURL(t)}),!0)},didTransition:function(){_(this),this._cancelSlowTransitionTimer(),this.notifyPropertyChange("url"),this.set("currentState",this.targetState),r.run.once(this,this.trigger,"didTransition")},_setOutlets:function(){if(!this.isDestroying&&!this.isDestroyed){var e,n,r,i,o,a,s,l=this._routerMicrolib.currentHandlerInfos,u=void 0,c=void 0,f=null
if(l){for(e=0;e<l.length;e++){for(n=(u=l[e].handler).connections,r=void 0,i=0;i<n.length;i++)f=(o=S(f,c,n[i])).liveRoutes,o.ownState.render.name!==u.routeName&&"main"!==o.ownState.render.outlet||(r=o.ownState)
0===n.length&&(r=O(f,c,u)),c=r}f&&(this._toplevelView?this._toplevelView.setOutletState(f):(s=(a=(0,t.getOwner)(this)).factoryFor("view:-outlet"),this._toplevelView=s.create(),this._toplevelView.setOutletState(f),a.lookup("-application-instance:main").didCreateRootView(this._toplevelView)))}}},willTransition:function(e,t,n){r.run.once(this,this.trigger,"willTransition",n)},handleURL:function(e){var t=e.split(/#(.+)?/)[0]
return this._doURLTransition("handleURL",t)},_doURLTransition:function(e,t){var n=this._routerMicrolib[e](t||"/")
return A(n,this),n},transitionTo:function(){for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
if((0,u.resemblesURL)(t[0]))return this._doURLTransition("transitionTo",t[0])
var e,t,n,r=(0,u.extractRouteArgs)(t),i=r.routeName,o=r.models,a=r.queryParams
return this._doTransition(i,o,a)},intermediateTransitionTo:function(){var e;(e=this._routerMicrolib).intermediateTransitionTo.apply(e,arguments),_(this)},replaceWith:function(){return this.transitionTo.apply(this,arguments).method("replace")},generate:function(){var e,t=(e=this._routerMicrolib).generate.apply(e,arguments)
return this.location.formatURL(t)},isActive:function(){var e
return(e=this._routerMicrolib).isActive.apply(e,arguments)},isActiveIntent:function(e,t,n){return this.currentState.isActiveIntent(e,t,n)},send:function(){var e;(e=this._routerMicrolib).trigger.apply(e,arguments)},hasRoute:function(e){return this._routerMicrolib.hasRoute(e)},reset:function(){this._routerMicrolib&&this._routerMicrolib.reset()},willDestroy:function(){this._toplevelView&&(this._toplevelView.destroy(),this._toplevelView=null),this._super.apply(this,arguments),this.reset()
var e=this._engineInstances
for(var t in e)for(var n in e[t])(0,r.run)(e[t][n],"destroy")},_activeQPChanged:function(e,t){this._queuedQPChanges[e]=t,r.run.once(this,this._fireQueryParamTransition)},_updatingQPChanged:function(e){this._qpUpdates||(this._qpUpdates={}),this._qpUpdates[e]=!0},_fireQueryParamTransition:function(){this.transitionTo({queryParams:this._queuedQPChanges}),this._resetQueuedQueryParameterChanges()},_setupLocation:function(){var e,n,i=(0,r.get)(this,"location"),o=(0,r.get)(this,"rootURL"),a=(0,t.getOwner)(this)
"string"==typeof i&&a&&(void 0!==(e=a.lookup("location:"+i))?i=(0,r.set)(this,"location",e):(n={implementation:i},i=(0,r.set)(this,"location",l.default.create(n)))),null!==i&&"object"==typeof i&&(o&&(0,r.set)(i,"rootURL",o),"function"==typeof i.detect&&i.detect(),"function"==typeof i.initState&&i.initState())},_getHandlerFunction:function(){var e=this,n=Object.create(null),r=(0,t.getOwner)(this)
return function(t){var i,o=t,s=r,l=e._engineInfoByRoute[o]
l&&(s=e._getEngineInstance(l),o=l.localFullName)
var u="route:"+o,c=s.lookup(u)
if(n[t])return c
if(n[t]=!0,c||(i=s.factoryFor("route:basic").class,s.register(u,i.extend()),c=s.lookup(u)),c._setRouteName(o),l&&!(0,a.hasDefaultSerialize)(c))throw new Error("Defining a custom serialize method on an Engine route is not supported.")
return c}},_getSerializerFunction:function(){var e=this
return function(t){var n=e._engineInfoByRoute[t]
if(n)return n.serializeMethod||a.defaultSerialize}},_setupRouter:function(e){var t,n=this,i=void 0,o=this._routerMicrolib
o.getHandler=this._getHandlerFunction(),o.getSerializer=this._getSerializerFunction()
var a=function(){e.setURL(i),(0,r.set)(n,"currentURL",i)}
o.updateURL=function(e){i=e,r.run.once(a)},e.replaceURL&&(t=function(){e.replaceURL(i),(0,r.set)(n,"currentURL",i)},o.replaceURL=function(e){i=e,r.run.once(t)}),o.didTransition=function(e){n.didTransition(e)},o.willTransition=function(e,t,r){n.willTransition(e,t,r)}},_serializeQueryParams:function(e,t){var n=this
w(this,e,t,function(e,r,i){i?(delete t[e],t[i.urlKey]=i.route.serializeQueryParam(r,i.urlKey,i.type)):void 0===r||(t[e]=n._serializeQueryParam(r,(0,o.typeOf)(r)))})},_serializeQueryParam:function(e,t){return null===e||void 0===e?e:"array"===t?JSON.stringify(e):""+e},_deserializeQueryParams:function(e,t){w(this,e,t,function(e,n,r){r&&(delete t[e],t[r.prop]=r.route.deserializeQueryParam(n,r.urlKey,r.type))})},_deserializeQueryParam:function(e,t){return null===e||void 0===e?e:"boolean"===t?"true"===e:"number"===t?Number(e).valueOf():"array"===t?(0,o.A)(JSON.parse(e)):e},_pruneDefaultQueryParamValues:function(e,t){var n,r=this._queryParamsFor(e)
for(var i in t)(n=r.map[i])&&n.serializedDefaultValue===t[i]&&delete t[i]},_doTransition:function(e,n,r,i){var o,a=e||(0,u.getActiveTargetName)(this._routerMicrolib),s={}
this._processActiveTransitionQueryParams(a,n,s,r),(0,t.assign)(s,r),this._prepareQueryParams(a,n,s,i)
var l=(o=this._routerMicrolib).transitionTo.apply(o,[a].concat(n,[{queryParams:s}]))
return A(l,this),l},_processActiveTransitionQueryParams:function(e,n,r,i){if(this._routerMicrolib.activeTransition){var o={},a=this._qpUpdates||{},s=this._routerMicrolib.activeTransition.queryParams
for(var l in s)a[l]||(o[l]=s[l])
this._fullyScopeQueryParams(e,n,i),this._fullyScopeQueryParams(e,n,o),(0,t.assign)(r,o)}},_prepareQueryParams:function(e,t,n,r){var i=T(this,e,t)
this._hydrateUnsuppliedQueryParams(i,n,r),this._serializeQueryParams(i.handlerInfos,n),r||this._pruneDefaultQueryParamValues(i.handlerInfos,n)},_getQPMeta:function(e){var t=e.handler
return t&&(0,r.get)(t,"_qp")},_queryParamsFor:function(e){var n,r,i,o,a,s,l=e.length,u=e[l-1].name,c=this._qpCache[u]
if(c)return c
var f=!0,p={},d={},h=[]
for(n=0;n<l;++n)if(r=this._getQPMeta(e[n])){for(i=0;i<r.qps.length;i++)(s=p[a=(o=r.qps[i]).urlKey])&&s.controllerName!==o.controllerName&&p[a],p[a]=o,h.push(o);(0,t.assign)(d,r.map)}else f=!1
var m={qps:h,map:d}
return f&&(this._qpCache[u]=m),m},_fullyScopeQueryParams:function(e,t,n){var r,i,o,a,s,l,u,c=T(this,e,t).handlerInfos
for(r=0,i=c.length;r<i;++r)if(o=this._getQPMeta(c[r]))for(a=0,s=o.qps.length;a<s;++a)(u=(l=o.qps[a]).prop in n&&l.prop||l.scopedPropertyName in n&&l.scopedPropertyName||l.urlKey in n&&l.urlKey)&&u!==l.scopedPropertyName&&(n[l.scopedPropertyName]=n[u],delete n[u])},_hydrateUnsuppliedQueryParams:function(e,t,n){var r,i,o,a,s,l,c,f=e.handlerInfos,p=this._bucketCache
for(r=0;r<f.length;++r)if(i=this._getQPMeta(f[r]))for(o=0,a=i.qps.length;o<a;++o)s=i.qps[o],(l=s.prop in t&&s.prop||s.scopedPropertyName in t&&s.scopedPropertyName||s.urlKey in t&&s.urlKey)?l!==s.scopedPropertyName&&(t[s.scopedPropertyName]=t[l],delete t[l]):(c=(0,u.calculateCacheKey)(s.route.fullRouteName,s.parts,e.params),t[s.scopedPropertyName]=p.lookup(c,s.prop,s.defaultValue))},_scheduleLoadingEvent:function(e,t){this._cancelSlowTransitionTimer(),this._slowTransitionTimer=r.run.scheduleOnce("routerTransitions",this,"_handleSlowTransition",e,t)},currentState:null,targetState:null,_handleSlowTransition:function(e,t){this._routerMicrolib.activeTransition&&(this.set("targetState",c.default.create({emberRouter:this,routerJs:this._routerMicrolib,routerJsState:this._routerMicrolib.activeTransition.state})),e.trigger(!0,"loading",e,t))},_cancelSlowTransitionTimer:function(){this._slowTransitionTimer&&r.run.cancel(this._slowTransitionTimer),this._slowTransitionTimer=null},_markErrorAsHandled:function(e){this._handledErrors.add(e)},_isErrorHandled:function(e){return this._handledErrors.has(e)},_clearHandledError:function(e){this._handledErrors.delete(e)},_getEngineInstance:function(e){var n=e.name,r=e.instanceId,i=e.mountPoint,o=this._engineInstances
o[n]||(o[n]=Object.create(null))
var a=o[n][r]
return a||((a=(0,t.getOwner)(this).buildChildEngineInstance(n,{routable:!0,mountPoint:i})).boot(),o[n][r]=a),a}})
function m(e,t){var n,r,i
for(n=e.length-1;n>=0;--n)if(void 0!==(i=(r=e[n]).handler)&&!0!==t(i,r))return}var g={willResolveModel:function(e,t,n){this._scheduleLoadingEvent(t,n)},error:function(e,t,r){var i=this,o=e[e.length-1]
m(e,function(e,n){if(n!==o&&(r=b(e,"error")))return i._markErrorAsHandled(t),i.intermediateTransitionTo(r,t),!1
var r,a=v(e,"error")
return!a||(i._markErrorAsHandled(t),i.intermediateTransitionTo(a,t),!1)}),function(e,t){var r=[],i=void 0
i=e&&"object"==typeof e&&"object"==typeof e.errorThrown?e.errorThrown:e
t&&r.push(t)
i&&(i.message&&r.push(i.message),i.stack&&r.push(i.stack),"string"==typeof i&&r.push(i))
n.default.error.apply(this,r)}(t,"Error while processing route: "+r.targetName)},loading:function(e,t){var n=this,r=e[e.length-1]
m(e,function(e,i){if(i!==r&&(o=b(e,"loading")))return n.intermediateTransitionTo(o),!1
var o,a=v(e,"loading")
return a?(n.intermediateTransitionTo(a),!1):t.pivotHandler!==e})}}
function v(e,n){var r=(0,t.getOwner)(e),i=e.routeName,o=e.fullRouteName+"_"+n
return y(r,e.router,i+"_"+n,o)?o:""}function b(e,n){var r=(0,t.getOwner)(e),i=e.routeName,o=e.fullRouteName,a=e.router,s="application"===o?n:o+"."+n
return y(r,a,"application"===i?n:i+"."+n,s)?s:""}function y(e,t,n,r){var i=t.hasRoute(r),o=e.hasRegistration("template:"+n)||e.hasRegistration("route:"+n)
return i&&o}function E(e,t,n){var r,o=n.shift()
if(!e){if(t)return
throw new i.Error("Can't trigger action '"+o+"' because your app hasn't finished transitioning into its first route. To trigger an action on destination routes during a transition, you can call `.send()` on the `Transition` object passed to the `model/beforeModel/afterModel` hooks.")}var a=!1,s=void 0,l=void 0
for(r=e.length-1;r>=0;r--)if(l=(s=e[r].handler)&&s.actions&&s.actions[o]){if(!0!==l.apply(s,n))return void("error"===o&&s.router._markErrorAsHandled(n[0]))
a=!0}var u=g[o]
if(u)u.apply(this,[e].concat(n))
else if(!a&&!t)throw new i.Error("Nothing handled the action '"+o+"'. If you did handle the action, this error can be caused by returning true from an action handler in a controller, causing the action to bubble.")}function T(e,t,n){var r,i,o=e._routerMicrolib.applyIntent(t,n),a=o.handlerInfos,s=o.params
for(r=0;r<a.length;++r)(i=a[r]).isResolved?s[i.name]=i.params:s[i.name]=i.serialize(i.context)
return o}function _(e){var n=e._routerMicrolib.currentHandlerInfos
if(0!==n.length){var i=h._routePath(n),o=n[n.length-1].name,a=e.get("location").getURL();(0,r.set)(e,"currentPath",i),(0,r.set)(e,"currentRouteName",o),(0,r.set)(e,"currentURL",a)
var s=(0,t.getOwner)(e).lookup("controller:application")
s&&("currentPath"in s||(0,r.defineProperty)(s,"currentPath"),(0,r.set)(s,"currentPath",i),"currentRouteName"in s||(0,r.defineProperty)(s,"currentRouteName"),(0,r.set)(s,"currentRouteName",o))}}function A(e,t){var n=c.default.create({emberRouter:t,routerJs:t._routerMicrolib,routerJsState:e.state})
t.currentState||t.set("currentState",n),t.set("targetState",n),e.promise=e.catch(function(e){if(!t._isErrorHandled(e))throw e
t._clearHandledError(e)})}function w(e,t,n,r){var i=e._queryParamsFor(t)
for(var o in n)n.hasOwnProperty(o)&&r(o,n[o],i.map[o])}function C(e,t){if(e)for(var n,r,i=[e];i.length>0;){if((n=i.shift()).render.name===t)return n
for(var o in r=n.outlets)i.push(r[o])}}function S(e,t,n){var i=void 0,o={render:n,outlets:Object.create(null),wasUsed:!1}
return(i=n.into?C(e,n.into):t)?(0,r.set)(i.outlets,n.outlet,o):n.into?function(e,t,n){e.outlets.__ember_orphans__||(e.outlets.__ember_orphans__={render:{name:"__ember_orphans__"},outlets:Object.create(null)})
e.outlets.__ember_orphans__.outlets[t]=n,r.run.schedule("afterRender",function(){})}(e,n.into,o):e=o,{liveRoutes:e,ownState:o}}function O(e,t,n){var r=C(e,n.routeName)
return r||(t.outlets.main={render:{name:n.routeName,outlet:"main"},outlets:{}},t)}h.reopenClass({map:function(e){return this.dslCallbacks||(this.dslCallbacks=[],this.reopenClass({dslCallbacks:this.dslCallbacks})),this.dslCallbacks.push(e),this},_routePath:function(e){var t,n=[]
function r(e,t){var n
for(n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}var i=void 0,o=void 0
for(t=1;t<e.length;t++){for(i=e[t].name.split("."),o=d.call(n);o.length&&!r(o,i);)o.shift()
n.push.apply(n,i.slice(o.length))}return n.join(".")}}),e.default=h}),e("ember-routing/system/router_state",["exports","ember-utils","ember-routing/utils","ember-runtime"],function(e,t,n,r){"use strict"
e.default=r.Object.extend({emberRouter:null,routerJs:null,routerJsState:null,isActiveIntent:function(e,r,i,o){var a,s=this.routerJsState
return!!this.routerJs.isActiveIntent(e,r,null,s)&&(!(o&&Object.keys(i).length>0)||(a=(0,t.assign)({},i),this.emberRouter._prepareQueryParams(e,r,a),(0,n.shallowEqual)(a,s.queryParams)))}})}),e("ember-routing/utils",["exports","ember-utils","ember-metal","ember-debug"],function(e,t,n,r){"use strict"
e.extractRouteArgs=function(e){var t=(e=e.slice())[e.length-1],n=void 0
return n=t&&t.hasOwnProperty("queryParams")?e.pop().queryParams:{},{routeName:e.shift(),models:e,queryParams:n}},e.getActiveTargetName=function(e){var t=e.activeTransition?e.activeTransition.state.handlerInfos:e.state.handlerInfos
return t[t.length-1].name},e.stashParamNames=function(e,t){if(!t._namesStashed){var n,r,i,o=t[t.length-1].name,a=e._routerMicrolib.recognizer.handlersFor(o),s=null
for(n=0;n<t.length;++n)r=t[n],(i=a[n].names).length&&(s=r),r._names=i,r.handler._stashNames(r,s)
t._namesStashed=!0}},e.calculateCacheKey=function(e){var t,r,a,s,l,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments[2],f=""
for(t=0;t<u.length;++t)a=o(e,r=u[t]),s=void 0,c&&(a&&a in c?(l=0===r.indexOf(a)?r.substr(a.length+1):r,s=(0,n.get)(c[a],l)):s=(0,n.get)(c,r)),f+="::"+r+":"+s
return e+f.replace(i,"-")},e.normalizeControllerQueryParams=function(e){var t,n={}
for(t=0;t<e.length;++t)a(e[t],n)
return n},e.resemblesURL=s,e.prefixRouteNameArg=function(e,n){var i=n[0],o=(0,t.getOwner)(e),a=o.mountPoint
if(o.routable&&"string"==typeof i){if(s(i))throw new r.Error("Programmatic transitions by URL cannot be used within an Engine. Please use the route name instead.")
i=a+"."+i,n[0]=i}return n},e.shallowEqual=function(e,t){var n=void 0,r=0,i=0
for(n in e)if(e.hasOwnProperty(n)){if(e[n]!==t[n])return!1
r++}for(n in t)t.hasOwnProperty(n)&&i++
return r===i}
var i=/\./g
function o(e,t){var n,r,i=e.split("."),o=""
for(n=0;n<i.length&&(r=i.slice(0,n+1).join("."),0===t.indexOf(r));n++)o=r
return o}function a(e,n){var r,i=e,o=void 0
for(var a in"string"==typeof i&&((o={})[i]={as:null},i=o),i){if(!i.hasOwnProperty(a))return
"string"==typeof(r=i[a])&&(r={as:r}),o=n[a]||{as:null,scope:"model"},(0,t.assign)(o,r),n[a]=o}}function s(e){return"string"==typeof e&&(""===e||"/"===e[0])}}),e("ember-runtime/compare",["exports","ember-runtime/utils","ember-runtime/mixins/comparable"],function(e,t,n){"use strict"
e.default=function e(o,a){if(o===a)return 0
var s,l,u,c,f,p=(0,t.typeOf)(o)
var d=(0,t.typeOf)(a)
if(n.default){if("instance"===p&&n.default.detect(o)&&o.constructor.compare)return o.constructor.compare(o,a)
if("instance"===d&&n.default.detect(a)&&a.constructor.compare)return-1*a.constructor.compare(a,o)}var h=i(r[p],r[d])
if(0!==h)return h
switch(p){case"boolean":case"number":return i(o,a)
case"string":return i(o.localeCompare(a),0)
case"array":for(s=o.length,l=a.length,u=Math.min(s,l),c=0;c<u;c++)if(0!==(f=e(o[c],a[c])))return f
return i(s,l)
case"instance":return n.default&&n.default.detect(o)?o.compare(o,a):0
case"date":return i(o.getTime(),a.getTime())
default:return 0}}
var r={undefined:0,null:1,boolean:2,number:3,string:4,array:5,object:6,instance:7,function:8,class:9,date:10}
function i(e,t){var n=e-t
return(n>0)-(n<0)}}),e("ember-runtime/computed/computed_macros",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
function r(e,n){return function(){for(e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i]
var e,r,i,o=function(e,n){var r,i,o=[]
function a(e){o.push(e)}for(r=0;r<n.length;r++)i=n[r],(0,t.expandProperties)(i,a)
return o}(0,r)
return new t.ComputedProperty(function(){var e,r,i=o.length-1
for(e=0;e<i;e++)if(r=(0,t.get)(this,o[e]),!n(r))return r
return(0,t.get)(this,o[i])},{dependentKeys:o})}}e.or=e.and=void 0,e.empty=function(e){return(0,t.computed)(e+".length",function(){return(0,t.isEmpty)((0,t.get)(this,e))})},e.notEmpty=function(e){return(0,t.computed)(e+".length",function(){return!(0,t.isEmpty)((0,t.get)(this,e))})},e.none=function(e){return(0,t.computed)(e,function(){return(0,t.isNone)((0,t.get)(this,e))})},e.not=function(e){return(0,t.computed)(e,function(){return!(0,t.get)(this,e)})},e.bool=function(e){return(0,t.computed)(e,function(){return!!(0,t.get)(this,e)})},e.match=function(e,n){return(0,t.computed)(e,function(){var r=(0,t.get)(this,e)
return n.test(r)})},e.equal=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)===n})},e.gt=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)>n})},e.gte=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)>=n})},e.lt=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)<n})},e.lte=function(e,n){return(0,t.computed)(e,function(){return(0,t.get)(this,e)<=n})},e.oneWay=function(e){return(0,t.alias)(e).oneWay()},e.readOnly=function(e){return(0,t.alias)(e).readOnly()},e.deprecatingAlias=function(e,n){return(0,t.computed)(e,{get:function(n){return(0,t.get)(this,e)},set:function(n,r){return(0,t.set)(this,e,r),r}})},e.and=r(0,function(e){return e}),e.or=r(0,function(e){return!e})}),e("ember-runtime/computed/reduce_computed_macros",["exports","ember-debug","ember-metal","ember-runtime/compare","ember-runtime/utils","ember-runtime/system/native_array"],function(e,t,n,r,i,o){"use strict"
function a(e,t,r,i){return new n.ComputedProperty(function(){var i=(0,n.get)(this,e)
return null===i||"object"!=typeof i?r:i.reduce(t,r,this)},{dependentKeys:[e+".[]"],readOnly:!0})}function s(e,t){var r=void 0;/@each/.test(e)?r=e.replace(/\.@each.*$/,""):(r=e,e+=".[]")
var a=new n.ComputedProperty(function(){var e=(0,n.get)(this,r)
return(0,i.isArray)(e)?(0,o.A)(t.call(this,e)):(0,o.A)()},{readOnly:!0})
return a.property(e),a}function l(e,t,r){var i=e.map(function(e){return e+".[]"})
return new n.ComputedProperty(function(){return(0,o.A)(t.call(this,e))},{dependentKeys:i,readOnly:!0})}function u(e,t){return s(e,function(e){return e.map(t,this)})}function c(e,t){return s(e,function(e){return e.filter(t,this)})}function f(){var e,t,r
for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return l(t,function(e){var t=this,r=(0,o.A)(),a=new Set
return e.forEach(function(e){var o=(0,n.get)(t,e);(0,i.isArray)(o)&&o.forEach(function(e){a.has(e)||(a.add(e),r.push(e))})}),r})}e.union=void 0,e.sum=function(e){return a(e,function(e,t){return e+t},0,"sum")},e.max=function(e){return a(e,function(e,t){return Math.max(e,t)},-1/0,"max")},e.min=function(e){return a(e,function(e,t){return Math.min(e,t)},1/0,"min")},e.map=u,e.mapBy=function(e,t){return u(e+".@each."+t,function(e){return(0,n.get)(e,t)})},e.filter=c,e.filterBy=function(e,t,r){var i=void 0
return i=2===arguments.length?function(e){return(0,n.get)(e,t)}:function(e){return(0,n.get)(e,t)===r},c(e+".@each."+t,i)},e.uniq=f,e.uniqBy=function(e,t){return new n.ComputedProperty(function(){var r,a=(0,o.A)(),s=(0,n.get)(this,e)
return(0,i.isArray)(s)&&(r=new Set,s.forEach(function(e){var i=(0,n.get)(e,t)
r.has(i)||(r.add(i),a.push(e))})),a},{dependentKeys:[e+".[]"],readOnly:!0})},e.intersect=function(){var e,t,r
for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return l(t,function(e){var t=this,r=e.map(function(e){var r=(0,n.get)(t,e)
return(0,i.isArray)(r)?r:[]}),a=r.pop().filter(function(e){var t,n,i,o
for(t=0;t<r.length;t++){for(n=!1,i=r[t],o=0;o<i.length;o++)if(i[o]===e){n=!0
break}if(!1===n)return!1}return!0},"intersect")
return(0,o.A)(a)})},e.setDiff=function(e,t){return new n.ComputedProperty(function(){var n=this.get(e),r=this.get(t)
return(0,i.isArray)(n)?(0,i.isArray)(r)?n.filter(function(e){return-1===r.indexOf(e)}):(0,o.A)(n):(0,o.A)()},{dependentKeys:[e+".[]",t+".[]"],readOnly:!0})},e.collect=function(){var e,t,r
for(e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return l(t,function(){var e=(0,n.getProperties)(this,t),r=(0,o.A)()
for(var i in e)e.hasOwnProperty(i)&&(void 0===e[i]?r.push(null):r.push(e[i]))
return r},"collect")},e.sort=function(e,t){return"function"==typeof t?function(e,t){return s(e,function(e){var n=this
return e.slice().sort(function(e,r){return t.call(n,e,r)})})}(e,t):function(e,t){var a=new n.ComputedProperty(function(s){var l=this,u=(0,n.get)(this,t),c=a._activeObserverMap||(a._activeObserverMap=new WeakMap),f=c.get(this)
function p(){this.notifyPropertyChange(s)}void 0!==f&&f.forEach(function(e){return n.removeObserver.apply(void 0,e)})
var d="@this"===e,h=function(e){return e.map(function(e){var t=e.split(":"),n=t[0],r=t[1]
return[n,r=r||"asc"]})}(u)
f=h.map(function(t){var r=t[0],i=d?"@each."+r:e+".@each."+r
return(0,n.addObserver)(l,i,p),[l,i,p]}),c.set(this,f)
var m=d?this:(0,n.get)(this,e)
return(0,i.isArray)(m)?function(e,t){return(0,o.A)(e.slice().sort(function(e,i){var o,a,s,l,u
for(o=0;o<t.length;o++)if(a=t[o],s=a[0],l=a[1],0!==(u=(0,r.default)((0,n.get)(e,s),(0,n.get)(i,s))))return"desc"===l?-1*u:u
return 0}))}(m,h):(0,o.A)()},{dependentKeys:[t+".[]"],readOnly:!0})
return a._activeObserverMap=void 0,a}(e,t)},e.union=f}),e("ember-runtime/controllers/controller",["exports","ember-debug","ember-runtime/system/object","ember-runtime/mixins/controller","ember-runtime/inject"],function(e,t,n,r,i){"use strict"
var o=n.default.extend(r.default);(0,i.createInjectionHelper)("controller",function(e){}),e.default=o}),e("ember-runtime/copy",["exports","ember-debug","ember-runtime/system/object","ember-runtime/mixins/copyable"],function(e,t,n,r){"use strict"
e.default=function(e,t){return"object"!=typeof e||null===e?e:r.default&&r.default.detect(e)?e.copy(t):function e(t,n,i,o){var a=void 0,s=void 0,l=void 0
if("object"!=typeof t||null===t)return t
if(n&&(s=i.indexOf(t))>=0)return o[s]
if(Array.isArray(t)){if(a=t.slice(),n)for(s=a.length;--s>=0;)a[s]=e(a[s],n,i,o)}else if(r.default&&r.default.detect(t))a=t.copy(n,i,o)
else if(t instanceof Date)a=new Date(t.getTime())
else for(l in a={},t)Object.prototype.hasOwnProperty.call(t,l)&&"__"!==l.substring(0,2)&&(a[l]=n?e(t[l],n,i,o):t[l])
n&&(i.push(t),o.push(a))
return a}(e,t,t?[]:null,t?[]:null)}}),e("ember-runtime/ext/function",["ember-environment","ember-metal","ember-debug"],function(e,t,n){"use strict"
var r=Function.prototype
e.ENV.EXTEND_PROTOTYPES.Function&&(Object.defineProperty(r,"property",{configurable:!0,enumerable:!1,writable:!0,value:function(){return t.computed.apply(void 0,Array.prototype.slice.call(arguments).concat([this]))}}),Object.defineProperty(r,"observes",{configurable:!0,enumerable:!1,writable:!0,value:function(){return t.observer.apply(void 0,Array.prototype.slice.call(arguments).concat([this]))}}),Object.defineProperty(r,"_observesImmediately",{configurable:!0,enumerable:!1,writable:!0,value:function(){return this.observes.apply(this,arguments)}}),Object.defineProperty(r,"on",{configurable:!0,enumerable:!1,writable:!0,value:function(){return t.on.apply(void 0,Array.prototype.slice.call(arguments).concat([this]))}}))})
e("ember-runtime/ext/rsvp",["exports","rsvp","ember-metal","ember-debug"],function(e,t,n,r){"use strict"
e.onerrorDefault=o
var i=n.run.backburner
function o(e){var t,r=function(e){if(!e)return
if(e.errorThrown)return function(e){var t=e.errorThrown
"string"==typeof t&&(t=new Error(t))
return Object.defineProperty(t,"__reason_with_error_thrown__",{value:e,enumerable:!1}),t}(e)
if("UnrecognizedURLError"===e.name)return
if("TransitionAborted"===e.name)return
return e}(e)
if(r){if(!(t=(0,n.getDispatchOverride)()))throw r
t(r)}}n.run._addQueue("rsvpAfter","destroy"),t.configure("async",function(e,t){i.schedule("actions",null,e,t)}),t.configure("after",function(e){i.schedule("rsvpAfter",null,e)}),t.on("error",o),e.default=t}),e("ember-runtime/ext/string",["ember-environment","ember-runtime/system/string"],function(e,t){"use strict"
var n=String.prototype
e.ENV.EXTEND_PROTOTYPES.String&&(Object.defineProperty(n,"w",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.w)(this)}}),Object.defineProperty(n,"loc",{configurable:!0,enumerable:!1,writeable:!0,value:function(){var e,n,r
for(e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r]
return(0,t.loc)(this,n)}}),Object.defineProperty(n,"camelize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.camelize)(this)}}),Object.defineProperty(n,"decamelize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.decamelize)(this)}}),Object.defineProperty(n,"dasherize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.dasherize)(this)}}),Object.defineProperty(n,"underscore",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.underscore)(this)}}),Object.defineProperty(n,"classify",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.classify)(this)}}),Object.defineProperty(n,"capitalize",{configurable:!0,enumerable:!1,writeable:!0,value:function(){return(0,t.capitalize)(this)}}))}),e("ember-runtime/index",["exports","ember-runtime/system/object","ember-runtime/system/string","ember-runtime/mixins/registry_proxy","ember-runtime/mixins/container_proxy","ember-runtime/copy","ember-runtime/inject","ember-runtime/compare","ember-runtime/is-equal","ember-runtime/mixins/array","ember-runtime/mixins/comparable","ember-runtime/system/namespace","ember-runtime/system/array_proxy","ember-runtime/system/object_proxy","ember-runtime/system/core_object","ember-runtime/system/native_array","ember-runtime/mixins/action_handler","ember-runtime/mixins/copyable","ember-runtime/mixins/enumerable","ember-runtime/mixins/-proxy","ember-runtime/system/lazy_load","ember-runtime/mixins/observable","ember-runtime/mixins/mutable_enumerable","ember-runtime/mixins/mutable_array","ember-runtime/mixins/target_action_support","ember-runtime/mixins/evented","ember-runtime/mixins/promise_proxy","ember-runtime/computed/computed_macros","ember-runtime/computed/reduce_computed_macros","ember-runtime/controllers/controller","ember-runtime/mixins/controller","ember-runtime/system/service","ember-runtime/ext/rsvp","ember-runtime/utils","ember-runtime/string_registry","ember-runtime/ext/string","ember-runtime/ext/function"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h,m,g,v,b,y,E,T,_,A,w,C,S,O,x,R,N,L,I,k,D){"use strict"
e.setStrings=e.getStrings=e.typeOf=e.isArray=e.onerrorDefault=e.RSVP=e.Service=e.ControllerMixin=e.Controller=e.collect=e.intersect=e.union=e.uniqBy=e.uniq=e.filterBy=e.filter=e.mapBy=e.setDiff=e.sort=e.map=e.max=e.min=e.sum=e.or=e.and=e.deprecatingAlias=e.readOnly=e.oneWay=e.lte=e.lt=e.gte=e.gt=e.equal=e.match=e.bool=e.not=e.none=e.notEmpty=e.empty=e.PromiseProxyMixin=e.Evented=e.TargetActionSupport=e.removeAt=e.MutableArray=e.MutableEnumerable=e.Observable=e._loaded=e.runLoadHooks=e.onLoad=e._ProxyMixin=e.Enumerable=e.Copyable=e.ActionHandler=e.A=e.NativeArray=e.CoreObject=e.ObjectProxy=e.ArrayProxy=e.setNamespaceSearchDisabled=e.isNamespaceSearchDisabled=e.Namespace=e.Comparable=e.removeArrayObserver=e.addArrayObserver=e.isEmberArray=e.objectAt=e.Array=e.isEqual=e.compare=e.inject=e.copy=e.ContainerProxyMixin=e.RegistryProxyMixin=e.String=e.FrameworkObject=e.Object=void 0,Object.defineProperty(e,"Object",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"FrameworkObject",{enumerable:!0,get:function(){return t.FrameworkObject}}),Object.defineProperty(e,"String",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"RegistryProxyMixin",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"ContainerProxyMixin",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"copy",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"inject",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"compare",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"Array",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"objectAt",{enumerable:!0,get:function(){return u.objectAt}}),Object.defineProperty(e,"isEmberArray",{enumerable:!0,get:function(){return u.isEmberArray}}),Object.defineProperty(e,"addArrayObserver",{enumerable:!0,get:function(){return u.addArrayObserver}}),Object.defineProperty(e,"removeArrayObserver",{enumerable:!0,get:function(){return u.removeArrayObserver}}),Object.defineProperty(e,"Comparable",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"Namespace",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"isNamespaceSearchDisabled",{enumerable:!0,get:function(){return f.isSearchDisabled}}),Object.defineProperty(e,"setNamespaceSearchDisabled",{enumerable:!0,get:function(){return f.setSearchDisabled}}),Object.defineProperty(e,"ArrayProxy",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"ObjectProxy",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"CoreObject",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"NativeArray",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"A",{enumerable:!0,get:function(){return m.A}}),Object.defineProperty(e,"ActionHandler",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e,"Copyable",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"Enumerable",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e,"_ProxyMixin",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"onLoad",{enumerable:!0,get:function(){return E.onLoad}}),Object.defineProperty(e,"runLoadHooks",{enumerable:!0,get:function(){return E.runLoadHooks}})
Object.defineProperty(e,"_loaded",{enumerable:!0,get:function(){return E._loaded}}),Object.defineProperty(e,"Observable",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(e,"MutableEnumerable",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"MutableArray",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e,"removeAt",{enumerable:!0,get:function(){return A.removeAt}}),Object.defineProperty(e,"TargetActionSupport",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"Evented",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"PromiseProxyMixin",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e,"empty",{enumerable:!0,get:function(){return O.empty}}),Object.defineProperty(e,"notEmpty",{enumerable:!0,get:function(){return O.notEmpty}}),Object.defineProperty(e,"none",{enumerable:!0,get:function(){return O.none}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return O.not}}),Object.defineProperty(e,"bool",{enumerable:!0,get:function(){return O.bool}}),Object.defineProperty(e,"match",{enumerable:!0,get:function(){return O.match}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return O.equal}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return O.gt}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return O.gte}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return O.lt}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return O.lte}}),Object.defineProperty(e,"oneWay",{enumerable:!0,get:function(){return O.oneWay}}),Object.defineProperty(e,"readOnly",{enumerable:!0,get:function(){return O.readOnly}}),Object.defineProperty(e,"deprecatingAlias",{enumerable:!0,get:function(){return O.deprecatingAlias}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return O.and}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return O.or}}),Object.defineProperty(e,"sum",{enumerable:!0,get:function(){return x.sum}}),Object.defineProperty(e,"min",{enumerable:!0,get:function(){return x.min}}),Object.defineProperty(e,"max",{enumerable:!0,get:function(){return x.max}}),Object.defineProperty(e,"map",{enumerable:!0,get:function(){return x.map}}),Object.defineProperty(e,"sort",{enumerable:!0,get:function(){return x.sort}}),Object.defineProperty(e,"setDiff",{enumerable:!0,get:function(){return x.setDiff}})
Object.defineProperty(e,"mapBy",{enumerable:!0,get:function(){return x.mapBy}}),Object.defineProperty(e,"filter",{enumerable:!0,get:function(){return x.filter}}),Object.defineProperty(e,"filterBy",{enumerable:!0,get:function(){return x.filterBy}}),Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return x.uniq}}),Object.defineProperty(e,"uniqBy",{enumerable:!0,get:function(){return x.uniqBy}}),Object.defineProperty(e,"union",{enumerable:!0,get:function(){return x.union}}),Object.defineProperty(e,"intersect",{enumerable:!0,get:function(){return x.intersect}}),Object.defineProperty(e,"collect",{enumerable:!0,get:function(){return x.collect}}),Object.defineProperty(e,"Controller",{enumerable:!0,get:function(){return R.default}}),Object.defineProperty(e,"ControllerMixin",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(e,"Service",{enumerable:!0,get:function(){return L.default}}),Object.defineProperty(e,"RSVP",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(e,"onerrorDefault",{enumerable:!0,get:function(){return I.onerrorDefault}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return k.isArray}}),Object.defineProperty(e,"typeOf",{enumerable:!0,get:function(){return k.typeOf}}),Object.defineProperty(e,"getStrings",{enumerable:!0,get:function(){return D.getStrings}}),Object.defineProperty(e,"setStrings",{enumerable:!0,get:function(){return D.setStrings}})}),e("ember-runtime/inject",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
function r(){}e.default=r,e.createInjectionHelper=function(e,n){i[e]=n,r[e]=function(n){return new t.InjectedProperty(e,n)}},e.validatePropertyInjections=function(e){var n,r,o,a=e.proto(),s=[]
for(var l in a)(n=(0,t.descriptorFor)(a,l))instanceof t.InjectedProperty&&-1===s.indexOf(n.type)&&s.push(n.type)
if(s.length)for(r=0;r<s.length;r++)"function"==typeof(o=i[s[r]])&&o(e)
return!0}
var i={}}),e("ember-runtime/is-equal",["exports"],function(e){"use strict"
e.default=function(e,t){return e&&"function"==typeof e.isEqual?e.isEqual(t):e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():e===t}}),e("ember-runtime/mixins/-proxy",["exports","ember-babel","@glimmer/reference","ember-metal","ember-debug","ember-runtime/computed/computed_macros"],function(e,t,n,r,i,o){"use strict"
function a(e,t){var n=t.slice(8)
n in this||(0,r.propertyWillChange)(this,n)}function s(e,t){var n=t.slice(8)
n in this||(0,r.propertyDidChange)(this,n)}var l=function(e){function i(i){var o=(0,t.possibleConstructorReturn)(this,e.call(this)),a=(0,r.get)(i,"content")
return o.proxy=i,o.proxyWrapperTag=new n.DirtyableTag,o.proxyContentTag=new n.UpdatableTag((0,r.tagFor)(a)),o}return(0,t.inherits)(i,e),i.prototype.compute=function(){return Math.max(this.proxyWrapperTag.value(),this.proxyContentTag.value())},i.prototype.dirty=function(){this.proxyWrapperTag.dirty()},i.prototype.contentDidChange=function(){var e=(0,r.get)(this.proxy,"content")
this.proxyContentTag.update((0,r.tagFor)(e))},i}(n.CachedTag)
e.default=r.Mixin.create({content:null,init:function(){this._super.apply(this,arguments)
var e=(0,r.meta)(this)
e.setProxy(),e.writableTag(function(e){return new l(e)})},isTruthy:(0,o.bool)("content"),willWatchProperty:function(e){var t="content."+e;(0,r._addBeforeObserver)(this,t,null,a),(0,r.addObserver)(this,t,null,s)},didUnwatchProperty:function(e){var t="content."+e;(0,r._removeBeforeObserver)(this,t,null,a),(0,r.removeObserver)(this,t,null,s)},unknownProperty:function(e){var t=(0,r.get)(this,"content")
if(t)return(0,r.get)(t,e)},setUnknownProperty:function(e,t){if((0,r.meta)(this).proto===this)return(0,r.defineProperty)(this,e,null,t),t
var n=(0,r.get)(this,"content")
return(0,r.set)(n,e,t)}})}),e("ember-runtime/mixins/action_handler",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
var r=t.Mixin.create({mergedProperties:["actions"],send:function(e){for(n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
if(!this.actions||!this.actions[e]||!0===this.actions[e].apply(this,r)){var n,r,i,o=(0,t.get)(this,"target")
o&&o.send.apply(o,arguments)}}})
e.default=r}),e("ember-runtime/mixins/array",["exports","ember-utils","ember-metal","ember-debug","ember-runtime/mixins/enumerable","ember-runtime/compare","require"],function(e,t,n,r,i,o,a){"use strict"
var s
e.addArrayObserver=f,e.removeArrayObserver=p,e.objectAt=d,e.arrayContentWillChange=h,e.arrayContentDidChange=m,e.isEmberArray=function(e){return e&&e[g]}
var l=void 0
function u(){return void 0===l&&(l=(0,a.default)("ember-runtime/system/native_array").A),l()}function c(e,t,r,i,o){var a=r&&r.willChange||"arrayWillChange",s=r&&r.didChange||"arrayDidChange",l=(0,n.get)(e,"hasArrayObservers")
return l===o&&(0,n.propertyWillChange)(e,"hasArrayObservers"),i(e,"@array:before",t,a),i(e,"@array:change",t,s),l===o&&(0,n.propertyDidChange)(e,"hasArrayObservers"),e}function f(e,t,r){return c(e,t,r,n.addListener,!1)}function p(e,t,r){return c(e,t,r,n.removeListener,!0)}function d(e,t){return"function"==typeof e.objectAt?e.objectAt(t):e[t]}function h(e,t,r,i){return void 0===t?(t=0,r=i=-1):(void 0===r&&(r=-1),void 0===i&&(i=-1)),e.__each&&e.__each.arrayWillChange(e,t,r,i),(0,n.sendEvent)(e,"@array:before",[e,t,r,i]),(0,n.propertyWillChange)(e,"[]"),(i<0||r<0||i-r!=0)&&(0,n.propertyWillChange)(e,"length"),e}function m(e,t,r,i){void 0===t?(t=0,r=i=-1):(void 0===r&&(r=-1),void 0===i&&(i=-1)),(i<0||r<0||i-r!=0)&&(0,n.propertyDidChange)(e,"length"),(0,n.propertyDidChange)(e,"[]"),e.__each&&e.__each.arrayDidChange(e,t,r,i),(0,n.sendEvent)(e,"@array:change",[e,t,r,i])
var o,a,s,l=(0,n.peekMeta)(e),u=void 0!==l?l.readableCache():void 0
return void 0!==u&&(a=(0,n.get)(e,"length")-((-1===i?0:i)-(o=-1===r?0:r)),s=t<0?a+t:t,void 0!==u.firstObject&&0===s&&((0,n.propertyWillChange)(e,"firstObject",l),(0,n.propertyDidChange)(e,"firstObject",l)),void 0!==u.lastObject&&a-1<s+o&&((0,n.propertyWillChange)(e,"lastObject",l),(0,n.propertyDidChange)(e,"lastObject",l))),e}var g=(0,t.symbol)("EMBER_ARRAY")
function v(e,t){return 2===arguments.length?function(r){return t===(0,n.get)(r,e)}:function(t){return!!(0,n.get)(t,e)}}var b=n.Mixin.create(i.default,((s={})[g]=!0,s.length=null,s.objectAt=function(e){if(!(e<0||e>=(0,n.get)(this,"length")))return(0,n.get)(this,e)},s.objectsAt=function(e){var t=this
return e.map(function(e){return d(t,e)})},s["[]"]=(0,n.computed)({get:function(){return this},set:function(e,t){return this.replace(0,(0,n.get)(this,"length"),t),this}}),s.firstObject=(0,n.computed)(function(){return d(this,0)}).readOnly(),s.lastObject=(0,n.computed)(function(){return d(this,(0,n.get)(this,"length")-1)}).readOnly(),s.slice=function(e,t){var r=u(),i=(0,n.get)(this,"length")
for((0,n.isNone)(e)?e=0:e<0&&(e=i+e),(0,n.isNone)(t)||t>i?t=i:t<0&&(t=i+t);e<t;)r[r.length]=d(this,e++)
return r},s.indexOf=function(e,t){var r,i=(0,n.get)(this,"length")
for(void 0===t&&(t=0),t<0&&(t+=i),r=t;r<i;r++)if(d(this,r)===e)return r
return-1},s.lastIndexOf=function(e,t){var r,i=(0,n.get)(this,"length")
for((void 0===t||t>=i)&&(t=i-1),t<0&&(t+=i),r=t;r>=0;r--)if(d(this,r)===e)return r
return-1},s.addArrayObserver=function(e,t){return f(this,e,t)},s.removeArrayObserver=function(e,t){return p(this,e,t)},s.hasArrayObservers=(0,n.computed)(function(){return(0,n.hasListeners)(this,"@array:change")||(0,n.hasListeners)(this,"@array:before")}),s.arrayContentWillChange=function(e,t,n){return h(this,e,t,n)},s.arrayContentDidChange=function(e,t,n){return m(this,e,t,n)},s.forEach=function(e){var t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=(0,n.get)(this,"length")
for(t=0;t<o;t++)r=this.objectAt(t),e.call(i,r,t,this)
return this},s.getEach=(0,n.aliasMethod)("mapBy"),s.setEach=function(e,t){return this.forEach(function(r){return(0,n.set)(r,e,t)})},s.map=function(e,t){var n=u()
return this.forEach(function(r,i,o){return n[i]=e.call(t,r,i,o)}),n},s.mapBy=function(e){return this.map(function(t){return(0,n.get)(t,e)})},s.filter=function(e,t){var n=u()
return this.forEach(function(r,i,o){e.call(t,r,i,o)&&n.push(r)}),n},s.reject=function(e,t){return this.filter(function(){return!e.apply(t,arguments)})},s.filterBy=function(){return this.filter(v.apply(this,arguments))},s.rejectBy=function(e,t){var r=2===arguments.length?function(r){return(0,n.get)(r,e)===t}:function(t){return!!(0,n.get)(t,e)}
return this.reject(r)},s.find=function(e){var t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=(0,n.get)(this,"length")
for(t=0;t<o;t++)if(r=this.objectAt(t),e.call(i,r,t,this))return r},s.findBy=function(){return this.find(v.apply(this,arguments))},s.every=function(e,t){return!this.find(function(n,r,i){return!e.call(t,n,r,i)})},s.isEvery=function(){return this.every(v.apply(this,arguments))},s.any=function(e){var t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=(0,n.get)(this,"length")
for(t=0;t<o;t++)if(r=this.objectAt(t),e.call(i,r,t,this))return!0
return!1},s.isAny=function(){return this.any(v.apply(this,arguments))},s.reduce=function(e,t,n){var r=t
return this.forEach(function(t,i){r=e(r,t,i,this,n)},this),r},s.invoke=function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
var t,n,r,i=u()
return this.forEach(function(t,r){var o=t&&t[e]
"function"==typeof o&&(i[r]=n.length?o.apply(t,n):t[e]())},this),i},s.toArray=function(){var e=u()
return this.forEach(function(t,n){return e[n]=t}),e},s.compact=function(){return this.filter(function(e){return null!=e})},s.includes=function(e,t){var r,i,o=(0,n.get)(this,"length")
for(void 0===t&&(t=0),t<0&&(t+=o),r=t;r<o;r++)if(e===(i=d(this,r))||e!=e&&i!=i)return!0
return!1},s.sortBy=function(){var e=arguments
return this.toArray().sort(function(t,r){var i,a,s,l,u
for(i=0;i<e.length;i++)if(a=e[i],s=(0,n.get)(t,a),l=(0,n.get)(r,a),u=(0,o.default)(s,l))return u
return 0})},s.uniq=function(){var e=u(),t=new Set
return this.forEach(function(n){t.has(n)||(t.add(n),e.push(n))}),e},s.uniqBy=function(e){var t=u(),r=new Set
return this.forEach(function(i){var o=(0,n.get)(i,e)
r.has(o)||(r.add(o),t.push(i))}),t},s.without=function(e){if(!this.includes(e))return this
var t=u()
return this.forEach(function(n){n===e||n!=n&&e!=e||(t[t.length]=n)}),t},s["@each"]=(0,n.computed)(function(){return this.__each||(this.__each=new y(this)),this.__each}).volatile().readOnly(),s))
function y(e){this._content=e,this._keys=void 0,(0,n.meta)(this)}function E(e,t,r,i,o){for(var a;--o>=i;)(a=d(e,o))&&((0,n._addBeforeObserver)(a,t,r,"contentKeyWillChange"),(0,n.addObserver)(a,t,r,"contentKeyDidChange"))}function T(e,t,r,i,o){for(var a;--o>=i;)(a=d(e,o))&&((0,n._removeBeforeObserver)(a,t,r,"contentKeyWillChange"),(0,n.removeObserver)(a,t,r,"contentKeyDidChange"))}y.prototype={__defineNonEnumerable:function(e){this[e.name]=e.descriptor.value},arrayWillChange:function(e,t,r){var i=this._keys,o=r>0?t+r:-1,a=(0,n.peekMeta)(this)
for(var s in i)o>0&&T(e,s,this,t,o),(0,n.propertyWillChange)(this,s,a)},arrayDidChange:function(e,t,r,i){var o=this._keys,a=i>0?t+i:-1,s=(0,n.peekMeta)(this)
for(var l in o)a>0&&E(e,l,this,t,a),(0,n.propertyDidChange)(this,l,s)},willWatchProperty:function(e){this.beginObservingContentKey(e)},didUnwatchProperty:function(e){this.stopObservingContentKey(e)},beginObservingContentKey:function(e){var t,r=this._keys
r||(r=this._keys=Object.create(null)),r[e]?r[e]++:(r[e]=1,E(t=this._content,e,this,0,(0,n.get)(t,"length")))},stopObservingContentKey:function(e){var t,r=this._keys
r&&r[e]>0&&--r[e]<=0&&T(t=this._content,e,this,0,(0,n.get)(t,"length"))},contentKeyWillChange:function(e,t){(0,n.propertyWillChange)(this,t)},contentKeyDidChange:function(e,t){(0,n.propertyDidChange)(this,t)}},e.default=b}),e("ember-runtime/mixins/comparable",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({compare:null})}),e("ember-runtime/mixins/container_proxy",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({__container__:null,ownerInjection:function(){return this.__container__.ownerInjection()},lookup:function(e,t){return this.__container__.lookup(e,t)},_resolveLocalLookupName:function(e,t){return this.__container__.registry.expandLocalLookup("component:"+e,{source:t})},willDestroy:function(){this._super.apply(this,arguments),this.__container__&&(0,t.run)(this.__container__,"destroy")},factoryFor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.__container__.factoryFor(e,t)}})}),e("ember-runtime/mixins/controller",["exports","ember-metal","ember-runtime/computed/computed_macros","ember-runtime/mixins/action_handler"],function(e,t,n,r){"use strict"
e.default=t.Mixin.create(r.default,{isController:!0,target:null,store:null,model:null,content:(0,n.deprecatingAlias)("model",{id:"ember-runtime.controller.content-alias",until:"2.17.0",url:"https://emberjs.com/deprecations/v2.x/#toc_controller-content-alias"})})}),e("ember-runtime/mixins/copyable",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({copy:null})}),e("ember-runtime/mixins/enumerable",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create()}),e("ember-runtime/mixins/evented",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({on:function(e,n,r){return(0,t.addListener)(this,e,n,r),this},one:function(e,n,r){return r||(r=n,n=null),(0,t.addListener)(this,e,n,r,!0),this},trigger:function(e){var n,r,i
for(n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(0,t.sendEvent)(this,e,r)},off:function(e,n,r){return(0,t.removeListener)(this,e,n,r),this},has:function(e){return(0,t.hasListeners)(this,e)}})}),e("ember-runtime/mixins/mutable_array",["exports","ember-metal","ember-runtime/mixins/mutable_enumerable","ember-runtime/mixins/array","ember-debug"],function(e,t,n,r,i){"use strict"
e.removeAt=s
var o="Index out of range",a=[]
function s(e,n,r){if("number"==typeof n){if(n<0||n>=(0,t.get)(e,"length"))throw new i.Error(o)
void 0===r&&(r=1),e.replace(n,r,a)}return e}e.default=t.Mixin.create(r.default,n.default,{replace:null,clear:function(){var e=(0,t.get)(this,"length")
return 0===e?this:(this.replace(0,e,a),this)},insertAt:function(e,n){if(e>(0,t.get)(this,"length"))throw new i.Error(o)
return this.replace(e,0,[n]),this},removeAt:function(e,t){return s(this,e,t)},pushObject:function(e){return this.insertAt((0,t.get)(this,"length"),e),e},pushObjects:function(e){if(!Array.isArray(e))throw new TypeError("Must pass Enumerable to MutableArray#pushObjects")
return this.replace((0,t.get)(this,"length"),0,e),this},popObject:function(){var e=(0,t.get)(this,"length")
if(0===e)return null
var n=(0,r.objectAt)(this,e-1)
return this.removeAt(e-1,1),n},shiftObject:function(){if(0===(0,t.get)(this,"length"))return null
var e=(0,r.objectAt)(this,0)
return this.removeAt(0),e},unshiftObject:function(e){return this.insertAt(0,e),e},unshiftObjects:function(e){return this.replace(0,0,e),this},reverseObjects:function(){var e=(0,t.get)(this,"length")
if(0===e)return this
var n=this.toArray().reverse()
return this.replace(0,e,n),this},setObjects:function(e){if(0===e.length)return this.clear()
var n=(0,t.get)(this,"length")
return this.replace(0,n,e),this},removeObject:function(e){for(var n=(0,t.get)(this,"length")||0;--n>=0;)(0,r.objectAt)(this,n)===e&&this.removeAt(n)
return this},removeObjects:function(e){var n
for((0,t.beginPropertyChanges)(this),n=e.length-1;n>=0;n--)this.removeObject(e[n])
return(0,t.endPropertyChanges)(this),this},addObject:function(e){return this.includes(e)||this.pushObject(e),this},addObjects:function(e){var n=this
return(0,t.beginPropertyChanges)(this),e.forEach(function(e){return n.addObject(e)}),(0,t.endPropertyChanges)(this),this}})}),e("ember-runtime/mixins/mutable_enumerable",["exports","ember-runtime/mixins/enumerable","ember-metal"],function(e,t,n){"use strict"
e.default=n.Mixin.create(t.default)}),e("ember-runtime/mixins/observable",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
e.default=t.Mixin.create({get:function(e){return(0,t.get)(this,e)},getProperties:function(){var e,n,r
for(e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r]
return t.getProperties.apply(void 0,[this].concat(n))},set:function(e,n){return(0,t.set)(this,e,n)},setProperties:function(e){return(0,t.setProperties)(this,e)},beginPropertyChanges:function(){return(0,t.beginPropertyChanges)(),this},endPropertyChanges:function(){return(0,t.endPropertyChanges)(),this},propertyWillChange:function(e){return(0,t.propertyWillChange)(this,e),this},propertyDidChange:function(e){return(0,t.propertyDidChange)(this,e),this},notifyPropertyChange:function(e){return this.propertyWillChange(e),this.propertyDidChange(e),this},addObserver:function(e,n,r){return(0,t.addObserver)(this,e,n,r),this},removeObserver:function(e,n,r){return(0,t.removeObserver)(this,e,n,r),this},hasObserverFor:function(e){return(0,t.hasListeners)(this,e+":change")},getWithDefault:function(e,n){return(0,t.getWithDefault)(this,e,n)},incrementProperty:function(e,n){return(0,t.isNone)(n)&&(n=1),(0,t.set)(this,e,(parseFloat((0,t.get)(this,e))||0)+n)},decrementProperty:function(e,n){return(0,t.isNone)(n)&&(n=1),(0,t.set)(this,e,((0,t.get)(this,e)||0)-n)},toggleProperty:function(e){return(0,t.set)(this,e,!(0,t.get)(this,e))},cacheFor:function(e){return(0,t.cacheFor)(this,e)}})}),e("ember-runtime/mixins/promise_proxy",["exports","ember-metal","ember-debug","ember-runtime/computed/computed_macros"],function(e,t,n,r){"use strict"
function i(e){return function(){var n=(0,t.get)(this,"promise")
return n[e].apply(n,arguments)}}e.default=t.Mixin.create({reason:null,isPending:(0,r.not)("isSettled").readOnly(),isSettled:(0,r.or)("isRejected","isFulfilled").readOnly(),isRejected:!1,isFulfilled:!1,promise:(0,t.computed)({get:function(){throw new n.Error("PromiseProxy's promise must be set")},set:function(e,n){return function(e,n){return(0,t.setProperties)(e,{isFulfilled:!1,isRejected:!1}),n.then(function(n){return e.isDestroyed||e.isDestroying||(0,t.setProperties)(e,{content:n,isFulfilled:!0}),n},function(n){throw e.isDestroyed||e.isDestroying||(0,t.setProperties)(e,{reason:n,isRejected:!0}),n},"Ember: PromiseProxy")}(this,n)}}),then:i("then"),catch:i("catch"),finally:i("finally")})}),e("ember-runtime/mixins/registry_proxy",["exports","ember-metal"],function(e,t){"use strict"
function n(e){return function(){var t
return(t=this.__registry__)[e].apply(t,arguments)}}e.default=t.Mixin.create({__registry__:null,resolveRegistration:n("resolve"),register:n("register"),unregister:n("unregister"),hasRegistration:n("has"),registeredOption:n("getOption"),registerOptions:n("options"),registeredOptions:n("getOptions"),registerOptionsForType:n("optionsForType"),registeredOptionsForType:n("getOptionsForType"),inject:n("injection")})}),e("ember-runtime/mixins/target_action_support",["exports","ember-environment","ember-metal","ember-debug"],function(e,t,n,r){"use strict"
e.default=n.Mixin.create({target:null,targetObject:(0,n.descriptor)({configurable:!0,enumerable:!1,get:function(){return this._targetObject},set:function(e){this._targetObject=e}}),action:null,actionContext:null,actionContextObject:(0,n.computed)("actionContext",function(){var e,r=(0,n.get)(this,"actionContext")
return"string"==typeof r?(void 0===(e=(0,n.get)(this,r))&&(e=(0,n.get)(t.context.lookup,r)),e):r}),triggerAction:function(){var e,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.action,a=i.target,s=i.actionContext
return o=o||(0,n.get)(this,"action"),a=a||function(e){var r,i=(0,n.get)(e,"target")
if(i)return"string"==typeof i?(void 0===(r=(0,n.get)(e,i))&&(r=(0,n.get)(t.context.lookup,i)),r):i
if(i)return i
if(e._targetObject)return e._targetObject
return null}(this),void 0===s&&(s=(0,n.get)(this,"actionContextObject")||this),!(!a||!o||(void 0,!1===(a.send?(e=a).send.apply(e,[o].concat(s)):(r=a)[o].apply(r,[].concat(s)))))}})}),e("ember-runtime/string_registry",["exports"],function(e){"use strict"
e.setStrings=function(e){t=e},e.getStrings=function(){return t},e.get=function(e){return t[e]}
var t={}}),e("ember-runtime/system/application",["exports","ember-runtime/system/namespace"],function(e,t){"use strict"
e.default=t.default.extend()}),e("ember-runtime/system/array_proxy",["exports","ember-metal","ember-runtime/utils","ember-runtime/system/object","ember-runtime/mixins/mutable_array","ember-runtime/mixins/array","ember-debug"],function(e,t,n,r,i,o,a){"use strict"
var s,l={willChange:"_arrangedContentArrayWillChange",didChange:"_arrangedContentArrayDidChange"}
e.default=r.default.extend(i.default,((s={init:function(){this._super.apply(this,arguments),this._objectsDirtyIndex=0,this._objects=null,this._lengthDirty=!0,this._length=0,this._arrangedContent=null,this._addArrangedContentArrayObsever()},willDestroy:function(){this._removeArrangedContentArrayObsever()},content:null,arrangedContent:(0,t.alias)("content"),objectAtContent:function(e){return(0,o.objectAt)((0,t.get)(this,"arrangedContent"),e)},replace:function(e,t,n){this.replaceContent(e,t,n)},replaceContent:function(e,n,r){(0,t.get)(this,"content").replace(e,n,r)},objectAt:function(e){var n,r,i
if(null===this._objects&&(this._objects=[]),-1!==this._objectsDirtyIndex&&e>=this._objectsDirtyIndex){if(n=(0,t.get)(this,"arrangedContent"))for(r=this._objects.length=(0,t.get)(n,"length"),i=this._objectsDirtyIndex;i<r;i++)this._objects[i]=this.objectAtContent(i)
else this._objects.length=0
this._objectsDirtyIndex=-1}return this._objects[e]},length:(0,t.computed)(function(){var e
return this._lengthDirty&&(e=(0,t.get)(this,"arrangedContent"),this._length=e?(0,t.get)(e,"length"):0,this._lengthDirty=!1),this._length}).volatile()})[t.PROPERTY_DID_CHANGE]=function(e){var n,r,i
"arrangedContent"===e&&(n=null===this._objects?0:this._objects.length,i=(r=(0,t.get)(this,"arrangedContent"))?(0,t.get)(r,"length"):0,this._removeArrangedContentArrayObsever(),this.arrayContentWillChange(0,n,i),this._objectsDirtyIndex=0,this._lengthDirty=!0,this.arrayContentDidChange(0,n,i),this._addArrangedContentArrayObsever())},s._addArrangedContentArrayObsever=function(){var e=(0,t.get)(this,"arrangedContent")
e&&((0,o.addArrayObserver)(e,this,l),this._arrangedContent=e)},s._removeArrangedContentArrayObsever=function(){this._arrangedContent&&(0,o.removeArrayObserver)(this._arrangedContent,this,l)},s._arrangedContentArrayWillChange=function(){},s._arrangedContentArrayDidChange=function(e,n,r,i){this.arrayContentWillChange(n,r,i)
var o=n
o<0&&(o+=(0,t.get)(this._arrangedContent,"length")+r-i),-1===this._objectsDirtyIndex?this._objectsDirtyIndex=o:this._objectsDirtyIndex>o&&(this._objectsDirtyIndex=o),this._lengthDirty=!0,this.arrayContentDidChange(n,r,i)},s))}),e("ember-runtime/system/core_object",["exports","ember-utils","ember-metal","ember-runtime/mixins/action_handler","ember-runtime/inject","ember-debug","ember-environment"],function(e,t,n,r,i,o,a){"use strict"
var s,l
e.POST_INIT=void 0
var u=n.run.schedule,c=n.Mixin._apply,f=n.Mixin.prototype.reopen,p=e.POST_INIT=(0,t.symbol)("POST_INIT")
function d(){var e=!1,r=void 0,i=void 0,o=function(){function o(){e||o.proto(),arguments.length>0&&(r=[arguments[0]]),this.__defineNonEnumerable(t.GUID_KEY_PROPERTY)
var s,l,u,c,f,d,h,m,g,v,b,y,E,T,_=(0,n.meta)(this),A=_.proto
if(_.proto=this,i&&(_.factory=i,i=null),r)for(s=r,r=null,l=this.concatenatedProperties,u=this.mergedProperties,c=l&&l.length>0,f=u&&u.length>0,d=0;d<s.length;d++)if(h=s[d])for(m=Object.keys(h),g=0;g<m.length;g++)b=h[v=m[g]],a.ENV._ENABLE_BINDING_SUPPORT&&n.Mixin.detectBinding(v)&&_.writeBindings(v,b),(E=void 0!==(y=(0,n.descriptorFor)(this,v,_)))||(T=this[v],c&&l.indexOf(v)>-1&&(b=T?(0,t.makeArray)(T).concat(b):(0,t.makeArray)(b)),f&&u.indexOf(v)>-1&&(b=(0,t.assign)({},T,b))),E?y.set(this,v,b):"function"!=typeof this.setUnknownProperty||v in this?this[v]=b:this.setUnknownProperty(v,b)
a.ENV._ENABLE_BINDING_SUPPORT&&n.Mixin.finishPartial(this,_),this.init.apply(this,arguments),this[p](),_.proto=A,(0,n.finishChains)(_),(0,n.sendEvent)(this,"init",void 0,void 0,void 0,_)}return o.willReopen=function(){e&&(o.PrototypeMixin=n.Mixin.create(o.PrototypeMixin)),e=!1},o._initProperties=function(e){r=e},o._initFactory=function(e){i=e},o.proto=function(){var t=o.superclass
return t&&t.proto(),e||(e=!0,o.PrototypeMixin.applyPartial(o.prototype)),this.prototype},o}()
return o.toString=n.Mixin.prototype.toString,o}var h=(0,n.descriptor)({configurable:!0,enumerable:!1,get:function(){return(0,n.peekMeta)(this).isSourceDestroyed()},set:function(e){}}),m=(0,n.descriptor)({configurable:!0,enumerable:!1,get:function(){return(0,n.peekMeta)(this).isSourceDestroying()},set:function(e){}}),g=d()
g.toString=function(){return"Ember.CoreObject"},g.PrototypeMixin=n.Mixin.create(((s={reopen:function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return c(this,t,!0),this},init:function(){}})[p]=function(){},s.__defineNonEnumerable=function(e){Object.defineProperty(this,e.name,e.descriptor)},s.concatenatedProperties=null,s.mergedProperties=null,s.isDestroyed=h,s.isDestroying=m,s.destroy=function(){var e=(0,n.peekMeta)(this)
if(!e.isSourceDestroying())return e.setSourceDestroying(),u("actions",this,this.willDestroy),u("destroy",this,this._scheduledDestroy,e),this},s.willDestroy=function(){},s._scheduledDestroy=function(e){e.isSourceDestroyed()||((0,n.deleteMeta)(this),e.setSourceDestroyed())},s.toString=function(){var e="function"==typeof this.toStringExtension?":"+this.toStringExtension():""
return"<"+(this[t.NAME_KEY]||(0,n.peekMeta)(this).factory||this.constructor.toString())+":"+(0,t.guidFor)(this)+e+">"},s)),g.PrototypeMixin.ownerConstructor=g,g.__super__=null
var v=((l={isClass:!0,isMethod:!1})[t.NAME_KEY]=null,l[t.GUID_KEY]=null,l.extend=function(){var e=d(),r=void 0
return e.ClassMixin=n.Mixin.create(this.ClassMixin),e.PrototypeMixin=n.Mixin.create(this.PrototypeMixin),e.ClassMixin.ownerConstructor=e,e.PrototypeMixin.ownerConstructor=e,f.apply(e.PrototypeMixin,arguments),e.superclass=this,e.__super__=this.prototype,(r=e.prototype=Object.create(this.prototype)).constructor=e,(0,t.generateGuid)(r),(0,n.meta)(r).proto=r,e.ClassMixin.apply(e),e},l.create=function(){var e,t,n
for(e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.length>0&&this._initProperties(t),new this},l.reopen=function(){return this.willReopen(),f.apply(this.PrototypeMixin,arguments),this},l.reopenClass=function(){return f.apply(this.ClassMixin,arguments),c(this,arguments,!1),this},l.detect=function(e){if("function"!=typeof e)return!1
for(;e;){if(e===this)return!0
e=e.superclass}return!1},l.detectInstance=function(e){return e instanceof this},l.metaForProperty=function(e){var t=this.proto(),r=(0,n.descriptorFor)(t,e)
return r._meta||{}},l._computedProperties=(0,n.computed)(function(){(0,n._hasCachedComputedProperties)()
var e=this.proto(),t=void 0,r=[]
for(var i in e)void 0!==(t=(0,n.descriptorFor)(e,i))&&r.push({name:i,meta:t._meta})
return r}).readOnly(),l.eachComputedProperty=function(e,t){var r,i=void 0,o={},a=(0,n.get)(this,"_computedProperties")
for(r=0;r<a.length;r++)i=a[r],e.call(t||this,i.name,i.meta||o)},l)
a.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT&&(v.ClassMixin=n.REQUIRED,v.PrototypeMixin=n.REQUIRED)
var b=n.Mixin.create(v)
b.ownerConstructor=g,g.ClassMixin=b,b.apply(g),e.default=g}),e("ember-runtime/system/lazy_load",["exports","ember-environment"],function(e,t){"use strict"
e._loaded=void 0,e.onLoad=function(e,t){var i=r[e]
n[e]=n[e]||[],n[e].push(t),i&&t(i)},e.runLoadHooks=function(e,i){r[e]=i
var o,a=t.environment.window
a&&"function"==typeof CustomEvent&&(o=new CustomEvent(e,{detail:i,name:e}),a.dispatchEvent(o)),n[e]&&n[e].forEach(function(e){return e(i)})}
var n=t.ENV.EMBER_LOAD_HOOKS||{},r={}
e._loaded=r}),e("ember-runtime/system/namespace",["exports","ember-utils","ember-metal","ember-environment","ember-runtime/system/object"],function(e,t,n,r,i){"use strict"
e.isSearchDisabled=function(){return o},e.setSearchDisabled=function(e){o=!!e}
var o=!1,a=i.default.extend({isNamespace:!0,init:function(){a.NAMESPACES.push(this),a.PROCESSED=!1},toString:function(){var e=(0,n.get)(this,"name")||(0,n.get)(this,"modulePrefix")
return e||(f(),this[t.NAME_KEY])},nameClasses:function(){u([this.toString()],this,{})},destroy:function(){var e=a.NAMESPACES,t=this.toString()
t&&(r.context.lookup[t]=void 0,delete a.NAMESPACES_BY_ID[t]),e.splice(e.indexOf(this),1),this._super.apply(this,arguments)}})
a.reopenClass({NAMESPACES:[n.default],NAMESPACES_BY_ID:{Ember:n.default},PROCESSED:!1,processAll:h,byName:function(e){return o||h(),s[e]}})
var s=a.NAMESPACES_BY_ID,l={}.hasOwnProperty
function u(e,n,r){var i,o=e.length
for(var a in s[e.join(".")]=n,n)if(l.call(n,a))if(i=n[a],e[o]=a,i&&i.toString===d&&!i[t.NAME_KEY])i[t.NAME_KEY]=e.join(".")
else if(i&&i.isNamespace){if(r[(0,t.guidFor)(i)])continue
r[(0,t.guidFor)(i)]=!0,u(e,i,r)}e.length=o}function c(e,t){var n
try{return(n=e[t])&&n.isNamespace&&n}catch(e){}}function f(){if(!a.PROCESSED){var e,n,i,o,s=r.context.lookup,l=Object.keys(s)
for(e=0;e<l.length;e++)n=l[e],(o=n.charCodeAt(0))>=65&&o<=90&&(i=c(s,n))&&(i[t.NAME_KEY]=n)}}function p(e){var n=void 0
if(!o){if(h(),n=e[t.NAME_KEY])return n
n=(n=function e(n){var r=n.superclass
if(r)return r[t.NAME_KEY]?r[t.NAME_KEY]:e(r)}(e))?"(subclass of "+n+")":n}return n||"(unknown mixin)"}function d(){var e=this[t.NAME_KEY]
return e||(this[t.NAME_KEY]=p(this))}function h(){var e,t,r,i=!a.PROCESSED,o=(0,n.hasUnprocessedMixins)()
if(i&&(f(),a.PROCESSED=!0),i||o){for(e=a.NAMESPACES,t=void 0,r=0;r<e.length;r++)u([(t=e[r]).toString()],t,{});(0,n.clearUnprocessedMixins)()}}n.Mixin.prototype.toString=d,e.default=a}),e("ember-runtime/system/native_array",["exports","ember-metal","ember-environment","ember-runtime/mixins/array","ember-runtime/mixins/mutable_array","ember-runtime/mixins/observable","ember-runtime/mixins/copyable","ember-debug","ember-runtime/copy"],function(e,t,n,r,i,o,a,s,l){"use strict"
var u
e.NativeArray=e.A=void 0
var c=t.Mixin.create(i.default,o.default,a.default,{get:function(e){return"number"==typeof e?this[e]:this._super(e)},objectAt:function(e){return this[e]},replace:function(e,n,i){var o=i?(0,t.get)(i,"length"):0
return(0,r.arrayContentWillChange)(this,e,n,o),0===o?this.splice(e,n):(0,t.replace)(this,e,n,i),(0,r.arrayContentDidChange)(this,e,n,o),this},unknownProperty:function(e,t){var n=void 0
return void 0!==t&&void 0===n&&(n=this[e]=t),n},indexOf:Array.prototype.indexOf,lastIndexOf:Array.prototype.lastIndexOf,copy:function(e){return e?this.map(function(e){return(0,l.default)(e,!0)}):this.slice()}}),f=["length"]
c.keys().forEach(function(e){Array.prototype[e]&&f.push(e)}),e.NativeArray=c=(u=c).without.apply(u,f)
var p=void 0
n.ENV.EXTEND_PROTOTYPES.Array?(c.apply(Array.prototype),e.A=p=function(e){return e||[]}):e.A=p=function(e){return e||(e=[]),r.default.detect(e)?e:c.apply(e)},t.default.A=p,e.A=p,e.NativeArray=c,e.default=c}),e("ember-runtime/system/object",["exports","ember-utils","ember-metal","ember-runtime/system/core_object","ember-runtime/mixins/observable","ember-debug"],function(e,t,n,r,i){"use strict"
var o
e.FrameworkObject=void 0
var a=(0,t.symbol)("OVERRIDE_OWNER"),s=r.default.extend(i.default,((o={_debugContainerKey:(0,n.descriptor)({enumerable:!1,get:function(){var e=(0,n.peekMeta)(this).factory
return e&&e.fullName}})})[t.OWNER]=(0,n.descriptor)({enumerable:!1,get:function(){if(this[a])return this[a]
var e=(0,n.peekMeta)(this).factory
return e&&e.owner},set:function(e){this[a]=e}}),o))
s.toString=function(){return"Ember.Object"},e.FrameworkObject=s,e.default=s}),e("ember-runtime/system/object_proxy",["exports","ember-runtime/system/object","ember-runtime/mixins/-proxy"],function(e,t,n){"use strict"
e.default=t.default.extend(n.default)}),e("ember-runtime/system/service",["exports","ember-runtime/system/object","ember-runtime/inject"],function(e,t,n){"use strict";(0,n.createInjectionHelper)("service")
var r=t.default.extend()
r.reopenClass({isServiceFactory:!0}),e.default=r})
e("ember-runtime/system/string",["exports","ember-metal","ember-utils","ember-runtime/utils","ember-runtime/string_registry"],function(e,t,n,r,i){"use strict"
e.capitalize=e.underscore=e.classify=e.camelize=e.dasherize=e.decamelize=e.w=e.loc=void 0
var o=/[ _]/g,a=new t.Cache(1e3,function(e){return A(e).replace(o,"-")}),s=/(\-|\_|\.|\s)+(.)?/g,l=/(^|\/)([A-Z])/g,u=new t.Cache(1e3,function(e){return e.replace(s,function(e,t,n){return n?n.toUpperCase():""}).replace(l,function(e){return e.toLowerCase()})}),c=/^(\-|_)+(.)?/,f=/(.)(\-|\_|\.|\s)+(.)?/g,p=/(^|\/|\.)([a-z])/g,d=new t.Cache(1e3,function(e){var t,n=function(e,t,n){return n?"_"+n.toUpperCase():""},r=function(e,t,n,r){return t+(r?r.toUpperCase():"")},i=e.split("/")
for(t=0;t<i.length;t++)i[t]=i[t].replace(c,n).replace(f,r)
return i.join("/").replace(p,function(e){return e.toUpperCase()})}),h=/([a-z\d])([A-Z]+)/g,m=/\-|\s+/g,g=new t.Cache(1e3,function(e){return e.replace(h,"$1_$2").replace(m,"_").toLowerCase()}),v=/(^|\/)([a-z\u00C0-\u024F])/g,b=new t.Cache(1e3,function(e){return e.replace(v,function(e){return e.toUpperCase()})}),y=/([a-z\d])([A-Z])/g,E=new t.Cache(1e3,function(e){return e.replace(y,"$1_$2").toLowerCase()})
function T(e,t){return(!(0,r.isArray)(t)||arguments.length>2)&&(t=Array.prototype.slice.call(arguments,1)),function(e,t){var i,o=t
if(!(0,r.isArray)(o)||arguments.length>2)for(o=new Array(arguments.length-1),i=1;i<arguments.length;i++)o[i-1]=arguments[i]
var a=0
return e.replace(/%@([0-9]+)?/g,function(e,t){return t=t?parseInt(t,10)-1:a++,null===(e=o[t])?"(null)":void 0===e?"":(0,n.inspect)(e)})}(e=(0,i.get)(e)||e,t)}function _(e){return e.split(/\s+/)}function A(e){return E.get(e)}function w(e){return a.get(e)}function C(e){return u.get(e)}function S(e){return d.get(e)}function O(e){return g.get(e)}function x(e){return b.get(e)}e.default={loc:T,w:_,decamelize:A,dasherize:w,camelize:C,classify:S,underscore:O,capitalize:x},e.loc=T,e.w=_,e.decamelize=A,e.dasherize=w,e.camelize=C,e.classify=S,e.underscore=O,e.capitalize=x}),e("ember-runtime/utils",["exports","ember-runtime/mixins/array","ember-runtime/system/object"],function(e,t,n){"use strict"
e.isArray=function(e){if(!e||e.setInterval)return!1
if(Array.isArray(e))return!0
if(t.default.detect(e))return!0
var n=o(e)
if("array"===n)return!0
var r=e.length
return"number"==typeof r&&r==r&&"object"===n},e.typeOf=o
var r={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object FileList]":"filelist"},i=Object.prototype.toString
function o(e){if(null===e)return"null"
if(void 0===e)return"undefined"
var t=r[i.call(e)]||"object"
return"function"===t?n.default.detect(e)&&(t="class"):"object"===t&&(e instanceof Error?t="error":e instanceof n.default?t="instance":e instanceof Date&&(t="date")),t}}),e("ember-utils",["exports"],function(e){"use strict"
function t(e){var t={}
for(var n in t[e]=1,t)if(n===e)return n
return e}var n=0
function r(){return++n}var i=[],o={},a=t("__ember"+ +new Date),s={writable:!0,configurable:!0,enumerable:!1,value:null},l={name:a,descriptor:{configurable:!0,writable:!0,enumerable:!1,value:null}}
function u(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ember")+r()
return void 0!==e&&null!==e&&(null===e[a]?e[a]=t:(s.value=t,e.__defineNonEnumerable?e.__defineNonEnumerable(l):Object.defineProperty(e,a,s))),t}function c(e){return t("__"+e+(a+Math.floor(Math.random()*new Date))+"__")}var f=c("OWNER")
function p(e){var t,n,r,i,o
for(t=1;t<arguments.length;t++)if(n=arguments[t])for(r=Object.keys(n),i=0;i<r.length;i++)e[o=r[i]]=n[o]
return e}var d=Object.assign||p,h=/\.(_super|call\(this|apply\(this)/,m=Function.prototype.toString,g=m.call(function(){return this}).indexOf("return this")>-1?function(e){return h.test(m.call(e))}:function(){return!0}
function v(){}function b(e){return void 0===e.__hasSuper&&(e.__hasSuper=g(e)),e.__hasSuper}function y(e,t){function n(){var n=this._super
this._super=t
var r=e.apply(this,arguments)
return this._super=n,r}return n.wrappedFunction=e,n.__ember_observes__=e.__ember_observes__,n.__ember_observesBefore__=e.__ember_observesBefore__,n.__ember_listens__=e.__ember_listens__,n}v.__hasSuper=!1
var E=Object.prototype.toString
function T(e,t,n){var r=n&&n.length
if(!n||!r)return e[t]()
switch(r){case 1:return e[t](n[0])
case 2:return e[t](n[0],n[1])
case 3:return e[t](n[0],n[1],n[2])
case 4:return e[t](n[0],n[1],n[2],n[3])
case 5:return e[t](n[0],n[1],n[2],n[3],n[4])
default:return e[t].apply(e,n)}}function _(e,t){return null!==e&&void 0!==e&&"function"==typeof e[t]}var A=Array.isArray,w=c("NAME_KEY"),C=Object.prototype.toString
function S(e){return null===e||void 0===e}var O="function"==typeof Proxy
e.symbol=c,e.getOwner=function(e){return e[f]},e.setOwner=function(e,t){e[f]=t},e.OWNER=f,e.assign=d,e.assignPolyfill=p,e.dictionary=function(e){var t=Object.create(e)
return t._dict=null,delete t._dict,t},e.uuid=r,e.GUID_KEY=a,e.GUID_DESC=s,e.GUID_KEY_PROPERTY=l,e.generateGuid=u,e.guidFor=function(e){if(void 0===e)return"(undefined)"
if(null===e)return"(null)"
var t=typeof e
if(("object"===t||"function"===t)&&e[a])return e[a]
var n=void 0
switch(t){case"number":return(n=i[e])||(n=i[e]="nu"+e),n
case"string":return(n=o[e])||(n=o[e]="st"+r()),n
case"boolean":return e?"(true)":"(false)"
default:return e===Object?"(Object)":e===Array?"(Array)":u(e)}},e.intern=t,e.checkHasSuper=g,e.ROOT=v,e.wrap=function(e,t){return b(e)?!t.wrappedFunction&&b(t)?y(e,y(t,v)):y(e,t):e},e.inspect=function(e){if(null===e)return"null"
if(void 0===e)return"undefined"
if(Array.isArray(e))return"["+e+"]"
var t=typeof e
if("object"!==t&&"symbol"!==t)return""+e
if("function"==typeof e.toString&&e.toString!==E)return e.toString()
var n=void 0,r=[]
for(var i in e)if(e.hasOwnProperty(i)){if("toString"===(n=e[i]))continue
"function"==typeof n&&(n="function() { ... }"),n&&"function"!=typeof n.toString?r.push(i+": "+E.call(n)):r.push(i+": "+n)}return"{"+r.join(", ")+"}"},e.lookupDescriptor=function(e,t){for(var n,r=e;r;){if(n=Object.getOwnPropertyDescriptor(r,t))return n
r=Object.getPrototypeOf(r)}return null},e.canInvoke=_,e.tryInvoke=function(e,t,n){if(_(e,t))return T(e,t,n)},e.makeArray=function(e){return null===e||void 0===e?[]:A(e)?e:[e]},e.applyStr=T,e.NAME_KEY=w,e.toString=function e(t){var n,r,i
if("string"==typeof t)return t
if(Array.isArray(t)){for(n=t.length,r="",i=0;i<n;i++)i>0&&(r+=","),S(t[i])||(r+=e(t[i]))
return r}return null!=t&&"function"==typeof t.toString?t.toString():C.call(t)},e.HAS_NATIVE_PROXY=O}),e("ember-views/compat/attrs",["exports","ember-utils"],function(e,t){"use strict"
e.MUTABLE_CELL=void 0,e.MUTABLE_CELL=(0,t.symbol)("MUTABLE_CELL")}),e("ember-views/compat/fallback-view-registry",["exports","ember-utils"],function(e,t){"use strict"
e.default=(0,t.dictionary)(null)}),e("ember-views/component_lookup",["exports","ember-debug","ember-runtime"],function(e,t,n){"use strict"
e.default=n.Object.extend({componentFor:function(e,t,n){return t.factoryFor("component:"+e,n)},layoutFor:function(e,t,n){return t.lookup("template:components/"+e,n)}})}),e("ember-views/index",["exports","ember-views/system/jquery","ember-views/system/utils","ember-views/system/event_dispatcher","ember-views/component_lookup","ember-views/mixins/text_support","ember-views/views/core_view","ember-views/mixins/class_names_support","ember-views/mixins/child_views_support","ember-views/mixins/view_state_support","ember-views/mixins/view_support","ember-views/mixins/action_support","ember-views/compat/attrs","ember-views/system/lookup_partial","ember-views/utils/lookup-component","ember-views/system/action_manager","ember-views/compat/fallback-view-registry","ember-views/system/ext"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h,m,g){"use strict"
e.fallbackViewRegistry=e.ActionManager=e.lookupComponent=e.hasPartial=e.lookupPartial=e.MUTABLE_CELL=e.ActionSupport=e.ViewMixin=e.ViewStateSupport=e.ChildViewsSupport=e.ClassNamesSupport=e.CoreView=e.TextSupport=e.ComponentLookup=e.EventDispatcher=e.constructStyleDeprecationMessage=e.setViewElement=e.getViewElement=e.getViewId=e.getChildViews=e.getRootViews=e.getViewBoundingClientRect=e.getViewClientRects=e.getViewBounds=e.isSimpleClick=e.jQuery=void 0,Object.defineProperty(e,"jQuery",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isSimpleClick",{enumerable:!0,get:function(){return n.isSimpleClick}}),Object.defineProperty(e,"getViewBounds",{enumerable:!0,get:function(){return n.getViewBounds}}),Object.defineProperty(e,"getViewClientRects",{enumerable:!0,get:function(){return n.getViewClientRects}}),Object.defineProperty(e,"getViewBoundingClientRect",{enumerable:!0,get:function(){return n.getViewBoundingClientRect}}),Object.defineProperty(e,"getRootViews",{enumerable:!0,get:function(){return n.getRootViews}}),Object.defineProperty(e,"getChildViews",{enumerable:!0,get:function(){return n.getChildViews}}),Object.defineProperty(e,"getViewId",{enumerable:!0,get:function(){return n.getViewId}}),Object.defineProperty(e,"getViewElement",{enumerable:!0,get:function(){return n.getViewElement}}),Object.defineProperty(e,"setViewElement",{enumerable:!0,get:function(){return n.setViewElement}}),Object.defineProperty(e,"constructStyleDeprecationMessage",{enumerable:!0,get:function(){return n.constructStyleDeprecationMessage}}),Object.defineProperty(e,"EventDispatcher",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"ComponentLookup",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"TextSupport",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"CoreView",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"ClassNamesSupport",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"ChildViewsSupport",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"ViewStateSupport",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"ViewMixin",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"ActionSupport",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"MUTABLE_CELL",{enumerable:!0,get:function(){return p.MUTABLE_CELL}}),Object.defineProperty(e,"lookupPartial",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"hasPartial",{enumerable:!0,get:function(){return d.hasPartial}}),Object.defineProperty(e,"lookupComponent",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"ActionManager",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"fallbackViewRegistry",{enumerable:!0,get:function(){return g.default}})}),e("ember-views/mixins/action_support",["exports","ember-utils","ember-metal","ember-debug","ember-views/compat/attrs"],function(e,t,n,r,i){"use strict"
e.default=n.Mixin.create({sendAction:function(e){for(t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o]
var t,r,o,a=void 0
void 0===e&&(e="action"),void 0!==(a=function(e,t){return t&&t[i.MUTABLE_CELL]&&(t=t.value),t}(0,a=(0,n.get)(this,"attrs."+e)||(0,n.get)(this,e)))&&("function"==typeof a?a.apply(void 0,r):this.triggerAction({action:a,actionContext:r}))},send:function(e){for(t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i]
var t,r,i,o=this.actions&&this.actions[e]
if(!o||!0===o.apply(this,r)){var a=(0,n.get)(this,"target")
a&&a.send.apply(a,arguments)}}})}),e("ember-views/mixins/child_views_support",["exports","ember-utils","ember-metal","ember-views/system/utils"],function(e,t,n,r){"use strict"
e.default=n.Mixin.create({init:function(){this._super.apply(this,arguments),(0,r.initChildViews)(this)},childViews:(0,n.descriptor)({configurable:!1,enumerable:!1,get:function(){return(0,r.getChildViews)(this)}}),appendChild:function(e){this.linkChild(e),(0,r.addChildView)(this,e)},linkChild:function(e){(0,t.getOwner)(e)||(0,t.setOwner)(e,(0,t.getOwner)(this))}})}),e("ember-views/mixins/class_names_support",["exports","ember-metal","ember-debug"],function(e,t,n){"use strict"
var r=Object.freeze([])
e.default=t.Mixin.create({concatenatedProperties:["classNames","classNameBindings"],init:function(){this._super.apply(this,arguments)},classNames:r,classNameBindings:r})}),e("ember-views/mixins/text_support",["exports","ember-metal","ember-runtime"],function(e,t,n){"use strict"
var r={13:"insertNewline",27:"cancel"}
function i(e,n,r){var i=(0,t.get)(n,"attrs."+e)||(0,t.get)(n,e),o=(0,t.get)(n,"value")
n.sendAction(e,o),i&&!(0,t.get)(n,"bubbles")&&r.stopPropagation()}e.default=t.Mixin.create(n.TargetActionSupport,{value:"",attributeBindings:["autocapitalize","autocorrect","autofocus","disabled","form","maxlength","minlength","placeholder","readonly","required","selectionDirection","spellcheck","tabindex","title"],placeholder:null,disabled:!1,maxlength:null,init:function(){this._super.apply(this,arguments),this.on("paste",this,this._elementValueDidChange),this.on("cut",this,this._elementValueDidChange),this.on("input",this,this._elementValueDidChange)},bubbles:!1,interpretKeyEvents:function(e){var t=r[e.keyCode]
if(this._elementValueDidChange(),t)return this[t](e)},_elementValueDidChange:function(){(0,t.set)(this,"value",this.element.value)},change:function(e){this._elementValueDidChange(e)},insertNewline:function(e){i("enter",this,e),i("insert-newline",this,e)},cancel:function(e){i("escape-press",this,e)},focusIn:function(e){i("focus-in",this,e)},focusOut:function(e){this._elementValueDidChange(e),i("focus-out",this,e)},keyPress:function(e){i("key-press",this,e)},keyUp:function(e){this.interpretKeyEvents(e),this.sendAction("key-up",(0,t.get)(this,"value"),e)},keyDown:function(e){this.sendAction("key-down",(0,t.get)(this,"value"),e)}})}),e("ember-views/mixins/view_state_support",["exports","ember-metal"],function(e,t){"use strict"
e.default=t.Mixin.create({_transitionTo:function(e){var t=this._currentState,n=this._currentState=this._states[e]
this._state=e,t&&t.exit&&t.exit(this),n.enter&&n.enter(this)}})}),e("ember-views/mixins/view_support",["exports","ember-utils","ember-metal","ember-debug","ember-environment","ember-views/system/utils","ember-runtime/system/core_object","ember-views/system/jquery"],function(e,t,n,r,i,o,a,s){"use strict"
var l
function u(){return this}e.default=n.Mixin.create(((l={concatenatedProperties:["attributeBindings"]})[a.POST_INIT]=function(){!0===i.ENV._ENABLE_DID_INIT_ATTRS_SUPPORT&&this.trigger("didInitAttrs"),this.trigger("didReceiveAttrs")},l.nearestOfType=function(e){for(var t=this.parentView,r=e instanceof n.Mixin?function(t){return e.detect(t)}:function(t){return e.detect(t.constructor)};t;){if(r(t))return t
t=t.parentView}},l.nearestWithProperty=function(e){for(var t=this.parentView;t;){if(e in t)return t
t=t.parentView}},l.rerender=function(){return this._currentState.rerender(this)},l.element=(0,n.descriptor)({configurable:!1,enumerable:!1,get:function(){return this.renderer.getElement(this)}}),l.$=function(e){if(this.element)return e?(0,s.default)(e,this.element):(0,s.default)(this.element)},l.appendTo=function(e){var t=this._environment||i.environment,n=void 0
return n=t.hasDOM&&"string"==typeof e?document.querySelector(e):e,this.renderer.appendTo(this,n),this},l.append=function(){return this.appendTo(document.body)},l.elementId=null,l.findElementInParentElement=function(e){var t="#"+this.elementId
return(0,s.default)(t)[0]||(0,s.default)(t,e)[0]},l.willInsertElement=u,l.didInsertElement=u,l.willClearRender=u,l.destroy=function(){this._super.apply(this,arguments),this._currentState.destroy(this)},l.willDestroyElement=u,l.parentViewDidChange=u,l.tagName=null,l.init=function(){this._super.apply(this,arguments),this.elementId||""===this.tagName||(this.elementId=(0,t.guidFor)(this)),i.environment._ENABLE_DID_INIT_ATTRS_SUPPORT},l.__defineNonEnumerable=function(e){this[e.name]=e.descriptor.value},l.handleEvent=function(e,t){return this._currentState.handleEvent(this,e,t)},l))}),e("ember-views/system/action_manager",["exports"],function(e){"use strict"
function t(){}e.default=t,t.registeredActions={}}),e("ember-views/system/event_dispatcher",["exports","ember-utils","ember-debug","ember-metal","ember-runtime","ember-views/system/jquery","ember-views/system/action_manager","ember-views/compat/fallback-view-registry"],function(e,t,n,r,i,o,a,s){"use strict"
var l=void 0!==o.default
e.default=i.Object.extend({events:{touchstart:"touchStart",touchmove:"touchMove",touchend:"touchEnd",touchcancel:"touchCancel",keydown:"keyDown",keyup:"keyUp",keypress:"keyPress",mousedown:"mouseDown",mouseup:"mouseUp",contextmenu:"contextMenu",click:"click",dblclick:"doubleClick",mousemove:"mouseMove",focusin:"focusIn",focusout:"focusOut",mouseenter:"mouseEnter",mouseleave:"mouseLeave",submit:"submit",input:"input",change:"change",dragstart:"dragStart",drag:"drag",dragenter:"dragEnter",dragleave:"dragLeave",dragover:"dragOver",drop:"drop",dragend:"dragEnd"},rootElement:"body",init:function(){this._super(),this._eventHandlers=Object.create(null)},setup:function(e,n){var i=void 0,a=void 0,s=this._finalEvents=(0,t.assign)({},(0,r.get)(this,"events"),e);(0,r.isNone)(n)||(0,r.set)(this,"rootElement",n)
var u=(0,r.get)(this,"rootElement")
if(l){if((a=(0,o.default)(u)).addClass("ember-application"),!a.is(".ember-application"))throw new TypeError("Unable to add 'ember-application' class to root element ("+(a.selector||a[0].tagName)+"). Make sure you set rootElement to the body or an element in the body.")}else(a="string"!=typeof u?u:document.querySelector(u)).classList.add("ember-application")
var c=this._getViewRegistry()
for(i in s)s.hasOwnProperty(i)&&this.setupHandler(a,i,s[i],c)},setupHandler:function(e,t,n,r){var i,o,s
null!==n&&(l?(e.on(t+".ember",".ember-view",function(e){var t=r[this.id],i=!0
return t&&(i=t.handleEvent(n,e)),i}),e.on(t+".ember","[data-ember-action]",function(e){var t,r,i,o=e.currentTarget.attributes,s=[]
for(t=0;t<o.length;t++)-1!==(r=o.item(t)).name.lastIndexOf("data-ember-action-",0)&&(i=a.default.registeredActions[r.value])&&i.eventName===n&&-1===s.indexOf(i)&&(i.handler(e),s.push(i))})):(i=function(e,t){var i=r[e.id],o=!0
return i&&(o=i.handleEvent(n,t)),o},o=function(e,t){var r,i,o,s,l,u,c=e.getAttribute("data-ember-action"),f=a.default.registeredActions[c]
if(""===c)for(i=(r=e.attributes).length,f=[],o=0;o<i;o++)0===(s=r.item(o)).name.indexOf("data-ember-action-")&&(f=f.concat(a.default.registeredActions[s.value]))
if(f)for(l=0;l<f.length;l++)if((u=f[l])&&u.eventName===n)return u.handler(t)},s=this._eventHandlers[t]=function(e){var t=e.target
do{if(r[t.id]){if(!1===i(t,e)){e.preventDefault(),e.stopPropagation()
break}}else if(t.hasAttribute("data-ember-action")){o(t,e)
break}t=t.parentNode}while(t&&1===t.nodeType)},e.addEventListener(t,s)))},_getViewRegistry:function(){var e=(0,t.getOwner)(this)
return e&&e.lookup("-view-registry:main")||s.default},destroy:function(){var e=(0,r.get)(this,"rootElement"),t=void 0
if(t=e.nodeType?e:document.querySelector(e)){if(l)(0,o.default)(e).off(".ember","**")
else for(var n in this._eventHandlers)t.removeEventListener(n,this._eventHandlers[n])
return t.classList.remove("ember-application"),this._super.apply(this,arguments)}},toString:function(){return"(EventDispatcher)"}})}),e("ember-views/system/ext",["ember-metal"],function(e){"use strict"
e.run._addQueue("render","actions"),e.run._addQueue("afterRender","render")}),e("ember-views/system/jquery",["exports","ember-environment"],function(e,t){"use strict"
var n=void 0
t.environment.hasDOM&&(n=t.context.imports.jQuery)&&(n.event.addProp?n.event.addProp("dataTransfer"):["dragstart","drag","dragenter","dragleave","dragover","drop","dragend"].forEach(function(e){n.event.fixHooks[e]={props:["dataTransfer"]}})),e.default=n}),e("ember-views/system/lookup_partial",["exports","ember-debug"],function(e,t){"use strict"
function n(e){var t=e.split("/"),n=t[t.length-1]
return t[t.length-1]="_"+n,t.join("/")}e.default=function(e,r){if(null!=e){var i=function(e,n,r){if(!r)return
if(!e)throw new t.Error("Container was not found when looking up a views template. This is most likely due to manually instantiating an Ember.View. See: http://git.io/EKPpnA")
return e.lookup("template:"+n)||e.lookup("template:"+r)}(r,n(e),e)
return i}},e.hasPartial=function(e,r){if(!r)throw new t.Error("Container was not found when looking up a views template. This is most likely due to manually instantiating an Ember.View. See: http://git.io/EKPpnA")
return r.hasRegistration("template:"+n(e))||r.hasRegistration("template:"+e)}}),e("ember-views/system/utils",["exports","ember-utils"],function(e,t){"use strict"
function n(e){return""===e.tagName?(0,t.guidFor)(e):e.elementId||(0,t.guidFor)(e)}e.elMatches=void 0,e.isSimpleClick=function(e){var t=e.shiftKey||e.metaKey||e.altKey||e.ctrlKey,n=e.which>1
return!t&&!n},e.constructStyleDeprecationMessage=function(e){return'Binding style attributes may introduce cross-site scripting vulnerabilities; please ensure that values being bound are properly escaped. For more information, including how to disable this warning, see https://emberjs.com/deprecations/v1.x/#toc_binding-style-attributes. Style affected: "'+e+'"'},e.getRootViews=function(e){var t=e.lookup("-view-registry:main"),n=[]
return Object.keys(t).forEach(function(e){var r=t[e]
null===r.parentView&&n.push(r)}),n},e.getViewId=n,e.getViewElement=function(e){return e[r]},e.initViewElement=function(e){e[r]=null},e.setViewElement=function(e,t){return e[r]=t},e.getChildViews=function(e){return o(e,(0,t.getOwner)(e).lookup("-view-registry:main"))},e.initChildViews=function(e){e[i]=[]},e.addChildView=function(e,t){e[i].push(n(t))},e.collectChildViews=o,e.getViewBounds=a,e.getViewRange=s,e.getViewClientRects=function(e){return s(e).getClientRects()},e.getViewBoundingClientRect=function(e){return s(e).getBoundingClientRect()},e.matches=function(e,t){return l.call(e,t)}
var r=(0,t.symbol)("VIEW_ELEMENT"),i=(0,t.symbol)("CHILD_VIEW_IDS")
function o(e,t){var n=[],r=[]
return e[i].forEach(function(e){var i=t[e]
!i||i.isDestroying||i.isDestroyed||-1!==n.indexOf(e)||(n.push(e),r.push(i))}),e[i]=n,r}function a(e){return e.renderer.getBounds(e)}function s(e){var t=a(e),n=document.createRange()
return n.setStartBefore(t.firstNode),n.setEndAfter(t.lastNode),n}var l=e.elMatches="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector)}),e("ember-views/utils/lookup-component",["exports","ember-babel","container"],function(e,t,n){"use strict"
e.default=function(e,t,n){var r,o=e.lookup("component-lookup:main")
return n&&n.source&&((r=i(o,e,t,n)).component||r.layout)?r:i(o,e,t)}
var r=(0,t.taggedTemplateLiteralLoose)(["component:-default"],["component:-default"])
function i(e,t,i,o){var a=e.componentFor(i,t,o),s=e.layoutFor(i,t,o),l={layout:s,component:a}
return s&&!a&&(l.component=t.factoryFor((0,n.privatize)(r))),l}}),e("ember-views/views/core_view",["exports","ember-runtime","ember-views/system/utils","ember-views/views/states"],function(e,t,n,r){"use strict"
var i=t.FrameworkObject.extend(t.Evented,t.ActionHandler,{isView:!0,_states:(0,r.cloneStates)(r.states),init:function(){if(this._super.apply(this,arguments),this._state="preRender",this._currentState=this._states.preRender,(0,n.initViewElement)(this),!this.renderer)throw new Error("Cannot instantiate a component without a renderer. Please ensure that you are creating "+this+" with a proper container/registry.")},parentView:null,instrumentDetails:function(e){return e.object=this.toString(),e.containerKey=this._debugContainerKey,e.view=this,e},trigger:function(e){for(t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
this._super.apply(this,arguments)
var t,n,r,i=this[e]
if("function"==typeof i)return i.apply(this,n)},has:function(e){return"function"==typeof this[e]||this._super(e)}})
i.reopenClass({isViewFactory:!0}),e.default=i}),e("ember-views/views/states",["exports","ember-utils","ember-views/views/states/default","ember-views/views/states/pre_render","ember-views/views/states/has_element","ember-views/views/states/in_dom","ember-views/views/states/destroying"],function(e,t,n,r,i,o,a){"use strict"
e.states=void 0,e.cloneStates=function(e){var n={_default:{}}
for(var r in n.preRender=Object.create(n._default),n.destroying=Object.create(n._default),n.hasElement=Object.create(n._default),n.inDOM=Object.create(n.hasElement),e)e.hasOwnProperty(r)&&(0,t.assign)(n[r],e[r])
return n},e.states={_default:n.default,preRender:r.default,inDOM:o.default,hasElement:i.default,destroying:a.default}}),e("ember-views/views/states/default",["exports","ember-debug"],function(e,t){"use strict"
e.default={appendChild:function(){throw new t.EmberError("You can't use appendChild outside of the rendering process")},handleEvent:function(){return!0},rerender:function(){},destroy:function(){}}}),e("ember-views/views/states/destroying",["exports","ember-utils","ember-debug","ember-views/views/states/default"],function(e,t,n,r){"use strict"
var i=Object.create(r.default);(0,t.assign)(i,{appendChild:function(){throw new n.Error("You can't call appendChild on a view being destroyed")},rerender:function(){throw new n.Error("You can't call rerender on a view being destroyed")}}),e.default=i}),e("ember-views/views/states/has_element",["exports","ember-utils","ember-views/views/states/default","ember-metal"],function(e,t,n,r){"use strict"
var i=Object.create(n.default);(0,t.assign)(i,{rerender:function(e){e.renderer.rerender(e)},destroy:function(e){e.renderer.remove(e)},handleEvent:function(e,t,n){return!e.has(t)||(0,r.flaggedInstrument)("interaction."+t,{event:n,view:e},function(){return r.run.join(e,e.trigger,t,n)})}}),e.default=i}),e("ember-views/views/states/in_dom",["exports","ember-utils","ember-metal","ember-debug","ember-views/views/states/has_element"],function(e,t,n,r,i){"use strict"
var o=Object.create(i.default);(0,t.assign)(o,{enter:function(e){e.renderer.register(e)},exit:function(e){e.renderer.unregister(e)}}),e.default=o}),e("ember-views/views/states/pre_render",["exports","ember-views/views/states/default"],function(e,t){"use strict"
e.default=Object.create(t.default)}),e("ember/features",["exports","ember-environment","ember-utils"],function(e,t,n){"use strict"
e.FEATURES=e.DEFAULT_FEATURES=void 0
var r=e.DEFAULT_FEATURES={"features-stripped-test":!1,"ember-libraries-isregistered":!1,"ember-improved-instrumentation":!1,"ember-glimmer-named-arguments":!1,"ember-glimmer-remove-application-template-wrapper":!1,"ember-glimmer-template-only-components":!1,"ember-metal-es5-getters":!1,"ember-routing-router-service":!0,"ember-engines-mount-params":!0,"ember-module-unification":!1,"glimmer-custom-component-manager":!1,"descriptor-trap":!1,"mandatory-setter":!1,"ember-glimmer-detect-backtracking-rerender":!1}
e.FEATURES=(0,n.assign)(r,t.ENV.FEATURES)}),e("ember/index",["exports","require","ember-environment","node-module","ember-utils","container","ember-metal","ember/features","ember-debug","backburner","ember-console","ember-runtime","ember-glimmer","ember/version","ember-views","ember-routing","ember-application","ember-extension-support"],function(e,t,n,r,i,o,a,s,l,u,c,f,p,d,h,m,g,v){"use strict"
e.VERSION=void 0,a.default.getOwner=i.getOwner,a.default.setOwner=i.setOwner,a.default.generateGuid=i.generateGuid,a.default.GUID_KEY=i.GUID_KEY,a.default.guidFor=i.guidFor,a.default.inspect=i.inspect,a.default.makeArray=i.makeArray,a.default.canInvoke=i.canInvoke,a.default.tryInvoke=i.tryInvoke,a.default.wrap=i.wrap,a.default.applyStr=i.applyStr,a.default.uuid=i.uuid,a.default.assign=i.assign,a.default.Container=o.Container,a.default.Registry=o.Registry
var b,y=a.computed
y.alias=a.alias,a.default.computed=y,a.default.ComputedProperty=a.ComputedProperty,a.default.cacheFor=a.cacheFor,a.default.assert=l.assert,a.default.warn=l.warn,a.default.debug=l.debug,a.default.deprecate=l.deprecate,a.default.deprecateFunc=l.deprecateFunc,a.default.runInDebug=l.runInDebug,a.default.Debug={registerDeprecationHandler:l.registerDeprecationHandler,registerWarnHandler:l.registerWarnHandler},a.default.merge=a.merge,a.default.instrument=a.instrument,a.default.subscribe=a.instrumentationSubscribe,a.default.Instrumentation={instrument:a.instrument,subscribe:a.instrumentationSubscribe,unsubscribe:a.instrumentationUnsubscribe,reset:a.instrumentationReset},a.default.Error=l.Error,a.default.meta=a.meta,a.default.get=a.get,a.default.getWithDefault=a.getWithDefault,a.default._getPath=a._getPath,a.default.set=a.set,a.default.trySet=a.trySet,a.default.FEATURES=s.FEATURES,a.default.FEATURES.isEnabled=l.isFeatureEnabled,a.default._Cache=a.Cache,a.default.on=a.on,a.default.addListener=a.addListener,a.default.removeListener=a.removeListener,a.default.sendEvent=a.sendEvent,a.default.hasListeners=a.hasListeners
a.default.isNone=a.isNone,a.default.isEmpty=a.isEmpty,a.default.isBlank=a.isBlank,a.default.isPresent=a.isPresent,a.default.run=a.run,a.default._ObserverSet=a.ObserverSet,a.default.propertyWillChange=a.propertyWillChange,a.default.propertyDidChange=a.propertyDidChange,a.default.overrideChains=a.overrideChains,a.default.beginPropertyChanges=a.beginPropertyChanges,a.default.endPropertyChanges=a.endPropertyChanges,a.default.changeProperties=a.changeProperties,a.default.platform={defineProperty:!0,hasPropertyAccessors:!0},a.default.defineProperty=a.defineProperty,a.default.watchKey=a.watchKey,a.default.unwatchKey=a.unwatchKey,a.default.removeChainWatcher=a.removeChainWatcher,a.default._ChainNode=a.ChainNode,a.default.finishChains=a.finishChains,a.default.watchPath=a.watchPath,a.default.unwatchPath=a.unwatchPath,a.default.watch=a.watch,a.default.isWatching=a.isWatching,a.default.unwatch=a.unwatch,a.default.destroy=a.deleteMeta,a.default.libraries=a.libraries,a.default.OrderedSet=a.OrderedSet,a.default.Map=a.Map,a.default.MapWithDefault=a.MapWithDefault,a.default.getProperties=a.getProperties
a.default.setProperties=a.setProperties,a.default.expandProperties=a.expandProperties,a.default.NAME_KEY=i.NAME_KEY,a.default.addObserver=a.addObserver,a.default.removeObserver=a.removeObserver,n.ENV._ENABLE_PROPERTY_REQUIRED_SUPPORT&&(a.default.required=a.required),a.default.aliasMethod=a.aliasMethod,a.default.observer=a.observer,a.default.mixin=a.mixin,a.default.Mixin=a.Mixin,a.default.bind=a.bind,a.default.Binding=a.Binding,Object.defineProperty(a.default,"ENV",{get:function(){return n.ENV},enumerable:!1}),Object.defineProperty(a.default,"lookup",{get:function(){return n.context.lookup},set:function(e){n.context.lookup=e},enumerable:!1}),a.default.EXTEND_PROTOTYPES=n.ENV.EXTEND_PROTOTYPES,Object.defineProperty(a.default,"LOG_STACKTRACE_ON_DEPRECATION",{get:function(){return n.ENV.LOG_STACKTRACE_ON_DEPRECATION},set:function(e){n.ENV.LOG_STACKTRACE_ON_DEPRECATION=!!e},enumerable:!1}),Object.defineProperty(a.default,"LOG_VERSION",{get:function(){return n.ENV.LOG_VERSION},set:function(e){n.ENV.LOG_VERSION=!!e},enumerable:!1}),Object.defineProperty(a.default,"LOG_BINDINGS",{get:function(){return n.ENV.LOG_BINDINGS},set:function(e){n.ENV.LOG_BINDINGS=!!e},enumerable:!1}),Object.defineProperty(a.default,"onerror",{get:a.getOnerror,set:a.setOnerror,enumerable:!1}),Object.defineProperty(a.default,"testing",{get:l.isTesting,set:l.setTesting,enumerable:!1}),a.default._Backburner=u.default,a.default.Logger=c.default,a.default.String=f.String,a.default.Object=f.Object,a.default._RegistryProxyMixin=f.RegistryProxyMixin,a.default._ContainerProxyMixin=f.ContainerProxyMixin,a.default.compare=f.compare,a.default.copy=f.copy,a.default.isEqual=f.isEqual,a.default.inject=f.inject
a.default.Array=f.Array,a.default.Comparable=f.Comparable,a.default.Enumerable=f.Enumerable,a.default.ArrayProxy=f.ArrayProxy,a.default.ObjectProxy=f.ObjectProxy,a.default.ActionHandler=f.ActionHandler,a.default.CoreObject=f.CoreObject,a.default.NativeArray=f.NativeArray,a.default.Copyable=f.Copyable,a.default.MutableEnumerable=f.MutableEnumerable,a.default.MutableArray=f.MutableArray,a.default.TargetActionSupport=f.TargetActionSupport,a.default.Evented=f.Evented,a.default.PromiseProxyMixin=f.PromiseProxyMixin,a.default.Observable=f.Observable,a.default.typeOf=f.typeOf,a.default.isArray=f.isArray,a.default.Object=f.Object,a.default.onLoad=f.onLoad,a.default.runLoadHooks=f.runLoadHooks,a.default.Controller=f.Controller,a.default.ControllerMixin=f.ControllerMixin,a.default.Service=f.Service,a.default._ProxyMixin=f._ProxyMixin,a.default.RSVP=f.RSVP,a.default.Namespace=f.Namespace,y.empty=f.empty,y.notEmpty=f.notEmpty,y.none=f.none,y.not=f.not
y.bool=f.bool,y.match=f.match,y.equal=f.equal,y.gt=f.gt,y.gte=f.gte,y.lt=f.lt,y.lte=f.lte,y.oneWay=f.oneWay,y.reads=f.oneWay,y.readOnly=f.readOnly,y.deprecatingAlias=f.deprecatingAlias,y.and=f.and,y.or=f.or,y.any=f.any,y.sum=f.sum,y.min=f.min,y.max=f.max,y.map=f.map,y.sort=f.sort,y.setDiff=f.setDiff,y.mapBy=f.mapBy,y.filter=f.filter,y.filterBy=f.filterBy,y.uniq=f.uniq,y.uniqBy=f.uniqBy,y.union=f.union,y.intersect=f.intersect,y.collect=f.collect,Object.defineProperty(a.default,"STRINGS",{configurable:!1,get:f.getStrings,set:f.setStrings}),Object.defineProperty(a.default,"BOOTED",{configurable:!1,enumerable:!1,get:f.isNamespaceSearchDisabled,set:f.setNamespaceSearchDisabled})
a.default.Component=p.Component,p.Helper.helper=p.helper,a.default.Helper=p.Helper,a.default.Checkbox=p.Checkbox,a.default.TextField=p.TextField,a.default.TextArea=p.TextArea,a.default.LinkComponent=p.LinkComponent,n.ENV.EXTEND_PROTOTYPES.String&&(String.prototype.htmlSafe=function(){return(0,p.htmlSafe)(this)})
var E=a.default.Handlebars=a.default.Handlebars||{},T=a.default.HTMLBars=a.default.HTMLBars||{},_=E.Utils=E.Utils||{}
T.template=E.template=p.template,_.escapeExpression=p.escapeExpression,f.String.htmlSafe=p.htmlSafe,f.String.isHTMLSafe=p.isHTMLSafe,Object.defineProperty(a.default,"TEMPLATES",{get:p.getTemplates,set:p.setTemplates,configurable:!1,enumerable:!1}),e.VERSION=d.default,a.default.VERSION=d.default,a.libraries.registerCoreLibrary("Ember",d.default),a.default.$=h.jQuery,a.default.ViewTargetActionSupport=h.ViewTargetActionSupport,a.default.ViewUtils={isSimpleClick:h.isSimpleClick,getViewElement:h.getViewElement,getViewBounds:h.getViewBounds,getViewClientRects:h.getViewClientRects,getViewBoundingClientRect:h.getViewBoundingClientRect,getRootViews:h.getRootViews,getChildViews:h.getChildViews},a.default.TextSupport=h.TextSupport,a.default.ComponentLookup=h.ComponentLookup,a.default.EventDispatcher=h.EventDispatcher,a.default.Location=m.Location,a.default.AutoLocation=m.AutoLocation,a.default.HashLocation=m.HashLocation,a.default.HistoryLocation=m.HistoryLocation,a.default.NoneLocation=m.NoneLocation,a.default.controllerFor=m.controllerFor,a.default.generateControllerFactory=m.generateControllerFactory,a.default.generateController=m.generateController,a.default.RouterDSL=m.RouterDSL,a.default.Router=m.Router,a.default.Route=m.Route,a.default.Application=g.Application,a.default.ApplicationInstance=g.ApplicationInstance,a.default.Engine=g.Engine,a.default.EngineInstance=g.EngineInstance,a.default.DefaultResolver=a.default.Resolver=g.Resolver;(0,f.runLoadHooks)("Ember.Application",g.Application),a.default.DataAdapter=v.DataAdapter,a.default.ContainerDebugAdapter=v.ContainerDebugAdapter,(0,t.has)("ember-template-compiler")&&(0,t.default)("ember-template-compiler"),(0,t.has)("ember-testing")&&(b=(0,t.default)("ember-testing"),a.default.Test=b.Test,a.default.Test.Adapter=b.Adapter,a.default.Test.QUnitAdapter=b.QUnitAdapter,a.default.setupForTesting=b.setupForTesting),(0,f.runLoadHooks)("Ember"),e.default=a.default,r.IS_NODE?r.module.exports=a.default:n.context.exports.Ember=n.context.exports.Em=a.default}),e("ember/version",["exports"],function(e){"use strict"
e.default="3.0.0"})
e("node-module",["exports"],function(e){var t="object"==typeof module&&"function"==typeof module.require
t?(e.require=module.require,e.module=module,e.IS_NODE=t):(e.require=null,e.module=null,e.IS_NODE=t)}),e("route-recognizer",["exports"],function(e){"use strict"
var t=Object.create
function n(){var e=t(null)
return e.__=void 0,delete e.__,e}var r=function(e,t,n){this.path=e,this.matcher=t,this.delegate=n}
r.prototype.to=function(e,t){var n=this.delegate
if(n&&n.willAddRoute&&(e=n.willAddRoute(this.matcher.target,e)),this.matcher.add(this.path,e),t){if(0===t.length)throw new Error("You must have an argument in the function passed to `to`")
this.matcher.addChild(this.path,e,t,this.delegate)}}
var i=function(e){this.routes=n(),this.children=n(),this.target=e}
function o(e,t,n){return function(i,a){var s=e+i
if(!a)return new r(s,t,n)
a(o(s,t,n))}}function a(e,t,n){var r,i=0
for(r=0;r<e.length;r++)i+=e[r].path.length
var o={path:t=t.substr(i),handler:n}
e.push(o)}function s(e){return e.split("/").map(u).join("/")}i.prototype.add=function(e,t){this.routes[e]=t},i.prototype.addChild=function(e,t,n,r){var a=new i(t)
this.children[e]=a
var s=o(e,a,r)
r&&r.contextEntered&&r.contextEntered(t,s),n(s)}
var l=/%|\//g
function u(e){return e.length<3||-1===e.indexOf("%")?e:decodeURIComponent(e).replace(l,encodeURIComponent)}var c=/%(?:2(?:4|6|B|C)|3(?:B|D|A)|40)/g
function f(e){return encodeURIComponent(e).replace(c,decodeURIComponent)}var p=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g,d=Array.isArray,h=Object.prototype.hasOwnProperty
function m(e,t){if("object"!=typeof e||null===e)throw new Error("You must pass an object as the second argument to `generate`.")
if(!h.call(e,t))throw new Error("You must provide param `"+t+"` to `generate`.")
var n=e[t],r="string"==typeof n?n:""+n
if(0===r.length)throw new Error("You must provide a param `"+t+"`.")
return r}var g=[]
g[0]=function(e,t){var n,r,i=t,o=e.value
for(n=0;n<o.length;n++)r=o.charCodeAt(n),i=i.put(r,!1,!1)
return i},g[1]=function(e,t){return t.put(47,!0,!0)},g[2]=function(e,t){return t.put(-1,!1,!0)},g[4]=function(e,t){return t}
var v=[]
v[0]=function(e){return e.value.replace(p,"\\$1")},v[1]=function(){return"([^/]+)"},v[2]=function(){return"(.+)"},v[4]=function(){return""}
var b=[]
b[0]=function(e){return e.value},b[1]=function(e,t){var n=m(t,e.value)
return x.ENCODE_AND_DECODE_PATH_SEGMENTS?f(n):n},b[2]=function(e,t){return m(t,e.value)},b[4]=function(){return""}
var y=Object.freeze({}),E=Object.freeze([])
function T(e,t,n){t.length>0&&47===t.charCodeAt(0)&&(t=t.substr(1))
var r,i,o,a,s=t.split("/"),l=void 0,c=void 0
for(r=0;r<s.length;r++)o=0,a=0,12&(o=2<<(a=""===(i=s[r])?4:58===i.charCodeAt(0)?1:42===i.charCodeAt(0)?2:0))&&(i=i.slice(1),(l=l||[]).push(i),(c=c||[]).push(0!=(4&o))),14&o&&n[a]++,e.push({type:a,value:u(i)})
return{names:l||E,shouldDecodes:c||E}}function _(e,t,n){return e.char===t&&e.negate===n}var A=function(e,t,n,r,i){this.states=e,this.id=t,this.char=n,this.negate=r,this.nextStates=i?t:null,this.pattern="",this._regex=void 0,this.handlers=void 0,this.types=void 0}
function w(e,t){return e.negate?e.char!==t&&-1!==e.char:e.char===t||-1===e.char}function C(e,t){var n,r,i,o=[]
for(n=0,r=e.length;n<r;n++)i=e[n],o=o.concat(i.match(t))
return o}A.prototype.regex=function(){return this._regex||(this._regex=new RegExp(this.pattern)),this._regex},A.prototype.get=function(e,t){var n,r,i,o=this.nextStates
if(null!==o)if(d(o)){for(n=0;n<o.length;n++)if(_(r=this.states[o[n]],e,t))return r}else if(_(i=this.states[o],e,t))return i},A.prototype.put=function(e,t,n){var r
if(r=this.get(e,t))return r
var i=this.states
return r=new A(i,i.length,e,t,n),i[i.length]=r,null==this.nextStates?this.nextStates=r.id:d(this.nextStates)?this.nextStates.push(r.id):this.nextStates=[this.nextStates,r.id],r},A.prototype.match=function(e){var t,n,r,i=this.nextStates
if(!i)return[]
var o=[]
if(d(i))for(t=0;t<i.length;t++)w(n=this.states[i[t]],e)&&o.push(n)
else w(r=this.states[i],e)&&o.push(r)
return o}
var S=function(e){this.length=0,this.queryParams=e||{}}
function O(e){var t
e=e.replace(/\+/gm,"%20")
try{t=decodeURIComponent(e)}catch(e){t=""}return t}S.prototype.splice=Array.prototype.splice,S.prototype.slice=Array.prototype.slice,S.prototype.push=Array.prototype.push
var x=function(){this.names=n()
var e=[],t=new A(e,0,-1,!0,!1)
e[0]=t,this.states=e,this.rootState=t}
x.prototype.add=function(e,t){var n,r,i,o,a,s,l,u=this.rootState,c="^",f=[0,0,0],p=new Array(e.length),d=[],h=!0,m=0
for(n=0;n<e.length;n++){for(o=(i=T(d,(r=e[n]).path,f)).names,a=i.shouldDecodes;m<d.length;m++)4!==(s=d[m]).type&&(h=!1,u=u.put(47,!1,!1),c+="/",u=g[s.type](s,u),c+=v[s.type](s))
p[n]={handler:r.handler,names:o,shouldDecodes:a}}h&&(u=u.put(47,!1,!1),c+="/"),u.handlers=p,u.pattern=c+"$",u.types=f,"object"==typeof t&&null!==t&&t.as&&(l=t.as),l&&(this.names[l]={segments:d,handlers:p})},x.prototype.handlersFor=function(e){var t,n,r=this.names[e]
if(!r)throw new Error("There is no route named "+e)
var i=new Array(r.handlers.length)
for(t=0;t<r.handlers.length;t++)n=r.handlers[t],i[t]=n
return i},x.prototype.hasRoute=function(e){return!!this.names[e]},x.prototype.generate=function(e,t){var n,r,i=this.names[e],o=""
if(!i)throw new Error("There is no route named "+e)
var a=i.segments
for(n=0;n<a.length;n++)4!==(r=a[n]).type&&(o+="/",o+=b[r.type](r,t))
return"/"!==o.charAt(0)&&(o="/"+o),t&&t.queryParams&&(o+=this.generateQueryString(t.queryParams)),o},x.prototype.generateQueryString=function(e){var t,n,r,i,o,a,s=[],l=Object.keys(e)
for(l.sort(),t=0;t<l.length;t++)if(null!=(r=e[n=l[t]]))if(i=encodeURIComponent(n),d(r))for(o=0;o<r.length;o++)a=n+"[]="+encodeURIComponent(r[o]),s.push(a)
else i+="="+encodeURIComponent(r),s.push(i)
return 0===s.length?"":"?"+s.join("&")},x.prototype.parseQueryString=function(e){var t,n,r,i,o,a,s=e.split("&"),l={}
for(t=0;t<s.length;t++)i=(r=O((n=s[t].split("="))[0])).length,o=!1,a=void 0,1===n.length?a="true":(i>2&&"[]"===r.slice(i-2)&&(o=!0,l[r=r.slice(0,i-2)]||(l[r]=[])),a=n[1]?O(n[1]):""),o?l[r].push(a):l[r]=a
return l},x.prototype.recognize=function(e){var t,n,r,i,o=[this.rootState],a={},l=!1,u=e.indexOf("#");-1!==u&&(e=e.substr(0,u))
var c=e.indexOf("?");-1!==c&&(n=e.substr(c+1,e.length),e=e.substr(0,c),a=this.parseQueryString(n)),"/"!==e.charAt(0)&&(e="/"+e)
var f=e
x.ENCODE_AND_DECODE_PATH_SEGMENTS?e=s(e):(e=decodeURI(e),f=decodeURI(f))
var p=e.length
for(p>1&&"/"===e.charAt(p-1)&&(e=e.substr(0,p-1),f=f.substr(0,f.length-1),l=!0),r=0;r<e.length&&(o=C(o,e.charCodeAt(r))).length;r++);var d=[]
for(i=0;i<o.length;i++)o[i].handlers&&d.push(o[i])
o=function(e){return e.sort(function(e,t){var n=e.types||[0,0,0],r=n[0],i=n[1],o=n[2],a=t.types||[0,0,0],s=a[0],l=a[1],u=a[2]
if(o!==u)return o-u
if(o){if(r!==s)return s-r
if(i!==l)return l-i}return i!==l?i-l:r!==s?s-r:0})}(d)
var h=d[0]
return h&&h.handlers&&(l&&h.pattern&&"(.+)$"===h.pattern.slice(-5)&&(f+="/"),t=function(e,t,n){var r,i,o,a,s,l,u,c,f,p=e.handlers,d=e.regex()
if(!d||!p)throw new Error("state not initialized")
var h=t.match(d),m=1,g=new S(n)
for(g.length=p.length,r=0;r<p.length;r++){if(o=(i=p[r]).names,a=i.shouldDecodes,s=y,l=!1,o!==E&&a!==E)for(u=0;u<o.length;u++)l=!0,c=o[u],f=h&&h[m++],s===y&&(s={}),x.ENCODE_AND_DECODE_PATH_SEGMENTS&&a[u]?s[c]=f&&decodeURIComponent(f):s[c]=f
g[r]={handler:i.handler,params:s,isDynamic:l}}return g}(h,f,a)),t},x.VERSION="0.3.3",x.ENCODE_AND_DECODE_PATH_SEGMENTS=!0,x.Normalizer={normalizeSegment:u,normalizePath:s,encodePathSegment:f},x.prototype.map=function(e,t){var n=new i
e(o("",n,this.delegate)),function e(t,n,r,i){var o,s,l,u,c=n.routes,f=Object.keys(c)
for(o=0;o<f.length;o++)s=f[o],a(l=t.slice(),s,c[s]),(u=n.children[s])?e(l,u,r,i):r.call(i,l)}([],n,function(e){t?t(this,e):this.add(e)},this)},e.default=x}),e("router",["exports","ember-babel","route-recognizer","rsvp"],function(e,t,n,r){"use strict"
e.Transition=void 0
var i=Array.prototype.slice,o=Object.prototype.hasOwnProperty
function a(e,t){for(var n in t)o.call(t,n)&&(e[n]=t[n])}function s(e){var t=e&&e.length,n=void 0
return t&&t>0&&e[t-1]&&e[t-1].hasOwnProperty("queryParams")?(n=e[t-1].queryParams,[i.call(e,0,t-1),n]):[e,null]}function l(e){var t,n
for(var r in e)if("number"==typeof e[r])e[r]=""+e[r]
else if(Array.isArray(e[r]))for(t=0,n=e[r].length;t<n;t++)e[r][t]=""+e[r][t]}function u(e,t,n){e.log&&(3===arguments.length?e.log("Transition #"+t+": "+n):(n=t,e.log(n)))}function c(e){return"string"==typeof e||e instanceof String||"number"==typeof e||e instanceof Number}function f(e,t){var n,r
for(n=0,r=e.length;n<r&&!1!==t(e[n]);n++);}function p(e,t,n,r){if(e.triggerEvent)e.triggerEvent(t,n,r)
else{var i,o,a,s=r.shift()
if(!t){if(n)return
throw new Error("Could not trigger event '"+s+"'. There are no active handlers")}var l=!1
for(i=t.length-1;i>=0;i--)if(a=(o=t[i]).handler){if(a.events&&a.events[s]){if(!0!==a.events[s].apply(a,r))return
l=!0}}else o.handlerPromise.then(u.bind(null,s,r))
if("error"===s&&"UnrecognizedURLError"===r[0].name)throw r[0]
if(!l&&!n)throw new Error("Nothing handled the event '"+s+"'.")}function u(e,t,n){n.events[e].apply(n,t)}}function d(e,t){var n,r,i=void 0,s={all:{},changed:{},removed:{}}
a(s.all,t)
var u=!1
for(i in l(e),l(t),e)o.call(e,i)&&(o.call(t,i)||(u=!0,s.removed[i]=e[i]))
for(i in t)if(o.call(t,i))if(Array.isArray(e[i])&&Array.isArray(t[i]))if(e[i].length!==t[i].length)s.changed[i]=t[i],u=!0
else for(n=0,r=e[i].length;n<r;n++)e[i][n]!==t[i][n]&&(s.changed[i]=t[i],u=!0)
else e[i]!==t[i]&&(s.changed[i]=t[i],u=!0)
return u&&s}function h(e){return"Router: "+e}function m(e,t){if(e){var n="_"+t
return e[n]&&n||e[t]&&t}}function g(e,t,n,r){var i=m(e,t)
return i&&e[i].call(e,n,r)}function v(){this.handlerInfos=[],this.queryParams={},this.params={}}function b(e){if(!(this instanceof b))return new b(e)
var t=Error.call(this,e)
Error.captureStackTrace?Error.captureStackTrace(this,b):this.stack=t.stack,this.description=t.description,this.fileName=t.fileName,this.lineNumber=t.lineNumber,this.message=t.message||"TransitionAborted",this.name="TransitionAborted",this.number=t.number,this.code=t.code}v.prototype={promiseLabel:function(e){var t=""
return f(this.handlerInfos,function(e){""!==t&&(t+="."),t+=e.name}),h("'"+t+"': "+e)},resolve:function(e,t){var n=this.params
f(this.handlerInfos,function(e){n[e.name]=e.params||{}}),(t=t||{}).resolveIndex=0
var i=this,o=!1
return r.Promise.resolve(null,this.promiseLabel("Start transition")).then(l,null,this.promiseLabel("Resolve handler")).catch(function(e){var n=i.handlerInfos,a=t.resolveIndex>=n.length?n.length-1:t.resolveIndex
return r.Promise.reject({error:e,handlerWithError:i.handlerInfos[a].handler,wasAborted:o,state:i})},this.promiseLabel("Handle error"))
function a(){return r.Promise.resolve(e(),i.promiseLabel("Check if should continue")).catch(function(e){return o=!0,r.Promise.reject(e)},i.promiseLabel("Handle abort"))}function s(e){var n=i.handlerInfos[t.resolveIndex].isResolved
return i.handlerInfos[t.resolveIndex++]=e,n||g(e.handler,"redirect",e.context,t),a().then(l,null,i.promiseLabel("Resolve handler"))}function l(){return t.resolveIndex===i.handlerInfos.length?{error:null,state:i}:i.handlerInfos[t.resolveIndex].resolve(a,t).then(s,null,i.promiseLabel("Proceed"))}}},b.prototype=Object.create(Error.prototype)
var y=function(){function e(e,t,n,i,o){var a,s,l,u=this
if(this.state=n||e.state,this.intent=t,this.router=e,this.data=this.intent&&this.intent.data||{},this.resolvedModels={},this.queryParams={},this.promise=void 0,this.error=void 0,this.params=void 0,this.handlerInfos=void 0,this.targetName=void 0,this.pivotHandler=void 0,this.sequence=void 0,this.isAborted=!1,this.isActive=!0,this.urlMethod="update",this.resolveIndex=0,this.queryParamsOnly=!1,this.isTransition=!0,i)return this.promise=r.Promise.reject(i),void(this.error=i)
if(this.isCausedByAbortingTransition=!!o,this.isCausedByInitialTransition=o&&(o.isCausedByInitialTransition||0===o.sequence),n){for(this.params=n.params,this.queryParams=n.queryParams,this.handlerInfos=n.handlerInfos,(a=n.handlerInfos.length)&&(this.targetName=n.handlerInfos[a-1].name),s=0;s<a&&(l=n.handlerInfos[s]).isResolved;++s)this.pivotHandler=l.handler
this.sequence=e.currentSequence++,this.promise=n.resolve(function(){if(u.isAborted)return r.Promise.reject(void 0,h("Transition aborted - reject"))},this).catch(function(e){return e.wasAborted||u.isAborted?r.Promise.reject(E(u)):(u.trigger("error",e.error,u,e.handlerWithError),u.abort(),r.Promise.reject(e.error))},h("Handle Abort"))}else this.promise=r.Promise.resolve(this.state),this.params={}}return e.prototype.isExiting=function(e){var t,n,r,i=this.handlerInfos
for(t=0,n=i.length;t<n;++t)if((r=i[t]).name===e||r.handler===e)return!1
return!0},e.prototype.then=function(e,t,n){return this.promise.then(e,t,n)},e.prototype.catch=function(e,t){return this.promise.catch(e,t)},e.prototype.finally=function(e,t){return this.promise.finally(e,t)},e.prototype.abort=function(){return this.isAborted?this:(u(this.router,this.sequence,this.targetName+": transition was aborted"),this.intent.preTransitionState=this.router.state,this.isAborted=!0,this.isActive=!1,this.router.activeTransition=null,this)},e.prototype.retry=function(){this.abort()
var e=this.router.transitionByIntent(this.intent,!1)
return null!==this.urlMethod&&e.method(this.urlMethod),e},e.prototype.method=function(e){return this.urlMethod=e,this},e.prototype.trigger=function(e){var t=i.call(arguments)
"boolean"==typeof e?t.shift():e=!1,p(this.router,this.state.handlerInfos.slice(0,this.resolveIndex+1),e,t)},e.prototype.followRedirects=function(){var e=this.router
return this.promise.catch(function(t){return e.activeTransition?e.activeTransition.followRedirects():r.Promise.reject(t)})},e.prototype.toString=function(){return"Transition (sequence "+this.sequence+")"},e.prototype.log=function(e){u(this.router,this.sequence,e)},e}()
function E(e){return u(e.router,e.sequence,"detected abort."),new b}y.prototype.send=y.prototype.trigger
var T=function(){this.data=this.data||{}},_=Object.freeze({}),A=function(){function e(e){var t=e||{}
for(var n in this._handler=_,this._handlerPromise=null,this.factory=null,this.name=t.name,t)"handler"===n?this._processHandler(t.handler):this[n]=t[n]}return e.prototype.getHandler=function(){},e.prototype.fetchHandler=function(){var e=this.getHandler(this.name)
return this._processHandler(e)},e.prototype._processHandler=function(e){var t,n=this
return this.handlerPromise=r.Promise.resolve(e),("object"==typeof(t=e)&&null!==t||"function"==typeof t)&&"function"==typeof t.then?(this.handlerPromise=this.handlerPromise.then(function(e){return n.updateHandler(e)}),this.handler=void 0):e?this.updateHandler(e):void 0},e.prototype.log=function(e,t){e.log&&e.log(this.name+": "+t)},e.prototype.promiseLabel=function(e){return h("'"+this.name+"' "+e)},e.prototype.getUnresolved=function(){return this},e.prototype.serialize=function(){return this.params||{}},e.prototype.updateHandler=function(e){return e._handlerName=this.name,this.handler=e},e.prototype.resolve=function(e,t){var n=this.checkForAbort.bind(this,e),i=this.runBeforeModelHook.bind(this,t),o=this.getModel.bind(this,t),a=this.runAfterModelHook.bind(this,t),s=this.becomeResolved.bind(this,t),l=this
return r.Promise.resolve(this.handlerPromise,this.promiseLabel("Start handler")).then(function(e){return r.Promise.resolve(e).then(n,null,l.promiseLabel("Check for abort")).then(i,null,l.promiseLabel("Before model")).then(n,null,l.promiseLabel("Check if aborted during 'beforeModel' hook")).then(o,null,l.promiseLabel("Model")).then(n,null,l.promiseLabel("Check if aborted in 'model' hook")).then(a,null,l.promiseLabel("After model")).then(n,null,l.promiseLabel("Check if aborted in 'afterModel' hook")).then(s,null,l.promiseLabel("Become resolved"))},function(e){throw e})},e.prototype.runBeforeModelHook=function(e){return e.trigger&&e.trigger(!0,"willResolveModel",e,this.handler),this.runSharedModelHook(e,"beforeModel",[])},e.prototype.runAfterModelHook=function(e,t){var n=this.name
return this.stashResolvedModel(e,t),this.runSharedModelHook(e,"afterModel",[t]).then(function(){return e.resolvedModels[n]},null,this.promiseLabel("Ignore fulfillment value and return model value"))},e.prototype.runSharedModelHook=function(e,t,n){this.log(e,"calling "+t+" hook"),this.queryParams&&n.push(this.queryParams),n.push(e)
var i=function(e,t,n){var r=m(e,t)
if(r)return 0===n.length?e[r].call(e):1===n.length?e[r].call(e,n[0]):2===n.length?e[r].call(e,n[0],n[1]):e[r].apply(e,n)}(this.handler,t,n)
return i&&i.isTransition&&(i=null),r.Promise.resolve(i,this.promiseLabel("Resolve value returned from one of the model hooks"))},e.prototype.getModel=function(){},e.prototype.checkForAbort=function(e,t){return r.Promise.resolve(e(),this.promiseLabel("Check for abort")).then(function(){return t},null,this.promiseLabel("Ignore fulfillment value and continue"))},e.prototype.stashResolvedModel=function(e,t){e.resolvedModels=e.resolvedModels||{},e.resolvedModels[this.name]=t},e.prototype.becomeResolved=function(e,t){var n=this.serialize(t)
return e&&(this.stashResolvedModel(e,t),e.params=e.params||{},e.params[this.name]=n),this.factory("resolved",{context:t,name:this.name,handler:this.handler,params:n})},e.prototype.shouldSupercede=function(e){if(!e)return!0
var t=e.context===this.context
return e.name!==this.name||this.hasOwnProperty("context")&&!t||this.hasOwnProperty("params")&&!function(e,t){if(!e^!t)return!1
if(!e)return!0
for(var n in e)if(e.hasOwnProperty(n)&&e[n]!==t[n])return!1
return!0}(this.params,e.params)},(0,t.createClass)(e,[{key:"handler",get:function(){return this._handler!==_?this._handler:this.fetchHandler()},set:function(e){return this._handler=e}},{key:"handlerPromise",get:function(){return null!==this._handlerPromise?this._handlerPromise:(this.fetchHandler(),this._handlerPromise)},set:function(e){return this._handlerPromise=e,e}}]),e}()
A.prototype.context=null
var w=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.isResolved=!0,r}return(0,t.inherits)(n,e),n.prototype.resolve=function(e,t){return t&&t.resolvedModels&&(t.resolvedModels[this.name]=this.context),r.Promise.resolve(this,this.promiseLabel("Resolve"))},n.prototype.getUnresolved=function(){return this.factory("param",{name:this.name,handler:this.handler,params:this.params})},n}(A),C=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.names=r.names||[],r}return(0,t.inherits)(n,e),n.prototype.getModel=function(e){return this.log(e,this.name+": resolving provided model"),r.Promise.resolve(this.context)},n.prototype.serialize=function(e){var t=e||this.context,n=this.names,r={}
if(c(t))return r[n[0]]=t,r
if(this.serializer)return this.serializer.call(null,t,n)
if(this.handler&&this.handler.serialize)return this.handler.serialize(t,n)
if(1===n.length){var i=n[0]
return/_id$/.test(i)?r[i]=t.id:r[i]=t,r}},n}(A),S=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.params=r.params||{},r}return(0,t.inherits)(n,e),n.prototype.getModel=function(e){var t=this.params
e&&e.queryParams&&(a(t={},this.params),t.queryParams=e.queryParams)
var n=this.handler,r=m(n,"deserialize")||m(n,"model")
return this.runSharedModelHook(e,r,[t])},n}(A)
function O(e,t){var n=new(0,O.klasses[e])(t||{})
return n.factory=O,n}O.klasses={resolved:w,param:S,object:C}
var x=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.name=n.name,r.pivotHandler=n.pivotHandler,r.contexts=n.contexts||[],r.queryParams=n.queryParams,r}return(0,t.inherits)(n,e),n.prototype.applyToState=function(e,t,n,r,i){var o=s([this.name].concat(this.contexts))[0],a=t.handlersFor(o[0]),l=a[a.length-1].handler
return this.applyToHandlers(e,a,n,l,r,null,i)},n.prototype.applyToHandlers=function(e,t,n,r,i,o,s){var l,u,c,f,p,d,h,m,g,b=new v,y=this.contexts.slice(0),E=t.length
if(this.pivotHandler)for(l=0,u=t.length;l<u;++l)if(t[l].handler===this.pivotHandler._handlerName){E=l
break}for(l=t.length-1;l>=0;--l)f=(c=t[l]).handler,p=e.handlerInfos[l],d=null,c.names.length>0?l>=E?d=this.createParamHandlerInfo(f,n,c.names,y,p):(h=s(f),d=this.getHandlerInfoForDynamicSegment(f,n,c.names,y,p,r,l,h)):d=this.createParamHandlerInfo(f,n,c.names,y,p),o&&(d=d.becomeResolved(null,d.context),m=p&&p.context,c.names.length>0&&d.context===m&&(d.params=p&&p.params),d.context=m),g=p,(l>=E||d.shouldSupercede(p))&&(E=Math.min(l,E),g=d),i&&!o&&(g=g.becomeResolved(null,g.context)),b.handlerInfos.unshift(g)
if(y.length>0)throw new Error("More context objects were passed than there are dynamic segments for the route: "+r)
return i||this.invalidateChildren(b.handlerInfos,E),a(b.queryParams,this.queryParams||{}),b},n.prototype.invalidateChildren=function(e,t){var n,r,i
for(n=t,r=e.length;n<r;++n)i=e[n],e[n]=i.getUnresolved()},n.prototype.getHandlerInfoForDynamicSegment=function(e,t,n,r,i,o,a,s){var l,u
if(r.length>0){if(c(l=r[r.length-1]))return this.createParamHandlerInfo(e,t,n,r,i)
r.pop()}else{if(i&&i.name===e)return i
if(!this.preTransitionState)return i
l=(u=this.preTransitionState.handlerInfos[a])&&u.context}return O("object",{name:e,getHandler:t,serializer:s,context:l,names:n})},n.prototype.createParamHandlerInfo=function(e,t,n,r,i){for(var o,a,s,l={},u=n.length;u--;)if(o=i&&e===i.name&&i.params||{},a=r[r.length-1],s=n[u],c(a))l[s]=""+r.pop()
else{if(!o.hasOwnProperty(s))throw new Error("You didn't provide enough string/numeric parameters to satisfy all of the dynamic segments for route "+e)
l[s]=o[s]}return O("param",{name:e,getHandler:t,params:l})},n}(T)
function R(e){if(!(this instanceof R))return new R(e)
var t=Error.call(this,e)
Error.captureStackTrace?Error.captureStackTrace(this,R):this.stack=t.stack,this.description=t.description,this.fileName=t.fileName,this.lineNumber=t.lineNumber,this.message=t.message||"UnrecognizedURL",this.name="UnrecognizedURLError",this.number=t.number,this.code=t.code}R.prototype=Object.create(Error.prototype)
var N=function(e){function n(n){var r=(0,t.possibleConstructorReturn)(this,e.call(this,n))
return r.url=n.url,r}return(0,t.inherits)(n,e),n.prototype.applyToState=function(e,t,n){var r,i,o,s,l,u,c=new v,f=t.recognize(this.url)
if(!f)throw new R(this.url)
var p=!1,d=this.url
function h(e){if(e&&e.inaccessibleByURL)throw new R(d)
return e}for(l=0,u=f.length;l<u;++l)(o=(i=O("param",{name:(r=f[l]).handler,getHandler:n,params:r.params})).handler)?h(o):i.handlerPromise=i.handlerPromise.then(h),s=e.handlerInfos[l],p||i.shouldSupercede(s)?(p=!0,c.handlerInfos[l]=i):c.handlerInfos[l]=s
return a(c.queryParams,f.queryParams),c},n}(T),L=Array.prototype.pop
function I(e){var t=e||{}
this.getHandler=t.getHandler||this.getHandler,this.getSerializer=t.getSerializer||this.getSerializer,this.updateURL=t.updateURL||this.updateURL,this.replaceURL=t.replaceURL||this.replaceURL,this.didTransition=t.didTransition||this.didTransition,this.willTransition=t.willTransition||this.willTransition,this.delegate=t.delegate||this.delegate,this.triggerEvent=t.triggerEvent||this.triggerEvent,this.log=t.log||this.log,this.dslCallBacks=[],this.state=void 0,this.activeTransition=void 0,this._changedQueryParams=void 0,this.oldState=void 0,this.currentHandlerInfos=void 0,this.currentSequence=0,this.recognizer=new n.default,this.reset()}function k(e,t){var n,i=!!this.activeTransition,o=i?this.activeTransition.state:this.state,a=e.applyToState(o,this.recognizer,this.getHandler,t,this.getSerializer),s=d(o.queryParams,a.queryParams)
return B(a.handlerInfos,o.handlerInfos)?s&&(n=this.queryParamsTransition(s,i,o,a))?(n.queryParamsOnly=!0,n):this.activeTransition||new y(this):t?void P(this,a):(n=new y(this,e,a,void 0,this.activeTransition),function(e,t){var n,r
if(e.length!==t.length)return!1
for(n=0,r=e.length;n<r;++n){if(e[n].name!==t[n].name)return!1
if(!H(e[n].params,t[n].params))return!1}return!0}(a.handlerInfos,o.handlerInfos)&&(n.queryParamsOnly=!0),this.activeTransition&&this.activeTransition.abort(),this.activeTransition=n,n.promise=n.promise.then(function(e){return function(e,t){var n,i,o
try{return u(e.router,e.sequence,"Resolved all models on destination route; finalizing transition."),n=e.router,i=t.handlerInfos,P(n,t,e),e.isAborted?(n.state.handlerInfos=n.currentHandlerInfos,r.Promise.reject(E(e))):(F(e,t,e.intent.url),e.isActive=!1,n.activeTransition=null,p(n,n.currentHandlerInfos,!0,["didTransition"]),n.didTransition&&n.didTransition(n.currentHandlerInfos),u(n,e.sequence,"TRANSITION COMPLETE."),i[i.length-1].handler)}catch(t){throw t instanceof b||(o=e.state.handlerInfos,e.trigger(!0,"error",t,e,o[o.length-1].handler),e.abort()),t}}(n,e.state)},null,h("Settle transition promise when transition is finalized")),i||function(e,t,n){var r,i,o,a,s=e.state.handlerInfos,l=[]
for(i=s.length,r=0;r<i&&(o=s[r],(a=t.handlerInfos[r])&&o.name===a.name);r++)a.isResolved||l.push(o)
p(e,s,!0,["willTransition",n]),e.willTransition&&e.willTransition(s,t.handlerInfos,n)}(this,a,n),D(this,a,s),n)}function D(e,t,n){n&&(e._changedQueryParams=n.all,p(e,t.handlerInfos,!0,["queryParamsDidChange",n.changed,n.all,n.removed]),e._changedQueryParams=null)}function P(e,t,n){var r,i,o,a=function(e,t){var n,r,i,o,a,s=e.handlerInfos,l=t.handlerInfos,u={updatedContext:[],exited:[],entered:[],unchanged:[],reset:void 0},c=!1
for(o=0,a=l.length;o<a;o++)n=s[o],r=l[o],n&&n.handler===r.handler||(i=!0),i?(u.entered.push(r),n&&u.exited.unshift(n)):c||n.context!==r.context?(c=!0,u.updatedContext.push(r)):u.unchanged.push(n)
for(o=l.length,a=s.length;o<a;o++)u.exited.unshift(s[o])
return u.reset=u.updatedContext.slice(),u.reset.reverse(),u}(e.state,t)
for(r=0,i=a.exited.length;r<i;r++)delete(o=a.exited[r].handler).context,g(o,"reset",!0,n),g(o,"exit",n)
var s=e.oldState=e.state
e.state=t
var l=e.currentHandlerInfos=a.unchanged.slice()
try{for(r=0,i=a.reset.length;r<i;r++)g(o=a.reset[r].handler,"reset",!1,n)
for(r=0,i=a.updatedContext.length;r<i;r++)M(l,a.updatedContext[r],!1,n)
for(r=0,i=a.entered.length;r<i;r++)M(l,a.entered[r],!0,n)}catch(t){throw e.state=s,e.currentHandlerInfos=s.handlerInfos,t}e.state.queryParams=$(e,l,t.queryParams,n)}function M(e,t,n,r){var i=t.handler,o=t.context
function a(i){if(n&&g(i,"enter",r),r&&r.isAborted)throw new b
if(i.context=o,g(i,"contextDidChange"),g(i,"setup",o,r),r&&r.isAborted)throw new b
e.push(t)}return i?a(i):t.handlerPromise=t.handlerPromise.then(a),!0}function F(e,t){var n,r,i,o,s,l,u=e.urlMethod
if(u){var c=e.router,f=t.handlerInfos,p=f[f.length-1].name,d={}
for(n=f.length-1;n>=0;--n)a(d,(r=f[n]).params),r.handler.inaccessibleByURL&&(u=null)
u&&(d.queryParams=e._visibleQueryParams||t.queryParams,i=c.recognizer.generate(p,d),o=e.isCausedByInitialTransition,s="replace"===u&&!e.isCausedByAbortingTransition,l=e.queryParamsOnly&&"replace"===u,o||s||l?c.replaceURL(i):c.updateURL(i))}}function j(e,t,n){var r,o,a=t[0]||"/",s=t[t.length-1],l={}
return s&&s.hasOwnProperty("queryParams")&&(l=L.call(t).queryParams),0===t.length?(u(e,"Updating query params"),r=e.state.handlerInfos,o=new x({name:r[r.length-1].name,contexts:[],queryParams:l})):"/"===a.charAt(0)?(u(e,"Attempting URL transition to "+a),o=new N({url:a})):(u(e,"Attempting transition to "+a),o=new x({name:t[0],contexts:i.call(t,1),queryParams:l})),e.transitionByIntent(o,n)}function B(e,t){var n,r
if(e.length!==t.length)return!1
for(n=0,r=e.length;n<r;++n)if(e[n]!==t[n])return!1
return!0}function H(e,t){if(!e&&!t)return!0
if(!e&&t||e&&!t)return!1
var n,r,i,o=Object.keys(e),a=Object.keys(t)
if(o.length!==a.length)return!1
for(n=0,r=o.length;n<r;++n)if(e[i=o[n]]!==t[i])return!1
return!0}function $(e,t,n,r){for(var i in n)n.hasOwnProperty(i)&&null===n[i]&&delete n[i]
var o,a,s,l=[]
p(e,t,!0,["finalizeQueryParamChange",n,l,r]),r&&(r._visibleQueryParams={})
var u={}
for(o=0,a=l.length;o<a;++o)u[(s=l[o]).key]=s.value,r&&!1!==s.visible&&(r._visibleQueryParams[s.key]=s.value)
return u}I.prototype={map:function(e){this.recognizer.delegate=this.delegate,this.recognizer.map(e,function(e,t){var n,r,i
for(n=t.length-1,r=!0;n>=0&&r;--n)i=t[n],e.add(t,{as:i.handler}),r="/"===i.path||""===i.path||".index"===i.handler.slice(-6)})},hasRoute:function(e){return this.recognizer.hasRoute(e)},getHandler:function(){},getSerializer:function(){},queryParamsTransition:function(e,t,n,r){var i,o=this
return D(this,r,e),!t&&this.activeTransition?this.activeTransition:((i=new y(this)).queryParamsOnly=!0,n.queryParams=$(this,r.handlerInfos,r.queryParams,i),i.promise=i.promise.then(function(e){return F(i,n),o.didTransition&&o.didTransition(o.currentHandlerInfos),e},null,h("Transition complete")),i)},transitionByIntent:function(e){try{return k.apply(this,arguments)}catch(t){return new y(this,e,null,t)}},reset:function(){this.state&&f(this.state.handlerInfos.slice().reverse(),function(e){g(e.handler,"exit")}),this.oldState=void 0,this.state=new v,this.currentHandlerInfos=null},activeTransition:null,handleURL:function(e){var t=i.call(arguments)
return"/"!==e.charAt(0)&&(t[0]="/"+e),j(this,t).method(null)},updateURL:function(){throw new Error("updateURL is not implemented")},replaceURL:function(e){this.updateURL(e)},transitionTo:function(){return j(this,arguments)},intermediateTransitionTo:function(){return j(this,arguments,!0)},refresh:function(e){var t=this.activeTransition,n=t?t.state:this.state,r=n.handlerInfos
u(this,"Starting a refresh transition")
var i=new x({name:r[r.length-1].name,pivotHandler:e||r[0].handler,contexts:[],queryParams:this._changedQueryParams||n.queryParams||{}}),o=this.transitionByIntent(i,!1)
return t&&"replace"===t.urlMethod&&o.method(t.urlMethod),o},replaceWith:function(){return j(this,arguments).method("replace")},generate:function(e){var t,n,r=s(i.call(arguments,1)),o=r[0],l=r[1],u=new x({name:e,contexts:o}).applyToState(this.state,this.recognizer,this.getHandler,null,this.getSerializer),c={}
for(t=0,n=u.handlerInfos.length;t<n;++t)a(c,u.handlerInfos[t].serialize())
return c.queryParams=l,this.recognizer.generate(e,c)},applyIntent:function(e,t){var n=new x({name:e,contexts:t}),r=this.activeTransition&&this.activeTransition.state||this.state
return n.applyToState(r,this.recognizer,this.getHandler,null,this.getSerializer)},isActiveIntent:function(e,t,n,r){var i,o=r||this.state,s=o.handlerInfos
if(!s.length)return!1
var l=s[s.length-1].name,u=this.recognizer.handlersFor(l),c=0
for(i=u.length;c<i&&s[c].name!==e;++c);if(c===u.length)return!1
var f=new v
f.handlerInfos=s.slice(0,c+1),u=u.slice(0,c+1)
var p=B(new x({name:l,contexts:t}).applyToHandlers(f,u,this.getHandler,l,!0,!0,this.getSerializer).handlerInfos,f.handlerInfos)
if(!n||!p)return p
var h={}
a(h,n)
var m=o.queryParams
for(var g in m)m.hasOwnProperty(g)&&h.hasOwnProperty(g)&&(h[g]=m[g])
return p&&!d(h,n)},isActive:function(e){var t=s(i.call(arguments,1))
return this.isActiveIntent(e,t[0],t[1])},trigger:function(){var e=i.call(arguments)
p(this,this.currentHandlerInfos,!1,e)},log:null},e.Transition=y,e.default=I}),e("rsvp",["exports","ember-babel","node-module"],function(e,t,n){"use strict"
var r,i
function o(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}e.filter=e.async=e.map=e.reject=e.resolve=e.off=e.on=e.configure=e.denodeify=e.defer=e.rethrow=e.hashSettled=e.hash=e.race=e.allSettled=e.all=e.EventTarget=e.Promise=e.cast=e.asap=void 0
var a={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=o(this),r=void 0;(r=n[e])||(r=n[e]=[]),r.indexOf(t)&&r.push(t)},off:function(e,t){var n,r=o(this),i=void 0
t?-1!==(n=(i=r[e]).indexOf(t))&&i.splice(n,1):r[e]=[]},trigger:function(e,t,n){var r,i
if(r=o(this)[e])for(i=0;i<r.length;i++)(0,r[i])(t,n)}},s={instrument:!1}
function l(e,t){if(2!==arguments.length)return s[e]
s[e]=t}a.mixin(s)
var u=[]
function c(e,t,n){1===u.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:Date.now(),error:s["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout(function(){var e,t,n
for(e=0;e<u.length;e++)(n=(t=u[e]).payload).guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),s.trigger(t.name,t.payload)
u.length=0},50)}function f(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var n=new this(p,t)
return w(n,e),n}function p(){}var d=void 0,h=1,m=2
function g(){this.error=null}var v=new g
function b(e){try{return e.then}catch(e){return v.error=e,v}}var y=new g,E=void 0
function T(){var e
try{return e=E,E=null,e.apply(this,arguments)}catch(e){return y.error=e,y}}function _(e){return E=e,T}function A(e,t,n){var r
t.constructor===e.constructor&&n===L&&e.constructor.resolve===f?function(e,t){t._state===h?S(e,t._result):t._state===m?(t._onError=null,O(e,t._result)):x(t,void 0,function(n){t===n?S(e,n):w(e,n)},function(t){return O(e,t)})}(e,t):n===v?(r=v.error,v.error=null,O(e,r)):"function"==typeof n?function(e,t,n){s.async(function(e){var r=!1,i=function(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}(n,t,function(n){r||(r=!0,t!==n?w(e,n):S(e,n))},function(t){r||(r=!0,O(e,t))},e._label)
!r&&i&&(r=!0,O(e,i))},e)}(e,t,n):S(e,t)}function w(e,t){var n,r
e===t?S(e,t):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?S(e,t):A(e,t,b(t)))}function C(e){e._onError&&e._onError(e._result),R(e)}function S(e,t){e._state===d&&(e._result=t,e._state=h,0===e._subscribers.length?s.instrument&&c("fulfilled",e):s.async(R,e))}function O(e,t){e._state===d&&(e._state=m,e._result=t,s.async(C,e))}function x(e,t,n,r){var i=e._subscribers,o=i.length
e._onError=null,i[o]=t,i[o+h]=n,i[o+m]=r,0===o&&e._state&&s.async(R,e)}function R(e){var t,n=e._subscribers,r=e._state
if(s.instrument&&c(r===h?"fulfilled":"rejected",e),0!==n.length){var i=void 0,o=void 0,a=e._result
for(t=0;t<n.length;t+=3)i=n[t],o=n[t+r],i?N(r,i,o,a):o(a)
e._subscribers.length=0}}function N(e,t,n,r){var i,o="function"==typeof n,a=void 0
a=o?_(n)(r):r,t._state!==d||(a===t?O(t,new TypeError("A promises callback cannot return that same promise.")):a===y?(i=a.error,a.error=null,O(t,i)):o?w(t,a):e===h?S(t,a):e===m&&O(t,a))}function L(e,t,n){var r,i=this._state
if(i===h&&!e||i===m&&!t)return s.instrument&&c("chained",this,this),this
this._onError=null
var o=new this.constructor(p,n),a=this._result
return s.instrument&&c("chained",this,o),i===d?x(this,o,e,t):(r=i===h?e:t,s.async(function(){return N(i,o,r,a)})),o}var I=function(){function e(e,t,n,r){this._instanceConstructor=e,this.promise=new e(p,r),this._abortOnReject=n,this.isUsingOwnPromise=e===M,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var n=t.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(t)},e.prototype._enumerate=function(e){var t,n=this.length,r=this.promise
for(t=0;r._state===d&&t<n;t++)this._eachEntry(e[t],t,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){0===this._remaining&&S(this.promise,this._result)},e.prototype._settleMaybeThenable=function(e,t,n){var r,i,o=this._instanceConstructor,a=o.resolve
a===f?(r=b(e))===L&&e._state!==d?(e._onError=null,this._settledAt(e._state,t,e._result,n)):"function"!=typeof r?this._settledAt(h,t,e,n):this.isUsingOwnPromise?(A(i=new o(p),e,r),this._willSettleAt(i,t,n)):this._willSettleAt(new o(function(t){return t(e)}),t,n):this._willSettleAt(a(e),t,n)},e.prototype._eachEntry=function(e,t,n){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,n):this._setResultAt(h,t,e,n)},e.prototype._settledAt=function(e,t,n,r){var i=this.promise
i._state===d&&(this._abortOnReject&&e===m?O(i,n):(this._setResultAt(e,t,n,r),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,n){this._remaining--,this._result[t]=n},e.prototype._willSettleAt=function(e,t,n){var r=this
x(e,void 0,function(e){return r._settledAt(h,t,e,n)},function(e){return r._settledAt(m,t,e,n)})},e}()
function k(e,t,n){this._remaining--,this._result[t]=e===h?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var D="rsvp_"+Date.now()+"-",P=0
var M=function(){function e(t,n){this._id=P++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],s.instrument&&c("created",this),p!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var n=!1
try{t(function(t){n||(n=!0,w(e,t))},function(t){n||(n=!0,O(e,t))})}catch(t){O(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
s.after(function(){t._onError&&s.trigger("error",e,t._label)})},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var n=this.constructor
return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})},t)},e}()
function F(){this.value=void 0}M.cast=f,M.all=function(e,t){return Array.isArray(e)?new I(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},M.race=function(e,t){var n,r=new this(p,t)
if(!Array.isArray(e))return O(r,new TypeError("Promise.race must be called with an array")),r
for(n=0;r._state===d&&n<e.length;n++)x(this.resolve(e[n]),void 0,function(e){return w(r,e)},function(e){return O(r,e)})
return r},M.resolve=f,M.reject=function(e,t){var n=new this(p,t)
return O(n,e),n},M.prototype._guidKey=D,M.prototype.then=L
var j=new F,B=new F
function H(e,t,n){try{e.apply(t,n)}catch(e){return j.value=e,j}}function $(e,t){return{then:function(n,r){return e.call(t,n,r)}}}function U(e,n){var r=function(){var t,r,i,o=arguments.length,a=new Array(o+1),s=!1
for(t=0;t<o;++t){if(r=arguments[t],!s){if((s=W(r))===B)return O(i=new M(p),B.value),i
s&&!0!==s&&(r=$(s,r))}a[t]=r}var l=new M(p)
return a[o]=function(e,t){e?O(l,e):void 0===n?w(l,t):!0===n?w(l,function(e){var t,n=e.length,r=new Array(n-1)
for(t=1;t<n;t++)r[t-1]=e[t]
return r}(arguments)):Array.isArray(n)?w(l,function(e,t){var n,r,i={},o=e.length,a=new Array(o)
for(n=0;n<o;n++)a[n]=e[n]
for(r=0;r<t.length;r++)i[t[r]]=a[r+1]
return i}(arguments,n)):w(l,t)},s?function(e,t,n,r){return M.all(t).then(function(t){var i=H(n,r,t)
return i===j&&O(e,i.value),e})}(l,a,e,this):function(e,t,n,r){var i=H(n,r,t)
i===j&&O(e,i.value)
return e}(l,a,e,this)}
return(0,t.defaults)(r,e),r}function W(e){return!(!e||"object"!=typeof e)&&(e.constructor===M||function(e){try{return e.then}catch(e){return j.value=e,j}}(e))}function K(e,t){return M.all(e,t)}var q=function(e){function n(n,r,i){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,!1,i))}return(0,t.inherits)(n,e),n}(I)
function z(e,t){return Array.isArray(e)?new q(M,e,t).promise:M.reject(new TypeError("Promise.allSettled must be called with an array"),t)}function V(e,t){return M.race(e,t)}q.prototype._setResultAt=k
var G=Object.prototype.hasOwnProperty,Y=function(e){function n(n,r){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3]
return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,i,o))}return(0,t.inherits)(n,e),n.prototype._init=function(e,t){this._result={},this._enumerate(t),0===this._remaining&&S(this.promise,this._result)},n.prototype._enumerate=function(e){var t,n=this.promise,r=[]
for(var i in e)G.call(e,i)&&r.push({position:i,entry:e[i]})
var o=r.length
this._remaining=o
var a=void 0
for(t=0;n._state===d&&t<o;t++)a=r[t],this._eachEntry(a.entry,a.position)},n}(I)
function Q(e,t){return null===e||"object"!=typeof e?M.reject(new TypeError("Promise.hash must be called with an object"),t):new Y(M,e,t).promise}var X=function(e){function n(n,r,i){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,!1,i))}return(0,t.inherits)(n,e),n}(Y)
function J(e,t){return null===e||"object"!=typeof e?M.reject(new TypeError("RSVP.hashSettled must be called with an object"),t):new X(M,e,!1,t).promise}function Z(e){throw setTimeout(function(){throw e}),e}function ee(e){var t={resolve:void 0,reject:void 0}
return t.promise=new M(function(e,n){t.resolve=e,t.reject=n},e),t}X.prototype._setResultAt=k
var te=function(e){function n(n,r,i,o){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,!0,o,i))}return(0,t.inherits)(n,e),n.prototype._init=function(e,t,n,r,i){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._mapFn=i,this._enumerate(t)},n.prototype._setResultAt=function(e,t,n,r){var i
r?(i=_(this._mapFn)(n,t))===y?this._settledAt(m,t,i.error,!1):this._eachEntry(i,t,!1):(this._remaining--,this._result[t]=n)},n}(I)
function ne(e,t,n){return Array.isArray(e)?"function"!=typeof t?M.reject(new TypeError("RSVP.map expects a function as a second argument"),n):new te(M,e,t,n).promise:M.reject(new TypeError("RSVP.map must be called with an array"),n)}function re(e,t){return M.resolve(e,t)}function ie(e,t){return M.reject(e,t)}var oe={},ae=function(e){function n(n,r,i,o){return(0,t.possibleConstructorReturn)(this,e.call(this,n,r,!0,o,i))}return(0,t.inherits)(n,e),n.prototype._init=function(e,t,n,r,i){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._filterFn=i,this._enumerate(t)},n.prototype._checkFullfillment=function(){0===this._remaining&&(this._result=this._result.filter(function(e){return e!==oe}),S(this.promise,this._result))},n.prototype._setResultAt=function(e,t,n,r){var i
r?(this._result[t]=n,(i=_(this._filterFn)(n,t))===y?this._settledAt(m,t,i.error,!1):this._eachEntry(i,t,!1)):(this._remaining--,n||(this._result[t]=oe))},n}(I)
function se(e,t,n){return Array.isArray(e)||null!==e&&"object"==typeof e&&void 0!==e.then?"function"!=typeof t?M.reject(new TypeError("RSVP.filter expects function as a second argument"),n):M.resolve(e,n).then(function(e){return new ae(M,e,t,n).promise}):M.reject(new TypeError("RSVP.filter must be called with an array or promise"),n)}var le=0,ue=void 0
function ce(e,t){ve[le]=e,ve[le+1]=t,2===(le+=2)&&Ce()}var fe="undefined"!=typeof window?window:void 0,pe=fe||{},de=pe.MutationObserver||pe.WebKitMutationObserver,he="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),me="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function ge(){return function(){return setTimeout(be,1)}}var ve=new Array(1e3)
function be(){var e
for(e=0;e<le;e+=2)(0,ve[e])(ve[e+1]),ve[e]=void 0,ve[e+1]=void 0
le=0}var ye,Ee,Te,_e,Ae,we,Ce=void 0
if(he?(Ae=process.nextTick,we=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(we)&&"0"===we[1]&&"10"===we[2]&&(Ae=setImmediate),Ce=function(){return Ae(be)}):de?(Ee=0,Te=new de(be),_e=document.createTextNode(""),Te.observe(_e,{characterData:!0}),Ce=function(){return _e.data=Ee=++Ee%2}):me?((ye=new MessageChannel).port1.onmessage=be,Ce=function(){return ye.port2.postMessage(0)}):Ce=void 0===fe&&"function"==typeof n.require?function(){var e
try{return e=(0,n.require)("vertx"),void 0!==(ue=e.runOnLoop||e.runOnContext)?function(){ue(be)}:ge()}catch(e){return ge()}}():ge(),"object"==typeof self);else if("object"!=typeof global)throw new Error("no global: `self` or `global` found")
s.async=ce,s.after=function(e){return setTimeout(e,0)}
var Se=re,Oe=function(e,t){return s.async(e,t)}
function xe(){s.on.apply(s,arguments)}function Re(){s.off.apply(s,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__)for(var Ne in i=window.__PROMISE_INSTRUMENTATION__,l("instrument",!0),i)i.hasOwnProperty(Ne)&&xe(Ne,i[Ne])
var Le=((r={asap:ce,cast:Se,Promise:M,EventTarget:a,all:K,allSettled:z,race:V,hash:Q,hashSettled:J,rethrow:Z,defer:ee,denodeify:U,configure:l,on:xe,off:Re,resolve:re,reject:ie,map:ne}).async=Oe,r.filter=se,r)
e.asap=ce,e.cast=Se,e.Promise=M,e.EventTarget=a,e.all=K,e.allSettled=z,e.race=V,e.hash=Q,e.hashSettled=J,e.rethrow=Z,e.defer=ee,e.denodeify=U,e.configure=l,e.on=xe,e.off=Re,e.resolve=re,e.reject=ie,e.map=ne,e.async=Oe,e.filter=se,e.default=Le}),t("ember")}(),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){var t=function(n,r){this.id=++e.FE.ID,this.opts=e.extend(!0,{},e.extend({},t.DEFAULTS,"object"==typeof r&&r))
var i=JSON.stringify(this.opts)
e.FE.OPTS_MAPPING[i]=e.FE.OPTS_MAPPING[i]||this.id,this.sid=e.FE.OPTS_MAPPING[i],e.FE.SHARED[this.sid]=e.FE.SHARED[this.sid]||{},this.shared=e.FE.SHARED[this.sid],this.shared.count=(this.shared.count||0)+1,this.$oel=e(n),this.$oel.data("froala.editor",this),this.o_doc=n.ownerDocument,this.o_win="defaultView"in this.o_doc?this.o_doc.defaultView:this.o_doc.parentWindow
var o=e(this.o_win).scrollTop()
this.$oel.on("froala.doInit",e.proxy(function(){this.$oel.off("froala.doInit"),this.doc=this.$el.get(0).ownerDocument,this.win="defaultView"in this.doc?this.doc.defaultView:this.doc.parentWindow,this.$doc=e(this.doc),this.$win=e(this.win),this.opts.pluginsEnabled||(this.opts.pluginsEnabled=Object.keys(e.FE.PLUGINS)),this.opts.initOnClick?(this.load(e.FE.MODULES),this.$el.on("touchstart.init",function(){e(this).data("touched",!0)}),this.$el.on("touchmove.init",function(){e(this).removeData("touched")}),this.$el.on("mousedown.init touchend.init dragenter.init focus.init",e.proxy(function(t){if("touchend"==t.type&&!this.$el.data("touched"))return!0
if(1===t.which||!t.which){this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"),this.load(e.FE.MODULES),this.load(e.FE.PLUGINS)
var n=t.originalEvent&&t.originalEvent.originalTarget
n&&"IMG"==n.tagName&&e(n).trigger("mousedown"),void 0===this.ul&&this.destroy(),"touchend"==t.type&&this.image&&t.originalEvent&&t.originalEvent.target&&e(t.originalEvent.target).is("img")&&setTimeout(e.proxy(function(){this.image.edit(e(t.originalEvent.target))},this),100),this.ready=!0,this.events.trigger("initialized")}},this)),this.events.trigger("initializationDelayed")):(this.load(e.FE.MODULES),this.load(e.FE.PLUGINS),e(this.o_win).scrollTop(o),void 0===this.ul&&this.destroy(),this.ready=!0,this.events.trigger("initialized"))},this)),this._init()}
t.DEFAULTS={initOnClick:!1,pluginsEnabled:null},t.MODULES={},t.PLUGINS={},t.VERSION="2.7.5",t.INSTANCES=[],t.OPTS_MAPPING={},t.SHARED={},t.ID=0,t.prototype._init=function(){var t=this.$oel.prop("tagName")
this.$oel.closest("label").length
var n=e.proxy(function(){"TEXTAREA"!=t&&(this._original_html=this._original_html||this.$oel.html()),this.$box=this.$box||this.$oel,this.opts.fullPage&&(this.opts.iframe=!0),this.opts.iframe?(this.$iframe=e('<iframe src="about:blank" frameBorder="0">'),this.$wp=e("<div></div>"),this.$box.html(this.$wp),this.$wp.append(this.$iframe),this.$iframe.get(0).contentWindow.document.open(),this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"),this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"),this.$iframe.get(0).contentWindow.document.close(),this.$el=this.$iframe.contents().find("body"),this.el=this.$el.get(0),this.$head=this.$iframe.contents().find("head"),this.$html=this.$iframe.contents().find("html"),this.iframe_document=this.$iframe.get(0).contentWindow.document,this.$oel.trigger("froala.doInit")):(this.$el=e("<div></div>"),this.el=this.$el.get(0),this.$wp=e("<div></div>").append(this.$el),this.$box.html(this.$wp),this.$oel.trigger("froala.doInit"))},this),r=e.proxy(function(){this.$box=e("<div>"),this.$oel.before(this.$box).hide(),this._original_html=this.$oel.val(),this.$oel.parents("form").on("submit."+this.id,e.proxy(function(){this.events.trigger("form.submit")},this)),this.$oel.parents("form").on("reset."+this.id,e.proxy(function(){this.events.trigger("form.reset")},this)),n()},this),i=e.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.$el.attr("contenteditable",!0).css("outline","none").css("display","inline-block"),this.opts.multiLine=!1,this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),o=e.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),a=e.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.on("click.popup",function(e){e.preventDefault()}),this.$oel.trigger("froala.doInit")},this)
this.opts.editInPopup?a():"TEXTAREA"==t?r():"A"==t?i():"IMG"==t?o():"BUTTON"==t||"INPUT"==t?(this.opts.editInPopup=!0,this.opts.toolbarInline=!1,a()):n()},t.prototype.load=function(t){for(var n in t)if(t.hasOwnProperty(n)){if(this[n])continue
if(e.FE.PLUGINS[n]&&this.opts.pluginsEnabled.indexOf(n)<0)continue
if(this[n]=new t[n](this),this[n]._init&&(this[n]._init(),this.opts.initOnClick&&"core"==n))return!1}},t.prototype.destroy=function(){this.shared.count--,this.events.$off()
var t=this.html.get()
if(this.events.trigger("destroy",[],!0),this.events.trigger("shared.destroy",void 0,!0),0===this.shared.count){for(var n in this.shared)this.shared.hasOwnProperty(n)&&(this.shared[n],e.FE.SHARED[this.sid][n]=null)
e.FE.SHARED[this.sid]={}}this.$oel.parents("form").off("."+this.id),this.$oel.off("click.popup"),this.$oel.removeData("froala.editor"),this.$oel.off("froalaEditor"),this.core.destroy(t),e.FE.INSTANCES.splice(e.FE.INSTANCES.indexOf(this),1)},e.fn.froalaEditor=function(n){for(var r=[],i=0;i<arguments.length;i++)r.push(arguments[i])
if("string"==typeof n){var o=[]
return this.each(function(){var t=e(this).data("froala.editor")
if(t){var i,a
if(n.indexOf(".")>0&&t[n.split(".")[0]]?(t[n.split(".")[0]]&&(i=t[n.split(".")[0]]),a=n.split(".")[1]):(i=t,a=n.split(".")[0]),!i[a])return e.error("Method "+n+" does not exist in Froala Editor.")
var s=i[a].apply(t,r.slice(1))
void 0===s?o.push(this):0===o.length&&o.push(s)}}),1==o.length?o[0]:o}return"object"!=typeof n&&n?void 0:this.each(function(){if(!e(this).data("froala.editor")){new t(this,n)}})},e.fn.froalaEditor.Constructor=t,e.FroalaEditor=t,e.FE=t,e.FE.XS=0,e.FE.SM=1,e.FE.MD=2,e.FE.LG=3
e.FE.LinkRegExCommon="[a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_.]{1,}",e.FE.LinkRegExEnd="((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;/~+#-\\'*-_{}]*)|())",e.FE.LinkRegExTLD="(("+e.FE.LinkRegExCommon+")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))",e.FE.LinkRegExHTTP="((ftp|http|https):\\/\\/"+e.FE.LinkRegExCommon+")",e.FE.LinkRegExAuth="((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@"+e.FE.LinkRegExCommon+")",e.FE.LinkRegExWWW="(www\\."+e.FE.LinkRegExCommon+"\\.[a-z0-9-]{2,24})",e.FE.LinkRegEx="("+e.FE.LinkRegExTLD+"|"+e.FE.LinkRegExHTTP+"|"+e.FE.LinkRegExWWW+"|"+e.FE.LinkRegExAuth+")"+e.FE.LinkRegExEnd,e.FE.LinkProtocols=["mailto","tel","sms","notes","data"],e.FE.MAIL_REGEX=/.+@.+\..+/i,e.FE.MODULES.helpers=function(t){function n(){var e={},t=function(){var e,t=-1
return"Microsoft Internet Explorer"==navigator.appName?(e=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(e=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))),t}()
if(t>0)e.msie=!0
else{var n=navigator.userAgent.toLowerCase(),r=/(edge)[ \/]([\w.]+)/.exec(n)||/(chrome)[ \/]([\w.]+)/.exec(n)||/(webkit)[ \/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[],i={browser:r[1]||"",version:r[2]||"0"}
r[1]&&(e[i.browser]=!0),e.chrome?e.webkit=!0:e.webkit&&(e.safari=!0)}return e.msie&&(e.version=t),e}function r(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!a()}function i(){return/(Android)/g.test(navigator.userAgent)&&!a()}function o(){return/(Blackberry)/g.test(navigator.userAgent)}function a(){return/(Windows Phone)/gi.test(navigator.userAgent)}function s(e){return parseInt(e,10)||0}var l,u=null
return{_init:function(){t.browser=n(),function(){function e(e,t){var i=e[t]
e[t]=function(e){var t,o=!1,a=!1
if(e&&e.match(r)){e=e.replace(r,""),this.parentNode||(n.appendChild(this),a=!0)
var s=this.parentNode
return this.id||(this.id="rootedQuerySelector_id_"+(new Date).getTime(),o=!0),t=i.call(s,"#"+this.id+" "+e),o&&(this.id=""),a&&n.removeChild(this),t}return i.call(this,e)}}var n=t.o_doc.createElement("div")
try{n.querySelectorAll(":scope *")}catch(t){var r=/^\s*:scope/gi
e(Element.prototype,"querySelector"),e(Element.prototype,"querySelectorAll"),e(HTMLElement.prototype,"querySelector"),e(HTMLElement.prototype,"querySelectorAll")}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this
if(!t)return null
if(!document.documentElement.contains(this))return null
do{if(t.matches(e))return t
t=t.parentElement}while(null!==t)
return null})},isIOS:r,isMac:function(){return null==u&&(u=navigator.platform.toUpperCase().indexOf("MAC")>=0),u},isAndroid:i,isBlackberry:o,isWindowsPhone:a,isMobile:function(){return i()||r()||o()},isEmail:function(t){return!/^(https?:|ftps?:|)\/\//i.test(t)&&e.FE.MAIL_REGEX.test(t)},requestAnimationFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},getPX:s,screenSize:function(){var t=e('<div class="fr-visibility-helper"></div>').appendTo("body:first")
try{var n=s(t.css("margin-left"))
return t.remove(),n}catch(t){return e.FE.LG}},isTouch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},sanitizeURL:function(t){return/^(https?:|ftps?:|)\/\//i.test(t)?t:/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(t)?t:new RegExp("^("+e.FE.LinkProtocols.join("|")+"):\\/\\/","i").test(t)?t:t=encodeURIComponent(t).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/gi,"mailto:").replace(/file%3A/gi,"file:").replace(/sms%3A/gi,"sms:").replace(/tel%3A/gi,"tel:").replace(/notes%3A/gi,"notes:").replace(/data%3Aimage/gi,"data:image").replace(/blob%3A/gi,"blob:").replace(/webkit-fake-url%3A/gi,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%7B/g,"{").replace(/%7D/g,"}")},isArray:function(e){return e&&!e.propertyIsEnumerable("length")&&"object"==typeof e&&"number"==typeof e.length},RGBToHex:function(e){function t(e){return("0"+parseInt(e,10).toString(16)).slice(-2)}try{return e&&"transparent"!==e?/^#[0-9A-F]{6}$/i.test(e)?e:("#"+t((e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+t(e[2])+t(e[3])).toUpperCase():""}catch(e){return null}},HEXtoRGB:function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r})
var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)
return t?"rgb("+parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16)+")":""},isURL:function(t){return!!/^(https?:|ftps?:|)\/\//i.test(t)&&(t=String(t).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20"),new RegExp("^"+e.FE.LinkRegExHTTP+e.FE.LinkRegExEnd+"$","gi").test(t))},getAlignment:function(n){var r=(n.css("text-align")||"").replace(/-(.*)-/g,"")
if(["left","right","justify","center"].indexOf(r)<0){if(!l){var i=e('<div dir="'+("rtl"==t.opts.direction?"rtl":"auto")+'" style="text-align: '+t.$el.css("text-align")+'; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>')
e("body:first").append(i)
var o=i.find("#s1").get(0).getBoundingClientRect().left,a=i.find("#s2").get(0).getBoundingClientRect().left
i.remove(),l=a>o?"left":"right"}r=l}return r},scrollTop:function(){return t.o_win.pageYOffset?t.o_win.pageYOffset:t.o_doc.documentElement&&t.o_doc.documentElement.scrollTop?t.o_doc.documentElement.scrollTop:t.o_doc.body.scrollTop?t.o_doc.body.scrollTop:0},scrollLeft:function(){return t.o_win.pageXOffset?t.o_win.pageXOffset:t.o_doc.documentElement&&t.o_doc.documentElement.scrollLeft?t.o_doc.documentElement.scrollLeft:t.o_doc.body.scrollLeft?t.o_doc.body.scrollLeft:0},isInViewPort:function(e){var t=e.getBoundingClientRect()
return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)||t.top<=0&&t.bottom>=(window.innerHeight||document.documentElement.clientHeight)}}},e.FE.MODULES.events=function(t){function n(e,t,n){c(e,t,n)}function r(n){if(void 0===n&&(n=!0),!t.$wp)return!1
if(t.helpers.isIOS()&&t.$win.get(0).focus(),!t.core.hasFocus()&&n){var r=t.$win.scrollTop()
if(t.browser.msie&&t.$box&&t.$box.css("position","fixed"),t.browser.msie&&t.$wp&&t.$wp.css("overflow","visible"),s(),t.$el.focus(),t.events.trigger("focus"),a(),t.browser.msie&&t.$box&&t.$box.css("position",""),t.browser.msie&&t.$wp&&t.$wp.css("overflow","auto"),r!=t.$win.scrollTop()&&t.$win.scrollTop(r),!t.selection.info(t.el).atStart)return!1}if(!t.core.hasFocus()||t.$el.find(".fr-marker").length>0)return!1
if(t.selection.info(t.el).atStart&&t.selection.isCollapsed()&&null!=t.html.defaultTag()){var i=t.markers.insert()
if(i&&!t.node.blockParent(i)){e(i).remove()
var o=t.$el.find(t.html.blockTagsQuery()).get(0)
o&&(e(o).prepend(e.FE.MARKERS),t.selection.restore())}else i&&e(i).remove()}}function i(n){var r=e(n.currentTarget)
return t.edit.isDisabled()||t.node.hasClass(r.get(0),"fr-disabled")?(n.preventDefault(),!1):"mousedown"===n.type&&1!==n.which||(t.helpers.isMobile()||n.preventDefault(),(t.helpers.isAndroid()||t.helpers.isWindowsPhone())&&0===r.parents(".fr-dropdown-menu").length&&(n.preventDefault(),n.stopPropagation()),r.addClass("fr-selected"),void t.events.trigger("commands.mousedown",[r]))}function o(n,r){var i=e(n.currentTarget)
if(t.edit.isDisabled()||t.node.hasClass(i.get(0),"fr-disabled"))return n.preventDefault(),!1
if("mouseup"===n.type&&1!==n.which)return!0
if(!t.node.hasClass(i.get(0),"fr-selected"))return!0
if("touchmove"!=n.type){if(n.stopPropagation(),n.stopImmediatePropagation(),n.preventDefault(),!t.node.hasClass(i.get(0),"fr-selected"))return t.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),!1
if(t.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),i.data("dragging")||i.attr("disabled"))return i.removeData("dragging"),!1
var o=i.data("timeout")
o&&(clearTimeout(o),i.removeData("timeout")),r.apply(t,[n])}else i.data("timeout")||i.data("timeout",setTimeout(function(){i.data("dragging",!0)},100))}function a(){m=!0}function s(){m=!1}function l(){return m}function u(e,n,r){var i,o=e.split(" ")
if(o.length>1){for(var a=0;a<o.length;a++)u(o[a],n,r)
return!0}void 0===r&&(r=!1),i=0!==e.indexOf("shared.")?g[e]=g[e]||[]:t.shared._events[e]=t.shared._events[e]||[],r?i.unshift(n):i.push(n)}function c(e,n,r,i,o){"function"==typeof r&&(o=i,i=r,r=!1)
var a=o?t.shared.$_events:b,s=o?t.sid:t.id
r?e.on(n.split(" ").join(".ed"+s+" ")+".ed"+s,r,i):e.on(n.split(" ").join(".ed"+s+" ")+".ed"+s,i),a.push([e,n.split(" ").join(".ed"+s+" ")+".ed"+s])}function f(e){for(var t=0;t<e.length;t++)e[t][0].off(e[t][1])}function p(n,r,i){if(!t.edit.isDisabled()||i){var o,a
if(0!==n.indexOf("shared."))o=g[n]
else{if(t.shared.count>0)return!1
o=t.shared._events[n]}if(o)for(var s=0;s<o.length;s++)if(!1===(a=o[s].apply(t,r)))return!1
return!1!==(a=t.$oel.triggerHandler("froalaEditor."+n,e.merge([t],r||[])))&&a}}function d(){for(var e in g)g.hasOwnProperty(e)&&delete g[e]}function h(){for(var e in t.shared._events)t.shared._events.hasOwnProperty(e)&&delete t.shared._events[e]}var m,g={},v=!1,b=[]
return{_init:function(){t.shared.$_events=t.shared.$_events||[],t.shared._events={},t.helpers.isMobile()?(t._mousedown="touchstart",t._mouseup="touchend",t._move="touchmove",t._mousemove="touchmove"):(t._mousedown="mousedown",t._mouseup="mouseup",t._move="",t._mousemove="mousemove"),n(t.$el,"click mouseup mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart",function(e){p(e.type,[e])}),u("mousedown",function(){for(var n=0;n<e.FE.INSTANCES.length;n++)e.FE.INSTANCES[n]!=t&&e.FE.INSTANCES[n].popups&&e.FE.INSTANCES[n].popups.areVisible()&&e.FE.INSTANCES[n].$el.find(".fr-marker").remove()}),n(t.$win,t._mousedown,function(e){p("window.mousedown",[e]),a()}),n(t.$win,t._mouseup,function(e){p("window.mouseup",[e])}),n(t.$win,"cut copy keydown keyup touchmove touchend",function(e){p("window."+e.type,[e])}),n(t.$doc,"dragend drop",function(e){p("document."+e.type,[e])}),n(t.$el,"keydown keypress keyup input",function(e){p(e.type,[e])}),n(t.$el,"focus",function(e){l()&&(r(!1),!1===v&&p(e.type,[e]))}),n(t.$el,"blur",function(e){l()&&!0===v&&(p(e.type,[e]),a())}),u("focus",function(){v=!0}),u("blur",function(){v=!1}),a(),n(t.$el,"cut copy paste beforepaste",function(e){p(e.type,[e])}),u("destroy",d),u("shared.destroy",h)},on:u,trigger:p,bindClick:function(e,n,r){c(e,t._mousedown,n,function(e){t.edit.isDisabled()||i(e)},!0),c(e,t._mouseup+" "+t._move,n,function(e){t.edit.isDisabled()||o(e,r)},!0),c(e,"mousedown click mouseup",n,function(e){t.edit.isDisabled()||e.stopPropagation()},!0),u("window.mouseup",function(){t.edit.isDisabled()||(e.find(n).removeClass("fr-selected"),a())})},disableBlur:s,enableBlur:a,blurActive:l,focus:r,chainTrigger:function(n,r,i){if(!t.edit.isDisabled()||i){var o,a
if(0!==n.indexOf("shared."))o=g[n]
else{if(t.shared.count>0)return!1
o=t.shared._events[n]}if(o)for(var s=0;s<o.length;s++)void 0!==(a=o[s].apply(t,[r]))&&(r=a)
return void 0!==(a=t.$oel.triggerHandler("froalaEditor."+n,e.merge([t],[r])))&&(r=a),r}},$on:c,$off:function(){f(b),b=[],0===t.shared.count&&(f(t.shared.$_events),t.shared.$_events=[])}}},e.FE.MODULES.node=function(t){function n(e){return e&&"IFRAME"!=e.tagName?Array.prototype.slice.call(e.childNodes||[]):[]}function r(t){return!!t&&(t.nodeType==Node.ELEMENT_NODE&&e.FE.BLOCK_TAGS.indexOf(t.tagName.toLowerCase())>=0)}function i(e){var t={},n=e.attributes
if(n)for(var r=0;r<n.length;r++){var i=n[r]
t[i.nodeName]=i.value}return t}function o(e){for(var t="",n=i(e),r=Object.keys(n).sort(),o=0;o<r.length;o++){var a=r[o],s=n[a]
s.indexOf("'")<0&&s.indexOf('"')>=0?t+=" "+a+"='"+s+"'":s.indexOf('"')>=0&&s.indexOf("'")>=0?t+=" "+a+'="'+(s=s.replace(/"/g,"&quot;"))+'"':t+=" "+a+'="'+s+'"'}return t}function a(e){return e===t.el}return{isBlock:r,isEmpty:function(i,o){if(!i)return!0
if(i.querySelector("table"))return!1
var a=n(i)
1==a.length&&r(a[0])&&(a=n(a[0]))
for(var s=!1,l=0;l<a.length;l++){var u=a[l]
if(!(o&&t.node.hasClass(u,"fr-marker")||u.nodeType==Node.TEXT_NODE&&0===u.textContent.length)){if("BR"!=u.tagName&&(u.textContent||"").replace(/\u200B/gi,"").replace(/\n/g,"").length>0)return!1
if(s)return!1
"BR"==u.tagName&&(s=!0)}}return!(i.querySelectorAll(e.FE.VOID_ELEMENTS.join(",")).length-i.querySelectorAll("br").length||i.querySelector(t.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||i.querySelectorAll(e.FE.BLOCK_TAGS.join(",")).length>1||i.querySelector(t.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)"))},blockParent:function(e){for(;e&&e.parentNode!==t.el&&(!e.parentNode||!t.node.hasClass(e.parentNode,"fr-inner"));)if(r(e=e.parentNode))return e
return null},deepestParent:function(n,i,o){if(void 0===i&&(i=[]),void 0===o&&(o=!0),i.push(t.el),i.indexOf(n.parentNode)>=0||n.parentNode&&t.node.hasClass(n.parentNode,"fr-inner")||n.parentNode&&e.FE.SIMPLE_ENTER_TAGS.indexOf(n.parentNode.tagName)>=0&&o)return null
for(;i.indexOf(n.parentNode)<0&&n.parentNode&&!t.node.hasClass(n.parentNode,"fr-inner")&&(e.FE.SIMPLE_ENTER_TAGS.indexOf(n.parentNode.tagName)<0||!o)&&(!r(n)||!r(n.parentNode)||!o);)n=n.parentNode
return n},rawAttributes:i,attributes:o,clearAttributes:function(e){for(var t=e.attributes,n=t.length-1;n>=0;n--){var r=t[n]
e.removeAttribute(r.nodeName)}},openTagString:function(e){return"<"+e.tagName.toLowerCase()+o(e)+">"},closeTagString:function(e){return"</"+e.tagName.toLowerCase()+">"},isFirstSibling:function e(n,r){void 0===r&&(r=!0)
for(var i=n.previousSibling;i&&r&&t.node.hasClass(i,"fr-marker");)i=i.previousSibling
return!i||i.nodeType==Node.TEXT_NODE&&""===i.textContent&&e(i)},isLastSibling:function e(n,r){void 0===r&&(r=!0)
for(var i=n.nextSibling;i&&r&&t.node.hasClass(i,"fr-marker");)i=i.nextSibling
return!i||i.nodeType==Node.TEXT_NODE&&""===i.textContent&&e(i)},isList:function(e){return!!e&&["UL","OL"].indexOf(e.tagName)>=0},isLink:function(e){return!!e&&e.nodeType==Node.ELEMENT_NODE&&"a"==e.tagName.toLowerCase()},isElement:a,contents:n,isVoid:function(t){return t&&t.nodeType==Node.ELEMENT_NODE&&e.FE.VOID_ELEMENTS.indexOf((t.tagName||"").toLowerCase())>=0},hasFocus:function(e){return e===t.doc.activeElement&&(!t.doc.hasFocus||t.doc.hasFocus())&&!!(a(e)||e.type||e.href||~e.tabIndex)},isEditable:function(e){return(!e.getAttribute||"false"!=e.getAttribute("contenteditable"))&&["STYLE","SCRIPT"].indexOf(e.tagName)<0},isDeletable:function(e){return e&&e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&(e.getAttribute("class")||"").indexOf("fr-deletable")>=0},hasClass:function(t,n){return t instanceof e&&(t=t.get(0)),t&&t.classList&&t.classList.contains(n)},filter:function(e){return t.browser.msie?e:{acceptNode:e}}}},e.FE.INVISIBLE_SPACE="&#8203;",e.FE.START_MARKER='<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",e.FE.END_MARKER='<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",e.FE.MARKERS=e.FE.START_MARKER+e.FE.END_MARKER,e.FE.MODULES.markers=function(t){function n(){if(!t.$wp)return null
try{var n=t.selection.ranges(0),r=n.commonAncestorContainer
if(r!=t.el&&0===t.$el.find(r).length)return null
var i=n.cloneRange(),o=n.cloneRange()
i.collapse(!0)
var a=e('<span class="fr-marker" style="display: none; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",t.doc)[0]
if(i.insertNode(a),a=t.$el.find("span.fr-marker").get(0)){for(var s=a.nextSibling;s&&s.nodeType===Node.TEXT_NODE&&0===s.textContent.length;)e(s).remove(),s=t.$el.find("span.fr-marker").get(0).nextSibling
return t.selection.clear(),t.selection.get().addRange(o),a}return null}catch(e){}}function r(){t.$el.find(".fr-marker").remove()}return{place:function(n,r,i){var o,a,s
try{var l=n.cloneRange()
if(l.collapse(r),l.insertNode(function(n,r){return e('<span class="fr-marker" data-id="'+r+'" data-type="'+n+'" style="display: '+(t.browser.safari?"none":"inline-block")+'; line-height: 0;">'+e.FE.INVISIBLE_SPACE+"</span>",t.doc)[0]}(r,i)),!0===r)for(s=(o=t.$el.find('span.fr-marker[data-type="true"][data-id="'+i+'"]').get(0)).nextSibling;s&&s.nodeType===Node.TEXT_NODE&&0===s.textContent.length;)e(s).remove(),s=o.nextSibling
if(!0===r&&!n.collapsed){for(;!t.node.isElement(o.parentNode)&&!s;)e(o.parentNode).after(o),s=o.nextSibling
if(s&&s.nodeType===Node.ELEMENT_NODE&&t.node.isBlock(s)){a=[s]
do{s=a[0],a=t.node.contents(s)}while(a[0]&&t.node.isBlock(a[0]))
e(s).prepend(e(o))}}if(!1===r&&!n.collapsed){if((s=(o=t.$el.find('span.fr-marker[data-type="false"][data-id="'+i+'"]').get(0)).previousSibling)&&s.nodeType===Node.ELEMENT_NODE&&t.node.isBlock(s)){a=[s]
do{s=a[a.length-1],a=t.node.contents(s)}while(a[a.length-1]&&t.node.isBlock(a[a.length-1]))
e(s).append(e(o))}o.parentNode&&["TD","TH"].indexOf(o.parentNode.tagName)>=0&&o.parentNode.previousSibling&&!o.previousSibling&&e(o.parentNode.previousSibling).append(o)}var u=t.$el.find('span.fr-marker[data-type="'+r+'"][data-id="'+i+'"]').get(0)
return u&&(u.style.display="none"),u}catch(e){return null}},insert:n,split:function(){t.selection.isCollapsed()||t.selection.remove()
var r=t.$el.find(".fr-marker").get(0)
if(null==r&&(r=n()),null==r)return null
var i=t.node.deepestParent(r)
if(i||(i=t.node.blockParent(r))&&"LI"!=i.tagName&&(i=null),i)if(t.node.isBlock(i)&&t.node.isEmpty(i))"LI"!=i.tagName||i.parentNode.firstElementChild!=i||t.node.isEmpty(i.parentNode)?e(i).replaceWith('<span class="fr-marker"></span>'):e(i).append('<span class="fr-marker"></span>')
else if(t.cursor.isAtStart(r,i))e(i).before('<span class="fr-marker"></span>'),e(r).remove()
else if(t.cursor.isAtEnd(r,i))e(i).after('<span class="fr-marker"></span>'),e(r).remove()
else{var o=r,a="",s=""
do{o=o.parentNode,a+=t.node.closeTagString(o),s=t.node.openTagString(o)+s}while(o!=i)
e(r).replaceWith('<span id="fr-break"></span>')
var l=t.node.openTagString(i)+e(i).html()+t.node.closeTagString(i)
l=l.replace(/<span id="fr-break"><\/span>/g,a+'<span class="fr-marker"></span>'+s),e(i).replaceWith(l)}return t.$el.find(".fr-marker").get(0)},insertAtPoint:function(e){var i=e.clientX,o=e.clientY
r()
var a,s=null
if(void 0!==t.doc.caretPositionFromPoint?(a=t.doc.caretPositionFromPoint(i,o),(s=t.doc.createRange()).setStart(a.offsetNode,a.offset),s.setEnd(a.offsetNode,a.offset)):void 0!==t.doc.caretRangeFromPoint&&(a=t.doc.caretRangeFromPoint(i,o),(s=t.doc.createRange()).setStart(a.startContainer,a.startOffset),s.setEnd(a.startContainer,a.startOffset)),null!==s&&void 0!==t.win.getSelection){var l=t.win.getSelection()
l.removeAllRanges(),l.addRange(s)}else if(void 0!==t.doc.body.createTextRange)try{(s=t.doc.body.createTextRange()).moveToPoint(i,o)
var u=s.duplicate()
u.moveToPoint(i,o),s.setEndPoint("EndToEnd",u),s.select()}catch(e){return!1}n()},remove:r}},e.FE.MODULES.selection=function(t){function n(){var e=""
return t.win.getSelection?e=t.win.getSelection():t.doc.getSelection?e=t.doc.getSelection():t.doc.selection&&(e=t.doc.selection.createRange().text),e.toString()}function r(){return t.win.getSelection?t.win.getSelection():t.doc.getSelection?t.doc.getSelection():t.doc.selection.createRange()}function i(e){var n=r(),i=[]
if(n&&n.getRangeAt&&n.rangeCount){i=[]
for(var o=0;o<n.rangeCount;o++)i.push(n.getRangeAt(o))}else i=t.doc.createRange?[t.doc.createRange()]:[]
return void 0!==e?i[e]:i}function o(){var e=r()
try{e.removeAllRanges?e.removeAllRanges():e.empty?e.empty():e.clear&&e.clear()}catch(e){}}function a(e,t){var n=e
return n.nodeType==Node.ELEMENT_NODE&&n.childNodes.length>0&&n.childNodes[t]&&(n=n.childNodes[t]),n.nodeType==Node.TEXT_NODE&&(n=n.parentNode),n}function s(){if(t.$wp){t.markers.remove()
var n,r,o=i(),a=[]
for(r=0;r<o.length;r++)if(o[r].startContainer!==t.doc||t.browser.msie){var s=(n=o[r]).collapsed,l=t.markers.place(n,!0,r),u=t.markers.place(n,!1,r)
void 0!==l&&l||!s||(e(".fr-marker").remove(),t.selection.setAtEnd(t.el)),t.el.normalize(),t.browser.safari&&!s&&((n=t.doc.createRange()).setStartAfter(l),n.setEndBefore(u),a.push(n))}if(t.browser.safari&&a.length)for(t.selection.clear(),r=0;r<a.length;r++)t.selection.get().addRange(a[r])}}function l(){var n,i=t.el.querySelectorAll('.fr-marker[data-type="true"]')
if(!t.$wp)return t.markers.remove(),!1
if(0===i.length)return!1
if(t.browser.msie||t.browser.edge)for(n=0;n<i.length;n++)i[n].style.display="inline-block"
t.core.hasFocus()||t.browser.msie||t.browser.webkit||t.$el.focus(),o()
var a=r()
for(n=0;n<i.length;n++){var s=e(i[n]).data("id"),l=i[n],c=t.doc.createRange(),f=t.$el.find('.fr-marker[data-type="false"][data-id="'+s+'"]');(t.browser.msie||t.browser.edge)&&f.css("display","inline-block")
var p=null
if(f.length>0){f=f[0]
try{for(var d,h=!1,m=l.nextSibling;m&&m.nodeType==Node.TEXT_NODE&&0===m.textContent.length;)d=m,m=m.nextSibling,e(d).remove()
for(var g=f.nextSibling;g&&g.nodeType==Node.TEXT_NODE&&0===g.textContent.length;)d=g,g=g.nextSibling,e(d).remove()
if(l.nextSibling==f||f.nextSibling==l){for(var v=l.nextSibling==f?l:f,b=v==l?f:l,y=v.previousSibling;y&&y.nodeType==Node.TEXT_NODE&&0===y.length;)d=y,y=y.previousSibling,e(d).remove()
if(y&&y.nodeType==Node.TEXT_NODE)for(;y&&y.previousSibling&&y.previousSibling.nodeType==Node.TEXT_NODE;)y.previousSibling.textContent=y.previousSibling.textContent+y.textContent,y=y.previousSibling,e(y.nextSibling).remove()
for(var E=b.nextSibling;E&&E.nodeType==Node.TEXT_NODE&&0===E.length;)d=E,E=E.nextSibling,e(d).remove()
if(E&&E.nodeType==Node.TEXT_NODE)for(;E&&E.nextSibling&&E.nextSibling.nodeType==Node.TEXT_NODE;)E.nextSibling.textContent=E.textContent+E.nextSibling.textContent,E=E.nextSibling,e(E.previousSibling).remove()
if(y&&(t.node.isVoid(y)||t.node.isBlock(y))&&(y=null),E&&(t.node.isVoid(E)||t.node.isBlock(E))&&(E=null),y&&E&&y.nodeType==Node.TEXT_NODE&&E.nodeType==Node.TEXT_NODE){e(l).remove(),e(f).remove()
var T=y.textContent.length
y.textContent=y.textContent+E.textContent,e(E).remove(),t.spaces.normalize(y),c.setStart(y,T),c.setEnd(y,T),h=!0}else!y&&E&&E.nodeType==Node.TEXT_NODE?(e(l).remove(),e(f).remove(),t.spaces.normalize(E),p=e(t.doc.createTextNode("​")),e(E).before(p),c.setStart(E,0),c.setEnd(E,0),h=!0):!E&&y&&y.nodeType==Node.TEXT_NODE&&(e(l).remove(),e(f).remove(),t.spaces.normalize(y),p=e(t.doc.createTextNode("​")),e(y).after(p),c.setStart(y,y.textContent.length),c.setEnd(y,y.textContent.length),h=!0)}var _,A
if(!h)(t.browser.chrome||t.browser.edge)&&l.nextSibling==f?(_=u(f,c,!0)||c.setStartAfter(f),A=u(l,c,!1)||c.setEndBefore(l)):(l.previousSibling==f&&(f=(l=f).nextSibling),f.nextSibling&&"BR"===f.nextSibling.tagName||!f.nextSibling&&t.node.isBlock(l.previousSibling)||l.previousSibling&&"BR"==l.previousSibling.tagName||(l.style.display="inline",f.style.display="inline",p=e(t.doc.createTextNode("​"))),_=u(l,c,!0)||e(l).before(p)&&c.setStartBefore(l),A=u(f,c,!1)||e(f).after(p)&&c.setEndAfter(f)),"function"==typeof _&&_(),"function"==typeof A&&A()}catch(e){}}p&&p.remove()
try{a.addRange(c)}catch(e){}}t.markers.remove()}function u(n,r,i){var o,a=n.previousSibling,s=n.nextSibling
return a&&s&&a.nodeType==Node.TEXT_NODE&&s.nodeType==Node.TEXT_NODE?(o=a.textContent.length,i?(s.textContent=a.textContent+s.textContent,e(a).remove(),e(n).remove(),t.spaces.normalize(s),function(){r.setStart(s,o)}):(a.textContent=a.textContent+s.textContent,e(s).remove(),e(n).remove(),t.spaces.normalize(a),function(){r.setEnd(a,o)})):a&&!s&&a.nodeType==Node.TEXT_NODE?(o=a.textContent.length,i?(t.spaces.normalize(a),function(){r.setStart(a,o)}):(t.spaces.normalize(a),function(){r.setEnd(a,o)})):!(!s||a||s.nodeType!=Node.TEXT_NODE)&&(i?(t.spaces.normalize(s),function(){r.setStart(s,0)}):(t.spaces.normalize(s),function(){r.setEnd(s,0)}))}function c(){for(var e=i(),t=0;t<e.length;t++)if(!e[t].collapsed)return!1
return!0}function f(e){var n,r,i=!1,o=!1
if(t.win.getSelection){var a=t.win.getSelection()
a.rangeCount&&((r=(n=a.getRangeAt(0)).cloneRange()).selectNodeContents(e),r.setEnd(n.startContainer,n.startOffset),i=""===r.toString(),r.selectNodeContents(e),r.setStart(n.endContainer,n.endOffset),o=""===r.toString())}else t.doc.selection&&"Control"!=t.doc.selection.type&&((r=(n=t.doc.selection.createRange()).duplicate()).moveToElementText(e),r.setEndPoint("EndToStart",n),i=""===r.text,r.moveToElementText(e),r.setEndPoint("StartToEnd",n),o=""===r.text)
return{atStart:i,atEnd:o}}function p(n,r){void 0===r&&(r=!0)
var i=e(n).html()
i&&i.replace(/\u200b/g,"").length!=i.length&&e(n).html(i.replace(/\u200b/g,""))
for(var o=t.node.contents(n),a=0;a<o.length;a++)o[a].nodeType!=Node.ELEMENT_NODE?e(o[a]).remove():(p(o[a],0===a),0===a&&(r=!1))
n.nodeType==Node.TEXT_NODE?e(n).replaceWith('<span data-first="true" data-text="true"></span>'):r&&e(n).attr("data-first",!0)}function d(){return 0===e(this).find("fr-inner").length}function h(n,r){var i=t.node.contents(n.get(0));["TD","TH"].indexOf(n.get(0).tagName)>=0&&1==n.find(".fr-marker").length&&t.node.hasClass(i[0],"fr-marker")&&n.attr("data-del-cell",!0)
for(var o=0;o<i.length;o++){var a=i[o]
t.node.hasClass(a,"fr-marker")?r=(r+1)%2:r?e(a).find(".fr-marker").length>0?r=h(e(a),r):["TD","TH"].indexOf(a.tagName)<0&&!t.node.hasClass(a,"fr-inner")?!t.opts.keepFormatOnDelete||t.$el.find("[data-first]").length>0?e(a).remove():p(a):t.node.hasClass(a,"fr-inner")?0===e(a).find(".fr-inner").length?e(a).html("<br>"):e(a).find(".fr-inner").filter(d).html("<br>"):(e(a).empty(),e(a).attr("data-del-cell",!0)):e(a).find(".fr-marker").length>0&&(r=h(e(a),r))}return r}function m(){try{if(!t.$wp)return!1
for(var e=i(0).commonAncestorContainer;e&&!t.node.isElement(e);)e=e.parentNode
return!!t.node.isElement(e)}catch(e){return!1}}function g(n,r){if(!n||n.getElementsByClassName("fr-marker").length>0)return!1
for(var i=n.firstChild;i&&(t.node.isBlock(i)||r&&!t.node.isVoid(i)&&i.nodeType==Node.ELEMENT_NODE);)n=i,i=i.firstChild
n.innerHTML=e.FE.MARKERS+n.innerHTML}function v(n,r){if(!n||n.getElementsByClassName("fr-marker").length>0)return!1
for(var i=n.lastChild;i&&(t.node.isBlock(i)||r&&!t.node.isVoid(i)&&i.nodeType==Node.ELEMENT_NODE);)n=i,i=i.lastChild
var o=t.doc.createElement("SPAN")
o.setAttribute("id","fr-sel-markers"),o.innerHTML=e.FE.MARKERS,n.appendChild(o)
var a=n.querySelector("#fr-sel-markers")
a.outerHTML=a.innerHTML}return{text:n,get:r,ranges:i,clear:o,element:function(){var o=r()
try{if(o.rangeCount){var a,s=i(0),l=s.startContainer
if(l.nodeType==Node.TEXT_NODE&&s.startOffset==(l.textContent||"").length&&l.nextSibling&&(l=l.nextSibling),l.nodeType==Node.ELEMENT_NODE){var u=!1
if(l.childNodes.length>0&&l.childNodes[s.startOffset]){for(a=l.childNodes[s.startOffset];a&&a.nodeType==Node.TEXT_NODE&&0===a.textContent.length;)a=a.nextSibling
if(a&&a.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=a,u=!0),!u&&l.childNodes.length>1&&s.startOffset>0&&l.childNodes[s.startOffset-1]){for(a=l.childNodes[s.startOffset-1];a&&a.nodeType==Node.TEXT_NODE&&0===a.textContent.length;)a=a.nextSibling
a&&a.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=a,u=!0)}}else!s.collapsed&&l.nextSibling&&l.nextSibling.nodeType==Node.ELEMENT_NODE&&(a=l.nextSibling)&&a.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=a,u=!0)
!u&&l.childNodes.length>0&&e(l.childNodes[0]).text().replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&["BR","IMG","HR"].indexOf(l.childNodes[0].tagName)<0&&(l=l.childNodes[0])}for(;l.nodeType!=Node.ELEMENT_NODE&&l.parentNode;)l=l.parentNode
for(var c=l;c&&"HTML"!=c.tagName;){if(c==t.el)return l
c=e(c).parent()[0]}}}catch(e){}return t.el},endElement:function(){var o=r()
try{if(o.rangeCount){var a,s=i(0),l=s.endContainer
if(l.nodeType==Node.ELEMENT_NODE){var u=!1
l.childNodes.length>0&&l.childNodes[s.endOffset]&&e(l.childNodes[s.endOffset]).text()===n()?(l=l.childNodes[s.endOffset],u=!0):!s.collapsed&&l.previousSibling&&l.previousSibling.nodeType==Node.ELEMENT_NODE?(a=l.previousSibling)&&a.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=a,u=!0):!s.collapsed&&l.childNodes.length>0&&l.childNodes[s.endOffset]&&(a=l.childNodes[s.endOffset].previousSibling).nodeType==Node.ELEMENT_NODE&&a&&a.textContent.replace(/\u200B/g,"")===n().replace(/\u200B/g,"")&&(l=a,u=!0),!u&&l.childNodes.length>0&&e(l.childNodes[l.childNodes.length-1]).text()===n()&&["BR","IMG","HR"].indexOf(l.childNodes[l.childNodes.length-1].tagName)<0&&(l=l.childNodes[l.childNodes.length-1])}for(l.nodeType==Node.TEXT_NODE&&0===s.endOffset&&l.previousSibling&&l.previousSibling.nodeType==Node.ELEMENT_NODE&&(l=l.previousSibling);l.nodeType!=Node.ELEMENT_NODE&&l.parentNode;)l=l.parentNode
for(var c=l;c&&"HTML"!=c.tagName;){if(c==t.el)return l
c=e(c).parent()[0]}}}catch(e){}return t.el},save:s,restore:l,isCollapsed:c,isFull:function(){if(c())return!1
t.$el.find("td, th, img, br:not(:last)").prepend('<span class="fr-mk">'+e.FE.INVISIBLE_SPACE+"</span>")
var n=!1,r=f(t.el)
return r.atStart&&r.atEnd&&(n=!0),t.$el.find(".fr-mk").remove(),n},inEditor:m,remove:function(){if(c())return!0
var n
s()
var r=function(t){for(var n=t.previousSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;){var r=n
n=n.previousSibling,e(r).remove()}return n},i=function(t){for(var n=t.nextSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;){var r=n
n=n.nextSibling,e(r).remove()}return n},o=t.$el.find('.fr-marker[data-type="true"]')
for(n=0;n<o.length;n++)for(var a=o[n];!(r(a)||t.node.isBlock(a.parentNode)||t.$el.is(a.parentNode)||t.node.hasClass(a.parentNode,"fr-inner"));)e(a.parentNode).before(a)
var u=t.$el.find('.fr-marker[data-type="false"]')
for(n=0;n<u.length;n++){for(var f=u[n];!(i(f)||t.node.isBlock(f.parentNode)||t.$el.is(f.parentNode)||t.node.hasClass(f.parentNode,"fr-inner"));)e(f.parentNode).after(f)
f.parentNode&&t.node.isBlock(f.parentNode)&&t.node.isEmpty(f.parentNode)&&!t.$el.is(f.parentNode)&&!t.node.hasClass(f.parentNode,"fr-inner")&&t.opts.keepFormatOnDelete&&e(f.parentNode).after(f)}if(function(){for(var n=t.$el.find(".fr-marker"),r=0;r<n.length;r++)if(e(n[r]).parentsUntil('.fr-element, [contenteditable="true"]','[contenteditable="false"]').length)return!1
return!0}()){h(t.$el,0)
var p=t.$el.find('[data-first="true"]')
if(p.length)t.$el.find(".fr-marker").remove(),p.append(e.FE.INVISIBLE_SPACE+e.FE.MARKERS).removeAttr("data-first"),p.attr("data-text")&&p.replaceWith(p.html())
else for(t.$el.find("table").filter(function(){return e(this).find("[data-del-cell]").length>0&&e(this).find("[data-del-cell]").length==e(this).find("td, th").length}).remove(),t.$el.find("[data-del-cell]").removeAttr("data-del-cell"),o=t.$el.find('.fr-marker[data-type="true"]'),n=0;n<o.length;n++){var d=o[n],m=d.nextSibling,g=t.$el.find('.fr-marker[data-type="false"][data-id="'+e(d).data("id")+'"]').get(0)
if(g){if(d&&(!m||m!=g)){var v=t.node.blockParent(d),b=t.node.blockParent(g),y=!1,E=!1
if(v&&["UL","OL"].indexOf(v.tagName)>=0&&(v=null,y=!0),b&&["UL","OL"].indexOf(b.tagName)>=0&&(b=null,E=!0),e(d).after(g),v!=b)if(null!=v||y)if(null!=b||E||0!==e(v).parentsUntil(t.$el,"table").length)v&&b&&0===e(v).parentsUntil(t.$el,"table").length&&0===e(b).parentsUntil(t.$el,"table").length&&0===e(v).find(b).length&&0===e(b).find(v).length&&(e(v).append(e(b).html()),e(b).remove())
else{for(m=v;!m.nextSibling&&m.parentNode!=t.el;)m=m.parentNode
for(m=m.nextSibling;m&&"BR"!=m.tagName;){var T=m.nextSibling
e(v).append(m),m=T}m&&"BR"==m.tagName&&e(m).remove()}else{var _=t.node.deepestParent(d)
_?(e(_).after(e(b).html()),e(b).remove()):0===e(b).parentsUntil(t.$el,"table").length&&(e(d).next().after(e(b).html()),e(b).remove())}}}else g=e(d).clone().attr("data-type",!1),e(d).after(g)}}t.opts.keepFormatOnDelete||t.html.fillEmptyBlocks(),t.html.cleanEmptyTags(!0),t.clean.lists(),t.opts.htmlUntouched||t.spaces.normalize()
var A=t.$el.find(".fr-marker:last").get(0),w=t.$el.find(".fr-marker:first").get(0)
void 0!==A&&void 0!==w&&!A.nextSibling&&w.previousSibling&&"BR"==w.previousSibling.tagName&&t.node.isElement(A.parentNode)&&t.node.isElement(w.parentNode)&&t.$el.append("<br>"),l()},blocks:function(){var n,o=[],s=r()
if(m()&&s.rangeCount){var l=i()
for(n=0;n<l.length;n++){var u,c=l[n],f=a(c.startContainer,c.startOffset),p=a(c.endContainer,c.endOffset);(t.node.isBlock(f)||t.node.hasClass(f,"fr-inner"))&&o.indexOf(f)<0&&o.push(f),(u=t.node.blockParent(f))&&o.indexOf(u)<0&&o.push(u)
for(var d=[],h=f;h!==p&&h!==t.el;)d.indexOf(h)<0&&h.children&&h.children.length?(d.push(h),h=h.children[0]):h.nextSibling?h=h.nextSibling:h.parentNode&&(h=h.parentNode,d.push(h)),t.node.isBlock(h)&&d.indexOf(h)<0&&o.indexOf(h)<0&&(h!==p||c.endOffset>0)&&o.push(h)
t.node.isBlock(p)&&o.indexOf(p)<0&&c.endOffset>0&&o.push(p),(u=t.node.blockParent(p))&&o.indexOf(u)<0&&o.push(u)}}for(n=o.length-1;n>0;n--)e(o[n]).find(o).length&&o.splice(n,1)
return o},info:f,setAtEnd:v,setAtStart:g,setBefore:function(n,r){void 0===r&&(r=!0)
for(var i=n.previousSibling;i&&i.nodeType==Node.TEXT_NODE&&0===i.textContent.length;)i=i.previousSibling
return i?(t.node.isBlock(i)?v(i):"BR"==i.tagName?e(i).before(e.FE.MARKERS):e(i).after(e.FE.MARKERS),!0):!!r&&(t.node.isBlock(n)?g(n):e(n).before(e.FE.MARKERS),!0)},setAfter:function(n,r){void 0===r&&(r=!0)
for(var i=n.nextSibling;i&&i.nodeType==Node.TEXT_NODE&&0===i.textContent.length;)i=i.nextSibling
return i?(t.node.isBlock(i)?g(i):e(i).before(e.FE.MARKERS),!0):!!r&&(t.node.isBlock(n)?v(n):e(n).after(e.FE.MARKERS),!0)},rangeElement:a}},e.extend(e.FE.DEFAULTS,{htmlAllowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","style","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video","wbr"],htmlRemoveTags:["script","style"],htmlAllowedAttrs:["accept","accept-charset","accesskey","action","align","allowfullscreen","allowtransparency","alt","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","frameborder","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","mozallowfullscreen","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","webkitallowfullscreen","width","wrap"],htmlAllowedStyleProps:[".*"],htmlAllowComments:!0,htmlUntouched:!1,fullPage:!1}),e.FE.HTML5Map={B:"STRONG",I:"EM",STRIKE:"S"},e.FE.MODULES.clean=function(t){function n(e){if(e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&e.getAttribute("class").indexOf("fr-marker")>=0)return!1
var r,i=t.node.contents(e),o=[]
for(r=0;r<i.length;r++)i[r].nodeType!=Node.ELEMENT_NODE||t.node.isVoid(i[r])?i[r].nodeType==Node.TEXT_NODE&&(i[r].textContent=i[r].textContent.replace(/\u200b/g,"")):i[r].textContent.replace(/\u200b/g,"").length!=i[r].textContent.length&&n(i[r])
if(e.nodeType==Node.ELEMENT_NODE&&!t.node.isVoid(e)&&(e.normalize(),i=t.node.contents(e),o=e.querySelectorAll(".fr-marker"),i.length-o.length==0)){for(r=0;r<i.length;r++)if((i[r].getAttribute("class")||"").indexOf("fr-marker")<0)return!1
for(r=0;r<o.length;r++)e.parentNode.insertBefore(o[r].cloneNode(!0),e)
return e.parentNode.removeChild(e),!1}}function r(e,n){if(e.nodeType==Node.COMMENT_NODE)return"\x3c!--"+e.nodeValue+"--\x3e"
if(e.nodeType==Node.TEXT_NODE)return n?e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00A0/g,"&nbsp;").replace(/\u0009/g,"")
if(e.nodeType!=Node.ELEMENT_NODE)return e.outerHTML
if(e.nodeType==Node.ELEMENT_NODE&&["STYLE","SCRIPT","NOSCRIPT"].indexOf(e.tagName)>=0)return e.outerHTML
if(e.nodeType==Node.ELEMENT_NODE&&"svg"==e.tagName){var i=document.createElement("div"),o=e.cloneNode(!0)
return i.appendChild(o),i.innerHTML}if("IFRAME"==e.tagName)return e.outerHTML.replace(/\&lt;/g,"<").replace(/\&gt;/g,">")
var a=e.childNodes
if(0===a.length)return e.outerHTML
for(var s="",l=0;l<a.length;l++)"PRE"==e.tagName&&(n=!0),s+=r(a[l],n)
return t.node.openTagString(e)+s+t.node.closeTagString(e)}function i(e){var t=e.replace(/;;/gi,";")
return";"!=(t=t.replace(/^;/gi,"")).charAt(t.length)&&(t+=";"),t}function o(e){var n
for(n in e)if(e.hasOwnProperty(n)){var r=n.match(h),o=null
"style"==n&&t.opts.htmlAllowedStyleProps.length&&(o=e[n].match(m)),r&&o?e[n]=i(o.join(";")):(!r||"style"==n&&!o)&&delete e[n]}for(var a="",s=Object.keys(e).sort(),l=0;l<s.length;l++)a+=e[n=s[l]].indexOf('"')<0?" "+n+'="'+e[n]+'"':" "+n+"='"+e[n]+"'"
return a}function a(e,n,r){if(t.opts.fullPage){var i=t.html.extractDoctype(r),a=o(t.html.extractNodeAttrs(r,"html"))
return n=null==n?t.html.extractNode(r,"head")||"<title></title>":n,i+"<html"+a+"><head"+o(t.html.extractNodeAttrs(r,"head"))+">"+n+"</head><body"+o(t.html.extractNodeAttrs(r,"body"))+">"+e+"</body></html>"}return e}function s(e,n){var i,o=(new DOMParser).parseFromString(e,"text/html").body,a=""
if(o){var s=t.node.contents(o)
for(i=0;i<s.length;i++)n(s[i])
for(s=t.node.contents(o),i=0;i<s.length;i++)a+=r(s[i])}return a}function l(e,n,r){var i=e=function(e){return g=[],(e=(e=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,function(e){return g.push(e),"[FROALA.EDITOR.SCRIPT "+(g.length-1)+"]"})).replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi,function(e){return g.push(e),"[FROALA.EDITOR.NOSCRIPT "+(g.length-1)+"]"})).replace(/<img((?:[\w\W]*?)) src="/g,'<img$1 data-fr-src="')}(e),o=null
return t.opts.fullPage&&(i=t.html.extractNode(e,"body")||(e.indexOf("<body")>=0?"":e),r&&(o=t.html.extractNode(e,"head")||"")),i=s(i,n),o&&(o=s(o,n)),function(e){return(e=(e=e.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi,function(e,n){return t.opts.htmlRemoveTags.indexOf("script")>=0?"":g[parseInt(n,10)]})).replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi,function(e,n){return t.opts.htmlRemoveTags.indexOf("noscript")>=0?"":g[parseInt(n,10)].replace(/\&lt;/g,"<").replace(/\&gt;/g,">")})).replace(/<img((?:[\w\W]*?)) data-fr-src="/g,'<img$1 src="')}(a(i,o,e))}function u(e){var n=t.doc.createElement("DIV")
return n.innerText=e,n.textContent}function c(n){if("SPAN"==n.tagName&&(n.getAttribute("class")||"").indexOf("fr-marker")>=0)return!1
if("PRE"==n.tagName&&function(e){var t=e.innerHTML
t.indexOf("\n")>=0&&(e.innerHTML=t.replace(/\n/g,"<br>"))}(n),n.nodeType==Node.ELEMENT_NODE&&(n.getAttribute("data-fr-src")&&0!==n.getAttribute("data-fr-src").indexOf("blob:")&&n.setAttribute("data-fr-src",t.helpers.sanitizeURL(u(n.getAttribute("data-fr-src")))),n.getAttribute("href")&&n.setAttribute("href",t.helpers.sanitizeURL(u(n.getAttribute("href")))),n.getAttribute("src")&&n.setAttribute("src",t.helpers.sanitizeURL(u(n.getAttribute("src")))),["TABLE","TBODY","TFOOT","TR"].indexOf(n.tagName)>=0&&(n.innerHTML=n.innerHTML.trim())),!t.opts.pasteAllowLocalImages&&n.nodeType==Node.ELEMENT_NODE&&"IMG"==n.tagName&&n.getAttribute("data-fr-src")&&0===n.getAttribute("data-fr-src").indexOf("file://"))return n.parentNode.removeChild(n),!1
if(n.nodeType==Node.ELEMENT_NODE&&e.FE.HTML5Map[n.tagName]&&""===t.node.attributes(n)){var r=e.FE.HTML5Map[n.tagName],o="<"+r+">"+n.innerHTML+"</"+r+">"
n.insertAdjacentHTML("beforebegin",o),(n=n.previousSibling).parentNode.removeChild(n.nextSibling)}if(t.opts.htmlAllowComments||n.nodeType!=Node.COMMENT_NODE)if(n.tagName&&n.tagName.match(d))n.parentNode.removeChild(n)
else if(n.tagName&&!n.tagName.match(p))"svg"===n.tagName?n.parentNode.removeChild(n):t.browser.safari&&"path"==n.tagName&&n.parentNode&&"svg"==n.parentNode.tagName||(n.outerHTML=n.innerHTML)
else{var a=n.attributes
if(a)for(var s=a.length-1;s>=0;s--){var l=a[s],c=l.nodeName.match(h),f=null
"style"==l.nodeName&&t.opts.htmlAllowedStyleProps.length&&(f=l.value.match(m)),c&&f?l.value=i(f.join(";")):(!c||"style"==l.nodeName&&!f)&&n.removeAttribute(l.nodeName)}}else 0!==n.data.indexOf("[FROALA.EDITOR")&&n.parentNode.removeChild(n)}function f(e){for(var n=t.node.contents(e),r=0;r<n.length;r++)n[r].nodeType!=Node.TEXT_NODE&&f(n[r])
c(e)}var p,d,h,m,g=[]
return{_init:function(){t.opts.fullPage&&e.merge(t.opts.htmlAllowedTags,["head","title","style","link","base","body","html","meta"])},html:function(n,r,i,o){void 0===r&&(r=[]),void 0===i&&(i=[]),void 0===o&&(o=!1)
var a,s=e.merge([],t.opts.htmlAllowedTags)
for(a=0;a<r.length;a++)s.indexOf(r[a])>=0&&s.splice(s.indexOf(r[a]),1)
var u=e.merge([],t.opts.htmlAllowedAttrs)
for(a=0;a<i.length;a++)u.indexOf(i[a])>=0&&u.splice(u.indexOf(i[a]),1)
return u.push("data-fr-.*"),u.push("fr-.*"),p=new RegExp("^"+s.join("$|^")+"$","gi"),h=new RegExp("^"+u.join("$|^")+"$","gi"),d=new RegExp("^"+t.opts.htmlRemoveTags.join("$|^")+"$","gi"),m=t.opts.htmlAllowedStyleProps.length?new RegExp("((^|;|\\s)"+t.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)")+":.+?(?=(;)|$))","gi"):null,l(n,f,!0)},toHTML5:function(){var n=t.el.querySelectorAll(Object.keys(e.FE.HTML5Map).join(","))
if(n.length){var r=!1
t.el.querySelector(".fr-marker")||(t.selection.save(),r=!0)
for(var i=0;i<n.length;i++)""===t.node.attributes(n[i])&&e(n[i]).replaceWith("<"+e.FE.HTML5Map[n[i].tagName]+">"+n[i].innerHTML+"</"+e.FE.HTML5Map[n[i].tagName]+">")
r&&t.selection.restore()}},tables:function(){(function(){for(var e=t.el.querySelectorAll("tr"),n=0;n<e.length;n++){for(var r=e[n].children,i=!0,o=0;o<r.length;o++)if("TH"!=r[o].tagName){i=!1
break}if(!1!==i&&0!==r.length){for(var a=e[n];a&&"TABLE"!=a.tagName&&"THEAD"!=a.tagName;)a=a.parentNode
var s=a
"THEAD"!=s.tagName&&(s=t.doc.createElement("THEAD"),a.insertBefore(s,a.firstChild)),s.appendChild(e[n])}}})()},lists:function(){(function(){var e=[],n=function(e){return!t.node.isList(e.parentNode)}
do{if(e.length){var r=e[0],i=t.doc.createElement("ul")
r.parentNode.insertBefore(i,r)
do{var o=r
r=r.nextSibling,i.appendChild(o)}while(r&&"LI"==r.tagName)}e=[]
for(var a=t.el.querySelectorAll("li"),s=0;s<a.length;s++)n(a[s])&&e.push(a[s])}while(e.length>0)})(),function(){for(var e=t.el.querySelectorAll("ol + ol, ul + ul"),n=0;n<e.length;n++){var r=e[n]
if(t.node.isList(r.previousSibling)&&t.node.openTagString(r)==t.node.openTagString(r.previousSibling)){for(var i=t.node.contents(r),o=0;o<i.length;o++)r.previousSibling.appendChild(i[o])
r.parentNode.removeChild(r)}}}(),function(){for(var n=t.el.querySelectorAll("ul, ol"),r=0;r<n.length;r++)for(var i=t.node.contents(n[r]),o=null,a=i.length-1;a>=0;a--)"LI"!=i[a].tagName?(o||(o=e("<li>")).insertBefore(i[a]),o.prepend(i[a])):o=null}(),function(){var e,n,r=function(e){e.querySelector("LI")||(n=!0,e.parentNode.removeChild(e))}
do{n=!1
var i=t.el.querySelectorAll("li:empty")
for(e=0;e<i.length;e++)i[e].parentNode.removeChild(i[e])
var o=t.el.querySelectorAll("ul, ol")
for(e=0;e<o.length;e++)r(o[e])}while(!0===n)}(),function(){for(var n=t.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"),r=0;r<n.length;r++){var i=n[r],o=i.previousSibling
o&&("LI"==o.tagName?o.appendChild(i):e(i).wrap("<li></li>"))}}(),function(){for(var n=t.el.querySelectorAll("li > ul, li > ol"),r=0;r<n.length;r++){var i=n[r]
if(i.nextSibling){var o=i.nextSibling,a=e("<li>")
e(i.parentNode).after(a)
do{var s=o
o=o.nextSibling,a.append(s)}while(o)}}}(),function(){for(var n=t.el.querySelectorAll("li > ul, li > ol"),r=0;r<n.length;r++){var i=n[r]
if(t.node.isFirstSibling(i))e(i).before("<br/>")
else if(i.previousSibling&&"BR"==i.previousSibling.tagName){for(var o=i.previousSibling.previousSibling;o&&t.node.hasClass(o,"fr-marker");)o=o.previousSibling
o&&"BR"!=o.tagName&&e(i.previousSibling).remove()}}}(),function(){for(var n=t.el.querySelectorAll("li:empty"),r=0;r<n.length;r++)e(n[r]).remove()}()},invisibleSpaces:function(e){return e.replace(/\u200b/g,"").length==e.length?e:t.clean.exec(e,n)},exec:l}},e.FE.MODULES.spaces=function(t){function n(n,r){var i=n.previousSibling,o=n.nextSibling,a=n.textContent,s=n.parentNode
if(!t.html.isPreformatted(s)){r&&(a=a.replace(/[\f\n\r\t\v ]{2,}/g," "),o&&"BR"!==o.tagName&&!t.node.isBlock(o)||!(t.node.isBlock(s)||t.node.isLink(s)||t.node.isElement(s))||(a=a.replace(/[\f\n\r\t\v ]{1,}$/g,"")),i&&"BR"!==i.tagName&&!t.node.isBlock(i)||!(t.node.isBlock(s)||t.node.isLink(s)||t.node.isElement(s))||(a=a.replace(/^[\f\n\r\t\v ]{1,}/g,""))," "===a&&(i&&t.node.isVoid(i)||o&&t.node.isVoid(o))&&(a="")),(!i&&t.node.isBlock(o)||!o&&t.node.isBlock(i))&&t.node.isBlock(s)&&(a=a.replace(/^[\f\n\r\t\v ]{1,}/g,"")),r||(a=a.replace(new RegExp(e.FE.UNICODE_NBSP,"g")," "))
for(var l="",u=0;u<a.length;u++)l+=32!=a.charCodeAt(u)||0!==u&&32!=l.charCodeAt(u-1)?a[u]:e.FE.UNICODE_NBSP;(!o||o&&t.node.isBlock(o)||o&&o.nodeType==Node.ELEMENT_NODE&&t.win.getComputedStyle(o)&&"block"==t.win.getComputedStyle(o).display)&&(l=l.replace(/ $/,e.FE.UNICODE_NBSP)),!i||t.node.isVoid(i)||t.node.isBlock(i)||(1!==(l=l.replace(/^\u00A0([^ $])/," $1")).length||160!==l.charCodeAt(0)||!o||t.node.isVoid(o)||t.node.isBlock(o)||(l=" ")),r||(l=l.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g,"$1 $2")),n.textContent!=l&&(n.textContent=l)}}function r(e,r){if(void 0!==e&&e||(e=t.el),void 0===r&&(r=!1),!e.getAttribute||"false"!=e.getAttribute("contenteditable"))if(e.nodeType==Node.TEXT_NODE)n(e,r)
else if(e.nodeType==Node.ELEMENT_NODE)for(var i=t.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,t.node.filter(function(e){for(var n=e.parentNode;n&&n!==t.el;){if("STYLE"==n.tagName||"IFRAME"==n.tagName)return!1
if("PRE"===n.tagName)return!1
n=n.parentNode}return null!=e.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g)&&!t.node.hasClass(e.parentNode,"fr-marker")}),!1);i.nextNode();)n(i.currentNode,r)}return{normalize:r,normalizeAroundCursor:function(){for(var e=[],n=t.el.querySelectorAll(".fr-marker"),i=0;i<n.length;i++){for(var o,a=t.node.blockParent(n[i]),s=(o=a||n[i]).nextSibling,l=o.previousSibling;s&&"BR"==s.tagName;)s=s.nextSibling
for(;l&&"BR"==l.tagName;)l=l.previousSibling
o&&e.indexOf(o)<0&&e.push(o),l&&e.indexOf(l)<0&&e.push(l),s&&e.indexOf(s)<0&&e.push(s)}for(var u=0;u<e.length;u++)r(e[u])}}},e.FE.UNICODE_NBSP=String.fromCharCode(160),e.FE.VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],e.FE.BLOCK_TAGS=["address","article","aside","audio","blockquote","canvas","details","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul","video"],e.extend(e.FE.DEFAULTS,{htmlAllowedEmptyTags:["textarea","a","iframe","object","video","style","script",".fa",".fr-emoticon",".fr-inner","path","line"],htmlDoNotWrapTags:["script","style"],htmlSimpleAmpersand:!1,htmlIgnoreCSSProperties:[],htmlExecuteScripts:!0}),e.FE.MODULES.html=function(t){function n(){return t.opts.enter==e.FE.ENTER_P?"p":t.opts.enter==e.FE.ENTER_DIV?"div":t.opts.enter==e.FE.ENTER_BR?null:void 0}function r(e,n){return!(!e||e===t.el)&&(n?-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName)||r(e.parentNode,n):-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName))}function i(n){var r,i=[],a=[]
if(n){var s=t.el.querySelectorAll(".fr-marker")
for(r=0;r<s.length;r++){var l=t.node.blockParent(s[r])||s[r]
if(l){var u=l.nextSibling,c=l.previousSibling
l&&a.indexOf(l)<0&&t.node.isBlock(l)&&a.push(l),c&&t.node.isBlock(c)&&a.indexOf(c)<0&&a.push(c),u&&t.node.isBlock(u)&&a.indexOf(u)<0&&a.push(u)}}}else a=t.el.querySelectorAll(o())
var f=o()
for(f+=","+e.FE.VOID_ELEMENTS.join(","),f+=", .fr-inner",f+=","+t.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)",r=a.length-1;r>=0;r--)if(!(a[r].textContent&&a[r].textContent.replace(/\u200B|\n/g,"").length>0||a[r].querySelectorAll(f).length>0)){for(var p=t.node.contents(a[r]),d=!1,h=0;h<p.length;h++)if(p[h].nodeType!=Node.COMMENT_NODE&&p[h].textContent&&p[h].textContent.replace(/\u200B|\n/g,"").length>0){d=!0
break}d||i.push(a[r])}return i}function o(){return e.FE.BLOCK_TAGS.join(", ")}function a(n){var r,i,o=e.merge([],e.FE.VOID_ELEMENTS)
o=e.merge(o,t.opts.htmlAllowedEmptyTags),o=void 0===n?e.merge(o,e.FE.BLOCK_TAGS):e.merge(o,e.FE.NO_DELETE_TAGS),r=t.el.querySelectorAll("*:empty:not("+o.join("):not(")+"):not(.fr-marker)")
do{i=!1
for(var a=0;a<r.length;a++)(0===r[a].attributes.length||void 0!==r[a].getAttribute("href"))&&(r[a].parentNode.removeChild(r[a]),i=!0)
r=t.el.querySelectorAll("*:empty:not("+o.join("):not(")+"):not(.fr-marker)")}while(r.length&&i)}function s(e,r){var i=n()
if(r&&(i="div"),i){for(var o=t.doc.createDocumentFragment(),a=null,s=!1,l=e.firstChild,u=!1;l;){var c=l.nextSibling
if(l.nodeType==Node.ELEMENT_NODE&&(t.node.isBlock(l)||t.opts.htmlDoNotWrapTags.indexOf(l.tagName.toLowerCase())>=0&&!t.node.hasClass(l,"fr-marker")))a=null,o.appendChild(l.cloneNode(!0))
else if(l.nodeType!=Node.ELEMENT_NODE&&l.nodeType!=Node.TEXT_NODE)a=null,o.appendChild(l.cloneNode(!0))
else if("BR"==l.tagName)null==a?(a=t.doc.createElement(i),u=!0,r&&a.setAttribute("class","fr-temp-div"),a.setAttribute("data-empty",!0),a.appendChild(l.cloneNode(!0)),o.appendChild(a)):!1===s&&(a.appendChild(t.doc.createElement("br")),r&&a.setAttribute("class","fr-temp-div"),a.setAttribute("data-empty",!0)),a=null
else{var f=l.textContent;(l.nodeType!==Node.TEXT_NODE||f.replace(/\n/g,"").replace(/(^ *)|( *$)/g,"").length>0||f.length&&f.indexOf("\n")<0)&&(null==a&&(a=t.doc.createElement(i),u=!0,r&&a.setAttribute("class","fr-temp-div"),o.appendChild(a),s=!1),a.appendChild(l.cloneNode(!0)),s||t.node.hasClass(l,"fr-marker")||l.nodeType==Node.TEXT_NODE&&0===f.replace(/ /g,"").length||(s=!0))}l=c}u&&(e.innerHTML="",e.appendChild(o))}}function l(e,t){for(var n=e.length-1;n>=0;n--)s(e[n],t)}function u(e,n,r,i,o){if(!t.$wp)return!1
void 0===e&&(e=!1),void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===i&&(i=!1),void 0===o&&(o=!1)
var a=t.$wp.scrollTop()
s(t.el,e),i&&l(t.el.querySelectorAll(".fr-inner"),e),n&&l(t.el.querySelectorAll("td, th"),e),r&&l(t.el.querySelectorAll("blockquote"),e),o&&l(t.el.querySelectorAll("li"),e),a!=t.$wp.scrollTop()&&t.$wp.scrollTop(a)}function c(e){if(void 0===e&&(e=t.el),e&&["SCRIPT","STYLE","PRE"].indexOf(e.tagName)>=0)return!1
for(var n=t.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,t.node.filter(function(e){return null!=e.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g)}),!1);n.nextNode();){var i=n.currentNode
if(!r(i.parentNode,!0)){var o=t.node.isBlock(i.parentNode)||t.node.isElement(i.parentNode),a=i.textContent.replace(/(?!^)( ){2,}(?!$)/g," ").replace(/\n/g," ").replace(/^[ ]{2,}/g," ").replace(/[ ]{2,}$/g," ")
if(o){var s=i.previousSibling,l=i.nextSibling
s&&l&&" "==a?a=t.node.isBlock(s)&&t.node.isBlock(l)?"":" ":(s||(a=a.replace(/^ */,"")),l||(a=a.replace(/ *$/,"")))}i.textContent=a}}}function f(e,t,n){var r=new RegExp(t,"gi").exec(e)
return r?r[n]:null}function p(e){var t=e.doctype,n="<!DOCTYPE html>"
return t&&(n="<!DOCTYPE "+t.name+(t.publicId?' PUBLIC "'+t.publicId+'"':"")+(!t.publicId&&t.systemId?" SYSTEM":"")+(t.systemId?' "'+t.systemId+'"':"")+">"),n}function d(n){var r=n.parentNode
if(r&&(t.node.isBlock(r)||t.node.isElement(r))&&["TD","TH"].indexOf(r.tagName)<0){for(var i=n.previousSibling,o=n.nextSibling;i&&i.nodeType==Node.TEXT_NODE&&0===i.textContent.replace(/\n|\r/g,"").length;)i=i.previousSibling
i&&r&&"BR"!=i.tagName&&!t.node.isBlock(i)&&!o&&r.textContent.replace(/\u200B/g,"").length>0&&i.textContent.length>0&&!t.node.hasClass(i,"fr-marker")&&(t.el!=r||o||t.opts.enter!=e.FE.ENTER_BR||!t.browser.msie)&&n.parentNode.removeChild(n)}else!r||t.node.isBlock(r)||t.node.isElement(r)||n.previousSibling||n.nextSibling||d(n.parentNode)}function h(){t.opts.htmlUntouched||(a(),u()),c(),t.opts.htmlUntouched||(t.spaces.normalize(null,!0),t.html.fillEmptyBlocks(),t.clean.lists(),t.clean.tables(),t.clean.toHTML5(),t.html.cleanBRs()),t.selection.restore(),m(),t.placeholder.refresh()}function m(){t.core.isEmpty()&&(null!=n()?t.el.querySelector(o())||t.el.querySelector(t.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)")||(t.core.hasFocus()?(t.$el.html("<"+n()+">"+e.FE.MARKERS+"<br/></"+n()+">"),t.selection.restore()):t.$el.html("<"+n()+"><br/></"+n()+">")):t.el.querySelector("*:not(.fr-marker):not(br)")||(t.core.hasFocus()?(t.$el.html(e.FE.MARKERS+"<br/>"),t.selection.restore()):t.$el.html("<br/>")))}function g(e,t){return f(e,"<"+t+"[^>]*?>([\\w\\W]*)</"+t+">",1)}function v(n,r){var i=e("<div "+(f(n,"<"+r+"([^>]*?)>",1)||"")+">")
return t.node.rawAttributes(i.get(0))}function b(e){return(f(e,"<!DOCTYPE([^>]*?)>",0)||"<!DOCTYPE html>").replace(/\n/g," ").replace(/ {2,}/g," ")}function y(e,n){t.opts.htmlExecuteScripts?e.html(n):e.get(0).innerHTML=n}function E(e){return function(){var t=/:not\(([^\)]*)\)/g
t.test(e)&&(e=e.replace(t,"     $1 "))}(),100*(e.match(/(#[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(\[[^\]]+\])/g)||[]).length+10*(e.match(/(\.[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(:[\w-]+\([^\)]*\))/gi)||[]).length+10*(e.match(/(:[^\s\+>~\.\[:]+)/g)||[]).length+(e.match(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi)||[]).length+((e=(e=e.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," ")).match(/([^\s\+>~\.\[:]+)/g)||[]).length}function T(e){if(t.events.trigger("html.processGet",[e]),e&&e.getAttribute&&""===e.getAttribute("class")&&e.removeAttribute("class"),e&&e.getAttribute&&""===e.getAttribute("style")&&e.removeAttribute("style"),e&&e.nodeType==Node.ELEMENT_NODE){var n,r=e.querySelectorAll('[class=""],[style=""]')
for(n=0;n<r.length;n++){var i=r[n]
""===i.getAttribute("class")&&i.removeAttribute("class"),""===i.getAttribute("style")&&i.removeAttribute("style")}var o=e.querySelectorAll("br")
for(n=0;n<o.length;n++)d(o[n])}}function _(e,t){return e[3]-t[3]}function A(e){var n=t.doc.createElement("div")
return n.innerHTML=e,null!==n.querySelector(o())}function w(n){var r=null
if(void 0===n&&(r=t.selection.element()),t.opts.keepFormatOnDelete)return!1
var i,o,a=r?(r.textContent.match(/\u200B/g)||[]).length-r.querySelectorAll(".fr-marker").length:0
if((t.el.textContent.match(/\u200B/g)||[]).length-t.el.querySelectorAll(".fr-marker").length==a)return!1
do{o=!1,i=t.el.querySelectorAll("*:not(.fr-marker)")
for(var s=0;s<i.length;s++){var l=i[s]
if(r!=l){var u=l.textContent
0===l.children.length&&1===u.length&&8203==u.charCodeAt(0)&&"TD"!==l.tagName&&(e(l).remove(),o=!0)}}}while(o)}return{defaultTag:n,isPreformatted:r,emptyBlocks:i,emptyBlockTagsQuery:function(){return e.FE.BLOCK_TAGS.join(":empty, ")+":empty"},blockTagsQuery:o,fillEmptyBlocks:function(n){for(var r=i(n),o=0;o<r.length;o++){var a=r[o]
"false"===a.getAttribute("contenteditable")||a.querySelector(t.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||t.node.isVoid(a)||"TABLE"!=a.tagName&&"TBODY"!=a.tagName&&"TR"!=a.tagName&&"UL"!=a.tagName&&"OL"!=a.tagName&&a.appendChild(t.doc.createElement("br"))}if(t.browser.msie&&t.opts.enter==e.FE.ENTER_BR){var s=t.node.contents(t.el)
s.length&&s[s.length-1].nodeType==Node.TEXT_NODE&&t.$el.append("<br>")}},cleanEmptyTags:a,cleanWhiteTags:w,cleanBlankSpaces:c,blocks:function(){return t.$el.get(0).querySelectorAll(o())},getDoctype:p,set:function(n){var r=t.clean.html((n||"").trim(),[],[],t.opts.fullPage)
if(t.opts.fullPage){var i=g(r,"body")||(r.indexOf("<body")>=0?"":r),o=v(r,"body"),a=g(r,"head")||"<title></title>",s=v(r,"head"),l=e("<div>").append(a).contents().each(function(){(this.nodeType==Node.COMMENT_NODE||["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)>=0)&&this.parentNode.removeChild(this)}).end().html().trim()
a=e("<div>").append(a).contents().map(function(){return this.nodeType==Node.COMMENT_NODE?"\x3c!--"+this.nodeValue+"--\x3e":["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)>=0?this.outerHTML:""}).toArray().join("")
var u=b(r),c=v(r,"html")
y(t.$el,l+"\n"+i),t.node.clearAttributes(t.el),t.$el.attr(o),t.$el.addClass("fr-view"),t.$el.attr("spellcheck",t.opts.spellcheck),t.$el.attr("dir",t.opts.direction),y(t.$head,a),t.node.clearAttributes(t.$head.get(0)),t.$head.attr(s),t.node.clearAttributes(t.$html.get(0)),t.$html.attr(c),t.iframe_document.doctype.parentNode.replaceChild(function(e,t){var n=e.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i)
return n?t.implementation.createDocumentType(n[1],n[3],n[4]):t.implementation.createDocumentType("html")}(u,t.iframe_document),t.iframe_document.doctype)}else y(t.$el,r)
var f=t.edit.isDisabled()
t.edit.on(),t.core.injectStyle(t.opts.iframeDefaultStyle+t.opts.iframeStyle),h(),t.opts.useClasses||(t.$el.find("[fr-original-class]").each(function(){this.setAttribute("class",this.getAttribute("fr-original-class")),this.removeAttribute("fr-original-class")}),t.$el.find("[fr-original-style]").each(function(){this.setAttribute("style",this.getAttribute("fr-original-style")),this.removeAttribute("fr-original-style")})),f&&t.edit.off(),t.events.trigger("html.set")},get:function(e,n){if(!t.$wp)return t.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML
var r=""
t.events.trigger("html.beforeGet")
var i,o,a=[],s={},l=[]
if(!t.opts.useClasses&&!n){var u=new RegExp("^"+t.opts.htmlIgnoreCSSProperties.join("$|^")+"$","gi")
for(i=0;i<t.doc.styleSheets.length;i++){var c,f=0
try{c=t.doc.styleSheets[i].cssRules,t.doc.styleSheets[i].ownerNode&&"STYLE"==t.doc.styleSheets[i].ownerNode.nodeType&&(f=1)}catch(e){}if(c)for(var d=0,h=c.length;h>d;d++)if(c[d].selectorText&&c[d].style.cssText.length>0){var m,g=c[d].selectorText.replace(/body |\.fr-view /g,"").replace(/::/g,":")
try{m=t.el.querySelectorAll(g)}catch(e){m=[]}for(o=0;o<m.length;o++){!m[o].getAttribute("fr-original-style")&&m[o].getAttribute("style")?(m[o].setAttribute("fr-original-style",m[o].getAttribute("style")),a.push(m[o])):m[o].getAttribute("fr-original-style")||(m[o].setAttribute("fr-original-style",""),a.push(m[o])),s[m[o]]||(s[m[o]]={})
for(var v=1e3*f+E(c[d].selectorText),b=c[d].style.cssText.split(";"),y=0;y<b.length;y++){var A=b[y].trim().split(":")[0]
A&&(A.match(u)||(s[m[o]][A]||(s[m[o]][A]=0,(m[o].getAttribute("fr-original-style")||"").indexOf(A+":")>=0&&(s[m[o]][A]=1e4)),v>=s[m[o]][A]&&(s[m[o]][A]=v,b[y].trim().length&&l.push([m[o],A.trim(),b[y].trim().split(":")[1].trim(),v]))))}}}}for(l.sort(_),i=0;i<l.length;i++){var w=l[i]
w[0].style[w[1]]=w[2]}for(i=0;i<a.length;i++)if(a[i].getAttribute("class")&&(a[i].setAttribute("fr-original-class",a[i].getAttribute("class")),a[i].removeAttribute("class")),(a[i].getAttribute("fr-original-style")||"").trim().length>0){var C=a[i].getAttribute("fr-original-style").split(";")
for(o=0;o<C.length;o++)C[o].indexOf(":")>0&&(a[i].style[C[o].split(":")[0].trim()]=C[o].split(":")[1].trim())}}if(t.core.isEmpty()?t.opts.fullPage&&(r=p(t.iframe_document),r+="<html"+t.node.attributes(t.$html.get(0))+">"+t.$html.find("head").get(0).outerHTML+"<body></body></html>"):(void 0===e&&(e=!1),t.opts.fullPage?(r=p(t.iframe_document),t.$el.removeClass("fr-view"),r+="<html"+t.node.attributes(t.$html.get(0))+">"+t.$html.html()+"</html>",t.$el.addClass("fr-view")):r=t.$el.html()),!t.opts.useClasses&&!n)for(i=0;i<a.length;i++)a[i].getAttribute("fr-original-class")&&(a[i].setAttribute("class",a[i].getAttribute("fr-original-class")),a[i].removeAttribute("fr-original-class")),null!=a[i].getAttribute("fr-original-style")&&void 0!==a[i].getAttribute("fr-original-style")?(0!==a[i].getAttribute("fr-original-style").length?a[i].setAttribute("style",a[i].getAttribute("fr-original-style")):a[i].removeAttribute("style"),a[i].removeAttribute("fr-original-style")):a[i].removeAttribute("style")
t.opts.fullPage&&(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g,"")).replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g,"")).replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g,"")).replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")).replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,'<body$1class="$2$4"$5>$6</body>')).replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")),t.opts.htmlSimpleAmpersand&&(r=r.replace(/\&amp;/gi,"&")),t.events.trigger("html.afterGet"),e||(r=r.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,"")),r=t.clean.invisibleSpaces(r),r=t.clean.exec(r,T)
var S=t.events.chainTrigger("html.get",r)
return"string"==typeof S&&(r=S),r.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(e){return e.replace(/<br>/g,"\n")})},getSelected:function(){var n=function(n,r){for(;r&&(r.nodeType==Node.TEXT_NODE||!t.node.isBlock(r))&&!t.node.isElement(r);)r&&r.nodeType!=Node.TEXT_NODE&&e(n).wrapInner(t.node.openTagString(r)+t.node.closeTagString(r)),r=r.parentNode
r&&n.innerHTML==r.innerHTML&&(n.innerHTML=r.outerHTML)},r=function(){var n,r=null
return t.win.getSelection?(n=t.win.getSelection())&&n.rangeCount&&(r=n.getRangeAt(0).commonAncestorContainer).nodeType!=Node.ELEMENT_NODE&&(r=r.parentNode):(n=t.doc.selection)&&"Control"!=n.type&&(r=n.createRange().parentElement()),null!=r&&(e.inArray(t.el,e(r).parents())>=0||r==t.el)?r:null},i=""
if(void 0!==t.win.getSelection){t.browser.mozilla&&(t.selection.save(),t.$el.find('.fr-marker[data-type="false"]').length>1&&(t.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(),t.$el.find('.fr-marker[data-type="false"]:last').attr("data-id","0"),t.$el.find(".fr-marker").not('[data-id="0"]').remove()),t.selection.restore())
for(var o=t.selection.ranges(),a=0;a<o.length;a++){var s=document.createElement("div")
s.appendChild(o[a].cloneContents()),n(s,r()),e(s).find(".fr-element").length>0&&(s=t.el),i+=s.innerHTML}}else void 0!==t.doc.selection&&"Text"==t.doc.selection.type&&(i=t.doc.selection.createRange().htmlText)
return i},insert:function(n,r,i){var o
if(t.selection.isCollapsed()||t.selection.remove(),o=r?n:t.clean.html(n),n.indexOf('class="fr-marker"')<0&&(o=function(e){var n=t.doc.createElement("div")
return n.innerHTML=e,t.selection.setAtEnd(n),n.innerHTML}(o)),t.core.isEmpty()&&!t.opts.keepFormatOnDelete&&A(o))t.el.innerHTML=o
else{var a=t.markers.insert()
if(a){t.node.isLastSibling(a)&&e(a).parent().hasClass("fr-deletable")&&e(a).insertAfter(e(a).parent())
var s=t.node.blockParent(a)
if((A(o)||i)&&(t.node.deepestParent(a)||s&&"LI"==s.tagName)){if(s&&"LI"==s.tagName&&(o=function(n){if(!t.html.defaultTag())return n
var r=t.doc.createElement("div")
r.innerHTML=n
for(var i=r.querySelectorAll(":scope > "+t.html.defaultTag()),o=i.length-1;o>=0;o--){var a=i[o]
t.node.isBlock(a.previousSibling)||(a.previousSibling&&!t.node.isEmpty(a)&&e("<br>").insertAfter(a.previousSibling),a.outerHTML=a.innerHTML)}return r.innerHTML}(o)),!(a=t.markers.split()))return!1
a.outerHTML=o}else a.outerHTML=o}else t.el.innerHTML=t.el.innerHTML+o}h(),t.keys.positionCaret(),t.events.trigger("html.inserted")},wrap:u,unwrap:function(){t.$el.find("div.fr-temp-div").each(function(){this.previousSibling&&this.previousSibling.nodeType===Node.TEXT_NODE&&e(this).before("<br>"),e(this).attr("data-empty")||!this.nextSibling||t.node.isBlock(this.nextSibling)&&!e(this.nextSibling).hasClass("fr-temp-div")?e(this).replaceWith(e(this).html()):e(this).replaceWith(e(this).html()+"<br>")}),t.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function(){return""===e(this).attr("class")}).removeAttr("class")},escapeEntities:function(e){return e.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&#39;")},checkIfEmpty:m,extractNode:g,extractNodeAttrs:v,extractDoctype:b,cleanBRs:function(){for(var e=t.el.getElementsByTagName("br"),n=0;n<e.length;n++)d(e[n])},_init:function(){if(t.$wp){var e=function(){w(),t.placeholder&&setTimeout(t.placeholder.refresh,0)}
t.events.on("mouseup",e),t.events.on("keydown",e),t.events.on("contentChanged",m)}}}},e.extend(e.FE.DEFAULTS,{height:null,heightMax:null,heightMin:null,width:null}),e.FE.MODULES.size=function(e){function t(){n(),e.opts.height&&e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom"))),e.$iframe.height(e.$el.outerHeight(!0))}function n(){e.opts.heightMin?e.$el.css("minHeight",e.opts.heightMin):e.$el.css("minHeight",""),e.opts.heightMax?(e.$wp.css("maxHeight",e.opts.heightMax),e.$wp.css("overflow","auto")):(e.$wp.css("maxHeight",""),e.$wp.css("overflow","")),e.opts.height?(e.$wp.height(e.opts.height),e.$wp.css("overflow","auto"),e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom")))):(e.$wp.css("height",""),e.opts.heightMin||e.$el.css("minHeight",""),e.opts.heightMax||e.$wp.css("overflow","")),e.opts.width&&e.$box.width(e.opts.width)}return{_init:function(){return!!e.$wp&&(n(),void(e.$iframe&&(e.events.on("keyup keydown",function(){setTimeout(t,0)},!0),e.events.on("commands.after html.set init initialized paste.after",t))))},syncIframe:t,refresh:n}},e.extend(e.FE.DEFAULTS,{language:null}),e.FE.LANGUAGE={},e.FE.MODULES.language=function(t){var n
return{_init:function(){e.FE.LANGUAGE&&(n=e.FE.LANGUAGE[t.opts.language]),n&&n.direction&&(t.opts.direction=n.direction)},translate:function(e){return n&&n.translation[e]&&n.translation[e].length?n.translation[e]:e}}},e.extend(e.FE.DEFAULTS,{placeholderText:"Type something"}),e.FE.MODULES.placeholder=function(t){function n(){t.$placeholder||(t.$placeholder=e('<span class="fr-placeholder"></span>'),t.$wp.append(t.$placeholder))
var n=t.opts.iframe?t.$iframe.prev().outerHeight(!0):t.$el.prev().outerHeight(!0),r=0,i=0,o=0,a=0,s=0,l=0,u=t.node.contents(t.el),c=e(t.selection.element()).css("text-align")
if(u.length&&u[0].nodeType==Node.ELEMENT_NODE){var f=e(u[0]);(!t.opts.toolbarInline||t.$el.prev().length>0)&&t.ready&&(r=t.helpers.getPX(f.css("margin-top")),a=t.helpers.getPX(f.css("padding-top")),i=t.helpers.getPX(f.css("margin-left")),o=t.helpers.getPX(f.css("margin-right")),s=t.helpers.getPX(f.css("padding-left")),l=t.helpers.getPX(f.css("padding-right"))),t.$placeholder.css("font-size",f.css("font-size")),t.$placeholder.css("line-height",f.css("line-height"))}else t.$placeholder.css("font-size",t.$el.css("font-size")),t.$placeholder.css("line-height",t.$el.css("line-height"))
t.$wp.addClass("show-placeholder"),t.$placeholder.css({marginTop:Math.max(t.helpers.getPX(t.$el.css("margin-top")),r)+(n||0),paddingTop:Math.max(t.helpers.getPX(t.$el.css("padding-top")),a),paddingLeft:Math.max(t.helpers.getPX(t.$el.css("padding-left")),s),marginLeft:Math.max(t.helpers.getPX(t.$el.css("margin-left")),i),paddingRight:Math.max(t.helpers.getPX(t.$el.css("padding-right")),l),marginRight:Math.max(t.helpers.getPX(t.$el.css("margin-right")),o),textAlign:c}).text(t.language.translate(t.opts.placeholderText||t.$oel.attr("placeholder")||"")),t.$placeholder.html(t.$placeholder.text().replace(/\n/g,"<br>"))}function r(){t.$wp.removeClass("show-placeholder")}function i(){return!!t.$wp&&void(t.core.isEmpty()?n():r())}return{_init:function(){return!!t.$wp&&void t.events.on("init input keydown keyup contentChanged initialized",i)},show:n,hide:r,refresh:i,isVisible:function(){return!t.$wp||t.node.hasClass(t.$wp.get(0),"show-placeholder")}}},e.FE.MODULES.edit=function(e){function t(){if(e.browser.mozilla)try{e.doc.execCommand("enableObjectResizing",!1,"false"),e.doc.execCommand("enableInlineTableEditing",!1,"false")}catch(e){}if(e.browser.msie)try{e.doc.body.addEventListener("mscontrolselect",function(e){return e.preventDefault(),!1})}catch(e){}}function n(){return r}var r=!1
return{_init:function(){e.events.on("focus",function(){n()?e.edit.off():e.edit.on()})},on:function(){e.$wp?(e.$el.attr("contenteditable",!0),e.$el.removeClass("fr-disabled").attr("aria-disabled",!1),e.$tb&&e.$tb.removeClass("fr-disabled").attr("aria-disabled",!1),t()):e.$el.is("a")&&e.$el.attr("contenteditable",!0),r=!1},off:function(){e.events.disableBlur(),e.$wp?(e.$el.attr("contenteditable",!1),e.$el.addClass("fr-disabled").attr("aria-disabled",!0),e.$tb&&e.$tb.addClass("fr-disabled").attr("aria-disabled",!0)):e.$el.is("a")&&e.$el.attr("contenteditable",!1),e.events.enableBlur(),r=!0},disableDesign:t,isDisabled:n}},e.extend(e.FE.DEFAULTS,{editorClass:null,typingTimer:500,iframe:!1,requestWithCORS:!0,requestWithCredentials:!1,requestHeaders:{},useClasses:!0,spellcheck:!0,iframeDefaultStyle:'html{margin:0px;height:auto;}body{height:auto;padding:10px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}',iframeStyle:"",iframeStyleFiles:[],direction:"auto",zIndex:1,tabIndex:null,disableRightClick:!1,scrollableContainer:"body",keepFormatOnDelete:!1,theme:null}),e.FE.MODULES.core=function(t){function n(){if(t.$box.addClass("fr-box"+(t.opts.editorClass?" "+t.opts.editorClass:"")),t.$wp.addClass("fr-wrapper"),t.opts.iframe||t.$el.addClass("fr-element fr-view"),t.opts.iframe){t.$iframe.addClass("fr-iframe"),t.$el.addClass("fr-view")
for(var e=0;e<t.o_doc.styleSheets.length;e++){var n
try{n=t.o_doc.styleSheets[e].cssRules}catch(e){}if(n)for(var r=0,i=n.length;i>r;r++)!n[r].selectorText||0!==n[r].selectorText.indexOf(".fr-view")&&0!==n[r].selectorText.indexOf(".fr-element")||n[r].style.cssText.length>0&&(0===n[r].selectorText.indexOf(".fr-view")?t.opts.iframeStyle+=n[r].selectorText.replace(/\.fr-view/g,"body")+"{"+n[r].style.cssText+"}":t.opts.iframeStyle+=n[r].selectorText.replace(/\.fr-element/g,"body")+"{"+n[r].style.cssText+"}")}}"auto"!=t.opts.direction&&t.$box.removeClass("fr-ltr fr-rtl").addClass("fr-"+t.opts.direction),t.$el.attr("dir",t.opts.direction),t.$wp.attr("dir",t.opts.direction),t.opts.zIndex>1&&t.$box.css("z-index",t.opts.zIndex),t.opts.theme&&t.$box.addClass(t.opts.theme+"-theme"),t.opts.tabIndex=t.opts.tabIndex||t.$oel.attr("tabIndex"),t.opts.tabIndex&&t.$el.attr("tabIndex",t.opts.tabIndex)}return{_init:function(){if(e.FE.INSTANCES.push(t),t.drag_support={filereader:"undefined"!=typeof FileReader,formdata:!!t.win.FormData,progress:"upload"in new XMLHttpRequest},t.$wp){n(),t.html.set(t._original_html),t.$el.attr("spellcheck",t.opts.spellcheck),t.helpers.isMobile()&&(t.$el.attr("autocomplete",t.opts.spellcheck?"on":"off"),t.$el.attr("autocorrect",t.opts.spellcheck?"on":"off"),t.$el.attr("autocapitalize",t.opts.spellcheck?"on":"off")),t.opts.disableRightClick&&t.events.$on(t.$el,"contextmenu",function(e){return 2!=e.button&&void 0})
try{t.doc.execCommand("styleWithCSS",!1,!1)}catch(e){}}"TEXTAREA"==t.$oel.get(0).tagName&&(t.events.on("contentChanged",function(){t.$oel.val(t.html.get())}),t.events.on("form.submit",function(){t.$oel.val(t.html.get())}),t.events.on("form.reset",function(){t.html.set(t._original_html)}),t.$oel.val(t.html.get())),t.helpers.isIOS()&&t.events.$on(t.$doc,"selectionchange",function(){t.$doc.get(0).hasFocus()||t.$win.get(0).focus()}),t.events.trigger("init")},destroy:function(e){"TEXTAREA"==t.$oel.get(0).tagName&&t.$oel.val(e),t.$wp&&("TEXTAREA"==t.$oel.get(0).tagName?(t.$el.html(""),t.$wp.html(""),t.$box.replaceWith(t.$oel),t.$oel.show()):(t.$wp.replaceWith(e),t.$el.html(""),t.$box.removeClass("fr-view fr-ltr fr-box "+(t.opts.editorClass||"")),t.opts.theme&&t.$box.addClass(t.opts.theme+"-theme"))),this.$wp=null,this.$el=null,this.el=null,this.$box=null},isEmpty:function(){return t.node.isEmpty(t.el)},getXHR:function(e,n){var r=new XMLHttpRequest
for(var i in r.open(n,e,!0),t.opts.requestWithCredentials&&(r.withCredentials=!0),t.opts.requestHeaders)t.opts.requestHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,t.opts.requestHeaders[i])
return r},injectStyle:function(n){if(t.opts.iframe){t.$head.find("style[data-fr-style], link[data-fr-style]").remove(),t.$head.append('<style data-fr-style="true">'+n+"</style>")
for(var r=0;r<t.opts.iframeStyleFiles.length;r++){var i=e('<link data-fr-style="true" rel="stylesheet" href="'+t.opts.iframeStyleFiles[r]+'">')
i.get(0).addEventListener("load",t.size.syncIframe),t.$head.append(i)}}},hasFocus:function(){return t.browser.mozilla&&t.helpers.isMobile()?t.selection.inEditor():t.node.hasFocus(t.el)||t.$el.find("*:focus").length>0},sameInstance:function(e){if(!e)return!1
var n=e.data("instance")
return!!n&&n.id==t.id}}},e.FE.MODULES.cursorLists=function(t){function n(e){for(var t=e;"LI"!=t.tagName;)t=t.parentNode
return t}function r(e){for(var n=e;!t.node.isList(n);)n=n.parentNode
return n}return{_startEnter:function(i){var o,a=n(i),s=a.nextSibling,l=a.previousSibling,u=t.html.defaultTag()
if(t.node.isEmpty(a,!0)&&s){for(var c="",f="",p=i.parentNode;!t.node.isList(p)&&p.parentNode&&"LI"!==p.parentNode.tagName;)c=t.node.openTagString(p)+c,f+=t.node.closeTagString(p),p=p.parentNode
var d
for(c=t.node.openTagString(p)+c,f+=t.node.closeTagString(p),d=p.parentNode&&"LI"==p.parentNode.tagName?f+"<li>"+e.FE.MARKERS+"<br>"+c:u?f+"<"+u+">"+e.FE.MARKERS+"<br></"+u+">"+c:f+e.FE.MARKERS+"<br>"+c,e(a).html('<span id="fr-break"></span>');["UL","OL"].indexOf(p.tagName)<0||p.parentNode&&"LI"===p.parentNode.tagName;)p=p.parentNode
var h=t.node.openTagString(p)+e(p).html()+t.node.closeTagString(p)
h=h.replace(/<span id="fr-break"><\/span>/g,d),e(p).replaceWith(h),t.$el.find("li:empty").remove()}else if(l&&s||!t.node.isEmpty(a,!0)){for(var m="<br>",g=i.parentNode;g&&"LI"!=g.tagName;)m=t.node.openTagString(g)+m+t.node.closeTagString(g),g=g.parentNode
e(a).before("<li>"+m+"</li>"),e(i).remove()}else if(l){o=r(a)
for(var v=e.FE.MARKERS+"<br>",b=i.parentNode;b&&"LI"!=b.tagName;)v=t.node.openTagString(b)+v+t.node.closeTagString(b),b=b.parentNode
o.parentNode&&"LI"==o.parentNode.tagName?e(o.parentNode).after("<li>"+v+"</li>"):u?e(o).after("<"+u+">"+v+"</"+u+">"):e(o).after(v),e(a).remove()}else(o=r(a)).parentNode&&"LI"==o.parentNode.tagName?s?e(o.parentNode).before(t.node.openTagString(a)+e.FE.MARKERS+"<br></li>"):e(o.parentNode).after(t.node.openTagString(a)+e.FE.MARKERS+"<br></li>"):u?e(o).before("<"+u+">"+e.FE.MARKERS+"<br></"+u+">"):e(o).before(e.FE.MARKERS+"<br>"),e(a).remove()},_middleEnter:function(r){for(var i=n(r),o="",a=r,s="",l="";a!=i;){var u="A"==(a=a.parentNode).tagName&&t.cursor.isAtEnd(r,a)?"fr-to-remove":""
s=t.node.openTagString(e(a).clone().addClass(u).get(0))+s,l=t.node.closeTagString(a)+l}o=l+o+s+e.FE.MARKERS+e.FE.INVISIBLE_SPACE,e(r).replaceWith('<span id="fr-break"></span>')
var c=t.node.openTagString(i)+e(i).html()+t.node.closeTagString(i)
c=c.replace(/<span id="fr-break"><\/span>/g,o),e(i).replaceWith(c)},_endEnter:function(r){for(var i=n(r),o=e.FE.MARKERS,a="",s=r,l=!1;s!=i;){var u="A"==(s=s.parentNode).tagName&&t.cursor.isAtEnd(r,s)?"fr-to-remove":""
l||s==i||t.node.isBlock(s)||(l=!0,a+=e.FE.INVISIBLE_SPACE),a=t.node.openTagString(e(s).clone().addClass(u).get(0))+a,o+=t.node.closeTagString(s)}var c=a+o
e(r).remove(),e(i).after(c)},_backspace:function(i){var o=n(i),a=o.previousSibling
if(a){a=e(a).find(t.html.blockTagsQuery()).get(-1)||a,e(i).replaceWith(e.FE.MARKERS)
var s=t.node.contents(a)
s.length&&"BR"==s[s.length-1].tagName&&e(s[s.length-1]).remove(),e(o).find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==o&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))})
for(var l,u=t.node.contents(o)[0];u&&!t.node.isList(u);)l=u.nextSibling,e(a).append(u),u=l
for(a=o.previousSibling;u;)l=u.nextSibling,e(a).append(u),u=l
e(o).remove()}else{var c=r(o)
if(e(i).replaceWith(e.FE.MARKERS),c.parentNode&&"LI"==c.parentNode.tagName){var f=c.previousSibling
t.node.isBlock(f)?(e(o).find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==o&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))}),e(f).append(e(o).html())):e(c).before(e(o).html())}else{var p=t.html.defaultTag()
p&&0===e(o).find(t.html.blockTagsQuery()).length?e(c).before("<"+p+">"+e(o).html()+"</"+p+">"):e(c).before(e(o).html())}e(o).remove(),t.html.wrap(),0===e(c).find("li").length&&e(c).remove()}},_del:function(r){var i,o=n(r),a=o.nextSibling
if(a){(i=t.node.contents(a)).length&&"BR"==i[0].tagName&&e(i[0]).remove(),e(a).find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==a&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))})
for(var s,l=r,u=t.node.contents(a)[0];u&&!t.node.isList(u);)s=u.nextSibling,e(l).after(u),l=u,u=s
for(;u;)s=u.nextSibling,e(o).append(u),u=s
e(r).replaceWith(e.FE.MARKERS),e(a).remove()}else{for(var c=o;!c.nextSibling&&c!=t.el;)c=c.parentNode
if(c==t.el)return!1
if(c=c.nextSibling,t.node.isBlock(c))e.FE.NO_DELETE_TAGS.indexOf(c.tagName)<0&&(e(r).replaceWith(e.FE.MARKERS),(i=t.node.contents(o)).length&&"BR"==i[i.length-1].tagName&&e(i[i.length-1]).remove(),e(o).append(e(c).html()),e(c).remove())
else for((i=t.node.contents(o)).length&&"BR"==i[i.length-1].tagName&&e(i[i.length-1]).remove(),e(r).replaceWith(e.FE.MARKERS);c&&!t.node.isBlock(c)&&"BR"!=c.tagName;)e(o).append(e(c)),c=c.nextSibling}}}},e.FE.NO_DELETE_TAGS=["TH","TD","TR","TABLE","FORM"],e.FE.SIMPLE_ENTER_TAGS=["TH","TD","LI","DL","DT","FORM"],e.FE.MODULES.cursor=function(t){function n(e){return!!e&&(!!t.node.isBlock(e)||(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?n(e.nextSibling):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&n(e.parentNode)))}function r(e){return!!e&&(!!t.node.isBlock(e)||(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?r(e.previousSibling):!e.previousSibling&&(!(e.previousSibling||!t.node.hasClass(e.parentNode,"fr-inner"))||r(e.parentNode))))}function i(e,n){return!!e&&(e!=t.$wp.get(0)&&(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?i(e.previousSibling,n):!e.previousSibling&&(e.parentNode==n||i(e.parentNode,n))))}function o(e,n){return!!e&&(e!=t.$wp.get(0)&&(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?o(e.nextSibling,n):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&(e.parentNode==n||o(e.parentNode,n))))}function a(n){return e(n).parentsUntil(t.$el,"LI").length>0&&0===e(n).parentsUntil("LI","TABLE").length}function s(e,t){var n=new RegExp((t?"^":"")+"([\\uD83C-\\uDBFF\\uDC00-\\uDFFF\\u200D]+)"+(t?"":"$"),"i"),r=e.match(n)
return r?r[0].length:1}function l(n){for(var r=n;!r.previousSibling;)if(r=r.parentNode,t.node.isElement(r))return!1
var i
if(r=r.previousSibling,!t.node.isBlock(r)&&t.node.isEditable(r)){for(i=t.node.contents(r);r.nodeType!=Node.TEXT_NODE&&!t.node.isDeletable(r)&&i.length&&t.node.isEditable(r);)r=i[i.length-1],i=t.node.contents(r)
if(r.nodeType==Node.TEXT_NODE){var o=r.textContent,a=o.length
if(t.opts.tabSpaces&&o.length>=t.opts.tabSpaces)0===o.substr(o.length-t.opts.tabSpaces,o.length-1).replace(/ /g,"").replace(new RegExp(e.FE.UNICODE_NBSP,"g"),"").length&&(a=o.length-t.opts.tabSpaces)
r.textContent=o.substring(0,a-s(o))
var l=o.length!=r.textContent.length
0===r.textContent.length?l&&t.opts.keepFormatOnDelete?e(r).after(e.FE.INVISIBLE_SPACE+e.FE.MARKERS):(2!=r.parentNode.childNodes.length||r.parentNode!=n.parentNode)&&1!=r.parentNode.childNodes.length||t.node.isBlock(r.parentNode)||t.node.isElement(r.parentNode)||!t.node.isDeletable(r.parentNode)?(e(r).after(e.FE.MARKERS),t.node.isElement(r.parentNode)&&!n.nextSibling&&r.previousSibling&&"BR"==r.previousSibling.tagName&&e(n).after("<br>"),r.parentNode.removeChild(r)):(e(r.parentNode).after(e.FE.MARKERS),e(r.parentNode).remove()):e(r).after(e.FE.MARKERS)}else t.node.isDeletable(r)?(e(r).after(e.FE.MARKERS),e(r).remove()):n.nextSibling&&"BR"==n.nextSibling.tagName&&t.node.isVoid(r)&&"BR"!=r.tagName?(e(n.nextSibling).remove(),e(n).replaceWith(e.FE.MARKERS)):!1!==t.events.trigger("node.remove",[e(r)])&&(e(r).after(e.FE.MARKERS),e(r).remove())}else if(e.FE.NO_DELETE_TAGS.indexOf(r.tagName)<0&&(t.node.isEditable(r)||t.node.isDeletable(r)))if(t.node.isDeletable(r))e(n).replaceWith(e.FE.MARKERS),e(r).remove()
else if(t.node.isEmpty(r)&&!t.node.isList(r))e(r).remove(),e(n).replaceWith(e.FE.MARKERS)
else{for(t.node.isList(r)&&(r=e(r).find("li:last").get(0)),(i=t.node.contents(r))&&"BR"==i[i.length-1].tagName&&e(i[i.length-1]).remove(),i=t.node.contents(r);i&&t.node.isBlock(i[i.length-1]);)r=i[i.length-1],i=t.node.contents(r)
e(r).append(e.FE.MARKERS)
for(var u=n;!u.previousSibling;)u=u.parentNode
for(;u&&"BR"!==u.tagName&&!t.node.isBlock(u);){var c=u
u=u.nextSibling,e(r).append(c)}u&&"BR"==u.tagName&&e(u).remove(),e(n).remove()}else n.nextSibling&&"BR"==n.nextSibling.tagName&&e(n.nextSibling).remove()}function u(n){var r=e(n).parentsUntil(t.$el,"BLOCKQUOTE").length>0,i=t.node.deepestParent(n,[],!r)
if(i&&"BLOCKQUOTE"==i.tagName){var o=t.node.deepestParent(n,[e(n).parentsUntil(t.$el,"BLOCKQUOTE").get(0)])
o&&o.nextSibling&&(i=o)}if(null!==i){var a,s=i.nextSibling
if(t.node.isBlock(i)&&(t.node.isEditable(i)||t.node.isDeletable(i))&&s&&e.FE.NO_DELETE_TAGS.indexOf(s.tagName)<0)if(t.node.isDeletable(s))e(s).remove(),e(n).replaceWith(e.FE.MARKERS)
else if(t.node.isBlock(s)&&t.node.isEditable(s))if(t.node.isList(s))if(t.node.isEmpty(i,!0))e(i).remove(),e(s).find("li:first").prepend(e.FE.MARKERS)
else{var l=e(s).find("li:first")
"BLOCKQUOTE"==i.tagName&&((a=t.node.contents(i)).length&&t.node.isBlock(a[a.length-1])&&(i=a[a.length-1])),0===l.find("ul, ol").length&&(e(n).replaceWith(e.FE.MARKERS),l.find(t.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==l.get(0)&&e(this).replaceWith(e(this).html()+(t.node.isEmpty(this)?"":"<br>"))}),e(i).append(t.node.contents(l.get(0))),l.remove(),0===e(s).find("li").length&&e(s).remove())}else{if((a=t.node.contents(s)).length&&"BR"==a[0].tagName&&e(a[0]).remove(),"BLOCKQUOTE"!=s.tagName&&"BLOCKQUOTE"==i.tagName)for(a=t.node.contents(i);a.length&&t.node.isBlock(a[a.length-1]);)i=a[a.length-1],a=t.node.contents(i)
else if("BLOCKQUOTE"==s.tagName&&"BLOCKQUOTE"!=i.tagName)for(a=t.node.contents(s);a.length&&t.node.isBlock(a[0]);)s=a[0],a=t.node.contents(s)
e(n).replaceWith(e.FE.MARKERS),e(i).append(s.innerHTML),e(s).remove()}else{for(e(n).replaceWith(e.FE.MARKERS);s&&"BR"!==s.tagName&&!t.node.isBlock(s)&&t.node.isEditable(s);){var u=s
s=s.nextSibling,e(i).append(u)}s&&"BR"==s.tagName&&t.node.isEditable(s)&&e(s).remove()}}}function c(){for(var e=t.el.querySelectorAll("blockquote:empty"),n=0;n<e.length;n++)e[n].parentNode.removeChild(e[n])}function f(n,r,i){var a,s=t.node.deepestParent(n,[],!i)
if(s&&"BLOCKQUOTE"==s.tagName)return o(n,s)?((a=t.html.defaultTag())?e(s).after("<"+a+">"+e.FE.MARKERS+"<br></"+a+">"):e(s).after(e.FE.MARKERS+"<br>"),e(n).remove(),!1):(d(n,r,i),!1)
if(null==s)(a=t.html.defaultTag())&&t.node.isElement(n.parentNode)?e(n).replaceWith("<"+a+">"+e.FE.MARKERS+"<br></"+a+">"):!n.previousSibling||e(n.previousSibling).is("br")||n.nextSibling?e(n).replaceWith("<br>"+e.FE.MARKERS):e(n).replaceWith("<br>"+e.FE.MARKERS+"<br>")
else{var l=n,u="";(!t.node.isBlock(s)||r)&&(u="<br/>")
var c,f="",p="",h="",m="";(a=t.html.defaultTag())&&t.node.isBlock(s)&&(h="<"+a+">",m="</"+a+">",s.tagName==a.toUpperCase()&&(h=t.node.openTagString(e(s).clone().removeAttr("id").get(0))))
do{if(l=l.parentNode,!r||l!=s||r&&!t.node.isBlock(s))if(f+=t.node.closeTagString(l),l==s&&t.node.isBlock(s))p=h+p
else{var g="A"==l.tagName&&o(n,l)?"fr-to-remove":""
p=t.node.openTagString(e(l).clone().addClass(g).get(0))+p}}while(l!=s)
u=f+u+p+(n.parentNode==s&&t.node.isBlock(s)?"":e.FE.INVISIBLE_SPACE)+e.FE.MARKERS,t.node.isBlock(s)&&!e(s).find("*:last").is("br")&&e(s).append("<br/>"),e(n).after('<span id="fr-break"></span>'),e(n).remove(),s.nextSibling&&!t.node.isBlock(s.nextSibling)||t.node.isBlock(s)||e(s).after("<br>"),c=(c=!r&&t.node.isBlock(s)?t.node.openTagString(s)+e(s).html()+m:t.node.openTagString(s)+e(s).html()+t.node.closeTagString(s)).replace(/<span id="fr-break"><\/span>/g,u),e(s).replaceWith(c)}}function p(n,r,a){var s,l=t.node.deepestParent(n,[],!a)
if(l&&"TABLE"==l.tagName)return e(l).find("td:first, th:first").prepend(n),p(n,r,a)
if(l&&"BLOCKQUOTE"==l.tagName){if(i(n,l))return(s=t.html.defaultTag())?e(l).before("<"+s+">"+e.FE.MARKERS+"<br></"+s+">"):e(l).before(e.FE.MARKERS+"<br>"),e(n).remove(),!1
o(n,l)?f(n,r,!0):d(n,r,!0)}if(null==l)(s=t.html.defaultTag())&&t.node.isElement(n.parentNode)?e(n).replaceWith("<"+s+">"+e.FE.MARKERS+"<br></"+s+">"):e(n).replaceWith("<br>"+e.FE.MARKERS)
else{if(t.node.isBlock(l))if("PRE"==l.tagName&&(r=!0),r)e(n).remove(),e(l).prepend("<br>"+e.FE.MARKERS)
else{if(t.node.isEmpty(l,!0))return f(n,r,a)
if(t.opts.keepFormatOnDelete){for(var u=n,c=e.FE.INVISIBLE_SPACE;u!=l&&!t.node.isElement(u);)u=u.parentNode,c=t.node.openTagString(u)+c+t.node.closeTagString(u)
e(l).before(c)}else e(l).before(t.node.openTagString(e(l).clone().removeAttr("id").get(0))+"<br>"+t.node.closeTagString(l))}else e(l).before("<br>")
e(n).remove()}}function d(n,r,a){var s=t.node.deepestParent(n,[],!a)
if(null==s)t.html.defaultTag()&&n.parentNode===t.el?e(n).replaceWith("<"+t.html.defaultTag()+">"+e.FE.MARKERS+"<br></"+t.html.defaultTag()+">"):((!n.nextSibling||t.node.isBlock(n.nextSibling))&&e(n).after("<br>"),e(n).replaceWith("<br>"+e.FE.MARKERS))
else{var l=n,u=""
"PRE"==s.tagName&&(r=!0),(!t.node.isBlock(s)||r)&&(u="<br>")
var c="",f=""
do{var p=l
if(l=l.parentNode,"BLOCKQUOTE"==s.tagName&&t.node.isEmpty(p)&&!t.node.hasClass(p,"fr-marker")&&e(p).find(n).length>0&&e(p).after(n),("BLOCKQUOTE"!=s.tagName||!o(n,l)&&!i(n,l))&&(!r||l!=s||r&&!t.node.isBlock(s))){c+=t.node.closeTagString(l)
var d="A"==l.tagName&&o(n,l)?"fr-to-remove":""
f=t.node.openTagString(e(l).clone().addClass(d).removeAttr("id").get(0))+f}}while(l!=s)
var h=s==n.parentNode&&t.node.isBlock(s)||n.nextSibling
if("BLOCKQUOTE"==s.tagName){n.previousSibling&&t.node.isBlock(n.previousSibling)&&n.nextSibling&&"BR"==n.nextSibling.tagName&&(e(n.nextSibling).after(n),n.nextSibling&&"BR"==n.nextSibling.tagName&&e(n.nextSibling).remove())
var m=t.html.defaultTag()
u=c+u+(m?"<"+m+">":"")+e.FE.MARKERS+"<br>"+(m?"</"+m+">":"")+f}else u=c+u+f+(h?"":e.FE.INVISIBLE_SPACE)+e.FE.MARKERS
e(n).replaceWith('<span id="fr-break"></span>')
var g=t.node.openTagString(s)+e(s).html()+t.node.closeTagString(s)
g=g.replace(/<span id="fr-break"><\/span>/g,u),e(s).replaceWith(g)}}return{enter:function(i){var o=t.markers.insert()
if(!o)return!0
t.el.normalize()
var s=!1
e(o).parentsUntil(t.$el,"BLOCKQUOTE").length>0&&(i=!1,s=!0),e(o).parentsUntil(t.$el,"TD, TH").length&&(s=!1),n(o)?!a(o)||i||s?f(o,i,s):t.cursorLists._endEnter(o):r(o)?!a(o)||i||s?p(o,i,s):t.cursorLists._startEnter(o):!a(o)||i||s?d(o,i,s):t.cursorLists._middleEnter(o),t.$el.find(".fr-to-remove").each(function(){for(var n=t.node.contents(this),r=0;r<n.length;r++)n[r].nodeType==Node.TEXT_NODE&&(n[r].textContent=n[r].textContent.replace(/\u200B/g,""))
e(this).replaceWith(this.innerHTML)}),t.html.fillEmptyBlocks(!0),t.opts.htmlUntouched||(t.html.cleanEmptyTags(),t.clean.lists()),t.spaces.normalizeAroundCursor(),t.selection.restore()},backspace:function(){var o=!1,u=t.markers.insert()
if(!u)return!0
for(var f=u.parentNode;f&&!t.node.isElement(f);){if("false"===f.getAttribute("contenteditable"))return e(u).replaceWith(e.FE.MARKERS),t.selection.restore(),!1
if("true"===f.getAttribute("contenteditable"))break
f=f.parentNode}t.el.normalize()
var p=u.previousSibling
if(p){var d=p.textContent
d&&d.length&&8203==d.charCodeAt(d.length-1)&&(1==d.length?e(p).remove():p.textContent=p.textContent.substr(0,d.length-s(d)))}return n(u)?o=l(u):r(u)?a(u)&&i(u,e(u).parents("li:first").get(0))?t.cursorLists._backspace(u):function(n){for(var r=e(n).parentsUntil(t.$el,"BLOCKQUOTE").length>0,i=t.node.deepestParent(n,[],!r),o=i;i&&!i.previousSibling&&"BLOCKQUOTE"!=i.tagName&&i.parentElement!=t.el&&!t.node.hasClass(i.parentElement,"fr-inner")&&e.FE.SIMPLE_ENTER_TAGS.indexOf(i.parentElement.tagName)<0;)i=i.parentElement
if(i&&"BLOCKQUOTE"==i.tagName){var a=t.node.deepestParent(n,[e(n).parentsUntil(t.$el,"BLOCKQUOTE").get(0)])
a&&a.previousSibling&&(i=a,o=a)}if(null!==i){var s,l=i.previousSibling
if(t.node.isBlock(i)&&t.node.isEditable(i)&&l&&e.FE.NO_DELETE_TAGS.indexOf(l.tagName)<0)if(t.node.isDeletable(l))e(l).remove(),e(n).replaceWith(e.FE.MARKERS)
else if(t.node.isEditable(l))if(t.node.isBlock(l))if(t.node.isEmpty(l)&&!t.node.isList(l))e(l).remove(),e(n).after(t.opts.keepFormatOnDelete?e.FE.INVISIBLE_SPACE:"")
else{if(t.node.isList(l)&&(l=e(l).find("li:last").get(0)),(s=t.node.contents(l)).length&&"BR"==s[s.length-1].tagName&&e(s[s.length-1]).remove(),"BLOCKQUOTE"==l.tagName&&"BLOCKQUOTE"!=i.tagName)for(s=t.node.contents(l);s.length&&t.node.isBlock(s[s.length-1]);)l=s[s.length-1],s=t.node.contents(l)
else if("BLOCKQUOTE"!=l.tagName&&"BLOCKQUOTE"==i.tagName)for(s=t.node.contents(i);s.length&&t.node.isBlock(s[0]);)i=s[0],s=t.node.contents(i)
if(t.node.isEmpty(i))e(n).remove(),t.selection.setAtEnd(l,t.opts.keepFormatOnDelete)
else{e(n).replaceWith(e.FE.MARKERS)
var u=l.childNodes
t.node.isBlock(u[u.length-1])?e(u[u.length-1]).append(o.innerHTML):e(l).append(o.innerHTML)}e(o).remove(),t.node.isEmpty(i)&&e(i).remove()}else e(n).replaceWith(e.FE.MARKERS),"BLOCKQUOTE"==i.tagName&&l.nodeType==Node.ELEMENT_NODE?e(l).remove():(e(l).after(t.node.isEmpty(i)?"":e(i).html()),e(i).remove(),"BR"==l.tagName&&e(l).remove())}}(u):o=l(u),e(u).remove(),c(),t.html.fillEmptyBlocks(!0),t.opts.htmlUntouched||(t.html.cleanEmptyTags(),t.clean.lists()),t.spaces.normalizeAroundCursor(),t.selection.restore(),o},del:function(){var i=t.markers.insert()
if(!i)return!1
if(t.el.normalize(),n(i))if(a(i))if(0===e(i).parents("li:first").find("ul, ol").length)t.cursorLists._del(i)
else{var o=e(i).parents("li:first").find("ul:first, ol:first").find("li:first");(o=o.find(t.html.blockTagsQuery()).get(-1)||o).prepend(i),t.cursorLists._backspace(i)}else u(i)
else(function(r){for(var i=r;!i.nextSibling;)if(i=i.parentNode,t.node.isElement(i))return!1
if("BR"==(i=i.nextSibling).tagName&&t.node.isEditable(i))if(i.nextSibling){if(t.node.isBlock(i.nextSibling)&&t.node.isEditable(i.nextSibling)){if(!(e.FE.NO_DELETE_TAGS.indexOf(i.nextSibling.tagName)<0))return void e(i).remove()
i=i.nextSibling,e(i.previousSibling).remove()}}else if(n(i))return void(a(r)?t.cursorLists._del(r):t.node.deepestParent(i)&&((!t.node.isEmpty(t.node.blockParent(i))||(t.node.blockParent(i).nextSibling&&e.FE.NO_DELETE_TAGS.indexOf(t.node.blockParent(i).nextSibling.tagName))<0)&&e(i).remove(),u(r)))
var o
if(!t.node.isBlock(i)&&t.node.isEditable(i)){for(o=t.node.contents(i);i.nodeType!=Node.TEXT_NODE&&o.length&&!t.node.isDeletable(i)&&t.node.isEditable(i);)i=o[0],o=t.node.contents(i)
i.nodeType==Node.TEXT_NODE?(e(i).before(e.FE.MARKERS),i.textContent.length&&(i.textContent=i.textContent.substring(s(i.textContent,!0),i.textContent.length))):t.node.isDeletable(i)?(e(i).before(e.FE.MARKERS),e(i).remove()):!1!==t.events.trigger("node.remove",[e(i)])&&(e(i).before(e.FE.MARKERS),e(i).remove()),e(r).remove()}else if(e.FE.NO_DELETE_TAGS.indexOf(i.tagName)<0&&(t.node.isEditable(i)||t.node.isDeletable(i)))if(t.node.isDeletable(i))e(r).replaceWith(e.FE.MARKERS),e(i).remove()
else if(t.node.isList(i))r.previousSibling?(e(i).find("li:first").prepend(r),t.cursorLists._backspace(r)):(e(i).find("li:first").prepend(e.FE.MARKERS),e(r).remove())
else if((o=t.node.contents(i))&&"BR"==o[0].tagName&&e(o[0]).remove(),o&&"BLOCKQUOTE"==i.tagName){var l=o[0]
for(e(r).before(e.FE.MARKERS);l&&"BR"!=l.tagName;){var c=l
l=l.nextSibling,e(r).before(c)}l&&"BR"==l.tagName&&e(l).remove()}else e(r).after(e(i).html()).after(e.FE.MARKERS),e(i).remove()})((r(i),i))
e(i).remove(),c(),t.html.fillEmptyBlocks(!0),t.opts.htmlUntouched||(t.html.cleanEmptyTags(),t.clean.lists()),t.spaces.normalizeAroundCursor(),t.selection.restore()},isAtEnd:o,isAtStart:i}},e.FE.ENTER_P=0,e.FE.ENTER_DIV=1,e.FE.ENTER_BR=2,e.FE.KEYCODE={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,FF_HYPHEN:173,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,HYPHEN:189,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,IME:229},e.extend(e.FE.DEFAULTS,{enter:e.FE.ENTER_P,multiLine:!0,tabSpaces:0}),e.FE.MODULES.keys=function(t){function n(){if(t.browser.mozilla&&t.selection.isCollapsed()&&!E){var e=t.selection.ranges(0),n=e.startContainer,r=e.startOffset
n&&n.nodeType==Node.TEXT_NODE&&r<=n.textContent.length&&r>0&&32==n.textContent.charCodeAt(r-1)&&(t.selection.save(),t.spaces.normalize(),t.selection.restore())}}function r(){t.selection.isFull()&&setTimeout(function(){var n=t.html.defaultTag()
n?t.$el.html("<"+n+">"+e.FE.MARKERS+"<br/></"+n+">"):t.$el.html(e.FE.MARKERS+"<br/>"),t.selection.restore(),t.placeholder.refresh(),t.button.bulkRefresh(),t.undo.saveStep()},0)}function i(){E=!1}function o(){E=!1}function a(){var n=t.html.defaultTag()
n?t.$el.html("<"+n+">"+e.FE.MARKERS+"<br/></"+n+">"):t.$el.html(e.FE.MARKERS+"<br/>"),t.selection.restore()}function s(n){t.events.disableBlur(),T=null
var r=n.which
if(16===r)return!0
if(v=r,r===e.FE.KEYCODE.IME)return E=!0,!0
E=!1
var i=p(r)&&!c(n)&&!n.altKey,o=r==e.FE.KEYCODE.BACKSPACE||r==e.FE.KEYCODE.DELETE
return(t.selection.isFull()&&!t.opts.keepFormatOnDelete&&!t.placeholder.isVisible()||o&&t.placeholder.isVisible()&&t.opts.keepFormatOnDelete)&&(i||o)&&(a(),!p(r))?(n.preventDefault(),!0):(r==e.FE.KEYCODE.ENTER?n.shiftKey?function(e){e.preventDefault(),e.stopPropagation(),t.opts.multiLine&&(t.selection.isCollapsed()||t.selection.remove(),t.cursor.enter(!0))}(n):function(e){t.opts.multiLine?t.helpers.isIOS()?T=t.snapshot.get():(e.preventDefault(),e.stopPropagation(),t.selection.isCollapsed()||t.selection.remove(),t.cursor.enter()):(e.preventDefault(),e.stopPropagation())}(n):r===e.FE.KEYCODE.BACKSPACE&&(n.metaKey||n.ctrlKey)?setTimeout(function(){t.events.disableBlur(),t.events.focus()},0):r!=e.FE.KEYCODE.BACKSPACE||c(n)||n.altKey?r!=e.FE.KEYCODE.DELETE||c(n)||n.altKey||n.shiftKey?r==e.FE.KEYCODE.SPACE?function(n){var r=t.selection.element()
if(!t.helpers.isMobile()&&r&&"A"==r.tagName){n.preventDefault(),n.stopPropagation(),t.selection.isCollapsed()||t.selection.remove()
var i=t.markers.insert()
if(i){var o=i.previousSibling
!i.nextSibling&&i.parentNode&&"A"==i.parentNode.tagName?(i.parentNode.insertAdjacentHTML("afterend","&nbsp;"+e.FE.MARKERS),i.parentNode.removeChild(i)):(o&&o.nodeType==Node.TEXT_NODE&&1==o.textContent.length&&160==o.textContent.charCodeAt(0)?o.textContent=o.textContent+" ":i.insertAdjacentHTML("beforebegin","&nbsp;"),i.outerHTML=e.FE.MARKERS),t.selection.restore()}}}(n):r==e.FE.KEYCODE.TAB?function(e){if(t.opts.tabSpaces>0)if(t.selection.isCollapsed()){t.undo.saveStep(),e.preventDefault(),e.stopPropagation()
for(var n="",r=0;r<t.opts.tabSpaces;r++)n+="&nbsp;"
t.html.insert(n),t.placeholder.refresh(),t.undo.saveStep()}else e.preventDefault(),e.stopPropagation(),e.shiftKey?t.commands.outdent():t.commands.indent()}(n):c(n)||!p(n.which)||t.selection.isCollapsed()||n.ctrlKey||t.selection.remove():t.placeholder.isVisible()?(t.opts.keepFormatOnDelete||a(),n.preventDefault(),n.stopPropagation()):function(e){e.preventDefault(),e.stopPropagation(),""===t.selection.text()?t.cursor.del():t.selection.remove(),t.placeholder.refresh()}(n):t.placeholder.isVisible()?(t.opts.keepFormatOnDelete||a(),n.preventDefault(),n.stopPropagation()):function(e){if(t.selection.isCollapsed())if(t.cursor.backspace(),t.helpers.isIOS()){var n=t.selection.ranges(0)
n.deleteContents(),n.insertNode(document.createTextNode("​")),t.selection.get().modify("move","right","character")}else e.preventDefault(),e.stopPropagation()
else e.preventDefault(),e.stopPropagation(),t.selection.remove(),t.html.fillEmptyBlocks()
t.placeholder.refresh()}(n),void t.events.enableBlur())}function l(){if(!t.$wp)return!0
var n
t.opts.height||t.opts.heightMax?(n=t.position.getBoundingRect().top,(t.helpers.isIOS()||t.helpers.isAndroid())&&(n-=t.helpers.scrollTop()),t.opts.iframe&&(n+=t.$iframe.offset().top),n>t.$wp.offset().top-t.helpers.scrollTop()+t.$wp.height()-20&&t.$wp.scrollTop(n+t.$wp.scrollTop()-(t.$wp.height()+t.$wp.offset().top)+t.helpers.scrollTop()+20)):(n=t.position.getBoundingRect().top,t.opts.toolbarBottom&&(n+=t.opts.toolbarStickyOffset),(t.helpers.isIOS()||t.helpers.isAndroid())&&(n-=t.helpers.scrollTop()),t.opts.iframe&&(n+=t.$iframe.offset().top,n-=t.helpers.scrollTop()),(n+=t.opts.toolbarStickyOffset)>t.o_win.innerHeight-20&&e(t.o_win).scrollTop(n+t.helpers.scrollTop()-t.o_win.innerHeight+20),n=t.position.getBoundingRect().top,t.opts.toolbarBottom||(n-=t.opts.toolbarStickyOffset),(t.helpers.isIOS()||t.helpers.isAndroid())&&(n-=t.helpers.scrollTop()),t.opts.iframe&&(n+=t.$iframe.offset().top,n-=t.helpers.scrollTop()),n<t.$tb.height()+20&&n>=0&&e(t.o_win).scrollTop(n+t.helpers.scrollTop()-t.$tb.height()-20))}function u(n){if(n&&0===n.which&&v&&(n.which=v),t.helpers.isIOS()&&n&&T&&n.which==e.FE.KEYCODE.ENTER&&(t.snapshot.restore(T),t.cursor.enter()),t.helpers.isAndroid()&&t.browser.mozilla)return!0
if(E)return!1
if(!t.selection.isCollapsed())return!0
if(n&&(n.which===e.FE.KEYCODE.META||n.which==e.FE.KEYCODE.CTRL))return!0
if(n&&f(n.which))return!0
n&&n.which==e.FE.KEYCODE.ENTER&&t.helpers.isIOS()&&function(){var n=t.selection.element(),r=t.node.blockParent(n)
if(r&&"DIV"==r.tagName&&t.selection.info(r).atStart){var i=t.html.defaultTag()
r.previousSibling&&"DIV"!=r.previousSibling.tagName&&i&&"div"!=i&&(t.selection.save(),e(r).replaceWith("<"+i+">"+r.innerHTML+"</"+i+">"),t.selection.restore())}}(),n&&(n.which==e.FE.KEYCODE.ENTER||n.which==e.FE.KEYCODE.BACKSPACE||n.which>=37&&n.which<=40&&!t.browser.msie)&&l()
var r=t.selection.element();(function(e){if(!e)return!1
var t=e.innerHTML
return!!((t=t.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,""))&&/\u200B/.test(t)&&t.replace(/\u200B/gi,"").length>0)})(r)&&!t.node.hasClass(r,"fr-marker")&&"IFRAME"!=r.tagName&&function(e){return!t.helpers.isIOS()||0===((e.textContent||"").match(/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi)||[]).length}(r)&&(t.selection.save(),function(e){for(var n=t.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,t.node.filter(function(e){return/\u200B/gi.test(e.textContent)}),!1);n.nextNode();){var r=n.currentNode
r.textContent=r.textContent.replace(/\u200B/gi,"")}}(r),t.selection.restore())}function c(e){if(-1!=navigator.userAgent.indexOf("Mac OS X")){if(e.metaKey&&!e.altKey)return!0}else if(e.ctrlKey&&!e.altKey)return!0
return!1}function f(t){return t>=e.FE.KEYCODE.ARROW_LEFT&&t<=e.FE.KEYCODE.ARROW_DOWN||void 0}function p(n){if(n>=e.FE.KEYCODE.ZERO&&n<=e.FE.KEYCODE.NINE)return!0
if(n>=e.FE.KEYCODE.NUM_ZERO&&n<=e.FE.KEYCODE.NUM_MULTIPLY)return!0
if(n>=e.FE.KEYCODE.A&&n<=e.FE.KEYCODE.Z)return!0
if(t.browser.webkit&&0===n)return!0
switch(n){case e.FE.KEYCODE.SPACE:case e.FE.KEYCODE.QUESTION_MARK:case e.FE.KEYCODE.NUM_PLUS:case e.FE.KEYCODE.NUM_MINUS:case e.FE.KEYCODE.NUM_PERIOD:case e.FE.KEYCODE.NUM_DIVISION:case e.FE.KEYCODE.SEMICOLON:case e.FE.KEYCODE.FF_SEMICOLON:case e.FE.KEYCODE.DASH:case e.FE.KEYCODE.EQUALS:case e.FE.KEYCODE.FF_EQUALS:case e.FE.KEYCODE.COMMA:case e.FE.KEYCODE.PERIOD:case e.FE.KEYCODE.SLASH:case e.FE.KEYCODE.APOSTROPHE:case e.FE.KEYCODE.SINGLE_QUOTE:case e.FE.KEYCODE.OPEN_SQUARE_BRACKET:case e.FE.KEYCODE.BACKSLASH:case e.FE.KEYCODE.CLOSE_SQUARE_BRACKET:return!0
default:return!1}}function d(n){var r=n.which
return!!(c(n)||r>=37&&40>=r||!p(r)&&r!=e.FE.KEYCODE.DELETE&&r!=e.FE.KEYCODE.BACKSPACE&&r!=e.FE.KEYCODE.ENTER&&r!=e.FE.KEYCODE.IME)||(b||(y=t.snapshot.get(),t.undo.canDo()||t.undo.saveStep()),clearTimeout(b),void(b=setTimeout(function(){b=null,t.undo.saveStep()},Math.max(250,t.opts.typingTimer))))}function h(e){var n=e.which
return!!(c(e)||n>=37&&40>=n)||void(y&&b?(t.undo.saveStep(y),y=null):void 0!==n&&0!==n||y||b||t.undo.saveStep())}function m(e){return(!e||"BR"!=e.tagName)&&(0===(e.textContent||"").length&&e.querySelector&&!e.querySelector(":scope > br"))}function g(n){var r=t.el.childNodes,i=t.html.defaultTag()
return!(!n.target||n.target===t.el)||(0===r.length||void(t.$el.outerHeight()-n.offsetY<=10?m(r[r.length-1])&&(i?t.$el.append("<"+i+">"+e.FE.MARKERS+"<br></"+i+">"):t.$el.append(e.FE.MARKERS+"<br>"),t.selection.restore(),l()):n.offsetY<=10&&m(r[0])&&(i?t.$el.prepend("<"+i+">"+e.FE.MARKERS+"<br></"+i+">"):t.$el.prepend(e.FE.MARKERS+"<br>"),t.selection.restore(),l())))}var v,b,y,E=!1,T=null
return{_init:function(){if(t.events.on("keydown",d),t.events.on("input",n),t.events.on("mousedown",o),t.events.on("keyup input",h),t.events.on("keypress",i),t.events.on("keydown",s),t.events.on("keyup",u),t.events.on("html.inserted",u),t.events.on("cut",r),t.events.on("click",g),!t.browser.edge&&t.el.msGetInputContext)try{t.el.msGetInputContext().addEventListener("MSCandidateWindowShow",function(){E=!0}),t.el.msGetInputContext().addEventListener("MSCandidateWindowHide",function(){E=!1,u()})}catch(e){}},ctrlKey:c,isCharacter:p,isArrow:f,forceUndo:function(){b&&(clearTimeout(b),t.undo.saveStep(),y=null)},isIME:function(){return E},isBrowserAction:function(t){var n=t.which
return c(t)||n==e.FE.KEYCODE.F5},positionCaret:l}},e.FE.MODULES.accessibility=function(t){function n(e){e&&e.length&&!t.$el.find('[contenteditable="true"]').is(":focus")&&(e.data("blur-event-set")||e.parents(".fr-popup").length||(t.events.$on(e,"blur",function(){var n=e.parents(".fr-toolbar, .fr-popup").data("instance")||t
n.events.blurActive()&&n.events.trigger("blur"),n.events.enableBlur()},!0),e.data("blur-event-set",!0)),(e.parents(".fr-toolbar, .fr-popup").data("instance")||t).events.disableBlur(),e.focus(),t.shared.$f_el=e)}function r(e,t){var r=t?"last":"first",i=e.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible")[r]()
return i.length?(n(i),!0):void 0}function i(e){return e.is("input, textarea")&&a(),t.events.disableBlur(),e.focus(),!0}function o(e,n){var r=e.find("input, textarea, button, select").filter(":visible").not(":disabled").filter(n?":last":":first")
if(r.length)return i(r)
if(t.shared.with_kb){var o=e.find(".fr-active-item:visible:first")
if(o.length)return i(o)
var a=e.find("[tabIndex]:visible:first")
if(a.length)return i(a)}}function a(){0===t.$el.find(".fr-marker").length&&t.core.hasFocus()&&t.selection.save()}function s(e){e.$el.find(".fr-marker").length&&(e.events.disableBlur(),e.selection.restore(),e.events.enableBlur())}function l(){var e=t.popups.areVisible()
if(e){var n=e.find(".fr-buttons")
return n.find("button:focus, .fr-group span:focus").length?!r(e.data("instance").$tb):!r(n)}return!r(t.$tb)}function u(){var e=null
return t.shared.$f_el.is(".fr-dropdown.fr-active")?e=t.shared.$f_el:t.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active")&&(e=t.shared.$f_el.closest(".fr-dropdown-menu").prev()),e}function c(i,a,s){if(t.shared.$f_el){var l=u()
l&&(t.button.click(l),t.shared.$f_el=l)
var c=i.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible"),f=c.index(t.shared.$f_el)
if(0===f&&!s||f==c.length-1&&s){var p
if(a){if(i.parent().is(".fr-popup"))p=!o(i.parent().children().not(".fr-buttons"),!s)
!1===p&&(t.shared.$f_el=null)}a&&!1===p||r(i,!s)}else n(e(c.get(f+(s?1:-1))))
return!1}}function f(e,t){return c(e,t,!0)}function p(e,t){return c(e,t)}function d(e){if(t.shared.$f_el){var r
if(t.shared.$f_el.is(".fr-dropdown.fr-active"))return n(r=e?t.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first():t.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last()),!1
if(t.shared.$f_el.is("a.fr-command"))return(r=e?t.shared.$f_el.closest("li").nextAll(":visible:first").find(".fr-command:not(.fr-disabled)").first():t.shared.$f_el.closest("li").prevAll(":visible:first").find(".fr-command:not(.fr-disabled)").first()).length||(r=e?t.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first():t.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()),n(r),!1}}function h(){if(t.shared.$f_el){if(t.shared.$f_el.hasClass("fr-dropdown"))t.button.click(t.shared.$f_el)
else if(t.shared.$f_el.is("button.fr-back")){t.opts.toolbarInline&&(t.events.disableBlur(),t.events.focus())
var e=t.popups.areVisible(t)
e&&(t.shared.with_kb=!1),t.button.click(t.shared.$f_el),y(e)}else{if(t.events.disableBlur(),t.button.click(t.shared.$f_el),t.shared.$f_el.attr("data-popup")){var n=t.popups.areVisible(t)
n&&n.data("popup-button",t.shared.$f_el)}else if(t.shared.$f_el.attr("data-modal")){var r=t.modals.areVisible(t)
r&&r.data("modal-button",t.shared.$f_el)}t.shared.$f_el=null}return!1}}function m(){t.shared.$f_el&&(t.events.disableBlur(),t.shared.$f_el.blur(),t.shared.$f_el=null),!1!==t.events.trigger("toolbar.focusEditor")&&(t.events.disableBlur(),t.$el.focus(),t.events.focus())}function g(e){if(t.shared.$f_el){var r=u()
return r?(t.button.click(r),n(r)):e.parent().find(".fr-back:visible").length?(t.shared.with_kb=!1,t.opts.toolbarInline&&(t.events.disableBlur(),t.events.focus()),t.button.exec(e.parent().find(".fr-back:visible:first")),y(e.parent())):t.shared.$f_el.is("button, .fr-group span")&&(e.parent().is(".fr-popup")?(s(t),t.shared.$f_el=null,!1!==t.events.trigger("toolbar.esc")&&(t.popups.hide(e.parent()),t.opts.toolbarInline&&t.toolbar.showInline(null,!0),y(e.parent()))):m()),!1}}function v(n){n&&n.length&&(t.events.$on(n,"keydown",function(r){if(!e(r.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))return!0
var i=n.parents(".fr-popup").data("instance")||n.data("instance")||t
t.shared.with_kb=!0
var o=i.accessibility.exec(r,n)
return t.shared.with_kb=!1,o},!0),t.events.$on(n,"mouseenter","[tabIndex]",function(r){var i=n.parents(".fr-popup").data("instance")||n.data("instance")||t
if(!_)return r.stopPropagation(),void r.preventDefault()
var o=e(r.currentTarget)
i.shared.$f_el&&i.shared.$f_el.not(o)&&i.accessibility.focusEditor()},!0))}function b(n){var i=t.popups.get(n)
return{_tiKeydown:function(a){var l=i.data("instance")||t
if(!1===l.events.trigger("popup.tab",[a]))return!1
var u=a.which,c=i.find(":focus:first")
if(e.FE.KEYCODE.TAB==u){a.preventDefault()
var f=i.children().not(".fr-buttons"),p=f.find("input, textarea, button, select").filter(":visible").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(),d=p.indexOf(this)+(a.shiftKey?-1:1)
if(d>=0&&d<p.length)return l.events.disableBlur(),e(p[d]).focus(),a.stopPropagation(),!1
var h=i.find(".fr-buttons")
if(h.length&&r(h,!!a.shiftKey))return a.stopPropagation(),!1
if(o(f))return a.stopPropagation(),!1}else{if(e.FE.KEYCODE.ENTER!=u||!a.target||"TEXTAREA"===a.target.tagName)return e.FE.KEYCODE.ESC==u?(a.preventDefault(),a.stopPropagation(),s(l),l.popups.isVisible(n)&&i.find(".fr-back:visible").length?(l.opts.toolbarInline&&(l.events.disableBlur(),l.events.focus()),l.button.exec(i.find(".fr-back:visible:first")),y(i)):l.popups.isVisible(n)&&i.find(".fr-dismiss:visible").length?l.button.exec(i.find(".fr-dismiss:visible:first")):(l.popups.hide(n),l.opts.toolbarInline&&l.toolbar.showInline(null,!0),y(i)),!1):e.FE.KEYCODE.SPACE==u&&(c.is(".fr-submit")||c.is(".fr-dismiss"))?(a.preventDefault(),a.stopPropagation(),l.events.disableBlur(),l.button.exec(c),!0):l.keys.isBrowserAction(a)?void a.stopPropagation():c.is("input[type=text], textarea")?void a.stopPropagation():e.FE.KEYCODE.SPACE==u&&(c.is(".fr-link-attr")||c.is("input[type=file]"))?void a.stopPropagation():(a.stopPropagation(),a.preventDefault(),!1)
var m=null
i.find(".fr-submit:visible").length>0?m=i.find(".fr-submit:visible:first"):i.find(".fr-dismiss:visible").length&&(m=i.find(".fr-dismiss:visible:first")),m&&(a.preventDefault(),a.stopPropagation(),l.events.disableBlur(),l.button.exec(m))}},_tiMouseenter:function(){E(i.data("instance")||t)}}}function y(e){var t=e.data("popup-button")
t&&setTimeout(function(){n(t),e.data("popup-button",null)},0)}function E(e){var n=t.popups.areVisible(e)
n&&n.data("popup-button",null)}function T(n){var r=-1!=navigator.userAgent.indexOf("Mac OS X")?n.metaKey:n.ctrlKey
if(n.which==e.FE.KEYCODE.F10&&!r&&!n.shiftKey&&n.altKey){t.shared.with_kb=!0
var i=t.popups.areVisible(t),a=!1
return i&&(a=o(i.children().not(".fr-buttons"))),a||l(),t.shared.with_kb=!1,n.preventDefault(),n.stopPropagation(),!1}return!0}var _=!0
return{_init:function(){t.$wp?t.events.on("keydown",T,!0):t.events.$on(t.$win,"keydown",T,!0),t.events.on("mousedown",function(e){E(t),t.shared.$f_el&&(s(t),e.stopPropagation(),t.events.disableBlur(),t.shared.$f_el=null)},!0),t.events.on("blur",function(){t.shared.$f_el=null,E(t)},!0)},registerPopup:function(e){var n=t.popups.get(e),r=b(e)
v(n.find(".fr-buttons")),t.events.$on(n,"mouseenter","tabIndex",r._tiMouseenter,!0),t.events.$on(n.children().not(".fr-buttons"),"keydown","[tabIndex]",r._tiKeydown,!0),t.popups.onHide(e,function(){s(n.data("instance")||t)}),t.popups.onShow(e,function(){_=!1,setTimeout(function(){_=!0},0)})},registerToolbar:v,focusToolbarElement:n,focusToolbar:r,focusContent:o,focusPopup:function(e){var n=e.children().not(".fr-buttons")
n.data("mouseenter-event-set")||(t.events.$on(n,"mouseenter","[tabIndex]",function(r){var i=e.data("instance")||t
if(!_)return r.stopPropagation(),void r.preventDefault()
var o=n.find(":focus:first")
o.length&&!o.is("input, button, textarea")&&(i.events.disableBlur(),o.blur(),i.events.disableBlur(),i.events.focus())}),n.data("mouseenter-event-set",!0)),!o(n)&&t.shared.with_kb&&r(e.find(".fr-buttons"))},focusModal:function(e){t.core.hasFocus()||(t.events.disableBlur(),t.events.focus()),t.accessibility.saveSelection(),t.events.disableBlur(),t.$el.blur(),t.selection.clear(),t.events.disableBlur(),t.shared.with_kb?e.find(".fr-command[tabIndex], [tabIndex]").first().focus():e.find("[tabIndex]:first").focus()},focusEditor:m,focusPopupButton:y,focusModalButton:function(e){var t=e.data("modal-button")
t&&setTimeout(function(){n(t),e.data("modal-button",null)},0)},hasFocus:function(){return null!=t.shared.$f_el},exec:function(n,r){var i=-1!=navigator.userAgent.indexOf("Mac OS X")?n.metaKey:n.ctrlKey,o=n.which,a=!1
return o!=e.FE.KEYCODE.TAB||i||n.shiftKey||n.altKey?o!=e.FE.KEYCODE.ARROW_RIGHT||i||n.shiftKey||n.altKey?o!=e.FE.KEYCODE.TAB||i||!n.shiftKey||n.altKey?o!=e.FE.KEYCODE.ARROW_LEFT||i||n.shiftKey||n.altKey?o!=e.FE.KEYCODE.ARROW_UP||i||n.shiftKey||n.altKey?o!=e.FE.KEYCODE.ARROW_DOWN||i||n.shiftKey||n.altKey?o!=e.FE.KEYCODE.ENTER||i||n.shiftKey||n.altKey?o!=e.FE.KEYCODE.ESC||i||n.shiftKey||n.altKey?o!=e.FE.KEYCODE.F10||i||n.shiftKey||!n.altKey||(a=l()):a=g(r):a=h():a=t.shared.$f_el&&t.shared.$f_el.is(".fr-dropdown:not(.fr-active)")?h():d(!0):a=d():a=p(r):a=p(r,!0):a=f(r):a=f(r,!0),t.shared.$f_el||void 0!==a||(a=!0),!a&&t.keys.isBrowserAction(n)&&(a=!0),!!a||(n.preventDefault(),n.stopPropagation(),!1)},saveSelection:a,restoreSelection:s}},e.FE.MODULES.format=function(t){function n(e,t){var n="<"+e
for(var r in t)t.hasOwnProperty(r)&&(n+=" "+r+'="'+t[r]+'"')
return n+">"}function r(e,t){var n=e
for(var r in t)t.hasOwnProperty(r)&&(n+="id"==r?"#"+t[r]:"class"==r?"."+t[r]:"["+r+'="'+t[r]+'"]')
return n}function i(e,t){return!(!e||e.nodeType!=Node.ELEMENT_NODE)&&(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function o(r,i,a){if(r){if(t.node.isBlock(r))return o(r.firstChild,i,a),!1
for(var s=e(n(i,a)).insertBefore(r),l=r;l&&!e(l).is(".fr-marker")&&0===e(l).find(".fr-marker").length&&"UL"!=l.tagName&&"OL"!=l.tagName;){var u=l
l=l.nextSibling,s.append(u)}if(l)(e(l).find(".fr-marker").length||"UL"==l.tagName||"OL"==l.tagName)&&o(l.firstChild,i,a)
else{for(var c=s.get(0).parentNode;c&&!c.nextSibling&&!t.node.isElement(c);)c=c.parentNode
if(c){var f=c.nextSibling
f&&(t.node.isBlock(f)?o(f.firstChild,i,a):o(f,i,a))}}s.is(":empty")&&s.remove()}}function a(a,s){var l
if(void 0===s&&(s={}),s.style&&delete s.style,t.selection.isCollapsed()){t.markers.insert(),t.$el.find(".fr-marker").replaceWith(n(a,s)+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+function(e){return"</"+e+">"}(a)),t.selection.restore()}else{var u
t.selection.save(),o(t.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,a,s)
do{for(u=t.$el.find(r(a,s)+" > "+r(a,s)),l=0;l<u.length;l++)u[l].outerHTML=u[l].innerHTML}while(u.length)
t.el.normalize()
var c=t.el.querySelectorAll(".fr-marker")
for(l=0;l<c.length;l++){var f=e(c[l])
!0===f.data("type")?i(f.get(0).nextSibling,r(a,s))&&f.next().prepend(f):i(f.get(0).previousSibling,r(a,s))&&f.prev().append(f)}t.selection.restore()}}function s(e,n,o,a){if(!a){var s=!1
if(!0===e.data("type"))for(;t.node.isFirstSibling(e.get(0))&&!e.parent().is(t.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().before(e),s=!0
else if(!1===e.data("type"))for(;t.node.isLastSibling(e.get(0))&&!e.parent().is(t.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().after(e),s=!0
if(s)return!0}if(e.parents(n).length||void 0===n){var l="",u="",c=e.parent()
if(c.is(t.$el)||t.node.isBlock(c.get(0)))return!1
for(;!t.node.isBlock(c.parent().get(0))&&(void 0===n||void 0!==n&&!i(c.get(0),r(n,o)));)l+=t.node.closeTagString(c.get(0)),u=t.node.openTagString(c.get(0))+u,c=c.parent()
var f=e.get(0).outerHTML
e.replaceWith('<span id="mark"></span>')
var p=c.html().replace(/<span id="mark"><\/span>/,l+t.node.closeTagString(c.get(0))+u+f+l+t.node.openTagString(c.get(0))+u)
return c.replaceWith(t.node.openTagString(c.get(0))+p+t.node.closeTagString(c.get(0))),!0}return!1}function l(n,o,a,s){for(var u=t.node.contents(n.get(0)),c=0;c<u.length;c++){var f=u[c]
if(t.node.hasClass(f,"fr-marker"))o=(o+1)%2
else if(o)if(e(f).find(".fr-marker").length>0)o=l(e(f),o,a,s)
else{for(var p=e(f).find(a||"*:not(a):not(br)"),d=p.length-1;d>=0;d--){var h=p[d]
t.node.isBlock(h)||t.node.isVoid(h)||void 0!==a&&!i(h,r(a,s))?t.node.isBlock(h)&&void 0===a&&"TABLE"!=f.tagName&&t.node.clearAttributes(h):h.outerHTML=h.innerHTML}void 0===a&&f.nodeType==Node.ELEMENT_NODE&&!t.node.isVoid(f)&&!t.node.isBlock(f)||i(f,r(a,s))?e(f).replaceWith(f.innerHTML):void 0===a&&f.nodeType==Node.ELEMENT_NODE&&t.node.isBlock(f)&&"TABLE"!=f.tagName&&t.node.clearAttributes(f)}else e(f).find(".fr-marker").length>0&&(o=l(e(f),o,a,s))}return o}function u(n,r){void 0===r&&(r={}),r.style&&delete r.style
var i=t.selection.isCollapsed()
t.selection.save()
for(var o=!0;o;){o=!1
for(var a=t.$el.find(".fr-marker"),u=0;u<a.length;u++){var c=e(a[u]),f=null
if(c.attr("data-cloned")||i||(f=c.clone().removeClass("fr-marker").addClass("fr-clone"),!0===c.data("type")?c.attr("data-cloned",!0).after(f):c.attr("data-cloned",!0).before(f)),s(c,n,r,i)){o=!0
break}}}l(t.$el,0,n,r),i||(t.$el.find(".fr-marker").remove(),t.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")),i&&t.$el.find(".fr-marker").before(e.FE.INVISIBLE_SPACE).after(e.FE.INVISIBLE_SPACE),t.html.cleanEmptyTags(),t.el.normalize(),t.selection.restore()}function c(t,n){var r=e(t)
r.css(n,""),""===r.attr("style")&&r.replaceWith(r.html())}function f(t,n){return 0===e(t).attr("style").indexOf(n+":")||e(t).attr("style").indexOf(";"+n+":")>=0||e(t).attr("style").indexOf("; "+n+":")>=0}function p(n,r){var i,a
if(t.selection.isCollapsed()){t.markers.insert()
var l=(a=t.$el.find(".fr-marker")).parent()
if(t.node.openTagString(l.get(0))=='<span style="'+n+": "+l.css(n)+';">'){if(t.node.isEmpty(l.get(0)))l.replaceWith('<span style="'+n+": "+r+';">'+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+"</span>")
else{var u={}
u["style*"]=n+":",s(a,"span",u,!0),a=t.$el.find(".fr-marker"),r?a.replaceWith('<span style="'+n+": "+r+';">'+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+"</span>"):a.replaceWith(e.FE.INVISIBLE_SPACE+e.FE.MARKERS)}t.html.cleanEmptyTags()}else t.node.isEmpty(l.get(0))&&l.is("span")?(a.replaceWith(e.FE.MARKERS),l.css(n,r)):a.replaceWith('<span style="'+n+": "+r+';">'+e.FE.INVISIBLE_SPACE+e.FE.MARKERS+"</span>")
t.selection.restore()}else{if(t.selection.save(),null==r||"color"==n&&t.$el.find(".fr-marker").parents("u, a").length>0){var p=t.$el.find(".fr-marker")
for(i=0;i<p.length;i++)if(!0===(a=e(p[i])).data("type"))for(;t.node.isFirstSibling(a.get(0))&&!a.parent().is(t.$el)&&!t.node.isElement(a.parent().get(0))&&!t.node.isBlock(a.parent().get(0));)a.parent().before(a)
else for(;t.node.isLastSibling(a.get(0))&&!a.parent().is(t.$el)&&!t.node.isElement(a.parent().get(0))&&!t.node.isBlock(a.parent().get(0));)a.parent().after(a)}var d=t.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,h={class:"fr-unprocessed"}
for(r&&(h.style=n+": "+r+";"),o(d,"span",h),t.$el.find(".fr-marker + .fr-unprocessed").each(function(){e(this).prepend(e(this).prev())}),t.$el.find(".fr-unprocessed + .fr-marker").each(function(){e(this).prev().append(this)}),(r||"").match(/\dem$/)&&t.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed");t.$el.find("span.fr-unprocessed").length>0;){var m=t.$el.find("span.fr-unprocessed:first").removeClass("fr-unprocessed")
if(m.parent().get(0).normalize(),m.parent().is("span")&&1==m.parent().get(0).childNodes.length){m.parent().css(n,r)
var g=m
m=m.parent(),g.replaceWith(g.html())}var v=m.find("span")
for(i=v.length-1;i>=0;i--)c(v[i],n)
var b=m.parentsUntil(t.$el,"span[style]"),y=[]
for(i=b.length-1;i>=0;i--)f(b[i],n)||y.push(b[i])
if((b=b.not(y)).length){var E="",T="",_="",A="",w=m.get(0)
do{w=w.parentNode,e(w).addClass("fr-split"),E+=t.node.closeTagString(w),T=t.node.openTagString(e(w).clone().addClass("fr-split").get(0))+T,b.get(0)!=w&&(_+=t.node.closeTagString(w),A=t.node.openTagString(e(w).clone().addClass("fr-split").get(0))+A)}while(b.get(0)!=w)
var C=E+t.node.openTagString(e(b.get(0)).clone().css(n,r||"").get(0))+A+m.css(n,"").get(0).outerHTML+_+"</span>"+T
m.replaceWith('<span id="fr-break"></span>')
var S=b.get(0).outerHTML
e(b.get(0)).replaceWith(S.replace(/<span id="fr-break"><\/span>/g,C))}}for(;t.$el.find(".fr-split:empty").length>0;)t.$el.find(".fr-split:empty").remove()
t.$el.find(".fr-split").removeClass("fr-split"),t.$el.find('span[style=""]').removeAttr("style"),t.$el.find('span[class=""]').removeAttr("class"),t.html.cleanEmptyTags(),e(t.$el.find("span").get().reverse()).each(function(){this.attributes&&0!==this.attributes.length||e(this).replaceWith(this.innerHTML)}),t.el.normalize()
var O=t.$el.find("span[style] + span[style]")
for(i=0;i<O.length;i++){var x=e(O[i]),R=e(O[i]).prev()
x.get(0).previousSibling==R.get(0)&&t.node.openTagString(x.get(0))==t.node.openTagString(R.get(0))&&(x.prepend(R.html()),R.remove())}t.$el.find("span[style] span[style]").each(function(){if(e(this).attr("style").indexOf("font-size")>=0){var t=e(this).parents("span[style]")
t.attr("style").indexOf("background-color")>=0&&(e(this).attr("style",e(this).attr("style")+";"+t.attr("style")),s(e(this),"span[style]",{},!1))}}),t.el.normalize(),t.selection.restore()}}function d(e,n){void 0===n&&(n={}),n.style&&delete n.style
var o=t.selection.ranges(0),a=o.startContainer
if(a.nodeType==Node.ELEMENT_NODE&&a.childNodes.length>0&&a.childNodes[o.startOffset]&&(a=a.childNodes[o.startOffset]),!o.collapsed&&a.nodeType==Node.TEXT_NODE&&o.startOffset==(a.textContent||"").length){for(;!t.node.isBlock(a.parentNode)&&!a.nextSibling;)a=a.parentNode
a.nextSibling&&(a=a.nextSibling)}for(var s=a;s&&s.nodeType==Node.ELEMENT_NODE&&!i(s,r(e,n));)s=s.firstChild
if(s&&s.nodeType==Node.ELEMENT_NODE&&i(s,r(e,n)))return!0
var l=a
for(l&&l.nodeType!=Node.ELEMENT_NODE&&(l=l.parentNode);l&&l.nodeType==Node.ELEMENT_NODE&&l!=t.el&&!i(l,r(e,n));)l=l.parentNode
return!(!l||l.nodeType!=Node.ELEMENT_NODE||l==t.el||!i(l,r(e,n)))}return{is:d,toggle:function(e,t){d(e,t)?u(e,t):a(e,t)},apply:a,remove:u,applyStyle:p,removeStyle:function(e){p(e,null)}}},e.extend(e.FE.DEFAULTS,{indentMargin:20}),e.FE.COMMANDS={bold:{title:"Bold",toggle:!0,refresh:function(e){var t=this.format.is("strong")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},italic:{title:"Italic",toggle:!0,refresh:function(e){var t=this.format.is("em")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},underline:{title:"Underline",toggle:!0,refresh:function(e){var t=this.format.is("u")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},strikeThrough:{title:"Strikethrough",toggle:!0,refresh:function(e){var t=this.format.is("s")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},subscript:{title:"Subscript",toggle:!0,refresh:function(e){var t=this.format.is("sub")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},superscript:{title:"Superscript",toggle:!0,refresh:function(e){var t=this.format.is("sup")
e.toggleClass("fr-active",t).attr("aria-pressed",t)}},outdent:{title:"Decrease Indent"},indent:{title:"Increase Indent"},undo:{title:"Undo",undo:!1,forcedRefresh:!0,disabled:!0},redo:{title:"Redo",undo:!1,forcedRefresh:!0,disabled:!0},insertHR:{title:"Insert Horizontal Line"},clearFormatting:{title:"Clear Formatting"},selectAll:{title:"Select All",undo:!1}},e.FE.RegisterCommand=function(t,n){e.FE.COMMANDS[t]=n},e.FE.MODULES.commands=function(t){function n(e){return t.html.defaultTag()&&(e="<"+t.html.defaultTag()+">"+e+"</"+t.html.defaultTag()+">"),e}function r(n,r){if(!1!==t.events.trigger("commands.before",e.merge([n],r||[]))){var i=e.FE.COMMANDS[n]&&e.FE.COMMANDS[n].callback||s[n],o=!0,a=!1
e.FE.COMMANDS[n]&&(void 0!==e.FE.COMMANDS[n].focus&&(o=e.FE.COMMANDS[n].focus),void 0!==e.FE.COMMANDS[n].accessibilityFocus&&(a=e.FE.COMMANDS[n].accessibilityFocus)),(!t.core.hasFocus()&&o&&!t.popups.areVisible()||!t.core.hasFocus()&&a&&t.accessibility.hasFocus())&&t.events.focus(!0),e.FE.COMMANDS[n]&&!1!==e.FE.COMMANDS[n].undo&&(t.$el.find(".fr-marker").length&&(t.events.disableBlur(),t.selection.restore()),t.undo.saveStep()),i&&i.apply(t,e.merge([n],r||[])),t.events.trigger("commands.after",e.merge([n],r||[])),e.FE.COMMANDS[n]&&!1!==e.FE.COMMANDS[n].undo&&t.undo.saveStep()}}function i(e,n){t.format.toggle(n)}function o(n){t.selection.save(),t.html.wrap(!0,!0,!0,!0),t.selection.restore()
for(var r=t.selection.blocks(),i=0;i<r.length;i++)if("LI"!=r[i].tagName&&"LI"!=r[i].parentNode.tagName){var o=e(r[i]),a="rtl"==t.opts.direction||"rtl"==o.css("direction")?"margin-right":"margin-left",s=t.helpers.getPX(o.css(a))
if(o.width()<2*t.opts.indentMargin&&n>0)continue
o.css(a,Math.max(s+n*t.opts.indentMargin,0)||""),o.removeClass("fr-temp-div")}t.selection.save(),t.html.unwrap(),t.selection.restore()}function a(e){return function(){r(e)}}var s={bold:function(){i(0,"strong")},subscript:function(){t.format.is("sup")&&t.format.remove("sup"),i(0,"sub")},superscript:function(){t.format.is("sub")&&t.format.remove("sub"),i(0,"sup")},italic:function(){i(0,"em")},strikeThrough:function(){i(0,"s")},underline:function(){i(0,"u")},undo:function(){t.undo.run()},redo:function(){t.undo.redo()},indent:function(){o(1)},outdent:function(){o(-1)},show:function(){t.opts.toolbarInline&&t.toolbar.showInline(null,!0)},insertHR:function(){t.selection.remove()
var r=""
t.core.isEmpty()&&(r=n(r="<br>")),t.html.insert('<hr id="fr-just">'+r)
var i,o=t.$el.find("hr#fr-just")
if(o.removeAttr("id"),0===o.next().length){var a=t.html.defaultTag()
a?o.after(e("<"+a+">").append("<br>")):o.after("<br>")}o.prev().is("hr")?i=t.selection.setAfter(o.get(0),!1):o.next().is("hr")?i=t.selection.setBefore(o.get(0),!1):t.selection.setAfter(o.get(0),!1)||t.selection.setBefore(o.get(0),!1),i||void 0===i||(r=n(r=e.FE.MARKERS+"<br>"),o.after(r)),t.selection.restore()},clearFormatting:function(){t.format.remove()},selectAll:function(){t.doc.execCommand("selectAll",!1,!1)}},l={}
for(var u in s)s.hasOwnProperty(u)&&(l[u]=a(u))
return e.extend(l,{exec:r,_init:function(){t.events.on("keydown",function(e){var n=t.selection.element()
return n&&"HR"==n.tagName&&!t.keys.isArrow(e.which)?(e.preventDefault(),!1):void 0}),t.events.on("keyup",function(n){var r=t.selection.element()
if(r&&"HR"==r.tagName)if(n.which==e.FE.KEYCODE.ARROW_LEFT||n.which==e.FE.KEYCODE.ARROW_UP){if(r.previousSibling)return t.node.isBlock(r.previousSibling)?t.selection.setAtEnd(r.previousSibling):e(r).before(e.FE.MARKERS),t.selection.restore(),!1}else if((n.which==e.FE.KEYCODE.ARROW_RIGHT||n.which==e.FE.KEYCODE.ARROW_DOWN)&&r.nextSibling)return t.node.isBlock(r.nextSibling)?t.selection.setAtStart(r.nextSibling):e(r).after(e.FE.MARKERS),t.selection.restore(),!1}),t.events.on("mousedown",function(e){return e.target&&"HR"==e.target.tagName?(e.preventDefault(),e.stopPropagation(),!1):void 0}),t.events.on("mouseup",function(){var n=t.selection.element()
n==t.selection.endElement()&&n&&"HR"==n.tagName&&(n.nextSibling&&(t.node.isBlock(n.nextSibling)?t.selection.setAtStart(n.nextSibling):e(n).after(e.FE.MARKERS)),t.selection.restore())})}})},e.FE.MODULES.data=function(e){function t(e){return e}function n(e){for(var t=e.toString(),n=0,r=0;r<t.length;r++)n+=parseInt(t.charAt(r),10)
return n>10?n%9+1:n}function r(e,t,n){for(var r=Math.abs(n);r-- >0;)e-=t
return 0>n&&(e+=123),e}function i(e){return!(!e||"block"===e.css("display"))&&(e.remove(),!0)}function o(){return i(s)||i(l)}function a(){return p>10&&e.destroy(),!!e.$box&&(e.$wp.prepend(f(t(f("NCKB1zwtPA9tqzajXC2c2A7B-16VD3spzJ1C9C3D5oOF2OB1NB1LD7VA5QF4TE3gytXB2A4C-8VA2AC4E1D3GB2EB2KC3KD1MF1juuSB1A8C6yfbmd1B2a1A5qdsdB2tivbC3CB1KC1CH1eLA2sTF1B4I4H-7B-21UB6b1F5bzzzyAB4JC3MG2hjdKC1JE6C1E1cj1pD-16pUE5B4prra2B5ZB3D3C3pxj1EA6A3rnJA2C-7I-7JD9D1E1wYH1F3sTB5TA2G4H4ZA22qZA5BB3mjcvcCC3JB1xillavC-21VE6PC5SI4YC5C8mb1A3WC3BD2B5aoDA2qqAE3A5D-17fOD1D5RD4WC10tE6OAZC3nF-7b1C4A4D3qCF2fgmapcromlHA2QA6a1E1D3e1A6C2bie2F4iddnIA7B2mvnwcIB5OA1DB2OLQA3PB10WC7WC5d1E3uI-7b1D5D6b1E4D2arlAA4EA1F-11srxI-7MB1D7PF1E5B4adB-21YD5vrZH3D3xAC4E1A2GF2CF2J-7yNC2JE1MI2hH-7QB1C6B5B-9bA-7XB13a1B5VievwpKB4LA3NF-10H-9I-8hhaC-16nqPG4wsleTD5zqYF3h1G2B7B4yvGE2Pi1H-7C-21OE6B1uLD1kI4WC1E7C5g1D-8fue1C8C6c1D4D3Hpi1CC4kvGC2E1legallyXB4axVA11rsA4A-9nkdtlmzBA2GD3A13A6CB1dabE1lezrUE6RD5TB4A-7f1C8c1B5d1D4D3tyfCD5C2D2==")))),s=e.$wp.find("> div:first"),l=s.find("> a"),"rtl"==e.opts.direction&&s.css("left","auto").css("right",0).setAttribute("direction","rtl"),void p++)}var s,l,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=function(){for(var e=0,t=document.domain,n=t.split("."),r="_gd"+(new Date).getTime();e<n.length-1&&-1==document.cookie.indexOf(r+"="+r);)t=n.slice(-1-++e).join("."),document.cookie=r+"="+r+";domain="+t+";"
return document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+t+";",(t||"").replace(/(^\.*)|(\.*$)/g,"")}(),f=t(function(e){if(!e)return e
for(var i="",o=t("charCodeAt"),a=t("fromCharCode"),s=u.indexOf(e[0]),l=1;l<e.length-2;l++){for(var c=n(++s),f=e[o](l),p="";/[0-9-]/.test(e[l+1]);)p+=e[++l]
f=r(f,c,p=parseInt(p,10)||0),f^=s-1&31,i+=String[a](f)}return i}),p=0
return{_init:function(){var n=e.o_win.FEK
try{n=n||localStorage&&localStorage.FEK}catch(e){}n=n||e.opts.key||[""]
var r=f(t("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9=="))
"string"==typeof n&&(n=[n]),e.ul=!0
for(var i=0;i<n.length;i++){var l=f(n[i])||""
if(!(l!==f(t(f("mcVRDoB1BGILD7YFe1BTXBA7B6==")))&&l.indexOf(c,l.length-c.length)<0&&[f("9qqG-7amjlwq=="),f("KA3B3C2A6D1D5H5H1A3=="),f("QzbzvxyB2yA-9m=="),f("ji1kacwmgG5bc=="),f("naamngiA3dA-16xtE-11C-9B1H-8sc==")].indexOf(c)<0)){e.ul=!1
break}}var u=new Image
!0===e.ul&&(a(),u.src=t(f(r))+"u"),e.events.on("contentChanged",function(){!0===e.ul&&o()&&a()}),e.events.on("destroy",function(){s&&s.length&&s.remove()},!0)}}},e.extend(e.FE.DEFAULTS,{pastePlain:!1,pasteDeniedTags:["colgroup","col","meta"],pasteDeniedAttrs:["class","id","style"],pasteAllowedStyleProps:[".*"],pasteAllowLocalImages:!1}),e.FE.MODULES.paste=function(t){function n(e,n){try{t.win.localStorage.setItem("fr-copied-html",e),t.win.localStorage.setItem("fr-copied-text",n)}catch(e){}}function r(r){var i=t.html.getSelected()
n(i,e("<div>").html(i).text()),"cut"==r.type&&(t.undo.saveStep(),setTimeout(function(){t.selection.save(),t.html.wrap(),t.selection.restore(),t.events.focus(),t.undo.saveStep()},0))}function i(e){if(g)return!1
if(e.originalEvent&&(e=e.originalEvent),!1===t.events.trigger("paste.before",[e]))return e.preventDefault(),!1
if(t.$win.scrollTop(),e&&e.clipboardData&&e.clipboardData.getData){var n="",r=e.clipboardData.types
if(t.helpers.isArray(r))for(var i=0;i<r.length;i++)n+=r[i]+";"
else n=r
if(p="",/text\/rtf/.test(n)&&(d=e.clipboardData.getData("text/rtf")),/text\/html/.test(n)&&!t.browser.safari?p=e.clipboardData.getData("text/html"):/text\/rtf/.test(n)&&t.browser.safari?p=d:/text\/plain/.test(n)&&!t.browser.mozilla&&(p=t.html.escapeEntities(e.clipboardData.getData("text/plain")).replace(/\n/g,"<br>")),""!==p)return s(),e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1
p=null}return a(),!1}function o(n){if(n.originalEvent&&(n=n.originalEvent),n&&n.dataTransfer&&n.dataTransfer.getData){var r="",i=n.dataTransfer.types
if(t.helpers.isArray(i))for(var o=0;o<i.length;o++)r+=i[o]+";"
else r=i
if(p="",/text\/rtf/.test(r)&&(d=n.dataTransfer.getData("text/rtf")),/text\/html/.test(r)?p=n.dataTransfer.getData("text/html"):/text\/rtf/.test(r)&&t.browser.safari?p=d:/text\/plain/.test(r)&&!this.browser.mozilla&&(p=t.html.escapeEntities(n.dataTransfer.getData("text/plain")).replace(/\n/g,"<br>")),""!==p){if(t.keys.forceUndo(),m=t.snapshot.get(),t.selection.remove(),!1!==t.markers.insertAtPoint(n)){var a=t.el.querySelector(".fr-marker")
return e(a).replaceWith(e.FE.MARKERS),s(),n.preventDefault&&(n.stopPropagation(),n.preventDefault()),!1}}else p=null}}function a(){t.selection.save(),t.events.disableBlur(),p=null,h?(h.html(""),t.browser.edge&&t.opts.iframe&&t.$el.append(h)):(h=e('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%;" tabIndex="-1"></div>'),t.browser.safari?(h.css("top",t.$sc.scrollTop()),t.$el.after(h)):t.browser.edge&&t.opts.iframe?t.$el.append(h):t.$box.after(h),t.events.on("destroy",function(){h.remove()})),h.focus(),t.win.setTimeout(s,1)}function s(){t.browser.edge&&t.opts.iframe&&t.$box.after(h),m||(t.keys.forceUndo(),m=t.snapshot.get()),p||(p=h.get(0).innerHTML,t.selection.restore(),t.events.enableBlur())
var e=p.match(/(class=\"?Mso|class=\'?Mso|class="?Xl|class='?Xl|class=Xl|style=\"[^\"]*\bmso\-|style=\'[^\']*\bmso\-|w:WordDocument)/gi),n=t.events.chainTrigger("paste.beforeCleanup",p)
n&&"string"==typeof n&&(p=n),(!e||e&&!1!==t.events.trigger("paste.wordPaste",[p]))&&l(p,e)}function l(n,r,i){var o,a=null,s=null
n.toLowerCase().indexOf("<body")>=0&&(n=(n=n.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi,"$1")).replace(/ \n/g," ").replace(/\n /g," ").replace(/([^>])\n([^<])/g,"$1 $2"))
var l=!1
n.indexOf('id="docs-internal-guid')>=0&&(n=n.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g,"$1"),l=!0)
var u=!1
if(!r&&((u=function(n){var r=null
try{r=t.win.localStorage.getItem("fr-copied-text")}catch(e){}return!(!r||e("<div>").html(n).text().replace(/\u00A0/gi," ").replace(/\r|\n/gi,"")!=r.replace(/\u00A0/gi," ").replace(/\r|\n/gi,""))}(n))&&(n=t.win.localStorage.getItem("fr-copied-html")),!u)){var f=t.opts.htmlAllowedStyleProps
t.opts.htmlAllowedStyleProps=t.opts.pasteAllowedStyleProps,t.opts.htmlAllowComments=!1,n=t.clean.html(n,t.opts.pasteDeniedTags,t.opts.pasteDeniedAttrs),t.opts.htmlAllowedStyleProps=f,t.opts.htmlAllowComments=!0,n=(n=(n=c(n)).replace(/\r|\n|\t/g,"")).replace(/^ */g,"").replace(/ *$/g,"")}!r||t.wordPaste&&i||(0===(n=n.replace(/^\n*/g,"").replace(/^ /g,"")).indexOf("<colgroup>")&&(n="<table>"+n+"</table>"),n=c(n=function(e){var n
e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>")).replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>")).replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>")).replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span")).replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,"")).replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi,"")).replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," ")).replace(/<!--[\s\S]*?-->/gi,"")).replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"")
var r,i=["style","script","applet","embed","noframes","noscript"]
for(n=0;n<i.length;n++){var o=new RegExp("<"+i[n]+".*?"+i[n]+"(.*?)>","gi")
e=e.replace(o,"")}e=(e=(e=e.replace(/&nbsp;/gi," ")).replace(/<td([^>]*)><\/td>/g,"<td$1><br></td>")).replace(/<th([^>]*)><\/th>/g,"<th$1><br></th>")
do{r=e,e=e.replace(/<[^\/>][^>]*><\/[^>]+>/gi,"")}while(e!=r)
e=(e=e.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>')).replace(/<lilevel1([^>]*)>/gi,"<li$1>"),e=(e=(e=t.clean.html(e,t.opts.pasteDeniedTags,t.opts.pasteDeniedAttrs)).replace(/<a>(.[^<]+)<\/a>/gi,"$1")).replace(/<br> */g,"<br>")
var a=t.o_doc.createElement("div")
a.innerHTML=e
var s=a.querySelectorAll("li[data-indent]")
for(n=0;n<s.length;n++){var l=s[n],u=l.previousElementSibling
if(u&&"LI"==u.tagName){var c=u.querySelector(":scope > ul, :scope > ol")
c||(c=document.createElement("ul"),u.appendChild(c)),c.appendChild(l)}else l.removeAttribute("data-indent")}return t.html.cleanBlankSpaces(a),a.innerHTML}(n))),t.opts.pastePlain&&!u&&(n=function(e){var n,r=null,i=t.doc.createElement("div")
i.innerHTML=e
var o=i.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote")
for(n=0;n<o.length;n++)(r=o[n]).outerHTML="<"+(t.html.defaultTag()||"DIV")+">"+r.innerHTML+"</"+(t.html.defaultTag()||"DIV")+">"
for(n=(o=i.querySelectorAll("*:not("+"p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not(")+")")).length-1;n>=0;n--)(r=o[n]).outerHTML=r.innerHTML
var a=function(e){for(var n=t.node.contents(e),r=0;r<n.length;r++)n[r].nodeType!=Node.TEXT_NODE&&n[r].nodeType!=Node.ELEMENT_NODE?n[r].parentNode.removeChild(n[r]):a(n[r])}
return a(i),i.innerHTML}(n))
var p=t.events.chainTrigger("paste.afterCleanup",n)
if("string"==typeof p&&(n=p),""!==n){var d=t.o_doc.createElement("div")
d.innerHTML=n,t.spaces.normalize(d)
var h=d.getElementsByTagName("span")
for(o=h.length-1;o>=0;o--){var g=h[o]
0===g.attributes.length&&(g.outerHTML=g.innerHTML)}var v=t.selection.element(),b=!1
if(v&&e(v).parentsUntil(t.el,"ul, ol").length&&(b=!0),b){var y=d.children
1==y.length&&["OL","UL"].indexOf(y[0].tagName)>=0&&(y[0].outerHTML=y[0].innerHTML)}if(!l){var E=d.getElementsByTagName("br")
for(o=E.length-1;o>=0;o--){var T=E[o]
t.node.isBlock(T.previousSibling)&&T.parentNode.removeChild(T)}}if(t.opts.enter==e.FE.ENTER_BR)for(o=(a=d.querySelectorAll("p, div")).length-1;o>=0;o--)0===(s=a[o]).attributes.length&&(s.outerHTML=s.innerHTML+(s.nextSibling&&!t.node.isEmpty(s)?"<br>":""))
else if(t.opts.enter==e.FE.ENTER_DIV)for(o=(a=d.getElementsByTagName("p")).length-1;o>=0;o--)0===(s=a[o]).attributes.length&&(s.outerHTML="<div>"+s.innerHTML+"</div>")
else t.opts.enter==e.FE.ENTER_P&&1==d.childNodes.length&&"P"==d.childNodes[0].tagName&&0===d.childNodes[0].attributes.length&&(d.childNodes[0].outerHTML=d.childNodes[0].innerHTML)
n=d.innerHTML,u&&(n=function(n){var r,i=t.o_doc.createElement("div")
i.innerHTML=n
for(var o=i.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+e.FE.VOID_ELEMENTS.join("):not(")+")");o.length;){for(r=0;r<o.length;r++)o[r].parentNode.removeChild(o[r])
o=i.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+e.FE.VOID_ELEMENTS.join("):not(")+")")}return i.innerHTML}(n)),t.html.insert(n,!0)}t.events.trigger("paste.after"),t.undo.saveStep(m),m=null,t.undo.saveStep()}function u(e){for(var t=e.length-1;t>=0;t--)e[t].attributes&&e[t].attributes.length&&e.splice(t,1)
return e}function c(e){var n,r=t.o_doc.createElement("div")
r.innerHTML=e
for(var i=u(Array.prototype.slice.call(r.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));i.length;){var o=i[i.length-1]
if(t.html.defaultTag()&&"div"!=t.html.defaultTag())o.querySelector(t.html.blockTagsQuery())?o.outerHTML=o.innerHTML:o.outerHTML="<"+t.html.defaultTag()+">"+o.innerHTML+"</"+t.html.defaultTag()+">"
else{var a=o.querySelectorAll("*")
!a.length||"BR"!==a[a.length-1].tagName&&0===o.innerText.length?o.outerHTML=o.innerHTML+"<br>":o.outerHTML=o.innerHTML}i=u(Array.prototype.slice.call(r.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")))}for(i=u(Array.prototype.slice.call(r.querySelectorAll("div:not([style])")));i.length;){for(n=0;n<i.length;n++){var s=i[n],l=s.innerHTML.replace(/\u0009/gi,"").trim()
s.outerHTML=l}i=u(Array.prototype.slice.call(r.querySelectorAll("div:not([style])")))}return r.innerHTML}function f(){t.el.removeEventListener("copy",r),t.el.removeEventListener("cut",r),t.el.removeEventListener("paste",i)}var p,d,h,m,g=!1
return{_init:function(){t.el.addEventListener("copy",r),t.el.addEventListener("cut",r),t.el.addEventListener("paste",i,{capture:!0}),t.events.on("drop",o),t.browser.msie&&t.browser.version<11&&(t.events.on("mouseup",function(e){2==e.button&&(setTimeout(function(){g=!1},50),g=!0)},!0),t.events.on("beforepaste",i)),t.events.on("destroy",f)},cleanEmptyTagsAndDivs:c,getRtfClipboard:function(){return d},saveCopiedText:n,clean:l}},e.extend(e.FE.DEFAULTS,{shortcutsEnabled:[],shortcutsHint:!0}),e.FE.SHORTCUTS_MAP={},e.FE.RegisterShortcut=function(t,n,r,i,o,a){e.FE.SHORTCUTS_MAP[(o?"^":"")+(a?"@":"")+t]={cmd:n,val:r,letter:i,shift:o,option:a},e.FE.DEFAULTS.shortcutsEnabled.push(n)},e.FE.RegisterShortcut(e.FE.KEYCODE.E,"show",null,"E",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.B,"bold",null,"B",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.I,"italic",null,"I",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.U,"underline",null,"U",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.S,"strikeThrough",null,"S",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.CLOSE_SQUARE_BRACKET,"indent",null,"]",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.OPEN_SQUARE_BRACKET,"outdent",null,"[",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.Z,"undo",null,"Z",!1,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.Z,"redo",null,"Z",!0,!1),e.FE.RegisterShortcut(e.FE.KEYCODE.Y,"redo",null,"Y",!1,!1),e.FE.MODULES.shortcuts=function(t){function n(n){if(!t.core.hasFocus())return!0
var r=n.which,o=-1!=navigator.userAgent.indexOf("Mac OS X")?n.metaKey:n.ctrlKey
if("keyup"==n.type&&i&&r!=e.FE.KEYCODE.META)return i=!1,!1
"keydown"==n.type&&(i=!1)
var a=(n.shiftKey?"^":"")+(n.altKey?"@":"")+r
if(o&&e.FE.SHORTCUTS_MAP[a]){var s=e.FE.SHORTCUTS_MAP[a].cmd
if(s&&t.opts.shortcutsEnabled.indexOf(s)>=0){var l,u=e.FE.SHORTCUTS_MAP[a].val
if(s&&!u?l=t.$tb.find('.fr-command[data-cmd="'+s+'"]'):s&&u&&(l=t.$tb.find('.fr-command[data-cmd="'+s+'"][data-param1="'+u+'"]')),l.length)return n.preventDefault(),n.stopPropagation(),l.parents(".fr-toolbar").data("instance",t),"keydown"==n.type&&(t.button.exec(l),i=!0),!1
if(s&&t.commands[s])return n.preventDefault(),n.stopPropagation(),"keydown"==n.type&&(t.commands[s](),i=!0),!1}}}var r=null,i=!1
return{_init:function(){t.events.on("keydown",n,!0),t.events.on("keyup",n,!0)},get:function(n){if(!t.opts.shortcutsHint)return null
if(!r)for(var i in r={},e.FE.SHORTCUTS_MAP)e.FE.SHORTCUTS_MAP.hasOwnProperty(i)&&t.opts.shortcutsEnabled.indexOf(e.FE.SHORTCUTS_MAP[i].cmd)>=0&&(r[e.FE.SHORTCUTS_MAP[i].cmd+"."+(e.FE.SHORTCUTS_MAP[i].val||"")]={shift:e.FE.SHORTCUTS_MAP[i].shift,option:e.FE.SHORTCUTS_MAP[i].option,letter:e.FE.SHORTCUTS_MAP[i].letter})
var o=r[n]
return o?(t.helpers.isMac()?String.fromCharCode(8984):"Ctrl+")+(o.shift?t.helpers.isMac()?String.fromCharCode(8679):"Shift+":"")+(o.option?t.helpers.isMac()?String.fromCharCode(8997):"Alt+":"")+o.letter:null}}},e.FE.MODULES.snapshot=function(e){function t(e){for(var t=e.parentNode.childNodes,n=0,r=null,i=0;i<t.length;i++){if(r){var o=t[i].nodeType===Node.TEXT_NODE&&""===t[i].textContent,a=r.nodeType===Node.TEXT_NODE&&t[i].nodeType===Node.TEXT_NODE
o||a||n++}if(t[i]==e)return n
r=t[i]}}function n(n){var r=[]
if(!n.parentNode)return[]
for(;!e.node.isElement(n);)r.push(t(n)),n=n.parentNode
return r.reverse()}function r(e,t){for(;e&&e.nodeType===Node.TEXT_NODE;){var n=e.previousSibling
n&&n.nodeType==Node.TEXT_NODE&&(t+=n.textContent.length),e=n}return t}function i(e){return{scLoc:n(e.startContainer),scOffset:r(e.startContainer,e.startOffset),ecLoc:n(e.endContainer),ecOffset:r(e.endContainer,e.endOffset)}}function o(t){for(var n=e.el,r=0;r<t.length;r++)n=n.childNodes[t[r]]
return n}function a(t,n){try{var r=o(n.scLoc),i=n.scOffset,a=o(n.ecLoc),s=n.ecOffset,l=e.doc.createRange()
l.setStart(r,i),l.setEnd(a,s),t.addRange(l)}catch(e){}}return{get:function(){var t={}
if(e.events.trigger("snapshot.before"),t.html=(e.$wp?e.$el.html():e.$oel.get(0).outerHTML).replace(/ style=""/g,""),t.ranges=[],e.$wp&&e.selection.inEditor()&&e.core.hasFocus())for(var n=e.selection.ranges(),r=0;r<n.length;r++)t.ranges.push(i(n[r]))
return e.events.trigger("snapshot.after",[t]),t},restore:function(t){e.$el.html()!=t.html&&(e.opts.htmlExecuteScripts?e.$el.html(t.html):e.el.innerHTML=t.html)
var n=e.selection.get()
e.selection.clear(),e.events.focus(!0)
for(var r=0;r<t.ranges.length;r++)a(n,t.ranges[r])},equal:function(t,n){return t.html==n.html&&(!e.core.hasFocus()||JSON.stringify(t.ranges)==JSON.stringify(n.ranges))}}},e.FE.MODULES.undo=function(e){function t(t){var n=t.which
e.keys.ctrlKey(t)&&(90==n&&t.shiftKey&&t.preventDefault(),90==n&&t.preventDefault())}function n(){if(!e.undo_stack||e.undoing)return!1
for(;e.undo_stack.length>e.undo_index;)e.undo_stack.pop()}function r(){e.undo_index=0,e.undo_stack=[]}function i(){e.undo_stack=[]}var o=null
return{_init:function(){r(),e.events.on("initialized",function(){o=(e.$wp?e.$el.html():e.$oel.get(0).outerHTML).replace(/ style=""/g,"")}),e.events.on("blur",function(){e.el.querySelector(".fr-dragging")||e.undo.saveStep()}),e.events.on("keydown",t),e.events.on("destroy",i)},run:function(){if(e.undo_index>1){e.undoing=!0
var t=e.undo_stack[--e.undo_index-1]
clearTimeout(e._content_changed_timer),e.snapshot.restore(t),o=t.html,e.popups.hideAll(),e.toolbar.enable(),e.events.trigger("contentChanged"),e.events.trigger("commands.undo"),e.undoing=!1}},redo:function(){if(e.undo_index<e.undo_stack.length){e.undoing=!0
var t=e.undo_stack[e.undo_index++]
clearTimeout(e._content_changed_timer),e.snapshot.restore(t),o=t.html,e.popups.hideAll(),e.toolbar.enable(),e.events.trigger("contentChanged"),e.events.trigger("commands.redo"),e.undoing=!1}},canDo:function(){return!(0===e.undo_stack.length||e.undo_index<=1)},canRedo:function(){return e.undo_index!=e.undo_stack.length},dropRedo:n,reset:r,saveStep:function(t){return!(!e.undo_stack||e.undoing||e.el.querySelector(".fr-marker"))&&void(void 0===t?(t=e.snapshot.get(),e.undo_stack[e.undo_index-1]&&e.snapshot.equal(e.undo_stack[e.undo_index-1],t)||(n(),e.undo_stack.push(t),e.undo_index++,t.html!=o&&(e.events.trigger("contentChanged"),o=t.html))):(n(),e.undo_index>0?e.undo_stack[e.undo_index-1]=t:(e.undo_stack.push(t),e.undo_index++)))}}},e.FE.ICON_DEFAULT_TEMPLATE="font_awesome",e.FE.ICON_TEMPLATES={font_awesome:'<i class="fa fa-[NAME]" aria-hidden="true"></i>',text:'<span style="text-align: center;">[NAME]</span>',image:"<img src=[SRC] alt=[ALT] />",svg:'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">[PATH]</svg>'},e.FE.ICONS={bold:{NAME:"bold"},italic:{NAME:"italic"},underline:{NAME:"underline"},strikeThrough:{NAME:"strikethrough"},subscript:{NAME:"subscript"},superscript:{NAME:"superscript"},color:{NAME:"tint"},outdent:{NAME:"outdent"},indent:{NAME:"indent"},undo:{NAME:"rotate-left"},redo:{NAME:"rotate-right"},insertHR:{NAME:"minus"},clearFormatting:{NAME:"eraser"},selectAll:{NAME:"mouse-pointer"}},e.FE.DefineIconTemplate=function(t,n){e.FE.ICON_TEMPLATES[t]=n},e.FE.DefineIcon=function(t,n){e.FE.ICONS[t]=n},e.FE.MODULES.icon=function(){return{create:function(t){var n=null,r=e.FE.ICONS[t]
if(void 0!==r){var i=r.template||e.FE.ICON_DEFAULT_TEMPLATE
i&&(i=e.FE.ICON_TEMPLATES[i])&&(n=i.replace(/\[([a-zA-Z]*)\]/g,function(e,n){return"NAME"==n?r[n]||t:r[n]}))}return n||t},getTemplate:function(t){var n=e.FE.ICONS[t],r=e.FE.ICON_DEFAULT_TEMPLATE
return void 0!==n?r=n.template||e.FE.ICON_DEFAULT_TEMPLATE:r}}},e.extend(e.FE.DEFAULTS,{tooltips:!0}),e.FE.MODULES.tooltip=function(t){function n(){return!t.helpers.isMobile()&&void(t.$tooltip&&t.$tooltip.removeClass("fr-visible").css("left","-3000px").css("position","fixed"))}function r(n,r){if(t.helpers.isMobile())return!1
if(n.data("title")||n.data("title",n.attr("title")),!n.data("title"))return!1
t.$tooltip||t.opts.tooltips&&!t.helpers.isMobile()&&(t.shared.$tooltip?t.$tooltip=t.shared.$tooltip:(t.shared.$tooltip=e('<div class="fr-tooltip"></div>'),t.$tooltip=t.shared.$tooltip,t.opts.theme&&t.$tooltip.addClass(t.opts.theme+"-theme"),e(t.o_doc).find("body:first").append(t.$tooltip)),t.events.on("shared.destroy",function(){t.$tooltip.html("").removeData().remove(),t.$tooltip=null},!0)),n.removeAttr("title"),t.$tooltip.text(t.language.translate(n.data("title"))),t.$tooltip.addClass("fr-visible")
var i=n.offset().left+(n.outerWidth()-t.$tooltip.outerWidth())/2
0>i&&(i=0),i+t.$tooltip.outerWidth()>e(t.o_win).width()&&(i=e(t.o_win).width()-t.$tooltip.outerWidth()),void 0===r&&(r=t.opts.toolbarBottom)
var o=r?n.offset().top-t.$tooltip.height():n.offset().top+n.outerHeight()
t.$tooltip.css("position",""),t.$tooltip.css("left",i),t.$tooltip.css("top",Math.ceil(o)),"static"!=e(t.o_doc).find("body:first").css("position")?(t.$tooltip.css("margin-left",-e(t.o_doc).find("body:first").offset().left),t.$tooltip.css("margin-top",-e(t.o_doc).find("body:first").offset().top)):(t.$tooltip.css("margin-left",""),t.$tooltip.css("margin-top",""))}return{hide:n,to:r,bind:function(i,o,a){t.opts.tooltips&&!t.helpers.isMobile()&&(t.events.$on(i,"mouseenter",o,function(n){t.node.hasClass(n.currentTarget,"fr-disabled")||t.edit.isDisabled()||r(e(n.currentTarget),a)},!0),t.events.$on(i,"mouseleave "+t._mousedown+" "+t._mouseup,o,function(){n()},!0))}}},e.FE.MODULES.button=function(t){function n(t,n,r){for(var i=e(),o=0;o<t.length;o++){var a=e(t[o])
if(a.is(n)&&(i=i.add(a)),r&&a.is(".fr-dropdown")){var s=a.next().find(n)
i=i.add(s)}}return i}function r(r,i){var o,a=e()
if(!r)return a
for(o in a=(a=a.add(n(v,r,i))).add(n(b,r,i)),t.shared.popups)if(t.shared.popups.hasOwnProperty(o)){var s=t.shared.popups[o].children().find(r)
a=a.add(s)}for(o in t.shared.modals)if(t.shared.modals.hasOwnProperty(o)){var l=t.shared.modals[o].$modal.find(r)
a=a.add(l)}return a}function i(n){var i=n.next(),o=t.node.hasClass(n.get(0),"fr-active"),a=r(".fr-dropdown.fr-active").not(n),s=n.parents(".fr-toolbar, .fr-popup").data("instance")||t
if(s.helpers.isIOS()&&!s.el.querySelector(".fr-marker")&&(s.selection.save(),s.selection.clear(),s.selection.restore()),!o){var l=n.data("cmd")
i.find(".fr-command").removeClass("fr-active").attr("aria-selected",!1),e.FE.COMMANDS[l]&&e.FE.COMMANDS[l].refreshOnShow&&e.FE.COMMANDS[l].refreshOnShow.apply(s,[n,i]),i.css("left",n.offset().left-n.parent().offset().left-("rtl"==t.opts.direction?i.width()-n.outerWidth():0)),i.addClass("test-height")
var u=i.outerHeight()
i.removeClass("test-height"),i.css("top","").css("bottom",""),!t.opts.toolbarBottom&&i.offset().top+n.outerHeight()+u<e(t.o_doc).height()?i.css("top",n.position().top+n.outerHeight()):i.css("bottom",n.parents(".fr-popup, .fr-toolbar").first().height()-n.position().top)}n.addClass("fr-blink").toggleClass("fr-active"),n.hasClass("fr-active")?(i.attr("aria-hidden",!1),n.attr("aria-expanded",!0)):(i.attr("aria-hidden",!0),n.attr("aria-expanded",!1)),setTimeout(function(){n.removeClass("fr-blink")},300),i.css("margin-left",""),i.offset().left+i.outerWidth()>t.$sc.offset().left+t.$sc.width()&&i.css("margin-left",-(i.offset().left+i.outerWidth()-t.$sc.offset().left-t.$sc.width())),i.offset().left<t.$sc.offset().left&&"rtl"==t.opts.direction&&i.css("margin-left",i.offset().left+i.outerWidth()-t.$sc.offset().left),a.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),a.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""),0!==n.parents(".fr-popup").length||t.opts.toolbarInline||(t.node.hasClass(n.get(0),"fr-active")?t.$tb.css("zIndex",(t.opts.zIndex||1)+4):t.$tb.css("zIndex",""))
var c=i.find("a.fr-command.fr-active:first")
t.helpers.isMobile()||(c.length?t.accessibility.focusToolbarElement(c):t.accessibility.focusToolbarElement(n))}function o(e){e.addClass("fr-blink"),setTimeout(function(){e.removeClass("fr-blink")},500)
for(var t=e.data("cmd"),n=[];void 0!==e.data("param"+(n.length+1));)n.push(e.data("param"+(n.length+1)))
var i=r(".fr-dropdown.fr-active")
i.length&&(i.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),i.parent(".fr-toolbar:not(.fr-inline)").css("zIndex","")),e.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(t,n)}function a(e){o(e)}function s(n){var r=n.parents(".fr-popup, .fr-toolbar").data("instance")
if(0!==n.parents(".fr-popup").length||n.data("popup")||r.popups.hideAll(),r.popups.areVisible()&&!r.popups.areVisible(r)){for(var o=0;o<e.FE.INSTANCES.length;o++)e.FE.INSTANCES[o]!=r&&e.FE.INSTANCES[o].popups&&e.FE.INSTANCES[o].popups.areVisible()&&e.FE.INSTANCES[o].$el.find(".fr-marker").remove()
r.popups.hideAll()}t.node.hasClass(n.get(0),"fr-dropdown")?i(n):(a(n),e.FE.COMMANDS[n.data("cmd")]&&!1!==e.FE.COMMANDS[n.data("cmd")].refreshAfterCallback&&r.button.bulkRefresh())}function l(t){s(e(t.currentTarget))}function u(e){var t=e.find(".fr-dropdown.fr-active")
t.length&&(t.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),t.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""))}function c(e){e.preventDefault(),e.stopPropagation()}function f(e){return e.stopPropagation(),!!t.helpers.isMobile()&&void 0}function p(e,n,r){if(t.helpers.isMobile()&&!1===n.showOnMobile)return""
var i,o=n.displaySelection
if("function"==typeof o&&(o=o(t)),o){var a="function"==typeof n.defaultSelection?n.defaultSelection(t):n.defaultSelection
i='<span style="width:'+(n.displaySelectionWidth||100)+'px">'+t.language.translate(a||n.title)+"</span>"}else i=t.icon.create(n.icon||e),i+='<span class="fr-sr-only">'+(t.language.translate(n.title)||"")+"</span>"
var s=n.popup?' data-popup="true"':"",l=n.modal?' data-modal="true"':"",u=t.shortcuts.get(e+".")
u=u?" ("+u+")":""
var c=e+"-"+t.id,f="dropdown-menu-"+c,p='<button id="'+c+'"type="button" tabIndex="-1" role="button"'+(n.toggle?' aria-pressed="false"':"")+("dropdown"==n.type?' aria-controls="'+f+'" aria-expanded="false" aria-haspopup="true"':"")+(n.disabled?' aria-disabled="true"':"")+' title="'+(t.language.translate(n.title)||"")+u+'" class="fr-command fr-btn'+("dropdown"==n.type?" fr-dropdown":"")+" fr-btn-"+t.icon.getTemplate(n.icon)+(n.displaySelection?" fr-selection":"")+(n.back?" fr-back":"")+(n.disabled?" fr-disabled":"")+(r?"":" fr-hidden")+'" data-cmd="'+e+'"'+s+l+">"+i+"</button>"
if("dropdown"==n.type){var d='<div id="'+f+'" class="fr-dropdown-menu" role="listbox" aria-labelledby="'+c+'" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">'
d+=function(e,n){var r=""
if(n.html)r+="function"==typeof n.html?n.html.call(t):n.html
else{var i=n.options
for(var o in"function"==typeof i&&(i=i()),r+='<ul class="fr-dropdown-list" role="presentation">',i)if(i.hasOwnProperty(o)){var a=t.shortcuts.get(e+"."+o)
a=a?'<span class="fr-shortcut">'+a+"</span>":"",r+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'+e+'" data-param1="'+o+'" title="'+i[o]+'">'+t.language.translate(i[o])+"</a></li>"}r+="</ul>"}return r}(e,n),p+=d+="</div></div></div>"}return p}function d(n){var r=t.$tb&&t.$tb.data("instance")||t
return!1===t.events.trigger("buttons.refresh")||void setTimeout(function(){for(var i=r.selection.inEditor()&&r.core.hasFocus(),o=0;o<n.length;o++){var a=e(n[o]),s=a.data("cmd")
0===a.parents(".fr-popup").length?i||e.FE.COMMANDS[s]&&e.FE.COMMANDS[s].forcedRefresh?r.button.refresh(a):t.node.hasClass(a.get(0),"fr-dropdown")||(a.removeClass("fr-active"),a.attr("aria-pressed")&&a.attr("aria-pressed",!1)):a.parents(".fr-popup").is(":visible")&&r.button.refresh(a)}},0)}function h(){d(v),d(b)}function m(){v=[],b=[]}function g(){clearTimeout(y),y=setTimeout(h,50)}var v=[];(t.opts.toolbarInline||t.opts.toolbarContainer)&&(t.shared.buttons||(t.shared.buttons=[]),v=t.shared.buttons)
var b=[]
t.shared.popup_buttons||(t.shared.popup_buttons=[]),b=t.shared.popup_buttons
var y=null
return{_init:function(){t.opts.toolbarInline?t.events.on("toolbar.show",h):(t.events.on("mouseup",g),t.events.on("keyup",g),t.events.on("blur",g),t.events.on("focus",g),t.events.on("contentChanged",g),t.helpers.isMobile()&&t.events.$on(t.$doc,"selectionchange",h)),t.events.on("shared.destroy",m)},buildList:function(n,r){for(var i="",o=0;o<n.length;o++){var a=n[o],s=e.FE.COMMANDS[a]
s&&void 0!==s.plugin&&t.opts.pluginsEnabled.indexOf(s.plugin)<0||(s?i+=p(a,s,void 0===r||r.indexOf(a)>=0):"|"==a?i+='<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>':"-"==a&&(i+='<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'))}return i},bindCommands:function(n,r){t.events.bindClick(n,".fr-command:not(.fr-disabled)",l),t.events.$on(n,t._mousedown+" "+t._mouseup+" "+t._move,".fr-dropdown-menu",c,!0),t.events.$on(n,t._mousedown+" "+t._mouseup+" "+t._move,".fr-dropdown-menu .fr-dropdown-wrapper",f,!0)
var i=n.get(0).ownerDocument,o="defaultView"in i?i.defaultView:i.parentWindow,a=function(r){(!r||r.type==t._mouseup&&r.target!=e("html").get(0)||"keydown"==r.type&&(t.keys.isCharacter(r.which)&&!t.keys.ctrlKey(r)||r.which==e.FE.KEYCODE.ESC))&&u(n)}
t.events.$on(e(o),t._mouseup+" resize keydown",a,!0),t.opts.iframe&&t.events.$on(t.$win,t._mouseup,a,!0),t.node.hasClass(n.get(0),"fr-popup")?e.merge(b,n.find(".fr-btn").toArray()):e.merge(v,n.find(".fr-btn").toArray()),t.tooltip.bind(n,".fr-btn, .fr-title",r)},refresh:function(n){var r,i=n.parents(".fr-popup, .fr-toolbar").data("instance")||t,o=n.data("cmd")
t.node.hasClass(n.get(0),"fr-dropdown")?r=n.next():(n.removeClass("fr-active"),n.attr("aria-pressed")&&n.attr("aria-pressed",!1)),e.FE.COMMANDS[o]&&e.FE.COMMANDS[o].refresh?e.FE.COMMANDS[o].refresh.apply(i,[n,r]):t.refresh[o]&&i.refresh[o](n,r)},bulkRefresh:h,exec:o,click:s,hideActiveDropdowns:u,getButtons:r}},e.FE.MODULES.modals=function(t){function n(){for(var e in a){var t=a[e]
t&&t.$modal&&t.$modal.removeData().remove()}o&&o.removeData().remove(),a={}}function r(n,r){if(a[n]){var i=a[n].$modal,s=i.data("instance")||t
s.events.enableBlur(),i.hide(),o.hide(),e(s.o_doc).find("body:first").removeClass("prevent-scroll fr-mobile"),i.removeClass("fr-active"),r||(t.accessibility.restoreSelection(s),t.events.trigger("modals.hide"))}}function i(e){var n
if("string"==typeof e){if(!a[e])return
n=a[e].$modal}else n=e
return n&&t.node.hasClass(n,"fr-active")&&t.core.sameInstance(n)||!1}t.shared.modals||(t.shared.modals={})
var o,a=t.shared.modals
return{_init:function(){t.events.on("shared.destroy",n,!0)},get:function(e){return a[e]},create:function(n,i,s){if(t.shared.$overlay||(t.shared.$overlay=e('<div class="fr-overlay">').appendTo("body:first")),o=t.shared.$overlay,t.opts.theme&&o.addClass(t.opts.theme+"-theme"),!a[n]){var l=function(n,r){var i='<div tabIndex="-1" class="fr-modal'+(t.opts.theme?" "+t.opts.theme+"-theme":"")+'"><div class="fr-modal-wrapper">'
return i+='<div class="fr-modal-head">'+n+'<i title="'+t.language.translate("Cancel")+'" class="fa fa-times fr-modal-close"></i></div>',i+='<div tabIndex="-1" class="fr-modal-body">'+r+"</div>",e(i+="</div></div>")}(i,s)
a[n]={$modal:l,$head:l.find(".fr-modal-head"),$body:l.find(".fr-modal-body")},t.helpers.isMobile()||l.addClass("fr-desktop"),l.appendTo("body:first"),t.events.bindClick(l,".fr-modal-close",function(){r(n)}),a[n].$body.css("margin-top",a[n].$head.outerHeight()),t.events.$on(l,"keydown",function(i){var o=i.which
return o==e.FE.KEYCODE.ESC?(r(n),t.accessibility.focusModalButton(l),!1):!(!e(i.currentTarget).is("input[type=text], textarea")&&o!=e.FE.KEYCODE.ARROW_UP&&o!=e.FE.KEYCODE.ARROW_DOWN&&!t.keys.isBrowserAction(i)&&(i.preventDefault(),i.stopPropagation(),1))},!0),r(n,!0)}return a[n]},show:function(n){if(a[n]){var r=a[n].$modal
r.data("instance",t),r.show(),o.show(),e(t.o_doc).find("body:first").addClass("prevent-scroll"),t.helpers.isMobile()&&e(t.o_doc).find("body:first").addClass("fr-mobile"),r.addClass("fr-active"),t.accessibility.focusModal(r)}},hide:r,resize:function(n){if(a[n]){var r=a[n],i=r.$modal,o=r.$body,s=e(t.o_win).height(),l=i.find(".fr-modal-wrapper"),u=s-l.outerHeight(!0)+(l.height()-(o.outerHeight(!0)-o.height())),c="auto"
o.get(0).scrollHeight>u&&(c=u),o.height(c)}},isVisible:i,areVisible:function(e){for(var t in a)if(a.hasOwnProperty(t)&&i(t)&&(void 0===e||a[t].$modal.data("instance")==e))return a[t].$modal
return!1}}},e.FE.POPUP_TEMPLATES={"text.edit":"[_EDIT_]"},e.FE.RegisterTemplate=function(t,n){e.FE.POPUP_TEMPLATES[t]=n},e.FE.MODULES.popups=function(t){function n(e,n){n.is(":visible")||(n=t.$sc),n.is(h[e].data("container"))||(h[e].data("container",n),n.append(h[e]))}function r(e){return h[e]&&t.node.hasClass(h[e],"fr-active")&&t.core.sameInstance(h[e])||!1}function i(e){for(var t in h)if(h.hasOwnProperty(t)&&r(t)&&(void 0===e||h[t].data("instance")==e))return h[t]
return!1}function o(e){var n=null;(n="string"!=typeof e?e:h[e])&&t.node.hasClass(n,"fr-active")&&(n.removeClass("fr-active fr-above"),t.events.trigger("popups.hide."+e),t.$tb&&(t.opts.zIndex>1?t.$tb.css("zIndex",t.opts.zIndex+1):t.$tb.css("zIndex","")),t.events.disableBlur(),n.find("input, textarea, button").filter(":focus").blur(),n.find("input, textarea").attr("disabled","disabled"))}function a(e){for(var t in void 0===e&&(e=[]),h)h.hasOwnProperty(t)&&e.indexOf(t)<0&&o(t)}function s(){t.shared.exit_flag=!0}function l(){t.shared.exit_flag=!1}function u(){return t.shared.exit_flag}function c(n,r){var i,o,a=function(n,r){var i=e.FE.POPUP_TEMPLATES[n]
if(!i)return null
for(var o in"function"==typeof i&&(i=i.apply(t)),r)r.hasOwnProperty(o)&&(i=i.replace("[_"+o.toUpperCase()+"_]",r[o]))
return i}(n,r)
return a?(i=e('<div class="fr-popup'+(t.helpers.isMobile()?" fr-mobile":" fr-desktop")+(t.opts.toolbarInline?" fr-inline":"")+'"><span class="fr-arrow"></span>'+a+"</div>"),t.opts.theme&&i.addClass(t.opts.theme+"-theme"),t.opts.zIndex>1&&(t.opts.editInPopup?i.css("z-index",t.opts.zIndex+2):t.$tb.css("z-index",t.opts.zIndex+2)),"auto"!=t.opts.direction&&i.removeClass("fr-ltr fr-rtl").addClass("fr-"+t.opts.direction),i.find("input, textarea").attr("dir",t.opts.direction).attr("disabled","disabled"),(o=e("body:first")).append(i),i.data("container",o),h[n]=i,t.button.bindCommands(i,!1),i):(i=e('<div class="fr-popup fr-empty"></div>'),(o=e("body:first")).append(i),i.data("container",o),h[n]=i,i)}function f(n){var i=h[n]
return{_windowResize:function(){var e=i.data("instance")||t
!e.helpers.isMobile()&&i.is(":visible")&&(e.events.disableBlur(),e.popups.hide(n),e.events.enableBlur())},_inputFocus:function(n){var r=i.data("instance")||t,o=e(n.currentTarget)
if(o.is("input:file")&&o.closest(".fr-layer").addClass("fr-input-focus"),n.preventDefault(),n.stopPropagation(),setTimeout(function(){r.events.enableBlur()},100),r.helpers.isMobile()){var a=e(r.o_win).scrollTop()
setTimeout(function(){e(r.o_win).scrollTop(a)},0)}},_inputBlur:function(n){var r=i.data("instance")||t,o=e(n.currentTarget)
o.is("input:file")&&o.closest(".fr-layer").removeClass("fr-input-focus"),document.activeElement!=this&&e(this).is(":visible")&&(r.events.blurActive()&&r.events.trigger("blur"),r.events.enableBlur())},_editorKeydown:function(o){var a=i.data("instance")||t
a.keys.ctrlKey(o)||o.which==e.FE.KEYCODE.ALT||o.which==e.FE.KEYCODE.ESC||(r(n)&&i.find(".fr-back:visible").length?a.button.exec(i.find(".fr-back:visible:first")):o.which!=e.FE.KEYCODE.ALT&&a.popups.hide(n))},_preventFocus:function(n){var r=i.data("instance")||t,o=n.originalEvent?n.originalEvent.target||n.originalEvent.originalTarget:null
"mouseup"==n.type||e(o).is(":focus")||r.events.disableBlur(),"mouseup"!=n.type||e(o).hasClass("fr-command")||e(o).parents(".fr-command").length>0||e(o).hasClass("fr-dropdown-content")||t.button.hideActiveDropdowns(i),(t.browser.safari||t.browser.mozilla)&&"mousedown"==n.type&&e(o).is("input[type=file]")&&r.events.disableBlur()
var a="input, textarea, button, select, label, .fr-command"
return o&&!e(o).is(a)&&0===e(o).parents(a).length?(n.stopPropagation(),!1):(o&&e(o).is(a)&&n.stopPropagation(),void l())},_editorMouseup:function(){i.is(":visible")&&u()&&i.find("input:focus, textarea:focus, button:focus, select:focus").filter(":visible").length>0&&t.events.disableBlur()},_windowMouseup:function(e){if(!t.core.sameInstance(i))return!0
var r=i.data("instance")||t
i.is(":visible")&&u()&&(e.stopPropagation(),r.markers.remove(),r.popups.hide(n),l())},_windowKeydown:function(r){if(!t.core.sameInstance(i))return!0
var o=i.data("instance")||t,a=r.which
if(e.FE.KEYCODE.ESC==a){if(o.popups.isVisible(n)&&o.opts.toolbarInline)return r.stopPropagation(),o.popups.isVisible(n)&&(i.find(".fr-back:visible").length?(o.button.exec(i.find(".fr-back:visible:first")),o.accessibility.focusPopupButton(i)):i.find(".fr-dismiss:visible").length?o.button.exec(i.find(".fr-dismiss:visible:first")):(o.popups.hide(n),o.toolbar.showInline(null,!0),o.accessibility.FocusPopupButton(i))),!1
if(o.popups.isVisible(n))return i.find(".fr-back:visible").length?(o.button.exec(i.find(".fr-back:visible:first")),o.accessibility.focusPopupButton(i)):i.find(".fr-dismiss:visible").length?o.button.exec(i.find(".fr-dismiss:visible:first")):(o.popups.hide(n),o.accessibility.focusPopupButton(i)),!1}},_doPlaceholder:function(){0===e(this).next().length&&e(this).attr("placeholder")&&e(this).after('<label for="'+e(this).attr("id")+'">'+e(this).attr("placeholder")+"</label>"),e(this).toggleClass("fr-not-empty",""!==e(this).val())},_repositionPopup:function(){if(!t.opts.height&&!t.opts.heightMax||t.opts.toolbarInline)return!0
if(t.$wp&&r(n)&&i.parent().get(0)==t.$sc.get(0)){var e=i.offset().top-t.$wp.offset().top,o=t.$wp.outerHeight()
t.node.hasClass(i.get(0),"fr-above")&&(e+=i.outerHeight()),e>o||0>e?i.addClass("fr-hidden"):i.removeClass("fr-hidden")}}}}function p(e,n){t.events.on("mouseup",e._editorMouseup,!0),t.$wp&&t.events.on("keydown",e._editorKeydown),t.events.on("blur",function(){i()&&t.markers.remove(),a()}),t.$wp&&!t.helpers.isMobile()&&t.events.$on(t.$wp,"scroll.popup"+n,e._repositionPopup),t.events.on("window.mouseup",e._windowMouseup,!0),t.events.on("window.keydown",e._windowKeydown,!0),h[n].data("inst"+t.id,!0),t.events.on("destroy",function(){t.core.sameInstance(h[n])&&h[n].removeClass("fr-active").appendTo("body:first")},!0)}function d(){for(var e in h)if(h.hasOwnProperty(e)){var t=h[e]
t&&(t.html("").removeData().remove(),h[e]=null)}h=[]}t.shared.popups||(t.shared.popups={})
var h=t.shared.popups
return t.shared.exit_flag=!1,{_init:function(){t.events.on("shared.destroy",d,!0),t.events.on("window.mousedown",s),t.events.on("window.touchmove",l),t.events.$on(e(t.o_win),"scroll",l),t.events.on("mousedown",function(e){i()&&(e.stopPropagation(),t.$el.find(".fr-marker").remove(),s(),t.events.disableBlur())})},create:function(n,r){var i=c(n,r),o=f(n)
return p(o,n),t.events.$on(i,"mousedown mouseup touchstart touchend touch","*",o._preventFocus,!0),t.events.$on(i,"focus","input, textarea, button, select",o._inputFocus,!0),t.events.$on(i,"blur","input, textarea, button, select",o._inputBlur,!0),t.accessibility.registerPopup(n),t.events.$on(i,"keydown keyup change input","input, textarea",o._doPlaceholder,!0),t.helpers.isIOS()&&t.events.$on(i,"touchend","label",function(){e("#"+e(this).attr("for")).prop("checked",function(e,t){return!t})},!0),t.events.$on(e(t.o_win),"resize",o._windowResize,!0),i},get:function(e){var n=h[e]
return n&&!n.data("inst"+t.id)&&p(f(e),e),n},show:function(e,o,s,u){if(r(e)||(i()&&t.$el.find(".fr-marker").length>0?(t.events.disableBlur(),t.selection.restore()):i()||(t.events.disableBlur(),t.events.focus(),t.events.enableBlur())),a([e]),!h[e])return!1
var c=t.button.getButtons(".fr-dropdown.fr-active")
c.removeClass("fr-active").attr("aria-expanded",!1).parent(".fr-toolbar").css("zIndex",""),c.next().attr("aria-hidden",!0),h[e].data("instance",t),t.$tb&&t.$tb.data("instance",t)
var p=h[e].outerWidth(),d=r(e)
h[e].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled")
var m=h[e].data("container")
t.opts.toolbarInline&&m&&t.$tb&&m.get(0)==t.$tb.get(0)&&(n(e,t.$sc),s=t.$tb.offset().top-t.helpers.getPX(t.$tb.css("margin-top")),o=t.$tb.offset().left+t.$tb.outerWidth()/2+(parseFloat(t.$tb.find(".fr-arrow").css("margin-left"))||0)+t.$tb.find(".fr-arrow").outerWidth()/2,t.node.hasClass(t.$tb.get(0),"fr-above")&&s&&(s+=t.$tb.outerHeight()),u=0),m=h[e].data("container"),!t.opts.iframe||u||d||(o&&(o-=t.$iframe.offset().left),s&&(s-=t.$iframe.offset().top)),m.is(t.$tb)?t.$tb.css("zIndex",(t.opts.zIndex||1)+4):h[e].css("zIndex",(t.opts.zIndex||1)+4),o&&(o-=p/2),t.opts.toolbarBottom&&m&&t.$tb&&m.get(0)==t.$tb.get(0)&&(h[e].addClass("fr-above"),s&&(s-=h[e].outerHeight())),h[e].removeClass("fr-active"),t.position.at(o,s,h[e],u||0),h[e].addClass("fr-active"),d||t.accessibility.focusPopup(h[e]),t.opts.toolbarInline&&t.toolbar.hide(),t.events.trigger("popups.show."+e),f(e)._repositionPopup(),l()},hide:o,onHide:function(e,n){t.events.on("popups.hide."+e,n)},hideAll:a,setContainer:n,refresh:function(n){h[n].data("instance",t),t.events.trigger("popups.refresh."+n)
for(var r=h[n].find(".fr-command"),i=0;i<r.length;i++){var o=e(r[i])
0===o.parents(".fr-dropdown-menu").length&&t.button.refresh(o)}},onRefresh:function(e,n){t.events.on("popups.refresh."+e,n)},onShow:function(e,n){t.events.on("popups.show."+e,n)},isVisible:r,areVisible:i}},e.FE.MODULES.position=function(t){function n(){var e=t.selection.ranges(0).getBoundingClientRect()
if(0===e.top&&0===e.left&&0===e.width||0===e.height){var n=!1
0===t.$el.find(".fr-marker").length&&(t.selection.save(),n=!0)
var r=t.$el.find(".fr-marker:first")
r.css("display","inline"),r.css("line-height","")
var i=r.offset(),o=r.outerHeight()
r.css("display","none"),r.css("line-height",0),(e={}).left=i.left,e.width=0,e.height=o,e.top=i.top-(t.helpers.isMobile()&&!t.helpers.isIOS()?0:t.helpers.scrollTop()),e.right=1,e.bottom=1,e.ok=!0,n&&t.selection.restore()}return e}function r(e,n,r,i){var o=r.data("container")
!o||"BODY"===o.get(0).tagName&&"static"==o.css("position")||(e&&(e-=o.offset().left),n&&(n-=o.offset().top),"BODY"!=o.get(0).tagName?(e&&(e+=o.get(0).scrollLeft),n&&(n+=o.get(0).scrollTop)):"absolute"==o.css("position")&&(e&&(e+=o.position().left),n&&(n+=o.position().top))),t.opts.iframe&&o&&t.$tb&&o.get(0)!=t.$tb.get(0)&&(e&&(e+=t.$iframe.offset().left),n&&(n+=t.$iframe.offset().top))
var a=function(e,n){var r=e.outerWidth(!0)
return n+r>t.$sc.get(0).clientWidth-10&&(n=t.$sc.get(0).clientWidth-r-10),0>n&&(n=10),n}(r,e)
if(e){r.css("left",a)
var s=r.data("fr-arrow")
s||(s=r.find(".fr-arrow"),r.data("fr-arrow",s)),s.data("margin-left")||s.data("margin-left",t.helpers.getPX(s.css("margin-left"))),s.css("margin-left",e-a+s.data("margin-left"))}n&&r.css("top",function(e,n,r){var i=e.outerHeight(!0)
if(!t.helpers.isMobile()&&t.$tb&&e.parent().get(0)!=t.$tb.get(0)){var o=e.parent().offset().top,a=n-i-(r||0)
e.parent().get(0)==t.$sc.get(0)&&(o-=e.parent().position().top)
var s=t.$sc.get(0).clientHeight
o+n+i>t.$sc.offset().top+s&&e.parent().offset().top+a>0&&a>0?(n=a,e.addClass("fr-above")):e.removeClass("fr-above")}return n}(r,n,i))}function i(n){var r=e(n),i=r.is(".fr-sticky-on"),o=r.data("sticky-top"),a=r.data("sticky-scheduled")
if(void 0===o){r.data("sticky-top",0)
var s=e('<div class="fr-sticky-dummy" style="height: '+r.outerHeight()+'px;"></div>')
t.$box.prepend(s)}else t.$box.find(".fr-sticky-dummy").css("height",r.outerHeight())
if(t.core.hasFocus()||t.$tb.find("input:visible:focus").length>0){var l=t.helpers.scrollTop(),u=Math.min(Math.max(l-t.$tb.parent().offset().top,0),t.$tb.parent().outerHeight()-r.outerHeight())
u!=o&&u!=a&&(clearTimeout(r.data("sticky-timeout")),r.data("sticky-scheduled",u),r.outerHeight()<l-t.$tb.parent().offset().top&&r.addClass("fr-opacity-0"),r.data("sticky-timeout",setTimeout(function(){var e=t.helpers.scrollTop(),n=Math.min(Math.max(e-t.$tb.parent().offset().top,0),t.$tb.parent().outerHeight()-r.outerHeight())
n>0&&"BODY"==t.$tb.parent().get(0).tagName&&(n+=t.$tb.parent().position().top),n!=o&&(r.css("top",Math.max(n,0)),r.data("sticky-top",n),r.data("sticky-scheduled",n)),r.removeClass("fr-opacity-0")},100))),i||(r.css("top","0"),r.width(t.$tb.parent().width()),r.addClass("fr-sticky-on"),t.$box.addClass("fr-sticky-box"))}else clearTimeout(e(n).css("sticky-timeout")),r.css("top","0"),r.css("position",""),r.width(""),r.data("sticky-top",0),r.removeClass("fr-sticky-on"),t.$box.removeClass("fr-sticky-box")}function o(n){if(n.offsetWidth){var r,i,o=e(n),a=o.outerHeight(),s=o.data("sticky-position"),l=e("body"==t.opts.scrollableContainer?t.o_win:t.opts.scrollableContainer).outerHeight(),u=0,c=0
"body"!==t.opts.scrollableContainer&&(u=t.$sc.offset().top,c=e(t.o_win).outerHeight()-u-l)
var f="body"==t.opts.scrollableContainer?t.helpers.scrollTop():u,p=o.is(".fr-sticky-on")
o.data("sticky-parent")||o.data("sticky-parent",o.parent())
var d=o.data("sticky-parent"),h=d.offset().top,m=d.outerHeight()
if(o.data("sticky-offset")?t.$box.find(".fr-sticky-dummy").css("height",a+"px"):(o.data("sticky-offset",!0),o.after('<div class="fr-sticky-dummy" style="height: '+a+'px;"></div>')),!s){var g="auto"!==o.css("top")||"auto"!==o.css("bottom")
g||o.css("position","fixed"),s={top:t.node.hasClass(o.get(0),"fr-top"),bottom:t.node.hasClass(o.get(0),"fr-bottom")},g||o.css("position",""),o.data("sticky-position",s),o.data("top",t.node.hasClass(o.get(0),"fr-top")?o.css("top"):"auto"),o.data("bottom",t.node.hasClass(o.get(0),"fr-bottom")?o.css("bottom"):"auto")}r=t.helpers.getPX(o.data("top")),i=t.helpers.getPX(o.data("bottom"))
var v=s.top&&f+r>h&&h+m-a>=f+r&&(t.helpers.isInViewPort(t.$sc.get(0))||"body"==t.opts.scrollableContainer),b=s.bottom&&f+l-i>h+a&&h+m>f+l-i
v||b?(o.css("width",d.get(0).getBoundingClientRect().width+"px"),p||(o.addClass("fr-sticky-on"),o.removeClass("fr-sticky-off"),o.css("top")&&("auto"!=o.data("top")?o.css("top",t.helpers.getPX(o.data("top"))+u):o.data("top","auto")),o.css("bottom")&&("auto"!=o.data("bottom")?o.css("bottom",t.helpers.getPX(o.data("bottom"))+c):o.css("bottom","auto")))):t.node.hasClass(o.get(0),"fr-sticky-off")||(o.width(""),o.removeClass("fr-sticky-on"),o.addClass("fr-sticky-off"),o.css("top")&&"auto"!=o.data("top")&&s.top&&o.css("top",0),o.css("bottom")&&"auto"!=o.data("bottom")&&s.bottom&&o.css("bottom",0))}}function a(){var e=document.createElement("test").style
return e.cssText="position:"+["-webkit-","-moz-","-ms-","-o-",""].join("sticky; position:")+" sticky;",-1!==e.position.indexOf("sticky")&&!t.helpers.isIOS()&&!t.helpers.isAndroid()&&!t.browser.chrome}function s(){if(t._stickyElements)for(var e=0;e<t._stickyElements.length;e++)o(t._stickyElements[e])}return{_init:function(){(function(){if(!a())if(t._stickyElements=[],t.helpers.isIOS()){var n=function(){t.helpers.requestAnimationFrame()(n)
for(var e=0;e<t._stickyElements.length;e++)i(t._stickyElements[e])}
n(),t.events.$on(e(t.o_win),"scroll",function(){if(t.core.hasFocus())for(var n=0;n<t._stickyElements.length;n++){var r=e(t._stickyElements[n]),i=r.parent(),o=t.helpers.scrollTop()
r.outerHeight()<o-i.offset().top&&(r.addClass("fr-opacity-0"),r.data("sticky-top",-1),r.data("sticky-scheduled",-1))}},!0)}else"body"!==t.opts.scrollableContainer&&t.events.$on(e(t.opts.scrollableContainer),"scroll",s,!0),t.events.$on(e(t.o_win),"scroll",s,!0),t.events.$on(e(t.o_win),"resize",s,!0),t.events.on("initialized",s),t.events.on("focus",s),t.events.$on(e(t.o_win),"resize","textarea",s,!0)
t.events.on("destroy",function(){t._stickyElements=[]})})()},forSelection:function(e){var i=n()
e.css({top:0,left:0})
var o=i.top+i.height,a=i.left+i.width/2-e.get(0).offsetWidth/2+t.helpers.scrollLeft()
t.opts.iframe||(o+=t.helpers.scrollTop()),r(a,o,e,i.height)},addSticky:function(e){e.addClass("fr-sticky"),t.helpers.isIOS()&&e.addClass("fr-sticky-ios"),a()||(e.removeClass("fr-sticky"),t._stickyElements.push(e.get(0)))},refresh:s,at:r,getBoundingRect:n}},e.FE.MODULES.refresh=function(t){function n(e,t){e.toggleClass("fr-disabled",t).attr("aria-disabled",t)}return{undo:function(e){n(e,!t.undo.canDo())},redo:function(e){n(e,!t.undo.canRedo())},outdent:function(r){if(t.node.hasClass(r.get(0),"fr-no-refresh"))return!1
for(var i=t.selection.blocks(),o=0;o<i.length;o++){var a="rtl"==t.opts.direction||"rtl"==e(i[o]).css("direction")?"margin-right":"margin-left"
if("LI"==i[o].tagName||"LI"==i[o].parentNode.tagName)return n(r,!1),!0
if(t.helpers.getPX(e(i[o]).css(a))>0)return n(r,!1),!0}n(r,!0)},indent:function(e){if(t.node.hasClass(e.get(0),"fr-no-refresh"))return!1
for(var r=t.selection.blocks(),i=0;i<r.length;i++){for(var o=r[i].previousSibling;o&&o.nodeType==Node.TEXT_NODE&&0===o.textContent.length;)o=o.previousSibling
if("LI"!=r[i].tagName||o)return n(e,!1),!0
n(e,!0)}}}},e.extend(e.FE.DEFAULTS,{editInPopup:!1}),e.FE.MODULES.textEdit=function(e){function t(){e.events.$on(e.$el,e._mouseup,function(){setTimeout(function(){(function(){var t,n=e.popups.get("text.edit")
t="INPUT"===e.$el.prop("tagName")?e.$el.attr("placeholder"):e.$el.text(),n.find("input").val(t).trigger("change"),e.popups.setContainer("text.edit",e.$sc),e.popups.show("text.edit",e.$el.offset().left+e.$el.outerWidth()/2,e.$el.offset().top+e.$el.outerHeight(),e.$el.outerHeight())})()},10)})}return{_init:function(){var n
e.opts.editInPopup&&(n={edit:'<div id="fr-text-edit-'+e.id+'" class="fr-layer fr-text-edit-layer"><div class="fr-input-line"><input type="text" placeholder="'+e.language.translate("Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="updateText" tabIndex="2">'+e.language.translate("Update")+"</button></div></div>"},e.popups.create("text.edit",n),t())},update:function(){var t=e.popups.get("text.edit").find("input").val()
0===t.length&&(t=e.opts.placeholderText),"INPUT"===e.$el.prop("tagName")?e.$el.attr("placeholder",t):e.$el.text(t),e.events.trigger("contentChanged"),e.popups.hide("text.edit")}}},e.FE.RegisterCommand("updateText",{focus:!1,undo:!1,callback:function(){this.textEdit.update()}}),e.extend(e.FE.DEFAULTS,{toolbarBottom:!1,toolbarButtons:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","|","fontFamily","fontSize","color","inlineStyle","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","-","insertLink","insertImage","insertVideo","embedly","insertFile","insertTable","|","emoticons","specialCharacters","insertHR","selectAll","clearFormatting","|","print","spellChecker","help","html","|","undo","redo"],toolbarButtonsXS:["bold","italic","fontFamily","fontSize","|","undo","redo"],toolbarButtonsSM:["bold","italic","underline","|","fontFamily","fontSize","insertLink","insertImage","table","|","undo","redo"],toolbarButtonsMD:null,toolbarContainer:null,toolbarInline:!1,toolbarSticky:!0,toolbarStickyOffset:0,toolbarVisibleWithoutSelection:!1}),e.FE.MODULES.toolbar=function(t){function n(e,t){for(var n=0;n<t.length;n++)"-"!=t[n]&&"|"!=t[n]&&e.indexOf(t[n])<0&&e.push(t[n])}function r(){var e=t.helpers.screenSize()
return d[e]}function i(){var e=r()
t.$tb.find(".fr-separator").remove(),t.$tb.find("> .fr-command").addClass("fr-hidden")
for(var n=0;n<e.length;n++)if("|"==e[n]||"-"==e[n])t.$tb.append(t.button.buildList([e[n]]))
else{var i=t.$tb.find('> .fr-command[data-cmd="'+e[n]+'"]'),o=null
t.node.hasClass(i.next().get(0),"fr-dropdown-menu")&&(o=i.next()),i.removeClass("fr-hidden").appendTo(t.$tb),o&&o.appendTo(t.$tb)}}function o(n,r){setTimeout(function(){if((!n||n.which!=e.FE.KEYCODE.ESC)&&t.selection.inEditor()&&t.core.hasFocus()&&!t.popups.areVisible()&&(t.opts.toolbarVisibleWithoutSelection||!t.selection.isCollapsed()&&!t.keys.isIME()||r)){if(t.$tb.data("instance",t),!1===t.events.trigger("toolbar.show",[n]))return!1
t.$tb.show(),t.opts.toolbarContainer||t.position.forSelection(t.$tb),t.opts.zIndex>1?t.$tb.css("z-index",t.opts.zIndex+1):t.$tb.css("z-index",null)}},0)}function a(e){return(!e||"blur"!==e.type||document.activeElement!==t.el)&&(!(!e||"keydown"!==e.type||!t.keys.ctrlKey(e))||(!!t.button.getButtons(".fr-dropdown.fr-active").next().find(t.o_doc.activeElement).length||void(!1!==t.events.trigger("toolbar.hide")&&t.$tb.hide())))}function s(n){clearTimeout(h),n&&n.which==e.FE.KEYCODE.ESC||(h=setTimeout(o,t.opts.typingTimer))}function l(){t.events.on("window.mousedown",a),t.events.on("keydown",a),t.events.on("blur",a),t.helpers.isMobile()||t.events.on("window.mouseup",o),t.helpers.isMobile()?t.helpers.isIOS()||(t.events.on("window.touchend",o),t.browser.mozilla&&setInterval(o,200)):t.events.on("window.keyup",s),t.events.on("keydown",function(t){t&&t.which==e.FE.KEYCODE.ESC&&a()}),t.events.on("keydown",function(t){return t.which==e.FE.KEYCODE.ALT?(t.stopPropagation(),!1):void 0},!0),t.events.$on(t.$wp,"scroll.toolbar",o),t.events.on("commands.after",o),t.helpers.isMobile()&&(t.events.$on(t.$doc,"selectionchange",s),t.events.$on(t.$doc,"orientationchange",o))}function u(){t.$tb.html("").removeData().remove(),t.$tb=null}function c(){t.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"),t.$box.find(".fr-sticky-dummy").remove()}function f(){t.opts.theme&&t.$tb.addClass(t.opts.theme+"-theme"),t.opts.zIndex>1&&t.$tb.css("z-index",t.opts.zIndex+1),"auto"!=t.opts.direction&&t.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-"+t.opts.direction),t.helpers.isMobile()?t.$tb.addClass("fr-mobile"):t.$tb.addClass("fr-desktop"),t.opts.toolbarContainer?(t.opts.toolbarInline&&(l(),a()),t.opts.toolbarBottom?t.$tb.addClass("fr-bottom"):t.$tb.addClass("fr-top")):t.opts.toolbarInline?(t.$sc.append(t.$tb),t.$tb.data("container",t.$sc),t.$tb.addClass("fr-inline"),t.$tb.prepend('<span class="fr-arrow"></span>'),l(),t.opts.toolbarBottom=!1):(t.opts.toolbarBottom&&!t.helpers.isIOS()?(t.$box.append(t.$tb),t.$tb.addClass("fr-bottom"),t.$box.addClass("fr-bottom")):(t.opts.toolbarBottom=!1,t.$box.prepend(t.$tb),t.$tb.addClass("fr-top"),t.$box.addClass("fr-top")),t.$tb.addClass("fr-basic"),t.opts.toolbarSticky&&(t.opts.toolbarStickyOffset&&(t.opts.toolbarBottom?t.$tb.css("bottom",t.opts.toolbarStickyOffset):t.$tb.css("top",t.opts.toolbarStickyOffset)),t.position.addSticky(t.$tb))),p=t.$tb.get(0).ownerDocument,"defaultView"in p?p.defaultView:p.parentWindow,function(){var i=e.merge([],r())
n(i,t.opts.toolbarButtonsXS||[]),n(i,t.opts.toolbarButtonsSM||[]),n(i,t.opts.toolbarButtonsMD||[]),n(i,t.opts.toolbarButtons)
for(var o=i.length-1;o>=0;o--)"-"!=i[o]&&"|"!=i[o]&&i.indexOf(i[o])<o&&i.splice(o,1)
var a=t.button.buildList(i,r())
t.$tb.append(a),t.button.bindCommands(t.$tb)}(),t.events.$on(e(t.o_win),"resize",i),t.events.$on(e(t.o_win),"orientationchange",i),t.accessibility.registerToolbar(t.$tb),t.events.$on(t.$tb,t._mousedown+" "+t._mouseup,function(e){var n=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null
return n&&"INPUT"!=n.tagName&&!t.edit.isDisabled()?(e.stopPropagation(),e.preventDefault(),!1):void 0},!0)}var p,d=[]
d[e.FE.XS]=t.opts.toolbarButtonsXS||t.opts.toolbarButtons,d[e.FE.SM]=t.opts.toolbarButtonsSM||t.opts.toolbarButtons,d[e.FE.MD]=t.opts.toolbarButtonsMD||t.opts.toolbarButtons,d[e.FE.LG]=t.opts.toolbarButtons
var h=null,m=!1
return{_init:function(){return t.$sc=e(t.opts.scrollableContainer).first(),!!t.$wp&&(t.opts.toolbarContainer?(t.shared.$tb?(t.$tb=t.shared.$tb,t.opts.toolbarInline&&l()):(t.shared.$tb=e('<div class="fr-toolbar"></div>'),t.$tb=t.shared.$tb,e(t.opts.toolbarContainer).append(t.$tb),f(),t.$tb.data("instance",t)),t.opts.toolbarInline?t.$box.addClass("fr-inline"):t.$box.addClass("fr-basic"),t.events.on("focus",function(){t.$tb.data("instance",t)},!0),t.opts.toolbarInline=!1):t.opts.toolbarInline?(t.$box.addClass("fr-inline"),t.shared.$tb?(t.$tb=t.shared.$tb,l()):(t.shared.$tb=e('<div class="fr-toolbar"></div>'),t.$tb=t.shared.$tb,f())):(t.$box.addClass("fr-basic"),t.$tb=e('<div class="fr-toolbar"></div>'),f(),t.$tb.data("instance",t)),t.events.on("destroy",c,!0),void t.events.on(t.opts.toolbarInline||t.opts.toolbarContainer?"shared.destroy":"destroy",u,!0))},hide:a,show:function(){return!1!==t.events.trigger("toolbar.show")&&void t.$tb.show()},showInline:o,disable:function(){!m&&t.$tb&&(t.$tb.find("> .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled",!0),m=!0)},enable:function(){m&&t.$tb&&(t.$tb.find("> .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled",!1),m=!1),t.button.bulkRefresh()}}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.FE.PLUGINS.align=function(t){return{apply:function(n){t.selection.save(),t.html.wrap(!0,!0,!0,!0),t.selection.restore()
for(var r=t.selection.blocks(),i=0;i<r.length;i++)t.helpers.getAlignment(e(r[i].parentNode))==n?e(r[i]).css("text-align","").removeClass("fr-temp-div"):e(r[i]).css("text-align",n).removeClass("fr-temp-div"),""===e(r[i]).attr("class")&&e(r[i]).removeAttr("class"),""===e(r[i]).attr("style")&&e(r[i]).removeAttr("style")
t.selection.save(),t.html.unwrap(),t.selection.restore()},refresh:function(n){var r=t.selection.blocks()
if(r.length){var i=t.helpers.getAlignment(e(r[0]))
n.find("> *:first").replaceWith(t.icon.create("align-"+i))}},refreshOnShow:function(n,r){var i=t.selection.blocks()
if(i.length){var o=t.helpers.getAlignment(e(i[0]))
r.find('a.fr-command[data-param1="'+o+'"]').addClass("fr-active").attr("aria-selected",!0)}}}},e.FE.DefineIcon("align",{NAME:"align-left"}),e.FE.DefineIcon("align-left",{NAME:"align-left"}),e.FE.DefineIcon("align-right",{NAME:"align-right"}),e.FE.DefineIcon("align-center",{NAME:"align-center"}),e.FE.DefineIcon("align-justify",{NAME:"align-justify"}),e.FE.RegisterCommand("align",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.align.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="align" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.icon.create("align-"+r)+'<span class="fr-sr-only">'+this.language.translate(n[r])+"</span></a></li>")
return t+"</ul>"},callback:function(e,t){this.align.apply(t)},refresh:function(e){this.align.refresh(e)},refreshOnShow:function(e,t){this.align.refreshOnShow(e,t)},plugin:"align"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{charCounterMax:-1,charCounterCount:!0}),e.FE.PLUGINS.charCounter=function(t){function n(){return(t.el.textContent||"").replace(/\u200B/g,"").length}function r(r){if(t.opts.charCounterMax<0)return!0
if(n()<t.opts.charCounterMax)return!0
var i=r.which
return!(!t.keys.ctrlKey(r)&&t.keys.isCharacter(i)||i===e.FE.KEYCODE.IME)||(r.preventDefault(),r.stopPropagation(),t.events.trigger("charCounter.exceeded"),!1)}function i(r){return t.opts.charCounterMax<0?r:e("<div>").html(r).text().length+n()<=t.opts.charCounterMax?r:(t.events.trigger("charCounter.exceeded"),"")}function o(){if(t.opts.charCounterCount){var e=n()+(t.opts.charCounterMax>0?"/"+t.opts.charCounterMax:"")
a.text(e),t.opts.toolbarBottom&&a.css("margin-bottom",t.$tb.outerHeight(!0))
var r=t.$wp.get(0).offsetWidth-t.$wp.get(0).clientWidth
r>=0&&("rtl"==t.opts.direction?a.css("margin-left",r):a.css("margin-right",r))}}var a
return{_init:function(){return!(!t.$wp||!t.opts.charCounterCount)&&((a=e('<span class="fr-counter"></span>')).css("bottom",t.$wp.css("border-bottom-width")),t.$box.append(a),t.events.on("keydown",r,!0),t.events.on("paste.afterCleanup",i),t.events.on("keyup contentChanged input",function(){t.events.trigger("charCounter.update")}),t.events.on("charCounter.update",o),t.events.trigger("charCounter.update"),void t.events.on("destroy",function(){e(t.o_win).off("resize.char"+t.id),a.removeData().remove(),a=null}))},count:n}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{"colors.picker":"[_BUTTONS_][_TEXT_COLORS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]"}),e.extend(e.FE.DEFAULTS,{colorsText:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsBackground:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorsHEXInput:!0,colorsDefaultTab:"text",colorsButtons:["colorsBack","|","-"]}),e.FE.PLUGINS.colors=function(t){function n(){t.popups.hide("colors.picker")}function r(){var e='<div class="fr-buttons fr-colors-buttons">'
t.opts.toolbarInline&&t.opts.colorsButtons.length>0&&(e+=t.button.buildList(t.opts.colorsButtons)),e+=function(){var e='<div class="fr-colors-tabs fr-group">'
return e+='<span class="fr-colors-tab '+("background"==t.opts.colorsDefaultTab?"":"fr-selected-tab ")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"!=t.opts.colorsDefaultTab)+'" data-param1="text" data-cmd="colorChangeSet" title="'+t.language.translate("Text")+'">'+t.language.translate("Text")+"</span>",(e+='<span class="fr-colors-tab '+("background"==t.opts.colorsDefaultTab?"fr-selected-tab ":"")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"==t.opts.colorsDefaultTab)+'" data-param1="background" data-cmd="colorChangeSet" title="'+t.language.translate("Background")+'">'+t.language.translate("Background")+"</span>")+"</div>"}()+"</div>"
var n=""
t.opts.colorsHEXInput&&(n='<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer-'+t.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-color-hex-layer-text-'+t.id+'" type="text" placeholder="'+t.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="customColor" tabIndex="2" role="button">'+t.language.translate("OK")+"</button></div></div>")
var r={buttons:e,text_colors:i("text"),background_colors:i("background"),custom_color:n},a=t.popups.create("colors.picker",r)
return o(a),a}function i(e){for(var n="text"==e?t.opts.colorsText:t.opts.colorsBackground,r='<div class="fr-color-set fr-'+e+"-color"+(t.opts.colorsDefaultTab==e||"text"!=t.opts.colorsDefaultTab&&"background"!=t.opts.colorsDefaultTab&&"text"==e?" fr-selected-set":"")+'">',i=0;i<n.length;i++)0!==i&&i%t.opts.colorsStep==0&&(r+="<br>"),r+="REMOVE"!=n[i]?'<span class="fr-command fr-select-color" style="background: '+n[i]+';" tabIndex="-1" aria-selected="false" role="button" data-cmd="'+e+'Color" data-param1="'+n[i]+'"><span class="fr-sr-only">'+t.language.translate("Color")+" "+n[i]+"&nbsp;&nbsp;&nbsp;</span></span>":'<span class="fr-command fr-select-color" data-cmd="'+e+'Color" tabIndex="-1" role="button" data-param1="REMOVE" title="'+t.language.translate("Clear Formatting")+'">'+t.icon.create("remove")+'<span class="fr-sr-only">'+t.language.translate("Clear Formatting")+"</span></span>"
return r+"</div>"}function o(n){t.events.on("popup.tab",function(r){var i=e(r.currentTarget)
if(!t.popups.isVisible("colors.picker")||!i.is("span"))return!0
var o=r.which,a=!0
if(e.FE.KEYCODE.TAB==o){var s=n.find(".fr-buttons")
a=!t.accessibility.focusToolbar(s,!!r.shiftKey)}else if(e.FE.KEYCODE.ARROW_UP==o||e.FE.KEYCODE.ARROW_DOWN==o||e.FE.KEYCODE.ARROW_LEFT==o||e.FE.KEYCODE.ARROW_RIGHT==o){if(i.is("span.fr-select-color")){var l=i.parent().find("span.fr-select-color"),u=l.index(i),c=t.opts.colorsStep,f=Math.floor(l.length/c),p=u%c,d=Math.floor(u/c)*c+p,h=f*c
e.FE.KEYCODE.ARROW_UP==o?d=((d-c)%h+h)%h:e.FE.KEYCODE.ARROW_DOWN==o?d=(d+c)%h:e.FE.KEYCODE.ARROW_LEFT==o?d=((d-1)%h+h)%h:e.FE.KEYCODE.ARROW_RIGHT==o&&(d=(d+1)%h)
var m=e(l.get(d))
t.events.disableBlur(),m.focus(),a=!1}}else e.FE.KEYCODE.ENTER==o&&(t.button.exec(i),a=!1)
return!1===a&&(r.preventDefault(),r.stopPropagation()),a},!0)}function a(n){var r,i=t.popups.get("colors.picker"),o=e(t.selection.element())
r="background"==n?"background-color":"color"
var a=i.find(".fr-"+n+"-color .fr-select-color")
for(a.find(".fr-selected-color").remove(),a.removeClass("fr-active-item"),a.not('[data-param1="REMOVE"]').attr("aria-selected",!1);o.get(0)!=t.el;){if("transparent"!=o.css(r)&&"rgba(0, 0, 0, 0)"!=o.css(r)){var s=i.find(".fr-"+n+'-color .fr-select-color[data-param1="'+t.helpers.RGBToHex(o.css(r))+'"]')
s.append('<span class="fr-selected-color" aria-hidden="true"></span>'),s.addClass("fr-active-item").attr("aria-selected",!0)
break}o=o.parent()}var l=i.find(".fr-color-hex-layer input")
l.length&&l.val(t.helpers.RGBToHex(o.css(r))).trigger("change")}function s(e){"REMOVE"!=e?t.format.applyStyle("background-color",t.helpers.HEXtoRGB(e)):t.format.removeStyle("background-color"),n()}function l(e){"REMOVE"!=e?t.format.applyStyle("color",t.helpers.HEXtoRGB(e)):t.format.removeStyle("color"),n()}return{showColorsPopup:function(){var e=t.$tb.find('.fr-command[data-cmd="color"]'),n=t.popups.get("colors.picker")
if(n||(n=r()),!n.hasClass("fr-active"))if(t.popups.setContainer("colors.picker",t.$tb),a(n.find(".fr-selected-tab").attr("data-param1")),e.is(":visible")){var i=e.offset().left+e.outerWidth()/2,o=e.offset().top+(t.opts.toolbarBottom?10:e.outerHeight()-10)
t.popups.show("colors.picker",i,o,e.outerHeight())}else t.position.forSelection(n),t.popups.show("colors.picker")},hideColorsPopup:n,changeSet:function(e,n){e.hasClass("fr-selected-tab")||(e.siblings().removeClass("fr-selected-tab").attr("aria-pressed",!1),e.addClass("fr-selected-tab").attr("aria-pressed",!0),e.parents(".fr-popup").find(".fr-color-set").removeClass("fr-selected-set"),e.parents(".fr-popup").find(".fr-color-set.fr-"+n+"-color").addClass("fr-selected-set"),a(n)),t.accessibility.focusPopup(e.parents(".fr-popup"))},background:s,customColor:function(){var e=t.popups.get("colors.picker"),n=e.find(".fr-color-hex-layer input")
if(n.length){var r=n.val()
"background"==e.find(".fr-selected-tab").attr("data-param1")?s(r):l(r)}},text:l,back:function(){t.popups.hide("colors.picker"),t.toolbar.showInline()}}},e.FE.DefineIcon("colors",{NAME:"tint"}),e.FE.RegisterCommand("color",{title:"Colors",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("colors.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("colors.picker")):this.colors.showColorsPopup()},plugin:"colors"}),e.FE.RegisterCommand("textColor",{undo:!0,callback:function(e,t){this.colors.text(t)}}),e.FE.RegisterCommand("backgroundColor",{undo:!0,callback:function(e,t){this.colors.background(t)}}),e.FE.RegisterCommand("colorChangeSet",{undo:!1,focus:!1,callback:function(e,t){var n=this.popups.get("colors.picker").find('.fr-command[data-cmd="'+e+'"][data-param1="'+t+'"]')
this.colors.changeSet(n,t)}}),e.FE.DefineIcon("colorsBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("colorsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.colors.back()}}),e.FE.RegisterCommand("customColor",{title:"OK",undo:!0,callback:function(){this.colors.customColor()}}),e.FE.DefineIcon("remove",{NAME:"eraser"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{emoticons:"[_BUTTONS_][_EMOTICONS_]"}),e.extend(e.FE.DEFAULTS,{emoticonsStep:8,emoticonsSet:[{code:"1f600",desc:"Grinning face"},{code:"1f601",desc:"Grinning face with smiling eyes"},{code:"1f602",desc:"Face with tears of joy"},{code:"1f603",desc:"Smiling face with open mouth"},{code:"1f604",desc:"Smiling face with open mouth and smiling eyes"},{code:"1f605",desc:"Smiling face with open mouth and cold sweat"},{code:"1f606",desc:"Smiling face with open mouth and tightly-closed eyes"},{code:"1f607",desc:"Smiling face with halo"},{code:"1f608",desc:"Smiling face with horns"},{code:"1f609",desc:"Winking face"},{code:"1f60a",desc:"Smiling face with smiling eyes"},{code:"1f60b",desc:"Face savoring delicious food"},{code:"1f60c",desc:"Relieved face"},{code:"1f60d",desc:"Smiling face with heart-shaped eyes"},{code:"1f60e",desc:"Smiling face with sunglasses"},{code:"1f60f",desc:"Smirking face"},{code:"1f610",desc:"Neutral face"},{code:"1f611",desc:"Expressionless face"},{code:"1f612",desc:"Unamused face"},{code:"1f613",desc:"Face with cold sweat"},{code:"1f614",desc:"Pensive face"},{code:"1f615",desc:"Confused face"},{code:"1f616",desc:"Confounded face"},{code:"1f617",desc:"Kissing face"},{code:"1f618",desc:"Face throwing a kiss"},{code:"1f619",desc:"Kissing face with smiling eyes"},{code:"1f61a",desc:"Kissing face with closed eyes"},{code:"1f61b",desc:"Face with stuck out tongue"},{code:"1f61c",desc:"Face with stuck out tongue and winking eye"},{code:"1f61d",desc:"Face with stuck out tongue and tightly-closed eyes"},{code:"1f61e",desc:"Disappointed face"},{code:"1f61f",desc:"Worried face"},{code:"1f620",desc:"Angry face"},{code:"1f621",desc:"Pouting face"},{code:"1f622",desc:"Crying face"},{code:"1f623",desc:"Persevering face"},{code:"1f624",desc:"Face with look of triumph"},{code:"1f625",desc:"Disappointed but relieved face"},{code:"1f626",desc:"Frowning face with open mouth"},{code:"1f627",desc:"Anguished face"},{code:"1f628",desc:"Fearful face"},{code:"1f629",desc:"Weary face"},{code:"1f62a",desc:"Sleepy face"},{code:"1f62b",desc:"Tired face"},{code:"1f62c",desc:"Grimacing face"},{code:"1f62d",desc:"Loudly crying face"},{code:"1f62e",desc:"Face with open mouth"},{code:"1f62f",desc:"Hushed face"},{code:"1f630",desc:"Face with open mouth and cold sweat"},{code:"1f631",desc:"Face screaming in fear"},{code:"1f632",desc:"Astonished face"},{code:"1f633",desc:"Flushed face"},{code:"1f634",desc:"Sleeping face"},{code:"1f635",desc:"Dizzy face"},{code:"1f636",desc:"Face without mouth"},{code:"1f637",desc:"Face with medical mask"}],emoticonsButtons:["emoticonsBack","|"],emoticonsUseImage:!0}),e.FE.PLUGINS.emoticons=function(t){function n(){if(!t.selection.isCollapsed())return!1
var e=t.selection.element(),n=t.selection.endElement()
if(e&&t.node.hasClass(e,"fr-emoticon"))return e
if(n&&t.node.hasClass(n,"fr-emoticon"))return n
var r=t.selection.ranges(0),i=r.startContainer
if(i.nodeType==Node.ELEMENT_NODE&&i.childNodes.length>0&&r.startOffset>0){var o=i.childNodes[r.startOffset-1]
if(t.node.hasClass(o,"fr-emoticon"))return o}return!1}function r(n){t.events.on("popup.tab",function(r){var i=e(r.currentTarget)
if(!t.popups.isVisible("emoticons")||!i.is("span, a"))return!0
var o,a,s,l=r.which
if(e.FE.KEYCODE.TAB==l){if(i.is("span.fr-emoticon")&&r.shiftKey||i.is("a")&&!r.shiftKey){var u=n.find(".fr-buttons")
o=!t.accessibility.focusToolbar(u,!!r.shiftKey)}if(!1!==o){var c=n.find("span.fr-emoticon:focus:first, span.fr-emoticon:visible:first, a")
i.is("span.fr-emoticon")&&(c=c.not("span.fr-emoticon:not(:focus)")),a=c.index(i),a=r.shiftKey?((a-1)%c.length+c.length)%c.length:(a+1)%c.length,s=c.get(a),t.events.disableBlur(),s.focus(),o=!1}}else if(e.FE.KEYCODE.ARROW_UP==l||e.FE.KEYCODE.ARROW_DOWN==l||e.FE.KEYCODE.ARROW_LEFT==l||e.FE.KEYCODE.ARROW_RIGHT==l){if(i.is("span.fr-emoticon")){var f=i.parent().find("span.fr-emoticon")
a=f.index(i)
var p=t.opts.emoticonsStep,d=Math.floor(f.length/p),h=a%p,m=Math.floor(a/p)*p+h,g=d*p
e.FE.KEYCODE.ARROW_UP==l?m=((m-p)%g+g)%g:e.FE.KEYCODE.ARROW_DOWN==l?m=(m+p)%g:e.FE.KEYCODE.ARROW_LEFT==l?m=((m-1)%g+g)%g:e.FE.KEYCODE.ARROW_RIGHT==l&&(m=(m+1)%g),s=e(f.get(m)),t.events.disableBlur(),s.focus(),o=!1}}else e.FE.KEYCODE.ENTER==l&&(i.is("a")?i[0].click():t.button.exec(i),o=!1)
return!1===o&&(r.preventDefault(),r.stopPropagation()),o},!0)}return{_init:function(){var r=function(){for(var e=t.el.querySelectorAll(".fr-emoticon:not(.fr-deletable)"),n=0;n<e.length;n++)e[n].className+=" fr-deletable"}
r(),t.events.on("html.set",r),t.events.on("keydown",function(r){if(t.keys.isCharacter(r.which)&&t.selection.inEditor()){var i=t.selection.ranges(0),o=n()
t.node.hasClass(o,"fr-emoticon-img")&&o&&(0===i.startOffset&&t.selection.element()===o?e(o).before(e.FE.MARKERS+e.FE.INVISIBLE_SPACE):e(o).after(e.FE.INVISIBLE_SPACE+e.FE.MARKERS),t.selection.restore())}}),t.events.on("keyup",function(r){for(var i=t.el.querySelectorAll(".fr-emoticon"),o=0;o<i.length;o++)void 0!==i[o].textContent&&0===i[o].textContent.replace(/\u200B/gi,"").length&&e(i[o]).remove()
if(!(r.which>=e.FE.KEYCODE.ARROW_LEFT&&r.which<=e.FE.KEYCODE.ARROW_DOWN)){var a=n()
t.node.hasClass(a,"fr-emoticon-img")&&(e(a).append(e.FE.MARKERS),t.selection.restore())}})},insert:function(r,i){var o=n(),a=t.selection.ranges(0)
o?(0===a.startOffset&&t.selection.element()===o?e(o).before(e.FE.MARKERS+e.FE.INVISIBLE_SPACE):a.startOffset>0&&t.selection.element()===o&&a.commonAncestorContainer.parentNode.classList.contains("fr-emoticon")&&e(o).after(e.FE.INVISIBLE_SPACE+e.FE.MARKERS),t.selection.restore(),t.html.insert('<span class="fr-emoticon fr-deletable'+(i?" fr-emoticon-img":"")+'"'+(i?' style="background: url('+i+');"':"")+">"+(i?"&nbsp;":r)+"</span>&nbsp;"+e.FE.MARKERS,!0)):t.html.insert('<span class="fr-emoticon fr-deletable'+(i?" fr-emoticon-img":"")+'"'+(i?' style="background: url('+i+');"':"")+">"+(i?"&nbsp;":r)+"</span>&nbsp;",!0)},showEmoticonsPopup:function(){var e=t.$tb.find('.fr-command[data-cmd="emoticons"]'),n=t.popups.get("emoticons")
if(n||(n=function(){var e=""
t.opts.toolbarInline&&t.opts.emoticonsButtons.length>0&&(e='<div class="fr-buttons fr-emoticons-buttons">'+t.button.buildList(t.opts.emoticonsButtons)+"</div>")
var n={buttons:e,emoticons:function(){for(var e='<div style="text-align: center">',n=0;n<t.opts.emoticonsSet.length;n++)0!==n&&n%t.opts.emoticonsStep==0&&(e+="<br>"),e+='<span class="fr-command fr-emoticon" tabIndex="-1" data-cmd="insertEmoticon" title="'+t.language.translate(t.opts.emoticonsSet[n].desc)+'" role="button" data-param1="'+t.opts.emoticonsSet[n].code+'">'+(t.opts.emoticonsUseImage?'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/'+t.opts.emoticonsSet[n].code+'.svg"/>':"&#x"+t.opts.emoticonsSet[n].code+";")+'<span class="fr-sr-only">'+t.language.translate(t.opts.emoticonsSet[n].desc)+"&nbsp;&nbsp;&nbsp;</span></span>"
return t.opts.emoticonsUseImage&&(e+='<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="http://emojione.com/" target="_blank" rel="nofollow" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>'),e+="</div>"}()},i=t.popups.create("emoticons",n)
return t.tooltip.bind(i,".fr-emoticon"),r(i),i}()),!n.hasClass("fr-active")){t.popups.refresh("emoticons"),t.popups.setContainer("emoticons",t.$tb)
var i=e.offset().left+e.outerWidth()/2,o=e.offset().top+(t.opts.toolbarBottom?10:e.outerHeight()-10)
t.popups.show("emoticons",i,o,e.outerHeight())}},hideEmoticonsPopup:function(){t.popups.hide("emoticons")},back:function(){t.popups.hide("emoticons"),t.toolbar.showInline()}}},e.FE.DefineIcon("emoticons",{NAME:"smile-o"}),e.FE.RegisterCommand("emoticons",{title:"Emoticons",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("emoticons")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("emoticons")):this.emoticons.showEmoticonsPopup()},plugin:"emoticons"}),e.FE.RegisterCommand("insertEmoticon",{callback:function(e,t){this.emoticons.insert("&#x"+t+";",this.opts.emoticonsUseImage?"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/"+t+".svg":null),this.emoticons.hideEmoticonsPopup()}}),e.FE.DefineIcon("emoticonsBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("emoticonsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.emoticons.back()}})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{entities:"&quot;&#39;&iexcl;&cent;&pound;&curren;&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&shy;&reg;&macr;&deg;&plusmn;&sup2;&sup3;&acute;&micro;&para;&middot;&cedil;&sup1;&ordm;&raquo;&frac14;&frac12;&frac34;&iquest;&Agrave;&Aacute;&Acirc;&Atilde;&Auml;&Aring;&AElig;&Ccedil;&Egrave;&Eacute;&Ecirc;&Euml;&Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ograve;&Oacute;&Ocirc;&Otilde;&Ouml;&times;&Oslash;&Ugrave;&Uacute;&Ucirc;&Uuml;&Yacute;&THORN;&szlig;&agrave;&aacute;&acirc;&atilde;&auml;&aring;&aelig;&ccedil;&egrave;&eacute;&ecirc;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&ntilde;&ograve;&oacute;&ocirc;&otilde;&ouml;&divide;&oslash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&thorn;&yuml;&OElig;&oelig;&Scaron;&scaron;&Yuml;&fnof;&circ;&tilde;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&Omega;&alpha;&beta;&gamma;&delta;&epsilon;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigmaf;&sigma;&tau;&upsilon;&phi;&chi;&psi;&omega;&thetasym;&upsih;&piv;&ensp;&emsp;&thinsp;&zwnj;&zwj;&lrm;&rlm;&ndash;&mdash;&lsquo;&rsquo;&sbquo;&ldquo;&rdquo;&bdquo;&dagger;&Dagger;&bull;&hellip;&permil;&prime;&Prime;&lsaquo;&rsaquo;&oline;&frasl;&euro;&image;&weierp;&real;&trade;&alefsym;&larr;&uarr;&rarr;&darr;&harr;&crarr;&lArr;&uArr;&rArr;&dArr;&hArr;&forall;&part;&exist;&empty;&nabla;&isin;&notin;&ni;&prod;&sum;&minus;&lowast;&radic;&prop;&infin;&ang;&and;&or;&cap;&cup;&int;&there4;&sim;&cong;&asymp;&ne;&equiv;&le;&ge;&sub;&sup;&nsub;&sube;&supe;&oplus;&otimes;&perp;&sdot;&lceil;&rceil;&lfloor;&rfloor;&lang;&rang;&loz;&spades;&clubs;&hearts;&diams;"}),e.FE.PLUGINS.entities=function(t){function n(e){var t=e.textContent
if(t.match(o)){for(var n="",r=0;r<t.length;r++)n+=a[t[r]]?a[t[r]]:t[r]
e.textContent=n}}function r(e){if(e&&["STYLE","SCRIPT","svg","IFRAME"].indexOf(e.tagName)>=0)return!0
for(var i=t.node.contents(e),o=0;o<i.length;o++)i[o].nodeType==Node.TEXT_NODE?n(i[o]):r(i[o])
e.nodeType==Node.TEXT_NODE&&n(e)}function i(e){return 0===e.length?"":t.clean.exec(e,r).replace(/\&amp;/g,"&")}var o,a
return{_init:function(){t.opts.htmlSimpleAmpersand||(t.opts.entities=t.opts.entities+"&amp;")
var n=e("<div>").html(t.opts.entities).text(),r=t.opts.entities.split(";")
a={},o=""
for(var s=0;s<n.length;s++){var l=n.charAt(s)
a[l]=r[s]+";",o+="\\"+l+(s<n.length-1?"|":"")}o=new RegExp("("+o+")","g"),t.events.on("html.get",i,!0)}}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{fontFamily:{"Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","Times New Roman,Times,serif,-webkit-standard":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana"},fontFamilySelection:!1,fontFamilyDefaultSelection:"Font Family"}),e.FE.PLUGINS.fontFamily=function(t){function n(t){var n=t.replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'| /g,"").split(",")
return e.grep(n,function(e){return e.length>0})}function r(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<t.length;r++)if(e[n].toLowerCase()==t[r].toLowerCase())return[n,r]
return null}function i(){var i=n(e(t.selection.element()).css("font-family")),o=[]
for(var a in t.opts.fontFamily)if(t.opts.fontFamily.hasOwnProperty(a)){var s=r(i,n(a))
s&&o.push([a,s])}return 0===o.length?null:(o.sort(function(e,t){var n=e[1][0]-t[1][0]
return 0===n?e[1][1]-t[1][1]:n}),o[0][0])}return{apply:function(e){t.format.applyStyle("font-family",e)},refreshOnShow:function(e,t){t.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),t.find('.fr-command[data-param1="'+i()+'"]').addClass("fr-active").attr("aria-selected",!0)
var n=t.find(".fr-dropdown-list"),r=t.find(".fr-active").parent()
r.length?n.parent().scrollTop(r.offset().top-n.offset().top-(n.parent().outerHeight()/2-r.outerHeight()/2)):n.parent().scrollTop(0)},refresh:function(n){if(t.opts.fontFamilySelection){var r=e(t.selection.element()).css("font-family").replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'|/g,"").split(",")
n.find("> span").text(t.opts.fontFamily[i()]||r[0]||t.language.translate(t.opts.fontFamilyDefaultSelection))}}}},e.FE.RegisterCommand("fontFamily",{type:"dropdown",displaySelection:function(e){return e.opts.fontFamilySelection},defaultSelection:function(e){return e.opts.fontFamilyDefaultSelection},displaySelectionWidth:120,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontFamily
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontFamily" data-param1="'+n+'" style="font-family: '+n+'" title="'+t[n]+'">'+t[n]+"</a></li>")
return e+"</ul>"},title:"Font Family",callback:function(e,t){this.fontFamily.apply(t)},refresh:function(e){this.fontFamily.refresh(e)},refreshOnShow:function(e,t){this.fontFamily.refreshOnShow(e,t)},plugin:"fontFamily"}),e.FE.DefineIcon("fontFamily",{NAME:"font"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{fontSize:["8","9","10","11","12","14","18","24","30","36","48","60","72","96"],fontSizeSelection:!1,fontSizeDefaultSelection:"12"}),e.FE.PLUGINS.fontSize=function(t){return{apply:function(e){t.format.applyStyle("font-size",e)},refreshOnShow:function(n,r){var i=e(t.selection.element()).css("font-size")
r.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),r.find('.fr-command[data-param1="'+i+'"]').addClass("fr-active").attr("aria-selected",!0)
var o=r.find(".fr-dropdown-list"),a=r.find(".fr-active").parent()
a.length?o.parent().scrollTop(a.offset().top-o.offset().top-(o.parent().outerHeight()/2-a.outerHeight()/2)):o.parent().scrollTop(0)},refresh:function(n){if(t.opts.fontSizeSelection){var r=t.helpers.getPX(e(t.selection.element()).css("font-size"))
n.find("> span").text(r)}}}},e.FE.RegisterCommand("fontSize",{type:"dropdown",title:"Font Size",displaySelection:function(e){return e.opts.fontSizeSelection},displaySelectionWidth:30,defaultSelection:function(e){return e.opts.fontSizeDefaultSelection},html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontSize,n=0;n<t.length;n++){var r=t[n]
e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'+r+'px" title="'+r+'">'+r+"</a></li>"}return e+"</ul>"},callback:function(e,t){this.fontSize.apply(t)},refresh:function(e){this.fontSize.refresh(e)},refreshOnShow:function(e,t){this.fontSize.refreshOnShow(e,t)},plugin:"fontSize"}),e.FE.DefineIcon("fontSize",{NAME:"text-height"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video",".fr-embedly"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),e.FE.PLUGINS.lineBreaker=function(t){function n(n,r){var i,o,a,s,l,u,c,f
if(null==n)l=(s=r.parent()).offset().top,i=(c=r.offset().top)-Math.min((c-l)/2,t.opts.lineBreakerOffset),a=s.outerWidth(),o=s.offset().left
else if(null==r)u=(s=n.parent()).offset().top+s.outerHeight(),(f=n.offset().top+n.outerHeight())>u&&(u=(s=e(s).parent()).offset().top+s.outerHeight()),i=f+Math.min(Math.abs(u-f)/2,t.opts.lineBreakerOffset),a=s.outerWidth(),o=s.offset().left
else{s=n.parent()
var p=n.offset().top+n.height(),d=r.offset().top
if(p>d)return!1
i=(p+d)/2,a=s.outerWidth(),o=s.offset().left}t.opts.iframe&&(o+=t.$iframe.offset().left-t.helpers.scrollLeft(),i+=t.$iframe.offset().top-t.helpers.scrollTop()),t.$box.append(h),h.css("top",i-t.win.pageYOffset),h.css("left",o-t.win.pageXOffset),h.css("width",a),h.data("tag1",n),h.data("tag2",r),h.addClass("fr-visible").data("instance",t)}function r(e,r){var o,a,s=e.offset().top,l=e.offset().top+e.outerHeight()
if(Math.abs(l-r)<=t.opts.lineBreakerOffset||Math.abs(r-s)<=t.opts.lineBreakerOffset)if(Math.abs(l-r)<Math.abs(r-s)){for(var u=(a=e.get(0)).nextSibling;u&&u.nodeType==Node.TEXT_NODE&&0===u.textContent.length;)u=u.nextSibling
if(!u)return n(e,null),!0
if(o=i(u))return n(e,o),!0}else{if(!(a=e.get(0)).previousSibling)return n(null,e),!0
if(o=i(a.previousSibling))return n(o,e),!0}h.removeClass("fr-visible").removeData("instance")}function i(n){if(n){var r=e(n)
if(0===t.$el.find(r).length)return null
if(n.nodeType!=Node.TEXT_NODE&&r.is(t.opts.lineBreakerTags.join(",")))return r
if(r.parents(t.opts.lineBreakerTags.join(",")).length>0)return n=r.parents(t.opts.lineBreakerTags.join(",")).get(0),0!==t.$el.find(n).length&&e(n).is(t.opts.lineBreakerTags.join(","))?e(n):null}return null}function o(e,n){var r=t.doc.elementFromPoint(e,n)
return r&&!r.closest(".fr-line-breaker")&&!t.node.isElement(r)&&r!=t.$wp.get(0)&&function(e){if(void 0!==e.inFroalaWrapper)return e.inFroalaWrapper
for(var n=e;e.parentNode&&e.parentNode!==t.$wp.get(0);)e=e.parentNode
return n.inFroalaWrapper=e.parentNode==t.$wp.get(0),n.inFroalaWrapper}(r)?r:null}function a(e,n,r){for(var i=r,a=null;i<=t.opts.lineBreakerOffset&&!a;)(a=o(e,n-i))||(a=o(e,n+i)),i+=r
return a}function s(e,n,r){for(var i=null,s=100;!i&&e>t.$box.offset().left&&e<t.$box.offset().left+t.$box.outerWidth()&&s>0;)(i=o(e,n))||(i=a(e,n,5)),"left"==r?e-=t.opts.lineBreakerHorizontalOffset:e+=t.opts.lineBreakerHorizontalOffset,s-=t.opts.lineBreakerHorizontalOffset
return i}function l(e){g=null
var n=null,o=null,l=t.doc.elementFromPoint(e.pageX-t.win.pageXOffset,e.pageY-t.win.pageYOffset)
l&&("HTML"==l.tagName||"BODY"==l.tagName||t.node.isElement(l)||(l.getAttribute("class")||"").indexOf("fr-line-breaker")>=0)?((o=a(e.pageX-t.win.pageXOffset,e.pageY-t.win.pageYOffset,1))||(o=s(e.pageX-t.win.pageXOffset-t.opts.lineBreakerHorizontalOffset,e.pageY-t.win.pageYOffset,"left")),o||(o=s(e.pageX-t.win.pageXOffset+t.opts.lineBreakerHorizontalOffset,e.pageY-t.win.pageYOffset,"right")),n=i(o)):n=i(l),n?r(n,e.pageY):t.core.sameInstance(h)&&h.removeClass("fr-visible").removeData("instance")}function u(e){return!(h.hasClass("fr-visible")&&!t.core.sameInstance(h))&&(t.popups.areVisible()||t.el.querySelector(".fr-selected-cell")?(h.removeClass("fr-visible"),!0):void(!1!==m||t.edit.isDisabled()||(g&&clearTimeout(g),g=setTimeout(l,30,e))))}function c(){g&&clearTimeout(g),h.hasClass("fr-visible")&&h.removeClass("fr-visible").removeData("instance")}function f(){m=!0,c()}function p(){m=!1}function d(n){n.preventDefault()
var r=h.data("instance")||t
h.removeClass("fr-visible").removeData("instance")
var i=h.data("tag1"),o=h.data("tag2"),a=t.html.defaultTag()
null==i?a&&"TD"!=o.parent().get(0).tagName&&0===o.parents(a).length?o.before("<"+a+">"+e.FE.MARKERS+"<br></"+a+">"):o.before(e.FE.MARKERS+"<br>"):a&&"TD"!=i.parent().get(0).tagName&&0===i.parents(a).length?i.after("<"+a+">"+e.FE.MARKERS+"<br></"+a+">"):i.after(e.FE.MARKERS+"<br>"),r.selection.restore()}var h,m,g
return{_init:function(){return!!t.$wp&&(t.shared.$line_breaker||(t.shared.$line_breaker=e('<div class="fr-line-breaker"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+t.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="21" y="11" width="2" height="8"/><rect x="14" y="17" width="7" height="2"/><path d="M14.000,14.000 L14.000,22.013 L9.000,18.031 L14.000,14.000 Z"/></svg></a></div>')),h=t.shared.$line_breaker,t.events.on("shared.destroy",function(){h.html("").removeData().remove(),h=null},!0),t.events.on("destroy",function(){h.removeData("instance").removeClass("fr-visible").appendTo("body:first"),clearTimeout(g)},!0),t.events.$on(h,"mousemove",function(e){e.stopPropagation()},!0),t.events.bindClick(h,"a",d),m=!1,t.events.$on(t.$win,"mousemove",u),t.events.$on(e(t.win),"scroll",c),t.events.on("popups.show.table.edit",c),t.events.on("commands.after",c),t.events.$on(e(t.win),"mousedown",f),void t.events.$on(e(t.win),"mouseup",p))}}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{"link.edit":"[_BUTTONS_]","link.insert":"[_BUTTONS_][_INPUT_LAYER_]"}),e.extend(e.FE.DEFAULTS,{linkEditButtons:["linkOpen","linkStyle","linkEdit","linkRemove"],linkInsertButtons:["linkBack","|","linkList"],linkAttributes:{},linkAutoPrefix:"http://",linkStyles:{"fr-green":"Green","fr-strong":"Thick"},linkMultipleStyles:!0,linkConvertEmailAddress:!0,linkAlwaysBlank:!1,linkAlwaysNoFollow:!1,linkNoOpener:!0,linkNoReferrer:!0,linkList:[{text:"Froala",href:"https://froala.com",target:"_blank"},{text:"Google",href:"https://google.com",target:"_blank"},{displayText:"Facebook",href:"https://facebook.com"}],linkText:!0}),e.FE.PLUGINS.link=function(t){function n(){var n=t.image?t.image.get():null
if(!n&&t.$wp){var r=t.selection.ranges(0).commonAncestorContainer
if(r&&(r.contains&&r.contains(t.el)||!t.el.contains(r)||t.el==r)&&(r=null),r&&"A"===r.tagName)return r
var i=t.selection.element(),o=t.selection.endElement()
return"A"==i.tagName||t.node.isElement(i)||(i=e(i).parentsUntil(t.$el,"a:first").get(0)),"A"==o.tagName||t.node.isElement(o)||(o=e(o).parentsUntil(t.$el,"a:first").get(0)),o&&(o.contains&&o.contains(t.el)||!t.el.contains(o)||t.el==o)&&(o=null),i&&(i.contains&&i.contains(t.el)||!t.el.contains(i)||t.el==i)&&(i=null),o&&o==i&&"A"==o.tagName?(t.browser.msie||t.helpers.isMobile())&&(t.selection.info(i).atEnd||t.selection.info(i).atStart)?null:i:null}return"A"==t.el.tagName?t.el:n&&n.get(0).parentNode&&"A"==n.get(0).parentNode.tagName?n.get(0).parentNode:void 0}function r(){var e,n,r,i,o=t.image?t.image.get():null,a=[]
if(o)"A"==o.get(0).parentNode.tagName&&a.push(o.get(0).parentNode)
else if(t.win.getSelection){var s=t.win.getSelection()
if(s.getRangeAt&&s.rangeCount){i=t.doc.createRange()
for(var l=0;l<s.rangeCount;++l)if((n=(e=s.getRangeAt(l)).commonAncestorContainer)&&1!=n.nodeType&&(n=n.parentNode),n&&"a"==n.nodeName.toLowerCase())a.push(n)
else{r=n.getElementsByTagName("a")
for(var u=0;u<r.length;++u)i.selectNodeContents(r[u]),i.compareBoundaryPoints(e.END_TO_START,e)<1&&i.compareBoundaryPoints(e.START_TO_END,e)>-1&&a.push(r[u])}}}else if(t.doc.selection&&"Control"!=t.doc.selection.type)if("a"==(n=(e=t.doc.selection.createRange()).parentElement()).nodeName.toLowerCase())a.push(n)
else{r=n.getElementsByTagName("a"),i=t.doc.body.createTextRange()
for(var c=0;c<r.length;++c)i.moveToElementText(r[c]),i.compareEndPoints("StartToEnd",e)>-1&&i.compareEndPoints("EndToStart",e)<1&&a.push(r[c])}return a}function i(r){if(t.core.hasFocus()){if(a(),r&&"keyup"===r.type&&(r.altKey||r.which==e.FE.KEYCODE.ALT))return!0
setTimeout(function(){if(!r||r&&(1==r.which||"mouseup"!=r.type)){var i=n(),a=t.image?t.image.get():null
if(i&&!a){if(t.image){var s=t.node.contents(i)
if(1==s.length&&"IMG"==s[0].tagName){var l=t.selection.ranges(0)
return 0===l.startOffset&&0===l.endOffset?e(i).before(e.FE.MARKERS):e(i).after(e.FE.MARKERS),t.selection.restore(),!1}}r&&r.stopPropagation(),o(i)}}},t.helpers.isIOS()?100:0)}}function o(n){var r=t.popups.get("link.edit")
r||(r=s())
var i=e(n)
t.popups.isVisible("link.edit")||t.popups.refresh("link.edit"),t.popups.setContainer("link.edit",t.$sc)
var o=i.offset().left+e(n).outerWidth()/2,a=i.offset().top+i.outerHeight()
t.popups.show("link.edit",o,a,i.outerHeight())}function a(){t.popups.hide("link.edit")}function s(){var e=""
t.opts.linkEditButtons.length>=1&&("A"==t.el.tagName&&t.opts.linkEditButtons.indexOf("linkRemove")>=0&&t.opts.linkEditButtons.splice(t.opts.linkEditButtons.indexOf("linkRemove"),1),e='<div class="fr-buttons">'+t.button.buildList(t.opts.linkEditButtons)+"</div>")
var r={buttons:e},i=t.popups.create("link.edit",r)
return t.$wp&&t.events.$on(t.$wp,"scroll.link-edit",function(){n()&&t.popups.isVisible("link.edit")&&o(n())}),i}function l(){}function u(){var r=t.popups.get("link.insert"),i=n()
if(i){var o,a,s=e(i),l=r.find('input.fr-link-attr[type="text"]'),u=r.find('input.fr-link-attr[type="checkbox"]')
for(o=0;o<l.length;o++)(a=e(l[o])).val(s.attr(a.attr("name")||""))
for(u.prop("checked",!1),o=0;o<u.length;o++)a=e(u[o]),s.attr(a.attr("name"))==a.data("checked")&&a.prop("checked",!0)
r.find('input.fr-link-attr[type="text"][name="text"]').val(s.text())}else r.find('input.fr-link-attr[type="text"]').val(""),r.find('input.fr-link-attr[type="checkbox"]').prop("checked",!1),r.find('input.fr-link-attr[type="text"][name="text"]').val(t.selection.text())
r.find("input.fr-link-attr").trigger("change"),(t.image?t.image.get():null)?r.find('.fr-link-attr[name="text"]').parent().hide():r.find('.fr-link-attr[name="text"]').parent().show()}function c(e){if(e)return t.popups.onRefresh("link.insert",u),t.popups.onHide("link.insert",l),!0
var r=""
t.opts.linkInsertButtons.length>=1&&(r='<div class="fr-buttons">'+t.button.buildList(t.opts.linkInsertButtons)+"</div>")
var i="",o=0
for(var a in i='<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'+t.id+'">',i+='<div class="fr-input-line"><input id="fr-link-insert-layer-url-'+t.id+'" name="href" type="text" class="fr-link-attr" placeholder="'+t.language.translate("URL")+'" tabIndex="'+ ++o+'"></div>',t.opts.linkText&&(i+='<div class="fr-input-line"><input id="fr-link-insert-layer-text-'+t.id+'" name="text" type="text" class="fr-link-attr" placeholder="'+t.language.translate("Text")+'" tabIndex="'+ ++o+'"></div>'),t.opts.linkAttributes)if(t.opts.linkAttributes.hasOwnProperty(a)){var s=t.opts.linkAttributes[a]
i+='<div class="fr-input-line"><input name="'+a+'" type="text" class="fr-link-attr" placeholder="'+t.language.translate(s)+'" tabIndex="'+ ++o+'"></div>'}t.opts.linkAlwaysBlank||(i+='<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'+t.id+'" tabIndex="'+ ++o+'"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg></span></span><label for="fr-link-target-'+t.id+'">'+t.language.translate("Open in new tab")+"</label></div>")
var c={buttons:r,input_layer:i+='<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'+ ++o+'" type="button">'+t.language.translate("Insert")+"</button></div></div>"},f=t.popups.create("link.insert",c)
return t.$wp&&t.events.$on(t.$wp,"scroll.link-insert",function(){(t.image?t.image.get():null)&&t.popups.isVisible("link.insert")&&d(),n&&t.popups.isVisible("link.insert")&&p()}),f}function f(o,a,s){if(void 0===s&&(s={}),!1===t.events.trigger("link.beforeInsert",[o,a,s]))return!1
var l=t.image?t.image.get():null
l||"A"==t.el.tagName?"A"==t.el.tagName&&t.$el.focus():(t.selection.restore(),t.popups.hide("link.insert"))
var u=o
t.opts.linkConvertEmailAddress&&t.helpers.isEmail(o)&&!/^mailto:.*/i.test(o)&&(o="mailto:"+o)
if(""===t.opts.linkAutoPrefix||new RegExp("^("+e.FE.LinkProtocols.join("|")+"):.","i").test(o)||/^data:image.*/i.test(o)||/^(https?:|ftps?:|file:|)\/\//i.test(o)||/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(o)||["/","{","[","#","(","."].indexOf((o||"")[0])<0&&(o=t.opts.linkAutoPrefix+t.helpers.sanitizeURL(o)),o=t.helpers.sanitizeURL(o),t.opts.linkAlwaysBlank&&(s.target="_blank"),t.opts.linkAlwaysNoFollow&&(s.rel="nofollow"),"_blank"==s.target?(t.opts.linkNoOpener&&(s.rel?s.rel+=" noopener":s.rel="noopener"),t.opts.linkNoReferrer&&(s.rel?s.rel+=" noreferrer":s.rel="noreferrer")):null==s.target&&(s.rel?s.rel=s.rel.replace(/noopener/,"").replace(/noreferrer/,""):s.rel=null),a=a||"",o===t.opts.linkAutoPrefix)return t.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"),t.events.trigger("link.bad",[u]),!1
var c,f=n()
if(f)(c=e(f)).attr("href",o),a.length>0&&c.text()!=a&&!l&&c.text(a),l||c.prepend(e.FE.START_MARKER).append(e.FE.END_MARKER),c.attr(s),l||t.selection.restore()
else{l?l.wrap('<a href="'+o+'"></a>'):(t.format.remove("a"),t.selection.isCollapsed()?(a=0===a.length?u:a,t.html.insert('<a href="'+o+'">'+e.FE.START_MARKER+a.replace(/&/g,"&amp;")+e.FE.END_MARKER+"</a>"),t.selection.restore()):a.length>0&&a!=t.selection.text().replace(/\n/g,"")?(t.selection.remove(),t.html.insert('<a href="'+o+'">'+e.FE.START_MARKER+a.replace(/&/g,"&amp;")+e.FE.END_MARKER+"</a>"),t.selection.restore()):(function(){if(!t.selection.isCollapsed()){t.selection.save()
for(var n=t.$el.find(".fr-marker").addClass("fr-unprocessed").toArray();n.length;){var r=e(n.pop())
r.removeClass("fr-unprocessed")
var i=t.node.deepestParent(r.get(0))
if(i){var o=r.get(0),a="",s=""
do{o=o.parentNode,t.node.isBlock(o)||(a+=t.node.closeTagString(o),s=t.node.openTagString(o)+s)}while(o!=i)
var l=t.node.openTagString(r.get(0))+r.html()+t.node.closeTagString(r.get(0))
r.replaceWith('<span id="fr-break"></span>')
var u=i.outerHTML
u=u.replace(/<span id="fr-break"><\/span>/g,a+l+s),i.outerHTML=u}n=t.$el.find(".fr-marker.fr-unprocessed").toArray()}t.html.cleanEmptyTags(),t.selection.restore()}}(),t.format.apply("a",{href:o})))
for(var p=r(),d=0;d<p.length;d++)(c=e(p[d])).attr(s),c.removeAttr("_moz_dirty")
1==p.length&&t.$wp&&!l&&(e(p[0]).prepend(e.FE.START_MARKER).append(e.FE.END_MARKER),t.selection.restore())}if(l){var h=t.popups.get("link.insert")
h&&h.find("input:focus").blur(),t.image.edit(l)}else i()}function p(){a()
var r=n()
if(r){var i=t.popups.get("link.insert")
i||(i=c()),t.popups.isVisible("link.insert")||(t.popups.refresh("link.insert"),t.selection.save(),t.helpers.isMobile()&&(t.events.disableBlur(),t.$el.blur(),t.events.enableBlur())),t.popups.setContainer("link.insert",t.$sc)
var o=(t.image?t.image.get():null)||e(r),s=o.offset().left+o.outerWidth()/2,l=o.offset().top+o.outerHeight()
t.popups.show("link.insert",s,l,o.outerHeight())}}function d(){var e=t.image?t.image.getEl():null
if(e){var n=t.popups.get("link.insert")
t.image.hasCaption()&&(e=e.find(".fr-img-wrap")),n||(n=c()),u(),t.popups.setContainer("link.insert",t.$sc)
var r=e.offset().left+e.outerWidth()/2,i=e.offset().top+e.outerHeight()
t.popups.show("link.insert",r,i,e.outerHeight())}}return{_init:function(){t.events.on("keyup",function(t){t.which!=e.FE.KEYCODE.ESC&&i(t)}),t.events.on("window.mouseup",i),t.events.$on(t.$el,"click","a",function(e){t.edit.isDisabled()&&e.preventDefault()}),t.helpers.isMobile()&&t.events.$on(t.$doc,"selectionchange",i),c(!0),"A"==t.el.tagName&&t.$el.addClass("fr-view"),t.events.on("toolbar.esc",function(){return t.popups.isVisible("link.edit")?(t.events.disableBlur(),t.events.focus(),!1):void 0},!0)},remove:function(){var r=n(),i=t.image?t.image.get():null
return!1!==t.events.trigger("link.beforeRemove",[r])&&void(i&&r?(i.unwrap(),t.image.edit(i)):r&&(t.selection.save(),e(r).replaceWith(e(r).html()),t.selection.restore(),a()))},showInsertPopup:function(){var e=t.$tb.find('.fr-command[data-cmd="insertLink"]'),n=t.popups.get("link.insert")
if(n||(n=c()),!n.hasClass("fr-active"))if(t.popups.refresh("link.insert"),t.popups.setContainer("link.insert",t.$tb||t.$sc),e.is(":visible")){var r=e.offset().left+e.outerWidth()/2,i=e.offset().top+(t.opts.toolbarBottom?10:e.outerHeight()-10)
t.popups.show("link.insert",r,i,e.outerHeight())}else t.position.forSelection(n),t.popups.show("link.insert")},usePredefined:function(n){var r,i,o=t.opts.linkList[n],a=t.popups.get("link.insert"),s=a.find('input.fr-link-attr[type="text"]'),l=a.find('input.fr-link-attr[type="checkbox"]')
for(i=0;i<s.length;i++)o[(r=e(s[i])).attr("name")]?r.val(o[r.attr("name")]):"text"!=r.attr("name")&&r.val("")
for(i=0;i<l.length;i++)(r=e(l[i])).prop("checked",r.data("checked")==o[r.attr("name")])
t.accessibility.focusPopup(a)},insertCallback:function(){var n,r,i=t.popups.get("link.insert"),o=i.find('input.fr-link-attr[type="text"]'),a=i.find('input.fr-link-attr[type="checkbox"]'),s=(o.filter('[name="href"]').val()||"").trim(),l=o.filter('[name="text"]').val(),u={}
for(r=0;r<o.length;r++)n=e(o[r]),["href","text"].indexOf(n.attr("name"))<0&&(u[n.attr("name")]=n.val())
for(r=0;r<a.length;r++)(n=e(a[r])).is(":checked")?u[n.attr("name")]=n.data("checked"):u[n.attr("name")]=n.data("unchecked")||null
var c=t.helpers.scrollTop()
f(s,l,u),e(t.o_win).scrollTop(c)},insert:f,update:p,get:n,allSelected:r,back:function(){t.image&&t.image.get()?t.image.back():(t.events.disableBlur(),t.selection.restore(),t.events.enableBlur(),n()&&t.$wp?(t.selection.restore(),a(),i()):"A"==t.el.tagName?(t.$el.focus(),i()):(t.popups.hide("link.insert"),t.toolbar.showInline()))},imageLink:d,applyStyle:function(r,o,a){void 0===a&&(a=t.opts.linkMultipleStyles),void 0===o&&(o=t.opts.linkStyles)
var s=n()
if(!s)return!1
if(!a){var l=Object.keys(o)
l.splice(l.indexOf(r),1),e(s).removeClass(l.join(" "))}e(s).toggleClass(r),i()}}},e.FE.DefineIcon("insertLink",{NAME:"link"}),e.FE.RegisterShortcut(e.FE.KEYCODE.K,"insertLink",null,"K"),e.FE.RegisterCommand("insertLink",{title:"Insert Link",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("link.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("link.insert")):this.link.showInsertPopup()},plugin:"link"}),e.FE.DefineIcon("linkOpen",{NAME:"external-link"}),e.FE.RegisterCommand("linkOpen",{title:"Open Link",undo:!1,refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},callback:function(){var e=this.link.get()
e&&(this.o_win.open(e.href,"_blank","noopener"),this.popups.hide("link.edit"))},plugin:"link"}),e.FE.DefineIcon("linkEdit",{NAME:"edit"}),e.FE.RegisterCommand("linkEdit",{title:"Edit Link",undo:!1,refreshAfterCallback:!1,popup:!0,callback:function(){this.link.update()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),e.FE.DefineIcon("linkRemove",{NAME:"unlink"}),e.FE.RegisterCommand("linkRemove",{title:"Unlink",callback:function(){this.link.remove()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),e.FE.DefineIcon("linkBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("linkBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.link.back()},refresh:function(e){var t=this.link.get()&&this.doc.hasFocus();(this.image?this.image.get():null)||t||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))},plugin:"link"}),e.FE.DefineIcon("linkList",{NAME:"search"}),e.FE.RegisterCommand("linkList",{title:"Choose Link",type:"dropdown",focus:!1,undo:!1,refreshAfterCallback:!1,html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkList,n=0;n<t.length;n++)e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'+n+'">'+(t[n].displayText||t[n].text)+"</a></li>"
return e+"</ul>"},callback:function(e,t){this.link.usePredefined(t)},plugin:"link"}),e.FE.RegisterCommand("linkInsert",{focus:!1,refreshAfterCallback:!1,callback:function(){this.link.insertCallback()},refresh:function(e){this.link.get()?e.text(this.language.translate("Update")):e.text(this.language.translate("Insert"))},plugin:"link"}),e.FE.DefineIcon("imageLink",{NAME:"link"}),e.FE.RegisterCommand("imageLink",{title:"Insert Link",undo:!1,focus:!1,popup:!0,callback:function(){this.link.imageLink()},refresh:function(e){var t
this.link.get()?((t=e.prev()).hasClass("fr-separator")&&t.removeClass("fr-hidden"),e.addClass("fr-hidden")):((t=e.prev()).hasClass("fr-separator")&&t.addClass("fr-hidden"),e.removeClass("fr-hidden"))},plugin:"link"}),e.FE.DefineIcon("linkStyle",{NAME:"magic"}),e.FE.RegisterCommand("linkStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkStyles
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'+n+'">'+this.language.translate(t[n])+"</a></li>")
return e+"</ul>"},callback:function(e,t){this.link.applyStyle(t)},refreshOnShow:function(t,n){var r=this.link.get()
if(r){var i=e(r)
n.find(".fr-command").each(function(){var t=e(this).data("param1"),n=i.hasClass(t)
e(this).toggleClass("fr-active",n).attr("aria-selected",n)})}},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.FE.PLUGINS.lists=function(t){function n(e){return'<span class="fr-open-'+e.toLowerCase()+'"></span>'}function r(e){return'<span class="fr-close-'+e.toLowerCase()+'"></span>'}function i(n,r){(function(n,r){for(var i=[],o=0;o<n.length;o++){var a=n[o].parentNode
"LI"==n[o].tagName&&a.tagName!=r&&i.indexOf(a)<0&&i.push(a)}for(o=i.length-1;o>=0;o--){var s=e(i[o])
s.replaceWith("<"+r.toLowerCase()+" "+t.node.attributes(s.get(0))+">"+s.html()+"</"+r.toLowerCase()+">")}})(n,r)
var i,o=t.html.defaultTag(),a=null
n.length&&(i="rtl"==t.opts.direction||"rtl"==e(n[0]).css("direction")?"margin-right":"margin-left")
for(var s=0;s<n.length;s++)if("LI"!=n[s].tagName){var l=t.helpers.getPX(e(n[s]).css(i))||0
n[s].style.marginLeft=null,null===a&&(a=l)
var u=a>0?"<"+r+' style="'+i+": "+a+'px;">':"<"+r+">",c="</"+r+">"
for(l-=a;l/t.opts.indentMargin>0;)u+="<"+r+">",c+=c,l-=t.opts.indentMargin
o&&n[s].tagName.toLowerCase()==o?e(n[s]).replaceWith(u+"<li"+t.node.attributes(n[s])+">"+e(n[s]).html()+"</li>"+c):e(n[s]).wrap(u+"<li></li>"+c)}t.clean.lists()}function o(i){var o,a
for(o=i.length-1;o>=0;o--)for(a=o-1;a>=0;a--)if(e(i[a]).find(i[o]).length||i[a]==i[o]){i.splice(o,1)
break}var s=[]
for(o=0;o<i.length;o++){var l=e(i[o]),u=i[o].parentNode,c=l.attr("class")
if(l.before(r(u.tagName)),"LI"==u.parentNode.tagName)l.before(r("LI")),l.after(n("LI"))
else{var f=""
c&&(f+=' class="'+c+'"')
var p="rtl"==t.opts.direction||"rtl"==l.css("direction")?"margin-right":"margin-left"
t.helpers.getPX(e(u).css(p))&&(e(u).attr("style")||"").indexOf(p+":")>=0&&(f+=' style="'+p+":"+t.helpers.getPX(e(u).css(p))+'px;"'),t.html.defaultTag()&&0===l.find(t.html.blockTagsQuery()).length&&l.wrapInner("<"+t.html.defaultTag()+f+"></"+t.html.defaultTag()+">"),t.node.isEmpty(l.get(0),!0)||0!==l.find(t.html.blockTagsQuery()).length||l.append("<br>"),l.append(n("LI")),l.prepend(r("LI"))}l.after(n(u.tagName)),"LI"==u.parentNode.tagName&&(u=u.parentNode.parentNode),s.indexOf(u)<0&&s.push(u)}for(o=0;o<s.length;o++){var d=e(s[o]),h=d.html()
h=(h=h.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>")).replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),d.replaceWith(t.node.openTagString(d.get(0))+h+t.node.closeTagString(d.get(0)))}t.$el.find("li:empty").remove(),t.$el.find("ul:empty, ol:empty").remove(),t.clean.lists(),t.html.wrap()}function a(n){t.selection.save()
for(var r=0;r<n.length;r++){var i=n[r].previousSibling
if(i){var o=e(n[r]).find("> ul, > ol").last().get(0)
if(o){for(var a=e("<li>").prependTo(e(o)),s=t.node.contents(n[r])[0];s&&!t.node.isList(s);){var l=s.nextSibling
a.append(s),s=l}e(i).append(e(o)),e(n[r]).remove()}else{var u=e(i).find("> ul, > ol").last().get(0)
if(u)e(u).append(e(n[r]))
else{var c=e("<"+n[r].parentNode.tagName+">")
e(i).append(c),c.append(e(n[r]))}}}}t.clean.lists(),t.selection.restore()}function s(e){t.selection.save(),o(e),t.selection.restore()}function l(e){if("indent"==e||"outdent"==e){for(var n=!1,r=t.selection.blocks(),i=[],o=0;o<r.length;o++)"LI"==r[o].tagName?(n=!0,i.push(r[o])):"LI"==r[o].parentNode.tagName&&(n=!0,i.push(r[o].parentNode))
n&&("indent"==e?a(i):s(i))}}return{_init:function(){t.events.on("commands.after",l),t.events.on("keydown",function(n){if(n.which==e.FE.KEYCODE.TAB){for(var r=t.selection.blocks(),i=[],o=0;o<r.length;o++)"LI"==r[o].tagName?i.push(r[o]):"LI"==r[o].parentNode.tagName&&i.push(r[o].parentNode)
if(i.length>1||i.length&&(t.selection.info(i[0]).atStart||t.node.isEmpty(i[0])))return n.preventDefault(),n.stopPropagation(),n.shiftKey?s(i):a(i),!1}},!0)},format:function(e){t.selection.save(),t.html.wrap(!0,!0,!0,!0),t.selection.restore()
for(var n=t.selection.blocks(),r=0;r<n.length;r++)"LI"!=n[r].tagName&&"LI"==n[r].parentNode.tagName&&(n[r]=n[r].parentNode)
t.selection.save(),function(e,t){for(var n=!0,r=0;r<e.length;r++){if("LI"!=e[r].tagName)return!1
e[r].parentNode.tagName!=t&&(n=!1)}return n}(n,e)?o(n):i(n,e),t.html.unwrap(),t.selection.restore()},refresh:function(n,r){var i=e(t.selection.element())
if(i.get(0)!=t.el){var o=i.get(0);(o="LI"!=o.tagName&&o.firstElementChild&&"LI"!=o.firstElementChild.tagName?i.parents("li").get(0):"LI"==o.tagName||o.firstElementChild?o.firstElementChild&&"LI"==o.firstElementChild.tagName?i.get(0).firstChild:i.get(0):i.parents("li").get(0))&&o.parentNode.tagName==r&&t.el.contains(o.parentNode)&&n.addClass("fr-active")}}}},e.FE.RegisterCommand("formatUL",{title:"Unordered List",refresh:function(e){this.lists.refresh(e,"UL")},callback:function(){this.lists.format("UL")},plugin:"lists"}),e.FE.RegisterCommand("formatOL",{title:"Ordered List",refresh:function(e){this.lists.refresh(e,"OL")},callback:function(){this.lists.format("OL")},plugin:"lists"}),e.FE.DefineIcon("formatUL",{NAME:"list-ul"}),e.FE.DefineIcon("formatOL",{NAME:"list-ol"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1}),e.FE.PLUGINS.paragraphFormat=function(t){function n(n,r){var i=t.html.defaultTag()
if(r&&r.toLowerCase()!=i)if(n.find("ul, ol").length>0){var o=e("<"+r+">")
n.prepend(o)
for(var a=t.node.contents(n.get(0))[0];a&&["UL","OL"].indexOf(a.tagName)<0;){var s=a.nextSibling
o.append(a),a=s}}else n.html("<"+r+">"+n.html()+"</"+r+">")}function r(n,r){var i=t.html.defaultTag()
r&&r.toLowerCase()!=i||(r='div class="fr-temp-div"'),n.replaceWith(e("<"+r+">").html(n.html()))}function i(n,r){var i=t.html.defaultTag()
r||(r='div class="fr-temp-div"'+(t.node.isEmpty(n.get(0),!0)?' data-empty="true"':"")),r.toLowerCase()==i?(t.node.isEmpty(n.get(0),!0)||n.append("<br/>"),n.replaceWith(n.html())):n.replaceWith(e("<"+r+">").html(n.html()))}function o(n,r){r||(r='div class="fr-temp-div"'+(t.node.isEmpty(n.get(0),!0)?' data-empty="true"':"")),n.replaceWith(e("<"+r+" "+t.node.attributes(n.get(0))+">").html(n.html()).removeAttr("data-empty"))}return{apply:function(a){"N"==a&&(a=t.html.defaultTag()),t.selection.save(),t.html.wrap(!0,!0,!0,!0,!0),t.selection.restore()
var s=t.selection.blocks()
t.selection.save(),t.$el.find("pre").attr("skip",!0)
for(var l=0;l<s.length;l++)if(s[l].tagName!=a&&!t.node.isList(s[l])){var u=e(s[l])
"LI"==s[l].tagName?n(u,a):"LI"==s[l].parentNode.tagName&&s[l]?r(u,a):["TD","TH"].indexOf(s[l].parentNode.tagName)>=0?i(u,a):o(u,a)}t.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){e(this).prev().append("<br>"+e(this).html()),e(this).remove()}),t.$el.find("pre").removeAttr("skip"),t.html.unwrap(),t.selection.restore()},refreshOnShow:function(e,n){var r=t.selection.blocks()
if(r.length){var i=r[0],o="N",a=t.html.defaultTag()
i.tagName.toLowerCase()!=a&&i!=t.el&&(o=i.tagName),n.find('.fr-command[data-param1="'+o+'"]').addClass("fr-active").attr("aria-selected",!0)}else n.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected",!0)},refresh:function(e){if(t.opts.paragraphFormatSelection){var n=t.selection.blocks()
if(n.length){var r=n[0],i="N",o=t.html.defaultTag()
r.tagName.toLowerCase()!=o&&r!=t.el&&(i=r.tagName),["LI","TD","TH"].indexOf(i)>=0&&(i="N"),e.find("> span").text(t.language.translate(t.opts.paragraphFormat[i]))}else e.find("> span").text(t.language.translate(t.opts.paragraphFormat.N))}}}},e.FE.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(e){return e.opts.paragraphFormatSelection},defaultSelection:"Normal",displaySelectionWidth:100,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.paragraphFormat
for(var n in t)if(t.hasOwnProperty(n)){var r=this.shortcuts.get("paragraphFormat."+n)
r=r?'<span class="fr-shortcut">'+r+"</span>":"",e+='<li role="presentation"><'+("N"==n?this.html.defaultTag()||"DIV":n)+' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></"+("N"==n?this.html.defaultTag()||"DIV":n)+"></li>"}return e+"</ul>"},title:"Paragraph Format",callback:function(e,t){this.paragraphFormat.apply(t)},refresh:function(e){this.paragraphFormat.refresh(e)},refreshOnShow:function(e,t){this.paragraphFormat.refreshOnShow(e,t)},plugin:"paragraphFormat"}),e.FE.DefineIcon("paragraphFormat",{NAME:"paragraph"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{specialCharactersSets:[{title:"Latin",list:[{char:"&iexcl;",desc:"INVERTED EXCLAMATION MARK"},{char:"&cent;",desc:"CENT SIGN"},{char:"&pound;",desc:"POUND SIGN"},{char:"&curren;",desc:"CURRENCY SIGN"},{char:"&yen;",desc:"YEN SIGN"},{char:"&brvbar;",desc:"BROKEN BAR"},{char:"&sect;",desc:"SECTION SIGN"},{char:"&uml;",desc:"DIAERESIS"},{char:"&copy;",desc:"COPYRIGHT SIGN"},{char:"&trade;",desc:"TRADEMARK SIGN"},{char:"&ordf;",desc:"FEMININE ORDINAL INDICATOR"},{char:"&laquo;",desc:"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&not;",desc:"NOT SIGN"},{char:"&reg;",desc:"REGISTERED SIGN"},{char:"&macr;",desc:"MACRON"},{char:"&deg;",desc:"DEGREE SIGN"},{char:"&plusmn;",desc:"PLUS-MINUS SIGN"},{char:"&sup2;",desc:"SUPERSCRIPT TWO"},{char:"&sup3;",desc:"SUPERSCRIPT THREE"},{char:"&acute;",desc:"ACUTE ACCENT"},{char:"&micro;",desc:"MICRO SIGN"},{char:"&para;",desc:"PILCROW SIGN"},{char:"&middot;",desc:"MIDDLE DOT"},{char:"&cedil;",desc:"CEDILLA"},{char:"&sup1;",desc:"SUPERSCRIPT ONE"},{char:"&ordm;",desc:"MASCULINE ORDINAL INDICATOR"},{char:"&raquo;",desc:"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"},{char:"&frac14;",desc:"VULGAR FRACTION ONE QUARTER"},{char:"&frac12;",desc:"VULGAR FRACTION ONE HALF"},{char:"&frac34;",desc:"VULGAR FRACTION THREE QUARTERS"},{char:"&iquest;",desc:"INVERTED QUESTION MARK"},{char:"&Agrave;",desc:"LATIN CAPITAL LETTER A WITH GRAVE"},{char:"&Aacute;",desc:"LATIN CAPITAL LETTER A WITH ACUTE"},{char:"&Acirc;",desc:"LATIN CAPITAL LETTER A WITH CIRCUMFLEX"},{char:"&Atilde;",desc:"LATIN CAPITAL LETTER A WITH TILDE"},{char:"&Auml;",desc:"LATIN CAPITAL LETTER A WITH DIAERESIS "},{char:"&Aring;",desc:"LATIN CAPITAL LETTER A WITH RING ABOVE"},{char:"&AElig;",desc:"LATIN CAPITAL LETTER AE"},{char:"&Ccedil;",desc:"LATIN CAPITAL LETTER C WITH CEDILLA"},{char:"&Egrave;",desc:"LATIN CAPITAL LETTER E WITH GRAVE"},{char:"&Eacute;",desc:"LATIN CAPITAL LETTER E WITH ACUTE"},{char:"&Ecirc;",desc:"LATIN CAPITAL LETTER E WITH CIRCUMFLEX"},{char:"&Euml;",desc:"LATIN CAPITAL LETTER E WITH DIAERESIS"},{char:"&Igrave;",desc:"LATIN CAPITAL LETTER I WITH GRAVE"},{char:"&Iacute;",desc:"LATIN CAPITAL LETTER I WITH ACUTE"},{char:"&Icirc;",desc:"LATIN CAPITAL LETTER I WITH CIRCUMFLEX"},{char:"&Iuml;",desc:"LATIN CAPITAL LETTER I WITH DIAERESIS"},{char:"&ETH;",desc:"LATIN CAPITAL LETTER ETH"},{char:"&Ntilde;",desc:"LATIN CAPITAL LETTER N WITH TILDE"},{char:"&Ograve;",desc:"LATIN CAPITAL LETTER O WITH GRAVE"},{char:"&Oacute;",desc:"LATIN CAPITAL LETTER O WITH ACUTE"},{char:"&Ocirc;",desc:"LATIN CAPITAL LETTER O WITH CIRCUMFLEX"},{char:"&Otilde;",desc:"LATIN CAPITAL LETTER O WITH TILDE"},{char:"&Ouml;",desc:"LATIN CAPITAL LETTER O WITH DIAERESIS"},{char:"&times;",desc:"MULTIPLICATION SIGN"},{char:"&Oslash;",desc:"LATIN CAPITAL LETTER O WITH STROKE"},{char:"&Ugrave;",desc:"LATIN CAPITAL LETTER U WITH GRAVE"},{char:"&Uacute;",desc:"LATIN CAPITAL LETTER U WITH ACUTE"},{char:"&Ucirc;",desc:"LATIN CAPITAL LETTER U WITH CIRCUMFLEX"},{char:"&Uuml;",desc:"LATIN CAPITAL LETTER U WITH DIAERESIS"},{char:"&Yacute;",desc:"LATIN CAPITAL LETTER Y WITH ACUTE"},{char:"&THORN;",desc:"LATIN CAPITAL LETTER THORN"},{char:"&szlig;",desc:"LATIN SMALL LETTER SHARP S"},{char:"&agrave;",desc:"LATIN SMALL LETTER A WITH GRAVE"},{char:"&aacute;",desc:"LATIN SMALL LETTER A WITH ACUTE "},{char:"&acirc;",desc:"LATIN SMALL LETTER A WITH CIRCUMFLEX"},{char:"&atilde;",desc:"LATIN SMALL LETTER A WITH TILDE"},{char:"&auml;",desc:"LATIN SMALL LETTER A WITH DIAERESIS"},{char:"&aring;",desc:"LATIN SMALL LETTER A WITH RING ABOVE"},{char:"&aelig;",desc:"LATIN SMALL LETTER AE"},{char:"&ccedil;",desc:"LATIN SMALL LETTER C WITH CEDILLA"},{char:"&egrave;",desc:"LATIN SMALL LETTER E WITH GRAVE"},{char:"&eacute;",desc:"LATIN SMALL LETTER E WITH ACUTE"},{char:"&ecirc;",desc:"LATIN SMALL LETTER E WITH CIRCUMFLEX"},{char:"&euml;",desc:"LATIN SMALL LETTER E WITH DIAERESIS"},{char:"&igrave;",desc:"LATIN SMALL LETTER I WITH GRAVE"},{char:"&iacute;",desc:"LATIN SMALL LETTER I WITH ACUTE"},{char:"&icirc;",desc:"LATIN SMALL LETTER I WITH CIRCUMFLEX"},{char:"&iuml;",desc:"LATIN SMALL LETTER I WITH DIAERESIS"},{char:"&eth;",desc:"LATIN SMALL LETTER ETH"},{char:"&ntilde;",desc:"LATIN SMALL LETTER N WITH TILDE"},{char:"&ograve;",desc:"LATIN SMALL LETTER O WITH GRAVE"},{char:"&oacute;",desc:"LATIN SMALL LETTER O WITH ACUTE"},{char:"&ocirc;",desc:"LATIN SMALL LETTER O WITH CIRCUMFLEX"},{char:"&otilde;",desc:"LATIN SMALL LETTER O WITH TILDE"},{char:"&ouml;",desc:"LATIN SMALL LETTER O WITH DIAERESIS"},{char:"&divide;",desc:"DIVISION SIGN"},{char:"&oslash;",desc:"LATIN SMALL LETTER O WITH STROKE"},{char:"&ugrave;",desc:"LATIN SMALL LETTER U WITH GRAVE"},{char:"&uacute;",desc:"LATIN SMALL LETTER U WITH ACUTE"},{char:"&ucirc;",desc:"LATIN SMALL LETTER U WITH CIRCUMFLEX"},{char:"&uuml;",desc:"LATIN SMALL LETTER U WITH DIAERESIS"},{char:"&yacute;",desc:"LATIN SMALL LETTER Y WITH ACUTE"},{char:"&thorn;",desc:"LATIN SMALL LETTER THORN"},{char:"&yuml;",desc:"LATIN SMALL LETTER Y WITH DIAERESIS"}]},{title:"Greek",list:[{char:"&Alpha;",desc:"GREEK CAPITAL LETTER ALPHA"},{char:"&Beta;",desc:"GREEK CAPITAL LETTER BETA"},{char:"&Gamma;",desc:"GREEK CAPITAL LETTER GAMMA"},{char:"&Delta;",desc:"GREEK CAPITAL LETTER DELTA"},{char:"&Epsilon;",desc:"GREEK CAPITAL LETTER EPSILON"},{char:"&Zeta;",desc:"GREEK CAPITAL LETTER ZETA"},{char:"&Eta;",desc:"GREEK CAPITAL LETTER ETA"},{char:"&Theta;",desc:"GREEK CAPITAL LETTER THETA"},{char:"&Iota;",desc:"GREEK CAPITAL LETTER IOTA"},{char:"&Kappa;",desc:"GREEK CAPITAL LETTER KAPPA"},{char:"&Lambda;",desc:"GREEK CAPITAL LETTER LAMBDA"},{char:"&Mu;",desc:"GREEK CAPITAL LETTER MU"},{char:"&Nu;",desc:"GREEK CAPITAL LETTER NU"},{char:"&Xi;",desc:"GREEK CAPITAL LETTER XI"},{char:"&Omicron;",desc:"GREEK CAPITAL LETTER OMICRON"},{char:"&Pi;",desc:"GREEK CAPITAL LETTER PI"},{char:"&Rho;",desc:"GREEK CAPITAL LETTER RHO"},{char:"&Sigma;",desc:"GREEK CAPITAL LETTER SIGMA"},{char:"&Tau;",desc:"GREEK CAPITAL LETTER TAU"},{char:"&Upsilon;",desc:"GREEK CAPITAL LETTER UPSILON"},{char:"&Phi;",desc:"GREEK CAPITAL LETTER PHI"},{char:"&Chi;",desc:"GREEK CAPITAL LETTER CHI"},{char:"&Psi;",desc:"GREEK CAPITAL LETTER PSI"},{char:"&Omega;",desc:"GREEK CAPITAL LETTER OMEGA"},{char:"&alpha;",desc:"GREEK SMALL LETTER ALPHA"},{char:"&beta;",desc:"GREEK SMALL LETTER BETA"},{char:"&gamma;",desc:"GREEK SMALL LETTER GAMMA"},{char:"&delta;",desc:"GREEK SMALL LETTER DELTA"},{char:"&epsilon;",desc:"GREEK SMALL LETTER EPSILON"},{char:"&zeta;",desc:"GREEK SMALL LETTER ZETA"},{char:"&eta;",desc:"GREEK SMALL LETTER ETA"},{char:"&theta;",desc:"GREEK SMALL LETTER THETA"},{char:"&iota;",desc:"GREEK SMALL LETTER IOTA"},{char:"&kappa;",desc:"GREEK SMALL LETTER KAPPA"},{char:"&lambda;",desc:"GREEK SMALL LETTER LAMBDA"},{char:"&mu;",desc:"GREEK SMALL LETTER MU"},{char:"&nu;",desc:"GREEK SMALL LETTER NU"},{char:"&xi;",desc:"GREEK SMALL LETTER XI"},{char:"&omicron;",desc:"GREEK SMALL LETTER OMICRON"},{char:"&pi;",desc:"GREEK SMALL LETTER PI"},{char:"&rho;",desc:"GREEK SMALL LETTER RHO"},{char:"&sigmaf;",desc:"GREEK SMALL LETTER FINAL SIGMA"},{char:"&sigma;",desc:"GREEK SMALL LETTER SIGMA"},{char:"&tau;",desc:"GREEK SMALL LETTER TAU"},{char:"&upsilon;",desc:"GREEK SMALL LETTER UPSILON"},{char:"&phi;",desc:"GREEK SMALL LETTER PHI"},{char:"&chi;",desc:"GREEK SMALL LETTER CHI"},{char:"&psi;",desc:"GREEK SMALL LETTER PSI"},{char:"&omega;",desc:"GREEK SMALL LETTER OMEGA"},{char:"&thetasym;",desc:"GREEK THETA SYMBOL"},{char:"&upsih;",desc:"GREEK UPSILON WITH HOOK SYMBOL"},{char:"&straightphi;",desc:"GREEK PHI SYMBOL"},{char:"&piv;",desc:"GREEK PI SYMBOL"},{char:"&Gammad;",desc:"GREEK LETTER DIGAMMA"},{char:"&gammad;",desc:"GREEK SMALL LETTER DIGAMMA"},{char:"&varkappa;",desc:"GREEK KAPPA SYMBOL"},{char:"&varrho;",desc:"GREEK RHO SYMBOL"},{char:"&straightepsilon;",desc:"GREEK LUNATE EPSILON SYMBOL"},{char:"&backepsilon;",desc:"GREEK REVERSED LUNATE EPSILON SYMBOL"}]},{title:"Cyrillic",list:[{char:"&#x400",desc:"CYRILLIC CAPITAL LETTER IE WITH GRAVE"},{char:"&#x401",desc:"CYRILLIC CAPITAL LETTER IO"},{char:"&#x402",desc:"CYRILLIC CAPITAL LETTER DJE"},{char:"&#x403",desc:"CYRILLIC CAPITAL LETTER GJE"},{char:"&#x404",desc:"CYRILLIC CAPITAL LETTER UKRAINIAN IE"},{char:"&#x405",desc:"CYRILLIC CAPITAL LETTER DZE"},{char:"&#x406",desc:"CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x407",desc:"CYRILLIC CAPITAL LETTER YI"},{char:"&#x408",desc:"CYRILLIC CAPITAL LETTER JE"},{char:"&#x409",desc:"CYRILLIC CAPITAL LETTER LJE"},{char:"&#x40A",desc:"CYRILLIC CAPITAL LETTER NJE"},{char:"&#x40B",desc:"CYRILLIC CAPITAL LETTER TSHE"},{char:"&#x40C",desc:"CYRILLIC CAPITAL LETTER KJE"},{char:"&#x40D",desc:"CYRILLIC CAPITAL LETTER I WITH GRAVE"},{char:"&#x40E",desc:"CYRILLIC CAPITAL LETTER SHORT U"},{char:"&#x40F",desc:"CYRILLIC CAPITAL LETTER DZHE"},{char:"&#x410",desc:"CYRILLIC CAPITAL LETTER A"},{char:"&#x411",desc:"CYRILLIC CAPITAL LETTER BE"},{char:"&#x412",desc:"CYRILLIC CAPITAL LETTER VE"},{char:"&#x413",desc:"CYRILLIC CAPITAL LETTER GHE"},{char:"&#x414",desc:"CYRILLIC CAPITAL LETTER DE"},{char:"&#x415",desc:"CYRILLIC CAPITAL LETTER IE"},{char:"&#x416",desc:"CYRILLIC CAPITAL LETTER ZHE"},{char:"&#x417",desc:"CYRILLIC CAPITAL LETTER ZE"},{char:"&#x418",desc:"CYRILLIC CAPITAL LETTER I"},{char:"&#x419",desc:"CYRILLIC CAPITAL LETTER SHORT I"},{char:"&#x41A",desc:"CYRILLIC CAPITAL LETTER KA"},{char:"&#x41B",desc:"CYRILLIC CAPITAL LETTER EL"},{char:"&#x41C",desc:"CYRILLIC CAPITAL LETTER EM"},{char:"&#x41D",desc:"CYRILLIC CAPITAL LETTER EN"},{char:"&#x41E",desc:"CYRILLIC CAPITAL LETTER O"},{char:"&#x41F",desc:"CYRILLIC CAPITAL LETTER PE"},{char:"&#x420",desc:"CYRILLIC CAPITAL LETTER ER"},{char:"&#x421",desc:"CYRILLIC CAPITAL LETTER ES"},{char:"&#x422",desc:"CYRILLIC CAPITAL LETTER TE"},{char:"&#x423",desc:"CYRILLIC CAPITAL LETTER U"},{char:"&#x424",desc:"CYRILLIC CAPITAL LETTER EF"},{char:"&#x425",desc:"CYRILLIC CAPITAL LETTER HA"},{char:"&#x426",desc:"CYRILLIC CAPITAL LETTER TSE"},{char:"&#x427",desc:"CYRILLIC CAPITAL LETTER CHE"},{char:"&#x428",desc:"CYRILLIC CAPITAL LETTER SHA"},{char:"&#x429",desc:"CYRILLIC CAPITAL LETTER SHCHA"},{char:"&#x42A",desc:"CYRILLIC CAPITAL LETTER HARD SIGN"},{char:"&#x42B",desc:"CYRILLIC CAPITAL LETTER YERU"},{char:"&#x42C",desc:"CYRILLIC CAPITAL LETTER SOFT SIGN"},{char:"&#x42D",desc:"CYRILLIC CAPITAL LETTER E"},{char:"&#x42E",desc:"CYRILLIC CAPITAL LETTER YU"},{char:"&#x42F",desc:"CYRILLIC CAPITAL LETTER YA"},{char:"&#x430",desc:"CYRILLIC SMALL LETTER A"},{char:"&#x431",desc:"CYRILLIC SMALL LETTER BE"},{char:"&#x432",desc:"CYRILLIC SMALL LETTER VE"},{char:"&#x433",desc:"CYRILLIC SMALL LETTER GHE"},{char:"&#x434",desc:"CYRILLIC SMALL LETTER DE"},{char:"&#x435",desc:"CYRILLIC SMALL LETTER IE"},{char:"&#x436",desc:"CYRILLIC SMALL LETTER ZHE"},{char:"&#x437",desc:"CYRILLIC SMALL LETTER ZE"},{char:"&#x438",desc:"CYRILLIC SMALL LETTER I"},{char:"&#x439",desc:"CYRILLIC SMALL LETTER SHORT I"},{char:"&#x43A",desc:"CYRILLIC SMALL LETTER KA"},{char:"&#x43B",desc:"CYRILLIC SMALL LETTER EL"},{char:"&#x43C",desc:"CYRILLIC SMALL LETTER EM"},{char:"&#x43D",desc:"CYRILLIC SMALL LETTER EN"},{char:"&#x43E",desc:"CYRILLIC SMALL LETTER O"},{char:"&#x43F",desc:"CYRILLIC SMALL LETTER PE"},{char:"&#x440",desc:"CYRILLIC SMALL LETTER ER"},{char:"&#x441",desc:"CYRILLIC SMALL LETTER ES"},{char:"&#x442",desc:"CYRILLIC SMALL LETTER TE"},{char:"&#x443",desc:"CYRILLIC SMALL LETTER U"},{char:"&#x444",desc:"CYRILLIC SMALL LETTER EF"},{char:"&#x445",desc:"CYRILLIC SMALL LETTER HA"},{char:"&#x446",desc:"CYRILLIC SMALL LETTER TSE"},{char:"&#x447",desc:"CYRILLIC SMALL LETTER CHE"},{char:"&#x448",desc:"CYRILLIC SMALL LETTER SHA"},{char:"&#x449",desc:"CYRILLIC SMALL LETTER SHCHA"},{char:"&#x44A",desc:"CYRILLIC SMALL LETTER HARD SIGN"},{char:"&#x44B",desc:"CYRILLIC SMALL LETTER YERU"},{char:"&#x44C",desc:"CYRILLIC SMALL LETTER SOFT SIGN"},{char:"&#x44D",desc:"CYRILLIC SMALL LETTER E"},{char:"&#x44E",desc:"CYRILLIC SMALL LETTER YU"},{char:"&#x44F",desc:"CYRILLIC SMALL LETTER YA"},{char:"&#x450",desc:"CYRILLIC SMALL LETTER IE WITH GRAVE"},{char:"&#x451",desc:"CYRILLIC SMALL LETTER IO"},{char:"&#x452",desc:"CYRILLIC SMALL LETTER DJE"},{char:"&#x453",desc:"CYRILLIC SMALL LETTER GJE"},{char:"&#x454",desc:"CYRILLIC SMALL LETTER UKRAINIAN IE"},{char:"&#x455",desc:"CYRILLIC SMALL LETTER DZE"},{char:"&#x456",desc:"CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I"},{char:"&#x457",desc:"CYRILLIC SMALL LETTER YI"},{char:"&#x458",desc:"CYRILLIC SMALL LETTER JE"},{char:"&#x459",desc:"CYRILLIC SMALL LETTER LJE"},{char:"&#x45A",desc:"CYRILLIC SMALL LETTER NJE"},{char:"&#x45B",desc:"CYRILLIC SMALL LETTER TSHE"},{char:"&#x45C",desc:"CYRILLIC SMALL LETTER KJE"},{char:"&#x45D",desc:"CYRILLIC SMALL LETTER I WITH GRAVE"},{char:"&#x45E",desc:"CYRILLIC SMALL LETTER SHORT U"},{char:"&#x45F",desc:"CYRILLIC SMALL LETTER DZHE"}]},{title:"Punctuation",list:[{char:"&ndash;",desc:"EN DASH"},{char:"&mdash;",desc:"EM DASH"},{char:"&lsquo;",desc:"LEFT SINGLE QUOTATION MARK"},{char:"&rsquo;",desc:"RIGHT SINGLE QUOTATION MARK"},{char:"&sbquo;",desc:"SINGLE LOW-9 QUOTATION MARK"},{char:"&ldquo;",desc:"LEFT DOUBLE QUOTATION MARK"},{char:"&rdquo;",desc:"RIGHT DOUBLE QUOTATION MARK"},{char:"&bdquo;",desc:"DOUBLE LOW-9 QUOTATION MARK"},{char:"&dagger;",desc:"DAGGER"},{char:"&Dagger;",desc:"DOUBLE DAGGER"},{char:"&bull;",desc:"BULLET"},{char:"&hellip;",desc:"HORIZONTAL ELLIPSIS"},{char:"&permil;",desc:"PER MILLE SIGN"},{char:"&prime;",desc:"PRIME"},{char:"&Prime;",desc:"DOUBLE PRIME"},{char:"&lsaquo;",desc:"SINGLE LEFT-POINTING ANGLE QUOTATION MARK"},{char:"&rsaquo;",desc:"SINGLE RIGHT-POINTING ANGLE QUOTATION MARK"},{char:"&oline;",desc:"OVERLINE"},{char:"&frasl;",desc:"FRACTION SLASH"}]},{title:"Currency",list:[{char:"&#x20A0",desc:"EURO-CURRENCY SIGN"},{char:"&#x20A1",desc:"COLON SIGN"},{char:"&#x20A2",desc:"CRUZEIRO SIGN"},{char:"&#x20A3",desc:"FRENCH FRANC SIGN"},{char:"&#x20A4",desc:"LIRA SIGN"},{char:"&#x20A5",desc:"MILL SIGN"},{char:"&#x20A6",desc:"NAIRA SIGN"},{char:"&#x20A7",desc:"PESETA SIGN"},{char:"&#x20A8",desc:"RUPEE SIGN"},{char:"&#x20A9",desc:"WON SIGN"},{char:"&#x20AA",desc:"NEW SHEQEL SIGN"},{char:"&#x20AB",desc:"DONG SIGN"},{char:"&#x20AC",desc:"EURO SIGN"},{char:"&#x20AD",desc:"KIP SIGN"},{char:"&#x20AE",desc:"TUGRIK SIGN"},{char:"&#x20AF",desc:"DRACHMA SIGN"},{char:"&#x20B0",desc:"GERMAN PENNY SYMBOL"},{char:"&#x20B1",desc:"PESO SIGN"},{char:"&#x20B2",desc:"GUARANI SIGN"},{char:"&#x20B3",desc:"AUSTRAL SIGN"},{char:"&#x20B4",desc:"HRYVNIA SIGN"},{char:"&#x20B5",desc:"CEDI SIGN"},{char:"&#x20B6",desc:"LIVRE TOURNOIS SIGN"},{char:"&#x20B7",desc:"SPESMILO SIGN"},{char:"&#x20B8",desc:"TENGE SIGN"},{char:"&#x20B9",desc:"INDIAN RUPEE SIGN"}]},{title:"Arrows",list:[{char:"&#x2190",desc:"LEFTWARDS ARROW"},{char:"&#x2191",desc:"UPWARDS ARROW"},{char:"&#x2192",desc:"RIGHTWARDS ARROW"},{char:"&#x2193",desc:"DOWNWARDS ARROW"},{char:"&#x2194",desc:"LEFT RIGHT ARROW"},{char:"&#x2195",desc:"UP DOWN ARROW"},{char:"&#x2196",desc:"NORTH WEST ARROW"},{char:"&#x2197",desc:"NORTH EAST ARROW"},{char:"&#x2198",desc:"SOUTH EAST ARROW"},{char:"&#x2199",desc:"SOUTH WEST ARROW"},{char:"&#x219A",desc:"LEFTWARDS ARROW WITH STROKE"},{char:"&#x219B",desc:"RIGHTWARDS ARROW WITH STROKE"},{char:"&#x219C",desc:"LEFTWARDS WAVE ARROW"},{char:"&#x219D",desc:"RIGHTWARDS WAVE ARROW"},{char:"&#x219E",desc:"LEFTWARDS TWO HEADED ARROW"},{char:"&#x219F",desc:"UPWARDS TWO HEADED ARROW"},{char:"&#x21A0",desc:"RIGHTWARDS TWO HEADED ARROW"},{char:"&#x21A1",desc:"DOWNWARDS TWO HEADED ARROW"},{char:"&#x21A2",desc:"LEFTWARDS ARROW WITH TAIL"},{char:"&#x21A3",desc:"RIGHTWARDS ARROW WITH TAIL"},{char:"&#x21A4",desc:"LEFTWARDS ARROW FROM BAR"},{char:"&#x21A5",desc:"UPWARDS ARROW FROM BAR"},{char:"&#x21A6",desc:"RIGHTWARDS ARROW FROM BAR"},{char:"&#x21A7",desc:"DOWNWARDS ARROW FROM BAR"},{char:"&#x21A8",desc:"UP DOWN ARROW WITH BASE"},{char:"&#x21A9",desc:"LEFTWARDS ARROW WITH HOOK"},{char:"&#x21AA",desc:"RIGHTWARDS ARROW WITH HOOK"},{char:"&#x21AB",desc:"LEFTWARDS ARROW WITH LOOP"},{char:"&#x21AC",desc:"RIGHTWARDS ARROW WITH LOOP"},{char:"&#x21AD",desc:"LEFT RIGHT WAVE ARROW"},{char:"&#x21AE",desc:"LEFT RIGHT ARROW WITH STROKE"},{char:"&#x21AF",desc:"DOWNWARDS ZIGZAG ARROW"},{char:"&#x21B0",desc:"UPWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B1",desc:"UPWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B2",desc:"DOWNWARDS ARROW WITH TIP LEFTWARDS"},{char:"&#x21B3",desc:"DOWNWARDS ARROW WITH TIP RIGHTWARDS"},{char:"&#x21B4",desc:"RIGHTWARDS ARROW WITH CORNER DOWNWARDS"},{char:"&#x21B5",desc:"DOWNWARDS ARROW WITH CORNER LEFTWARDS"},{char:"&#x21B6",desc:"ANTICLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B7",desc:"CLOCKWISE TOP SEMICIRCLE ARROW"},{char:"&#x21B8",desc:"NORTH WEST ARROW TO LONG BAR"},{char:"&#x21B9",desc:"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR"},{char:"&#x21BA",desc:"ANTICLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BB",desc:"CLOCKWISE OPEN CIRCLE ARROW"},{char:"&#x21BC",desc:"LEFTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21BD",desc:"LEFTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21BE",desc:"UPWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21BF",desc:"UPWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C0",desc:"RIGHTWARDS HARPOON WITH BARB UPWARDS"},{char:"&#x21C1",desc:"RIGHTWARDS HARPOON WITH BARB DOWNWARDS"},{char:"&#x21C2",desc:"DOWNWARDS HARPOON WITH BARB RIGHTWARDS"},{char:"&#x21C3",desc:"DOWNWARDS HARPOON WITH BARB LEFTWARDS"},{char:"&#x21C4",desc:"RIGHTWARDS ARROW OVER LEFTWARDS ARROW"},{char:"&#x21C5",desc:"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW"},{char:"&#x21C6",desc:"LEFTWARDS ARROW OVER RIGHTWARDS ARROW"},{char:"&#x21C7",desc:"LEFTWARDS PAIRED ARROWS"},{char:"&#x21C8",desc:"UPWARDS PAIRED ARROWS"},{char:"&#x21C9",desc:"RIGHTWARDS PAIRED ARROWS"},{char:"&#x21CA",desc:"DOWNWARDS PAIRED ARROWS"},{char:"&#x21CB",desc:"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON"},{char:"&#x21CC",desc:"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON"},{char:"&#x21CD",desc:"LEFTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21CE",desc:"LEFT RIGHT DOUBLE ARROW WITH STROKE"},{char:"&#x21CF",desc:"RIGHTWARDS DOUBLE ARROW WITH STROKE"},{char:"&#x21D0",desc:"LEFTWARDS DOUBLE ARROW"},{char:"&#x21D1",desc:"UPWARDS DOUBLE ARROW"},{char:"&#x21D2",desc:"RIGHTWARDS DOUBLE ARROW"},{char:"&#x21D3",desc:"DOWNWARDS DOUBLE ARROW"},{char:"&#x21D4",desc:"LEFT RIGHT DOUBLE ARROW"},{char:"&#x21D5",desc:"UP DOWN DOUBLE ARROW"},{char:"&#x21D6",desc:"NORTH WEST DOUBLE ARROW"},{char:"&#x21D7",desc:"NORTH EAST DOUBLE ARROW"},{char:"&#x21D8",desc:"SOUTH EAST DOUBLE ARROW"},{char:"&#x21D9",desc:"SOUTH WEST DOUBLE ARROW"},{char:"&#x21DA",desc:"LEFTWARDS TRIPLE ARROW"},{char:"&#x21DB",desc:"RIGHTWARDS TRIPLE ARROW"},{char:"&#x21DC",desc:"LEFTWARDS SQUIGGLE ARROW"},{char:"&#x21DD",desc:"RIGHTWARDS SQUIGGLE ARROW"},{char:"&#x21DE",desc:"UPWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21DF",desc:"DOWNWARDS ARROW WITH DOUBLE STROKE"},{char:"&#x21E0",desc:"LEFTWARDS DASHED ARROW"},{char:"&#x21E1",desc:"UPWARDS DASHED ARROW"},{char:"&#x21E2",desc:"RIGHTWARDS DASHED ARROW"},{char:"&#x21E3",desc:"DOWNWARDS DASHED ARROW"},{char:"&#x21E4",desc:"LEFTWARDS ARROW TO BAR"},{char:"&#x21E5",desc:"RIGHTWARDS ARROW TO BAR"},{char:"&#x21E6",desc:"LEFTWARDS WHITE ARROW"},{char:"&#x21E7",desc:"UPWARDS WHITE ARROW"},{char:"&#x21E8",desc:"RIGHTWARDS WHITE ARROW"},{char:"&#x21E9",desc:"DOWNWARDS WHITE ARROW"},{char:"&#x21EA",desc:"UPWARDS WHITE ARROW FROM BAR"},{char:"&#x21EB",desc:"UPWARDS WHITE ARROW ON PEDESTAL"},{char:"&#x21EC",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR"},{char:"&#x21ED",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR"},{char:"&#x21EE",desc:"UPWARDS WHITE DOUBLE ARROW"},{char:"&#x21EF",desc:"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL"},{char:"&#x21F0",desc:"RIGHTWARDS WHITE ARROW FROM WALL"},{char:"&#x21F1",desc:"NORTH WEST ARROW TO CORNER"},{char:"&#x21F2",desc:"SOUTH EAST ARROW TO CORNER"},{char:"&#x21F3",desc:"UP DOWN WHITE ARROW"},{char:"&#x21F4",desc:"RIGHT ARROW WITH SMALL CIRCLE"},{char:"&#x21F5",desc:"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW"},{char:"&#x21F6",desc:"THREE RIGHTWARDS ARROWS"},{char:"&#x21F7",desc:"LEFTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F8",desc:"RIGHTWARDS ARROW WITH VERTICAL STROKE"},{char:"&#x21F9",desc:"LEFT RIGHT ARROW WITH VERTICAL STROKE"},{char:"&#x21FA",desc:"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FB",desc:"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FC",desc:"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE"},{char:"&#x21FD",desc:"LEFTWARDS OPEN-HEADED ARROW"},{char:"&#x21FE",desc:"RIGHTWARDS OPEN-HEADED ARROW"},{char:"&#x21FF",desc:"LEFT RIGHT OPEN-HEADED ARROW"}]},{title:"Math",list:[{char:"&forall;",desc:"FOR ALL"},{char:"&part;",desc:"PARTIAL DIFFERENTIAL"},{char:"&exist;",desc:"THERE EXISTS"},{char:"&empty;",desc:"EMPTY SET"},{char:"&nabla;",desc:"NABLA"},{char:"&isin;",desc:"ELEMENT OF"},{char:"&notin;",desc:"NOT AN ELEMENT OF"},{char:"&ni;",desc:"CONTAINS AS MEMBER"},{char:"&prod;",desc:"N-ARY PRODUCT"},{char:"&sum;",desc:"N-ARY SUMMATION"},{char:"&minus;",desc:"MINUS SIGN"},{char:"&lowast;",desc:"ASTERISK OPERATOR"},{char:"&radic;",desc:"SQUARE ROOT"},{char:"&prop;",desc:"PROPORTIONAL TO"},{char:"&infin;",desc:"INFINITY"},{char:"&ang;",desc:"ANGLE"},{char:"&and;",desc:"LOGICAL AND"},{char:"&or;",desc:"LOGICAL OR"},{char:"&cap;",desc:"INTERSECTION"},{char:"&cup;",desc:"UNION"},{char:"&int;",desc:"INTEGRAL"},{char:"&there4;",desc:"THEREFORE"},{char:"&sim;",desc:"TILDE OPERATOR"},{char:"&cong;",desc:"APPROXIMATELY EQUAL TO"},{char:"&asymp;",desc:"ALMOST EQUAL TO"},{char:"&ne;",desc:"NOT EQUAL TO"},{char:"&equiv;",desc:"IDENTICAL TO"},{char:"&le;",desc:"LESS-THAN OR EQUAL TO"},{char:"&ge;",desc:"GREATER-THAN OR EQUAL TO"},{char:"&sub;",desc:"SUBSET OF"},{char:"&sup;",desc:"SUPERSET OF"},{char:"&nsub;",desc:"NOT A SUBSET OF"},{char:"&sube;",desc:"SUBSET OF OR EQUAL TO"},{char:"&supe;",desc:"SUPERSET OF OR EQUAL TO"},{char:"&oplus;",desc:"CIRCLED PLUS"},{char:"&otimes;",desc:"CIRCLED TIMES"},{char:"&perp;",desc:"UP TACK"}]},{title:"Misc",list:[{char:"&spades;",desc:"BLACK SPADE SUIT"},{char:"&clubs;",desc:"BLACK CLUB SUIT"},{char:"&hearts;",desc:"BLACK HEART SUIT"},{char:"&diams;",desc:"BLACK DIAMOND SUIT"},{char:"&#x2669",desc:"QUARTER NOTE"},{char:"&#x266A",desc:"EIGHTH NOTE"},{char:"&#x266B",desc:"BEAMED EIGHTH NOTES"},{char:"&#x266C",desc:"BEAMED SIXTEENTH NOTES"},{char:"&#x266D",desc:"MUSIC FLAT SIGN"},{char:"&#x266E",desc:"MUSIC NATURAL SIGN"},{char:"&#x2600",desc:"BLACK SUN WITH RAYS"},{char:"&#x2601",desc:"CLOUD"},{char:"&#x2602",desc:"UMBRELLA"},{char:"&#x2603",desc:"SNOWMAN"},{char:"&#x2615",desc:"HOT BEVERAGE"},{char:"&#x2618",desc:"SHAMROCK"},{char:"&#x262F",desc:"YIN YANG"},{char:"&#x2714",desc:"HEAVY CHECK MARK"},{char:"&#x2716",desc:"HEAVY MULTIPLICATION X"},{char:"&#x2744",desc:"SNOWFLAKE"},{char:"&#x275B",desc:"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275C",desc:"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275D",desc:"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT"},{char:"&#x275E",desc:"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT"},{char:"&#x2764",desc:"HEAVY BLACK HEART"}]}]}),e.FE.PLUGINS.specialCharacters=function(t){function n(e,n){t.events.disableBlur(),e.focus(),n.preventDefault(),n.stopPropagation()}function r(){t.events.$on(o,"keydown",function(r){var a=r.which,s=o.find("span.fr-special-character:focus:first")
if(!(s.length||a!=e.FE.KEYCODE.F10||t.keys.ctrlKey(r)||r.shiftKey)&&r.altKey)return n(o.find("span.fr-special-character:first"),r),!1
if(a==e.FE.KEYCODE.TAB||a==e.FE.KEYCODE.ARROW_LEFT||a==e.FE.KEYCODE.ARROW_RIGHT){var l=null,u=null,c=!1
return a==e.FE.KEYCODE.ARROW_LEFT||a==e.FE.KEYCODE.ARROW_RIGHT?(u=a==e.FE.KEYCODE.ARROW_RIGHT,c=!0):u=!r.shiftKey,s.length?(c&&(l=u?s.nextAll("span.fr-special-character:first"):s.prevAll("span.fr-special-character:first")),l&&l.length||((l=u?s.parent().next().find("span.fr-special-character:first"):s.parent().prev().find("span.fr-special-character:"+(c?"last":"first"))).length||(l=o.find("span.fr-special-character:"+(u?"first":"last"))))):l=o.find("span.fr-special-character:"+(u?"first":"last")),n(l,r),!1}if(a!=e.FE.KEYCODE.ENTER||!s.length)return!0;(i.data("instance")||t).specialCharacters.insert(s)},!0)}var i,o,a="special_characters"
return{_init:function(){},show:function(){if(!i){var n="<h4>"+t.language.translate("Special Characters")+"</h4>",s=function(){for(var e='<div class="fr-special-characters-modal">',n=0;n<t.opts.specialCharactersSets.length;n++){for(var r=t.opts.specialCharactersSets[n],i=r.list,o='<div class="fr-special-characters-list"><p class="fr-special-characters-title">'+t.language.translate(r.title)+"</p>",a=0;a<i.length;a++){var s=i[a]
o+='<span class="fr-command fr-special-character" tabIndex="-1" role="button" value="'+s.char+'" title="'+s.desc+'">'+s.char+'<span class="fr-sr-only">'+t.language.translate(s.desc)+"&nbsp;&nbsp;&nbsp;</span></span>"}e+=o+"</div>"}return e+"</div>"}(),l=t.modals.create(a,n,s)
i=l.$modal,l.$head,o=l.$body,t.events.$on(e(t.o_win),"resize",function(){(i.data("instance")||t).modals.resize(a)}),t.events.bindClick(o,".fr-special-character",function(n){var r=i.data("instance")||t,o=e(n.currentTarget)
r.specialCharacters.insert(o)}),r()}t.modals.show(a),t.modals.resize(a)},hide:function(){t.modals.hide(a)},insert:function(e){t.specialCharacters.hide(),t.undo.saveStep(),t.html.insert(e.attr("value"),!0),t.undo.saveStep()}}},e.FroalaEditor.DefineIcon("specialCharacters",{template:"text",NAME:"&#937;"}),e.FE.RegisterCommand("specialCharacters",{title:"Special Characters",icon:"specialCharacters",undo:!1,focus:!1,modal:!0,callback:function(){this.specialCharacters.show()},plugin:"specialCharacters",showOnMobile:!1})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{"table.insert":"[_BUTTONS_][_ROWS_COLUMNS_]","table.edit":"[_BUTTONS_]","table.colors":"[_BUTTONS_][_COLORS_][_CUSTOM_COLOR_]"}),e.extend(e.FE.DEFAULTS,{tableInsertMaxSize:10,tableEditButtons:["tableHeader","tableRemove","|","tableRows","tableColumns","tableStyle","-","tableCells","tableCellBackground","tableCellVerticalAlign","tableCellHorizontalAlign","tableCellStyle"],tableInsertButtons:["tableBack","|"],tableResizer:!0,tableResizerOffset:5,tableResizingLimit:30,tableColorsButtons:["tableBack","|"],tableColors:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],tableColorsStep:7,tableCellStyles:{"fr-highlighted":"Highlighted","fr-thick":"Thick"},tableStyles:{"fr-dashed-borders":"Dashed Borders","fr-alternate-rows":"Alternate Rows"},tableCellMultipleStyles:!0,tableMultipleStyles:!0,tableInsertHelper:!0,tableInsertHelperOffset:15}),e.FE.PLUGINS.table=function(t){function n(){var e=v()
if(e){var n=t.popups.get("table.edit")
if(n||(n=s()),n){t.popups.setContainer("table.edit",t.$sc)
var r=w(e),i=(r.left+r.right)/2,o=r.bottom
t.popups.show("table.edit",i,o,r.bottom-r.top),t.edit.isDisabled()&&(t.toolbar.disable(),t.$el.removeClass("fr-no-selection"),t.edit.on(),t.button.bulkRefresh(),t.selection.setAtEnd(t.$el.find(".fr-selected-cell:last").get(0)),t.selection.restore())}}}function r(){var e=v()
if(e){var n=t.popups.get("table.colors")
n||(n=l()),t.popups.setContainer("table.colors",t.$sc)
var r=w(e),i=(r.left+r.right)/2,o=r.bottom;(function(){var e=t.popups.get("table.colors"),n=t.$el.find(".fr-selected-cell:first"),r=t.helpers.RGBToHex(n.css("background-color")),i=e.find(".fr-table-colors-hex-layer input")
e.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item"),e.find('span[data-param1="'+r+'"]').addClass("fr-selected-color fr-active-item"),i.val(r).trigger("change")})(),t.popups.show("table.colors",i,o,r.bottom-r.top)}}function i(){0===Q().length&&t.toolbar.enable()}function o(n){if(n)return t.popups.onHide("table.insert",function(){t.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseenter")}),!0
var r=""
t.opts.tableInsertButtons.length>0&&(r='<div class="fr-buttons">'+t.button.buildList(t.opts.tableInsertButtons)+"</div>")
var i={buttons:r,rows_columns:function(){for(var e='<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">',n=1;n<=t.opts.tableInsertMaxSize;n++){for(var r=1;r<=t.opts.tableInsertMaxSize;r++){var i="inline-block"
n>2&&!t.helpers.isMobile()&&(i="none")
var o="fr-table-cell "
1==n&&1==r&&(o+=" hover"),e+='<span class="fr-command '+o+'" tabIndex="-1" data-cmd="tableInsert" data-row="'+n+'" data-col="'+r+'" data-param1="'+n+'" data-param2="'+r+'" style="display: '+i+';" role="button"><span></span><span class="fr-sr-only">'+n+" &times; "+r+"&nbsp;&nbsp;&nbsp;</span></span>"}e+='<div class="new-line"></div>'}return e+="</div></div>"}()},o=t.popups.create("table.insert",i)
return t.events.$on(o,"mouseenter",".fr-table-size .fr-select-table-size .fr-table-cell",function(t){a(e(t.currentTarget))},!0),function(n){t.events.$on(n,"focus","[tabIndex]",function(t){var n=e(t.currentTarget)
a(n)}),t.events.on("popup.tab",function(n){var r=e(n.currentTarget)
if(!t.popups.isVisible("table.insert")||!r.is("span, a"))return!0
var i,o=n.which
if(e.FE.KEYCODE.ARROW_UP==o||e.FE.KEYCODE.ARROW_DOWN==o||e.FE.KEYCODE.ARROW_LEFT==o||e.FE.KEYCODE.ARROW_RIGHT==o){if(r.is("span.fr-table-cell")){var s=r.parent().find("span.fr-table-cell"),l=s.index(r),u=t.opts.tableInsertMaxSize,c=l%u,f=Math.floor(l/u)
e.FE.KEYCODE.ARROW_UP==o?f=Math.max(0,f-1):e.FE.KEYCODE.ARROW_DOWN==o?f=Math.min(t.opts.tableInsertMaxSize-1,f+1):e.FE.KEYCODE.ARROW_LEFT==o?c=Math.max(0,c-1):e.FE.KEYCODE.ARROW_RIGHT==o&&(c=Math.min(t.opts.tableInsertMaxSize-1,c+1))
var p=f*u+c,d=e(s.get(p))
a(d),t.events.disableBlur(),d.focus(),i=!1}}else e.FE.KEYCODE.ENTER==o&&(t.button.exec(r),i=!1)
return!1===i&&(n.preventDefault(),n.stopPropagation()),i},!0)}(o),o}function a(e){var n=e.data("row"),r=e.data("col"),i=e.parent()
i.siblings(".fr-table-size-info").html(n+" &times; "+r),i.find("> span").removeClass("hover fr-active-item")
for(var o=1;o<=t.opts.tableInsertMaxSize;o++)for(var a=0;a<=t.opts.tableInsertMaxSize;a++){var s=i.find('> span[data-row="'+o+'"][data-col="'+a+'"]')
n>=o&&r>=a?s.addClass("hover"):n+1>=o||2>=o&&!t.helpers.isMobile()?s.css("display","inline-block"):o>2&&!t.helpers.isMobile()&&s.css("display","none")}e.addClass("fr-active-item")}function s(e){if(e)return t.popups.onHide("table.edit",i),!0
if(t.opts.tableEditButtons.length>0){var r={buttons:'<div class="fr-buttons">'+t.button.buildList(t.opts.tableEditButtons)+"</div>"},o=t.popups.create("table.edit",r)
return t.events.$on(t.$wp,"scroll.table-edit",function(){t.popups.isVisible("table.edit")&&n()}),o}return!1}function l(){var e=""
t.opts.tableColorsButtons.length>0&&(e='<div class="fr-buttons fr-table-colors-buttons">'+t.button.buildList(t.opts.tableColorsButtons)+"</div>")
var n=""
t.opts.colorsHEXInput&&(n='<div class="fr-table-colors-hex-layer fr-active fr-layer" id="fr-table-colors-hex-layer-'+t.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-table-colors-hex-layer-text-'+t.id+'" type="text" placeholder="'+t.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="tableCellBackgroundCustomColor" tabIndex="2" role="button">'+t.language.translate("OK")+"</button></div></div>")
var i={buttons:e,colors:function(){for(var e='<div class="fr-table-colors">',n=0;n<t.opts.tableColors.length;n++)0!==n&&n%t.opts.tableColorsStep==0&&(e+="<br>"),e+="REMOVE"!=t.opts.tableColors[n]?'<span class="fr-command" style="background: '+t.opts.tableColors[n]+';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="'+t.opts.tableColors[n]+'"><span class="fr-sr-only">'+t.language.translate("Color")+" "+t.opts.tableColors[n]+"&nbsp;&nbsp;&nbsp;</span></span>":'<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'+t.language.translate("Clear Formatting")+'">'+t.icon.create("tableColorRemove")+'<span class="fr-sr-only">'+t.language.translate("Clear Formatting")+"</span></span>"
return e+="</div>"}(),custom_color:n},o=t.popups.create("table.colors",i)
return t.events.$on(t.$wp,"scroll.table-colors",function(){t.popups.isVisible("table.colors")&&r()}),u(o),o}function u(n){t.events.on("popup.tab",function(r){var i=e(r.currentTarget)
if(!t.popups.isVisible("table.colors")||!i.is("span"))return!0
var o=r.which,a=!0
if(e.FE.KEYCODE.TAB==o){var s=n.find(".fr-buttons")
a=!t.accessibility.focusToolbar(s,!!r.shiftKey)}else if(e.FE.KEYCODE.ARROW_UP==o||e.FE.KEYCODE.ARROW_DOWN==o||e.FE.KEYCODE.ARROW_LEFT==o||e.FE.KEYCODE.ARROW_RIGHT==o){var l=i.parent().find("span.fr-command"),u=l.index(i),c=t.opts.colorsStep,f=Math.floor(l.length/c),p=u%c,d=Math.floor(u/c)*c+p,h=f*c
e.FE.KEYCODE.ARROW_UP==o?d=((d-c)%h+h)%h:e.FE.KEYCODE.ARROW_DOWN==o?d=(d+c)%h:e.FE.KEYCODE.ARROW_LEFT==o?d=((d-1)%h+h)%h:e.FE.KEYCODE.ARROW_RIGHT==o&&(d=(d+1)%h)
var m=e(l.get(d))
t.events.disableBlur(),m.focus(),a=!1}else e.FE.KEYCODE.ENTER==o&&(t.button.exec(i),a=!1)
return!1===a&&(r.preventDefault(),r.stopPropagation()),a},!0)}function c(){if(Q().length>0){var e=X()
t.selection.setBefore(e.get(0))||t.selection.setAfter(e.get(0)),t.selection.restore(),t.popups.hide("table.edit"),e.remove(),t.toolbar.enable()}}function f(r){var i=X()
if(i.length>0){if(t.$el.find("th.fr-selected-cell").length>0&&"above"==r)return
var o,a,s,l=v(),u=A(l)
a="above"==r?u.min_i:u.max_i
var c="<tr>"
for(o=0;o<l[a].length;o++)if("below"==r&&a<l.length-1&&l[a][o]==l[a+1][o]||"above"==r&&a>0&&l[a][o]==l[a-1][o]){if(0===o||o>0&&l[a][o]!=l[a][o-1]){var f=e(l[a][o])
f.attr("rowspan",parseInt(f.attr("rowspan"),10)+1)}}else c+="<td><br></td>"
c+="</tr>",s=e(t.$el.find("th.fr-selected-cell").length>0&&"below"==r?i.find("tbody").not(i.find("table tbody")):i.find("tr").not(i.find("table tr")).get(a)),"below"==r?"TBODY"==s.prop("tagName")?s.prepend(c):s.after(c):"above"==r&&(s.before(c),t.popups.isVisible("table.edit")&&n())}}function p(e,t,n){var r,i,o,a,s,l=0,u=v(n)
if((t=Math.min(t,u[0].length-1))>e)for(i=e;t>=i;i++)if(!(i>e&&u[0][i]==u[0][i-1])&&((a=Math.min(parseInt(u[0][i].getAttribute("colspan"),10)||1,t-e+1))>1&&u[0][i]==u[0][i+1]))for(l=a-1,r=1;r<u.length;r++)if(u[r][i]!=u[r-1][i]){for(o=i;i+a>o;o++)if((s=parseInt(u[r][o].getAttribute("colspan"),10)||1)>1&&u[r][o]==u[r][o+1])o+=l=Math.min(l,s-1)
else if(!(l=Math.max(0,l-1)))break
if(!l)break}l&&h(u,l,"colspan",0,u.length-1,e,t)}function d(e,t,n){var r,i,o,a,s,l=0,u=v(n)
if((t=Math.min(t,u.length-1))>e)for(r=e;t>=r;r++)if(!(r>e&&u[r][0]==u[r-1][0])&&((a=Math.min(parseInt(u[r][0].getAttribute("rowspan"),10)||1,t-e+1))>1&&u[r][0]==u[r+1][0]))for(l=a-1,i=1;i<u[0].length;i++)if(u[r][i]!=u[r][i-1]){for(o=r;r+a>o;o++)if((s=parseInt(u[o][i].getAttribute("rowspan"),10)||1)>1&&u[o][i]==u[o+1][i])o+=l=Math.min(l,s-1)
else if(!(l=Math.max(0,l-1)))break
if(!l)break}l&&h(u,l,"rowspan",e,t,0,u[0].length-1)}function h(e,t,n,r,i,o,a){var s,l,u
for(s=r;i>=s;s++)for(l=o;a>=l;l++)s>r&&e[s][l]==e[s-1][l]||l>o&&e[s][l]==e[s][l-1]||(u=parseInt(e[s][l].getAttribute(n),10)||1)>1&&(u-t>1?e[s][l].setAttribute(n,u-t):e[s][l].removeAttribute(n))}function m(e,t,n,r,i){d(e,t,i),p(n,r,i)}function g(e){var r=t.$el.find(".fr-selected-cell")
"REMOVE"!=e?r.css("background-color",t.helpers.HEXtoRGB(e)):r.css("background-color",""),n()}function v(t){var n=[]
return null==(t=t||null)&&Q().length>0&&(t=X()),t&&t.find("tr").not(t.find("table tr")).each(function(t,r){var i=0
e(r).find("> th, > td").each(function(r,o){for(var a=e(o),s=parseInt(a.attr("colspan"),10)||1,l=parseInt(a.attr("rowspan"),10)||1,u=t;t+l>u;u++)for(var c=i;i+s>c;c++)n[u]||(n[u]=[]),n[u][c]?i++:n[u][c]=o
i+=s})}),n}function b(e,t){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(t[n][r]==e)return{row:n,col:r}}function y(e,t,n){for(var r=e+1,i=t+1;r<n.length;){if(n[r][t]!=n[e][t]){r--
break}r++}for(r==n.length&&r--;i<n[e].length;){if(n[e][i]!=n[e][t]){i--
break}i++}return i==n[e].length&&i--,{row:r,col:i}}function E(){t.el.querySelector(".fr-cell-fixed")&&t.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed"),t.el.querySelector(".fr-cell-handler")&&t.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler")}function T(){var n=t.$el.find(".fr-selected-cell")
n.length>0&&n.each(function(){var t=e(this)
t.removeClass("fr-selected-cell"),""===t.attr("class")&&t.removeAttr("class")}),E()}function _(){t.events.disableBlur(),t.selection.clear(),t.$el.addClass("fr-no-selection"),t.$el.blur(),t.events.enableBlur()}function A(e){var n=t.$el.find(".fr-selected-cell")
if(n.length>0){var r,i=e.length,o=0,a=e[0].length,s=0
for(r=0;r<n.length;r++){var l=b(n[r],e),u=y(l.row,l.col,e)
i=Math.min(l.row,i),o=Math.max(u.row,o),a=Math.min(l.col,a),s=Math.max(u.col,s)}return{min_i:i,max_i:o,min_j:a,max_j:s}}return null}function w(t){var n=A(t),r=e(t[n.min_i][n.min_j]),i=e(t[n.min_i][n.max_j]),o=e(t[n.max_i][n.min_j])
return{left:r.offset().left,right:i.offset().left+i.outerWidth(),top:r.offset().top,bottom:o.offset().top+o.outerHeight()}}function C(n,r){if(e(n).is(r))T(),t.edit.on(),e(n).addClass("fr-selected-cell")
else{_(),t.edit.off()
var i=v(),o=b(n,i),a=b(r,i),s=function t(n,r,i,o,a){var s,l,u,c,f=n,p=r,d=i,h=o
for(s=f;p>=s;s++)((parseInt(e(a[s][d]).attr("rowspan"),10)||1)>1||(parseInt(e(a[s][d]).attr("colspan"),10)||1)>1)&&(c=y((u=b(a[s][d],a)).row,u.col,a),f=Math.min(u.row,f),p=Math.max(c.row,p),d=Math.min(u.col,d),h=Math.max(c.col,h)),((parseInt(e(a[s][h]).attr("rowspan"),10)||1)>1||(parseInt(e(a[s][h]).attr("colspan"),10)||1)>1)&&(c=y((u=b(a[s][h],a)).row,u.col,a),f=Math.min(u.row,f),p=Math.max(c.row,p),d=Math.min(u.col,d),h=Math.max(c.col,h))
for(l=d;h>=l;l++)((parseInt(e(a[f][l]).attr("rowspan"),10)||1)>1||(parseInt(e(a[f][l]).attr("colspan"),10)||1)>1)&&(c=y((u=b(a[f][l],a)).row,u.col,a),f=Math.min(u.row,f),p=Math.max(c.row,p),d=Math.min(u.col,d),h=Math.max(c.col,h)),((parseInt(e(a[p][l]).attr("rowspan"),10)||1)>1||(parseInt(e(a[p][l]).attr("colspan"),10)||1)>1)&&(c=y((u=b(a[p][l],a)).row,u.col,a),f=Math.min(u.row,f),p=Math.max(c.row,p),d=Math.min(u.col,d),h=Math.max(c.col,h))
return f==n&&p==r&&d==i&&h==o?{min_i:n,max_i:r,min_j:i,max_j:o}:t(f,p,d,h,a)}(Math.min(o.row,a.row),Math.max(o.row,a.row),Math.min(o.col,a.col),Math.max(o.col,a.col),i)
T(),n.classList.add("fr-cell-fixed"),r.classList.add("fr-cell-handler")
for(var l=s.min_i;l<=s.max_i;l++)for(var u=s.min_j;u<=s.max_j;u++)e(i[l][u]).addClass("fr-selected-cell")}}function S(n){var r=null,i=e(n.target)
return"TD"==n.target.tagName||"TH"==n.target.tagName?r=n.target:i.closest("td").length>0?r=i.closest("td").get(0):i.closest("th").length>0&&(r=i.closest("th").get(0)),0===t.$el.find(r).length?null:r}function O(){T(),t.popups.hide("table.edit")}function x(n){var r=S(n)
if(Q().length>0&&!r&&O(),!t.edit.isDisabled()||t.popups.isVisible("table.edit"))if(1!=n.which||1==n.which&&t.helpers.isMac()&&n.ctrlKey)(3==n.which||1==n.which&&t.helpers.isMac()&&n.ctrlKey)&&r&&O()
else if(re=!0,r){Q().length>0&&!n.shiftKey&&O(),n.stopPropagation(),t.events.trigger("image.hideResizer"),t.events.trigger("video.hideResizer"),ne=!0
var i=r.tagName.toLowerCase()
n.shiftKey&&t.$el.find(i+".fr-selected-cell").length>0?e(t.$el.find(i+".fr-selected-cell").closest("table")).is(e(r).closest("table"))?C(ie,r):_():((t.keys.ctrlKey(n)||n.shiftKey)&&(Q().length>1||0===e(r).find(t.selection.element()).length&&!e(r).is(t.selection.element()))&&_(),C(ie=r,ie))}}function R(r){if(ne||t.$tb.is(r.target)||t.$tb.is(e(r.target).closest(t.$tb.get(0)))||(Q().length>0&&t.toolbar.enable(),T()),!(1!=r.which||1==r.which&&t.helpers.isMac()&&r.ctrlKey)){if(re=!1,ne)ne=!1,S(r)||1!=Q().length?Q().length>0&&(t.selection.isCollapsed()?n():T()):T()
if(ae){ae=!1,ee.removeClass("fr-moving"),t.$el.removeClass("fr-no-selection"),t.edit.on()
var i=parseFloat(ee.css("left"))+t.opts.tableResizerOffset+t.$wp.offset().left
t.opts.iframe&&(i-=t.$iframe.offset().left),ee.data("release-position",i),ee.removeData("max-left"),ee.removeData("max-right"),function(){var n=ee.data("origin"),r=ee.data("release-position")
if(n!==r){var i=ee.data("first"),o=ee.data("second"),a=ee.data("table"),s=a.outerWidth()
if(t.undo.canDo()||t.undo.saveStep(),null!==i&&null!==o){var l,u,c,f=v(a),p=[],d=[],h=[],m=[]
for(l=0;l<f.length;l++)u=e(f[l][i]),c=e(f[l][o]),p[l]=u.outerWidth(),h[l]=c.outerWidth(),d[l]=p[l]/s*100,m[l]=h[l]/s*100
for(l=0;l<f.length;l++){u=e(f[l][i]),c=e(f[l][o])
var g=(d[l]*(p[l]+r-n)/p[l]).toFixed(4)
u.css("width",g+"%"),c.css("width",(d[l]+m[l]-g).toFixed(4)+"%")}}else{var b,y=a.parent(),E=s/y.width()*100,T=(parseInt(a.css("margin-left"),10)||0)/y.width()*100,_=(parseInt(a.css("margin-right"),10)||0)/y.width()*100
"rtl"==t.opts.direction&&0===o||"rtl"!=t.opts.direction&&0!==o?(b=(s+r-n)/s*E,a.css("margin-right","calc(100% - "+Math.round(b).toFixed(4)+"% - "+Math.round(T).toFixed(4)+"%)")):("rtl"==t.opts.direction&&0!==o||"rtl"!=t.opts.direction&&0===o)&&(b=(s-r+n)/s*E,a.css("margin-left","calc(100% - "+Math.round(b).toFixed(4)+"% - "+Math.round(_).toFixed(4)+"%)")),a.css("width",Math.round(b).toFixed(4)+"%")}t.selection.restore(),t.undo.saveStep()}ee.removeData("origin"),ee.removeData("release-position"),ee.removeData("first"),ee.removeData("second"),ee.removeData("table")}(),M()}}}function N(n){if(!0===ne){if(e(n.currentTarget).closest("table").is(X())){if("TD"==n.currentTarget.tagName&&0===t.$el.find("th.fr-selected-cell").length)return void C(ie,n.currentTarget)
if("TH"==n.currentTarget.tagName&&0===t.$el.find("td.fr-selected-cell").length)return void C(ie,n.currentTarget)}_()}}function L(n,r){for(var i=n;i&&"TABLE"!=i.tagName&&i.parentNode!=t.el;)i=i.parentNode
if(i&&"TABLE"==i.tagName){var o=v(e(i))
"up"==r?k(b(n,o),i,o):"down"==r&&D(b(n,o),i,o)}}function I(e,n,r,i){for(var o,a=n;a!=t.el&&"TD"!=a.tagName&&"TH"!=a.tagName&&("up"==i?o=a.previousElementSibling:"down"==i&&(o=a.nextElementSibling),!o);)a=a.parentNode
"TD"==a.tagName||"TH"==a.tagName?L(a,i):o&&("up"==i&&t.selection.setAtEnd(o),"down"==i&&t.selection.setAtStart(o))}function k(e,n,r){e.row>0?t.selection.setAtEnd(r[e.row-1][e.col]):I(0,n,0,"up")}function D(e,n,r){var i=parseInt(r[e.row][e.col].getAttribute("rowspan"),10)||1
e.row<r.length-i?t.selection.setAtStart(r[e.row+i][e.col]):I(0,n,0,"down")}function P(n){var r=n.which,i=t.selection.blocks()
if(i.length&&("TD"==(i=i[0]).tagName||"TH"==i.tagName)){for(var o=i;o&&"TABLE"!=o.tagName&&o.parentNode!=t.el;)o=o.parentNode
if(o&&"TABLE"==o.tagName&&(e.FE.KEYCODE.ARROW_LEFT==r||e.FE.KEYCODE.ARROW_UP==r||e.FE.KEYCODE.ARROW_RIGHT==r||e.FE.KEYCODE.ARROW_DOWN==r)&&(Q().length>0&&O(),t.browser.webkit&&(e.FE.KEYCODE.ARROW_UP==r||e.FE.KEYCODE.ARROW_DOWN==r))){var a=t.selection.ranges(0).startContainer
if(a.nodeType==Node.TEXT_NODE&&(e.FE.KEYCODE.ARROW_UP==r&&a.previousSibling||e.FE.KEYCODE.ARROW_DOWN==r&&a.nextSibling))return
n.preventDefault(),n.stopPropagation()
var s=v(e(o)),l=b(i,s)
return e.FE.KEYCODE.ARROW_UP==r?k(l,o,s):e.FE.KEYCODE.ARROW_DOWN==r&&D(l,o,s),t.selection.restore(),!1}}}function M(){ee&&(ee.find("div").css("opacity",0),ee.css("top",0),ee.css("left",0),ee.css("height",0),ee.find("div").css("height",0),ee.hide())}function F(){te&&te.removeClass("fr-visible").css("left","-9999px")}function j(n,r){var i=e(r),o=i.closest("table"),a=o.parent()
if(r&&"TD"!=r.tagName&&"TH"!=r.tagName&&(i.closest("td").length>0?r=i.closest("td"):i.closest("th").length>0&&(r=i.closest("th"))),!r||"TD"!=r.tagName&&"TH"!=r.tagName)ee&&i.get(0)!=ee.get(0)&&i.parent().get(0)!=ee.get(0)&&t.core.sameInstance(ee)&&M()
else{if(i=e(r),0===t.$el.find(i).length)return!1
var s=i.offset().left-1,l=s+i.outerWidth()
if(Math.abs(n.pageX-s)<=t.opts.tableResizerOffset||Math.abs(l-n.pageX)<=t.opts.tableResizerOffset){var u,c,f,p,d,h=v(o),m=b(r,h),g=y(m.row,m.col,h),E=o.offset().top,T=o.outerHeight()-1
"rtl"!=t.opts.direction?n.pageX-s<=t.opts.tableResizerOffset?(f=s,m.col>0?(p=s-K(m.col-1,h)+t.opts.tableResizingLimit,d=s+K(m.col,h)-t.opts.tableResizingLimit,u=m.col-1,c=m.col):(u=null,c=0,p=o.offset().left-1-parseInt(o.css("margin-left"),10),d=o.offset().left-1+o.width()-h[0].length*t.opts.tableResizingLimit)):l-n.pageX<=t.opts.tableResizerOffset&&(f=l,g.col<h[g.row].length&&h[g.row][g.col+1]?(p=l-K(g.col,h)+t.opts.tableResizingLimit,d=l+K(g.col+1,h)-t.opts.tableResizingLimit,u=g.col,c=g.col+1):(u=g.col,c=null,p=o.offset().left-1+h[0].length*t.opts.tableResizingLimit,d=a.offset().left-1+a.width()+parseFloat(a.css("padding-left")))):l-n.pageX<=t.opts.tableResizerOffset?(f=l,m.col>0?(p=l-K(m.col,h)+t.opts.tableResizingLimit,d=l+K(m.col-1,h)-t.opts.tableResizingLimit,u=m.col,c=m.col-1):(u=null,c=0,p=o.offset().left+h[0].length*t.opts.tableResizingLimit,d=a.offset().left-1+a.width()+parseFloat(a.css("padding-left")))):n.pageX-s<=t.opts.tableResizerOffset&&(f=s,g.col<h[g.row].length&&h[g.row][g.col+1]?(p=s-K(g.col+1,h)+t.opts.tableResizingLimit,d=s+K(g.col,h)-t.opts.tableResizingLimit,u=g.col+1,c=g.col):(u=g.col,c=null,p=a.offset().left+parseFloat(a.css("padding-left")),d=o.offset().left-1+o.width()-h[0].length*t.opts.tableResizingLimit)),ee||(t.shared.$table_resizer||(t.shared.$table_resizer=e('<div class="fr-table-resizer"><div></div></div>')),ee=t.shared.$table_resizer,t.events.$on(ee,"mousedown",function(e){return!t.core.sameInstance(ee)||(Q().length>0&&O(),1==e.which?(t.selection.save(),ae=!0,ee.addClass("fr-moving"),_(),t.edit.off(),ee.find("div").css("opacity",1),!1):void 0)}),t.events.$on(ee,"mousemove",function(e){return!t.core.sameInstance(ee)||void(ae&&(t.opts.iframe&&(e.pageX-=t.$iframe.offset().left),z(e)))}),t.events.on("shared.destroy",function(){ee.html("").removeData().remove(),ee=null},!0),t.events.on("destroy",function(){t.$el.find(".fr-selected-cell").removeClass("fr-selected-cell"),ee.hide().appendTo(e("body:first"))},!0)),ee.data("table",o),ee.data("first",u),ee.data("second",c),ee.data("instance",t),t.$wp.append(ee)
var A=f-t.win.pageXOffset-t.opts.tableResizerOffset-t.$wp.offset().left,w=E-t.win.pageYOffset-t.$wp.offset().top+t.$wp.scrollTop()
t.opts.iframe&&(A+=t.$iframe.offset().left-t.helpers.scrollLeft(),w+=t.$iframe.offset().top-t.helpers.scrollTop(),p+=t.$iframe.offset().left,d+=t.$iframe.offset().left),ee.data("max-left",p),ee.data("max-right",d),ee.data("origin",f-t.win.pageXOffset),ee.css("top",w),ee.css("left",A),ee.css("height",T),ee.find("div").css("height",T),ee.css("padding-left",t.opts.tableResizerOffset),ee.css("padding-right",t.opts.tableResizerOffset),ee.show()}else t.core.sameInstance(ee)&&M()}}function B(n,r){if(t.$box.find(".fr-line-breaker").is(":visible"))return!1
te||G(),t.$box.append(te),te.data("instance",t)
var i,o=e(r).find("tr:first"),a=n.pageX,s=0,l=0
t.opts.iframe&&(s+=t.$iframe.offset().left-t.helpers.scrollLeft(),l+=t.$iframe.offset().top-t.helpers.scrollTop()),o.find("th, td").each(function(){var n=e(this)
return n.offset().left<=a&&a<n.offset().left+n.outerWidth()/2?(i=parseInt(te.find("a").css("width"),10),te.css("top",l+n.offset().top-t.$box.offset().top-t.win.pageYOffset-i-5),te.css("left",s+n.offset().left-t.$box.offset().left-t.win.pageXOffset-i/2),te.data("selected-cell",n),te.data("position","before"),te.addClass("fr-visible"),!1):n.offset().left+n.outerWidth()/2<=a&&a<n.offset().left+n.outerWidth()?(i=parseInt(te.find("a").css("width"),10),te.css("top",l+n.offset().top-t.$box.offset().top-t.win.pageYOffset-i-5),te.css("left",s+n.offset().left-t.$box.offset().left+n.outerWidth()-t.win.pageXOffset-i/2),te.data("selected-cell",n),te.data("position","after"),te.addClass("fr-visible"),!1):void 0})}function H(n,r){if(t.$box.find(".fr-line-breaker").is(":visible"))return!1
te||G(),t.$box.append(te),te.data("instance",t)
var i,o=e(r),a=n.pageY,s=0,l=0
t.opts.iframe&&(s+=t.$iframe.offset().left-t.helpers.scrollLeft(),l+=t.$iframe.offset().top-t.helpers.scrollTop()),o.find("tr").each(function(){var n=e(this)
return n.offset().top<=a&&a<n.offset().top+n.outerHeight()/2?(i=parseInt(te.find("a").css("width"),10),te.css("top",l+n.offset().top-t.$box.offset().top-t.win.pageYOffset-i/2),te.css("left",s+n.offset().left-t.$box.offset().left-t.win.pageXOffset-i-5),te.data("selected-cell",n.find("td:first")),te.data("position","above"),te.addClass("fr-visible"),!1):n.offset().top+n.outerHeight()/2<=a&&a<n.offset().top+n.outerHeight()?(i=parseInt(te.find("a").css("width"),10),te.css("top",l+n.offset().top-t.$box.offset().top+n.outerHeight()-t.win.pageYOffset-i/2),te.css("left",s+n.offset().left-t.$box.offset().left-t.win.pageXOffset-i-5),te.data("selected-cell",n.find("td:first")),te.data("position","below"),te.addClass("fr-visible"),!1):void 0})}function $(n,r){if(0===Q().length){var i,o,a
if(r&&("HTML"==r.tagName||"BODY"==r.tagName||t.node.isElement(r)))for(i=1;i<=t.opts.tableInsertHelperOffset;i++){if(o=t.doc.elementFromPoint(n.pageX-t.win.pageXOffset,n.pageY-t.win.pageYOffset+i),e(o).hasClass("fr-tooltip"))return!0
if(o&&("TH"==o.tagName||"TD"==o.tagName||"TABLE"==o.tagName)&&(e(o).parents(".fr-wrapper").length||t.opts.iframe))return B(n,e(o).closest("table")),!0
if(a=t.doc.elementFromPoint(n.pageX-t.win.pageXOffset+i,n.pageY-t.win.pageYOffset),e(a).hasClass("fr-tooltip"))return!0
if(a&&("TH"==a.tagName||"TD"==a.tagName||"TABLE"==a.tagName)&&(e(a).parents(".fr-wrapper").length||t.opts.iframe))return H(n,e(a).closest("table")),!0}t.core.sameInstance(te)&&F()}}function U(e){oe=null
var n=t.doc.elementFromPoint(e.pageX-t.win.pageXOffset,e.pageY-t.win.pageYOffset)
t.opts.tableResizer&&(!t.popups.areVisible()||t.popups.areVisible()&&t.popups.isVisible("table.edit"))&&j(e,n),!t.opts.tableInsertHelper||t.popups.areVisible()||t.$tb.hasClass("fr-inline")&&t.$tb.is(":visible")||$(e,n)}function W(){if(ae){var e=ee.data("table").offset().top-t.win.pageYOffset
t.opts.iframe&&(e+=t.$iframe.offset().top-t.helpers.scrollTop()),ee.css("top",e)}}function K(t,n){var r,i=e(n[0][t]).outerWidth()
for(r=1;r<n.length;r++)i=Math.min(i,e(n[r][t]).outerWidth())
return i}function q(e,t,n){var r,i=0
for(r=e;t>=r;r++)i+=K(r,n)
return i}function z(e){if(Q().length>1&&re&&_(),!1===re&&!1===ne&&!1===ae)oe&&clearTimeout(oe),(!t.edit.isDisabled()||t.popups.isVisible("table.edit"))&&(oe=setTimeout(U,30,e))
else if(ae){var n=e.pageX-t.win.pageXOffset
t.opts.iframe&&(n+=t.$iframe.offset().left)
var r=ee.data("max-left"),i=ee.data("max-right")
n>=r&&i>=n?ee.css("left",n-t.opts.tableResizerOffset-t.$wp.offset().left):r>n&&parseFloat(ee.css("left"),10)>r-t.opts.tableResizerOffset?ee.css("left",r-t.opts.tableResizerOffset-t.$wp.offset().left):n>i&&parseFloat(ee.css("left"),10)<i-t.opts.tableResizerOffset&&ee.css("left",i-t.opts.tableResizerOffset-t.$wp.offset().left)}else re&&F()}function V(n){t.node.isEmpty(n.get(0))?n.prepend(e.FE.MARKERS):n.prepend(e.FE.START_MARKER).append(e.FE.END_MARKER)}function G(){t.shared.$ti_helper||(t.shared.$ti_helper=e('<div class="fr-insert-helper"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+t.language.translate("Insert")+'"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a></div>'),t.events.bindClick(t.shared.$ti_helper,"a",function(){var e=te.data("selected-cell"),n=te.data("position"),r=te.data("instance")||t
"before"==n?(t.undo.saveStep(),e.addClass("fr-selected-cell"),r.table.insertColumn(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()):"after"==n?(t.undo.saveStep(),e.addClass("fr-selected-cell"),r.table.insertColumn(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()):"above"==n?(t.undo.saveStep(),e.addClass("fr-selected-cell"),r.table.insertRow(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()):"below"==n&&(t.undo.saveStep(),e.addClass("fr-selected-cell"),r.table.insertRow(n),e.removeClass("fr-selected-cell"),t.undo.saveStep()),F()}),t.events.on("shared.destroy",function(){t.shared.$ti_helper.html("").removeData().remove(),t.shared.$ti_helper=null},!0),t.events.$on(t.shared.$ti_helper,"mousemove",function(e){e.stopPropagation()},!0),t.events.$on(e(t.o_win),"scroll",function(){F()},!0),t.events.$on(t.$wp,"scroll",function(){F()},!0)),te=t.shared.$ti_helper,t.events.on("destroy",function(){te=null}),t.tooltip.bind(t.$box,".fr-insert-helper > a.fr-floating-btn")}function Y(){ie=null,clearTimeout(oe)}function Q(){return t.el.querySelectorAll(".fr-selected-cell")}function X(){var n=Q()
if(n.length){for(var r=n[0];r&&"TABLE"!=r.tagName&&r.parentNode!=t.el;)r=r.parentNode
return e(r&&"TABLE"==r.tagName?r:[])}return e([])}function J(r){if(r.altKey&&r.which==e.FE.KEYCODE.SPACE){var i,o=t.selection.element()
if("TD"==o.tagName||"TH"==o.tagName?i=o:e(o).closest("td").length>0?i=e(o).closest("td").get(0):e(o).closest("th").length>0&&(i=e(o).closest("th").get(0)),i)return r.preventDefault(),C(i,i),n(),!1}}function Z(n){var r=Q()
if(r.length>0){var i,o,a=v(),s=n.which
1==r.length?o=i=r[0]:(i=t.el.querySelector(".fr-cell-fixed"),o=t.el.querySelector(".fr-cell-handler"))
var l=b(o,a)
if(e.FE.KEYCODE.ARROW_RIGHT==s){if(l.col<a[0].length-1)return C(i,a[l.row][l.col+1]),!1}else if(e.FE.KEYCODE.ARROW_DOWN==s){if(l.row<a.length-1)return C(i,a[l.row+1][l.col]),!1}else if(e.FE.KEYCODE.ARROW_LEFT==s){if(l.col>0)return C(i,a[l.row][l.col-1]),!1}else if(e.FE.KEYCODE.ARROW_UP==s&&l.row>0)return C(i,a[l.row-1][l.col]),!1}}var ee,te,ne,re,ie,oe,ae
return{_init:function(){if(!t.$wp)return!1
if(!t.helpers.isMobile()){re=!1,ne=!1,ae=!1,t.events.$on(t.$el,"mousedown",x),t.popups.onShow("image.edit",function(){T(),re=!1,ne=!1}),t.popups.onShow("link.edit",function(){T(),re=!1,ne=!1}),t.events.on("commands.mousedown",function(e){e.parents(".fr-toolbar").length>0&&T()}),t.events.$on(t.$el,"mouseenter","th, td",N),t.events.$on(t.$win,"mouseup",R),t.opts.iframe&&t.events.$on(e(t.o_win),"mouseup",R),t.events.$on(t.$win,"mousemove",z),t.events.$on(e(t.o_win),"scroll",W),t.events.on("contentChanged",function(){Q().length>0&&(n(),t.$el.find("img").on("load.selected-cells",function(){e(this).off("load.selected-cells"),Q().length>0&&n()}))}),t.events.$on(e(t.o_win),"resize",function(){T()}),t.events.on("toolbar.esc",function(){return Q().length>0?(t.events.disableBlur(),t.events.focus(),!1):void 0},!0),t.events.$on(e(t.o_win),"keydown",function(){re&&ne&&(re=!1,ne=!1,t.$el.removeClass("fr-no-selection"),t.edit.on(),t.selection.setAtEnd(t.$el.find(".fr-selected-cell:last").get(0)),t.selection.restore(),T())}),t.events.$on(t.$el,"keydown",function(e){e.shiftKey?!1===Z(e)&&setTimeout(function(){n()},0):P(e)}),t.events.on("keydown",function(n){if(!1===function(n){if(n.which==e.FE.KEYCODE.TAB){var r
if(Q().length>0)r=t.$el.find(".fr-selected-cell:last")
else{var i=t.selection.element()
"TD"==i.tagName||"TH"==i.tagName?r=e(i):i!=t.el&&(e(i).parentsUntil(t.$el,"td").length>0?r=e(i).parents("td:first"):e(i).parentsUntil(t.$el,"th").length>0&&(r=e(i).parents("th:first")))}if(r)return n.preventDefault(),!!(e(t.selection.element()).parents("ol, ul").length>0&&(e(t.selection.element()).parents("li").prev().length>0||e(t.selection.element()).is("li")&&e(t.selection.element()).prev().length>0))||(O(),n.shiftKey?r.prev().length>0?V(r.prev()):r.closest("tr").length>0&&r.closest("tr").prev().length>0?V(r.closest("tr").prev().find("td:last")):r.closest("tbody").length>0&&r.closest("table").find("thead tr").length>0&&V(r.closest("table").find("thead tr th:last")):r.next().length>0?V(r.next()):r.closest("tr").length>0&&r.closest("tr").next().length>0?V(r.closest("tr").next().find("td:first")):r.closest("thead").length>0&&r.closest("table").find("tbody tr").length>0?V(r.closest("table").find("tbody tr td:first")):(r.addClass("fr-selected-cell"),f("below"),T(),V(r.closest("tr").next().find("td:first"))),t.selection.restore(),!1)}}(n))return!1
var r=Q()
if(r.length>0){if(r.length>0&&t.keys.ctrlKey(n)&&n.which==e.FE.KEYCODE.A)return T(),t.popups.isVisible("table.edit")&&t.popups.hide("table.edit"),r=[],!0
if(n.which==e.FE.KEYCODE.ESC&&t.popups.isVisible("table.edit"))return T(),t.popups.hide("table.edit"),n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),r=[],!1
if(r.length>1&&(n.which==e.FE.KEYCODE.BACKSPACE||n.which==e.FE.KEYCODE.DELETE)){t.undo.saveStep()
for(var i=0;i<r.length;i++)e(r[i]).html("<br>"),i==r.length-1&&e(r[i]).prepend(e.FE.MARKERS)
return t.selection.restore(),t.undo.saveStep(),r=[],!1}if(r.length>1&&n.which!=e.FE.KEYCODE.F10&&!t.keys.isBrowserAction(n))return n.preventDefault(),r=[],!1}else if(r=[],!1===J(n))return!1},!0)
var r=[]
t.events.on("html.beforeGet",function(){r=Q()
for(var e=0;e<r.length;e++)r[e].className=(r[e].className||"").replace(/fr-selected-cell/g,"")}),t.events.on("html.afterGet",function(){for(var e=0;e<r.length;e++)r[e].className=(r[e].className?r[e].className.trim()+" ":"")+"fr-selected-cell"
r=[]}),o(!0),s(!0)}t.events.on("destroy",Y)},insert:function(n,r){var i,o,a='<table style="width: 100%;" class="fr-inserted-table"><tbody>',s=100/r
for(i=0;n>i;i++){for(a+="<tr>",o=0;r>o;o++)a+='<td style="width: '+s.toFixed(4)+'%;">',0===i&&0===o&&(a+=e.FE.MARKERS),a+="<br></td>"
a+="</tr>"}a+="</tbody></table>",t.html.insert(a),t.selection.restore()
var l=t.$el.find(".fr-inserted-table")
l.removeClass("fr-inserted-table"),t.events.trigger("table.inserted",[l.get(0)])},remove:c,insertRow:f,deleteRow:function(){var n=X()
if(n.length>0){var r,i,o,a=v(),s=A(a)
if(0===s.min_i&&s.max_i==a.length-1)c()
else{for(r=s.max_i;r>=s.min_i;r--){for(o=e(n.find("tr").not(n.find("table tr")).get(r)),i=0;i<a[r].length;i++)if(0===i||a[r][i]!=a[r][i-1]){var l=e(a[r][i])
if(parseInt(l.attr("rowspan"),10)>1){var u=parseInt(l.attr("rowspan"),10)-1
1==u?l.removeAttr("rowspan"):l.attr("rowspan",u)}if(r<a.length-1&&a[r][i]==a[r+1][i]&&(0===r||a[r][i]!=a[r-1][i])){for(var f=a[r][i],p=i;p>0&&a[r][p]==a[r][p-1];)p--
0===p?e(n.find("tr").not(n.find("table tr")).get(r+1)).prepend(f):e(a[r+1][p-1]).after(f)}}var d=o.parent()
o.remove(),0===d.find("tr").length&&d.remove(),a=v(n)}m(0,a.length-1,0,a[0].length-1,n),s.min_i>0?t.selection.setAtEnd(a[s.min_i-1][0]):t.selection.setAtEnd(a[0][0]),t.selection.restore(),t.popups.hide("table.edit")}}},insertColumn:function(r){var i=X()
if(i.length>0){var o,a=v(),s=A(a)
o="before"==r?s.min_j:s.max_j
var l,u=100/a[0].length,c=100/(a[0].length+1)
i.find("th, td").each(function(){(l=e(this)).data("old-width",l.outerWidth()/i.outerWidth()*100)}),i.find("tr").not(i.find("table tr")).each(function(t){for(var n,i=e(this),s=0,l=0;o>s-1;){if(!(n=i.find("> th, > td").get(l))){n=null
break}n==a[t][s]?(s+=parseInt(e(n).attr("colspan"),10)||1,l++):(s+=parseInt(e(a[t][s]).attr("colspan"),10)||1,"after"==r&&(n=0===l?-1:i.find("> th, > td").get(l-1)))}var f,p=e(n)
if("after"==r&&s-1>o||"before"==r&&o>0&&a[t][o]==a[t][o-1]){if(0===t||t>0&&a[t][o]!=a[t-1][o]){var d=parseInt(p.attr("colspan"),10)+1
p.attr("colspan",d),p.css("width",(p.data("old-width")*c/u+c).toFixed(4)+"%"),p.removeData("old-width")}}else f=i.find("th").length>0?'<th style="width: '+c.toFixed(4)+'%;"><br></th>':'<td style="width: '+c.toFixed(4)+'%;"><br></td>',-1==n?i.prepend(f):null==n?i.append(f):"before"==r?p.before(f):"after"==r&&p.after(f)}),i.find("th, td").each(function(){(l=e(this)).data("old-width")&&(l.css("width",(l.data("old-width")*c/u).toFixed(4)+"%"),l.removeData("old-width"))}),t.popups.isVisible("table.edit")&&n()}},deleteColumn:function(){var n=X()
if(n.length>0){var r,i,o,a=v(),s=A(a)
if(0===s.min_j&&s.max_j==a[0].length-1)c()
else{var l=100/a[0].length,u=100/(a[0].length-s.max_j+s.min_j-1)
for(n.find("th, td").each(function(){(o=e(this)).hasClass("fr-selected-cell")||o.data("old-width",o.outerWidth()/n.outerWidth()*100)}),i=s.max_j;i>=s.min_j;i--)for(r=0;r<a.length;r++)if(0===r||a[r][i]!=a[r-1][i])if(o=e(a[r][i]),(parseInt(o.attr("colspan"),10)||1)>1){var f=parseInt(o.attr("colspan"),10)-1
1==f?o.removeAttr("colspan"):o.attr("colspan",f),o.css("width",((o.data("old-width")-K(i,a))*u/l).toFixed(4)+"%"),o.removeData("old-width")}else{var p=e(o.parent().get(0))
o.remove(),0===p.find("> th, > td").length&&(0===p.prev().length||0===p.next().length||p.prev().find("> th[rowspan], > td[rowspan]").length<p.prev().find("> th, > td").length)&&p.remove()}m(0,a.length-1,0,a[0].length-1,n),s.min_j>0?t.selection.setAtEnd(a[s.min_i][s.min_j-1]):t.selection.setAtEnd(a[s.min_i][0]),t.selection.restore(),t.popups.hide("table.edit"),n.find("th, td").each(function(){(o=e(this)).data("old-width")&&(o.css("width",(o.data("old-width")*u/l).toFixed(4)+"%"),o.removeData("old-width"))})}}},mergeCells:function(){if(Q().length>1&&(0===t.$el.find("th.fr-selected-cell").length||0===t.$el.find("td.fr-selected-cell").length)){E()
var r,i,o=A(v()),a=t.$el.find(".fr-selected-cell"),s=e(a[0]),l=s.parent().find(".fr-selected-cell"),u=s.closest("table"),c=s.html(),f=0
for(r=0;r<l.length;r++)f+=e(l[r]).outerWidth()
for(s.css("width",(f/u.outerWidth()*100).toFixed(4)+"%"),o.min_j<o.max_j&&s.attr("colspan",o.max_j-o.min_j+1),o.min_i<o.max_i&&s.attr("rowspan",o.max_i-o.min_i+1),r=1;r<a.length;r++)"<br>"!=(i=e(a[r])).html()&&""!==i.html()&&(c+="<br>"+i.html()),i.remove()
s.html(c),t.selection.setAtEnd(s.get(0)),t.selection.restore(),t.toolbar.enable(),d(o.min_i,o.max_i,u)
var h=u.find("tr:empty")
for(r=h.length-1;r>=0;r--)e(h[r]).remove()
p(o.min_j,o.max_j,u),n()}},splitCellVertically:function(){if(1==Q().length){var n=t.$el.find(".fr-selected-cell"),r=parseInt(n.attr("colspan"),10)||1,i=n.parent().outerWidth(),o=n.outerWidth(),a=n.clone().html("<br>"),s=v(),l=b(n.get(0),s)
if(r>1){var u=Math.ceil(r/2)
o=q(l.col,l.col+u-1,s)/i*100
var c=q(l.col+u,l.col+r-1,s)/i*100
u>1?n.attr("colspan",u):n.removeAttr("colspan"),r-u>1?a.attr("colspan",r-u):a.removeAttr("colspan"),n.css("width",o.toFixed(4)+"%"),a.css("width",c.toFixed(4)+"%")}else{var f
for(f=0;f<s.length;f++)if(0===f||s[f][l.col]!=s[f-1][l.col]){var p=e(s[f][l.col])
if(!p.is(n)){var d=(parseInt(p.attr("colspan"),10)||1)+1
p.attr("colspan",d)}}o=o/i*100/2,n.css("width",o.toFixed(4)+"%"),a.css("width",o.toFixed(4)+"%")}n.after(a),T(),t.popups.hide("table.edit")}},splitCellHorizontally:function(){if(1==Q().length){var n=t.$el.find(".fr-selected-cell"),r=n.parent(),i=n.closest("table"),o=parseInt(n.attr("rowspan"),10),a=v(),s=b(n.get(0),a),l=n.clone().html("<br>")
if(o>1){var u=Math.ceil(o/2)
u>1?n.attr("rowspan",u):n.removeAttr("rowspan"),o-u>1?l.attr("rowspan",o-u):l.removeAttr("rowspan")
for(var c=s.row+u,f=0===s.col?s.col:s.col-1;f>=0&&(a[c][f]==a[c][f-1]||c>0&&a[c][f]==a[c-1][f]);)f--;-1==f?e(i.find("tr").not(i.find("table tr")).get(c)).prepend(l):e(a[c][f]).after(l)}else{var p,d=e("<tr>").append(l)
for(p=0;p<a[0].length;p++)if(0===p||a[s.row][p]!=a[s.row][p-1]){var h=e(a[s.row][p])
h.is(n)||h.attr("rowspan",(parseInt(h.attr("rowspan"),10)||1)+1)}r.after(d)}T(),t.popups.hide("table.edit")}},addHeader:function(){var t=X()
if(t.length>0&&0===t.find("th").length){var r,i="<thead><tr>",o=0
for(t.find("tr:first > td").each(function(){var t=e(this)
o+=parseInt(t.attr("colspan"),10)||1}),r=0;o>r;r++)i+="<th><br></th>"
i+="</tr></thead>",t.prepend(i),n()}},removeHeader:function(){var e=X(),r=e.find("thead")
if(r.length>0)if(0===e.find("tbody tr").length)c()
else if(r.remove(),Q().length>0)n()
else{t.popups.hide("table.edit")
var i=e.find("tbody tr:first td:first").get(0)
i&&(t.selection.setAtEnd(i),t.selection.restore())}},setBackground:g,showInsertPopup:function(){var e=t.$tb.find('.fr-command[data-cmd="insertTable"]'),n=t.popups.get("table.insert")
if(n||(n=o()),!n.hasClass("fr-active")){t.popups.refresh("table.insert"),t.popups.setContainer("table.insert",t.$tb)
var r=e.offset().left+e.outerWidth()/2,i=e.offset().top+(t.opts.toolbarBottom?10:e.outerHeight()-10)
t.popups.show("table.insert",r,i,e.outerHeight())}},showEditPopup:n,showColorsPopup:r,back:function(){Q().length>0?n():(t.popups.hide("table.insert"),t.toolbar.showInline())},verticalAlign:function(e){t.$el.find(".fr-selected-cell").css("vertical-align",e)},horizontalAlign:function(e){t.$el.find(".fr-selected-cell").css("text-align",e)},applyStyle:function(e,t,n,r){if(t.length>0){if(!n){var i=Object.keys(r)
i.splice(i.indexOf(e),1),t.removeClass(i.join(" "))}t.toggleClass(e)}},selectedTable:X,selectedCells:Q,customColor:function(){var e=t.popups.get("table.colors").find(".fr-table-colors-hex-layer input")
e.length&&g(e.val())}}},e.FE.DefineIcon("insertTable",{NAME:"table"}),e.FE.RegisterCommand("insertTable",{title:"Insert Table",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("table.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("table.insert")):this.table.showInsertPopup()},plugin:"table"}),e.FE.RegisterCommand("tableInsert",{callback:function(e,t,n){this.table.insert(t,n),this.popups.hide("table.insert")}}),e.FE.DefineIcon("tableHeader",{NAME:"header"}),e.FE.RegisterCommand("tableHeader",{title:"Table Header",focus:!1,toggle:!0,callback:function(){this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active")?this.table.removeHeader():this.table.addHeader()},refresh:function(e){var t=this.table.selectedTable()
t.length>0&&(0===t.find("th").length?e.removeClass("fr-active").attr("aria-pressed",!1):e.addClass("fr-active").attr("aria-pressed",!0))}}),e.FE.DefineIcon("tableRows",{NAME:"bars"}),e.FE.RegisterCommand("tableRows",{type:"dropdown",focus:!1,title:"Row",options:{above:"Insert row above",below:"Insert row below",delete:"Delete row"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableRows.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(n[r])+"</a></li>")
return t+"</ul>"},callback:function(e,t){"above"==t||"below"==t?this.table.insertRow(t):this.table.deleteRow()}}),e.FE.DefineIcon("tableColumns",{NAME:"bars fa-rotate-90"}),e.FE.RegisterCommand("tableColumns",{type:"dropdown",focus:!1,title:"Column",options:{before:"Insert column before",after:"Insert column after",delete:"Delete column"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableColumns.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(n[r])+"</a></li>")
return t+"</ul>"},callback:function(e,t){"before"==t||"after"==t?this.table.insertColumn(t):this.table.deleteColumn()}}),e.FE.DefineIcon("tableCells",{NAME:"square-o"}),e.FE.RegisterCommand("tableCells",{type:"dropdown",focus:!1,title:"Cell",options:{merge:"Merge cells","vertical-split":"Vertical split","horizontal-split":"Horizontal split"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableCells.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(n[r])+"</a></li>")
return t+"</ul>"},callback:function(e,t){"merge"==t?this.table.mergeCells():"vertical-split"==t?this.table.splitCellVertically():this.table.splitCellHorizontally()},refreshOnShow:function(e,t){this.$el.find(".fr-selected-cell").length>1?(t.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled",!1)):(t.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled",!1),t.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled",!1))}}),e.FE.DefineIcon("tableRemove",{NAME:"trash"}),e.FE.RegisterCommand("tableRemove",{title:"Remove Table",focus:!1,callback:function(){this.table.remove()}}),e.FE.DefineIcon("tableStyle",{NAME:"paint-brush"}),e.FE.RegisterCommand("tableStyle",{title:"Table Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableStyles
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>")
return e+"</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell").closest("table"),this.opts.tableMultipleStyles,this.opts.tableStyles)},refreshOnShow:function(t,n){var r=this.$el.find(".fr-selected-cell").closest("table")
r&&n.find(".fr-command").each(function(){var t=e(this).data("param1"),n=r.hasClass(t)
e(this).toggleClass("fr-active",n).attr("aria-selected",n)})}}),e.FE.DefineIcon("tableCellBackground",{NAME:"tint"}),e.FE.RegisterCommand("tableCellBackground",{title:"Cell Background",focus:!1,popup:!0,callback:function(){this.table.showColorsPopup()}}),e.FE.RegisterCommand("tableCellBackgroundColor",{undo:!0,focus:!1,callback:function(e,t){this.table.setBackground(t)}}),e.FE.DefineIcon("tableBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("tableBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.table.back()},refresh:function(e){0!==this.table.selectedCells().length||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),e.FE.DefineIcon("tableCellVerticalAlign",{NAME:"arrows-v"}),e.FE.RegisterCommand("tableCellVerticalAlign",{type:"dropdown",focus:!1,title:"Vertical Align",options:{Top:"Align Top",Middle:"Align Middle",Bottom:"Align Bottom"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableCellVerticalAlign.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'+r.toLowerCase()+'" title="'+this.language.translate(n[r])+'">'+this.language.translate(r)+"</a></li>")
return t+"</ul>"},callback:function(e,t){this.table.verticalAlign(t)},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.$el.find(".fr-selected-cell").css("vertical-align")+'"]').addClass("fr-active").attr("aria-selected",!0)}}),e.FE.DefineIcon("tableCellHorizontalAlign",{NAME:"align-left"}),e.FE.DefineIcon("align-left",{NAME:"align-left"}),e.FE.DefineIcon("align-right",{NAME:"align-right"}),e.FE.DefineIcon("align-center",{NAME:"align-center"}),e.FE.DefineIcon("align-justify",{NAME:"align-justify"}),e.FE.RegisterCommand("tableCellHorizontalAlign",{type:"dropdown",focus:!1,title:"Horizontal Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var t='<ul class="fr-dropdown-list" role="presentation">',n=e.FE.COMMANDS.tableCellHorizontalAlign.options
for(var r in n)n.hasOwnProperty(r)&&(t+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'+r+'" title="'+this.language.translate(n[r])+'">'+this.icon.create("align-"+r)+'<span class="fr-sr-only">'+this.language.translate(n[r])+"</span></a></li>")
return t+"</ul>"},callback:function(e,t){this.table.horizontalAlign(t)},refresh:function(t){var n=this.table.selectedCells()
n.length&&t.find("> *:first").replaceWith(this.icon.create("align-"+this.helpers.getAlignment(e(n[0]))))},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.helpers.getAlignment(this.$el.find(".fr-selected-cell:first"))+'"]').addClass("fr-active").attr("aria-selected",!0)}}),e.FE.DefineIcon("tableCellStyle",{NAME:"magic"}),e.FE.RegisterCommand("tableCellStyle",{title:"Cell Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableCellStyles
for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>")
return e+"</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell"),this.opts.tableCellMultipleStyles,this.opts.tableCellStyles)},refreshOnShow:function(t,n){var r=this.$el.find(".fr-selected-cell:first")
r&&n.find(".fr-command").each(function(){var t=e(this).data("param1"),n=r.hasClass(t)
e(this).toggleClass("fr-active",n).attr("aria-selected",n)})}}),e.FE.RegisterCommand("tableCellBackgroundCustomColor",{title:"OK",undo:!0,callback:function(){this.table.customColor()}}),e.FE.DefineIcon("tableColorRemove",{NAME:"eraser"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.FE.URLRegEx="(^| |\\u00A0)("+e.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}\\.[a-z0-9+-_]{1,}))$",e.FE.PLUGINS.url=function(t){function n(e,n,r){for(var i="";r.length&&"."==r[r.length-1];)i+=".",r=r.substring(0,r.length-1)
var o=r
if(t.opts.linkConvertEmailAddress)t.helpers.isEmail(o)&&!/^mailto:.*/i.test(o)&&(o="mailto:"+o)
else if(t.helpers.isEmail(o))return n+r
return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(o)||(o="//"+o),(n||"")+"<a"+(t.opts.linkAlwaysBlank?' target="_blank"':"")+(s?' rel="'+s+'"':"")+' data-fr-linked="true" href="'+o+'">'+r.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&amp;/g,"&").replace(/&/g,"&amp;")+"</a>"+i}function r(){return new RegExp(e.FE.URLRegEx,"gi")}function i(e){return t.opts.linkAlwaysNoFollow&&(s="nofollow"),t.opts.linkAlwaysBlank&&(s?s+=" noopener noreferrer":s="noopener noreferrer"),e.replace(r(),n)}function o(e){var t=e.split(" ")
return t[t.length-1]}function a(){var n=t.selection.ranges(0).startContainer
if(!n||n.nodeType!==Node.TEXT_NODE)return!1
if(function e(n){return!!n&&("A"===n.tagName||!(!n.parentNode||n.parentNode==t.el)&&e(n.parentNode))}(n))return!1
if(r().test(o(n.textContent))){e(n).before(i(n.textContent))
var a=e(n.parentNode).find("a[data-fr-linked]")
a.removeAttr("data-fr-linked"),n.parentNode.removeChild(n),t.events.trigger("url.linked",[a.get(0)])}else if(n.textContent.split(" ").length<=2&&n.previousSibling&&"A"===n.previousSibling.tagName){var s=n.previousSibling.innerText+n.textContent
r().test(o(s))&&(e(n.previousSibling).replaceWith(i(s)),n.parentNode.removeChild(n))}}var s=null
return{_init:function(){t.events.on("keypress",function(n){var r=n.which
!t.selection.isCollapsed()||r!=e.FE.KEYCODE.ENTER&&r!=e.FE.KEYCODE.SPACE&&"."!=n.key&&")"!=n.key&&"("!=n.key||a()},!0)}}}}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],t):t(e.bootstrap={},e.jQuery,e.Popper)}(this,function(e,t,n){"use strict"
function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n
var a=function(e){var t=!1
function n(t){var n=this,i=!1
return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e))
return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target")
n&&"#"!==n||(n=t.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(t){return t="function"==typeof e.escapeSelector?e.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n))
try{return e(document).find(n).length>0?n:null}catch(e){return null}},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t.end)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],a=t[i],s=a&&r.isElement(a)?"element":(l=a,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase())
if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var l}}
return t=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},e.fn.emulateTransitionEnd=n,r.supportsTransitionEnd()&&(e.event.special[r.TRANSITION_END]={bindType:t.end,delegateType:t.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),r}(t),s=function(e){var t=e.fn.alert,n={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},r="alert",o="fade",s="show",l=function(){function t(e){this._element=e}var l=t.prototype
return l.close=function(e){e=e||this._element
var t=this._getRootElement(e)
this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},l.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},l._getRootElement=function(t){var n=a.getSelectorFromElement(t),i=!1
return n&&(i=e(n)[0]),i||(i=e(t).closest("."+r)[0]),i},l._triggerCloseEvent=function(t){var r=e.Event(n.CLOSE)
return e(t).trigger(r),r},l._removeElement=function(t){var n=this
e(t).removeClass(s),a.supportsTransitionEnd()&&e(t).hasClass(o)?e(t).one(a.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)},l._destroyElement=function(t){e(t).detach().trigger(n.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.alert")
i||(i=new t(this),r.data("bs.alert",i)),"close"===n&&i[n](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}()
return e(document).on(n.CLICK_DATA_API,'[data-dismiss="alert"]',l._handleDismiss(new l)),e.fn.alert=l._jQueryInterface,e.fn.alert.Constructor=l,e.fn.alert.noConflict=function(){return e.fn.alert=t,l._jQueryInterface},l}(t),l=function(e){var t="button",n=e.fn[t],r="active",o="btn",a="focus",s='[data-toggle^="button"]',l='[data-toggle="buttons"]',u="input",c=".active",f=".btn",p={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},d=function(){function t(e){this._element=e}var n=t.prototype
return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest(l)[0]
if(i){var o=e(this._element).find(u)[0]
if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(r))t=!1
else{var a=e(i).find(c)[0]
a&&e(a).removeClass(r)}if(t){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return
o.checked=!e(this._element).hasClass(r),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(r)),t&&e(this._element).toggleClass(r)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var r=e(this).data("bs.button")
r||(r=new t(this),e(this).data("bs.button",r)),"toggle"===n&&r[n]()})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}()
return e(document).on(p.CLICK_DATA_API,s,function(t){t.preventDefault()
var n=t.target
e(n).hasClass(o)||(n=e(n).closest(f)),d._jQueryInterface.call(e(n),"toggle")}).on(p.FOCUS_BLUR_DATA_API,s,function(t){var n=e(t.target).closest(f)[0]
e(n).toggleClass(a,/^focus(in)?$/.test(t.type))}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=n,d._jQueryInterface},d}(t),u=function(e){var t="carousel",n="bs.carousel",r="."+n,s=e.fn[t],l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},u={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c="next",f="prev",p="left",d="right",h={SLIDE:"slide"+r,SLID:"slid"+r,KEYDOWN:"keydown"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r,TOUCHEND:"touchend"+r,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},m="carousel",g="active",v="slide",b="carousel-item-right",y="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",_={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},A=function(){function s(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(_.INDICATORS)[0],this._addEventListeners()}var A=s.prototype
return A.next=function(){this._isSliding||this._slide(c)},A.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},A.prev=function(){this._isSliding||this._slide(f)},A.pause=function(t){t||(this._isPaused=!0),e(this._element).find(_.NEXT_PREV)[0]&&a.supportsTransitionEnd()&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},A.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},A.to=function(t){var n=this
this._activeElement=e(this._element).find(_.ACTIVE_ITEM)[0]
var r=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(h.SLID,function(){return n.to(t)})
else{if(r===t)return this.pause(),void this.cycle()
var i=t>r?c:f
this._slide(i,this._items[t])}},A.dispose=function(){e(this._element).off(r),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},A._getConfig=function(e){return e=o({},l,e),a.typeCheckConfig(t,e,u),e},A._addEventListeners=function(){var t=this
this._config.keyboard&&e(this._element).on(h.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(h.MOUSEENTER,function(e){return t.pause(e)}).on(h.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(h.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},A._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev()
break
case 39:e.preventDefault(),this.next()}},A._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(_.ITEM)),this._items.indexOf(t)},A._getItemByDirection=function(e,t){var n=e===c,r=e===f,i=this._getItemIndex(t),o=this._items.length-1
if((r&&0===i||n&&i===o)&&!this._config.wrap)return t
var a=(i+(e===f?-1:1))%this._items.length
return-1===a?this._items[this._items.length-1]:this._items[a]},A._triggerSlideEvent=function(t,n){var r=this._getItemIndex(t),i=this._getItemIndex(e(this._element).find(_.ACTIVE_ITEM)[0]),o=e.Event(h.SLIDE,{relatedTarget:t,direction:n,from:i,to:r})
return e(this._element).trigger(o),o},A._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(_.ACTIVE).removeClass(g)
var n=this._indicatorsElement.children[this._getItemIndex(t)]
n&&e(n).addClass(g)}},A._slide=function(t,n){var r,i,o,s=this,l=e(this._element).find(_.ACTIVE_ITEM)[0],u=this._getItemIndex(l),f=n||l&&this._getItemByDirection(t,l),m=this._getItemIndex(f),A=Boolean(this._interval)
if(t===c?(r=y,i=E,o=p):(r=b,i=T,o=d),f&&e(f).hasClass(g))this._isSliding=!1
else if(!this._triggerSlideEvent(f,o).isDefaultPrevented()&&l&&f){this._isSliding=!0,A&&this.pause(),this._setActiveIndicatorElement(f)
var w=e.Event(h.SLID,{relatedTarget:f,direction:o,from:u,to:m})
a.supportsTransitionEnd()&&e(this._element).hasClass(v)?(e(f).addClass(i),a.reflow(f),e(l).addClass(r),e(f).addClass(r),e(l).one(a.TRANSITION_END,function(){e(f).removeClass(r+" "+i).addClass(g),e(l).removeClass(g+" "+i+" "+r),s._isSliding=!1,setTimeout(function(){return e(s._element).trigger(w)},0)}).emulateTransitionEnd(600)):(e(l).removeClass(g),e(f).addClass(g),this._isSliding=!1,e(this._element).trigger(w)),A&&this.cycle()}},s._jQueryInterface=function(t){return this.each(function(){var r=e(this).data(n),i=o({},l,e(this).data())
"object"==typeof t&&(i=o({},i,t))
var a="string"==typeof t?t:i.slide
if(r||(r=new s(this,i),e(this).data(n,r)),"number"==typeof t)r.to(t)
else if("string"==typeof a){if(void 0===r[a])throw new TypeError('No method named "'+a+'"')
r[a]()}else i.interval&&(r.pause(),r.cycle())})},s._dataApiClickHandler=function(t){var r=a.getSelectorFromElement(this)
if(r){var i=e(r)[0]
if(i&&e(i).hasClass(m)){var l=o({},e(i).data(),e(this).data()),u=this.getAttribute("data-slide-to")
u&&(l.interval=!1),s._jQueryInterface.call(e(i),l),u&&e(i).data(n).to(u),t.preventDefault()}}},i(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}}]),s}()
return e(document).on(h.CLICK_DATA_API,_.DATA_SLIDE,A._dataApiClickHandler),e(window).on(h.LOAD_DATA_API,function(){e(_.DATA_RIDE).each(function(){var t=e(this)
A._jQueryInterface.call(t,t.data())})}),e.fn[t]=A._jQueryInterface,e.fn[t].Constructor=A,e.fn[t].noConflict=function(){return e.fn[t]=s,A._jQueryInterface},A}(t),c=function(e){var t="collapse",n="bs.collapse",r=e.fn[t],s={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},u={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},c="show",f="collapse",p="collapsing",d="collapsed",h="width",m="height",g={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},v=function(){function r(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var r=e(g.DATA_TOGGLE),i=0;i<r.length;i++){var o=r[i],s=a.getSelectorFromElement(o)
null!==s&&e(s).filter(t).length>0&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var v=r.prototype
return v.toggle=function(){e(this._element).hasClass(c)?this.hide():this.show()},v.show=function(){var t,i,o=this
if(!this._isTransitioning&&!e(this._element).hasClass(c)&&(this._parent&&0===(t=e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(i=e(t).not(this._selector).data(n))&&i._isTransitioning))){var s=e.Event(u.SHOW)
if(e(this._element).trigger(s),!s.isDefaultPrevented()){t&&(r._jQueryInterface.call(e(t).not(this._selector),"hide"),i||e(t).data(n,null))
var l=this._getDimension()
e(this._element).removeClass(f).addClass(p),this._element.style[l]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0)
var h=function(){e(o._element).removeClass(p).addClass(f).addClass(c),o._element.style[l]="",o.setTransitioning(!1),e(o._element).trigger(u.SHOWN)}
if(a.supportsTransitionEnd()){var m="scroll"+(l[0].toUpperCase()+l.slice(1))
e(this._element).one(a.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[l]=this._element[m]+"px"}else h()}}},v.hide=function(){var t=this
if(!this._isTransitioning&&e(this._element).hasClass(c)){var n=e.Event(u.HIDE)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension()
if(this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",a.reflow(this._element),e(this._element).addClass(p).removeClass(f).removeClass(c),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var o=this._triggerArray[i],s=a.getSelectorFromElement(o)
if(null!==s)e(s).hasClass(c)||e(o).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0)
var l=function(){t.setTransitioning(!1),e(t._element).removeClass(p).addClass(f).trigger(u.HIDDEN)}
this._element.style[r]="",a.supportsTransitionEnd()?e(this._element).one(a.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},v.setTransitioning=function(e){this._isTransitioning=e},v.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},v._getConfig=function(e){return(e=o({},s,e)).toggle=Boolean(e.toggle),a.typeCheckConfig(t,e,l),e},v._getDimension=function(){return e(this._element).hasClass(h)?h:m},v._getParent=function(){var t=this,n=null
a.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0]
var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]'
return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(r._getTargetFromElement(n),[n])}),n},v._addAriaAndCollapsedClass=function(t,n){if(t){var r=e(t).hasClass(c)
n.length>0&&e(n).toggleClass(d,!r).attr("aria-expanded",r)}},r._getTargetFromElement=function(t){var n=a.getSelectorFromElement(t)
return n?e(n)[0]:null},r._jQueryInterface=function(t){return this.each(function(){var i=e(this),a=i.data(n),l=o({},s,i.data(),"object"==typeof t&&t)
if(!a&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),a||(a=new r(this,l),i.data(n,a)),"string"==typeof t){if(void 0===a[t])throw new TypeError('No method named "'+t+'"')
a[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return s}}]),r}()
return e(document).on(u.CLICK_DATA_API,g.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var r=e(this),i=a.getSelectorFromElement(this)
e(i).each(function(){var t=e(this),i=t.data(n)?"toggle":r.data()
v._jQueryInterface.call(t,i)})}),e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=r,v._jQueryInterface},v}(t),f=function(e){var t="dropdown",r="bs.dropdown",s="."+r,l=e.fn[t],u=new RegExp("38|40|27"),c={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,CLICK:"click"+s,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},f="disabled",p="show",d="dropup",h="dropright",m="dropleft",g="dropdown-menu-right",v="dropdown-menu-left",b="position-static",y='[data-toggle="dropdown"]',E=".dropdown form",T=".dropdown-menu",_=".navbar-nav",A=".dropdown-menu .dropdown-item:not(.disabled)",w="top-start",C="top-end",S="bottom-start",O="bottom-end",x="right-start",R="left-start",N={offset:0,flip:!0,boundary:"scrollParent"},L={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},I=function(){function l(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var E=l.prototype
return E.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(f)){var t=l._getParentFromElement(this._element),r=e(this._menu).hasClass(p)
if(l._clearMenus(),!r){var i={relatedTarget:this._element},o=e.Event(c.SHOW,i)
if(e(t).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)")
var a=this._element
e(t).hasClass(d)&&(e(this._menu).hasClass(v)||e(this._menu).hasClass(g))&&(a=t),"scrollParent"!==this._config.boundary&&e(t).addClass(b),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(t).closest(_).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(p),e(t).toggleClass(p).trigger(e.Event(c.SHOWN,i))}}}},E.dispose=function(){e.removeData(this._element,r),e(this._element).off(s),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},E.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},E._addEventListeners=function(){var t=this
e(this._element).on(c.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},E._getConfig=function(n){return n=o({},this.constructor.Default,e(this._element).data(),n),a.typeCheckConfig(t,n,this.constructor.DefaultType),n},E._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element)
this._menu=e(t).find(T)[0]}return this._menu},E._getPlacement=function(){var t=e(this._element).parent(),n=S
return t.hasClass(d)?(n=w,e(this._menu).hasClass(g)&&(n=C)):t.hasClass(h)?n=x:t.hasClass(m)?n=R:e(this._menu).hasClass(g)&&(n=O),n},E._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},E._getPopperConfig=function(){var e=this,t={}
return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=o({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},l._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(r)
if(n||(n=new l(this,"object"==typeof t?t:null),e(this).data(r,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(y)),i=0;i<n.length;i++){var o=l._getParentFromElement(n[i]),a=e(n[i]).data(r),s={relatedTarget:n[i]}
if(a){var u=a._menu
if(e(o).hasClass(p)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(o,t.target))){var f=e.Event(c.HIDE,s)
e(o).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),n[i].setAttribute("aria-expanded","false"),e(u).removeClass(p),e(o).removeClass(p).trigger(e.Event(c.HIDDEN,s)))}}}},l._getParentFromElement=function(t){var n,r=a.getSelectorFromElement(t)
return r&&(n=e(r)[0]),n||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(T).length)):u.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(f))){var n=l._getParentFromElement(this),r=e(n).hasClass(p)
if((r||27===t.which&&32===t.which)&&(!r||27!==t.which&&32!==t.which)){var i=e(n).find(A).get()
if(0!==i.length){var o=i.indexOf(t.target)
38===t.which&&o>0&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var a=e(n).find(y)[0]
e(a).trigger("focus")}e(this).trigger("click")}}},i(l,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return N}},{key:"DefaultType",get:function(){return L}}]),l}()
return e(document).on(c.KEYDOWN_DATA_API,y,I._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,T,I._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,I._clearMenus).on(c.CLICK_DATA_API,y,function(t){t.preventDefault(),t.stopPropagation(),I._jQueryInterface.call(e(this),"toggle")}).on(c.CLICK_DATA_API,E,function(e){e.stopPropagation()}),e.fn[t]=I._jQueryInterface,e.fn[t].Constructor=I,e.fn[t].noConflict=function(){return e.fn[t]=l,I._jQueryInterface},I}(t),p=function(e){var t="modal",n=".bs.modal",r=e.fn.modal,s={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},u={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},c="modal-scrollbar-measure",f="modal-backdrop",p="modal-open",d="fade",h="show",m={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},g=function(){function r(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(m.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var g=r.prototype
return g.toggle=function(e){return this._isShown?this.hide():this.show(e)},g.show=function(t){var n=this
if(!this._isTransitioning&&!this._isShown){a.supportsTransitionEnd()&&e(this._element).hasClass(d)&&(this._isTransitioning=!0)
var r=e.Event(u.SHOW,{relatedTarget:t})
e(this._element).trigger(r),this._isShown||r.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(p),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(u.CLICK_DISMISS,m.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(u.MOUSEDOWN_DISMISS,function(){e(n._element).one(u.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},g.hide=function(t){var n=this
if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var r=e.Event(u.HIDE)
if(e(this._element).trigger(r),this._isShown&&!r.isDefaultPrevented()){this._isShown=!1
var i=a.supportsTransitionEnd()&&e(this._element).hasClass(d)
i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(u.FOCUSIN),e(this._element).removeClass(h),e(this._element).off(u.CLICK_DISMISS),e(this._dialog).off(u.MOUSEDOWN_DISMISS),i?e(this._element).one(a.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(300):this._hideModal()}}},g.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},g.handleUpdate=function(){this._adjustDialog()},g._getConfig=function(e){return e=o({},s,e),a.typeCheckConfig(t,e,l),e},g._showElement=function(t){var n=this,r=a.supportsTransitionEnd()&&e(this._element).hasClass(d)
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,r&&a.reflow(this._element),e(this._element).addClass(h),this._config.focus&&this._enforceFocus()
var i=e.Event(u.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(i)}
r?e(this._dialog).one(a.TRANSITION_END,o).emulateTransitionEnd(300):o()},g._enforceFocus=function(){var t=this
e(document).off(u.FOCUSIN).on(u.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},g._setEscapeEvent=function(){var t=this
this._isShown&&this._config.keyboard?e(this._element).on(u.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(u.KEYDOWN_DISMISS)},g._setResizeEvent=function(){var t=this
this._isShown?e(window).on(u.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(u.RESIZE)},g._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(p),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(u.HIDDEN)})},g._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},g._showBackdrop=function(t){var n=this,r=e(this._element).hasClass(d)?d:""
if(this._isShown&&this._config.backdrop){var i=a.supportsTransitionEnd()&&r
if(this._backdrop=document.createElement("div"),this._backdrop.className=f,r&&e(this._backdrop).addClass(r),e(this._backdrop).appendTo(document.body),e(this._element).on(u.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&a.reflow(this._backdrop),e(this._backdrop).addClass(h),!t)return
if(!i)return void t()
e(this._backdrop).one(a.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(h)
var o=function(){n._removeBackdrop(),t&&t()}
a.supportsTransitionEnd()&&e(this._element).hasClass(d)?e(this._backdrop).one(a.TRANSITION_END,o).emulateTransitionEnd(150):o()}else t&&t()},g._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},g._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},g._checkScrollbar=function(){var e=document.body.getBoundingClientRect()
this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},g._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){e(m.FIXED_CONTENT).each(function(n,r){var i=e(r)[0].style.paddingRight,o=e(r).css("padding-right")
e(r).data("padding-right",i).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(m.STICKY_CONTENT).each(function(n,r){var i=e(r)[0].style.marginRight,o=e(r).css("margin-right")
e(r).data("margin-right",i).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),e(m.NAVBAR_TOGGLER).each(function(n,r){var i=e(r)[0].style.marginRight,o=e(r).css("margin-right")
e(r).data("margin-right",i).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")})
var n=document.body.style.paddingRight,r=e("body").css("padding-right")
e("body").data("padding-right",n).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}},g._resetScrollbar=function(){e(m.FIXED_CONTENT).each(function(t,n){var r=e(n).data("padding-right")
void 0!==r&&e(n).css("padding-right",r).removeData("padding-right")}),e(m.STICKY_CONTENT+", "+m.NAVBAR_TOGGLER).each(function(t,n){var r=e(n).data("margin-right")
void 0!==r&&e(n).css("margin-right",r).removeData("margin-right")})
var t=e("body").data("padding-right")
void 0!==t&&e("body").css("padding-right",t).removeData("padding-right")},g._getScrollbarWidth=function(){var e=document.createElement("div")
e.className=c,document.body.appendChild(e)
var t=e.getBoundingClientRect().width-e.clientWidth
return document.body.removeChild(e),t},r._jQueryInterface=function(t,n){return this.each(function(){var i=e(this).data("bs.modal"),a=o({},r.Default,e(this).data(),"object"==typeof t&&t)
if(i||(i=new r(this,a),e(this).data("bs.modal",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"')
i[t](n)}else a.show&&i.show(n)})},i(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return s}}]),r}()
return e(document).on(u.CLICK_DATA_API,m.DATA_TOGGLE,function(t){var n,r=this,i=a.getSelectorFromElement(this)
i&&(n=e(i)[0])
var s=e(n).data("bs.modal")?"toggle":o({},e(n).data(),e(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var l=e(n).one(u.SHOW,function(t){t.isDefaultPrevented()||l.one(u.HIDDEN,function(){e(r).is(":visible")&&r.focus()})})
g._jQueryInterface.call(e(n),s,this)}),e.fn.modal=g._jQueryInterface,e.fn.modal.Constructor=g,e.fn.modal.noConflict=function(){return e.fn.modal=r,g._jQueryInterface},g}(t),d=function(e){var t="tooltip",r=".bs.tooltip",s=e.fn[t],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),u={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},p="show",d="out",h={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,INSERTED:"inserted"+r,CLICK:"click"+r,FOCUSIN:"focusin"+r,FOCUSOUT:"focusout"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r},m="fade",g="show",v=".tooltip-inner",b=".arrow",y="hover",E="focus",T="click",_="manual",A=function(){function s(e,t){if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)")
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var A=s.prototype
return A.enable=function(){this._isEnabled=!0},A.disable=function(){this._isEnabled=!1},A.toggleEnabled=function(){this._isEnabled=!this._isEnabled},A.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,r=e(t.currentTarget).data(n)
r||(r=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,r)),r._activeTrigger.click=!r._activeTrigger.click,r._isWithActiveTrigger()?r._enter(null,r):r._leave(null,r)}else{if(e(this.getTipElement()).hasClass(g))return void this._leave(null,this)
this._enter(null,this)}},A.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},A.show=function(){var t=this
if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements")
var r=e.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(r)
var i=e.contains(this.element.ownerDocument.documentElement,this.element)
if(r.isDefaultPrevented()||!i)return
var o=this.getTipElement(),l=a.getUID(this.constructor.NAME)
o.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&e(o).addClass(m)
var u="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,c=this._getAttachment(u)
this.addAttachmentClass(c)
var f=!1===this.config.container?document.body:e(this.config.container)
e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(f),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:b},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(g),"ontouchstart"in document.documentElement&&e("body").children().on("mouseover",null,e.noop)
var p=function(){t.config.animation&&t._fixTransition()
var n=t._hoverState
t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===d&&t._leave(null,t)}
a.supportsTransitionEnd()&&e(this.tip).hasClass(m)?e(this.tip).one(a.TRANSITION_END,p).emulateTransitionEnd(s._TRANSITION_DURATION):p()}},A.hide=function(t){var n=this,r=this.getTipElement(),i=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==p&&r.parentNode&&r.parentNode.removeChild(r),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}
e(this.element).trigger(i),i.isDefaultPrevented()||(e(r).removeClass(g),"ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,this._activeTrigger[y]=!1,a.supportsTransitionEnd()&&e(this.tip).hasClass(m)?e(r).one(a.TRANSITION_END,o).emulateTransitionEnd(150):o(),this._hoverState="")},A.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},A.isWithContent=function(){return Boolean(this.getTitle())},A.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},A.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},A.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(v),this.getTitle()),t.removeClass(m+" "+g)},A.setElementContent=function(t,n){var r=this.config.html
"object"==typeof n&&(n.nodeType||n.jquery)?r?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[r?"html":"text"](n)},A.getTitle=function(){var e=this.element.getAttribute("data-original-title")
return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},A._getAttachment=function(e){return c[e.toUpperCase()]},A._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)})
else if(n!==_){var r=n===y?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=n===y?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
e(t.element).on(r,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},A._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},A._enter=function(t,n){var r=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(r))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusin"===t.type?E:y]=!0),e(n.getTipElement()).hasClass(g)||n._hoverState===p?n._hoverState=p:(clearTimeout(n._timeout),n._hoverState=p,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===p&&n.show()},n.config.delay.show):n.show())},A._leave=function(t,n){var r=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(r))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusout"===t.type?E:y]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},A._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0
return!1},A._getConfig=function(n){return"number"==typeof(n=o({},this.constructor.Default,e(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),a.typeCheckConfig(t,n,this.constructor.DefaultType),n},A._getDelegateConfig=function(){var e={}
if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t])
return e},A._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(l)
null!==n&&n.length>0&&t.removeClass(n.join(""))},A._handlePopperPlacementChange=function(e){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},A._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation
null===t.getAttribute("x-placement")&&(e(t).removeClass(m),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},s._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),r="object"==typeof t&&t
if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,r),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},i(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return r}},{key:"DefaultType",get:function(){return u}}]),s}()
return e.fn[t]=A._jQueryInterface,e.fn[t].Constructor=A,e.fn[t].noConflict=function(){return e.fn[t]=s,A._jQueryInterface},A}(t),h=function(e){var t="popover",n=".bs.popover",r=e.fn[t],a=new RegExp("(^|\\s)bs-popover\\S+","g"),s=o({},d.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),l=o({},d.DefaultType,{content:"(string|element|function)"}),u="fade",c="show",f=".popover-header",p=".popover-body",h={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},m=function(r){var o,d
function m(){return r.apply(this,arguments)||this}d=r,(o=m).prototype=Object.create(d.prototype),o.prototype.constructor=o,o.__proto__=d
var g=m.prototype
return g.isWithContent=function(){return this.getTitle()||this._getContent()},g.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},g.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},g.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(f),this.getTitle())
var n=this._getContent()
"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(p),n),t.removeClass(u+" "+c)},g._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},g._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(a)
null!==n&&n.length>0&&t.removeClass(n.join(""))},m._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),r="object"==typeof t?t:null
if((n||!/destroy|hide/.test(t))&&(n||(n=new m(this,r),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"')
n[t]()}})},i(m,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return s}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return l}}]),m}(d)
return e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=r,m._jQueryInterface},m}(t),m=function(e){var t="scrollspy",n=e.fn[t],r={offset:10,method:"auto",target:""},s={offset:"number",method:"string",target:"(string|element)"},l={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},u="dropdown-item",c="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p="offset",d="position",h=function(){function n(t,n){var r=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(l.SCROLL,function(e){return r._process(e)}),this.refresh(),this._process()}var h=n.prototype
return h.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?p:d,r="auto"===this._config.method?n:this._config.method,i=r===d?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=a.getSelectorFromElement(t)
if(o&&(n=e(o)[0]),n){var s=n.getBoundingClientRect()
if(s.width||s.height)return[e(n)[r]().top+i,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},h.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},h._getConfig=function(n){if("string"!=typeof(n=o({},r,n)).target){var i=e(n.target).attr("id")
i||(i=a.getUID(t),e(n.target).attr("id",i)),n.target="#"+i}return a.typeCheckConfig(t,n,s),n},h._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},h._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},h._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},h._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight()
if(this._scrollHeight!==t&&this.refresh(),e>=n){var r=this._targets[this._targets.length-1]
this._activeTarget!==r&&this._activate(r)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var i=this._offsets.length;i--;){this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(void 0===this._offsets[i+1]||e<this._offsets[i+1])&&this._activate(this._targets[i])}}},h._activate=function(t){this._activeTarget=t,this._clear()
var n=this._selector.split(",")
n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})
var r=e(n.join(","))
r.hasClass(u)?(r.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c),r.addClass(c)):(r.addClass(c),r.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(c),r.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c)),e(this._scrollElement).trigger(l.ACTIVATE,{relatedTarget:t})},h._clear=function(){e(this._selector).filter(f.ACTIVE).removeClass(c)},n._jQueryInterface=function(t){return this.each(function(){var r=e(this).data("bs.scrollspy")
if(r||(r=new n(this,"object"==typeof t&&t),e(this).data("bs.scrollspy",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"')
r[t]()}})},i(n,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return r}}]),n}()
return e(window).on(l.LOAD_DATA_API,function(){for(var t=e.makeArray(e(f.DATA_SPY)),n=t.length;n--;){var r=e(t[n])
h._jQueryInterface.call(r,r.data())}}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=n,h._jQueryInterface},h}(t),g=function(e){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},r="dropdown-menu",o="active",s="disabled",l="fade",u="show",c=".dropdown",f=".nav, .list-group",p=".active",d="> li > .active",h='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',m=".dropdown-toggle",g="> .dropdown-menu .active",v=function(){function t(e){this._element=e}var h=t.prototype
return h.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(o)||e(this._element).hasClass(s))){var r,i,l=e(this._element).closest(f)[0],u=a.getSelectorFromElement(this._element)
if(l){var c="UL"===l.nodeName?d:p
i=(i=e.makeArray(e(l).find(c)))[i.length-1]}var h=e.Event(n.HIDE,{relatedTarget:this._element}),m=e.Event(n.SHOW,{relatedTarget:i})
if(i&&e(i).trigger(h),e(this._element).trigger(m),!m.isDefaultPrevented()&&!h.isDefaultPrevented()){u&&(r=e(u)[0]),this._activate(this._element,l)
var g=function(){var r=e.Event(n.HIDDEN,{relatedTarget:t._element}),o=e.Event(n.SHOWN,{relatedTarget:i})
e(i).trigger(r),e(t._element).trigger(o)}
r?this._activate(r,r.parentNode,g):g()}}},h.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},h._activate=function(t,n,r){var i=this,o=("UL"===n.nodeName?e(n).find(d):e(n).children(p))[0],s=r&&a.supportsTransitionEnd()&&o&&e(o).hasClass(l),u=function(){return i._transitionComplete(t,o,r)}
o&&s?e(o).one(a.TRANSITION_END,u).emulateTransitionEnd(150):u()},h._transitionComplete=function(t,n,i){if(n){e(n).removeClass(u+" "+o)
var s=e(n.parentNode).find(g)[0]
s&&e(s).removeClass(o),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(o),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),a.reflow(t),e(t).addClass(u),t.parentNode&&e(t.parentNode).hasClass(r)){var l=e(t).closest(c)[0]
l&&e(l).find(m).addClass(o),t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tab")
if(i||(i=new t(this),r.data("bs.tab",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}()
return e(document).on(n.CLICK_DATA_API,h,function(t){t.preventDefault(),v._jQueryInterface.call(e(this),"show")}),e.fn.tab=v._jQueryInterface,e.fn.tab.Constructor=v,e.fn.tab.noConflict=function(){return e.fn.tab=t,v._jQueryInterface},v}(t);(function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")})(t),e.Util=a,e.Alert=s,e.Button=l,e.Carousel=u,e.Collapse=c,e.Dropdown=f,e.Modal=p,e.Popover=h,e.Scrollspy=m,e.Tab=g,e.Tooltip=d,Object.defineProperty(e,"__esModule",{value:!0})}),define("ember-cli-shims/deprecations",[],function(){var e={"ember-application":{default:["@ember/application"]},"ember-array":{default:["@ember/array"]},"ember-array/mutable":{default:["@ember/array/mutable"]},"ember-array/utils":{A:["@ember/array","A"],isEmberArray:["@ember/array","isArray"],wrap:["@ember/array","makeArray"]},"ember-component":{default:["@ember/component"]},"ember-components/checkbox":{default:["@ember/component/checkbox"]},"ember-components/text-area":{default:["@ember/component/text-area"]},"ember-components/text-field":{default:["@ember/component/text-field"]},"ember-controller":{default:["@ember/controller"]},"ember-controller/inject":{default:["@ember/controller","inject"]},"ember-controller/proxy":{default:["@ember/array/proxy"]},"ember-debug":{log:["@ember/debug","debug"],inspect:["@ember/debug","inspect"],run:["@ember/debug","runInDebug"],warn:["@ember/debug","warn"]},"ember-debug/container-debug-adapter":{default:["@ember/debug/container-debug-adapter"]},"ember-debug/data-adapter":{default:["@ember/debug/data-adapter"]},"ember-deprecations":{deprecate:["@ember/application/deprecations","deprecate"],deprecateFunc:["@ember/application/deprecations","deprecateFunc"]},"ember-enumerable":{default:["@ember/enumerable"]},"ember-evented":{default:["@ember/object/evented"]},"ember-evented/on":{default:["@ember/object/evented","on"]},"ember-globals-resolver":{default:["@ember/application/globals-resolver"]},"ember-helper":{default:["@ember/component/helper"],helper:["@ember/component/helper","helper"]},"ember-instrumentation":{instrument:["@ember/instrumentation","instrument"],reset:["@ember/instrumentation","reset"],subscribe:["@ember/instrumentation","subscribe"],unsubscribe:["@ember/instrumentation","unsubscribe"]},"ember-locations/hash":{default:["@ember/routing/hash-location"]},"ember-locations/history":{default:["@ember/routing/history-location"]},"ember-locations/none":{default:["@ember/routing/none-location"]},"ember-map":{default:["@ember/map"],withDefault:["@ember/map/with-default"]},"ember-metal/events":{addListener:["@ember/object/events","addListener"],removeListener:["@ember/object/events","removeListener"],send:["@ember/object/events","sendEvent"]},"ember-metal/get":{default:["@ember/object","get"],getProperties:["@ember/object","getProperties"]},"ember-metal/mixin":{default:["@ember/object/mixin"]},"ember-metal/observer":{default:["@ember/object","observer"],addObserver:["@ember/object/observers","addObserver"],removeObserver:["@ember/object/observers","removeObserver"]},"ember-metal/on-load":{default:["@ember/application","onLoad"],run:["@ember/application","runLoadHooks"]},"ember-metal/set":{default:["@ember/object","set"],setProperties:["@ember/object","setProperties"],trySet:["@ember/object","trySet"]},"ember-metal/utils":{aliasMethod:["@ember/object","aliasMethod"],assert:["@ember/debug","assert"],cacheFor:["@ember/object/internals","cacheFor"],copy:["@ember/object/internals","copy"],guidFor:["@ember/object/internals","guidFor"]},"ember-object":{default:["@ember/object"]},"ember-owner/get":{default:["@ember/application","getOwner"]},"ember-owner/set":{default:["@ember/application","setOwner"]},"ember-platform":{assign:["@ember/polyfills","assign"],create:["@ember/polyfills","create"],hasAccessors:["@ember/polyfills","hasPropertyAccessors"],keys:["@ember/polyfills","keys"]},"ember-route":{default:["@ember/routing/route"]},"ember-router":{default:["@ember/routing/router"]},"ember-runloop":{default:["@ember/runloop","run"],begin:["@ember/runloop","begin"],bind:["@ember/runloop","bind"],cancel:["@ember/runloop","cancel"],debounce:["@ember/runloop","debounce"],end:["@ember/runloop","end"],join:["@ember/runloop","join"],later:["@ember/runloop","later"],next:["@ember/runloop","next"],once:["@ember/runloop","once"],schedule:["@ember/runloop","schedule"],scheduleOnce:["@ember/runloop","scheduleOnce"],throttle:["@ember/runloop","throttle"]},"ember-service":{default:["@ember/service"]},"ember-service/inject":{default:["@ember/service","inject"]},"ember-string":{camelize:["@ember/string","camelize"],capitalize:["@ember/string","capitalize"],classify:["@ember/string","classify"],dasherize:["@ember/string","dasherize"],decamelize:["@ember/string","decamelize"],fmt:["@ember/string","fmt"],htmlSafe:["@ember/string","htmlSafe"],loc:["@ember/string","loc"],underscore:["@ember/string","underscore"],w:["@ember/string","w"]},"ember-utils":{isBlank:["@ember/utils","isBlank"],isEmpty:["@ember/utils","isEmpty"],isNone:["@ember/utils","isNone"],isPresent:["@ember/utils","isPresent"],tryInvoke:["@ember/utils","tryInvoke"],typeOf:["@ember/utils","typeOf"]},"ember-computed":{default:["@ember/object","computed"],empty:["@ember/object/computed","empty"],notEmpty:["@ember/object/computed","notEmpty"],none:["@ember/object/computed","none"],not:["@ember/object/computed","not"],bool:["@ember/object/computed","bool"],match:["@ember/object/computed","match"],equal:["@ember/object/computed","equal"],gt:["@ember/object/computed","gt"],gte:["@ember/object/computed","gte"],lt:["@ember/object/computed","lt"],lte:["@ember/object/computed","lte"],alias:["@ember/object/computed","alias"],oneWay:["@ember/object/computed","oneWay"],reads:["@ember/object/computed","reads"],readOnly:["@ember/object/computed","readOnly"],deprecatingAlias:["@ember/object/computed","deprecatingAlias"],and:["@ember/object/computed","and"],or:["@ember/object/computed","or"],collect:["@ember/object/computed","collect"],sum:["@ember/object/computed","sum"],min:["@ember/object/computed","min"],max:["@ember/object/computed","max"],map:["@ember/object/computed","map"],sort:["@ember/object/computed","sort"],setDiff:["@ember/object/computed","setDiff"],mapBy:["@ember/object/computed","mapBy"],mapProperty:["@ember/object/computed","mapProperty"],filter:["@ember/object/computed","filter"],filterBy:["@ember/object/computed","filterBy"],filterProperty:["@ember/object/computed","filterProperty"],uniq:["@ember/object/computed","uniq"],union:["@ember/object/computed","union"],intersect:["@ember/object/computed","intersect"]},"ember-test/adapter":{default:["@ember/test/adapter"]}}
return Object.defineProperty(e,"__esModule",{value:!0}),e}),function(){function e(e,t,n){define(e,["ember-cli-shims/deprecations"],function(r){"use strict"
if(n){var i=r[e],o="Importing from the `"+e+"` module has been deprecated. "
i?(o+="Please use the new module imports:\n\n",Object.keys(i).forEach(function(e){var t=i[e]
if(t[1])o+="import { "+t[1]+" } from '"+t[0]+"'\n"
else{var n=Ember.String.classify(t[0].split("/").pop())
o+="import "+n+" from '"+t[0]+"'\n"}}),o+="\n"):o+="Please use globals instead.",Ember.deprecate(o,!1,{id:"ember-cli-shims.deprecated-shims",until:"3.0.0",url:"https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md"})}return Object.defineProperty(t,"__esModule",{value:!0}),t})}e("ember",{default:Ember}),function(){var t={"ember-application":{default:Ember.Application},"ember-array":{default:Ember.Array},"ember-array/mutable":{default:Ember.MutableArray},"ember-array/utils":{A:Ember.A,isEmberArray:Ember.isArray,wrap:Ember.makeArray},"ember-component":{default:Ember.Component},"ember-components/checkbox":{default:Ember.Checkbox},"ember-components/text-area":{default:Ember.TextArea},"ember-components/text-field":{default:Ember.TextField},"ember-controller":{default:Ember.Controller},"ember-controller/inject":{default:Ember.inject.controller},"ember-controller/proxy":{default:Ember.ArrayProxy},"ember-controllers/sortable":{default:Ember.SortableMixin},"ember-debug":{log:Ember.debug,inspect:Ember.inspect,run:Ember.runInDebug,warn:Ember.warn},"ember-debug/container-debug-adapter":{default:Ember.ContainerDebugAdapter},"ember-debug/data-adapter":{default:Ember.DataAdapter},"ember-deprecations":{deprecate:Ember.deprecate,deprecateFunc:Ember.deprecateFunc},"ember-enumerable":{default:Ember.Enumerable},"ember-evented":{default:Ember.Evented},"ember-evented/on":{default:Ember.on},"ember-globals-resolver":{default:Ember.DefaultResolver},"ember-helper":{default:Ember.Helper,helper:Ember.Helper&&Ember.Helper.helper},"ember-instrumentation":{instrument:Ember.Instrumentation.instrument,reset:Ember.Instrumentation.reset,subscribe:Ember.Instrumentation.subscribe,unsubscribe:Ember.Instrumentation.unsubscribe},"ember-locations/hash":{default:Ember.HashLocation},"ember-locations/history":{default:Ember.HistoryLocation},"ember-locations/none":{default:Ember.NoneLocation},"ember-map":{default:Ember.Map,withDefault:Ember.MapWithDefault},"ember-metal/destroy":{default:Ember.destroy},"ember-metal/events":{addListener:Ember.addListener,removeListener:Ember.removeListener,send:Ember.sendEvent},"ember-metal/get":{default:Ember.get,getProperties:Ember.getProperties},"ember-metal/mixin":{default:Ember.Mixin},"ember-metal/observer":{default:Ember.observer,addObserver:Ember.addObserver,removeObserver:Ember.removeObserver},"ember-metal/on-load":{default:Ember.onLoad,run:Ember.runLoadHooks},"ember-metal/set":{default:Ember.set,setProperties:Ember.setProperties,trySet:Ember.trySet},"ember-metal/utils":{aliasMethod:Ember.aliasMethod,assert:Ember.assert,cacheFor:Ember.cacheFor,copy:Ember.copy,guidFor:Ember.guidFor},"ember-object":{default:Ember.Object},"ember-owner/get":{default:Ember.getOwner},"ember-owner/set":{default:Ember.setOwner},"ember-platform":{assign:Ember.assign||Ember.merge,create:Ember.create,defineProperty:Ember.platform.defineProperty,hasAccessors:Ember.platform.hasPropertyAccessors,keys:Ember.keys},"ember-route":{default:Ember.Route},"ember-router":{default:Ember.Router},"ember-runloop":{default:Ember.run,begin:Ember.run.begin,bind:Ember.run.bind,cancel:Ember.run.cancel,debounce:Ember.run.debounce,end:Ember.run.end,join:Ember.run.join,later:Ember.run.later,next:Ember.run.next,once:Ember.run.once,schedule:Ember.run.schedule,scheduleOnce:Ember.run.scheduleOnce,throttle:Ember.run.throttle},"ember-service":{default:Ember.Service},"ember-service/inject":{default:Ember.inject.service},"ember-set/ordered":{default:Ember.OrderedSet},"ember-string":{camelize:Ember.String.camelize,capitalize:Ember.String.capitalize,classify:Ember.String.classify,dasherize:Ember.String.dasherize,decamelize:Ember.String.decamelize,fmt:Ember.String.fmt,htmlSafe:Ember.String.htmlSafe,loc:Ember.String.loc,underscore:Ember.String.underscore,w:Ember.String.w},"ember-utils":{isBlank:Ember.isBlank,isEmpty:Ember.isEmpty,isNone:Ember.isNone,isPresent:Ember.isPresent,tryInvoke:Ember.tryInvoke,typeOf:Ember.typeOf}}
t["ember-computed"]={default:Ember.computed}
for(var n=["empty","notEmpty","none","not","bool","match","equal","gt","gte","lt","lte","alias","oneWay","reads","readOnly","deprecatingAlias","and","or","collect","sum","min","max","map","sort","setDiff","mapBy","mapProperty","filter","filterBy","filterProperty","uniq","union","intersect"],r=0,i=n.length;r<i;r++){var o=n[r]
t["ember-computed"][o]=Ember.computed[o]}for(var a in t)e(a,t[a],!0)}(),function(){if(Ember.Test){var t={"ember-test":{default:Ember.Test},"ember-test/adapter":{default:Ember.Test.Adapter},"ember-test/qunit-adapter":{default:Ember.Test.QUnitAdapter}}
for(var n in t)e(n,t[n])}}(),e("jquery",{default:self.jQuery}),e("rsvp",{default:Ember.RSVP})}(),createDeprecatedModule("ember/resolver"),createDeprecatedModule("resolver"),define("ember-ajax/-private/promise",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
var n=Ember.RSVP.Promise,r=function(e){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n),t(r,[{key:"then",value:function(){var e=function e(t,n,r){null===t&&(t=Function.prototype)
var i=Object.getOwnPropertyDescriptor(t,n)
if(void 0===i){var o=Object.getPrototypeOf(t)
return null===o?void 0:e(o,n,r)}if("value"in i)return i.value
var a=i.get
return void 0!==a?a.call(r):void 0}(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"then",this).apply(this,arguments)
return e.xhr=this.xhr,e}}]),r}()
e.default=r}),define("ember-ajax/-private/utils/get-header",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r){if(n(e)||n(r))return
var i=t(Object.keys(e)).find(function(e){return e.toLowerCase()===r.toLowerCase()})
return e[i]}
var t=Ember.A,n=Ember.isNone}),define("ember-ajax/-private/utils/is-fastboot",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t="undefined"!=typeof FastBoot
e.default=t}),define("ember-ajax/-private/utils/is-string",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return"string"==typeof e}}),define("ember-ajax/-private/utils/parse-response-headers",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var n={}
if(!e)return n
return e.split(t).reduce(function(e,t){var n,r=t.split(":"),i=(n=r,Array.isArray(n)?n:Array.from(n)),o=i[0],a=i.slice(1)
return o=o.trim(),(a=a.join(":").trim())&&(e[o]=a),e},n)}
var t=e.CRLF="\r\n"})
define("ember-ajax/-private/utils/url-helpers",["exports","require","ember-ajax/-private/utils/is-fastboot"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.parseURL=a,e.isFullURL=function(e){return e.match(r)},e.haveSameHost=function(e,t){return e=a(e),t=a(t),e.protocol===t.protocol&&e.hostname===t.hostname&&e.port===t.port}
var r=/^(http|https)/,i="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),o=n.default?URL:i?(0,t.default)("url"):document.createElement("a")
function a(e){var t=void 0
i||n.default?t=o.parse(e):(o.href=e,t=o)
var r={}
return r.href=t.href,r.protocol=t.protocol,r.hostname=t.hostname,r.port=t.port,r.pathname=t.pathname,r.search=t.search,r.hash=t.hash,r}}),define("ember-ajax/ajax-request",["exports","ember-ajax/mixins/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Object
e.default=n.extend(t.default)}),define("ember-ajax/errors",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.AjaxError=n,e.InvalidError=r,e.UnauthorizedError=i,e.ForbiddenError=o,e.BadRequestError=a,e.NotFoundError=s,e.TimeoutError=l,e.AbortError=u,e.ConflictError=c,e.ServerError=f,e.isAjaxError=p,e.isUnauthorizedError=function(e){return p(e)?e instanceof i:401===e},e.isForbiddenError=function(e){return p(e)?e instanceof o:403===e},e.isInvalidError=function(e){return p(e)?e instanceof r:422===e},e.isBadRequestError=function(e){return p(e)?e instanceof a:400===e},e.isNotFoundError=function(e){return p(e)?e instanceof s:404===e},e.isTimeoutError=function(e){return e instanceof l},e.isAbortError=function(e){return p(e)?e instanceof u:0===e},e.isConflictError=function(e){return p(e)?e instanceof c:409===e},e.isServerError=function(e){return p(e)?e instanceof f:e>=500&&e<600},e.isSuccess=function(e){var t=parseInt(e,10)
return t>=200&&t<300||304===t}
var t=Ember.Error
function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Ajax operation failed"
t.call(this,n),this.payload=e}function r(e){n.call(this,e,"Request was rejected because it was invalid")}function i(e){n.call(this,e,"Ajax authorization failed")}function o(e){n.call(this,e,"Request was rejected because user is not permitted to perform this operation.")}function a(e){n.call(this,e,"Request was formatted incorrectly.")}function s(e){n.call(this,e,"Resource was not found.")}function l(){n.call(this,null,"The ajax operation timed out")}function u(){n.call(this,null,"The ajax operation was aborted")}function c(e){n.call(this,e,"The ajax operation failed due to a conflict")}function f(e){n.call(this,e,"Request was rejected due to server error")}function p(e){return e instanceof n}n.prototype=Object.create(t.prototype),r.prototype=Object.create(n.prototype),i.prototype=Object.create(n.prototype),o.prototype=Object.create(n.prototype),a.prototype=Object.create(n.prototype),s.prototype=Object.create(n.prototype),l.prototype=Object.create(n.prototype),u.prototype=Object.create(n.prototype),c.prototype=Object.create(n.prototype),f.prototype=Object.create(n.prototype)}),define("ember-ajax/index",["exports","ember-ajax/request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-ajax/mixins/ajax-request",["exports","ember-ajax/errors","ember-ajax/utils/ajax","ember-ajax/-private/utils/parse-response-headers","ember-ajax/-private/utils/get-header","ember-ajax/-private/utils/url-helpers","ember-ajax/-private/utils/is-string","ember-ajax/-private/promise"],function(e,t,n,r,i,o,a,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Ember.A,c=Ember.Error,f=Ember.Logger,p=Ember.Mixin,d=Ember.Test,h=Ember.get,m=Ember.isEmpty,g=Ember.merge,v=Ember.run,b=Ember.runInDebug,y=Ember.testing,E=Ember.warn,T=/^application\/(?:vnd\.api\+)?json/i
function _(e){return!!(0,a.default)(e)&&!!e.match(T)}function A(e){return"/"===e.charAt(0)}function w(e){return e.substring(1)}function C(e){var t
return A(e)&&(e=w(e)),"/"===(t=e).charAt(t.length-1)&&(e=e.slice(0,-1)),e}var S=0
y&&d.registerWaiter(function(){return 0===S}),e.default=p.create({contentType:"application/x-www-form-urlencoded; charset=UTF-8",headers:{},request:function(e,t){var n=this.options(e,t),r=this._makeRequest(n),i=new s.default(function(e,t){r.then(function(t){var n=t.response
e(n)}).catch(function(e){var n=e.response
t(n)})},"ember-ajax: "+n.type+" "+n.url+" response")
return i.xhr=r.xhr,i},raw:function(e,t){var n=this.options(e,t)
return this._makeRequest(n)},_makeRequest:function(e){var o=this,a=e.method||e.type||"GET",u={method:a,type:a,url:e.url};(function(e,t){var n=t.contentType,r=t.data,o=t.headers
return"GET"!==e&&!(!_(n)&&!_((0,i.default)(o,"Content-Type")))&&"object"===(void 0===r?"undefined":l(r))})(a,e)&&(e.data=JSON.stringify(e.data)),S+=1
var c=(0,n.default)(e),f=new s.default(function(e,n){c.done(function(i,a,s){var l=o.handleResponse(s.status,(0,r.default)(s.getAllResponseHeaders()),i,u);(0,t.isAjaxError)(l)?v.join(null,n,{payload:i,textStatus:a,jqXHR:s,response:l}):v.join(null,e,{payload:i,textStatus:a,jqXHR:s,response:l})}).fail(function(e,i,a){b(function(){var t="The server returned an empty string for "+u.type+" "+u.url+", which cannot be parsed into a valid JSON. Return either null or {}.",n=!("parsererror"===i&&""===e.responseText)
E(t,n,{id:"ds.adapter.returned-empty-string-as-JSON"})})
var s=o.parseErrorResponse(e.responseText)||a,l=void 0
l=a instanceof Error?a:"timeout"===i?new t.TimeoutError:"abort"===i?new t.AbortError:o.handleResponse(e.status,(0,r.default)(e.getAllResponseHeaders()),s,u),v.join(null,n,{payload:s,textStatus:i,jqXHR:e,errorThrown:a,response:l})}).always(function(){S-=1})},"ember-ajax: "+e.type+" "+e.url)
return f.xhr=c,f},post:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"POST"))},put:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"PUT"))},patch:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"PATCH"))},del:function(e,t){return this.request(e,this._addTypeToOptionsFor(t,"DELETE"))},delete:function(){return this.del.apply(this,arguments)},get:function(e){if(arguments.length>1||-1!==e.indexOf("/"))throw new c("It seems you tried to use `.get` to make a request! Use the `.request` method instead.")
return this._super.apply(this,arguments)},_addTypeToOptionsFor:function(e,t){return(e=e||{}).type=t,e},_getFullHeadersHash:function(e){var t=h(this,"headers"),n=g({},t)
return g(n,e)},options:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t=g({},t),t.url=this._buildURL(e,t),t.type=t.type||"GET",t.dataType=t.dataType||"json",t.contentType=m(t.contentType)?h(this,"contentType"):t.contentType,this._shouldSendHeaders(t)?t.headers=this._getFullHeadersHash(t.headers):t.headers=t.headers||{},t},_buildURL:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if((0,o.isFullURL)(e))return e
var n=[],r=t.host||h(this,"host")
r&&(r=C(r)),n.push(r)
var i=t.namespace||h(this,"namespace")
return i&&(i=C(i),n.push(i)),new RegExp("^(/)?"+i).test(e)?e:(A(e)&&(e=w(e)),n.push(e),n.join("/"))},handleResponse:function(e,n,r,i){var o=void 0
if(this.isSuccess(e,n,r))return r
if(r=this.normalizeErrorResponse(e,n,r),this.isUnauthorizedError(e,n,r))o=new t.UnauthorizedError(r)
else if(this.isForbiddenError(e,n,r))o=new t.ForbiddenError(r)
else if(this.isInvalidError(e,n,r))o=new t.InvalidError(r)
else if(this.isBadRequestError(e,n,r))o=new t.BadRequestError(r)
else if(this.isNotFoundError(e,n,r))o=new t.NotFoundError(r)
else if(this.isAbortError(e,n,r))o=new t.AbortError(r)
else if(this.isConflictError(e,n,r))o=new t.ConflictError(r)
else if(this.isServerError(e,n,r))o=new t.ServerError(r)
else{var a=this.generateDetailedMessage(e,n,r,i)
o=new t.AjaxError(r,a)}return o},_matchHosts:function(e,t){return t.constructor===RegExp?t.test(e):"string"==typeof t?t===e:(f.warn("trustedHosts only handles strings or regexes.",t,"is neither."),!1)},_shouldSendHeaders:function(e){var t=this,n=e.url,r=e.host
n=n||"",r=r||h(this,"host")||""
var i=h(this,"trustedHosts")||u(),a=(0,o.parseURL)(n).hostname
return!(0,o.isFullURL)(n)||(!!i.find(function(e){return t._matchHosts(a,e)})||(0,o.haveSameHost)(n,r))},generateDetailedMessage:function(e,t,n,r){var o=void 0,a=(0,i.default)(t,"Content-Type")||"Empty Content-Type"
return o="text/html"===a.toLowerCase()&&n.length>250?"[Omitted Lengthy HTML]":JSON.stringify(n),["Ember AJAX Request "+(r.type+" "+r.url)+" returned a "+e,"Payload ("+a+")",o].join("\n")},isUnauthorizedError:function(e){return(0,t.isUnauthorizedError)(e)},isForbiddenError:function(e){return(0,t.isForbiddenError)(e)},isInvalidError:function(e){return(0,t.isInvalidError)(e)},isBadRequestError:function(e){return(0,t.isBadRequestError)(e)},isNotFoundError:function(e){return(0,t.isNotFoundError)(e)},isAbortError:function(e){return(0,t.isAbortError)(e)},isConflictError:function(e){return(0,t.isConflictError)(e)},isServerError:function(e){return(0,t.isServerError)(e)},isSuccess:function(e){return(0,t.isSuccess)(e)},parseErrorResponse:function(e){try{return JSON.parse(e)}catch(t){return e}},normalizeErrorResponse:function(e,t,n){return n}})}),define("ember-ajax/mixins/ajax-support",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Mixin,n=Ember.inject.service,r=Ember.computed.alias
e.default=t.create({ajaxService:n("ajax"),host:r("ajaxService.host"),namespace:r("ajaxService.namespace"),headers:r("ajaxService.headers"),ajax:function(e){var t=this.ajaxOptions.apply(this,arguments)
return this.get("ajaxService").request(e,t)}})}),define("ember-ajax/mixins/legacy/normalize-error-response",["exports","ember-ajax/-private/utils/is-string"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Ember.Mixin,i=Ember.isArray,o=Ember.isNone,a=Ember.merge
function s(e){return"object"===(void 0===e?"undefined":n(e))}e.default=r.create({normalizeErrorResponse:function(e,n,r){return r=o(r)?{}:r,i(r.errors)?r.errors.map(function(t){if(s(t)){var n=a({},t)
return n.status=""+t.status,n}return{status:""+e,title:t}}):i(r)?r.map(function(t){return s(t)?{status:""+e,title:t.title||"The backend responded with an error",detail:t}:{status:""+e,title:""+t}}):(0,t.default)(r)?[{status:""+e,title:r}]:[{status:""+e,title:r.title||"The backend responded with an error",detail:r}]}})}),define("ember-ajax/raw",["exports","ember-ajax/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=new t.default
return e.raw.apply(e,arguments)}}),define("ember-ajax/request",["exports","ember-ajax/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=new t.default
return e.request.apply(e,arguments)}}),define("ember-ajax/services/ajax",["exports","ember-ajax/mixins/ajax-request"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Service
e.default=n.extend(t.default)}),define("ember-ajax/utils/ajax",["exports","ember-ajax/-private/utils/is-fastboot"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.$
e.default=t.default?najax:n.ajax}),define("ember-cli-app-version/initializer-factory",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r){var i=!1
return function(){if(!i&&e&&r){var o=t(e)
n.register(o,r),i=!0}}}
var t=Ember.String.classify,n=Ember.libraries}),define("ember-cli-app-version/utils/regexp",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.versionRegExp=/\d[.]\d[.]\d/,e.shaRegExp=/[a-z\d]{8}/}),define("ember-font-awesome/components/fa-icon",["exports","ember-font-awesome/utils/try-match"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.computed,r=Ember.deprecate,i=Ember.get,o=Ember.getWithDefault,a=Ember.isArray,s=Ember.Component.extend({tagName:"i",classNames:["fa"],classNameBindings:["iconCssClass","flipCssClass","rotateCssClass","sizeCssClass","pullCssClass","stackCssClass","spin:fa-spin","fixedWidth:fa-fw","listItem:fa-li","border:fa-border","pulse:fa-pulse","inverse:fa-inverse"],attributeBindings:["ariaLabel:aria-label","ariaHiddenAttribute:aria-hidden","title","style"],didReceiveAttrs:function(){this._super.apply(this,arguments),this.checkDeprecations()},style:n("color",function(){var e=i(this,"color")
if(e)return Ember.String.htmlSafe("color:"+e)}),iconCssClass:n("icon","params.[]",function(){var e=i(this,"icon"),n=i(this,"params")
if(e=e||a(n)&&n[0])return(0,t.default)(e,/^fa-/)?e:"fa-"+e}),flipCssClass:n("flip",function(){var e=i(this,"flip")
if(e)return(0,t.default)(e,/^fa-flip/)?e:"fa-flip-"+e}),rotateCssClass:n("rotate",function(){var e=i(this,"rotate")
if(e)return(0,t.default)(e,/^fa-rotate/)?e:"fa-rotate-"+e}),sizeCssClass:n("size",function(){var e=i(this,"size")
if(e)return(0,t.default)(e,/^fa-/)?e:(0,t.default)(e,/(?:lg|x)$/)?"fa-"+e:"fa-"+e+"x"}),pullCssClass:n("pull",function(){var e=i(this,"pull")
if(e)return"fa-pull-"+e}),stackCssClass:n("stack",function(){var e=i(this,"stack")
if(e)return(0,t.default)(e,/^fa-/)?e:(0,t.default)(e,/x$/)?"fa-stack-"+e:"fa-stack-"+e+"x"}),ariaHiddenAttribute:n("ariaHidden",function(){return!1!==i(this,"ariaHidden")?"true":void 0}),checkDeprecations:function(){var e=i(this,"icon"),t=i(this,"params"),n=e||a(t)&&t[0]
if(n&&n.startsWith&&n.startsWith("fa-")){var s=n.substring(3)
r("Passing the icon prefixed with 'fa-' ("+n+") is deprecated and will be removed in v4. Use '"+s+"' instead.",!1,{id:"ember-font-awesome.no-fa-prefix",until:"4.0.0"})}var l=o(this,"size","").toString()
if(l.endsWith&&l.endsWith("x")){var u=l.substring(0,l.length-1)
r("Passing 'size' as '"+l+"' to fa-icon is deprecated and will be removed in v4. Use size='"+u+"' instead",!1,{id:"ember-font-awesome.no-size-suffix",until:"4.0.0"})}}})
s.reopenClass({positionalParams:"params"}),e.default=s}),define("ember-font-awesome/components/fa-list",["exports","ember-font-awesome/templates/components/fa-list"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({layout:t.default,tagName:"ul",classNames:"fa-ul"})}),define("ember-font-awesome/components/fa-stack",["exports","ember-font-awesome/utils/try-match","ember-font-awesome/templates/components/fa-stack"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.computed,i=Ember.get
e.default=Ember.Component.extend({layout:n.default,tagName:"span",classNames:"fa-stack",classNameBindings:["sizeCssClass"],sizeCssClass:r("size",function(){var e=i(this,"size")
if(e)return(0,t.default)(e,/^fa-/)?e:(0,t.default)(e,/(?:lg|x)$/)?"fa-"+e:"fa-"+e+"x"})})}),define("ember-font-awesome/templates/components/fa-list",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"Slfd1NDT",block:'{"symbols":["&default"],"statements":[[11,1,[[25,"hash",null,[["fa-icon"],[[25,"component",["fa-icon"],[["listItem"],[true]]]]]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-font-awesome/templates/components/fa-list.hbs"}})}),define("ember-font-awesome/templates/components/fa-stack",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"Cdva9scI",block:'{"symbols":["&default"],"statements":[[11,1,[[25,"hash",null,[["stack-1x","stack-2x"],[[25,"component",["fa-icon"],[["stack"],["1"]]],[25,"component",["fa-icon"],[["stack"],["2"]]]]]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-font-awesome/templates/components/fa-stack.hbs"}})}),define("ember-font-awesome/utils/try-match",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){return"string"==typeof e&&e.match(t)}}),define("ember-froala-editor/components/froala-content",["exports","ember-froala-editor/templates/components/froala-content"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Component.extend({layout:t.default,classNames:["fr-view"]})
n.reopenClass({positionalParams:["content"]}),e.default=n}),define("ember-froala-editor/components/froala-editor",["exports","ember-froala-editor/templates/components/froala-editor"],function(e,t){"use strict"
function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Component.extend({layout:t.default,classNames:["froala-editor-container"],mergedProperties:["options"],editorSelector:"div.froala-editor-instance",eventPrefix:"froalaEditor.",updateEvent:"contentChanged",returnSafeString:Ember.computed("content",{get:function(){return Ember.String.isHTMLSafe(this.get("content"))}}),fastboot:Ember.computed({get:function(){return Ember.getOwner(this).lookup("service:fastboot")}}),_content:Ember.computed("content",{get:function(){var e=this.get("content")
return e&&"function"==typeof e.toString?e.toString():""}}),_options:Ember.computed("options","_attributeOptions",{get:function(){var e=Ember.getOwner(this).resolveRegistration("config:environment")
return Ember.assign({},Ember.getWithDefault(e,"ember-froala-editor",{}),this.getWithDefault("options",{}),this.get("_attributeOptions"))}}),_attributeOptions:Ember.computed({get:function(){var e={}
for(var t in this)Ember.$.FroalaEditor.DEFAULTS.hasOwnProperty(t)&&(e[t]=this.get(t))
return e}}),editor:Ember.computed.readOnly("_editor"),editorInitializing:Ember.computed.readOnly("_editorInitializing"),editorInitialized:Ember.computed.readOnly("_editorInitialized"),editorDestroying:Ember.computed.readOnly("_editorDestroying"),editorDestroyed:Ember.computed.not("editorInitialized"),init:function(){this._super.apply(this,arguments),this.set("_editor",null),this.set("_editorInitializing",!1),this.set("_editorInitialized",!1),this.set("_editorDestroying",!1),this.set("_initPromises",[]),this.set("_templateContent",this.get("_content"))},didInsertElement:function(){this._super.apply(this,arguments),Ember.run.schedule("afterRender",this,this.initEditor)},didUpdateAttrs:function(){this._super.apply(this,arguments)
var e=this.get("_editor"),t=this.get("_content")
this.get("fastboot")?t!==this.get("_templateContent")&&this.set("_templateContent",t):e&&t!==e.html.get()?e.html.set(t):e||t===this.$(this.get("editorSelector")).html()?this.notifyPropertyChange("_attributeOptions"):this.$(this.get("editorSelector")).html(t)},willDestroyElement:function(){this._super.apply(this,arguments),this.destroyEditor()},initEditor:function(){if(!this.get("_editorInitialized")&&!this.get("_editorInitializing")){this.set("_editorInitializing",!0)
var e=this.get("_options"),t=this.$(this.get("editorSelector"))
t.one(this.get("eventPrefix")+(e.initOnClick?"initializationDelayed":"initialized"),Ember.run.bind(this,"didInitEditor")),t.froalaEditor(e)}},reinitEditor:function(){this.destroyEditor(),this.initEditor()},destroyEditor:function(){this.get("_editorInitialized")&&!this.get("_editorDestroying")&&(this.set("_editorDestroying",!0),this.$(this.get("editorSelector")).froalaEditor("destroy"))},didInitEditor:function(e,t){this.set("_editor",t)
var r=this.get("_options.initOnClick")?"on-initializationDelayed":"on-initialized",i=/(^on-|-getHtml$)/g,o=/-/g,a=/\./g
for(var s in this)if(0===s.indexOf("on-")&&0!==s.indexOf(r)){var l=s
if(0===(l=(l=l.replace(i,"")).replace(o,".")).indexOf("popups.hide.")){var u=l.replace("popups.hide.","")
l="popups.hide.["+(u=u.replace(a,"-"))+"]"}var c=s.indexOf("-getHtml",-8);-1!==c&&c===s.length-8?t.events.on(l,Ember.run.bind(this,this.didEditorEventReturnHtml,s,t),!0):t.events.on(l,Ember.run.bind(this,this.didEditorEvent,s),!0)}var f=this.get("update"),p=this.get("updateEvent")
f&&p&&t.events.on(p,Ember.run.bind(this,this.didEditorEventReturnHtml,"update",t),!0),t.events.on("destroy",Ember.run.bind(this,this.didDestroyEditor,t),!1),this.get("_initPromises").forEach(function(e){return e()}),this.set("_initPromises",[]),this.set("_editorInitializing",!1),this.set("_editorInitialized",!0)
for(var d=arguments.length,h=Array(d>2?d-2:0),m=2;m<d;m++)h[m-2]=arguments[m]
this.get(r)&&this.didEditorEvent.apply(this,[r].concat(n(h))),this.get(r+"-getHtml")&&this.didEditorEventReturnHtml.apply(this,[r+"-getHtml",t].concat(n(h)))},didDestroyEditor:function(){this.set("_editor",null),this.set("_editorDestroying",!1),this.set("_editorInitialized",!1)},didEditorEvent:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i]
if("function"==typeof this[e])return this[e].apply(this,[this].concat(n(r)))
this.sendAction.apply(this,[e,this].concat(n(r)))},didEditorEventReturnHtml:function(e,t){var r=t.html.get()
this.get("returnSafeString")&&(r=Ember.String.htmlSafe(r))
for(var i=arguments.length,o=Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a]
if("function"==typeof this[e])return this[e].apply(this,[r,this].concat(n(o)))
this.sendAction.apply(this,[e,r,this].concat(n(o)))},method:function(e){var t=this,n=arguments,r="froala-editor: "
"reinit"===e?r+="Reninit method() call, waiting for the editor to initialize":this.get("_editorInitialized")?r+="Call editor method() '"+e+"'":r+="Delayed method() call to '"+e+"', waiting for editor to initialize"
var i=new Ember.RSVP.Promise(function(r,i){if("reinit"===e)t.get("_initPromises").push(r),t.reinitEditor()
else if(t.get("_editorInitialized"))try{var o
r((o=t.$(t.get("editorSelector"))).froalaEditor.apply(o,n))}catch(e){i(e)}else t.get("_initPromises").push(r)},r)
return"reinit"===e||this.get("_editorInitialized")||i.then(function(){return new Ember.RSVP.Promise(function(e,r){try{var i
e((i=t.$(t.get("editorSelector"))).froalaEditor.apply(i,n))}catch(e){r(e)}},"froala-editor: Delayed method() call to '"+e+"', calling froala-editor method")}),i},actions:{method:function(){this.method.apply(this,arguments)}}})
r.reopenClass({positionalParams:["content","update","options"]}),e.default=r}),define("ember-froala-editor/helpers/froala-method",["exports"],function(e){"use strict"
function t(e,t){var n,r=(n=e,Array.isArray(n)?n:Array.from(n)),i=r[0],o=r.slice(1)
return function(e){for(var n in t){var r=o.indexOf(n),a=parseInt(t[n]);-1!==r&&arguments.length>=a&&(o[r]=arguments[a-1])}e.send.apply(e,["method",i].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(o)))}}Object.defineProperty(e,"__esModule",{value:!0}),e.froalaMethod=t,e.default=Ember.Helper.helper(t)}),define("ember-froala-editor/helpers/merged-hash",["exports"],function(e){"use strict"
function t(e,t){return e.length>0?Ember.assign.apply(void 0,[{}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(e),[t])):t}Object.defineProperty(e,"__esModule",{value:!0}),e.mergedHash=t,e.default=Ember.Helper.helper(t)}),define("ember-froala-editor/templates/components/froala-content",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"JHXC+MA4",block:'{"symbols":["&default"],"statements":[[1,[18,"content"],true],[0,"\\n"],[11,1],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-froala-editor/templates/components/froala-content.hbs"}})}),define("ember-froala-editor/templates/components/froala-editor",["exports"],function(e){"use strict"
e.__esModule=!0,e.default=Ember.HTMLBars.template({id:"M08d01wj",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","froala-editor-instance"],[7],[1,[18,"_templateContent"],true],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-froala-editor/templates/components/froala-editor.hbs"}})}),define("ember-load-initializers/index",["exports"],function(e){"use strict"
function t(e){var t=require(e,null,null,!0)
if(!t)throw new Error(e+" must export an initializer.")
var n=t.default
return n.name||(n.name=e.slice(e.lastIndexOf("/")+1)),n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){for(var r=n+"/initializers/",i=n+"/instance-initializers/",o=[],a=[],s=Object.keys(requirejs._eak_seen),l=0;l<s.length;l++){var u=s[l]
0===u.lastIndexOf(r,0)?o.push(u):0===u.lastIndexOf(i,0)&&a.push(u)}(function(e,n){for(var r=0;r<n.length;r++)e.initializer(t(n[r]))})(e,o),function(e,n){for(var r=0;r<n.length;r++)e.instanceInitializer(t(n[r]))}(e,a)}}),define("ember-resolver/features",[],function(){"use strict"}),define("ember-resolver/index",["exports","ember-resolver/resolvers/classic"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-resolver/resolver",["exports","ember-resolver/resolvers/classic"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-resolver/resolvers/classic/container-debug-adapter",["exports","ember-resolver/resolvers/classic/index"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.ContainerDebugAdapter
function r(e,t,n){var r=t.match(new RegExp("^/?"+n+"/(.+)/"+e+"$"))
if(null!==r)return r[1]}e.default=n.extend({_moduleRegistry:null,init:function(){this._super.apply(this,arguments),this._moduleRegistry||(this._moduleRegistry=new t.ModuleRegistry)},canCatalogEntriesByType:function(e){return"model"===e||this._super.apply(this,arguments)},catalogEntriesByType:function(e){for(var t=this._moduleRegistry.moduleNames(),n=Ember.A(),i=this.namespace.modulePrefix,o=0,a=t.length;o<a;o++){var s=t[o]
if(-1!==s.indexOf(e)){var l=r(e,s,this.namespace.podModulePrefix||i)
l||(l=s.split(e+"s/").pop()),n.addObject(l)}}return n}})})
define("ember-resolver/resolvers/classic/index",["exports","ember-resolver/utils/class-factory","ember-resolver/utils/make-dictionary"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.ModuleRegistry=void 0,void 0===requirejs.entries&&(requirejs.entries=requirejs._eak_seen)
var r=e.ModuleRegistry=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._entries=t||requirejs.entries}return e.prototype.moduleNames=function(){return Object.keys(this._entries)},e.prototype.has=function(e){return e in this._entries},e.prototype.get=function(e){return require(e)},e}(),i=Ember.String,o=i.underscore,a=i.classify,s=i.dasherize,l=Ember.get
function u(e){Ember.assert("`modulePrefix` must be defined",this.namespace.modulePrefix)
var n=this.findModuleName(e)
if(n){var r=this._extractDefaultExport(n,e)
if(void 0===r)throw new Error(" Expected to find: '"+e.fullName+"' within '"+n+"' but got 'undefined'. Did you forget to 'export default' within '"+n+"'?")
return this.shouldWrapInClassFactory(r,e)&&(r=(0,t.default)(r)),r}return this._super(e)}var c=Ember.DefaultResolver.extend({resolveOther:u,parseName:function(e){if(!0===e.parsedName)return e
var t=void 0,n=void 0,r=void 0,i=e.split("@")
if("helper:@content-helper"!==e&&2===i.length){var o=i[0].split(":")
if(2===o.length)t=o[1],n=o[0],r=i[1]
else{var s=i[1].split(":")
t=i[0],n=s[0],r=s[1]}"template"===n&&0===t.lastIndexOf("components/",0)&&(r="components/"+r,t=t.slice(11))}else n=(i=e.split(":"))[0],r=i[1]
var u=r,c=l(this,"namespace")
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:n}),type:n,fullNameWithoutType:u,name:r,root:c,resolveMethodName:"resolve"+a(n)}},resolveTemplate:u,pluralizedTypes:null,moduleRegistry:null,makeToString:function(e,t){return this.namespace.modulePrefix+"@"+t+":"},shouldWrapInClassFactory:function(){return!1},init:function(){this._super(),this.moduleBasedResolver=!0,this._moduleRegistry||(this._moduleRegistry=new r),this._normalizeCache=(0,n.default)(),this.pluralizedTypes=this.pluralizedTypes||(0,n.default)(),this.pluralizedTypes.config||(this.pluralizedTypes.config="config"),this._deprecatedPodModulePrefix=!1},normalize:function(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))},_normalize:function(e){var t=e.split(":")
return t.length>1?"helper"===t[0]?t[0]+":"+t[1].replace(/_/g,"-"):t[0]+":"+s(t[1].replace(/\./g,"/")):e},pluralize:function(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")},podBasedLookupWithPrefix:function(e,t){var n=t.fullNameWithoutType
return"template"===t.type&&(n=n.replace(/^components\//,"")),e+"/"+n+"/"+t.type},podBasedModuleName:function(e){var t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)},podBasedComponentsInSubdir:function(e){var t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)},resolveEngine:function(e){var t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)},resolveRouteMap:function(e){var t=e.fullNameWithoutType,n=t+"/routes"
if(this._moduleRegistry.has(n)){var r=this._extractDefaultExport(n)
return Ember.assert("The route map for "+t+" should be wrapped by 'buildRoutes' before exporting.",r.isRouteMap),r}},mainModuleName:function(e){var t=e.prefix+"/"+e.type
if("main"===e.fullNameWithoutType)return t},defaultModuleName:function(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType},prefix:function(e){var t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t},moduleNameLookupPatterns:Ember.computed(function(){return[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName]}).readOnly(),findModuleName:function(e,t){for(var n=this.get("moduleNameLookupPatterns"),r=void 0,i=0,o=n.length;i<o;i++){var a=n[i].call(this,e)
if(a&&(a=this.chooseModuleName(a,e)),a&&this._moduleRegistry.has(a)&&(r=a),t||this._logLookup(r,e,a),r)return r}},chooseModuleName:function(e,t){var n=this,r=o(e)
if(e!==r&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(r))throw new TypeError("Ambiguous module names: '"+e+"' and '"+r+"'")
if(this._moduleRegistry.has(e))return e
if(this._moduleRegistry.has(r))return r
var i=e.replace(/\/-([^\/]*)$/,"/_$1")
if(this._moduleRegistry.has(i))return Ember.deprecate('Modules should not contain underscores. Attempted to lookup "'+e+'" which was not found. Please rename "'+i+'" to "'+e+'" instead.',!1,{id:"ember-resolver.underscored-modules",until:"3.0.0"}),i
Ember.runInDebug(function(){"helper"===t.type&&/[a-z]+[A-Z]+/.test(e)&&(n._camelCaseHelperWarnedNames=n._camelCaseHelperWarnedNames||[],!(n._camelCaseHelperWarnedNames.indexOf(t.fullName)>-1)&&n._moduleRegistry.has(s(e))&&(n._camelCaseHelperWarnedNames.push(t.fullName),Ember.warn('Attempted to lookup "'+t.fullName+'" which was not found. In previous versions of ember-resolver, a bug would have caused the module at "'+s(e)+'" to be returned for this camel case helper name. This has been fixed. Use the dasherized name to resolve the module that would have been returned in previous versions.',!1,{id:"ember-resolver.camelcase-helper-names",until:"3.0.0"})))})},lookupDescription:function(e){var t=this.parseName(e)
return this.findModuleName(t,!0)},_logLookup:function(e,t,n){if(Ember.ENV.LOG_MODULE_RESOLVER||t.root.LOG_RESOLVER){var r=void 0,i=e?"[✓]":"[ ]"
r=t.fullName.length>60?".":new Array(60-t.fullName.length).join("."),n||(n=this.lookupDescription(t)),Ember.Logger.info(i,t.fullName,r,n)}},knownForType:function(e){for(var t=this._moduleRegistry.moduleNames(),r=(0,n.default)(),i=0,o=t.length;i<o;i++){var a=t[i],s=this.translateToContainerFullname(e,a)
s&&(r[s]=!0)}return r},translateToContainerFullname:function(e,t){var n=this.prefix({type:e}),r=n+"/",i="/"+e,o=t.indexOf(r),a=t.indexOf(i)
if(0===o&&a===t.length-i.length&&t.length>r.length+i.length)return e+":"+t.slice(o+r.length,a)
var s=n+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(s)&&t.length>s.length?e+":"+t.slice(s.length):void 0},_extractDefaultExport:function(e){var t=require(e,null,null,!0)
return t&&t.default&&(t=t.default),t}})
c.reopenClass({moduleBasedResolver:!0}),e.default=c}),define("ember-resolver/utils/class-factory",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return{create:function(t){return"function"==typeof e.extend?e.extend(t):e}}}}),define("ember-resolver/utils/make-dictionary",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=Object.create(null)
return e._dict=null,delete e._dict,e}})
