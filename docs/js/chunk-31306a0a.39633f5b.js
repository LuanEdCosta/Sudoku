(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31306a0a"],{"02f4":function(e,t,n){var r=n("4588"),i=n("be13");e.exports=function(e){return function(t,n){var o,a,c=String(i(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):o:e?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"07e3":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},"0ae7":function(e,t,n){"use strict";var r=n("cce7"),i=n.n(r);i.a},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"112d":function(e,t,n){"use strict";var r=n("86ad"),i=n.n(r);i.a},"11c1":function(e,t,n){},"11e9":function(e,t,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?u:function(e,t){if(e=o(e),t=a(t,!0),s)try{return u(e,t)}catch(n){}if(c(e,t))return i(!r.f.call(e,t),e[t])}},"196c":function(e,t,n){"use strict";var r=n("11c1"),i=n.n(r);i.a},"1bc3":function(e,t,n){var r=n("f772");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(e,t,n){var r=n("f772"),i=n("e53d").document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),a=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var d=c(e),h=!o(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),p=h?!o(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!t}):void 0;if(!h||!p||"replace"===e&&!l||"split"===e&&!f){var v=/./[d],b=n(a,d,""[e],function(e,t,n,r,i){return t.exec===s?h&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),m=b[0],y=b[1];r(String.prototype,e,m),i(RegExp.prototype,d,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},"28a5":function(e,t,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),a=n("0390"),c=n("9def"),s=n("5f1b"),u=n("520a"),l=n("79e5"),f=Math.min,d=[].push,h="split",p="length",v="lastIndex",b=4294967295,m=!l(function(){RegExp(b,"y")});n("214f")("split",2,function(e,t,n,l){var y;return y="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(i,e,t);var o,a,c,s=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=void 0===t?b:t>>>0,m=new RegExp(e.source,l+"g");while(o=u.call(m,i)){if(a=m[v],a>f&&(s.push(i.slice(f,o.index)),o[p]>1&&o.index<i[p]&&d.apply(s,o.slice(1)),c=o[0][p],f=a,s[p]>=h))break;m[v]===o.index&&m[v]++}return f===i[p]?!c&&m.test("")||s.push(""):s.push(i.slice(f)),s[p]>h?s.slice(0,h):s}:"0"[h](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):y.call(String(i),n,r)},function(e,t){var r=l(y,e,this,t,y!==n);if(r.done)return r.value;var u=i(e),d=String(this),h=o(u,RegExp),p=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),g=new h(m?u:"^(?:"+u.source+")",v),C=void 0===t?b:t>>>0;if(0===C)return[];if(0===d.length)return null===s(g,d)?[d]:[];var k=0,S=0,x=[];while(S<d.length){g.lastIndex=m?S:0;var w,T=s(g,m?d:d.slice(S));if(null===T||(w=f(c(g.lastIndex+(m?0:S)),d.length))===k)S=a(d,S,p);else{if(x.push(d.slice(k,S)),x.length===C)return x;for(var O=1;O<=T.length-1;O++)if(x.push(T[O]),x.length===C)return x;S=k=w}}return x.push(d.slice(k)),x}]})},"294c":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"2eb9":function(e,t,n){"use strict";var r=n("7db4"),i=n.n(r);i.a},"2fdb":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d2c8"),o="includes";r(r.P+r.F*n("5147")(o),"String",{includes:function(e){return!!~i(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"35e8":function(e,t,n){var r=n("d9f6"),i=n("aebd");e.exports=n("8e60")?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"377e":function(e,t,n){},4203:function(e,t,n){"use strict";var r=n("377e"),i=n.n(r);i.a},"454f":function(e,t,n){n("46a7");var r=n("584a").Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},"456d":function(e,t,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",function(){return function(e){return i(r(e))}})},"46a7":function(e,t,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},5147:function(e,t,n){var r=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},"520a":function(e,t,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(e){var t,n,a,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(t=f[c]),a=i.call(f,e),s&&a&&(f[c]=f.global?a.index+a[0].length:t),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),e.exports=a},"584a":function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5dbc":function(e,t,n){var r=n("d3f4"),i=n("8b97").set;e.exports=function(e,t,n){var o,a=t.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(e,o),e}},"5eda":function(e,t,n){var r=n("5ca1"),i=n("8378"),o=n("79e5");e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"63b6":function(e,t,n){var r=n("e53d"),i=n("584a"),o=n("d864"),a=n("35e8"),c=n("07e3"),s="prototype",u=function(e,t,n){var l,f,d,h=e&u.F,p=e&u.G,v=e&u.S,b=e&u.P,m=e&u.B,y=e&u.W,g=p?i:i[t]||(i[t]={}),C=g[s],k=p?r:v?r[t]:(r[t]||{})[s];for(l in p&&(n=t),n)f=!h&&k&&void 0!==k[l],f&&c(g,l)||(d=f?k[l]:n[l],g[l]=p&&"function"!=typeof k[l]?n[l]:m&&f?o(d,r):y&&k[l]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[s]=e[s],t}(d):b&&"function"==typeof d?o(Function.call,d):d,b&&((g.virtual||(g.virtual={}))[l]=d,e&u.R&&C&&!C[l]&&a(C,l,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},6762:function(e,t,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6c5e":function(e,t,n){},"794b":function(e,t,n){e.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"7db4":function(e,t,n){},8579:function(e,t,n){},"85f2":function(e,t,n){e.exports=n("454f")},"86ad":function(e,t,n){},"8b97":function(e,t,n){var r=n("d3f4"),i=n("cb7c"),o=function(e,t){if(i(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:o}},"8e60":function(e,t,n){e.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(e,t,n){var r=n("5ca1"),i=n("990b"),o=n("6821"),a=n("11e9"),c=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),s=a.f,u=i(r),l={},f=0;while(u.length>f)n=s(r,t=u[f++]),void 0!==n&&c(l,t,n);return l}})},9093:function(e,t,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"947e":function(e,t,n){"use strict";var r=n("6c5e"),i=n.n(r);i.a},"990b":function(e,t,n){var r=n("9093"),i=n("2621"),o=n("cb7c"),a=n("7726").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(o(e)),n=i.f;return n?t.concat(n(e)):t}},aa77:function(e,t,n){var r=n("5ca1"),i=n("be13"),o=n("79e5"),a=n("fdef"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(e,t,n){var i={},c=o(function(){return!!a[e]()||s[e]()!=s}),u=i[e]=c?t(d):a[e];n&&(i[n]=u),r(r.P+r.F*c,"String",i)},d=f.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=f},aae3:function(e,t,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},ac6a:function(e,t,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),d=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),v=0;v<p.length;v++){var b,m=p[v],y=h[m],g=a[m],C=g&&g.prototype;if(C&&(C[l]||c(C,l,d),C[f]||c(C,f,m),s[m]=d,y))for(b in r)C[b]||o(C,b,r[b],!0)}},aebd:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b75a:function(e,t,n){"use strict";var r=n("8579"),i=n.n(r);i.a},c5f6:function(e,t,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("2d95"),a=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,h="Number",p=r[h],v=p,b=p.prototype,m=o(n("2aeb")(b))==h,y="trim"in String.prototype,g=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():d(t,3);var n,r,i,o=t.charCodeAt(0);if(43===o||45===o){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var a,s=t.slice(2),u=0,l=s.length;u<l;u++)if(a=s.charCodeAt(u),a<48||a>i)return NaN;return parseInt(s,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(m?s(function(){b.valueOf.call(n)}):o(n)!=h)?a(new v(g(t)),n,p):g(t)};for(var C,k=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;k.length>S;S++)i(v,C=k[S])&&!i(p,C)&&f(p,C,l(v,C));p.prototype=b,b.constructor=p,n("2aba")(r,h,p)}},cce7:function(e,t,n){},cd56:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("sudoku-navbar"),n("div",{staticClass:"content"},[n("sudoku-table",{ref:"sudokuTable"}),n("sudokuControllers",{on:{onNumberSelected:e.onNumberSelected}}),n("sudoku-settings")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"navbar-middle"},[n("span",{staticClass:"navbar-title"},[e._v("Sudoku")]),n("span",{staticClass:"navbar-description"},[e._v("Created with "),n("span",{staticClass:"accent"},[e._v("♥")]),e._v(" by Luan Eduardo da Costa")])])])}],c={name:"SudokuNavbar"},s=c,u=(n("2eb9"),n("2877")),l=Object(u["a"])(s,o,a,!1,null,"48968015",null),f=l.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sudoku-table-wrapper",attrs:{tabindex:"0"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])&&e._k(t.keyCode,"w",void 0,t.key,void 0)?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.upPressed(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])&&e._k(t.keyCode,"s",void 0,t.key,void 0)?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.downPressed(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])&&e._k(t.keyCode,"a",void 0,t.key,void 0)?null:"button"in t&&0!==t.button?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.leftPressed(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:"button"in t&&2!==t.button?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.rightPressed(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.deletePressed(t)},e.onKeyPressed]}},[e.isPlaying?e._e():n("div",{staticClass:"prevent-gameplay"},[n("div",{staticClass:"prevent-gameplay-msg"},[e._v(e._s(e.preventGameplayText))])]),n("table",{staticClass:"sudoku-table"},[n("tbody",{staticClass:"sudoku-table-body"},e._l(9,function(t,r){return n("tr",{key:"tr"+r,staticClass:"sudoku-table-line"},e._l(9,function(t,i){return n("td",{key:"td"+i,staticClass:"sudoku-table-cell",class:[e.borderClasses(r,i),e.notEditableClass(e.sudokuMatrix[r][i].editable),e.selectedCellClasses(e.sudokuMatrix[r][i])],on:{click:function(t){return e.cellClick(e.sudokuMatrix[r][i])}}},[e._v("\n                    "+e._s(e.printCellValue(e.sudokuMatrix[r][i].value))+"\n                ")])}),0)}),0)])])},h=[],p=(n("8e6e"),n("ac6a"),n("456d"),n("c5f6"),n("85f2")),v=n.n(p);function b(e,t,n){return t in e?v()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("6762"),n("2fdb");var m=n("109c"),y={getQuantityOfGeneratedNumbers:function(e){switch(e){case m["a"].EASY:return 40;case m["a"].MEDIUM:return 30;case m["a"].HARD:return 20;case m["a"].VERY_HARD:return 10;default:return 0}},getSudokuMatrixFilledWithZeros:function(){for(var e=[],t=0;t<9;t++){for(var n=[],r=0;r<9;r++)n.push({value:0,editable:!0,line:t,column:r});e.push(n)}return e},startGame:function(e){for(var t=this.getSudokuMatrixFilledWithZeros(),n=this.getQuantityOfGeneratedNumbers(e),r=0,i=0;i<9;i++)for(var o=0;o<9;o++)if(r<n){var a=this.getRandomInteger(0,9),c=this.getRandomInteger(0,9),s=t[a][c],u=this.generateNumber(s,t);s.value=u,s.editable=!1,r++}return t},generateNumber:function(e,t){var n=0;do{n=this.getRandomInteger()}while(!this.isNumberValidInMatrix(n,e,t));return n},getRandomInteger:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(t-e))+e},isNumberValidInMatrix:function(e,t,n){if(0===e)return!1;for(var r=0;r<9;r++)if(n[t.line][r].value===e)return!1;for(var i=0;i<9;i++)if(n[i][t.column].value===e)return!1;for(var o=this.getRegionCellsMatrix(),a=this.getRegionPosition(t),c=a.regionLine,s=a.regionColumn,u=o[c][s],l=0;l<u.length;l++){var f=u[l];if(e===n[f.line][f.column].value)return!1}return!0},getRegionIndexMatrix:function(){return[[0,1,2],[3,4,5],[6,7,8]]},getRegionCellsMatrix:function(){for(var e=[],t=0;t<3;t++){for(var n=[],r=0;r<3;r++){for(var i=[],o=0+3*r,a=0+3*t,c=1;c<=9;c++)i.push({line:a,column:o}),c%3===0?o=0+3*r:o++,c%3===0&&a++;n.push(i)}e.push(n)}return e},getRegionPosition:function(e){for(var t=this.getRegionIndexMatrix(),n=0,r=0,i=0;i<t.length;i++)t[i].includes(e.line)&&(n=i),t[i].includes(e.column)&&(r=i);return{regionLine:n,regionColumn:r}},validateSudokuMatrix:function(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++){var r=e[t][n];if(!this.isNumberValidInMatrix(r.value,r,e))return!1}return!0}},g=n("8e52");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S={computed:{gameState:function(){return this.$store.state.game.gameState},gameTime:function(){return this.$store.state.game.gameTime},isPlaying:function(){return this.gameState===g["a"].STARTED},isNotStarted:function(){return this.gameState===g["a"].NOT_STARTED}},methods:{updateStoreGameTime:function(e){this.$store.commit("setGameTime",e)}}},x={computed:{navigateOnlyInEnabledCells:function(){return this.$store.state.config.navigateOnlyInEnabledCells},gameDificulty:function(){return this.$store.state.config.gameDificulty}}},w={methods:{modifyStoreObject:function(e,t,n,r){var i=k({},e);i[t]=n,this.$store.commit(r,i)},modifyGameObject:function(e,t){this.modifyStoreObject(this.$store.state.game,e,t,"setGame")},modifyConfigObject:function(e,t){this.modifyStoreObject(this.$store.state.config,e,t,"setConfig")}}};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _={name:"SudokuTable",mixins:[S,x],data:function(){return{selectedCell:null,sudokuMatrix:y.getSudokuMatrixFilledWithZeros()}},computed:{selectedCellReference:function(){return this.selectedCell?this.sudokuMatrix[this.selectedCell.line][this.selectedCell.column]:null},onlyEditableAndIsEditable:function(){return this.navigateOnlyInEnabledCells&&this.selectedCell&&!this.selectedCell.editable},preventGameplayText:function(){switch(this.gameState){case g["a"].NOT_STARTED:return"Click Play to Start";case g["a"].PAUSED:return"Paused"}return""}},methods:{printCellValue:function(e){return 0===e?"":"".concat(e)},cellClick:function(e){this.navigateOnlyInEnabledCells?e.editable&&(this.selectedCell=this.isCellSelected(e)?null:O({},e)):this.selectedCell=this.isCellSelected(e)?null:O({},e)},selectedCellClasses:function(e){return{"cell-selected-editable":this.isCellSelected(e)&&e.editable,"cell-selected-not-editable":this.isCellSelected(e)&&!e.editable}},notEditableClass:function(e){return{"sudoku-table-cell-not-editable":!e}},borderClasses:function(e,t){return{"cell-border-right":2===t||5===t,"cell-border-bottom":2===e||5===e}},isCellSelected:function(e){return this.selectedCell&&this.selectedCell.line===e.line&&this.selectedCell.column===e.column},upPressed:function(){if(this.selectedCell)do{var e=this.selectedCell,t=e.line,n=e.column;t--,t=-1===t?8:t,this.moveSelectedCell(t,n)}while(this.onlyEditableAndIsEditable)},downPressed:function(){if(this.selectedCell)do{var e=this.selectedCell,t=e.line,n=e.column;t++,t=9===t?0:t,this.moveSelectedCell(t,n)}while(this.onlyEditableAndIsEditable)},leftPressed:function(){if(this.selectedCell)do{var e=this.selectedCell,t=e.column,n=e.line;t--,t=-1===t?8:t,this.moveSelectedCell(n,t)}while(this.onlyEditableAndIsEditable)},rightPressed:function(){if(this.selectedCell)do{var e=this.selectedCell,t=e.column,n=e.line;t++,t=9===t?0:t,this.moveSelectedCell(n,t)}while(this.onlyEditableAndIsEditable)},moveSelectedCell:function(e,t){this.selectedCell=O({},this.sudokuMatrix[e][t])},deletePressed:function(){this.selectedCellReference&&(this.selectedCellReference.value=0)},onKeyPressed:function(e){var t=e.keyCode?e.keyCode:e.which;t>=96&&t<=105&&this.setValueInCell(Number(e.key))},setValueInCell:function(e){this.selectedCellReference&&this.selectedCellReference.editable&&(this.selectedCellReference.value=e,0!==e&&this.checkIfPlayerWonTheGame())},checkIfPlayerWonTheGame:function(){var e=y.validateSudokuMatrix(this.sudokuMatrix);e&&alert("Congratulations, you won the game!")}},watch:{gameState:function(e,t){e===g["a"].STARTED&&t===g["a"].NOT_STARTED?this.sudokuMatrix=y.startGame(this.gameDificulty):e===g["a"].NOT_STARTED&&(this.selectedCell=null,this.sudokuMatrix=y.getSudokuMatrixFilledWithZeros())}}},E=_,P=(n("0ae7"),Object(u["a"])(E,d,h,!1,null,"d36ef81a",null)),N=P.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sudoku-controllers"},[n("div",{staticClass:"controllers-title"},[e._v("Controllers")]),n("div",{staticClass:"controllers-body"},[n("div",{staticClass:"timer"},[n("base-timer",{ref:"timer",on:{onChange:e.onTimerChange}})],1),n("div",{staticClass:"controller-btn-wrapper"},[n("button",{staticClass:"controller-btn",on:{click:e.playPauseClicked}},[e._v("\n                "+e._s(e.playButtonText)+"\n            ")]),n("button",{staticClass:"controller-btn",class:e.restartButtonClasses,on:{click:e.restartClicked}},[e._v("\n                Restart\n            ")])]),n("table",{staticClass:"numpad-table"},[n("tbody",e._l(3,function(t,r){return n("tr",{key:"tr-cont-"+r},e._l(3,function(t,i){return n("td",{key:"td-cont-"+i,staticClass:"numpad-number",on:{click:function(t){return e.numberPadNumberClick(e.numberPad[r][i])}}},[e._v("\n                        "+e._s(e.numberPad[r][i])+"\n                    ")])}),0)}),0)]),n("div",{staticClass:"controller-delete",on:{click:function(t){return e.numberPadNumberClick(0)}}},[e._v("\n            Delete\n        ")])])])},I=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(e._s(e.timerText))])},D=[],A={name:"Timer",data:function(){return{secondsCount:0,secondsToShow:0,minutesToShow:0,hoursToShow:0,intervalFunction:null}},computed:{timerText:function(){var e=this.formatNumberToShow(this.secondsToShow),t=this.formatNumberToShow(this.minutesToShow),n=this.formatNumberToShow(this.hoursToShow);return"".concat(n,":").concat(t,":").concat(e)}},methods:{start:function(){this.intervalFunction||(this.intervalFunction=setInterval(this.onEachInterval,1e3))},pause:function(){this.intervalFunction&&(clearInterval(this.intervalFunction),this.intervalFunction=null)},stop:function(){this.pause(),this.secondsCount=0,this.secondsToShow=0,this.minutesToShow=0,this.hoursToShow=0,this.emitChanges()},onEachInterval:function(){this.secondsCount++,this.secondsToShow++,60===this.secondsToShow&&(this.minutesToShow++,this.secondsToShow=0),60===this.minutesToShow&&(this.hoursToShow++,this.minutesToShow=0),this.emitChanges()},formatNumberToShow:function(e){return e<10?"0"+e:e},emitChanges:function(){this.$emit("onChange",{secondsCount:this.secondsCount,text:this.timerText})}}},M=A,L=Object(u["a"])(M,R,D,!1,null,null,null),$=L.exports,F={name:"SudokuControllers",mixins:[S,x,w],components:{baseTimer:$},data:function(){return{numberPadNumber:0}},computed:{numberPad:function(){return[[7,8,9],[4,5,6],[1,2,3]]},playButtonText:function(){switch(this.gameState){case g["a"].NOT_STARTED:return"Play";case g["a"].STARTED:return"Pause";case g["a"].PAUSED:return"Continue"}return null},restartButtonClasses:function(){return{"controller-btn-disabled":this.gameState!==g["a"].PAUSED}}},methods:{numberPadNumberClick:function(e){this.$emit("onNumberSelected",e)},playPauseClicked:function(){this.gameState===g["a"].NOT_STARTED||this.gameState===g["a"].PAUSED?(this.$refs.timer.start(),this.modifyGameObject("gameState",g["a"].STARTED)):(this.$refs.timer.pause(),this.modifyGameObject("gameState",g["a"].PAUSED))},restartClicked:function(){this.gameState===g["a"].PAUSED&&(this.$refs.timer.stop(),this.modifyGameObject("gameState",g["a"].NOT_STARTED))},onTimerChange:function(e){var t=e.text;this.updateStoreGameTime(t)}}},G=F,K=(n("4203"),Object(u["a"])(G,j,I,!1,null,"60370db9",null)),V=K.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sudoku-config-wrapper"},[n("div",{staticClass:"sudoku-config-title"},[e._v("Settings")]),n("div",{staticClass:"sudoku-config-body"},[e.isNotStarted?n("div",[n("div",[e._v("Choose a dificulty")]),n("sudoku-dificulty-picker")],1):e._e(),n("base-checkbox",{attrs:{checked:e.navigateOnlyInEnabledCells},on:{onCheck:e.changeNavigationStyle}},[e._v("\n            Navigate only in enabled cells\n        ")])],1)])},B=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"check-container"},[n("label",{staticClass:"check-label",class:e.labelClasses},[e.hasText?e._t("default"):e._e(),n("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked},on:{input:e.emitInput}}),n("span",{staticClass:"checkmark"})],2)])},H=[],Y={name:"BaseCheckbox",props:{checked:{type:Boolean,default:!1}},computed:{hasText:function(){return!!this.$slots.default},labelClasses:function(){return{"no-text":!this.hasText}}},methods:{emitInput:function(e){this.$emit("onCheck",e.target.checked)}}},Z=Y,J=(n("b75a"),Object(u["a"])(Z,W,H,!1,null,"5a7e47bf",null)),Q=J.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sudoku-dificulty-picker"},e._l(e.dificulties,function(t){return n("div",{key:t.name,staticClass:"sudoku-dificulty",class:e.getClasses(t.value),on:{click:function(n){return e.dificultyClicked(t.value)}}},[e._v("\n        "+e._s(t.name)+"\n    ")])}),0)},q=[],z=(n("28a5"),{name:"sudokuDificultyPicker",mixins:[x,w],computed:{dificulties:function(){var e=[];return Object.keys(m["a"]).map(function(t){e.push({name:t.split("_").join(" ").toLowerCase(),value:m["a"][t]})}),e}},methods:{dificultyClicked:function(e){this.modifyConfigObject("gameDificulty",e)},getClasses:function(e){return{"sudoku-dificulty-selected":this.gameDificulty===e}}}}),ee=z,te=(n("196c"),Object(u["a"])(ee,X,q,!1,null,"62bfd211",null)),ne=te.exports,re={name:"SudokuConfig",mixins:[S,x,w],components:{baseCheckbox:Q,sudokuDificultyPicker:ne},methods:{changeNavigationStyle:function(e){this.modifyConfigObject("navigateOnlyInEnabledCells",e)}}},ie=re,oe=(n("947e"),Object(u["a"])(ie,U,B,!1,null,"b139ee02",null)),ae=oe.exports,ce={name:"Main",components:{sudokuNavbar:f,sudokuTable:N,sudokuControllers:V,sudokuSettings:ae},methods:{onNumberSelected:function(e){this.$refs.sudokuTable.setValueInCell(e)}}},se=ce,ue=(n("112d"),Object(u["a"])(se,r,i,!1,null,"e46e0ace",null));t["default"]=ue.exports},d2c8:function(e,t,n){var r=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},d864:function(e,t,n){var r=n("79aa");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},d9f6:function(e,t,n){var r=n("e4ae"),i=n("794b"),o=n("1bc3"),a=Object.defineProperty;t.f=n("8e60")?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},e4ae:function(e,t,n){var r=n("f772");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},e53d:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f1ae:function(e,t,n){"use strict";var r=n("86cc"),i=n("4630");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},f772:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-31306a0a.39633f5b.js.map