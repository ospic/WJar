(window.webpackJsonp=window.webpackJsonp||[]).push([[108,23,49],{627:function(t,e,n){"use strict";var r=n(0),o=(n(37),n(58),n(209),n(7),n(5),n(8),n(51),n(54),n(10),n(9),n(13),n(14),n(6)),l=n(101),c=n(120);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},629:function(t,e,n){"use strict";n.r(e);var r={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id",class:"primary"},{text:"Patient Name",value:"patientName",class:"primary",sortable:!1},{text:"Consultant",value:"staffName",class:"primary"},{text:"Is Active?",value:"isActive",class:"primary"},{text:"From",value:"fromDate",class:"primary"},{text:"To",value:"toDate",class:"primary"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},o=n(42),l=n(50),c=n.n(l),d=n(260),f=n(619),m=n(137),v=n(243),h=n(608),_=n(113),y=n(78),I=n(615),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default"},[null==t.services.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",o,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VDataTable:f.a,VIcon:m.a,VProgressCircular:v.a,VSpacer:h.a,VTextField:_.a,VToolbar:y.a,VTooltip:I.a})},745:function(t,e,n){"use strict";n.r(e);n(29),n(84),n(51);var r={props:{appointments:{type:Array,default:null}},data:function(){return{search:null,title:"Adjust appointment",dialog:!1,valid:!0,menu:null,date:null,headers:[{text:"ID",value:"id",class:"primary"},{text:"Date",value:"appointmentDate",sortable:!0,class:"primary"},{text:"Status",value:"status",class:"primary"},{text:"Patient",value:"patientId",class:"primary"},{text:"Actions",value:"actions",class:"primary"}],editedIndex:-1,editedItem:{id:0,patientId:0,physicianId:0,date:"",time:"",timeZone:"Africa/Dar_es_Salaam"}}},methods:{editItem:function(t){this.editedIndex=this.appointments.indexOf(t),this.dialog=!0,this.editedItem.id=t.id,this.editedItem.physicianId=t.physicianId,this.editedItem.patientId=t.patientId,this.editedItem.date=t.appointmentDate.split(" ")[0],this.editedItem.time=t.appointmentDate.split(" ")[1],this.editedItemId=t.id},accept_appointment:function(t){var e=this;this.$store.dispatch("accept_appointment",t),setTimeout((function(){e.$emit("update")}),this.delay_seconds)},reject_appointment:function(t){var e=this;this.$store.dispatch("reject_appointment",t),setTimeout((function(){e.$emit("update")}),this.delay_seconds)},close:function(){var t=this;setTimeout((function(){t.$emit("update"),t.dialog=!1}),this.delay_seconds)},save:function(){console.log(this.editedItem),this.$store.dispatch("update_appointment",this.editedItem),this.close()}},computed:{formTitle:function(){return-1===this.editedIndex?"label.dialogs.newappointment":"label.dialogs.rescheduleappointment"}}},o=n(42),l=n(50),c=n.n(l),d=n(159),f=n(260),m=n(60),v=n(616),h=n(606),_=n(619),y=n(833),I=n(604),x=n(627),w=n(271),k=n(243),O=n(617),C=n(608),V=n(113),$=n(78),P=n(91),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default"},[null==t.appointments.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.appointments,search:t.search,width:"100%"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.$t(t.formTitle)))])])],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Patient ID",readonly:"",autocomplete:"false"},model:{value:t.editedItem.patientId,callback:function(e){t.$set(t.editedItem,"patientId",e)},expression:"editedItem.patientId"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Physician ID",readonly:""},model:{value:t.editedItem.physicianId,callback:function(e){t.$set(t.editedItem,"physicianId",e)},expression:"editedItem.physicianId"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Appointment date","prepend-icon":"mdi-calendar",readonly:"",rules:[function(t){return!!t||"Date is required"}],required:""},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",required:""},on:{input:function(e){t.menu=!1}},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                              Cancel\n                            ")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n                              OK\n                            ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{type:"time",id:"appt",name:"appt",required:"",label:"Appointment time"},model:{value:t.editedItem.time,callback:function(e){t.$set(t.editedItem,"time",e)},expression:"editedItem.time"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",medium:""},on:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:function(e){return e.stopPropagation(),t.save.apply(null,arguments)}}},[t._v(t._s(t.$t("label.button.btnsave")))])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"WAITING"===r.status,expression:"item.status === 'WAITING'"}],staticClass:"button my-2",attrs:{small:""},on:{click:function(e){return t.accept_appointment(r.id)}}},[t._v("accept")]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"ACCEPTED"===r.status||"WAITING"===r.status||"PROGRESSING"===r.status,expression:"\n            item.status === 'ACCEPTED' ||\n            item.status === 'WAITING' ||\n            item.status === 'PROGRESSING'\n          "}],attrs:{small:"",color:"button warning"},on:{click:function(e){return e.stopPropagation(),t.editItem(r)}}},[t._v("re-schedule")]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"ACCEPTED"===r.status||"WAITING"===r.status||"PROGRESSING"===r.status,expression:"\n            item.status === 'ACCEPTED' ||\n            item.status === 'WAITING' ||\n            item.status === 'PROGRESSING'\n          "}],attrs:{small:"",color:"button error"},on:{click:function(e){return t.reject_appointment(r.id)}}},[t._v("decline")])]}},{key:"item.patientId",fn:function(e){var r=e.item;return[n("router-link",{attrs:{to:"/patients/"+r.patientId}},[t._v("\n          Patient No."+t._s(r.patientId))])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCol:v.a,VContainer:h.a,VDataTable:_.a,VDatePicker:y.a,VDialog:I.a,VForm:x.a,VMenu:w.a,VProgressCircular:k.a,VRow:O.a,VSpacer:C.a,VTextField:V.a,VToolbar:$.a,VToolbarTitle:P.b})},883:function(t,e,n){"use strict";n.r(e);n(10),n(9),n(7),n(5),n(13),n(8),n(14);var r=n(0),o=n(2),l=(n(34),n(43),n(20),n(629)),c=n(745),d=n(83);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{"service-card":l.default,"appointment-component":c.default},data:function(){return{staffdata:null,staffpatients:[],services:[],allservices:null,tab:null,profile_size:3,data_size:9,show_profile:!0}},methods:{getStaffById:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/")).then((function(e){t.staffdata=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getStaffPatinets:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/patients")).then((function(e){t.staffpatients=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAcitveAssignedServices:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?active=true")).then((function(e){null!==e&&(t.services=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getHistoricalAssignedServices:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?")).then((function(e){null!==e&&(t.allservices=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},_close_open:function(){this.data_size=12,this.profile_size=0,this.show_profile=!1},getAppointments:function(){this.$store.dispatch("get_physician_appointments",this.$route.params.id)},handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}},created:function(){this.getStaffById(),this.getAcitveAssignedServices()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({desserts:{get:function(){return[{name:"Name",value:null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName},{name:"Role",value:"undefined"==this.staffdata.user?"No role":this.staffdata.user.roles[0].name.toLowerCase()},{name:"Depatment",value:null==this.staffdata.department?"Un-Assigned":this.staffdata.department.name},{name:"Work Shift",value:"6:00AM - 12:01PM"},{name:"Location",value:null==this.staffdata.department?"Not available":this.staffdata.department.extraId},{name:"Is Staff",value:"undefined"==this.staffdata.user.isStaff?"":this.staffdata.user.isStaff},{name:"Level",value:null==this.staffdata.level?"None":this.staffdata.level},{name:"Phone",value:null==this.staffdata.contacts?"None ":this.staffdata.contacts},{name:"Email",value:this.staffdata.email},{name:"Joining Date",value:(new Date).toISOString().slice(0,10)}]}},staffThumbnail:function(){return this.filebaseUri+this.staffdata.imageUrl}},Object(d.b)({appointments:"appointments"}))},v=m,h=n(42),_=n(50),y=n.n(_),I=n(263),x=n(260),w=n(60),k=n(616),O=n(606),C=n(137),V=n(207),$=n(243),P=n(617),j=n(348),A=n(829),T=n(900),S=n(896),D=n(825),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.staffdata?n("div",{staticClass:"breadcrumb "},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),n("router-link",{attrs:{to:"/staffs"}},[t._v(t._s(t.$t("label.breadcrumb.staffs")))]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/staffs/"+this.$route.params.id}},[t._v(t._s(null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName))])],1):t._e(),t._v(" "),n("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n("v-row",[t.show_profile?n("v-col",{attrs:{cols:"12",md:t.profile_size}},[null==t.staffdata?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("v-card",{attrs:{flat:"",tile:"",outlined:""}},[n("v-card-title",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-avatar",{attrs:{size:"82"}},[n("v-img",{attrs:{alt:"user",src:t.staffThumbnail,"lazy-src":t.thumbnil}})],1)],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-icon",{staticClass:"red--text lighten-4 mx-1"},[t._v("mdi-account-lock")]),t._v(" "),n("v-icon",{staticClass:"blue--text lighten-4 mx-1"},[t._v("mdi-camera")]),t._v(" "),n("v-icon",{staticClass:"orange--text mx-1",on:{click:t._close_open}},[t._v("mdi-eye")])],1),t._v(" "),n("v-card-text",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[t._l(t.desserts,(function(e){return n("tr",{key:e.name},[n("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.value))])])})),t._v(" "),n("tr")],2)]},proxy:!0}],null,!1,822417034)})],1)],1)],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",md:t.data_size}},[n("v-tabs",{staticClass:"elevation-2",attrs:{"slider-color":"secondary","background-color":"primary","show-arrows":this.$vuetify.breakpoint.mobile,color:"secondary",left:"",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-account")]),t._v("Payroll")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:function(e){return e.stopPropagation(),t.getAppointments()}}},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-calendar")]),t._v(t._s(t.$t("label.tab.appointments")))],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-history")]),t._v(" Attandence")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Document")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Timeline")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:t.getHistoricalAssignedServices}},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("Consultations History")],1)])],1),t._v(" "),n("v-tabs-items",{attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("service-card",{attrs:{services:t.services}})],1),t._v(" "),n("v-tab-item",[n("appointment-component",{attrs:{appointments:t.appointments},on:{update:function(e){return t.getAppointments()}}})],1),t._v(" "),n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Attendance")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Document")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Timeline")])]),t._v(" "),n("v-tab-item",[null==t.allservices?n("v-progress-circular"):n("service-card",{attrs:{services:t.allservices}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VAvatar:I.a,VCard:x.a,VCardText:w.c,VCardTitle:w.d,VCol:k.a,VContainer:O.a,VIcon:C.a,VImg:V.a,VProgressCircular:$.a,VRow:P.a,VSimpleTable:j.a,VTab:A.a,VTabItem:T.a,VTabs:S.a,VTabsItems:D.a})}}]);