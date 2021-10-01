(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{599:function(e,t,r){"use strict";var n=r(0),c=(r(35),r(56),r(199),r(6),r(9),r(46),r(51),r(10),r(7),r(11),r(12),r(5)),o=r(100),l=r(116);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(c.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},662:function(e,t,r){"use strict";r.r(t);var n={props:{services:{type:Array,default:null}},data:function(){return{dialog:!1,search:"",sortDesc:!1,editedIndex:-1,valid:!0,headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Is Active",value:"isActive",sortable:!1},{text:"Price",value:"price"},{text:"Service type",value:"serviceTypeName"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",name:"",price:0,medicalServiceType:0,units:""},defaultItem:{id:"",name:"",price:0,medicalServiceType:0,units:""}}},methods:{handleClick:function(e){this.$router.push("roles/"+e.id)},editItem:function(e){this.editedIndex=this.services.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1,e.$emit("update")}))},save:function(){this.editedIndex>-1?(console.log(this.editedItem),this.$store.dispatch("update_medical_service",this.editedItem)):(delete this.editedItem.id,this.$store.dispatch("create_new_medical_service",this.editedItem)),this.close()}},computed:{formTitle:function(){return-1===this.editedIndex?"label.titles.newservice":"label.titles.editservice"},routename:function(){return this.$route.params.service}}},c=r(45),o=r(50),l=r.n(o),d=r(150),v=r(246),m=r(88),f=r(592),h=r(583),_=r(594),y=r(581),x=r(250),I=r(599),w=r(131),V=r(248),k=r(593),O=r(162),$=r(585),j=r(109),T=r(75),C=r(89),S=r(590),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto"},[e.services?r("v-data-table",{staticClass:"default",attrs:{dense:"",headers:e.headers,items:e.services,search:e.search,"sort-by":"isActive","sort-desc":e.sortDesc,"mobile-breakpoint":"100"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[r("v-toolbar-title",[e._v(e._s(e.$t("label.titles.servicetypesmanagement")))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("h3",[e._v(e._s(e.routename))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-spacer"),e._v(" "),r("v-select",{attrs:{items:e.servicetypes,"item-text":"name","item-value":"name",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Filter by service types",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_medical_service_types,change:e.filter_medical_services}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,c=t.attrs;return[e.isMdAndUp?r("v-btn",e._g(e._b({staticClass:"mb-2 button",attrs:{medium:""}},"v-btn",c,!1),n),[r("v-icon",{attrs:{small:""}},[e._v("mdi-plus")]),e._v("\n              "+e._s(e.$t("label.button.btnaddnewservice")))],1):r("v-btn",e._g(e._b({staticClass:"mb-2 button",attrs:{fab:"",small:"",dark:""}},"v-btn",c,!1),n),[r("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",{staticClass:"primary"},[r("span",[e._v(e._s(e.$t(e.formTitle)))])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Service name",required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Price",required:"",type:"number",min:"0"},model:{value:e.editedItem.price,callback:function(t){e.$set(e.editedItem,"price",t)},expression:"editedItem.price"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-select",{attrs:{items:e.servicetypes,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Service types",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_medical_service_types},model:{value:e.editedItem.medicalServiceType,callback:function(t){e.$set(e.editedItem,"medicalServiceType",t)},expression:"editedItem.medicalServiceType"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:e.measures,"item-text":"unit","item-value":"symbol",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Measure unit",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_measures},model:{value:e.editedItem.units,callback:function(t){e.$set(e.editedItem,"units",t)},expression:"editedItem.units"}})],1)],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:e.close}},[e._v("\n                "+e._s(e.$t("label.button.btncancel"))+"\n              ")]),e._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:e.save}},[e._v("\n                "+e._s(e.$t("label.button.btnsave"))+"\n              ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.isActive",fn:function(t){return[t.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,c=t.attrs;return[r("v-icon",e._g(e._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",c,!1),n),[e._v("mdi-check")])]}}],null,!0)},[e._v(" "),r("span",[e._v("Active")])]):r("div")]}},{key:"item.actions",fn:function(t){var n=t.item;return[r("td",{on:{click:function(e){e.stopPropagation()}}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("\n          mdi-pencil\n        ")])],1)]}},{key:"no-data",fn:function(){return[r("p",{staticClass:"mt-2"},[e._v("No Data available for "+e._s(e.routename))])]},proxy:!0}],null,!0)}):r("v-progress-circular",{attrs:{size:"52",color:"primary",indeterminate:""}})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:f.a,VContainer:h.a,VDataTable:_.a,VDialog:y.a,VDivider:x.a,VForm:I.a,VIcon:w.a,VProgressCircular:V.a,VRow:k.a,VSelect:O.a,VSpacer:$.a,VTextField:j.a,VToolbar:T.a,VToolbarTitle:C.b,VTooltip:S.a})}}]);