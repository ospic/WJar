(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(t,e,n){"use strict";var r=n(0),o=n(175);r.default.use(o.a),e.a=function(t){var e=new o.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#06065e",accent:"#0000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#9D0000",default:"#354141",milky:"#01242F",dlue:"#1520A6"},light:{primary:"#00A756",accent:"#000000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",default:"#FFFFFF",milky:"#FDFFF5",teal:"#00897B",whitish:"F5F5F5",dlue:"#1520A6",button:"#02532b"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},130:function(t,e,n){"use strict";e.a=function(t){var i,s,e,n,a,r,o=t.app;i=window,s=document,e="script",n="ga",i.GoogleAnalyticsObject=n,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(e),r=s.getElementsByTagName(e)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(a,r),ga("create","UA-111588525-6","auto"),o.router.afterEach((function(t,e){ga("set","page",t.fullPath),ga("send","pageview")}))}},167:function(t,e,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("dc093880",content,!1,{sourceMap:!1})},173:function(t,e,n){"use strict";var r={name:"DefaultLayout",components:{"footer-component":n(174).default},data:function(){return{}}},o=n(31),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{staticClass:"app"},[e("v-main",{staticClass:"ma-0 pa-0"},[e("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[e("Nuxt",{staticClass:"ma-0 pa-0"})],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},174:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{socials:[{icon:"mdi-twitter",link:"https://twitter.com/ospicapp?ref_src=twsrc%5Etfw"},{icon:"mdi-linkedin",link:null},{icon:"mdi-facebook",link:null},{icon:"mdi-instagram",link:null}]}}},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"flex transparent px-4",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"transparent"},[n("v-row",{staticClass:"mx-6",attrs:{"no-gutters":""}},[n("v-row",{attrs:{cols:"12",sm:"3"}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"black--text"},[n("h4",{staticClass:"font-weight-regular font-18"},[t._v("\n                  Address\n                ")])]),t._v(" "),n("v-list-item-subtitle",{staticClass:"mt-4"},[n("p",[t._v("26 Mwai Kibaki Rd, Dar es Salaam, Tanzania")])])],1)],1)],1),t._v(" "),n("v-row",{attrs:{cols:"12",sm:"3"}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"black--text"},[n("h4",{staticClass:"font-weight-regular font-18"},[t._v("\n                  Phone\n                ")])]),t._v(" "),n("v-list-item-subtitle",{staticClass:"mt-4"},[n("p",[t._v("Reception : +255 xxx xxx")]),t._v(" "),n("p",[t._v("Office : +255 xxx xxx")])])],1)],1)],1),t._v(" "),n("v-row",{attrs:{cols:"12",sm:"3"}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"black--text"},[n("h4",{staticClass:"font-weight-regular font-18"},[t._v("\n                  Email\n                ")])]),t._v(" "),n("v-list-item-subtitle",{staticClass:"mt-4"},[n("p",[t._v("Office : ospicinfo@gmail.com")]),t._v(" "),n("p",[t._v("\n                  Site : ospicx.com\n                ")])])],1)],1)],1),t._v(" "),n("v-row",{attrs:{cols:"12",sm:"3"}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"black--text mb-3"},[n("h4",{staticClass:"font-weight-regular font-18"},[t._v("\n                  Social\n                ")])]),t._v(" "),n("v-list-item-subtitle",{staticClass:"mt-4"},[n("p",t._l(t.socials,(function(e){return n("a",{key:e.icon,staticClass:"link",attrs:{href:e.link,target:"_blank"}},[n("v-btn",{staticClass:"mx-4 blue lighten-5",attrs:{fab:"","x-small":"",dense:"",disabled:null==e.link,icon:""}},[n("v-icon",{attrs:{size:"24px",color:"primary accent-4",small:""}},[t._v("\n                        "+t._s(e.icon)+"\n                      ")])],1)],1)})),0)])],1)],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"py-2 mt-4 grey--text"},[n("v-row",{staticClass:"mx-6",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"2"}},[n("p",[t._v("\n            All Rights Reserved by Ospic\n          ")])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}}),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("p",[n("a",{staticClass:"link",attrs:{target:"_blank",href:"http://docs.ospicx.com/"}},[t._v("Documentation\n            ")]),t._v(" "),n("a",{staticClass:"link mx-2",attrs:{target:"_blank",href:"/#"}},[t._v("Terms of Use ")]),t._v(" "),n("a",{staticClass:"link mx-2",attrs:{target:"_blank",href:"/#"}},[t._v("Legal Disclaimer\n            ")]),t._v(" "),n("a",{staticClass:"link",attrs:{href:"/privacy"}},[t._v(" Privacy Policy")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},176:function(t,e,n){n(177),t.exports=n(178)},223:function(t,e,n){"use strict";n(167)},224:function(t,e,n){var r=n(67)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},227:function(t,e,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("bc32c83c",content,!1,{sourceMap:!1})},228:function(t,e,n){var r=n(67)(!1);r.push([t.i,"a.link{text-decoration:none;color:green!important}.app{background:transparent!important;background-image:url(https://storage.googleapis.com/aims-edu/images/000/001/174/lead/64.jpg);height:70%;background-repeat:no-repeat;background-size:cover}.app footer.v-footer{background-color:#fff!important;opacity:.65;-webkit-text-decoration-color:#000;text-decoration-color:#000}header.v-sheet.v-toolbar.v-toolbar--flat.v-app-bar{background:transparent!important}",""]),t.exports=r},33:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(223),n(31)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[176,3,1,4]]]);