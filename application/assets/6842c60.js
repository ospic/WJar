(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{880:function(t,e,o){"use strict";o.r(e);var n=o(164),r=o(265),d=o(63),l=o(650),c=o(641),m=o(652),v=o(637),h=o(268),f=o(140),_=o(649),k=o(639),I=o(111),y=o(80),x=(o(27),o(215),{data:function(){return{search:null,dialog:!1,headers:[{text:"Group",value:"group",class:"primary"},{text:"Quantitty(in bags)",value:"counts",class:"primary",sortable:!1},{text:"Actions",value:"actions",class:"primary"}],editedItem:{id:0,group:"",added:0,total:0,counts:0}}},beforeCreate:function(){this.$store.dispatch("fetchbloodsbank")},methods:{editItem:function(t){this.editedIndex=this.groups.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.editedItemId=t.id},close:function(){this.dialog=!1},getdata:function(){this.$store.dispatch("fetchbloodsbank")},save:function(){var t=this,data={groupId:this.editedItem.id,bagsCount:this.editedItem.added};this.$store.dispatch("updatebloodgroup",data).then((function(){t.getdata(),t.close()}))}},computed:{groups:function(){return this.$store.getters.groups},summation:function(){return parseInt(this.editedItem.added)+parseInt(this.editedItem.counts)}}}),C=o(43),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"breadcrumb"},[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),e("router-link",{attrs:{to:"/inventory"}},[t._v(t._s(t.$t("label.breadcrumb.inventory")))]),t._v(" "),e("router-link",{staticClass:"active",attrs:{to:"/inventory/bed"}},[t._v(t._s(t.$t("label.breadcrumb.bloodbank")))])],1),t._v(" "),e(r.a,[e(m.a,{attrs:{headers:t.headers,items:t.groups,search:t.search,options:t.body.options,"mobile-breakpoint":"100"},scopedSlots:t._u([{key:"top",fn:function(){return[e(y.a,{attrs:{flat:"",dark:"",color:"primary"}},[e(_.a,{attrs:{"no-gutters":""}},[e(l.a,{attrs:{cols:"12",md:"2","align-self":"center"}},[e("h3",{staticClass:"title"},[t._v("Blood Bank")])]),t._v(" "),e(k.a),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(I.a,{staticClass:"pt-3",attrs:{"append-icon":"search",label:"Enter search text ...",rounded:"","single-line":"","hide-details":"",filled:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e(v.a,{attrs:{"max-width":"900px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,[e(d.d,[e("span",{staticClass:"headline"},[t._v("Update Group "+t._s(t.editedItem.group))])]),t._v(" "),e(h.a),t._v(" "),e(d.c,[e(c.a,[e(_.a,[e(l.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(I.a,{attrs:{label:"Group",readonly:""},model:{value:t.editedItem.group,callback:function(e){t.$set(t.editedItem,"group",e)},expression:"editedItem.group"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(I.a,{attrs:{value:"0",type:"number",label:"Counts(To be added)"},model:{value:t.editedItem.added,callback:function(e){t.$set(t.editedItem,"added",e)},expression:"editedItem.added"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(I.a,{attrs:{value:t.summation,type:"number",readonly:"",label:"Counts(In total)"}})],1)],1)],1)],1),t._v(" "),e(h.a),t._v(" "),e(d.a,[e(k.a),t._v(" "),e(n.a,{staticClass:"button cancel",on:{click:t.close}},[t._v(t._s(t.$t("label.button.btncancel")))]),t._v(" "),e(n.a,{staticClass:"button",on:{click:t.save}},[t._v(t._s(t.$t("label.button.btnsave")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.group",fn:function(o){var n=o.item;return[e("p",{staticClass:"font-weight-bold"},[t._v(t._s(n.group))])]}},{key:"item.actions",fn:function(o){var n=o.item;return[e(f.a,{attrs:{small:"",color:"blue darken-2"},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-lead-pencil")])]}},{key:"no-data",fn:function(){return[e("h3",[t._v("No Data available ...")])]},proxy:!0}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);