(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{905:function(t,e,n){"use strict";n.r(e);var o=n(164),r=n(265),c=n(63),l=n(652),d=n(637),f=n(268),v=n(140),m=n(247),h=n(639),_=n(111),y=n(80),O=n(90),k=n(0),w=(n(27),n(50),n(11),n(8),n(7),n(5),n(13),n(9),n(14),n(69));function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var j={data:function(){return{dialog:!1,role:0,editedIndex:-1,departmentId:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id",class:"primary"},{text:"Name",align:"start",sortable:!1,value:"name",class:"primary"},{text:"Value",value:"value",class:"primary"},{text:"Active",value:"active",class:"primary"},{text:"Actions",value:"actions",class:"primary",sortable:!1}],editedItem:{id:"",name:"",value:!1,email:"",code:null},defaultItem:{id:"",name:"",value:!1,email:"",code:null},config:{configurationValue:0,configurationId:0},valid:!0,nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>5||"Name must be less than 5 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}},created:function(){this.$store.dispatch("get_configurations")},methods:{editItem:function(t){this.dialog=!0,this.config.configurationId=t.id,this.config.configurationValue=parseInt(t.value)},close:function(){this.dialog=!1},edit:function(){this.config.configurationValue=parseInt(this.config.configurationValue),this.$store.dispatch("update_configuration",this.config),this.close()},updatestatus:function(t){var e=this,n={action:t.active?"deactivate":"activate",id:t.id};this.$store.dispatch("update_configuration_status",n).then((function(){setTimeout((function(){return e.$store.dispatch("get_configurations")}),e.delay_seconds)}))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(w.b)({configurations:"configurations"})),watch:{dialog:function(t){var e=this;t||this.close(),setTimeout((function(){return e.$store.dispatch("get_configurations")}),this.delay_seconds)},dialogDelete:function(t){t||this.closeDelete()}}},$=j,I=n(43),component=Object(I.a)($,(function(){var t=this,e=t._self._c;return e("div",[t.configurations?e(l.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.configurations,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[e(y.a,{attrs:{flat:"",color:"primary",dark:""}},[e(O.b,[t._v(t._s(t.$t("label.titles.globalconfigurations")))]),t._v(" "),e(f.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),e(h.a),t._v(" "),e(d.a,{attrs:{"max-width":"500px",color:"red"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,[e(O.b,{staticClass:"primary",attrs:{flat:""}},[e(c.d,{staticClass:"subhead-1 pa-4 white--text"},[t._v("\n                "+t._s(t.$t("label.dialogs.editconfigurationvalue")))])],1),t._v(" "),e(c.c,{staticClass:"mt-2"},[e(_.a,{attrs:{type:"number",label:"Configuration value",min:"0",filled:""},model:{value:t.config.configurationValue,callback:function(e){t.$set(t.config,"configurationValue",e)},expression:"config.configurationValue"}})],1),t._v(" "),e(c.a,[e(h.a),t._v(" "),e(o.a,{attrs:{color:"primary"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),e(o.a,{attrs:{color:"warning"},on:{click:t.edit}},[t._v(t._s(t.$t("label.button.btnsave")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.active",fn:function(n){return[n.item.active?e(v.a,{staticClass:"font-weight-black",attrs:{color:"primary"}},[t._v("\n        mdi-check\n      ")]):e(v.a,{staticClass:"font-weight-black",attrs:{small:"",color:"primary"}},[t._v("\n        mdi-close\n      ")])]}},{key:"item.actions",fn:function(n){var r=n.item;return[e(v.a,{staticClass:"mr-2",on:{click:function(e){return t.editItem(r)}}},[t._v(" mdi-pencil ")]),t._v("\n       \n      "),e(o.a,{staticClass:"white--text",attrs:{small:"",elevation:"0",color:r.active?"red darken-2":"primary"},on:{click:function(e){return t.updatestatus(r)}}},[r.active?e(v.a,{attrs:{small:"",left:""}},[t._v(" mdi-close")]):e(v.a,{attrs:{small:"",left:""}},[t._v("mdi-check")]),t._v("\n        "+t._s(r.active?t.$t("label.button.close"):t.$t("label.button.activate"))+"\n      ")],1)]}},{key:"no-data",fn:function(){return[e("p",[t._v("No Data available")])]},proxy:!0}],null,!0)}):e(m.a,{attrs:{size:"52",color:"indigo",indeterminate:""}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);