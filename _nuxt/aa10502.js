(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{537:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(127);var o=n(182);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},538:function(t,e,n){"use strict";var r=n(537),o=(n(10),n(22),n(28),n(67),n(69),n(68),n(181),n(17),n(11),{props:{slug:String,link:Object,title:String},computed:{parents:function(){var t=this;if(!this.slug)return[];var path="/"+this.slug,e=this.$store.getters.getLink,n=path.split("/").map((function(t,i,e){return e.slice(0,i).join("/")})).filter(Boolean);return n.map((function(path){var link=e(path);return link?t.title&&link.title===t.title?null:{path:path,title:link.title}:null})).filter(Boolean)},links:function(){var t=[{path:"/",title:"Home"}];return this.link?t.push(this.link):t=[].concat(Object(r.a)(t),Object(r.a)(this.parents)),t},prevLink:function(){return this.links[this.links.length-1]}},jsonld:function(){var t=this,e="https://fundbox.com",n=[];return this.link?n.push({"@type":"ListItem",position:1,item:{"@id":this.$addTrailingSlash(e+this.link.path),name:this.link.title}}):this.parents.forEach((function(r,i){n.push({"@type":"ListItem",position:i+1,item:{"@id":t.$addTrailingSlash(e+r.path),name:r.title}})})),n.length?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:n}:null}}),c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"text-lg truncate"},[r("ul",{staticClass:"hidden md:flex overflow-hidden"},[t._l(t.links,(function(link){return r("li",{key:link.title},[r("f-link",{staticClass:"font-semibold hover:opacity-75",attrs:{to:t.$addTrailingSlash(link.path)}},[t._v(t._s(link.title))]),t._v(" "),r("img",{staticClass:"h-2 w-2 mr-2 mb-px",attrs:{src:n(539),alt:"arrow"}})],1)})),t._v(" "),t.title?r("li",[r("div",{domProps:{textContent:t._s(t.title)}})]):t._e()],2),t._v(" "),t.prevLink?r("f-link",{staticClass:"md:hidden font-semibold",attrs:{to:t.$addTrailingSlash(t.prevLink.path)}},[r("img",{staticClass:"w-2 pr-px mr-1 mb-px",attrs:{src:n(540),alt:"arrow"}}),t._v(" "),r("span",[t._v("Back")])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},539:function(t,e,n){t.exports=n.p+"36d87d80abdedfa236e83a69674c1a28.svg"},540:function(t,e,n){t.exports=n.p+"96a3c2bff0595c7009929fccb702aa4a.svg"},543:function(t,e,n){"use strict";var r=n(4),o=(n(43),n(22),n(71)),c=n.n(o),l="https://boards-api.greenhouse.io/v1/boards/fundbox";e.a={getOffices:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(l,"/offices"));case 2:return e=t.sent,data=e.data,t.abrupt("return",data.offices.map((function(t){return{id:t.id,location:t.location}})));case 5:case"end":return t.stop()}}),t)})))()},getDepartments:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(l,"/departments"));case 2:return e=t.sent,data=e.data,t.abrupt("return",data.departments);case 5:case"end":return t.stop()}}),t)})))()},getJobs:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(l,"/jobs?content=true"));case 2:return e=t.sent,data=e.data,t.abrupt("return",data.jobs);case 5:case"end":return t.stop()}}),t)})))()},getJob:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,c.a.get("".concat(l,"/jobs/").concat(n));case 3:return r=e.sent,data=r.data,e.abrupt("return",data);case 6:case"end":return e.stop()}}),e)})))()}}},551:function(t,e,n){t.exports={}},605:function(t,e,n){"use strict";n(551)},671:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(43),n(28),n(47),n(103),n(29),n(67),n(64)),c=n(538),l={props:{cover:String,city:String,job:Object},components:{breadcrumbs:c.a,curlsBrush:o.a},computed:{content:function(){var input=this.job.content;return(new DOMParser).parseFromString(input,"text/html").documentElement.textContent},department:function(){var t;return null===(t=this.job.departments[0])||void 0===t?void 0:t.name},location:function(){return this.city.split(",")[0]},applicationForm:function(){return"/careers/apply/?job=".concat(this.job.id)}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.commit("SET_CTA",{link:t.applicationForm,label:"Apply"});case 1:case"end":return e.stop()}}),e)})))()}},m=(n(605),n(1)),f=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"job-page xl:container px-3 md:px-10 xl:px-24 pt-4 md:pt-10 pb-24 relative"},[n("curls-brush",{staticClass:"absolute bottom-0 right-0 -mr-48 mb-100 w-full max-w-xl xl:max-w-2xl hidden md:block",attrs:{color:"sand"}}),t._v(" "),n("breadcrumbs",{attrs:{title:t.job.title,link:{path:"/careers",title:"Careers"}}}),t._v(" "),n("h1",{staticClass:"my-4 md:mt-10 font-bold text-3xl md:text-4xl whitespace-pre-line",domProps:{textContent:t._s(t.job.title)}}),t._v(" "),n("h3",{staticClass:"font-normal text-xl"},[t._v("\n    "+t._s(t.location)+", "+t._s(t.department)+"\n  ")]),t._v(" "),n("section",{staticClass:"md:flex relative mt-8"},[n("figure",{staticClass:"max-w-full sm:max-w-2xl md:h-82 pt-1 pb-4 md:pb-0"},[n("f-image",{staticClass:"w-full md:w-auto h-full rounded-lg",attrs:{alt:t.city+" office",src:t.cover}})],1)]),t._v(" "),n("article",{staticClass:"article-content max-w-4xl pt-4 relative",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("f-link",{staticClass:"btn btn-md mt-4",attrs:{to:t.applicationForm,label:"Apply for this role"}})],1)}),[],!1,null,null,null).exports,d=n(543),h={components:{jobPage:f},head:function(){var meta=[],t=function(t,content){return{name:t,content:content,property:t,hid:t.replace(":","_")}},title=this.job&&this.job.title;meta.push(t("og:title",title)),meta.push(t("twitter:title",title)),this.image&&(meta.push(t("og:image",this.image)),meta.push(t("twitter:image",this.image)));var data=this.job&&this.job.metadata,e=data&&data.find((function(t){return"Social Media Summary"===t.name})),n=e&&e.value;return n&&(meta.push(t("description",n)),meta.push(t("og:description",n)),meta.push(t("twitter:description",n))),{title:title,meta:meta}},computed:{image:function(){var data=this.job&&this.job.metadata,t=data&&data.find((function(t){return"Social Media Image"===t.name}));return t&&t.value?"https://s3.us-east-1.amazonaws.com/email_static/social/".concat(t.value):"https://fundbox.com/img/social-cover.jpg"},name:function(){return this.job.location.name}},mounted:function(){this.$trackPage({path:this.$route.path,name:this.job&&this.job.title})},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=t.error,o=t.payload,e.prev=1,null==o||!o.job){e.next=6;break}e.t0=o.job,e.next=9;break;case 6:return e.next=8,d.a.getJob({id:n.job});case 8:e.t0=e.sent;case 9:return c=e.t0,e.abrupt("return",{job:c});case 13:throw e.prev=13,e.t1=e.catch(1),e.t1;case 17:console.error(e.t1),l=e.t1.response?e.t1.response.status:404,r({statusCode:l,message:"Not Found"});case 20:case"end":return e.stop()}}),e,null,[[1,13]])})))()}},v=Object(m.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("job-page",{attrs:{job:t.job,city:t.name,cover:t.image}})}),[],!1,null,null,null);e.default=v.exports}}]);