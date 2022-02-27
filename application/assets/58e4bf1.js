(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{677:function(t,n,o){"use strict";o(280);var r=o(281);n.a=Object(r.a)("flex")},701:function(t,n,o){"use strict";o(280);var r=o(281);n.a=Object(r.a)("layout")},879:function(t,n,o){"use strict";o.r(n);var r=o(2),e=(o(21),{data:function(){return{admission:null,endrequest:{},date:(new Date).toISOString().substr(0,10)}},methods:{_get_admission_by_id:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$api.$get("admissions/".concat(t.$route.params.id,"/")).then((function(n){t.admission=n})).catch((function(t){console.log(t)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},_end_this_admission:function(){this.$store.dispatch("end_patient_admission",{serviceId:this.admission.serviceId,admissionId:this.admission.id,bedId:this.admission.bedId,endDateTime:this.date})}},created:function(){this._get_admission_by_id()},computed:{}}),c=o(42),l=o(50),d=o.n(l),v=o(159),m=o(260),_=o(60),h=o(616),f=o(265),w=o(677),C=o(137),k=o(701),I=o(243),V=o(617),$=o(608),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[null!=t.admission?o("div",{staticClass:"breadcrumb"},[o("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),o("router-link",{attrs:{to:"/patients"}},[t._v(t._s(t.$t("label.breadcrumb.patients")))]),t._v(" "),o("router-link",{attrs:{to:"/consultations/"+t.admission.serviceId}},[t._v(t._s(t.$t("label.breadcrumb.consultation"))+" ("+t._s(t.admission.serviceId)+")")]),t._v(" "),o("router-link",{staticClass:"active",attrs:{to:"/admission/"+this.$route.params.id}},[t._v("Admission ("+t._s(this.$route.params.id)+")")])],1):t._e(),t._v(" "),null==t.admission?o("v-progress-circular",{attrs:{size:"34",color:"gray"}}):o("v-card",{staticClass:"pa-3"},[o("v-card-title",[o("p",[t._v("Admission No. "+t._s(this.$route.params.id))]),t._v(" "),o("v-spacer"),t._v(" "),t.admission.isActive?o("v-btn",{staticClass:"ml-1",attrs:{color:"primary"},on:{click:t._end_this_admission}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-reorder-horizontal ")]),t._v("\n        End this admission")],1):t._e(),t._v(" "),t.admission.isActive?o("v-btn",{staticClass:"ml-1",attrs:{color:"primary",to:"/admission/"+this.$route.params.id+"/visit"}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-tag-plus ")]),t._v("\n        Visit admission")],1):t._e(),t._v(" "),o("v-btn",{staticClass:"ml-1",attrs:{color:"primary",to:"/admission/"+this.$route.params.id+"/visits"}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-eye ")]),t._v("\n        Admission Visits")],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[null!==t.admission?o("div",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("Admission ID.")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.id)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("Start Date.")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.startDate)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("End Date.")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.endDate)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("Is Active.")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.isActive)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("Ward ID.")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.wardId)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("Ward Name.")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.wardName)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("Bed ID.")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.bedId)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("Bed Name")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.bedIdentifier)+"\n                ")])])],1)],1)],1)],1):o("div",[o("div",{attrs:{height:"500",flat:""}},[o("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[o("v-flex",{attrs:{row:"","align-center":""}},[o("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"primary"}})],1)],1)],1)])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardText:_.c,VCardTitle:_.d,VCol:h.a,VDivider:f.a,VFlex:w.a,VIcon:C.a,VLayout:k.a,VProgressCircular:I.a,VRow:V.a,VSpacer:$.a})}}]);