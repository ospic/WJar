(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{891:function(e,t,n){"use strict";n.r(t);var r=n(0),o=(n(42),n(28),n(71),n(51),n(11),n(73),n(35),n(12),n(7),n(5),n(14),n(10),n(15),n(85));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={data:function(){return{focus:"",dates:[],search:null,type:"month",time:null,menu:!1,menu2:!1,modal2:!1,valid:!0,dialog:!1,edit:!1,updateId:null,nowDate:(new Date).toISOString().slice(0,10),today:(new Date).toISOString(),timeNow:(new Date).toTimeString().split(" ")[0],typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,event:{name:null,startDate:null,startTime:null,endDate:null,endTime:null,timed:!0,description:null,departmentId:null},colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],headers:[{text:"ID",value:"id",class:"primary"},{text:"Event",value:"name",class:"primary",sortable:!1},{text:"Description",value:"description",class:"primary"},{text:"Start",value:"start",class:"primary"},{text:"End",value:"end",class:"primary"}]}},mounted:function(){this.$store.dispatch("get_calendar_events")},created:function(){this.$store.dispatch("get_calendar_events")},methods:{save_event:function(){var e=this;this.event.startDate=this.dates[0],this.event.endDate=this.dates[1],this.$refs.form.validate()&&this.$store.dispatch("create_calendar_event",this.event).then((function(){setTimeout((function(){return e.$store.dispatch("get_calendar_events")}),e.delay_seconds),setTimeout((function(){return e.focus=e.focus+" "}),e.delay_seconds)})),this.$refs.form.reset(),this.dialog=!1},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,r=e.event,o=function(){t.selectedEvent=r,t.selectedElement=n.target,t.selectedEvent.details=r.description,setTimeout((function(){t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(o,10)):o(),n.stopPropagation()},close:function(){this.$refs.form.reset(),this.edit=!1,this.dialog=!1},delete_calendar_event:function(e){var t=this;this.$store.dispatch("delete_calendar_event",e).then((function(){setTimeout((function(){return t.$store.dispatch("get_calendar_events")}),t.delay_seconds),setTimeout((function(){t.selectedOpen=!1}),10)}))},initiate_update:function(e){var t=new Date(e.start),n=new Date(e.end),r=t.toISOString().split("T")[0],o=n.toISOString().split("T")[0];this.dates[0]=r,this.dates[1]=o,this.event={name:e.name,startDate:this.dates[0],startTime:this.update_time_format(e.start),endDate:this.dates[1],endTime:this.update_time_format(e.end),timed:e.timed,description:e.eventSummary.description},this.updateId=e.eventSummary.id,this.dialog=!0,this.edit=!0},update_time_format:function(time){return time.toLocaleTimeString().slice(0,-3).split(":")[0]<10?"0"+time.toLocaleTimeString().slice(0,-3):time.toLocaleTimeString().slice(0,-3)},month_format:function(e){return("0"+e).slice(-2)},update_calendar_event:function(){var e=this;this.event.description=this.event.description,console.log(this.dates),this.event.startDate=this.dates[0],this.event.endDate=this.dates[1];var t={id:this.updateId,data:this.event};this.$store.dispatch("update_calendar_event",t).then((function(){setTimeout((function(){e.$store.dispatch("get_calendar_events"),e.close()}),e.delay_seconds)}))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({events:"events"}))},d=l,v=n(41),h=n(50),m=n.n(h),f=n(165),_=n(266),y=n(646),O=n(140),w=n(249),T=n(635),D=n(113),S=n(80),k=n(642),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto default"},[null==e.events.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:e.headers,items:e.events,search:e.search,width:"100%"},on:{"click:row":e.handleClick,"update:page":e.updatePagination},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[e._v(e._s(e.$t(e.title)))])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(t){return[t.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-icon",e._g(e._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",o,!1),r),[e._v("mdi-check")])]}}],null,!0)},[e._v(" "),n("span",[e._v("Active")])]):n("div")]}},{key:"item.description",fn:function(t){var r=t.item;return[n("v-tooltip",{attrs:{color:"primary",top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"primary lighten-1"}},[e._v(" mdi-information ")])],1)]}}],null,!0),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "),n("span",[e._v(e._s(r.description))])])]}},{key:"item.action",fn:function(t){return[t.item.ownedByMe?n("v-btn",{attrs:{color:"primary",small:""}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("mdi-pencil")]),e._v(" Edit")],1):e._e()]}}],null,!0)})],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:f.a,VCard:_.a,VDataTable:y.a,VIcon:O.a,VProgressCircular:w.a,VSpacer:T.a,VTextField:D.a,VToolbar:S.a,VTooltip:k.a})}}]);