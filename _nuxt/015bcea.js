(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3],{265:function(t,e,r){"use strict";r.r(e);var n={props:{route:{type:String,default:"page-slug"},slug:{type:String,default:"slug"},title:{type:String,default:"Title"},description:{type:String,default:"Description"}}},l=r(25),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"w-full md:w-1/2 xl:w-1/3 mb-2 px-1"},[r("NuxtLink",{attrs:{to:{name:t.route,params:{slug:t.slug}}}},[r("div",{staticClass:"bg-gray-900 bg-opacity-50 hover:bg-opacity-70 rounded px-5 py-4"},[r("h1",{staticClass:"font-semibold text-white"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"text-gray-100 mt-3"},[t._v(t._s(t.description))])])])],1)}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,r){"use strict";r.r(e);var n={props:{route:{type:String,default:"page-slug"},posts:{type:Array,default:function(){return[]}}}},l=r(25),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"flex flex-wrap -mx-1"},t._l(t.posts,(function(e){return r("Card",{key:e.slug,attrs:{route:t.route,slug:e.slug,title:e.title,description:e.description}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(265).default})},281:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(32),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles").only(["slug","title","description"]).sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{posts:n});case 5:case"end":return e.stop()}}),e)})))()}}),o=r(25),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto px-5"},[r("h1",{staticClass:"text-4xl text-gray-100 uppercase font-black mt-5"},[t._v("Articles")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-200 mt-3"},[t._v("\n    My explorations into tech, software and engineering.\n  ")]),t._v(" "),r("div",{staticClass:"mt-5"},[r("CardGrid",{attrs:{posts:t.posts,route:"articles-slug"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardGrid:r(266).default})}}]);