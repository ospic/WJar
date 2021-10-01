(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{599:function(e,t,n){"use strict";var r=n(0),o=(n(35),n(56),n(199),n(6),n(9),n(46),n(51),n(10),n(7),n(11),n(12),n(5)),c=n(100),l=n(116);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},724:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(6),n(11),n(9),n(12);var r=n(0),o=(n(46),n(80));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:{insurancecards:{type:Array,dafault:null},title:{type:String,default:"Active"},activelist:{type:Boolean,default:!0}},data:function(){return{search:null,title:"Insurance cards",valid:!1,editedIndex:-1,deletedialog:!1,select:null,date:(new Date).toISOString().substr(0,10),menu:!1,menu2:!1,headers:[{text:"ID",value:"id"},{text:"Insurance name",value:"insurance.name"},{text:"Client name",value:"patientName",sortable:!1},{text:"Client No.",value:"membershipNumber"},{text:"Active ? ",value:"isActive"},{text:"Gender",value:"sex"},{text:"Exipire Date",value:"expireDate"},{text:"Actions",value:"actions"}],items:[{title:"Edit",icon:"lead-pencil",icona:"lead-penci",color:"blue"},{title:"Delete",icon:"minus-circle",icona:"plus-circle",color:"red"}],dialog:!1,editedItem:{id:0,membershipNumber:"",voteNo:"",issuedDate:"",expireDate:"",codeNo:"",insuranceId:0,patientId:0}}},methods:{getSelected:function(e,t){"Edit"==e.title&&this.editItem(t),"Delete"==e.title&&(this.deletedialog=!0,this.itemtodelete=t),"View"==e.title&&this.navigateTo(t.id)},editItem:function(e){this.editedIndex=this.insurancecards.indexOf(e),this.editedItem=Object.assign({},e),delete this.editedItem.insurance,this.dialog=!0,this.editedItemId=e.id},deleteItem:function(){this.activelist?this.$store.dispatch("deactivate_patient_insurance_card",this.itemtodelete.id):this.$store.dispatch("activate_patient_insurance_card",this.itemtodelete.id),this.close()},navigateTo:function(e){this.$router.push("/insurances/".concat(e))},close:function(){var e=this;setTimeout((function(){e.$emit("update"),e.deletedialog=!1,e.dialog=!1}),this.delay_seconds)},save:function(){var e=this;this.editedIndex>-1?(this.editedItem.patientId=parseInt(this.$route.params.id),this.$store.dispatch("update_patient_insurance",this.editedItem)):(this.editedItem.patientId=parseInt(this.$route.params.id),delete this.editedItem.id,this.$store.dispatch("create_patient_insurance",this.editedItem).then((function(t){setTimeout((function(){return e.$emit("update")}),e.delay_seconds)}))),this.close()},showActive:function(){this.$emit("active")},handleClick:function(e){}},created:function(){this.$store.dispatch("get_insurance_companies")},computed:l(l({},Object(o.b)({insurances:"insurances"})),{},{formTitle:function(){return-1===this.editedIndex?"New insurance card":"Edit insurance card"}})},v=n(45),m=n(50),f=n.n(m),h=n(150),_=n(246),x=n(88),y=n(592),I=n(583),k=n(594),w=n(810),O=n(581),D=n(599),V=n(131),$=n(256),j=n(248),C=n(593),N=n(162),P=n(585),E=n(109),S=n(75),A=n(89),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.insurancecards?n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:e.headers,items:e.insurancecards,search:e.search,width:"100%"},on:{"click:row":e.handleClick},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("h2",[n("strong",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{staticClass:"mt-2",attrs:{"append-icon":"search",label:"Search...",outlined:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n           "),n("v-btn",{staticClass:"button mb-1",attrs:{medium:""},on:{click:e.showActive}},[e._v(" "+e._s(e.title))]),e._v("  \n          "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2 button",attrs:{elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.newinsurancecard")))],1):n("v-btn",e._g(e._b({staticClass:"mx-2 button",attrs:{fab:"",dark:"",small:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[e._v("\n                  mdi-plus\n                ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])])],1),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{placeholder:"e.g 11Y73M6839012V0",label:"Membership No."},model:{value:e.editedItem.membershipNumber,callback:function(t){e.$set(e.editedItem,"membershipNumber",t)},expression:"editedItem.membershipNumber"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Vote Number",autocomplete:"false",placeholder:"e.g.  1729407-121-32440"},model:{value:e.editedItem.voteNo,callback:function(t){e.$set(e.editedItem,"voteNo",t)},expression:"editedItem.voteNo"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{placeholder:"e.g 407-121-32440",label:"Code Number"},model:{value:e.editedItem.codeNo,callback:function(t){e.$set(e.editedItem,"codeNo",t)},expression:"editedItem.codeNo"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-select",{attrs:{items:e.insurances,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Insurance",required:"","persistent-hint":"","single-line":""},model:{value:e.editedItem.insuranceId,callback:function(t){e.$set(e.editedItem,"insuranceId",t)},expression:"editedItem.insuranceId"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Issued date","prepend-icon":"mdi-calendar",readonly:"",rules:[function(e){return!!e||"Date is required"}],required:""},model:{value:e.editedItem.issuedDate,callback:function(t){e.$set(e.editedItem,"issuedDate",t)},expression:"editedItem.issuedDate"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",required:""},on:{input:function(t){e.menu=!1}},model:{value:e.editedItem.issuedDate,callback:function(t){e.$set(e.editedItem,"issuedDate",t)},expression:"editedItem.issuedDate"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n                              Cancel\n                            ")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("\n                              OK\n                            ")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Expired date","prepend-icon":"mdi-calendar",readonly:"",rules:[function(e){return!!e||"Date is required"}],required:""},model:{value:e.editedItem.expireDate,callback:function(t){e.$set(e.editedItem,"expireDate",t)},expression:"editedItem.expireDate"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",required:""},on:{input:function(t){e.menu2=!1}},model:{value:e.editedItem.expireDate,callback:function(t){e.$set(e.editedItem,"expireDate",t)},expression:"editedItem.expireDate"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu2=!1}}},[e._v("\n                                Cancel\n                              ")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu2.save(e.date)}}},[e._v("\n                                OK\n                              ")])],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",medium:""},on:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:function(t){return t.stopPropagation(),e.save.apply(null,arguments)}}},[e._v(e._s(e.$t("label.button.btnsave")))])],1)],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"590"},model:{value:e.deletedialog,callback:function(t){e.deletedialog=t},expression:"deletedialog"}},[n("v-card",[e.activelist?n("v-card-title",{staticClass:"text-h5"},[e._v("\n                Deactivate this insurance\n              ")]):n("v-card-title",{staticClass:"text-h5"},[e._v("\n                Activate this insurance\n              ")]),e._v(" "),e.activelist?n("v-card-text",[e._v("Are you sure you want to deactivate this insurance.  Click 'Yes' to deactivate\n                or 'No' to ignore\n              ")]):n("v-card-text",[e._v("Are you sure you want to activate this insurance.  Click 'Yes' to activate\n                or 'No' to ignore\n              ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",medium:""},on:{click:function(t){e.deletedialog=!1}}},[e._v("\n                  No\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"warning",medium:""},on:{click:e.deleteItem}},[e._v("\n                  Yes\n                ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[n("td",{staticClass:"none-clickable",on:{click:function(e){e.stopPropagation()}}},e._l(e.items,(function(t,i){return n("v-icon",{key:i,staticClass:"mr-2",attrs:{medium:"",color:t.color},on:{click:function(n){return e.getSelected(t,r)}}},[e._v("\n            mdi-"+e._s(e.activelist?t.icon:t.icona)+"\n          ")])})),1)]}},{key:"item.isActive",fn:function(t){return[t.item.isActive?n("v-icon",{staticClass:" font-weight-black",attrs:{color:"primary"}},[e._v("\n        mdi-check\n      ")]):n("v-icon",{staticClass:" font-weight-black",attrs:{color:"primary"}},[e._v("\n        mdi-close\n      ")])]}},{key:"no-data",fn:function(){return[n("p",{staticClass:"mt-2"},[e._v("No Data available for "+e._s(e.routename))])]},proxy:!0}],null,!0)})],1):n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}})],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:h.a,VCard:_.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:y.a,VContainer:I.a,VDataTable:k.a,VDatePicker:w.a,VDialog:O.a,VForm:D.a,VIcon:V.a,VMenu:$.a,VProgressCircular:j.a,VRow:C.a,VSelect:N.a,VSpacer:P.a,VTextField:E.a,VToolbar:S.a,VToolbarTitle:A.b})}}]);