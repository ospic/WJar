(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{627:function(t,e,n){"use strict";var r=n(0),o=(n(37),n(58),n(209),n(7),n(5),n(8),n(51),n(54),n(10),n(9),n(13),n(14),n(6)),l=n(101),d=n(120);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},745:function(t,e,n){"use strict";n.r(e);n(29),n(84),n(51);var r={props:{appointments:{type:Array,default:null}},data:function(){return{search:null,title:"Adjust appointment",dialog:!1,valid:!0,menu:null,date:null,headers:[{text:"ID",value:"id",class:"primary"},{text:"Date",value:"appointmentDate",sortable:!0,class:"primary"},{text:"Status",value:"status",class:"primary"},{text:"Patient",value:"patientId",class:"primary"},{text:"Actions",value:"actions",class:"primary"}],editedIndex:-1,editedItem:{id:0,patientId:0,physicianId:0,date:"",time:"",timeZone:"Africa/Dar_es_Salaam"}}},methods:{editItem:function(t){this.editedIndex=this.appointments.indexOf(t),this.dialog=!0,this.editedItem.id=t.id,this.editedItem.physicianId=t.physicianId,this.editedItem.patientId=t.patientId,this.editedItem.date=t.appointmentDate.split(" ")[0],this.editedItem.time=t.appointmentDate.split(" ")[1],this.editedItemId=t.id},accept_appointment:function(t){var e=this;this.$store.dispatch("accept_appointment",t),setTimeout((function(){e.$emit("update")}),this.delay_seconds)},reject_appointment:function(t){var e=this;this.$store.dispatch("reject_appointment",t),setTimeout((function(){e.$emit("update")}),this.delay_seconds)},close:function(){var t=this;setTimeout((function(){t.$emit("update"),t.dialog=!1}),this.delay_seconds)},save:function(){console.log(this.editedItem),this.$store.dispatch("update_appointment",this.editedItem),this.close()}},computed:{formTitle:function(){return-1===this.editedIndex?"label.dialogs.newappointment":"label.dialogs.rescheduleappointment"}}},o=n(42),l=n(50),d=n.n(l),c=n(159),m=n(260),v=n(60),f=n(616),h=n(606),I=n(619),_=n(833),y=n(604),x=n(627),w=n(271),k=n(243),O=n(617),V=n(608),P=n(113),$=n(78),E=n(91),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default"},[null==t.appointments.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.appointments,search:t.search,width:"100%"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.$t(t.formTitle)))])])],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Patient ID",readonly:"",autocomplete:"false"},model:{value:t.editedItem.patientId,callback:function(e){t.$set(t.editedItem,"patientId",e)},expression:"editedItem.patientId"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Physician ID",readonly:""},model:{value:t.editedItem.physicianId,callback:function(e){t.$set(t.editedItem,"physicianId",e)},expression:"editedItem.physicianId"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Appointment date","prepend-icon":"mdi-calendar",readonly:"",rules:[function(t){return!!t||"Date is required"}],required:""},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",required:""},on:{input:function(e){t.menu=!1}},model:{value:t.editedItem.date,callback:function(e){t.$set(t.editedItem,"date",e)},expression:"editedItem.date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                              Cancel\n                            ")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("\n                              OK\n                            ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{type:"time",id:"appt",name:"appt",required:"",label:"Appointment time"},model:{value:t.editedItem.time,callback:function(e){t.$set(t.editedItem,"time",e)},expression:"editedItem.time"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",medium:""},on:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:function(e){return e.stopPropagation(),t.save.apply(null,arguments)}}},[t._v(t._s(t.$t("label.button.btnsave")))])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"WAITING"===r.status,expression:"item.status === 'WAITING'"}],staticClass:"button my-2",attrs:{small:""},on:{click:function(e){return t.accept_appointment(r.id)}}},[t._v("accept")]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"ACCEPTED"===r.status||"WAITING"===r.status||"PROGRESSING"===r.status,expression:"\n            item.status === 'ACCEPTED' ||\n            item.status === 'WAITING' ||\n            item.status === 'PROGRESSING'\n          "}],attrs:{small:"",color:"button warning"},on:{click:function(e){return e.stopPropagation(),t.editItem(r)}}},[t._v("re-schedule")]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"ACCEPTED"===r.status||"WAITING"===r.status||"PROGRESSING"===r.status,expression:"\n            item.status === 'ACCEPTED' ||\n            item.status === 'WAITING' ||\n            item.status === 'PROGRESSING'\n          "}],attrs:{small:"",color:"button error"},on:{click:function(e){return t.reject_appointment(r.id)}}},[t._v("decline")])]}},{key:"item.patientId",fn:function(e){var r=e.item;return[n("router-link",{attrs:{to:"/patients/"+r.patientId}},[t._v("\n          Patient No."+t._s(r.patientId))])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCol:f.a,VContainer:h.a,VDataTable:I.a,VDatePicker:_.a,VDialog:y.a,VForm:x.a,VMenu:w.a,VProgressCircular:k.a,VRow:O.a,VSpacer:V.a,VTextField:P.a,VToolbar:$.a,VToolbarTitle:E.b})}}]);