(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{573:function(t,e,r){t.exports={}},656:function(t,e,r){t.exports=r.p+"img/arrow-lg.eff621e.png"},657:function(t,e,r){t.exports=r.p+"img/arrow-sm.58ac4a6.png"},658:function(t,e,r){var n=r(659),o=r(661),l=Object.prototype.hasOwnProperty,c=o((function(t,e,r){l.call(t,r)?t[r].push(e):n(t,r,[e])}));t.exports=c},659:function(t,e,r){var n=r(660);t.exports=function(object,t,e){"__proto__"==t&&n?n(object,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):object[t]=e}},660:function(t,e,r){var n=r(78),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},661:function(t,e,r){var n=r(662),o=r(663),l=r(337),c=r(63);t.exports=function(t,e){return function(r,d){var f=c(r)?n:o,m=e?e():{};return f(r,t,l(d,2),m)}}},662:function(t,e){t.exports=function(t,e,r,n){for(var o=-1,l=null==t?0:t.length;++o<l;){var c=t[o];e(n,c,r(c),t)}return n}},663:function(t,e,r){var n=r(664);t.exports=function(t,e,r,o){return n(t,(function(t,n,l){e(o,t,r(t),l)})),o}},664:function(t,e,r){var n=r(336),o=r(665)(n);t.exports=o},665:function(t,e,r){var n=r(193);t.exports=function(t,e){return function(r,o){if(null==r)return r;if(!n(r))return t(r,o);for(var l=r.length,c=e?l:-1,d=Object(r);(e?c--:++c<l)&&!1!==o(d[c],c,d););return r}}},666:function(t,e,r){"use strict";r(573)},676:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(43),r(10),r(22),r(181),r(37),r(46),r(28),r(183),r(658)),l=r.n(o),c=r(542),d=r(184),f=r(538),m=r(548),v=r.n(m),h=r(129),x=r(576),y=r(574),_={props:{blok:Object,slug:String,title:String},components:{spinner:d.a,breadcrumbs:f.a,arrowForward:v.a,resourcesGrid:h.a,resourcesSearch:x.a,subscriptionForm:y.a},data:function(){return{results:[],error:null,loading:!0,prevPage:null,mounted:!1}},computed:{query:function(){return this.$route.query.query},groups:function(){return this.results?l()(this.results.filter((function(t){return t.type})),"type"):[]},pageTitle:function(){return this.query?this.title:"Looking for \nresources?"}},methods:{search:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.error=null,t.loading=!0,e.prev=2,t.query){e.next=7;break}return t.results=[],t.loading=!1,e.abrupt("return",null);case 7:return e.next=9,c.a.queryIndex({query:t.query,limit:100});case 9:r=e.sent,n=r.hits,t.results=n.map((function(t){var e,r,n;return{alt:t.title,link:t.link,type:t.type,_tags:t._tags,image:t.image,date:t.date,objectID:t.objectID,isBw:"yes"!==(null===(e=t.meta)||void 0===e?void 0:e.bw_feature),color:null===(r=t.meta)||void 0===r?void 0:r.category_color,shmigle:null===(n=t.meta)||void 0===n?void 0:n.stripe_selected,title:t._highlightResult.title.value,excerpt:t._highlightResult.excerpt.value}})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),t.error="Something went wrong...",console.error(e.t0);case 18:t.loading=!1;case 19:case"end":return e.stop()}}),e,null,[[2,14]])})))()},goBack:function(){var t,e=location.host;(null===(t=this.prevPage)||void 0===t?void 0:t.includes(e))?window.history.back():this.$router.push("/resources/")}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.prevPage=document.referrer,t.mounted=!0;case 4:case"end":return e.stop()}}),e)})))()},watch:{query:{immediate:!0,handler:function(t){t&&this.search()}}}},w=(r(666),r(1)),k=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"search-page"},[n("client-only",[t.$screen.md?t._e():n("resources-search",{attrs:{value:t.query,dense:""}},[n("arrow-forward",{staticClass:"m-3 transform rotate-180 absolute left-0 top-0",attrs:{title:"Go back"},on:{click:t.goBack}})],1)],1),t._v(" "),n("div",{staticClass:"px-3 sm:px-8 lg:px-24 xl:container pt-10 pb-16 min-h-screen"},[n("breadcrumbs",{staticClass:"pb-4 xl:pb-8 px-1 hidden md:block",attrs:{title:t.title,slug:t.slug}}),t._v(" "),n("div",{staticClass:"hidden md:flex"},[n("h1",{staticClass:"text-6xl font-black whitespace-pre-line flex-1"},[t._v(t._s(t.pageTitle))]),t._v(" "),!t.mounted||t.$screen.md?n("resources-search",{staticClass:"mt-3",attrs:{value:t.query}}):t._e()],1),t._v(" "),n("client-only",[t.query?n("h2",{staticClass:"text-2xl font-bold text-gray-300 py-10 hidden md:block"},[t._v("\n        "+t._s(t.results.length)+" results for “"),n("em",[t._v(t._s(t.query))]),t._v("”\n      ")]):t._e(),t._v(" "),t.query&&t.results.length?n("h2",{staticClass:"text-base font-bold text-gray-300 md:hidden"},[t._v("\n        "+t._s(t.results.length)+" results\n      ")]):t._e(),t._v(" "),t.query?t._e():n("figure",{staticClass:"lg:-mt-16 -ml-10 hidden md:block"},[n("img",{staticClass:"max-w-lg lg:max-w-full",attrs:{src:r(656),alt:"decorative arrow"}})])]),t._v(" "),t.results.length?n("div",{staticClass:"space-y-10"},t._l(t.groups,(function(e,r){return n("resources-grid",{key:r,attrs:{posts:e,query:t.query,grouped:"",list:""}})})),1):t.query||!t.mounted?n("div",{staticClass:"text-center"},[t.loading?n("spinner",{staticClass:"my-12",attrs:{gray:""}}):n("figure",{staticClass:"text-xl md:text-2xl pb-10 max-w-full overflow-hidden"},[n("img",{staticClass:"ml-32 md:-ml-32 -mb-4",attrs:{src:r(657),alt:"decorative arrow"}}),t._v(" "),n("br"),t._v("Sorry, there are no results"),n("br"),t._v(" for this query\n      ")])],1):t._e()],1),t._v(" "),n("subscription-form")],1)}),[],!1,null,null,null).exports;e.default=k}}]);