(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{678:function(t,e,n){var content=n(756);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("316698fc",content,!0,{sourceMap:!1})},755:function(t,e,n){"use strict";n(678)},756:function(t,e,n){var o=n(14)(!1);o.push([t.i,"h2[data-v-dfa4daf6]{text-align:center;margin-top:100px;font-family:sans-serif}",""]),t.exports=o},810:function(t,e,n){"use strict";n.r(e);var o={components:{"users-component":n(777).default},data:function(){return{mode:0,switch1:!0,select:{locale:"English",lang:"en"},locales:[{locale:"English",lang:"en"},{locale:"Kiswahili",lang:"sw"},{locale:"French",lang:"fr"},{locale:"Arab",lang:"ar"}]}},methods:{toggle:function(t){"true"==="".concat(t)?(this.$vuetify.theme.dark=!0,this.$store.dispatch("change_to_dark"),document.body.style.background="#354141"):(this.$store.dispatch("change_to_light"),this.$vuetify.theme.dark=!1,document.body.style.backgroundImage="url(https://cdn.hipwallpaper.com/i/50/79/MSsZP2.jpg)")},changeLanguage:function(t){this.$i18n.locale=t}},created:function(){},computed:{isDark:function(){return this.$store.getters.isDark}}},c=(n(755),n(44)),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("users-component")}),[],!1,null,"dfa4daf6",null);e.default=component.exports}}]);