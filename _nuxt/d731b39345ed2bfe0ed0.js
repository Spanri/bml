(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,n){t.exports=n(131)},131:function(t,e,n){"use strict";n.r(e),function(t){n(44),n(101),n(3);var e=n(21),r=(n(61),n(62),n(15)),o=(n(106),n(107),n(2),n(1),n(4),n(14),n(110),n(140),n(148),n(150),n(7)),c=n(126),f=n(90),l=n(8),h=n(39),d=n(73);o.default.component(d.a.name,d.a),o.default.component("NLink",d.a),t.fetch||(t.fetch=c.a);var m,x,v=[],y=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var w=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function k(t,e,n){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,h,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(l.n)(e,function(t,e){return{Component:t,instance:e}});case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var r=t.Component,o=t.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some(function(t){return d._diffQuery[t]}):"function"==typeof c&&c.apply(o,[e.query,n.query]))})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(h)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:f,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function O(t,e){return y.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function j(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=O(Object(l.o)(e),y.data?y.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function $(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])}),!c)return Object(l.k)(o,e)}function E(t,e,n){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,d,x,y,w,k,C,O,j,E,R,P,S,T,N=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?v=[]:(o=[],v=Object(l.e)(n,o).map(function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)})),c=!1,f=function(path){n.path===path.path&&N.$loading.finish&&N.$loading.finish(),n.path!==path.path&&N.$loading.pause&&N.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(m,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),d=[],(x=Object(l.e)(e,d)).length){t.next=25;break}return t.next=14,$.call(this,x,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof h.a.layout?h.a.layout(m.context):h.a.layout);case 18:return y=t.sent,t.next=21,$.call(this,x,m.context,y);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return x.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(x,e,n)),t.prev=27,t.next=30,$.call(this,x,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=x[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,$.call(this,x,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:k=!0,t.prev=46,C=!0,O=!1,j=void 0,t.prev=50,E=x[Symbol.iterator]();case 52:if(C=(R=E.next()).done){t.next=64;break}if("function"==typeof(P=R.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,P.options.validate(m.context);case 58:if(k=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:C=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),O=!0,j=t.t0;case 70:t.prev=70,t.prev=71,C||null==E.return||E.return();case 73:if(t.prev=73,!O){t.next=76;break}throw j;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(k){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(x.map(function(t,i){if(t._path=Object(l.b)(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,N._pathChanged&&N._queryChanged||t._path!==v[i])t._dataRefresh=!0;else if(!N._pathChanged&&N._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return N._diffQuery[t]}))}if(!N._hadError&&N._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=Boolean(t.options.fetch),f=o&&c?30:45;if(o){var h=Object(l.m)(t.options.asyncData,m.context).then(function(e){Object(l.a)(t,e),N.$loading.increase&&N.$loading.increase(f)});r.push(h)}if(N.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){N.$loading.increase&&N.$loading.increase(f)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(S=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,S));case 97:return v=[],Object(l.i)(S),"function"==typeof(T=h.a.layout)&&(T=T(m.context)),t.next=103,this.loadLayout(T);case 103:this.error(S),this.$nuxt.$emit("routeChanged",e,n,S),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function P(t,n){Object(l.c)(t,function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t})}function S(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?h.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function T(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=[],c=Object(l.f)(t,r),f=Object(l.e)(t,r);o.default.nextTick(function(){c.forEach(function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&f[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}),S.call(n,t)})}}function N(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),x.afterEach(function(e,n){o.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function A(){return(A=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,f,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,x=e.router,t.next=4,Promise.all(j(x));case 4:return n=t.sent,r=new o.default(m),c=y.layout||"default",t.next=9,r.loadLayout(c);case 9:if(r.setLayout(c),f=function(){r.$mount("#__nuxt"),x.afterEach(P),x.afterEach(T.bind(r)),o.default.nextTick(function(){N(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,x.currentRoute)),v=x.currentRoute.matched.map(function(t){return Object(l.b)(t.path)(x.currentRoute.params)})),r.$loading={},y.error&&r.error(y.error),x.beforeEach(k.bind(r)),x.beforeEach(E.bind(r)),!y.serverRendered){t.next=20;break}return f(),t.abrupt("return");case 20:h=function(){P(x.currentRoute,x.currentRoute),S.call(r,x.currentRoute),f()},E.call(r,x.currentRoute,x.currentRoute,function(path){if(path){var t=x.afterEach(function(e,n){t(),h()});x.push(path,void 0,function(t){t&&w(t)})}else h()});case 22:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(h.b)().then(function(t){return A.apply(this,arguments)}).catch(w)}.call(this,n(40))},159:function(t,e,n){"use strict";var r=n(68);n.n(r).a},160:function(t,e,n){(t.exports=n(34)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},161:function(t,e,n){"use strict";var r=n(69);n.n(r).a},162:function(t,e,n){(t.exports=n(34)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},167:function(t,e,n){"use strict";var r=n(70);n.n(r).a},168:function(t,e,n){e=t.exports=n(34)(!1);var r=n(74),o=r(n(75)),c=r(n(76));e.push([t.i,"@font-face{font-family:head;src:url("+o+') format("ttf"),url('+c+') format("woff");font-weight:400;font-size:35px}header[data-v-375225c5]{z-index:2;position:-webkit-sticky;position:sticky;top:0;width:100%}nav[data-v-375225c5]{display:flex;flex-direction:row;justify-content:flex-end;flex-wrap:wrap;background:#5f7f9e;background:linear-gradient(100deg,#ecd5cb -60%,#5f7f9e 130%);font-family:head}a[data-v-375225c5]{text-decoration:none;color:#fff;padding:10px}a[data-v-375225c5]:hover{color:#613741}',""])},169:function(t,e,n){"use strict";var r=n(71);n.n(r).a},170:function(t,e,n){e=t.exports=n(34)(!1);var r=n(74),o=r(n(75)),c=r(n(76));e.push([t.i,"@font-face{font-family:head;src:url("+o+') format("ttf"),url('+c+') format("woff");font-weight:400;font-size:35px}footer[data-v-64c19b5f]{width:100%;color:#fff;justify-content:center;background:#5f7f9e;background:linear-gradient(100deg,#ecd5cb -60%,#5f7f9e 130%);font-family:head}footer p[data-v-64c19b5f]{margin:10px}',""])},171:function(t,e,n){"use strict";var r=n(72);n.n(r).a},172:function(t,e,n){e=t.exports=n(34)(!1);var r=n(74),o=r(n(75)),c=r(n(76));e.push([t.i,"@font-face{font-family:head;src:url("+o+') format("ttf"),url('+c+') format("woff");font-weight:400;font-size:35px}html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.container-fluid{margin:0;padding:0;display:flex;height:100%;flex-direction:column;justify-content:space-around;align-items:center;text-align:center}.default{min-height:100vh;background-color:#fff}.a{flex:100%;justify-content:center;width:100%}.a h2{margin:30px}.a button{margin-top:10px;margin-bottom:10px;background-color:#dddcdc;padding:3px 10px;border:0;box-shadow:1px 1px #e2a0ae,2px 2px #e2a0ae,3px 3px #e2a0ae;transform:translate(-3px,-3px)}.a button:active{box-shadow:none;transform:translate(0)}',""])},39:function(t,e,n){"use strict";n(61),n(5),n(3),n(2),n(1),n(4);var r=n(15),o=n(0),c=(n(14),n(7)),f=n(127),l=n(91),h=n.n(l),d=n(43),m=n.n(d),x=n(92),v=n(8);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));c.default.use(x.a);var y={mode:"history",base:decodeURI("/bml/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(v.e)(t);o.length<2&&o.every(function(t){return!1!==t.options.scrollToTop})?r={x:0,y:0}:o.some(function(t){return t.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(function(){return c.$emit("triggerScroll")}),new Promise(function(e){c.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})},routes:[{path:"/contacts",component:function(){return Object(v.j)(n.e(2).then(n.bind(null,196)))},name:"contacts"},{path:"/instruction",component:function(){return Object(v.j)(n.e(4).then(n.bind(null,197)))},name:"instruction"},{path:"/",component:function(){return Object(v.j)(n.e(3).then(n.bind(null,195)))},name:"index"}],fallback:!1};var w,_={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var h=c[l]||f,d={};k.forEach(function(t){void 0!==h[t]&&(d[t]=h[t])});var m={};C.forEach(function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))});var x=m.beforeEnter;if(m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),x)return x.call(o,t)},!1===h.css){var v=m.leave;(!v||v.length<2)&&(m.leave=function(t,e){v&&v.call(o,t),o.$nextTick(e)})}var y=t("routerView",data);return r.keepAlive&&(y=t("keep-alive",{props:r.keepAliveProps},[y])),t("transition",{props:d,on:m},[y])}},k=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],C=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],O={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},j=(n(159),n(24)),$=Object(j.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,E=(n(16),n(53)),R={name:"Nuxt",components:{NuxtChild:_,NuxtError:$},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(v.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(E.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},P=(n(44),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),S=(n(161),Object(j.a)(P,void 0,void 0,!1,null,null,null).exports),T=(n(163),n(165),{data:function(){return{scrollPrev:0,header:this.$refs.h}},methods:{myFun:function(){console.log(this.header);var t=window.scrollTop(),e=!1,n=!1;if(t>0){if(t>this.scrollPrev)if(e=!1,t<this.header.height()+this.header.offset().top){if(!1===n){var r=this.header.offset().top;this.header.css({top:r+"px"}),n=!0}this.header.css({position:"absolute"})}else this.header.css({position:"fixed",top:"-"+this.header.height()+"px"});else if(n=!1,t>this.header.offset().top){if(!1===e){r=this.header.offset().top;this.header.css({top:r+"px"}),e=!0}this.header.css({position:"absolute"})}else this.header.removeAttr("style");scrollPrev=t}}}}),N=(n(167),Object(j.a)(T,function(){var t=this.$createElement,e=this._self._c||t;return e("header",{ref:"h"},[e("nav",[e("n-link",{attrs:{to:"/"}},[this._v("О модели")]),this._v(" "),e("n-link",{attrs:{to:"instruction"}},[this._v("Инструкция")]),this._v(" "),e("n-link",{attrs:{to:"contacts"}},[this._v("Контакты")])],1)])},[],!1,null,"375225c5",null).exports),A=(n(169),{components:{Header:N,Footer:Object(j.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("Аня, 2019")])])}],!1,null,"64c19b5f",null).exports}}),D=(n(171),{_default:Object(j.a)(A,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid default"},[e("Header"),this._v(" "),e("div",{staticClass:".container-fluid a"},[e("nuxt")],1),this._v(" "),e("Footer")],1)},[],!1,null,null,null).exports}),L={head:{title:"bml",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My best Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:(w=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=Object(v.f)(this.$route)).length){t.next=3;break}return t.abrupt("return");case 3:return this.$loading.start(),n=e.map(function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var p;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=[],e.$options.fetch&&p.push(Object(v.m)(e.$options.fetch,o.context)),e.$options.asyncData&&p.push(Object(v.m)(e.$options.asyncData,o.context).then(function(t){for(var n in t)c.default.set(e.$data,n,t[n])})),t.abrupt("return",Promise.all(p));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),t.prev=5,t.next=8,Promise.all(n);case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(5),this.$loading.fail(),Object(v.i)(t.t0),this.error(t.t0);case 15:this.$loading.finish();case 16:case"end":return t.stop()}},t,this,[[5,10]])})),function(){return w.apply(this,arguments)}),errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&D["_"+t]||(t="default"),this.layoutName=t,this.layout=D["_"+t],this.layout},loadLayout:function(t){return t&&D["_"+t]||(t="default"),Promise.resolve(D["_"+t])}},components:{NuxtLoading:S}},M=n(129);function z(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function B(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?z(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):z(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}c.default.use(M.a,{}),c.default.mixin({methods:{myScroll:function(header,t){console.log(header);var e=window.scrollTop(),n=!1,r=!1;if(e>0){if(e>t)if(n=!1,e<header.height()+header.offset().top){if(!1===r){var o=header.offset().top;header.css({top:o+"px"}),r=!0}header.css({position:"absolute"})}else header.css({position:"fixed",top:"-"+header.height()+"px"});else if(r=!1,e>header.offset().top){if(!1===n){o=header.offset().top;header.css({top:o+"px"}),n=!0}header.css({position:"absolute"})}else header.removeAttr("style");t=e}}}}),n.d(e,"b",function(){return U}),n.d(e,"a",function(){return $}),c.default.component(h.a.name,h.a),c.default.component(m.a.name,B({},m.a,{render:function(t,e){return m.a._warned||(m.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),m.a.render(t,e)}})),c.default.component(_.name,_),c.default.component("NChild",_),c.default.component(R.name,R),c.default.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var I={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function U(t){return F.apply(this,arguments)}function F(){return(F=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,f,path;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new x.a(y);case 2:return n=t.sent,r=B({router:n,nuxt:{defaultTransition:I,transitions:[I],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},I,{name:t}):Object.assign({},I,t):I}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=Boolean(t),t=t?Object(v.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},L),o=e?e.next:function(t){return r.router.push(t)},e?f=n.resolve(e.url).route:(path=Object(v.d)(n.options.base),f=n.resolve(path).route),t.next=8,Object(v.p)(r,{route:f,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use(function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:t.next=15;break;case 15:t.next=18;break;case 18:return t.abrupt("return",{app:r,router:n});case 19:case"end":return t.stop()}},t)}))).apply(this,arguments)}},68:function(t,e,n){var content=n(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("72daabed",content,!0,{sourceMap:!1})},69:function(t,e,n){var content=n(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("3191d5ad",content,!0,{sourceMap:!1})},70:function(t,e,n){var content=n(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("3ff53148",content,!0,{sourceMap:!1})},71:function(t,e,n){var content=n(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("108104d4",content,!0,{sourceMap:!1})},72:function(t,e,n){var content=n(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("20f4381e",content,!0,{sourceMap:!1})},73:function(t,e,n){"use strict";n(1),n(101),n(3),n(2),n(106),n(107);var r=n(7),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},c=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,f=t[Symbol.iterator]();!(e=(o=f.next()).done);e=!0){var l=o.value,h=l();h instanceof Promise&&h.catch(function(){}),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==f.return||f.return()}finally{if(n)throw r}}}}}}},75:function(t,e,n){t.exports=n.p+"fonts/2b3b436.ttf"},76:function(t,e,n){t.exports=n.p+"fonts/90d08c1.woff"},8:function(t,e,n){"use strict";n.d(e,"i",function(){return m}),n.d(e,"j",function(){return x}),n.d(e,"a",function(){return v}),n.d(e,"o",function(){return y}),n.d(e,"e",function(){return w}),n.d(e,"f",function(){return _}),n.d(e,"c",function(){return k}),n.d(e,"n",function(){return C}),n.d(e,"h",function(){return O}),n.d(e,"p",function(){return $}),n.d(e,"k",function(){return R}),n.d(e,"m",function(){return P}),n.d(e,"d",function(){return S}),n.d(e,"b",function(){return T}),n.d(e,"g",function(){return N}),n.d(e,"l",function(){return A});n(5),n(3);var r=n(53),o=(n(23),n(152),n(153),n(21)),c=(n(32),n(33),n(51),n(121),n(16),n(61),n(15)),f=(n(44),n(2),n(1),n(4),n(14),n(0)),l=n(7);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach(function(e){Object(f.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}function m(t){l.default.config.errorHandler&&l.default.config.errorHandler(t)}function x(t){return t.then(function(t){return t.default||t})}function v(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),d({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}function k(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function C(t,e){return Promise.all(k(t,function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(n,r,o,c){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[c]=n=y(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function O(t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,C(e);case 4:return t.abrupt("return",d({},e,{meta:w(e).map(function(t,n){return d({},t.options.meta,{},(e.matched[n]||{}).meta)})}));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function $(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark(function t(e,n){var c,f,l,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/bml/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=B(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([O(n.route),O(n.from)]);case 3:c=t.sent,f=Object(r.a)(c,2),l=f[0],h=f[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(n.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():P(t[0],e).then(function(){return R(t.slice(1),e)})}function P(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function S(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function T(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],h=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d]),!e[c].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):o(l),!e[c].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var l=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,h)path+=h[1];else{var m=t[c],x=n[2],v=n[3],y=n[4],w=n[5],_=n[6],k=n[7];path&&(r.push(path),path="");var C=null!=x&&null!=m&&m!==x,O="+"===_||"*"===_,j="?"===_||"*"===_,$=n[2]||f,pattern=y||w;r.push({name:v||o++,prefix:x||"",delimiter:$,optional:j,repeat:O,partial:C,asterisk:Boolean(k),pattern:pattern?z(pattern):k?".*":"[^"+M($)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function N(t,e){var n={},r=d({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return d({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function M(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function B(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,f=t.split("/"),l=(n?n+"://":"//")+f.shift(),path=f.filter(Boolean).join("/");if(2===(f=path.split("#")).length){var h=f,d=Object(r.a)(h,2);path=d[0],c=d[1]}return l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=c?"#"+c:""}},90:function(t,e,n){"use strict";e.a={}}},[[130,5,1,6]]]);