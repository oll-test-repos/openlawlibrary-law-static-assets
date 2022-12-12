/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={9790:e=>{e.exports=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!e||null==e||0===e||""===e}},2220:(e,t,r)=>{var n=r(4354),o=r(3700),i=TypeError;e.exports=function(e){if(n(e))return e;throw i(o(e)+" is not a function")}},3467:(e,t,r)=>{var n=r(4354),o=String,i=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw i("Can't set "+o(e)+" as a prototype")}},1421:(e,t,r)=>{var n=r(1651),o=String,i=TypeError;e.exports=function(e){if(n(e))return e;throw i(o(e)+" is not an object")}},4041:(e,t,r)=>{var n=r(7830),o=r(7841),i=r(6095),a=function(e){return function(t,r,a){var u,c=n(t),s=i(c),l=o(a,s);if(e&&r!=r){for(;s>l;)if((u=c[l++])!=u)return!0}else for(;s>l;l++)if((e||l in c)&&c[l]===r)return e||l||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},8419:(e,t,r)=>{"use strict";var n=r(1738),o=r(5506),i=TypeError,a=Object.getOwnPropertyDescriptor,u=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=u?function(e,t){if(o(e)&&!a(e,"length").writable)throw i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},8250:(e,t,r)=>{var n=r(1540),o=n({}.toString),i=n("".slice);e.exports=function(e){return i(o(e),8,-1)}},3114:(e,t,r)=>{var n=r(2102),o=r(4354),i=r(8250),a=r(2931)("toStringTag"),u=Object,c="Arguments"==i(function(){return arguments}());e.exports=n?i:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=u(e),a))?r:c?i(t):"Object"==(n=i(t))&&o(t.callee)?"Arguments":n}},8778:(e,t,r)=>{var n=r(5320),o=r(6830),i=r(892),a=r(378);e.exports=function(e,t,r){for(var u=o(t),c=a.f,s=i.f,l=0;l<u.length;l++){var p=u[l];n(e,p)||r&&n(r,p)||c(e,p,s(t,p))}}},7632:(e,t,r)=>{var n=r(1738),o=r(378),i=r(3233);e.exports=n?function(e,t,r){return o.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},3233:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},4704:(e,t,r)=>{var n=r(4354),o=r(378),i=r(9465),a=r(5967);e.exports=function(e,t,r,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:t;if(n(r)&&i(r,s,u),u.global)c?e[t]=r:a(t,r);else{try{u.unsafe?e[t]&&(c=!0):delete e[t]}catch(e){}c?e[t]=r:o.f(e,t,{value:r,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return e}},5967:(e,t,r)=>{var n=r(2569),o=Object.defineProperty;e.exports=function(e,t){try{o(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},1738:(e,t,r)=>{var n=r(2112);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},736:e=>{var t="object"==typeof document&&document.all,r=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:r}},7934:(e,t,r)=>{var n=r(2569),o=r(1651),i=n.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},9325:e=>{var t=TypeError;e.exports=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}},2831:(e,t,r)=>{var n=r(2430);e.exports=n("navigator","userAgent")||""},9318:(e,t,r)=>{var n,o,i=r(2569),a=r(2831),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,l=s&&s.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),e.exports=o},4328:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},225:(e,t,r)=>{var n=r(1540),o=Error,i=n("".replace),a=String(o("zxcasd").stack),u=/\n\s*at [^:]*:[^\n]*/,c=u.test(a);e.exports=function(e,t){if(c&&"string"==typeof e&&!o.prepareStackTrace)for(;t--;)e=i(e,u,"");return e}},3137:(e,t,r)=>{var n=r(2112),o=r(3233);e.exports=!n((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},7641:(e,t,r)=>{var n=r(2569),o=r(892).f,i=r(7632),a=r(4704),u=r(5967),c=r(8778),s=r(8787);e.exports=function(e,t){var r,l,p,f,b,d=e.target,v=e.global,h=e.stat;if(r=v?n:h?n[d]||u(d,{}):(n[d]||{}).prototype)for(l in t){if(f=t[l],p=e.dontCallGetSet?(b=o(r,l))&&b.value:r[l],!s(v?l:d+(h?".":"#")+l,e.forced)&&void 0!==p){if(typeof f==typeof p)continue;c(f,p)}(e.sham||p&&p.sham)&&i(f,"sham",!0),a(r,l,f,e)}}},2112:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},2976:(e,t,r)=>{var n=r(9581),o=Function.prototype,i=o.apply,a=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9581:(e,t,r)=>{var n=r(2112);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},7425:(e,t,r)=>{var n=r(9581),o=Function.prototype.call;e.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},34:(e,t,r)=>{var n=r(1738),o=r(5320),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);e.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},1540:(e,t,r)=>{var n=r(9581),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);e.exports=n?a:function(e){return function(){return i.apply(e,arguments)}}},2430:(e,t,r)=>{var n=r(2569),o=r(4354),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e]):n[e]&&n[e][t]}},5324:(e,t,r)=>{var n=r(2220),o=r(8260);e.exports=function(e,t){var r=e[t];return o(r)?void 0:n(r)}},2569:(e,t,r)=>{var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},5320:(e,t,r)=>{var n=r(1540),o=r(6416),i=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},9012:e=>{e.exports={}},8232:(e,t,r)=>{var n=r(1738),o=r(2112),i=r(7934);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},6674:(e,t,r)=>{var n=r(1540),o=r(2112),i=r(8250),a=Object,u=n("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?u(e,""):a(e)}:a},679:(e,t,r)=>{var n=r(4354),o=r(1651),i=r(4001);e.exports=function(e,t,r){var a,u;return i&&n(a=t.constructor)&&a!==r&&o(u=a.prototype)&&u!==r.prototype&&i(e,u),e}},5193:(e,t,r)=>{var n=r(1540),o=r(4354),i=r(7039),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},6731:(e,t,r)=>{var n=r(1651),o=r(7632);e.exports=function(e,t){n(t)&&"cause"in t&&o(e,"cause",t.cause)}},3500:(e,t,r)=>{var n,o,i,a=r(3125),u=r(2569),c=r(1651),s=r(7632),l=r(5320),p=r(7039),f=r(9097),b=r(9012),d="Object already initialized",v=u.TypeError,h=u.WeakMap;if(a||p.state){var y=p.state||(p.state=new h);y.get=y.get,y.has=y.has,y.set=y.set,n=function(e,t){if(y.has(e))throw v(d);return t.facade=e,y.set(e,t),t},o=function(e){return y.get(e)||{}},i=function(e){return y.has(e)}}else{var g=f("state");b[g]=!0,n=function(e,t){if(l(e,g))throw v(d);return t.facade=e,s(e,g,t),t},o=function(e){return l(e,g)?e[g]:{}},i=function(e){return l(e,g)}}e.exports={set:n,get:o,has:i,enforce:function(e){return i(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!c(t)||(r=o(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return r}}}},5506:(e,t,r)=>{var n=r(8250);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4354:(e,t,r)=>{var n=r(736),o=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},8787:(e,t,r)=>{var n=r(2112),o=r(4354),i=/#|\.prototype\./,a=function(e,t){var r=c[u(e)];return r==l||r!=s&&(o(t)?n(t):!!t)},u=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",l=a.POLYFILL="P";e.exports=a},8260:e=>{e.exports=function(e){return null==e}},1651:(e,t,r)=>{var n=r(4354),o=r(736),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===i}:function(e){return"object"==typeof e?null!==e:n(e)}},1274:e=>{e.exports=!1},8937:(e,t,r)=>{var n=r(2430),o=r(4354),i=r(7652),a=r(7374),u=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return o(t)&&i(t.prototype,u(e))}},6095:(e,t,r)=>{var n=r(9309);e.exports=function(e){return n(e.length)}},9465:(e,t,r)=>{var n=r(2112),o=r(4354),i=r(5320),a=r(1738),u=r(34).CONFIGURABLE,c=r(5193),s=r(3500),l=s.enforce,p=s.get,f=Object.defineProperty,b=a&&!n((function(){return 8!==f((function(){}),"length",{value:8}).length})),d=String(String).split("String"),v=e.exports=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!i(e,"name")||u&&e.name!==t)&&(a?f(e,"name",{value:t,configurable:!0}):e.name=t),b&&r&&i(r,"arity")&&e.length!==r.arity&&f(e,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?a&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=l(e);return i(n,"source")||(n.source=d.join("string"==typeof t?t:"")),e};Function.prototype.toString=v((function(){return o(this)&&p(this).source||c(this)}),"toString")},3846:e=>{var t=Math.ceil,r=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?r:t)(n)}},8238:(e,t,r)=>{var n=r(4818);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},378:(e,t,r)=>{var n=r(1738),o=r(8232),i=r(5734),a=r(1421),u=r(7411),c=TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",f="configurable",b="writable";t.f=n?i?function(e,t,r){if(a(e),t=u(t),a(r),"function"==typeof e&&"prototype"===t&&"value"in r&&b in r&&!r[b]){var n=l(e,t);n&&n[b]&&(e[t]=r.value,r={configurable:f in r?r[f]:n[f],enumerable:p in r?r[p]:n[p],writable:!1})}return s(e,t,r)}:s:function(e,t,r){if(a(e),t=u(t),a(r),o)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},892:(e,t,r)=>{var n=r(1738),o=r(7425),i=r(7079),a=r(3233),u=r(7830),c=r(7411),s=r(5320),l=r(8232),p=Object.getOwnPropertyDescriptor;t.f=n?p:function(e,t){if(e=u(e),t=c(t),l)try{return p(e,t)}catch(e){}if(s(e,t))return a(!o(i.f,e,t),e[t])}},9704:(e,t,r)=>{var n=r(9313),o=r(4328).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},419:(e,t)=>{t.f=Object.getOwnPropertySymbols},7652:(e,t,r)=>{var n=r(1540);e.exports=n({}.isPrototypeOf)},9313:(e,t,r)=>{var n=r(1540),o=r(5320),i=r(7830),a=r(4041).indexOf,u=r(9012),c=n([].push);e.exports=function(e,t){var r,n=i(e),s=0,l=[];for(r in n)!o(u,r)&&o(n,r)&&c(l,r);for(;t.length>s;)o(n,r=t[s++])&&(~a(l,r)||c(l,r));return l}},7079:(e,t)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},4001:(e,t,r)=>{var n=r(1540),o=r(1421),i=r(3467);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return o(r),i(n),t?e(r,n):r.__proto__=n,r}}():void 0)},6964:(e,t,r)=>{var n=r(7425),o=r(4354),i=r(1651),a=TypeError;e.exports=function(e,t){var r,u;if("string"===t&&o(r=e.toString)&&!i(u=n(r,e)))return u;if(o(r=e.valueOf)&&!i(u=n(r,e)))return u;if("string"!==t&&o(r=e.toString)&&!i(u=n(r,e)))return u;throw a("Can't convert object to primitive value")}},6830:(e,t,r)=>{var n=r(2430),o=r(1540),i=r(9704),a=r(419),u=r(1421),c=o([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=i.f(u(e)),r=a.f;return r?c(t,r(e)):t}},5482:(e,t,r)=>{var n=r(378).f;e.exports=function(e,t,r){r in e||n(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},1196:(e,t,r)=>{var n=r(8260),o=TypeError;e.exports=function(e){if(n(e))throw o("Can't call method on "+e);return e}},9097:(e,t,r)=>{var n=r(9944),o=r(9225),i=n("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},7039:(e,t,r)=>{var n=r(2569),o=r(5967),i="__core-js_shared__",a=n[i]||o(i,{});e.exports=a},9944:(e,t,r)=>{var n=r(1274),o=r(7039);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6514:(e,t,r)=>{var n=r(9318),o=r(2112);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},7841:(e,t,r)=>{var n=r(1859),o=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):i(r,t)}},7830:(e,t,r)=>{var n=r(6674),o=r(1196);e.exports=function(e){return n(o(e))}},1859:(e,t,r)=>{var n=r(3846);e.exports=function(e){var t=+e;return t!=t||0===t?0:n(t)}},9309:(e,t,r)=>{var n=r(1859),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},6416:(e,t,r)=>{var n=r(1196),o=Object;e.exports=function(e){return o(n(e))}},38:(e,t,r)=>{var n=r(7425),o=r(1651),i=r(8937),a=r(5324),u=r(6964),c=r(2931),s=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var r,c=a(e,l);if(c){if(void 0===t&&(t="default"),r=n(c,e,t),!o(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},7411:(e,t,r)=>{var n=r(38),o=r(8937);e.exports=function(e){var t=n(e,"string");return o(t)?t:t+""}},2102:(e,t,r)=>{var n={};n[r(2931)("toStringTag")]="z",e.exports="[object z]"===String(n)},4818:(e,t,r)=>{var n=r(3114),o=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},3700:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},9225:(e,t,r)=>{var n=r(1540),o=0,i=Math.random(),a=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},7374:(e,t,r)=>{var n=r(6514);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5734:(e,t,r)=>{var n=r(1738),o=r(2112);e.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},3125:(e,t,r)=>{var n=r(2569),o=r(4354),i=n.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},2931:(e,t,r)=>{var n=r(2569),o=r(9944),i=r(5320),a=r(9225),u=r(6514),c=r(7374),s=o("wks"),l=n.Symbol,p=l&&l.for,f=c?l:l&&l.withoutSetter||a;e.exports=function(e){if(!i(s,e)||!u&&"string"!=typeof s[e]){var t="Symbol."+e;u&&i(l,e)?s[e]=l[e]:s[e]=c&&p?p(t):f(t)}return s[e]}},6685:(e,t,r)=>{"use strict";var n=r(2430),o=r(5320),i=r(7632),a=r(7652),u=r(4001),c=r(8778),s=r(5482),l=r(679),p=r(8238),f=r(6731),b=r(225),d=r(3137),v=r(1738),h=r(1274);e.exports=function(e,t,r,y){var g="stackTraceLimit",m=y?2:1,x=e.split("."),S=x[x.length-1],O=n.apply(null,x);if(O){var w=O.prototype;if(!h&&o(w,"cause")&&delete w.cause,!r)return O;var E=n("Error"),P=t((function(e,t){var r=p(y?t:e,void 0),n=y?new O(e):new O;return void 0!==r&&i(n,"message",r),d&&i(n,"stack",b(n.stack,2)),this&&a(w,this)&&l(n,this,P),arguments.length>m&&f(n,arguments[m]),n}));if(P.prototype=w,"Error"!==S?u?u(P,E):c(P,E,{name:!0}):v&&g in O&&(s(P,O,g),s(P,O,"prepareStackTrace")),c(P,O),!h)try{w.name!==S&&i(w,"name",S),w.constructor=P}catch(e){}return P}}},9796:(e,t,r)=>{"use strict";var n=r(7641),o=r(6416),i=r(6095),a=r(8419),u=r(9325),c=r(2112)((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();n({target:"Array",proto:!0,arity:1,forced:c||s},{push:function(e){var t=o(this),r=i(t),n=arguments.length;u(r+n);for(var c=0;c<n;c++)t[r]=arguments[c],r++;return a(t,r),r}})},3247:(e,t,r)=>{var n=r(7641),o=r(2569),i=r(2976),a=r(6685),u="WebAssembly",c=o[u],s=7!==Error("e",{cause:7}).cause,l=function(e,t){var r={};r[e]=a(e,t,s),n({global:!0,constructor:!0,arity:1,forced:s},r)},p=function(e,t){if(c&&c[e]){var r={};r[e]=a(u+"."+e,t,s),n({target:u,stat:!0,constructor:!0,arity:1,forced:s},r)}};l("Error",(function(e){return function(t){return i(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return i(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return i(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return i(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return i(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return i(e,this,arguments)}})),l("URIError",(function(e){return function(t){return i(e,this,arguments)}})),p("CompileError",(function(e){return function(t){return i(e,this,arguments)}})),p("LinkError",(function(e){return function(t){return i(e,this,arguments)}})),p("RuntimeError",(function(e){return function(t){return i(e,this,arguments)}}))},5472:function(e,t,r){var n;e=r.nmd(e),function(){"use strict";var o={function:!0,object:!0},i=o[typeof window]&&window||this,a=o[typeof t]&&t,u=o.object&&e&&!e.nodeType&&e,c=a&&u&&"object"==typeof r.g&&r.g;!c||c.global!==c&&c.window!==c&&c.self!==c||(i=c);var s=Math.pow(2,53)-1,l=/\bOpera/,p=Object.prototype,f=p.hasOwnProperty,b=p.toString;function d(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function v(e){return e=x(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:d(e)}function h(e,t){for(var r in e)f.call(e,r)&&t(e[r],r,e)}function y(e){return null==e?d(e):b.call(e).slice(8,-1)}function g(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function m(e,t){var r=null;return function(e,t){var r=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=s)for(;++r<n;)t(e[r],r,e);else h(e,t)}(e,(function(n,o){r=t(r,n,o,e)})),r}function x(e){return String(e).replace(/^ +| +$/g,"")}var S=function e(t){var r=i,n=t&&"object"==typeof t&&"String"!=y(t);n&&(r=t,t=null);var o=r.navigator||{},a=o.userAgent||"";t||(t=a);var u,c,s,p,f,d=n?!!o.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(b.toString()),S="Object",O=n?S:"ScriptBridgingProxyObject",w=n?S:"Environment",E=n&&r.java?"JavaPackage":y(r.java),P=n?S:"RuntimeObject",j=/\bJava/.test(E)&&r.java,M=j&&y(r.environment)==w,C=j?"a":"α",F=j?"b":"β",A=r.document||{},k=r.operamini||r.opera,T=l.test(T=n&&k?k["[[Class]]"]:y(k))?T:k=null,B=t,R=[],I=null,W=t==a,_=W&&k&&"function"==typeof k.version&&k.version(),D=m([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,r){return e||RegExp("\\b"+(r.pattern||g(r))+"\\b","i").exec(t)&&(r.label||r)})),G=function(e){return m(e,(function(e,r){return e||RegExp("\\b"+(r.pattern||g(r))+"\\b","i").exec(t)&&(r.label||r)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),$=z([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),L=function(e){return m(e,(function(e,r,n){return e||(r[$]||r[/^[a-z]+(?: +[a-z]+\b)*/i.exec($)]||RegExp("\\b"+g(n)+"(?:\\b|\\w*\\d)","i").exec(t))&&n}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),N=function(e){return m(e,(function(e,r){var n=r.pattern||g(r);return!e&&(e=RegExp("\\b"+n+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,r){var n={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&r&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(n=n[/[\d.]+$/.exec(e)])&&(e="Windows "+n),e=String(e),t&&r&&(e=e.replace(RegExp(t,"i"),r)),v(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,n,r.label||r)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function z(e){return m(e,(function(e,r){var n=r.pattern||g(r);return!e&&(e=RegExp("\\b"+n+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+n+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+n+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(r.label&&!RegExp(n,"i").test(r.label)?r.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),r=r.label||r,e=v(e[0].replace(RegExp(n,"i"),r).replace(RegExp("; *(?:"+r+"[_-])?","i")," ").replace(RegExp("("+r+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function X(e){return m(e,(function(e,r){return e||(RegExp(r+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(D&&(D=[D]),/\bAndroid\b/.test(N)&&!$&&(u=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&($=x(u[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),L&&!$?$=z([L]):L&&$&&($=$.replace(RegExp("^("+g(L)+")[-_.\\s]","i"),L+" ").replace(RegExp("^("+g(L)+")[-_.]?(\\w)","i"),L+" $2")),(u=/\bGoogle TV\b/.exec($))&&($=u[0]),/\bSimulator\b/i.test(t)&&($=($?$+" ":"")+"Simulator"),"Opera Mini"==G&&/\bOPiOS\b/.test(t)&&R.push("running in Turbo/Uncompressed mode"),"IE"==G&&/\blike iPhone OS\b/.test(t)?(L=(u=e(t.replace(/like iPhone OS/,""))).manufacturer,$=u.product):/^iP/.test($)?(G||(G="Safari"),N="iOS"+((u=/ OS ([\d_]+)/i.exec(t))?" "+u[1].replace(/_/g,"."):"")):"Konqueror"==G&&/^Linux\b/i.test(N)?N="Kubuntu":L&&"Google"!=L&&(/Chrome/.test(G)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test($))||/\bAndroid\b/.test(N)&&/^Chrome/.test(G)&&/\bVersion\//i.test(t)?(G="Android Browser",N=/\bAndroid\b/.test(N)?N:"Android"):"Silk"==G?(/\bMobi/i.test(t)||(N="Android",R.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&R.unshift("accelerated")):"UC Browser"==G&&/\bUCWEB\b/.test(t)?R.push("speed mode"):"PaleMoon"==G&&(u=/\bFirefox\/([\d.]+)\b/.exec(t))?R.push("identifying as Firefox "+u[1]):"Firefox"==G&&(u=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(N||(N="Firefox OS"),$||($=u[1])):!G||(u=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(G))?(G&&!$&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(u+"/")+8))&&(G=null),(u=$||L||N)&&($||L||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(N))&&(G=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(N)?N:u)+" Browser")):"Electron"==G&&(u=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&R.push("Chromium "+u),_||(_=X(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",g(G),"(?:Firefox|Minefield|NetFront)"])),(u=("iCab"==D&&parseFloat(_)>3?"WebKit":/\bOpera\b/.test(G)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(D)&&"WebKit"||!D&&/\bMSIE\b/i.test(t)&&("Mac OS"==N?"Tasman":"Trident")||"WebKit"==D&&/\bPlayStation\b(?! Vita\b)/i.test(G)&&"NetFront")&&(D=[u]),"IE"==G&&(u=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(G+=" Mobile",N="Windows Phone "+(/\+$/.test(u)?u:u+".x"),R.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(G="IE Mobile",N="Windows Phone 8.x",R.unshift("desktop mode"),_||(_=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=G&&"Trident"==D&&(u=/\brv:([\d.]+)/.exec(t))&&(G&&R.push("identifying as "+G+(_?" "+_:"")),G="IE",_=u[1]),W){if(p="global",f=null!=(s=r)?typeof s[p]:"number",/^(?:boolean|number|string|undefined)$/.test(f)||"object"==f&&!s[p])y(u=r.runtime)==O?(G="Adobe AIR",N=u.flash.system.Capabilities.os):y(u=r.phantom)==P?(G="PhantomJS",_=(u=u.version||null)&&u.major+"."+u.minor+"."+u.patch):"number"==typeof A.documentMode&&(u=/\bTrident\/(\d+)/i.exec(t))?(_=[_,A.documentMode],(u=+u[1]+4)!=_[1]&&(R.push("IE "+_[1]+" mode"),D&&(D[1]=""),_[1]=u),_="IE"==G?String(_[1].toFixed(1)):_[0]):"number"==typeof A.documentMode&&/^(?:Chrome|Firefox)\b/.test(G)&&(R.push("masking as "+G+" "+_),G="IE",_="11.0",D=["Trident"],N="Windows");else if(j&&(B=(u=j.lang.System).getProperty("os.arch"),N=N||u.getProperty("os.name")+" "+u.getProperty("os.version")),M){try{_=r.require("ringo/engine").version.join("."),G="RingoJS"}catch(e){(u=r.system)&&u.global.system==r.system&&(G="Narwhal",N||(N=u[0].os||null))}G||(G="Rhino")}else"object"==typeof r.process&&!r.process.browser&&(u=r.process)&&("object"==typeof u.versions&&("string"==typeof u.versions.electron?(R.push("Node "+u.versions.node),G="Electron",_=u.versions.electron):"string"==typeof u.versions.nw&&(R.push("Chromium "+_,"Node "+u.versions.node),G="NW.js",_=u.versions.nw)),G||(G="Node.js",B=u.arch,N=u.platform,_=(_=/[\d.]+/.exec(u.version))?_[0]:null));N=N&&v(N)}if(_&&(u=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(_)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(W&&o.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(I=/b/i.test(u)?"beta":"alpha",_=_.replace(RegExp(u+"\\+?$"),"")+("beta"==I?F:C)+(/\d+\+?/.exec(u)||"")),"Fennec"==G||"Firefox"==G&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(N))G="Firefox Mobile";else if("Maxthon"==G&&_)_=_.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test($))"Xbox 360"==$&&(N=null),"Xbox 360"==$&&/\bIEMobile\b/.test(t)&&R.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(G)&&(!G||$||/Browser|Mobi/.test(G))||"Windows CE"!=N&&!/Mobi/i.test(t))if("IE"==G&&W)try{null===r.external&&R.unshift("platform preview")}catch(e){R.unshift("embedded")}else(/\bBlackBerry\b/.test($)||/\bBB10\b/.test(t))&&(u=(RegExp($.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||_)?(N=((u=[u,/BB10/.test(t)])[1]?($=null,L="BlackBerry"):"Device Software")+" "+u[0],_=null):this!=h&&"Wii"!=$&&(W&&k||/Opera/.test(G)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==G&&/\bOS X (?:\d+\.){2,}/.test(N)||"IE"==G&&(N&&!/^Win/.test(N)&&_>5.5||/\bWindows XP\b/.test(N)&&_>8||8==_&&!/\bTrident\b/.test(t)))&&!l.test(u=e.call(h,t.replace(l,"")+";"))&&u.name&&(u="ing as "+u.name+((u=u.version)?" "+u:""),l.test(G)?(/\bIE\b/.test(u)&&"Mac OS"==N&&(N=null),u="identify"+u):(u="mask"+u,G=T?v(T.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(u)&&(N=null),W||(_=null)),D=["Presto"],R.push(u));else G+=" Mobile";(u=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(u=[parseFloat(u.replace(/\.(\d)$/,".0$1")),u],"Safari"==G&&"+"==u[1].slice(-1)?(G="WebKit Nightly",I="alpha",_=u[1].slice(0,-1)):_!=u[1]&&_!=(u[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(_=null),u[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==u[0]&&537.36==u[2]&&parseFloat(u[1])>=28&&"WebKit"==D&&(D=["Blink"]),W&&(d||u[1])?(D&&(D[1]="like Chrome"),u=u[1]||((u=u[0])<530?1:u<532?2:u<532.05?3:u<533?4:u<534.03?5:u<534.07?6:u<534.1?7:u<534.13?8:u<534.16?9:u<534.24?10:u<534.3?11:u<535.01?12:u<535.02?"13+":u<535.07?15:u<535.11?16:u<535.19?17:u<536.05?18:u<536.1?19:u<537.01?20:u<537.11?"21+":u<537.13?23:u<537.18?24:u<537.24?25:u<537.36?26:"Blink"!=D?"27":"28")):(D&&(D[1]="like Safari"),u=(u=u[0])<400?1:u<500?2:u<526?3:u<533?4:u<534?"4+":u<535?5:u<537?6:u<538?7:u<601?8:u<602?9:u<604?10:u<606?11:u<608?12:"12"),D&&(D[1]+=" "+(u+="number"==typeof u?".x":/[.+]/.test(u)?"":"+")),"Safari"==G&&(!_||parseInt(_)>45)?_=u:"Chrome"==G&&/\bHeadlessChrome/i.test(t)&&R.unshift("headless")),"Opera"==G&&(u=/\bzbov|zvav$/.exec(N))?(G+=" ",R.unshift("desktop mode"),"zvav"==u?(G+="Mini",_=null):G+="Mobile",N=N.replace(RegExp(" *"+u+"$"),"")):"Safari"==G&&/\bChrome\b/.exec(D&&D[1])?(R.unshift("desktop mode"),G="Chrome Mobile",_=null,/\bOS X\b/.test(N)?(L="Apple",N="iOS 4.3+"):N=null):/\bSRWare Iron\b/.test(G)&&!_&&(_=X("Chrome")),_&&0==_.indexOf(u=/[\d.]+$/.exec(N))&&t.indexOf("/"+u+"-")>-1&&(N=x(N.replace(u,""))),N&&-1!=N.indexOf(G)&&!RegExp(G+" OS").test(N)&&(N=N.replace(RegExp(" *"+g(G)+" *"),"")),D&&!/\b(?:Avant|Nook)\b/.test(G)&&(/Browser|Lunascape|Maxthon/.test(G)||"Safari"!=G&&/^iOS/.test(N)&&/\bSafari\b/.test(D[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(G)&&D[1])&&(u=D[D.length-1])&&R.push(u),R.length&&(R=["("+R.join("; ")+")"]),L&&$&&$.indexOf(L)<0&&R.push("on "+L),$&&R.push((/^on /.test(R[R.length-1])?"":"on ")+$),N&&(u=/ ([\d.+]+)$/.exec(N),c=u&&"/"==N.charAt(N.length-u[0].length-1),N={architecture:32,family:u&&!c?N.replace(u[0],""):N,version:u?u[1]:null,toString:function(){var e=this.version;return this.family+(e&&!c?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(u=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(B))&&!/\bi686\b/i.test(B)?(N&&(N.architecture=64,N.family=N.family.replace(RegExp(" *"+u),"")),G&&(/\bWOW64\b/i.test(t)||W&&/\w(?:86|32)$/.test(o.cpuClass||o.platform)&&!/\bWin64; x64\b/i.test(t))&&R.unshift("32-bit")):N&&/^OS X/.test(N.family)&&"Chrome"==G&&parseFloat(_)>=39&&(N.architecture=64),t||(t=null);var K={};return K.description=t,K.layout=D&&D[0],K.manufacturer=L,K.name=G,K.prerelease=I,K.product=$,K.ua=t,K.version=G&&_,K.os=N||{architecture:null,family:null,version:null,toString:function(){return"null"}},K.parse=e,K.toString=function(){return this.description||""},K.version&&R.unshift(_),K.name&&R.unshift(G),N&&G&&(N!=String(N).split(" ")[0]||N!=G.split(" ")[0]&&!$)&&R.push($?"("+N+")":"on "+N),R.length&&(K.description=R.join(" ")),K}();i.platform=S,void 0===(n=function(){return S}.call(t,r,t,e))||(e.exports=n)}.call(this)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";r(9796),r(3247);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}function n(e,r,n){return(r=t(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r(5472);var a,u=r(9790),c=r.n(u),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(c()(t)||t.length<2)throw new Error("Please add a proper file extension. Got ".concat(t));var r=new RegExp(String.raw(a||(a=i([".","((#|?){0,1}[a-zA-Z0-9.=#_-]{0,})$"],["\\.","((#|\\?){0,1}[a-zA-Z0-9.=#_-]{0,})$"])),t),"gmiu");return r.test(e)},l=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({src:null,head:!0},e);if(c()(t.src)&&c()(t.script))throw new Error('Both "src" and "script" are missing. One must be present.');if(!s(t.src,"js"))throw new Error('File extension is not "js". Got resource URL '.concat(t.src));var r=document.createElement("script");r.setAttribute("src",t.src),t.head?document.head.insertAdjacentElement("beforeend",r):document.body.insertAdjacentElement("beforeend",r)};!function(){var e=document.querySelectorAll('head link[rel="stylesheet"]'),t=[];e.forEach((function(e){t.push(e.getAttribute("href"))}));var r,n=t.find((function(e){return e.includes("_document")}))||null;if(null===n)throw new Error("Unable to find static assets root. Not initializing Reader Lite");try{var o=null!==(r=/^((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)_document\/v[0-9]*/gim.exec(n))?{documentUrl:r[0],themeUrl:r[1]}:null;l({src:o.documentUrl+"/js/readerLite.js"}),l({src:"/_analytics/stats.js"})}catch(e){console.error(e)}}()})()})();