(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{836:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(13),n(14);var r=n(0),o=(n(43),n(29),n(84),n(51),n(9),n(72),n(34),n(5),n(8),n(83));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{focus:"",dates:[],type:"month",time:null,menu:!1,menu2:!1,modal2:!1,valid:!0,dialog:!1,edit:!1,updateId:null,nowDate:(new Date).toISOString().slice(0,10),today:(new Date).toISOString(),timeNow:(new Date).toTimeString().split(" ")[0],typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,event:{name:null,startDate:null,startTime:null,endDate:null,endTime:null,timed:!0,description:null,departmentId:null},colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.$refs.calendar.checkChange(),this.$store.dispatch("get_calendar_events")},methods:{save_event:function(){var e=this;this.event.startDate=this.dates[0],this.event.endDate=this.dates[1],this.$refs.form.validate()&&this.$store.dispatch("create_calendar_event",this.event).then((function(){setTimeout((function(){return e.$store.dispatch("get_calendar_events")}),e.delay_seconds),setTimeout((function(){return e.focus=e.focus+" "}),e.delay_seconds)})),this.$refs.form.reset(),this.dialog=!1},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,r=e.event,o=function(){t.selectedEvent=r,t.selectedElement=n.target,t.selectedEvent.details=r.description,setTimeout((function(){t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(o,10)):o(),n.stopPropagation()},close:function(){this.$refs.form.reset(),this.edit=!1,this.dialog=!1},delete_calendar_event:function(e){var t=this;this.$store.dispatch("delete_calendar_event",e).then((function(){setTimeout((function(){return t.$store.dispatch("get_calendar_events")}),t.delay_seconds),setTimeout((function(){t.selectedOpen=!1}),10)}))},initiate_update:function(e){var t=new Date(e.start),n=new Date(e.end),r=t.toISOString().split("T")[0],o=n.toISOString().split("T")[0];this.dates[0]=r,this.dates[1]=o,this.event={name:e.name,startDate:this.dates[0],startTime:this.update_time_format(e.start),endDate:this.dates[1],endTime:this.update_time_format(e.end),timed:e.timed,description:e.eventSummary.description},this.updateId=e.eventSummary.id,this.dialog=!0,this.edit=!0},update_time_format:function(time){return time.toLocaleTimeString().slice(0,-3).split(":")[0]<10?"0"+time.toLocaleTimeString().slice(0,-3):time.toLocaleTimeString().slice(0,-3)},month_format:function(e){return("0"+e).slice(-2)},update_calendar_event:function(){var e=this;this.event.description=this.event.description,console.log(this.dates),this.event.startDate=this.dates[0],this.event.endDate=this.dates[1];var t={id:this.updateId,data:this.event};this.$store.dispatch("update_calendar_event",t).then((function(){setTimeout((function(){e.$store.dispatch("get_calendar_events"),e.close()}),e.delay_seconds)}))}},computed:c(c({},Object(o.b)({eventsa:"events"})),{},{events:function(){var e=[];return this.eventsa.forEach((function(t){var summary={id:t.id,editable:t.ownedByMe,description:t.description};e.push({name:t.name,start:new Date(t.start),end:new Date(t.end),color:t.color,timed:t.timed,eventSummary:summary})})),e}})},v=n(42),m=n(50),f=n.n(m),_=n(159),h=n(832),y=n(260),k=n(60),w=n(646),x=n(616),T=n(830),O=n(833),D=n(604),S=n(265),C=n(627),$=n(137),E=n(266),V=n(160),j=n(30),P=n(271),I=n(617),L=n(77),M=n(608),F=n(113),B=n(663),H=n(78),J=n(91),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("label.breadcrumb.dashboard")))]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/calendar"}},[e._v(e._s(e.$t("label.breadcrumb.workingcalendar")))])],1),e._v(" "),n("v-card",[n("v-toolbar",{attrs:{dark:"",flat:"",color:"primary"}},[n("v-toolbar-title",[e._v(" "+e._s(e.$t("label.titles.events"))+" ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"800"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"button",attrs:{"x-large":""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.newevent")))],1)]}},{key:"default",fn:function(dialog){return[n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card-title",{staticClass:"primary",attrs:{flat:"",dark:""}},[n("span",[e._v(e._s(e.$t("label.titles.addnewevent")))])]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-3"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{autofocus:"",label:"Event name",clearable:"",rules:[function(e){return!!e||"Field is required"}],required:""},model:{value:e.event.name,callback:function(t){e.$set(e.event,"name",t)},expression:"event.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{name:"input--1",label:"Event description",hint:"Description",filled:"",rules:[function(e){return!!e||"Field is required"}],required:""},model:{value:e.event.description,callback:function(t){e.$set(e.event,"description",t)},expression:"event.description"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.dates,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.dates=t},"update:return-value":function(t){e.dates=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-combobox",e._g(e._b({attrs:{multiple:"",chips:"","small-chips":"",label:"Selet event start date and end date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}},"v-combobox",o,!1),r))]}}],null,!0),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{multiple:"","no-title":"",scrollable:"",range:"",reactive:"",min:e.nowDate},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}},[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"button cancel",attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),n("v-btn",{staticClass:"button",attrs:{text:""},on:{click:function(t){return e.$refs.menu.save(e.dates)}}},[e._v("\n                          OK\n                        ")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{sm:"12",md:"6"}},[n("v-checkbox",{attrs:{label:"Is Timed event: "+e.event.timed},model:{value:e.event.timed,callback:function(t){e.$set(e.event,"timed",t)},expression:"event.timed"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e.event.timed?n("v-text-field",{attrs:{type:"time",id:"appt",name:"appt",label:"Start time"},model:{value:e.event.startTime,callback:function(t){e.$set(e.event,"startTime",t)},expression:"event.startTime"}}):e._e()],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{attrs:{cols:"11",sm:"12",md:"6"}},[e.event.timed?n("v-text-field",{attrs:{type:"time",id:"appt",name:"appt",label:"End time",required:"",min:"12:00",max:"18:00"},model:{value:e.event.endTime,callback:function(t){e.$set(e.event,"endTime",t)},expression:"event.endTime"}}):e._e()],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{staticClass:"button cancel",on:{click:e.close}},[e._v("Cancel")]),e._v(" "),e.edit?n("v-btn",{staticClass:"button",on:{click:e.update_calendar_event}},[e._v("Update")]):n("v-btn",{staticClass:"button",on:{click:e.save_event}},[e._v("Save")])],1)],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:e.setToday}},[e._v("\n                Today\n              ")]),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-left ")])],1),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-right ")])],1),e._v(" "),e.$refs.calendar?n("v-toolbar-title",[e._v("\n                "+e._s(e.$refs.calendar.title)+"\n              ")]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",o,!1),r),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),e._v(" "),n("v-icon",{attrs:{right:""}},[e._v(" mdi-menu-down ")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("Day")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("Week")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("Month")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),e._v(" "),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary","event-height":30,events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),e._v(" "),n("v-dialog",{attrs:{"hide-overlay":"",transition:"fab-transition",scrollable:"",width:"600"},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[e.selectedEvent.eventSummary?n("v-card",{attrs:{color:"grey lighten-4","min-width":"100px",flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,flat:"",dark:""}},[n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}}),e._v(" "),n("v-spacer"),e._v(" "),e.selectedEvent.eventSummary.editable?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.initiate_update(e.selectedEvent)}}},[n("v-icon",[e._v("mdi-square-edit-outline")])],1):e._e(),e._v(" "),e.selectedEvent.eventSummary.editable?n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.delete_calendar_event(e.selectedEvent.eventSummary.id)}}},[n("v-icon",[e._v("mdi-trash-can-outline")])],1):e._e()],1),e._v(" "),n("v-card-text",[n("span",[e._v(e._s(e.selectedEvent.eventSummary.description))])]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v("\n                    Cancel\n                  ")])],1)],1):e._e()],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:_.a,VCalendar:h.a,VCard:y.a,VCardActions:k.a,VCardText:k.c,VCardTitle:k.d,VCheckbox:w.a,VCol:x.a,VCombobox:T.a,VDatePicker:O.a,VDialog:D.a,VDivider:S.a,VForm:C.a,VIcon:$.a,VList:E.a,VListItem:V.a,VListItemTitle:j.c,VMenu:P.a,VRow:I.a,VSheet:L.a,VSpacer:M.a,VTextField:F.a,VTextarea:B.a,VToolbar:H.a,VToolbarTitle:J.b})}}]);