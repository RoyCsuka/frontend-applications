(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d81":function(e,t,n){},"17a5":function(e,t,n){e.exports=n.p+"img/tropen-logo.c39cd4a5.png"},"275e":function(e,t,n){"use strict";var r=n("e5f9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:"assets/logo.png",alt:""}}),n("TheData",{ref:"sidebar"})],1)},s=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"descriptionOfPage",class:{red:e.turnRed}},[e._m(0),r("p",[e._v("\n            Op deze site vind je een verzameling van\n            alle maskers die de onderstaande museums\n            bezitten. Dit is een inspiratiebron voor\n            de mensen die in maskers geïnteresseerd zijn.\n        ")]),r("img",{attrs:{src:n("6897"),alt:""}}),r("img",{attrs:{src:n("e3dd"),alt:""}}),r("img",{attrs:{src:n("17a5"),alt:""}}),r("img",{attrs:{src:n("889b"),alt:""}}),r("button",{on:{click:function(t){return e.toggle("Red")}}},[e._v("bekijk de collage")])]),e._m(1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("b",[e._v("Maskers")]),e._v(" van toen")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",[e._v("Sorteer op landen:")])])])}],c={name:"sideBar",props:{msg:String},data:function(){return{turnRed:!1}},methods:{toggle:function(e){this["turn".concat(e)]=!this["turn".concat(e)]}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},l=c,u=(n("275e"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("sideBar"),n("div",{staticClass:"content"},[n("button",{class:{abc:e.sort},on:{click:function(t){return e.sortAndToggle()}}},[e._v("abc")]),e._l(e.results,(function(t){return n("article",{key:t.id},[n("div",{style:{"background-image":"url("+t.img.value+")"}}),n("footer",[n("h3",[e._v("\n                    "+e._s(t.title.value)+"\n                ")]),n("p",[n("span",[e._v(e._s(t.placeName.value))])]),n("p",[e._v("\n                    "+e._s(t.desc.value)+"\n                ")])])])}))],2)],1)},m=[],v=(n("55dd"),n("a481"),n("ac6a"),{components:{sideBar:p},data:function(){return{title:"Maskers van Toen",results:[],sort:!1}},mounted:function(){var e="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-14/sparql",t='\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX dc: <http://purl.org/dc/elements/1.1/>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX edm: <http://www.europeana.eu/schemas/edm/>\n        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n        SELECT ?img ?title ?placeName ?place ?obj ?objLabel ?desc WHERE {\n            ?cho dc:title ?title .\n\n            OPTIONAL { ?cho dc:description ?desc } .\n            FILTER (CONTAINS (?title, "maskers") OR\n                    CONTAINS (?title, "masker") OR\n                    CONTAINS (?title, "mask")\n            )\n            FILTER langMatches(lang(?title), "ned") # alleen Nederlandstalige cho\'s\n            ?cho edm:isShownBy ?img .\n\n            ?cho dct:spatial ?place .\n            ?place skos:broader ?stad .\n            ?stad skos:broader ?regio .\n            ?regio skos:broader ?provincie .\n            ?provincie skos:broader ?land .\n            ?land skos:prefLabel ?placeName .\n\n            ?cho dc:description ?desc .\n\n            ?cho dc:subject ?obj .\n            ?obj skos:prefLabel ?objLabel .\n        }\n        LIMIT 50\n    ';this.runQuery(e,t)},methods:{runQuery:function(e,t){var n=this;fetch(e),this.busy=!0,fetch(e+"?query="+encodeURIComponent(t)+"&format=json").then((function(e){return e.json()})).then((function(e){n.results=e.results.bindings;var t=n.results;t.forEach((function(e){e.img.value=e.img.value.replace("http","https")}))}))},sortAndToggle:function(){this.sort=!this.sort;var e=this.results;!0===this.sort?e.sort((function(e,t){return e.placeName.value<t.placeName.value?1:-1})):!1===this.sort&&e.sort((function(e,t){return e.placeName.value>t.placeName.value?1:-1}))}}}),h=v,g=(n("58f3"),Object(u["a"])(h,f,m,!1,null,"0c7d833e",null)),b=g.exports,w={name:"app",components:{sideBar:p,TheData:b},mounted:function(){window.addEventListener("scroll",this.onScroll)},methods:{debug:function(e){console.log(hightOfWindow)},onScroll:function(){document.documentElement.scrollTop>=340?this.$refs.sidebar.$el.classList.add("moveToSide"):document.documentElement.scrollTop<340&&this.$refs.sidebar.$el.classList.remove("moveToSide")}}},_=w,k=Object(u["a"])(_,o,s,!1,null,null,null),y=k.exports;n("944d");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"58f3":function(e,t,n){"use strict";var r=n("0d81"),o=n.n(r);o.a},6897:function(e,t,n){e.exports=n.p+"img/afrika-logo.dc22a57d.png"},"889b":function(e,t,n){e.exports=n.p+"img/volkenkunde-logo.78ec6595.png"},"944d":function(e,t,n){},e3dd:function(e,t,n){e.exports=n.p+"img/wereld-logo.23705948.png"},e5f9:function(e,t,n){}});
//# sourceMappingURL=app.f1f52478.js.map