(function(e){function t(t){for(var i,r,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},a={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3af08d40":"7e31ff13"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3af08d40":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-3af08d40":"cb22a646"}[e]+".css",a=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===i||d===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],d=u.getAttribute("data-href");if(d===i||d===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var i=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[e],l.parentNode.removeChild(l),n(o)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,n){i=a[e]=[t,n]}));t.push(i[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1237:function(e,t,n){},"1a43":function(e,t,n){},"4cc0":function(e,t,n){"use strict";n("1a43")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=(n("d3b7"),n("bc3a")),a=n.n(r);a.a.defaults.baseURL="http://api.openweathermap.org";var o={},s=a.a.create(o);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},i["a"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],d=(n("7faf"),n("2877")),f={},l=Object(d["a"])(f,c,u,!1,null,null,null),p=l.exports,g=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"widgets"},[e._v(" fuck "),n("router-link",{staticClass:"widgets__link",attrs:{to:"/options"}},[n("font-awesome-icon",{attrs:{icon:"cog"}})],1),e._l(e.widgets,(function(e,t){return n("weather-widget",{key:t,staticClass:"widgets__widget",attrs:{info:e}})}))],2)},h=[],v=n("5530"),w=n("2f62"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!==Object.keys(e.info).length?n("div",{staticClass:"widget"},[n("div",{staticClass:"widget__name"},[e._v(" "+e._s(e.info.name)+" "+e._s(e.info.sys.country)+" ")]),n("div",{staticClass:"widget__weather"},[n("div",{staticClass:"widget__img"},[n("img",{attrs:{src:e.iconUrl,alt:"icon weather"}})]),n("div",{staticClass:"widget__temp"},[e._v(" "+e._s(e.info.main.temp)+" °С ")]),n("div",{staticClass:"widget__estimate widget-estimate"},[e._v(" "+e._s(e.widgetEstimate)+" ")])]),n("div",{staticClass:"widget__data widget-data"},[n("div",{staticClass:"widget-data__item",attrs:{title:"wind speed and direction"}},[e._v(" "+e._s(e.info.wind.speed)+"m/s ")]),n("div",{staticClass:"widget-data__item",attrs:{title:"pressure in hpa"}},[e._v(" "+e._s(e.info.main.pressure)+"hPa ")]),n("div",{staticClass:"widget-data__item"},[e._v(" humidity: "+e._s(e.info.main.humidity)+"% ")]),n("div",{staticClass:"widget-data__item"},[e._v(" Dew point: 0 °С ")]),n("div",{staticClass:"widget-data__item"},[e._v(" Visibility: "+e._s(e._f("toKm")(e.info.visibility))+"km ")])])]):e._e()},b=[],y=(n("a4d3"),n("e01a"),n("a15b"),n("d81d"),n("fb6a"),{name:"WeatherWidget",props:{info:{type:Object,default:function(){return{}}}},computed:{iconUrl:function(){return this.info.weather?"http://openweathermap.org/img/wn/".concat(this.info.weather[0].icon,"@2x.png"):""},widgetEstimate:function(){var e=this.info.weather.map((function(e){return e.description})).join(", ");return e[0].toUpperCase()+e.slice(1)}},filters:{toKm:function(e){return e/1e3}}}),C=y,j=(n("4cc0"),Object(d["a"])(C,_,b,!1,null,null,null)),O=j.exports,k={name:"widgets",components:{WeatherWidget:O},computed:Object(v["a"])(Object(v["a"])({},Object(w["e"])(["cities"])),Object(w["c"])({widgets:"getWidgets"})),created:function(){this.cities.length?this.fetchWidgets():this.getCity()},methods:Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(w["d"])(["addWidget","removeWidget","addCity"])),Object(w["b"])(["fetchUserCity","fetchWidgets"])),{},{getCity:function(){var e=this;navigator.geolocation.getCurrentPosition((function(){e.fetchUserCity().then((function(){e.fetchWidgets()}))}),(function(){alert("Невозможно определить город, выбран London"),e.addCity("London"),e.fetchWidgets()}))}})},x=k,P=(n("ea3f"),Object(d["a"])(x,m,h,!1,null,null,null)),E=P.exports;i["a"].use(g["a"]);var W=[{path:"/",name:"widgets",component:E},{path:"/options",name:"options",component:function(){return n.e("chunk-3af08d40").then(n.bind(null,"76db"))}}],S=new g["a"]({mode:"history",base:"",routes:W}),T=S,A=n("0e44"),L=(n("7db0"),n("b0c0"),n("3ca3"),n("ddb0"),n("b85c")),U=(n("96cf"),n("1da1")),N={API_KEY:"8acd1e5b429a70f3b059212ea70f1c3a",LANG:"en",UNITS:"metric"},I={fetchWidgets:function(e){return Object(U["a"])(regeneratorRuntime.mark((function t(){var n,i,r,o,s,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.state,i=e.commit,r=n.cities,o=n.widgets,s=Object(L["a"])(r),t.prev=3,u=regeneratorRuntime.mark((function e(){var t,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=c.value,n=o.find((function(e){return e.name===t})),n&&!(n.dt+600<(new Date).getTime())){e.next=14;break}return e.prev=3,e.next=6,a.a.get("/data/2.5/weather",{params:{appid:N.API_KEY,lang:N.LANG,units:N.UNITS,q:t}});case 6:r=e.sent,s=r.data,i("addWidget",s),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),e.t0.response.status&&(i("removeCity",e.t0.response.config.params.q),alert("Город ".concat(e.t0.response.config.params.q," не найдет, он будет удален из списка")));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})),s.s();case 6:if((c=s.n()).done){t.next=10;break}return t.delegateYield(u(),"t0",8);case 8:t.next=6;break;case 10:t.next=15;break;case 12:t.prev=12,t.t1=t["catch"](3),s.e(t.t1);case 15:return t.prev=15,s.f(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[3,12,15,18]])})))()},fetchUserCity:function(e){return Object(U["a"])(regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,a.a.get("http://ip-api.com/json/");case 3:i=t.sent,r=i.data,n("addCity",r.city);case 6:case"end":return t.stop()}}),t)})))()}},R={getWidgets:function(e){return e.cities.map((function(t){return e.widgets.find((function(e){return e.name===t}))}))}},q=(n("4de4"),n("c740"),{addCity:function(e,t){e.cities.push(t)},setCities:function(e,t){e.cities=t},removeCity:function(e,t){e.cities=e.cities.filter((function(e){return e!==t}));var n=e.widgets.find((function(e){return e.name===t}));n&&this.commit("removeWidget",n)},addWidget:function(e,t){var n=e.widgets.findIndex((function(e){return e.id===t.id}));~n?e.widgets[n].dt+600<t.dt&&(e.widgets[n]=t):e.widgets.push(t)},removeWidget:function(e,t){e.widgets=e.widgets.filter((function(e){return e.id!==t.id}))}});i["a"].use(w["a"]);var $=new w["a"].Store({plugins:[Object(A["a"])()],state:{cities:[],widgets:[]},mutations:q,actions:I,getters:R}),K=n("ecee"),B=n("c074"),D=n("ad3d"),M=n("1dce"),Y=n.n(M);n("86d7");i["a"].use(Y.a),K["c"].add(B["b"],B["d"],B["e"],B["a"],B["c"]),i["a"].component("font-awesome-icon",D["a"]),i["a"].config.productionTip=!1,new i["a"]({router:T,store:$,render:function(e){return e(p)}}).$mount("#app"),window.onload=function(){window.$vue=document.getElementById("app").__vue__}},"7faf":function(e,t,n){"use strict";n("a47e")},"86d7":function(e,t,n){},a47e:function(e,t,n){},ea3f:function(e,t,n){"use strict";n("1237")}});
//# sourceMappingURL=app.7828e0e5.js.map