(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{293:function(t,n,e){var content=e(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("246a656c",content,!0,{sourceMap:!1})},302:function(t,n,e){"use strict";e(293)},303:function(t,n,e){var o=e(39),r=e(72),l=e(73),c=e(74),f=e(75),d=e(76),h=e(77),m=e(78),v=e(295),w=o((function(i){return i[1]})),y=r(l),x=r(c),_=r(f),k=r(d),$=r(h),S=r(m),C=r(v);w.push([t.i,'#app{\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n  text-align:center;\n  font-family:"Radikal";\n  font-weight:400;\n  width:1080px;\n  height:5760px;\n  margin:auto;\n  position:relative;\n  background-color:#191e42;\n  overflow:hidden;\n  font-size:25px\n}\n.fade-out-enter-active,.fade-out-leave-active{\n  transition:all 1s ease\n}\n.fade-out-enter,.fade-out-leave-to{\n  opacity:0\n}\n.fadeY-enter-active{\n  transition:all 1s ease\n}\n.fadeY-leave-active{\n  transition:all .3s ease\n}\n.fadeY-enter,.fadeY-leave-to{\n  opacity:0;\n  transform:translateY(50px)\n}\n.interactive{\n  display:block;\n  height:1920px;\n  position:relative;\n  z-index:1\n}\n.interactive__inner{\n  height:100%;\n  padding:50px;\n  overflow-y:auto\n}\n.gradientOverlay{\n  background:#191e42;\n  background:linear-gradient(180deg,rgba(25,30,66,0),#191e42);\n  position:absolute;\n  bottom:0;\n  left:0;\n  width:100%;\n  z-index:9\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+y+') format("woff2"),url('+x+') format("woff");\n\n  font-weight:400;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+_+') format("woff2"),url('+k+') format("woff");\n\n  font-weight:700;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+$+') format("woff2"),url('+S+') format("woff");\n\n  font-weight:300;\n\n  font-style:normal;\n\n  font-display:swap\n}\n.interactive__inner{\n  position:relative;\n  padding-bottom:200px!important;\n  overflow:auto;\n  margin-top:50px\n}\n.storyContent{\n  display:block;\n  width:100%;\n  height:100%;\n  position:relative\n}\n.buttonShape{\n  -webkit-clip-path:polygon(0 4%,100% 0,91% 45%,1% 36%);\n          clip-path:polygon(0 4%,100% 0,91% 45%,1% 36%);\n  background-color:#191e42;\n  width:511px;\n  height:400px;\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  margin:auto;\n  color:#eae650;\n  padding:35px 0;\n  font-size:3rem;\n  vertical-align:middle\n}\n.buttonShape span{\n  vertical-align:sub;\n  margin-right:50px\n}\n.buttonShape .arrow{\n  border:6px solid #eae650;\n  height:100px;\n  width:100px;\n  border-radius:100%;\n  display:inline-block;\n  position:relative;\n  vertical-align:middle\n}\n.buttonShape .arrow svg{\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  margin:auto\n}\n.buttonShape .arrow svg path{\n  fill:#eae650\n}\n.card{\n  position:relative;\n  background-color:#000;\n  display:block;\n  width:100%;\n  height:300px;\n  margin-bottom:50px;\n  background-size:cover;\n  background-repeat:no-repeat\n}\n.card:last-of-type{\n  margin-bottom:200px\n}\n.card span{\n  position:absolute;\n  left:20px;\n  bottom:20px;\n  max-width:50%\n}\n.card__next{\n  width:100px;\n  height:89px;\n  position:absolute;\n  bottom:0;\n  right:0;\n  background-image:url('+C+");\n  background-repeat:no-repeat\n}\n.card__nexta{\n  fill:#5ec4e1\n}\n.card__nextb{\n  fill:#191e42\n}",""]),t.exports=w},308:function(t,n,e){"use strict";e.r(n);e(35);var o={name:"interactive",data:function(){return{storyKey:0,story:0}},mounted:function(){},methods:{loadStories:function(){this.storyIntroTl.staggerFrom(".fadeUp",.7,{y:300,autoAlpha:0},.2)},openStory:function(t){this.storyKey++,this.$store.commit("setStory",t)}},computed:{featureColor:function(){return"iwasthere"===this.$nuxt.$route.name||"makinghistory"===this.$nuxt.$route.name?"#77cae7":"followtheonegreen"===this.$nuxt.$route.name||"againstallodds"===this.$nuxt.$route.name?"#6dd6c4":"eyeofthestorm"===this.$nuxt.$route.name?"#eb6742":"followtheoneyellow"===this.$nuxt.$route.name?"#ebe64f":"duels"===this.$nuxt.$route.name?"#8282c9":""},storys:function(){return this.$store.getters[this.$nuxt.$route.name]},view:{get:function(){return this.store.state.storySelect},set:function(t){var n=this;this.$store.commit("setView",t),"storySelect"==t&&this.$nextTick((function(){n.loadStories()}))}}}},r=(e(302),e(43)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"interactive"},["main"==t.$store.state.view?o("div",{staticClass:"interactive__inner"},[o("div",{staticClass:"buttonShape",on:{click:function(n){t.view="storySelect"}}},[o("span",[t._v("Tap to start")]),t._v(" "),o("div",{staticClass:"arrow"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"39.903",height:"30.505",viewBox:"0 0 39.903 30.505"}},[o("defs"),t._v(" "),o("path",{staticClass:"a",attrs:{d:"M47.273,33.649,34.2,46.775a2.1,2.1,0,0,1-2.94-2.993l9.5-9.5H10.1a2.1,2.1,0,0,1,0-4.2H40.763l-9.556-9.556A2.116,2.116,0,1,1,34.2,17.53L47.273,30.656A2.092,2.092,0,0,1,47.273,33.649Z",transform:"translate(-8 -16.9)"}})])])])]):t._e(),t._v(" "),"storySelect"==t.$store.state.view&&null==t.$store.state.story?o("span",{staticClass:"gradientOverlay",staticStyle:{height:"200px"}}):t._e(),t._v(" "),"storySelect"==t.$store.state.view&&null==t.$store.state.story?o("div",{staticClass:"interactive__inner"},t._l(t.storys,(function(section,i){return o("div",{key:i,staticClass:"card fadeUp text-left p-8",style:{backgroundImage:"url("+e(296)("./"+section.thumb)+")"},on:{click:function(n){return t.openStory(i)}}},[o("span",{staticClass:"text-5xl text-white",on:{click:function(n){return t.openStory(i)}}},[t._v(t._s(section.title))]),t._v(" "),o("button",{staticClass:"card__next"}),t._v(" "),o("svg",{staticClass:"card__next",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"103",height:"90.305",viewBox:"0 0 103 90.305"}},[o("defs"),t._v(" "),o("path",{attrs:{fill:t.featureColor,d:"M-1806.8,1863.326l103-90.3v90.3Z",transform:"translate(1806.797 -1773.021)"}}),t._v(" "),o("path",{staticClass:"b",attrs:{d:"M32.887,27.514,24.6,35.832a1.329,1.329,0,0,1-1.863-1.9l6.022-6.022H9.331a1.331,1.331,0,1,1,0-2.662H28.761L22.706,19.2a1.341,1.341,0,0,1,1.9-1.9l8.285,8.318A1.326,1.326,0,0,1,32.887,27.514Z",transform:"translate(50.797 37.079)"}})])])})),0):t._e(),t._v(" "),"storySelect"==t.$store.state.view&&null!==t.$store.state.story?o("story",{key:t.storyKey,staticClass:"storyContent"}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Story:e(327).default})}}]);