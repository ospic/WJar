(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{725:function(t,e,n){"use strict";n.r(e);n(49);var d={props:{groups:{type:Array,default:null}},data:function(){return{editedIndex:-1,editedItemId:"",dialog:!1,search:"",headers:[{text:"ID",value:"id",class:"primary"},{text:"Name",value:"name",class:"primary"},{text:"Descriptions",value:"descriptions",sortable:!1,class:"primary"},{text:"Actions",value:"actions",sortable:!1,class:"primary"}],editedItem:{id:0,name:"",descriptions:""},defaultItem:{id:0,name:"",descriptions:""}}},methods:{save:function(){var t=this;this.editedIndex>-1?(Object.assign(this.groups[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_group",this.editedItem).then((function(e){setTimeout((function(){return t.$emit("update")}),t.delay_seconds)}))):(this.groups.push(this.editedItem),this.$store.dispatch("add_new_medicine_group",this.editedItem).then((function(e){setTimeout((function(){return t.$emit("update")}),t.delay_seconds)}))),this.close()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},editItem:function(t){this.editedIndex=this.groups.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},deleteItem:function(){}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  group":"Edit medicine group"}}},o=n(48),r=n(52),l=n.n(r),c=n(157),m=n(257),v=n(90),h=n(604),f=n(595),_=n(606),I=n(593),x=n(261),k=n(137),y=n(605),V=n(597),C=n(113),w=n(77),T=n(91),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.groups,search:t.search,"items-per-page":15,"sort-by":"id",dense:""},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-toolbar-title",[n("h3",[t._v("Medicine groups")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",filled:"",height:"40"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v("  \n        "),n("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:t._u([{key:"activator",fn:function(e){var d=e.on,o=e.attrs;return[t.isMdAndUp?n("v-btn",t._g(t._b({staticClass:"button primary",attrs:{elevation:"1","x-large":"",dark:""}},"v-btn",o,!1),d),[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(t._s(t.$t("label.button.addnewgroup")))],1):n("v-btn",t._g(t._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"button",fab:"",small:"",dark:""}},"v-btn",o,!1),d),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"primary white--text"},[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pa-4 mt-4"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[n("v-text-field",{attrs:{label:"Descriptions"},model:{value:t.editedItem.descriptions,callback:function(e){t.$set(t.editedItem,"descriptions",e)},expression:"editedItem.descriptions"}})],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"button cancel",on:{click:t.close}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),n("v-btn",{staticClass:"button",on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var d=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(d)}}},[t._v(" mdi-pencil ")]),t._v(" "),n("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(e){return t.deleteItem(d)}}},[t._v("\n        mdi-delete\n      ")])]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:f.a,VDataTable:_.a,VDialog:I.a,VDivider:x.a,VIcon:k.a,VRow:y.a,VSpacer:V.a,VTextField:C.a,VToolbar:w.a,VToolbarTitle:T.b})}}]);