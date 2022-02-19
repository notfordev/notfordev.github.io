(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39a70bd3"],{1148:function(t,e,r){"use strict";var n=r("a691"),a=r("1d80");t.exports="".repeat||function(t){var e=String(a(this)),r="",c=n(t);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(r+=e);return r}},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var c=r.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"38cf":function(t,e,r){var n=r("23e7"),a=r("1148");n({target:"String",proto:!0},{repeat:a})},"45ad":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[r("v-card",[r("v-card-title",[r("h1",[t._v("Case Converter")])]),r("v-card-text",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-textarea",{attrs:{placeholder:"Paste your text here"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-textarea",{attrs:{placeholder:"Result"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.sentence()}}},[t._v("Sentence case")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.lowercase()}}},[t._v("Lower case")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.uppercase()}}},[t._v("Upper Case")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.capitalize()}}},[t._v("Capitalize case")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.decapitalize()}}},[t._v("Decapitalize case")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.camel()}}},[t._v("Camel case")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.kebab()}}},[t._v("Kebab case")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.snake()}}},[t._v("Snake case")])],1),r("actions",{attrs:{result:t.result}})],1)],1)],1)],1)},a=[],c=(r("99af"),r("a434"),r("ac1f"),r("466d"),r("38cf"),r("a250")),i=r.n(c),o={data:function(){return{text:"",result:""}},methods:{sentence:function(){var t=this.text.match(/^\s*/)[0].length,e=i.a.splice(this.text,0,t);e=i.a.capitalize(e),e="".concat(" ".repeat(t)).concat(e),this.result=e},lowercase:function(){this.result=this.text.toLowerCase()},uppercase:function(){this.result=this.text.toUpperCase()},capitalize:function(){this.result=i.a.titleCase(this.text)},decapitalize:function(){this.result=i.a.decapitalize(this.text)},camel:function(){this.result=i.a.camelCase(this.text)},kebab:function(){this.result=i.a.kebabCase(this.text)},snake:function(){this.result=i.a.snakeCase(this.text)}}},l=o,u=r("2877"),s=r("6544"),f=r.n(s),p=r("8336"),d=r("b0af"),x=r("99d9"),v=r("12b2"),h=r("a523"),g=r("0e8f"),b=r("a722"),E=r("a844"),m=Object(u["a"])(l,n,a,!1,null,null,null);e["default"]=m.exports;f()(m,{VBtn:p["a"],VCard:d["a"],VCardText:x["b"],VCardTitle:v["a"],VContainer:h["a"],VFlex:g["a"],VLayout:b["a"],VTextarea:E["a"]})},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),c=r("50c4"),i=r("1d80"),o=r("8aa5"),l=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=a(t),u=String(this);if(!i.global)return l(i,u);var s=i.unicode;i.lastIndex=0;var f,p=[],d=0;while(null!==(f=l(i,u))){var x=String(f[0]);p[d]=x,""===x&&(i.lastIndex=o(u,c(i.lastIndex),s)),d++}return 0===d?null:p}]}))},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),c=function(t){return function(e,r){var c,i,o=String(a(e)),l=n(r),u=o.length;return l<0||l>=u?t?"":void 0:(c=o.charCodeAt(l),c<55296||c>56319||l+1===u||(i=o.charCodeAt(l+1))<56320||i>57343?t?o.charAt(l):c:t?o.slice(l,l+2):i-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?a.f(t,i,c(0,r)):t[i]=r}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,l=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=l||s||u;f&&(o=function(t){var e,r,a,o,f=this,p=u&&f.sticky,d=n.call(f),x=f.source,v=0,h=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(x="(?: "+x+")",h=" "+h,v++),r=new RegExp("^(?:"+x+")",d)),s&&(r=new RegExp("^"+x+"$(?!\\s)",d)),l&&(e=f.lastIndex),a=c.call(p?r:f,h),p?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),s&&a&&a.length>1&&i.call(a[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),t.exports=o},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),c=r("e8b5"),i=r("861d"),o=r("7b0b"),l=r("50c4"),u=r("8418"),s=r("65f0"),f=r("1dde"),p=r("b622"),d=r("2d00"),x=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=d>=51||!a((function(){var t=[];return t[x]=!1,t.concat()[0]!==t})),b=f("concat"),E=function(t){if(!i(t))return!1;var e=t[x];return void 0!==e?!!e:c(t)},m=!g||!b;n({target:"Array",proto:!0,forced:m},{concat:function(t){var e,r,n,a,c,i=o(this),f=s(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?i:arguments[e],E(c)){if(a=l(c.length),p+a>v)throw TypeError(h);for(r=0;r<a;r++,p++)r in c&&u(f,p,c[r])}else{if(p>=v)throw TypeError(h);u(f,p++,c)}return f.length=p,f}})},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),c=r("a691"),i=r("50c4"),o=r("7b0b"),l=r("65f0"),u=r("8418"),s=r("1dde"),f=r("ae40"),p=s("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),x=Math.max,v=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!d},{splice:function(t,e){var r,n,s,f,p,d,b=o(this),E=i(b.length),m=a(t,E),y=arguments.length;if(0===y?r=n=0:1===y?(r=0,n=E-m):(r=y-2,n=v(x(c(e),0),E-m)),E+r-n>h)throw TypeError(g);for(s=l(b,n),f=0;f<n;f++)p=m+f,p in b&&u(s,f,b[p]);if(s.length=n,r<n){for(f=m;f<E-n;f++)p=f+n,d=f+r,p in b?b[d]=b[p]:delete b[d];for(f=E;f>E-n+r;f--)delete b[f-1]}else if(r>n)for(f=E-n;f>m;f--)p=f+n-1,d=f+r-1,p in b?b[d]=b[p]:delete b[d];for(f=0;f<r;f++)b[f+m]=arguments[f+2];return b.length=E-n+r,s}})},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),c=r("b622"),i=r("9263"),o=r("9112"),l=c("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var x=c(t),v=!a((function(){var e={};return e[x]=function(){return 7},7!=""[t](e)})),h=v&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[x]=/./[x]),r.exec=function(){return e=!0,null},r[x](""),!e}));if(!v||!h||"replace"===t&&(!u||!s||p)||"split"===t&&!d){var g=/./[x],b=r(x,""[t],(function(t,e,r,n,a){return e.exec===i?v&&!a?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),E=b[0],m=b[1];n(String.prototype,t,E),n(RegExp.prototype,x,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&o(RegExp.prototype[x],"sham",!0)}}}]);
//# sourceMappingURL=chunk-39a70bd3.98097df6.js.map