(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{870:function(e,t,r){"use strict";r.r(t);var c=r(2),n=(r(20),{components:{"medical-service":r(716).default},data:function(){return{dialog:!1,search:"",sortDesc:!1,editedIndex:-1,valid:!0,services:[],headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Is Active",value:"isActive",sortable:!1},{text:"Price",value:"price"},{text:"Service type",value:"serviceTypeName"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",name:"",price:0,medicalServiceType:0,units:""},defaultItem:{id:"",name:"",price:0,medicalServiceType:0,units:""}}},methods:{handleClick:function(e){this.$router.push("roles/"+e.id)},editItem:function(e){this.editedIndex=this.services.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1,e.request_data()}))},request_data:function(){this.$store.dispatch("get_medical_services")},save:function(){this.editedIndex>-1?(console.log(this.editedItem),this.$store.dispatch("update_medical_service",this.editedItem)):(delete this.editedItem.id,this.$store.dispatch("create_new_medical_service",this.editedItem)),this.close()},fetch_measures:function(){this.$store.dispatch("fetch_medicine_measurements")},getMedicalServicesByTypeName:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.$get("services/name/".concat(e.$route.params.service)).then((function(t){null!==t&&(e.services=t)})).catch((function(e){console.log(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},created:function(){this.getMedicalServicesByTypeName(),this.$store.dispatch("get_medical_services")},computed:{formTitle:function(){return-1===this.editedIndex?"label.titles.newservice":"label.titles.editservice"},routename:function(){return this.$route.params.service}}}),d=r(48),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"breadcrumb "},[r("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("label.breadcrumb.dashboard")))]),e._v(" "),r("router-link",{attrs:{to:"/inventory"}},[e._v(e._s(e.$t("label.breadcrumb.services")))]),e._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/services/"+this.$route.params.service},domProps:{innerHTML:e._s(""+this.$route.params.service)}})],1),e._v(" "),r("medical-service",{attrs:{services:e.services}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);