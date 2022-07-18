(window.webpackJsonp=window.webpackJsonp||[]).push([[109,48],{672:function(t,e,r){"use strict";r.r(e);var l=r(164),n=r(265),c=r(63),o=r(650),m=r(140),f=r(212),d=r(165),v=r(271),_=r(18),h=r(649),y={props:{staff:{type:Object,default:null}}},k=r(43),component=Object(k.a)(y,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"ma-1 pa-0",attrs:{flat:"",elevation:"1",color:"grey lighten-4"}},[e(d.a,{attrs:{ripple:"staff.id",to:"/staffs/".concat(t.staff.id)}},[e(_.a,[e(_.c,{staticClass:"font-weight-black",domProps:{innerHTML:t._s(null==t.staff.fullName?t.staff.username:t.staff.fullName)}}),t._v(" "),e(_.b,{staticClass:"light-blue--text font-italic",domProps:{innerHTML:t._s(t.staff.email)}})],1),t._v(" "),e(v.a,{attrs:{size:"60"}},[e(f.a,{attrs:{src:null==t.staff.imageUrl?t.thumbnail:t.staff.imageUrl}})],1)],1),t._v(" "),e(c.c,{staticClass:"ma-0 pa-0"},[e(h.a,{staticClass:"ma-0 pa-0",attrs:{"no-gutters":""}},[e(o.a,{staticClass:"mt-0 pa-0",attrs:{cols:"12",sm:"12",md:"7",align:"center"}},[e(l.a,{attrs:{small:"",fab:"",text:""}},[e(m.a,{attrs:{color:"blue",small:""}},[t._v("mdi-facebook")])],1),t._v(" "),e(l.a,{attrs:{small:"",fab:"",text:""}},[e(m.a,{attrs:{color:"purple darken-4",small:""}},[t._v("mdi-instagram")])],1),t._v(" "),e(l.a,{attrs:{small:"",fab:"",text:""}},[e(m.a,{attrs:{color:"blue",small:""}},[t._v("mdi-twitter")])],1)],1),t._v(" "),e(o.a,{staticClass:"mt-2",attrs:{cols:"12",sm:"12",align:"center",md:"5"}},[e(m.a,{staticClass:"ml-4",attrs:{color:"blue","x-small":""}},[t._v("mdi-check-circle")]),t._v(" "),e(m.a,{attrs:{color:"green","x-small":""}},[t._v("mdi-close-circle-outline")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},691:function(t,e,r){r(10)({target:"Math",stat:!0},{sign:r(371)})},895:function(t,e,r){"use strict";r.r(e);var l=r(272),n=r(265),c=r(63),o=r(274),m=r(650),f=r(652),d=r(140),v=r(266),_=r(649),h=r(639),y=r(863),k=r(934),x=r(930),O=r(111),C=r(80),w=r(643),j=(r(27),r(215),r(35),r(11),r(8),r(7),r(5),r(13),r(9),r(14),r(0)),S=r(2),A=(r(20),r(672)),D=r(69);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var $={components:{StaffCard:A.default},data:function(){return{search:"",updating:!1,headers:[{text:"Image",value:"image",class:"primary"},{text:"User/name",value:"fullName",class:"primary",sortable:!1},{text:"Department",value:"department",class:"primary"},{text:"Email",value:"email",class:"primary"},{text:"Phone",value:"contacts",class:"primary"},{text:"Role",value:"role",class:"primary"},{text:"Active ?",value:"isActive",class:"primary",sortable:!0},{text:"Available ?",value:"isAvailable",class:"primary",sortable:!0}],items:[{title:"Edit",icon:"lead-pencil",color:"blue"},{title:"Delete",icon:"delete",color:"red"}],departmentsstaffs:[],title:null}},methods:{fetchDepartmentStaffs:function(t,title){var e=this;return Object(S.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.title=title,e.updating=!0,r.next=4,e.$api.$get("staffs/dep/".concat(t)).then((function(t){null!=t&&(e.departmentsstaffs=t,e.updating=!1)})).catch((function(t){e.updating=!1,console.log(t)}));case 4:case"end":return r.stop()}}),r)})))()},handleClick:function(t){this.$router.push("staffs/"+t.id)}},created:function(){this.fetchDepartmentStaffs(1)},beforeCreate:function(){this.$store.dispatch("retrieve_departments")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(j.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(D.b)({staffs:"staffs",departments:"departments"}))},N=$,U=r(43),component=Object(U.a)(N,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"breadcrumb"},[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),e("router-link",{staticClass:"active",attrs:{to:"/staffs"}},[t._v(t._s(t.$t("label.breadcrumb.staffs")))])],1),t._v(" "),e(n.a,[e(C.a,{staticClass:"primary",attrs:{flat:"",dark:""}},[e(_.a,{attrs:{"no-gutters":""}},[e(m.a,{attrs:{cols:"12",sm:"12",md:"3"}},[e(c.d,[null!=t.title?e("h5",[e(d.a,{attrs:{color:"blue",left:""}},[t._v("mdi-circle")]),t._v(" "+t._s(t.title)+"\n              Department Staff's\n            ")],1):e("h5",[t._v(t._s(t.$t("label.titles.staffs")))])])],1),t._v(" "),e(h.a),t._v(" "),e(m.a,{attrs:{cols:"12",sm:"12",md:"3"}},[e(O.a,{staticClass:"mt-3",attrs:{"append-icon":"search",label:"Enter search text ...",rounded:"",dense:"",outlined:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),e(c.c,{staticClass:"pa-0"},[e(x.a,{attrs:{"background-color":"primary","slider-color":"blue",dark:"","show-arrows":"true"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.departments,(function(r){return e(y.a,{key:r.id,staticClass:"ml-0 pl-0",staticStyle:{"text-align":"left"},attrs:{left:"","reverse-trasition":"true"},on:{click:function(e){return t.fetchDepartmentStaffs(r.id,r.name)}}},[e(d.a,{attrs:{left:"",color:"blue"}},[t._v(" mdi-circle-medium ")]),t._v("\n          "+t._s(r.name)+"\n        ")],1)})),t._v(" "),t._l(t.departments,(function(r){return e(k.a,{key:r.id},[e("div",[null==t.title||t.isMdAndUp?t._e():e("h5",{staticClass:"primary--text"},[t._v("\n              "+t._s(t.title)+" Department Staff's\n            ")]),t._v(" "),t.updating?e(v.a,{staticClass:"mb-1",attrs:{indeterminate:"",color:"cyan"}}):e(f.a,{attrs:{dense:"",headers:t.headers,items:t.departmentsstaffs,search:t.search,width:"100%"},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"item.image",fn:function(r){var n=r.item;return[e(l.a,[e("img",{attrs:{src:null===n.imageUrl?t.thumbnail:n.imageUrl,alt:"Staff profile image"}})])]}},{key:"item.fullName",fn:function(e){var r=e.item;return[t._v("\n                "+t._s(null==r.fullName?r.user.username:r.fullName)+"\n              ")]}},{key:"item.department",fn:function(e){var r=e.item;return[t._v("\n                "+t._s(r.department.name)+"\n              ")]}},{key:"item.email",fn:function(e){var r=e.item;return[t._v("\n                "+t._s(null===r.email?r.user.email:r.email)+"\n              ")]}},{key:"item.isActive",fn:function(r){return[r.item.isActive?e(w.a,{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,n=r.attrs;return[e(d.a,t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",n,!1),l),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),e("span",[t._v("Active")])]):e("div")]}},{key:"item.isAvailable",fn:function(r){return[r.item.isAvailable?e(w.a,{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,n=r.attrs;return[e(d.a,t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",n,!1),l),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),e("span",[t._v("Available")])]):e("div")]}},{key:"item.role",fn:function(r){var l=r.item;return t._l(l.user.roles,(function(r){return e(o.a,{key:r.id,staticClass:"primary",attrs:{small:"",dense:""}},[t._v("\n                  "+t._s(r.name.toLowerCase())+"\n                ")])}))}}],null,!0)})],1)])}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);