(function(e){function n(n){for(var o,r,u=n[0],s=n[1],i=n[2],f=0,d=[];f<u.length;f++)r=u[f],a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(o=!1)}o&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},r={app:0},a={app:0},c=[];function u(e){return s.p+"resources/js/"+({}[e]||e)+"."+{"chunk-074c9008":"10a539ef","chunk-1803da4a":"1aa266a2","chunk-79b55c34":"84baa9ab","chunk-1a010a2c":"0be7be87","chunk-3e86761c":"8604671e","chunk-4ad9114b":"9ef27bf8","chunk-6aa26ad8":"e9375d6c","chunk-f764fe1c":"8902141b","chunk-85189b44":"7fb88a43","chunk-1f1424fd":"188b3add","chunk-23713d10":"bb25f8b6","chunk-b91540d6":"50513da9"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-074c9008":1,"chunk-1803da4a":1,"chunk-79b55c34":1,"chunk-1a010a2c":1,"chunk-3e86761c":1,"chunk-4ad9114b":1,"chunk-6aa26ad8":1,"chunk-f764fe1c":1,"chunk-85189b44":1,"chunk-1f1424fd":1,"chunk-23713d10":1,"chunk-b91540d6":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var o="resources/css/"+({}[e]||e)+"."+{"chunk-074c9008":"fa8aab99","chunk-1803da4a":"8dcd65e7","chunk-79b55c34":"e3e35a7c","chunk-1a010a2c":"c9326a7b","chunk-3e86761c":"5c7a48f5","chunk-4ad9114b":"5f6396ca","chunk-6aa26ad8":"cf5a33a7","chunk-f764fe1c":"a8087475","chunk-85189b44":"78f45071","chunk-1f1424fd":"5853f7e0","chunk-23713d10":"d18c79cb","chunk-b91540d6":"b8a88a3b"}[e]+".css",a=s.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===o||f===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],f=i.getAttribute("data-href");if(f===o||f===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var o=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],l.parentNode.removeChild(l),t(c)},l.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(l)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise(function(n,t){o=a[e]=[n,t]});n.push(o[2]=c);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e),i=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,t[1](c)}a[e]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"01dc":function(e,n,t){"use strict";t.r(n);var o=t("6a1d");n["default"]={namespaced:!0,state:{nickName:o["a"].getCookieSync("nickName"),userToken:o["a"].getCookieSync("userToken")},getters:{userToken:function(e){return e.userToken}},mutations:{setUserToken:function(e,n){e.userToken=n},setNickName:function(e,n){e.nickName=n}},actions:{handleSetToken:function(e,n){var t=e.commit;o["a"].setCookieSync("userToken",n),t("setUserToken",n),""===n&&t("setNickName","")},handleSetNickName:function(e,n){var t=e.commit;o["a"].setCookieSync("nickName",n),t("setNickName",n)}}}},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=t("bc3a"),a=t.n(r),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],s=(t("5c0b"),t("2877")),i={},f=Object(s["a"])(i,c,u,!1,null,null,null),d=f.exports,l=t("8c4f"),g=t("75fc"),h=[{path:"/",redirect:"/home",component:function(){return t.e("chunk-6aa26ad8").then(t.bind(null,"75a5"))},children:[{path:"/home",name:"Home",meta:{title:"首页"},component:function(){return t.e("chunk-4ad9114b").then(t.bind(null,"0351"))}}]}],p=[{path:"/song",component:function(){return t.e("chunk-6aa26ad8").then(t.bind(null,"75a5"))},children:[{path:"detail",name:"detail",meta:{title:"音乐列表"},component:function(){return t.e("chunk-074c9008").then(t.bind(null,"c972"))}},{path:"now",name:"now",meta:{title:"音乐列表"},component:function(){return t.e("chunk-3e86761c").then(t.bind(null,"29ea"))}},{path:"rank",name:"rank",meta:{title:"排行榜"},component:function(){return t.e("chunk-f764fe1c").then(t.bind(null,"6225"))}},{path:"love",name:"love",meta:{title:"收藏"},component:function(){return t.e("chunk-1a010a2c").then(t.bind(null,"26fe"))}},{path:"comment",name:"comment",meta:{title:"评论"},component:function(){return Promise.all([t.e("chunk-1803da4a"),t.e("chunk-79b55c34")]).then(t.bind(null,"59f9"))}}]}],k=[].concat(Object(g["a"])(h),Object(g["a"])(p));o["a"].use(l["a"]);var m=new l["a"]({routes:k}),S=m,b=t("2f62"),y=(t("a481"),t("ac6a"),t("5a02")),v={};y.keys().forEach(function(e){v[e.replace(/(\.\/|\.js)/g,"")]=y(e).default});var x={namespaced:!0,modules:v};o["a"].use(b["a"]);var N=new b["a"].Store({modules:{player:x}}),P=t("795b"),I=t.n(P),C=t("4328"),O=t.n(C),w=t("6a1d"),A={get:function(e,n){return new I.a(function(t,o){a.a.get(e,{params:n}).then(function(e){t(e.data)}).catch(function(e){o(e)})})},post:function(e,n){return new I.a(function(t,o){w["a"].getCookieSync("userToken")&&(n.token=w["a"].getCookieSync("userToken")),a.a.post(e,O.a.stringify(n)).then(function(e){t(e.data)}).catch(function(e){o(e)})})}},T=A;t("32dd");o["a"].config.productionTip=!1,o["a"].prototype.$axios=a.a,o["a"].prototype.$http=T,o["a"].prototype.$music=w["a"],new o["a"]({router:S,store:N,render:function(e){return e(d)}}).$mount("#app")},"5a02":function(e,n,t){var o={"./song.js":"f02e","./user.js":"01dc"};function r(e){var n=a(e);return t(n)}function a(e){var n=o[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="5a02"},"5c0b":function(e,n,t){"use strict";var o=t("5e27"),r=t.n(o);r.a},"5e27":function(e,n,t){},"6a1d":function(e,n,t){"use strict";var o=t("a78e"),r=t.n(o),a={setCookieSync:function(e,n,t){return r.a.set(e,n,t)},getCookieSync:function(e){return r.a.get(e)},removeCookieSync:function(e){return r.a.remove(e)},clearCookieSync:function(e){return r.a.clear(e)}};n["a"]=a},f02e:function(e,n,t){"use strict";t.r(n);var o=t("e814"),r=t.n(o),a=t("f499"),c=t.n(a),u=t("6a1d");n["default"]={namespaced:!0,state:{songArr:localStorage.getItem("songArr"),songIdx:u["a"].getCookieSync("songIdx"),song:u["a"].getCookieSync("song"),songId:u["a"].getCookieSync("songId"),songLyrics:u["a"].getCookieSync("songLyrics"),songPicture:u["a"].getCookieSync("songPicture"),pagePath:u["a"].getCookieSync("pagePath"),playStatus:!1},getters:{song:function(e){return e.song}},mutations:{setSongArr:function(e,n){e.songArr=n},setSongIdx:function(e,n){e.songIdx=n},setSongId:function(e,n){e.songId=n},setSong:function(e,n){e.song=n},setSongLyrics:function(e,n){e.songLyrics=n},setSongPicture:function(e,n){e.songPicture=n},setPlayStatus:function(e,n){e.playStatus=n},setPagePath:function(e,n){e.pagePath=n}},actions:{handleSetPath:function(e,n){var t=e.commit;u["a"].setCookieSync("pagePath",n),t("setPagePath",n)},handleSetSongArr:function(e,n){var t=e.commit;localStorage.setItem("songArr",c()(n)),t("setSongArr",c()(n))},handleSetSongIdx:function(e,n){var t=e.commit,o=e.state,a=JSON.parse(o.songArr).length-1,c=r()(n),s=c<0?0:c>a?a:r()(n);u["a"].setCookieSync("songIdx",s),t("setSongIdx",s),t("setSongId",JSON.parse(o.songArr)[r()(o.songIdx)].song_id),t("setSong",JSON.parse(o.songArr)[r()(o.songIdx)].song_origin),t("setSongLyrics",JSON.parse(o.songArr)[r()(o.songIdx)].lyrics),t("setSongPicture",JSON.parse(o.songArr)[r()(o.songIdx)].song_picture)},handleSetPlayStatus:function(e,n){var t=e.commit,o=e.state;"undefined"===typeof o.songIdx&&(u["a"].setCookieSync("songIdx",0),t("setSongIdx",0)),t("setSongId",JSON.parse(o.songArr)[r()(o.songIdx)].song_id),t("setSong",JSON.parse(o.songArr)[r()(o.songIdx)].song_origin),t("setSongLyrics",JSON.parse(o.songArr)[r()(o.songIdx)].lyrics),t("setSongPicture",JSON.parse(o.songArr)[r()(o.songIdx)].song_picture),t("setPlayStatus",n)}}}}});
//# sourceMappingURL=app.fa1e93c2.js.map