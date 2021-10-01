(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{599:function(t,e,n){"use strict";var r=n(0),o=(n(35),n(56),n(199),n(6),n(9),n(46),n(51),n(10),n(7),n(11),n(12),n(5)),l=n(100),c=n(116);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},693:function(t,e,n){var content=n(769);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("9571259e",content,!0,{sourceMap:!1})},768:function(t,e,n){"use strict";n(693)},769:function(t,e,n){var r=n(14)(!1);r.push([t.i,":v-deep tbody tr[data-v-c09fded4]{cursor:pointer}:v-deep tbody tr td.none-clickable[data-v-c09fded4]{cursor:auto}",""]),t.exports=r},818:function(t,e,n){"use strict";n.r(e);n(10),n(7),n(6),n(11),n(9),n(12);var r=n(0),o=(n(46),n(80));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{search:null,title:"Insurances companies",valid:!1,headers:[{text:"ID",value:"id"},{text:"Insurance",value:"name",sortable:!1},{text:"P.O Box",value:"poBox"},{text:"Location",value:"location"},{text:"Email",value:"emailAddress"},{text:"Actions",value:"actions"}],items:[{title:"Edit",icon:"lead-pencil",color:"blue"},{title:"Delete",icon:"delete",color:"red"}],editedIndex:-1,editedItemId:"",dialog:!1,deletedialog:!1,itemtodelete:null,editedItem:{id:0,name:"",poBox:"",location:"",telephoneNo:"",emailAddress:""},defaultItem:{id:0,name:"",poBox:"",location:"",telephoneNo:"",emailAddress:""}}},methods:{fetchdata:function(){this.$store.dispatch("get_insurance_companies")},getSelected:function(t,e){"Edit"==t.title&&this.editItem(e),"Delete"==t.title&&(this.deletedialog=!0,this.itemtodelete=e),"View"==t.title&&this.navigateTo(e.id)},editItem:function(t){this.editedIndex=this.insurances.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},deleteItem:function(){var t=this;this.$store.dispatch("delete_insurance",this.itemtodelete.id),setTimeout((function(){t.$store.dispatch("get_insurance_companies"),t.deletedialog=!1}),this.delay_seconds)},navigateTo:function(t){this.$router.push("/insurances/".concat(t))},close:function(){this.dialog=!1},save:function(){this.editedIndex>-1?this.$store.dispatch("update_insurance",this.editedItem):(delete this.editedItem.id,this.$store.dispatch("create_insurance",this.editedItem)),this.close()},handleClick:function(t){this.navigateTo(t.id)}},watch:{dialog:function(t){var e=this;t||this.close(),setTimeout((function(){return e.$store.dispatch("get_insurance_companies")}),this.delay_seconds)}},created:function(){this.$store.dispatch("get_insurance_companies")},computed:c(c({},Object(o.b)({insurances:"insurances"})),{},{formTitle:function(){return-1===this.editedIndex?"New insurance":"Edit insurance"}})},v=(n(768),n(45)),m=n(50),f=n.n(m),h=n(150),_=n(246),x=n(88),y=n(592),O=n(583),w=n(594),I=n(581),k=n(599),j=n(131),V=n(248),$=n(593),P=n(585),B=n(109),C=n(75),E=n(89),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/insurances"}},[t._v(t._s(t.$t("label.breadcrumb.insurances")))])],1),t._v(" "),n("v-card",{staticClass:"mx-auto default "},[null==t.insurances.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,2:"",items:t.insurances,search:t.search,width:"100%"},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("h2",[n("strong",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"mt-2",attrs:{"append-icon":"search",label:"Enter search text ...",rounded:"",outlined:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v("  \n            "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[t.isMdAndUp?n("v-btn",t._g(t._b({staticClass:"mb-2 button",attrs:{elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(t._s(t.$t("label.button.newinsurance")))],1):n("v-btn",t._g(t._b({staticClass:"mx-2 button",attrs:{fab:"",dark:"",small:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[t._v("\n                    mdi-plus\n                  ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])])],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Insurance company name",autocomplete:"false",placeholder:"e.g. National Health Insurance fund - NHIF"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{placeholder:"e.g 11736",label:"P.o Box"},model:{value:t.editedItem.poBox,callback:function(e){t.$set(t.editedItem,"poBox",e)},expression:"editedItem.poBox"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{placeholder:"e.g. West Eisenhower Road Alexandria, NM 24673",label:"Office location"},model:{value:t.editedItem.location,callback:function(e){t.$set(t.editedItem,"location",e)},expression:"editedItem.location"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{placeholder:"e.g +255 716 xxx xxx",label:"Organization phone number"},model:{value:t.editedItem.telephoneNo,callback:function(e){t.$set(t.editedItem,"telephoneNo",e)},expression:"editedItem.telephoneNo"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Email address",placeholder:"e.g example@ospicx.com"},model:{value:t.editedItem.emailAddress,callback:function(e){t.$set(t.editedItem,"emailAddress",e)},expression:"editedItem.emailAddress"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",medium:""},on:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:function(e){return e.stopPropagation(),t.save.apply(null,arguments)}}},[t._v(t._s(t.$t("label.button.btnsave")))])],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"590"},model:{value:t.deletedialog,callback:function(e){t.deletedialog=e},expression:"deletedialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("\n                  Are you sure you want to delete this insurance?\n                ")]),t._v(" "),n("v-card-text",[t._v("Note: This process can not be undone. Click 'Yes' to delete\n                  or 'No' to ignore\n                ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",medium:""},on:{click:function(e){t.deletedialog=!1}}},[t._v("\n                    No\n                  ")]),t._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:t.deleteItem}},[t._v("\n                    Yes\n                  ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("td",{staticClass:"none-clickable",on:{click:function(t){t.stopPropagation()}}},t._l(t.items,(function(e,i){return n("v-icon",{key:i,staticClass:"mr-2",attrs:{"x-small":"",color:e.color},on:{click:function(n){return t.getSelected(e,r)}}},[t._v("\n              mdi-"+t._s(e.icon)+"\n            ")])})),1)]}},{key:"no-data",fn:function(){return[n("p",{staticClass:"mt-2"},[t._v("No Data available for "+t._s(t.routename))])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,"c09fded4",null);e.default=component.exports;f()(component,{VBtn:h.a,VCard:_.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:y.a,VContainer:O.a,VDataTable:w.a,VDialog:I.a,VForm:k.a,VIcon:j.a,VProgressCircular:V.a,VRow:$.a,VSpacer:P.a,VTextField:B.a,VToolbar:C.a,VToolbarTitle:E.b})}}]);