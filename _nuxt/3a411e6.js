(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{267:function(t,e,o){"use strict";o.r(e);var n={props:{post:{type:Object,default:function(){return{}}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},r=o(25),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mx-auto px-5"},[o("h1",{staticClass:"text-4xl text-gray-100 font-black mt-5"},[t._v("\n    "+t._s(t.post.title)+"\n  ")]),t._v(" "),o("p",{staticClass:"text-gray-200 mt-3"},[t._v("\n    "+t._s(t.formatDate(t.post.publishedAt))+" · "+t._s(t.post.series)+"\n  ")]),t._v(" "),o("p",{staticClass:"text-lg text-gray-200 mt-3"},[t._v("\n    "+t._s(t.post.description)+"\n  ")]),t._v(" "),o("div",{staticClass:"bg-gray-100 prose prose-sm md:prose-lg rounded mt-8 mx-auto overflow-hidden"},[o("img",{staticClass:"w-full object-cover border-b",staticStyle:{"max-height":"320px"},attrs:{src:t.post.cover_image,width:"1200",height:"675",alt:t.post.title}}),t._v(" "),o("NuxtContent",{staticClass:"px-8 pb-5",attrs:{document:t.post}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);