(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r),c=n(3),l=n.n(c),v={asyncData:function(t){var e=t.params,n=t.error,r=t.$content,c=t.app;return o()(l.a.mark((function t(){var o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r("".concat(c.i18n.locale),{deep:!0}).where({tags:{$contains:e.slug}}).fetch();case 3:return o=t.sent,t.abrupt("return",{posts:o});case 7:t.prev=7,t.t0=t.catch(0),n({statusCode:404,message:"Page could not be found"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},head:function(){return{title:"Tags",meta:[{hid:"description",name:"description",content:"Cool nuxt blog tags"}],link:[{rel:"canonical",href:"https://nuxt-blog.com/tags"}]}},methods:{handletagclick:function(t){}},created:function(){console.log()},computed:{}},d=n(13),h=n(15),_=n.n(h),m=n(334),f=n(329),w=n(333),C=n(336),k=n(24),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"2"}}),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-sheet",{staticClass:"pa-5",attrs:{"min-height":"120vh"}},[n("h1",{staticClass:"ma-2"},[t._v("Searches for Tag: "+t._s(t.$route.params.slug))]),t._v(" "),n("v-divider"),t._v(" "),t._l(t.posts,(function(e,r){return n("div",{key:e.dir},[n("h1",{staticClass:"h1 post-h1"},[n("nuxt-link",{attrs:{to:"/"+e.slug}},[t._v(" "+t._s(r)+". "+t._s(e.title))])],1),t._v(" "),e.description?n("p",{staticClass:"excerpt"},[t._v("\n            "+t._s(e.description)+"\n          ")]):t._e(),t._v(" "),n("div",{staticClass:"post-details"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[t._v("Last updated: "+t._s(t.formatDate(e.updatedAt)))]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-tags",{attrs:{tags:e.tags}})],1)],1)],1),t._v(" "),n("v-divider")],1)}))],2)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"2"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VTags:n(73).default}),_()(component,{VCol:m.a,VContainer:f.a,VDivider:w.a,VRow:C.a,VSheet:k.a})}}]);