(window.webpackJsonp=window.webpackJsonp||[]).push([[68,31],{596:function(e,t,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("3bad1cb5",content,!0,{sourceMap:!1})},617:function(e,t,n){"use strict";n(596)},618:function(e,t,n){var r=n(14)(!1);r.push([e.i,".my-input input{text-transform:uppercase}",""]),e.exports=r},635:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(6),n(11),n(9),n(12);var r=n(0),o=(n(46),n(77));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{medicines:{type:Array,default:null},showaction:{type:Boolean,default:!0}},data:function(){return{dialog:!1,search:"",medicinos:null,menu1:!1,menu2:!1,tab:null,date:(new Date).toISOString().substr(0,7),headers:[{text:"",value:"status"},{text:"Name",value:"name"},{text:"Generic Name",value:"genericName"},{text:"Store Box",value:"storeBox"},{text:"Quantity left",value:"quantity",sortable:!0},{text:"Buying price",value:"buyingPrice"},{text:"Selling price",value:"sellingPrice"},{text:"Composition",value:"compositions"},{text:"Group",value:"group.name",sortable:!0},{text:"Category",value:"category.name",sortable:!0},{text:"Company",value:"company",sortable:!1},{text:"Effects",value:"effects"},{text:"Expire Date",value:"expireOn"},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",genericName:"",company:"",compositions:"",category:"",quantity:0,group:"",units:"",buyingPrice:0,sellingPrice:0,expireDateTime:null,storeBox:""},defaultItem:{id:0,name:"",genericName:"",company:"",compositions:"",category:"",quantity:0,group:"",units:"",buyingPrice:0,sellingPrice:0,expireDateTime:null,storeBox:""}}},created:function(){this.$store.dispatch("fetch_medicine_measurements")},beforeMount:function(){},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e);var dt=e.expireDate;console.log(dt.substring(0,dt.length-8)),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id,this.editedItem.units=this.$store.getters.get_measure_by_unit(e.unit),this.editedItem.expireDateTime=dt.substring(0,dt.length-8)},deleteItem:function(e){this.medicines.indexOf(e);confirm("Are you sure you want to delete this item?")},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1,setTimeout((function(){return e.$emit("update")}),e.delay_seconds)}))},save:function(){this.editedIndex>-1?(Object.assign(this.medicines[this.editedIndex],this.editedItem),this.editedItem.group=this.editedItem.group.id,this.editedItem.category=this.editedItem.category.id,delete this.editedItem.unit,this.editedItem.price=parseFloat(this.editedItem.price+".00"),this.editedItem.units instanceof Object&&(this.editedItem.units=this.editedItem.units.symbol),this.$store.dispatch("update_medicine_product",this.editedItem)):(this.medicines.push(this.editedItem),this.$store.dispatch("add_new_medicine",this.editedItem)),this.close()},handleClick:function(e){this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:d(d({},Object(o.b)({measures:"medicinemeasurements",template:"medicine_templates"})),{},{formTitle:function(){return-1===this.editedIndex?"New medicine":"Edit medicine"}})},m=(n(617),n(34)),v=n(47),f=n.n(v),h=n(143),x=n(231),y=n(87),_=n(569),I=n(560),O=n(571),k=n(770),w=n(558),j=n(235),P=n(124),$=n(242),C=n(233),D=n(232),T=n(570),V=n(174),E=n(562),S=n(103),N=n(69),B=n(88),M=n(567),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[null==e.medicines?n("v-progress-circular",{attrs:{size:"32",indeterminate:"",color:"primary"}}):n("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.medicines,search:e.search,"items-per-page":15,"sort-by":"id",dense:""},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-toolbar-title",[n("h3",[e._v("\n            Medicines\n          ")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{label:"Search by name/company/composition","hide-details":"",rounded:"",height:"40",filled:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([e.showaction?{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[e.isMdAndUp?n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"button",elevation:"1",medium:"","prepend-icon":"mdi-plus",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewmedicine")))],1):n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"button",fab:"",small:"",dark:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-plus")])],1)]}}:null],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-toolbar",{attrs:{dark:"",flat:"",color:"primary"}},[n("v-toolbar-title",[e._v(e._s(e.formTitle))])],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Generic Name"},model:{value:e.editedItem.genericName,callback:function(t){e.$set(e.editedItem,"genericName",t)},expression:"editedItem.genericName"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Quantity"},model:{value:e.editedItem.quantity,callback:function(t){e.$set(e.editedItem,"quantity",t)},expression:"editedItem.quantity"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Buying price"},model:{value:e.editedItem.buyingPrice,callback:function(t){e.$set(e.editedItem,"buyingPrice",t)},expression:"editedItem.buyingPrice"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Company"},model:{value:e.editedItem.company,callback:function(t){e.$set(e.editedItem,"company",t)},expression:"editedItem.company"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Compositions"},model:{value:e.editedItem.compositions,callback:function(t){e.$set(e.editedItem,"compositions",t)},expression:"editedItem.compositions"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"Selling price"},model:{value:e.editedItem.sellingPrice,callback:function(t){e.$set(e.editedItem,"sellingPrice",t)},expression:"editedItem.sellingPrice"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineGroupOptions,label:"Group","item-text":"name","item-value":"id"},model:{value:e.editedItem.group,callback:function(t){e.$set(e.editedItem,"group",t)},expression:"editedItem.group"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.template.medicineCategoriesOptions,label:"Medical Category","item-value":"id"},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.name)+" - "+e._s(n.id)+"\n                      ")]}},{key:"item",fn:function(t){var n=t.item;return[e._v("\n                        "+e._s(n.id)+" - "+e._s(n.name)+"\n                      ")]}}]),model:{value:e.editedItem.category,callback:function(t){e.$set(e.editedItem,"category",t)},expression:"editedItem.category"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Effects"},model:{value:e.editedItem.effects,callback:function(t){e.$set(e.editedItem,"effects",t)},expression:"editedItem.effects"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Expired Date","prepend-icon":"mdi-calendar",readonly:"",rules:[function(e){return!!e||"Date is required"}],required:""},model:{value:e.editedItem.expireDateTime,callback:function(t){e.$set(e.editedItem,"expireDateTime",t)},expression:"editedItem.expireDateTime"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",required:""},on:{input:function(t){e.menu2=!1}},model:{value:e.editedItem.expireDateTime,callback:function(t){e.$set(e.editedItem,"expireDateTime",t)},expression:"editedItem.expireDateTime"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu2=!1}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu2.save(e.date)}}},[e._v("\n                          OK\n                        ")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.measures,"item-text":"unit","item-value":"symbol",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Measure unit",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_measures},model:{value:e.editedItem.units,callback:function(t){e.$set(e.editedItem,"units",t)},expression:"editedItem.units"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{staticClass:"my-input input",attrs:{label:"Store Box",required:""},model:{value:e.editedItem.storeBox,callback:function(t){e.$set(e.editedItem,"storeBox",t)},expression:"editedItem.storeBox"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"primary darken-1"},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.status",fn:function(t){var r=t.item;return[r.isExpiring?n("v-tooltip",{attrs:{right:"",color:r.isExpired?"red":"warning"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,c=t.attrs;return[n("v-icon",e._g(e._b({attrs:{color:r.isExpired?"red":"warning",dark:""},domProps:{innerHTML:e._s(r.isExpired?"mdi-clock-alert":"mdi-circle")}},"v-icon",c,!1),o))]}}],null,!0)},[e._v(" "),r.daysToExpire>0?n("span",{attrs:{color:"primary"}},[e._v(e._s(r.name)+" is about to expire on next\n          "+e._s(r.daysToExpire)+" days. On\n          "+e._s(r.expireOn)+"\n        ")]):e._e(),e._v(" "),r.isExpired?n("span",{attrs:{color:"primary"}},[e._v(e._s(r.name)+" is expired about "+e._s(-1*r.daysToExpire)+" days\n          ago. On\n\n          "+e._s(r.expireOn)+"\n        ")]):e._e(),e._v(" "),0===r.daysToExpire?n("span",{attrs:{color:"primary"}},[e._v(e._s(r.name)+" is going to be expired today\n        ")]):e._e()]):e._e()]}},e.showaction?{key:"item.actions",fn:function(t){var r=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n        mdi-delete\n      ")])]}}:null,{key:"no-data",fn:function(){return[n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}})]},proxy:!0}],null,!0)},[e._v(" "),e._v(" "),void 0],2)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:h.a,VCard:x.a,VCardActions:y.a,VCardText:y.c,VCol:_.a,VContainer:I.a,VDataTable:O.a,VDatePicker:k.a,VDialog:w.a,VDivider:j.a,VIcon:P.a,VMenu:$.a,VProgressCircular:C.a,VProgressLinear:D.a,VRow:T.a,VSelect:V.a,VSpacer:E.a,VTextField:S.a,VToolbar:N.a,VToolbarTitle:B.b,VTooltip:M.a})},781:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(6),n(11),n(9),n(12);var r=n(0),o=n(77);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={components:{"tab-medicine":n(635).default},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0}}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},handleTabNavigation:function(e){switch(e.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups()}},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({medicines:"medicines"}))},l=n(34),m=n(47),v=n.n(m),f=n(231),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[e._v("Pharmacy")])],1),e._v(" "),n("v-card",[n("tab-medicine",{attrs:{medicines:e.medicines,showaction:!1}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCard:f.a})}}]);